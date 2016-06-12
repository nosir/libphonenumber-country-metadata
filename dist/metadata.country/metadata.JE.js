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
	"JE": [
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
			"1534\\d{6}",
			"\\d{6,10}",
			null,
			null,
			"1534456789"
		],
		[
			null,
			null,
			"7(?:509|7(?:00|97)|829|937)\\d{6}",
			"\\d{10}",
			null,
			null,
			"7797123456"
		],
		[
			null,
			null,
			"80(?:07(?:35|81)|8901)\\d{4}",
			"\\d{10}",
			null,
			null,
			"8007354567"
		],
		[
			null,
			null,
			"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
			"\\d{10}",
			null,
			null,
			"9018105678"
		],
		[
			null,
			null,
			"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",
			"\\d{10}",
			null,
			null,
			"8447034567"
		],
		[
			null,
			null,
			"701511\\d{4}",
			"\\d{10}",
			null,
			null,
			"7015115678"
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
		"JE",
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
			"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}",
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
