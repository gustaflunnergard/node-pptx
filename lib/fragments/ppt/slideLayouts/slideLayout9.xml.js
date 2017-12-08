module.exports = {
	declaration: { attributes: { version: '1.0', encoding: 'UTF-8', standalone: 'yes' } },
	elements: [
		{
			type: 'element',
			name: 'p:sldLayout',
			attributes: {
				'xmlns:a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
				'xmlns:r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
				'xmlns:p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
				type: 'picTx',
				preserve: '1',
			},
			elements: [
				{
					type: 'element',
					name: 'p:cSld',
					attributes: { name: 'Picture with Caption' },
					elements: [
						{
							type: 'element',
							name: 'p:spTree',
							elements: [
								{
									type: 'element',
									name: 'p:nvGrpSpPr',
									elements: [
										{ type: 'element', name: 'p:cNvPr', attributes: { id: '1', name: '' }, elements: [] },
										{ type: 'element', name: 'p:cNvGrpSpPr', elements: [] },
										{ type: 'element', name: 'p:nvPr', elements: [] },
									],
								},
								{
									type: 'element',
									name: 'p:grpSpPr',
									elements: [
										{
											type: 'element',
											name: 'a:xfrm',
											elements: [
												{ type: 'element', name: 'a:off', attributes: { x: '0', y: '0' }, elements: [] },
												{ type: 'element', name: 'a:ext', attributes: { cx: '0', cy: '0' }, elements: [] },
												{ type: 'element', name: 'a:chOff', attributes: { x: '0', y: '0' }, elements: [] },
												{ type: 'element', name: 'a:chExt', attributes: { cx: '0', cy: '0' }, elements: [] },
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '2', name: 'Title 1' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'title' }, elements: [] }] },
											],
										},
										{
											type: 'element',
											name: 'p:spPr',
											elements: [
												{
													type: 'element',
													name: 'a:xfrm',
													elements: [
														{ type: 'element', name: 'a:off', attributes: { x: '1792288', y: '4800600' }, elements: [] },
														{ type: 'element', name: 'a:ext', attributes: { cx: '5486400', cy: '566738' }, elements: [] },
													],
												},
											],
										},
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', attributes: { anchor: 'b' }, elements: [] },
												{
													type: 'element',
													name: 'a:lstStyle',
													elements: [
														{
															type: 'element',
															name: 'a:lvl1pPr',
															attributes: { algn: 'l' },
															elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000', b: '1' }, elements: [] }],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Click to edit Master title style' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '3', name: 'Picture Placeholder 2' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'pic', idx: '1' }, elements: [] }] },
											],
										},
										{
											type: 'element',
											name: 'p:spPr',
											elements: [
												{
													type: 'element',
													name: 'a:xfrm',
													elements: [
														{ type: 'element', name: 'a:off', attributes: { x: '1792288', y: '612775' }, elements: [] },
														{ type: 'element', name: 'a:ext', attributes: { cx: '5486400', cy: '4114800' }, elements: [] },
													],
												},
											],
										},
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{
													type: 'element',
													name: 'a:lstStyle',
													elements: [
														{
															type: 'element',
															name: 'a:lvl1pPr',
															attributes: { marL: '0', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '3200' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl2pPr',
															attributes: { marL: '457200', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2800' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl3pPr',
															attributes: { marL: '914400', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2400' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl4pPr',
															attributes: { marL: '1371600', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl5pPr',
															attributes: { marL: '1828800', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl6pPr',
															attributes: { marL: '2286000', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl7pPr',
															attributes: { marL: '2743200', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl8pPr',
															attributes: { marL: '3200400', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl9pPr',
															attributes: { marL: '3657600', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] },
															],
														},
													],
												},
												{ type: 'element', name: 'a:p', elements: [{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] }] },
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '4', name: 'Text Placeholder 3' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'body', sz: 'half', idx: '2' }, elements: [] }] },
											],
										},
										{
											type: 'element',
											name: 'p:spPr',
											elements: [
												{
													type: 'element',
													name: 'a:xfrm',
													elements: [
														{ type: 'element', name: 'a:off', attributes: { x: '1792288', y: '5367338' }, elements: [] },
														{ type: 'element', name: 'a:ext', attributes: { cx: '5486400', cy: '804862' }, elements: [] },
													],
												},
											],
										},
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{
													type: 'element',
													name: 'a:lstStyle',
													elements: [
														{
															type: 'element',
															name: 'a:lvl1pPr',
															attributes: { marL: '0', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '1400' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl2pPr',
															attributes: { marL: '457200', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '1200' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl3pPr',
															attributes: { marL: '914400', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '1000' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl4pPr',
															attributes: { marL: '1371600', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '900' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl5pPr',
															attributes: { marL: '1828800', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '900' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl6pPr',
															attributes: { marL: '2286000', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '900' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl7pPr',
															attributes: { marL: '2743200', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '900' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl8pPr',
															attributes: { marL: '3200400', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '900' }, elements: [] },
															],
														},
														{
															type: 'element',
															name: 'a:lvl9pPr',
															attributes: { marL: '3657600', indent: '0' },
															elements: [
																{ type: 'element', name: 'a:buNone', elements: [] },
																{ type: 'element', name: 'a:defRPr', attributes: { sz: '900' }, elements: [] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '0' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Click to edit Master text styles' }] },
															],
														},
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '5', name: 'Date Placeholder 4' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'dt', sz: 'half', idx: '10' }, elements: [] }] },
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{
															type: 'element',
															name: 'a:fld',
															attributes: { id: '{036EEA2E-C0C0-453E-845A-3EE4D9BD6F62}', type: 'datetimeFigureOut' },
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: '12/5/2017' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '6', name: 'Footer Placeholder 5' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'ftr', sz: 'quarter', idx: '11' }, elements: [] }] },
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{ type: 'element', name: 'a:p', elements: [{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] }] },
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '7', name: 'Slide Number Placeholder 6' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{
													type: 'element',
													name: 'p:nvPr',
													elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'sldNum', sz: 'quarter', idx: '12' }, elements: [] }],
												},
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{
															type: 'element',
															name: 'a:fld',
															attributes: { id: '{EEA4CB10-01EC-4F0B-B0D3-B7B5571F5409}', type: 'slidenum' },
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: '‹#›' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{ type: 'element', name: 'p:clrMapOvr', elements: [{ type: 'element', name: 'a:masterClrMapping', elements: [] }] },
			],
		},
	],
};