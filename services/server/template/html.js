const template = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<style>

		.demo {
			background-color: hsl(207, 9%, 19%);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100vh;
			width: 100%;
		}

		.perspective-container {
			perspective: 800px;
		}
		
		.card {
			background-image: url(https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif);
			background-size: cover;
			box-shadow: 0 0 140px 10px rgba(0,0,0,.5);
			position: relative;
			height: 300px;
			width: 500px;
			overflow: hidden;
			--sheenX: 0;
			--sheenY: 0;
		}
		
		.card::after {
			content: "";
			position: absolute;
			top: -400px;
			right: -400px;
			bottom: -400px;
			left: -400px;
			background: linear-gradient(217deg, rgba(255,255,255,0), rgba(255,255,255,0) 35%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%);
			transform: translateX(var(--sheenX)) translateY(var(--sheenY));
		}

		</style>
	</head>
		<body>
			<div class="demo">
				<div class="perspective-container">
					<div class="card"></div>
				</div>
			</div>
		</body>
	</html>
`

module.exports = template;