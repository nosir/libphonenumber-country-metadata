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
	"350": [
		"GI"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"GI": [
		null,
		[
			null,
			null,
			"[2568]\\d{7}",
			"\\d{8}"
		],
		[
			null,
			null,
			"2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}",
			"\\d{8}",
			null,
			null,
			"20012345"
		],
		[
			null,
			null,
			"(?:5[46-8]|62)\\d{6}",
			"\\d{8}",
			null,
			null,
			"57123456"
		],
		[
			null,
			null,
			"80\\d{6}",
			"\\d{8}",
			null,
			null,
			"80123456"
		],
		[
			null,
			null,
			"8[1-689]\\d{6}",
			"\\d{8}",
			null,
			null,
			"88123456"
		],
		[
			null,
			null,
			"87\\d{6}",
			"\\d{8}",
			null,
			null,
			"87123456"
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
			"NA",
			"NA"
		],
		"GI",
		350,
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
				"(\\d{3})(\\d{5})",
				"$1 $2",
				[
					"2"
				]
			]
		],
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		null,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
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
