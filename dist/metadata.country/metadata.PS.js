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
	"970": [
		"PS"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PS": [
		null,
		[
			null,
			null,
			"[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})",
			"\\d{4,10}"
		],
		[
			null,
			null,
			"(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}",
			"\\d{7,8}",
			null,
			null,
			"22234567"
		],
		[
			null,
			null,
			"5[69]\\d{7}",
			"\\d{9}",
			null,
			null,
			"599123456"
		],
		[
			null,
			null,
			"1800\\d{6}",
			"\\d{10}",
			null,
			null,
			"1800123456"
		],
		[
			null,
			null,
			"1(?:4|9\\d)\\d{2}",
			"\\d{4,5}",
			null,
			null,
			"19123"
		],
		[
			null,
			null,
			"1700\\d{6}",
			"\\d{10}",
			null,
			null,
			"1700123456"
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
		"PS",
		970,
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
				"([2489])(2\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"[2489]"
				],
				"0$1"
			],
			[
				null,
				"(5[69]\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"5"
				],
				"0$1"
			],
			[
				null,
				"(1[78]00)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"1[78]"
				],
				"$1"
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
