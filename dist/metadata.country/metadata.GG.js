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
	"GG": [
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
			"1481\\d{6}",
			"\\d{6,10}",
			null,
			null,
			"1481456789"
		],
		[
			null,
			null,
			"7(?:781|839|911)\\d{6}",
			"\\d{10}",
			null,
			null,
			"7781123456"
		],
		[
			null,
			null,
			"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",
			"\\d{7}(?:\\d{2,3})?",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",
			"\\d{10}",
			null,
			null,
			"9012345678"
		],
		[
			null,
			null,
			"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
			"\\d{7}(?:\\d{3})?",
			null,
			null,
			"8431234567"
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
		"GG",
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
			"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
			"\\d{10}",
			null,
			null,
			"7640123456"
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
			"(?:3[0347]|55)\\d{8}",
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
