import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Apartments from './Apartments/Apartments';

const MainContainer = (props) => {
	return (
		<main>
			<MainHeader stays={props.stays} />
			<Apartments stays={props.stays} />
		</main>
	);
};

export default MainContainer;
