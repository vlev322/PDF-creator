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

const headerTitle = {
	columns: [{
			text: 'Advertising Campaign \nCommertical Offer',
			style: 'headerTitle'
		},
		{
			image: 'img/PADS4.Logo.png',
			alignment: 'right',
			margin: [0, 30, 30, 0]
		}
	]
}

const borderStyle = ({
	hLineColor: '#DEDEDE',
	vLineColor: '#DEDEDE',
	vLineWidth: (i, node) => (i === 0 || i === node.table.body.length) ? 0.5 : 1
})

const campExample = {
	type: 'LightBox',
	id: '#DF341Jd',
	resolution: '1920*1080',
	description: {
		text: `The sreen at the airport outside the Schengen
		area, at the A8 gate, is seen more than 5 000
		passengers per month.`,
		img: 'img/morder.jpg'
	},
	price: '€ 0.05',
	name: 'Loren ipsum',
	percent: `1.2
	0.8
	1.2
	0.8
	0.8`,
	wholePrice: '€ 999'
}

const campExample_1 = {
	type: 'Lighting',
	id: '#KJGVSDBVd',
	resolution: '720*1080',
	description: {
		text: `ThMinim dolor veniam amet consectetur aliquip culpa nostrud nisi id sit nostrud cupidatat. Esse fugiat enim veniam nisi. Laboris velit incididunt laboris laborum cupidatat quis et. In id Lorem est aliqua velit consequat laboris in ullamco. month.`,
		img: 'img/flower.png'
	},
	price: '€ 0.105',
	name: 'Lalaby videoplay',
	percent: `1.2
	0.8
	5.1
	1.6
	0.8`,
	wholePrice: '€ 9809'
}

const campExample_2 = {
	type: 'VideoBoard',
	id: '#YE34BBR',
	resolution: '1920*720',
	description: {
		text: `Cil occaecat in. Cid ullamco enim velit. Aute magna laborum laborum laboris sit nostrud officia enim deserunt do ipsum magna. Elit cupidatat sint cupidatat ipsum amet in cillum est esse et ea qui.`,
		img: 'img/dev.jpeg'
	},
	price: '€ 3.2',
	name: 'Adver leptops',
	percent: `0.2
	2.35
	7.23
	2.67
	1.5`,
	wholePrice: '€ 449'
}

const headerTitle_1 = text => ({
	text,
	style: 'campaignListHeader'
})

const accentColorFooter = (titleText, text) => (
	[{
			text: titleText + '\t',
			style: 'smallAccentBold'
		},
		{
			text: text + '\n\n',
			style: 'small'
		}
	]
)

const headerTable = (header, content) => ({
	style: 'headerTable',
	table: {
		widths: ['*', 25, '*', 25, '*'],
		body: [
			[{
					text: header[0],
					style: 'tableHeader',
					border: [false, true, false, false]
				},
				{
					text: ''
				},
				{
					text: header[1],
					style: 'tableHeader',
					border: [false, true, false, false]
				},
				{
					text: ''
				},
				{
					text: header[2],
					style: 'tableHeader',
					border: [false, true, false, false]
				},
			],
			[
				content[0],
				'',
				content[1],
				'',
				content[2]
			]
		]
	},
	layout: {
		hLineWidth: (i, node) => (i === 0 || i === node.table.body.length) ? 0.5 : 0,
		hLineColor: (i, node) => (i === 0 || i === node.table.body.length) ? '#DEDEDE' : '',
		paddingTop: () => 5,
		defaultBorder: false
	}
});

function contentTable(header, content) {
	return ({
		style: 'campaignListTable',
		table: {
			dontBreakRows: true,
			widths: [320, '*', '*'],
			body: [
				[{
						text: header[0],
						style: 'campaignListTableHeader',
					},
					{
						text: header[1],
						style: 'campaignListTableHeader',
					},
					{
						text: header[2],
						style: 'campaignListTableHeader',
					},
				],
				...content
			]
		},
		layout: {
			paddingTop: () => 13,
			paddingRight: () => 10,
			paddingBottom: () => 10,
			paddingLeft: () => 10,
			...borderStyle
		}
	})
}
const summaryTable = sum => ({
	table: {
		widths: [79, 77],
		body: [
			[{
					text: 'TOTAL PRICE',
					style: 'tableHeader'
				},
				{
					text: `€ ${sum}`,
					style: 'tableSummaryAmount'
				}
			]
		]
	},
	layout: {
		paddingTop: () => 15,
		paddingBottom: () => 15,
		...borderStyle
	},
	margin: [340, -1, 0, 0],
	alignment: 'center',
})

