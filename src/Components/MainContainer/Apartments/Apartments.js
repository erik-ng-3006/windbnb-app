import React from 'react';
import styles from './Apartments.module.css';
import StarIcon from '@mui/icons-material/Star';

const Apartments = (props) => {
	return (
		<div className={styles['grid-container']}>
			{props.stays.map((stay) => {
				return (
					<div key={Math.random()} className={styles.stays}>
						<img src={stay.photo} alt='featured apartment'></img>
						<div className={styles.info}>
							{stay.superHost && (
								<p className={styles.superHost}>Super Host</p>
							)}
							<p>
								{stay.type}. <span>{stay.maxGuests} beds</span>
							</p>
							<p className={styles.rating}>
								<StarIcon className={styles.icon} />
								{stay.rating.toFixed(2)}
							</p>
						</div>
						<h3>{stay.title}</h3>
					</div>
				);
			})}
		</div>
	);
};

export default Apartments;
