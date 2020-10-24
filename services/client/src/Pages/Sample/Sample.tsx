import React, { useState, useEffect } from 'react';

import IFrame from 'Components/IFrame';
import RenderField from 'Components/RenderFields/RenderField';

import config from 'template/config';

const Sample = () => {

	const [iframe, setIframe] = useState(null as HTMLIFrameElement | null);

	const handleChange = (field: any) => (event: any) => {
		const { value } = event.target;
		iframe?.contentWindow?.postMessage({...field, value}, '*');
	};

	useEffect(() => {
		const iframe = document.getElementById('iframe') as HTMLIFrameElement;
		iframe.addEventListener('load', () => setIframe(iframe));
	}, [])

	return (
		<div>
			{
				iframe && config.fields.map(field => (
					<RenderField
						key={field.id}
						field={field}
						onChange={handleChange(field)}
					/>
				))
			}
			<IFrame />
		</div>
	)
}

export default Sample;
