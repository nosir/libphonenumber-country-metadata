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
	"960": [
		"MV"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MV": [
		null,
		[
			null,
			null,
			"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
			null,
			null,
			null,
			null,
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
			"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}",
			null,
			null,
			null,
			"6701234",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"(?:46[46]|(?:7[2-9]|9[14-9])\\d)\\d{4}",
			null,
			null,
			null,
			"7712345",
			null,
			null,
			[
				7
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
			"900\\d{7}",
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
		"MV",
		960,
		"0(?:0|19)",
		null,
		null,
		null,
		null,
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1-$2",
				[
					"[367]|4(?:00|[56])|9[14-9]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[89]"
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
			"4[05]0\\d{4}",
			null,
			null,
			null,
			"4001234",
			null,
			null,
			[
				7
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
