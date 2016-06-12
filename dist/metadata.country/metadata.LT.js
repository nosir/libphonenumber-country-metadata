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
	"370": [
		"LT"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"LT": [
		null,
		[
			null,
			null,
			"[3-9]\\d{7}",
			"\\d{8}"
		],
		[
			null,
			null,
			"(?:3[1478]|4[124-6]|52)\\d{6}",
			"\\d{8}",
			null,
			null,
			"31234567"
		],
		[
			null,
			null,
			"6\\d{7}",
			"\\d{8}",
			null,
			null,
			"61234567"
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
			"9(?:0[0239]|10)\\d{5}",
			"\\d{8}",
			null,
			null,
			"90012345"
		],
		[
			null,
			null,
			"808\\d{5}",
			"\\d{8}",
			null,
			null,
			"80812345"
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
		"LT",
		370,
		"00",
		"8",
		null,
		null,
		"[08]",
		null,
		null,
		null,
		[
			[
				null,
				"([34]\\d)(\\d{6})",
				"$1 $2",
				[
					"37|4(?:1|5[45]|6[2-4])"
				],
				"(8-$1)",
				null,
				1
			],
			[
				null,
				"([3-6]\\d{2})(\\d{5})",
				"$1 $2",
				[
					"3[148]|4(?:[24]|6[09])|528|6"
				],
				"(8-$1)",
				null,
				1
			],
			[
				null,
				"([7-9]\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"[7-9]"
				],
				"8 $1",
				null,
				1
			],
			[
				null,
				"(5)(2\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"52[0-79]"
				],
				"(8-$1)",
				null,
				1
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
			"70[67]\\d{5}",
			"\\d{8}",
			null,
			null,
			"70712345"
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
