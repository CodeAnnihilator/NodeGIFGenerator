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
		background-repeat: no-repeat;
		background-size: contain;
		opacity: 1;
		z-index: 1;
		display: flex;
		flex: 1;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-position: center;
	}

	.text {
		font-size: 50px;
		z-index: 5;
    	position: relative;
	}

	.pulse {
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		from {color: red}
		to {color: black}
	}

	.bg_gradient {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -1;

		background: linear-gradient(138deg, #ff4646, #0081ff);
		background-size: 400% 400%;
	
		-webkit-animation: bgGradient 4s ease infinite;
		-moz-animation: bgGradient 4s ease infinite;
		animation: bgGradient 4s ease infinite;
	}
	
	@-webkit-keyframes bgGradient {
		0%{background-position:7% 0%}
		50%{background-position:94% 100%}
		100%{background-position:7% 0%}
	}
	@-moz-keyframes bgGradient {
		0%{background-position:7% 0%}
		50%{background-position:94% 100%}
		100%{background-position:7% 0%}
	}
	@keyframes bgGradient {
		0%{background-position:7% 0%}
		50%{background-position:94% 100%}
		100%{background-position:7% 0%}
	}

`