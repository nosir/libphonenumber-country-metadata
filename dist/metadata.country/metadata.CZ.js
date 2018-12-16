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
	"420": [
		"CZ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CZ": [
		null,
		[
			null,
			null,
			"(?:[2-578]\\d|60|9\\d{1,4})\\d{7}",
			null,
			null,
			null,
			null,
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
			"(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",
			null,
			null,
			null,
			"212345678",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",
			null,
			null,
			null,
			"601123456",
			null,
			null,
			[
				9
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
			"9(?:0[05689]|76)\\d{6}",
			null,
			null,
			null,
			"900123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"8[134]\\d{7}",
			null,
			null,
			null,
			"811234567",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"70[01]\\d{6}",
			null,
			null,
			null,
			"700123456",
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"9[17]0\\d{6}",
			null,
			null,
			null,
			"910123456",
			null,
			null,
			[
				9
			]
		],
		"CZ",
		420,
		"00",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[2-8]|9[015-7]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"9[36]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"96"
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
			"9(?:5\\d|7[2-4])\\d{6}",
			null,
			null,
			null,
			"972123456",
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
			"9(?:3\\d{9}|6\\d{7,10})",
			null,
			null,
			null,
			"93123456789"
		]
	]
};
