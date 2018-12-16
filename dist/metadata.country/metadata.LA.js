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
	"856": [
		"LA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"LA": [
		null,
		[
			null,
			null,
			"(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}",
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
				6
			]
		],
		[
			null,
			null,
			"(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",
			null,
			null,
			null,
			"21212862",
			null,
			null,
			[
				8
			],
			[
				6
			]
		],
		[
			null,
			null,
			"20(?:2[2389]|5[24-689]|7[6-8]|9[1-35-9])\\d{6}",
			null,
			null,
			null,
			"2023123456",
			null,
			null,
			[
				10
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
		"LA",
		856,
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
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"2[13]|3[14]|[4-8]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"3"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"2"
				],
				"0$1"
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
			"30\\d{7}",
			null,
			null,
			null,
			"301234567",
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
