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
	"358": [
		"FI",
		"AX"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"FI": [
		null,
		[
			null,
			null,
			"1\\d{4,11}|[2-9]\\d{4,10}",
			"\\d{5,12}"
		],
		[
			null,
			null,
			"1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}",
			"\\d{5,12}",
			null,
			null,
			"1312345678"
		],
		[
			null,
			null,
			"4\\d{5,10}|50\\d{4,8}",
			"\\d{6,11}",
			null,
			null,
			"412345678"
		],
		[
			null,
			null,
			"800\\d{4,7}",
			"\\d{7,10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"[67]00\\d{5,6}",
			"\\d{8,9}",
			null,
			null,
			"600123456"
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
		"FI",
		358,
		"00|99[049]",
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
				"(\\d{3})(\\d{3,7})",
				"$1 $2",
				[
					"(?:[1-3]00|[6-8]0)"
				],
				"0$1"
			],
			[
				null,
				"(116\\d{3})",
				"$1",
				[
					"116"
				],
				"$1"
			],
			[
				null,
				"(\\d{2})(\\d{4,10})",
				"$1 $2",
				[
					"[14]|2[09]|50|7[135]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{4,11})",
				"$1 $2",
				[
					"[25689][1-8]|3"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		1,
		null,
		[
			null,
			null,
			"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
			"\\d{5,10}",
			null,
			null,
			"100123"
		],
		[
			null,
			null,
			"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
			"\\d{5,10}",
			null,
			null,
			"10112345"
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
