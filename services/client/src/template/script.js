export default `

	const movingText = document.getElementById('moving_text');

	const handleOptionChange = (data, node) => {
		const options = data.options.map(option => option.value);
		const classes = Array.from(node.classList);
		for (let i = 0; i < classes.length; i++) {
			const match = options.some(option => option === classes[i]);
			if (match) node.classList.remove(classes[i])
		}
		if (data.value !== '') node.classList.add(data.value);
		const keyFrames = Array.from(node.classList).filter(text => text !== 'text');
		node.style.animation = keyFrames.map(animation => animation + ' 1s infinite').join(', ');
		console.log(keyFrames.map(animation => animation + '1s infinite'))
	}

	const handleBgImageChange = (data) => {
		const bgImage = document.getElementById('bg_image');
		bgImage.style.backgroundImage = 'url(' + data.value + ')';
	}

	window.addEventListener("message", ({data}) => {
		if (data.id === 'movingTextInput') return movingText.innerHTML = data.value;
		if (data.id === 'movingTextAnimationDirection') return handleOptionChange(data, movingText);
		if (data.id === 'toggleTextPulsing') return handleOptionChange(data, movingText);
		if (data.id === 'bgImage') return handleBgImageChange(data)
	}, false); // --> receive message from parent

	// window.top.postMessage(JSON.stringify('RRRRRR'), '*'); // --> send message to parent

`;