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
	"39": [
		"IT",
		"VA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"VA": [
		null,
		[
			null,
			null,
			"(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))",
			"\\d{6,11}"
		],
		[
			null,
			null,
			"06698\\d{5}",
			"\\d{10}",
			null,
			null,
			"0669812345"
		],
		[
			null,
			null,
			"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",
			"\\d{9,11}",
			null,
			null,
			"3123456789"
		],
		[
			null,
			null,
			"80(?:0\\d{6}|3\\d{3})",
			"\\d{6,9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
			"\\d{6,10}",
			null,
			null,
			"899123456"
		],
		[
			null,
			null,
			"84(?:[08]\\d{6}|[17]\\d{3})",
			"\\d{6,9}",
			null,
			null,
			"848123456"
		],
		[
			null,
			null,
			"1(?:78\\d|99)\\d{6}",
			"\\d{9,10}",
			null,
			null,
			"1781234567"
		],
		[
			null,
			null,
			"55\\d{8}",
			"\\d{10}",
			null,
			null,
			"5512345678"
		],
		"VA",
		39,
		"00",
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
			"848\\d{6}",
			"\\d{9}",
			null,
			null,
			"848123456"
		],
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
		]
	]
};
