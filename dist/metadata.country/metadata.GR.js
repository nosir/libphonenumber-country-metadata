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
	"30": [
		"GR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"GR": [
		null,
		[
			null,
			null,
			"[26-9]\\d{9}",
			"\\d{10}"
		],
		[
			null,
			null,
			"2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",
			"\\d{10}",
			null,
			null,
			"2123456789"
		],
		[
			null,
			null,
			"69\\d{8}",
			"\\d{10}",
			null,
			null,
			"6912345678"
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
			"90[19]\\d{7}",
			"\\d{10}",
			null,
			null,
			"9091234567"
		],
		[
			null,
			null,
			"8(?:0[16]|12|25)\\d{7}",
			"\\d{10}",
			null,
			null,
			"8011234567"
		],
		[
			null,
			null,
			"70\\d{8}",
			"\\d{10}",
			null,
			null,
			"7012345678"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"GR",
		30,
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
				"([27]\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"21|7"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"2[2-9]1|[689]"
				]
			],
			[
				null,
				"(2\\d{3})(\\d{6})",
				"$1 $2",
				[
					"2[2-9][02-9]"
				]
			]
		],
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		null,
		null,
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
