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
	"372": [
		"EE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"EE": [
		null,
		[
			null,
			null,
			"1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}",
			"\\d{4,10}"
		],
		[
			null,
			null,
			"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",
			"\\d{7}",
			null,
			null,
			"3212345"
		],
		[
			null,
			null,
			"(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}",
			"\\d{7,8}",
			null,
			null,
			"51234567"
		],
		[
			null,
			null,
			"800(?:0\\d{3}|1\\d|[2-9])\\d{3}",
			"\\d{7,10}",
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"(?:40\\d{2}|900)\\d{4}",
			"\\d{7,8}",
			null,
			null,
			"9001234"
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
			"70[0-2]\\d{5}",
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
		"EE",
		372,
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
				"([3-79]\\d{2})(\\d{4})",
				"$1 $2",
				[
					"[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]",
					"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"
				]
			],
			[
				null,
				"(70)(\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"70"
				]
			],
			[
				null,
				"(8000)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"800",
					"8000"
				]
			],
			[
				null,
				"([458]\\d{3})(\\d{3,4})",
				"$1 $2",
				[
					"40|5|8(?:00|[1-5])",
					"40|5|8(?:00[1-9]|[1-5])"
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
			"1\\d{3,4}|800[2-9]\\d{3}",
			"\\d{4,7}",
			null,
			null,
			"8002123"
		],
		[
			null,
			null,
			"1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}",
			"\\d{4,5}",
			null,
			null,
			"12123"
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
