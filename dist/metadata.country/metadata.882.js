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
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"882": [
		null,
		[
			null,
			null,
			"[13]\\d{6,11}",
			"\\d{7,12}",
			null,
			null,
			"3451234567"
		],
		[
			null,
			null,
			"NA",
			"NA",
			null,
			null,
			"3451234567"
		],
		[
			null,
			null,
			"3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}",
			"\\d{7,10}",
			null,
			null,
			"3451234567"
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
			"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|345\\d{7}",
			"\\d{7,12}",
			null,
			null,
			"3451234567"
		],
		"001",
		882,
		null,
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
				"(\\d{2})(\\d{4})(\\d{3})",
				"$1 $2 $3",
				[
					"3[23]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{5})",
				"$1 $2",
				[
					"16|342"
				]
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"34[57]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"348"
				]
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"1"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"16"
				]
			],
			[
				null,
				"(\\d{2})(\\d{4,5})(\\d{5})",
				"$1 $2 $3",
				[
					"16"
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
			"348[57]\\d{7}",
			"\\d{11}",
			null,
			null,
			"3451234567"
		]
	]
};
