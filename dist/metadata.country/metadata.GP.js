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
	"590": [
		"GP",
		"BL",
		"MF"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"GP": [
		null,
		[
			null,
			null,
			"[56]\\d{8}",
			"\\d{9}"
		],
		[
			null,
			null,
			"590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}",
			"\\d{9}",
			null,
			null,
			"590201234"
		],
		[
			null,
			null,
			"690(?:0[0-7]|[1-9]\\d)\\d{4}",
			"\\d{9}",
			null,
			null,
			"690301234"
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
			"NA",
			"NA"
		],
		"GP",
		590,
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
				"([56]90)(\\d{2})(\\d{4})",
				"$1 $2-$3",
				null,
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		1,
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
