import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
	return (
		<form className={styles.control} onClick={props.onClick}>
			<input placeholder='Add location' />
			<input placeholder='Add guests' />
			<button>
				<SearchIcon className={styles.icon} />
			</button>
		</form>
	);
};

export default SearchBar;
