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
	"98": [
		"IR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"IR": [
		null,
		[
			null,
			null,
			"[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})",
			"\\d{4,10}"
		],
		[
			null,
			null,
			"(?:1[137]|2[13-68]|3[1458]|4[145]|5[146-8]|6[146]|7[1467]|8[13467])\\d{8}",
			"\\d{10}",
			null,
			null,
			"2123456789"
		],
		[
			null,
			null,
			"9(?:0[1-3]|[13]\\d|2[0-2]|90)\\d{7}",
			"\\d{10}",
			null,
			null,
			"9123456789"
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
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"(?:[2-6]0\\d|993)\\d{7}",
			"\\d{10}",
			null,
			null,
			"9932123456"
		],
		"IR",
		98,
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
				"(21)(\\d{3,5})",
				"$1 $2",
				[
					"21"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"[1-8]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})",
				"$1 $2",
				[
					"9"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"943\\d{7}",
			"\\d{10}",
			null,
			null,
			"9432123456"
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
			"9990\\d{0,6}",
			"\\d{4,10}",
			null,
			null,
			"9990123456"
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
