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
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"883": [
		null,
		[
			null,
			null,
			"51\\d{7}(?:\\d{3})?",
			"\\d{9}(?:\\d{3})?",
			null,
			null,
			"510012345"
		],
		[
			null,
			null,
			"NA",
			"NA",
			null,
			null,
			"510012345"
		],
		[
			null,
			null,
			"NA",
			"NA",
			null,
			null,
			"510012345"
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
			"51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})",
			"\\d{9}(?:\\d{3})?",
			null,
			null,
			"510012345"
		],
		"001",
		883,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		1,
		[
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"510"
				]
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3 $4",
				[
					"510"
				]
			],
			[
				null,
				"(\\d{4})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"51[13]"
				]
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
