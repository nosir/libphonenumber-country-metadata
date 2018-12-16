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
	"357": [
		"CY"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CY": [
		null,
		[
			null,
			null,
			"(?:[279]\\d|[58]0)\\d{6}",
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
			"2[2-6]\\d{6}",
			null,
			null,
			null,
			"22345678"
		],
		[
			null,
			null,
			"9[4-79]\\d{6}",
			null,
			null,
			null,
			"96123456"
		],
		[
			null,
			null,
			"800\\d{5}",
			null,
			null,
			null,
			"80001234"
		],
		[
			null,
			null,
			"90[09]\\d{5}",
			null,
			null,
			null,
			"90012345"
		],
		[
			null,
			null,
			"80[1-9]\\d{5}",
			null,
			null,
			null,
			"80112345"
		],
		[
			null,
			null,
			"700\\d{5}",
			null,
			null,
			null,
			"70012345"
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
		"CY",
		357,
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
				"(\\d{2})(\\d{6})",
				"$1 $2",
				[
					"[257-9]"
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
			"(?:50|77)\\d{6}",
			null,
			null,
			null,
			"77123456"
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
