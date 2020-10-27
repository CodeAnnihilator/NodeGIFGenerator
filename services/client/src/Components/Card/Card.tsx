import React from 'react';

import styles from './card.module.scss';

const Card = ({
	img
}: any) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImg} style={{backgroundImage: `url(${img})`}} />
		</div>
	)
}

export default Card;