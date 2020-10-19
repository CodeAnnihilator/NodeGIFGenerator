const fs = require('fs');
const puppeteer = require('puppeteer');
const GIFEncoder = require('gifencoder');
const PNG = require('png-js');

const HTML = require('./template/html.js');

const dimensions = {
	clip: {
		width: 1024,
		height: 1024,
		x: 0,
		y: 0
	}
};

function decode(png) {
	return new Promise(res => png.decode(pixels => res(pixels)));
}

async function gifAddFrame(page, encoder) {
	const pngBuffer = await page.screenshot(dimensions);
	const png = new PNG(pngBuffer);
	await decode(png).then(pixels => encoder.addFrame(pixels));
}

(async () => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const encoder = new GIFEncoder(1024, 768);

	page.setViewport({ width: 1024, height: 1024 });
	await page.setContent(HTML);

	encoder
		.createWriteStream()
		.pipe(fs.createWriteStream('test.gif'));

	encoder.start();
	encoder.setRepeat(0);
	encoder.setDelay(150);
	encoder.setQuality(10);

	for (let i = 0; i < 10; i++) {
		await gifAddFrame(page, encoder);
	}

	encoder.finish();

	await browser.close();

})();

