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
	"971": [
		"AE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"AE": [
		null,
		[
			null,
			null,
			"[2-79]\\d{7,8}|800\\d{2,9}",
			"\\d{5,12}"
		],
		[
			null,
			null,
			"[2-4679][2-8]\\d{6}",
			"\\d{7,8}",
			null,
			null,
			"22345678"
		],
		[
			null,
			null,
			"5[0256]\\d{7}",
			"\\d{9}",
			null,
			null,
			"501234567"
		],
		[
			null,
			null,
			"400\\d{6}|800\\d{2,9}",
			"\\d{5,12}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"900[02]\\d{5}",
			"\\d{9}",
			null,
			null,
			"900234567"
		],
		[
			null,
			null,
			"700[05]\\d{5}",
			"\\d{9}",
			null,
			null,
			"700012345"
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
		"AE",
		971,
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
				"([2-4679])(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[2-4679][2-8]"
				],
				"0$1"
			],
			[
				null,
				"(5[0256])(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"5"
				],
				"0$1"
			],
			[
				null,
				"([479]00)(\\d)(\\d{5})",
				"$1 $2 $3",
				[
					"[479]0"
				],
				"$1"
			],
			[
				null,
				"([68]00)(\\d{2,9})",
				"$1 $2",
				[
					"60|8"
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
			"NA",
			"NA"
		],
		[
			null,
			null,
			"600[25]\\d{5}",
			"\\d{9}",
			null,
			null,
			"600212345"
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
