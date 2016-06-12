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
	"359": [
		"BG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BG": [
		null,
		[
			null,
			null,
			"[23567]\\d{5,7}|[489]\\d{6,8}",
			"\\d{5,9}"
		],
		[
			null,
			null,
			"2(?:[0-8]\\d{5,6}|9\\d{4,6})|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}",
			"\\d{5,8}",
			null,
			null,
			"2123456"
		],
		[
			null,
			null,
			"(?:8[7-9]\\d|9(?:8\\d|99))\\d{6}|4(?:3[0789]|8\\d)\\d{5}",
			"\\d{8,9}",
			null,
			null,
			"48123456"
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
			"90\\d{6}",
			"\\d{8}",
			null,
			null,
			"90123456"
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
			"700\\d{5}",
			"\\d{5,9}",
			null,
			null,
			"70012345"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"BG",
		359,
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
				"(2)(\\d{5})",
				"$1 $2",
				[
					"29"
				],
				"0$1"
			],
			[
				null,
				"(2)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"43[124-7]|70[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{2})",
				"$1 $2 $3",
				[
					"43[124-7]|70[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"[78]00"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"999"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2,3})",
				"$1 $2 $3",
				[
					"[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"48|8[7-9]|9[08]"
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
