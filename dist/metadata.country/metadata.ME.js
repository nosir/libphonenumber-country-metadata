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
	"382": [
		"ME"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"ME": [
		null,
		[
			null,
			null,
			"(?:20|[3-79]\\d|80\\d?)\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9
			],
			[
				6
			]
		],
		[
			null,
			null,
			"(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}",
			null,
			null,
			null,
			"30234567",
			null,
			null,
			[
				8
			],
			[
				6
			]
		],
		[
			null,
			null,
			"6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}",
			null,
			null,
			null,
			"67622901",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"80(?:[0-2578]|9\\d)\\d{5}",
			null,
			null,
			null,
			"80080002"
		],
		[
			null,
			null,
			"9(?:4[1568]|5[178])\\d{5}",
			null,
			null,
			null,
			"94515151",
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
			"78[1-49]\\d{5}",
			null,
			null,
			null,
			"78108780",
			null,
			null,
			[
				8
			]
		],
		"ME",
		382,
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
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[2-9]"
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
			"77[1-9]\\d{5}",
			null,
			null,
			null,
			"77273012",
			null,
			null,
			[
				8
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
