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
	"351": [
		"PT"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PT": [
		null,
		[
			null,
			null,
			"[2-46-9]\\d{8}",
			"\\d{9}"
		],
		[
			null,
			null,
			"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",
			"\\d{9}",
			null,
			null,
			"212345678"
		],
		[
			null,
			null,
			"9(?:[1236]\\d{2}|480)\\d{5}",
			"\\d{9}",
			null,
			null,
			"912345678"
		],
		[
			null,
			null,
			"80[02]\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}",
			"\\d{9}",
			null,
			null,
			"760123456"
		],
		[
			null,
			null,
			"80(?:8\\d|9[1579])\\d{5}",
			"\\d{9}",
			null,
			null,
			"808123456"
		],
		[
			null,
			null,
			"884[0-4689]\\d{5}",
			"\\d{9}",
			null,
			null,
			"884123456"
		],
		[
			null,
			null,
			"30\\d{7}",
			"\\d{9}",
			null,
			null,
			"301234567"
		],
		"PT",
		351,
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
				"(2\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"2[12]"
				]
			],
			[
				null,
				"([2-46-9]\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"2[3-9]|[346-9]"
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
			"7(?:0(?:7\\d|8[17]))\\d{5}",
			"\\d{9}",
			null,
			null,
			"707123456"
		],
		null,
		null,
		[
			null,
			null,
			"600\\d{6}",
			"\\d{9}",
			null,
			null,
			"600110000"
		]
	]
};
