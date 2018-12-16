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
	"852": [
		"HK"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"HK": [
		null,
		[
			null,
			null,
			"8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",
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
				11
			]
		],
		[
			null,
			null,
			"(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}",
			null,
			null,
			null,
			"21234567",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"(?:46(?:0[0-6]|10|4[0-57-9])|5(?:(?:[1-59][0-46-9]|6[0-4689])\\d|7(?:[0-2469]\\d|30))|6(?:(?:0[1-9]|[13-59]\\d|[68][0-57-9]|7[0-79])\\d|2(?:[0-57-9]\\d|6[01]))|707[1-5]|8480|9(?:(?:0[1-9]|1[02-9]|[358][0-8]|[467]\\d)\\d|2(?:[0-8]\\d|9[03-9])))\\d{4}",
			null,
			null,
			null,
			"51234567",
			null,
			null,
			[
				8
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
			"900(?:[0-24-9]\\d{7}|3\\d{1,4})",
			null,
			null,
			null,
			"90012345678",
			null,
			null,
			[
				5,
				6,
				7,
				8,
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
			"8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",
			null,
			null,
			null,
			"81123456",
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
		"HK",
		852,
		"00(?:30|5[09]|[126-9]?)",
		null,
		null,
		null,
		null,
		null,
		"00",
		null,
		[
			[
				null,
				"(\\d{3})(\\d{2,5})",
				"$1 $2",
				[
					"900",
					"9003"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"8"
				]
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"9"
				]
			]
		],
		null,
		[
			null,
			null,
			"7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
			null,
			null,
			null,
			"71123456",
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
		],
		[
			null,
			null,
			"30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",
			null,
			null,
			null,
			"30161234",
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
