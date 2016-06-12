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
	"7": [
		"RU",
		"KZ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"RU": [
		null,
		[
			null,
			null,
			"[3489]\\d{9}",
			"\\d{10}"
		],
		[
			null,
			null,
			"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
			"\\d{10}",
			null,
			null,
			"3011234567"
		],
		[
			null,
			null,
			"9\\d{9}",
			"\\d{10}",
			null,
			null,
			"9123456789"
		],
		[
			null,
			null,
			"80[04]\\d{7}",
			"\\d{10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"80[39]\\d{7}",
			"\\d{10}",
			null,
			null,
			"8091234567"
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
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"RU",
		7,
		"810",
		"8",
		null,
		null,
		"8",
		null,
		"8~10",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1-$2-$3",
				[
					"[1-79]"
				],
				"$1",
				null,
				1
			],
			[
				null,
				"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2-$3-$4",
				[
					"[34689]"
				],
				"8 ($1)",
				null,
				1
			],
			[
				null,
				"(7\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"7"
				],
				"8 ($1)",
				null,
				1
			]
		],
		[
			[
				null,
				"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2-$3-$4",
				[
					"[34689]"
				],
				"8 ($1)",
				null,
				1
			],
			[
				null,
				"(7\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"7"
				],
				"8 ($1)",
				null,
				1
			]
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		1,
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
			"NA",
			"NA"
		]
	]
};
