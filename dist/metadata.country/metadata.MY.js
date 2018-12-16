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
	"60": [
		"MY"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MY": [
		null,
		[
			null,
			null,
			"(?:1\\d\\d?|3\\d|[4-9])\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9,
				10
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",
			null,
			null,
			null,
			"323856789",
			null,
			null,
			[
				8,
				9
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"1(?:(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|59\\d)\\d)\\d|4(?:[235-9]\\d\\d|400)|8(?:(?:1[23]|[236]\\d|5[7-9]|7[016-9]|9[0-8])\\d|4(?:[06]\\d|7[0-4])|8(?:[01]\\d|[27][0-4])))\\d{4}",
			null,
			null,
			null,
			"123456789",
			null,
			null,
			[
				9,
				10
			]
		],
		[
			null,
			null,
			"1[378]00\\d{6}",
			null,
			null,
			null,
			"1300123456",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"1600\\d{6}",
			null,
			null,
			null,
			"1600123456",
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
			"154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}",
			null,
			null,
			null,
			"1546012345",
			null,
			null,
			[
				10
			]
		],
		"MY",
		60,
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
				"(\\d)(\\d{3})(\\d{4})",
				"$1-$2 $3",
				[
					"[4-79]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1-$2 $3",
				[
					"1(?:[0249]|[367][2-9]|8[1-9])|8"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1-$2 $3",
				[
					"3"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1-$2 $3",
				[
					"15"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1-$2 $3",
				[
					"11"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{2})(\\d{4})",
				"$1-$2-$3-$4",
				[
					"1"
				]
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
