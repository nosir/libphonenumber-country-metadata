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
	"231": [
		"LR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"LR": [
		null,
		[
			null,
			null,
			"2\\d{7,8}|[37-9]\\d{8}|4\\d{6}|5\\d{6,8}",
			"\\d{7,9}"
		],
		[
			null,
			null,
			"2\\d{7}",
			"\\d{8}",
			null,
			null,
			"21234567"
		],
		[
			null,
			null,
			"(?:330\\d|4[67]|5\\d|77\\d{2}|88\\d{2}|994\\d)\\d{5}|(?:20\\d{3}|33(?:0\\d{2}|2(?:02|5\\d))|555\\d{2}|77[0567]\\d{2}|88[068]\\d{2}|994\\d{2})\\d{4}",
			"\\d{7,9}",
			null,
			null,
			"770123456"
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
			"90[03]\\d{6}",
			"\\d{9}",
			null,
			null,
			"900123456"
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
			"332(?:0[02]|5\\d)\\d{4}",
			"\\d{9}",
			null,
			null,
			"332001234"
		],
		"LR",
		231,
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
				"(2\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[2579]"
				],
				"0$1"
			],
			[
				null,
				"([4-6])(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[4-6]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[38]"
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
