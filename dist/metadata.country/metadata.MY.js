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
			"[13-9]\\d{7,9}",
			"\\d{6,10}"
		],
		[
			null,
			null,
			"(?:3[2-9]\\d|[4-9][2-9])\\d{6}",
			"\\d{6,9}",
			null,
			null,
			"323456789"
		],
		[
			null,
			null,
			"1(?:1[1-5]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}",
			"\\d{9,10}",
			null,
			null,
			"123456789"
		],
		[
			null,
			null,
			"1[378]00\\d{6}",
			"\\d{10}",
			null,
			null,
			"1300123456"
		],
		[
			null,
			null,
			"1600\\d{6}",
			"\\d{10}",
			null,
			null,
			"1600123456"
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
			"154\\d{7}",
			"\\d{10}",
			null,
			null,
			"1541234567"
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
				"([4-79])(\\d{3})(\\d{4})",
				"$1-$2 $3",
				[
					"[4-79]"
				],
				"0$1"
			],
			[
				null,
				"(3)(\\d{4})(\\d{4})",
				"$1-$2 $3",
				[
					"3"
				],
				"0$1"
			],
			[
				null,
				"([18]\\d)(\\d{3})(\\d{3,4})",
				"$1-$2 $3",
				[
					"1[02-46-9][1-9]|8"
				],
				"0$1"
			],
			[
				null,
				"(1)([36-8]00)(\\d{2})(\\d{4})",
				"$1-$2-$3-$4",
				[
					"1[36-8]0"
				]
			],
			[
				null,
				"(11)(\\d{4})(\\d{4})",
				"$1-$2 $3",
				[
					"11"
				],
				"0$1"
			],
			[
				null,
				"(15[49])(\\d{3})(\\d{4})",
				"$1-$2 $3",
				[
					"15"
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
