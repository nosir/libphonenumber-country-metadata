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
	"855": [
		"KH"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"KH": [
		null,
		[
			null,
			null,
			"1\\d{9}|[1-9]\\d{7,8}",
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
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:2(?:3(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)|[4-6](?:4[56]|[56]\\d)\\d)|(?:3[2-6]|4[2-4]|[5-7][2-5])(?:4[56]|[56]\\d)\\d)\\d{4}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])[236-9]\\d{5}",
			null,
			null,
			null,
			"23756789",
			null,
			null,
			[
				8,
				9
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:(?:(?:1[28]|9[67])\\d|8(?:[013-79]|8\\d))\\d|(?:2[3-6]|4[2-4]|[56][2-5])48|3(?:[18]\\d\\d|[2-6]48)|7(?:(?:[07-9]|[16]\\d)\\d|[2-5]48))\\d{5}|(?:1\\d|6[016-9]|9[0-57-9])\\d{6}",
			null,
			null,
			null,
			"91234567",
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
			"1800(?:1\\d|2[019])\\d{4}",
			null,
			null,
			null,
			"1800123456",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"1900(?:1\\d|2[09])\\d{4}",
			null,
			null,
			null,
			"1900123456",
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
		"KH",
		855,
		"00[14-9]",
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
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[1-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"1"
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
