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
	"39": [
		"IT",
		"VA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"IT": [
		null,
		[
			null,
			null,
			"0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				6,
				7,
				8,
				9,
				10,
				11
			]
		],
		[
			null,
			null,
			"0(?:(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d|6(?:[0-57-9]\\d\\d|6(?:[0-8]\\d|9[0-79])))\\d{1,6}",
			null,
			null,
			null,
			"0212345678"
		],
		[
			null,
			null,
			"33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}",
			null,
			null,
			null,
			"3123456789",
			null,
			null,
			[
				9,
				10,
				11
			]
		],
		[
			null,
			null,
			"80(?:0\\d{3}|3)\\d{3}",
			null,
			null,
			null,
			"800123456",
			null,
			null,
			[
				6,
				9
			]
		],
		[
			null,
			null,
			"(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d",
			null,
			null,
			null,
			"899123456",
			null,
			null,
			[
				6,
				8,
				9,
				10
			]
		],
		[
			null,
			null,
			"84(?:[08]\\d{3}|[17])\\d{3}",
			null,
			null,
			null,
			"848123456",
			null,
			null,
			[
				6,
				9
			]
		],
		[
			null,
			null,
			"1(?:78\\d|99)\\d{6}",
			null,
			null,
			null,
			"1781234567",
			null,
			null,
			[
				9,
				10
			]
		],
		[
			null,
			null,
			"55\\d{8}",
			null,
			null,
			null,
			"5512345678",
			null,
			null,
			[
				10
			]
		],
		"IT",
		39,
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
				"(\\d{2})(\\d{4,6})",
				"$1 $2",
				[
					"0[26]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3,6})",
				"$1 $2",
				[
					"0[13-57-9][0159]|8(?:03|4[17]|9[245])",
					"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"
				]
			],
			[
				null,
				"(\\d{4})(\\d{2,6})",
				"$1 $2",
				[
					"0(?:[13-579][2-46-8]|8[236-8])"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"894"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"0[26]|5"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"1(?:44|[67]|99)|[38]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3,4})(\\d{4})",
				"$1 $2 $3",
				[
					"0[13-57-9][0159]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"3"
				]
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{5})",
				"$1 $2 $3",
				[
					"0[26]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"0"
				]
			]
		],
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
		1,
		null,
		[
			null,
			null,
			"848\\d{6}",
			null,
			null,
			null,
			null,
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
	],
	"VA": [
		null,
		[
			null,
			null,
			"0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				6,
				7,
				8,
				9,
				10,
				11
			]
		],
		[
			null,
			null,
			"06698\\d{1,6}",
			null,
			null,
			null,
			"0669812345"
		],
		[
			null,
			null,
			"33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}",
			null,
			null,
			null,
			"3123456789",
			null,
			null,
			[
				9,
				10,
				11
			]
		],
		[
			null,
			null,
			"80(?:0\\d{3}|3)\\d{3}",
			null,
			null,
			null,
			"800123456",
			null,
			null,
			[
				6,
				9
			]
		],
		[
			null,
			null,
			"(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d",
			null,
			null,
			null,
			"899123456",
			null,
			null,
			[
				6,
				8,
				9,
				10
			]
		],
		[
			null,
			null,
			"84(?:[08]\\d{3}|[17])\\d{3}",
			null,
			null,
			null,
			"848123456",
			null,
			null,
			[
				6,
				9
			]
		],
		[
			null,
			null,
			"1(?:78\\d|99)\\d{6}",
			null,
			null,
			null,
			"1781234567",
			null,
			null,
			[
				9,
				10
			]
		],
		[
			null,
			null,
			"55\\d{8}",
			null,
			null,
			null,
			"5512345678",
			null,
			null,
			[
				10
			]
		],
		"VA",
		39,
		"00",
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
		null,
		"06698",
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
