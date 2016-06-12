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
	"852": [
		"HK"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"HK": [
		null,
		[
			null,
			null,
			"[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}",
			"\\d{5,11}"
		],
		[
			null,
			null,
			"(?:[23]\\d|58)\\d{6}",
			"\\d{8}",
			null,
			null,
			"21234567"
		],
		[
			null,
			null,
			"(?:5[1-79]\\d|6\\d{2}|8[4-79]\\d|9(?:0[1-9]|[1-8]\\d))\\d{5}",
			"\\d{8}",
			null,
			null,
			"51234567"
		],
		[
			null,
			null,
			"800\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"900(?:[0-24-9]\\d{7}|3\\d{1,4})",
			"\\d{5,11}",
			null,
			null,
			"90012345678"
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
			"8[1-3]\\d{6}",
			"\\d{8}",
			null,
			null,
			"81123456"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"HK",
		852,
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
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[235-7]|[89](?:0[1-9]|[1-9])"
				]
			],
			[
				null,
				"(800)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"800"
				]
			],
			[
				null,
				"(900)(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"900"
				]
			],
			[
				null,
				"(900)(\\d{2,5})",
				"$1 $2",
				[
					"900"
				]
			]
		],
		null,
		[
			null,
			null,
			"7\\d{7}",
			"\\d{8}",
			null,
			null,
			"71234567"
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
