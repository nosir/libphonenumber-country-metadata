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
	"84": [
		"VN"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"VN": [
		null,
		[
			null,
			null,
			"[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}",
			"\\d{7,10}"
		],
		[
			null,
			null,
			"(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01]))\\d{7}|8(?:[1-57]\\d|[689][0-79])\\d{6}",
			"\\d{9,10}",
			null,
			null,
			"2101234567"
		],
		[
			null,
			null,
			"(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8[689]8\\d{6}",
			"\\d{9,10}",
			null,
			null,
			"912345678"
		],
		[
			null,
			null,
			"1800\\d{4,6}",
			"\\d{8,10}",
			null,
			null,
			"1800123456"
		],
		[
			null,
			null,
			"1900\\d{4,6}",
			"\\d{8,10}",
			null,
			null,
			"1900123456"
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
		"VN",
		84,
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
				"([17]99)(\\d{4})",
				"$1 $2",
				[
					"[17]99"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"([48])(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"4|8(?:[1-57]|[689][0-79])"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"([235-7]\\d)(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"(80)(\\d{5})",
				"$1 $2",
				[
					"80"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"(69\\d)(\\d{4,5})",
				"$1 $2",
				[
					"69"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"([235-7]\\d{2})(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"2[1348]|3[25]|5[01]|65|7[18]"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"([89]\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"8[689]8|9"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"(1[2689]\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1(?:[26]|8[68]|99)"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"(1[89]00)(\\d{4,6})",
				"$1 $2",
				[
					"1[89]0"
				],
				"$1",
				null,
				1
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
			"[17]99\\d{4}|69\\d{5,6}",
			"\\d{7,8}",
			null,
			null,
			"1992000"
		],
		[
			null,
			null,
			"[17]99\\d{4}|69\\d{5,6}|80\\d{5}",
			"\\d{7,8}",
			null,
			null,
			"1992000"
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
