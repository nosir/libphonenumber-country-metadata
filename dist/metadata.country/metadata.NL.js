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
	"31": [
		"NL"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NL": [
		null,
		[
			null,
			null,
			"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}",
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
			]
		],
		[
			null,
			null,
			"(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",
			null,
			null,
			null,
			"101234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"6[1-58]\\d{7}",
			null,
			null,
			null,
			"612345678",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"800\\d{4,7}",
			null,
			null,
			null,
			"8001234",
			null,
			null,
			[
				7,
				8,
				9,
				10
			]
		],
		[
			null,
			null,
			"90[069]\\d{4,7}",
			null,
			null,
			null,
			"9061234",
			null,
			null,
			[
				7,
				8,
				9,
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
		[
			null,
			null,
			"(?:85|91)\\d{7}",
			null,
			null,
			null,
			"851234567",
			null,
			null,
			[
				9
			]
		],
		"NL",
		31,
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
				"(\\d{2})(\\d{3,4})",
				"$1 $2",
				[
					"14"
				]
			],
			[
				null,
				"(\\d{3})(\\d{4,7})",
				"$1 $2",
				[
					"[89]0"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[1-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{8})",
				"$1 $2",
				[
					"6[1-58]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{7})",
				"$1 $2",
				[
					"6"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(\\d{3})(\\d{4,7})",
				"$1 $2",
				[
					"[89]0"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[1-5]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{8})",
				"$1 $2",
				[
					"6[1-58]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{7})",
				"$1 $2",
				[
					"6"
				],
				"0$1"
			]
		],
		[
			null,
			null,
			"66\\d{7}",
			null,
			null,
			null,
			"662345678",
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
			"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				5,
				6
			]
		],
		[
			null,
			null,
			"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}",
			null,
			null,
			null,
			"14020",
			null,
			null,
			[
				5,
				6,
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
