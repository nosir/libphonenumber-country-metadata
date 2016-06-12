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
	"47": [
		"NO",
		"SJ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NO": [
		null,
		[
			null,
			null,
			"0\\d{4}|[2-9]\\d{7}",
			"\\d{5}(?:\\d{3})?"
		],
		[
			null,
			null,
			"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",
			"\\d{8}",
			null,
			null,
			"21234567"
		],
		[
			null,
			null,
			"(?:4[015-8]|5[89]|87|9\\d)\\d{6}",
			"\\d{8}",
			null,
			null,
			"40612345"
		],
		[
			null,
			null,
			"80[01]\\d{5}",
			"\\d{8}",
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"82[09]\\d{5}",
			"\\d{8}",
			null,
			null,
			"82012345"
		],
		[
			null,
			null,
			"810(?:0[0-6]|[2-8]\\d)\\d{3}",
			"\\d{8}",
			null,
			null,
			"81021234"
		],
		[
			null,
			null,
			"880\\d{5}",
			"\\d{8}",
			null,
			null,
			"88012345"
		],
		[
			null,
			null,
			"85[0-5]\\d{5}",
			"\\d{8}",
			null,
			null,
			"85012345"
		],
		"NO",
		47,
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
				"([489]\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"[489]"
				]
			],
			[
				null,
				"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[235-7]"
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
			"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",
			"\\d{5}(?:\\d{3})?",
			null,
			null,
			"01234"
		],
		1,
		null,
		[
			null,
			null,
			"81[23]\\d{5}",
			"\\d{8}",
			null,
			null,
			"81212345"
		]
	]
};
