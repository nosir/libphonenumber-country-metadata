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
	"378": [
		"SM"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SM": [
		null,
		[
			null,
			null,
			"(?:0549|[5-7]\\d)\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8,
				10
			],
			[
				6
			]
		],
		[
			null,
			null,
			"0549(?:8[0157-9]|9\\d)\\d{4}",
			null,
			null,
			null,
			"0549886377",
			null,
			null,
			[
				10
			],
			[
				6
			]
		],
		[
			null,
			null,
			"6[16]\\d{6}",
			null,
			null,
			null,
			"66661212",
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
		[
			null,
			null,
			"7[178]\\d{6}",
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
			"5[158]\\d{6}",
			null,
			null,
			null,
			"58001110",
			null,
			null,
			[
				8
			]
		],
		"SM",
		378,
		"00",
		null,
		null,
		null,
		"([89]\\d{5})$",
		"0549$1",
		null,
		null,
		[
			[
				null,
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[5-7]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{6})",
				"$1 $2",
				[
					"0"
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
