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
	"298": [
		"FO"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"FO": [
		null,
		[
			null,
			null,
			"[2-9]\\d{5}",
			"\\d{6}"
		],
		[
			null,
			null,
			"(?:20|[3-4]\\d|8[19])\\d{4}",
			"\\d{6}",
			null,
			null,
			"201234"
		],
		[
			null,
			null,
			"(?:[27][1-9]|5\\d)\\d{4}",
			"\\d{6}",
			null,
			null,
			"211234"
		],
		[
			null,
			null,
			"80[257-9]\\d{3}",
			"\\d{6}",
			null,
			null,
			"802123"
		],
		[
			null,
			null,
			"90(?:[1345][15-7]|2[125-7]|99)\\d{2}",
			"\\d{6}",
			null,
			null,
			"901123"
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
		[
			null,
			null,
			"(?:6[0-36]|88)\\d{4}",
			"\\d{6}",
			null,
			null,
			"601234"
		],
		"FO",
		298,
		"00",
		null,
		null,
		null,
		"(10(?:01|[12]0|88))",
		null,
		null,
		null,
		[
			[
				null,
				"(\\d{6})",
				"$1",
				null,
				null,
				"$CC $1"
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
