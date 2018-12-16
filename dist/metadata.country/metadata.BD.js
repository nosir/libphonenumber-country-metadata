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
	"880": [
		"BD"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BD": [
		null,
		[
			null,
			null,
			"[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
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
			"(?:(?:2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[13][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))|7(?:02|21\\d|[3-589]1|6[12]|72[24])\\d|8(?:(?:[01]|217|3[12])\\d|4[12]|[5-7](?:1\\d|2)))\\d|3(?:(?:0(?:2[348]\\d|3[2-6])|(?:1(?:2[5-7]|[5-7])|3(?:1|24)|[5-7]1)\\d)\\d|2(?:1\\d\\d|2(?:[35]\\d\\d|4))|4(?:1\\d\\d|2(?:[25]\\d\\d|[47]))|8(?:1\\d\\d|2(?:(?:2\\d|4)\\d|3)))|4(?:0(?:2(?:[09]\\d|7)|33\\d\\d)|(?:1\\d|4(?:2[2-46]|5[25])|8(?:23|54))\\d\\d|2(?:1\\d\\d|2(?:[25]|[67]\\d\\d))|3(?:1\\d\\d(?:\\d{2})?|(?:2[236-9]|32)\\d\\d)|525|6(?:(?:[18]|2[3-6]|62)\\d\\d|5(?:[38]|[5-7]\\d\\d))|9(?:(?:[18]|2[2-5])\\d\\d|53\\d\\d?))|5(?:(?:02[03489]|1|22[2457]|32[35-79]|42[46]|[58]26|724)\\d\\d|6(?:(?:[18]|53)\\d\\d|2))|6(?:(?:(?:[04]2[34]|32[3478]|52[47]|[78]2[2-5]|92[2-6])\\d|6(?:[18]\\d|6(?:2(?:2|[34]\\d)|5[245]\\d)))\\d|2(?:(?:2[2-5]|8)\\d\\d|5(?:[3-5]\\d\\d|7)))|9(?:[24]1\\d\\d|[35]1))\\d{3}|(?:3(?:0(?:2[02-9]\\d|3[56])|(?:22[1-5]|32[2-6]|422)\\d|529)|(?:4(?:22[2-8]|32[02-9]|(?:[48][18]|71)\\d|5(?:1\\d|23)|6(?:2[467]|5[3-57]))|5(?:[2-47-9]1\\d|5(?:1\\d|26))|6(?:0(?:1\\d|24)|[3-589]1\\d|665[35])|81|9(?:[024]2|1\\d|81))\\d|732)\\d{3}|(?:4[46]23|5(?:222|32[37]))\\d{3}",
			null,
			null,
			null,
			"27111234"
		],
		[
			null,
			null,
			"(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}",
			null,
			null,
			null,
			"1812345678",
			null,
			null,
			[
				10
			]
		],
		[
			null,
			null,
			"80[03]\\d{7}",
			null,
			null,
			null,
			"8001234567",
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
			"96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}",
			null,
			null,
			null,
			"9604123456",
			null,
			null,
			[
				10
			]
		],
		"BD",
		880,
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
				"(\\d{2})(\\d{4,6})",
				"$1-$2",
				[
					"31[5-7]|[459]1"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3,7})",
				"$1-$2",
				[
					"3(?:[2-5]1|[67]|8[013-9])|4(?:[235]1|4[01346-9]|6[168]|7|[89][18])|5(?:[2-578]1|6[128]|9)|6(?:[0389]1|28|4[14]|5|6[01346-9])|7(?:[2-589]|61)|8(?:0[014-9]|[12]|[3-7]1)|9(?:[24]1|[358])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{3,6})",
				"$1-$2",
				[
					"[13-9]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{7,8})",
				"$1-$2",
				[
					"2"
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
