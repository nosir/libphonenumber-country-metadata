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
	"64": [
		"NZ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NZ": [
		null,
		[
			null,
			null,
			"[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9,
				10
			],
			[
				7
			]
		],
		[
			null,
			null,
			"(?:24099|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{3})\\d{3}",
			null,
			null,
			null,
			"32345678",
			null,
			null,
			[
				8
			],
			[
				7
			]
		],
		[
			null,
			null,
			"2(?:[0-28]\\d?|[79])\\d{7}|21\\d{6}",
			null,
			null,
			null,
			"211234567"
		],
		[
			null,
			null,
			"508\\d{6,7}|80\\d{6,8}",
			null,
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"90\\d{6,7}",
			null,
			null,
			null,
			"900123456",
			null,
			null,
			[
				8,
				9
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
			"70\\d{7}",
			null,
			null,
			null,
			"701234567",
			null,
			null,
			[
				9
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
		"NZ",
		64,
		"0(?:0|161)",
		"0",
		null,
		null,
		"0",
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d)(\\d{3})(\\d{4})",
				"$1-$2 $3",
				[
					"24|[346]|7[2-57-9]|9[2-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"80|9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"2(?:10|74)|[59]|80"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"2[028]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,5})",
				"$1 $2 $3",
				[
					"[278]"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"[28]6\\d{6,7}",
			null,
			null,
			null,
			"26123456",
			null,
			null,
			[
				8,
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
