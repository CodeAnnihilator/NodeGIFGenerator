import React from 'react';

import Card from 'Components/Card';

import images from './dummyData';

import styles from './samples.module.scss';

import 'index.css';

const  Samples = () => {
  return (
	<div className={styles.container}>
		<div className={styles.cardsContainer}>
			{
				images.map((img, index) => (
					<Card key={index} img={img} />
				))
			}
		</div>
	</div>
  );
}

export default Samples;