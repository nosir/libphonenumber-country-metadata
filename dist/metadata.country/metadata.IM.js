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
	"44": [
		"GB",
		"GG",
		"IM",
		"JE"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"IM": [
		null,
		[
			null,
			null,
			"[135789]\\d{6,9}",
			"\\d{6,10}"
		],
		[
			null,
			null,
			"1624\\d{6}",
			"\\d{6,10}",
			null,
			null,
			"1624456789"
		],
		[
			null,
			null,
			"7[569]24\\d{6}",
			"\\d{10}",
			null,
			null,
			"7924123456"
		],
		[
			null,
			null,
			"808162\\d{4}",
			"\\d{10}",
			null,
			null,
			"8081624567"
		],
		[
			null,
			null,
			"(?:872299|90[0167]624)\\d{4}",
			"\\d{10}",
			null,
			null,
			"9016247890"
		],
		[
			null,
			null,
			"8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}",
			"\\d{10}",
			null,
			null,
			"8456247890"
		],
		[
			null,
			null,
			"70\\d{8}",
			"\\d{10}",
			null,
			null,
			"7012345678"
		],
		[
			null,
			null,
			"56\\d{8}",
			"\\d{10}",
			null,
			null,
			"5612345678"
		],
		"IM",
		44,
		"00",
		"0",
		" x",
		null,
		"0",
		null,
		null,
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
			"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",
			"\\d{10}",
			null,
			null,
			"5512345678"
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
