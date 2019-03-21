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
	margin: [0, 25, 15, 0]
}

const headerInfo = (init, valid, to) => {
	return {
		text: [
			`ADVERTISING CAMPAIGN COMMERCIAL OFFER \n
			Offer generated on ${init}, offer valid it ${valid} \n
			From: VĮ Lietuvos oro uostai \n
			To: ${to}`
		],
		style: 'headerText'
	}
}

const headerGreeting = (receiver, period) => {
	return {
		alignment: 'justify',
		columns: [{
			width: 400,
			text: [`\tHello,\n
			This is automatically generated offer for advertising campaign for Vilnius, ${receiver}
				airports during period ${period}.`],
			margin: [0, 25, 20, 30]
		}],
		style: 'subHeader'
	}
}

const tableHeader = [{
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
];

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

function tableContent(data) {
	let rows = [];
	rows = rows.push([])
	return rows;
}

const test = {
	text: 'lalala',
	image: 'img/morder.png',
	fit: [86, 86],
}

var docDefinition = {
	header: logo,
	footer: footer,
	content: [
		headerInfo('2018-10-24', '2018-12-24', 'UAB “Jūrmala”'),
		headerGreeting('Vilnius, Kaunas and Palanga', '2019-01-01 to 2019-08-20'),
		// {
		// 	table: {
		// 		widths: [70, 45, 75, 80, 57, 65, 55],
		// 		body: [tableHeader]
		// 	}
		// },
		{
			table: {
				// headerRows: 1,
				dontBreakRows: true,
				// keepWithHeaderRows: 1,
				widths: [70, 45, 75, 80, 57, 65, 55],
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
	pageMargins: [40, 60, 40, 35],
	pageBreakBefore: function (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
		return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
	},
	styles: {
		headerText: {
			fontSize: 14,
			light: true,
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		}
	}
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('Awesome.pdf'));
pdfDoc.end();