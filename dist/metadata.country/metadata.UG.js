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
	"256": [
		"UG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"UG": [
		null,
		[
			null,
			null,
			"(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}",
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
				5,
				6,
				7
			]
		],
		[
			null,
			null,
			"(?:20(?:(?:(?:[0147]\\d|5[0-4]|8[0-2])\\d|2(?:40|[5-9]\\d)|3(?:0[0-4]|[2367]\\d))\\d|6(?:00[0-2]|30[0-4]|[5-9]\\d\\d))|[34]\\d{5})\\d{3}",
			null,
			null,
			null,
			"312345678",
			null,
			null,
			null,
			[
				5,
				6,
				7
			]
		],
		[
			null,
			null,
			"7(?:(?:[0157-9]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}",
			null,
			null,
			null,
			"712345678"
		],
		[
			null,
			null,
			"800[1-3]\\d{5}",
			null,
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"90[1-3]\\d{6}",
			null,
			null,
			null,
			"901123456"
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
		"UG",
		256,
		"00[057]",
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
				"(\\d{2})(\\d{7})",
				"$1 $2",
				[
					"3|4(?:[0-5]|6[0-36-9])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{4})(\\d{5})",
				"$1 $2",
				[
					"202",
					"2024"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{6})",
				"$1 $2",
				[
					"[247-9]"
				],
				"0$1"
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
