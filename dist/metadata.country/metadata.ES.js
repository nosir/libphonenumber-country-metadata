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
	"34": [
		"ES"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"ES": [
		null,
		[
			null,
			null,
			"[5-9]\\d{8}",
			"\\d{9}"
		],
		[
			null,
			null,
			"8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})",
			"\\d{9}",
			null,
			null,
			"810123456"
		],
		[
			null,
			null,
			"(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}",
			"\\d{9}",
			null,
			null,
			"612345678"
		],
		[
			null,
			null,
			"[89]00\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"80[367]\\d{6}",
			"\\d{9}",
			null,
			null,
			"803123456"
		],
		[
			null,
			null,
			"90[12]\\d{6}",
			"\\d{9}",
			null,
			null,
			"901123456"
		],
		[
			null,
			null,
			"70\\d{7}",
			"\\d{9}",
			null,
			null,
			"701234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"ES",
		34,
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
				"([89]00)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[89]00"
				]
			],
			[
				null,
				"([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[568]|[79][0-8]"
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
			"51\\d{7}",
			"\\d{9}",
			null,
			null,
			"511234567"
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
