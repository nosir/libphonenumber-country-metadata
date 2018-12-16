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
	"376": [
		"AD"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"AD": [
		null,
		[
			null,
			null,
			"(?:1|6\\d)\\d{7}|[136-9]\\d{5}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				6,
				8,
				9
			]
		],
		[
			null,
			null,
			"[78]\\d{5}",
			null,
			null,
			null,
			"712345",
			null,
			null,
			[
				6
			]
		],
		[
			null,
			null,
			"690\\d{6}|[36]\\d{5}",
			null,
			null,
			null,
			"312345",
			null,
			null,
			[
				6,
				9
			]
		],
		[
			null,
			null,
			"180[02]\\d{4}",
			null,
			null,
			null,
			"18001234",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"[19]\\d{5}",
			null,
			null,
			null,
			"912345",
			null,
			null,
			[
				6
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
		"AD",
		376,
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
				"(\\d{3})(\\d{3})",
				"$1 $2",
				[
					"[136-9]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"1"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"6"
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
			"1800\\d{4}",
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
