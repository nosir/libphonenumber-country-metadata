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
			"[2-9]\\d{7,8}",
			"\\d{6,9}"
		],
		[
			null,
			null,
			"(?:20[2-8]|3(?:0[2-7]|[12][35-7]|3[4-7])|4(?:0[2367]|1[267])|5(?:0[467]|1[267]|2[367]))\\d{5}",
			"\\d{6,8}",
			null,
			null,
			"30234567"
		],
		[
			null,
			null,
			"6(?:00\\d|32\\d|[89]\\d{2}|61\\d|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d)))\\d{4}",
			"\\d{8,9}",
			null,
			null,
			"67622901"
		],
		[
			null,
			null,
			"80\\d{6}",
			"\\d{8}",
			null,
			null,
			"80080002"
		],
		[
			null,
			null,
			"(?:9(?:4[1568]|5[178]))\\d{5}",
			"\\d{8}",
			null,
			null,
			"94515151"
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
			"78[1-9]\\d{5}",
			"\\d{8}",
			null,
			null,
			"78108780"
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
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[2-57-9]|6[036-9]",
					"[2-57-9]|6(?:[03689]|7(?:[0-8]|9[3-9]))"
				],
				"0$1"
			],
			[
				null,
				"(67)(9)(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"679",
					"679[0-2]"
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
			"77\\d{6}",
			"\\d{8}",
			null,
			null,
			"77273012"
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
