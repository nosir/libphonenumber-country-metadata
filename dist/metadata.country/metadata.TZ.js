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
	"255": [
		"TZ"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"TZ": [
		null,
		[
			null,
			null,
			"(?:[26-8]\\d|41|90)\\d{7}",
			null,
			null,
			null,
			null,
			null,
			null,
			[
				9
			]
		],
		[
			null,
			null,
			"2[2-8]\\d{7}",
			null,
			null,
			null,
			"222345678"
		],
		[
			null,
			null,
			"(?:6[2-9]|7[13-9])\\d{7}",
			null,
			null,
			null,
			"621234567"
		],
		[
			null,
			null,
			"80[08]\\d{6}",
			null,
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"90\\d{7}",
			null,
			null,
			null,
			"900123456"
		],
		[
			null,
			null,
			"8(?:40|6[01])\\d{6}",
			null,
			null,
			null,
			"840123456"
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
			"41\\d{7}",
			null,
			null,
			null,
			"412345678"
		],
		"TZ",
		255,
		"00[056]",
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
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[24]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[67]"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{2})(\\d{4})",
				"$1 $2 $3",
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
			"(?:8(?:[04]0|6[01])|90\\d)\\d{6}"
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
