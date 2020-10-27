export default `
	window.addEventListener("message", ({data}) => {
		if (data === 'create_gif') {
			const documentCopy = document.body.cloneNode(true);
			const scripts = documentCopy.getElementsByTagName('script');
			console.log(scripts.length)
			console.log(documentCopy)
		}
	}, false); // --> receive message from parent
`