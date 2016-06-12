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
	"256": [
		"UG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"UG": [
		null,
		[
			null,
			null,
			"\\d{9}",
			"\\d{5,9}"
		],
		[
			null,
			null,
			"20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3[23]\\d|5[0-4]\\d|6[03]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}",
			"\\d{5,9}",
			null,
			null,
			"312345678"
		],
		[
			null,
			null,
			"2030\\d{5}|7(?:0[0-7]|[15789]\\d|2[03]|30|[46][0-4])\\d{6}",
			"\\d{9}",
			null,
			null,
			"712345678"
		],
		[
			null,
			null,
			"800[123]\\d{5}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"90[123]\\d{6}",
			"\\d{9}",
			null,
			null,
			"901123456"
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
		"UG",
		256,
		"00[057]",
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
				"(\\d{3})(\\d{6})",
				"$1 $2",
				[
					"[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{7})",
				"$1 $2",
				[
					"3|4(?:[1-5]|6[0-36-9])"
				],
				"0$1"
			],
			[
				null,
				"(2024)(\\d{5})",
				"$1 $2",
				[
					"2024"
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
