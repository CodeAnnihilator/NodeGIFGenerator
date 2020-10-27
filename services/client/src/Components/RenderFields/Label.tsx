import React from 'react';

import styles from './label.module.scss';

const Label = ({ text }: any) => (
	<div className={styles.container}>{text}</div>	
)

export default Label;