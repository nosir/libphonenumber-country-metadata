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
	"373": [
		"MD"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MD": [
		null,
		[
			null,
			null,
			"(?:[235-7]\\d|[89]0)\\d{6}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				8
			]
		],
		[
			null,
			null,
			"(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",
			null,
			null,
			null,
			"22212345"
		],
		[
			null,
			null,
			"(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}",
			null,
			null,
			null,
			"62112345"
		],
		[
			null,
			null,
			"800\\d{5}",
			null,
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"90[056]\\d{5}",
			null,
			null,
			null,
			"90012345"
		],
		[
			null,
			null,
			"808\\d{5}",
			null,
			null,
			null,
			"80812345"
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
			"3[08]\\d{6}",
			null,
			null,
			null,
			"30123456"
		],
		"MD",
		373,
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
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"22|3"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"[25-7]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{5})",
				"$1 $2",
				[
					"[89]"
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
			"803\\d{5}",
			null,
			null,
			null,
			"80312345"
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
