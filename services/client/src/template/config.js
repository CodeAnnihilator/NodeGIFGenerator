export default {
	fields: [
		{
			id: 'movingTextInput',
			identity: 'input',
			type: 'text',
			value: '',
			placeholder: 'enter your text here...',
			label: 'moving text',
		},
		{
			id: 'movingTextAnimationDirection',
			identity: 'select',
			label: 'animation direction',
			value: '',
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
			value: '',
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
			value: '',
			placeholder: 'place image link here...',
			label: 'bg image',
		}
	]
}