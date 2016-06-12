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
	"46": [
		"SE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SE": [
		null,
		[
			null,
			null,
			"[1-35-9]\\d{5,11}|4\\d{6,8}",
			"\\d{6,12}"
		],
		[
			null,
			null,
			"1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",
			"\\d{7,9}",
			null,
			null,
			"8123456"
		],
		[
			null,
			null,
			"7[02369]\\d{7}",
			"\\d{9}",
			null,
			null,
			"701234567"
		],
		[
			null,
			null,
			"20\\d{4,7}",
			"\\d{6,9}",
			null,
			null,
			"20123456"
		],
		[
			null,
			null,
			"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",
			"\\d{7,10}",
			null,
			null,
			"9001234567"
		],
		[
			null,
			null,
			"77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})",
			"\\d{6}(?:\\d{3})?",
			null,
			null,
			"771234567"
		],
		[
			null,
			null,
			"75[1-8]\\d{6}",
			"\\d{9}",
			null,
			null,
			"751234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"SE",
		46,
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
				"(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"
				],
				"0$1"
			],
			[
				null,
				"([1-469]\\d)(\\d{3})(\\d{2})",
				"$1-$2 $3",
				[
					"1[136]|2[136]|3[356]|4[0246]|6[03]|90"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{2})",
				"$1-$2 $3",
				[
					"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
				],
				"0$1"
			],
			[
				null,
				"(7\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(77)(\\d{2})(\\d{2})",
				"$1-$2$3",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(20)(\\d{2,3})(\\d{2})",
				"$1-$2 $3",
				[
					"20"
				],
				"0$1"
			],
			[
				null,
				"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})",
				"$1-$2 $3 $4",
				[
					"9[034]"
				],
				"0$1"
			],
			[
				null,
				"(9[034]\\d)(\\d{4})",
				"$1-$2",
				[
					"9[034]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4 $5",
				[
					"25[245]|67[3-6]"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"8"
				]
			],
			[
				null,
				"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"
				]
			],
			[
				null,
				"([1-469]\\d)(\\d{3})(\\d{2})",
				"$1 $2 $3",
				[
					"1[136]|2[136]|3[356]|4[0246]|6[03]|90"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{2})",
				"$1 $2 $3",
				[
					"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
				]
			],
			[
				null,
				"(7\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"7"
				]
			],
			[
				null,
				"(77)(\\d{2})(\\d{2})",
				"$1 $2 $3",
				[
					"7"
				]
			],
			[
				null,
				"(20)(\\d{2,3})(\\d{2})",
				"$1 $2 $3",
				[
					"20"
				]
			],
			[
				null,
				"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"9[034]"
				]
			],
			[
				null,
				"(9[034]\\d)(\\d{4})",
				"$1 $2",
				[
					"9[034]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				[
					"25[245]|67[3-6]"
				]
			]
		],
		[
			null,
			null,
			"74[02-9]\\d{6}",
			"\\d{9}",
			null,
			null,
			"740123456"
		],
		null,
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
			"NA",
			"NA"
		],
		null,
		null,
		[
			null,
			null,
			"(?:25[245]|67[3-6])\\d{9}",
			"\\d{12}",
			null,
			null,
			"254123456789"
		]
	]
};
