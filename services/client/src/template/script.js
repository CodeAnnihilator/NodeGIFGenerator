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









// const gs1_name = document.getElementById('gs1_name');

// gs1_name.addEventListener('change', (event) => {
// 	const gs1_result = document.getElementById('gs1_result');
// 	gs1_result.style.backgroundImage = 'url(' + event.target.value + ')';
// })

// const gs2_options = document.getElementById('gs2_options');
// gs2_options.addEventListener('change', (event) => {
// 	const value = event.target.value;
// 	!value.length
// 		? movingText.classList.remove('pulse')
// 		: movingText.classList.add('pulse')
// });