const termsAndConditions = [{
		text: 'TERMS & CONDITIONS',
		style: 'tableSummaryHeader'
	},
	{
		text: '\n\nAll prices are excluding VAT.\nOur general and PADS4 Software maintenance terms and conditions are applicable.',
		style: 'tableSummaryText',
		pageBreak: 'after'
	},
	{
		text: 'Please do not hesitate to get in touch with our sales team at sales@pads4.com for explanation\n and/or campaign details.',
		style: 'simpleText'
	}
];

const footer = {
	columns: [
		[{
			text: 'Loren ipsum  BV,',
			style: 'smallAccentBold'
		}, {
			text: '\ntrading as LOREN',
			style: 'smallAccent'
		}],
		{
			text: 'Luchthavenweg 594\n\n5657 EA Eindhoven\n\nThe Netherlands',
			style: 'small'
		},
		{
			text: [
				...accentColorFooter('Call', `+31 88 266 11 77`),
				...accentColorFooter('Mail', `info@pads4.com`),
				...accentColorFooter('Visit', `www.pads4.com`)
			]
		},
		{
			text: [
				...accentColorFooter('CoC', `www.pads4.com`),
				...accentColorFooter('VAT', `VAT NL8028.44.807.B.01`)
			]
		}
	],
	margin: [40, -35]
}
const campaignListTableHeader = text => ({
	text,
	style: 'campaignListTableHeader'
})
const campTableText = text => ({
	text,
	style: 'campTableContent'
})
const campTableFooterText = (textTitle, result) => (
	[{
			text: textTitle,
			style: 'campTableFooterText'
		},
		{
			text: result,
			style: 'campTableFooterText'
		}
	])

const campaignTableRowItem = campaign => (
	[
		[{
				text: 'TYPE:',
				style: 'smallBoldCenter'
			},
			campTableText(campaign.type),
			{
				text: 'ID:',
				style: 'smallBoldCenter'
			},
			campTableText(campaign.id),
			{
				text: 'RESOLUTION:',
				style: 'smallBoldCenter'
			},
			campTableText(campaign.resolution),
		],
		[
			campTableText(campaign.description.text),
			{
				image: campaign.description.img,
				fit: [140, 60],
				alignment: 'center'
			}
		],
		campTableText(campaign.price),
		campTableText(campaign.name),
		campTableText(campaign.percent),
		campTableText(campaign.wholePrice)
	]
)

const newCampaing = (name, dataTablesHead, dataCampaign) => {
	let containerRows = [];
	for (let i = 0; i < dataCampaign.length; i++) {
		const item = dataCampaign[i];
		containerRows.push(campaignTableRowItem(item));
	}
	return ([
		headerTitle_1(name),
		headerTable(['FROM:', 'TOTAL HITS:', 'HITS PER HOURS:'], dataTablesHead[0]),
		headerTable(['TO:', 'CONTENT DURATION:', ''], dataTablesHead[1]),
		{
			table: {
				dontBreakRows: true,
				widths: [60, 150, 60, 100, 35, 60],
				body: [
					[
						campaignListTableHeader('PLACEMENT\nINFO'),
						campaignListTableHeader('PLACEMENT DESCRIPTION'),
						campaignListTableHeader('PRICE\nPRE 10 SEC'),
						campaignListTableHeader('NAME'),
						campaignListTableHeader('%'),
						campaignListTableHeader('PRICE FOR WHOLE\nPERIOD EXCL. VA')
					],
					...containerRows
				]
			},
			layout: {
				paddingTop: () => 8,
				paddingBottom: () => 8,
				...borderStyle
			},
			margin: [0, 50, 0, 0]
		},
		{
			table: {
				widths: [145, 60],
				body: [
					campTableFooterText('Subtotal', '€ 4,364.00'),
					campTableFooterText('Project Discount %', '12%'),
					campTableFooterText('Project discount', '€ 364.00'),
					[{
							text: 'TOTAL PRICE',
							style: 'tableHeader'
						},
						{
							text: '€ 3,999.00',
							style: 'tableSummaryAmount'
						}
					]
				]
			},
			layout: {
				...borderStyle
			},
			margin: [296, -1, 0, 0]
		}
	])
}

