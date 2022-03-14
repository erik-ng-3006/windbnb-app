import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				created by
				<a
					href='https://github.com/erik-ng-3006'
					target='_blank'
					rel='noreferrer'
				>
					erikng
				</a>
				- devChallenges.io
			</div>
		</footer>
	);
};

export default Footer;
