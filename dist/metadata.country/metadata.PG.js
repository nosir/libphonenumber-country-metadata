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
	"675": [
		"PG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PG": [
		null,
		[
			null,
			null,
			"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
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
			"(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9])\\d{4}",
			null,
			null,
			null,
			"3123456"
		],
		[
			null,
			null,
			"(?:7(?:[0-689]\\d|75)|81\\d)\\d{5}",
			null,
			null,
			null,
			"70123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"180\\d{4}",
			null,
			null,
			null,
			"1801234",
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
		[
			null,
			null,
			"2(?:0[0-47]|7[568])\\d{4}",
			null,
			null,
			null,
			"2751234",
			null,
			null,
			[
				7
			]
		],
		"PG",
		675,
		"00|140[1-3]",
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
				"$1 $2",
				[
					"18|[2-69]|85"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[78]"
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
