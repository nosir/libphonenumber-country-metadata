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
	"374": [
		"AM"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"AM": [
		null,
		[
			null,
			null,
			"[1-9]\\d{7}",
			"\\d{5,8}"
		],
		[
			null,
			null,
			"(?:1[01]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}",
			"\\d{5,8}",
			null,
			null,
			"10123456"
		],
		[
			null,
			null,
			"(?:4[139]|55|77|9[1-9])\\d{6}",
			"\\d{8}",
			null,
			null,
			"77123456"
		],
		[
			null,
			null,
			"800\\d{5}",
			"\\d{8}",
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"90[016]\\d{5}",
			"\\d{8}",
			null,
			null,
			"90012345"
		],
		[
			null,
			null,
			"80[1-4]\\d{5}",
			"\\d{8}",
			null,
			null,
			"80112345"
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
			"60[2-6]\\d{5}",
			"\\d{8}",
			null,
			null,
			"60271234"
		],
		"AM",
		374,
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
				"(\\d{2})(\\d{6})",
				"$1 $2",
				[
					"1|47"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{6})",
				"$1 $2",
				[
					"4[139]|[5-7]|9[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{5})",
				"$1 $2",
				[
					"[23]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"8|90"
				],
				"0 $1"
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
