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
	"65": [
		"SG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SG": [
		null,
		[
			null,
			null,
			"(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				10,
				11
			]
		],
		[
			null,
			null,
			"6[1-9]\\d{6}",
			null,
			null,
			null,
			"61234567",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"(?:8[1-8]|9[0-8])\\d{6}",
			null,
			null,
			null,
			"81234567",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"(?:18|8)00\\d{7}",
			null,
			null,
			null,
			"18001234567",
			null,
			null,
			[
				10,
				11
			]
		],
		[
			null,
			null,
			"1900\\d{7}",
			null,
			null,
			null,
			"19001234567",
			null,
			null,
			[
				11
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
			"3[12]\\d{6}",
			null,
			null,
			null,
			"31234567",
			null,
			null,
			[
				8
			]
		],
		"SG",
		65,
		"0[0-3]\\d",
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
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[369]|8[1-8]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"8"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1[89]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"70"
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
			"7000\\d{7}",
			null,
			null,
			null,
			"70001234567",
			null,
			null,
			[
				11
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
