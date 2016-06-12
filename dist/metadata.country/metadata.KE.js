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
	"254": [
		"KE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"KE": [
		null,
		[
			null,
			null,
			"20\\d{6,7}|[4-9]\\d{6,9}",
			"\\d{7,10}"
		],
		[
			null,
			null,
			"20\\d{6,7}|4(?:[0136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|[26]\\d{7})",
			"\\d{7,9}",
			null,
			null,
			"202012345"
		],
		[
			null,
			null,
			"7(?:[0-36]\\d|5[0-6]|[79][0-7]|8[0-25-9])\\d{6}",
			"\\d{9}",
			null,
			null,
			"712123456"
		],
		[
			null,
			null,
			"800[24-8]\\d{5,6}",
			"\\d{9,10}",
			null,
			null,
			"800223456"
		],
		[
			null,
			null,
			"900[02-9]\\d{5}",
			"\\d{9}",
			null,
			null,
			"900223456"
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
		"KE",
		254,
		"000",
		"0",
		null,
		null,
		"005|0",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d{5,7})",
				"$1 $2",
				[
					"[24-6]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{6})",
				"$1 $2",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[89]"
				],
				"0$1"
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
