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
	"375": [
		"BY"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BY": [
		null,
		[
			null,
			null,
			"(?:(?:[12]|8[0-7]\\d)\\d|33|44|902)\\d{7}|8(?:[05-79]\\d|1[0-489])\\d{7}|8[0-79]\\d{5,7}|8\\d{5}",
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
				10,
				11
			],
			[
				5
			]
		],
		[
			null,
			null,
			"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",
			null,
			null,
			null,
			"152450911",
			null,
			null,
			[
				9
			],
			[
				5,
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",
			null,
			null,
			null,
			"294911911",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"8(?:0[013]|20\\d)\\d{7}|800\\d{3,6}",
			null,
			null,
			null,
			"8011234567"
		],
		[
			null,
			null,
			"(?:810|902)\\d{7}",
			null,
			null,
			null,
			"9021234567",
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
			"249\\d{6}",
			null,
			null,
			null,
			"249123456",
			null,
			null,
			[
				9
			]
		],
		"BY",
		375,
		"810",
		"8",
		null,
		null,
		"0|80?",
		null,
		"8~10",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{3})",
				"$1 $2",
				[
					"800"
				],
				"8 $1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2,4})",
				"$1 $2 $3",
				[
					"800"
				],
				"8 $1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2-$3-$4",
				[
					"1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])",
					"1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"
				],
				"8 0$1"
			],
			[
				null,
				"(\\d{4})(\\d{2})(\\d{3})",
				"$1 $2-$3",
				[
					"1(?:[56]|7[179])|2[1-3]",
					"1(?:[56]|7(?:1[3-9]|7|9[2-7]))|2[1-3]"
				],
				"8 0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2-$3-$4",
				[
					"[1-4]"
				],
				"8 0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"[89]"
				],
				"8 $1"
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
			"(?:8(?:0[013]|10|20\\d)|902)\\d{7}|800\\d{3,6}"
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
