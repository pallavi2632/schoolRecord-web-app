"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/HomePage.js":
/*!************************************!*\
  !*** ./src/components/HomePage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/supabaseClient */ \"(app-pages-browser)/./src/config/supabaseClient.js\");\n/* harmony import */ var _pages_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Modal */ \"(app-pages-browser)/./src/pages/Modal.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [schoolRecord, setSchoolRecord] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [updatedData, setUpdatedData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const fetchData = async ()=>{\n        const { data, error } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].from(\"school-data\").select();\n        if (error) {\n            setSchoolRecord(null);\n            console.log(\"error\");\n        }\n        if (data) {\n            setSchoolRecord(data);\n        }\n    };\n    const handleOpenModal = ()=>{\n        setUpdatedData(null);\n        setIsModalOpen(true);\n    };\n    const handleCloseModal = ()=>setIsModalOpen(false);\n    const handleEdit = (data, index)=>{\n        setUpdatedData(data);\n        setCurrentIndex(index);\n        setIsModalOpen(true);\n    };\n    const handleDelete = async (id)=>{\n        const { error } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].from(\"school-data\").delete().eq(\"id\", id);\n        if (error) {\n            console.error(\"Error deleting data:\", error);\n        } else {\n            setSchoolRecord(schoolRecord.filter((data)=>data.id !== id));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"my-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-5xl  flex justify-end gap-32\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"School data here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleOpenModal,\n                        className: \"border text-green-500 font-bold p-3 rounded-xl hover:duration-300 hover:text-black\",\n                        children: \"Add Data Here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex flex-wrap items-center justify-center\",\n                children: schoolRecord && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-1 p-4  rounded-lg w-full max-w-5xl \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6\",\n                        children: schoolRecord.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-1 border border-gray-200 rounded-lg\",\n                                children: [\n                                    data.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: data.image,\n                                            width: 100,\n                                            height: 100,\n                                            alt: \"Uploaded\",\n                                            className: \"w-full h-fit object-cover rounded-lg\",\n                                            loading: \"lazy\",\n                                            sizes: \"(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 100px\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-3 py-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-sm font-bold\",\n                                                children: [\n                                                    data.first_name,\n                                                    \" \",\n                                                    data.last_name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-xs\",\n                                                children: [\n                                                    \" Email - \",\n                                                    data.email\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-xs\",\n                                                children: [\n                                                    \" Address - \",\n                                                    data.address\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-xs\",\n                                                children: [\n                                                    \"Phone number - \",\n                                                    data.phone_number\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2 p-3 \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleEdit(data, index),\n                                                className: \"border rounded-md p-2 text-xs hover:bg-gray-300 duration-200\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleDelete(data.id),\n                                                className: \"border p-2 rounded-md text-xs hover:bg-red-500 duration-200 hover:text-white\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                updatedData: updatedData,\n                reloadData: fetchData\n            }, void 0, false, {\n                fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/schoolRecord-web-app/src/components/HomePage.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"QNCZEUHBAHo0SN2RrKASpNwSHw8=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWVQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQztBQUNiO0FBQ0g7QUFDb0I7QUFFbkQsTUFBTU0sV0FBVzs7SUFDZixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBO0lBQ2hELE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNVyxZQUFZO1FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNakIsOERBQVFBLENBQUNrQixJQUFJLENBQUMsZUFBZUMsTUFBTTtRQUVqRSxJQUFJRixPQUFPO1lBQ1RQLGdCQUFnQjtZQUNoQlUsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFFQSxJQUFJTCxNQUFNO1lBQ1JOLGdCQUFnQk07UUFDbEI7SUFDRjtJQUVBLE1BQU1NLGtCQUFrQjtRQUN0QlYsZUFBZTtRQUNmSixlQUFlO0lBQ2pCO0lBRUEsTUFBTWUsbUJBQW1CLElBQU1mLGVBQWU7SUFFOUMsTUFBTWdCLGFBQWEsQ0FBQ1IsTUFBTVM7UUFDeEJiLGVBQWVJO1FBQ2ZGLGdCQUFnQlc7UUFDaEJqQixlQUFlO0lBQ2pCO0lBRUEsTUFBTWtCLGVBQWUsT0FBT0M7UUFDMUIsTUFBTSxFQUFFVixLQUFLLEVBQUUsR0FBRyxNQUFNakIsOERBQVFBLENBQUNrQixJQUFJLENBQUMsZUFBZVUsTUFBTSxHQUFHQyxFQUFFLENBQUMsTUFBTUY7UUFFdkUsSUFBSVYsT0FBTztZQUNURyxRQUFRSCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QyxPQUFPO1lBQ0xQLGdCQUFnQkQsYUFBYXFCLE1BQU0sQ0FBQyxDQUFDZCxPQUFTQSxLQUFLVyxFQUFFLEtBQUtBO1FBQzVEO0lBQ0Y7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ1JVO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNnQjtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQ0NDLFNBQVNkO3dCQUNUVSxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNadkIsOEJBQ0MsOERBQUN3QjtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ1p2QixhQUFhNEIsR0FBRyxDQUFDLENBQUNyQixNQUFNUyxzQkFDdkIsOERBQUNRO2dDQUVDRCxXQUFVOztvQ0FFVGhCLEtBQUtzQixLQUFLLGtCQUNULDhEQUFDTDtrREFDQyw0RUFBQy9CLGtEQUFLQTs0Q0FDSnFDLEtBQUt2QixLQUFLc0IsS0FBSzs0Q0FDZkUsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsS0FBSTs0Q0FDSlYsV0FBVTs0Q0FDVlcsU0FBUTs0Q0FDUkMsT0FBTTs7Ozs7Ozs7Ozs7a0RBSVosOERBQUNYO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ0U7Z0RBQUdGLFdBQVU7O29EQUNYaEIsS0FBSzZCLFVBQVU7b0RBQUM7b0RBQUU3QixLQUFLOEIsU0FBUzs7Ozs7OzswREFFbkMsOERBQUNaO2dEQUFHRixXQUFVOztvREFBVTtvREFBVWhCLEtBQUsrQixLQUFLOzs7Ozs7OzBEQUM1Qyw4REFBQ2I7Z0RBQUdGLFdBQVU7O29EQUFVO29EQUFZaEIsS0FBS2dDLE9BQU87Ozs7Ozs7MERBQ2hELDhEQUFDZDtnREFBR0YsV0FBVTs7b0RBQVU7b0RBQWdCaEIsS0FBS2lDLFlBQVk7Ozs7Ozs7Ozs7Ozs7a0RBRTNELDhEQUFDaEI7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDRztnREFDQ0MsU0FBUyxJQUFNWixXQUFXUixNQUFNUztnREFDaENPLFdBQVU7MERBQ1g7Ozs7OzswREFHRCw4REFBQ0c7Z0RBQ0NDLFNBQVMsSUFBTVYsYUFBYVYsS0FBS1csRUFBRTtnREFDbkNLLFdBQVU7MERBQ1g7Ozs7Ozs7Ozs7Ozs7K0JBbENFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBNENqQiw4REFBQ3hCLG9EQUFLQTtnQkFDSmlELFFBQVEzQztnQkFDUjRDLFNBQVM1QjtnQkFDVFosYUFBYUE7Z0JBQ2J5QyxZQUFZckM7Ozs7Ozs7Ozs7OztBQUlwQjtHQW5ITVQ7S0FBQUE7QUFxSE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UuanM/NTRhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdXBhYmFzZSBmcm9tIFwiQC9jb25maWcvc3VwYWJhc2VDbGllbnRcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiQC9wYWdlcy9Nb2RhbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2hvb2xSZWNvcmQsIHNldFNjaG9vbFJlY29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXBkYXRlZERhdGEsIHNldFVwZGF0ZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzY2hvb2wtZGF0YVwiKS5zZWxlY3QoKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgc2V0U2Nob29sUmVjb3JkKG51bGwpO1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgc2V0U2Nob29sUmVjb3JkKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0VXBkYXRlZERhdGEobnVsbCk7XG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHNldElzTW9kYWxPcGVuKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgc2V0VXBkYXRlZERhdGEoZGF0YSk7XG4gICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2Nob29sLWRhdGFcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCBpZCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNjaG9vbFJlY29yZChzY2hvb2xSZWNvcmQuZmlsdGVyKChkYXRhKSA9PiBkYXRhLmlkICE9PSBpZCkpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJteS0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTV4bCAgZmxleCBqdXN0aWZ5LWVuZCBnYXAtMzJcIj5cbiAgICAgICAgPGgzPlNjaG9vbCBkYXRhIGhlcmU8L2gzPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk1vZGFsfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWdyZWVuLTUwMCBmb250LWJvbGQgcC0zIHJvdW5kZWQteGwgaG92ZXI6ZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmxhY2tcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIERhdGEgSGVyZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAge3NjaG9vbFJlY29yZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xIHAtNCAgcm91bmRlZC1sZyB3LWZ1bGwgbWF4LXctNXhsIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00IG15LTZcIj5cbiAgICAgICAgICAgICAge3NjaG9vbFJlY29yZC5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVwbG9hZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZpdCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSA1MHZ3LCAobWF4LXdpZHRoOiAxMjAwcHgpIDMzdncsIDEwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5maXJzdF9uYW1lfSB7ZGF0YS5sYXN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+IEVtYWlsIC0ge2RhdGEuZW1haWx9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHNcIj4gQWRkcmVzcyAtIHtkYXRhLmFkZHJlc3N9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHNcIj5QaG9uZSBudW1iZXIgLSB7ZGF0YS5waG9uZV9udW1iZXJ9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHAtMyBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoZGF0YSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHAtMiB0ZXh0LXhzIGhvdmVyOmJnLWdyYXktMzAwIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGRhdGEuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LXhzIGhvdmVyOmJnLXJlZC01MDAgZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxuICAgICAgICB1cGRhdGVkRGF0YT17dXBkYXRlZERhdGF9XG4gICAgICAgIHJlbG9hZERhdGE9e2ZldGNoRGF0YX1cbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJNb2RhbCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWVQYWdlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInNjaG9vbFJlY29yZCIsInNldFNjaG9vbFJlY29yZCIsInVwZGF0ZWREYXRhIiwic2V0VXBkYXRlZERhdGEiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJmZXRjaERhdGEiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVFZGl0IiwiaW5kZXgiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZSIsImVxIiwiZmlsdGVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsb2FkaW5nIiwic2l6ZXMiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmVfbnVtYmVyIiwiaXNPcGVuIiwib25DbG9zZSIsInJlbG9hZERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/HomePage.js\n"));

/***/ })

});