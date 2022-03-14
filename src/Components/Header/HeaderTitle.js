import React from 'react';
import styles from './HeaderTitle.module.css';
import logoPng from '../../asset/logo.png';
import logoSvg from '../../asset/logo.svg';
const HeaderTitle = () => {
	return (
		<header className={styles.title}>
			<object data={logoSvg} type='image/svg+xml'>
				<img src={logoPng} alt='logo'></img>
			</object>
		</header>
	);
};

export default HeaderTitle;
