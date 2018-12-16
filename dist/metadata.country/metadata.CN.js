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
	"86": [
		"CN"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CN": [
		null,
		[
			null,
			null,
			"(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}",
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
			"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})",
			null,
			null,
			null,
			"1012345678",
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
			"1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|6[267]\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[189]\\d{2})\\d{6}",
			null,
			null,
			null,
			"13123456789",
			null,
			null,
			[
				11
			]
		],
		[
			null,
			null,
			"(?:10)?800\\d{7}",
			null,
			null,
			null,
			"8001234567",
			null,
			null,
			[
				10,
				12
			]
		],
		[
			null,
			null,
			"16[08]\\d{5}",
			null,
			null,
			null,
			"16812345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
			null,
			null,
			null,
			"4001234567",
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
		"CN",
		86,
		"(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00",
		"0",
		null,
		null,
		"0|(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))",
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[48]00"
				]
			],
			[
				null,
				"(\\d{5,6})",
				"$1",
				[
					"100|95"
				]
			],
			[
				null,
				"(\\d{2})(\\d{5,6})",
				"$1 $2",
				[
					"(?:10|2\\d)[19]",
					"(?:10|2\\d)(?:10|9[56])",
					"(?:10|2\\d)(?:100|9[56])"
				],
				"0$1",
				"$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{5,6})",
				"$1 $2",
				[
					"[3-9]",
					"[3-9]\\d\\d[19]",
					"[3-9]\\d\\d(?:10|9[56])"
				],
				"0$1",
				"$CC $1"
			],
			[
				null,
				"(\\d{3,4})(\\d{4})",
				"$1 $2",
				[
					"[2-9]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4,6})",
				"$1 $2 $3",
				[
					"21"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"10[1-9]|2[02-9]",
					"10[1-9]|2[02-9]",
					"10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"807",
					"8078"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"1(?:[3-57-9]|6[267])"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{5})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"108",
					"1080",
					"10800"
				]
			],
			[
				null,
				"(\\d{3})(\\d{7,8})",
				"$1 $2",
				[
					"950"
				]
			]
		],
		[
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[48]00"
				]
			],
			[
				null,
				"(\\d{2})(\\d{5,6})",
				"$1 $2",
				[
					"(?:10|2\\d)[19]",
					"(?:10|2\\d)(?:10|9[56])",
					"(?:10|2\\d)(?:100|9[56])"
				],
				"0$1",
				"$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{5,6})",
				"$1 $2",
				[
					"[3-9]",
					"[3-9]\\d\\d[19]",
					"[3-9]\\d\\d(?:10|9[56])"
				],
				"0$1",
				"$CC $1"
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4,6})",
				"$1 $2 $3",
				[
					"21"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"10[1-9]|2[02-9]",
					"10[1-9]|2[02-9]",
					"10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"807",
					"8078"
				],
				"0$1",
				"$CC $1",
				1
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"1(?:[3-57-9]|6[267])"
				],
				null,
				"$CC $1"
			],
			[
				null,
				"(\\d{5})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"108",
					"1080",
					"10800"
				]
			],
			[
				null,
				"(\\d{3})(\\d{7,8})",
				"$1 $2",
				[
					"950"
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
			"(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				10,
				11,
				12
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
