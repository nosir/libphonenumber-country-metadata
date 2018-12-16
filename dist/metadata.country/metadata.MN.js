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
	"976": [
		"MN"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MN": [
		null,
		[
			null,
			null,
			"[12]\\d{8,9}|[1257-9]\\d{7}",
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
				4,
				5,
				6
			]
		],
		[
			null,
			null,
			"(?:[12](?:1|2[1-37]|(?:3[2-8]|4[2-68]|5[1-4689])\\d?)|5[0568])\\d{6}|[12]2[1-3]\\d{5}",
			null,
			null,
			null,
			"50123456",
			null,
			null,
			null,
			[
				4,
				5,
				6
			]
		],
		[
			null,
			null,
			"(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}",
			null,
			null,
			null,
			"88123456",
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
			"7[05-8]\\d{6}",
			null,
			null,
			null,
			"75123456",
			null,
			null,
			[
				8
			]
		],
		"MN",
		976,
		"001",
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
				"(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"[12]1"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[57-9]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{5,6})",
				"$1 $2",
				[
					"[12]2[1-3]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{5,6})",
				"$1 $2",
				[
					"[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
					"[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{5})(\\d{4,5})",
				"$1 $2",
				[
					"[12]"
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
