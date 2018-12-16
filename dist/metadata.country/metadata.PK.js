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
	"92": [
		"PK"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PK": [
		null,
		[
			null,
			null,
			"(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
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
				11,
				12
			],
			[
				5,
				6,
				7
			]
		],
		[
			null,
			null,
			"2(?:(?:1[2-9]\\d|[25][2-9])\\d{6}|(?:3[2358]|4[2-4]|9[2-8])[2-9]\\d{5,6})|4(?:(?:[0146-9][2-9]|2[2-9]\\d)\\d{6}|5[3479][2-9]\\d{5,6})|5(?:(?:[1-35-7][2-9]|8[126]\\d)\\d{6}|4[2-467][2-9]\\d{5,6})|6(?:0[468][2-9]\\d{5,6}|[1-8][2-9]\\d{6})|7(?:[14][2-9]\\d{6}|2[236][2-9]\\d{5,6})|8(?:[16][2-9]\\d{6}|(?:2[2-689]|3[23578]|4[3478]|5[2356])[2-9]\\d{5,6})|9(?:1[2-9]\\d{6}|(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])[2-9]\\d{5,6})",
			null,
			null,
			null,
			"2123456789",
			null,
			null,
			[
				9,
				10
			],
			[
				5,
				6,
				7,
				8
			]
		],
		[
			null,
			null,
			"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",
			null,
			null,
			null,
			"3012345678",
			null,
			null,
			[
				10
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
			"900\\d{5}",
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
			"122\\d{6}",
			null,
			null,
			null,
			"122044444",
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
		"PK",
		92,
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
				"(\\d{3})(\\d{3})(\\d{2})",
				"$1 $2 $3",
				[
					"[89]0"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{5})",
				"$1 $2",
				[
					"1"
				]
			],
			[
				null,
				"(\\d{2})(\\d{7,8})",
				"$1 $2",
				[
					"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{6,7})",
				"$1 $2",
				[
					"2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
					"(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356]))[2-9]|9(?:2(?:2[2-9]|[3-8])|(?:3[27-9]|4[2-6]|6[3569])[2-9]|9(?:[25-7][2-9]|8))"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{5})(\\d{5})",
				"$1 $2",
				[
					"58"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{7})",
				"$1 $2",
				[
					"3"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"[24-9]"
				],
				"(0$1)"
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
			"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
			null,
			null,
			null,
			"21111825888",
			null,
			null,
			[
				11,
				12
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
