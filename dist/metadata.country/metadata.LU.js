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
	"352": [
		"LU"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"LU": [
		null,
		[
			null,
			null,
			"[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				4,
				5,
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
			"(?:(?:2[2-9]|[457]\\d)\\d|3(?:[0-46-9]\\d|5[013-9])|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}",
			null,
			null,
			null,
			"27123456"
		],
		[
			null,
			null,
			"6(?:[269][18]|5[158]|7[189]|81)\\d{6}",
			null,
			null,
			null,
			"628123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"800\\d{5}",
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
			"90[015]\\d{5}",
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
			"801\\d{5}",
			null,
			null,
			null,
			"80112345",
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
		[
			null,
			null,
			"20(?:1\\d{5}|[2-689]\\d{1,7})",
			null,
			null,
			null,
			"20201234",
			null,
			null,
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10
			]
		],
		"LU",
		352,
		"00",
		null,
		null,
		null,
		"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d{3})",
				"$1 $2",
				[
					"2(?:0[2-689]|[2-9])|3(?:[0-46-9]|5[013-9])|[457]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				[
					"2(?:0[2-689]|[2-9])|3(?:[0-46-9]|5[013-9])|[457]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"20[2-689]"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
				"$1 $2 $3 $4",
				[
					"2(?:0[1-689]|[367]|4[3-8])"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"80[01]|90[015]"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"20[2-689]"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"6"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
				"$1 $2 $3 $4 $5",
				[
					"2(?:0[2-689]|[367]|4[3-8])"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
				"$1 $2 $3 $4",
				[
					"2[2-9]|3(?:[0-46-9]|5[013-9])|[457]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
				],
				null,
				"$CC $1"
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
