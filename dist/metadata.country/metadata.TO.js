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
	"676": [
		"TO"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TO": [
		null,
		[
			null,
			null,
			"(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				5,
				7
			]
		],
		[
			null,
			null,
			"(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}",
			null,
			null,
			null,
			"20123",
			null,
			null,
			[
				5
			]
		],
		[
			null,
			null,
			"(?:7[578]|8[46-9])\\d{5}",
			null,
			null,
			null,
			"7715123",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"0800\\d{3}",
			null,
			null,
			null,
			"0800222",
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
		"TO",
		676,
		"00",
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
				"(\\d{2})(\\d{3})",
				"$1-$2",
				[
					"[2-6]|7[014]|8[05]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"7[578]|8"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3})",
				"$1 $2",
				[
					"0"
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
