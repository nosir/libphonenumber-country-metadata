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
	"423": [
		"LI"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"LI": [
		null,
		[
			null,
			null,
			"(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}",
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
			"(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",
			null,
			null,
			null,
			"2345678",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"(?:6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}",
			null,
			null,
			null,
			"660234567"
		],
		[
			null,
			null,
			"80(?:02[28]|9\\d\\d)\\d\\d",
			null,
			null,
			null,
			"8002222",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",
			null,
			null,
			null,
			"9002222",
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
		"LI",
		423,
		"00",
		"0",
		null,
		null,
		"0|(10(?:01|20|66))",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				[
					"[237-9]"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"6[56]"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"6"
				],
				null,
				"$CC $1"
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
			"870(?:28|87)\\d\\d",
			null,
			null,
			null,
			"8702812",
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
			"697(?:42|56|[78]\\d)\\d{4}",
			null,
			null,
			null,
			"697861234",
			null,
			null,
			[
				9
			]
		]
	]
};
