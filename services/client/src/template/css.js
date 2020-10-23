export default `

	.down { animation: down 2s infinite; }
	.up { animation: up 2s infinite; }
	.right { animation: right 2s infinite; }
	.left { animation: left 2s infinite; }

	@keyframes down {
		from {transform: translateY(0px);}
		to {transform: translateY(200px);}
	}

	@keyframes up {
		from {transform: translateY(200px);}
		to {transform: translateY(0px);}
	}

	@keyframes right {
		from {transform: translateX(0px);}
		to {transform: translateX(200px);}
	}

	@keyframes left {
		from {transform: translateX(200px);}
		to {transform: translateX(0px);}
	}

	.bg {
		width: 500px;
		height: 500px;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.text {
		font-size: 50px;
	}

	.pulse {
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		from {color: red}
		to {color: black}
	}
`