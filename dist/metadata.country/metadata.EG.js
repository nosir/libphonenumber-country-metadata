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
	"20": [
		"EG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"EG": [
		null,
		[
			null,
			null,
			"1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}",
			"\\d{5,10}"
		],
		[
			null,
			null,
			"(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}",
			"\\d{5,9}",
			null,
			null,
			"234567890"
		],
		[
			null,
			null,
			"1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}",
			"\\d{10}",
			null,
			null,
			"1001234567"
		],
		[
			null,
			null,
			"800\\d{7}",
			"\\d{10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"900\\d{7}",
			"\\d{10}",
			null,
			null,
			"9001234567"
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
		"EG",
		20,
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
				"(\\d)(\\d{7,8})",
				"$1 $2",
				[
					"[23]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1[012]|[89]00"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{6,7})",
				"$1 $2",
				[
					"1[35]|[4-6]|[89][2-9]"
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
