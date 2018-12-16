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
	"27": [
		"ZA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"ZA": [
		null,
		[
			null,
			null,
			"[1-9]\\d{8}|8\\d{4,7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				5,
				6,
				7,
				8,
				9
			]
		],
		[
			null,
			null,
			"(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",
			null,
			null,
			null,
			"101234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"(?:6\\d|7[0-46-9]|8[1-5])\\d{7}|8[1-4]\\d{3,6}",
			null,
			null,
			null,
			"711234567"
		],
		[
			null,
			null,
			"80\\d{7}",
			null,
			null,
			null,
			"801234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"(?:86[2-9]|9[0-2]\\d)\\d{6}",
			null,
			null,
			null,
			"862345678",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"860\\d{6}",
			null,
			null,
			null,
			"860123456",
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
		[
			null,
			null,
			"87\\d{7}",
			null,
			null,
			null,
			"871234567",
			null,
			null,
			[
				9
			]
		],
		"ZA",
		27,
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
				"(\\d{2})(\\d{3,4})",
				"$1 $2",
				[
					"8[1-4]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2,3})",
				"$1 $2 $3",
				[
					"8[1-4]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"860"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[1-9]"
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
			"861\\d{6}",
			null,
			null,
			null,
			"861123456",
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
