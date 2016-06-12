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
	"33": [
		"FR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"FR": [
		null,
		[
			null,
			null,
			"[1-9]\\d{8}",
			"\\d{9}"
		],
		[
			null,
			null,
			"[1-5]\\d{8}",
			"\\d{9}",
			null,
			null,
			"123456789"
		],
		[
			null,
			null,
			"6\\d{8}|7(?:00\\d{6}|[3-9]\\d{7})",
			"\\d{9}",
			null,
			null,
			"612345678"
		],
		[
			null,
			null,
			"80[0-5]\\d{6}",
			"\\d{9}",
			null,
			null,
			"801234567"
		],
		[
			null,
			null,
			"89[1-37-9]\\d{6}",
			"\\d{9}",
			null,
			null,
			"891123456"
		],
		[
			null,
			null,
			"8(?:1[019]|2[0156]|84|90)\\d{6}",
			"\\d{9}",
			null,
			null,
			"810123456"
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
			"9\\d{8}",
			"\\d{9}",
			null,
			null,
			"912345678"
		],
		"FR",
		33,
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
				"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				[
					"[1-79]"
				],
				"0$1"
			],
			[
				null,
				"(1\\d{2})(\\d{3})",
				"$1 $2",
				[
					"11"
				],
				"$1"
			],
			[
				null,
				"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"8"
				],
				"0 $1"
			]
		],
		[
			[
				null,
				"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				[
					"[1-79]"
				],
				"0$1"
			],
			[
				null,
				"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"8"
				],
				"0 $1"
			]
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
		],
		[
			null,
			null,
			"80[6-9]\\d{6}",
			"\\d{9}",
			null,
			null,
			"806123456"
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
