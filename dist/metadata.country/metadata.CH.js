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
	"41": [
		"CH"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CH": [
		null,
		[
			null,
			null,
			"[2-9]\\d{8}|860\\d{9}",
			"\\d{9}(?:\\d{3})?"
		],
		[
			null,
			null,
			"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",
			"\\d{9}",
			null,
			null,
			"212345678"
		],
		[
			null,
			null,
			"7[5-9]\\d{7}",
			"\\d{9}",
			null,
			null,
			"781234567"
		],
		[
			null,
			null,
			"800\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"90[016]\\d{6}",
			"\\d{9}",
			null,
			null,
			"900123456"
		],
		[
			null,
			null,
			"84[0248]\\d{6}",
			"\\d{9}",
			null,
			null,
			"840123456"
		],
		[
			null,
			null,
			"878\\d{6}",
			"\\d{9}",
			null,
			null,
			"878123456"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"CH",
		41,
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
				"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[2-7]|[89]1"
				],
				"0$1"
			],
			[
				null,
				"([89]\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"8[047]|90"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				[
					"860"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"74[0248]\\d{6}",
			"\\d{9}",
			null,
			null,
			"740123456"
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
			"5[18]\\d{7}",
			"\\d{9}",
			null,
			null,
			"581234567"
		],
		null,
		null,
		[
			null,
			null,
			"860\\d{9}",
			"\\d{12}",
			null,
			null,
			"860123456789"
		]
	]
};
