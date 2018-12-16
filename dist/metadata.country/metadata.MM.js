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
	"95": [
		"MM"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MM": [
		null,
		[
			null,
			null,
			"(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				5
			]
		],
		[
			null,
			null,
			"(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|6[25]|7[01])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|62|7[01])|51\\d\\d)|4(?:2(?:2\\d\\d|480)|3(?:20\\d|470|56)|420\\d|5470)|5(?:2(?:2\\d\\d?|470)|4(?:2(?:1|86)|470)|522\\d|7(?:20\\d|480)|[89](?:20\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|42[04]|[56]2\\d)\\d|3(?:20\\d|470)|7(?:(?:3\\d|8[01459])\\d|4(?:39|[67]0)))|7(?:0470|1(?:20\\d?|470)|4(?:25\\d|470)|5(?:202|470|96\\d))|8(?:[13](?:2\\d\\d|470)|[25]2\\d\\d))\\d{4}|(?:(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4]))\\d|25\\d{2,3}|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[2-689]|2[2-8]|3[24]|4[24-7]|5[245]|6[23]))\\d{4}",
			null,
			null,
			null,
			"1234567",
			null,
			null,
			[
				6,
				7,
				8,
				9
			],
			[
				5
			]
		],
		[
			null,
			null,
			"(?:17[01]|9(?:2(?:[0-4]|(?:5\\d|6[0-5])\\d)|(?:3(?:[0-36]|4[069])|[68]9\\d|7(?:3|5[0-2]|[6-9]\\d))\\d|4(?:(?:0[0-4]|[1379]|[25]\\d|4[0-589])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}",
			null,
			null,
			null,
			"92123456",
			null,
			null,
			[
				7,
				8,
				9,
				10
			]
		],
		[
			null,
			null,
			"80080(?:[01][1-9]|2\\d)\\d{3}",
			null,
			null,
			null,
			"8008001234",
			null,
			null,
			[
				10
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
			"(?:1(?:333|468)|2468)\\d{4}",
			null,
			null,
			null,
			"13331234",
			null,
			null,
			[
				8
			]
		],
		"MM",
		95,
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
				"(\\d)(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"16|2"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[12]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[4-7]|8[1-35]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{4,6})",
				"$1 $2 $3",
				[
					"9(?:2[0-4]|[35-9]|4[137-9])"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"92"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{5})(\\d{4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"8"
				],
				"0$1"
			]
		],
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
		]
	]
};
