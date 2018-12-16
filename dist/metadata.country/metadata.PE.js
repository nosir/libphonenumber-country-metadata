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
	"51": [
		"PE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"PE": [
		null,
		[
			null,
			null,
			"(?:[14-8]|9\\d)\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				9
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",
			null,
			null,
			null,
			"11234567",
			null,
			null,
			[
				8
			],
			[
				6,
				7
			]
		],
		[
			null,
			null,
			"9\\d{8}",
			null,
			null,
			null,
			"912345678",
			null,
			null,
			[
				9
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
			"805\\d{5}",
			null,
			null,
			null,
			"80512345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"801\\d{5}",
			null,
			null,
			null,
			"80112345",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"80[24]\\d{5}",
			null,
			null,
			null,
			"80212345",
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
		"PE",
		51,
		"19(?:1[124]|77|90)00",
		"0",
		" Anexo ",
		null,
		"0",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d)(\\d{7})",
				"$1 $2",
				[
					"1"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{6})",
				"$1 $2",
				[
					"[4-7]|8[2-4]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{5})",
				"$1 $2",
				[
					"8"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"9"
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
