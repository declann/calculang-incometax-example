(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annual_salary", function() { return annual_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addl_credit", function() { return addl_credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gross_salary", function() { return gross_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gross_salary_ytd", function() { return gross_salary_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_co_ytd", function() { return paye_co_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_credit_ytd", function() { return paye_credit_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_liab_ytd", function() { return paye_liab_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_liab", function() { return paye_liab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prsi_liab_ytd", function() { return prsi_liab_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prsi_liab", function() { return prsi_liab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "net_salary", function() { return net_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "net_salary_ytd", function() { return net_salary_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "income_tax_ytd", function() { return income_tax_ytd; });
/* harmony import */ var date_fns_esm_addMonths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_co_1_ytd", function() { return _usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_co_2_ytd", function() { return _usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_co_3_ytd", function() { return _usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_liab", function() { return _usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_liab_ytd", function() { return _usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["e"]; });


 //import { range } from 'underscore'


 // explicit inputs:

const annual_salary = ({
  annual_salary_in
}) => annual_salary_in;
const addl_credit = ({
  addl_credit_in
}) => addl_credit_in;
const t = ({
  t_in
}) => t_in;
const gross_salary = ({
  t_in,
  annual_salary_in
}) => {
  if (t({
    t_in
  }).getDate() == 1) return annual_salary({
    annual_salary_in
  }) / 12;else return 0;
};
const gross_salary_ytd = ({
  t_in,
  annual_salary_in
}) => {
  if (t({
    t_in
  }).getDate() == 1 && t({
    t_in
  }).getMonth() == 0) return gross_salary({
    t_in,
    annual_salary_in
  });else return gross_salary_ytd({
    annual_salary_in,
    t_in: Object(date_fns_esm_addMonths__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(t({
      t_in
    }), -1)
  }) + gross_salary({
    t_in,
    annual_salary_in
  });
};
const paye_co_ytd = ({
  t_in
}) => {
  if (t({
    t_in
  }).getYear() == 114) return 32800 / 12 * (1 + t({
    t_in
  }).getMonth());else return 33800 / 12 * (1 + t({
    t_in
  }).getMonth());
};
const paye_credit_ytd = ({
  addl_credit_in,
  t_in
}) => {
  return (1650 * 2 + (addl_credit({
    addl_credit_in
  }) ? 2000 : 0)) / 12 * (1 + t({
    t_in
  }).getMonth());
};
const paye_liab_ytd = ({
  t_in,
  annual_salary_in,
  addl_credit_in
}) => {
  return Math.max(0, Math.min(gross_salary_ytd({
    t_in,
    annual_salary_in
  }), paye_co_ytd({
    t_in
  })) * 0.2 + Math.max(0, gross_salary_ytd({
    t_in,
    annual_salary_in
  }) - paye_co_ytd({
    t_in
  })) * (t({
    t_in
  }).getYear() == 114 ? 0.41 : 0.4) - paye_credit_ytd({
    addl_credit_in,
    t_in
  }));
};
const paye_liab = ({
  t_in,
  annual_salary_in,
  addl_credit_in
}) => {
  if (t({
    t_in
  }).getDate() == 1 && t({
    t_in
  }).getMonth() == 0) return paye_liab_ytd({
    t_in,
    annual_salary_in,
    addl_credit_in
  });
  return paye_liab_ytd({
    t_in,
    annual_salary_in,
    addl_credit_in
  }) - paye_liab_ytd({
    annual_salary_in,
    addl_credit_in,
    t_in: Object(date_fns_esm_addMonths__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(t({
      t_in
    }), -1)
  });
};
const prsi_liab_ytd = ({
  t_in,
  annual_salary_in
}) => {
  return (gross_salary_ytd({
    t_in,
    annual_salary_in
  }) + 0
  /* bik */
  ) * 0.04 * (annual_salary({
    annual_salary_in
  }) > 352 * 365.25 / 7); // exemption limit
  // how is exemption limit applied in practical terms - is using annual_salary here a hack ?
};
const prsi_liab = ({
  t_in,
  annual_salary_in
}) => {
  if (t({
    t_in
  }).getDate() == 1 && t({
    t_in
  }).getMonth() == 0) return prsi_liab_ytd({
    t_in,
    annual_salary_in
  });
  return prsi_liab_ytd({
    t_in,
    annual_salary_in
  }) - prsi_liab_ytd({
    annual_salary_in,
    t_in: Object(date_fns_esm_addMonths__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(t({
      t_in
    }), -1)
  });
};
const net_salary = ({
  t_in,
  annual_salary_in,
  addl_credit_in
}) => gross_salary({
  t_in,
  annual_salary_in
}) - paye_liab({
  t_in,
  annual_salary_in,
  addl_credit_in
}) - Object(_usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_liab */ "d"])({
  t_in,
  annual_salary_in
}) - prsi_liab({
  t_in,
  annual_salary_in
});
const net_salary_ytd = ({
  t_in,
  annual_salary_in,
  addl_credit_in
}) => gross_salary_ytd({
  t_in,
  annual_salary_in
}) - paye_liab_ytd({
  t_in,
  annual_salary_in,
  addl_credit_in
}) - Object(_usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_liab_ytd */ "e"])({
  annual_salary_in,
  t_in
}) - prsi_liab_ytd({
  t_in,
  annual_salary_in
});
const income_tax_ytd = ({
  t_in,
  annual_salary_in,
  addl_credit_in
}) => paye_liab_ytd({
  t_in,
  annual_salary_in,
  addl_credit_in
}) + Object(_usc_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_liab_ytd */ "e"])({
  annual_salary_in,
  t_in
}) + prsi_liab_ytd({
  t_in,
  annual_salary_in
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usc_co_1_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usc_co_2_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return usc_co_3_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return usc_liab_ytd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return usc_liab; });
/* harmony import */ var _incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var date_fns_esm_addMonths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);















const usc_co_1_ytd = ({
  t_in
}) => {
  if (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getYear() == 114) return 10036 / 12 * (1 + Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getMonth()); // can refactor out a runoff function
  else return 12016 / 12 * (1 + Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getMonth());
};
const usc_co_2_ytd = ({
  t_in
}) => {
  if (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getYear() == 114) return 16016 / 12 * (1 + Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getMonth()); // can refactor out a runoff function
  else return 17576 / 12 * (1 + Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getMonth());
};
const usc_co_3_ytd = ({
  t_in
}) => {
  if (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getYear() == 114) return 0; // can refactor out a runoff function
  else return 70044 / 12 * (1 + Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getMonth()); // >= 2015
};
const usc_liab_ytd = ({
  annual_salary_in,
  t_in
}) => {
  return (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["annual_salary"])({
    annual_salary_in
  }) >= 10036) * (Math.min(Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["gross_salary_ytd"])({
    t_in,
    annual_salary_in
  }), usc_co_1_ytd({
    t_in
  })) * (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getYear() == 114 ? 0.02 : 0.015) + Math.max(0, Math.min(usc_co_2_ytd({
    t_in
  }) - usc_co_1_ytd({
    t_in
  }), Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["gross_salary_ytd"])({
    t_in,
    annual_salary_in
  }) - usc_co_1_ytd({
    t_in
  }))) * (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getYear() == 114 ? 0.04 : 0.035) + Math.max(0, Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["gross_salary_ytd"])({
    t_in,
    annual_salary_in
  }) - usc_co_2_ytd({
    t_in
  })) * 0.07) + (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getYear() != 114) * Math.max(0, Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["gross_salary_ytd"])({
    t_in,
    annual_salary_in
  }) - usc_co_3_ytd({
    t_in
  })) * 0.01; // 8% above CO 3 2015
  // TODO 2015 self-assessed rate of 11% above 100k (from 10% 2014)
};
const usc_liab = ({
  t_in,
  annual_salary_in
}) => {
  if (Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getDate() == 1 && Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
    t_in
  }).getMonth() == 0) return usc_liab_ytd({
    annual_salary_in,
    t_in
  });
  return usc_liab_ytd({
    annual_salary_in,
    t_in
  }) - usc_liab_ytd({
    annual_salary_in,
    t_in: Object(date_fns_esm_addMonths__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_incometax_cul_js__WEBPACK_IMPORTED_MODULE_0__["t"])({
      t_in
    }), -1)
  });
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMonths; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(dirtyDate);
  var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requiredArgs; });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toDate; });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toInteger; });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=incometax.js.map