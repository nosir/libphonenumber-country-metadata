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
	"503": [
		"SV"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SV": [
		null,
		[
			null,
			null,
			"[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				7,
				8,
				11
			]
		],
		[
			null,
			null,
			"2[1-6]\\d{6}",
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
			"[67]\\d{7}",
			null,
			null,
			null,
			"70123456",
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"800\\d{4}(?:\\d{4})?",
			null,
			null,
			null,
			"8001234",
			null,
			null,
			[
				7,
				11
			]
		],
		[
			null,
			null,
			"900\\d{4}(?:\\d{4})?",
			null,
			null,
			null,
			"9001234",
			null,
			null,
			[
				7,
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
		"SV",
		503,
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
					"[89]"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})",
				"$1 $2",
				[
					"[267]"
				]
			],
			[
				null,
				"(\\d{3})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"[89]"
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
