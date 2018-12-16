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
	"387": [
		"BA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BA": [
		null,
		[
			null,
			null,
			"(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9
			],
			[
				6
			]
		],
		[
			null,
			null,
			"(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",
			null,
			null,
			null,
			"30212345",
			null,
			null,
			[
				8
			],
			[
				6
			]
		],
		[
			null,
			null,
			"6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}",
			null,
			null,
			null,
			"61123456"
		],
		[
			null,
			null,
			"8[08]\\d{6}",
			null,
			null,
			null,
			"80123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"9[0246]\\d{6}",
			null,
			null,
			null,
			"90123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"8[12]\\d{6}",
			null,
			null,
			null,
			"82123456",
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
		"BA",
		387,
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
				"(\\d{3})(\\d{3})",
				"$1-$2",
				[
					"[2-9]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2-$3",
				[
					"[3-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"6[1-356]|[7-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"6"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2-$3",
				[
					"[3-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"6[1-356]|[7-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"6"
				],
				"0$1"
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
		],
		[
			null,
			null,
			"70(?:3[0146]|[56]0)\\d{4}",
			null,
			null,
			null,
			"70341234",
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
