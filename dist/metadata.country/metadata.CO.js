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
	"57": [
		"CO"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CO": [
		null,
		[
			null,
			null,
			"(?:[13]\\d{0,3}|[24-8])\\d{7}",
			"\\d{7,11}"
		],
		[
			null,
			null,
			"[124-8][2-9]\\d{6}",
			"\\d{8}",
			null,
			null,
			"12345678"
		],
		[
			null,
			null,
			"3(?:0[0-5]|1\\d|2[0-2]|5[01])\\d{7}",
			"\\d{10}",
			null,
			null,
			"3211234567"
		],
		[
			null,
			null,
			"1800\\d{7}",
			"\\d{11}",
			null,
			null,
			"18001234567"
		],
		[
			null,
			null,
			"19(?:0[01]|4[78])\\d{7}",
			"\\d{11}",
			null,
			null,
			"19001234567"
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
		"CO",
		57,
		"00(?:4(?:[14]4|56)|[579])",
		"0",
		null,
		null,
		"0([3579]|4(?:44|56))?",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d)(\\d{7})",
				"$1 $2",
				[
					"1(?:8[2-9]|9[0-3]|[2-7])|[24-8]",
					"1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"
				],
				"($1)",
				"0$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{7})",
				"$1 $2",
				[
					"3"
				],
				null,
				"0$CC $1"
			],
			[
				null,
				"(1)(\\d{3})(\\d{7})",
				"$1-$2-$3",
				[
					"1(?:80|9[04])",
					"1(?:800|9(?:0[01]|4[78]))"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(\\d)(\\d{7})",
				"$1 $2",
				[
					"1(?:8[2-9]|9[0-3]|[2-7])|[24-8]",
					"1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"
				],
				"($1)",
				"0$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{7})",
				"$1 $2",
				[
					"3"
				],
				null,
				"0$CC $1"
			],
			[
				null,
				"(1)(\\d{3})(\\d{7})",
				"$1 $2 $3",
				[
					"1(?:80|9[04])",
					"1(?:800|9(?:0[01]|4[78]))"
				]
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
