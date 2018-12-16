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
	"372": [
		"EE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"EE": [
		null,
		[
			null,
			null,
			"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				8,
				10
			]
		],
		[
			null,
			null,
			"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",
			null,
			null,
			null,
			"3212345",
			null,
			null,
			[
				7
			]
		],
		[
			null,
			null,
			"(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",
			null,
			null,
			null,
			"51234567",
			null,
			null,
			[
				7,
				8
			]
		],
		[
			null,
			null,
			"800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",
			null,
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"(?:40\\d\\d|900)\\d{4}",
			null,
			null,
			null,
			"9001234",
			null,
			null,
			[
				7,
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
			"70[0-2]\\d{5}",
			null,
			null,
			null,
			"70012345",
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
		"EE",
		372,
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
				"(\\d{3})(\\d{4})",
				"$1 $2",
				[
					"[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]",
					"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3,4})",
				"$1 $2",
				[
					"[45]|8(?:00|[1-4])",
					"[45]|8(?:00[1-9]|[1-4])"
				]
			],
			[
				null,
				"(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"7"
				]
			],
			[
				null,
				"(\\d{4})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"80"
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
			"800[2-9]\\d{3}",
			null,
			null,
			null,
			null,
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
