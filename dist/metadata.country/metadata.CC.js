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
	"61": [
		"AU",
		"CC",
		"CX"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"CC": [
		null,
		[
			null,
			null,
			"[1458]\\d{5,9}",
			"\\d{6,10}"
		],
		[
			null,
			null,
			"89162\\d{4}",
			"\\d{8,9}",
			null,
			null,
			"891621234"
		],
		[
			null,
			null,
			"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
			"\\d{9}",
			null,
			null,
			"412345678"
		],
		[
			null,
			null,
			"180(?:0\\d{3}|2)\\d{3}",
			"\\d{7,10}",
			null,
			null,
			"1800123456"
		],
		[
			null,
			null,
			"190[0126]\\d{6}",
			"\\d{10}",
			null,
			null,
			"1900123456"
		],
		[
			null,
			null,
			"13(?:00\\d{2})?\\d{4}",
			"\\d{6,10}",
			null,
			null,
			"1300123456"
		],
		[
			null,
			null,
			"500\\d{6}",
			"\\d{9}",
			null,
			null,
			"500123456"
		],
		[
			null,
			null,
			"550\\d{6}",
			"\\d{9}",
			null,
			null,
			"550123456"
		],
		"CC",
		61,
		"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]",
		"0",
		null,
		null,
		"0",
		null,
		"0011",
		null,
		null,
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
