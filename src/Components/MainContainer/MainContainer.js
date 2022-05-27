import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Apartments from './Apartments/Apartments';

const MainContainer = (props) => {
	return (
		<main style={{ marginBottom: '3rem' }}>
			<MainHeader stays={props.stays} />
			<Apartments stays={props.stays} />
		</main>
	);
};

export default MainContainer;
