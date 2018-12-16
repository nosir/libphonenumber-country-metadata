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
	"886": [
		"TW"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TW": [
		null,
		[
			null,
			null,
			"(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}",
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
			]
		],
		[
			null,
			null,
			"(?:(?:2[2-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9])\\d\\d|8(?:2(?:3\\d|66)|[7-9]\\d\\d))\\d{4}|24\\d{6}",
			null,
			null,
			null,
			"221234567",
			null,
			null,
			[
				8,
				9
			]
		],
		[
			null,
			null,
			"9[0-8]\\d{7}",
			null,
			null,
			null,
			"912345678",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"80[0-79]\\d{6}",
			null,
			null,
			null,
			"800123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"20(?:[013-9]\\d\\d|2)\\d{4}",
			null,
			null,
			null,
			"203123456",
			null,
			null,
			[
				7,
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
		[
			null,
			null,
			"99\\d{7}",
			null,
			null,
			null,
			"990123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"70\\d{8}",
			null,
			null,
			null,
			"7012345678",
			null,
			null,
			[
				10
			]
		],
		"TW",
		886,
		"0(?:0[25-79]|19)",
		"0",
		"#",
		null,
		"0",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d)(\\d{4})",
				"$1 $2 $3",
				[
					"202"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"[25][2-8]|[346]|7[1-9]|8[27-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[258]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"7"
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
			"50[0-46-9]\\d{6}",
			null,
			null,
			null,
			"500123456",
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
		]
	]
};
