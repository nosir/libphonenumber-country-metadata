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
	"381": [
		"RS"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"RS": [
		null,
		[
			null,
			null,
			"[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})",
			"\\d{5,12}"
		],
		[
			null,
			null,
			"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}",
			"\\d{5,12}",
			null,
			null,
			"10234567"
		],
		[
			null,
			null,
			"6(?:[0-689]|7\\d)\\d{6,7}",
			"\\d{8,10}",
			null,
			null,
			"601234567"
		],
		[
			null,
			null,
			"800\\d{3,9}",
			"\\d{6,12}",
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"(?:90[0169]|78\\d)\\d{3,7}",
			"\\d{6,12}",
			null,
			null,
			"90012345"
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
		"RS",
		381,
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
				"([23]\\d{2})(\\d{4,9})",
				"$1 $2",
				[
					"(?:2[389]|39)0"
				],
				"0$1"
			],
			[
				null,
				"([1-3]\\d)(\\d{5,10})",
				"$1 $2",
				[
					"1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"
				],
				"0$1"
			],
			[
				null,
				"(6\\d)(\\d{6,8})",
				"$1 $2",
				[
					"6"
				],
				"0$1"
			],
			[
				null,
				"([89]\\d{2})(\\d{3,9})",
				"$1 $2",
				[
					"[89]"
				],
				"0$1"
			],
			[
				null,
				"(7[26])(\\d{4,9})",
				"$1 $2",
				[
					"7[26]"
				],
				"0$1"
			],
			[
				null,
				"(7[08]\\d)(\\d{4,9})",
				"$1 $2",
				[
					"7[08]"
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
			"7[06]\\d{4,10}",
			"\\d{6,12}",
			null,
			null,
			"700123456"
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
