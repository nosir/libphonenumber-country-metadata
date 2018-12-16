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
	"685": [
		"WS"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"WS": [
		null,
		[
			null,
			null,
			"(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}",
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
				10
			]
		],
		[
			null,
			null,
			"(?:[2-5]\\d|6[1-9])\\d{3}",
			null,
			null,
			null,
			"22123",
			null,
			null,
			[
				5
			]
		],
		[
			null,
			null,
			"(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}",
			null,
			null,
			null,
			"7212345",
			null,
			null,
			[
				7,
				10
			]
		],
		[
			null,
			null,
			"800\\d{3}",
			null,
			null,
			null,
			"800123",
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
		"WS",
		685,
		"0",
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
				"(\\d{5})",
				"$1",
				[
					"[2-6]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3,7})",
				"$1 $2",
				[
					"8"
				]
			],
			[
				null,
				"(\\d{2})(\\d{5})",
				"$1 $2",
				[
					"7"
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
