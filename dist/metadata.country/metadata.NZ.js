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
	"64": [
		"NZ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NZ": [
		null,
		[
			null,
			null,
			"6[235-9]\\d{6}|[2-57-9]\\d{7,10}",
			"\\d{7,11}"
		],
		[
			null,
			null,
			"(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}",
			"\\d{7,8}",
			null,
			null,
			"32345678"
		],
		[
			null,
			null,
			"2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})",
			"\\d{8,10}",
			null,
			null,
			"211234567"
		],
		[
			null,
			null,
			"508\\d{6,7}|80\\d{6,8}",
			"\\d{8,10}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"90\\d{7,9}",
			"\\d{9,11}",
			null,
			null,
			"900123456"
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
			"70\\d{7}",
			"\\d{9}",
			null,
			null,
			"701234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"NZ",
		64,
		"0(?:0|161)",
		"0",
		null,
		null,
		"0",
		null,
		"00",
		null,
		[
			[
				null,
				"([34679])(\\d{3})(\\d{4})",
				"$1-$2 $3",
				[
					"[346]|7[2-57-9]|9[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(24099)(\\d{3})",
				"$1 $2",
				[
					"240",
					"2409",
					"24099"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"21"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,5})",
				"$1 $2 $3",
				[
					"2(?:1[1-9]|[69]|7[0-35-9])|70|86"
				],
				"0$1"
			],
			[
				null,
				"(2\\d)(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"2[028]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"2(?:10|74)|5|[89]0"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"[28]6\\d{6,7}",
			"\\d{8,9}",
			null,
			null,
			"26123456"
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
