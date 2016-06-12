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
	"230": [
		"MU"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MU": [
		null,
		[
			null,
			null,
			"[2-9]\\d{6,7}",
			"\\d{7,8}"
		],
		[
			null,
			null,
			"(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}",
			"\\d{7,8}",
			null,
			null,
			"2012345"
		],
		[
			null,
			null,
			"5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-2568]\\d|7[15-8])|9[0-8]\\d)\\d{4}",
			"\\d{8}",
			null,
			null,
			"52512345"
		],
		[
			null,
			null,
			"80[012]\\d{4}",
			"\\d{7}",
			null,
			null,
			"8001234"
		],
		[
			null,
			null,
			"30\\d{5}",
			"\\d{7}",
			null,
			null,
			"3012345"
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
			"3(?:20|9\\d)\\d{4}",
			"\\d{7}",
			null,
			null,
			"3201234"
		],
		"MU",
		230,
		"0(?:0|[2-7]0|33)",
		null,
		null,
		null,
		null,
		null,
		"020",
		null,
		[
			[
				null,
				"([2-46-9]\\d{2})(\\d{4})",
				"$1 $2",
				[
					"[2-46-9]"
				]
			],
			[
				null,
				"(5\\d{3})(\\d{4})",
				"$1 $2",
				[
					"5"
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
