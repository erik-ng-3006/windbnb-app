import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import styles from './LocationListItem.module.css';

const LocationListItem = (props) => {
	const cityArr = props.stays.map((stay) => stay.city);
	const uniqCityArr = cityArr.filter((city, pos) => {
		return cityArr.indexOf(city) === pos;
	});

	const onClickHandle = () => {};

	return (
		<>
			{uniqCityArr.map((city) => {
				return (
					<li
						key={Math.random()}
						className={styles.location}
						onClick={onClickHandle}
					>
						<LocationOnIcon className={styles.icon} />
						{city}, Finland
					</li>
				);
			})}
		</>
	);
};

export default LocationListItem;
