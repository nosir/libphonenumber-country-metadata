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
	"55": [
		"BR"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BR": [
		null,
		[
			null,
			null,
			"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9,
				10,
				11
			]
		],
		[
			null,
			null,
			"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",
			null,
			null,
			null,
			"1123456789",
			null,
			null,
			[
				10
			],
			[
				8
			]
		],
		[
			null,
			null,
			"(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}",
			null,
			null,
			null,
			"11961234567",
			null,
			null,
			[
				10,
				11
			],
			[
				8
			]
		],
		[
			null,
			null,
			"800\\d{6,7}",
			null,
			null,
			null,
			"800123456",
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
			"(?:300|[59]00\\d?)\\d{6}",
			null,
			null,
			null,
			"300123456",
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
			"(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}",
			null,
			null,
			null,
			"40041234",
			null,
			null,
			[
				8,
				10
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
		"BR",
		55,
		"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
		"0",
		null,
		null,
		"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
		"$2",
		null,
		null,
		[
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1-$2",
				[
					"300|4(?:0[02]|37)",
					"300|4(?:0(?:0|20)|370)"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{4})",
				"$1 $2 $3",
				[
					"[3589]00"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3,5})",
				"$1",
				[
					"1[125689]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1-$2",
				[
					"[2-9](?:0[1-9]|[1-9])"
				]
			],
			[
				null,
				"(\\d{5})(\\d{4})",
				"$1-$2",
				[
					"9(?:0[1-9]|[1-9])"
				]
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2-$3",
				[
					"[1-9][1-9]"
				],
				"($1)",
				"0 $CC ($1)"
			],
			[
				null,
				"(\\d{2})(\\d{5})(\\d{4})",
				"$1 $2-$3",
				[
					"[1-9][1-9]9"
				],
				"($1)",
				"0 $CC ($1)"
			]
		],
		[
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1-$2",
				[
					"300|4(?:0[02]|37)",
					"300|4(?:0(?:0|20)|370)"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2,3})(\\d{4})",
				"$1 $2 $3",
				[
					"[3589]00"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2-$3",
				[
					"[1-9][1-9]"
				],
				"($1)",
				"0 $CC ($1)"
			],
			[
				null,
				"(\\d{2})(\\d{5})(\\d{4})",
				"$1 $2-$3",
				[
					"[1-9][1-9]9"
				],
				"($1)",
				"0 $CC ($1)"
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
			"(?:300\\d|40(?:0\\d|20))\\d{4}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8
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
