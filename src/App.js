import React, { useState } from 'react';
import HeaderTitle from './Components/Header/HeaderTitle';
import SearchBar from './Components/SearchBar/SearchBar';
import Footer from './Components/Footer/Footer';
import MainContainer from './Components/MainContainer/MainContainer';
import styles from './App.module.css';
import apartments from './store/stays.json';
import FilterDrawer from './Components/FilterDrawer/FilterDrawer';
const App = () => {
	const [staysState, setStaysState] = useState(apartments);
	const [isShownFilterDrawer, setIsShownFilterDrawer] = useState(false);
	return (
		<>
			{isShownFilterDrawer && (
				<FilterDrawer
					onClose={setIsShownFilterDrawer}
					onFilter={setStaysState}
					stays={staysState}
				/>
			)}
			<div className={styles.flex}>
				<HeaderTitle />
				<SearchBar onClick={setIsShownFilterDrawer} />
			</div>
			<MainContainer stays={staysState} />
			<Footer />
		</>
	);
};

export default App;
