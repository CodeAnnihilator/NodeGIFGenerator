import React from 'react';

const RenderSelect = ({field, onChange}: any) => (
	<select onChange={onChange}>
		{
			field.options.map(({text, value}: any) => (
				<option key={value} value={value}>{text}</option>
			))
		}
	</select>
)

export default RenderSelect;