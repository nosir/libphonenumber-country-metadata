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
	"212": [
		"MA",
		"EH"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MA": [
		null,
		[
			null,
			null,
			"[5689]\\d{8}",
			"\\d{9}"
		],
		[
			null,
			null,
			"5(?:2(?:(?:[015-7]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[235-8]|9[3-9])\\d|8(?:0\\d|[89]0)))\\d{4}",
			"\\d{9}",
			null,
			null,
			"520123456"
		],
		[
			null,
			null,
			"6(?:0[0-8]|[12-79]\\d|8[017])\\d{6}",
			"\\d{9}",
			null,
			null,
			"650123456"
		],
		[
			null,
			null,
			"80\\d{7}",
			"\\d{9}",
			null,
			null,
			"801234567"
		],
		[
			null,
			null,
			"89\\d{7}",
			"\\d{9}",
			null,
			null,
			"891234567"
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
		"MA",
		212,
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
				"([56]\\d{2})(\\d{6})",
				"$1-$2",
				[
					"5(?:2[015-7]|3[0-4])|6"
				],
				"0$1"
			],
			[
				null,
				"([58]\\d{3})(\\d{5})",
				"$1-$2",
				[
					"5(?:2[2-489]|3[5-9])|892",
					"5(?:2(?:[2-48]|90)|3(?:[5-79]|80))|892"
				],
				"0$1"
			],
			[
				null,
				"(5\\d{4})(\\d{4})",
				"$1-$2",
				[
					"5(?:29|38)",
					"5(?:29|38)[89]"
				],
				"0$1"
			],
			[
				null,
				"(8[09])(\\d{7})",
				"$1-$2",
				[
					"8(?:0|9[013-9])"
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
