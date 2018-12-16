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
	"353": [
		"IE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"IE": [
		null,
		[
			null,
			null,
			"[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				8,
				9,
				10
			],
			[
				5,
				6
			]
		],
		[
			null,
			null,
			"(?:1\\d{2,3}|2(?:[13]\\d\\d|[24-9])|4(?:0[24]|(?:(?:[1-469]|8[0-46-9])\\d|5)\\d|7)|5(?:0[45]|(?:1|[23679]\\d)\\d|8)|6(?:[237-9]|[4-6]\\d\\d)|7[14]\\d\\d|9(?:[04]\\d\\d|[35-9]))\\d{5}|[269]1\\d{6}",
			null,
			null,
			null,
			"2212345",
			null,
			null,
			null,
			[
				5,
				6
			]
		],
		[
			null,
			null,
			"8(?:22|[35-9]\\d)\\d{6}",
			null,
			null,
			null,
			"850123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"1800\\d{6}",
			null,
			null,
			null,
			"1800123456",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",
			null,
			null,
			null,
			"1520123456",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"18[59]0\\d{6}",
			null,
			null,
			null,
			"1850123456",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"700\\d{6}",
			null,
			null,
			null,
			"700123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"76\\d{7}",
			null,
			null,
			null,
			"761234567",
			null,
			null,
			[
				9
			]
		],
		"IE",
		353,
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
				"(\\d{2})(\\d{5})",
				"$1 $2",
				[
					"2[24-9]|47|58|6[237-9]|9[35-9]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{5})",
				"$1 $2",
				[
					"[45]0"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d)(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"1"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[2569]|4[1-69]|7[14]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"76|8[235-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"81"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"4"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"1"
				]
			],
			[
				null,
				"(\\d{2})(\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3 $4",
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
			"18[59]0\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"818\\d{6}",
			null,
			null,
			null,
			"818123456",
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
			"8[35-9]5\\d{7}",
			null,
			null,
			null,
			"8551234567",
			null,
			null,
			[
				10
			]
		]
	]
};
