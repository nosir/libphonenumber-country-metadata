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
	"506": [
		"CR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CR": [
		null,
		[
			null,
			null,
			"(?:8\\d|90)\\d{8}|[24-8]\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				10
			]
		],
		[
			null,
			null,
			"2(?:[024-7]\\d\\d|1(?:0[7-9]|[1-9]\\d))\\d{4}",
			null,
			null,
			null,
			"22123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"(?:(?:5(?:0[01]|7[0-3])|(?:7[0-3]|8[3-9])\\d)\\d\\d|6(?:[0-4]\\d{3}|500[01]))\\d{3}",
			null,
			null,
			null,
			"83123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"800\\d{7}",
			null,
			null,
			null,
			"8001234567",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"90[059]\\d{7}",
			null,
			null,
			null,
			"9001234567",
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
			"(?:210[0-6]|4\\d{3}|5100)\\d{4}",
			null,
			null,
			null,
			"40001234",
			null,
			null,
			[
				8
			]
		],
		"CR",
		506,
		"00",
		null,
		null,
		null,
		"(19(?:0[0-2468]|1[09]|20|66|77|99))",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[24-7]|8[3-9]"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1-$2-$3",
				[
					"[89]"
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
