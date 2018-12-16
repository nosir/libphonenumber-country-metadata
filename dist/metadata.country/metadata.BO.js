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
	"591": [
		"BO"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"BO": [
		null,
		[
			null,
			null,
			"(?:[2-467]\\d{3}|80017)\\d{4}",
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
				7
			]
		],
		[
			null,
			null,
			"(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",
			null,
			null,
			null,
			"22123456",
			null,
			null,
			[
				8
			],
			[
				7
			]
		],
		[
			null,
			null,
			"[67]\\d{7}",
			null,
			null,
			null,
			"71234567",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"80017\\d{4}",
			null,
			null,
			null,
			"800171234",
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
		"BO",
		591,
		"00(?:1\\d)?",
		"0",
		null,
		null,
		"0(1\\d)?",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d)(\\d{7})",
				"$1 $2",
				[
					"[2-4]"
				],
				null,
				"0$CC $1"
			],
			[
				null,
				"(\\d{8})",
				"$1",
				[
					"[67]"
				],
				null,
				"0$CC $1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				[
					"8"
				],
				null,
				"0$CC $1"
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
