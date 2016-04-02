/*******************************************************************************
 * Copyright (c) 2015 QNX Software Systems and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 * QNX Software Systems - Initial API and implementation
 *******************************************************************************/
(function(root, mod) {
	if (typeof exports == "object" && typeof module == "object") // CommonJS
		return mod(exports, require("./inject.js"));
	if (typeof define == "function" && define.amd) // AMD
		return define(["exports", "./inject.js"], mod);
	mod(root, acornQMLInjector); // Plain browser env
})(this, function(exports, acornQMLInjector) {
	'use strict';

	exports.install = function(acorn) {
		acorn.defaultOptions.ignoreQmlEcmaVersion = false;
		acornQMLInjector.inject(acorn);
	};
});