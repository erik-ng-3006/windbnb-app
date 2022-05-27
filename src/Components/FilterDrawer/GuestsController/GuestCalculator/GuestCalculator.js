import React, { useReducer } from 'react';
import styles from './GuestCalculator.module.css';

const initialCount = { count: 0 };

const countReducer = (state, action) => {
	switch (action.type) {
		case 'PLUS':
			return { count: state.count + 1 };
		case 'MINUS':
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const GuestCalculator = (props) => {
	const minusBtnHandle = () => {
		dispatchCountState({ type: 'MINUS' });
		props.onCal((prevState) => prevState - 1);
	};

	const plusBtnHandle = () => {
		dispatchCountState({ type: 'PLUS' });
		props.onCal((prevState) => prevState + 1);
	};

	const [countState, dispatchCountState] = useReducer(
		countReducer,
		initialCount
	);

	return (
		<div className={styles.calculator}>
			<h3>{props.title}</h3>
			<p>{props.age}</p>
			<div className={styles.actions}>
				<button
					onClick={minusBtnHandle}
					disabled={countState.count === 0}
					type='button'
				>
					-
				</button>
				<div>{countState.count}</div>
				<button onClick={plusBtnHandle} type='button'>
					+
				</button>
			</div>
		</div>
	);
};

export default GuestCalculator;
