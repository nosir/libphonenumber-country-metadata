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
	"43": [
		"AT"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"AT": [
		null,
		[
			null,
			null,
			"[1-9]\\d{3,12}",
			"\\d{3,13}"
		],
		[
			null,
			null,
			"1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}",
			"\\d{3,13}",
			null,
			null,
			"1234567890"
		],
		[
			null,
			null,
			"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",
			"\\d{7,13}",
			null,
			null,
			"664123456"
		],
		[
			null,
			null,
			"800\\d{6,10}",
			"\\d{9,13}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"(?:9(?:0[01]|3[019]))\\d{6,10}",
			"\\d{9,13}",
			null,
			null,
			"900123456"
		],
		[
			null,
			null,
			"8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}",
			"\\d{8,13}",
			null,
			null,
			"810123456"
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
			"780\\d{6,10}",
			"\\d{9,13}",
			null,
			null,
			"780123456"
		],
		"AT",
		43,
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
				"(116\\d{3})",
				"$1",
				[
					"116"
				],
				"$1"
			],
			[
				null,
				"(1)(\\d{3,12})",
				"$1 $2",
				[
					"1"
				],
				"0$1"
			],
			[
				null,
				"(5\\d)(\\d{3,5})",
				"$1 $2",
				[
					"5[079]"
				],
				"0$1"
			],
			[
				null,
				"(5\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"5[079]"
				],
				"0$1"
			],
			[
				null,
				"(5\\d)(\\d{4})(\\d{4,7})",
				"$1 $2 $3",
				[
					"5[079]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3,10})",
				"$1 $2",
				[
					"316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{3,9})",
				"$1 $2",
				[
					"2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"
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
			"5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}",
			"\\d{5,13}",
			null,
			null,
			"50123"
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
