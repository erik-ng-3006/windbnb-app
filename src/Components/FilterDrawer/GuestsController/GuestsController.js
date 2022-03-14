import React from 'react';
import styles from './GuestsController.module.css';
import GuestCalculator from './GuestCalculator/GuestCalculator';

const GuestsController = (props) => {
	return (
		<div className={styles.controller}>
			<GuestCalculator
				title='Adults'
				age='Ages 13 or above'
				onCal={props.onCalculate}
			/>
			<GuestCalculator
				title='Children'
				age='Ages 2-12'
				onCal={props.onCalculate}
			/>
		</div>
	);
};

export default GuestsController;
