/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

'use strict';

module.exports = {
	extends: 'ckeditor5',
	"rules": {
		// windows linebreaks when not in production environment
		"linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
	}
};

