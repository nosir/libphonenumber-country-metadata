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
	"KY": [
		null,
		[
			null,
			null,
			"[3589]\\d{9}",
			"\\d{7}(?:\\d{3})?"
		],
		[
			null,
			null,
			"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",
			"\\d{7}(?:\\d{3})?",
			null,
			null,
			"3452221234"
		],
		[
			null,
			null,
			"345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}",
			"\\d{10}",
			null,
			null,
			"3453231234"
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
			"900[2-9]\\d{6}|345976\\d{4}",
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
		"KY",
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
			"345849\\d{4}",
			"\\d{10}",
			null,
			null,
			"3458491234"
		],
		null,
		"345",
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
