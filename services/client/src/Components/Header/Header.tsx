import React from 'react';

import gifImg from 'assets/icons/gif.svg';

import styles from './header.module.scss';

const Header = () => (
	<div className={styles.headerContainer}>
		<div className={styles.logoContainer}>
			<img alt='' className={styles.logo} src={gifImg} />
			<div>
				<span className={styles.logoText}>gif</span>
				<span>station</span>
			</div>
		</div>
	</div>
)

export default Header;