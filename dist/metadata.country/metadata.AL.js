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
	"355": [
		"AL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"AL": [
		null,
		[
			null,
			null,
			"[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}",
			"\\d{5,9}"
		],
		[
			null,
			null,
			"(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}",
			"\\d{5,8}",
			null,
			null,
			"22345678"
		],
		[
			null,
			null,
			"6[6-9]\\d{7}",
			"\\d{9}",
			null,
			null,
			"661234567"
		],
		[
			null,
			null,
			"800\\d{4}",
			"\\d{7}",
			null,
			null,
			"8001234"
		],
		[
			null,
			null,
			"900\\d{3}",
			"\\d{6}",
			null,
			null,
			"900123"
		],
		[
			null,
			null,
			"808\\d{3}",
			"\\d{6}",
			null,
			null,
			"808123"
		],
		[
			null,
			null,
			"700\\d{5}",
			"\\d{8}",
			null,
			null,
			"70012345"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"AL",
		355,
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
				"(4)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"4[0-6]"
				],
				"0$1"
			],
			[
				null,
				"(6[6-9])(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"6"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[2358][2-5]|4[7-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3,5})",
				"$1 $2",
				[
					"[235][16-9]|8[016-9]|[79]"
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
