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
	"380": [
		"UA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"UA": [
		null,
		[
			null,
			null,
			"[3-9]\\d{8}",
			"\\d{5,9}"
		],
		[
			null,
			null,
			"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",
			"\\d{5,9}",
			null,
			null,
			"311234567"
		],
		[
			null,
			null,
			"(?:39|50|6[36-8]|73|9[1-9])\\d{7}",
			"\\d{9}",
			null,
			null,
			"391234567"
		],
		[
			null,
			null,
			"800\\d{6}",
			"\\d{9}",
			null,
			null,
			"800123456"
		],
		[
			null,
			null,
			"900\\d{6}",
			"\\d{9}",
			null,
			null,
			"900123456"
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
			"89\\d{7}",
			"\\d{9}",
			null,
			null,
			"891234567"
		],
		"UA",
		380,
		"00",
		"0",
		null,
		null,
		"0",
		null,
		"0~0",
		null,
		[
			[
				null,
				"([3-9]\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|73|9[1-9]",
					"[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|73|9[1-9]"
				],
				"0$1"
			],
			[
				null,
				"([3-689]\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90",
					"3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"
				],
				"0$1"
			],
			[
				null,
				"([3-6]\\d{3})(\\d{5})",
				"$1 $2",
				[
					"3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])",
					"3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"
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
