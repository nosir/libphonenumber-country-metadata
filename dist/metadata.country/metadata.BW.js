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
	"267": [
		"BW"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BW": [
		null,
		[
			null,
			null,
			"[2-79]\\d{6,7}",
			"\\d{7,8}"
		],
		[
			null,
			null,
			"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",
			"\\d{7}",
			null,
			null,
			"2401234"
		],
		[
			null,
			null,
			"7(?:[1-6]\\d|7[014-8])\\d{5}",
			"\\d{8}",
			null,
			null,
			"71123456"
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
			"90\\d{5}",
			"\\d{7}",
			null,
			null,
			"9012345"
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
			"79[12][01]\\d{4}",
			"\\d{8}",
			null,
			null,
			"79101234"
		],
		"BW",
		267,
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
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"[2-6]"
				]
			],
			[
				null,
				"(7\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"7"
				]
			],
			[
				null,
				"(90)(\\d{5})",
				"$1 $2",
				[
					"9"
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
