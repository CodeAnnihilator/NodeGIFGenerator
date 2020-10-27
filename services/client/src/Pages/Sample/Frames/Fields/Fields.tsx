import React from 'react';

import RenderField from 'Components/RenderFields/RenderField';

import styles from './fields.module.scss';

const Fields = ({
	fields,
	onChange
}: any) => (
	<div className={styles.container}>
		{
			fields.map((field: any) => (
				<RenderField
					key={field.id}
					field={field}
					onChange={onChange(field)}
				/>
			))
		}
	</div>
)

export default Fields;