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
	"32": [
		"BE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BE": [
		null,
		[
			null,
			null,
			"[1-9]\\d{7,8}",
			"\\d{8,9}"
		],
		[
			null,
			null,
			"(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}",
			"\\d{8}",
			null,
			null,
			"12345678"
		],
		[
			null,
			null,
			"4(?:6[0135-8]|[79]\\d|8[3-9])\\d{6}",
			"\\d{9}",
			null,
			null,
			"470123456"
		],
		[
			null,
			null,
			"800\\d{5}",
			"\\d{8}",
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"(?:70[2-467]|90[0-79])\\d{5}",
			"\\d{8}",
			null,
			null,
			"90123456"
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
		"BE",
		32,
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
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"4[6-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[23]|4[23]|9[2-4]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[156]|7[018]|8(?:0[1-9]|[1-79])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"(?:80|9)0"
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
			"78\\d{6}",
			"\\d{8}",
			null,
			null,
			"78123456"
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
