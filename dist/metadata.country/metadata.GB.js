/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generated metadata for file
 * ../resources/PhoneNumberMetadata.xml
 * @author Nikolaos Trogkanis
 */

goog.provide('i18n.phonenumbers.metadata');

/**
 * A mapping from a country calling code to the region codes which denote the
 * region represented by that country calling code. In the case of multiple
 * countries sharing a calling code, such as the NANPA regions, the one
 * indicated with "isMainCountryForCode" in the metadata should be first.
 * @type {!Object.<number, Array.<string>>}
 */
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
	"44": [
		"GB",
		"GG",
		"IM",
		"JE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"GB": [
		null,
		[
			null,
			null,
			"\\d{7,10}",
			"\\d{4,10}"
		],
		[
			null,
			null,
			"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}",
			"\\d{4,10}",
			null,
			null,
			"1212345678"
		],
		[
			null,
			null,
			"7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}",
			"\\d{10}",
			null,
			null,
			"7400123456"
		],
		[
			null,
			null,
			"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",
			"\\d{7}(?:\\d{2,3})?",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",
			"\\d{10}",
			null,
			null,
			"9012345678"
		],
		[
			null,
			null,
			"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
			"\\d{7}(?:\\d{3})?",
			null,
			null,
			"8431234567"
		],
		[
			null,
			null,
			"70\\d{8}",
			"\\d{10}",
			null,
			null,
			"7012345678"
		],
		[
			null,
			null,
			"56\\d{8}",
			"\\d{10}",
			null,
			null,
			"5612345678"
		],
		"GB",
		44,
		"00",
		"0",
		" x",
		null,
		"0",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"2|5[56]|7(?:0|6[013-9])",
					"2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1(?:1|\\d1)|3|9[018]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{5})(\\d{4,5})",
				"$1 $2",
				[
					"1(?:38|5[23]|69|76|94)",
					"1(?:387|5(?:24|39)|697|768|946)",
					"1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"
				],
				"0$1"
			],
			[
				null,
				"(1\\d{3})(\\d{5,6})",
				"$1 $2",
				[
					"1"
				],
				"0$1"
			],
			[
				null,
				"(7\\d{3})(\\d{6})",
				"$1 $2",
				[
					"7(?:[1-5789]|62)",
					"7(?:[1-5789]|624)"
				],
				"0$1"
			],
			[
				null,
				"(800)(\\d{4})",
				"$1 $2",
				[
					"800",
					"8001",
					"80011",
					"800111",
					"8001111"
				],
				"0$1"
			],
			[
				null,
				"(845)(46)(4\\d)",
				"$1 $2 $3",
				[
					"845",
					"8454",
					"84546",
					"845464"
				],
				"0$1"
			],
			[
				null,
				"(8\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"8(?:4[2-5]|7[0-3])"
				],
				"0$1"
			],
			[
				null,
				"(80\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"80"
				],
				"0$1"
			],
			[
				null,
				"([58]00)(\\d{6})",
				"$1 $2",
				[
					"[58]00"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
			"\\d{10}",
			null,
			null,
			"7640123456"
		],
		1,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"(?:3[0347]|55)\\d{8}",
			"\\d{10}",
			null,
			null,
			"5512345678"
		],
		null,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		]
	]
};
