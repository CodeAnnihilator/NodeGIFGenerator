import React from 'react';

import Label from './Label';

import styles from './renderInput.module.scss';

const RenderInput = ({field, onChange}: any) => {
	return (
		<div className={styles.outerContainer}>
			{ field.label && <Label text={field.label} /> }
			<input
				{...field}
				className={styles.container}
				onChange={onChange}
			/>
		</div>
	)
};

export default RenderInput;