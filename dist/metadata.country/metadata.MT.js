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
	"356": [
		"MT"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MT": [
		null,
		[
			null,
			null,
			"[2357-9]\\d{7}",
			"\\d{8}"
		],
		[
			null,
			null,
			"2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}",
			"\\d{8}",
			null,
			null,
			"21001234"
		],
		[
			null,
			null,
			"(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}",
			"\\d{8}",
			null,
			null,
			"96961234"
		],
		[
			null,
			null,
			"800[3467]\\d{4}",
			"\\d{8}",
			null,
			null,
			"80071234"
		],
		[
			null,
			null,
			"5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168])|[12]\\d0[1-5])\\d{3}",
			"\\d{8}",
			null,
			null,
			"50037123"
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
			"3550\\d{4}",
			"\\d{8}",
			null,
			null,
			"35501234"
		],
		"MT",
		356,
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
				"(\\d{4})(\\d{4})",
				"$1 $2"
			]
		],
		null,
		[
			null,
			null,
			"7117\\d{4}",
			"\\d{8}",
			null,
			null,
			"71171234"
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
			"501\\d{5}",
			"\\d{8}",
			null,
			null,
			"50112345"
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
