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
	"49": [
		"DE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"DE": [
		null,
		[
			null,
			null,
			"(?:1|[235-9]\\d{11}|4(?:[0-8]\\d{2,10}|9(?:[05]\\d{7}|[46][1-8]\\d{2,6})))\\d{3}|[1-35-9]\\d{6,13}|49(?:(?:[0-25]\\d|3[1-689])\\d{4,8}|4[1-8]\\d{4}|6[0-8]\\d{3,4}|7[1-7]\\d{5,8})|497[0-7]\\d{4}|49(?:[0-2579]\\d|[34][1-9])\\d{3}|[1-9]\\d{5}|[13468]\\d{4}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15
			],
			[
				3
			]
		],
		[
			null,
			null,
			"(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-3589]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|[29]\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{4,12}|3(?:(?:[03569]\\d|4[0-79]|7[1-7]|8[1-8])\\d{4,12}|2\\d{9})|4(?:(?:[02-48]\\d|1[02-9]|5[0-6]|6[0-8]|7[0-79])\\d{4,12}|9(?:[0-37]\\d{4,9}|[4-6]\\d{4,10}))|(?:2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:0\\d?|[35-9][15]|4[015])|4(?:0\\d?|[2-9]1)|[57][1-9]1|[68](?:[1-8]1|9\\d?)|9(?:06|[1-9]1))\\d{3}",
			null,
			null,
			null,
			"30123456",
			null,
			null,
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15
			],
			[
				3,
				4
			]
		],
		[
			null,
			null,
			"1(?:5[0-25-9]\\d{8}|(?:6[023]|7\\d)\\d{7,8})",
			null,
			null,
			null,
			"15123456789",
			null,
			null,
			[
				10,
				11
			]
		],
		[
			null,
			null,
			"800\\d{7,12}",
			null,
			null,
			null,
			"8001234567890",
			null,
			null,
			[
				10,
				11,
				12,
				13,
				14,
				15
			]
		],
		[
			null,
			null,
			"(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",
			null,
			null,
			null,
			"9001234567",
			null,
			null,
			[
				10,
				11
			]
		],
		[
			null,
			null,
			"1(?:3(?:7[1-6]\\d\\d|8)|80\\d{1,7})\\d{4}",
			null,
			null,
			null,
			"18012345",
			null,
			null,
			[
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14
			]
		],
		[
			null,
			null,
			"700\\d{8}",
			null,
			null,
			null,
			"70012345678",
			null,
			null,
			[
				11
			]
		],
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		"DE",
		49,
		"00",
		"0",
		null,
		null,
		"0",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d{3,13})",
				"$1 $2",
				[
					"3[02]|40|[68]9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3,12})",
				"$1 $2",
				[
					"2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)",
					"2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"138"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{3,11})",
				"$1 $2",
				[
					"[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])",
					"[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{5,11})",
				"$1 $2",
				[
					"181"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d)(\\d{4,10})",
				"$1 $2 $3",
				[
					"1(?:3|80)|9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{5})(\\d{3,10})",
				"$1 $2",
				[
					"3"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{7,8})",
				"$1 $2",
				[
					"1(?:6[02-489]|7)"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{7,12})",
				"$1 $2",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{7})",
				"$1 $2",
				[
					"15[1279]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{5})(\\d{6})",
				"$1 $2",
				[
					"15[0568]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{8})",
				"$1 $2",
				[
					"18[2-579]",
					"18[2-579]",
					"18(?:[2-479]|5(?:0[1-9]|[1-9]))"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{7})",
				"$1 $2",
				[
					"18[68]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{5})(\\d{6})",
				"$1 $2",
				[
					"18"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{7,8})",
				"$1 $2 $3",
				[
					"1(?:6[023]|7)"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{8})",
				"$1 $2 $3",
				[
					"15[013-68]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{2})(\\d{7})",
				"$1 $2 $3",
				[
					"15"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"16(?:4\\d{1,10}|[89]\\d{1,11})",
			null,
			null,
			null,
			"16412345",
			null,
			null,
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14
			]
		],
		null,
		null,
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		[
			null,
			null,
			"18(?:1\\d{5,11}|[2-9]\\d{8})",
			null,
			null,
			null,
			"18500123456",
			null,
			null,
			[
				8,
				9,
				10,
				11,
				12,
				13,
				14
			]
		],
		null,
		null,
		[
			null,
			null,
			"1(?:5(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)|(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d?)\\d{7}",
			null,
			null,
			null,
			"177991234567",
			null,
			null,
			[
				12,
				13
			]
		]
	]
};
