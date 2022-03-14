import React from 'react';
import styles from './MainHeader.module.css';
const MainHeader = (props) => {
	return (
		<div className={styles.header}>
			<h2>Stays in Finland</h2>
			<div>{props.stays.length}+ stays</div>
		</div>
	);
};

export default MainHeader;
