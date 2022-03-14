import React, { useState } from 'react';
import styles from './FilterDrawer.module.css';
import Modal from '../../UI/Modal';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import LocationListItem from './LocationList/LocationListItem';
import GuestsController from './GuestsController/GuestsController';

const FilterDrawer = (props) => {
	const [isShownLocation, setIsShownLocation] = useState(false);
	const [isShownGuests, setIsShownGuests] = useState(false);
	const [locationInput, setLocationInput] = useState('');
	const [guestsInput, setGuestsInput] = useState(0);

	const handleLocationInputFocus = () => {
		setIsShownLocation(true);
		setIsShownGuests(false);
	};

	const handleGuestsInputFocus = () => {
		setIsShownLocation(false);
		setIsShownGuests(true);
	};

	const closeHandle = () => {
		props.onClose(false);
	};

	const locationHandleChange = (e) => {
		setLocationInput(e.target.value);
	};

	const guestsHandleChange = (e) => {
		setGuestsInput(e.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (locationInput.trim() === '') {
			return;
		}
		props.onFilter(
			props.stays.filter((stay) => {
				return (
					locationInput
						.toLowerCase()
						.includes(stay.city.toLowerCase()) &&
					stay.maxGuests > guestsInput
				);
			})
		);

		props.onClose(false);
	};

	return (
		<Modal onClose={props.onClose}>
			<div className={styles.flex}>
				<h2>Edit your search</h2>
				<CloseIcon
					onClick={closeHandle}
					className={styles['close-button']}
				/>
			</div>
			<form
				onSubmit={handleFormSubmit}
				className={styles['form-control']}
			>
				<div className={styles.inputs}>
					<div className={styles.input}>
						<label htmlFor='location'>LOCATION</label>
						<input
							id='location'
							placeholder='Add location'
							onFocus={handleLocationInputFocus}
							onChange={locationHandleChange}
							value={locationInput}
							autoFocus
						/>
					</div>
					<div className={styles.input}>
						<label htmlFor='guests'>GUESTS</label>
						<input
							type='number'
							id='guests'
							placeholder='Add guests'
							onFocus={handleGuestsInputFocus}
							onChange={guestsHandleChange}
							value={guestsInput}
						/>
					</div>
					<div></div>
				</div>

				{isShownLocation && (
					<ul>
						<LocationListItem
							stays={props.stays}
							onItemLocationClick={setLocationInput}
						/>
					</ul>
				)}

				{isShownGuests && (
					<GuestsController onCalculate={setGuestsInput} />
				)}

				<div className={styles.center}>
					<button className={styles.button} type='submit'>
						<SearchIcon className={styles.icon} />
						Search
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default FilterDrawer;
