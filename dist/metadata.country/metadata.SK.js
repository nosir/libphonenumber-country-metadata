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
	"421": [
		"SK"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SK": [
		null,
		[
			null,
			null,
			"(?:[2-68]\\d{5,8}|9\\d{6,8})",
			"\\d{6,9}"
		],
		[
			null,
			null,
			"2(?:16\\d{3,4}|\\d{8})|[3-5](?:[1-8]16\\d{2,3}|\\d{8})",
			"\\d{6,9}",
			null,
			null,
			"212345678"
		],
		[
			null,
			null,
			"9(?:0[1-8]|1[0-24-9]|4[0489]|50)\\d{6}",
			"\\d{9}",
			null,
			null,
			"912123456"
		],
		[
			null,
			null,
			"800\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"9(?:[78]\\d{7}|00\\d{6})",
			"\\d{9}",
			null,
			null,
			"900123456"
		],
		[
			null,
			null,
			"8[5-9]\\d{7}",
			"\\d{9}",
			null,
			null,
			"850123456"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"6(?:02|5[0-4]|9[0-6])\\d{6}",
			"\\d{9}",
			null,
			null,
			"690123456"
		],
		"SK",
		421,
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
				"(2)(16)(\\d{3,4})",
				"$1 $2 $3",
				[
					"216"
				],
				"0$1"
			],
			[
				null,
				"([3-5]\\d)(16)(\\d{2,3})",
				"$1 $2 $3",
				[
					"[3-5]"
				],
				"0$1"
			],
			[
				null,
				"(2)(\\d{3})(\\d{3})(\\d{2})",
				"$1/$2 $3 $4",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})",
				"$1/$2 $3 $4",
				[
					"[3-5]"
				],
				"0$1"
			],
			[
				null,
				"([689]\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[689]"
				],
				"0$1"
			],
			[
				null,
				"(9090)(\\d{3})",
				"$1 $2",
				[
					"9090"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"9090\\d{3}",
			"\\d{7}",
			null,
			null,
			"9090123"
		],
		null,
		null,
		[
			null,
			null,
			"(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}",
			"\\d{7,9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"96\\d{7}",
			"\\d{9}",
			null,
			null,
			"961234567"
		],
		null,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		]
	]
};