var docDefinition = {
	header: headerTitle,
	footer: footer,
	content: [
		headerTitle_1('Commertical Offer'),
		headerTable(['CREATED BY', 'OFFER FOR', 'QUATATION REFERENCE'], ['Nataly', 'Coca-Cola Netherlands', '353-PADS4-00331-0']),
		headerTable(['CAMPAIGN NAME', 'PROJECT DISCOUNT', 'PRICE PER CAMPAIGN'], ['10 SEP, 19', 'Christmas 2020 Coca-Cola\nAdvertising Campaign', '07 SEP, 19']),
		headerTitle_1('Campaign List'),
		contentTable(['CAMPAIGN NAME', 'PROJECT DISCOUNT', 'PRICE PER CAMPAIGN'], 
		[
			['Campaing 1', '3%', '€ 396.99'],
			['Campaing 2', '5%', '€ 396.99'],
			['Campaing 3', '10%', '€ 396.99']
		]),
		summaryTable(2079),
		termsAndConditions,
		headerTitle_1('Content Requirements'),
		contentTable(['CAMPAIGN NAME', 'RESOLUTION', 'DURATION'], 
		[
			['Campaing 1', '1920*1080', '10 sec'],
			['Campaing 1', '1920*720', '10 sec', ],
			['Campaing 1', '1920*1080', 'N/A']
		]),
		{
			text: 'The advertising material has to be provided in accordance with PADS4 technical standards. The\ndocument describing those standards is in attachment.',
			style: 'summaryContent',
			pageBreak: 'after'
		},
		newCampaing(
			'Campaing 1', [
				['10 SEP, 19', '10000', '60'],
				['31 SEP, 19', '10 sec ', '']
			],
			[campExample_2,campExample,campExample, campExample_1, campExample_2]
		)
	],
	pageMargins: [40, 80, 40, 35],
	pageBreakBefore: (currentNode, followingNodesOnPage) => (currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0),
	styles: {
		campaignListTableHeader: {
			color: '#fff',
			fillColor: '#373736',
			bold: true,
			fontSize: 7,
			alignment: 'center'
		},
		small: {
			fontSize: 7
		},
		smallAccent: {
			fontSize: 7,
			color: '#12A29A'
		},
		smallAccentBold: {
			fontSize: 7,
			bold: true,
			color: '#12A29A'
		},
		smallBoldCenter: {
			bold: true,
			fontSize: 7,
			alignment: 'center'
		},
		campTableContent: {
			fontSize: 7,
			margin: [0, 0, 0, 20],
			alignment: 'center'
		},
		tableHeader: {
			bold: true,
			fontSize: 8,
			color: 'black',
			margin: [0, 3, 0, 0]
		},
		campaignListTable: {
			fontSize: 8,
			margin: [0, 3, 0, 0]
		},
		campTableFooterText: {
			fontSize: 8,
			margin: [0, 2, 10, 2],
			alignment: 'right'
		},
		summaryContent: {
			margin: [0, 50, 0, 0],
			fontSize: 10
		},
		tableSummaryHeader: {
			bold: true,
			fontSize: 10,
			margin: [0, 100, 0, 0]
		},
		tableSummaryText: {
			fontSize: 10,
			color: '#373736'
		},
		simpleText: {
			fontSize: 10,
			color: '#373736',
			margin: [0, 40, 0, 0]
		},
		headerTable: {
			fontSize: 10,
			margin: [0, 10, 0, 0]
		},
		tableSummaryAmount: {
			bold: true,
			fontSize: 12,
			margin: [0, 12, 10, 12],
			alignment: 'right'
		},
		headerTitle: {
			bold: true,
			fontSize: 18,
			margin: [40, 30, 0, 30],
			color: '#3E3E3F'
		},
		campaignListHeader: {
			margin: [0, 25, 0, 30],
			fontSize: 24,
			color: '#12A29A',
			bold: true
		}
	}
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('Awesome.pdf'));
pdfDoc.end();