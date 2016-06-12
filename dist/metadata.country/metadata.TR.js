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
	"90": [
		"TR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TR": [
		null,
		[
			null,
			null,
			"[2-589]\\d{9}|444\\d{4}",
			"\\d{7,10}"
		],
		[
			null,
			null,
			"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",
			"\\d{10}",
			null,
			null,
			"2123456789"
		],
		[
			null,
			null,
			"5(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{7}",
			"\\d{10}",
			null,
			null,
			"5012345678"
		],
		[
			null,
			null,
			"800\\d{7}",
			"\\d{10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"900\\d{7}",
			"\\d{10}",
			null,
			null,
			"9001234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"TR",
		90,
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
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[23]|4(?:[0-35-9]|4[0-35-9])"
				],
				"(0$1)",
				null,
				1
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[589]"
				],
				"0$1",
				null,
				1
			],
			[
				null,
				"(444)(\\d{1})(\\d{3})",
				"$1 $2 $3",
				[
					"444"
				]
			]
		],
		null,
		[
			null,
			null,
			"512\\d{7}",
			"\\d{10}",
			null,
			null,
			"5123456789"
		],
		null,
		null,
		[
			null,
			null,
			"444\\d{4}",
			"\\d{7}",
			null,
			null,
			"4441444"
		],
		[
			null,
			null,
			"444\\d{4}|850\\d{7}",
			"\\d{7,10}",
			null,
			null,
			"4441444"
		],
		null,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		]
	]
};
