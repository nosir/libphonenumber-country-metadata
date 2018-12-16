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
	"421": [
		"SK"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SK": [
		null,
		[
			null,
			null,
			"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				6,
				7,
				9
			]
		],
		[
			null,
			null,
			"(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",
			null,
			null,
			null,
			"221234567"
		],
		[
			null,
			null,
			"9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}",
			null,
			null,
			null,
			"912123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"800\\d{6}",
			null,
			null,
			null,
			"800123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"9(?:00|[78]\\d)\\d{6}",
			null,
			null,
			null,
			"900123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"8[5-9]\\d{7}",
			null,
			null,
			null,
			"850123456",
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
		[
			null,
			null,
			"6(?:02|5[0-4]|9[0-6])\\d{6}",
			null,
			null,
			null,
			"690123456",
			null,
			null,
			[
				9
			]
		],
		"SK",
		421,
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
				"(\\d)(\\d{2})(\\d{3,4})",
				"$1 $2 $3",
				[
					"21"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"[3-5][1-8]1",
					"[3-5][1-8]1[67]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{3})",
				"$1 $2",
				[
					"909",
					"9090"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3})(\\d{2})",
				"$1/$2 $3 $4",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1/$2 $3 $4",
				[
					"[3-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[689]"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(\\d)(\\d{2})(\\d{3,4})",
				"$1 $2 $3",
				[
					"21"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2,3})",
				"$1 $2 $3",
				[
					"[3-5][1-8]1",
					"[3-5][1-8]1[67]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3})(\\d{2})",
				"$1/$2 $3 $4",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1/$2 $3 $4",
				[
					"[3-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[689]"
				],
				"0$1"
			]
		],
		[
			null,
			null,
			"9090\\d{3}",
			null,
			null,
			null,
			"9090123",
			null,
			null,
			[
				7
			]
		],
		null,
		null,
		[
			null,
			null,
			"(?:(?:602|8(?:00|[5-9]\\d))\\d{3}|9(?:0(?:0\\d{3}|90)|[78]\\d{4}))\\d{3}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				9
			]
		],
		[
			null,
			null,
			"96\\d{7}",
			null,
			null,
			null,
			"961234567",
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
		]
	]
};
