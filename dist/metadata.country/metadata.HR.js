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
			"[1-7]\\d{5,8}|[89]\\d{6,11}",
			"\\d{6,12}"
		],
		[
			null,
			null,
			"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
			"\\d{6,9}",
			null,
			null,
			"12345678"
		],
		[
			null,
			null,
			"9(?:[1-9]\\d{6,10}|01\\d{6,9})",
			"\\d{8,12}",
			null,
			null,
			"912345678"
		],
		[
			null,
			null,
			"80[01]\\d{4,7}",
			"\\d{7,10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"6(?:[01459]\\d{4,7})",
			"\\d{6,9}",
			null,
			null,
			"611234"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"7[45]\\d{4,7}",
			"\\d{6,9}",
			null,
			null,
			"741234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
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
				"(1)(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"1"
				],
				"0$1"
			],
			[
				null,
				"(6[09])(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"6[09]"
				],
				"0$1"
			],
			[
				null,
				"([67]2)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[67]2"
				],
				"0$1"
			],
			[
				null,
				"([2-5]\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[2-5]"
				],
				"0$1"
			],
			[
				null,
				"(9\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(9\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(9\\d)(\\d{3,4})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"6[0145]|7"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3,4})(\\d{3})",
				"$1 $2 $3",
				[
					"6[0145]|7"
				],
				"0$1"
			],
			[
				null,
				"(80[01])(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"(80[01])(\\d{3,4})(\\d{3})",
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
			"NA",
			"NA"
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
			"[76]2\\d{6,7}",
			"\\d{8,9}",
			null,
			null,
			"62123456"
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
