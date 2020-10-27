import React, { useState, useEffect } from 'react';

import IFrame from 'Components/IFrame';
import config from 'template/config';

import Fields from './Frames/Fields';

import styles from './sample.module.scss';

const Sample = () => {

	const [iframe, setIframe] = useState(null as HTMLIFrameElement | null);

	const handleCreateGIF = () => {
		iframe?.contentWindow?.postMessage('create_gif', '*');
	}

	const handleChange = (field: any) => (event: any) => {
		const { value } = event.target;
		iframe?.contentWindow?.postMessage({...field, value}, '*');
	};

	useEffect(() => {
		const iframe = document.getElementById('iframe') as HTMLIFrameElement;
		iframe.addEventListener('load', () => setIframe(iframe));
	}, [])

	const dimensions = {width: parseInt(config.width, 10), height: parseInt(config.height, 10)}

	return (
		<div className={styles.container}>
			<div onClick={handleCreateGIF} style={{display: 'none'}}>CLICK</div>
			{
				iframe && (
					<Fields
						fields={config.fields}
						onChange={handleChange}
					/>
				)
			}
			<div className={styles.rightContainer}>
				<div className={styles.buttonsContainer}>
					<div className={styles.button}>generate GIF</div>
				</div>
				<div className={styles.iframeContainer}>
					<IFrame dimensions={dimensions} />
				</div>
			</div>
		</div>
	)
}

export default Sample;
