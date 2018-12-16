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
	"56": [
		"CL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CL": [
		null,
		[
			null,
			null,
			"(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}",
			null,
			null,
			null,
			null,
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
			"(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}",
			null,
			null,
			null,
			"221234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}",
			null,
			null,
			null,
			"221234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"(?:1230\\d|800)\\d{6}",
			null,
			null,
			null,
			"800123456",
			null,
			null,
			[
				9,
				11
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
			"600\\d{7,8}",
			null,
			null,
			null,
			"6001234567",
			null,
			null,
			[
				10,
				11
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
			"44\\d{7}",
			null,
			null,
			null,
			"441234567",
			null,
			null,
			[
				9
			]
		],
		"CL",
		56,
		"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0",
		null,
		null,
		null,
		null,
		null,
		null,
		1,
		[
			[
				null,
				"(\\d{4})",
				"$1",
				[
					"1(?:[03-58]|[29]1)"
				]
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"2(?:2|32)",
					"2(?:2|32[0-46-8])"
				],
				"($1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"
				],
				"($1)"
			],
			[
				null,
				"(\\d{5})(\\d{4})",
				"$1 $2",
				[
					"2"
				],
				"($1)"
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"9[2-9]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"44"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[68]00"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"600"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1"
				]
			]
		],
		[
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"2(?:2|32)",
					"2(?:2|32[0-46-8])"
				],
				"($1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"
				],
				"($1)"
			],
			[
				null,
				"(\\d{5})(\\d{4})",
				"$1 $2",
				[
					"2"
				],
				"($1)"
			],
			[
				null,
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"9[2-9]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"44"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[68]00"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"600"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1"
				]
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
			"600\\d{7,8}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				10,
				11
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
