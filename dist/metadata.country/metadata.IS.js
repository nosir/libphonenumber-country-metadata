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
	"354": [
		"IS"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"IS": [
		null,
		[
			null,
			null,
			"(?:38\\d|[4-9])\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				9
			]
		],
		[
			null,
			null,
			"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",
			null,
			null,
			null,
			"4101234",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}",
			null,
			null,
			null,
			"6111234"
		],
		[
			null,
			null,
			"800\\d{4}",
			null,
			null,
			null,
			"8001234",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"90\\d{5}",
			null,
			null,
			null,
			"9011234",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		[
			null,
			null,
			"49\\d{5}",
			null,
			null,
			null,
			"4921234",
			null,
			null,
			[
				7
			]
		],
		"IS",
		354,
		"00|1(?:0(?:01|[12]0)|100)",
		null,
		null,
		null,
		null,
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"[4-9]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"3"
				]
			]
		],
		null,
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		null,
		null,
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		[
			null,
			null,
			"809\\d{4}",
			null,
			null,
			null,
			"8091234",
			null,
			null,
			[
				7
			]
		],
		null,
		null,
		[
			null,
			null,
			"(?:689|8(?:7[0189]|80)|95[48])\\d{4}",
			null,
			null,
			null,
			"6891234",
			null,
			null,
			[
				7
			]
		]
	]
};
