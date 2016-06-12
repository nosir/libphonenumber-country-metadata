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
	"248": [
		"SC"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SC": [
		null,
		[
			null,
			null,
			"[2468]\\d{5,6}",
			"\\d{6,7}"
		],
		[
			null,
			null,
			"4[2-46]\\d{5}",
			"\\d{7}",
			null,
			null,
			"4217123"
		],
		[
			null,
			null,
			"2[5-8]\\d{5}",
			"\\d{7}",
			null,
			null,
			"2510123"
		],
		[
			null,
			null,
			"8000\\d{2}",
			"\\d{6}",
			null,
			null,
			"800000"
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
			"64\\d{5}",
			"\\d{7}",
			null,
			null,
			"6412345"
		],
		"SC",
		248,
		"0[0-2]",
		null,
		null,
		null,
		null,
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{3})",
				"$1 $2",
				[
					"8"
				]
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[246]"
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
			"NA",
			"NA"
		]
	]
};
