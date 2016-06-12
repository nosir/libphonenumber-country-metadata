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
	"48": [
		"PL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PL": [
		null,
		[
			null,
			null,
			"[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}",
			"\\d{6,9}"
		],
		[
			null,
			null,
			"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}",
			"\\d{6,9}",
			null,
			null,
			"123456789"
		],
		[
			null,
			null,
			"(?:5[0137]|6[069]|7[2389]|88)\\d{7}",
			"\\d{9}",
			null,
			null,
			"512345678"
		],
		[
			null,
			null,
			"800\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
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
			"801\\d{6}",
			"\\d{9}",
			null,
			null,
			"801234567"
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
			"39\\d{7}",
			"\\d{9}",
			null,
			null,
			"391234567"
		],
		"PL",
		48,
		"00",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{1})(\\d{4})",
				"$1 $2 $3",
				[
					"[12]2"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"26|39|5[0137]|6[0469]|7[02389]|8[08]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"64"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})",
				"$1 $2",
				[
					"64"
				]
			]
		],
		null,
		[
			null,
			null,
			"64\\d{4,7}",
			"\\d{6,9}",
			null,
			null,
			"641234567"
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
