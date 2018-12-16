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
	"381": [
		"RS"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"RS": [
		null,
		[
			null,
			null,
			"[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				4,
				5
			]
		],
		[
			null,
			null,
			"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:0[2-9]|[2-9]\\d)))\\d{3,8}",
			null,
			null,
			null,
			"10234567",
			null,
			null,
			[
				7,
				8,
				9,
				10,
				11,
				12
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
			"6(?:[0-689]|7\\d)\\d{6,7}",
			null,
			null,
			null,
			"601234567",
			null,
			null,
			[
				8,
				9,
				10
			]
		],
		[
			null,
			null,
			"800\\d{3,9}",
			null,
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"(?:78\\d|90[0169])\\d{3,7}",
			null,
			null,
			null,
			"90012345",
			null,
			null,
			[
				6,
				7,
				8,
				9,
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
		"RS",
		381,
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
				"(\\d{3})(\\d{3,9})",
				"$1 $2",
				[
					"(?:2[389]|39)0|[7-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{5,10})",
				"$1 $2",
				[
					"[1-36]"
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
			"7[06]\\d{4,10}",
			null,
			null,
			null,
			"700123456"
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
