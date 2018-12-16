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
	"385": [
		"HR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"HR": [
		null,
		[
			null,
			null,
			"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
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
				9
			]
		],
		[
			null,
			null,
			"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
			null,
			null,
			null,
			"12345678",
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
			"9(?:(?:01|[12589]\\d)\\d|7(?:[0679]\\d|51))\\d{5}|98\\d{6}",
			null,
			null,
			null,
			"921234567",
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
			"80[01]\\d{4,6}",
			null,
			null,
			null,
			"800123456",
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
			"6[01459]\\d{6}|6[01]\\d{4,5}",
			null,
			null,
			null,
			"611234",
			null,
			null,
			[
				6,
				7,
				8
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
			"7[45]\\d{6}",
			null,
			null,
			null,
			"74123456",
			null,
			null,
			[
				8
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
		"HR",
		385,
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
				"(\\d{2})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"6[01]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"1"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[2-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[67]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
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
			"(?:62\\d?|72)\\d{6}",
			null,
			null,
			null,
			"62123456",
			null,
			null,
			[
				8,
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
