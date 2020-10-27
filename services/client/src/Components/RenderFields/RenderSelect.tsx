import React from 'react';

import Label from './Label';

import styles from './renderSelect.module.scss';

const RenderSelect = ({field, onChange}: any) => (
	<div className={styles.outerContainer}>
		{ field.label && <Label text={field.label} /> }
		<select className={styles.container} onChange={onChange}>
			{
				field.options.map(({text, value}: any) => (
					<option key={value} value={value}>{text}</option>
				))
			}
		</select>
	</div>
)

export default RenderSelect;