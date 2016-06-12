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
	"264": [
		"NA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NA": [
		null,
		[
			null,
			null,
			"[68]\\d{7,8}",
			"\\d{8,9}"
		],
		[
			null,
			null,
			"6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}",
			"\\d{8,9}",
			null,
			null,
			"61221234"
		],
		[
			null,
			null,
			"(?:60|8[125])\\d{7}",
			"\\d{9}",
			null,
			null,
			"811234567"
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
			"8701\\d{5}",
			"\\d{9}",
			null,
			null,
			"870123456"
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
			"8(?:3\\d{2}|86)\\d{5}",
			"\\d{8,9}",
			null,
			null,
			"88612345"
		],
		"NA",
		264,
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
				"(8\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"8[1235]"
				],
				"0$1"
			],
			[
				null,
				"(6\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"6"
				],
				"0$1"
			],
			[
				null,
				"(88)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"88"
				],
				"0$1"
			],
			[
				null,
				"(870)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"870"
				],
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
