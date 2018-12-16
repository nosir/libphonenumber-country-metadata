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
			"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
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
				12
			]
		],
		[
			null,
			null,
			"1(?:0[1-8]\\d{6}|(?:[13689]\\d|2[0-35]|4[0-4]|5[0-25-9]|7[13-6])\\d{5,6})|(?:2(?:[136]\\d|2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|[1356]\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01]))\\d{5,6}|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})|(?:[12][136]|3[356])\\d{5}",
			null,
			null,
			null,
			"8123456",
			null,
			null,
			[
				7,
				8,
				9
			]
		],
		[
			null,
			null,
			"7[02369]\\d{7}",
			null,
			null,
			null,
			"701234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"20\\d{4,7}",
			null,
			null,
			null,
			"20123456",
			null,
			null,
			[
				6,
				7,
				8,
				9
			]
		],
		[
			null,
			null,
			"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",
			null,
			null,
			null,
			"9001234567",
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
			"77[0-7]\\d{6}",
			null,
			null,
			null,
			"771234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"75[1-8]\\d{6}",
			null,
			null,
			null,
			"751234567",
			null,
			null,
			[
				9
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
				"(\\d{2})(\\d{2,3})(\\d{2})",
				"$1-$2 $3",
				[
					"20"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})",
				"$1-$2 $3",
				[
					"[12][136]|3[356]|4[0246]|6[03]|90[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1-$2",
				[
					"9(?:00|39|44)"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{2})",
				"$1-$2 $3",
				[
					"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{3})",
				"$1-$2 $3",
				[
					"9(?:0|39|44)"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
				"$1-$2 $3 $4",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1-$2 $3 $4 $5",
				[
					"[26]"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(\\d{2})(\\d{2,3})(\\d{2})",
				"$1 $2 $3",
				[
					"20"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})",
				"$1 $2 $3",
				[
					"[12][136]|3[356]|4[0246]|6[03]|90[1-9]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"9(?:00|39|44)"
				]
			],
			[
				null,
				"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"8"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{2})",
				"$1 $2 $3",
				[
					"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
				]
			],
			[
				null,
				"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{3})",
				"$1 $2 $3",
				[
					"9(?:0|39|44)"
				]
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"8"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"7"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"9"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				[
					"[26]"
				]
			]
		],
		[
			null,
			null,
			"74[02-9]\\d{6}",
			null,
			null,
			null,
			"740123456",
			null,
			null,
			[
				9
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
			"(?:25[245]|67[3-68])\\d{9}",
			null,
			null,
			null,
			"254123456789",
			null,
			null,
			[
				12
			]
		]
	]
};
