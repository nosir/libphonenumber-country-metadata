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
	"263": [
		"ZW"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"ZW": [
		null,
		[
			null,
			null,
			"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				3,
				4
			]
		],
		[
			null,
			null,
			"(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|(?:4\\d\\d|9[2-9])\\d\\d?|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
			null,
			null,
			null,
			"1312345",
			null,
			null,
			null,
			[
				3,
				4
			]
		],
		[
			null,
			null,
			"(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}",
			null,
			null,
			null,
			"712345678",
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
			"80(?:[01]\\d|20|8[0-8])\\d{3}",
			null,
			null,
			null,
			"8001234",
			null,
			null,
			[
				7
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
			"86(?:1[12]|30|55|77|8[368])\\d{6}",
			null,
			null,
			null,
			"8686123456",
			null,
			null,
			[
				10
			]
		],
		"ZW",
		263,
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
				"(\\d)(\\d{3})(\\d{2,4})",
				"$1 $2 $3",
				[
					"[49]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3,5})",
				"$1 $2",
				[
					"2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78]|75)"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"80"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{7})",
				"$1 $2",
				[
					"2(?:[05-79]2|4)|(?:39|5[45]|6[15-8])2|8[13-59]",
					"2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
					"2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{6})",
				"$1 $2",
				[
					"8"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3,5})",
				"$1 $2",
				[
					"[16]|2(?:[0-256]|9[0-79])|3(?:[09][0-79]|1[0-689]|[24-6]|3[0-69])|5[0-35-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"29|3|54"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{3,5})",
				"$1 $2",
				[
					"[25]"
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
