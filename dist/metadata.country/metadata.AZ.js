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
	"994": [
		"AZ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"AZ": [
		null,
		[
			null,
			null,
			"(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}",
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
				7
			]
		],
		[
			null,
			null,
			"(?:(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}",
			null,
			null,
			null,
			"123123456",
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
			"(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}",
			null,
			null,
			null,
			"401234567"
		],
		[
			null,
			null,
			"88\\d{7}",
			null,
			null,
			null,
			"881234567"
		],
		[
			null,
			null,
			"900200\\d{3}",
			null,
			null,
			null,
			"900200123"
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
		"AZ",
		994,
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
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[12]|365",
					"[12]|365",
					"[12]|365(?:[0-46-9]|5[0-35-9])"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[3-8]"
				],
				"0$1"
			]
		],
		[
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[12]|365",
					"[12]|365",
					"[12]|365(?:[0-46-9]|5[0-35-9])"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[3-8]"
				],
				"0$1"
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
