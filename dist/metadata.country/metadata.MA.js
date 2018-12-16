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
	"212": [
		"MA",
		"EH"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"EH": [
		null,
		[
			null,
			null,
			"[5-8]\\d{8}",
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
			"528[89]\\d{5}",
			null,
			null,
			null,
			"528812345"
		],
		[
			null,
			null,
			"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}",
			null,
			null,
			null,
			"650123456"
		],
		[
			null,
			null,
			"80\\d{7}",
			null,
			null,
			null,
			"801234567"
		],
		[
			null,
			null,
			"89\\d{7}",
			null,
			null,
			null,
			"891234567"
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
			"5924[01]\\d{4}",
			null,
			null,
			null,
			"592401234"
		],
		"EH",
		212,
		"00",
		"0",
		null,
		null,
		"0",
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
		"528[89]",
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
	],
	"MA": [
		null,
		[
			null,
			null,
			"[5-8]\\d{8}",
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
			"5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",
			null,
			null,
			null,
			"520123456"
		],
		[
			null,
			null,
			"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}",
			null,
			null,
			null,
			"650123456"
		],
		[
			null,
			null,
			"80\\d{7}",
			null,
			null,
			null,
			"801234567"
		],
		[
			null,
			null,
			"89\\d{7}",
			null,
			null,
			null,
			"891234567"
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
			"5924[01]\\d{4}",
			null,
			null,
			null,
			"592401234"
		],
		"MA",
		212,
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
				"(\\d{3})(\\d{6})",
				"$1-$2",
				[
					"5(?:2[015-7]|3[0-4])|[67]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{5})",
				"$1-$2",
				[
					"5(?:2[2-489]|3[5-9]|9)|892",
					"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|9)|892"
				],
				"0$1"
			],
			[
				null,
				"(\\d{5})(\\d{4})",
				"$1-$2",
				[
					"5[23]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"5"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{7})",
				"$1-$2",
				[
					"8"
				],
				"0$1"
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
