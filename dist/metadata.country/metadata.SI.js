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
	"386": [
		"SI"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SI": [
		null,
		[
			null,
			null,
			"[1-7]\\d{6,7}|[89]\\d{4,7}",
			"\\d{5,8}"
		],
		[
			null,
			null,
			"(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}",
			"\\d{7,8}",
			null,
			null,
			"11234567"
		],
		[
			null,
			null,
			"(?:[37][01]|4[0139]|51|6[48])\\d{6}",
			"\\d{8}",
			null,
			null,
			"31234567"
		],
		[
			null,
			null,
			"80\\d{4,6}",
			"\\d{6,8}",
			null,
			null,
			"80123456"
		],
		[
			null,
			null,
			"90\\d{4,6}|89[1-3]\\d{2,5}",
			"\\d{5,8}",
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
			"(?:59|8[1-3])\\d{6}",
			"\\d{8}",
			null,
			null,
			"59012345"
		],
		"SI",
		386,
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
				"(\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"
				],
				"(0$1)"
			],
			[
				null,
				"([3-7]\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[37][01]|4[0139]|51|6"
				],
				"0$1"
			],
			[
				null,
				"([89][09])(\\d{3,6})",
				"$1 $2",
				[
					"[89][09]"
				],
				"0$1"
			],
			[
				null,
				"([58]\\d{2})(\\d{5})",
				"$1 $2",
				[
					"59|8[1-3]"
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
