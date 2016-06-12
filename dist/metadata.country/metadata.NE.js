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
	"227": [
		"NE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NE": [
		null,
		[
			null,
			null,
			"[0289]\\d{7}",
			"\\d{8}"
		],
		[
			null,
			null,
			"2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
			"\\d{8}",
			null,
			null,
			"20201234"
		],
		[
			null,
			null,
			"(?:8[089]|9\\d)\\d{6}",
			"\\d{8}",
			null,
			null,
			"93123456"
		],
		[
			null,
			null,
			"08\\d{6}",
			"\\d{8}",
			null,
			null,
			"08123456"
		],
		[
			null,
			null,
			"09\\d{6}",
			"\\d{8}",
			null,
			null,
			"09123456"
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
		"NE",
		227,
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
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[289]|09"
				]
			],
			[
				null,
				"(08)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"08"
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
		1,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		]
	]
};
