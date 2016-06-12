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
	"63": [
		"PH"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PH": [
		null,
		[
			null,
			null,
			"2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}",
			"\\d{5,13}"
		],
		[
			null,
			null,
			"2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})",
			"\\d{5,10}",
			null,
			null,
			"21234567"
		],
		[
			null,
			null,
			"(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[236-9]|50|7[34-79]|89|9[4-9]))\\d{7}",
			"\\d{10}",
			null,
			null,
			"9051234567"
		],
		[
			null,
			null,
			"1800\\d{7,9}",
			"\\d{11,13}",
			null,
			null,
			"180012345678"
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
		"PH",
		63,
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
				"(2)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"2"
				],
				"(0$1)"
			],
			[
				null,
				"(2)(\\d{5})",
				"$1 $2",
				[
					"2"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{4})(\\d{4,6})",
				"$1 $2",
				[
					"3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])",
					"3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{5})(\\d{4})",
				"$1 $2",
				[
					"346|4(?:27|9[35])|883",
					"3469|4(?:279|9(?:30|56))|8834"
				],
				"(0$1)"
			],
			[
				null,
				"([3-8]\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[3-8]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"81|9"
				],
				"0$1"
			],
			[
				null,
				"(1800)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1"
				]
			],
			[
				null,
				"(1800)(\\d{1,2})(\\d{3})(\\d{4})",
				"$1 $2 $3 $4",
				[
					"1"
				]
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
