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
	"36": [
		"HU"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"HU": [
		null,
		[
			null,
			null,
			"[2357]\\d{8}|[1-9]\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",
			null,
			null,
			null,
			"12345678",
			null,
			null,
			[
				8
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:[257]0|3[01])\\d{7}",
			null,
			null,
			null,
			"201234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"[48]0\\d{6}",
			null,
			null,
			null,
			"80123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"9[01]\\d{6}",
			null,
			null,
			null,
			"90123456",
			null,
			null,
			[
				8
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
			"21\\d{7}",
			null,
			null,
			null,
			"211234567",
			null,
			null,
			[
				9
			]
		],
		"HU",
		36,
		"00",
		"06",
		null,
		null,
		"06",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1"
				],
				"($1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[2-9]"
				],
				"($1)"
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
			"[48]0\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"38\\d{7}",
			null,
			null,
			null,
			"381234567",
			null,
			null,
			[
				9
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
		]
	]
};
