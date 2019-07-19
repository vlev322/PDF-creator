var fs = require('fs');
var PdfPrinter = require('pdfmake');

var fonts = {
	Roboto: {
		normal: './fonts/Ubuntu-Regular.ttf',
		bold: './fonts/Ubuntu-Bold.ttf',
		italics: './fonts/Ubuntu-Italic.ttf',
		bolditalics: './fonts/Ubuntu-BoldItalic.ttf',
		light: './fonts/Ubuntu-Light.ttf'
	}
};
var printer = new PdfPrinter(fonts);

let logo = {
	image: 'img/dp.png',
	fit: [100, 100],
	alignment: 'right',
	margin: [20, 30, 15, 0]
}

const headerTitle = (text) => {
	return {
		text: [
			text
		],
		style: 'headerTitle'
	}
}

const headerInfo = (init, valid, to) => ({
	text: [
		`Offer generated on `, {
			text: init,
			bold: true
		}, `, offer valid it `, {
			text: valid,
			bold: true
		}, ` \n
		`, {
			text: 'From: ',
			bold: true,
			fontSize: 12,
			margin: [100, 0, 0, 0]
		}, `VĮ Lietuvos oro uostai \n`, {
			text: 'To: ',
			bold: true,
			fontSize: 12
		}, `${to}`,
	],
	style: 'headerText'
})

const headerGreeting = (receiver, period) => {
	return {
		alignment: 'justify',
		columns: [{
			width: 500,
			text: [`\tHello,\n\nThis is automatically generated offer for advertising campaign for`, {
				text: 'Vilnius',
				bold: true
			}, `, `, {
				text: receiver,
				bold: true
			},` airports during period `, {
				text: period,
				bold: true
			},`.`],
			margin: [0, 25, 20, 30]
		}],
		style: 'subHeader'
	}
}

const tableFooter = sum => {
	const pvm = sum * 0.21;
	const sumPvm = pvm + sum;
	const output = [
		[{
				text: 'Addition coef:',
				style: 'tableHeader'
			},
			'5%'
		],
		[{
				text: 'Suma (be PVM):',
				style: 'tableHeader'
			},
			`${sum}`
		],
		[{
				text: 'PVM (21%):',
				style: 'tableHeader'
			},
			`${pvm}`
		],
		[{
				text: 'Suma su PVM:',
				style: 'tableHeader'
			},
			`${sumPvm}`
		],
	];
	return output;
}
const footer = {
	columns: [{
			text: 'Valstybės įmonė\nRodūnios kelias 10A\n02189 Vilnius'
		},
		{
			text: 'Tel. (8 5) 273 9326\nFaks. (8 5) 232 9122\nEl. p. info@ltou.lt\nwww.ltou.lt'
		},
		{
			text: 'Duomenys kaupiami ir saugomi\nJuridinių asmenų registre\nKodas 120864074'
		}
	],
	margin: [40, -35]
}
var docDefinition = {
	header: logo,
	footer: footer,
	content: [
		headerTitle(`ADVERTISING CAMPAIGN COMMERCIAL OFFER`),
		headerInfo('2018-10-24', '2018-12-24', 'UAB “Jūrmala”'),
		headerGreeting('Vilnius, Kaunas and Palanga', '2019-01-01 to 2019-08-20'),
		{
			table: {
				dontBreakRows: true,
				widths: [80, 35, 75, 80, 57, 65, 55],
				body: [
					[{
							text: 'Advertising Placement number.',
							style: 'tableHeader'
						},
						{
							text: 'Size',
							style: 'tableHeader'
						},
						{
							text: 'Impresions / display time',
							style: 'tableHeader'
						},
						{
							text: 'Advertising placement location',
							style: 'tableHeader'
						},
						{
							text: 'Price for one month excl. VA',
							style: 'tableHeader'
						},
						{
							text: 'Period',
							style: 'tableHeader'
						},
						{
							text: 'Price for whole period excl. VAT',
							style: 'tableHeader'
						}
					],
					[
						'Lightbox V',
						'1920x1080',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						{
							text: '150'
						}
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						['Adipisicing aute dolore ipsum elit id excepteur et consectetur.',
							{

								image: 'img/morder.png',
								fit: [86, 86],
							}
						],
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
					[
						'Lightbox V-LB-03-01',
						'3x1,5m',
						'24/7',
						{
							image: 'img/morder.png',
							fit: [86, 86]
						},
						'150',
						'2018.10.15-2019.11.16',
						'150'
					],
				]
			}
		},
		{
			table: {
				widths: [130, 55],
				body: tableFooter(1730)
			},
			margin: [306, 0, 0, 0]
		}
	],
	pageMargins: [40, 80, 40, 35],
	pageBreakBefore: function (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
		return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
	},
	styles: {
		headerText: {
			fontSize: 10,
			light: true,
		},
		tableHeader: {
			bold: true,
			fontSize: 10,
			color: 'black'
		},
		headerTitle: {
			bold: true,
			fontSize: 14,
			margin: [0, 0, 0, 25]
		},
		boldStyle: {
			bold: true,
		}
	}
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('Awesome.pdf'));
pdfDoc.end();