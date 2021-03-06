import React, { useEffect } from 'react';

import html from 'template/html';
import css from 'template/css';
import script from 'template/script';
import store from 'template/store';

import styles from './iFrame.module.scss';

const srcDoc = `
	<html>
		<body>${html}</body>
		<style>${css}</style>
		<script>${store}</script>
		<script>${script}</script>
	</html>
`;

const IFrame = ({ dimensions }: any) => {

	useEffect(() => {

		// const handler = (event: any) => {
		// 	const data = JSON.parse(event.data)
		// 	//console.log("Hello World?", data)
		// }

		// window.addEventListener('message', handler)

		// const iframe = document.getElementById('iframe') as HTMLIFrameElement;

		// iframe.addEventListener('load', () => {
		// 	// iframe.contentWindow?.postMessage('DDD', '*');
		// })

	}, [])

	return (
		<div style={dimensions} className={styles.container}>
			<iframe
				id='iframe'
				srcDoc={srcDoc}
				title='output'
				sandbox='allow-scripts'
				frameBorder='0'
				width='100%'
				height='100%'
			/>
		</div>
	)
}

export default IFrame;