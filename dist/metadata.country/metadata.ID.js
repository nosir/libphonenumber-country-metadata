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
	"62": [
		"ID"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"ID": [
		null,
		[
			null,
			null,
			"(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				5,
				6
			]
		],
		[
			null,
			null,
			"2(?:[124]\\d{7,8}|(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])\\d{5,8})|(?:3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}|6(?:1(?:[0-8]\\d{4,7}|9\\d{4,8})|(?:[25]\\d|3[1-69]|4[1-6])\\d{5,8})|2(?:1(?:14|500)|2\\d{3})\\d{3}",
			null,
			null,
			null,
			"218350123",
			null,
			null,
			[
				7,
				8,
				9,
				10,
				11
			],
			[
				5,
				6
			]
		],
		[
			null,
			null,
			"8[1-35-9]\\d{7,10}",
			null,
			null,
			null,
			"812345678",
			null,
			null,
			[
				9,
				10,
				11,
				12
			]
		],
		[
			null,
			null,
			"(?:177\\d|800)\\d{5,7}",
			null,
			null,
			null,
			"8001234567",
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
			"809\\d{7}",
			null,
			null,
			null,
			"8091234567",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"804\\d{7}",
			null,
			null,
			null,
			"8041234567",
			null,
			null,
			[
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
		"ID",
		62,
		"0(?:0[17-9]|10(?:00|1[67]))",
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
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"15"
				]
			],
			[
				null,
				"(\\d{2})(\\d{5,9})",
				"$1 $2",
				[
					"2[124]|[36]1"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{5,7})",
				"$1 $2",
				[
					"800"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{5,8})",
				"$1 $2",
				[
					"[2-79]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{3,4})(\\d{3})",
				"$1-$2-$3",
				[
					"8[1-35-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{6,8})",
				"$1 $2",
				[
					"1"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"804"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"80"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4,5})",
				"$1-$2-$3",
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
		null,
		null,
		[
			null,
			null,
			"8071\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"(?:1500|8071\\d{3})\\d{3}",
			null,
			null,
			null,
			"8071123456",
			null,
			null,
			[
				7,
				10
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
