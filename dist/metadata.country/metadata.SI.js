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
	"386": [
		"SI"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SI": [
		null,
		[
			null,
			null,
			"[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}",
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
				8
			]
		],
		[
			null,
			null,
			"(?:[1-357][2-8]|4[24-8])\\d{6}",
			null,
			null,
			null,
			"12345678",
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
			"(?:(?:[37][01]|4[0139]|51)\\d\\d|6(?:[48]\\d\\d|5(?:1\\d|55|[67]0)|9(?:10|[69]\\d)))\\d{4}",
			null,
			null,
			null,
			"31234567",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"80\\d{4,6}",
			null,
			null,
			null,
			"80123456",
			null,
			null,
			[
				6,
				7,
				8
			]
		],
		[
			null,
			null,
			"89[1-3]\\d{2,5}|90\\d{4,6}",
			null,
			null,
			null,
			"90123456"
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
			"(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}",
			null,
			null,
			null,
			"59012345",
			null,
			null,
			[
				8
			]
		],
		"SI",
		386,
		"00|10(?:22|66|88|99)",
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
				"(\\d{2})(\\d{3,6})",
				"$1 $2",
				[
					"8[09]|9"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[12]|[357][2-8]|4[24-8]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[3467]|51"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{5})",
				"$1 $2",
				[
					"[58]"
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
