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
	"670": [
		"TL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TL": [
		null,
		[
			null,
			null,
			"(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}",
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
			"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",
			null,
			null,
			null,
			"2112345",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"7[3-8]\\d{6}",
			null,
			null,
			null,
			"77212345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"80\\d{5}",
			null,
			null,
			null,
			"8012345",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"90\\d{5}",
			null,
			null,
			null,
			"9012345",
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
			"70\\d{5}",
			null,
			null,
			null,
			"7012345",
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
		"TL",
		670,
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
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"[2-489]|70"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
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
