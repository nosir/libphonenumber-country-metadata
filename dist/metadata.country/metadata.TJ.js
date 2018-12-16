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
	"992": [
		"TJ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TJ": [
		null,
		[
			null,
			null,
			"(?:[3-59]\\d|77|88)\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				9
			],
			[
				3,
				5,
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",
			null,
			null,
			null,
			"372123456",
			null,
			null,
			null,
			[
				3,
				5,
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}",
			null,
			null,
			null,
			"917123456"
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
		"TJ",
		992,
		"810",
		"8",
		null,
		null,
		"8",
		null,
		"8~10",
		null,
		[
			[
				null,
				"(\\d{4})(\\d)(\\d{4})",
				"$1 $2 $3",
				[
					"3(?:[1245]|3[12])",
					"3(?:[1245]|3(?:1[0-689]|2))"
				],
				null,
				null,
				1
			],
			[
				null,
				"(\\d{6})(\\d)(\\d{2})",
				"$1 $2 $3",
				[
					"33"
				],
				null,
				null,
				1
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"4[148]|[578]|9(?:[0235-9]|1[0-69])"
				],
				null,
				null,
				1
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"[349]"
				],
				null,
				null,
				1
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
