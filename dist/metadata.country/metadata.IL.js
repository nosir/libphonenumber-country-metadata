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
	"972": [
		"IL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"IL": [
		null,
		[
			null,
			null,
			"[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}",
			"\\d{4,10}"
		],
		[
			null,
			null,
			"[2-489]\\d{7}",
			"\\d{7,8}",
			null,
			null,
			"21234567"
		],
		[
			null,
			null,
			"5(?:[02-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[67]|7[0178]|8[6-9]|9[4-9])|6[2-9]\\d)\\d{5}",
			"\\d{9}",
			null,
			null,
			"501234567"
		],
		[
			null,
			null,
			"1(?:80[019]\\d{3}|255)\\d{3}",
			"\\d{7,10}",
			null,
			null,
			"1800123456"
		],
		[
			null,
			null,
			"1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}",
			"\\d{8,10}",
			null,
			null,
			"1919123456"
		],
		[
			null,
			null,
			"1700\\d{6}",
			"\\d{10}",
			null,
			null,
			"1700123456"
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
			"7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[0168])|7\\d{2}|8(?:2\\d|33|55|77|81)|9[29]\\d)\\d{5}",
			"\\d{9}",
			null,
			null,
			"771234567"
		],
		"IL",
		972,
		"0(?:0|1[2-9])",
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
				"([2-489])(\\d{3})(\\d{4})",
				"$1-$2-$3",
				[
					"[2-489]"
				],
				"0$1"
			],
			[
				null,
				"([57]\\d)(\\d{3})(\\d{4})",
				"$1-$2-$3",
				[
					"[57]"
				],
				"0$1"
			],
			[
				null,
				"(1)([7-9]\\d{2})(\\d{3})(\\d{3})",
				"$1-$2-$3-$4",
				[
					"1[7-9]"
				],
				"$1"
			],
			[
				null,
				"(1255)(\\d{3})",
				"$1-$2",
				[
					"125"
				],
				"$1"
			],
			[
				null,
				"(1200)(\\d{3})(\\d{3})",
				"$1-$2-$3",
				[
					"120"
				],
				"$1"
			],
			[
				null,
				"(1212)(\\d{2})(\\d{2})",
				"$1-$2-$3",
				[
					"121"
				],
				"$1"
			],
			[
				null,
				"(1599)(\\d{6})",
				"$1-$2",
				[
					"15"
				],
				"$1"
			],
			[
				null,
				"(\\d{4})",
				"*$1",
				[
					"[2-689]"
				],
				"$1"
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
			"1700\\d{6}|[2-689]\\d{3}",
			"\\d{4,10}",
			null,
			null,
			"1700123456"
		],
		[
			null,
			null,
			"[2-689]\\d{3}|1599\\d{6}",
			"\\d{4}(?:\\d{6})?",
			null,
			null,
			"1599123456"
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
