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
	"1": [
		"US",
		"AG",
		"AI",
		"AS",
		"BB",
		"BM",
		"BS",
		"CA",
		"DM",
		"DO",
		"GD",
		"GU",
		"JM",
		"KN",
		"KY",
		"LC",
		"MP",
		"MS",
		"PR",
		"SX",
		"TC",
		"TT",
		"VC",
		"VG",
		"VI"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"VG": [
		null,
		[
			null,
			null,
			"[2589]\\d{9}",
			"\\d{7}(?:\\d{3})?"
		],
		[
			null,
			null,
			"284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})",
			"\\d{7}(?:\\d{3})?",
			null,
			null,
			"2842291234"
		],
		[
			null,
			null,
			"284(?:(?:3(?:0[0-3]|4[0-367]|94)|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})",
			"\\d{10}",
			null,
			null,
			"2843001234"
		],
		[
			null,
			null,
			"8(?:00|44|55|66|77|88)[2-9]\\d{6}",
			"\\d{10}",
			null,
			null,
			"8002345678"
		],
		[
			null,
			null,
			"900[2-9]\\d{6}",
			"\\d{10}",
			null,
			null,
			"9002345678"
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
			"5(?:00|33|44|66|77|88)[2-9]\\d{6}",
			"\\d{10}",
			null,
			null,
			"5002345678"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"VG",
		1,
		"011",
		"1",
		null,
		null,
		"1",
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
		"284",
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
