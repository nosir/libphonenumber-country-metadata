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
	"595": [
		"PY"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PY": [
		null,
		[
			null,
			null,
			"(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}",
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
				9
			],
			[
				5
			]
		],
		[
			null,
			null,
			"(?:2(?:1\\d|2[4-68]|7[15]|9[1-5])|5(?:[1-4]\\d|5[02-4])|6(?:1\\d|3[1-3]|44|7[1-46-8]))\\d{5,6}|3(?:(?:18|3[167]|4[2357]|51)\\d{5,6}|[289]\\d{5,7})|4(?:[1246-8]\\d{5,7}|(?:3[12]|5[13]|9[1-47])\\d{5,6})|7(?:[1-3]\\d{5,7}|(?:4[0-4]|6[1-578]|75|8[0-8])\\d{5,6})|8(?:[1-36]\\d{5,7}|58\\d{5,6})|[26]1\\d{5}",
			null,
			null,
			null,
			"212345678",
			null,
			null,
			[
				7,
				8,
				9
			],
			[
				5,
				6
			]
		],
		[
			null,
			null,
			"9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",
			null,
			null,
			null,
			"961456789",
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
			"8700[0-4]\\d{4}",
			null,
			null,
			null,
			"870012345",
			null,
			null,
			[
				9
			]
		],
		"PY",
		595,
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
				"(\\d{3})(\\d{3,6})",
				"$1 $2",
				[
					"[2-9]0"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{5})",
				"$1 $2",
				[
					"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{4,5})",
				"$1 $2",
				[
					"2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[2-7]|85"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{6})",
				"$1 $2",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"8"
				]
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
			"[2-9]0\\d{4,7}",
			null,
			null,
			null,
			"201234567"
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
