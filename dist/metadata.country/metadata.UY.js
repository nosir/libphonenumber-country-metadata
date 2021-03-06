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
	"598": [
		"UY"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"UY": [
		null,
		[
			null,
			null,
			"(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				8
			]
		],
		[
			null,
			null,
			"(?:2\\d|4[2-7])\\d{6}",
			null,
			null,
			null,
			"21231234",
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
			"9[1-9]\\d{6}",
			null,
			null,
			null,
			"94231234",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"80[05]\\d{4}",
			null,
			null,
			null,
			"8001234",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"90[0-8]\\d{4}",
			null,
			null,
			null,
			"9001234",
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
		"UY",
		598,
		"0(?:0|1[3-9]\\d)",
		"0",
		" int. ",
		null,
		"0",
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"8|90"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[24]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"9"
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
