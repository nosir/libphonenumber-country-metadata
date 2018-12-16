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
	"962": [
		"JO"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"JO": [
		null,
		[
			null,
			null,
			"(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9
			]
		],
		[
			null,
			null,
			"(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[05]0|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}",
			null,
			null,
			null,
			"62001234",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}",
			null,
			null,
			null,
			"790123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"80\\d{6}",
			null,
			null,
			null,
			"80012345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"900\\d{5}",
			null,
			null,
			null,
			"90012345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"85\\d{6}",
			null,
			null,
			null,
			"85012345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"70\\d{7}",
			null,
			null,
			null,
			"700123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		"JO",
		962,
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
				"(\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[2356]|87"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{5,6})",
				"$1 $2",
				[
					"[89]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"7[457-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{7})",
				"$1 $2",
				[
					"7"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"74(?:66|77)\\d{5}",
			null,
			null,
			null,
			"746612345",
			null,
			null,
			[
				9
			]
		],
		null,
		null,
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		],
		[
			null,
			null,
			"8(?:10|8\\d)\\d{5}",
			null,
			null,
			null,
			"88101234",
			null,
			null,
			[
				8
			]
		],
		null,
		null,
		[
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[
				-1
			]
		]
	]
};
