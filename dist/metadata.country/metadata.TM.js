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
	"993": [
		"TM"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TM": [
		null,
		[
			null,
			null,
			"[1-6]\\d{7}",
			"\\d{8}"
		],
		[
			null,
			null,
			"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",
			"\\d{8}",
			null,
			null,
			"12345678"
		],
		[
			null,
			null,
			"6[1-9]\\d{6}",
			"\\d{8}",
			null,
			null,
			"66123456"
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
		"TM",
		993,
		"810",
		"8",
		null,
		null,
		"8",
		null,
		"8~10",
		null,
		[
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2-$3-$4",
				[
					"12"
				],
				"(8 $1)"
			],
			[
				null,
				"(\\d{2})(\\d{6})",
				"$1 $2",
				[
					"6"
				],
				"8 $1"
			],
			[
				null,
				"(\\d{3})(\\d)(\\d{2})(\\d{2})",
				"$1 $2-$3-$4",
				[
					"13|[2-5]"
				],
				"(8 $1)"
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
