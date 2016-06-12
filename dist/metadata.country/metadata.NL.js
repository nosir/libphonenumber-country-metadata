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
	"31": [
		"NL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NL": [
		null,
		[
			null,
			null,
			"1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",
			"\\d{5,10}"
		],
		[
			null,
			null,
			"(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}",
			"\\d{9}",
			null,
			null,
			"101234567"
		],
		[
			null,
			null,
			"6[1-58]\\d{7}",
			"\\d{9}",
			null,
			null,
			"612345678"
		],
		[
			null,
			null,
			"800\\d{4,7}",
			"\\d{7,10}",
			null,
			null,
			"8001234"
		],
		[
			null,
			null,
			"90[069]\\d{4,7}",
			"\\d{7,10}",
			null,
			null,
			"9061234"
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
			"85\\d{7}",
			"\\d{9}",
			null,
			null,
			"851234567"
		],
		"NL",
		31,
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
				"([1-578]\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"
				],
				"0$1"
			],
			[
				null,
				"([1-5]\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"
				],
				"0$1"
			],
			[
				null,
				"(6)(\\d{8})",
				"$1 $2",
				[
					"6[0-57-9]"
				],
				"0$1"
			],
			[
				null,
				"(66)(\\d{7})",
				"$1 $2",
				[
					"66"
				],
				"0$1"
			],
			[
				null,
				"(14)(\\d{3,4})",
				"$1 $2",
				[
					"14"
				],
				"$1"
			],
			[
				null,
				"([89]0\\d)(\\d{4,7})",
				"$1 $2",
				[
					"80|9"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"66\\d{7}",
			"\\d{9}",
			null,
			null,
			"662345678"
		],
		null,
		null,
		[
			null,
			null,
			"14\\d{3,4}",
			"\\d{5,6}"
		],
		[
			null,
			null,
			"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])",
			"\\d{5,6}",
			null,
			null,
			"14020"
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
