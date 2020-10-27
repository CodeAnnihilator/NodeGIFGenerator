export default {
	width: '800',
	height: '800',
	fields: [
		{
			id: 'movingTextInput',
			identity: 'input',
			type: 'text',
			defaultValue: '',
			placeholder: 'enter your text here...',
			label: 'moving text',
		},
		{
			id: 'movingTextAnimationDirection',
			identity: 'select',
			label: 'animation direction',
			defaultValue: '',
			options: [
				{
					value: '',
					text: 'no animation'
				},
				{
					value: 'down',
					text: 'move down'
				},
				{
					value: 'up',
					text: 'move up'
				},
				{
					value: 'right',
					text: 'move right'
				},
				{
					value: 'left',
					text: 'move left'
				}
			]
		},
		{
			id: 'toggleTextPulsing',
			identity: 'select',
			label: 'toggle text pulsing',
			defaultValue: '',
			options: [
				{
					value: '',
					text: 'no pulsing'
				},
				{
					value: 'pulse',
					text: 'pulsing'
				}
			]
		},
		{
			id: 'bgImage',
			identity: 'input',
			type: 'text',
			defaultValue: '',
			placeholder: 'place image link here...',
			label: 'bg image',
		},
		{
			id: 'bgGradient',
			identity: 'select',
			label: 'toggle gradient animation',
			defaultValue: '',
			options: [
				{
					value: '',
					text: 'no gradient'
				},
				{
					value: 'bg_gradient',
					text: 'gradient'
				}
			]
		},
	]
}