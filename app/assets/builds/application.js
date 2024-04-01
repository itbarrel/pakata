(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "../../node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global2, factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        var deletedIds = [];
        var document2 = window2.document;
        var slice = deletedIds.slice;
        var concat = deletedIds.concat;
        var push = deletedIds.push;
        var indexOf = deletedIds.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var support = {};
        var version = "1.12.4", jQuery2 = function(selector, context) {
          return new jQuery2.fn.init(selector, context);
        }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
          return letter.toUpperCase();
        };
        jQuery2.fn = jQuery2.prototype = {
          jquery: version,
          constructor: jQuery2,
          selector: "",
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
          },
          pushStack: function(elems) {
            var ret = jQuery2.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
          },
          each: function(callback) {
            return jQuery2.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery2.map(this, function(elem, i2) {
              return callback.call(elem, i2, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          eq: function(i2) {
            var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: deletedIds.sort,
          splice: deletedIds.splice
        };
        jQuery2.extend = jQuery2.fn.extend = function() {
          var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i2] || {};
            i2++;
          }
          if (typeof target !== "object" && !jQuery2.isFunction(target)) {
            target = {};
          }
          if (i2 === length) {
            target = this;
            i2--;
          }
          for (; i2 < length; i2++) {
            if ((options = arguments[i2]) != null) {
              for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = jQuery2.isArray(copy)))) {
                  if (copyIsArray) {
                    copyIsArray = false;
                    clone = src && jQuery2.isArray(src) ? src : [];
                  } else {
                    clone = src && jQuery2.isPlainObject(src) ? src : {};
                  }
                  target[name] = jQuery2.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery2.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isFunction: function(obj) {
            return jQuery2.type(obj) === "function";
          },
          isArray: Array.isArray || function(obj) {
            return jQuery2.type(obj) === "array";
          },
          isWindow: function(obj) {
            return obj != null && obj == obj.window;
          },
          isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery2.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          isPlainObject: function(obj) {
            var key;
            if (!obj || jQuery2.type(obj) !== "object" || obj.nodeType || jQuery2.isWindow(obj)) {
              return false;
            }
            try {
              if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
              }
            } catch (e) {
              return false;
            }
            if (!support.ownFirst) {
              for (key in obj) {
                return hasOwn.call(obj, key);
              }
            }
            for (key in obj) {
            }
            return key === void 0 || hasOwn.call(obj, key);
          },
          type: function(obj) {
            if (obj == null) {
              return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
          },
          globalEval: function(data) {
            if (data && jQuery2.trim(data)) {
              (window2.execScript || function(data2) {
                window2["eval"].call(window2, data2);
              })(data);
            }
          },
          camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
          },
          nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
          },
          each: function(obj, callback) {
            var length, i2 = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i2 < length; i2++) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            } else {
              for (i2 in obj) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
          },
          makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
              if (isArrayLike(Object(arr))) {
                jQuery2.merge(
                  ret,
                  typeof arr === "string" ? [arr] : arr
                );
              } else {
                push.call(ret, arr);
              }
            }
            return ret;
          },
          inArray: function(elem, arr, i2) {
            var len;
            if (arr) {
              if (indexOf) {
                return indexOf.call(arr, elem, i2);
              }
              len = arr.length;
              i2 = i2 ? i2 < 0 ? Math.max(0, len + i2) : i2 : 0;
              for (; i2 < len; i2++) {
                if (i2 in arr && arr[i2] === elem) {
                  return i2;
                }
              }
            }
            return -1;
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i2 = first.length;
            while (j < len) {
              first[i2++] = second[j++];
            }
            if (len !== len) {
              while (second[j] !== void 0) {
                first[i2++] = second[j++];
              }
            }
            first.length = i2;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
            for (; i2 < length; i2++) {
              callbackInverse = !callback(elems[i2], i2);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i2]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i2 = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i2 < length; i2++) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i2 in elems) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return concat.apply([], ret);
          },
          guid: 1,
          proxy: function(fn, context) {
            var args, proxy, tmp;
            if (typeof context === "string") {
              tmp = fn[context];
              context = fn;
              fn = tmp;
            }
            if (!jQuery2.isFunction(fn)) {
              return void 0;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
              return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
            return proxy;
          },
          now: function() {
            return +new Date();
          },
          support
        });
        if (typeof Symbol === "function") {
          jQuery2.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
        }
        jQuery2.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(i2, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = jQuery2.type(obj);
          if (type === "function" || jQuery2.isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i2, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, MAX_NEGATIVE = 1 << 31, hasOwn2 = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push2 = arr.push, slice2 = arr.slice, indexOf2 = function(list, elem) {
            var i3 = 0, len = list.length;
            for (; i3 < len; i3++) {
              if (list[i3] === elem) {
                return i3;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + `*([^\\]'"]*?)` + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          };
          try {
            push2.apply(
              arr = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr.length ? function(target, els) {
                push_native.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i3 = 0;
                while (target[j++] = els[i3++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i3, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              if ((context ? context.ownerDocument || context : preferredDoc) !== document3) {
                setDocument(context);
              }
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  if (nodeType !== 1) {
                    newContext = context;
                    newSelector = selector;
                  } else if (context.nodeName.toLowerCase() !== "object") {
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rescape, "\\$&");
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                    groups = tokenize(selector);
                    i3 = groups.length;
                    nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                    while (i3--) {
                      groups[i3] = nidselect + " " + toSelector(groups[i3]);
                    }
                    newSelector = groups.join(",");
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  }
                  if (newSelector) {
                    try {
                      push2.apply(
                        results,
                        newContext.querySelectorAll(newSelector)
                      );
                      return results;
                    } catch (qsaError) {
                    } finally {
                      if (nid === expando) {
                        context.removeAttribute("id");
                      }
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var div = document3.createElement("div");
            try {
              return !!fn(div);
            } catch (e) {
              return false;
            } finally {
              if (div.parentNode) {
                div.parentNode.removeChild(div);
              }
              div = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr2 = attrs.split("|"), i3 = arr2.length;
            while (i3--) {
              Expr.attrHandle[arr2[i3]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i3 = matchIndexes.length;
                while (i3--) {
                  if (seed[j = matchIndexes[i3]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var documentElement2 = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement2 ? documentElement2.nodeName !== "HTML" : false;
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if ((parent = document3.defaultView) && parent.top !== parent) {
              if (parent.addEventListener) {
                parent.addEventListener("unload", unloadHandler, false);
              } else if (parent.attachEvent) {
                parent.attachEvent("onunload", unloadHandler);
              }
            }
            support2.attributes = assert(function(div) {
              div.className = "i";
              return !div.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(div) {
              div.appendChild(document3.createComment(""));
              return !div.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(div) {
              docElem.appendChild(div).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var m = context.getElementById(id);
                  return m ? [m] : [];
                }
              };
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
            } else {
              delete Expr.find["ID"];
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i3 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i3++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(div) {
                docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (div.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
                }
                if (!div.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                if (!div.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!div.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
              });
              assert(function(div) {
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                div.appendChild(input).setAttribute("name", "D");
                if (div.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (!div.querySelectorAll(":enabled").length) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                div.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(div) {
                support2.disconnectedMatch = matches.call(div, "div");
                matches.call(div, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i3 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a === document3 ? -1 : b === document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i3] === bp[i3]) {
                i3++;
              }
              return i3 ? siblingCheck(ap[i3], bp[i3]) : ap[i3] === preferredDoc ? -1 : bp[i3] === preferredDoc ? 1 : 0;
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document3) {
              setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support2.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i3 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i3++]) {
                if (elem === results[i3]) {
                  j = duplicates.push(i3);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i3 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i3++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                });
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf2(seed, matched[i3]);
                      seed[idx] = !(matches2[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                  while (i3--) {
                    if (elem = unmatched[i3]) {
                      seed[i3] = !(matches2[i3] = elem);
                    }
                  }
                }) : function(elem, context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": function(elem) {
                return elem.disabled === false;
              },
              "disabled": function(elem) {
                return elem.disabled === true;
              },
              "checked": function(elem) {
                var nodeName = elem.nodeName.toLowerCase();
                return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 0;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 1;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; --i3 >= 0; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; ++i3 < length; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i2] = createInputPseudo(i2);
          }
          for (i2 in { submit: true, reset: true }) {
            Expr.pseudos[i2] = createButtonPseudo(i2);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i3 = 0, len = tokens.length, selector = "";
            for (; i3 < len; i3++) {
              selector += tokens[i3].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, checkNonElements = base && dir2 === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if ((oldCache = uniqueCache[dir2]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[dir2] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i3 = matchers.length;
              while (i3--) {
                if (!matchers[i3](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i3 = 0, len = contexts.length;
            for (; i3 < len; i3++) {
              Sizzle2(selector, contexts[i3], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
            for (; i3 < len; i3++) {
              if (elem = unmatched[i3]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i3);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i3, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i3 = temp.length;
                while (i3--) {
                  if (elem = temp[i3]) {
                    matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i3 = matcherOut.length;
                    while (i3--) {
                      if (elem = matcherOut[i3]) {
                        temp.push(matcherIn[i3] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i3 = matcherOut.length;
                  while (i3--) {
                    if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i3]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i3 < len; i3++) {
              if (matcher = Expr.relative[tokens[i3].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                if (matcher[expando]) {
                  j = ++i3;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i3 > 1 && elementMatcher(matchers),
                    i3 > 1 && toSelector(
                      tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                    ).replace(rtrim2, "$1"),
                    matcher,
                    i3 < j && matcherFromTokens(tokens.slice(i3, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context === document3 || context || outermost;
              }
              for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument !== document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i3;
              if (bySet && i3 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i3--) {
                      if (!(unmatched[i3] || setMatched[i3])) {
                        setMatched[i3] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i3 = match.length;
              while (i3--) {
                cached = matcherFromTokens(match[i3]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i3, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support2.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i3 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i3--) {
                token = tokens[i3];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i3, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document3.createElement("div")) & 1;
          });
          if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery2.find = Sizzle;
        jQuery2.expr = Sizzle.selectors;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
        jQuery2.text = Sizzle.getText;
        jQuery2.isXMLDoc = Sizzle.isXML;
        jQuery2.contains = Sizzle.contains;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery2(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery2.expr.match.needsContext;
        var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
        var risSimple = /^.[^:#\[\.,]*$/;
        function winnow(elements, qualifier, not) {
          if (jQuery2.isFunction(qualifier)) {
            return jQuery2.grep(elements, function(elem, i2) {
              return !!qualifier.call(elem, i2, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery2.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
              return jQuery2.filter(qualifier, elements, not);
            }
            qualifier = jQuery2.filter(qualifier, elements);
          }
          return jQuery2.grep(elements, function(elem) {
            return jQuery2.inArray(elem, qualifier) > -1 !== not;
          });
        }
        jQuery2.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          return elems.length === 1 && elem.nodeType === 1 ? jQuery2.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery2.fn.extend({
          find: function(selector) {
            var i2, ret = [], self2 = this, len = self2.length;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery2(selector).filter(function() {
                for (i2 = 0; i2 < len; i2++) {
                  if (jQuery2.contains(self2[i2], this)) {
                    return true;
                  }
                }
              }));
            }
            for (i2 = 0; i2 < len; i2++) {
              jQuery2.find(selector, self2[i2], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery2.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery2.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery2 ? context[0] : context;
                jQuery2.merge(this, jQuery2.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                  for (match in context) {
                    if (jQuery2.isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem && elem.parentNode) {
                  if (elem.id !== match[2]) {
                    return rootjQuery.find(selector);
                  }
                  this.length = 1;
                  this[0] = elem;
                }
                this.context = document2;
                this.selector = selector;
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
          } else if (jQuery2.isFunction(selector)) {
            return typeof root.ready !== "undefined" ? root.ready(selector) : selector(jQuery2);
          }
          if (selector.selector !== void 0) {
            this.selector = selector.selector;
            this.context = selector.context;
          }
          return jQuery2.makeArray(selector, this);
        };
        init.prototype = jQuery2.fn;
        rootjQuery = jQuery2(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery2.fn.extend({
          has: function(target) {
            var i2, targets = jQuery2(target, this), len = targets.length;
            return this.filter(function() {
              for (i2 = 0; i2 < len; i2++) {
                if (jQuery2.contains(this, targets[i2])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i2 = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery2(selectors, context || this.context) : 0;
            for (; i2 < l; i2++) {
              for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return jQuery2.inArray(this[0], jQuery2(elem));
            }
            return jQuery2.inArray(
              elem.jquery ? elem[0] : elem,
              this
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery2.uniqueSort(
                jQuery2.merge(this.get(), jQuery2(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          do {
            cur = cur[dir2];
          } while (cur && cur.nodeType !== 1);
          return cur;
        }
        jQuery2.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, i2, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, i2, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, i2, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            return jQuery2.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery2.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery2.fn[name] = function(until, selector) {
            var ret = jQuery2.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              ret = jQuery2.filter(selector, ret);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                ret = jQuery2.uniqueSort(ret);
              }
              if (rparentsprev.test(name)) {
                ret = ret.reverse();
              }
            }
            return this.pushStack(ret);
          };
        });
        var rnotwhite = /\S+/g;
        function createOptions(options) {
          var object = {};
          jQuery2.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery2.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery2.each(args, function(_, arg) {
                    if (jQuery2.isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && jQuery2.type(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery2.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = true;
              if (!memory) {
                self2.disable();
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        jQuery2.extend({
          Deferred: function(func) {
            var tuples = [
              ["resolve", "done", jQuery2.Callbacks("once memory"), "resolved"],
              ["reject", "fail", jQuery2.Callbacks("once memory"), "rejected"],
              ["notify", "progress", jQuery2.Callbacks("memory")]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              then: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(i2, tuple) {
                    var fn = jQuery2.isFunction(fns[i2]) && fns[i2];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && jQuery2.isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this === promise ? newDefer.promise() : this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery2.extend(obj, promise) : promise;
              }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery2.each(tuples, function(i2, tuple) {
              var list = tuple[2], stateString = tuple[3];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(function() {
                  state = stateString;
                }, tuples[i2 ^ 1][2].disable, tuples[2][2].lock);
              }
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(subordinate) {
            var i2 = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery2.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery2.Deferred(), updateFunc = function(i3, contexts, values) {
              return function(value) {
                contexts[i3] = this;
                values[i3] = arguments.length > 1 ? slice.call(arguments) : value;
                if (values === progressValues) {
                  deferred.notifyWith(contexts, values);
                } else if (!--remaining) {
                  deferred.resolveWith(contexts, values);
                }
              };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
              progressValues = new Array(length);
              progressContexts = new Array(length);
              resolveContexts = new Array(length);
              for (; i2 < length; i2++) {
                if (resolveValues[i2] && jQuery2.isFunction(resolveValues[i2].promise)) {
                  resolveValues[i2].promise().progress(updateFunc(i2, progressContexts, progressValues)).done(updateFunc(i2, resolveContexts, resolveValues)).fail(deferred.reject);
                } else {
                  --remaining;
                }
              }
            }
            if (!remaining) {
              deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
          }
        });
        var readyList;
        jQuery2.fn.ready = function(fn) {
          jQuery2.ready.promise().done(fn);
          return this;
        };
        jQuery2.extend({
          isReady: false,
          readyWait: 1,
          holdReady: function(hold) {
            if (hold) {
              jQuery2.readyWait++;
            } else {
              jQuery2.ready(true);
            }
          },
          ready: function(wait) {
            if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
              return;
            }
            jQuery2.isReady = true;
            if (wait !== true && --jQuery2.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery2]);
            if (jQuery2.fn.triggerHandler) {
              jQuery2(document2).triggerHandler("ready");
              jQuery2(document2).off("ready");
            }
          }
        });
        function detach() {
          if (document2.addEventListener) {
            document2.removeEventListener("DOMContentLoaded", completed);
            window2.removeEventListener("load", completed);
          } else {
            document2.detachEvent("onreadystatechange", completed);
            window2.detachEvent("onload", completed);
          }
        }
        function completed() {
          if (document2.addEventListener || window2.event.type === "load" || document2.readyState === "complete") {
            detach();
            jQuery2.ready();
          }
        }
        jQuery2.ready.promise = function(obj) {
          if (!readyList) {
            readyList = jQuery2.Deferred();
            if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
              window2.setTimeout(jQuery2.ready);
            } else if (document2.addEventListener) {
              document2.addEventListener("DOMContentLoaded", completed);
              window2.addEventListener("load", completed);
            } else {
              document2.attachEvent("onreadystatechange", completed);
              window2.attachEvent("onload", completed);
              var top = false;
              try {
                top = window2.frameElement == null && document2.documentElement;
              } catch (e) {
              }
              if (top && top.doScroll) {
                (function doScrollCheck() {
                  if (!jQuery2.isReady) {
                    try {
                      top.doScroll("left");
                    } catch (e) {
                      return window2.setTimeout(doScrollCheck, 50);
                    }
                    detach();
                    jQuery2.ready();
                  }
                })();
              }
            }
          }
          return readyList.promise(obj);
        };
        jQuery2.ready.promise();
        var i;
        for (i in jQuery2(support)) {
          break;
        }
        support.ownFirst = i === "0";
        support.inlineBlockNeedsLayout = false;
        jQuery2(function() {
          var val, div, body, container;
          body = document2.getElementsByTagName("body")[0];
          if (!body || !body.style) {
            return;
          }
          div = document2.createElement("div");
          container = document2.createElement("div");
          container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
          body.appendChild(container).appendChild(div);
          if (typeof div.style.zoom !== "undefined") {
            div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
            if (val) {
              body.style.zoom = 1;
            }
          }
          body.removeChild(container);
        });
        (function() {
          var div = document2.createElement("div");
          support.deleteExpando = true;
          try {
            delete div.test;
          } catch (e) {
            support.deleteExpando = false;
          }
          div = null;
        })();
        var acceptData = function(elem) {
          var noData = jQuery2.noData[(elem.nodeName + " ").toLowerCase()], nodeType = +elem.nodeType || 1;
          return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute("classid") === noData;
        };
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
        function dataAttr(elem, key, data) {
          if (data === void 0 && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery2.parseJSON(data) : data;
              } catch (e) {
              }
              jQuery2.data(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        function isEmptyDataObject(obj) {
          var name;
          for (name in obj) {
            if (name === "data" && jQuery2.isEmptyObject(obj[name])) {
              continue;
            }
            if (name !== "toJSON") {
              return false;
            }
          }
          return true;
        }
        function internalData(elem, name, data, pvt) {
          if (!acceptData(elem)) {
            return;
          }
          var ret, thisCache, internalKey = jQuery2.expando, isNode = elem.nodeType, cache = isNode ? jQuery2.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
          if ((!id || !cache[id] || !pvt && !cache[id].data) && data === void 0 && typeof name === "string") {
            return;
          }
          if (!id) {
            if (isNode) {
              id = elem[internalKey] = deletedIds.pop() || jQuery2.guid++;
            } else {
              id = internalKey;
            }
          }
          if (!cache[id]) {
            cache[id] = isNode ? {} : { toJSON: jQuery2.noop };
          }
          if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
              cache[id] = jQuery2.extend(cache[id], name);
            } else {
              cache[id].data = jQuery2.extend(cache[id].data, name);
            }
          }
          thisCache = cache[id];
          if (!pvt) {
            if (!thisCache.data) {
              thisCache.data = {};
            }
            thisCache = thisCache.data;
          }
          if (data !== void 0) {
            thisCache[jQuery2.camelCase(name)] = data;
          }
          if (typeof name === "string") {
            ret = thisCache[name];
            if (ret == null) {
              ret = thisCache[jQuery2.camelCase(name)];
            }
          } else {
            ret = thisCache;
          }
          return ret;
        }
        function internalRemoveData(elem, name, pvt) {
          if (!acceptData(elem)) {
            return;
          }
          var thisCache, i2, isNode = elem.nodeType, cache = isNode ? jQuery2.cache : elem, id = isNode ? elem[jQuery2.expando] : jQuery2.expando;
          if (!cache[id]) {
            return;
          }
          if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
              if (!jQuery2.isArray(name)) {
                if (name in thisCache) {
                  name = [name];
                } else {
                  name = jQuery2.camelCase(name);
                  if (name in thisCache) {
                    name = [name];
                  } else {
                    name = name.split(" ");
                  }
                }
              } else {
                name = name.concat(jQuery2.map(name, jQuery2.camelCase));
              }
              i2 = name.length;
              while (i2--) {
                delete thisCache[name[i2]];
              }
              if (pvt ? !isEmptyDataObject(thisCache) : !jQuery2.isEmptyObject(thisCache)) {
                return;
              }
            }
          }
          if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
              return;
            }
          }
          if (isNode) {
            jQuery2.cleanData([elem], true);
          } else if (support.deleteExpando || cache != cache.window) {
            delete cache[id];
          } else {
            cache[id] = void 0;
          }
        }
        jQuery2.extend({
          cache: {},
          noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
          },
          hasData: function(elem) {
            elem = elem.nodeType ? jQuery2.cache[elem[jQuery2.expando]] : elem[jQuery2.expando];
            return !!elem && !isEmptyDataObject(elem);
          },
          data: function(elem, name, data) {
            return internalData(elem, name, data);
          },
          removeData: function(elem, name) {
            return internalRemoveData(elem, name);
          },
          _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
          },
          _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
          }
        });
        jQuery2.fn.extend({
          data: function(key, value) {
            var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = jQuery2.data(elem);
                if (elem.nodeType === 1 && !jQuery2._data(elem, "parsedAttrs")) {
                  i2 = attrs.length;
                  while (i2--) {
                    if (attrs[i2]) {
                      name = attrs[i2].name;
                      if (name.indexOf("data-") === 0) {
                        name = jQuery2.camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  jQuery2._data(elem, "parsedAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                jQuery2.data(this, key);
              });
            }
            return arguments.length > 1 ? this.each(function() {
              jQuery2.data(this, key, value);
            }) : elem ? dataAttr(elem, key, jQuery2.data(elem, key)) : void 0;
          },
          removeData: function(key) {
            return this.each(function() {
              jQuery2.removeData(this, key);
            });
          }
        });
        jQuery2.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = jQuery2._data(elem, type);
              if (data) {
                if (!queue || jQuery2.isArray(data)) {
                  queue = jQuery2._data(elem, type, jQuery2.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery2._data(elem, key) || jQuery2._data(elem, key, {
              empty: jQuery2.Callbacks("once memory").add(function() {
                jQuery2._removeData(elem, type + "queue");
                jQuery2._removeData(elem, key);
              })
            });
          }
        });
        jQuery2.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery2.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery2.queue(this, type, data);
              jQuery2._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery2.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery2.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i2--) {
              tmp = jQuery2._data(elements[i2], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        (function() {
          var shrinkWrapBlocksVal;
          support.shrinkWrapBlocks = function() {
            if (shrinkWrapBlocksVal != null) {
              return shrinkWrapBlocksVal;
            }
            shrinkWrapBlocksVal = false;
            var div, body, container;
            body = document2.getElementsByTagName("body")[0];
            if (!body || !body.style) {
              return;
            }
            div = document2.createElement("div");
            container = document2.createElement("div");
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild(container).appendChild(div);
            if (typeof div.style.zoom !== "undefined") {
              div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
              div.appendChild(document2.createElement("div")).style.width = "5px";
              shrinkWrapBlocksVal = div.offsetWidth !== 3;
            }
            body.removeChild(container);
            return shrinkWrapBlocksVal;
          };
        })();
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHidden = function(elem, el) {
          elem = el || elem;
          return jQuery2.css(elem, "display") === "none" || !jQuery2.contains(elem.ownerDocument, elem);
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery2.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3];
            valueParts = valueParts || [];
            initialInUnit = +initial || 1;
            do {
              scale = scale || ".5";
              initialInUnit = initialInUnit / scale;
              jQuery2.style(elem, prop, initialInUnit + unit);
            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i2 = 0, length = elems.length, bulk = key == null;
          if (jQuery2.type(key) === "object") {
            chainable = true;
            for (i2 in key) {
              access(elems, fn, i2, key[i2], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!jQuery2.isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, key2, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i2 < length; i2++) {
                fn(
                  elems[i2],
                  key,
                  raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))
                );
              }
            }
          }
          return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        };
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([\w:-]+)/;
        var rscriptType = /^$|\/(?:java|ecma)script/i;
        var rleadingWhitespace = /^\s+/;
        var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        function createSafeFragment(document3) {
          var list = nodeNames.split("|"), safeFrag = document3.createDocumentFragment();
          if (safeFrag.createElement) {
            while (list.length) {
              safeFrag.createElement(
                list.pop()
              );
            }
          }
          return safeFrag;
        }
        (function() {
          var div = document2.createElement("div"), fragment = document2.createDocumentFragment(), input = document2.createElement("input");
          div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
          support.leadingWhitespace = div.firstChild.nodeType === 3;
          support.tbody = !div.getElementsByTagName("tbody").length;
          support.htmlSerialize = !!div.getElementsByTagName("link").length;
          support.html5Clone = document2.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
          input.type = "checkbox";
          input.checked = true;
          fragment.appendChild(input);
          support.appendChecked = input.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          fragment.appendChild(div);
          input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          support.noCloneEvent = !!div.addEventListener;
          div[jQuery2.expando] = 1;
          support.attributes = !div.getAttribute(jQuery2.expando);
        })();
        var wrapMap = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        function getAll(context, tag) {
          var elems, elem, i2 = 0, found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : void 0;
          if (!found) {
            for (found = [], elems = context.childNodes || context; (elem = elems[i2]) != null; i2++) {
              if (!tag || jQuery2.nodeName(elem, tag)) {
                found.push(elem);
              } else {
                jQuery2.merge(found, getAll(elem, tag));
              }
            }
          }
          return tag === void 0 || tag && jQuery2.nodeName(context, tag) ? jQuery2.merge([context], found) : found;
        }
        function setGlobalEval(elems, refElements) {
          var elem, i2 = 0;
          for (; (elem = elems[i2]) != null; i2++) {
            jQuery2._data(
              elem,
              "globalEval",
              !refElements || jQuery2._data(refElements[i2], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/, rtbody = /<tbody/i;
        function fixDefaultChecked(elem) {
          if (rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
          }
        }
        function buildFragment(elems, context, scripts, selection, ignored) {
          var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i2 = 0;
          for (; i2 < l; i2++) {
            elem = elems[i2];
            if (elem || elem === 0) {
              if (jQuery2.type(elem) === "object") {
                jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || safe.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                  nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                }
                if (!support.tbody) {
                  elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                  j = elem && elem.childNodes.length;
                  while (j--) {
                    if (jQuery2.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                      elem.removeChild(tbody);
                    }
                  }
                }
                jQuery2.merge(nodes, tmp.childNodes);
                tmp.textContent = "";
                while (tmp.firstChild) {
                  tmp.removeChild(tmp.firstChild);
                }
                tmp = safe.lastChild;
              }
            }
          }
          if (tmp) {
            safe.removeChild(tmp);
          }
          if (!support.appendChecked) {
            jQuery2.grep(getAll(nodes, "input"), fixDefaultChecked);
          }
          i2 = 0;
          while (elem = nodes[i2++]) {
            if (selection && jQuery2.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            contains = jQuery2.contains(elem.ownerDocument, elem);
            tmp = getAll(safe.appendChild(elem), "script");
            if (contains) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          tmp = null;
          return safe;
        }
        (function() {
          var i2, eventName, div = document2.createElement("div");
          for (i2 in { submit: true, change: true, focusin: true }) {
            eventName = "on" + i2;
            if (!(support[i2] = eventName in window2)) {
              div.setAttribute(eventName, "t");
              support[i2] = div.attributes[eventName].expando === false;
            }
          }
          div = null;
        })();
        var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn, data, selector);
          });
        }
        jQuery2.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var tmp, events, t2, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery2._data(elem);
            if (!elemData) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (!handler.guid) {
              handler.guid = jQuery2.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery2 !== "undefined" && (!e || jQuery2.event.triggered !== e.type) ? jQuery2.event.dispatch.apply(eventHandle.elem, arguments) : void 0;
              };
              eventHandle.elem = elem;
            }
            types = (types || "").match(rnotwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery2.event.special[type] || {};
              handleObj = jQuery2.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle, false);
                  } else if (elem.attachEvent) {
                    elem.attachEvent("on" + type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery2.event.global[type] = true;
            }
            elem = null;
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t2, events, special, handlers, type, namespaces, origType, elemData = jQuery2.hasData(elem) && jQuery2._data(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnotwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery2.event.remove(elem, type + types[t2], handler, selector, true);
                }
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery2.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery2.isEmptyObject(events)) {
              delete elemData.handle;
              jQuery2._removeData(elem, "events");
            }
          },
          trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i2, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery2.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery2.makeArray(data, [event]);
            special = jQuery2.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery2.isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i2 = 0;
            while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
              event.type = i2 > 1 ? bubbleType : special.bindType || type;
              handle = (jQuery2._data(cur, "events") || {})[event.type] && jQuery2._data(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && elem[type] && !jQuery2.isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery2.event.triggered = type;
                  try {
                    elem[type]();
                  } catch (e) {
                  }
                  jQuery2.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          dispatch: function(event) {
            event = jQuery2.event.fix(event);
            var i2, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (jQuery2._data(this, "events") || {})[event.type] || [], special = jQuery2.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
            i2 = 0;
            while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i2, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
              for (; cur != this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                  matches = [];
                  for (i2 = 0; i2 < delegateCount; i2++) {
                    handleObj = handlers[i2];
                    sel = handleObj.selector + " ";
                    if (matches[sel] === void 0) {
                      matches[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                    }
                    if (matches[sel]) {
                      matches.push(handleObj);
                    }
                  }
                  if (matches.length) {
                    handlerQueue.push({ elem: cur, handlers: matches });
                  }
                }
              }
            }
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          fix: function(event) {
            if (event[jQuery2.expando]) {
              return event;
            }
            var i2, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
              this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery2.Event(originalEvent);
            i2 = copy.length;
            while (i2--) {
              prop = copy[i2];
              event[prop] = originalEvent[prop];
            }
            if (!event.target) {
              event.target = originalEvent.srcElement || document2;
            }
            if (event.target.nodeType === 3) {
              event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
              if (event.which == null) {
                event.which = original.charCode != null ? original.charCode : original.keyCode;
              }
              return event;
            }
          },
          mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
              var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
              if (event.pageX == null && original.clientX != null) {
                eventDoc = event.target.ownerDocument || document2;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
              }
              if (!event.relatedTarget && fromElement) {
                event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
              }
              if (!event.which && button !== void 0) {
                event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
              }
              return event;
            }
          },
          special: {
            load: {
              noBubble: true
            },
            focus: {
              trigger: function() {
                if (this !== safeActiveElement() && this.focus) {
                  try {
                    this.focus();
                    return false;
                  } catch (e) {
                  }
                }
              },
              delegateType: "focusin"
            },
            blur: {
              trigger: function() {
                if (this === safeActiveElement() && this.blur) {
                  this.blur();
                  return false;
                }
              },
              delegateType: "focusout"
            },
            click: {
              trigger: function() {
                if (jQuery2.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                  this.click();
                  return false;
                }
              },
              _default: function(event) {
                return jQuery2.nodeName(event.target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          },
          simulate: function(type, elem, event) {
            var e = jQuery2.extend(
              new jQuery2.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery2.event.trigger(e, null, elem);
            if (e.isDefaultPrevented()) {
              event.preventDefault();
            }
          }
        };
        jQuery2.removeEvent = document2.removeEventListener ? function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        } : function(elem, type, handle) {
          var name = "on" + type;
          if (elem.detachEvent) {
            if (typeof elem[name] === "undefined") {
              elem[name] = null;
            }
            elem.detachEvent(name, handle);
          }
        };
        jQuery2.Event = function(src, props) {
          if (!(this instanceof jQuery2.Event)) {
            return new jQuery2.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery2.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || jQuery2.now();
          this[jQuery2.expando] = true;
        };
        jQuery2.Event.prototype = {
          constructor: jQuery2.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
              return;
            }
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e || this.isSimulated) {
              return;
            }
            if (e.stopPropagation) {
              e.stopPropagation();
            }
            e.cancelBubble = true;
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && e.stopImmediatePropagation) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery2.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery2.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery2.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        if (!support.submit) {
          jQuery2.event.special.submit = {
            setup: function() {
              if (jQuery2.nodeName(this, "form")) {
                return false;
              }
              jQuery2.event.add(this, "click._submit keypress._submit", function(e) {
                var elem = e.target, form = jQuery2.nodeName(elem, "input") || jQuery2.nodeName(elem, "button") ? jQuery2.prop(elem, "form") : void 0;
                if (form && !jQuery2._data(form, "submit")) {
                  jQuery2.event.add(form, "submit._submit", function(event) {
                    event._submitBubble = true;
                  });
                  jQuery2._data(form, "submit", true);
                }
              });
            },
            postDispatch: function(event) {
              if (event._submitBubble) {
                delete event._submitBubble;
                if (this.parentNode && !event.isTrigger) {
                  jQuery2.event.simulate("submit", this.parentNode, event);
                }
              }
            },
            teardown: function() {
              if (jQuery2.nodeName(this, "form")) {
                return false;
              }
              jQuery2.event.remove(this, "._submit");
            }
          };
        }
        if (!support.change) {
          jQuery2.event.special.change = {
            setup: function() {
              if (rformElems.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                  jQuery2.event.add(this, "propertychange._change", function(event) {
                    if (event.originalEvent.propertyName === "checked") {
                      this._justChanged = true;
                    }
                  });
                  jQuery2.event.add(this, "click._change", function(event) {
                    if (this._justChanged && !event.isTrigger) {
                      this._justChanged = false;
                    }
                    jQuery2.event.simulate("change", this, event);
                  });
                }
                return false;
              }
              jQuery2.event.add(this, "beforeactivate._change", function(e) {
                var elem = e.target;
                if (rformElems.test(elem.nodeName) && !jQuery2._data(elem, "change")) {
                  jQuery2.event.add(elem, "change._change", function(event) {
                    if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                      jQuery2.event.simulate("change", this.parentNode, event);
                    }
                  });
                  jQuery2._data(elem, "change", true);
                }
              });
            },
            handle: function(event) {
              var elem = event.target;
              if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                return event.handleObj.handler.apply(this, arguments);
              }
            },
            teardown: function() {
              jQuery2.event.remove(this, "._change");
              return !rformElems.test(this.nodeName);
            }
          };
        }
        if (!support.focusin) {
          jQuery2.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
            };
            jQuery2.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this, attaches = jQuery2._data(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                jQuery2._data(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this, attaches = jQuery2._data(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  jQuery2._removeData(doc, fix);
                } else {
                  jQuery2._data(doc, fix, attaches);
                }
              }
            };
          });
        }
        jQuery2.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery2(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn, selector);
            });
          },
          trigger: function(type, data) {
            return this.each(function() {
              jQuery2.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery2.event.trigger(type, data, elem, true);
            }
          }
        });
        var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, safeFragment = createSafeFragment(document2), fragmentDiv = safeFragment.appendChild(document2.createElement("div"));
        function manipulationTarget(elem, content) {
          return jQuery2.nodeName(elem, "table") && jQuery2.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
        }
        function disableScript(elem) {
          elem.type = (jQuery2.find.attr(elem, "type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          var match = rscriptTypeMasked.exec(elem.type);
          if (match) {
            elem.type = match[1];
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          if (dest.nodeType !== 1 || !jQuery2.hasData(src)) {
            return;
          }
          var type, i2, l, oldData = jQuery2._data(src), curData = jQuery2._data(dest, oldData), events = oldData.events;
          if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
              for (i2 = 0, l = events[type].length; i2 < l; i2++) {
                jQuery2.event.add(dest, type, events[type][i2]);
              }
            }
          }
          if (curData.data) {
            curData.data = jQuery2.extend({}, curData.data);
          }
        }
        function fixCloneNodeIssues(src, dest) {
          var nodeName, e, data;
          if (dest.nodeType !== 1) {
            return;
          }
          nodeName = dest.nodeName.toLowerCase();
          if (!support.noCloneEvent && dest[jQuery2.expando]) {
            data = jQuery2._data(dest);
            for (e in data.events) {
              jQuery2.removeEvent(dest, e, data.handle);
            }
            dest.removeAttribute(jQuery2.expando);
          }
          if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);
          } else if (nodeName === "object") {
            if (dest.parentNode) {
              dest.outerHTML = src.outerHTML;
            }
            if (support.html5Clone && (src.innerHTML && !jQuery2.trim(dest.innerHTML))) {
              dest.innerHTML = src.innerHTML;
            }
          } else if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
              dest.value = src.value;
            }
          } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;
          } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = concat.apply([], args);
          var first, node, hasScripts, scripts, doc, fragment, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery2.isFunction(value);
          if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (isFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i2 < l; i2++) {
                node = fragment;
                if (i2 !== iNoClone) {
                  node = jQuery2.clone(node, true, true);
                  if (hasScripts) {
                    jQuery2.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i2], node, i2);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery2.map(scripts, restoreScript);
                for (i2 = 0; i2 < hasScripts; i2++) {
                  node = scripts[i2];
                  if (rscriptType.test(node.type || "") && !jQuery2._data(node, "globalEval") && jQuery2.contains(doc, node)) {
                    if (node.src) {
                      if (jQuery2._evalUrl) {
                        jQuery2._evalUrl(node.src);
                      }
                    } else {
                      jQuery2.globalEval(
                        (node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")
                      );
                    }
                  }
                }
              }
              fragment = first = null;
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, elems = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
          for (; (node = elems[i2]) != null; i2++) {
            if (!keepData && node.nodeType === 1) {
              jQuery2.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && jQuery2.contains(node.ownerDocument, node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery2.extend({
          htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i2, srcElements, inPage = jQuery2.contains(elem.ownerDocument, elem);
            if (support.html5Clone || jQuery2.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
              clone = elem.cloneNode(true);
            } else {
              fragmentDiv.innerHTML = elem.outerHTML;
              fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i2 = 0; (node = srcElements[i2]) != null; ++i2) {
                if (destElements[i2]) {
                  fixCloneNodeIssues(node, destElements[i2]);
                }
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i2 = 0; (node = srcElements[i2]) != null; i2++) {
                  cloneCopyEvent(node, destElements[i2]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            return clone;
          },
          cleanData: function(elems, forceAcceptData) {
            var elem, type, id, data, i2 = 0, internalKey = jQuery2.expando, cache = jQuery2.cache, attributes = support.attributes, special = jQuery2.event.special;
            for (; (elem = elems[i2]) != null; i2++) {
              if (forceAcceptData || acceptData(elem)) {
                id = elem[internalKey];
                data = id && cache[id];
                if (data) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery2.event.remove(elem, type);
                      } else {
                        jQuery2.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  if (cache[id]) {
                    delete cache[id];
                    if (!attributes && typeof elem.removeAttribute !== "undefined") {
                      elem.removeAttribute(internalKey);
                    } else {
                      elem[internalKey] = void 0;
                    }
                    deletedIds.push(id);
                  }
                }
              }
            }
          }
        });
        jQuery2.fn.extend({
          domManip,
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery2.text(this) : this.empty().append(
                (this[0] && this[0].ownerDocument || document2).createTextNode(value2)
              );
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i2 = 0;
            for (; (elem = this[i2]) != null; i2++) {
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
              }
              while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
              }
              if (elem.options && jQuery2.nodeName(elem, "select")) {
                elem.options.length = 0;
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i2 = 0, l = this.length;
              if (value2 === void 0) {
                return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && (support.htmlSerialize || !rnoshimcache.test(value2)) && (support.leadingWhitespace || !rleadingWhitespace.test(value2)) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery2.htmlPrefilter(value2);
                try {
                  for (; i2 < l; i2++) {
                    elem = this[i2] || {};
                    if (elem.nodeType === 1) {
                      jQuery2.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery2.inArray(this, ignored) < 0) {
                jQuery2.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery2.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery2.fn[name] = function(selector) {
            var elems, i2 = 0, ret = [], insert = jQuery2(selector), last = insert.length - 1;
            for (; i2 <= last; i2++) {
              elems = i2 === last ? this : this.clone(true);
              jQuery2(insert[i2])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var iframe, elemdisplay = {
          HTML: "block",
          BODY: "block"
        };
        function actualDisplay(name, doc) {
          var elem = jQuery2(doc.createElement(name)).appendTo(doc.body), display = jQuery2.css(elem[0], "display");
          elem.detach();
          return display;
        }
        function defaultDisplay(nodeName) {
          var doc = document2, display = elemdisplay[nodeName];
          if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
              iframe = (iframe || jQuery2("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
              doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
              doc.write();
              doc.close();
              display = actualDisplay(nodeName, doc);
              iframe.detach();
            }
            elemdisplay[nodeName] = display;
          }
          return display;
        }
        var rmargin = /^margin/;
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var swap = function(elem, options, callback, args) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.apply(elem, args || []);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var documentElement = document2.documentElement;
        (function() {
          var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.cssText = "float:left;opacity:.5";
          support.opacity = div.style.opacity === "0.5";
          support.cssFloat = !!div.style.cssFloat;
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          container = document2.createElement("div");
          container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
          div.innerHTML = "";
          container.appendChild(div);
          support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" || div.style.WebkitBoxSizing === "";
          jQuery2.extend(support, {
            reliableHiddenOffsets: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return reliableHiddenOffsetsVal;
            },
            boxSizingReliable: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return boxSizingReliableVal;
            },
            pixelMarginRight: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return pixelMarginRightVal;
            },
            pixelPosition: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return pixelPositionVal;
            },
            reliableMarginRight: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return reliableMarginRightVal;
            },
            reliableMarginLeft: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return reliableMarginLeftVal;
            }
          });
          function computeStyleTests() {
            var contents, divStyle, documentElement2 = document2.documentElement;
            documentElement2.appendChild(container);
            div.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
            pixelMarginRightVal = reliableMarginRightVal = true;
            if (window2.getComputedStyle) {
              divStyle = window2.getComputedStyle(div);
              pixelPositionVal = (divStyle || {}).top !== "1%";
              reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
              boxSizingReliableVal = (divStyle || { width: "4px" }).width === "4px";
              div.style.marginRight = "50%";
              pixelMarginRightVal = (divStyle || { marginRight: "4px" }).marginRight === "4px";
              contents = div.appendChild(document2.createElement("div"));
              contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
              contents.style.marginRight = contents.style.width = "0";
              div.style.width = "1px";
              reliableMarginRightVal = !parseFloat((window2.getComputedStyle(contents) || {}).marginRight);
              div.removeChild(contents);
            }
            div.style.display = "none";
            reliableHiddenOffsetsVal = div.getClientRects().length === 0;
            if (reliableHiddenOffsetsVal) {
              div.style.display = "";
              div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
              div.childNodes[0].style.borderCollapse = "separate";
              contents = div.getElementsByTagName("td");
              contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
              reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
              if (reliableHiddenOffsetsVal) {
                contents[0].style.display = "";
                contents[1].style.display = "none";
                reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
              }
            }
            documentElement2.removeChild(container);
          }
        })();
        var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
        if (window2.getComputedStyle) {
          getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
              view = window2;
            }
            return view.getComputedStyle(elem);
          };
          curCSS = function(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0;
            if ((ret === "" || ret === void 0) && !jQuery2.contains(elem.ownerDocument, elem)) {
              ret = jQuery2.style(elem, name);
            }
            if (computed) {
              if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
              }
            }
            return ret === void 0 ? ret : ret + "";
          };
        } else if (documentElement.currentStyle) {
          getStyles = function(elem) {
            return elem.currentStyle;
          };
          curCSS = function(elem, name, computed) {
            var left, rs, rsLeft, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed[name] : void 0;
            if (ret == null && style && style[name]) {
              ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
              left = style.left;
              rs = elem.runtimeStyle;
              rsLeft = rs && rs.left;
              if (rsLeft) {
                rs.left = elem.currentStyle.left;
              }
              style.left = name === "fontSize" ? "1em" : ret;
              ret = style.pixelLeft + "px";
              style.left = left;
              if (rsLeft) {
                rs.left = rsLeft;
              }
            }
            return ret === void 0 ? ret : ret + "" || "auto";
          };
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/i, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        }, cssPrefixes = ["Webkit", "O", "Moz", "ms"], emptyStyle = document2.createElement("div").style;
        function vendorPropName(name) {
          if (name in emptyStyle) {
            return name;
          }
          var capName = name.charAt(0).toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
          while (i2--) {
            name = cssPrefixes[i2] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function showHide(elements, show) {
          var display, elem, hidden, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            values[index] = jQuery2._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
              if (!values[index] && display === "none") {
                elem.style.display = "";
              }
              if (elem.style.display === "" && isHidden(elem)) {
                values[index] = jQuery2._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
              }
            } else {
              hidden = isHidden(elem);
              if (display && display !== "none" || !hidden) {
                jQuery2._data(
                  elem,
                  "olddisplay",
                  hidden ? display : jQuery2.css(elem, "display")
                );
              }
            }
          }
          for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
              elem.style.display = show ? values[index] || "" : "none";
            }
          }
          return elements;
        }
        function setPositiveNumber(elem, value, subtract) {
          var matches = rnumsplit.exec(value);
          return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
        }
        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
          var i2 = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
          for (; i2 < 4; i2 += 2) {
            if (extra === "margin") {
              val += jQuery2.css(elem, extra + cssExpand[i2], true, styles);
            }
            if (isBorderBox) {
              if (extra === "content") {
                val -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              }
              if (extra !== "margin") {
                val -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            } else {
              val += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              if (extra !== "padding") {
                val += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            }
          }
          return val;
        }
        function getWidthOrHeight(elem, name, extra) {
          var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = support.boxSizing && jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
              val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
              return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
          }
          return val + augmentWidthOrHeight(
            elem,
            name,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles
          ) + "px";
        }
        jQuery2.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {
            "float": support.cssFloat ? "cssFloat" : "styleFloat"
          },
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = jQuery2.camelCase(name), style = elem.style;
            name = jQuery2.cssProps[origName] || (jQuery2.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number") {
                value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                try {
                  style[name] = value;
                } catch (e) {
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery2.camelCase(name);
            name = jQuery2.cssProps[origName] || (jQuery2.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery2.each(["height", "width"], function(i2, name) {
          jQuery2.cssHooks[name] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery2.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, name, extra);
                }) : getWidthOrHeight(elem, name, extra);
              }
            },
            set: function(elem, value, extra) {
              var styles = extra && getStyles(elem);
              return setPositiveNumber(
                elem,
                value,
                extra ? augmentWidthOrHeight(
                  elem,
                  name,
                  extra,
                  support.boxSizing && jQuery2.css(elem, "boxSizing", false, styles) === "border-box",
                  styles
                ) : 0
              );
            }
          };
        });
        if (!support.opacity) {
          jQuery2.cssHooks.opacity = {
            get: function(elem, computed) {
              return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
              var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery2.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
              style.zoom = 1;
              if ((value >= 1 || value === "") && jQuery2.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                style.removeAttribute("filter");
                if (value === "" || currentStyle && !currentStyle.filter) {
                  return;
                }
              }
              style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
          };
        }
        jQuery2.cssHooks.marginRight = addGetHookIf(
          support.reliableMarginRight,
          function(elem, computed) {
            if (computed) {
              return swap(
                elem,
                { "display": "inline-block" },
                curCSS,
                [elem, "marginRight"]
              );
            }
          }
        );
        jQuery2.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || (jQuery2.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              }) : 0)) + "px";
            }
          }
        );
        jQuery2.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery2.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i2 < 4; i2++) {
                expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (!rmargin.test(prefix)) {
            jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery2.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i2 = 0;
              if (jQuery2.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i2 < len; i2++) {
                  map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
            }, name, value, arguments.length > 1);
          },
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHidden(this)) {
                jQuery2(this).show();
              } else {
                jQuery2(this).hide();
              }
            });
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery2.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery2.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery2.fx.step[tween.prop]) {
                jQuery2.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery2.cssProps[tween.prop]] != null || jQuery2.cssHooks[tween.prop])) {
                jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery2.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery2.fx = Tween.prototype.init;
        jQuery2.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = jQuery2.now();
        }
        function genFx(type, includeWidth) {
          var which, attrs = { height: type }, i2 = 0;
          includeWidth = includeWidth ? 1 : 0;
          for (; i2 < 4; i2 += 2 - includeWidth) {
            which = cssExpand[i2];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery2._data(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery2._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery2.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            display = jQuery2.css(elem, "display");
            checkDisplay = display === "none" ? jQuery2._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery2.css(elem, "float") === "none") {
              if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
                style.display = "inline-block";
              } else {
                style.zoom = 1;
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            if (!support.shrinkWrapBlocks()) {
              anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
              });
            }
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
            } else {
              display = void 0;
            }
          }
          if (!jQuery2.isEmptyObject(orig)) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = jQuery2._data(elem, "fxshow", {});
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              jQuery2(elem).show();
            } else {
              anim.done(function() {
                jQuery2(elem).hide();
              });
            }
            anim.done(function() {
              var prop2;
              jQuery2._removeData(elem, "fxshow");
              for (prop2 in orig) {
                jQuery2.style(elem, prop2, orig[prop2]);
              }
            });
            for (prop in orig) {
              tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
              if (!(prop in dataShow)) {
                dataShow[prop] = tween.start;
                if (hidden) {
                  tween.end = tween.start;
                  tween.start = prop === "width" || prop === "height" ? 1 : 0;
                }
              }
            }
          } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = jQuery2.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery2.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery2.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            } else {
              deferred.resolveWith(elem, [animation]);
              return false;
            }
          }, animation = deferred.promise({
            elem,
            props: jQuery2.extend({}, properties),
            opts: jQuery2.extend(true, {
              specialEasing: {},
              easing: jQuery2.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery2.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (jQuery2.isFunction(result.stop)) {
                jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = jQuery2.proxy(result.stop, result);
              }
              return result;
            }
          }
          jQuery2.map(props, createTween, animation);
          if (jQuery2.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          jQuery2.fx.timer(
            jQuery2.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        }
        jQuery2.Animation = jQuery2.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (jQuery2.isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnotwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery2.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery2.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery2.isFunction(easing) && easing
          };
          opt.duration = jQuery2.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery2.fx.speeds ? jQuery2.fx.speeds[opt.duration] : jQuery2.fx.speeds._default;
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (jQuery2.isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery2.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery2.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery2.extend({}, prop), optall);
              if (empty || jQuery2._data(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue && type !== false) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = jQuery2._data(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery2.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = jQuery2._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery2.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery2.each(["toggle", "show", "hide"], function(i2, name) {
          var cssFn = jQuery2.fn[name];
          jQuery2.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery2.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery2.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery2.timers = [];
        jQuery2.fx.tick = function() {
          var timer, timers = jQuery2.timers, i2 = 0;
          fxNow = jQuery2.now();
          for (; i2 < timers.length; i2++) {
            timer = timers[i2];
            if (!timer() && timers[i2] === timer) {
              timers.splice(i2--, 1);
            }
          }
          if (!timers.length) {
            jQuery2.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery2.fx.timer = function(timer) {
          jQuery2.timers.push(timer);
          if (timer()) {
            jQuery2.fx.start();
          } else {
            jQuery2.timers.pop();
          }
        };
        jQuery2.fx.interval = 13;
        jQuery2.fx.start = function() {
          if (!timerId) {
            timerId = window2.setInterval(jQuery2.fx.tick, jQuery2.fx.interval);
          }
        };
        jQuery2.fx.stop = function() {
          window2.clearInterval(timerId);
          timerId = null;
        };
        jQuery2.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery2.fn.delay = function(time, type) {
          time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var a, input = document2.createElement("input"), div = document2.createElement("div"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          div = document2.createElement("div");
          div.setAttribute("className", "t");
          div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
          a = div.getElementsByTagName("a")[0];
          input.setAttribute("type", "checkbox");
          div.appendChild(input);
          a = div.getElementsByTagName("a")[0];
          a.style.cssText = "top:1px";
          support.getSetAttribute = div.className !== "t";
          support.style = /top/.test(a.getAttribute("style"));
          support.hrefNormalized = a.getAttribute("href") === "/a";
          support.checkOn = !!input.value;
          support.optSelected = opt.selected;
          support.enctype = !!document2.createElement("form").enctype;
          select.disabled = true;
          support.optDisabled = !opt.disabled;
          input = document2.createElement("input");
          input.setAttribute("value", "");
          support.input = input.getAttribute("value") === "";
          input.value = "t";
          input.setAttribute("type", "radio");
          support.radioValue = input.value === "t";
        })();
        var rreturn = /\r/g, rspaces = /[\x20\t\r\n\f]+/g;
        jQuery2.fn.extend({
          val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
              }
              return;
            }
            isFunction = jQuery2.isFunction(value);
            return this.each(function(i2) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (isFunction) {
                val = value.call(this, i2, jQuery2(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (jQuery2.isArray(val)) {
                val = jQuery2.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery2.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery2.find.attr(elem, "value");
                return val != null ? val : jQuery2.trim(jQuery2.text(elem)).replace(rspaces, " ");
              }
            },
            select: {
              get: function(elem) {
                var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i2 = index < 0 ? max : one ? index : 0;
                for (; i2 < max; i2++) {
                  option = options[i2];
                  if ((option.selected || i2 === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery2.nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery2(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
                while (i2--) {
                  option = options[i2];
                  if (jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                    try {
                      option.selected = optionSet = true;
                    } catch (_) {
                      option.scrollHeight;
                    }
                  } else {
                    option.selected = false;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return options;
              }
            }
          }
        });
        jQuery2.each(["radio", "checkbox"], function() {
          jQuery2.valHooks[this] = {
            set: function(elem, value) {
              if (jQuery2.isArray(value)) {
                return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery2.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var nodeHook, boolHook, attrHandle = jQuery2.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = support.getSetAttribute, getSetInput = support.input;
        jQuery2.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery2.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery2.removeAttr(this, name);
            });
          }
        });
        jQuery2.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery2.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = name.toLowerCase();
              hooks = jQuery2.attrHooks[name] || (jQuery2.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery2.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery2.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && jQuery2.nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, propName, i2 = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i2++]) {
                propName = jQuery2.propFix[name] || name;
                if (jQuery2.expr.match.bool.test(name)) {
                  if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    elem[propName] = false;
                  } else {
                    elem[jQuery2.camelCase("default-" + name)] = elem[propName] = false;
                  }
                } else {
                  jQuery2.attr(elem, name, "");
                }
                elem.removeAttribute(getSetAttribute ? name : propName);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery2.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem.setAttribute(!getSetAttribute && jQuery2.propFix[name] || name, name);
            } else {
              elem[jQuery2.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
          }
        };
        jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(i2, name) {
          var getter = attrHandle[name] || jQuery2.find.attr;
          if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
            attrHandle[name] = function(elem, name2, isXML) {
              var ret, handle;
              if (!isXML) {
                handle = attrHandle[name2];
                attrHandle[name2] = ret;
                ret = getter(elem, name2, isXML) != null ? name2.toLowerCase() : null;
                attrHandle[name2] = handle;
              }
              return ret;
            };
          } else {
            attrHandle[name] = function(elem, name2, isXML) {
              if (!isXML) {
                return elem[jQuery2.camelCase("default-" + name2)] ? name2.toLowerCase() : null;
              }
            };
          }
        });
        if (!getSetInput || !getSetAttribute) {
          jQuery2.attrHooks.value = {
            set: function(elem, value, name) {
              if (jQuery2.nodeName(elem, "input")) {
                elem.defaultValue = value;
              } else {
                return nodeHook && nodeHook.set(elem, value, name);
              }
            }
          };
        }
        if (!getSetAttribute) {
          nodeHook = {
            set: function(elem, value, name) {
              var ret = elem.getAttributeNode(name);
              if (!ret) {
                elem.setAttributeNode(
                  ret = elem.ownerDocument.createAttribute(name)
                );
              }
              ret.value = value += "";
              if (name === "value" || value === elem.getAttribute(name)) {
                return value;
              }
            }
          };
          attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
            var ret;
            if (!isXML) {
              return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
            }
          };
          jQuery2.valHooks.button = {
            get: function(elem, name) {
              var ret = elem.getAttributeNode(name);
              if (ret && ret.specified) {
                return ret.value;
              }
            },
            set: nodeHook.set
          };
          jQuery2.attrHooks.contenteditable = {
            set: function(elem, value, name) {
              nodeHook.set(elem, value === "" ? false : value, name);
            }
          };
          jQuery2.each(["width", "height"], function(i2, name) {
            jQuery2.attrHooks[name] = {
              set: function(elem, value) {
                if (value === "") {
                  elem.setAttribute(name, "auto");
                  return value;
                }
              }
            };
          });
        }
        if (!support.style) {
          jQuery2.attrHooks.style = {
            get: function(elem) {
              return elem.style.cssText || void 0;
            },
            set: function(elem, value) {
              return elem.style.cssText = value + "";
            }
          };
        }
        var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;
        jQuery2.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery2.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            name = jQuery2.propFix[name] || name;
            return this.each(function() {
              try {
                this[name] = void 0;
                delete this[name];
              } catch (e) {
              }
            });
          }
        });
        jQuery2.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = jQuery2.propFix[name] || name;
              hooks = jQuery2.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery2.find.attr(elem, "tabindex");
                return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.hrefNormalized) {
          jQuery2.each(["href", "src"], function(i2, name) {
            jQuery2.propHooks[name] = {
              get: function(elem) {
                return elem.getAttribute(name, 4);
              }
            };
          });
        }
        if (!support.optSelected) {
          jQuery2.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery2.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery2.propFix[this.toLowerCase()] = this;
        });
        if (!support.enctype) {
          jQuery2.propFix.enctype = "encoding";
        }
        var rclass = /[\t\r\n\f]/g;
        function getClass(elem) {
          return jQuery2.attr(elem, "class") || "";
        }
        jQuery2.fn.extend({
          addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
            if (jQuery2.isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            if (typeof value === "string" && value) {
              classes = value.match(rnotwhite) || [];
              while (elem = this[i2++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    if (cur.indexOf(" " + clazz + " ") < 0) {
                      cur += clazz + " ";
                    }
                  }
                  finalValue = jQuery2.trim(cur);
                  if (curValue !== finalValue) {
                    jQuery2.attr(elem, "class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
            if (jQuery2.isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            if (typeof value === "string" && value) {
              classes = value.match(rnotwhite) || [];
              while (elem = this[i2++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    while (cur.indexOf(" " + clazz + " ") > -1) {
                      cur = cur.replace(" " + clazz + " ", " ");
                    }
                  }
                  finalValue = jQuery2.trim(cur);
                  if (curValue !== finalValue) {
                    jQuery2.attr(elem, "class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery2.isFunction(value)) {
              return this.each(function(i2) {
                jQuery2(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            return this.each(function() {
              var className, i2, self2, classNames;
              if (type === "string") {
                i2 = 0;
                self2 = jQuery2(this);
                classNames = value.match(rnotwhite) || [];
                while (className = classNames[i2++]) {
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  jQuery2._data(this, "__className__", className);
                }
                jQuery2.attr(
                  this,
                  "class",
                  className || value === false ? "" : jQuery2._data(this, "__className__") || ""
                );
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i2 = 0;
            className = " " + selector + " ";
            while (elem = this[i2++]) {
              if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        jQuery2.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
          function(i2, name) {
            jQuery2.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        jQuery2.fn.extend({
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        var location = window2.location;
        var nonce = jQuery2.now();
        var rquery = /\?/;
        var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        jQuery2.parseJSON = function(data) {
          if (window2.JSON && window2.JSON.parse) {
            return window2.JSON.parse(data + "");
          }
          var requireNonComma, depth = null, str = jQuery2.trim(data + "");
          return str && !jQuery2.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
            if (requireNonComma && comma) {
              depth = 0;
            }
            if (depth === 0) {
              return token;
            }
            requireNonComma = open || comma;
            depth += !close - !open;
            return "";
          })) ? Function("return " + str)() : jQuery2.error("Invalid JSON: " + data);
        };
        jQuery2.parseXML = function(data) {
          var xml, tmp;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            if (window2.DOMParser) {
              tmp = new window2.DOMParser();
              xml = tmp.parseFromString(data, "text/xml");
            } else {
              xml = new window2.ActiveXObject("Microsoft.XMLDOM");
              xml.async = "false";
              xml.loadXML(data);
            }
          } catch (e) {
            xml = void 0;
          }
          if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
            jQuery2.error("Invalid XML: " + data);
          }
          return xml;
        };
        var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), ajaxLocation = location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery2.isFunction(func)) {
              while (dataType = dataTypes[i2++]) {
                if (dataType.charAt(0) === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var deep, key, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery2.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s["throws"]) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery2.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": jQuery2.parseJSON,
              "text xml": jQuery2.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var parts, i2, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (state === 2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase()] = match[2];
                    }
                  }
                  match = responseHeaders[key.toLowerCase()];
                }
                return match == null ? null : match;
              },
              getAllResponseHeaders: function() {
                return state === 2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                var lname = name.toLowerCase();
                if (!state) {
                  name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (!state) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (state < 2) {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  } else {
                    jqXHR.always(map[jqXHR.status]);
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery2.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
            if (s.crossDomain == null) {
              parts = rurl.exec(s.url.toLowerCase());
              s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery2.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
              return jqXHR;
            }
            fireGlobals = jQuery2.event && s.global;
            if (fireGlobals && jQuery2.active++ === 0) {
              jQuery2.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
              if (s.data) {
                cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
              }
            }
            if (s.ifModified) {
              if (jQuery2.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
              }
              if (jQuery2.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i2 in s.headers) {
              jqXHR.setRequestHeader(i2, s.headers[i2]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            for (i2 in { success: 1, error: 1, complete: 1 }) {
              jqXHR[i2](s[i2]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (state === 2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                state = 1;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (state < 2) {
                  done(-1, e);
                } else {
                  throw e;
                }
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (state === 2) {
                return;
              }
              state = 2;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery2.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery2.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery2.active) {
                  jQuery2.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery2.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery2.get(url, void 0, callback, "script");
          }
        });
        jQuery2.each(["get", "post"], function(i2, method) {
          jQuery2[method] = function(url, data, callback, type) {
            if (jQuery2.isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery2.ajax(jQuery2.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery2.isPlainObject(url) && url));
          };
        });
        jQuery2._evalUrl = function(url) {
          return jQuery2.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
          });
        };
        jQuery2.fn.extend({
          wrapAll: function(html) {
            if (jQuery2.isFunction(html)) {
              return this.each(function(i2) {
                jQuery2(this).wrapAll(html.call(this, i2));
              });
            }
            if (this[0]) {
              var wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstChild && elem.firstChild.nodeType === 1) {
                  elem = elem.firstChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (jQuery2.isFunction(html)) {
              return this.each(function(i2) {
                jQuery2(this).wrapInner(html.call(this, i2));
              });
            }
            return this.each(function() {
              var self2 = jQuery2(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var isFunction = jQuery2.isFunction(html);
            return this.each(function(i2) {
              jQuery2(this).wrapAll(isFunction ? html.call(this, i2) : html);
            });
          },
          unwrap: function() {
            return this.parent().each(function() {
              if (!jQuery2.nodeName(this, "body")) {
                jQuery2(this).replaceWith(this.childNodes);
              }
            }).end();
          }
        });
        function getDisplay(elem) {
          return elem.style && elem.style.display || jQuery2.css(elem, "display");
        }
        function filterHidden(elem) {
          if (!jQuery2.contains(elem.ownerDocument || document2, elem)) {
            return true;
          }
          while (elem && elem.nodeType === 1) {
            if (getDisplay(elem) === "none" || elem.type === "hidden") {
              return true;
            }
            elem = elem.parentNode;
          }
          return false;
        }
        jQuery2.expr.filters.hidden = function(elem) {
          return support.reliableHiddenOffsets() ? elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length : filterHidden(elem);
        };
        jQuery2.expr.filters.visible = function(elem) {
          return !jQuery2.expr.filters.hidden(elem);
        };
        var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (jQuery2.isArray(obj)) {
            jQuery2.each(obj, function(i2, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && jQuery2.type(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery2.param = function(a, traditional) {
          var prefix, s = [], add = function(key, value) {
            value = jQuery2.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
          };
          if (traditional === void 0) {
            traditional = jQuery2.ajaxSettings && jQuery2.ajaxSettings.traditional;
          }
          if (jQuery2.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
            jQuery2.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&").replace(r20, "+");
        };
        jQuery2.fn.extend({
          serialize: function() {
            return jQuery2.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery2.prop(this, "elements");
              return elements ? jQuery2.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i2, elem) {
              var val = jQuery2(this).val();
              return val == null ? null : jQuery2.isArray(val) ? jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        jQuery2.ajaxSettings.xhr = window2.ActiveXObject !== void 0 ? function() {
          if (this.isLocal) {
            return createActiveXHR();
          }
          if (document2.documentMode > 8) {
            return createStandardXHR();
          }
          return /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
        } : createStandardXHR;
        var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery2.ajaxSettings.xhr();
        if (window2.attachEvent) {
          window2.attachEvent("onunload", function() {
            for (var key in xhrCallbacks) {
              xhrCallbacks[key](void 0, true);
            }
          });
        }
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        xhrSupported = support.ajax = !!xhrSupported;
        if (xhrSupported) {
          jQuery2.ajaxTransport(function(options) {
            if (!options.crossDomain || support.cors) {
              var callback;
              return {
                send: function(headers, complete) {
                  var i2, xhr = options.xhr(), id = ++xhrId;
                  xhr.open(
                    options.type,
                    options.url,
                    options.async,
                    options.username,
                    options.password
                  );
                  if (options.xhrFields) {
                    for (i2 in options.xhrFields) {
                      xhr[i2] = options.xhrFields[i2];
                    }
                  }
                  if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                  }
                  if (!options.crossDomain && !headers["X-Requested-With"]) {
                    headers["X-Requested-With"] = "XMLHttpRequest";
                  }
                  for (i2 in headers) {
                    if (headers[i2] !== void 0) {
                      xhr.setRequestHeader(i2, headers[i2] + "");
                    }
                  }
                  xhr.send(options.hasContent && options.data || null);
                  callback = function(_, isAbort) {
                    var status, statusText, responses;
                    if (callback && (isAbort || xhr.readyState === 4)) {
                      delete xhrCallbacks[id];
                      callback = void 0;
                      xhr.onreadystatechange = jQuery2.noop;
                      if (isAbort) {
                        if (xhr.readyState !== 4) {
                          xhr.abort();
                        }
                      } else {
                        responses = {};
                        status = xhr.status;
                        if (typeof xhr.responseText === "string") {
                          responses.text = xhr.responseText;
                        }
                        try {
                          statusText = xhr.statusText;
                        } catch (e) {
                          statusText = "";
                        }
                        if (!status && options.isLocal && !options.crossDomain) {
                          status = responses.text ? 200 : 404;
                        } else if (status === 1223) {
                          status = 204;
                        }
                      }
                    }
                    if (responses) {
                      complete(status, statusText, responses, xhr.getAllResponseHeaders());
                    }
                  };
                  if (!options.async) {
                    callback();
                  } else if (xhr.readyState === 4) {
                    window2.setTimeout(callback);
                  } else {
                    xhr.onreadystatechange = xhrCallbacks[id] = callback;
                  }
                },
                abort: function() {
                  if (callback) {
                    callback(void 0, true);
                  }
                }
              };
            }
          });
        }
        function createStandardXHR() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        }
        function createActiveXHR() {
          try {
            return new window2.ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
          }
        }
        jQuery2.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery2.globalEval(text);
              return text;
            }
          }
        });
        jQuery2.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
          }
        });
        jQuery2.ajaxTransport("script", function(s) {
          if (s.crossDomain) {
            var script, head = document2.head || jQuery2("head")[0] || document2.documentElement;
            return {
              send: function(_, callback) {
                script = document2.createElement("script");
                script.async = true;
                if (s.scriptCharset) {
                  script.charset = s.scriptCharset;
                }
                script.src = s.url;
                script.onload = script.onreadystatechange = function(_2, isAbort) {
                  if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                    script.onload = script.onreadystatechange = null;
                    if (script.parentNode) {
                      script.parentNode.removeChild(script);
                    }
                    script = null;
                    if (!isAbort) {
                      callback(200, "success");
                    }
                  }
                };
                head.insertBefore(script, head.firstChild);
              },
              abort: function() {
                if (script) {
                  script.onload(void 0, true);
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery2.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery2.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery2.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery2(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && jQuery2.isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        jQuery2.parseHTML = function(data, context, keepScripts) {
          if (!data || typeof data !== "string") {
            return null;
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          context = context || document2;
          var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery2(scripts).remove();
          }
          return jQuery2.merge([], parsed.childNodes);
        };
        var _load = jQuery2.fn.load;
        jQuery2.fn.load = function(url, params, callback) {
          if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
          }
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = jQuery2.trim(url.slice(off, url.length));
            url = url.slice(0, off);
          }
          if (jQuery2.isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery2.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery2.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(i2, type) {
          jQuery2.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery2.expr.filters.animated = function(elem) {
          return jQuery2.grep(jQuery2.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        function getWindow(elem) {
          return jQuery2.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
        }
        jQuery2.offset = {
          setOffset: function(elem, options, i2) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery2.css(elem, "top");
            curCSSLeft = jQuery2.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && jQuery2.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery2.isFunction(options)) {
              options = options.call(elem, i2, jQuery2.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery2.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i2) {
                jQuery2.offset.setOffset(this, options, i2);
              });
            }
            var docElem, win, box = { top: 0, left: 0 }, elem = this[0], doc = elem && elem.ownerDocument;
            if (!doc) {
              return;
            }
            docElem = doc.documentElement;
            if (!jQuery2.contains(docElem, elem)) {
              return box;
            }
            if (typeof elem.getBoundingClientRect !== "undefined") {
              box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
              top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
              left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, parentOffset = { top: 0, left: 0 }, elem = this[0];
            if (jQuery2.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offsetParent = this.offsetParent();
              offset = this.offset();
              if (!jQuery2.nodeName(offsetParent[0], "html")) {
                parentOffset = offsetParent.offset();
              }
              parentOffset.top += jQuery2.css(offsetParent[0], "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
              top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && (!jQuery2.nodeName(offsetParent, "html") && jQuery2.css(offsetParent, "position") === "static")) {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = /Y/.test(prop);
          jQuery2.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win = getWindow(elem);
              if (val2 === void 0) {
                return win ? prop in win ? win[prop] : win.document.documentElement[method2] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : jQuery2(win).scrollLeft(),
                  top ? val2 : jQuery2(win).scrollTop()
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length, null);
          };
        });
        jQuery2.each(["top", "left"], function(i2, prop) {
          jQuery2.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery2.each(
            { padding: "inner" + name, content: type, "": "outer" + name },
            function(defaultExtra, funcName) {
              jQuery2.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type2, value2) {
                  var doc;
                  if (jQuery2.isWindow(elem)) {
                    return elem.document.documentElement["client" + name];
                  }
                  if (elem.nodeType === 9) {
                    doc = elem.documentElement;
                    return Math.max(
                      elem.body["scroll" + name],
                      doc["scroll" + name],
                      elem.body["offset" + name],
                      doc["offset" + name],
                      doc["client" + name]
                    );
                  }
                  return value2 === void 0 ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
                }, type, chainable ? margin : void 0, chainable, null);
              };
            }
          );
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          }
        });
        jQuery2.fn.size = function() {
          return this.length;
        };
        jQuery2.fn.andSelf = jQuery2.fn.addBack;
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery2;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery2.noConflict = function(deep) {
          if (window2.$ === jQuery2) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery2) {
            window2.jQuery = _jQuery;
          }
          return jQuery2;
        };
        if (!noGlobal) {
          window2.jQuery = window2.$ = jQuery2;
        }
        return jQuery2;
      });
    }
  });

  // plugins/popper.min.js
  var require_popper_min = __commonJS({
    "plugins/popper.min.js"(exports, module) {
      (function(e, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define(t2) : e.Popper = t2();
      })(exports, function() {
        "use strict";
        function e(e2) {
          return e2 && "[object Function]" === {}.toString.call(e2);
        }
        function t2(e2, t3) {
          if (1 !== e2.nodeType)
            return [];
          var o2 = window.getComputedStyle(e2, null);
          return t3 ? o2[t3] : o2;
        }
        function o(e2) {
          return "HTML" === e2.nodeName ? e2 : e2.parentNode || e2.host;
        }
        function n(e2) {
          if (!e2 || -1 !== ["HTML", "BODY", "#document"].indexOf(e2.nodeName))
            return window.document.body;
          var i2 = t2(e2), r2 = i2.overflow, p2 = i2.overflowX, s2 = i2.overflowY;
          return /(auto|scroll)/.test(r2 + s2 + p2) ? e2 : n(o(e2));
        }
        function r(e2) {
          var o2 = e2 && e2.offsetParent, i2 = o2 && o2.nodeName;
          return i2 && "BODY" !== i2 && "HTML" !== i2 ? -1 !== ["TD", "TABLE"].indexOf(o2.nodeName) && "static" === t2(o2, "position") ? r(o2) : o2 : window.document.documentElement;
        }
        function p(e2) {
          var t3 = e2.nodeName;
          return "BODY" !== t3 && ("HTML" === t3 || r(e2.firstElementChild) === e2);
        }
        function s(e2) {
          return null === e2.parentNode ? e2 : s(e2.parentNode);
        }
        function d(e2, t3) {
          if (!e2 || !e2.nodeType || !t3 || !t3.nodeType)
            return window.document.documentElement;
          var o2 = e2.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_FOLLOWING, i2 = o2 ? e2 : t3, n2 = o2 ? t3 : e2, a2 = document.createRange();
          a2.setStart(i2, 0), a2.setEnd(n2, 0);
          var f2 = a2.commonAncestorContainer;
          if (e2 !== f2 && t3 !== f2 || i2.contains(n2))
            return p(f2) ? f2 : r(f2);
          var l2 = s(e2);
          return l2.host ? d(l2.host, t3) : d(e2, s(t3).host);
        }
        function a(e2) {
          var t3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o2 = "top" === t3 ? "scrollTop" : "scrollLeft", i2 = e2.nodeName;
          if ("BODY" === i2 || "HTML" === i2) {
            var n2 = window.document.documentElement, r2 = window.document.scrollingElement || n2;
            return r2[o2];
          }
          return e2[o2];
        }
        function f(e2, t3) {
          var o2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i2 = a(t3, "top"), n2 = a(t3, "left"), r2 = o2 ? -1 : 1;
          return e2.top += i2 * r2, e2.bottom += i2 * r2, e2.left += n2 * r2, e2.right += n2 * r2, e2;
        }
        function l(e2, t3) {
          var o2 = "x" === t3 ? "Left" : "Top", i2 = "Left" == o2 ? "Right" : "Bottom";
          return +e2["border" + o2 + "Width"].split("px")[0] + +e2["border" + i2 + "Width"].split("px")[0];
        }
        function m(e2, t3, o2, i2) {
          return _(t3["offset" + e2], o2["client" + e2], o2["offset" + e2], ie() ? o2["offset" + e2] + i2["margin" + ("Height" === e2 ? "Top" : "Left")] + i2["margin" + ("Height" === e2 ? "Bottom" : "Right")] : 0);
        }
        function h() {
          var e2 = window.document.body, t3 = window.document.documentElement, o2 = ie() && window.getComputedStyle(t3);
          return { height: m("Height", e2, t3, o2), width: m("Width", e2, t3, o2) };
        }
        function c(e2) {
          return se({}, e2, { right: e2.left + e2.width, bottom: e2.top + e2.height });
        }
        function g(e2) {
          var o2 = {};
          if (ie())
            try {
              o2 = e2.getBoundingClientRect();
              var i2 = a(e2, "top"), n2 = a(e2, "left");
              o2.top += i2, o2.left += n2, o2.bottom += i2, o2.right += n2;
            } catch (e3) {
            }
          else
            o2 = e2.getBoundingClientRect();
          var r2 = { left: o2.left, top: o2.top, width: o2.right - o2.left, height: o2.bottom - o2.top }, p2 = "HTML" === e2.nodeName ? h() : {}, s2 = p2.width || e2.clientWidth || r2.right - r2.left, d2 = p2.height || e2.clientHeight || r2.bottom - r2.top, f2 = e2.offsetWidth - s2, m2 = e2.offsetHeight - d2;
          if (f2 || m2) {
            var g2 = t2(e2);
            f2 -= l(g2, "x"), m2 -= l(g2, "y"), r2.width -= f2, r2.height -= m2;
          }
          return c(r2);
        }
        function u(e2, o2) {
          var i2 = ie(), r2 = "HTML" === o2.nodeName, p2 = g(e2), s2 = g(o2), d2 = n(e2), a2 = t2(o2), l2 = +a2.borderTopWidth.split("px")[0], m2 = +a2.borderLeftWidth.split("px")[0], h2 = c({ top: p2.top - s2.top - l2, left: p2.left - s2.left - m2, width: p2.width, height: p2.height });
          if (h2.marginTop = 0, h2.marginLeft = 0, !i2 && r2) {
            var u2 = +a2.marginTop.split("px")[0], b2 = +a2.marginLeft.split("px")[0];
            h2.top -= l2 - u2, h2.bottom -= l2 - u2, h2.left -= m2 - b2, h2.right -= m2 - b2, h2.marginTop = u2, h2.marginLeft = b2;
          }
          return (i2 ? o2.contains(d2) : o2 === d2 && "BODY" !== d2.nodeName) && (h2 = f(h2, o2)), h2;
        }
        function b(e2) {
          var t3 = window.document.documentElement, o2 = u(e2, t3), i2 = _(t3.clientWidth, window.innerWidth || 0), n2 = _(t3.clientHeight, window.innerHeight || 0), r2 = a(t3), p2 = a(t3, "left"), s2 = { top: r2 - o2.top + o2.marginTop, left: p2 - o2.left + o2.marginLeft, width: i2, height: n2 };
          return c(s2);
        }
        function y(e2) {
          var i2 = e2.nodeName;
          return "BODY" === i2 || "HTML" === i2 ? false : "fixed" === t2(e2, "position") || y(o(e2));
        }
        function w(e2, t3, i2, r2) {
          var p2 = { top: 0, left: 0 }, s2 = d(e2, t3);
          if ("viewport" === r2)
            p2 = b(s2);
          else {
            var a2;
            "scrollParent" === r2 ? (a2 = n(o(e2)), "BODY" === a2.nodeName && (a2 = window.document.documentElement)) : "window" === r2 ? a2 = window.document.documentElement : a2 = r2;
            var f2 = u(a2, s2);
            if ("HTML" === a2.nodeName && !y(s2)) {
              var l2 = h(), m2 = l2.height, c2 = l2.width;
              p2.top += f2.top - f2.marginTop, p2.bottom = m2 + f2.top, p2.left += f2.left - f2.marginLeft, p2.right = c2 + f2.left;
            } else
              p2 = f2;
          }
          return p2.left += i2, p2.top += i2, p2.right -= i2, p2.bottom -= i2, p2;
        }
        function v(e2) {
          var t3 = e2.width, o2 = e2.height;
          return t3 * o2;
        }
        function E(e2, t3, o2, i2, n2) {
          var r2 = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e2.indexOf("auto"))
            return e2;
          var p2 = w(o2, i2, r2, n2), s2 = { top: { width: p2.width, height: t3.top - p2.top }, right: { width: p2.right - t3.right, height: p2.height }, bottom: { width: p2.width, height: p2.bottom - t3.bottom }, left: { width: t3.left - p2.left, height: p2.height } }, d2 = Object.keys(s2).map(function(e3) {
            return se({ key: e3 }, s2[e3], { area: v(s2[e3]) });
          }).sort(function(e3, t4) {
            return t4.area - e3.area;
          }), a2 = d2.filter(function(e3) {
            var t4 = e3.width, i3 = e3.height;
            return t4 >= o2.clientWidth && i3 >= o2.clientHeight;
          }), f2 = 0 < a2.length ? a2[0].key : d2[0].key, l2 = e2.split("-")[1];
          return f2 + (l2 ? "-" + l2 : "");
        }
        function x(e2, t3, o2) {
          var i2 = d(t3, o2);
          return u(o2, i2);
        }
        function O(e2) {
          var t3 = window.getComputedStyle(e2), o2 = parseFloat(t3.marginTop) + parseFloat(t3.marginBottom), i2 = parseFloat(t3.marginLeft) + parseFloat(t3.marginRight), n2 = { width: e2.offsetWidth + i2, height: e2.offsetHeight + o2 };
          return n2;
        }
        function L(e2) {
          var t3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
          return e2.replace(/left|right|bottom|top/g, function(e3) {
            return t3[e3];
          });
        }
        function S(e2, t3, o2) {
          o2 = o2.split("-")[0];
          var i2 = O(e2), n2 = { width: i2.width, height: i2.height }, r2 = -1 !== ["right", "left"].indexOf(o2), p2 = r2 ? "top" : "left", s2 = r2 ? "left" : "top", d2 = r2 ? "height" : "width", a2 = r2 ? "width" : "height";
          return n2[p2] = t3[p2] + t3[d2] / 2 - i2[d2] / 2, n2[s2] = o2 === s2 ? t3[s2] - i2[a2] : t3[L(s2)], n2;
        }
        function T(e2, t3) {
          return Array.prototype.find ? e2.find(t3) : e2.filter(t3)[0];
        }
        function C(e2, t3, o2) {
          if (Array.prototype.findIndex)
            return e2.findIndex(function(e3) {
              return e3[t3] === o2;
            });
          var i2 = T(e2, function(e3) {
            return e3[t3] === o2;
          });
          return e2.indexOf(i2);
        }
        function N(t3, o2, i2) {
          var n2 = void 0 === i2 ? t3 : t3.slice(0, C(t3, "name", i2));
          return n2.forEach(function(t4) {
            t4.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i3 = t4.function || t4.fn;
            t4.enabled && e(i3) && (o2.offsets.popper = c(o2.offsets.popper), o2.offsets.reference = c(o2.offsets.reference), o2 = i3(o2, t4));
          }), o2;
        }
        function k() {
          if (!this.state.isDestroyed) {
            var e2 = { instance: this, styles: {}, attributes: {}, flipped: false, offsets: {} };
            e2.offsets.reference = x(this.state, this.popper, this.reference), e2.placement = E(this.options.placement, e2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e2.originalPlacement = e2.placement, e2.offsets.popper = S(this.popper, e2.offsets.reference, e2.placement), e2.offsets.popper.position = "absolute", e2 = N(this.modifiers, e2), this.state.isCreated ? this.options.onUpdate(e2) : (this.state.isCreated = true, this.options.onCreate(e2));
          }
        }
        function W(e2, t3) {
          return e2.some(function(e3) {
            var o2 = e3.name, i2 = e3.enabled;
            return i2 && o2 === t3;
          });
        }
        function B(e2) {
          for (var t3 = [false, "ms", "Webkit", "Moz", "O"], o2 = e2.charAt(0).toUpperCase() + e2.slice(1), n2 = 0; n2 < t3.length - 1; n2++) {
            var i2 = t3[n2], r2 = i2 ? "" + i2 + o2 : e2;
            if ("undefined" != typeof window.document.body.style[r2])
              return r2;
          }
          return null;
        }
        function D() {
          return this.state.isDestroyed = true, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }
        function H(e2, t3, o2, i2) {
          var r2 = "BODY" === e2.nodeName, p2 = r2 ? window : e2;
          p2.addEventListener(t3, o2, { passive: true }), r2 || H(n(p2.parentNode), t3, o2, i2), i2.push(p2);
        }
        function P(e2, t3, o2, i2) {
          o2.updateBound = i2, window.addEventListener("resize", o2.updateBound, { passive: true });
          var r2 = n(e2);
          return H(r2, "scroll", o2.updateBound, o2.scrollParents), o2.scrollElement = r2, o2.eventsEnabled = true, o2;
        }
        function A() {
          this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate));
        }
        function M(e2, t3) {
          return window.removeEventListener("resize", t3.updateBound), t3.scrollParents.forEach(function(e3) {
            e3.removeEventListener("scroll", t3.updateBound);
          }), t3.updateBound = null, t3.scrollParents = [], t3.scrollElement = null, t3.eventsEnabled = false, t3;
        }
        function I() {
          this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
        }
        function R(e2) {
          return "" !== e2 && !isNaN(parseFloat(e2)) && isFinite(e2);
        }
        function U(e2, t3) {
          Object.keys(t3).forEach(function(o2) {
            var i2 = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o2) && R(t3[o2]) && (i2 = "px"), e2.style[o2] = t3[o2] + i2;
          });
        }
        function Y(e2, t3) {
          Object.keys(t3).forEach(function(o2) {
            var i2 = t3[o2];
            false === i2 ? e2.removeAttribute(o2) : e2.setAttribute(o2, t3[o2]);
          });
        }
        function F(e2, t3, o2) {
          var i2 = T(e2, function(e3) {
            var o3 = e3.name;
            return o3 === t3;
          }), n2 = !!i2 && e2.some(function(e3) {
            return e3.name === o2 && e3.enabled && e3.order < i2.order;
          });
          if (!n2) {
            var r2 = "`" + t3 + "`";
            console.warn("`" + o2 + "` modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
          }
          return n2;
        }
        function j(e2) {
          return "end" === e2 ? "start" : "start" === e2 ? "end" : e2;
        }
        function K(e2) {
          var t3 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o2 = ae.indexOf(e2), i2 = ae.slice(o2 + 1).concat(ae.slice(0, o2));
          return t3 ? i2.reverse() : i2;
        }
        function q(e2, t3, o2, i2) {
          var n2 = e2.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r2 = +n2[1], p2 = n2[2];
          if (!r2)
            return e2;
          if (0 === p2.indexOf("%")) {
            var s2;
            switch (p2) {
              case "%p":
                s2 = o2;
                break;
              case "%":
              case "%r":
              default:
                s2 = i2;
            }
            var d2 = c(s2);
            return d2[t3] / 100 * r2;
          }
          if ("vh" === p2 || "vw" === p2) {
            var a2;
            return a2 = "vh" === p2 ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a2 / 100 * r2;
          }
          return r2;
        }
        function G(e2, t3, o2, i2) {
          var n2 = [0, 0], r2 = -1 !== ["right", "left"].indexOf(i2), p2 = e2.split(/(\+|\-)/).map(function(e3) {
            return e3.trim();
          }), s2 = p2.indexOf(T(p2, function(e3) {
            return -1 !== e3.search(/,|\s/);
          }));
          p2[s2] && -1 === p2[s2].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          var d2 = /\s*,\s*|\s+/, a2 = -1 === s2 ? [p2] : [p2.slice(0, s2).concat([p2[s2].split(d2)[0]]), [p2[s2].split(d2)[1]].concat(p2.slice(s2 + 1))];
          return a2 = a2.map(function(e3, i3) {
            var n3 = (1 === i3 ? !r2 : r2) ? "height" : "width", p3 = false;
            return e3.reduce(function(e4, t4) {
              return "" === e4[e4.length - 1] && -1 !== ["+", "-"].indexOf(t4) ? (e4[e4.length - 1] = t4, p3 = true, e4) : p3 ? (e4[e4.length - 1] += t4, p3 = false, e4) : e4.concat(t4);
            }, []).map(function(e4) {
              return q(e4, n3, t3, o2);
            });
          }), a2.forEach(function(e3, t4) {
            e3.forEach(function(o3, i3) {
              R(o3) && (n2[t4] += o3 * ("-" === e3[i3 - 1] ? -1 : 1));
            });
          }), n2;
        }
        for (var z = Math.min, V = Math.floor, _ = Math.max, X = ["native code", "[object MutationObserverConstructor]"], Q = function(e2) {
          return X.some(function(t3) {
            return -1 < (e2 || "").toString().indexOf(t3);
          });
        }, J = "undefined" != typeof window, Z = ["Edge", "Trident", "Firefox"], $2 = 0, ee = 0; ee < Z.length; ee += 1)
          if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $2 = 1;
            break;
          }
        var i, te = J && Q(window.MutationObserver), oe = te ? function(e2) {
          var t3 = false, o2 = 0, i2 = document.createElement("span"), n2 = new MutationObserver(function() {
            e2(), t3 = false;
          });
          return n2.observe(i2, { attributes: true }), function() {
            t3 || (t3 = true, i2.setAttribute("x-index", o2), ++o2);
          };
        } : function(e2) {
          var t3 = false;
          return function() {
            t3 || (t3 = true, setTimeout(function() {
              t3 = false, e2();
            }, $2));
          };
        }, ie = function() {
          return void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i;
        }, ne = function(e2, t3) {
          if (!(e2 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }, re = function() {
          function e2(e3, t3) {
            for (var o2, n2 = 0; n2 < t3.length; n2++)
              o2 = t3[n2], o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
          return function(t3, o2, i2) {
            return o2 && e2(t3.prototype, o2), i2 && e2(t3, i2), t3;
          };
        }(), pe = function(e2, t3, o2) {
          return t3 in e2 ? Object.defineProperty(e2, t3, { value: o2, enumerable: true, configurable: true, writable: true }) : e2[t3] = o2, e2;
        }, se = Object.assign || function(e2) {
          for (var t3, o2 = 1; o2 < arguments.length; o2++)
            for (var i2 in t3 = arguments[o2], t3)
              Object.prototype.hasOwnProperty.call(t3, i2) && (e2[i2] = t3[i2]);
          return e2;
        }, de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ae = de.slice(3), fe = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" }, le = function() {
          function t3(o2, i2) {
            var n2 = this, r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            ne(this, t3), this.scheduleUpdate = function() {
              return requestAnimationFrame(n2.update);
            }, this.update = oe(this.update.bind(this)), this.options = se({}, t3.Defaults, r2), this.state = { isDestroyed: false, isCreated: false, scrollParents: [] }, this.reference = o2.jquery ? o2[0] : o2, this.popper = i2.jquery ? i2[0] : i2, this.options.modifiers = {}, Object.keys(se({}, t3.Defaults.modifiers, r2.modifiers)).forEach(function(e2) {
              n2.options.modifiers[e2] = se({}, t3.Defaults.modifiers[e2] || {}, r2.modifiers ? r2.modifiers[e2] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e2) {
              return se({ name: e2 }, n2.options.modifiers[e2]);
            }).sort(function(e2, t4) {
              return e2.order - t4.order;
            }), this.modifiers.forEach(function(t4) {
              t4.enabled && e(t4.onLoad) && t4.onLoad(n2.reference, n2.popper, n2.options, t4, n2.state);
            }), this.update();
            var p2 = this.options.eventsEnabled;
            p2 && this.enableEventListeners(), this.state.eventsEnabled = p2;
          }
          return re(t3, [{ key: "update", value: function() {
            return k.call(this);
          } }, { key: "destroy", value: function() {
            return D.call(this);
          } }, { key: "enableEventListeners", value: function() {
            return A.call(this);
          } }, { key: "disableEventListeners", value: function() {
            return I.call(this);
          } }]), t3;
        }();
        return le.Utils = ("undefined" == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = { placement: "bottom", eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
        }, onUpdate: function() {
        }, modifiers: { shift: { order: 100, enabled: true, fn: function(e2) {
          var t3 = e2.placement, o2 = t3.split("-")[0], i2 = t3.split("-")[1];
          if (i2) {
            var n2 = e2.offsets, r2 = n2.reference, p2 = n2.popper, s2 = -1 !== ["bottom", "top"].indexOf(o2), d2 = s2 ? "left" : "top", a2 = s2 ? "width" : "height", f2 = { start: pe({}, d2, r2[d2]), end: pe({}, d2, r2[d2] + r2[a2] - p2[a2]) };
            e2.offsets.popper = se({}, p2, f2[i2]);
          }
          return e2;
        } }, offset: { order: 200, enabled: true, fn: function(e2, t3) {
          var o2, i2 = t3.offset, n2 = e2.placement, r2 = e2.offsets, p2 = r2.popper, s2 = r2.reference, d2 = n2.split("-")[0];
          return o2 = R(+i2) ? [+i2, 0] : G(i2, p2, s2, d2), "left" === d2 ? (p2.top += o2[0], p2.left -= o2[1]) : "right" === d2 ? (p2.top += o2[0], p2.left += o2[1]) : "top" === d2 ? (p2.left += o2[0], p2.top -= o2[1]) : "bottom" === d2 && (p2.left += o2[0], p2.top += o2[1]), e2.popper = p2, e2;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: true, fn: function(e2, t3) {
          var o2 = t3.boundariesElement || r(e2.instance.popper);
          e2.instance.reference === o2 && (o2 = r(o2));
          var i2 = w(e2.instance.popper, e2.instance.reference, t3.padding, o2);
          t3.boundaries = i2;
          var n2 = t3.priority, p2 = e2.offsets.popper, s2 = { primary: function(e3) {
            var o3 = p2[e3];
            return p2[e3] < i2[e3] && !t3.escapeWithReference && (o3 = _(p2[e3], i2[e3])), pe({}, e3, o3);
          }, secondary: function(e3) {
            var o3 = "right" === e3 ? "left" : "top", n3 = p2[o3];
            return p2[e3] > i2[e3] && !t3.escapeWithReference && (n3 = z(p2[o3], i2[e3] - ("right" === e3 ? p2.width : p2.height))), pe({}, o3, n3);
          } };
          return n2.forEach(function(e3) {
            var t4 = -1 === ["left", "top"].indexOf(e3) ? "secondary" : "primary";
            p2 = se({}, p2, s2[t4](e3));
          }), e2.offsets.popper = p2, e2;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: true, fn: function(e2) {
          var t3 = e2.offsets, o2 = t3.popper, i2 = t3.reference, n2 = e2.placement.split("-")[0], r2 = V, p2 = -1 !== ["top", "bottom"].indexOf(n2), s2 = p2 ? "right" : "bottom", d2 = p2 ? "left" : "top", a2 = p2 ? "width" : "height";
          return o2[s2] < r2(i2[d2]) && (e2.offsets.popper[d2] = r2(i2[d2]) - o2[a2]), o2[d2] > r2(i2[s2]) && (e2.offsets.popper[d2] = r2(i2[s2])), e2;
        } }, arrow: { order: 500, enabled: true, fn: function(e2, t3) {
          if (!F(e2.instance.modifiers, "arrow", "keepTogether"))
            return e2;
          var o2 = t3.element;
          if ("string" == typeof o2) {
            if (o2 = e2.instance.popper.querySelector(o2), !o2)
              return e2;
          } else if (!e2.instance.popper.contains(o2))
            return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e2;
          var i2 = e2.placement.split("-")[0], n2 = e2.offsets, r2 = n2.popper, p2 = n2.reference, s2 = -1 !== ["left", "right"].indexOf(i2), d2 = s2 ? "height" : "width", a2 = s2 ? "top" : "left", f2 = s2 ? "left" : "top", l2 = s2 ? "bottom" : "right", m2 = O(o2)[d2];
          p2[l2] - m2 < r2[a2] && (e2.offsets.popper[a2] -= r2[a2] - (p2[l2] - m2)), p2[a2] + m2 > r2[l2] && (e2.offsets.popper[a2] += p2[a2] + m2 - r2[l2]);
          var h2 = p2[a2] + p2[d2] / 2 - m2 / 2, g2 = h2 - c(e2.offsets.popper)[a2];
          return g2 = _(z(r2[d2] - m2, g2), 0), e2.arrowElement = o2, e2.offsets.arrow = {}, e2.offsets.arrow[a2] = Math.round(g2), e2.offsets.arrow[f2] = "", e2;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: true, fn: function(e2, t3) {
          if (W(e2.instance.modifiers, "inner"))
            return e2;
          if (e2.flipped && e2.placement === e2.originalPlacement)
            return e2;
          var o2 = w(e2.instance.popper, e2.instance.reference, t3.padding, t3.boundariesElement), i2 = e2.placement.split("-")[0], n2 = L(i2), r2 = e2.placement.split("-")[1] || "", p2 = [];
          switch (t3.behavior) {
            case fe.FLIP:
              p2 = [i2, n2];
              break;
            case fe.CLOCKWISE:
              p2 = K(i2);
              break;
            case fe.COUNTERCLOCKWISE:
              p2 = K(i2, true);
              break;
            default:
              p2 = t3.behavior;
          }
          return p2.forEach(function(s2, d2) {
            if (i2 !== s2 || p2.length === d2 + 1)
              return e2;
            i2 = e2.placement.split("-")[0], n2 = L(i2);
            var a2 = e2.offsets.popper, f2 = e2.offsets.reference, l2 = V, m2 = "left" === i2 && l2(a2.right) > l2(f2.left) || "right" === i2 && l2(a2.left) < l2(f2.right) || "top" === i2 && l2(a2.bottom) > l2(f2.top) || "bottom" === i2 && l2(a2.top) < l2(f2.bottom), h2 = l2(a2.left) < l2(o2.left), c2 = l2(a2.right) > l2(o2.right), g2 = l2(a2.top) < l2(o2.top), u2 = l2(a2.bottom) > l2(o2.bottom), b2 = "left" === i2 && h2 || "right" === i2 && c2 || "top" === i2 && g2 || "bottom" === i2 && u2, y2 = -1 !== ["top", "bottom"].indexOf(i2), w2 = !!t3.flipVariations && (y2 && "start" === r2 && h2 || y2 && "end" === r2 && c2 || !y2 && "start" === r2 && g2 || !y2 && "end" === r2 && u2);
            (m2 || b2 || w2) && (e2.flipped = true, (m2 || b2) && (i2 = p2[d2 + 1]), w2 && (r2 = j(r2)), e2.placement = i2 + (r2 ? "-" + r2 : ""), e2.offsets.popper = se({}, e2.offsets.popper, S(e2.instance.popper, e2.offsets.reference, e2.placement)), e2 = N(e2.instance.modifiers, e2, "flip"));
          }), e2;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: false, fn: function(e2) {
          var t3 = e2.placement, o2 = t3.split("-")[0], i2 = e2.offsets, n2 = i2.popper, r2 = i2.reference, p2 = -1 !== ["left", "right"].indexOf(o2), s2 = -1 === ["top", "left"].indexOf(o2);
          return n2[p2 ? "left" : "top"] = r2[t3] - (s2 ? n2[p2 ? "width" : "height"] : 0), e2.placement = L(t3), e2.offsets.popper = c(n2), e2;
        } }, hide: { order: 800, enabled: true, fn: function(e2) {
          if (!F(e2.instance.modifiers, "hide", "preventOverflow"))
            return e2;
          var t3 = e2.offsets.reference, o2 = T(e2.instance.modifiers, function(e3) {
            return "preventOverflow" === e3.name;
          }).boundaries;
          if (t3.bottom < o2.top || t3.left > o2.right || t3.top > o2.bottom || t3.right < o2.left) {
            if (true === e2.hide)
              return e2;
            e2.hide = true, e2.attributes["x-out-of-boundaries"] = "";
          } else {
            if (false === e2.hide)
              return e2;
            e2.hide = false, e2.attributes["x-out-of-boundaries"] = false;
          }
          return e2;
        } }, computeStyle: { order: 850, enabled: true, fn: function(e2, t3) {
          var o2 = t3.x, i2 = t3.y, n2 = e2.offsets.popper, p2 = T(e2.instance.modifiers, function(e3) {
            return "applyStyle" === e3.name;
          }).gpuAcceleration;
          void 0 !== p2 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s2, d2, a2 = void 0 === p2 ? t3.gpuAcceleration : p2, f2 = r(e2.instance.popper), l2 = g(f2), m2 = { position: n2.position }, h2 = { left: V(n2.left), top: V(n2.top), bottom: V(n2.bottom), right: V(n2.right) }, c2 = "bottom" === o2 ? "top" : "bottom", u2 = "right" === i2 ? "left" : "right", b2 = B("transform");
          if (d2 = "bottom" == c2 ? -l2.height + h2.bottom : h2.top, s2 = "right" == u2 ? -l2.width + h2.right : h2.left, a2 && b2)
            m2[b2] = "translate3d(" + s2 + "px, " + d2 + "px, 0)", m2[c2] = 0, m2[u2] = 0, m2.willChange = "transform";
          else {
            var y2 = "bottom" == c2 ? -1 : 1, w2 = "right" == u2 ? -1 : 1;
            m2[c2] = d2 * y2, m2[u2] = s2 * w2, m2.willChange = c2 + ", " + u2;
          }
          var v2 = { "x-placement": e2.placement };
          return e2.attributes = se({}, v2, e2.attributes), e2.styles = se({}, m2, e2.styles), e2;
        }, gpuAcceleration: true, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: true, fn: function(e2) {
          return U(e2.instance.popper, e2.styles), Y(e2.instance.popper, e2.attributes), e2.offsets.arrow && U(e2.arrowElement, e2.offsets.arrow), e2;
        }, onLoad: function(e2, t3, o2, i2, n2) {
          var r2 = x(n2, t3, e2), p2 = E(o2.placement, r2, t3, e2, o2.modifiers.flip.boundariesElement, o2.modifiers.flip.padding);
          return t3.setAttribute("x-placement", p2), U(t3, { position: "absolute" }), o2;
        }, gpuAcceleration: void 0 } } }, le;
      });
    }
  });

  // ../../node_modules/popper.js/dist/umd/popper.js
  var require_popper = __commonJS({
    "../../node_modules/popper.js/dist/umd/popper.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.Popper = factory();
      })(exports, function() {
        "use strict";
        var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
        var timeoutDuration = function() {
          var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
          for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
            if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
              return 1;
            }
          }
          return 0;
        }();
        function microtaskDebounce(fn) {
          var called = false;
          return function() {
            if (called) {
              return;
            }
            called = true;
            window.Promise.resolve().then(function() {
              called = false;
              fn();
            });
          };
        }
        function taskDebounce(fn) {
          var scheduled = false;
          return function() {
            if (!scheduled) {
              scheduled = true;
              setTimeout(function() {
                scheduled = false;
                fn();
              }, timeoutDuration);
            }
          };
        }
        var supportsMicroTasks = isBrowser && window.Promise;
        var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
        function isFunction(functionToCheck) {
          var getType = {};
          return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
        }
        function getStyleComputedProperty(element, property) {
          if (element.nodeType !== 1) {
            return [];
          }
          var window2 = element.ownerDocument.defaultView;
          var css = window2.getComputedStyle(element, null);
          return property ? css[property] : css;
        }
        function getParentNode(element) {
          if (element.nodeName === "HTML") {
            return element;
          }
          return element.parentNode || element.host;
        }
        function getScrollParent(element) {
          if (!element) {
            return document.body;
          }
          switch (element.nodeName) {
            case "HTML":
            case "BODY":
              return element.ownerDocument.body;
            case "#document":
              return element.body;
          }
          var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
          if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
            return element;
          }
          return getScrollParent(getParentNode(element));
        }
        function getReferenceNode(reference) {
          return reference && reference.referenceNode ? reference.referenceNode : reference;
        }
        var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
        var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
        function isIE(version) {
          if (version === 11) {
            return isIE11;
          }
          if (version === 10) {
            return isIE10;
          }
          return isIE11 || isIE10;
        }
        function getOffsetParent(element) {
          if (!element) {
            return document.documentElement;
          }
          var noOffsetParent = isIE(10) ? document.body : null;
          var offsetParent = element.offsetParent || null;
          while (offsetParent === noOffsetParent && element.nextElementSibling) {
            offsetParent = (element = element.nextElementSibling).offsetParent;
          }
          var nodeName = offsetParent && offsetParent.nodeName;
          if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
            return element ? element.ownerDocument.documentElement : document.documentElement;
          }
          if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
            return getOffsetParent(offsetParent);
          }
          return offsetParent;
        }
        function isOffsetContainer(element) {
          var nodeName = element.nodeName;
          if (nodeName === "BODY") {
            return false;
          }
          return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
        }
        function getRoot(node) {
          if (node.parentNode !== null) {
            return getRoot(node.parentNode);
          }
          return node;
        }
        function findCommonOffsetParent(element1, element2) {
          if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement;
          }
          var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
          var start = order ? element1 : element2;
          var end = order ? element2 : element1;
          var range = document.createRange();
          range.setStart(start, 0);
          range.setEnd(end, 0);
          var commonAncestorContainer = range.commonAncestorContainer;
          if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
              return commonAncestorContainer;
            }
            return getOffsetParent(commonAncestorContainer);
          }
          var element1root = getRoot(element1);
          if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2);
          } else {
            return findCommonOffsetParent(element1, getRoot(element2).host);
          }
        }
        function getScroll(element) {
          var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
          var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
          var nodeName = element.nodeName;
          if (nodeName === "BODY" || nodeName === "HTML") {
            var html = element.ownerDocument.documentElement;
            var scrollingElement = element.ownerDocument.scrollingElement || html;
            return scrollingElement[upperSide];
          }
          return element[upperSide];
        }
        function includeScroll(rect, element) {
          var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          var scrollTop = getScroll(element, "top");
          var scrollLeft = getScroll(element, "left");
          var modifier = subtract ? -1 : 1;
          rect.top += scrollTop * modifier;
          rect.bottom += scrollTop * modifier;
          rect.left += scrollLeft * modifier;
          rect.right += scrollLeft * modifier;
          return rect;
        }
        function getBordersSize(styles, axis) {
          var sideA = axis === "x" ? "Left" : "Top";
          var sideB = sideA === "Left" ? "Right" : "Bottom";
          return parseFloat(styles["border" + sideA + "Width"]) + parseFloat(styles["border" + sideB + "Width"]);
        }
        function getSize(axis, body, html, computedStyle) {
          return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
        }
        function getWindowSizes(document2) {
          var body = document2.body;
          var html = document2.documentElement;
          var computedStyle = isIE(10) && getComputedStyle(html);
          return {
            height: getSize("Height", body, html, computedStyle),
            width: getSize("Width", body, html, computedStyle)
          };
        }
        var classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };
        var createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var defineProperty = function(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        };
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        function getClientRect(offsets) {
          return _extends({}, offsets, {
            right: offsets.left + offsets.width,
            bottom: offsets.top + offsets.height
          });
        }
        function getBoundingClientRect(element) {
          var rect = {};
          try {
            if (isIE(10)) {
              rect = element.getBoundingClientRect();
              var scrollTop = getScroll(element, "top");
              var scrollLeft = getScroll(element, "left");
              rect.top += scrollTop;
              rect.left += scrollLeft;
              rect.bottom += scrollTop;
              rect.right += scrollLeft;
            } else {
              rect = element.getBoundingClientRect();
            }
          } catch (e) {
          }
          var result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
          };
          var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
          var width = sizes.width || element.clientWidth || result.width;
          var height = sizes.height || element.clientHeight || result.height;
          var horizScrollbar = element.offsetWidth - width;
          var vertScrollbar = element.offsetHeight - height;
          if (horizScrollbar || vertScrollbar) {
            var styles = getStyleComputedProperty(element);
            horizScrollbar -= getBordersSize(styles, "x");
            vertScrollbar -= getBordersSize(styles, "y");
            result.width -= horizScrollbar;
            result.height -= vertScrollbar;
          }
          return getClientRect(result);
        }
        function getOffsetRectRelativeToArbitraryNode(children, parent) {
          var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          var isIE102 = isIE(10);
          var isHTML = parent.nodeName === "HTML";
          var childrenRect = getBoundingClientRect(children);
          var parentRect = getBoundingClientRect(parent);
          var scrollParent = getScrollParent(children);
          var styles = getStyleComputedProperty(parent);
          var borderTopWidth = parseFloat(styles.borderTopWidth);
          var borderLeftWidth = parseFloat(styles.borderLeftWidth);
          if (fixedPosition && isHTML) {
            parentRect.top = Math.max(parentRect.top, 0);
            parentRect.left = Math.max(parentRect.left, 0);
          }
          var offsets = getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
          });
          offsets.marginTop = 0;
          offsets.marginLeft = 0;
          if (!isIE102 && isHTML) {
            var marginTop = parseFloat(styles.marginTop);
            var marginLeft = parseFloat(styles.marginLeft);
            offsets.top -= borderTopWidth - marginTop;
            offsets.bottom -= borderTopWidth - marginTop;
            offsets.left -= borderLeftWidth - marginLeft;
            offsets.right -= borderLeftWidth - marginLeft;
            offsets.marginTop = marginTop;
            offsets.marginLeft = marginLeft;
          }
          if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
            offsets = includeScroll(offsets, parent);
          }
          return offsets;
        }
        function getViewportOffsetRectRelativeToArtbitraryNode(element) {
          var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var html = element.ownerDocument.documentElement;
          var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
          var width = Math.max(html.clientWidth, window.innerWidth || 0);
          var height = Math.max(html.clientHeight, window.innerHeight || 0);
          var scrollTop = !excludeScroll ? getScroll(html) : 0;
          var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
          var offset2 = {
            top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
            left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
            width,
            height
          };
          return getClientRect(offset2);
        }
        function isFixed(element) {
          var nodeName = element.nodeName;
          if (nodeName === "BODY" || nodeName === "HTML") {
            return false;
          }
          if (getStyleComputedProperty(element, "position") === "fixed") {
            return true;
          }
          var parentNode = getParentNode(element);
          if (!parentNode) {
            return false;
          }
          return isFixed(parentNode);
        }
        function getFixedPositionOffsetParent(element) {
          if (!element || !element.parentElement || isIE()) {
            return document.documentElement;
          }
          var el = element.parentElement;
          while (el && getStyleComputedProperty(el, "transform") === "none") {
            el = el.parentElement;
          }
          return el || document.documentElement;
        }
        function getBoundaries(popper, reference, padding, boundariesElement) {
          var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
          var boundaries = { top: 0, left: 0 };
          var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
          if (boundariesElement === "viewport") {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
          } else {
            var boundariesNode = void 0;
            if (boundariesElement === "scrollParent") {
              boundariesNode = getScrollParent(getParentNode(reference));
              if (boundariesNode.nodeName === "BODY") {
                boundariesNode = popper.ownerDocument.documentElement;
              }
            } else if (boundariesElement === "window") {
              boundariesNode = popper.ownerDocument.documentElement;
            } else {
              boundariesNode = boundariesElement;
            }
            var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
            if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
              var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
              boundaries.top += offsets.top - offsets.marginTop;
              boundaries.bottom = height + offsets.top;
              boundaries.left += offsets.left - offsets.marginLeft;
              boundaries.right = width + offsets.left;
            } else {
              boundaries = offsets;
            }
          }
          padding = padding || 0;
          var isPaddingNumber = typeof padding === "number";
          boundaries.left += isPaddingNumber ? padding : padding.left || 0;
          boundaries.top += isPaddingNumber ? padding : padding.top || 0;
          boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
          boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
          return boundaries;
        }
        function getArea(_ref) {
          var width = _ref.width, height = _ref.height;
          return width * height;
        }
        function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
          var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
          if (placement.indexOf("auto") === -1) {
            return placement;
          }
          var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
          var rects = {
            top: {
              width: boundaries.width,
              height: refRect.top - boundaries.top
            },
            right: {
              width: boundaries.right - refRect.right,
              height: boundaries.height
            },
            bottom: {
              width: boundaries.width,
              height: boundaries.bottom - refRect.bottom
            },
            left: {
              width: refRect.left - boundaries.left,
              height: boundaries.height
            }
          };
          var sortedAreas = Object.keys(rects).map(function(key) {
            return _extends({
              key
            }, rects[key], {
              area: getArea(rects[key])
            });
          }).sort(function(a, b) {
            return b.area - a.area;
          });
          var filteredAreas = sortedAreas.filter(function(_ref2) {
            var width = _ref2.width, height = _ref2.height;
            return width >= popper.clientWidth && height >= popper.clientHeight;
          });
          var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
          var variation = placement.split("-")[1];
          return computedPlacement + (variation ? "-" + variation : "");
        }
        function getReferenceOffsets(state, popper, reference) {
          var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
          return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
        }
        function getOuterSizes(element) {
          var window2 = element.ownerDocument.defaultView;
          var styles = window2.getComputedStyle(element);
          var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
          var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
          var result = {
            width: element.offsetWidth + y,
            height: element.offsetHeight + x
          };
          return result;
        }
        function getOppositePlacement(placement) {
          var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
          return placement.replace(/left|right|bottom|top/g, function(matched) {
            return hash[matched];
          });
        }
        function getPopperOffsets(popper, referenceOffsets, placement) {
          placement = placement.split("-")[0];
          var popperRect = getOuterSizes(popper);
          var popperOffsets = {
            width: popperRect.width,
            height: popperRect.height
          };
          var isHoriz = ["right", "left"].indexOf(placement) !== -1;
          var mainSide = isHoriz ? "top" : "left";
          var secondarySide = isHoriz ? "left" : "top";
          var measurement = isHoriz ? "height" : "width";
          var secondaryMeasurement = !isHoriz ? "height" : "width";
          popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
          if (placement === secondarySide) {
            popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
          } else {
            popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
          }
          return popperOffsets;
        }
        function find(arr, check) {
          if (Array.prototype.find) {
            return arr.find(check);
          }
          return arr.filter(check)[0];
        }
        function findIndex(arr, prop, value) {
          if (Array.prototype.findIndex) {
            return arr.findIndex(function(cur) {
              return cur[prop] === value;
            });
          }
          var match = find(arr, function(obj) {
            return obj[prop] === value;
          });
          return arr.indexOf(match);
        }
        function runModifiers(modifiers2, data, ends) {
          var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
          modifiersToRun.forEach(function(modifier) {
            if (modifier["function"]) {
              console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            }
            var fn = modifier["function"] || modifier.fn;
            if (modifier.enabled && isFunction(fn)) {
              data.offsets.popper = getClientRect(data.offsets.popper);
              data.offsets.reference = getClientRect(data.offsets.reference);
              data = fn(data, modifier);
            }
          });
          return data;
        }
        function update() {
          if (this.state.isDestroyed) {
            return;
          }
          var data = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: false,
            offsets: {}
          };
          data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
          data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
          data.originalPlacement = data.placement;
          data.positionFixed = this.options.positionFixed;
          data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
          data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
          data = runModifiers(this.modifiers, data);
          if (!this.state.isCreated) {
            this.state.isCreated = true;
            this.options.onCreate(data);
          } else {
            this.options.onUpdate(data);
          }
        }
        function isModifierEnabled(modifiers2, modifierName) {
          return modifiers2.some(function(_ref) {
            var name = _ref.name, enabled = _ref.enabled;
            return enabled && name === modifierName;
          });
        }
        function getSupportedPropertyName(property) {
          var prefixes = [false, "ms", "Webkit", "Moz", "O"];
          var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var toCheck = prefix ? "" + prefix + upperProp : property;
            if (typeof document.body.style[toCheck] !== "undefined") {
              return toCheck;
            }
          }
          return null;
        }
        function destroy() {
          this.state.isDestroyed = true;
          if (isModifierEnabled(this.modifiers, "applyStyle")) {
            this.popper.removeAttribute("x-placement");
            this.popper.style.position = "";
            this.popper.style.top = "";
            this.popper.style.left = "";
            this.popper.style.right = "";
            this.popper.style.bottom = "";
            this.popper.style.willChange = "";
            this.popper.style[getSupportedPropertyName("transform")] = "";
          }
          this.disableEventListeners();
          if (this.options.removeOnDestroy) {
            this.popper.parentNode.removeChild(this.popper);
          }
          return this;
        }
        function getWindow(element) {
          var ownerDocument = element.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView : window;
        }
        function attachToScrollParents(scrollParent, event, callback, scrollParents) {
          var isBody = scrollParent.nodeName === "BODY";
          var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
          target.addEventListener(event, callback, { passive: true });
          if (!isBody) {
            attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
          }
          scrollParents.push(target);
        }
        function setupEventListeners(reference, options, state, updateBound) {
          state.updateBound = updateBound;
          getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
          var scrollElement = getScrollParent(reference);
          attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
          state.scrollElement = scrollElement;
          state.eventsEnabled = true;
          return state;
        }
        function enableEventListeners() {
          if (!this.state.eventsEnabled) {
            this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
          }
        }
        function removeEventListeners(reference, state) {
          getWindow(reference).removeEventListener("resize", state.updateBound);
          state.scrollParents.forEach(function(target) {
            target.removeEventListener("scroll", state.updateBound);
          });
          state.updateBound = null;
          state.scrollParents = [];
          state.scrollElement = null;
          state.eventsEnabled = false;
          return state;
        }
        function disableEventListeners() {
          if (this.state.eventsEnabled) {
            cancelAnimationFrame(this.scheduleUpdate);
            this.state = removeEventListeners(this.reference, this.state);
          }
        }
        function isNumeric(n) {
          return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
        }
        function setStyles(element, styles) {
          Object.keys(styles).forEach(function(prop) {
            var unit = "";
            if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
              unit = "px";
            }
            element.style[prop] = styles[prop] + unit;
          });
        }
        function setAttributes(element, attributes) {
          Object.keys(attributes).forEach(function(prop) {
            var value = attributes[prop];
            if (value !== false) {
              element.setAttribute(prop, attributes[prop]);
            } else {
              element.removeAttribute(prop);
            }
          });
        }
        function applyStyle(data) {
          setStyles(data.instance.popper, data.styles);
          setAttributes(data.instance.popper, data.attributes);
          if (data.arrowElement && Object.keys(data.arrowStyles).length) {
            setStyles(data.arrowElement, data.arrowStyles);
          }
          return data;
        }
        function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
          var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
          var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
          popper.setAttribute("x-placement", placement);
          setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
          return options;
        }
        function getRoundedOffsets(data, shouldRound) {
          var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
          var round = Math.round, floor = Math.floor;
          var noRound = function noRound2(v) {
            return v;
          };
          var referenceWidth = round(reference.width);
          var popperWidth = round(popper.width);
          var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
          var isVariation = data.placement.indexOf("-") !== -1;
          var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
          var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
          var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
          var verticalToInteger = !shouldRound ? noRound : round;
          return {
            left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
            top: verticalToInteger(popper.top),
            bottom: verticalToInteger(popper.bottom),
            right: horizontalToInteger(popper.right)
          };
        }
        var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
        function computeStyle(data, options) {
          var x = options.x, y = options.y;
          var popper = data.offsets.popper;
          var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
            return modifier.name === "applyStyle";
          }).gpuAcceleration;
          if (legacyGpuAccelerationOption !== void 0) {
            console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          }
          var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
          var offsetParent = getOffsetParent(data.instance.popper);
          var offsetParentRect = getBoundingClientRect(offsetParent);
          var styles = {
            position: popper.position
          };
          var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
          var sideA = x === "bottom" ? "top" : "bottom";
          var sideB = y === "right" ? "left" : "right";
          var prefixedProperty = getSupportedPropertyName("transform");
          var left = void 0, top = void 0;
          if (sideA === "bottom") {
            if (offsetParent.nodeName === "HTML") {
              top = -offsetParent.clientHeight + offsets.bottom;
            } else {
              top = -offsetParentRect.height + offsets.bottom;
            }
          } else {
            top = offsets.top;
          }
          if (sideB === "right") {
            if (offsetParent.nodeName === "HTML") {
              left = -offsetParent.clientWidth + offsets.right;
            } else {
              left = -offsetParentRect.width + offsets.right;
            }
          } else {
            left = offsets.left;
          }
          if (gpuAcceleration && prefixedProperty) {
            styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
            styles[sideA] = 0;
            styles[sideB] = 0;
            styles.willChange = "transform";
          } else {
            var invertTop = sideA === "bottom" ? -1 : 1;
            var invertLeft = sideB === "right" ? -1 : 1;
            styles[sideA] = top * invertTop;
            styles[sideB] = left * invertLeft;
            styles.willChange = sideA + ", " + sideB;
          }
          var attributes = {
            "x-placement": data.placement
          };
          data.attributes = _extends({}, attributes, data.attributes);
          data.styles = _extends({}, styles, data.styles);
          data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
          return data;
        }
        function isModifierRequired(modifiers2, requestingName, requestedName) {
          var requesting = find(modifiers2, function(_ref) {
            var name = _ref.name;
            return name === requestingName;
          });
          var isRequired = !!requesting && modifiers2.some(function(modifier) {
            return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
          });
          if (!isRequired) {
            var _requesting = "`" + requestingName + "`";
            var requested = "`" + requestedName + "`";
            console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
          }
          return isRequired;
        }
        function arrow(data, options) {
          var _data$offsets$arrow;
          if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
            return data;
          }
          var arrowElement = options.element;
          if (typeof arrowElement === "string") {
            arrowElement = data.instance.popper.querySelector(arrowElement);
            if (!arrowElement) {
              return data;
            }
          } else {
            if (!data.instance.popper.contains(arrowElement)) {
              console.warn("WARNING: `arrow.element` must be child of its popper element!");
              return data;
            }
          }
          var placement = data.placement.split("-")[0];
          var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
          var isVertical = ["left", "right"].indexOf(placement) !== -1;
          var len = isVertical ? "height" : "width";
          var sideCapitalized = isVertical ? "Top" : "Left";
          var side = sideCapitalized.toLowerCase();
          var altSide = isVertical ? "left" : "top";
          var opSide = isVertical ? "bottom" : "right";
          var arrowElementSize = getOuterSizes(arrowElement)[len];
          if (reference[opSide] - arrowElementSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
          }
          if (reference[side] + arrowElementSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
          }
          data.offsets.popper = getClientRect(data.offsets.popper);
          var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
          var css = getStyleComputedProperty(data.instance.popper);
          var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
          var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
          var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
          sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
          data.arrowElement = arrowElement;
          data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
          return data;
        }
        function getOppositeVariation(variation) {
          if (variation === "end") {
            return "start";
          } else if (variation === "start") {
            return "end";
          }
          return variation;
        }
        var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
        var validPlacements = placements.slice(3);
        function clockwise(placement) {
          var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var index = validPlacements.indexOf(placement);
          var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
          return counter ? arr.reverse() : arr;
        }
        var BEHAVIORS = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise"
        };
        function flip(data, options) {
          if (isModifierEnabled(data.instance.modifiers, "inner")) {
            return data;
          }
          if (data.flipped && data.placement === data.originalPlacement) {
            return data;
          }
          var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
          var placement = data.placement.split("-")[0];
          var placementOpposite = getOppositePlacement(placement);
          var variation = data.placement.split("-")[1] || "";
          var flipOrder = [];
          switch (options.behavior) {
            case BEHAVIORS.FLIP:
              flipOrder = [placement, placementOpposite];
              break;
            case BEHAVIORS.CLOCKWISE:
              flipOrder = clockwise(placement);
              break;
            case BEHAVIORS.COUNTERCLOCKWISE:
              flipOrder = clockwise(placement, true);
              break;
            default:
              flipOrder = options.behavior;
          }
          flipOrder.forEach(function(step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
              return data;
            }
            placement = data.placement.split("-")[0];
            placementOpposite = getOppositePlacement(placement);
            var popperOffsets = data.offsets.popper;
            var refOffsets = data.offsets.reference;
            var floor = Math.floor;
            var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
            var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
            var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
            var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
            var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
            var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
            var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
            var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
            var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
            var flippedVariation = flippedVariationByRef || flippedVariationByContent;
            if (overlapsRef || overflowsBoundaries || flippedVariation) {
              data.flipped = true;
              if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
              }
              if (flippedVariation) {
                variation = getOppositeVariation(variation);
              }
              data.placement = placement + (variation ? "-" + variation : "");
              data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
              data = runModifiers(data.instance.modifiers, data, "flip");
            }
          });
          return data;
        }
        function keepTogether(data) {
          var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
          var placement = data.placement.split("-")[0];
          var floor = Math.floor;
          var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
          var side = isVertical ? "right" : "bottom";
          var opSide = isVertical ? "left" : "top";
          var measurement = isVertical ? "width" : "height";
          if (popper[side] < floor(reference[opSide])) {
            data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
          }
          if (popper[opSide] > floor(reference[side])) {
            data.offsets.popper[opSide] = floor(reference[side]);
          }
          return data;
        }
        function toValue(str, measurement, popperOffsets, referenceOffsets) {
          var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
          var value = +split[1];
          var unit = split[2];
          if (!value) {
            return str;
          }
          if (unit.indexOf("%") === 0) {
            var element = void 0;
            switch (unit) {
              case "%p":
                element = popperOffsets;
                break;
              case "%":
              case "%r":
              default:
                element = referenceOffsets;
            }
            var rect = getClientRect(element);
            return rect[measurement] / 100 * value;
          } else if (unit === "vh" || unit === "vw") {
            var size = void 0;
            if (unit === "vh") {
              size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            } else {
              size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            }
            return size / 100 * value;
          } else {
            return value;
          }
        }
        function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
          var offsets = [0, 0];
          var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
          var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
            return frag.trim();
          });
          var divider = fragments.indexOf(find(fragments, function(frag) {
            return frag.search(/,|\s/) !== -1;
          }));
          if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
            console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          }
          var splitRegex = /\s*,\s*|\s+/;
          var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
          ops = ops.map(function(op, index) {
            var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
            var mergeWithPrevious = false;
            return op.reduce(function(a, b) {
              if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
              } else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
              } else {
                return a.concat(b);
              }
            }, []).map(function(str) {
              return toValue(str, measurement, popperOffsets, referenceOffsets);
            });
          });
          ops.forEach(function(op, index) {
            op.forEach(function(frag, index2) {
              if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
              }
            });
          });
          return offsets;
        }
        function offset(data, _ref) {
          var offset2 = _ref.offset;
          var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
          var basePlacement = placement.split("-")[0];
          var offsets = void 0;
          if (isNumeric(+offset2)) {
            offsets = [+offset2, 0];
          } else {
            offsets = parseOffset(offset2, popper, reference, basePlacement);
          }
          if (basePlacement === "left") {
            popper.top += offsets[0];
            popper.left -= offsets[1];
          } else if (basePlacement === "right") {
            popper.top += offsets[0];
            popper.left += offsets[1];
          } else if (basePlacement === "top") {
            popper.left += offsets[0];
            popper.top -= offsets[1];
          } else if (basePlacement === "bottom") {
            popper.left += offsets[0];
            popper.top += offsets[1];
          }
          data.popper = popper;
          return data;
        }
        function preventOverflow(data, options) {
          var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
          if (data.instance.reference === boundariesElement) {
            boundariesElement = getOffsetParent(boundariesElement);
          }
          var transformProp = getSupportedPropertyName("transform");
          var popperStyles = data.instance.popper.style;
          var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
          popperStyles.top = "";
          popperStyles.left = "";
          popperStyles[transformProp] = "";
          var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
          popperStyles.top = top;
          popperStyles.left = left;
          popperStyles[transformProp] = transform;
          options.boundaries = boundaries;
          var order = options.priority;
          var popper = data.offsets.popper;
          var check = {
            primary: function primary(placement) {
              var value = popper[placement];
              if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
              }
              return defineProperty({}, placement, value);
            },
            secondary: function secondary(placement) {
              var mainSide = placement === "right" ? "left" : "top";
              var value = popper[mainSide];
              if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
              }
              return defineProperty({}, mainSide, value);
            }
          };
          order.forEach(function(placement) {
            var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
            popper = _extends({}, popper, check[side](placement));
          });
          data.offsets.popper = popper;
          return data;
        }
        function shift(data) {
          var placement = data.placement;
          var basePlacement = placement.split("-")[0];
          var shiftvariation = placement.split("-")[1];
          if (shiftvariation) {
            var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
            var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
            var side = isVertical ? "left" : "top";
            var measurement = isVertical ? "width" : "height";
            var shiftOffsets = {
              start: defineProperty({}, side, reference[side]),
              end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
            };
            data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
          }
          return data;
        }
        function hide(data) {
          if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
            return data;
          }
          var refRect = data.offsets.reference;
          var bound = find(data.instance.modifiers, function(modifier) {
            return modifier.name === "preventOverflow";
          }).boundaries;
          if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
            if (data.hide === true) {
              return data;
            }
            data.hide = true;
            data.attributes["x-out-of-boundaries"] = "";
          } else {
            if (data.hide === false) {
              return data;
            }
            data.hide = false;
            data.attributes["x-out-of-boundaries"] = false;
          }
          return data;
        }
        function inner(data) {
          var placement = data.placement;
          var basePlacement = placement.split("-")[0];
          var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
          var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
          var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
          popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
          data.placement = getOppositePlacement(placement);
          data.offsets.popper = getClientRect(popper);
          return data;
        }
        var modifiers = {
          shift: {
            order: 100,
            enabled: true,
            fn: shift
          },
          offset: {
            order: 200,
            enabled: true,
            fn: offset,
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: true,
            fn: preventOverflow,
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: true,
            fn: keepTogether
          },
          arrow: {
            order: 500,
            enabled: true,
            fn: arrow,
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: true,
            fn: flip,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: false,
            flipVariationsByContent: false
          },
          inner: {
            order: 700,
            enabled: false,
            fn: inner
          },
          hide: {
            order: 800,
            enabled: true,
            fn: hide
          },
          computeStyle: {
            order: 850,
            enabled: true,
            fn: computeStyle,
            gpuAcceleration: true,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: true,
            fn: applyStyle,
            onLoad: applyStyleOnLoad,
            gpuAcceleration: void 0
          }
        };
        var Defaults = {
          placement: "bottom",
          positionFixed: false,
          eventsEnabled: true,
          removeOnDestroy: false,
          onCreate: function onCreate() {
          },
          onUpdate: function onUpdate() {
          },
          modifiers
        };
        var Popper = function() {
          function Popper2(reference, popper) {
            var _this = this;
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            classCallCheck(this, Popper2);
            this.scheduleUpdate = function() {
              return requestAnimationFrame(_this.update);
            };
            this.update = debounce(this.update.bind(this));
            this.options = _extends({}, Popper2.Defaults, options);
            this.state = {
              isDestroyed: false,
              isCreated: false,
              scrollParents: []
            };
            this.reference = reference && reference.jquery ? reference[0] : reference;
            this.popper = popper && popper.jquery ? popper[0] : popper;
            this.options.modifiers = {};
            Object.keys(_extends({}, Popper2.Defaults.modifiers, options.modifiers)).forEach(function(name) {
              _this.options.modifiers[name] = _extends({}, Popper2.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
            });
            this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
              return _extends({
                name
              }, _this.options.modifiers[name]);
            }).sort(function(a, b) {
              return a.order - b.order;
            });
            this.modifiers.forEach(function(modifierOptions) {
              if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
              }
            });
            this.update();
            var eventsEnabled = this.options.eventsEnabled;
            if (eventsEnabled) {
              this.enableEventListeners();
            }
            this.state.eventsEnabled = eventsEnabled;
          }
          createClass(Popper2, [{
            key: "update",
            value: function update$$1() {
              return update.call(this);
            }
          }, {
            key: "destroy",
            value: function destroy$$1() {
              return destroy.call(this);
            }
          }, {
            key: "enableEventListeners",
            value: function enableEventListeners$$1() {
              return enableEventListeners.call(this);
            }
          }, {
            key: "disableEventListeners",
            value: function disableEventListeners$$1() {
              return disableEventListeners.call(this);
            }
          }]);
          return Popper2;
        }();
        Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
        Popper.placements = placements;
        Popper.Defaults = Defaults;
        return Popper;
      });
    }
  });

  // plugins/bootstrap4/js/bootstrap.min.js
  var require_bootstrap_min = __commonJS({
    "plugins/bootstrap4/js/bootstrap.min.js"(exports, module) {
      !function(t2, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports, require_jquery(), require_popper()) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t2.bootstrap = {}, t2.jQuery, t2.Popper);
      }(exports, function(t2, e, h) {
        "use strict";
        function i(t3, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var i2 = e2[n2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
          }
        }
        function s(t3, e2, n2) {
          return e2 && i(t3.prototype, e2), n2 && i(t3, n2), t3;
        }
        function l(r2) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var o2 = null != arguments[t3] ? arguments[t3] : {}, e2 = Object.keys(o2);
            "function" == typeof Object.getOwnPropertySymbols && (e2 = e2.concat(Object.getOwnPropertySymbols(o2).filter(function(t4) {
              return Object.getOwnPropertyDescriptor(o2, t4).enumerable;
            }))), e2.forEach(function(t4) {
              var e3, n2, i2;
              e3 = r2, i2 = o2[n2 = t4], n2 in e3 ? Object.defineProperty(e3, n2, { value: i2, enumerable: true, configurable: true, writable: true }) : e3[n2] = i2;
            });
          }
          return r2;
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h;
        var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $2, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function(i2) {
          var e2 = "transitionend";
          function t3(t4) {
            var e3 = this, n2 = false;
            return i2(this).one(l2.TRANSITION_END, function() {
              n2 = true;
            }), setTimeout(function() {
              n2 || l2.triggerTransitionEnd(e3);
            }, t4), this;
          }
          var l2 = { TRANSITION_END: "bsTransitionEnd", getUID: function(t4) {
            for (; t4 += ~~(1e6 * Math.random()), document.getElementById(t4); )
              ;
            return t4;
          }, getSelectorFromElement: function(t4) {
            var e3 = t4.getAttribute("data-target");
            e3 && "#" !== e3 || (e3 = t4.getAttribute("href") || "");
            try {
              return document.querySelector(e3) ? e3 : null;
            } catch (t5) {
              return null;
            }
          }, getTransitionDurationFromElement: function(t4) {
            if (!t4)
              return 0;
            var e3 = i2(t4).css("transition-duration");
            return parseFloat(e3) ? (e3 = e3.split(",")[0], 1e3 * parseFloat(e3)) : 0;
          }, reflow: function(t4) {
            return t4.offsetHeight;
          }, triggerTransitionEnd: function(t4) {
            i2(t4).trigger(e2);
          }, supportsTransitionEnd: function() {
            return Boolean(e2);
          }, isElement: function(t4) {
            return (t4[0] || t4).nodeType;
          }, typeCheckConfig: function(t4, e3, n2) {
            for (var i3 in n2)
              if (Object.prototype.hasOwnProperty.call(n2, i3)) {
                var r2 = n2[i3], o2 = e3[i3], s2 = o2 && l2.isElement(o2) ? "element" : (a2 = o2, {}.toString.call(a2).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(r2).test(s2))
                  throw new Error(t4.toUpperCase() + ': Option "' + i3 + '" provided type "' + s2 + '" but expected type "' + r2 + '".');
              }
            var a2;
          } };
          return i2.fn.emulateTransitionEnd = t3, i2.event.special[l2.TRANSITION_END] = { bindType: e2, delegateType: e2, handle: function(t4) {
            if (i2(t4.target).is(this))
              return t4.handleObj.handler.apply(this, arguments);
          } }, l2;
        }(e), Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", g = "show", _ = function() {
          function i2(t4) {
            this._element = t4;
          }
          var t3 = i2.prototype;
          return t3.close = function(t4) {
            var e2 = this._element;
            t4 && (e2 = this._getRootElement(t4)), this._triggerCloseEvent(e2).isDefaultPrevented() || this._removeElement(e2);
          }, t3.dispose = function() {
            r.removeData(this._element, o), this._element = null;
          }, t3._getRootElement = function(t4) {
            var e2 = Fn.getSelectorFromElement(t4), n2 = false;
            return e2 && (n2 = document.querySelector(e2)), n2 || (n2 = r(t4).closest("." + f)[0]), n2;
          }, t3._triggerCloseEvent = function(t4) {
            var e2 = r.Event(u.CLOSE);
            return r(t4).trigger(e2), e2;
          }, t3._removeElement = function(e2) {
            var n2 = this;
            if (r(e2).removeClass(g), r(e2).hasClass(d)) {
              var t4 = Fn.getTransitionDurationFromElement(e2);
              r(e2).one(Fn.TRANSITION_END, function(t5) {
                return n2._destroyElement(e2, t5);
              }).emulateTransitionEnd(t4);
            } else
              this._destroyElement(e2);
          }, t3._destroyElement = function(t4) {
            r(t4).detach().trigger(u.CLOSED).remove();
          }, i2._jQueryInterface = function(n2) {
            return this.each(function() {
              var t4 = r(this), e2 = t4.data(o);
              e2 || (e2 = new i2(this), t4.data(o, e2)), "close" === n2 && e2[n2](this);
            });
          }, i2._handleDismiss = function(e2) {
            return function(t4) {
              t4 && t4.preventDefault(), e2.close(this);
            };
          }, s(i2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }]), i2;
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function() {
          return r.fn[n] = c, _._jQueryInterface;
        }, _), Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E }, k = function() {
          function n2(t4) {
            this._element = t4;
          }
          var t3 = n2.prototype;
          return t3.toggle = function() {
            var t4 = true, e2 = true, n3 = m(this._element).closest(A)[0];
            if (n3) {
              var i2 = this._element.querySelector(D);
              if (i2) {
                if ("radio" === i2.type)
                  if (i2.checked && this._element.classList.contains(T))
                    t4 = false;
                  else {
                    var r2 = n3.querySelector(w);
                    r2 && m(r2).removeClass(T);
                  }
                if (t4) {
                  if (i2.hasAttribute("disabled") || n3.hasAttribute("disabled") || i2.classList.contains("disabled") || n3.classList.contains("disabled"))
                    return;
                  i2.checked = !this._element.classList.contains(T), m(i2).trigger("change");
                }
                i2.focus(), e2 = false;
              }
            }
            e2 && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t4 && m(this._element).toggleClass(T);
          }, t3.dispose = function() {
            m.removeData(this._element, v), this._element = null;
          }, n2._jQueryInterface = function(e2) {
            return this.each(function() {
              var t4 = m(this).data(v);
              t4 || (t4 = new n2(this), m(this).data(v, t4)), "toggle" === e2 && t4[e2]();
            });
          }, s(n2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }]), n2;
        }(), m(document).on(O.CLICK_DATA_API, I, function(t3) {
          t3.preventDefault();
          var e2 = t3.target;
          m(e2).hasClass(b) || (e2 = m(e2).closest(N)), k._jQueryInterface.call(m(e2), "toggle");
        }).on(O.FOCUS_BLUR_DATA_API, I, function(t3) {
          var e2 = m(t3.target).closest(N)[0];
          m(e2).toggleClass(S, /^focus(in)?$/.test(t3.type));
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() {
          return m.fn[p] = C, k._jQueryInterface;
        }, k), Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, q = "next", F = "prev", K = "left", M = "right", Q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + R, CLICK_DATA_API: "click" + L + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $2 = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function() {
          function o2(t4, e2) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this._config = this._getConfig(e2), this._element = P(t4)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners();
          }
          var t3 = o2.prototype;
          return t3.next = function() {
            this._isSliding || this._slide(q);
          }, t3.nextWhenVisible = function() {
            !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
          }, t3.prev = function() {
            this._isSliding || this._slide(F);
          }, t3.pause = function(t4) {
            t4 || (this._isPaused = true), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
          }, t3.cycle = function(t4) {
            t4 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
          }, t3.to = function(t4) {
            var e2 = this;
            this._activeElement = this._element.querySelector(X);
            var n2 = this._getItemIndex(this._activeElement);
            if (!(t4 > this._items.length - 1 || t4 < 0))
              if (this._isSliding)
                P(this._element).one(Q.SLID, function() {
                  return e2.to(t4);
                });
              else {
                if (n2 === t4)
                  return this.pause(), void this.cycle();
                var i2 = n2 < t4 ? q : F;
                this._slide(i2, this._items[t4]);
              }
          }, t3.dispose = function() {
            P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
          }, t3._getConfig = function(t4) {
            return t4 = l({}, W, t4), Fn.typeCheckConfig(j, t4, U), t4;
          }, t3._addEventListeners = function() {
            var e2 = this;
            this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t4) {
              return e2._keydown(t4);
            }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t4) {
              return e2.pause(t4);
            }).on(Q.MOUSELEAVE, function(t4) {
              return e2.cycle(t4);
            }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
              e2.pause(), e2.touchTimeout && clearTimeout(e2.touchTimeout), e2.touchTimeout = setTimeout(function(t4) {
                return e2.cycle(t4);
              }, 500 + e2._config.interval);
            }));
          }, t3._keydown = function(t4) {
            if (!/input|textarea/i.test(t4.target.tagName))
              switch (t4.which) {
                case 37:
                  t4.preventDefault(), this.prev();
                  break;
                case 39:
                  t4.preventDefault(), this.next();
              }
          }, t3._getItemIndex = function(t4) {
            return this._items = t4 && t4.parentNode ? [].slice.call(t4.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t4);
          }, t3._getItemByDirection = function(t4, e2) {
            var n2 = t4 === q, i2 = t4 === F, r2 = this._getItemIndex(e2), o3 = this._items.length - 1;
            if ((i2 && 0 === r2 || n2 && r2 === o3) && !this._config.wrap)
              return e2;
            var s2 = (r2 + (t4 === F ? -1 : 1)) % this._items.length;
            return -1 === s2 ? this._items[this._items.length - 1] : this._items[s2];
          }, t3._triggerSlideEvent = function(t4, e2) {
            var n2 = this._getItemIndex(t4), i2 = this._getItemIndex(this._element.querySelector(X)), r2 = P.Event(Q.SLIDE, { relatedTarget: t4, direction: e2, from: i2, to: n2 });
            return P(this._element).trigger(r2), r2;
          }, t3._setActiveIndicatorElement = function(t4) {
            if (this._indicatorsElement) {
              var e2 = [].slice.call(this._indicatorsElement.querySelectorAll($2));
              P(e2).removeClass(V);
              var n2 = this._indicatorsElement.children[this._getItemIndex(t4)];
              n2 && P(n2).addClass(V);
            }
          }, t3._slide = function(t4, e2) {
            var n2, i2, r2, o3 = this, s2 = this._element.querySelector(X), a2 = this._getItemIndex(s2), l2 = e2 || s2 && this._getItemByDirection(t4, s2), c2 = this._getItemIndex(l2), h2 = Boolean(this._interval);
            if (t4 === q ? (n2 = J, i2 = Z, r2 = K) : (n2 = z, i2 = G, r2 = M), l2 && P(l2).hasClass(V))
              this._isSliding = false;
            else if (!this._triggerSlideEvent(l2, r2).isDefaultPrevented() && s2 && l2) {
              this._isSliding = true, h2 && this.pause(), this._setActiveIndicatorElement(l2);
              var u2 = P.Event(Q.SLID, { relatedTarget: l2, direction: r2, from: a2, to: c2 });
              if (P(this._element).hasClass(Y)) {
                P(l2).addClass(i2), Fn.reflow(l2), P(s2).addClass(n2), P(l2).addClass(n2);
                var f2 = Fn.getTransitionDurationFromElement(s2);
                P(s2).one(Fn.TRANSITION_END, function() {
                  P(l2).removeClass(n2 + " " + i2).addClass(V), P(s2).removeClass(V + " " + i2 + " " + n2), o3._isSliding = false, setTimeout(function() {
                    return P(o3._element).trigger(u2);
                  }, 0);
                }).emulateTransitionEnd(f2);
              } else
                P(s2).removeClass(V), P(l2).addClass(V), this._isSliding = false, P(this._element).trigger(u2);
              h2 && this.cycle();
            }
          }, o2._jQueryInterface = function(i2) {
            return this.each(function() {
              var t4 = P(this).data(H), e2 = l({}, W, P(this).data());
              "object" == typeof i2 && (e2 = l({}, e2, i2));
              var n2 = "string" == typeof i2 ? i2 : e2.slide;
              if (t4 || (t4 = new o2(this, e2), P(this).data(H, t4)), "number" == typeof i2)
                t4.to(i2);
              else if ("string" == typeof n2) {
                if ("undefined" == typeof t4[n2])
                  throw new TypeError('No method named "' + n2 + '"');
                t4[n2]();
              } else
                e2.interval && (t4.pause(), t4.cycle());
            });
          }, o2._dataApiClickHandler = function(t4) {
            var e2 = Fn.getSelectorFromElement(this);
            if (e2) {
              var n2 = P(e2)[0];
              if (n2 && P(n2).hasClass(B)) {
                var i2 = l({}, P(n2).data(), P(this).data()), r2 = this.getAttribute("data-slide-to");
                r2 && (i2.interval = false), o2._jQueryInterface.call(P(n2), i2), r2 && P(n2).data(H).to(r2), t4.preventDefault();
              }
            }
          }, s(o2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return W;
          } }]), o2;
        }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
          for (var t3 = [].slice.call(document.querySelectorAll(rt)), e2 = 0, n2 = t3.length; e2 < n2; e2++) {
            var i2 = P(t3[e2]);
            ot._jQueryInterface.call(i2, i2.data());
          }
        }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function() {
          return P.fn[j] = x, ot._jQueryInterface;
        }, ot), Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = { toggle: true, parent: "" }, ft = { toggle: "boolean", parent: "(string|element)" }, dt = { SHOW: "show" + ct, SHOWN: "shown" + ct, HIDE: "hide" + ct, HIDDEN: "hidden" + ct, CLICK_DATA_API: "click" + ct + ".data-api" }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function() {
          function a2(e2, t4) {
            this._isTransitioning = false, this._element = e2, this._config = this._getConfig(t4), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e2.id + '"],[data-toggle="collapse"][data-target="#' + e2.id + '"]'));
            for (var n2 = [].slice.call(document.querySelectorAll(Ct)), i2 = 0, r2 = n2.length; i2 < r2; i2++) {
              var o2 = n2[i2], s2 = Fn.getSelectorFromElement(o2), a3 = [].slice.call(document.querySelectorAll(s2)).filter(function(t5) {
                return t5 === e2;
              });
              null !== s2 && 0 < a3.length && (this._selector = s2, this._triggerArray.push(o2));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
          }
          var t3 = a2.prototype;
          return t3.toggle = function() {
            st(this._element).hasClass(gt) ? this.hide() : this.show();
          }, t3.show = function() {
            var t4, e2, n2 = this;
            if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t4 = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t5) {
              return t5.getAttribute("data-parent") === n2._config.parent;
            })).length && (t4 = null), !(t4 && (e2 = st(t4).not(this._selector).data(lt)) && e2._isTransitioning))) {
              var i2 = st.Event(dt.SHOW);
              if (st(this._element).trigger(i2), !i2.isDefaultPrevented()) {
                t4 && (a2._jQueryInterface.call(st(t4).not(this._selector), "hide"), e2 || st(t4).data(lt, null));
                var r2 = this._getDimension();
                st(this._element).removeClass(_t).addClass(mt), this._element.style[r2] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", true), this.setTransitioning(true);
                var o2 = "scroll" + (r2[0].toUpperCase() + r2.slice(1)), s2 = Fn.getTransitionDurationFromElement(this._element);
                st(this._element).one(Fn.TRANSITION_END, function() {
                  st(n2._element).removeClass(mt).addClass(_t).addClass(gt), n2._element.style[r2] = "", n2.setTransitioning(false), st(n2._element).trigger(dt.SHOWN);
                }).emulateTransitionEnd(s2), this._element.style[r2] = this._element[o2] + "px";
              }
            }
          }, t3.hide = function() {
            var t4 = this;
            if (!this._isTransitioning && st(this._element).hasClass(gt)) {
              var e2 = st.Event(dt.HIDE);
              if (st(this._element).trigger(e2), !e2.isDefaultPrevented()) {
                var n2 = this._getDimension();
                this._element.style[n2] = this._element.getBoundingClientRect()[n2] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                var i2 = this._triggerArray.length;
                if (0 < i2)
                  for (var r2 = 0; r2 < i2; r2++) {
                    var o2 = this._triggerArray[r2], s2 = Fn.getSelectorFromElement(o2);
                    if (null !== s2)
                      st([].slice.call(document.querySelectorAll(s2))).hasClass(gt) || st(o2).addClass(pt).attr("aria-expanded", false);
                  }
                this.setTransitioning(true);
                this._element.style[n2] = "";
                var a3 = Fn.getTransitionDurationFromElement(this._element);
                st(this._element).one(Fn.TRANSITION_END, function() {
                  t4.setTransitioning(false), st(t4._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN);
                }).emulateTransitionEnd(a3);
              }
            }
          }, t3.setTransitioning = function(t4) {
            this._isTransitioning = t4;
          }, t3.dispose = function() {
            st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
          }, t3._getConfig = function(t4) {
            return (t4 = l({}, ut, t4)).toggle = Boolean(t4.toggle), Fn.typeCheckConfig(at, t4, ft), t4;
          }, t3._getDimension = function() {
            return st(this._element).hasClass(vt) ? vt : yt;
          }, t3._getParent = function() {
            var n2 = this, t4 = null;
            Fn.isElement(this._config.parent) ? (t4 = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t4 = this._config.parent[0])) : t4 = document.querySelector(this._config.parent);
            var e2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i2 = [].slice.call(t4.querySelectorAll(e2));
            return st(i2).each(function(t5, e3) {
              n2._addAriaAndCollapsedClass(a2._getTargetFromElement(e3), [e3]);
            }), t4;
          }, t3._addAriaAndCollapsedClass = function(t4, e2) {
            if (t4) {
              var n2 = st(t4).hasClass(gt);
              e2.length && st(e2).toggleClass(pt, !n2).attr("aria-expanded", n2);
            }
          }, a2._getTargetFromElement = function(t4) {
            var e2 = Fn.getSelectorFromElement(t4);
            return e2 ? document.querySelector(e2) : null;
          }, a2._jQueryInterface = function(i2) {
            return this.each(function() {
              var t4 = st(this), e2 = t4.data(lt), n2 = l({}, ut, t4.data(), "object" == typeof i2 && i2 ? i2 : {});
              if (!e2 && n2.toggle && /show|hide/.test(i2) && (n2.toggle = false), e2 || (e2 = new a2(this, n2), t4.data(lt, e2)), "string" == typeof i2) {
                if ("undefined" == typeof e2[i2])
                  throw new TypeError('No method named "' + i2 + '"');
                e2[i2]();
              }
            });
          }, s(a2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return ut;
          } }]), a2;
        }(), st(document).on(dt.CLICK_DATA_API, Ct, function(t3) {
          "A" === t3.currentTarget.tagName && t3.preventDefault();
          var n2 = st(this), e2 = Fn.getSelectorFromElement(this), i2 = [].slice.call(document.querySelectorAll(e2));
          st(i2).each(function() {
            var t4 = st(this), e3 = t4.data(lt) ? "toggle" : n2.data();
            Tt._jQueryInterface.call(t4, e3);
          });
        }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function() {
          return st.fn[at] = ht, Tt._jQueryInterface;
        }, Tt), Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + Dt, KEYDOWN_DATA_API: "keydown" + At + Dt, KEYUP_DATA_API: "keyup" + At + Dt }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = { offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Gt = function() {
          function c2(t4, e2) {
            this._element = t4, this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
          }
          var t3 = c2.prototype;
          return t3.toggle = function() {
            if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
              var t4 = c2._getParentFromElement(this._element), e2 = bt(this._menu).hasClass(Pt);
              if (c2._clearMenus(), !e2) {
                var n2 = { relatedTarget: this._element }, i2 = bt.Event(Ot.SHOW, n2);
                if (bt(t4).trigger(i2), !i2.isDefaultPrevented()) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof h)
                      throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                    var r2 = this._element;
                    "parent" === this._config.reference ? r2 = t4 : Fn.isElement(this._config.reference) && (r2 = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r2 = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t4).addClass(xt), this._popper = new h(r2, this._menu, this._getPopperConfig());
                  }
                  "ontouchstart" in document.documentElement && 0 === bt(t4).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), bt(this._menu).toggleClass(Pt), bt(t4).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n2));
                }
              }
            }
          }, t3.dispose = function() {
            bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
          }, t3.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
          }, t3._addEventListeners = function() {
            var e2 = this;
            bt(this._element).on(Ot.CLICK, function(t4) {
              t4.preventDefault(), t4.stopPropagation(), e2.toggle();
            });
          }, t3._getConfig = function(t4) {
            return t4 = l({}, this.constructor.Default, bt(this._element).data(), t4), Fn.typeCheckConfig(St, t4, this.constructor.DefaultType), t4;
          }, t3._getMenuElement = function() {
            if (!this._menu) {
              var t4 = c2._getParentFromElement(this._element);
              t4 && (this._menu = t4.querySelector(qt));
            }
            return this._menu;
          }, t3._getPlacement = function() {
            var t4 = bt(this._element.parentNode), e2 = Bt;
            return t4.hasClass(jt) ? (e2 = Mt, bt(this._menu).hasClass(Rt) && (e2 = Qt)) : t4.hasClass(Ht) ? e2 = Yt : t4.hasClass(Lt) ? e2 = zt : bt(this._menu).hasClass(Rt) && (e2 = Vt), e2;
          }, t3._detectNavbar = function() {
            return 0 < bt(this._element).closest(".navbar").length;
          }, t3._getPopperConfig = function() {
            var e2 = this, t4 = {};
            "function" == typeof this._config.offset ? t4.fn = function(t5) {
              return t5.offsets = l({}, t5.offsets, e2._config.offset(t5.offsets) || {}), t5;
            } : t4.offset = this._config.offset;
            var n2 = { placement: this._getPlacement(), modifiers: { offset: t4, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
            return "static" === this._config.display && (n2.modifiers.applyStyle = { enabled: false }), n2;
          }, c2._jQueryInterface = function(e2) {
            return this.each(function() {
              var t4 = bt(this).data(It);
              if (t4 || (t4 = new c2(this, "object" == typeof e2 ? e2 : null), bt(this).data(It, t4)), "string" == typeof e2) {
                if ("undefined" == typeof t4[e2])
                  throw new TypeError('No method named "' + e2 + '"');
                t4[e2]();
              }
            });
          }, c2._clearMenus = function(t4) {
            if (!t4 || 3 !== t4.which && ("keyup" !== t4.type || 9 === t4.which))
              for (var e2 = [].slice.call(document.querySelectorAll(Wt)), n2 = 0, i2 = e2.length; n2 < i2; n2++) {
                var r2 = c2._getParentFromElement(e2[n2]), o2 = bt(e2[n2]).data(It), s2 = { relatedTarget: e2[n2] };
                if (t4 && "click" === t4.type && (s2.clickEvent = t4), o2) {
                  var a2 = o2._menu;
                  if (bt(r2).hasClass(Pt) && !(t4 && ("click" === t4.type && /input|textarea/i.test(t4.target.tagName) || "keyup" === t4.type && 9 === t4.which) && bt.contains(r2, t4.target))) {
                    var l2 = bt.Event(Ot.HIDE, s2);
                    bt(r2).trigger(l2), l2.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e2[n2].setAttribute("aria-expanded", "false"), bt(a2).removeClass(Pt), bt(r2).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s2)));
                  }
                }
              }
          }, c2._getParentFromElement = function(t4) {
            var e2, n2 = Fn.getSelectorFromElement(t4);
            return n2 && (e2 = document.querySelector(n2)), e2 || t4.parentNode;
          }, c2._dataApiKeydownHandler = function(t4) {
            if ((/input|textarea/i.test(t4.target.tagName) ? !(32 === t4.which || 27 !== t4.which && (40 !== t4.which && 38 !== t4.which || bt(t4.target).closest(qt).length)) : Nt.test(t4.which)) && (t4.preventDefault(), t4.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) {
              var e2 = c2._getParentFromElement(this), n2 = bt(e2).hasClass(Pt);
              if ((n2 || 27 === t4.which && 32 === t4.which) && (!n2 || 27 !== t4.which && 32 !== t4.which)) {
                var i2 = [].slice.call(e2.querySelectorAll(Kt));
                if (0 !== i2.length) {
                  var r2 = i2.indexOf(t4.target);
                  38 === t4.which && 0 < r2 && r2--, 40 === t4.which && r2 < i2.length - 1 && r2++, r2 < 0 && (r2 = 0), i2[r2].focus();
                }
              } else {
                if (27 === t4.which) {
                  var o2 = e2.querySelector(Wt);
                  bt(o2).trigger("focus");
                }
                bt(this).trigger("click");
              }
            }
          }, s(c2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return Jt;
          } }, { key: "DefaultType", get: function() {
            return Zt;
          } }]), c2;
        }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function(t3) {
          t3.preventDefault(), t3.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle");
        }).on(Ot.CLICK_DATA_API, Ut, function(t3) {
          t3.stopPropagation();
        }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function() {
          return bt.fn[St] = wt, Gt._jQueryInterface;
        }, Gt), Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = { backdrop: true, keyboard: true, focus: true, show: true }, re = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, oe = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function() {
          function r2(t4, e2) {
            this._config = this._getConfig(e2), this._element = t4, this._dialog = t4.querySelector(ue), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._scrollbarWidth = 0;
          }
          var t3 = r2.prototype;
          return t3.toggle = function(t4) {
            return this._isShown ? this.hide() : this.show(t4);
          }, t3.show = function(t4) {
            var e2 = this;
            if (!this._isTransitioning && !this._isShown) {
              $t(this._element).hasClass(ce) && (this._isTransitioning = true);
              var n2 = $t.Event(oe.SHOW, { relatedTarget: t4 });
              $t(this._element).trigger(n2), this._isShown || n2.isDefaultPrevented() || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function(t5) {
                return e2.hide(t5);
              }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
                $t(e2._element).one(oe.MOUSEUP_DISMISS, function(t5) {
                  $t(t5.target).is(e2._element) && (e2._ignoreBackdropClick = true);
                });
              }), this._showBackdrop(function() {
                return e2._showElement(t4);
              }));
            }
          }, t3.hide = function(t4) {
            var e2 = this;
            if (t4 && t4.preventDefault(), !this._isTransitioning && this._isShown) {
              var n2 = $t.Event(oe.HIDE);
              if ($t(this._element).trigger(n2), this._isShown && !n2.isDefaultPrevented()) {
                this._isShown = false;
                var i2 = $t(this._element).hasClass(ce);
                if (i2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i2) {
                  var r3 = Fn.getTransitionDurationFromElement(this._element);
                  $t(this._element).one(Fn.TRANSITION_END, function(t5) {
                    return e2._hideModal(t5);
                  }).emulateTransitionEnd(r3);
                } else
                  this._hideModal();
              }
            }
          }, t3.dispose = function() {
            $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
          }, t3.handleUpdate = function() {
            this._adjustDialog();
          }, t3._getConfig = function(t4) {
            return t4 = l({}, ie, t4), Fn.typeCheckConfig(Xt, t4, re), t4;
          }, t3._showElement = function(t4) {
            var e2 = this, n2 = $t(this._element).hasClass(ce);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n2 && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();
            var i2 = $t.Event(oe.SHOWN, { relatedTarget: t4 }), r3 = function() {
              e2._config.focus && e2._element.focus(), e2._isTransitioning = false, $t(e2._element).trigger(i2);
            };
            if (n2) {
              var o2 = Fn.getTransitionDurationFromElement(this._element);
              $t(this._dialog).one(Fn.TRANSITION_END, r3).emulateTransitionEnd(o2);
            } else
              r3();
          }, t3._enforceFocus = function() {
            var e2 = this;
            $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function(t4) {
              document !== t4.target && e2._element !== t4.target && 0 === $t(e2._element).has(t4.target).length && e2._element.focus();
            });
          }, t3._setEscapeEvent = function() {
            var e2 = this;
            this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function(t4) {
              27 === t4.which && (t4.preventDefault(), e2.hide());
            }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
          }, t3._setResizeEvent = function() {
            var e2 = this;
            this._isShown ? $t(window).on(oe.RESIZE, function(t4) {
              return e2.handleUpdate(t4);
            }) : $t(window).off(oe.RESIZE);
          }, t3._hideModal = function() {
            var t4 = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._isTransitioning = false, this._showBackdrop(function() {
              $t(document.body).removeClass(le), t4._resetAdjustments(), t4._resetScrollbar(), $t(t4._element).trigger(oe.HIDDEN);
            });
          }, t3._removeBackdrop = function() {
            this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null);
          }, t3._showBackdrop = function(t4) {
            var e2 = this, n2 = $t(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
              if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n2 && this._backdrop.classList.add(n2), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function(t5) {
                e2._ignoreBackdropClick ? e2._ignoreBackdropClick = false : t5.target === t5.currentTarget && ("static" === e2._config.backdrop ? e2._element.focus() : e2.hide());
              }), n2 && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t4)
                return;
              if (!n2)
                return void t4();
              var i2 = Fn.getTransitionDurationFromElement(this._backdrop);
              $t(this._backdrop).one(Fn.TRANSITION_END, t4).emulateTransitionEnd(i2);
            } else if (!this._isShown && this._backdrop) {
              $t(this._backdrop).removeClass(he);
              var r3 = function() {
                e2._removeBackdrop(), t4 && t4();
              };
              if ($t(this._element).hasClass(ce)) {
                var o2 = Fn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop).one(Fn.TRANSITION_END, r3).emulateTransitionEnd(o2);
              } else
                r3();
            } else
              t4 && t4();
          }, t3._adjustDialog = function() {
            var t4 = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t4 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t4 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
          }, t3._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }, t3._checkScrollbar = function() {
            var t4 = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t4.left + t4.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
          }, t3._setScrollbar = function() {
            var r3 = this;
            if (this._isBodyOverflowing) {
              var t4 = [].slice.call(document.querySelectorAll(ge)), e2 = [].slice.call(document.querySelectorAll(_e));
              $t(t4).each(function(t5, e3) {
                var n3 = e3.style.paddingRight, i3 = $t(e3).css("padding-right");
                $t(e3).data("padding-right", n3).css("padding-right", parseFloat(i3) + r3._scrollbarWidth + "px");
              }), $t(e2).each(function(t5, e3) {
                var n3 = e3.style.marginRight, i3 = $t(e3).css("margin-right");
                $t(e3).data("margin-right", n3).css("margin-right", parseFloat(i3) - r3._scrollbarWidth + "px");
              });
              var n2 = document.body.style.paddingRight, i2 = $t(document.body).css("padding-right");
              $t(document.body).data("padding-right", n2).css("padding-right", parseFloat(i2) + this._scrollbarWidth + "px");
            }
          }, t3._resetScrollbar = function() {
            var t4 = [].slice.call(document.querySelectorAll(ge));
            $t(t4).each(function(t5, e3) {
              var n3 = $t(e3).data("padding-right");
              $t(e3).removeData("padding-right"), e3.style.paddingRight = n3 || "";
            });
            var e2 = [].slice.call(document.querySelectorAll("" + _e));
            $t(e2).each(function(t5, e3) {
              var n3 = $t(e3).data("margin-right");
              "undefined" != typeof n3 && $t(e3).css("margin-right", n3).removeData("margin-right");
            });
            var n2 = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n2 || "";
          }, t3._getScrollbarWidth = function() {
            var t4 = document.createElement("div");
            t4.className = se, document.body.appendChild(t4);
            var e2 = t4.getBoundingClientRect().width - t4.clientWidth;
            return document.body.removeChild(t4), e2;
          }, r2._jQueryInterface = function(n2, i2) {
            return this.each(function() {
              var t4 = $t(this).data(te), e2 = l({}, ie, $t(this).data(), "object" == typeof n2 && n2 ? n2 : {});
              if (t4 || (t4 = new r2(this, e2), $t(this).data(te, t4)), "string" == typeof n2) {
                if ("undefined" == typeof t4[n2])
                  throw new TypeError('No method named "' + n2 + '"');
                t4[n2](i2);
              } else
                e2.show && t4.show(i2);
            });
          }, s(r2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return ie;
          } }]), r2;
        }(), $t(document).on(oe.CLICK_DATA_API, fe, function(t3) {
          var e2, n2 = this, i2 = Fn.getSelectorFromElement(this);
          i2 && (e2 = document.querySelector(i2));
          var r2 = $t(e2).data(te) ? "toggle" : l({}, $t(e2).data(), $t(this).data());
          "A" !== this.tagName && "AREA" !== this.tagName || t3.preventDefault();
          var o2 = $t(e2).one(oe.SHOW, function(t4) {
            t4.isDefaultPrevented() || o2.one(oe.HIDDEN, function() {
              $t(n2).is(":visible") && n2.focus();
            });
          });
          me._jQueryInterface.call($t(e2), r2, this);
        }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function() {
          return $t.fn[Xt] = ne, me._jQueryInterface;
        }, me), zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(Ie = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Se = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent" }, we = "out", Ne = { HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: (De = "show") + Ee, SHOWN: "shown" + Ee, INSERTED: "inserted" + Ee, CLICK: "click" + Ee, FOCUSIN: "focusin" + Ee, FOCUSOUT: "focusout" + Ee, MOUSEENTER: "mouseenter" + Ee, MOUSELEAVE: "mouseleave" + Ee }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function() {
          function i2(t4, e2) {
            if ("undefined" == typeof h)
              throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t4, this.config = this._getConfig(e2), this.tip = null, this._setListeners();
          }
          var t3 = i2.prototype;
          return t3.enable = function() {
            this._isEnabled = true;
          }, t3.disable = function() {
            this._isEnabled = false;
          }, t3.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }, t3.toggle = function(t4) {
            if (this._isEnabled)
              if (t4) {
                var e2 = this.constructor.DATA_KEY, n2 = pe(t4.currentTarget).data(e2);
                n2 || (n2 = new this.constructor(t4.currentTarget, this._getDelegateConfig()), pe(t4.currentTarget).data(e2, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
              } else {
                if (pe(this.getTipElement()).hasClass(ke))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }, t3.dispose = function() {
            clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
          }, t3.show = function() {
            var e2 = this;
            if ("none" === pe(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t4 = pe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              pe(this.element).trigger(t4);
              var n2 = pe.contains(this.element.ownerDocument.documentElement, this.element);
              if (t4.isDefaultPrevented() || !n2)
                return;
              var i3 = this.getTipElement(), r2 = Fn.getUID(this.constructor.NAME);
              i3.setAttribute("id", r2), this.element.setAttribute("aria-describedby", r2), this.setContent(), this.config.animation && pe(i3).addClass(Oe);
              var o2 = "function" == typeof this.config.placement ? this.config.placement.call(this, i3, this.element) : this.config.placement, s2 = this._getAttachment(o2);
              this.addAttachmentClass(s2);
              var a2 = false === this.config.container ? document.body : pe(document).find(this.config.container);
              pe(i3).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i3).appendTo(a2), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i3, { placement: s2, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: je }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t5) {
                t5.originalPlacement !== t5.placement && e2._handlePopperPlacementChange(t5);
              }, onUpdate: function(t5) {
                e2._handlePopperPlacementChange(t5);
              } }), pe(i3).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
              var l2 = function() {
                e2.config.animation && e2._fixTransition();
                var t5 = e2._hoverState;
                e2._hoverState = null, pe(e2.element).trigger(e2.constructor.Event.SHOWN), t5 === we && e2._leave(null, e2);
              };
              if (pe(this.tip).hasClass(Oe)) {
                var c2 = Fn.getTransitionDurationFromElement(this.tip);
                pe(this.tip).one(Fn.TRANSITION_END, l2).emulateTransitionEnd(c2);
              } else
                l2();
            }
          }, t3.hide = function(t4) {
            var e2 = this, n2 = this.getTipElement(), i3 = pe.Event(this.constructor.Event.HIDE), r2 = function() {
              e2._hoverState !== De && n2.parentNode && n2.parentNode.removeChild(n2), e2._cleanTipClass(), e2.element.removeAttribute("aria-describedby"), pe(e2.element).trigger(e2.constructor.Event.HIDDEN), null !== e2._popper && e2._popper.destroy(), t4 && t4();
            };
            if (pe(this.element).trigger(i3), !i3.isDefaultPrevented()) {
              if (pe(n2).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = false, this._activeTrigger[Le] = false, this._activeTrigger[He] = false, pe(this.tip).hasClass(Oe)) {
                var o2 = Fn.getTransitionDurationFromElement(n2);
                pe(n2).one(Fn.TRANSITION_END, r2).emulateTransitionEnd(o2);
              } else
                r2();
              this._hoverState = "";
            }
          }, t3.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
          }, t3.isWithContent = function() {
            return Boolean(this.getTitle());
          }, t3.addAttachmentClass = function(t4) {
            pe(this.getTipElement()).addClass(Te + "-" + t4);
          }, t3.getTipElement = function() {
            return this.tip = this.tip || pe(this.config.template)[0], this.tip;
          }, t3.setContent = function() {
            var t4 = this.getTipElement();
            this.setElementContent(pe(t4.querySelectorAll(Pe)), this.getTitle()), pe(t4).removeClass(Oe + " " + ke);
          }, t3.setElementContent = function(t4, e2) {
            var n2 = this.config.html;
            "object" == typeof e2 && (e2.nodeType || e2.jquery) ? n2 ? pe(e2).parent().is(t4) || t4.empty().append(e2) : t4.text(pe(e2).text()) : t4[n2 ? "html" : "text"](e2);
          }, t3.getTitle = function() {
            var t4 = this.element.getAttribute("data-original-title");
            return t4 || (t4 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t4;
          }, t3._getAttachment = function(t4) {
            return Ie[t4.toUpperCase()];
          }, t3._setListeners = function() {
            var i3 = this;
            this.config.trigger.split(" ").forEach(function(t4) {
              if ("click" === t4)
                pe(i3.element).on(i3.constructor.Event.CLICK, i3.config.selector, function(t5) {
                  return i3.toggle(t5);
                });
              else if (t4 !== xe) {
                var e2 = t4 === He ? i3.constructor.Event.MOUSEENTER : i3.constructor.Event.FOCUSIN, n2 = t4 === He ? i3.constructor.Event.MOUSELEAVE : i3.constructor.Event.FOCUSOUT;
                pe(i3.element).on(e2, i3.config.selector, function(t5) {
                  return i3._enter(t5);
                }).on(n2, i3.config.selector, function(t5) {
                  return i3._leave(t5);
                });
              }
              pe(i3.element).closest(".modal").on("hide.bs.modal", function() {
                return i3.hide();
              });
            }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
          }, t3._fixTitle = function() {
            var t4 = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t4) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
          }, t3._enter = function(t4, e2) {
            var n2 = this.constructor.DATA_KEY;
            (e2 = e2 || pe(t4.currentTarget).data(n2)) || (e2 = new this.constructor(t4.currentTarget, this._getDelegateConfig()), pe(t4.currentTarget).data(n2, e2)), t4 && (e2._activeTrigger["focusin" === t4.type ? Le : He] = true), pe(e2.getTipElement()).hasClass(ke) || e2._hoverState === De ? e2._hoverState = De : (clearTimeout(e2._timeout), e2._hoverState = De, e2.config.delay && e2.config.delay.show ? e2._timeout = setTimeout(function() {
              e2._hoverState === De && e2.show();
            }, e2.config.delay.show) : e2.show());
          }, t3._leave = function(t4, e2) {
            var n2 = this.constructor.DATA_KEY;
            (e2 = e2 || pe(t4.currentTarget).data(n2)) || (e2 = new this.constructor(t4.currentTarget, this._getDelegateConfig()), pe(t4.currentTarget).data(n2, e2)), t4 && (e2._activeTrigger["focusout" === t4.type ? Le : He] = false), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = we, e2.config.delay && e2.config.delay.hide ? e2._timeout = setTimeout(function() {
              e2._hoverState === we && e2.hide();
            }, e2.config.delay.hide) : e2.hide());
          }, t3._isWithActiveTrigger = function() {
            for (var t4 in this._activeTrigger)
              if (this._activeTrigger[t4])
                return true;
            return false;
          }, t3._getConfig = function(t4) {
            return "number" == typeof (t4 = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t4 && t4 ? t4 : {})).delay && (t4.delay = { show: t4.delay, hide: t4.delay }), "number" == typeof t4.title && (t4.title = t4.title.toString()), "number" == typeof t4.content && (t4.content = t4.content.toString()), Fn.typeCheckConfig(ve, t4, this.constructor.DefaultType), t4;
          }, t3._getDelegateConfig = function() {
            var t4 = {};
            if (this.config)
              for (var e2 in this.config)
                this.constructor.Default[e2] !== this.config[e2] && (t4[e2] = this.config[e2]);
            return t4;
          }, t3._cleanTipClass = function() {
            var t4 = pe(this.getTipElement()), e2 = t4.attr("class").match(be);
            null !== e2 && e2.length && t4.removeClass(e2.join(""));
          }, t3._handlePopperPlacementChange = function(t4) {
            var e2 = t4.instance;
            this.tip = e2.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t4.placement));
          }, t3._fixTransition = function() {
            var t4 = this.getTipElement(), e2 = this.config.animation;
            null === t4.getAttribute("x-placement") && (pe(t4).removeClass(Oe), this.config.animation = false, this.hide(), this.show(), this.config.animation = e2);
          }, i2._jQueryInterface = function(n2) {
            return this.each(function() {
              var t4 = pe(this).data(ye), e2 = "object" == typeof n2 && n2;
              if ((t4 || !/dispose|hide/.test(n2)) && (t4 || (t4 = new i2(this, e2), pe(this).data(ye, t4)), "string" == typeof n2)) {
                if ("undefined" == typeof t4[n2])
                  throw new TypeError('No method named "' + n2 + '"');
                t4[n2]();
              }
            });
          }, s(i2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return Ae;
          } }, { key: "NAME", get: function() {
            return ve;
          } }, { key: "DATA_KEY", get: function() {
            return ye;
          } }, { key: "Event", get: function() {
            return Ne;
          } }, { key: "EVENT_KEY", get: function() {
            return Ee;
          } }, { key: "DefaultType", get: function() {
            return Se;
          } }]), i2;
        }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function() {
          return pe.fn[ve] = Ce, We._jQueryInterface;
        }, We), Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ye = l({}, zn.DefaultType, { content: "(string|element|function)" }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = { HIDE: "hide" + Ke, HIDDEN: "hidden" + Ke, SHOW: (Je = "show") + Ke, SHOWN: "shown" + Ke, INSERTED: "inserted" + Ke, CLICK: "click" + Ke, FOCUSIN: "focusin" + Ke, FOCUSOUT: "focusout" + Ke, MOUSEENTER: "mouseenter" + Ke, MOUSELEAVE: "mouseleave" + Ke }, Xe = function(t3) {
          var e2, n2;
          function i2() {
            return t3.apply(this, arguments) || this;
          }
          n2 = t3, (e2 = i2).prototype = Object.create(n2.prototype), (e2.prototype.constructor = e2).__proto__ = n2;
          var r2 = i2.prototype;
          return r2.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }, r2.addAttachmentClass = function(t4) {
            Ue(this.getTipElement()).addClass(Qe + "-" + t4);
          }, r2.getTipElement = function() {
            return this.tip = this.tip || Ue(this.config.template)[0], this.tip;
          }, r2.setContent = function() {
            var t4 = Ue(this.getTipElement());
            this.setElementContent(t4.find(Ze), this.getTitle());
            var e3 = this._getContent();
            "function" == typeof e3 && (e3 = e3.call(this.element)), this.setElementContent(t4.find(Ge), e3), t4.removeClass(ze + " " + Je);
          }, r2._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content;
          }, r2._cleanTipClass = function() {
            var t4 = Ue(this.getTipElement()), e3 = t4.attr("class").match(Be);
            null !== e3 && 0 < e3.length && t4.removeClass(e3.join(""));
          }, i2._jQueryInterface = function(n3) {
            return this.each(function() {
              var t4 = Ue(this).data(Fe), e3 = "object" == typeof n3 ? n3 : null;
              if ((t4 || !/destroy|hide/.test(n3)) && (t4 || (t4 = new i2(this, e3), Ue(this).data(Fe, t4)), "string" == typeof n3)) {
                if ("undefined" == typeof t4[n3])
                  throw new TypeError('No method named "' + n3 + '"');
                t4[n3]();
              }
            });
          }, s(i2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return Ve;
          } }, { key: "NAME", get: function() {
            return qe;
          } }, { key: "DATA_KEY", get: function() {
            return Fe;
          } }, { key: "Event", get: function() {
            return $e;
          } }, { key: "EVENT_KEY", get: function() {
            return Ke;
          } }, { key: "DefaultType", get: function() {
            return Ye;
          } }]), i2;
        }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function() {
          return Ue.fn[qe] = Me, Xe._jQueryInterface;
        }, Xe), Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = { offset: 10, method: "auto", target: "" }, an = { offset: "number", method: "string", target: "(string|element)" }, ln = { ACTIVATE: "activate" + rn, SCROLL: "scroll" + rn, LOAD_DATA_API: "load" + rn + ".data-api" }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function() {
          function n2(t4, e2) {
            var n3 = this;
            this._element = t4, this._scrollElement = "BODY" === t4.tagName ? window : t4, this._config = this._getConfig(e2), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function(t5) {
              return n3._process(t5);
            }), this.refresh(), this._process();
          }
          var t3 = n2.prototype;
          return t3.refresh = function() {
            var e2 = this, t4 = this._scrollElement === this._scrollElement.window ? En : Cn, r2 = "auto" === this._config.method ? t4 : this._config.method, o2 = r2 === Cn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t5) {
              var e3, n3 = Fn.getSelectorFromElement(t5);
              if (n3 && (e3 = document.querySelector(n3)), e3) {
                var i2 = e3.getBoundingClientRect();
                if (i2.width || i2.height)
                  return [tn(e3)[r2]().top + o2, n3];
              }
              return null;
            }).filter(function(t5) {
              return t5;
            }).sort(function(t5, e3) {
              return t5[0] - e3[0];
            }).forEach(function(t5) {
              e2._offsets.push(t5[0]), e2._targets.push(t5[1]);
            });
          }, t3.dispose = function() {
            tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
          }, t3._getConfig = function(t4) {
            if ("string" != typeof (t4 = l({}, sn, "object" == typeof t4 && t4 ? t4 : {})).target) {
              var e2 = tn(t4.target).attr("id");
              e2 || (e2 = Fn.getUID(en), tn(t4.target).attr("id", e2)), t4.target = "#" + e2;
            }
            return Fn.typeCheckConfig(en, t4, an), t4;
          }, t3._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }, t3._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }, t3._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }, t3._process = function() {
            var t4 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), n3 = this._config.offset + e2 - this._getOffsetHeight();
            if (this._scrollHeight !== e2 && this.refresh(), n3 <= t4) {
              var i2 = this._targets[this._targets.length - 1];
              this._activeTarget !== i2 && this._activate(i2);
            } else {
              if (this._activeTarget && t4 < this._offsets[0] && 0 < this._offsets[0])
                return this._activeTarget = null, void this._clear();
              for (var r2 = this._offsets.length; r2--; ) {
                this._activeTarget !== this._targets[r2] && t4 >= this._offsets[r2] && ("undefined" == typeof this._offsets[r2 + 1] || t4 < this._offsets[r2 + 1]) && this._activate(this._targets[r2]);
              }
            }
          }, t3._activate = function(e2) {
            this._activeTarget = e2, this._clear();
            var t4 = this._selector.split(",");
            t4 = t4.map(function(t5) {
              return t5 + '[data-target="' + e2 + '"],' + t5 + '[href="' + e2 + '"]';
            });
            var n3 = tn([].slice.call(document.querySelectorAll(t4.join(","))));
            n3.hasClass(cn) ? (n3.closest(pn).find(yn).addClass(hn), n3.addClass(hn)) : (n3.addClass(hn), n3.parents(dn).prev(gn + ", " + mn).addClass(hn), n3.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, { relatedTarget: e2 });
          }, t3._clear = function() {
            var t4 = [].slice.call(document.querySelectorAll(this._selector));
            tn(t4).filter(fn).removeClass(hn);
          }, n2._jQueryInterface = function(e2) {
            return this.each(function() {
              var t4 = tn(this).data(nn);
              if (t4 || (t4 = new n2(this, "object" == typeof e2 && e2), tn(this).data(nn, t4)), "string" == typeof e2) {
                if ("undefined" == typeof t4[e2])
                  throw new TypeError('No method named "' + e2 + '"');
                t4[e2]();
              }
            });
          }, s(n2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }, { key: "Default", get: function() {
            return sn;
          } }]), n2;
        }(), tn(window).on(ln.LOAD_DATA_API, function() {
          for (var t3 = [].slice.call(document.querySelectorAll(un)), e2 = t3.length; e2--; ) {
            var n2 = tn(t3[e2]);
            Tn._jQueryInterface.call(n2, n2.data());
          }
        }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function() {
          return tn.fn[en] = on, Tn._jQueryInterface;
        }, Tn), Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = { HIDE: "hide" + In, HIDDEN: "hidden" + In, SHOW: "show" + In, SHOWN: "shown" + In, CLICK_DATA_API: "click" + In + ".data-api" }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function() {
          function i2(t4) {
            this._element = t4;
          }
          var t3 = i2.prototype;
          return t3.show = function() {
            var n2 = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
              var t4, i3, e2 = bn(this._element).closest(Hn)[0], r2 = Fn.getSelectorFromElement(this._element);
              if (e2) {
                var o2 = "UL" === e2.nodeName ? Rn : Ln;
                i3 = (i3 = bn.makeArray(bn(e2).find(o2)))[i3.length - 1];
              }
              var s2 = bn.Event(Dn.HIDE, { relatedTarget: this._element }), a2 = bn.Event(Dn.SHOW, { relatedTarget: i3 });
              if (i3 && bn(i3).trigger(s2), bn(this._element).trigger(a2), !a2.isDefaultPrevented() && !s2.isDefaultPrevented()) {
                r2 && (t4 = document.querySelector(r2)), this._activate(this._element, e2);
                var l2 = function() {
                  var t5 = bn.Event(Dn.HIDDEN, { relatedTarget: n2._element }), e3 = bn.Event(Dn.SHOWN, { relatedTarget: i3 });
                  bn(i3).trigger(t5), bn(n2._element).trigger(e3);
                };
                t4 ? this._activate(t4, t4.parentNode, l2) : l2();
              }
            }
          }, t3.dispose = function() {
            bn.removeData(this._element, Sn), this._element = null;
          }, t3._activate = function(t4, e2, n2) {
            var i3 = this, r2 = ("UL" === e2.nodeName ? bn(e2).find(Rn) : bn(e2).children(Ln))[0], o2 = n2 && r2 && bn(r2).hasClass(kn), s2 = function() {
              return i3._transitionComplete(t4, r2, n2);
            };
            if (r2 && o2) {
              var a2 = Fn.getTransitionDurationFromElement(r2);
              bn(r2).one(Fn.TRANSITION_END, s2).emulateTransitionEnd(a2);
            } else
              s2();
          }, t3._transitionComplete = function(t4, e2, n2) {
            if (e2) {
              bn(e2).removeClass(Pn + " " + Nn);
              var i3 = bn(e2.parentNode).find(Un)[0];
              i3 && bn(i3).removeClass(Nn), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
            }
            if (bn(t4).addClass(Nn), "tab" === t4.getAttribute("role") && t4.setAttribute("aria-selected", true), Fn.reflow(t4), bn(t4).addClass(Pn), t4.parentNode && bn(t4.parentNode).hasClass(wn)) {
              var r2 = bn(t4).closest(jn)[0];
              if (r2) {
                var o2 = [].slice.call(r2.querySelectorAll(Wn));
                bn(o2).addClass(Nn);
              }
              t4.setAttribute("aria-expanded", true);
            }
            n2 && n2();
          }, i2._jQueryInterface = function(n2) {
            return this.each(function() {
              var t4 = bn(this), e2 = t4.data(Sn);
              if (e2 || (e2 = new i2(this), t4.data(Sn, e2)), "string" == typeof n2) {
                if ("undefined" == typeof e2[n2])
                  throw new TypeError('No method named "' + n2 + '"');
                e2[n2]();
              }
            });
          }, s(i2, null, [{ key: "VERSION", get: function() {
            return "4.1.3";
          } }]), i2;
        }(), bn(document).on(Dn.CLICK_DATA_API, xn, function(t3) {
          t3.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
        }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function() {
          return bn.fn.tab = An, qn._jQueryInterface;
        }, qn);
        !function(t3) {
          if ("undefined" == typeof t3)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          var e2 = t3.fn.jquery.split(" ")[0].split(".");
          if (e2[0] < 2 && e2[1] < 9 || 1 === e2[0] && 9 === e2[1] && e2[2] < 1 || 4 <= e2[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }(e), t2.Util = Fn, t2.Alert = Kn, t2.Button = Mn, t2.Carousel = Qn, t2.Collapse = Bn, t2.Dropdown = Vn, t2.Modal = Yn, t2.Popover = Jn, t2.Scrollspy = Zn, t2.Tab = Gn, t2.Tooltip = zn, Object.defineProperty(t2, "__esModule", { value: true });
      });
    }
  });

  // ../../node_modules/ev-emitter/ev-emitter.js
  var require_ev_emitter = __commonJS({
    "../../node_modules/ev-emitter/ev-emitter.js"(exports, module) {
      (function(global2, factory) {
        if (typeof module == "object" && module.exports) {
          module.exports = factory();
        } else {
          global2.EvEmitter = factory();
        }
      })(typeof window != "undefined" ? window : exports, function() {
        function EvEmitter() {
        }
        let proto = EvEmitter.prototype;
        proto.on = function(eventName, listener) {
          if (!eventName || !listener)
            return this;
          let events = this._events = this._events || {};
          let listeners = events[eventName] = events[eventName] || [];
          if (!listeners.includes(listener)) {
            listeners.push(listener);
          }
          return this;
        };
        proto.once = function(eventName, listener) {
          if (!eventName || !listener)
            return this;
          this.on(eventName, listener);
          let onceEvents = this._onceEvents = this._onceEvents || {};
          let onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
          onceListeners[listener] = true;
          return this;
        };
        proto.off = function(eventName, listener) {
          let listeners = this._events && this._events[eventName];
          if (!listeners || !listeners.length)
            return this;
          let index = listeners.indexOf(listener);
          if (index != -1) {
            listeners.splice(index, 1);
          }
          return this;
        };
        proto.emitEvent = function(eventName, args) {
          let listeners = this._events && this._events[eventName];
          if (!listeners || !listeners.length)
            return this;
          listeners = listeners.slice(0);
          args = args || [];
          let onceListeners = this._onceEvents && this._onceEvents[eventName];
          for (let listener of listeners) {
            let isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
              this.off(eventName, listener);
              delete onceListeners[listener];
            }
            listener.apply(this, args);
          }
          return this;
        };
        proto.allOff = function() {
          delete this._events;
          delete this._onceEvents;
          return this;
        };
        return EvEmitter;
      });
    }
  });

  // plugins/imagesloaded.pkgd.min.js
  var require_imagesloaded_pkgd_min = __commonJS({
    "plugins/imagesloaded.pkgd.min.js"(exports, module) {
      !function(e, t2) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t2) : "object" == typeof module && module.exports ? module.exports = t2() : e.EvEmitter = t2();
      }("undefined" != typeof window ? window : exports, function() {
        function e() {
        }
        var t2 = e.prototype;
        return t2.on = function(e2, t3) {
          if (e2 && t3) {
            var i = this._events = this._events || {}, n = i[e2] = i[e2] || [];
            return n.indexOf(t3) == -1 && n.push(t3), this;
          }
        }, t2.once = function(e2, t3) {
          if (e2 && t3) {
            this.on(e2, t3);
            var i = this._onceEvents = this._onceEvents || {}, n = i[e2] = i[e2] || {};
            return n[t3] = true, this;
          }
        }, t2.off = function(e2, t3) {
          var i = this._events && this._events[e2];
          if (i && i.length) {
            var n = i.indexOf(t3);
            return n != -1 && i.splice(n, 1), this;
          }
        }, t2.emitEvent = function(e2, t3) {
          var i = this._events && this._events[e2];
          if (i && i.length) {
            i = i.slice(0), t3 = t3 || [];
            for (var n = this._onceEvents && this._onceEvents[e2], o = 0; o < i.length; o++) {
              var r = i[o], s = n && n[r];
              s && (this.off(e2, r), delete n[r]), r.apply(this, t3);
            }
            return this;
          }
        }, t2.allOff = function() {
          delete this._events, delete this._onceEvents;
        }, e;
      }), function(e, t2) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
          return t2(e, i);
        }) : "object" == typeof module && module.exports ? module.exports = t2(e, require_ev_emitter()) : e.imagesLoaded = t2(e, e.EvEmitter);
      }("undefined" != typeof window ? window : exports, function(e, t2) {
        function i(e2, t3) {
          for (var i2 in t3)
            e2[i2] = t3[i2];
          return e2;
        }
        function n(e2) {
          if (Array.isArray(e2))
            return e2;
          var t3 = "object" == typeof e2 && "number" == typeof e2.length;
          return t3 ? d.call(e2) : [e2];
        }
        function o(e2, t3, r2) {
          if (!(this instanceof o))
            return new o(e2, t3, r2);
          var s2 = e2;
          return "string" == typeof e2 && (s2 = document.querySelectorAll(e2)), s2 ? (this.elements = n(s2), this.options = i({}, this.options), "function" == typeof t3 ? r2 = t3 : i(this.options, t3), r2 && this.on("always", r2), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s2 || e2));
        }
        function r(e2) {
          this.img = e2;
        }
        function s(e2, t3) {
          this.url = e2, this.element = t3, this.img = new Image();
        }
        var h = e.jQuery, a = e.console, d = Array.prototype.slice;
        o.prototype = Object.create(t2.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
          this.images = [], this.elements.forEach(this.addElementImages, this);
        }, o.prototype.addElementImages = function(e2) {
          "IMG" == e2.nodeName && this.addImage(e2), this.options.background === true && this.addElementBackgroundImages(e2);
          var t3 = e2.nodeType;
          if (t3 && u[t3]) {
            for (var i2 = e2.querySelectorAll("img"), n2 = 0; n2 < i2.length; n2++) {
              var o2 = i2[n2];
              this.addImage(o2);
            }
            if ("string" == typeof this.options.background) {
              var r2 = e2.querySelectorAll(this.options.background);
              for (n2 = 0; n2 < r2.length; n2++) {
                var s2 = r2[n2];
                this.addElementBackgroundImages(s2);
              }
            }
          }
        };
        var u = { 1: true, 9: true, 11: true };
        return o.prototype.addElementBackgroundImages = function(e2) {
          var t3 = getComputedStyle(e2);
          if (t3)
            for (var i2 = /url\((['"])?(.*?)\1\)/gi, n2 = i2.exec(t3.backgroundImage); null !== n2; ) {
              var o2 = n2 && n2[2];
              o2 && this.addBackground(o2, e2), n2 = i2.exec(t3.backgroundImage);
            }
        }, o.prototype.addImage = function(e2) {
          var t3 = new r(e2);
          this.images.push(t3);
        }, o.prototype.addBackground = function(e2, t3) {
          var i2 = new s(e2, t3);
          this.images.push(i2);
        }, o.prototype.check = function() {
          function e2(e3, i2, n2) {
            setTimeout(function() {
              t3.progress(e3, i2, n2);
            });
          }
          var t3 = this;
          return this.progressedCount = 0, this.hasAnyBroken = false, this.images.length ? void this.images.forEach(function(t4) {
            t4.once("progress", e2), t4.check();
          }) : void this.complete();
        }, o.prototype.progress = function(e2, t3, i2) {
          this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e2.isLoaded, this.emitEvent("progress", [this, e2, t3]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e2), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i2, e2, t3);
        }, o.prototype.complete = function() {
          var e2 = this.hasAnyBroken ? "fail" : "done";
          if (this.isComplete = true, this.emitEvent(e2, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t3 = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t3](this);
          }
        }, r.prototype = Object.create(t2.prototype), r.prototype.check = function() {
          var e2 = this.getIsImageComplete();
          return e2 ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
        }, r.prototype.getIsImageComplete = function() {
          return this.img.complete && this.img.naturalWidth;
        }, r.prototype.confirm = function(e2, t3) {
          this.isLoaded = e2, this.emitEvent("progress", [this, this.img, t3]);
        }, r.prototype.handleEvent = function(e2) {
          var t3 = "on" + e2.type;
          this[t3] && this[t3](e2);
        }, r.prototype.onload = function() {
          this.confirm(true, "onload"), this.unbindEvents();
        }, r.prototype.onerror = function() {
          this.confirm(false, "onerror"), this.unbindEvents();
        }, r.prototype.unbindEvents = function() {
          this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
          this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
          var e2 = this.getIsImageComplete();
          e2 && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
        }, s.prototype.unbindEvents = function() {
          this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, s.prototype.confirm = function(e2, t3) {
          this.isLoaded = e2, this.emitEvent("progress", [this, this.element, t3]);
        }, o.makeJQueryPlugin = function(t3) {
          t3 = t3 || e.jQuery, t3 && (h = t3, h.fn.imagesLoaded = function(e2, t4) {
            var i2 = new o(this, e2, t4);
            return i2.jqDeferred.promise(h(this));
          });
        }, o.makeJQueryPlugin(), o;
      });
    }
  });

  // ../../node_modules/get-style-property/get-style-property.js
  var require_get_style_property = __commonJS({
    "../../node_modules/get-style-property/get-style-property.js"(exports, module) {
      "use strict";
      module.exports = function(el, propName) {
        return el.currentStyle ? el.currentStyle[propName] : window.getComputedStyle ? document.defaultView.getComputedStyle(el, null).getPropertyValue(propName) : null;
      };
    }
  });

  // plugins/masonry.pkgd.min.js
  var require_masonry_pkgd_min = __commonJS({
    "plugins/masonry.pkgd.min.js"(exports, module) {
      !function(a) {
        function b() {
        }
        function c(a2) {
          function c2(b2) {
            b2.prototype.option || (b2.prototype.option = function(b3) {
              a2.isPlainObject(b3) && (this.options = a2.extend(true, this.options, b3));
            });
          }
          function e(b2, c3) {
            a2.fn[b2] = function(e2) {
              if ("string" == typeof e2) {
                for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                  var j = this[h], k = a2.data(j, b2);
                  if (k)
                    if (a2.isFunction(k[e2]) && "_" !== e2.charAt(0)) {
                      var l = k[e2].apply(k, g);
                      if (void 0 !== l)
                        return l;
                    } else
                      f("no such method '" + e2 + "' for " + b2 + " instance");
                  else
                    f("cannot call methods on " + b2 + " prior to initialization; attempted to call '" + e2 + "'");
                }
                return this;
              }
              return this.each(function() {
                var d2 = a2.data(this, b2);
                d2 ? (d2.option(e2), d2._init()) : (d2 = new c3(this, e2), a2.data(this, b2, d2));
              });
            };
          }
          if (a2) {
            var f = "undefined" == typeof console ? b : function(a3) {
              console.error(a3);
            };
            return a2.bridget = function(a3, b2) {
              c2(b2), e(a3, b2);
            }, a2.bridget;
          }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery);
      }(window), function(a) {
        function b(b2) {
          var c2 = a.event;
          return c2.target = c2.target || c2.srcElement || b2, c2;
        }
        var c = document.documentElement, d = function() {
        };
        c.addEventListener ? d = function(a2, b2, c2) {
          a2.addEventListener(b2, c2, false);
        } : c.attachEvent && (d = function(a2, c2, d2) {
          a2[c2 + d2] = d2.handleEvent ? function() {
            var c3 = b(a2);
            d2.handleEvent.call(d2, c3);
          } : function() {
            var c3 = b(a2);
            d2.call(a2, c3);
          }, a2.attachEvent("on" + c2, a2[c2 + d2]);
        });
        var e = function() {
        };
        c.removeEventListener ? e = function(a2, b2, c2) {
          a2.removeEventListener(b2, c2, false);
        } : c.detachEvent && (e = function(a2, b2, c2) {
          a2.detachEvent("on" + b2, a2[b2 + c2]);
          try {
            delete a2[b2 + c2];
          } catch (d2) {
            a2[b2 + c2] = void 0;
          }
        });
        var f = { bind: d, unbind: e };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f;
      }(exports), function(a) {
        function b(a2) {
          "function" == typeof a2 && (b.isReady ? a2() : f.push(a2));
        }
        function c(a2) {
          var c2 = "readystatechange" === a2.type && "complete" !== e.readyState;
          if (!b.isReady && !c2) {
            b.isReady = true;
            for (var d2 = 0, g = f.length; g > d2; d2++) {
              var h = f[d2];
              h();
            }
          }
        }
        function d(d2) {
          return d2.bind(e, "DOMContentLoaded", c), d2.bind(e, "readystatechange", c), d2.bind(a, "load", c), b;
        }
        var e = a.document, f = [];
        b.isReady = false, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie);
      }(exports), function() {
        function a() {
        }
        function b(a2, b2) {
          for (var c2 = a2.length; c2--; )
            if (a2[c2].listener === b2)
              return c2;
          return -1;
        }
        function c(a2) {
          return function() {
            return this[a2].apply(this, arguments);
          };
        }
        var d = a.prototype, e = this, f = e.EventEmitter;
        d.getListeners = function(a2) {
          var b2, c2, d2 = this._getEvents();
          if (a2 instanceof RegExp) {
            b2 = {};
            for (c2 in d2)
              d2.hasOwnProperty(c2) && a2.test(c2) && (b2[c2] = d2[c2]);
          } else
            b2 = d2[a2] || (d2[a2] = []);
          return b2;
        }, d.flattenListeners = function(a2) {
          var b2, c2 = [];
          for (b2 = 0; b2 < a2.length; b2 += 1)
            c2.push(a2[b2].listener);
          return c2;
        }, d.getListenersAsObject = function(a2) {
          var b2, c2 = this.getListeners(a2);
          return c2 instanceof Array && (b2 = {}, b2[a2] = c2), b2 || c2;
        }, d.addListener = function(a2, c2) {
          var d2, e2 = this.getListenersAsObject(a2), f2 = "object" == typeof c2;
          for (d2 in e2)
            e2.hasOwnProperty(d2) && -1 === b(e2[d2], c2) && e2[d2].push(f2 ? c2 : { listener: c2, once: false });
          return this;
        }, d.on = c("addListener"), d.addOnceListener = function(a2, b2) {
          return this.addListener(a2, { listener: b2, once: true });
        }, d.once = c("addOnceListener"), d.defineEvent = function(a2) {
          return this.getListeners(a2), this;
        }, d.defineEvents = function(a2) {
          for (var b2 = 0; b2 < a2.length; b2 += 1)
            this.defineEvent(a2[b2]);
          return this;
        }, d.removeListener = function(a2, c2) {
          var d2, e2, f2 = this.getListenersAsObject(a2);
          for (e2 in f2)
            f2.hasOwnProperty(e2) && (d2 = b(f2[e2], c2), -1 !== d2 && f2[e2].splice(d2, 1));
          return this;
        }, d.off = c("removeListener"), d.addListeners = function(a2, b2) {
          return this.manipulateListeners(false, a2, b2);
        }, d.removeListeners = function(a2, b2) {
          return this.manipulateListeners(true, a2, b2);
        }, d.manipulateListeners = function(a2, b2, c2) {
          var d2, e2, f2 = a2 ? this.removeListener : this.addListener, g = a2 ? this.removeListeners : this.addListeners;
          if ("object" != typeof b2 || b2 instanceof RegExp)
            for (d2 = c2.length; d2--; )
              f2.call(this, b2, c2[d2]);
          else
            for (d2 in b2)
              b2.hasOwnProperty(d2) && (e2 = b2[d2]) && ("function" == typeof e2 ? f2.call(this, d2, e2) : g.call(this, d2, e2));
          return this;
        }, d.removeEvent = function(a2) {
          var b2, c2 = typeof a2, d2 = this._getEvents();
          if ("string" === c2)
            delete d2[a2];
          else if (a2 instanceof RegExp)
            for (b2 in d2)
              d2.hasOwnProperty(b2) && a2.test(b2) && delete d2[b2];
          else
            delete this._events;
          return this;
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a2, b2) {
          var c2, d2, e2, f2, g = this.getListenersAsObject(a2);
          for (e2 in g)
            if (g.hasOwnProperty(e2))
              for (d2 = g[e2].length; d2--; )
                c2 = g[e2][d2], c2.once === true && this.removeListener(a2, c2.listener), f2 = c2.listener.apply(this, b2 || []), f2 === this._getOnceReturnValue() && this.removeListener(a2, c2.listener);
          return this;
        }, d.trigger = c("emitEvent"), d.emit = function(a2) {
          var b2 = Array.prototype.slice.call(arguments, 1);
          return this.emitEvent(a2, b2);
        }, d.setOnceReturnValue = function(a2) {
          return this._onceReturnValue = a2, this;
        }, d._getOnceReturnValue = function() {
          return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : true;
        }, d._getEvents = function() {
          return this._events || (this._events = {});
        }, a.noConflict = function() {
          return e.EventEmitter = f, a;
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
          return a;
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a;
      }.call(exports), function(a) {
        function b(a2) {
          if (a2) {
            if ("string" == typeof d[a2])
              return a2;
            a2 = a2.charAt(0).toUpperCase() + a2.slice(1);
            for (var b2, e = 0, f = c.length; f > e; e++)
              if (b2 = c[e] + a2, "string" == typeof d[b2])
                return b2;
          }
        }
        var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
          return b;
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b;
      }(window), function(a) {
        function b(a2) {
          var b2 = parseFloat(a2), c2 = -1 === a2.indexOf("%") && !isNaN(b2);
          return c2 && b2;
        }
        function c() {
          for (var a2 = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b2 = 0, c2 = g.length; c2 > b2; b2++) {
            var d2 = g[b2];
            a2[d2] = 0;
          }
          return a2;
        }
        function d(a2) {
          function d2(a3) {
            if ("string" == typeof a3 && (a3 = document.querySelector(a3)), a3 && "object" == typeof a3 && a3.nodeType) {
              var d3 = f(a3);
              if ("none" === d3.display)
                return c();
              var e2 = {};
              e2.width = a3.offsetWidth, e2.height = a3.offsetHeight;
              for (var k = e2.isBorderBox = !(!j || !d3[j] || "border-box" !== d3[j]), l = 0, m = g.length; m > l; l++) {
                var n = g[l], o = d3[n];
                o = h(a3, o);
                var p = parseFloat(o);
                e2[n] = isNaN(p) ? 0 : p;
              }
              var q = e2.paddingLeft + e2.paddingRight, r = e2.paddingTop + e2.paddingBottom, s = e2.marginLeft + e2.marginRight, t2 = e2.marginTop + e2.marginBottom, u = e2.borderLeftWidth + e2.borderRightWidth, v = e2.borderTopWidth + e2.borderBottomWidth, w = k && i, x = b(d3.width);
              x !== false && (e2.width = x + (w ? 0 : q + u));
              var y = b(d3.height);
              return y !== false && (e2.height = y + (w ? 0 : r + v)), e2.innerWidth = e2.width - (q + u), e2.innerHeight = e2.height - (r + v), e2.outerWidth = e2.width + s, e2.outerHeight = e2.height + t2, e2;
            }
          }
          function h(a3, b2) {
            if (e || -1 === b2.indexOf("%"))
              return b2;
            var c2 = a3.style, d3 = c2.left, f2 = a3.runtimeStyle, g2 = f2 && f2.left;
            return g2 && (f2.left = a3.currentStyle.left), c2.left = b2, b2 = c2.pixelLeft, c2.left = d3, g2 && (f2.left = g2), b2;
          }
          var i, j = a2("boxSizing");
          return function() {
            if (j) {
              var a3 = document.createElement("div");
              a3.style.width = "200px", a3.style.padding = "1px 2px 3px 4px", a3.style.borderStyle = "solid", a3.style.borderWidth = "1px 2px 3px 4px", a3.style[j] = "border-box";
              var c2 = document.body || document.documentElement;
              c2.appendChild(a3);
              var d3 = f(a3);
              i = 200 === b(d3.width), c2.removeChild(a3);
            }
          }(), d2;
        }
        var e = a.getComputedStyle, f = e ? function(a2) {
          return e(a2, null);
        } : function(a2) {
          return a2.currentStyle;
        }, g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require_get_style_property()) : a.getSize = d(a.getStyleProperty);
      }(window), function(a, b) {
        function c(a2, b2) {
          return a2[h](b2);
        }
        function d(a2) {
          if (!a2.parentNode) {
            var b2 = document.createDocumentFragment();
            b2.appendChild(a2);
          }
        }
        function e(a2, b2) {
          d(a2);
          for (var c2 = a2.parentNode.querySelectorAll(b2), e2 = 0, f2 = c2.length; f2 > e2; e2++)
            if (c2[e2] === a2)
              return true;
          return false;
        }
        function f(a2, b2) {
          return d(a2), c(a2, b2);
        }
        var g, h = function() {
          if (b.matchesSelector)
            return "matchesSelector";
          for (var a2 = ["webkit", "moz", "ms", "o"], c2 = 0, d2 = a2.length; d2 > c2; c2++) {
            var e2 = a2[c2], f2 = e2 + "MatchesSelector";
            if (b[f2])
              return f2;
          }
        }();
        if (h) {
          var i = document.createElement("div"), j = c(i, "div");
          g = j ? c : f;
        } else
          g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
          return g;
        }) : window.matchesSelector = g;
      }(exports, Element.prototype), function(a) {
        function b(a2, b2) {
          for (var c2 in b2)
            a2[c2] = b2[c2];
          return a2;
        }
        function c(a2) {
          for (var b2 in a2)
            return false;
          return b2 = null, true;
        }
        function d(a2) {
          return a2.replace(/([A-Z])/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function e(a2, e2, f2) {
          function h(a3, b2) {
            a3 && (this.element = a3, this.layout = b2, this.position = { x: 0, y: 0 }, this._create());
          }
          var i = f2("transition"), j = f2("transform"), k = i && j, l = !!f2("perspective"), m = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[i], n = ["transform", "transition", "transitionDuration", "transitionProperty"], o = function() {
            for (var a3 = {}, b2 = 0, c2 = n.length; c2 > b2; b2++) {
              var d2 = n[b2], e3 = f2(d2);
              e3 && e3 !== d2 && (a3[d2] = e3);
            }
            return a3;
          }();
          b(h.prototype, a2.prototype), h.prototype._create = function() {
            this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
          }, h.prototype.handleEvent = function(a3) {
            var b2 = "on" + a3.type;
            this[b2] && this[b2](a3);
          }, h.prototype.getSize = function() {
            this.size = e2(this.element);
          }, h.prototype.css = function(a3) {
            var b2 = this.element.style;
            for (var c2 in a3) {
              var d2 = o[c2] || c2;
              b2[d2] = a3[c2];
            }
          }, h.prototype.getPosition = function() {
            var a3 = g(this.element), b2 = this.layout.options, c2 = b2.isOriginLeft, d2 = b2.isOriginTop, e3 = parseInt(a3[c2 ? "left" : "right"], 10), f3 = parseInt(a3[d2 ? "top" : "bottom"], 10);
            e3 = isNaN(e3) ? 0 : e3, f3 = isNaN(f3) ? 0 : f3;
            var h2 = this.layout.size;
            e3 -= c2 ? h2.paddingLeft : h2.paddingRight, f3 -= d2 ? h2.paddingTop : h2.paddingBottom, this.position.x = e3, this.position.y = f3;
          }, h.prototype.layoutPosition = function() {
            var a3 = this.layout.size, b2 = this.layout.options, c2 = {};
            b2.isOriginLeft ? (c2.left = this.position.x + a3.paddingLeft + "px", c2.right = "") : (c2.right = this.position.x + a3.paddingRight + "px", c2.left = ""), b2.isOriginTop ? (c2.top = this.position.y + a3.paddingTop + "px", c2.bottom = "") : (c2.bottom = this.position.y + a3.paddingBottom + "px", c2.top = ""), this.css(c2), this.emitEvent("layout", [this]);
          };
          var p = l ? function(a3, b2) {
            return "translate3d(" + a3 + "px, " + b2 + "px, 0)";
          } : function(a3, b2) {
            return "translate(" + a3 + "px, " + b2 + "px)";
          };
          h.prototype._transitionTo = function(a3, b2) {
            this.getPosition();
            var c2 = this.position.x, d2 = this.position.y, e3 = parseInt(a3, 10), f3 = parseInt(b2, 10), g2 = e3 === this.position.x && f3 === this.position.y;
            if (this.setPosition(a3, b2), g2 && !this.isTransitioning)
              return void this.layoutPosition();
            var h2 = a3 - c2, i2 = b2 - d2, j2 = {}, k2 = this.layout.options;
            h2 = k2.isOriginLeft ? h2 : -h2, i2 = k2.isOriginTop ? i2 : -i2, j2.transform = p(h2, i2), this.transition({ to: j2, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: true });
          }, h.prototype.goTo = function(a3, b2) {
            this.setPosition(a3, b2), this.layoutPosition();
          }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a3, b2) {
            this.position.x = parseInt(a3, 10), this.position.y = parseInt(b2, 10);
          }, h.prototype._nonTransition = function(a3) {
            this.css(a3.to), a3.isCleaning && this._removeStyles(a3.to);
            for (var b2 in a3.onTransitionEnd)
              a3.onTransitionEnd[b2].call(this);
          }, h.prototype._transition = function(a3) {
            if (!parseFloat(this.layout.options.transitionDuration))
              return void this._nonTransition(a3);
            var b2 = this._transn;
            for (var c2 in a3.onTransitionEnd)
              b2.onEnd[c2] = a3.onTransitionEnd[c2];
            for (c2 in a3.to)
              b2.ingProperties[c2] = true, a3.isCleaning && (b2.clean[c2] = true);
            if (a3.from) {
              this.css(a3.from);
              var d2 = this.element.offsetHeight;
              d2 = null;
            }
            this.enableTransition(a3.to), this.css(a3.to), this.isTransitioning = true;
          };
          var q = j && d(j) + ",opacity";
          h.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({ transitionProperty: q, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(m, this, false));
          }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a3) {
            this.ontransitionend(a3);
          }, h.prototype.onotransitionend = function(a3) {
            this.ontransitionend(a3);
          };
          var r = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
          h.prototype.ontransitionend = function(a3) {
            if (a3.target === this.element) {
              var b2 = this._transn, d2 = r[a3.propertyName] || a3.propertyName;
              if (delete b2.ingProperties[d2], c(b2.ingProperties) && this.disableTransition(), d2 in b2.clean && (this.element.style[a3.propertyName] = "", delete b2.clean[d2]), d2 in b2.onEnd) {
                var e3 = b2.onEnd[d2];
                e3.call(this), delete b2.onEnd[d2];
              }
              this.emitEvent("transitionEnd", [this]);
            }
          }, h.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(m, this, false), this.isTransitioning = false;
          }, h.prototype._removeStyles = function(a3) {
            var b2 = {};
            for (var c2 in a3)
              b2[c2] = "";
            this.css(b2);
          };
          var s = { transitionProperty: "", transitionDuration: "" };
          return h.prototype.removeTransitionStyles = function() {
            this.css(s);
          }, h.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]);
          }, h.prototype.remove = function() {
            if (!i || !parseFloat(this.layout.options.transitionDuration))
              return void this.removeElem();
            var a3 = this;
            this.on("transitionEnd", function() {
              return a3.removeElem(), true;
            }), this.hide();
          }, h.prototype.reveal = function() {
            delete this.isHidden, this.css({ display: "" });
            var a3 = this.layout.options;
            this.transition({ from: a3.hiddenStyle, to: a3.visibleStyle, isCleaning: true });
          }, h.prototype.hide = function() {
            this.isHidden = true, this.css({ display: "" });
            var a3 = this.layout.options;
            this.transition({ from: a3.visibleStyle, to: a3.hiddenStyle, isCleaning: true, onTransitionEnd: { opacity: function() {
              this.isHidden && this.css({ display: "none" });
            } } });
          }, h.prototype.destroy = function() {
            this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
          }, h;
        }
        var f = a.getComputedStyle, g = f ? function(a2) {
          return f(a2, null);
        } : function(a2) {
          return a2.currentStyle;
        };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty));
      }(window), function(a) {
        function b(a2, b2) {
          for (var c2 in b2)
            a2[c2] = b2[c2];
          return a2;
        }
        function c(a2) {
          return "[object Array]" === l.call(a2);
        }
        function d(a2) {
          var b2 = [];
          if (c(a2))
            b2 = a2;
          else if (a2 && "number" == typeof a2.length)
            for (var d2 = 0, e2 = a2.length; e2 > d2; d2++)
              b2.push(a2[d2]);
          else
            b2.push(a2);
          return b2;
        }
        function e(a2, b2) {
          var c2 = n(b2, a2);
          -1 !== c2 && b2.splice(c2, 1);
        }
        function f(a2) {
          return a2.replace(/(.)([A-Z])/g, function(a3, b2, c2) {
            return b2 + "-" + c2;
          }).toLowerCase();
        }
        function g(c2, g2, l2, n2, o, p) {
          function q(a2, c3) {
            if ("string" == typeof a2 && (a2 = h.querySelector(a2)), !a2 || !m(a2))
              return void (i && i.error("Bad " + this.constructor.namespace + " element: " + a2));
            this.element = a2, this.options = b({}, this.constructor.defaults), this.option(c3);
            var d2 = ++r;
            this.element.outlayerGUID = d2, s[d2] = this, this._create(), this.options.isInitLayout && this.layout();
          }
          var r = 0, s = {};
          return q.namespace = "outlayer", q.Item = p, q.defaults = { containerStyle: { position: "relative" }, isInitLayout: true, isOriginLeft: true, isOriginTop: true, isResizeBound: true, isResizingContainer: true, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, b(q.prototype, l2.prototype), q.prototype.option = function(a2) {
            b(this.options, a2);
          }, q.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
          }, q.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children);
          }, q.prototype._itemize = function(a2) {
            for (var b2 = this._filterFindItemElements(a2), c3 = this.constructor.Item, d2 = [], e2 = 0, f2 = b2.length; f2 > e2; e2++) {
              var g3 = b2[e2], h2 = new c3(g3, this);
              d2.push(h2);
            }
            return d2;
          }, q.prototype._filterFindItemElements = function(a2) {
            a2 = d(a2);
            for (var b2 = this.options.itemSelector, c3 = [], e2 = 0, f2 = a2.length; f2 > e2; e2++) {
              var g3 = a2[e2];
              if (m(g3))
                if (b2) {
                  o(g3, b2) && c3.push(g3);
                  for (var h2 = g3.querySelectorAll(b2), i2 = 0, j2 = h2.length; j2 > i2; i2++)
                    c3.push(h2[i2]);
                } else
                  c3.push(g3);
            }
            return c3;
          }, q.prototype.getItemElements = function() {
            for (var a2 = [], b2 = 0, c3 = this.items.length; c3 > b2; b2++)
              a2.push(this.items[b2].element);
            return a2;
          }, q.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a2 = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a2), this._isLayoutInited = true;
          }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
            this.getSize();
          }, q.prototype.getSize = function() {
            this.size = n2(this.element);
          }, q.prototype._getMeasurement = function(a2, b2) {
            var c3, d2 = this.options[a2];
            d2 ? ("string" == typeof d2 ? c3 = this.element.querySelector(d2) : m(d2) && (c3 = d2), this[a2] = c3 ? n2(c3)[b2] : d2) : this[a2] = 0;
          }, q.prototype.layoutItems = function(a2, b2) {
            a2 = this._getItemsForLayout(a2), this._layoutItems(a2, b2), this._postLayout();
          }, q.prototype._getItemsForLayout = function(a2) {
            for (var b2 = [], c3 = 0, d2 = a2.length; d2 > c3; c3++) {
              var e2 = a2[c3];
              e2.isIgnored || b2.push(e2);
            }
            return b2;
          }, q.prototype._layoutItems = function(a2, b2) {
            function c3() {
              d2.emitEvent("layoutComplete", [d2, a2]);
            }
            var d2 = this;
            if (!a2 || !a2.length)
              return void c3();
            this._itemsOn(a2, "layout", c3);
            for (var e2 = [], f2 = 0, g3 = a2.length; g3 > f2; f2++) {
              var h2 = a2[f2], i2 = this._getItemLayoutPosition(h2);
              i2.item = h2, i2.isInstant = b2 || h2.isLayoutInstant, e2.push(i2);
            }
            this._processLayoutQueue(e2);
          }, q.prototype._getItemLayoutPosition = function() {
            return { x: 0, y: 0 };
          }, q.prototype._processLayoutQueue = function(a2) {
            for (var b2 = 0, c3 = a2.length; c3 > b2; b2++) {
              var d2 = a2[b2];
              this._positionItem(d2.item, d2.x, d2.y, d2.isInstant);
            }
          }, q.prototype._positionItem = function(a2, b2, c3, d2) {
            d2 ? a2.goTo(b2, c3) : a2.moveTo(b2, c3);
          }, q.prototype._postLayout = function() {
            this.resizeContainer();
          }, q.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
              var a2 = this._getContainerSize();
              a2 && (this._setContainerMeasure(a2.width, true), this._setContainerMeasure(a2.height, false));
            }
          }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a2, b2) {
            if (void 0 !== a2) {
              var c3 = this.size;
              c3.isBorderBox && (a2 += b2 ? c3.paddingLeft + c3.paddingRight + c3.borderLeftWidth + c3.borderRightWidth : c3.paddingBottom + c3.paddingTop + c3.borderTopWidth + c3.borderBottomWidth), a2 = Math.max(a2, 0), this.element.style[b2 ? "width" : "height"] = a2 + "px";
            }
          }, q.prototype._itemsOn = function(a2, b2, c3) {
            function d2() {
              return e2++, e2 === f2 && c3.call(g3), true;
            }
            for (var e2 = 0, f2 = a2.length, g3 = this, h2 = 0, i2 = a2.length; i2 > h2; h2++) {
              var j2 = a2[h2];
              j2.on(b2, d2);
            }
          }, q.prototype.ignore = function(a2) {
            var b2 = this.getItem(a2);
            b2 && (b2.isIgnored = true);
          }, q.prototype.unignore = function(a2) {
            var b2 = this.getItem(a2);
            b2 && delete b2.isIgnored;
          }, q.prototype.stamp = function(a2) {
            if (a2 = this._find(a2)) {
              this.stamps = this.stamps.concat(a2);
              for (var b2 = 0, c3 = a2.length; c3 > b2; b2++) {
                var d2 = a2[b2];
                this.ignore(d2);
              }
            }
          }, q.prototype.unstamp = function(a2) {
            if (a2 = this._find(a2))
              for (var b2 = 0, c3 = a2.length; c3 > b2; b2++) {
                var d2 = a2[b2];
                e(d2, this.stamps), this.unignore(d2);
              }
          }, q.prototype._find = function(a2) {
            return a2 ? ("string" == typeof a2 && (a2 = this.element.querySelectorAll(a2)), a2 = d(a2)) : void 0;
          }, q.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
              this._getBoundingRect();
              for (var a2 = 0, b2 = this.stamps.length; b2 > a2; a2++) {
                var c3 = this.stamps[a2];
                this._manageStamp(c3);
              }
            }
          }, q.prototype._getBoundingRect = function() {
            var a2 = this.element.getBoundingClientRect(), b2 = this.size;
            this._boundingRect = { left: a2.left + b2.paddingLeft + b2.borderLeftWidth, top: a2.top + b2.paddingTop + b2.borderTopWidth, right: a2.right - (b2.paddingRight + b2.borderRightWidth), bottom: a2.bottom - (b2.paddingBottom + b2.borderBottomWidth) };
          }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a2) {
            var b2 = a2.getBoundingClientRect(), c3 = this._boundingRect, d2 = n2(a2), e2 = { left: b2.left - c3.left - d2.marginLeft, top: b2.top - c3.top - d2.marginTop, right: c3.right - b2.right - d2.marginRight, bottom: c3.bottom - b2.bottom - d2.marginBottom };
            return e2;
          }, q.prototype.handleEvent = function(a2) {
            var b2 = "on" + a2.type;
            this[b2] && this[b2](a2);
          }, q.prototype.bindResize = function() {
            this.isResizeBound || (c2.bind(a, "resize", this), this.isResizeBound = true);
          }, q.prototype.unbindResize = function() {
            this.isResizeBound && c2.unbind(a, "resize", this), this.isResizeBound = false;
          }, q.prototype.onresize = function() {
            function a2() {
              b2.resize(), delete b2.resizeTimeout;
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b2 = this;
            this.resizeTimeout = setTimeout(a2, 100);
          }, q.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
          }, q.prototype.needsResizeLayout = function() {
            var a2 = n2(this.element), b2 = this.size && a2;
            return b2 && a2.innerWidth !== this.size.innerWidth;
          }, q.prototype.addItems = function(a2) {
            var b2 = this._itemize(a2);
            return b2.length && (this.items = this.items.concat(b2)), b2;
          }, q.prototype.appended = function(a2) {
            var b2 = this.addItems(a2);
            b2.length && (this.layoutItems(b2, true), this.reveal(b2));
          }, q.prototype.prepended = function(a2) {
            var b2 = this._itemize(a2);
            if (b2.length) {
              var c3 = this.items.slice(0);
              this.items = b2.concat(c3), this._resetLayout(), this._manageStamps(), this.layoutItems(b2, true), this.reveal(b2), this.layoutItems(c3);
            }
          }, q.prototype.reveal = function(a2) {
            var b2 = a2 && a2.length;
            if (b2)
              for (var c3 = 0; b2 > c3; c3++) {
                var d2 = a2[c3];
                d2.reveal();
              }
          }, q.prototype.hide = function(a2) {
            var b2 = a2 && a2.length;
            if (b2)
              for (var c3 = 0; b2 > c3; c3++) {
                var d2 = a2[c3];
                d2.hide();
              }
          }, q.prototype.getItem = function(a2) {
            for (var b2 = 0, c3 = this.items.length; c3 > b2; b2++) {
              var d2 = this.items[b2];
              if (d2.element === a2)
                return d2;
            }
          }, q.prototype.getItems = function(a2) {
            if (a2 && a2.length) {
              for (var b2 = [], c3 = 0, d2 = a2.length; d2 > c3; c3++) {
                var e2 = a2[c3], f2 = this.getItem(e2);
                f2 && b2.push(f2);
              }
              return b2;
            }
          }, q.prototype.remove = function(a2) {
            a2 = d(a2);
            var b2 = this.getItems(a2);
            if (b2 && b2.length) {
              this._itemsOn(b2, "remove", function() {
                this.emitEvent("removeComplete", [this, b2]);
              });
              for (var c3 = 0, f2 = b2.length; f2 > c3; c3++) {
                var g3 = b2[c3];
                g3.remove(), e(g3, this.items);
              }
            }
          }, q.prototype.destroy = function() {
            var a2 = this.element.style;
            a2.height = "", a2.position = "", a2.width = "";
            for (var b2 = 0, c3 = this.items.length; c3 > b2; b2++) {
              var d2 = this.items[b2];
              d2.destroy();
            }
            this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace);
          }, q.data = function(a2) {
            var b2 = a2 && a2.outlayerGUID;
            return b2 && s[b2];
          }, q.create = function(a2, c3) {
            function d2() {
              q.apply(this, arguments);
            }
            return Object.create ? d2.prototype = Object.create(q.prototype) : b(d2.prototype, q.prototype), d2.prototype.constructor = d2, d2.defaults = b({}, q.defaults), b(d2.defaults, c3), d2.prototype.settings = {}, d2.namespace = a2, d2.data = q.data, d2.Item = function() {
              p.apply(this, arguments);
            }, d2.Item.prototype = new p(), g2(function() {
              for (var b2 = f(a2), c4 = h.querySelectorAll(".js-" + b2), e2 = "data-" + b2 + "-options", g3 = 0, k2 = c4.length; k2 > g3; g3++) {
                var l3, m2 = c4[g3], n3 = m2.getAttribute(e2);
                try {
                  l3 = n3 && JSON.parse(n3);
                } catch (o2) {
                  i && i.error("Error parsing " + e2 + " on " + m2.nodeName.toLowerCase() + (m2.id ? "#" + m2.id : "") + ": " + o2);
                  continue;
                }
                var p2 = new d2(m2, l3);
                j && j.data(m2, a2, p2);
              }
            }), j && j.bridget && j.bridget(a2, d2), d2;
          }, q.Item = p, q;
        }
        var h = a.document, i = a.console, j = a.jQuery, k = function() {
        }, l = Object.prototype.toString, m = "object" == typeof HTMLElement ? function(a2) {
          return a2 instanceof HTMLElement;
        } : function(a2) {
          return a2 && "object" == typeof a2 && 1 === a2.nodeType && "string" == typeof a2.nodeName;
        }, n = Array.prototype.indexOf ? function(a2, b2) {
          return a2.indexOf(b2);
        } : function(a2, b2) {
          for (var c2 = 0, d2 = a2.length; d2 > c2; c2++)
            if (a2[c2] === b2)
              return c2;
          return -1;
        };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item);
      }(window), function(a) {
        function b(a2, b2) {
          var d = a2.create("masonry");
          return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a3 = this.cols;
            for (this.colYs = []; a3--; )
              this.colYs.push(0);
            this.maxY = 0;
          }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
              var a3 = this.items[0], c2 = a3 && a3.element;
              this.columnWidth = c2 && b2(c2).outerWidth || this.containerWidth;
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1);
          }, d.prototype.getContainerWidth = function() {
            var a3 = this.options.isFitWidth ? this.element.parentNode : this.element, c2 = b2(a3);
            this.containerWidth = c2 && c2.innerWidth;
          }, d.prototype._getItemLayoutPosition = function(a3) {
            a3.getSize();
            var b3 = a3.size.outerWidth % this.columnWidth, d2 = b3 && 1 > b3 ? "round" : "ceil", e = Math[d2](a3.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a3.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
              this.colYs[h + l] = j;
            return i;
          }, d.prototype._getColGroup = function(a3) {
            if (2 > a3)
              return this.colYs;
            for (var b3 = [], c2 = this.cols + 1 - a3, d2 = 0; c2 > d2; d2++) {
              var e = this.colYs.slice(d2, d2 + a3);
              b3[d2] = Math.max.apply(Math, e);
            }
            return b3;
          }, d.prototype._manageStamp = function(a3) {
            var c2 = b2(a3), d2 = this._getElementOffset(a3), e = this.options.isOriginLeft ? d2.left : d2.right, f = e + c2.outerWidth, g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d2.top : d2.bottom) + c2.outerHeight, j = g; h >= j; j++)
              this.colYs[j] = Math.max(i, this.colYs[j]);
          }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a3 = { height: this.maxY };
            return this.options.isFitWidth && (a3.width = this._getContainerFitWidth()), a3;
          }, d.prototype._getContainerFitWidth = function() {
            for (var a3 = 0, b3 = this.cols; --b3 && 0 === this.colYs[b3]; )
              a3++;
            return (this.cols - a3) * this.columnWidth - this.gutter;
          }, d.prototype.needsResizeLayout = function() {
            var a3 = this.containerWidth;
            return this.getContainerWidth(), a3 !== this.containerWidth;
          }, d;
        }
        var c = Array.prototype.indexOf ? function(a2, b2) {
          return a2.indexOf(b2);
        } : function(a2, b2) {
          for (var c2 = 0, d = a2.length; d > c2; c2++) {
            var e = a2[c2];
            if (e === b2)
              return c2;
          }
          return -1;
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize);
      }(window);
    }
  });

  // plugins/jquery.matchHeight-min.js
  var require_jquery_matchHeight_min = __commonJS({
    "plugins/jquery.matchHeight-min.js"(exports, module) {
      !function(t2) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t2) : "undefined" != typeof module && module.exports ? module.exports = t2(require_jquery()) : t2(jQuery);
      }(function(t2) {
        var e = -1, o = -1, n = function(t3) {
          return parseFloat(t3) || 0;
        }, a = function(e2) {
          var o2 = 1, a2 = t2(e2), i2 = null, r2 = [];
          return a2.each(function() {
            var e3 = t2(this), a3 = e3.offset().top - n(e3.css("margin-top")), s2 = r2.length > 0 ? r2[r2.length - 1] : null;
            null === s2 ? r2.push(e3) : Math.floor(Math.abs(i2 - a3)) <= o2 ? r2[r2.length - 1] = s2.add(e3) : r2.push(e3), i2 = a3;
          }), r2;
        }, i = function(e2) {
          var o2 = {
            byRow: true,
            property: "height",
            target: null,
            remove: false
          };
          return "object" == typeof e2 ? t2.extend(o2, e2) : ("boolean" == typeof e2 ? o2.byRow = e2 : "remove" === e2 && (o2.remove = true), o2);
        }, r = t2.fn.matchHeight = function(e2) {
          var o2 = i(e2);
          if (o2.remove) {
            var n2 = this;
            return this.css(o2.property, ""), t2.each(r._groups, function(t3, e3) {
              e3.elements = e3.elements.not(n2);
            }), this;
          }
          return this.length <= 1 && !o2.target ? this : (r._groups.push({ elements: this, options: o2 }), r._apply(this, o2), this);
        };
        r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = false, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function(e2, o2) {
          var s2 = i(o2), h2 = t2(e2), l = [h2], c = t2(window).scrollTop(), p = t2("html").outerHeight(true), u = h2.parents().filter(":hidden");
          return u.each(function() {
            var e3 = t2(this);
            e3.data("style-cache", e3.attr("style"));
          }), u.css("display", "block"), s2.byRow && !s2.target && (h2.each(function() {
            var e3 = t2(this), o3 = e3.css("display");
            "inline-block" !== o3 && "flex" !== o3 && "inline-flex" !== o3 && (o3 = "block"), e3.data("style-cache", e3.attr("style")), e3.css({
              display: o3,
              "padding-top": "0",
              "padding-bottom": "0",
              "margin-top": "0",
              "margin-bottom": "0",
              "border-top-width": "0",
              "border-bottom-width": "0",
              height: "100px",
              overflow: "hidden"
            });
          }), l = a(h2), h2.each(function() {
            var e3 = t2(this);
            e3.attr("style", e3.data("style-cache") || "");
          })), t2.each(l, function(e3, o3) {
            var a2 = t2(o3), i2 = 0;
            if (s2.target)
              i2 = s2.target.outerHeight(false);
            else {
              if (s2.byRow && a2.length <= 1)
                return void a2.css(s2.property, "");
              a2.each(function() {
                var e4 = t2(this), o4 = e4.attr("style"), n2 = e4.css("display");
                "inline-block" !== n2 && "flex" !== n2 && "inline-flex" !== n2 && (n2 = "block");
                var a3 = {
                  display: n2
                };
                a3[s2.property] = "", e4.css(a3), e4.outerHeight(false) > i2 && (i2 = e4.outerHeight(false)), o4 ? e4.attr("style", o4) : e4.css("display", "");
              });
            }
            a2.each(function() {
              var e4 = t2(this), o4 = 0;
              s2.target && e4.is(s2.target) || ("border-box" !== e4.css("box-sizing") && (o4 += n(e4.css("border-top-width")) + n(e4.css("border-bottom-width")), o4 += n(e4.css("padding-top")) + n(e4.css("padding-bottom"))), e4.css(s2.property, i2 - o4 + "px"));
            });
          }), u.each(function() {
            var e3 = t2(this);
            e3.attr("style", e3.data("style-cache") || null);
          }), r._maintainScroll && t2(window).scrollTop(c / p * t2("html").outerHeight(true)), this;
        }, r._applyDataApi = function() {
          var e2 = {};
          t2("[data-match-height], [data-mh]").each(function() {
            var o2 = t2(this), n2 = o2.attr("data-mh") || o2.attr("data-match-height");
            n2 in e2 ? e2[n2] = e2[n2].add(o2) : e2[n2] = o2;
          }), t2.each(e2, function() {
            this.matchHeight(true);
          });
        };
        var s = function(e2) {
          r._beforeUpdate && r._beforeUpdate(e2, r._groups), t2.each(r._groups, function() {
            r._apply(this.elements, this.options);
          }), r._afterUpdate && r._afterUpdate(e2, r._groups);
        };
        r._update = function(n2, a2) {
          if (a2 && "resize" === a2.type) {
            var i2 = t2(window).width();
            if (i2 === e)
              return;
            e = i2;
          }
          n2 ? o === -1 && (o = setTimeout(function() {
            s(a2), o = -1;
          }, r._throttle)) : s(a2);
        }, t2(r._applyDataApi);
        var h = t2.fn.on ? "on" : "bind";
        t2(window)[h]("load", function(t3) {
          r._update(false, t3);
        }), t2(window)[h]("resize orientationchange", function(t3) {
          r._update(true, t3);
        });
      });
    }
  });

  // plugins/slick/slick/slick.min.js
  var require_slick_min = __commonJS({
    "plugins/slick/slick/slick.min.js"(exports, module) {
      !function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require_jquery()) : a(jQuery);
      }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
          function c(c2, d) {
            var f, e = this;
            e.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: a(c2), appendDots: a(c2), arrows: true, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: false, autoplaySpeed: 3e3, centerMode: false, centerPadding: "50px", cssEase: "ease", customPaging: function(b3, c3) {
              return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c3 + 1);
            }, dots: false, dotsClass: "slick-dots", draggable: true, easing: "linear", edgeFriction: 0.35, fade: false, focusOnSelect: false, infinite: true, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: "window", responsive: null, rows: 1, rtl: false, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1e3 }, e.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = false, e.focussed = false, e.interrupted = false, e.hidden = "hidden", e.paused = true, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = true, e.$slider = a(c2), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c2).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b2++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(true);
          }
          var b2 = 0;
          return c;
        }(), b.prototype.activateADA = function() {
          var a2 = this;
          a2.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b2, c, d) {
          var e = this;
          if ("boolean" == typeof c)
            d = c, c = null;
          else if (0 > c || c >= e.slideCount)
            return false;
          e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b2).appendTo(e.$slideTrack) : d ? a(b2).insertBefore(e.$slides.eq(c)) : a(b2).insertAfter(e.$slides.eq(c)) : d === true ? a(b2).prependTo(e.$slideTrack) : a(b2).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b3, c2) {
            a(c2).attr("data-slick-index", b3);
          }), e.$slidesCache = e.$slides, e.reinit();
        }, b.prototype.animateHeight = function() {
          var a2 = this;
          if (1 === a2.options.slidesToShow && a2.options.adaptiveHeight === true && a2.options.vertical === false) {
            var b2 = a2.$slides.eq(a2.currentSlide).outerHeight(true);
            a2.$list.animate({ height: b2 }, a2.options.speed);
          }
        }, b.prototype.animateSlide = function(b2, c) {
          var d = {}, e = this;
          e.animateHeight(), e.options.rtl === true && e.options.vertical === false && (b2 = -b2), e.transformsEnabled === false ? e.options.vertical === false ? e.$slideTrack.animate({ left: b2 }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b2 }, e.options.speed, e.options.easing, c) : e.cssTransitions === false ? (e.options.rtl === true && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b2 }, { duration: e.options.speed, easing: e.options.easing, step: function(a2) {
            a2 = Math.ceil(a2), e.options.vertical === false ? (d[e.animType] = "translate(" + a2 + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a2 + "px)", e.$slideTrack.css(d));
          }, complete: function() {
            c && c.call();
          } })) : (e.applyTransition(), b2 = Math.ceil(b2), e.options.vertical === false ? d[e.animType] = "translate3d(" + b2 + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b2 + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call();
          }, e.options.speed));
        }, b.prototype.getNavTarget = function() {
          var b2 = this, c = b2.options.asNavFor;
          return c && null !== c && (c = a(c).not(b2.$slider)), c;
        }, b.prototype.asNavFor = function(b2) {
          var c = this, d = c.getNavTarget();
          null !== d && "object" == typeof d && d.each(function() {
            var c2 = a(this).slick("getSlick");
            c2.unslicked || c2.slideHandler(b2, true);
          });
        }, b.prototype.applyTransition = function(a2) {
          var b2 = this, c = {};
          b2.options.fade === false ? c[b2.transitionType] = b2.transformType + " " + b2.options.speed + "ms " + b2.options.cssEase : c[b2.transitionType] = "opacity " + b2.options.speed + "ms " + b2.options.cssEase, b2.options.fade === false ? b2.$slideTrack.css(c) : b2.$slides.eq(a2).css(c);
        }, b.prototype.autoPlay = function() {
          var a2 = this;
          a2.autoPlayClear(), a2.slideCount > a2.options.slidesToShow && (a2.autoPlayTimer = setInterval(a2.autoPlayIterator, a2.options.autoplaySpeed));
        }, b.prototype.autoPlayClear = function() {
          var a2 = this;
          a2.autoPlayTimer && clearInterval(a2.autoPlayTimer);
        }, b.prototype.autoPlayIterator = function() {
          var a2 = this, b2 = a2.currentSlide + a2.options.slidesToScroll;
          a2.paused || a2.interrupted || a2.focussed || (a2.options.infinite === false && (1 === a2.direction && a2.currentSlide + 1 === a2.slideCount - 1 ? a2.direction = 0 : 0 === a2.direction && (b2 = a2.currentSlide - a2.options.slidesToScroll, a2.currentSlide - 1 === 0 && (a2.direction = 1))), a2.slideHandler(b2));
        }, b.prototype.buildArrows = function() {
          var b2 = this;
          b2.options.arrows === true && (b2.$prevArrow = a(b2.options.prevArrow).addClass("slick-arrow"), b2.$nextArrow = a(b2.options.nextArrow).addClass("slick-arrow"), b2.slideCount > b2.options.slidesToShow ? (b2.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b2.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b2.htmlExpr.test(b2.options.prevArrow) && b2.$prevArrow.prependTo(b2.options.appendArrows), b2.htmlExpr.test(b2.options.nextArrow) && b2.$nextArrow.appendTo(b2.options.appendArrows), b2.options.infinite !== true && b2.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b2.$prevArrow.add(b2.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
        }, b.prototype.buildDots = function() {
          var c, d, b2 = this;
          if (b2.options.dots === true && b2.slideCount > b2.options.slidesToShow) {
            for (b2.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b2.options.dotsClass), c = 0; c <= b2.getDotCount(); c += 1)
              d.append(a("<li />").append(b2.options.customPaging.call(this, b2, c)));
            b2.$dots = d.appendTo(b2.options.appendDots), b2.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
          }
        }, b.prototype.buildOut = function() {
          var b2 = this;
          b2.$slides = b2.$slider.children(b2.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b2.slideCount = b2.$slides.length, b2.$slides.each(function(b3, c) {
            a(c).attr("data-slick-index", b3).data("originalStyling", a(c).attr("style") || "");
          }), b2.$slider.addClass("slick-slider"), b2.$slideTrack = 0 === b2.slideCount ? a('<div class="slick-track"/>').appendTo(b2.$slider) : b2.$slides.wrapAll('<div class="slick-track"/>').parent(), b2.$list = b2.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b2.$slideTrack.css("opacity", 0), (b2.options.centerMode === true || b2.options.swipeToSlide === true) && (b2.options.slidesToScroll = 1), a("img[data-lazy]", b2.$slider).not("[src]").addClass("slick-loading"), b2.setupInfinite(), b2.buildArrows(), b2.buildDots(), b2.updateDots(), b2.setSlideClasses("number" == typeof b2.currentSlide ? b2.currentSlide : 0), b2.options.draggable === true && b2.$list.addClass("draggable");
        }, b.prototype.buildRows = function() {
          var b2, c, d, e, f, g, h, a2 = this;
          if (e = document.createDocumentFragment(), g = a2.$slider.children(), a2.options.rows > 1) {
            for (h = a2.options.slidesPerRow * a2.options.rows, f = Math.ceil(g.length / h), b2 = 0; f > b2; b2++) {
              var i = document.createElement("div");
              for (c = 0; c < a2.options.rows; c++) {
                var j = document.createElement("div");
                for (d = 0; d < a2.options.slidesPerRow; d++) {
                  var k = b2 * h + (c * a2.options.slidesPerRow + d);
                  g.get(k) && j.appendChild(g.get(k));
                }
                i.appendChild(j);
              }
              e.appendChild(i);
            }
            a2.$slider.empty().append(e), a2.$slider.children().children().children().css({ width: 100 / a2.options.slidesPerRow + "%", display: "inline-block" });
          }
        }, b.prototype.checkResponsive = function(b2, c) {
          var e, f, g, d = this, h = false, i = d.$slider.width(), j = window.innerWidth || a(window).width();
          if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
              d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === false ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b2 === true && (d.currentSlide = d.options.initialSlide), d.refresh(b2)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b2 === true && (d.currentSlide = d.options.initialSlide), d.refresh(b2)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b2 === true && (d.currentSlide = d.options.initialSlide), d.refresh(b2), h = f), b2 || h === false || d.$slider.trigger("breakpoint", [d, h]);
          }
        }, b.prototype.changeSlide = function(b2, c) {
          var f, g, h, d = this, e = a(b2.currentTarget);
          switch (e.is("a") && b2.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b2.data.message) {
            case "previous":
              g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, false, c);
              break;
            case "next":
              g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, false, c);
              break;
            case "index":
              var i = 0 === b2.data.index ? 0 : b2.data.index || e.index() * d.options.slidesToScroll;
              d.slideHandler(d.checkNavigable(i), false, c), e.children().trigger("focus");
              break;
            default:
              return;
          }
        }, b.prototype.checkNavigable = function(a2) {
          var c, d, b2 = this;
          if (c = b2.getNavigableIndexes(), d = 0, a2 > c[c.length - 1])
            a2 = c[c.length - 1];
          else
            for (var e in c) {
              if (a2 < c[e]) {
                a2 = d;
                break;
              }
              d = c[e];
            }
          return a2;
        }, b.prototype.cleanUpEvents = function() {
          var b2 = this;
          b2.options.dots && null !== b2.$dots && a("li", b2.$dots).off("click.slick", b2.changeSlide).off("mouseenter.slick", a.proxy(b2.interrupt, b2, true)).off("mouseleave.slick", a.proxy(b2.interrupt, b2, false)), b2.$slider.off("focus.slick blur.slick"), b2.options.arrows === true && b2.slideCount > b2.options.slidesToShow && (b2.$prevArrow && b2.$prevArrow.off("click.slick", b2.changeSlide), b2.$nextArrow && b2.$nextArrow.off("click.slick", b2.changeSlide)), b2.$list.off("touchstart.slick mousedown.slick", b2.swipeHandler), b2.$list.off("touchmove.slick mousemove.slick", b2.swipeHandler), b2.$list.off("touchend.slick mouseup.slick", b2.swipeHandler), b2.$list.off("touchcancel.slick mouseleave.slick", b2.swipeHandler), b2.$list.off("click.slick", b2.clickHandler), a(document).off(b2.visibilityChange, b2.visibility), b2.cleanUpSlideEvents(), b2.options.accessibility === true && b2.$list.off("keydown.slick", b2.keyHandler), b2.options.focusOnSelect === true && a(b2.$slideTrack).children().off("click.slick", b2.selectHandler), a(window).off("orientationchange.slick.slick-" + b2.instanceUid, b2.orientationChange), a(window).off("resize.slick.slick-" + b2.instanceUid, b2.resize), a("[draggable!=true]", b2.$slideTrack).off("dragstart", b2.preventDefault), a(window).off("load.slick.slick-" + b2.instanceUid, b2.setPosition), a(document).off("ready.slick.slick-" + b2.instanceUid, b2.setPosition);
        }, b.prototype.cleanUpSlideEvents = function() {
          var b2 = this;
          b2.$list.off("mouseenter.slick", a.proxy(b2.interrupt, b2, true)), b2.$list.off("mouseleave.slick", a.proxy(b2.interrupt, b2, false));
        }, b.prototype.cleanUpRows = function() {
          var b2, a2 = this;
          a2.options.rows > 1 && (b2 = a2.$slides.children().children(), b2.removeAttr("style"), a2.$slider.empty().append(b2));
        }, b.prototype.clickHandler = function(a2) {
          var b2 = this;
          b2.shouldClick === false && (a2.stopImmediatePropagation(), a2.stopPropagation(), a2.preventDefault());
        }, b.prototype.destroy = function(b2) {
          var c = this;
          c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"));
          }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = true, b2 || c.$slider.trigger("destroy", [c]);
        }, b.prototype.disableTransition = function(a2) {
          var b2 = this, c = {};
          c[b2.transitionType] = "", b2.options.fade === false ? b2.$slideTrack.css(c) : b2.$slides.eq(a2).css(c);
        }, b.prototype.fadeSlide = function(a2, b2) {
          var c = this;
          c.cssTransitions === false ? (c.$slides.eq(a2).css({ zIndex: c.options.zIndex }), c.$slides.eq(a2).animate({ opacity: 1 }, c.options.speed, c.options.easing, b2)) : (c.applyTransition(a2), c.$slides.eq(a2).css({ opacity: 1, zIndex: c.options.zIndex }), b2 && setTimeout(function() {
            c.disableTransition(a2), b2.call();
          }, c.options.speed));
        }, b.prototype.fadeSlideOut = function(a2) {
          var b2 = this;
          b2.cssTransitions === false ? b2.$slides.eq(a2).animate({ opacity: 0, zIndex: b2.options.zIndex - 2 }, b2.options.speed, b2.options.easing) : (b2.applyTransition(a2), b2.$slides.eq(a2).css({ opacity: 0, zIndex: b2.options.zIndex - 2 }));
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a2) {
          var b2 = this;
          null !== a2 && (b2.$slidesCache = b2.$slides, b2.unload(), b2.$slideTrack.children(this.options.slide).detach(), b2.$slidesCache.filter(a2).appendTo(b2.$slideTrack), b2.reinit());
        }, b.prototype.focusHandler = function() {
          var b2 = this;
          b2.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
              b2.options.pauseOnFocus && (b2.focussed = d.is(":focus"), b2.autoPlay());
            }, 0);
          });
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
          var a2 = this;
          return a2.currentSlide;
        }, b.prototype.getDotCount = function() {
          var a2 = this, b2 = 0, c = 0, d = 0;
          if (a2.options.infinite === true)
            for (; b2 < a2.slideCount; )
              ++d, b2 = c + a2.options.slidesToScroll, c += a2.options.slidesToScroll <= a2.options.slidesToShow ? a2.options.slidesToScroll : a2.options.slidesToShow;
          else if (a2.options.centerMode === true)
            d = a2.slideCount;
          else if (a2.options.asNavFor)
            for (; b2 < a2.slideCount; )
              ++d, b2 = c + a2.options.slidesToScroll, c += a2.options.slidesToScroll <= a2.options.slidesToShow ? a2.options.slidesToScroll : a2.options.slidesToShow;
          else
            d = 1 + Math.ceil((a2.slideCount - a2.options.slidesToShow) / a2.options.slidesToScroll);
          return d - 1;
        }, b.prototype.getLeft = function(a2) {
          var c, d, f, b2 = this, e = 0;
          return b2.slideOffset = 0, d = b2.$slides.first().outerHeight(true), b2.options.infinite === true ? (b2.slideCount > b2.options.slidesToShow && (b2.slideOffset = b2.slideWidth * b2.options.slidesToShow * -1, e = d * b2.options.slidesToShow * -1), b2.slideCount % b2.options.slidesToScroll !== 0 && a2 + b2.options.slidesToScroll > b2.slideCount && b2.slideCount > b2.options.slidesToShow && (a2 > b2.slideCount ? (b2.slideOffset = (b2.options.slidesToShow - (a2 - b2.slideCount)) * b2.slideWidth * -1, e = (b2.options.slidesToShow - (a2 - b2.slideCount)) * d * -1) : (b2.slideOffset = b2.slideCount % b2.options.slidesToScroll * b2.slideWidth * -1, e = b2.slideCount % b2.options.slidesToScroll * d * -1))) : a2 + b2.options.slidesToShow > b2.slideCount && (b2.slideOffset = (a2 + b2.options.slidesToShow - b2.slideCount) * b2.slideWidth, e = (a2 + b2.options.slidesToShow - b2.slideCount) * d), b2.slideCount <= b2.options.slidesToShow && (b2.slideOffset = 0, e = 0), b2.options.centerMode === true && b2.options.infinite === true ? b2.slideOffset += b2.slideWidth * Math.floor(b2.options.slidesToShow / 2) - b2.slideWidth : b2.options.centerMode === true && (b2.slideOffset = 0, b2.slideOffset += b2.slideWidth * Math.floor(b2.options.slidesToShow / 2)), c = b2.options.vertical === false ? a2 * b2.slideWidth * -1 + b2.slideOffset : a2 * d * -1 + e, b2.options.variableWidth === true && (f = b2.slideCount <= b2.options.slidesToShow || b2.options.infinite === false ? b2.$slideTrack.children(".slick-slide").eq(a2) : b2.$slideTrack.children(".slick-slide").eq(a2 + b2.options.slidesToShow), c = b2.options.rtl === true ? f[0] ? -1 * (b2.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b2.options.centerMode === true && (f = b2.slideCount <= b2.options.slidesToShow || b2.options.infinite === false ? b2.$slideTrack.children(".slick-slide").eq(a2) : b2.$slideTrack.children(".slick-slide").eq(a2 + b2.options.slidesToShow + 1), c = b2.options.rtl === true ? f[0] ? -1 * (b2.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b2.$list.width() - f.outerWidth()) / 2)), c;
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a2) {
          var b2 = this;
          return b2.options[a2];
        }, b.prototype.getNavigableIndexes = function() {
          var e, a2 = this, b2 = 0, c = 0, d = [];
          for (a2.options.infinite === false ? e = a2.slideCount : (b2 = -1 * a2.options.slidesToScroll, c = -1 * a2.options.slidesToScroll, e = 2 * a2.slideCount); e > b2; )
            d.push(b2), b2 = c + a2.options.slidesToScroll, c += a2.options.slidesToScroll <= a2.options.slidesToShow ? a2.options.slidesToScroll : a2.options.slidesToShow;
          return d;
        }, b.prototype.getSlick = function() {
          return this;
        }, b.prototype.getSlideCount = function() {
          var c, d, e, b2 = this;
          return e = b2.options.centerMode === true ? b2.slideWidth * Math.floor(b2.options.slidesToShow / 2) : 0, b2.options.swipeToSlide === true ? (b2.$slideTrack.find(".slick-slide").each(function(c2, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b2.swipeLeft ? (d = f, false) : void 0;
          }), c = Math.abs(a(d).attr("data-slick-index") - b2.currentSlide) || 1) : b2.options.slidesToScroll;
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a2, b2) {
          var c = this;
          c.changeSlide({ data: { message: "index", index: parseInt(a2) } }, b2);
        }, b.prototype.init = function(b2) {
          var c = this;
          a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(true), c.focusHandler()), b2 && c.$slider.trigger("init", [c]), c.options.accessibility === true && c.initADA(), c.options.autoplay && (c.paused = false, c.autoPlay());
        }, b.prototype.initADA = function() {
          var b2 = this;
          b2.$slides.add(b2.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b2.$slideTrack.attr("role", "listbox"), b2.$slides.not(b2.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b2.instanceUid + c });
          }), null !== b2.$dots && b2.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b2.instanceUid + c, id: "slick-slide" + b2.instanceUid + c });
          }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b2.activateADA();
        }, b.prototype.initArrowEvents = function() {
          var a2 = this;
          a2.options.arrows === true && a2.slideCount > a2.options.slidesToShow && (a2.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a2.changeSlide), a2.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a2.changeSlide));
        }, b.prototype.initDotEvents = function() {
          var b2 = this;
          b2.options.dots === true && b2.slideCount > b2.options.slidesToShow && a("li", b2.$dots).on("click.slick", { message: "index" }, b2.changeSlide), b2.options.dots === true && b2.options.pauseOnDotsHover === true && a("li", b2.$dots).on("mouseenter.slick", a.proxy(b2.interrupt, b2, true)).on("mouseleave.slick", a.proxy(b2.interrupt, b2, false));
        }, b.prototype.initSlideEvents = function() {
          var b2 = this;
          b2.options.pauseOnHover && (b2.$list.on("mouseenter.slick", a.proxy(b2.interrupt, b2, true)), b2.$list.on("mouseleave.slick", a.proxy(b2.interrupt, b2, false)));
        }, b.prototype.initializeEvents = function() {
          var b2 = this;
          b2.initArrowEvents(), b2.initDotEvents(), b2.initSlideEvents(), b2.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b2.swipeHandler), b2.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b2.swipeHandler), b2.$list.on("touchend.slick mouseup.slick", { action: "end" }, b2.swipeHandler), b2.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b2.swipeHandler), b2.$list.on("click.slick", b2.clickHandler), a(document).on(b2.visibilityChange, a.proxy(b2.visibility, b2)), b2.options.accessibility === true && b2.$list.on("keydown.slick", b2.keyHandler), b2.options.focusOnSelect === true && a(b2.$slideTrack).children().on("click.slick", b2.selectHandler), a(window).on("orientationchange.slick.slick-" + b2.instanceUid, a.proxy(b2.orientationChange, b2)), a(window).on("resize.slick.slick-" + b2.instanceUid, a.proxy(b2.resize, b2)), a("[draggable!=true]", b2.$slideTrack).on("dragstart", b2.preventDefault), a(window).on("load.slick.slick-" + b2.instanceUid, b2.setPosition), a(document).on("ready.slick.slick-" + b2.instanceUid, b2.setPosition);
        }, b.prototype.initUI = function() {
          var a2 = this;
          a2.options.arrows === true && a2.slideCount > a2.options.slidesToShow && (a2.$prevArrow.show(), a2.$nextArrow.show()), a2.options.dots === true && a2.slideCount > a2.options.slidesToShow && a2.$dots.show();
        }, b.prototype.keyHandler = function(a2) {
          var b2 = this;
          a2.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a2.keyCode && b2.options.accessibility === true ? b2.changeSlide({ data: { message: b2.options.rtl === true ? "next" : "previous" } }) : 39 === a2.keyCode && b2.options.accessibility === true && b2.changeSlide({ data: { message: b2.options.rtl === true ? "previous" : "next" } }));
        }, b.prototype.lazyLoad = function() {
          function g(c2) {
            a("img[data-lazy]", c2).each(function() {
              var c3 = a(this), d2 = a(this).attr("data-lazy"), e2 = document.createElement("img");
              e2.onload = function() {
                c3.animate({ opacity: 0 }, 100, function() {
                  c3.attr("src", d2).animate({ opacity: 1 }, 200, function() {
                    c3.removeAttr("data-lazy").removeClass("slick-loading");
                  }), b2.$slider.trigger("lazyLoaded", [b2, c3, d2]);
                });
              }, e2.onerror = function() {
                c3.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b2.$slider.trigger("lazyLoadError", [b2, c3, d2]);
              }, e2.src = d2;
            });
          }
          var c, d, e, f, b2 = this;
          b2.options.centerMode === true ? b2.options.infinite === true ? (e = b2.currentSlide + (b2.options.slidesToShow / 2 + 1), f = e + b2.options.slidesToShow + 2) : (e = Math.max(0, b2.currentSlide - (b2.options.slidesToShow / 2 + 1)), f = 2 + (b2.options.slidesToShow / 2 + 1) + b2.currentSlide) : (e = b2.options.infinite ? b2.options.slidesToShow + b2.currentSlide : b2.currentSlide, f = Math.ceil(e + b2.options.slidesToShow), b2.options.fade === true && (e > 0 && e--, f <= b2.slideCount && f++)), c = b2.$slider.find(".slick-slide").slice(e, f), g(c), b2.slideCount <= b2.options.slidesToShow ? (d = b2.$slider.find(".slick-slide"), g(d)) : b2.currentSlide >= b2.slideCount - b2.options.slidesToShow ? (d = b2.$slider.find(".slick-cloned").slice(0, b2.options.slidesToShow), g(d)) : 0 === b2.currentSlide && (d = b2.$slider.find(".slick-cloned").slice(-1 * b2.options.slidesToShow), g(d));
        }, b.prototype.loadSlider = function() {
          var a2 = this;
          a2.setPosition(), a2.$slideTrack.css({ opacity: 1 }), a2.$slider.removeClass("slick-loading"), a2.initUI(), "progressive" === a2.options.lazyLoad && a2.progressiveLazyLoad();
        }, b.prototype.next = b.prototype.slickNext = function() {
          var a2 = this;
          a2.changeSlide({ data: { message: "next" } });
        }, b.prototype.orientationChange = function() {
          var a2 = this;
          a2.checkResponsive(), a2.setPosition();
        }, b.prototype.pause = b.prototype.slickPause = function() {
          var a2 = this;
          a2.autoPlayClear(), a2.paused = true;
        }, b.prototype.play = b.prototype.slickPlay = function() {
          var a2 = this;
          a2.autoPlay(), a2.options.autoplay = true, a2.paused = false, a2.focussed = false, a2.interrupted = false;
        }, b.prototype.postSlide = function(a2) {
          var b2 = this;
          b2.unslicked || (b2.$slider.trigger("afterChange", [b2, a2]), b2.animating = false, b2.setPosition(), b2.swipeLeft = null, b2.options.autoplay && b2.autoPlay(), b2.options.accessibility === true && b2.initADA());
        }, b.prototype.prev = b.prototype.slickPrev = function() {
          var a2 = this;
          a2.changeSlide({ data: { message: "previous" } });
        }, b.prototype.preventDefault = function(a2) {
          a2.preventDefault();
        }, b.prototype.progressiveLazyLoad = function(b2) {
          b2 = b2 || 1;
          var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
          d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === true && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
          }, g.onerror = function() {
            3 > b2 ? setTimeout(function() {
              c.progressiveLazyLoad(b2 + 1);
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
          }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
        }, b.prototype.refresh = function(b2) {
          var d, e, c = this;
          e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(true), a.extend(c, c.initials, { currentSlide: d }), c.init(), b2 || c.changeSlide({ data: { message: "index", index: d } }, false);
        }, b.prototype.registerBreakpoints = function() {
          var c, d, e, b2 = this, f = b2.options.responsive || null;
          if ("array" === a.type(f) && f.length) {
            b2.respondTo = b2.options.respondTo || "window";
            for (c in f)
              if (e = b2.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                for (; e >= 0; )
                  b2.breakpoints[e] && b2.breakpoints[e] === d && b2.breakpoints.splice(e, 1), e--;
                b2.breakpoints.push(d), b2.breakpointSettings[d] = f[c].settings;
              }
            b2.breakpoints.sort(function(a2, c2) {
              return b2.options.mobileFirst ? a2 - c2 : c2 - a2;
            });
          }
        }, b.prototype.reinit = function() {
          var b2 = this;
          b2.$slides = b2.$slideTrack.children(b2.options.slide).addClass("slick-slide"), b2.slideCount = b2.$slides.length, b2.currentSlide >= b2.slideCount && 0 !== b2.currentSlide && (b2.currentSlide = b2.currentSlide - b2.options.slidesToScroll), b2.slideCount <= b2.options.slidesToShow && (b2.currentSlide = 0), b2.registerBreakpoints(), b2.setProps(), b2.setupInfinite(), b2.buildArrows(), b2.updateArrows(), b2.initArrowEvents(), b2.buildDots(), b2.updateDots(), b2.initDotEvents(), b2.cleanUpSlideEvents(), b2.initSlideEvents(), b2.checkResponsive(false, true), b2.options.focusOnSelect === true && a(b2.$slideTrack).children().on("click.slick", b2.selectHandler), b2.setSlideClasses("number" == typeof b2.currentSlide ? b2.currentSlide : 0), b2.setPosition(), b2.focusHandler(), b2.paused = !b2.options.autoplay, b2.autoPlay(), b2.$slider.trigger("reInit", [b2]);
        }, b.prototype.resize = function() {
          var b2 = this;
          a(window).width() !== b2.windowWidth && (clearTimeout(b2.windowDelay), b2.windowDelay = window.setTimeout(function() {
            b2.windowWidth = a(window).width(), b2.checkResponsive(), b2.unslicked || b2.setPosition();
          }, 50));
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a2, b2, c) {
          var d = this;
          return "boolean" == typeof a2 ? (b2 = a2, a2 = b2 === true ? 0 : d.slideCount - 1) : a2 = b2 === true ? --a2 : a2, d.slideCount < 1 || 0 > a2 || a2 > d.slideCount - 1 ? false : (d.unload(), c === true ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a2).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
        }, b.prototype.setCSS = function(a2) {
          var d, e, b2 = this, c = {};
          b2.options.rtl === true && (a2 = -a2), d = "left" == b2.positionProp ? Math.ceil(a2) + "px" : "0px", e = "top" == b2.positionProp ? Math.ceil(a2) + "px" : "0px", c[b2.positionProp] = a2, b2.transformsEnabled === false ? b2.$slideTrack.css(c) : (c = {}, b2.cssTransitions === false ? (c[b2.animType] = "translate(" + d + ", " + e + ")", b2.$slideTrack.css(c)) : (c[b2.animType] = "translate3d(" + d + ", " + e + ", 0px)", b2.$slideTrack.css(c)));
        }, b.prototype.setDimensions = function() {
          var a2 = this;
          a2.options.vertical === false ? a2.options.centerMode === true && a2.$list.css({ padding: "0px " + a2.options.centerPadding }) : (a2.$list.height(a2.$slides.first().outerHeight(true) * a2.options.slidesToShow), a2.options.centerMode === true && a2.$list.css({ padding: a2.options.centerPadding + " 0px" })), a2.listWidth = a2.$list.width(), a2.listHeight = a2.$list.height(), a2.options.vertical === false && a2.options.variableWidth === false ? (a2.slideWidth = Math.ceil(a2.listWidth / a2.options.slidesToShow), a2.$slideTrack.width(Math.ceil(a2.slideWidth * a2.$slideTrack.children(".slick-slide").length))) : a2.options.variableWidth === true ? a2.$slideTrack.width(5e3 * a2.slideCount) : (a2.slideWidth = Math.ceil(a2.listWidth), a2.$slideTrack.height(Math.ceil(a2.$slides.first().outerHeight(true) * a2.$slideTrack.children(".slick-slide").length)));
          var b2 = a2.$slides.first().outerWidth(true) - a2.$slides.first().width();
          a2.options.variableWidth === false && a2.$slideTrack.children(".slick-slide").width(a2.slideWidth - b2);
        }, b.prototype.setFade = function() {
          var c, b2 = this;
          b2.$slides.each(function(d, e) {
            c = b2.slideWidth * d * -1, b2.options.rtl === true ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b2.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b2.options.zIndex - 2, opacity: 0 });
          }), b2.$slides.eq(b2.currentSlide).css({ zIndex: b2.options.zIndex - 1, opacity: 1 });
        }, b.prototype.setHeight = function() {
          var a2 = this;
          if (1 === a2.options.slidesToShow && a2.options.adaptiveHeight === true && a2.options.vertical === false) {
            var b2 = a2.$slides.eq(a2.currentSlide).outerHeight(true);
            a2.$list.css("height", b2);
          }
        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
          var c, d, e, f, h, b2 = this, g = false;
          if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h)
            b2.options[e] = f;
          else if ("multiple" === h)
            a.each(e, function(a2, c2) {
              b2.options[a2] = c2;
            });
          else if ("responsive" === h)
            for (d in f)
              if ("array" !== a.type(b2.options.responsive))
                b2.options.responsive = [f[d]];
              else {
                for (c = b2.options.responsive.length - 1; c >= 0; )
                  b2.options.responsive[c].breakpoint === f[d].breakpoint && b2.options.responsive.splice(c, 1), c--;
                b2.options.responsive.push(f[d]);
              }
          g && (b2.unload(), b2.reinit());
        }, b.prototype.setPosition = function() {
          var a2 = this;
          a2.setDimensions(), a2.setHeight(), a2.options.fade === false ? a2.setCSS(a2.getLeft(a2.currentSlide)) : a2.setFade(), a2.$slider.trigger("setPosition", [a2]);
        }, b.prototype.setProps = function() {
          var a2 = this, b2 = document.body.style;
          a2.positionProp = a2.options.vertical === true ? "top" : "left", "top" === a2.positionProp ? a2.$slider.addClass("slick-vertical") : a2.$slider.removeClass("slick-vertical"), (void 0 !== b2.WebkitTransition || void 0 !== b2.MozTransition || void 0 !== b2.msTransition) && a2.options.useCSS === true && (a2.cssTransitions = true), a2.options.fade && ("number" == typeof a2.options.zIndex ? a2.options.zIndex < 3 && (a2.options.zIndex = 3) : a2.options.zIndex = a2.defaults.zIndex), void 0 !== b2.OTransform && (a2.animType = "OTransform", a2.transformType = "-o-transform", a2.transitionType = "OTransition", void 0 === b2.perspectiveProperty && void 0 === b2.webkitPerspective && (a2.animType = false)), void 0 !== b2.MozTransform && (a2.animType = "MozTransform", a2.transformType = "-moz-transform", a2.transitionType = "MozTransition", void 0 === b2.perspectiveProperty && void 0 === b2.MozPerspective && (a2.animType = false)), void 0 !== b2.webkitTransform && (a2.animType = "webkitTransform", a2.transformType = "-webkit-transform", a2.transitionType = "webkitTransition", void 0 === b2.perspectiveProperty && void 0 === b2.webkitPerspective && (a2.animType = false)), void 0 !== b2.msTransform && (a2.animType = "msTransform", a2.transformType = "-ms-transform", a2.transitionType = "msTransition", void 0 === b2.msTransform && (a2.animType = false)), void 0 !== b2.transform && a2.animType !== false && (a2.animType = "transform", a2.transformType = "transform", a2.transitionType = "transition"), a2.transformsEnabled = a2.options.useTransform && null !== a2.animType && a2.animType !== false;
        }, b.prototype.setSlideClasses = function(a2) {
          var c, d, e, f, b2 = this;
          d = b2.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b2.$slides.eq(a2).addClass("slick-current"), b2.options.centerMode === true ? (c = Math.floor(b2.options.slidesToShow / 2), b2.options.infinite === true && (a2 >= c && a2 <= b2.slideCount - 1 - c ? b2.$slides.slice(a2 - c, a2 + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b2.options.slidesToShow + a2, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a2 ? d.eq(d.length - 1 - b2.options.slidesToShow).addClass("slick-center") : a2 === b2.slideCount - 1 && d.eq(b2.options.slidesToShow).addClass("slick-center")), b2.$slides.eq(a2).addClass("slick-center")) : a2 >= 0 && a2 <= b2.slideCount - b2.options.slidesToShow ? b2.$slides.slice(a2, a2 + b2.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b2.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b2.slideCount % b2.options.slidesToShow, e = b2.options.infinite === true ? b2.options.slidesToShow + a2 : a2, b2.options.slidesToShow == b2.options.slidesToScroll && b2.slideCount - a2 < b2.options.slidesToShow ? d.slice(e - (b2.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b2.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b2.options.lazyLoad && b2.lazyLoad();
        }, b.prototype.setupInfinite = function() {
          var c, d, e, b2 = this;
          if (b2.options.fade === true && (b2.options.centerMode = false), b2.options.infinite === true && b2.options.fade === false && (d = null, b2.slideCount > b2.options.slidesToShow)) {
            for (e = b2.options.centerMode === true ? b2.options.slidesToShow + 1 : b2.options.slidesToShow, c = b2.slideCount; c > b2.slideCount - e; c -= 1)
              d = c - 1, a(b2.$slides[d]).clone(true).attr("id", "").attr("data-slick-index", d - b2.slideCount).prependTo(b2.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
              d = c, a(b2.$slides[d]).clone(true).attr("id", "").attr("data-slick-index", d + b2.slideCount).appendTo(b2.$slideTrack).addClass("slick-cloned");
            b2.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
              a(this).attr("id", "");
            });
          }
        }, b.prototype.interrupt = function(a2) {
          var b2 = this;
          a2 || b2.autoPlay(), b2.interrupted = a2;
        }, b.prototype.selectHandler = function(b2) {
          var c = this, d = a(b2.target).is(".slick-slide") ? a(b2.target) : a(b2.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index"));
          return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
        }, b.prototype.slideHandler = function(a2, b2, c) {
          var d, e, f, g, j, h = null, i = this;
          return b2 = b2 || false, i.animating === true && i.options.waitForAnimate === true || i.options.fade === true && i.currentSlide === a2 || i.slideCount <= i.options.slidesToShow ? void 0 : (b2 === false && i.asNavFor(a2), d = a2, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === false && i.options.centerMode === false && (0 > a2 || a2 > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === false && (d = i.currentSlide, c !== true ? i.animateSlide(g, function() {
            i.postSlide(d);
          }) : i.postSlide(d))) : i.options.infinite === false && i.options.centerMode === true && (0 > a2 || a2 > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === false && (d = i.currentSlide, c !== true ? i.animateSlide(g, function() {
            i.postSlide(d);
          }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = true, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === true ? (c !== true ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e);
          })) : i.postSlide(e), void i.animateHeight()) : void (c !== true ? i.animateSlide(h, function() {
            i.postSlide(e);
          }) : i.postSlide(e))));
        }, b.prototype.startLoad = function() {
          var a2 = this;
          a2.options.arrows === true && a2.slideCount > a2.options.slidesToShow && (a2.$prevArrow.hide(), a2.$nextArrow.hide()), a2.options.dots === true && a2.slideCount > a2.options.slidesToShow && a2.$dots.hide(), a2.$slider.addClass("slick-loading");
        }, b.prototype.swipeDirection = function() {
          var a2, b2, c, d, e = this;
          return a2 = e.touchObject.startX - e.touchObject.curX, b2 = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b2, a2), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === false ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === false ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === false ? "right" : "left" : e.options.verticalSwiping === true ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
        }, b.prototype.swipeEnd = function(a2) {
          var c, d, b2 = this;
          if (b2.dragging = false, b2.interrupted = false, b2.shouldClick = b2.touchObject.swipeLength > 10 ? false : true, void 0 === b2.touchObject.curX)
            return false;
          if (b2.touchObject.edgeHit === true && b2.$slider.trigger("edge", [b2, b2.swipeDirection()]), b2.touchObject.swipeLength >= b2.touchObject.minSwipe) {
            switch (d = b2.swipeDirection()) {
              case "left":
              case "down":
                c = b2.options.swipeToSlide ? b2.checkNavigable(b2.currentSlide + b2.getSlideCount()) : b2.currentSlide + b2.getSlideCount(), b2.currentDirection = 0;
                break;
              case "right":
              case "up":
                c = b2.options.swipeToSlide ? b2.checkNavigable(b2.currentSlide - b2.getSlideCount()) : b2.currentSlide - b2.getSlideCount(), b2.currentDirection = 1;
            }
            "vertical" != d && (b2.slideHandler(c), b2.touchObject = {}, b2.$slider.trigger("swipe", [b2, d]));
          } else
            b2.touchObject.startX !== b2.touchObject.curX && (b2.slideHandler(b2.currentSlide), b2.touchObject = {});
        }, b.prototype.swipeHandler = function(a2) {
          var b2 = this;
          if (!(b2.options.swipe === false || "ontouchend" in document && b2.options.swipe === false || b2.options.draggable === false && -1 !== a2.type.indexOf("mouse")))
            switch (b2.touchObject.fingerCount = a2.originalEvent && void 0 !== a2.originalEvent.touches ? a2.originalEvent.touches.length : 1, b2.touchObject.minSwipe = b2.listWidth / b2.options.touchThreshold, b2.options.verticalSwiping === true && (b2.touchObject.minSwipe = b2.listHeight / b2.options.touchThreshold), a2.data.action) {
              case "start":
                b2.swipeStart(a2);
                break;
              case "move":
                b2.swipeMove(a2);
                break;
              case "end":
                b2.swipeEnd(a2);
            }
        }, b.prototype.swipeMove = function(a2) {
          var d, e, f, g, h, b2 = this;
          return h = void 0 !== a2.originalEvent ? a2.originalEvent.touches : null, !b2.dragging || h && 1 !== h.length ? false : (d = b2.getLeft(b2.currentSlide), b2.touchObject.curX = void 0 !== h ? h[0].pageX : a2.clientX, b2.touchObject.curY = void 0 !== h ? h[0].pageY : a2.clientY, b2.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b2.touchObject.curX - b2.touchObject.startX, 2))), b2.options.verticalSwiping === true && (b2.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b2.touchObject.curY - b2.touchObject.startY, 2)))), e = b2.swipeDirection(), "vertical" !== e ? (void 0 !== a2.originalEvent && b2.touchObject.swipeLength > 4 && a2.preventDefault(), g = (b2.options.rtl === false ? 1 : -1) * (b2.touchObject.curX > b2.touchObject.startX ? 1 : -1), b2.options.verticalSwiping === true && (g = b2.touchObject.curY > b2.touchObject.startY ? 1 : -1), f = b2.touchObject.swipeLength, b2.touchObject.edgeHit = false, b2.options.infinite === false && (0 === b2.currentSlide && "right" === e || b2.currentSlide >= b2.getDotCount() && "left" === e) && (f = b2.touchObject.swipeLength * b2.options.edgeFriction, b2.touchObject.edgeHit = true), b2.options.vertical === false ? b2.swipeLeft = d + f * g : b2.swipeLeft = d + f * (b2.$list.height() / b2.listWidth) * g, b2.options.verticalSwiping === true && (b2.swipeLeft = d + f * g), b2.options.fade === true || b2.options.touchMove === false ? false : b2.animating === true ? (b2.swipeLeft = null, false) : void b2.setCSS(b2.swipeLeft)) : void 0);
        }, b.prototype.swipeStart = function(a2) {
          var c, b2 = this;
          return b2.interrupted = true, 1 !== b2.touchObject.fingerCount || b2.slideCount <= b2.options.slidesToShow ? (b2.touchObject = {}, false) : (void 0 !== a2.originalEvent && void 0 !== a2.originalEvent.touches && (c = a2.originalEvent.touches[0]), b2.touchObject.startX = b2.touchObject.curX = void 0 !== c ? c.pageX : a2.clientX, b2.touchObject.startY = b2.touchObject.curY = void 0 !== c ? c.pageY : a2.clientY, void (b2.dragging = true));
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
          var a2 = this;
          null !== a2.$slidesCache && (a2.unload(), a2.$slideTrack.children(this.options.slide).detach(), a2.$slidesCache.appendTo(a2.$slideTrack), a2.reinit());
        }, b.prototype.unload = function() {
          var b2 = this;
          a(".slick-cloned", b2.$slider).remove(), b2.$dots && b2.$dots.remove(), b2.$prevArrow && b2.htmlExpr.test(b2.options.prevArrow) && b2.$prevArrow.remove(), b2.$nextArrow && b2.htmlExpr.test(b2.options.nextArrow) && b2.$nextArrow.remove(), b2.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }, b.prototype.unslick = function(a2) {
          var b2 = this;
          b2.$slider.trigger("unslick", [b2, a2]), b2.destroy();
        }, b.prototype.updateArrows = function() {
          var b2, a2 = this;
          b2 = Math.floor(a2.options.slidesToShow / 2), a2.options.arrows === true && a2.slideCount > a2.options.slidesToShow && !a2.options.infinite && (a2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a2.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a2.currentSlide ? (a2.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a2.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a2.currentSlide >= a2.slideCount - a2.options.slidesToShow && a2.options.centerMode === false ? (a2.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a2.currentSlide >= a2.slideCount - 1 && a2.options.centerMode === true && (a2.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }, b.prototype.updateDots = function() {
          var a2 = this;
          null !== a2.$dots && (a2.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a2.$dots.find("li").eq(Math.floor(a2.currentSlide / a2.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
        }, b.prototype.visibility = function() {
          var a2 = this;
          a2.options.autoplay && (document[a2.hidden] ? a2.interrupted = true : a2.interrupted = false);
        }, a.fn.slick = function() {
          var f, g, a2 = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a2.length;
          for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a2[f].slick = new b(a2[f], c) : g = a2[f].slick[c].apply(a2[f].slick, d), "undefined" != typeof g)
              return g;
          return a2;
        };
      });
    }
  });

  // plugins/jquery-bar-rating/dist/jquery.barrating.min.js
  var require_jquery_barrating_min = __commonJS({
    "plugins/jquery-bar-rating/dist/jquery.barrating.min.js"(exports, module) {
      !function(t2) {
        "function" == typeof define && define.amd ? define(["jquery"], t2) : "object" == typeof module && module.exports ? module.exports = t2(require_jquery()) : t2(jQuery);
      }(function(t2) {
        var e = function() {
          function e2() {
            var e3 = this, n = function() {
              var n2 = ["br-wrapper"];
              "" !== e3.options.theme && n2.push("br-theme-" + e3.options.theme), e3.$elem.wrap(t2("<div />", { "class": n2.join(" ") }));
            }, i = function() {
              e3.$elem.unwrap();
            }, a = function(n2) {
              return t2.isNumeric(n2) && (n2 = Math.floor(n2)), t2('option[value="' + n2 + '"]', e3.$elem);
            }, r = function() {
              var n2 = e3.options.initialRating;
              return n2 ? a(n2) : t2("option:selected", e3.$elem);
            }, o = function() {
              var n2 = e3.$elem.find('option[value="' + e3.options.emptyValue + '"]');
              return !n2.length && e3.options.allowEmpty ? (n2 = t2("<option />", { value: e3.options.emptyValue }), n2.prependTo(e3.$elem)) : n2;
            }, l = function(t3) {
              var n2 = e3.$elem.data("barrating");
              return "undefined" != typeof t3 ? n2[t3] : n2;
            }, s = function(t3, n2) {
              null !== n2 && "object" == typeof n2 ? e3.$elem.data("barrating", n2) : e3.$elem.data("barrating")[t3] = n2;
            }, u = function() {
              var t3 = r(), n2 = o(), i2 = t3.val(), a2 = t3.data("html") ? t3.data("html") : t3.text(), l2 = null !== e3.options.allowEmpty ? e3.options.allowEmpty : !!n2.length, u2 = n2.length ? n2.val() : null, d2 = n2.length ? n2.text() : null;
              s(null, { userOptions: e3.options, ratingValue: i2, ratingText: a2, originalRatingValue: i2, originalRatingText: a2, allowEmpty: l2, emptyRatingValue: u2, emptyRatingText: d2, readOnly: e3.options.readonly, ratingMade: false });
            }, d = function() {
              e3.$elem.removeData("barrating");
            }, c = function() {
              return l("ratingText");
            }, f = function() {
              return l("ratingValue");
            }, g = function() {
              var n2 = t2("<div />", { "class": "br-widget" });
              return e3.$elem.find("option").each(function() {
                var i2, a2, r2, o2;
                i2 = t2(this).val(), i2 !== l("emptyRatingValue") && (a2 = t2(this).text(), r2 = t2(this).data("html"), r2 && (a2 = r2), o2 = t2("<a />", { href: "#", "data-rating-value": i2, "data-rating-text": a2, html: e3.options.showValues ? a2 : "" }), n2.append(o2));
              }), e3.options.showSelectedRating && n2.append(t2("<div />", { text: "", "class": "br-current-rating" })), e3.options.reverse && n2.addClass("br-reverse"), e3.options.readonly && n2.addClass("br-readonly"), n2;
            }, p = function() {
              return l("userOptions").reverse ? "nextAll" : "prevAll";
            }, h = function(t3) {
              a(t3).prop("selected", true), l("userOptions").triggerChange && e3.$elem.change();
            }, m = function() {
              t2("option", e3.$elem).prop("selected", function() {
                return this.defaultSelected;
              }), l("userOptions").triggerChange && e3.$elem.change();
            }, v = function(t3) {
              t3 = t3 ? t3 : c(), t3 == l("emptyRatingText") && (t3 = ""), e3.options.showSelectedRating && e3.$elem.parent().find(".br-current-rating").text(t3);
            }, y = function(t3) {
              return Math.round(Math.floor(10 * t3) / 10 % 1 * 100);
            }, b = function() {
              e3.$widget.find("a").removeClass(function(t3, e4) {
                return (e4.match(/(^|\s)br-\S+/g) || []).join(" ");
              });
            }, w = function() {
              var n2, i2, a2 = e3.$widget.find('a[data-rating-value="' + f() + '"]'), r2 = l("userOptions").initialRating, o2 = t2.isNumeric(f()) ? f() : 0, s2 = y(r2);
              if (b(), a2.addClass("br-selected br-current")[p()]().addClass("br-selected"), !l("ratingMade") && t2.isNumeric(r2)) {
                if (o2 >= r2 || !s2)
                  return;
                n2 = e3.$widget.find("a"), i2 = a2.length ? a2[l("userOptions").reverse ? "prev" : "next"]() : n2[l("userOptions").reverse ? "last" : "first"](), i2.addClass("br-fractional"), i2.addClass("br-fractional-" + s2);
              }
            }, $2 = function(t3) {
              return l("allowEmpty") && l("userOptions").deselectable ? f() == t3.attr("data-rating-value") : false;
            }, x = function(n2) {
              n2.on("click.barrating", function(n3) {
                var i2, a2, r2 = t2(this), o2 = l("userOptions");
                return n3.preventDefault(), i2 = r2.attr("data-rating-value"), a2 = r2.attr("data-rating-text"), $2(r2) && (i2 = l("emptyRatingValue"), a2 = l("emptyRatingText")), s("ratingValue", i2), s("ratingText", a2), s("ratingMade", true), h(i2), v(a2), w(), o2.onSelect.call(e3, f(), c(), n3), false;
              });
            }, C = function(e4) {
              e4.on("mouseenter.barrating", function() {
                var e5 = t2(this);
                b(), e5.addClass("br-active")[p()]().addClass("br-active"), v(e5.attr("data-rating-text"));
              });
            }, O = function(t3) {
              e3.$widget.on("mouseleave.barrating blur.barrating", function() {
                v(), w();
              });
            }, R = function(e4) {
              e4.on("touchstart.barrating", function(e5) {
                e5.preventDefault(), e5.stopPropagation(), t2(this).click();
              });
            }, V = function(t3) {
              t3.on("click.barrating", function(t4) {
                t4.preventDefault();
              });
            }, S = function(t3) {
              x(t3), e3.options.hoverState && (C(t3), O(t3));
            }, T = function(t3) {
              t3.off(".barrating");
            }, j = function(t3) {
              var n2 = e3.$widget.find("a");
              l("userOptions").fastClicks && R(n2), t3 ? (T(n2), V(n2)) : S(n2);
            };
            this.show = function() {
              l() || (n(), u(), e3.$widget = g(), e3.$widget.insertAfter(e3.$elem), w(), v(), j(e3.options.readonly), e3.$elem.hide());
            }, this.readonly = function(t3) {
              "boolean" == typeof t3 && l("readOnly") != t3 && (j(t3), s("readOnly", t3), e3.$widget.toggleClass("br-readonly"));
            }, this.set = function(t3) {
              var n2 = l("userOptions");
              0 !== e3.$elem.find('option[value="' + t3 + '"]').length && (s("ratingValue", t3), s("ratingText", e3.$elem.find('option[value="' + t3 + '"]').text()), s("ratingMade", true), h(f()), v(c()), w(), n2.silent || n2.onSelect.call(this, f(), c()));
            }, this.clear = function() {
              var t3 = l("userOptions");
              s("ratingValue", l("originalRatingValue")), s("ratingText", l("originalRatingText")), s("ratingMade", false), m(), v(c()), w(), t3.onClear.call(this, f(), c());
            }, this.destroy = function() {
              var t3 = f(), n2 = c(), a2 = l("userOptions");
              T(e3.$widget.find("a")), e3.$widget.remove(), d(), i(), e3.$elem.show(), a2.onDestroy.call(this, t3, n2);
            };
          }
          return e2.prototype.init = function(e3, n) {
            return this.$elem = t2(n), this.options = t2.extend({}, t2.fn.barrating.defaults, e3), this.options;
          }, e2;
        }();
        t2.fn.barrating = function(n, i) {
          return this.each(function() {
            var a = new e();
            if (t2(this).is("select") || t2.error("Sorry, this plugin only works with select fields."), a.hasOwnProperty(n)) {
              if (a.init(i, this), "show" === n)
                return a.show(i);
              if (a.$elem.data("barrating"))
                return a.$widget = t2(this).next(".br-widget"), a[n](i);
            } else {
              if ("object" == typeof n || !n)
                return i = n, a.init(i, this), a.show();
              t2.error("Method " + n + " does not exist on jQuery.barrating");
            }
          });
        }, t2.fn.barrating.defaults = { theme: "", initialRating: null, allowEmpty: null, emptyValue: "", showValues: false, showSelectedRating: true, deselectable: true, reverse: false, readonly: false, fastClicks: true, hoverState: true, silent: false, triggerChange: true, onSelect: function(t3, e2, n) {
        }, onClear: function(t3, e2) {
        }, onDestroy: function(t3, e2) {
        } }, t2.fn.barrating.BarRating = e;
      });
    }
  });

  // plugins/lightGallery-master/dist/js/lightgallery-all.min.js
  var require_lightgallery_all_min = __commonJS({
    "plugins/lightGallery-master/dist/js/lightgallery-all.min.js"(exports, module) {
      !function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof module && module.exports ? module.exports = b(require_jquery()) : b(a.jQuery);
      }(exports, function(a) {
        !function() {
          "use strict";
          function b(b2, d) {
            if (this.el = b2, this.$el = a(b2), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {}, this.lGalleryOn = false, this.lgBusy = false, this.hideBartimeout = false, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = false), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this;
          }
          var c = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: false, closable: true, loop: true, escKey: true, keyPress: true, controls: true, slideEndAnimatoin: true, hideControlOnEnd: false, mousewheel: true, getCaptionFromTitleOrAlt: true, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: false, preload: 1, showAfterLoad: true, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: false, iframeMaxWidth: "100%", download: true, counter: true, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: true, enableDrag: true, dynamic: false, dynamicEl: [], galleryId: 1 };
          b.prototype.init = function() {
            var b2 = this;
            b2.s.preload > b2.$items.length && (b2.s.preload = b2.$items.length);
            var c2 = window.location.hash;
            c2.indexOf("lg=" + this.s.galleryId) > 0 && (b2.index = parseInt(c2.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() {
              b2.build(b2.index);
            }), a("body").addClass("lg-on"))), b2.s.dynamic ? (b2.$el.trigger("onBeforeOpen.lg"), b2.index = b2.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
              b2.build(b2.index), a("body").addClass("lg-on");
            })) : b2.$items.on("click.lgcustom", function(c3) {
              try {
                c3.preventDefault(), c3.preventDefault();
              } catch (a2) {
                c3.returnValue = false;
              }
              b2.$el.trigger("onBeforeOpen.lg"), b2.index = b2.s.index || b2.$items.index(this), a("body").hasClass("lg-on") || (b2.build(b2.index), a("body").addClass("lg-on"));
            });
          }, b.prototype.build = function(b2) {
            var c2 = this;
            c2.structure(), a.each(a.fn.lightGallery.modules, function(b3) {
              c2.modules[b3] = new a.fn.lightGallery.modules[b3](c2.el);
            }), c2.slide(b2, false, false, false), c2.s.keyPress && c2.keyPress(), c2.$items.length > 1 ? (c2.arrow(), setTimeout(function() {
              c2.enableDrag(), c2.enableSwipe();
            }, 50), c2.s.mousewheel && c2.mousewheel()) : c2.$slide.on("click.lg", function() {
              c2.$el.trigger("onSlideClick.lg");
            }), c2.counter(), c2.closeGallery(), c2.$el.trigger("onAfterOpen.lg"), c2.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
              c2.$outer.removeClass("lg-hide-items"), clearTimeout(c2.hideBartimeout), c2.hideBartimeout = setTimeout(function() {
                c2.$outer.addClass("lg-hide-items");
              }, c2.s.hideBarsDelay);
            }), c2.$outer.trigger("mousemove.lg");
          }, b.prototype.structure = function() {
            var b2, c2 = "", d = "", e = 0, f = "", g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++)
              c2 += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b2 = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c2 + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b2), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function() {
              setTimeout(function() {
                g.setTop();
              }, 100);
            }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
              var h = this.$outer.find(".lg-inner");
              h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms");
            }
            setTimeout(function() {
              a(".lg-backdrop").addClass("in");
            }), setTimeout(function() {
              g.$outer.addClass("lg-visible");
            }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop();
          }, b.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
              var b2 = a(window).height(), c2 = (b2 - parseInt(this.s.height, 10)) / 2, d = this.$outer.find(".lg");
              b2 >= parseInt(this.s.height, 10) ? d.css("top", c2 + "px") : d.css("top", "0px");
            }
          }, b.prototype.doCss = function() {
            return !!function() {
              var a2 = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], b2 = document.documentElement, c2 = 0;
              for (c2 = 0; c2 < a2.length; c2++)
                if (a2[c2] in b2.style)
                  return true;
            }();
          }, b.prototype.isVideo = function(a2, b2) {
            var c2;
            if (c2 = this.s.dynamic ? this.s.dynamicEl[b2].html : this.$items.eq(b2).attr("data-html"), !a2)
              return c2 ? { html5: true } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b2 + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), false);
            var d = a2.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i), e = a2.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i), f = a2.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i), g = a2.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0;
          }, b.prototype.counter = function() {
            this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>");
          }, b.prototype.addHtml = function(b2) {
            var c2, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b2].subHtmlUrl ? c2 = this.s.dynamicEl[b2].subHtmlUrl : e = this.s.dynamicEl[b2].subHtml : (d = this.$items.eq(b2), d.attr("data-sub-html-url") ? c2 = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c2)
              if (void 0 !== e && null !== e) {
                var f = e.substring(0, 1);
                "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html());
              } else
                e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c2 ? this.$outer.find(this.s.appendSubHtmlTo).load(c2) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c2 ? this.$slide.eq(b2).load(c2) : this.$slide.eq(b2).append(e), void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b2]);
          }, b.prototype.preload = function(a2) {
            var b2 = 1, c2 = 1;
            for (b2 = 1; b2 <= this.s.preload && !(b2 >= this.$items.length - a2); b2++)
              this.loadContent(a2 + b2, false, 0);
            for (c2 = 1; c2 <= this.s.preload && !(a2 - c2 < 0); c2++)
              this.loadContent(a2 - c2, false, 0);
          }, b.prototype.loadContent = function(b2, c2, d) {
            var e, f, g, h, i, j, k = this, l = false, m = function(b3) {
              for (var c3 = [], d2 = [], e2 = 0; e2 < b3.length; e2++) {
                var g2 = b3[e2].split(" ");
                "" === g2[0] && g2.splice(0, 1), d2.push(g2[0]), c3.push(g2[1]);
              }
              for (var h2 = a(window).width(), i2 = 0; i2 < c3.length; i2++)
                if (parseInt(c3[i2], 10) > h2) {
                  f = d2[i2];
                  break;
                }
            };
            if (k.s.dynamic) {
              if (k.s.dynamicEl[b2].poster && (l = true, g = k.s.dynamicEl[b2].poster), j = k.s.dynamicEl[b2].html, f = k.s.dynamicEl[b2].src, k.s.dynamicEl[b2].responsive) {
                m(k.s.dynamicEl[b2].responsive.split(","));
              }
              h = k.s.dynamicEl[b2].srcset, i = k.s.dynamicEl[b2].sizes;
            } else {
              if (k.$items.eq(b2).attr("data-poster") && (l = true, g = k.$items.eq(b2).attr("data-poster")), j = k.$items.eq(b2).attr("data-html"), f = k.$items.eq(b2).attr("href") || k.$items.eq(b2).attr("data-src"), k.$items.eq(b2).attr("data-responsive")) {
                m(k.$items.eq(b2).attr("data-responsive").split(","));
              }
              h = k.$items.eq(b2).attr("data-srcset"), i = k.$items.eq(b2).attr("data-sizes");
            }
            var n = false;
            k.s.dynamic ? k.s.dynamicEl[b2].iframe && (n = true) : "true" === k.$items.eq(b2).attr("data-iframe") && (n = true);
            var o = k.isVideo(f, b2);
            if (!k.$slide.eq(b2).hasClass("lg-loaded")) {
              if (n)
                k.$slide.eq(b2).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
              else if (l) {
                var p = "";
                p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b2).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>');
              } else
                o ? (k.$slide.eq(b2).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b2, f, j])) : k.$slide.eq(b2).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
              if (k.$el.trigger("onAferAppendSlide.lg", [b2]), e = k.$slide.eq(b2).find(".lg-object"), i && e.attr("sizes", i), h) {
                e.attr("srcset", h);
                try {
                  picturefill({ elements: [e[0]] });
                } catch (a2) {
                  console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.");
                }
              }
              ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b2), k.$slide.eq(b2).addClass("lg-loaded");
            }
            k.$slide.eq(b2).find(".lg-object").on("load.lg error.lg", function() {
              var c3 = 0;
              d && !a("body").hasClass("lg-from-hash") && (c3 = d), setTimeout(function() {
                k.$slide.eq(b2).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b2, d || 0]);
              }, c3);
            }), o && o.html5 && !l && k.$slide.eq(b2).addClass("lg-complete"), true === c2 && (k.$slide.eq(b2).hasClass("lg-complete") ? k.preload(b2) : k.$slide.eq(b2).find(".lg-object").on("load.lg error.lg", function() {
              k.preload(b2);
            }));
          }, b.prototype.slide = function(b2, c2, d, e) {
            var f = this.$outer.find(".lg-current").index(), g = this;
            if (!g.lGalleryOn || f !== b2) {
              var h = this.$slide.length, i = g.lGalleryOn ? this.s.speed : 0;
              if (!g.lgBusy) {
                if (this.s.download) {
                  var j;
                  j = g.s.dynamic ? false !== g.s.dynamicEl[b2].downloadUrl && (g.s.dynamicEl[b2].downloadUrl || g.s.dynamicEl[b2].src) : "false" !== g.$items.eq(b2).attr("data-download-url") && (g.$items.eq(b2).attr("data-download-url") || g.$items.eq(b2).attr("href") || g.$items.eq(b2).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download");
                }
                if (this.$el.trigger("onBeforeSlide.lg", [f, b2, c2, d]), g.lgBusy = true, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                  g.addHtml(b2);
                }, i), this.arrowDisable(b2), e || (b2 < f ? e = "prev" : b2 > f && (e = "next")), c2) {
                  this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                  var k, l;
                  h > 2 ? (k = b2 - 1, l = b2 + 1, 0 === b2 && f === h - 1 ? (l = 0, k = h - 1) : b2 === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b2).addClass("lg-current");
                } else
                  g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b2).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b2).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function() {
                    g.$slide.removeClass("lg-current"), g.$slide.eq(b2).addClass("lg-current"), g.$outer.removeClass("lg-no-trans");
                  }, 50);
                g.lGalleryOn ? (setTimeout(function() {
                  g.loadContent(b2, true, 0);
                }, this.s.speed + 50), setTimeout(function() {
                  g.lgBusy = false, g.$el.trigger("onAfterSlide.lg", [f, b2, c2, d]);
                }, this.s.speed)) : (g.loadContent(b2, true, g.s.backdropDuration), g.lgBusy = false, g.$el.trigger("onAfterSlide.lg", [f, b2, c2, d])), g.lGalleryOn = true, this.s.counter && a("#lg-counter-current").text(b2 + 1);
              }
              g.index = b2;
            }
          }, b.prototype.goToNextSlide = function(a2) {
            var b2 = this, c2 = b2.s.loop;
            a2 && b2.$slide.length < 3 && (c2 = false), b2.lgBusy || (b2.index + 1 < b2.$slide.length ? (b2.index++, b2.$el.trigger("onBeforeNextSlide.lg", [b2.index]), b2.slide(b2.index, a2, false, "next")) : c2 ? (b2.index = 0, b2.$el.trigger("onBeforeNextSlide.lg", [b2.index]), b2.slide(b2.index, a2, false, "next")) : b2.s.slideEndAnimatoin && !a2 && (b2.$outer.addClass("lg-right-end"), setTimeout(function() {
              b2.$outer.removeClass("lg-right-end");
            }, 400)));
          }, b.prototype.goToPrevSlide = function(a2) {
            var b2 = this, c2 = b2.s.loop;
            a2 && b2.$slide.length < 3 && (c2 = false), b2.lgBusy || (b2.index > 0 ? (b2.index--, b2.$el.trigger("onBeforePrevSlide.lg", [b2.index, a2]), b2.slide(b2.index, a2, false, "prev")) : c2 ? (b2.index = b2.$items.length - 1, b2.$el.trigger("onBeforePrevSlide.lg", [b2.index, a2]), b2.slide(b2.index, a2, false, "prev")) : b2.s.slideEndAnimatoin && !a2 && (b2.$outer.addClass("lg-left-end"), setTimeout(function() {
              b2.$outer.removeClass("lg-left-end");
            }, 400)));
          }, b.prototype.keyPress = function() {
            var b2 = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function(a2) {
              b2.$items.length > 1 && (37 === a2.keyCode && (a2.preventDefault(), b2.goToPrevSlide()), 39 === a2.keyCode && (a2.preventDefault(), b2.goToNextSlide()));
            }), a(window).on("keydown.lg", function(a2) {
              true === b2.s.escKey && 27 === a2.keyCode && (a2.preventDefault(), b2.$outer.hasClass("lg-thumb-open") ? b2.$outer.removeClass("lg-thumb-open") : b2.destroy());
            });
          }, b.prototype.arrow = function() {
            var a2 = this;
            this.$outer.find(".lg-prev").on("click.lg", function() {
              a2.goToPrevSlide();
            }), this.$outer.find(".lg-next").on("click.lg", function() {
              a2.goToNextSlide();
            });
          }, b.prototype.arrowDisable = function(a2) {
            !this.s.loop && this.s.hideControlOnEnd && (a2 + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a2 > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"));
          }, b.prototype.setTranslate = function(a2, b2, c2) {
            this.s.useLeft ? a2.css("left", b2) : a2.css({ transform: "translate3d(" + b2 + "px, " + c2 + "px, 0px)" });
          }, b.prototype.touchMove = function(b2, c2) {
            var d = c2 - b2;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0));
          }, b.prototype.touchEnd = function(a2) {
            var b2 = this;
            "lg-slide" !== b2.s.mode && b2.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
              b2.$outer.removeClass("lg-dragging"), a2 < 0 && Math.abs(a2) > b2.s.swipeThreshold ? b2.goToNextSlide(true) : a2 > 0 && Math.abs(a2) > b2.s.swipeThreshold ? b2.goToPrevSlide(true) : Math.abs(a2) < 5 && b2.$el.trigger("onSlideClick.lg"), b2.$slide.removeAttr("style");
            }), setTimeout(function() {
              b2.$outer.hasClass("lg-dragging") || "lg-slide" === b2.s.mode || b2.$outer.removeClass("lg-slide");
            }, b2.s.speed + 100);
          }, b.prototype.enableSwipe = function() {
            var a2 = this, b2 = 0, c2 = 0, d = false;
            a2.s.enableSwipe && a2.doCss() && (a2.$slide.on("touchstart.lg", function(c3) {
              a2.$outer.hasClass("lg-zoomed") || a2.lgBusy || (c3.preventDefault(), a2.manageSwipeClass(), b2 = c3.originalEvent.targetTouches[0].pageX);
            }), a2.$slide.on("touchmove.lg", function(e) {
              a2.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c2 = e.originalEvent.targetTouches[0].pageX, a2.touchMove(b2, c2), d = true);
            }), a2.$slide.on("touchend.lg", function() {
              a2.$outer.hasClass("lg-zoomed") || (d ? (d = false, a2.touchEnd(c2 - b2)) : a2.$el.trigger("onSlideClick.lg"));
            }));
          }, b.prototype.enableDrag = function() {
            var b2 = this, c2 = 0, d = 0, e = false, f = false;
            b2.s.enableDrag && b2.doCss() && (b2.$slide.on("mousedown.lg", function(d2) {
              b2.$outer.hasClass("lg-zoomed") || b2.lgBusy || a(d2.target).text().trim() || (d2.preventDefault(), b2.manageSwipeClass(), c2 = d2.pageX, e = true, b2.$outer.scrollLeft += 1, b2.$outer.scrollLeft -= 1, b2.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b2.$el.trigger("onDragstart.lg"));
            }), a(window).on("mousemove.lg", function(a2) {
              e && (f = true, d = a2.pageX, b2.touchMove(c2, d), b2.$el.trigger("onDragmove.lg"));
            }), a(window).on("mouseup.lg", function(g) {
              f ? (f = false, b2.touchEnd(d - c2), b2.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b2.$el.trigger("onSlideClick.lg"), e && (e = false, b2.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
            }));
          }, b.prototype.manageSwipeClass = function() {
            var a2 = this.index + 1, b2 = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b2 = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a2 = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b2 > -1 && this.$slide.eq(b2).addClass("lg-prev-slide"), this.$slide.eq(a2).addClass("lg-next-slide");
          }, b.prototype.mousewheel = function() {
            var a2 = this;
            a2.$outer.on("mousewheel.lg", function(b2) {
              b2.deltaY && (b2.deltaY > 0 ? a2.goToPrevSlide() : a2.goToNextSlide(), b2.preventDefault());
            });
          }, b.prototype.closeGallery = function() {
            var b2 = this, c2 = false;
            this.$outer.find(".lg-close").on("click.lg", function() {
              b2.destroy();
            }), b2.s.closable && (b2.$outer.on("mousedown.lg", function(b3) {
              c2 = !!(a(b3.target).is(".lg-outer") || a(b3.target).is(".lg-item ") || a(b3.target).is(".lg-img-wrap"));
            }), b2.$outer.on("mousemove.lg", function() {
              c2 = false;
            }), b2.$outer.on("mouseup.lg", function(d) {
              (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c2) && (b2.$outer.hasClass("lg-dragging") || b2.destroy());
            }));
          }, b.prototype.destroy = function(b2) {
            var c2 = this;
            b2 || (c2.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c2.prevScrollTop)), b2 && (c2.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c2.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a2) {
              c2.modules[a2] && c2.modules[a2].destroy();
            }), this.lGalleryOn = false, clearTimeout(c2.hideBartimeout), this.hideBartimeout = false, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c2.$outer && c2.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
              c2.$outer && c2.$outer.remove(), a(".lg-backdrop").remove(), b2 || c2.$el.trigger("onCloseAfter.lg");
            }, c2.s.backdropDuration + 50);
          }, a.fn.lightGallery = function(c2) {
            return this.each(function() {
              if (a.data(this, "lightGallery"))
                try {
                  a(this).data("lightGallery").init();
                } catch (a2) {
                  console.error("lightGallery has not initiated properly");
                }
              else
                a.data(this, "lightGallery", new b(this, c2));
            });
          }, a.fn.lightGallery.modules = {};
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = { autoplay: false, pause: 5e3, progressBar: true, fourceAutoplay: false, autoplayControls: true, appendAutoplayControlsTo: ".lg-toolbar" }, c = function(c2) {
            return this.core = a(c2).data("lightGallery"), this.$el = a(c2), !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s), this.interval = false, this.fromAuto = true, this.canceledOnTouch = false, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = false), this.init(), this);
          };
          c.prototype.init = function() {
            var a2 = this;
            a2.core.s.autoplayControls && a2.controls(), a2.core.s.progressBar && a2.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), a2.progress(), a2.core.s.autoplay && a2.$el.one("onSlideItemLoad.lg.tm", function() {
              a2.startlAuto();
            }), a2.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
              a2.interval && (a2.cancelAuto(), a2.canceledOnTouch = true);
            }), a2.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
              !a2.interval && a2.canceledOnTouch && (a2.startlAuto(), a2.canceledOnTouch = false);
            });
          }, c.prototype.progress = function() {
            var a2, b2, c2 = this;
            c2.$el.on("onBeforeSlide.lg.tm", function() {
              c2.core.s.progressBar && c2.fromAuto && (a2 = c2.core.$outer.find(".lg-progress-bar"), b2 = c2.core.$outer.find(".lg-progress"), c2.interval && (b2.removeAttr("style"), a2.removeClass("lg-start"), setTimeout(function() {
                b2.css("transition", "width " + (c2.core.s.speed + c2.core.s.pause) + "ms ease 0s"), a2.addClass("lg-start");
              }, 20))), c2.fromAuto || c2.core.s.fourceAutoplay || c2.cancelAuto(), c2.fromAuto = false;
            });
          }, c.prototype.controls = function() {
            var b2 = this;
            a(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), b2.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
              a(b2.core.$outer).hasClass("lg-show-autoplay") ? (b2.cancelAuto(), b2.core.s.fourceAutoplay = false) : b2.interval || (b2.startlAuto(), b2.core.s.fourceAutoplay = b2.fourceAutoplayTemp);
            });
          }, c.prototype.startlAuto = function() {
            var a2 = this;
            a2.core.$outer.find(".lg-progress").css("transition", "width " + (a2.core.s.speed + a2.core.s.pause) + "ms ease 0s"), a2.core.$outer.addClass("lg-show-autoplay"), a2.core.$outer.find(".lg-progress-bar").addClass("lg-start"), a2.interval = setInterval(function() {
              a2.core.index + 1 < a2.core.$items.length ? a2.core.index++ : a2.core.index = 0, a2.fromAuto = true, a2.core.slide(a2.core.index, false, false, "next");
            }, a2.core.s.speed + a2.core.s.pause);
          }, c.prototype.cancelAuto = function() {
            clearInterval(this.interval), this.interval = false, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
          }, c.prototype.destroy = function() {
            this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
          }, a.fn.lightGallery.modules.autoplay = c;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = { fullScreen: true }, c = function(c2) {
            return this.core = a(c2).data("lightGallery"), this.$el = a(c2), this.core.s = a.extend({}, b, this.core.s), this.init(), this;
          };
          c.prototype.init = function() {
            var a2 = "";
            if (this.core.s.fullScreen) {
              if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled))
                return;
              a2 = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a2), this.fullScreen();
            }
          }, c.prototype.requestFullscreen = function() {
            var a2 = document.documentElement;
            a2.requestFullscreen ? a2.requestFullscreen() : a2.msRequestFullscreen ? a2.msRequestFullscreen() : a2.mozRequestFullScreen ? a2.mozRequestFullScreen() : a2.webkitRequestFullscreen && a2.webkitRequestFullscreen();
          }, c.prototype.exitFullscreen = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
          }, c.prototype.fullScreen = function() {
            var b2 = this;
            a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
              b2.core.$outer.toggleClass("lg-fullscreen-on");
            }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
              document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b2.exitFullscreen() : b2.requestFullscreen();
            });
          }, c.prototype.destroy = function() {
            this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg");
          }, a.fn.lightGallery.modules.fullscreen = c;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = { pager: false }, c = function(c2) {
            return this.core = a(c2).data("lightGallery"), this.$el = a(c2), this.core.s = a.extend({}, b, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this;
          };
          c.prototype.init = function() {
            var b2, c2, d, e = this, f = "";
            if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic)
              for (var g = 0; g < e.core.s.dynamicEl.length; g++)
                f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
            else
              e.core.$items.each(function() {
                e.core.s.exThumbImage ? f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>';
              });
            c2 = e.core.$outer.find(".lg-pager-outer"), c2.html(f), b2 = e.core.$outer.find(".lg-pager-cont"), b2.on("click.lg touchend.lg", function() {
              var b3 = a(this);
              e.core.index = b3.index(), e.core.slide(e.core.index, false, true, false);
            }), c2.on("mouseover.lg", function() {
              clearTimeout(d), c2.addClass("lg-pager-hover");
            }), c2.on("mouseout.lg", function() {
              d = setTimeout(function() {
                c2.removeClass("lg-pager-hover");
              });
            }), e.core.$el.on("onBeforeSlide.lg.tm", function(a2, c3, d2) {
              b2.removeClass("lg-pager-active"), b2.eq(d2).addClass("lg-pager-active");
            });
          }, c.prototype.destroy = function() {
          }, a.fn.lightGallery.modules.pager = c;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = { thumbnail: true, animateThumb: true, currentPagerPosition: "middle", thumbWidth: 100, thumbHeight: "80px", thumbContHeight: 100, thumbMargin: 5, exThumbImage: false, showThumbByDefault: true, toogleThumb: true, pullCaptionUp: true, enableThumbDrag: true, enableThumbSwipe: true, swipeThreshold: 50, loadYoutubeThumbnail: true, youtubeThumbSize: 1, loadVimeoThumbnail: true, vimeoThumbSize: "thumbnail_small", loadDailymotionThumbnail: true }, c = function(c2) {
            return this.core = a(c2).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.$el = a(c2), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this;
          };
          c.prototype.init = function() {
            var a2 = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
              a2.core.$outer.addClass("lg-thumb-open");
            }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = false) : this.thumbClickable = true, this.toogle(), this.thumbkeyPress());
          }, c.prototype.build = function() {
            function b2(a2, b3, c3) {
              var g2, h2 = d.core.isVideo(a2, c3) || {}, i = "";
              h2.youtube || h2.vimeo || h2.dailymotion ? h2.youtube ? g2 = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h2.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b3 : h2.vimeo ? d.core.s.loadVimeoThumbnail ? (g2 = "//i.vimeocdn.com/video/error_" + f + ".jpg", i = h2.vimeo[1]) : g2 = b3 : h2.dailymotion && (g2 = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h2.dailymotion[1] : b3) : g2 = b3, e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g2 + '" /></div>', i = "";
            }
            var c2, d = this, e = "", f = "", g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
              case "thumbnail_large":
                f = "640";
                break;
              case "thumbnail_medium":
                f = "200x150";
                break;
              case "thumbnail_small":
                f = "100x75";
            }
            if (d.core.$outer.addClass("lg-has-thumb"), d.core.$outer.find(".lg").append(g), d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({ width: d.thumbTotalWidth + "px", position: "relative" }), this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"), d.core.s.dynamic)
              for (var h = 0; h < d.core.s.dynamicEl.length; h++)
                b2(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
            else
              d.core.$items.each(function(c3) {
                d.core.s.exThumbImage ? b2(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c3) : b2(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c3);
              });
            d.core.$outer.find(".lg-thumb").html(e), c2 = d.core.$outer.find(".lg-thumb-item"), c2.each(function() {
              var b3 = a(this), c3 = b3.attr("data-vimeo-id");
              c3 && a.getJSON("//www.vimeo.com/api/v2/video/" + c3 + ".json?callback=?", { format: "json" }, function(a2) {
                b3.find("img").attr("src", a2[0][d.core.s.vimeoThumbSize]);
              });
            }), c2.eq(d.core.index).addClass("active"), d.core.$el.on("onBeforeSlide.lg.tm", function() {
              c2.removeClass("active"), c2.eq(d.core.index).addClass("active");
            }), c2.on("click.lg touchend.lg", function() {
              var b3 = a(this);
              setTimeout(function() {
                (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b3.index(), d.core.slide(d.core.index, false, true, false));
              }, 50);
            }), d.core.$el.on("onBeforeSlide.lg.tm", function() {
              d.animateThumb(d.core.index);
            }), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
              setTimeout(function() {
                d.animateThumb(d.core.index), d.thumbOuterWidth = d.$thumbOuter.width();
              }, 200);
            });
          }, c.prototype.setTranslate = function(a2) {
            this.core.$outer.find(".lg-thumb").css({ transform: "translate3d(-" + a2 + "px, 0px, 0px)" });
          }, c.prototype.animateThumb = function(a2) {
            var b2 = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
              var c2;
              switch (this.core.s.currentPagerPosition) {
                case "left":
                  c2 = 0;
                  break;
                case "middle":
                  c2 = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                  break;
                case "right":
                  c2 = this.thumbOuterWidth - this.core.s.thumbWidth;
              }
              this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a2 - 1 - c2, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b2.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b2.animate({ left: -this.left + "px" }, this.core.s.speed)) : this.core.doCss() || b2.css("left", -this.left + "px"), this.setTranslate(this.left);
            }
          }, c.prototype.enableThumbDrag = function() {
            var b2 = this, c2 = 0, d = 0, e = false, f = false, g = 0;
            b2.$thumbOuter.addClass("lg-grab"), b2.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a2) {
              b2.thumbTotalWidth > b2.thumbOuterWidth && (a2.preventDefault(), c2 = a2.pageX, e = true, b2.core.$outer.scrollLeft += 1, b2.core.$outer.scrollLeft -= 1, b2.thumbClickable = false, b2.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
            }), a(window).on("mousemove.lg.thumb", function(a2) {
              e && (g = b2.left, f = true, d = a2.pageX, b2.$thumbOuter.addClass("lg-dragging"), g -= d - c2, g > b2.thumbTotalWidth - b2.thumbOuterWidth && (g = b2.thumbTotalWidth - b2.thumbOuterWidth), g < 0 && (g = 0), b2.setTranslate(g));
            }), a(window).on("mouseup.lg.thumb", function() {
              f ? (f = false, b2.$thumbOuter.removeClass("lg-dragging"), b2.left = g, Math.abs(d - c2) < b2.core.s.swipeThreshold && (b2.thumbClickable = true)) : b2.thumbClickable = true, e && (e = false, b2.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
            });
          }, c.prototype.enableThumbSwipe = function() {
            var a2 = this, b2 = 0, c2 = 0, d = false, e = 0;
            a2.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c3) {
              a2.thumbTotalWidth > a2.thumbOuterWidth && (c3.preventDefault(), b2 = c3.originalEvent.targetTouches[0].pageX, a2.thumbClickable = false);
            }), a2.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) {
              a2.thumbTotalWidth > a2.thumbOuterWidth && (f.preventDefault(), c2 = f.originalEvent.targetTouches[0].pageX, d = true, a2.$thumbOuter.addClass("lg-dragging"), e = a2.left, e -= c2 - b2, e > a2.thumbTotalWidth - a2.thumbOuterWidth && (e = a2.thumbTotalWidth - a2.thumbOuterWidth), e < 0 && (e = 0), a2.setTranslate(e));
            }), a2.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
              a2.thumbTotalWidth > a2.thumbOuterWidth && d ? (d = false, a2.$thumbOuter.removeClass("lg-dragging"), Math.abs(c2 - b2) < a2.core.s.swipeThreshold && (a2.thumbClickable = true), a2.left = e) : a2.thumbClickable = true;
            });
          }, c.prototype.toogle = function() {
            var a2 = this;
            a2.core.s.toogleThumb && (a2.core.$outer.addClass("lg-can-toggle"), a2.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a2.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
              a2.core.$outer.toggleClass("lg-thumb-open");
            }));
          }, c.prototype.thumbkeyPress = function() {
            var b2 = this;
            a(window).on("keydown.lg.thumb", function(a2) {
              38 === a2.keyCode ? (a2.preventDefault(), b2.core.$outer.addClass("lg-thumb-open")) : 40 === a2.keyCode && (a2.preventDefault(), b2.core.$outer.removeClass("lg-thumb-open"));
            });
          }, c.prototype.destroy = function() {
            this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"));
          }, a.fn.lightGallery.modules.Thumbnail = c;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof module && module.exports ? module.exports = b(require_jquery()) : b(a.jQuery);
      }(exports, function(a) {
        !function() {
          "use strict";
          function b(a2, b2, c2, d2) {
            var e2 = this;
            if (e2.core.$slide.eq(b2).find(".lg-video").append(e2.loadVideo(c2, "lg-object", true, b2, d2)), d2)
              if (e2.core.s.videojs)
                try {
                  videojs(e2.core.$slide.eq(b2).find(".lg-html5").get(0), e2.core.s.videojsOptions, function() {
                    !e2.videoLoaded && e2.core.s.autoplayFirstVideo && this.play();
                  });
                } catch (a3) {
                  console.error("Make sure you have included videojs");
                }
              else
                !e2.videoLoaded && e2.core.s.autoplayFirstVideo && e2.core.$slide.eq(b2).find(".lg-html5").get(0).play();
          }
          function c(a2, b2) {
            var c2 = this.core.$slide.eq(b2).find(".lg-video-cont");
            c2.hasClass("lg-has-iframe") || (c2.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = true);
          }
          function d(b2, c2, d2) {
            var e2 = this, f2 = e2.core.$slide.eq(c2), g = f2.find(".lg-youtube").get(0), h = f2.find(".lg-vimeo").get(0), i = f2.find(".lg-dailymotion").get(0), j = f2.find(".lg-vk").get(0), k = f2.find(".lg-html5").get(0);
            if (g)
              g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (h)
              try {
                $f(h).api("pause");
              } catch (a2) {
                console.error("Make sure you have included froogaloop2 js");
              }
            else if (i)
              i.contentWindow.postMessage("pause", "*");
            else if (k)
              if (e2.core.s.videojs)
                try {
                  videojs(k).pause();
                } catch (a2) {
                  console.error("Make sure you have included videojs");
                }
              else
                k.pause();
            j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
            var l;
            l = e2.core.s.dynamic ? e2.core.s.dynamicEl[d2].src : e2.core.$items.eq(d2).attr("href") || e2.core.$items.eq(d2).attr("data-src");
            var m = e2.core.isVideo(l, d2) || {};
            (m.youtube || m.vimeo || m.dailymotion || m.vk) && e2.core.$outer.addClass("lg-hide-download");
          }
          var e = { videoMaxWidth: "855px", autoplayFirstVideo: true, youtubePlayerParams: false, vimeoPlayerParams: false, dailymotionPlayerParams: false, vkPlayerParams: false, videojs: false, videojsOptions: {} }, f = function(b2) {
            return this.core = a(b2).data("lightGallery"), this.$el = a(b2), this.core.s = a.extend({}, e, this.core.s), this.videoLoaded = false, this.init(), this;
          };
          f.prototype.init = function() {
            var e2 = this;
            e2.core.$el.on("hasVideo.lg.tm", b.bind(this)), e2.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)), e2.core.doCss() && e2.core.$items.length > 1 && (e2.core.s.enableSwipe || e2.core.s.enableDrag) ? e2.core.$el.on("onSlideClick.lg.tm", function() {
              var a2 = e2.core.$slide.eq(e2.core.index);
              e2.loadVideoOnclick(a2);
            }) : e2.core.$slide.on("click.lg", function() {
              e2.loadVideoOnclick(a(this));
            }), e2.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)), e2.core.$el.on("onAfterSlide.lg.tm", function(a2, b2) {
              e2.core.$slide.eq(b2).removeClass("lg-video-playing");
            });
          }, f.prototype.loadVideo = function(b2, c2, d2, e2, f2) {
            var g = "", h = 1, i = "", j = this.core.isVideo(b2, e2) || {};
            if (d2 && (h = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), j.youtube)
              i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c2 + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.vimeo)
              i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c2 + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            else if (j.dailymotion)
              i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c2 + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.html5) {
              var k = f2.substring(0, 1);
              "." !== k && "#" !== k || (f2 = a(f2).html()), g = f2;
            } else
              j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c2 + '" width="560" height="315" src="//vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
            return g;
          }, f.prototype.loadVideoOnclick = function(a2) {
            var b2 = this;
            if (a2.find(".lg-object").hasClass("lg-has-poster") && a2.find(".lg-object").is(":visible"))
              if (a2.hasClass("lg-has-video")) {
                var c2 = a2.find(".lg-youtube").get(0), d2 = a2.find(".lg-vimeo").get(0), e2 = a2.find(".lg-dailymotion").get(0), f2 = a2.find(".lg-html5").get(0);
                if (c2)
                  c2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                else if (d2)
                  try {
                    $f(d2).api("play");
                  } catch (a3) {
                    console.error("Make sure you have included froogaloop2 js");
                  }
                else if (e2)
                  e2.contentWindow.postMessage("play", "*");
                else if (f2)
                  if (b2.core.s.videojs)
                    try {
                      videojs(f2).play();
                    } catch (a3) {
                      console.error("Make sure you have included videojs");
                    }
                  else
                    f2.play();
                a2.addClass("lg-video-playing");
              } else {
                a2.addClass("lg-video-playing lg-has-video");
                var g, h, i = function(c3, d3) {
                  if (a2.find(".lg-video").append(b2.loadVideo(c3, "", false, b2.core.index, d3)), d3)
                    if (b2.core.s.videojs)
                      try {
                        videojs(b2.core.$slide.eq(b2.core.index).find(".lg-html5").get(0), b2.core.s.videojsOptions, function() {
                          this.play();
                        });
                      } catch (a3) {
                        console.error("Make sure you have included videojs");
                      }
                    else
                      b2.core.$slide.eq(b2.core.index).find(".lg-html5").get(0).play();
                };
                b2.core.s.dynamic ? (g = b2.core.s.dynamicEl[b2.core.index].src, h = b2.core.s.dynamicEl[b2.core.index].html, i(g, h)) : (g = b2.core.$items.eq(b2.core.index).attr("href") || b2.core.$items.eq(b2.core.index).attr("data-src"), h = b2.core.$items.eq(b2.core.index).attr("data-html"), i(g, h));
                var j = a2.find(".lg-object");
                a2.find(".lg-video").append(j), a2.find(".lg-video-object").hasClass("lg-html5") || (a2.removeClass("lg-complete"), a2.find(".lg-video-object").on("load.lg error.lg", function() {
                  a2.addClass("lg-complete");
                }));
              }
          }, f.prototype.destroy = function() {
            this.videoLoaded = false;
          }, a.fn.lightGallery.modules.video = f;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = function() {
            var a2 = false, b2 = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b2 && parseInt(b2[2], 10) < 54 && (a2 = true), a2;
          }, c = { scale: 1, zoom: true, actualSize: true, enableZoomAfter: 300, useLeftForZoom: b() }, d = function(b2) {
            return this.core = a(b2).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = false, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this;
          };
          d.prototype.init = function() {
            var b2 = this, c2 = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b2.core.s.actualSize && (c2 += '<span id="lg-actual-size" class="lg-icon"></span>'), b2.core.s.useLeftForZoom ? b2.core.$outer.addClass("lg-use-left-for-zoom") : b2.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c2), b2.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c3, d3, e2) {
              var f2 = b2.core.s.enableZoomAfter + e2;
              a("body").hasClass("lg-from-hash") && e2 ? f2 = 0 : a("body").removeClass("lg-from-hash"), b2.zoomabletimeout = setTimeout(function() {
                b2.core.$slide.eq(d3).addClass("lg-zoomable");
              }, f2 + 30);
            });
            var d2 = 1, e = function(c3) {
              var d3, e2, f2 = b2.core.$outer.find(".lg-current .lg-image"), g2 = (a(window).width() - f2.prop("offsetWidth")) / 2, h2 = (a(window).height() - f2.prop("offsetHeight")) / 2 + a(window).scrollTop();
              d3 = b2.pageX - g2, e2 = b2.pageY - h2;
              var i = (c3 - 1) * d3, j = (c3 - 1) * e2;
              f2.css("transform", "scale3d(" + c3 + ", " + c3 + ", 1)").attr("data-scale", c3), b2.core.s.useLeftForZoom ? f2.parent().css({ left: -i + "px", top: -j + "px" }).attr("data-x", i).attr("data-y", j) : f2.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j);
            }, f = function() {
              d2 > 1 ? b2.core.$outer.addClass("lg-zoomed") : b2.resetZoom(), d2 < 1 && (d2 = 1), e(d2);
            }, g = function(c3, e2, g2, h2) {
              var i, j = e2.prop("offsetWidth");
              i = b2.core.s.dynamic ? b2.core.s.dynamicEl[g2].width || e2[0].naturalWidth || j : b2.core.$items.eq(g2).attr("data-width") || e2[0].naturalWidth || j;
              var k;
              b2.core.$outer.hasClass("lg-zoomed") ? d2 = 1 : i > j && (k = i / j, d2 = k || 2), h2 ? (b2.pageX = a(window).width() / 2, b2.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b2.pageX = c3.pageX || c3.originalEvent.targetTouches[0].pageX, b2.pageY = c3.pageY || c3.originalEvent.targetTouches[0].pageY), f(), setTimeout(function() {
                b2.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }, 10);
            }, h = false;
            b2.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a2, c3) {
              var d3 = b2.core.$slide.eq(c3).find(".lg-image");
              d3.on("dblclick", function(a3) {
                g(a3, d3, c3);
              }), d3.on("touchstart", function(a3) {
                h ? (clearTimeout(h), h = null, g(a3, d3, c3)) : h = setTimeout(function() {
                  h = null;
                }, 300), a3.preventDefault();
              });
            }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
              b2.pageX = a(window).width() / 2, b2.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d2);
            }), a("#lg-zoom-out").on("click.lg", function() {
              b2.core.$outer.find(".lg-current .lg-image").length && (d2 -= b2.core.s.scale, f());
            }), a("#lg-zoom-in").on("click.lg", function() {
              b2.core.$outer.find(".lg-current .lg-image").length && (d2 += b2.core.s.scale, f());
            }), a("#lg-actual-size").on("click.lg", function(a2) {
              g(a2, b2.core.$slide.eq(b2.core.index).find(".lg-image"), b2.core.index, true);
            }), b2.core.$el.on("onBeforeSlide.lg.tm", function() {
              d2 = 1, b2.resetZoom();
            }), b2.zoomDrag(), b2.zoomSwipe();
          }, d.prototype.resetZoom = function() {
            this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop();
          }, d.prototype.zoomSwipe = function() {
            var a2 = this, b2 = {}, c2 = {}, d2 = false, e = false, f = false;
            a2.core.$slide.on("touchstart.lg", function(c3) {
              if (a2.core.$outer.hasClass("lg-zoomed")) {
                var d3 = a2.core.$slide.eq(a2.core.index).find(".lg-object");
                f = d3.prop("offsetHeight") * d3.attr("data-scale") > a2.core.$outer.find(".lg").height(), e = d3.prop("offsetWidth") * d3.attr("data-scale") > a2.core.$outer.find(".lg").width(), (e || f) && (c3.preventDefault(), b2 = { x: c3.originalEvent.targetTouches[0].pageX, y: c3.originalEvent.targetTouches[0].pageY });
              }
            }), a2.core.$slide.on("touchmove.lg", function(g) {
              if (a2.core.$outer.hasClass("lg-zoomed")) {
                var h, i, j = a2.core.$slide.eq(a2.core.index).find(".lg-img-wrap");
                g.preventDefault(), d2 = true, c2 = { x: g.originalEvent.targetTouches[0].pageX, y: g.originalEvent.targetTouches[0].pageY }, a2.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c2.y - b2.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c2.x - b2.x) : -Math.abs(j.attr("data-x")), (Math.abs(c2.x - b2.x) > 15 || Math.abs(c2.y - b2.y) > 15) && (a2.core.s.useLeftForZoom ? j.css({ left: h + "px", top: i + "px" }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
              }
            }), a2.core.$slide.on("touchend.lg", function() {
              a2.core.$outer.hasClass("lg-zoomed") && d2 && (d2 = false, a2.core.$outer.removeClass("lg-zoom-dragging"), a2.touchendZoom(b2, c2, e, f));
            });
          }, d.prototype.zoomDrag = function() {
            var b2 = this, c2 = {}, d2 = {}, e = false, f = false, g = false, h = false;
            b2.core.$slide.on("mousedown.lg.zoom", function(d3) {
              var f2 = b2.core.$slide.eq(b2.core.index).find(".lg-object");
              h = f2.prop("offsetHeight") * f2.attr("data-scale") > b2.core.$outer.find(".lg").height(), g = f2.prop("offsetWidth") * f2.attr("data-scale") > b2.core.$outer.find(".lg").width(), b2.core.$outer.hasClass("lg-zoomed") && a(d3.target).hasClass("lg-object") && (g || h) && (d3.preventDefault(), c2 = { x: d3.pageX, y: d3.pageY }, e = true, b2.core.$outer.scrollLeft += 1, b2.core.$outer.scrollLeft -= 1, b2.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
            }), a(window).on("mousemove.lg.zoom", function(a2) {
              if (e) {
                var i, j, k = b2.core.$slide.eq(b2.core.index).find(".lg-img-wrap");
                f = true, d2 = { x: a2.pageX, y: a2.pageY }, b2.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d2.y - c2.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d2.x - c2.x) : -Math.abs(k.attr("data-x")), b2.core.s.useLeftForZoom ? k.css({ left: i + "px", top: j + "px" }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)");
              }
            }), a(window).on("mouseup.lg.zoom", function(a2) {
              e && (e = false, b2.core.$outer.removeClass("lg-zoom-dragging"), !f || c2.x === d2.x && c2.y === d2.y || (d2 = { x: a2.pageX, y: a2.pageY }, b2.touchendZoom(c2, d2, g, h)), f = false), b2.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            });
          }, d.prototype.touchendZoom = function(a2, b2, c2, d2) {
            var e = this, f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"), g = e.core.$slide.eq(e.core.index).find(".lg-object"), h = -Math.abs(f.attr("data-x")) + (b2.x - a2.x), i = -Math.abs(f.attr("data-y")) + (b2.y - a2.y), j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2, k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j), l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2, m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b2.x - a2.x) > 15 || Math.abs(b2.y - a2.y) > 15) && (d2 && (i <= -k ? i = -k : i >= -j && (i = -j)), c2 && (h <= -m ? h = -m : h >= -l && (h = -l)), d2 ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c2 ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({ left: h + "px", top: i + "px" }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
          }, d.prototype.destroy = function() {
            var b2 = this;
            b2.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b2.core.$slide.off(".lg.zoom"), b2.core.$el.off(".lg.tm.zoom"), b2.resetZoom(), clearTimeout(b2.zoomabletimeout), b2.zoomabletimeout = false;
          }, a.fn.lightGallery.modules.zoom = d;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = { hash: true }, c = function(c2) {
            return this.core = a(c2).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this;
          };
          c.prototype.init = function() {
            var b2, c2 = this;
            c2.core.$el.on("onAfterSlide.lg.tm", function(a2, b3, d) {
              history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + c2.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c2.core.s.galleryId + "&slide=" + d;
            }), a(window).on("hashchange.lg.hash", function() {
              b2 = window.location.hash;
              var a2 = parseInt(b2.split("&slide=")[1], 10);
              b2.indexOf("lg=" + c2.core.s.galleryId) > -1 ? c2.core.slide(a2, false, false) : c2.core.lGalleryOn && c2.core.destroy();
            });
          }, c.prototype.destroy = function() {
            this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"));
          }, a.fn.lightGallery.modules.hash = c;
        }();
      }), function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a2) {
          return b(a2);
        }) : "object" == typeof exports ? module.exports = b(require_jquery()) : b(jQuery);
      }(0, function(a) {
        !function() {
          "use strict";
          var b = { share: true, facebook: true, facebookDropdownText: "Facebook", twitter: true, twitterDropdownText: "Twitter", googlePlus: true, googlePlusDropdownText: "GooglePlus", pinterest: true, pinterestDropdownText: "Pinterest" }, c = function(c2) {
            return this.core = a(c2).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.share && this.init(), this;
          };
          c.prototype.init = function() {
            var b2 = this, c2 = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
            c2 += b2.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", c2 += b2.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", c2 += b2.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", c2 += b2.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", c2 += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(c2), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), a("#lg-share").on("click.lg", function() {
              b2.core.$outer.toggleClass("lg-dropdown-active");
            }), a("#lg-dropdown-overlay").on("click.lg", function() {
              b2.core.$outer.removeClass("lg-dropdown-active");
            }), b2.core.$el.on("onAfterSlide.lg.tm", function(c3, d, e) {
              setTimeout(function() {
                a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b2.getSahreProps(e, "facebookShareUrl") || window.location.href)), a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b2.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b2.getSahreProps(e, "twitterShareUrl") || window.location.href)), a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b2.getSahreProps(e, "googleplusShareUrl") || window.location.href)), a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b2.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b2.getSahreProps(e, "src")) + "&description=" + b2.getSahreProps(e, "pinterestText"));
              }, 100);
            });
          }, c.prototype.getSahreProps = function(a2, b2) {
            var c2 = "";
            if (this.core.s.dynamic)
              c2 = this.core.s.dynamicEl[a2][b2];
            else {
              var d = this.core.$items.eq(a2).attr("href"), e = this.core.$items.eq(a2).data(b2);
              c2 = "src" === b2 ? d || e : e;
            }
            return c2;
          }, c.prototype.destroy = function() {
          }, a.fn.lightGallery.modules.share = c;
        }();
      });
    }
  });

  // plugins/sticky-sidebar/dist/sticky-sidebar.min.js
  var require_sticky_sidebar_min = __commonJS({
    "plugins/sticky-sidebar/dist/sticky-sidebar.min.js"(exports, module) {
      !function(t2, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t2.StickySidebar = {});
      }(exports, function(t2) {
        "use strict";
        "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var e, i, n = (function(t3, e2) {
          (function(t4) {
            Object.defineProperty(t4, "__esModule", { value: true });
            var l, n2, e3 = function() {
              function n3(t5, e4) {
                for (var i3 = 0; i3 < e4.length; i3++) {
                  var n4 = e4[i3];
                  n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t5, n4.key, n4);
                }
              }
              return function(t5, e4, i3) {
                return e4 && n3(t5.prototype, e4), i3 && n3(t5, i3), t5;
              };
            }(), i2 = (l = ".stickySidebar", n2 = { topSpacing: 0, bottomSpacing: 0, containerSelector: false, innerWrapperSelector: ".inner-wrapper-sticky", stickyClass: "is-affixed", resizeSensor: true, minWidth: false }, function() {
              function c(t5) {
                var e4 = this, i3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (function(t6, e5) {
                  if (!(t6 instanceof e5))
                    throw new TypeError("Cannot call a class as a function");
                }(this, c), this.options = c.extend(n2, i3), this.sidebar = "string" == typeof t5 ? document.querySelector(t5) : t5, void 0 === this.sidebar)
                  throw new Error("There is no specific sidebar element.");
                this.sidebarInner = false, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = { transform: false, transform3d: false }, this._initialized = false, this._reStyle = false, this._breakpoint = false, this.dimensions = { translateY: 0, maxTranslateY: 0, topSpacing: 0, lastTopSpacing: 0, bottomSpacing: 0, lastBottomSpacing: 0, sidebarHeight: 0, sidebarWidth: 0, containerTop: 0, containerHeight: 0, viewportHeight: 0, viewportTop: 0, lastViewportTop: 0 }, ["handleEvent"].forEach(function(t6) {
                  e4[t6] = e4[t6].bind(e4);
                }), this.initialize();
              }
              return e3(c, [{ key: "initialize", value: function() {
                var i3 = this;
                if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = false)), !this.sidebarInner) {
                  var t5 = document.createElement("div");
                  for (t5.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t5); this.sidebar.firstChild != t5; )
                    t5.appendChild(this.sidebar.firstChild);
                  this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
                }
                if (this.options.containerSelector) {
                  var e4 = document.querySelectorAll(this.options.containerSelector);
                  if ((e4 = Array.prototype.slice.call(e4)).forEach(function(t6, e5) {
                    t6.contains(i3.sidebar) && (i3.container = t6);
                  }), !e4.length)
                    throw new Error("The container does not contains on the sidebar.");
                }
                "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = true;
              } }, { key: "bindEvents", value: function() {
                window.addEventListener("resize", this, { passive: true, capture: false }), window.addEventListener("scroll", this, { passive: true, capture: false }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
              } }, { key: "handleEvent", value: function(t5) {
                this.updateSticky(t5);
              } }, { key: "calcDimensions", value: function() {
                if (!this._breakpoint) {
                  var t5 = this.dimensions;
                  t5.containerTop = c.offsetRelative(this.container).top, t5.containerHeight = this.container.clientHeight, t5.containerBottom = t5.containerTop + t5.containerHeight, t5.sidebarHeight = this.sidebarInner.offsetHeight, t5.sidebarWidth = this.sidebarInner.offsetWidth, t5.viewportHeight = window.innerHeight, t5.maxTranslateY = t5.containerHeight - t5.sidebarHeight, this._calcDimensionsWithScroll();
                }
              } }, { key: "_calcDimensionsWithScroll", value: function() {
                var t5 = this.dimensions;
                t5.sidebarLeft = c.offsetRelative(this.sidebar).left, t5.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t5.viewportBottom = t5.viewportTop + t5.viewportHeight, t5.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t5.topSpacing = this.options.topSpacing, t5.bottomSpacing = this.options.bottomSpacing, "function" == typeof t5.topSpacing && (t5.topSpacing = parseInt(t5.topSpacing(this.sidebar)) || 0), "function" == typeof t5.bottomSpacing && (t5.bottomSpacing = parseInt(t5.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t5.topSpacing < t5.lastTopSpacing && (t5.translateY += t5.lastTopSpacing - t5.topSpacing, this._reStyle = true) : "VIEWPORT-BOTTOM" === this.affixedType && t5.bottomSpacing < t5.lastBottomSpacing && (t5.translateY += t5.lastBottomSpacing - t5.bottomSpacing, this._reStyle = true), t5.lastTopSpacing = t5.topSpacing, t5.lastBottomSpacing = t5.bottomSpacing;
              } }, { key: "isSidebarFitsViewport", value: function() {
                var t5 = this.dimensions, e4 = "down" === this.scrollDirection ? t5.lastBottomSpacing : t5.lastTopSpacing;
                return this.dimensions.sidebarHeight + e4 < this.dimensions.viewportHeight;
              } }, { key: "observeScrollDir", value: function() {
                var t5 = this.dimensions;
                if (t5.lastViewportTop !== t5.viewportTop) {
                  var e4 = "down" === this.direction ? Math.min : Math.max;
                  t5.viewportTop === e4(t5.viewportTop, t5.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
                }
              } }, { key: "getAffixType", value: function() {
                this._calcDimensionsWithScroll();
                var t5 = this.dimensions, e4 = t5.viewportTop + t5.topSpacing, i3 = this.affixedType;
                return e4 <= t5.containerTop || t5.containerHeight <= t5.sidebarHeight ? (t5.translateY = 0, i3 = "STATIC") : i3 = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t5.translateY = Math.max(0, t5.translateY), t5.translateY = Math.min(t5.containerHeight, t5.translateY), t5.translateY = Math.round(t5.translateY), t5.lastViewportTop = t5.viewportTop, i3;
              } }, { key: "_getAffixTypeScrollingDown", value: function() {
                var t5 = this.dimensions, e4 = t5.sidebarHeight + t5.containerTop, i3 = t5.viewportTop + t5.topSpacing, n3 = t5.viewportBottom - t5.bottomSpacing, o2 = this.affixedType;
                return this.isSidebarFitsViewport() ? t5.sidebarHeight + i3 >= t5.containerBottom ? (t5.translateY = t5.containerBottom - e4, o2 = "CONTAINER-BOTTOM") : i3 >= t5.containerTop && (t5.translateY = i3 - t5.containerTop, o2 = "VIEWPORT-TOP") : t5.containerBottom <= n3 ? (t5.translateY = t5.containerBottom - e4, o2 = "CONTAINER-BOTTOM") : e4 + t5.translateY <= n3 ? (t5.translateY = n3 - e4, o2 = "VIEWPORT-BOTTOM") : t5.containerTop + t5.translateY <= i3 && 0 !== t5.translateY && t5.maxTranslateY !== t5.translateY && (o2 = "VIEWPORT-UNBOTTOM"), o2;
              } }, { key: "_getAffixTypeScrollingUp", value: function() {
                var t5 = this.dimensions, e4 = t5.sidebarHeight + t5.containerTop, i3 = t5.viewportTop + t5.topSpacing, n3 = t5.viewportBottom - t5.bottomSpacing, o2 = this.affixedType;
                return i3 <= t5.translateY + t5.containerTop ? (t5.translateY = i3 - t5.containerTop, o2 = "VIEWPORT-TOP") : t5.containerBottom <= n3 ? (t5.translateY = t5.containerBottom - e4, o2 = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t5.containerTop <= i3 && 0 !== t5.translateY && t5.maxTranslateY !== t5.translateY && (o2 = "VIEWPORT-UNBOTTOM"), o2;
              } }, { key: "_getStyle", value: function(t5) {
                if (void 0 !== t5) {
                  var e4 = { inner: {}, outer: {} }, i3 = this.dimensions;
                  switch (t5) {
                    case "VIEWPORT-TOP":
                      e4.inner = { position: "fixed", top: i3.topSpacing, left: i3.sidebarLeft - i3.viewportLeft, width: i3.sidebarWidth };
                      break;
                    case "VIEWPORT-BOTTOM":
                      e4.inner = { position: "fixed", top: "auto", left: i3.sidebarLeft, bottom: i3.bottomSpacing, width: i3.sidebarWidth };
                      break;
                    case "CONTAINER-BOTTOM":
                    case "VIEWPORT-UNBOTTOM":
                      var n3 = this._getTranslate(0, i3.translateY + "px");
                      e4.inner = n3 ? { transform: n3 } : { position: "absolute", top: i3.translateY, width: i3.sidebarWidth };
                  }
                  switch (t5) {
                    case "VIEWPORT-TOP":
                    case "VIEWPORT-BOTTOM":
                    case "VIEWPORT-UNBOTTOM":
                    case "CONTAINER-BOTTOM":
                      e4.outer = { height: i3.sidebarHeight, position: "relative" };
                  }
                  return e4.outer = c.extend({ height: "", position: "" }, e4.outer), e4.inner = c.extend({ position: "relative", top: "", left: "", bottom: "", width: "", transform: "" }, e4.inner), e4;
                }
              } }, { key: "stickyPosition", value: function(t5) {
                if (!this._breakpoint) {
                  t5 = this._reStyle || t5 || false, this.options.topSpacing, this.options.bottomSpacing;
                  var e4 = this.getAffixType(), i3 = this._getStyle(e4);
                  if ((this.affixedType != e4 || t5) && e4) {
                    var n3 = "affix." + e4.toLowerCase().replace("viewport-", "") + l;
                    for (var o2 in c.eventTrigger(this.sidebar, n3), "STATIC" === e4 ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i3.outer) {
                      var s = "number" == typeof i3.outer[o2] ? "px" : "";
                      this.sidebar.style[o2] = i3.outer[o2] + s;
                    }
                    for (var r in i3.inner) {
                      var a = "number" == typeof i3.inner[r] ? "px" : "";
                      this.sidebarInner.style[r] = i3.inner[r] + a;
                    }
                    var p = "affixed." + e4.toLowerCase().replace("viewport-", "") + l;
                    c.eventTrigger(this.sidebar, p);
                  } else
                    this._initialized && (this.sidebarInner.style.left = i3.inner.left);
                  this.affixedType = e4;
                }
              } }, { key: "_widthBreakpoint", value: function() {
                window.innerWidth <= this.options.minWidth ? (this._breakpoint = true, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = false;
              } }, { key: "updateSticky", value: function() {
                var t5, e4 = this, i3 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                this._running || (this._running = true, t5 = i3.type, requestAnimationFrame(function() {
                  switch (t5) {
                    case "scroll":
                      e4._calcDimensionsWithScroll(), e4.observeScrollDir(), e4.stickyPosition();
                      break;
                    case "resize":
                    default:
                      e4._widthBreakpoint(), e4.calcDimensions(), e4.stickyPosition(true);
                  }
                  e4._running = false;
                }));
              } }, { key: "_setSupportFeatures", value: function() {
                var t5 = this.support;
                t5.transform = c.supportTransform(), t5.transform3d = c.supportTransform(true);
              } }, { key: "_getTranslate", value: function() {
                var t5 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e4 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                return this.support.transform3d ? "translate3d(" + t5 + ", " + e4 + ", " + i3 + ")" : !!this.support.translate && "translate(" + t5 + ", " + e4 + ")";
              } }, { key: "destroy", value: function() {
                window.removeEventListener("resize", this, { capture: false }), window.removeEventListener("scroll", this, { capture: false }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
                var t5 = { inner: {}, outer: {} };
                for (var e4 in t5.inner = { position: "", top: "", left: "", bottom: "", width: "", transform: "" }, t5.outer = { height: "", position: "" }, t5.outer)
                  this.sidebar.style[e4] = t5.outer[e4];
                for (var i3 in t5.inner)
                  this.sidebarInner.style[i3] = t5.inner[i3];
                this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
              } }], [{ key: "supportTransform", value: function(t5) {
                var i3 = false, e4 = t5 ? "perspective" : "transform", n3 = e4.charAt(0).toUpperCase() + e4.slice(1), o2 = document.createElement("support").style;
                return (e4 + " " + ["Webkit", "Moz", "O", "ms"].join(n3 + " ") + n3).split(" ").forEach(function(t6, e5) {
                  if (void 0 !== o2[t6])
                    return i3 = t6, false;
                }), i3;
              } }, { key: "eventTrigger", value: function(t5, e4, i3) {
                try {
                  var n3 = new CustomEvent(e4, { detail: i3 });
                } catch (t6) {
                  (n3 = document.createEvent("CustomEvent")).initCustomEvent(e4, true, true, i3);
                }
                t5.dispatchEvent(n3);
              } }, { key: "extend", value: function(t5, e4) {
                var i3 = {};
                for (var n3 in t5)
                  void 0 !== e4[n3] ? i3[n3] = e4[n3] : i3[n3] = t5[n3];
                return i3;
              } }, { key: "offsetRelative", value: function(t5) {
                var e4 = { left: 0, top: 0 };
                do {
                  var i3 = t5.offsetTop, n3 = t5.offsetLeft;
                  isNaN(i3) || (e4.top += i3), isNaN(n3) || (e4.left += n3), t5 = "BODY" === t5.tagName ? t5.parentElement : t5.offsetParent;
                } while (t5);
                return e4;
              } }, { key: "addClass", value: function(t5, e4) {
                c.hasClass(t5, e4) || (t5.classList ? t5.classList.add(e4) : t5.className += " " + e4);
              } }, { key: "removeClass", value: function(t5, e4) {
                c.hasClass(t5, e4) && (t5.classList ? t5.classList.remove(e4) : t5.className = t5.className.replace(new RegExp("(^|\\b)" + e4.split(" ").join("|") + "(\\b|$)", "gi"), " "));
              } }, { key: "hasClass", value: function(t5, e4) {
                return t5.classList ? t5.classList.contains(e4) : new RegExp("(^| )" + e4 + "( |$)", "gi").test(t5.className);
              } }, { key: "defaults", get: function() {
                return n2;
              } }]), c;
            }());
            t4.default = i2, window.StickySidebar = i2;
          })(e2);
        }(e = { exports: {} }, e.exports), e.exports), o = (i = n) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
        t2.default = o, t2.__moduleExports = n, Object.defineProperty(t2, "__esModule", { value: true });
      });
    }
  });

  // plugins/select2/dist/js/select2.full.min.js
  var require_select2_full_min = __commonJS({
    "plugins/select2/dist/js/select2.full.min.js"(exports, module) {
      !function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(b, c) {
          return void 0 === c && (c = "undefined" != typeof window ? require_jquery() : require_jquery()(b)), a(c), c;
        } : a(jQuery);
      }(function(a) {
        var b = function() {
          if (a && a.fn && a.fn.select2 && a.fn.select2.amd)
            var b2 = a.fn.select2.amd;
          var b2;
          return function() {
            if (!b2 || !b2.requirejs) {
              b2 ? c2 = b2 : b2 = {};
              var a2, c2, d;
              !function(b3) {
                function e(a3, b4) {
                  return v.call(a3, b4);
                }
                function f(a3, b4) {
                  var c3, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2 = b4 && b4.split("/"), p2 = t2.map, q2 = p2 && p2["*"] || {};
                  if (a3) {
                    for (a3 = a3.split("/"), g2 = a3.length - 1, t2.nodeIdCompat && x.test(a3[g2]) && (a3[g2] = a3[g2].replace(x, "")), "." === a3[0].charAt(0) && o2 && (n2 = o2.slice(0, o2.length - 1), a3 = n2.concat(a3)), k2 = 0; k2 < a3.length; k2++)
                      if ("." === (m2 = a3[k2]))
                        a3.splice(k2, 1), k2 -= 1;
                      else if (".." === m2) {
                        if (0 === k2 || 1 === k2 && ".." === a3[2] || ".." === a3[k2 - 1])
                          continue;
                        k2 > 0 && (a3.splice(k2 - 1, 2), k2 -= 2);
                      }
                    a3 = a3.join("/");
                  }
                  if ((o2 || q2) && p2) {
                    for (c3 = a3.split("/"), k2 = c3.length; k2 > 0; k2 -= 1) {
                      if (d2 = c3.slice(0, k2).join("/"), o2) {
                        for (l2 = o2.length; l2 > 0; l2 -= 1)
                          if ((e2 = p2[o2.slice(0, l2).join("/")]) && (e2 = e2[d2])) {
                            f2 = e2, h2 = k2;
                            break;
                          }
                      }
                      if (f2)
                        break;
                      !i2 && q2 && q2[d2] && (i2 = q2[d2], j2 = k2);
                    }
                    !f2 && i2 && (f2 = i2, h2 = j2), f2 && (c3.splice(0, h2, f2), a3 = c3.join("/"));
                  }
                  return a3;
                }
                function g(a3, c3) {
                  return function() {
                    var d2 = w.call(arguments, 0);
                    return "string" != typeof d2[0] && 1 === d2.length && d2.push(null), o.apply(b3, d2.concat([a3, c3]));
                  };
                }
                function h(a3) {
                  return function(b4) {
                    return f(b4, a3);
                  };
                }
                function i(a3) {
                  return function(b4) {
                    r[a3] = b4;
                  };
                }
                function j(a3) {
                  if (e(s, a3)) {
                    var c3 = s[a3];
                    delete s[a3], u[a3] = true, n.apply(b3, c3);
                  }
                  if (!e(r, a3) && !e(u, a3))
                    throw new Error("No " + a3);
                  return r[a3];
                }
                function k(a3) {
                  var b4, c3 = a3 ? a3.indexOf("!") : -1;
                  return c3 > -1 && (b4 = a3.substring(0, c3), a3 = a3.substring(c3 + 1, a3.length)), [b4, a3];
                }
                function l(a3) {
                  return a3 ? k(a3) : [];
                }
                function m(a3) {
                  return function() {
                    return t2 && t2.config && t2.config[a3] || {};
                  };
                }
                var n, o, p, q, r = {}, s = {}, t2 = {}, u = {}, v = Object.prototype.hasOwnProperty, w = [].slice, x = /\.js$/;
                p = function(a3, b4) {
                  var c3, d2 = k(a3), e2 = d2[0], g2 = b4[1];
                  return a3 = d2[1], e2 && (e2 = f(e2, g2), c3 = j(e2)), e2 ? a3 = c3 && c3.normalize ? c3.normalize(a3, h(g2)) : f(a3, g2) : (a3 = f(a3, g2), d2 = k(a3), e2 = d2[0], a3 = d2[1], e2 && (c3 = j(e2))), { f: e2 ? e2 + "!" + a3 : a3, n: a3, pr: e2, p: c3 };
                }, q = { require: function(a3) {
                  return g(a3);
                }, exports: function(a3) {
                  var b4 = r[a3];
                  return void 0 !== b4 ? b4 : r[a3] = {};
                }, module: function(a3) {
                  return { id: a3, uri: "", exports: r[a3], config: m(a3) };
                } }, n = function(a3, c3, d2, f2) {
                  var h2, k2, m2, n2, o2, t3, v2, w2 = [], x2 = typeof d2;
                  if (f2 = f2 || a3, t3 = l(f2), "undefined" === x2 || "function" === x2) {
                    for (c3 = !c3.length && d2.length ? ["require", "exports", "module"] : c3, o2 = 0; o2 < c3.length; o2 += 1)
                      if (n2 = p(c3[o2], t3), "require" === (k2 = n2.f))
                        w2[o2] = q.require(a3);
                      else if ("exports" === k2)
                        w2[o2] = q.exports(a3), v2 = true;
                      else if ("module" === k2)
                        h2 = w2[o2] = q.module(a3);
                      else if (e(r, k2) || e(s, k2) || e(u, k2))
                        w2[o2] = j(k2);
                      else {
                        if (!n2.p)
                          throw new Error(a3 + " missing " + k2);
                        n2.p.load(n2.n, g(f2, true), i(k2), {}), w2[o2] = r[k2];
                      }
                    m2 = d2 ? d2.apply(r[a3], w2) : void 0, a3 && (h2 && h2.exports !== b3 && h2.exports !== r[a3] ? r[a3] = h2.exports : m2 === b3 && v2 || (r[a3] = m2));
                  } else
                    a3 && (r[a3] = d2);
                }, a2 = c2 = o = function(a3, c3, d2, e2, f2) {
                  if ("string" == typeof a3)
                    return q[a3] ? q[a3](c3) : j(p(a3, l(c3)).f);
                  if (!a3.splice) {
                    if (t2 = a3, t2.deps && o(t2.deps, t2.callback), !c3)
                      return;
                    c3.splice ? (a3 = c3, c3 = d2, d2 = null) : a3 = b3;
                  }
                  return c3 = c3 || function() {
                  }, "function" == typeof d2 && (d2 = e2, e2 = f2), e2 ? n(b3, a3, c3, d2) : setTimeout(function() {
                    n(b3, a3, c3, d2);
                  }, 4), o;
                }, o.config = function(a3) {
                  return o(a3);
                }, a2._defined = r, d = function(a3, b4, c3) {
                  if ("string" != typeof a3)
                    throw new Error("See almond README: incorrect module build, no module name");
                  b4.splice || (c3 = b4, b4 = []), e(r, a3) || e(s, a3) || (s[a3] = [a3, b4, c3]);
                }, d.amd = { jQuery: true };
              }(), b2.requirejs = a2, b2.require = c2, b2.define = d;
            }
          }(), b2.define("almond", function() {
          }), b2.define("jquery", [], function() {
            var b3 = a || $;
            return null == b3 && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b3;
          }), b2.define("select2/utils", ["jquery"], function(a2) {
            function b3(a3) {
              var b4 = a3.prototype, c3 = [];
              for (var d2 in b4) {
                "function" == typeof b4[d2] && ("constructor" !== d2 && c3.push(d2));
              }
              return c3;
            }
            var c2 = {};
            c2.Extend = function(a3, b4) {
              function c3() {
                this.constructor = a3;
              }
              var d2 = {}.hasOwnProperty;
              for (var e2 in b4)
                d2.call(b4, e2) && (a3[e2] = b4[e2]);
              return c3.prototype = b4.prototype, a3.prototype = new c3(), a3.__super__ = b4.prototype, a3;
            }, c2.Decorate = function(a3, c3) {
              function d2() {
                var b4 = Array.prototype.unshift, d3 = c3.prototype.constructor.length, e3 = a3.prototype.constructor;
                d3 > 0 && (b4.call(arguments, a3.prototype.constructor), e3 = c3.prototype.constructor), e3.apply(this, arguments);
              }
              function e2() {
                this.constructor = d2;
              }
              var f = b3(c3), g = b3(a3);
              c3.displayName = a3.displayName, d2.prototype = new e2();
              for (var h = 0; h < g.length; h++) {
                var i = g[h];
                d2.prototype[i] = a3.prototype[i];
              }
              for (var j = function(a4) {
                var b4 = function() {
                };
                a4 in d2.prototype && (b4 = d2.prototype[a4]);
                var e3 = c3.prototype[a4];
                return function() {
                  return Array.prototype.unshift.call(arguments, b4), e3.apply(this, arguments);
                };
              }, k = 0; k < f.length; k++) {
                var l = f[k];
                d2.prototype[l] = j(l);
              }
              return d2;
            };
            var d = function() {
              this.listeners = {};
            };
            d.prototype.on = function(a3, b4) {
              this.listeners = this.listeners || {}, a3 in this.listeners ? this.listeners[a3].push(b4) : this.listeners[a3] = [b4];
            }, d.prototype.trigger = function(a3) {
              var b4 = Array.prototype.slice, c3 = b4.call(arguments, 1);
              this.listeners = this.listeners || {}, null == c3 && (c3 = []), 0 === c3.length && c3.push({}), c3[0]._type = a3, a3 in this.listeners && this.invoke(this.listeners[a3], b4.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, d.prototype.invoke = function(a3, b4) {
              for (var c3 = 0, d2 = a3.length; c3 < d2; c3++)
                a3[c3].apply(this, b4);
            }, c2.Observable = d, c2.generateChars = function(a3) {
              for (var b4 = "", c3 = 0; c3 < a3; c3++) {
                b4 += Math.floor(36 * Math.random()).toString(36);
              }
              return b4;
            }, c2.bind = function(a3, b4) {
              return function() {
                a3.apply(b4, arguments);
              };
            }, c2._convertData = function(a3) {
              for (var b4 in a3) {
                var c3 = b4.split("-"), d2 = a3;
                if (1 !== c3.length) {
                  for (var e2 = 0; e2 < c3.length; e2++) {
                    var f = c3[e2];
                    f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d2 || (d2[f] = {}), e2 == c3.length - 1 && (d2[f] = a3[b4]), d2 = d2[f];
                  }
                  delete a3[b4];
                }
              }
              return a3;
            }, c2.hasScroll = function(b4, c3) {
              var d2 = a2(c3), e2 = c3.style.overflowX, f = c3.style.overflowY;
              return (e2 !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e2 || "scroll" === f || (d2.innerHeight() < c3.scrollHeight || d2.innerWidth() < c3.scrollWidth));
            }, c2.escapeMarkup = function(a3) {
              var b4 = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
              return "string" != typeof a3 ? a3 : String(a3).replace(/[&<>"'\/\\]/g, function(a4) {
                return b4[a4];
              });
            }, c2.appendMany = function(b4, c3) {
              if ("1.7" === a2.fn.jquery.substr(0, 3)) {
                var d2 = a2();
                a2.map(c3, function(a3) {
                  d2 = d2.add(a3);
                }), c3 = d2;
              }
              b4.append(c3);
            }, c2.__cache = {};
            var e = 0;
            return c2.GetUniqueElementId = function(a3) {
              var b4 = a3.getAttribute("data-select2-id");
              return null == b4 && (a3.id ? (b4 = a3.id, a3.setAttribute("data-select2-id", b4)) : (a3.setAttribute("data-select2-id", ++e), b4 = e.toString())), b4;
            }, c2.StoreData = function(a3, b4, d2) {
              var e2 = c2.GetUniqueElementId(a3);
              c2.__cache[e2] || (c2.__cache[e2] = {}), c2.__cache[e2][b4] = d2;
            }, c2.GetData = function(b4, d2) {
              var e2 = c2.GetUniqueElementId(b4);
              return d2 ? c2.__cache[e2] && null != c2.__cache[e2][d2] ? c2.__cache[e2][d2] : a2(b4).data(d2) : c2.__cache[e2];
            }, c2.RemoveData = function(a3) {
              var b4 = c2.GetUniqueElementId(a3);
              null != c2.__cache[b4] && delete c2.__cache[b4];
            }, c2;
          }), b2.define("select2/results", ["jquery", "./utils"], function(a2, b3) {
            function c2(a3, b4, d) {
              this.$element = a3, this.data = d, this.options = b4, c2.__super__.constructor.call(this);
            }
            return b3.Extend(c2, b3.Observable), c2.prototype.render = function() {
              var b4 = a2('<ul class="select2-results__options" role="tree"></ul>');
              return this.options.get("multiple") && b4.attr("aria-multiselectable", "true"), this.$results = b4, b4;
            }, c2.prototype.clear = function() {
              this.$results.empty();
            }, c2.prototype.displayMessage = function(b4) {
              var c3 = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var d = a2('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b4.message);
              d.append(c3(e(b4.args))), d[0].className += " select2-results__message", this.$results.append(d);
            }, c2.prototype.hideMessages = function() {
              this.$results.find(".select2-results__message").remove();
            }, c2.prototype.append = function(a3) {
              this.hideLoading();
              var b4 = [];
              if (null == a3.results || 0 === a3.results.length)
                return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));
              a3.results = this.sort(a3.results);
              for (var c3 = 0; c3 < a3.results.length; c3++) {
                var d = a3.results[c3], e = this.option(d);
                b4.push(e);
              }
              this.$results.append(b4);
            }, c2.prototype.position = function(a3, b4) {
              b4.find(".select2-results").append(a3);
            }, c2.prototype.sort = function(a3) {
              return this.options.get("sorter")(a3);
            }, c2.prototype.highlightFirstItem = function() {
              var a3 = this.$results.find(".select2-results__option[aria-selected]"), b4 = a3.filter("[aria-selected=true]");
              b4.length > 0 ? b4.first().trigger("mouseenter") : a3.first().trigger("mouseenter"), this.ensureHighlightVisible();
            }, c2.prototype.setClasses = function() {
              var c3 = this;
              this.data.current(function(d) {
                var e = a2.map(d, function(a3) {
                  return a3.id.toString();
                });
                c3.$results.find(".select2-results__option[aria-selected]").each(function() {
                  var c4 = a2(this), d2 = b3.GetData(this, "data"), f = "" + d2.id;
                  null != d2.element && d2.element.selected || null == d2.element && a2.inArray(f, e) > -1 ? c4.attr("aria-selected", "true") : c4.attr("aria-selected", "false");
                });
              });
            }, c2.prototype.showLoading = function(a3) {
              this.hideLoading();
              var b4 = this.options.get("translations").get("searching"), c3 = { disabled: true, loading: true, text: b4(a3) }, d = this.option(c3);
              d.className += " loading-results", this.$results.prepend(d);
            }, c2.prototype.hideLoading = function() {
              this.$results.find(".loading-results").remove();
            }, c2.prototype.option = function(c3) {
              var d = document.createElement("li");
              d.className = "select2-results__option";
              var e = { role: "treeitem", "aria-selected": "false" };
              c3.disabled && (delete e["aria-selected"], e["aria-disabled"] = "true"), null == c3.id && delete e["aria-selected"], null != c3._resultId && (d.id = c3._resultId), c3.title && (d.title = c3.title), c3.children && (e.role = "group", e["aria-label"] = c3.text, delete e["aria-selected"]);
              for (var f in e) {
                var g = e[f];
                d.setAttribute(f, g);
              }
              if (c3.children) {
                var h = a2(d), i = document.createElement("strong");
                i.className = "select2-results__group";
                a2(i);
                this.template(c3, i);
                for (var j = [], k = 0; k < c3.children.length; k++) {
                  var l = c3.children[k], m = this.option(l);
                  j.push(m);
                }
                var n = a2("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                n.append(j), h.append(i), h.append(n);
              } else
                this.template(c3, d);
              return b3.StoreData(d, "data", c3), d;
            }, c2.prototype.bind = function(c3, d) {
              var e = this, f = c3.id + "-results";
              this.$results.attr("id", f), c3.on("results:all", function(a3) {
                e.clear(), e.append(a3.data), c3.isOpen() && (e.setClasses(), e.highlightFirstItem());
              }), c3.on("results:append", function(a3) {
                e.append(a3.data), c3.isOpen() && e.setClasses();
              }), c3.on("query", function(a3) {
                e.hideMessages(), e.showLoading(a3);
              }), c3.on("select", function() {
                c3.isOpen() && (e.setClasses(), e.highlightFirstItem());
              }), c3.on("unselect", function() {
                c3.isOpen() && (e.setClasses(), e.highlightFirstItem());
              }), c3.on("open", function() {
                e.$results.attr("aria-expanded", "true"), e.$results.attr("aria-hidden", "false"), e.setClasses(), e.ensureHighlightVisible();
              }), c3.on("close", function() {
                e.$results.attr("aria-expanded", "false"), e.$results.attr("aria-hidden", "true"), e.$results.removeAttr("aria-activedescendant");
              }), c3.on("results:toggle", function() {
                var a3 = e.getHighlightedResults();
                0 !== a3.length && a3.trigger("mouseup");
              }), c3.on("results:select", function() {
                var a3 = e.getHighlightedResults();
                if (0 !== a3.length) {
                  var c4 = b3.GetData(a3[0], "data");
                  "true" == a3.attr("aria-selected") ? e.trigger("close", {}) : e.trigger("select", { data: c4 });
                }
              }), c3.on("results:previous", function() {
                var a3 = e.getHighlightedResults(), b4 = e.$results.find("[aria-selected]"), c4 = b4.index(a3);
                if (!(c4 <= 0)) {
                  var d2 = c4 - 1;
                  0 === a3.length && (d2 = 0);
                  var f2 = b4.eq(d2);
                  f2.trigger("mouseenter");
                  var g = e.$results.offset().top, h = f2.offset().top, i = e.$results.scrollTop() + (h - g);
                  0 === d2 ? e.$results.scrollTop(0) : h - g < 0 && e.$results.scrollTop(i);
                }
              }), c3.on("results:next", function() {
                var a3 = e.getHighlightedResults(), b4 = e.$results.find("[aria-selected]"), c4 = b4.index(a3), d2 = c4 + 1;
                if (!(d2 >= b4.length)) {
                  var f2 = b4.eq(d2);
                  f2.trigger("mouseenter");
                  var g = e.$results.offset().top + e.$results.outerHeight(false), h = f2.offset().top + f2.outerHeight(false), i = e.$results.scrollTop() + h - g;
                  0 === d2 ? e.$results.scrollTop(0) : h > g && e.$results.scrollTop(i);
                }
              }), c3.on("results:focus", function(a3) {
                a3.element.addClass("select2-results__option--highlighted");
              }), c3.on("results:message", function(a3) {
                e.displayMessage(a3);
              }), a2.fn.mousewheel && this.$results.on("mousewheel", function(a3) {
                var b4 = e.$results.scrollTop(), c4 = e.$results.get(0).scrollHeight - b4 + a3.deltaY, d2 = a3.deltaY > 0 && b4 - a3.deltaY <= 0, f2 = a3.deltaY < 0 && c4 <= e.$results.height();
                d2 ? (e.$results.scrollTop(0), a3.preventDefault(), a3.stopPropagation()) : f2 && (e.$results.scrollTop(e.$results.get(0).scrollHeight - e.$results.height()), a3.preventDefault(), a3.stopPropagation());
              }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(c4) {
                var d2 = a2(this), f2 = b3.GetData(this, "data");
                if ("true" === d2.attr("aria-selected"))
                  return void (e.options.get("multiple") ? e.trigger("unselect", { originalEvent: c4, data: f2 }) : e.trigger("close", {}));
                e.trigger("select", { originalEvent: c4, data: f2 });
              }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(c4) {
                var d2 = b3.GetData(this, "data");
                e.getHighlightedResults().removeClass("select2-results__option--highlighted"), e.trigger("results:focus", { data: d2, element: a2(this) });
              });
            }, c2.prototype.getHighlightedResults = function() {
              return this.$results.find(".select2-results__option--highlighted");
            }, c2.prototype.destroy = function() {
              this.$results.remove();
            }, c2.prototype.ensureHighlightVisible = function() {
              var a3 = this.getHighlightedResults();
              if (0 !== a3.length) {
                var b4 = this.$results.find("[aria-selected]"), c3 = b4.index(a3), d = this.$results.offset().top, e = a3.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d;
                f -= 2 * a3.outerHeight(false), c3 <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f);
              }
            }, c2.prototype.template = function(b4, c3) {
              var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b4, c3);
              null == f ? c3.style.display = "none" : "string" == typeof f ? c3.innerHTML = e(f) : a2(c3).append(f);
            }, c2;
          }), b2.define("select2/keys", [], function() {
            return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
          }), b2.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a2, b3, c2) {
            function d(a3, b4) {
              this.$element = a3, this.options = b4, d.__super__.constructor.call(this);
            }
            return b3.Extend(d, b3.Observable), d.prototype.render = function() {
              var c3 = a2('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
              return this._tabindex = 0, null != b3.GetData(this.$element[0], "old-tabindex") ? this._tabindex = b3.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), c3.attr("title", this.$element.attr("title")), c3.attr("tabindex", this._tabindex), this.$selection = c3, c3;
            }, d.prototype.bind = function(a3, b4) {
              var d2 = this, e = (a3.id, a3.id + "-results");
              this.container = a3, this.$selection.on("focus", function(a4) {
                d2.trigger("focus", a4);
              }), this.$selection.on("blur", function(a4) {
                d2._handleBlur(a4);
              }), this.$selection.on("keydown", function(a4) {
                d2.trigger("keypress", a4), a4.which === c2.SPACE && a4.preventDefault();
              }), a3.on("results:focus", function(a4) {
                d2.$selection.attr("aria-activedescendant", a4.data._resultId);
              }), a3.on("selection:update", function(a4) {
                d2.update(a4.data);
              }), a3.on("open", function() {
                d2.$selection.attr("aria-expanded", "true"), d2.$selection.attr("aria-owns", e), d2._attachCloseHandler(a3);
              }), a3.on("close", function() {
                d2.$selection.attr("aria-expanded", "false"), d2.$selection.removeAttr("aria-activedescendant"), d2.$selection.removeAttr("aria-owns"), d2.$selection.focus(), window.setTimeout(function() {
                  d2.$selection.focus();
                }, 0), d2._detachCloseHandler(a3);
              }), a3.on("enable", function() {
                d2.$selection.attr("tabindex", d2._tabindex);
              }), a3.on("disable", function() {
                d2.$selection.attr("tabindex", "-1");
              });
            }, d.prototype._handleBlur = function(b4) {
              var c3 = this;
              window.setTimeout(function() {
                document.activeElement == c3.$selection[0] || a2.contains(c3.$selection[0], document.activeElement) || c3.trigger("blur", b4);
              }, 1);
            }, d.prototype._attachCloseHandler = function(c3) {
              a2(document.body).on("mousedown.select2." + c3.id, function(c4) {
                var d2 = a2(c4.target), e = d2.closest(".select2");
                a2(".select2.select2-container--open").each(function() {
                  a2(this), this != e[0] && b3.GetData(this, "element").select2("close");
                });
              });
            }, d.prototype._detachCloseHandler = function(b4) {
              a2(document.body).off("mousedown.select2." + b4.id);
            }, d.prototype.position = function(a3, b4) {
              b4.find(".selection").append(a3);
            }, d.prototype.destroy = function() {
              this._detachCloseHandler(this.container);
            }, d.prototype.update = function(a3) {
              throw new Error("The `update` method must be defined in child classes.");
            }, d;
          }), b2.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a2, b3, c2, d) {
            function e() {
              e.__super__.constructor.apply(this, arguments);
            }
            return c2.Extend(e, b3), e.prototype.render = function() {
              var a3 = e.__super__.render.call(this);
              return a3.addClass("select2-selection--single"), a3.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a3;
            }, e.prototype.bind = function(a3, b4) {
              var c3 = this;
              e.__super__.bind.apply(this, arguments);
              var d2 = a3.id + "-container";
              this.$selection.find(".select2-selection__rendered").attr("id", d2).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", d2), this.$selection.on("mousedown", function(a4) {
                1 === a4.which && c3.trigger("toggle", { originalEvent: a4 });
              }), this.$selection.on("focus", function(a4) {
              }), this.$selection.on("blur", function(a4) {
              }), a3.on("focus", function(b5) {
                a3.isOpen() || c3.$selection.focus();
              });
            }, e.prototype.clear = function() {
              var a3 = this.$selection.find(".select2-selection__rendered");
              a3.empty(), a3.removeAttr("title");
            }, e.prototype.display = function(a3, b4) {
              var c3 = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(c3(a3, b4));
            }, e.prototype.selectionContainer = function() {
              return a2("<span></span>");
            }, e.prototype.update = function(a3) {
              if (0 === a3.length)
                return void this.clear();
              var b4 = a3[0], c3 = this.$selection.find(".select2-selection__rendered"), d2 = this.display(b4, c3);
              c3.empty().append(d2), c3.attr("title", b4.title || b4.text);
            }, e;
          }), b2.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a2, b3, c2) {
            function d(a3, b4) {
              d.__super__.constructor.apply(this, arguments);
            }
            return c2.Extend(d, b3), d.prototype.render = function() {
              var a3 = d.__super__.render.call(this);
              return a3.addClass("select2-selection--multiple"), a3.html('<ul class="select2-selection__rendered"></ul>'), a3;
            }, d.prototype.bind = function(b4, e) {
              var f = this;
              d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a3) {
                f.trigger("toggle", { originalEvent: a3 });
              }), this.$selection.on("click", ".select2-selection__choice__remove", function(b5) {
                if (!f.options.get("disabled")) {
                  var d2 = a2(this), e2 = d2.parent(), g = c2.GetData(e2[0], "data");
                  f.trigger("unselect", { originalEvent: b5, data: g });
                }
              });
            }, d.prototype.clear = function() {
              var a3 = this.$selection.find(".select2-selection__rendered");
              a3.empty(), a3.removeAttr("title");
            }, d.prototype.display = function(a3, b4) {
              var c3 = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(c3(a3, b4));
            }, d.prototype.selectionContainer = function() {
              return a2('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            }, d.prototype.update = function(a3) {
              if (this.clear(), 0 !== a3.length) {
                for (var b4 = [], d2 = 0; d2 < a3.length; d2++) {
                  var e = a3[d2], f = this.selectionContainer(), g = this.display(e, f);
                  f.append(g), f.attr("title", e.title || e.text), c2.StoreData(f[0], "data", e), b4.push(f);
                }
                var h = this.$selection.find(".select2-selection__rendered");
                c2.appendMany(h, b4);
              }
            }, d;
          }), b2.define("select2/selection/placeholder", ["../utils"], function(a2) {
            function b3(a3, b4, c2) {
              this.placeholder = this.normalizePlaceholder(c2.get("placeholder")), a3.call(this, b4, c2);
            }
            return b3.prototype.normalizePlaceholder = function(a3, b4) {
              return "string" == typeof b4 && (b4 = { id: "", text: b4 }), b4;
            }, b3.prototype.createPlaceholder = function(a3, b4) {
              var c2 = this.selectionContainer();
              return c2.html(this.display(b4)), c2.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c2;
            }, b3.prototype.update = function(a3, b4) {
              var c2 = 1 == b4.length && b4[0].id != this.placeholder.id;
              if (b4.length > 1 || c2)
                return a3.call(this, b4);
              this.clear();
              var d = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(d);
            }, b3;
          }), b2.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(a2, b3, c2) {
            function d() {
            }
            return d.prototype.bind = function(a3, b4, c3) {
              var d2 = this;
              a3.call(this, b4, c3), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a4) {
                d2._handleClear(a4);
              }), b4.on("keypress", function(a4) {
                d2._handleKeyboardClear(a4, b4);
              });
            }, d.prototype._handleClear = function(a3, b4) {
              if (!this.options.get("disabled")) {
                var d2 = this.$selection.find(".select2-selection__clear");
                if (0 !== d2.length) {
                  b4.stopPropagation();
                  var e = c2.GetData(d2[0], "data"), f = this.$element.val();
                  this.$element.val(this.placeholder.id);
                  var g = { data: e };
                  if (this.trigger("clear", g), g.prevented)
                    return void this.$element.val(f);
                  for (var h = 0; h < e.length; h++)
                    if (g = { data: e[h] }, this.trigger("unselect", g), g.prevented)
                      return void this.$element.val(f);
                  this.$element.trigger("change"), this.trigger("toggle", {});
                }
              }
            }, d.prototype._handleKeyboardClear = function(a3, c3, d2) {
              d2.isOpen() || c3.which != b3.DELETE && c3.which != b3.BACKSPACE || this._handleClear(c3);
            }, d.prototype.update = function(b4, d2) {
              if (b4.call(this, d2), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === d2.length)) {
                var e = a2('<span class="select2-selection__clear">&times;</span>');
                c2.StoreData(e[0], "data", d2), this.$selection.find(".select2-selection__rendered").prepend(e);
              }
            }, d;
          }), b2.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a2, b3, c2) {
            function d(a3, b4, c3) {
              a3.call(this, b4, c3);
            }
            return d.prototype.render = function(b4) {
              var c3 = a2('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
              this.$searchContainer = c3, this.$search = c3.find("input");
              var d2 = b4.call(this);
              return this._transferTabIndex(), d2;
            }, d.prototype.bind = function(a3, d2, e) {
              var f = this;
              a3.call(this, d2, e), d2.on("open", function() {
                f.$search.trigger("focus");
              }), d2.on("close", function() {
                f.$search.val(""), f.$search.removeAttr("aria-activedescendant"), f.$search.trigger("focus");
              }), d2.on("enable", function() {
                f.$search.prop("disabled", false), f._transferTabIndex();
              }), d2.on("disable", function() {
                f.$search.prop("disabled", true);
              }), d2.on("focus", function(a4) {
                f.$search.trigger("focus");
              }), d2.on("results:focus", function(a4) {
                f.$search.attr("aria-activedescendant", a4.id);
              }), this.$selection.on("focusin", ".select2-search--inline", function(a4) {
                f.trigger("focus", a4);
              }), this.$selection.on("focusout", ".select2-search--inline", function(a4) {
                f._handleBlur(a4);
              }), this.$selection.on("keydown", ".select2-search--inline", function(a4) {
                if (a4.stopPropagation(), f.trigger("keypress", a4), f._keyUpPrevented = a4.isDefaultPrevented(), a4.which === c2.BACKSPACE && "" === f.$search.val()) {
                  var d3 = f.$searchContainer.prev(".select2-selection__choice");
                  if (d3.length > 0) {
                    var e2 = b3.GetData(d3[0], "data");
                    f.searchRemoveChoice(e2), a4.preventDefault();
                  }
                }
              });
              var g = document.documentMode, h = g && g <= 11;
              this.$selection.on("input.searchcheck", ".select2-search--inline", function(a4) {
                if (h)
                  return void f.$selection.off("input.search input.searchcheck");
                f.$selection.off("keyup.search");
              }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a4) {
                if (h && "input" === a4.type)
                  return void f.$selection.off("input.search input.searchcheck");
                var b4 = a4.which;
                b4 != c2.SHIFT && b4 != c2.CTRL && b4 != c2.ALT && b4 != c2.TAB && f.handleSearch(a4);
              });
            }, d.prototype._transferTabIndex = function(a3) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, d.prototype.createPlaceholder = function(a3, b4) {
              this.$search.attr("placeholder", b4.text);
            }, d.prototype.update = function(a3, b4) {
              var c3 = this.$search[0] == document.activeElement;
              if (this.$search.attr("placeholder", ""), a3.call(this, b4), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c3) {
                this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus();
              }
            }, d.prototype.handleSearch = function() {
              if (this.resizeSearch(), !this._keyUpPrevented) {
                var a3 = this.$search.val();
                this.trigger("query", { term: a3 });
              }
              this._keyUpPrevented = false;
            }, d.prototype.searchRemoveChoice = function(a3, b4) {
              this.trigger("unselect", { data: b4 }), this.$search.val(b4.text), this.handleSearch();
            }, d.prototype.resizeSearch = function() {
              this.$search.css("width", "25px");
              var a3 = "";
              if ("" !== this.$search.attr("placeholder"))
                a3 = this.$selection.find(".select2-selection__rendered").innerWidth();
              else {
                a3 = 0.75 * (this.$search.val().length + 1) + "em";
              }
              this.$search.css("width", a3);
            }, d;
          }), b2.define("select2/selection/eventRelay", ["jquery"], function(a2) {
            function b3() {
            }
            return b3.prototype.bind = function(b4, c2, d) {
              var e = this, f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"], g = ["opening", "closing", "selecting", "unselecting", "clearing"];
              b4.call(this, c2, d), c2.on("*", function(b5, c3) {
                if (-1 !== a2.inArray(b5, f)) {
                  c3 = c3 || {};
                  var d2 = a2.Event("select2:" + b5, { params: c3 });
                  e.$element.trigger(d2), -1 !== a2.inArray(b5, g) && (c3.prevented = d2.isDefaultPrevented());
                }
              });
            }, b3;
          }), b2.define("select2/translation", ["jquery", "require"], function(a2, b3) {
            function c2(a3) {
              this.dict = a3 || {};
            }
            return c2.prototype.all = function() {
              return this.dict;
            }, c2.prototype.get = function(a3) {
              return this.dict[a3];
            }, c2.prototype.extend = function(b4) {
              this.dict = a2.extend({}, b4.all(), this.dict);
            }, c2._cache = {}, c2.loadPath = function(a3) {
              if (!(a3 in c2._cache)) {
                var d = b3(a3);
                c2._cache[a3] = d;
              }
              return new c2(c2._cache[a3]);
            }, c2;
          }), b2.define("select2/diacritics", [], function() {
            return { "\u24B6": "A", "\uFF21": "A", "\xC0": "A", "\xC1": "A", "\xC2": "A", "\u1EA6": "A", "\u1EA4": "A", "\u1EAA": "A", "\u1EA8": "A", "\xC3": "A", "\u0100": "A", "\u0102": "A", "\u1EB0": "A", "\u1EAE": "A", "\u1EB4": "A", "\u1EB2": "A", "\u0226": "A", "\u01E0": "A", "\xC4": "A", "\u01DE": "A", "\u1EA2": "A", "\xC5": "A", "\u01FA": "A", "\u01CD": "A", "\u0200": "A", "\u0202": "A", "\u1EA0": "A", "\u1EAC": "A", "\u1EB6": "A", "\u1E00": "A", "\u0104": "A", "\u023A": "A", "\u2C6F": "A", "\uA732": "AA", "\xC6": "AE", "\u01FC": "AE", "\u01E2": "AE", "\uA734": "AO", "\uA736": "AU", "\uA738": "AV", "\uA73A": "AV", "\uA73C": "AY", "\u24B7": "B", "\uFF22": "B", "\u1E02": "B", "\u1E04": "B", "\u1E06": "B", "\u0243": "B", "\u0182": "B", "\u0181": "B", "\u24B8": "C", "\uFF23": "C", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\xC7": "C", "\u1E08": "C", "\u0187": "C", "\u023B": "C", "\uA73E": "C", "\u24B9": "D", "\uFF24": "D", "\u1E0A": "D", "\u010E": "D", "\u1E0C": "D", "\u1E10": "D", "\u1E12": "D", "\u1E0E": "D", "\u0110": "D", "\u018B": "D", "\u018A": "D", "\u0189": "D", "\uA779": "D", "\u01F1": "DZ", "\u01C4": "DZ", "\u01F2": "Dz", "\u01C5": "Dz", "\u24BA": "E", "\uFF25": "E", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\u1EC0": "E", "\u1EBE": "E", "\u1EC4": "E", "\u1EC2": "E", "\u1EBC": "E", "\u0112": "E", "\u1E14": "E", "\u1E16": "E", "\u0114": "E", "\u0116": "E", "\xCB": "E", "\u1EBA": "E", "\u011A": "E", "\u0204": "E", "\u0206": "E", "\u1EB8": "E", "\u1EC6": "E", "\u0228": "E", "\u1E1C": "E", "\u0118": "E", "\u1E18": "E", "\u1E1A": "E", "\u0190": "E", "\u018E": "E", "\u24BB": "F", "\uFF26": "F", "\u1E1E": "F", "\u0191": "F", "\uA77B": "F", "\u24BC": "G", "\uFF27": "G", "\u01F4": "G", "\u011C": "G", "\u1E20": "G", "\u011E": "G", "\u0120": "G", "\u01E6": "G", "\u0122": "G", "\u01E4": "G", "\u0193": "G", "\uA7A0": "G", "\uA77D": "G", "\uA77E": "G", "\u24BD": "H", "\uFF28": "H", "\u0124": "H", "\u1E22": "H", "\u1E26": "H", "\u021E": "H", "\u1E24": "H", "\u1E28": "H", "\u1E2A": "H", "\u0126": "H", "\u2C67": "H", "\u2C75": "H", "\uA78D": "H", "\u24BE": "I", "\uFF29": "I", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u0130": "I", "\xCF": "I", "\u1E2E": "I", "\u1EC8": "I", "\u01CF": "I", "\u0208": "I", "\u020A": "I", "\u1ECA": "I", "\u012E": "I", "\u1E2C": "I", "\u0197": "I", "\u24BF": "J", "\uFF2A": "J", "\u0134": "J", "\u0248": "J", "\u24C0": "K", "\uFF2B": "K", "\u1E30": "K", "\u01E8": "K", "\u1E32": "K", "\u0136": "K", "\u1E34": "K", "\u0198": "K", "\u2C69": "K", "\uA740": "K", "\uA742": "K", "\uA744": "K", "\uA7A2": "K", "\u24C1": "L", "\uFF2C": "L", "\u013F": "L", "\u0139": "L", "\u013D": "L", "\u1E36": "L", "\u1E38": "L", "\u013B": "L", "\u1E3C": "L", "\u1E3A": "L", "\u0141": "L", "\u023D": "L", "\u2C62": "L", "\u2C60": "L", "\uA748": "L", "\uA746": "L", "\uA780": "L", "\u01C7": "LJ", "\u01C8": "Lj", "\u24C2": "M", "\uFF2D": "M", "\u1E3E": "M", "\u1E40": "M", "\u1E42": "M", "\u2C6E": "M", "\u019C": "M", "\u24C3": "N", "\uFF2E": "N", "\u01F8": "N", "\u0143": "N", "\xD1": "N", "\u1E44": "N", "\u0147": "N", "\u1E46": "N", "\u0145": "N", "\u1E4A": "N", "\u1E48": "N", "\u0220": "N", "\u019D": "N", "\uA790": "N", "\uA7A4": "N", "\u01CA": "NJ", "\u01CB": "Nj", "\u24C4": "O", "\uFF2F": "O", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\u1ED2": "O", "\u1ED0": "O", "\u1ED6": "O", "\u1ED4": "O", "\xD5": "O", "\u1E4C": "O", "\u022C": "O", "\u1E4E": "O", "\u014C": "O", "\u1E50": "O", "\u1E52": "O", "\u014E": "O", "\u022E": "O", "\u0230": "O", "\xD6": "O", "\u022A": "O", "\u1ECE": "O", "\u0150": "O", "\u01D1": "O", "\u020C": "O", "\u020E": "O", "\u01A0": "O", "\u1EDC": "O", "\u1EDA": "O", "\u1EE0": "O", "\u1EDE": "O", "\u1EE2": "O", "\u1ECC": "O", "\u1ED8": "O", "\u01EA": "O", "\u01EC": "O", "\xD8": "O", "\u01FE": "O", "\u0186": "O", "\u019F": "O", "\uA74A": "O", "\uA74C": "O", "\u01A2": "OI", "\uA74E": "OO", "\u0222": "OU", "\u24C5": "P", "\uFF30": "P", "\u1E54": "P", "\u1E56": "P", "\u01A4": "P", "\u2C63": "P", "\uA750": "P", "\uA752": "P", "\uA754": "P", "\u24C6": "Q", "\uFF31": "Q", "\uA756": "Q", "\uA758": "Q", "\u024A": "Q", "\u24C7": "R", "\uFF32": "R", "\u0154": "R", "\u1E58": "R", "\u0158": "R", "\u0210": "R", "\u0212": "R", "\u1E5A": "R", "\u1E5C": "R", "\u0156": "R", "\u1E5E": "R", "\u024C": "R", "\u2C64": "R", "\uA75A": "R", "\uA7A6": "R", "\uA782": "R", "\u24C8": "S", "\uFF33": "S", "\u1E9E": "S", "\u015A": "S", "\u1E64": "S", "\u015C": "S", "\u1E60": "S", "\u0160": "S", "\u1E66": "S", "\u1E62": "S", "\u1E68": "S", "\u0218": "S", "\u015E": "S", "\u2C7E": "S", "\uA7A8": "S", "\uA784": "S", "\u24C9": "T", "\uFF34": "T", "\u1E6A": "T", "\u0164": "T", "\u1E6C": "T", "\u021A": "T", "\u0162": "T", "\u1E70": "T", "\u1E6E": "T", "\u0166": "T", "\u01AC": "T", "\u01AE": "T", "\u023E": "T", "\uA786": "T", "\uA728": "TZ", "\u24CA": "U", "\uFF35": "U", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\u0168": "U", "\u1E78": "U", "\u016A": "U", "\u1E7A": "U", "\u016C": "U", "\xDC": "U", "\u01DB": "U", "\u01D7": "U", "\u01D5": "U", "\u01D9": "U", "\u1EE6": "U", "\u016E": "U", "\u0170": "U", "\u01D3": "U", "\u0214": "U", "\u0216": "U", "\u01AF": "U", "\u1EEA": "U", "\u1EE8": "U", "\u1EEE": "U", "\u1EEC": "U", "\u1EF0": "U", "\u1EE4": "U", "\u1E72": "U", "\u0172": "U", "\u1E76": "U", "\u1E74": "U", "\u0244": "U", "\u24CB": "V", "\uFF36": "V", "\u1E7C": "V", "\u1E7E": "V", "\u01B2": "V", "\uA75E": "V", "\u0245": "V", "\uA760": "VY", "\u24CC": "W", "\uFF37": "W", "\u1E80": "W", "\u1E82": "W", "\u0174": "W", "\u1E86": "W", "\u1E84": "W", "\u1E88": "W", "\u2C72": "W", "\u24CD": "X", "\uFF38": "X", "\u1E8A": "X", "\u1E8C": "X", "\u24CE": "Y", "\uFF39": "Y", "\u1EF2": "Y", "\xDD": "Y", "\u0176": "Y", "\u1EF8": "Y", "\u0232": "Y", "\u1E8E": "Y", "\u0178": "Y", "\u1EF6": "Y", "\u1EF4": "Y", "\u01B3": "Y", "\u024E": "Y", "\u1EFE": "Y", "\u24CF": "Z", "\uFF3A": "Z", "\u0179": "Z", "\u1E90": "Z", "\u017B": "Z", "\u017D": "Z", "\u1E92": "Z", "\u1E94": "Z", "\u01B5": "Z", "\u0224": "Z", "\u2C7F": "Z", "\u2C6B": "Z", "\uA762": "Z", "\u24D0": "a", "\uFF41": "a", "\u1E9A": "a", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\u1EA7": "a", "\u1EA5": "a", "\u1EAB": "a", "\u1EA9": "a", "\xE3": "a", "\u0101": "a", "\u0103": "a", "\u1EB1": "a", "\u1EAF": "a", "\u1EB5": "a", "\u1EB3": "a", "\u0227": "a", "\u01E1": "a", "\xE4": "a", "\u01DF": "a", "\u1EA3": "a", "\xE5": "a", "\u01FB": "a", "\u01CE": "a", "\u0201": "a", "\u0203": "a", "\u1EA1": "a", "\u1EAD": "a", "\u1EB7": "a", "\u1E01": "a", "\u0105": "a", "\u2C65": "a", "\u0250": "a", "\uA733": "aa", "\xE6": "ae", "\u01FD": "ae", "\u01E3": "ae", "\uA735": "ao", "\uA737": "au", "\uA739": "av", "\uA73B": "av", "\uA73D": "ay", "\u24D1": "b", "\uFF42": "b", "\u1E03": "b", "\u1E05": "b", "\u1E07": "b", "\u0180": "b", "\u0183": "b", "\u0253": "b", "\u24D2": "c", "\uFF43": "c", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\xE7": "c", "\u1E09": "c", "\u0188": "c", "\u023C": "c", "\uA73F": "c", "\u2184": "c", "\u24D3": "d", "\uFF44": "d", "\u1E0B": "d", "\u010F": "d", "\u1E0D": "d", "\u1E11": "d", "\u1E13": "d", "\u1E0F": "d", "\u0111": "d", "\u018C": "d", "\u0256": "d", "\u0257": "d", "\uA77A": "d", "\u01F3": "dz", "\u01C6": "dz", "\u24D4": "e", "\uFF45": "e", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\u1EC1": "e", "\u1EBF": "e", "\u1EC5": "e", "\u1EC3": "e", "\u1EBD": "e", "\u0113": "e", "\u1E15": "e", "\u1E17": "e", "\u0115": "e", "\u0117": "e", "\xEB": "e", "\u1EBB": "e", "\u011B": "e", "\u0205": "e", "\u0207": "e", "\u1EB9": "e", "\u1EC7": "e", "\u0229": "e", "\u1E1D": "e", "\u0119": "e", "\u1E19": "e", "\u1E1B": "e", "\u0247": "e", "\u025B": "e", "\u01DD": "e", "\u24D5": "f", "\uFF46": "f", "\u1E1F": "f", "\u0192": "f", "\uA77C": "f", "\u24D6": "g", "\uFF47": "g", "\u01F5": "g", "\u011D": "g", "\u1E21": "g", "\u011F": "g", "\u0121": "g", "\u01E7": "g", "\u0123": "g", "\u01E5": "g", "\u0260": "g", "\uA7A1": "g", "\u1D79": "g", "\uA77F": "g", "\u24D7": "h", "\uFF48": "h", "\u0125": "h", "\u1E23": "h", "\u1E27": "h", "\u021F": "h", "\u1E25": "h", "\u1E29": "h", "\u1E2B": "h", "\u1E96": "h", "\u0127": "h", "\u2C68": "h", "\u2C76": "h", "\u0265": "h", "\u0195": "hv", "\u24D8": "i", "\uFF49": "i", "\xEC": "i", "\xED": "i", "\xEE": "i", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\xEF": "i", "\u1E2F": "i", "\u1EC9": "i", "\u01D0": "i", "\u0209": "i", "\u020B": "i", "\u1ECB": "i", "\u012F": "i", "\u1E2D": "i", "\u0268": "i", "\u0131": "i", "\u24D9": "j", "\uFF4A": "j", "\u0135": "j", "\u01F0": "j", "\u0249": "j", "\u24DA": "k", "\uFF4B": "k", "\u1E31": "k", "\u01E9": "k", "\u1E33": "k", "\u0137": "k", "\u1E35": "k", "\u0199": "k", "\u2C6A": "k", "\uA741": "k", "\uA743": "k", "\uA745": "k", "\uA7A3": "k", "\u24DB": "l", "\uFF4C": "l", "\u0140": "l", "\u013A": "l", "\u013E": "l", "\u1E37": "l", "\u1E39": "l", "\u013C": "l", "\u1E3D": "l", "\u1E3B": "l", "\u017F": "l", "\u0142": "l", "\u019A": "l", "\u026B": "l", "\u2C61": "l", "\uA749": "l", "\uA781": "l", "\uA747": "l", "\u01C9": "lj", "\u24DC": "m", "\uFF4D": "m", "\u1E3F": "m", "\u1E41": "m", "\u1E43": "m", "\u0271": "m", "\u026F": "m", "\u24DD": "n", "\uFF4E": "n", "\u01F9": "n", "\u0144": "n", "\xF1": "n", "\u1E45": "n", "\u0148": "n", "\u1E47": "n", "\u0146": "n", "\u1E4B": "n", "\u1E49": "n", "\u019E": "n", "\u0272": "n", "\u0149": "n", "\uA791": "n", "\uA7A5": "n", "\u01CC": "nj", "\u24DE": "o", "\uFF4F": "o", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\u1ED3": "o", "\u1ED1": "o", "\u1ED7": "o", "\u1ED5": "o", "\xF5": "o", "\u1E4D": "o", "\u022D": "o", "\u1E4F": "o", "\u014D": "o", "\u1E51": "o", "\u1E53": "o", "\u014F": "o", "\u022F": "o", "\u0231": "o", "\xF6": "o", "\u022B": "o", "\u1ECF": "o", "\u0151": "o", "\u01D2": "o", "\u020D": "o", "\u020F": "o", "\u01A1": "o", "\u1EDD": "o", "\u1EDB": "o", "\u1EE1": "o", "\u1EDF": "o", "\u1EE3": "o", "\u1ECD": "o", "\u1ED9": "o", "\u01EB": "o", "\u01ED": "o", "\xF8": "o", "\u01FF": "o", "\u0254": "o", "\uA74B": "o", "\uA74D": "o", "\u0275": "o", "\u01A3": "oi", "\u0223": "ou", "\uA74F": "oo", "\u24DF": "p", "\uFF50": "p", "\u1E55": "p", "\u1E57": "p", "\u01A5": "p", "\u1D7D": "p", "\uA751": "p", "\uA753": "p", "\uA755": "p", "\u24E0": "q", "\uFF51": "q", "\u024B": "q", "\uA757": "q", "\uA759": "q", "\u24E1": "r", "\uFF52": "r", "\u0155": "r", "\u1E59": "r", "\u0159": "r", "\u0211": "r", "\u0213": "r", "\u1E5B": "r", "\u1E5D": "r", "\u0157": "r", "\u1E5F": "r", "\u024D": "r", "\u027D": "r", "\uA75B": "r", "\uA7A7": "r", "\uA783": "r", "\u24E2": "s", "\uFF53": "s", "\xDF": "s", "\u015B": "s", "\u1E65": "s", "\u015D": "s", "\u1E61": "s", "\u0161": "s", "\u1E67": "s", "\u1E63": "s", "\u1E69": "s", "\u0219": "s", "\u015F": "s", "\u023F": "s", "\uA7A9": "s", "\uA785": "s", "\u1E9B": "s", "\u24E3": "t", "\uFF54": "t", "\u1E6B": "t", "\u1E97": "t", "\u0165": "t", "\u1E6D": "t", "\u021B": "t", "\u0163": "t", "\u1E71": "t", "\u1E6F": "t", "\u0167": "t", "\u01AD": "t", "\u0288": "t", "\u2C66": "t", "\uA787": "t", "\uA729": "tz", "\u24E4": "u", "\uFF55": "u", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\u0169": "u", "\u1E79": "u", "\u016B": "u", "\u1E7B": "u", "\u016D": "u", "\xFC": "u", "\u01DC": "u", "\u01D8": "u", "\u01D6": "u", "\u01DA": "u", "\u1EE7": "u", "\u016F": "u", "\u0171": "u", "\u01D4": "u", "\u0215": "u", "\u0217": "u", "\u01B0": "u", "\u1EEB": "u", "\u1EE9": "u", "\u1EEF": "u", "\u1EED": "u", "\u1EF1": "u", "\u1EE5": "u", "\u1E73": "u", "\u0173": "u", "\u1E77": "u", "\u1E75": "u", "\u0289": "u", "\u24E5": "v", "\uFF56": "v", "\u1E7D": "v", "\u1E7F": "v", "\u028B": "v", "\uA75F": "v", "\u028C": "v", "\uA761": "vy", "\u24E6": "w", "\uFF57": "w", "\u1E81": "w", "\u1E83": "w", "\u0175": "w", "\u1E87": "w", "\u1E85": "w", "\u1E98": "w", "\u1E89": "w", "\u2C73": "w", "\u24E7": "x", "\uFF58": "x", "\u1E8B": "x", "\u1E8D": "x", "\u24E8": "y", "\uFF59": "y", "\u1EF3": "y", "\xFD": "y", "\u0177": "y", "\u1EF9": "y", "\u0233": "y", "\u1E8F": "y", "\xFF": "y", "\u1EF7": "y", "\u1E99": "y", "\u1EF5": "y", "\u01B4": "y", "\u024F": "y", "\u1EFF": "y", "\u24E9": "z", "\uFF5A": "z", "\u017A": "z", "\u1E91": "z", "\u017C": "z", "\u017E": "z", "\u1E93": "z", "\u1E95": "z", "\u01B6": "z", "\u0225": "z", "\u0240": "z", "\u2C6C": "z", "\uA763": "z", "\u0386": "\u0391", "\u0388": "\u0395", "\u0389": "\u0397", "\u038A": "\u0399", "\u03AA": "\u0399", "\u038C": "\u039F", "\u038E": "\u03A5", "\u03AB": "\u03A5", "\u038F": "\u03A9", "\u03AC": "\u03B1", "\u03AD": "\u03B5", "\u03AE": "\u03B7", "\u03AF": "\u03B9", "\u03CA": "\u03B9", "\u0390": "\u03B9", "\u03CC": "\u03BF", "\u03CD": "\u03C5", "\u03CB": "\u03C5", "\u03B0": "\u03C5", "\u03C9": "\u03C9", "\u03C2": "\u03C3" };
          }), b2.define("select2/data/base", ["../utils"], function(a2) {
            function b3(a3, c2) {
              b3.__super__.constructor.call(this);
            }
            return a2.Extend(b3, a2.Observable), b3.prototype.current = function(a3) {
              throw new Error("The `current` method must be defined in child classes.");
            }, b3.prototype.query = function(a3, b4) {
              throw new Error("The `query` method must be defined in child classes.");
            }, b3.prototype.bind = function(a3, b4) {
            }, b3.prototype.destroy = function() {
            }, b3.prototype.generateResultId = function(b4, c2) {
              var d = b4.id + "-result-";
              return d += a2.generateChars(4), null != c2.id ? d += "-" + c2.id.toString() : d += "-" + a2.generateChars(4), d;
            }, b3;
          }), b2.define("select2/data/select", ["./base", "../utils", "jquery"], function(a2, b3, c2) {
            function d(a3, b4) {
              this.$element = a3, this.options = b4, d.__super__.constructor.call(this);
            }
            return b3.Extend(d, a2), d.prototype.current = function(a3) {
              var b4 = [], d2 = this;
              this.$element.find(":selected").each(function() {
                var a4 = c2(this), e = d2.item(a4);
                b4.push(e);
              }), a3(b4);
            }, d.prototype.select = function(a3) {
              var b4 = this;
              if (a3.selected = true, c2(a3.element).is("option"))
                return a3.element.selected = true, void this.$element.trigger("change");
              if (this.$element.prop("multiple"))
                this.current(function(d3) {
                  var e = [];
                  a3 = [a3], a3.push.apply(a3, d3);
                  for (var f = 0; f < a3.length; f++) {
                    var g = a3[f].id;
                    -1 === c2.inArray(g, e) && e.push(g);
                  }
                  b4.$element.val(e), b4.$element.trigger("change");
                });
              else {
                var d2 = a3.id;
                this.$element.val(d2), this.$element.trigger("change");
              }
            }, d.prototype.unselect = function(a3) {
              var b4 = this;
              if (this.$element.prop("multiple")) {
                if (a3.selected = false, c2(a3.element).is("option"))
                  return a3.element.selected = false, void this.$element.trigger("change");
                this.current(function(d2) {
                  for (var e = [], f = 0; f < d2.length; f++) {
                    var g = d2[f].id;
                    g !== a3.id && -1 === c2.inArray(g, e) && e.push(g);
                  }
                  b4.$element.val(e), b4.$element.trigger("change");
                });
              }
            }, d.prototype.bind = function(a3, b4) {
              var c3 = this;
              this.container = a3, a3.on("select", function(a4) {
                c3.select(a4.data);
              }), a3.on("unselect", function(a4) {
                c3.unselect(a4.data);
              });
            }, d.prototype.destroy = function() {
              this.$element.find("*").each(function() {
                b3.RemoveData(this);
              });
            }, d.prototype.query = function(a3, b4) {
              var d2 = [], e = this;
              this.$element.children().each(function() {
                var b5 = c2(this);
                if (b5.is("option") || b5.is("optgroup")) {
                  var f = e.item(b5), g = e.matches(a3, f);
                  null !== g && d2.push(g);
                }
              }), b4({ results: d2 });
            }, d.prototype.addOptions = function(a3) {
              b3.appendMany(this.$element, a3);
            }, d.prototype.option = function(a3) {
              var d2;
              a3.children ? (d2 = document.createElement("optgroup"), d2.label = a3.text) : (d2 = document.createElement("option"), void 0 !== d2.textContent ? d2.textContent = a3.text : d2.innerText = a3.text), void 0 !== a3.id && (d2.value = a3.id), a3.disabled && (d2.disabled = true), a3.selected && (d2.selected = true), a3.title && (d2.title = a3.title);
              var e = c2(d2), f = this._normalizeItem(a3);
              return f.element = d2, b3.StoreData(d2, "data", f), e;
            }, d.prototype.item = function(a3) {
              var d2 = {};
              if (null != (d2 = b3.GetData(a3[0], "data")))
                return d2;
              if (a3.is("option"))
                d2 = { id: a3.val(), text: a3.text(), disabled: a3.prop("disabled"), selected: a3.prop("selected"), title: a3.prop("title") };
              else if (a3.is("optgroup")) {
                d2 = { text: a3.prop("label"), children: [], title: a3.prop("title") };
                for (var e = a3.children("option"), f = [], g = 0; g < e.length; g++) {
                  var h = c2(e[g]), i = this.item(h);
                  f.push(i);
                }
                d2.children = f;
              }
              return d2 = this._normalizeItem(d2), d2.element = a3[0], b3.StoreData(a3[0], "data", d2), d2;
            }, d.prototype._normalizeItem = function(a3) {
              a3 !== Object(a3) && (a3 = { id: a3, text: a3 }), a3 = c2.extend({}, { text: "" }, a3);
              var b4 = { selected: false, disabled: false };
              return null != a3.id && (a3.id = a3.id.toString()), null != a3.text && (a3.text = a3.text.toString()), null == a3._resultId && a3.id && null != this.container && (a3._resultId = this.generateResultId(this.container, a3)), c2.extend({}, b4, a3);
            }, d.prototype.matches = function(a3, b4) {
              return this.options.get("matcher")(a3, b4);
            }, d;
          }), b2.define("select2/data/array", ["./select", "../utils", "jquery"], function(a2, b3, c2) {
            function d(a3, b4) {
              var c3 = b4.get("data") || [];
              d.__super__.constructor.call(this, a3, b4), this.addOptions(this.convertToOptions(c3));
            }
            return b3.Extend(d, a2), d.prototype.select = function(a3) {
              var b4 = this.$element.find("option").filter(function(b5, c3) {
                return c3.value == a3.id.toString();
              });
              0 === b4.length && (b4 = this.option(a3), this.addOptions(b4)), d.__super__.select.call(this, a3);
            }, d.prototype.convertToOptions = function(a3) {
              function d2(a4) {
                return function() {
                  return c2(this).val() == a4.id;
                };
              }
              for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                return e.item(c2(this)).id;
              }).get(), h = [], i = 0; i < a3.length; i++) {
                var j = this._normalizeItem(a3[i]);
                if (c2.inArray(j.id, g) >= 0) {
                  var k = f.filter(d2(j)), l = this.item(k), m = c2.extend(true, {}, j, l), n = this.option(m);
                  k.replaceWith(n);
                } else {
                  var o = this.option(j);
                  if (j.children) {
                    var p = this.convertToOptions(j.children);
                    b3.appendMany(o, p);
                  }
                  h.push(o);
                }
              }
              return h;
            }, d;
          }), b2.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a2, b3, c2) {
            function d(a3, b4) {
              this.ajaxOptions = this._applyDefaults(b4.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a3, b4);
            }
            return b3.Extend(d, a2), d.prototype._applyDefaults = function(a3) {
              var b4 = { data: function(a4) {
                return c2.extend({}, a4, { q: a4.term });
              }, transport: function(a4, b5, d2) {
                var e = c2.ajax(a4);
                return e.then(b5), e.fail(d2), e;
              } };
              return c2.extend({}, b4, a3, true);
            }, d.prototype.processResults = function(a3) {
              return a3;
            }, d.prototype.query = function(a3, b4) {
              function d2() {
                var d3 = f.transport(f, function(d4) {
                  var f2 = e.processResults(d4, a3);
                  e.options.get("debug") && window.console && console.error && (f2 && f2.results && c2.isArray(f2.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b4(f2);
                }, function() {
                  "status" in d3 && (0 === d3.status || "0" === d3.status) || e.trigger("results:message", { message: "errorLoading" });
                });
                e._request = d3;
              }
              var e = this;
              null != this._request && (c2.isFunction(this._request.abort) && this._request.abort(), this._request = null);
              var f = c2.extend({ type: "GET" }, this.ajaxOptions);
              "function" == typeof f.url && (f.url = f.url.call(this.$element, a3)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a3)), this.ajaxOptions.delay && null != a3.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d2, this.ajaxOptions.delay)) : d2();
            }, d;
          }), b2.define("select2/data/tags", ["jquery"], function(a2) {
            function b3(b4, c2, d) {
              var e = d.get("tags"), f = d.get("createTag");
              void 0 !== f && (this.createTag = f);
              var g = d.get("insertTag");
              if (void 0 !== g && (this.insertTag = g), b4.call(this, c2, d), a2.isArray(e))
                for (var h = 0; h < e.length; h++) {
                  var i = e[h], j = this._normalizeItem(i), k = this.option(j);
                  this.$element.append(k);
                }
            }
            return b3.prototype.query = function(a3, b4, c2) {
              function d(a4, f) {
                for (var g = a4.results, h = 0; h < g.length; h++) {
                  var i = g[h], j = null != i.children && !d({ results: i.children }, true);
                  if ((i.text || "").toUpperCase() === (b4.term || "").toUpperCase() || j)
                    return !f && (a4.data = g, void c2(a4));
                }
                if (f)
                  return true;
                var k = e.createTag(b4);
                if (null != k) {
                  var l = e.option(k);
                  l.attr("data-select2-tag", true), e.addOptions([l]), e.insertTag(g, k);
                }
                a4.results = g, c2(a4);
              }
              var e = this;
              if (this._removeOldTags(), null == b4.term || null != b4.page)
                return void a3.call(this, b4, c2);
              a3.call(this, b4, d);
            }, b3.prototype.createTag = function(b4, c2) {
              var d = a2.trim(c2.term);
              return "" === d ? null : { id: d, text: d };
            }, b3.prototype.insertTag = function(a3, b4, c2) {
              b4.unshift(c2);
            }, b3.prototype._removeOldTags = function(b4) {
              this._lastTag;
              this.$element.find("option[data-select2-tag]").each(function() {
                this.selected || a2(this).remove();
              });
            }, b3;
          }), b2.define("select2/data/tokenizer", ["jquery"], function(a2) {
            function b3(a3, b4, c2) {
              var d = c2.get("tokenizer");
              void 0 !== d && (this.tokenizer = d), a3.call(this, b4, c2);
            }
            return b3.prototype.bind = function(a3, b4, c2) {
              a3.call(this, b4, c2), this.$search = b4.dropdown.$search || b4.selection.$search || c2.find(".select2-search__field");
            }, b3.prototype.query = function(b4, c2, d) {
              function e(b5) {
                var c3 = g._normalizeItem(b5);
                if (!g.$element.find("option").filter(function() {
                  return a2(this).val() === c3.id;
                }).length) {
                  var d2 = g.option(c3);
                  d2.attr("data-select2-tag", true), g._removeOldTags(), g.addOptions([d2]);
                }
                f(c3);
              }
              function f(a3) {
                g.trigger("select", { data: a3 });
              }
              var g = this;
              c2.term = c2.term || "";
              var h = this.tokenizer(c2, this.options, e);
              h.term !== c2.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c2.term = h.term), b4.call(this, c2, d);
            }, b3.prototype.tokenizer = function(b4, c2, d, e) {
              for (var f = d.get("tokenSeparators") || [], g = c2.term, h = 0, i = this.createTag || function(a3) {
                return { id: a3.term, text: a3.term };
              }; h < g.length; ) {
                var j = g[h];
                if (-1 !== a2.inArray(j, f)) {
                  var k = g.substr(0, h), l = a2.extend({}, c2, { term: k }), m = i(l);
                  null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
                } else
                  h++;
              }
              return { term: g };
            }, b3;
          }), b2.define("select2/data/minimumInputLength", [], function() {
            function a2(a3, b3, c2) {
              this.minimumInputLength = c2.get("minimumInputLength"), a3.call(this, b3, c2);
            }
            return a2.prototype.query = function(a3, b3, c2) {
              if (b3.term = b3.term || "", b3.term.length < this.minimumInputLength)
                return void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b3.term, params: b3 } });
              a3.call(this, b3, c2);
            }, a2;
          }), b2.define("select2/data/maximumInputLength", [], function() {
            function a2(a3, b3, c2) {
              this.maximumInputLength = c2.get("maximumInputLength"), a3.call(this, b3, c2);
            }
            return a2.prototype.query = function(a3, b3, c2) {
              if (b3.term = b3.term || "", this.maximumInputLength > 0 && b3.term.length > this.maximumInputLength)
                return void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b3.term, params: b3 } });
              a3.call(this, b3, c2);
            }, a2;
          }), b2.define("select2/data/maximumSelectionLength", [], function() {
            function a2(a3, b3, c2) {
              this.maximumSelectionLength = c2.get("maximumSelectionLength"), a3.call(this, b3, c2);
            }
            return a2.prototype.query = function(a3, b3, c2) {
              var d = this;
              this.current(function(e) {
                var f = null != e ? e.length : 0;
                if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength)
                  return void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } });
                a3.call(d, b3, c2);
              });
            }, a2;
          }), b2.define("select2/dropdown", ["jquery", "./utils"], function(a2, b3) {
            function c2(a3, b4) {
              this.$element = a3, this.options = b4, c2.__super__.constructor.call(this);
            }
            return b3.Extend(c2, b3.Observable), c2.prototype.render = function() {
              var b4 = a2('<span class="select2-dropdown"><span class="select2-results"></span></span>');
              return b4.attr("dir", this.options.get("dir")), this.$dropdown = b4, b4;
            }, c2.prototype.bind = function() {
            }, c2.prototype.position = function(a3, b4) {
            }, c2.prototype.destroy = function() {
              this.$dropdown.remove();
            }, c2;
          }), b2.define("select2/dropdown/search", ["jquery", "../utils"], function(a2, b3) {
            function c2() {
            }
            return c2.prototype.render = function(b4) {
              var c3 = b4.call(this), d = a2('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
              return this.$searchContainer = d, this.$search = d.find("input"), c3.prepend(d), c3;
            }, c2.prototype.bind = function(b4, c3, d) {
              var e = this;
              b4.call(this, c3, d), this.$search.on("keydown", function(a3) {
                e.trigger("keypress", a3), e._keyUpPrevented = a3.isDefaultPrevented();
              }), this.$search.on("input", function(b5) {
                a2(this).off("keyup");
              }), this.$search.on("keyup input", function(a3) {
                e.handleSearch(a3);
              }), c3.on("open", function() {
                e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                  e.$search.focus();
                }, 0);
              }), c3.on("close", function() {
                e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.blur();
              }), c3.on("focus", function() {
                c3.isOpen() || e.$search.focus();
              }), c3.on("results:all", function(a3) {
                if (null == a3.query.term || "" === a3.query.term) {
                  e.showSearch(a3) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
                }
              });
            }, c2.prototype.handleSearch = function(a3) {
              if (!this._keyUpPrevented) {
                var b4 = this.$search.val();
                this.trigger("query", { term: b4 });
              }
              this._keyUpPrevented = false;
            }, c2.prototype.showSearch = function(a3, b4) {
              return true;
            }, c2;
          }), b2.define("select2/dropdown/hidePlaceholder", [], function() {
            function a2(a3, b3, c2, d) {
              this.placeholder = this.normalizePlaceholder(c2.get("placeholder")), a3.call(this, b3, c2, d);
            }
            return a2.prototype.append = function(a3, b3) {
              b3.results = this.removePlaceholder(b3.results), a3.call(this, b3);
            }, a2.prototype.normalizePlaceholder = function(a3, b3) {
              return "string" == typeof b3 && (b3 = { id: "", text: b3 }), b3;
            }, a2.prototype.removePlaceholder = function(a3, b3) {
              for (var c2 = b3.slice(0), d = b3.length - 1; d >= 0; d--) {
                var e = b3[d];
                this.placeholder.id === e.id && c2.splice(d, 1);
              }
              return c2;
            }, a2;
          }), b2.define("select2/dropdown/infiniteScroll", ["jquery"], function(a2) {
            function b3(a3, b4, c2, d) {
              this.lastParams = {}, a3.call(this, b4, c2, d), this.$loadingMore = this.createLoadingMore(), this.loading = false;
            }
            return b3.prototype.append = function(a3, b4) {
              this.$loadingMore.remove(), this.loading = false, a3.call(this, b4), this.showLoadingMore(b4) && this.$results.append(this.$loadingMore);
            }, b3.prototype.bind = function(b4, c2, d) {
              var e = this;
              b4.call(this, c2, d), c2.on("query", function(a3) {
                e.lastParams = a3, e.loading = true;
              }), c2.on("query:append", function(a3) {
                e.lastParams = a3, e.loading = true;
              }), this.$results.on("scroll", function() {
                var b5 = a2.contains(document.documentElement, e.$loadingMore[0]);
                if (!e.loading && b5) {
                  e.$results.offset().top + e.$results.outerHeight(false) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(false) && e.loadMore();
                }
              });
            }, b3.prototype.loadMore = function() {
              this.loading = true;
              var b4 = a2.extend({}, { page: 1 }, this.lastParams);
              b4.page++, this.trigger("query:append", b4);
            }, b3.prototype.showLoadingMore = function(a3, b4) {
              return b4.pagination && b4.pagination.more;
            }, b3.prototype.createLoadingMore = function() {
              var b4 = a2('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c2 = this.options.get("translations").get("loadingMore");
              return b4.html(c2(this.lastParams)), b4;
            }, b3;
          }), b2.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a2, b3) {
            function c2(b4, c3, d) {
              this.$dropdownParent = d.get("dropdownParent") || a2(document.body), b4.call(this, c3, d);
            }
            return c2.prototype.bind = function(a3, b4, c3) {
              var d = this, e = false;
              a3.call(this, b4, c3), b4.on("open", function() {
                d._showDropdown(), d._attachPositioningHandler(b4), e || (e = true, b4.on("results:all", function() {
                  d._positionDropdown(), d._resizeDropdown();
                }), b4.on("results:append", function() {
                  d._positionDropdown(), d._resizeDropdown();
                }));
              }), b4.on("close", function() {
                d._hideDropdown(), d._detachPositioningHandler(b4);
              }), this.$dropdownContainer.on("mousedown", function(a4) {
                a4.stopPropagation();
              });
            }, c2.prototype.destroy = function(a3) {
              a3.call(this), this.$dropdownContainer.remove();
            }, c2.prototype.position = function(a3, b4, c3) {
              b4.attr("class", c3.attr("class")), b4.removeClass("select2"), b4.addClass("select2-container--open"), b4.css({ position: "absolute", top: -999999 }), this.$container = c3;
            }, c2.prototype.render = function(b4) {
              var c3 = a2("<span></span>"), d = b4.call(this);
              return c3.append(d), this.$dropdownContainer = c3, c3;
            }, c2.prototype._hideDropdown = function(a3) {
              this.$dropdownContainer.detach();
            }, c2.prototype._attachPositioningHandler = function(c3, d) {
              var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b3.hasScroll);
              i.each(function() {
                b3.StoreData(this, "select2-scroll-position", { x: a2(this).scrollLeft(), y: a2(this).scrollTop() });
              }), i.on(f, function(c4) {
                var d2 = b3.GetData(this, "select2-scroll-position");
                a2(this).scrollTop(d2.y);
              }), a2(window).on(f + " " + g + " " + h, function(a3) {
                e._positionDropdown(), e._resizeDropdown();
              });
            }, c2.prototype._detachPositioningHandler = function(c3, d) {
              var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id;
              this.$container.parents().filter(b3.hasScroll).off(e), a2(window).off(e + " " + f + " " + g);
            }, c2.prototype._positionDropdown = function() {
              var b4 = a2(window), c3 = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = this.$container.offset();
              f.bottom = f.top + this.$container.outerHeight(false);
              var g = { height: this.$container.outerHeight(false) };
              g.top = f.top, g.bottom = f.top + g.height;
              var h = { height: this.$dropdown.outerHeight(false) }, i = { top: b4.scrollTop(), bottom: b4.scrollTop() + b4.height() }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = { left: f.left, top: g.bottom }, m = this.$dropdownParent;
              "static" === m.css("position") && (m = m.offsetParent());
              var n = m.offset();
              l.top -= n.top, l.left -= n.left, c3 || d || (e = "below"), k || !j || c3 ? !j && k && c3 && (e = "below") : e = "above", ("above" == e || c3 && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
            }, c2.prototype._resizeDropdown = function() {
              var a3 = { width: this.$container.outerWidth(false) + "px" };
              this.options.get("dropdownAutoWidth") && (a3.minWidth = a3.width, a3.position = "relative", a3.width = "auto"), this.$dropdown.css(a3);
            }, c2.prototype._showDropdown = function(a3) {
              this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
            }, c2;
          }), b2.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function a2(b4) {
              for (var c2 = 0, d = 0; d < b4.length; d++) {
                var e = b4[d];
                e.children ? c2 += a2(e.children) : c2++;
              }
              return c2;
            }
            function b3(a3, b4, c2, d) {
              this.minimumResultsForSearch = c2.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a3.call(this, b4, c2, d);
            }
            return b3.prototype.showSearch = function(b4, c2) {
              return !(a2(c2.data.results) < this.minimumResultsForSearch) && b4.call(this, c2);
            }, b3;
          }), b2.define("select2/dropdown/selectOnClose", ["../utils"], function(a2) {
            function b3() {
            }
            return b3.prototype.bind = function(a3, b4, c2) {
              var d = this;
              a3.call(this, b4, c2), b4.on("close", function(a4) {
                d._handleSelectOnClose(a4);
              });
            }, b3.prototype._handleSelectOnClose = function(b4, c2) {
              if (c2 && null != c2.originalSelect2Event) {
                var d = c2.originalSelect2Event;
                if ("select" === d._type || "unselect" === d._type)
                  return;
              }
              var e = this.getHighlightedResults();
              if (!(e.length < 1)) {
                var f = a2.GetData(e[0], "data");
                null != f.element && f.element.selected || null == f.element && f.selected || this.trigger("select", { data: f });
              }
            }, b3;
          }), b2.define("select2/dropdown/closeOnSelect", [], function() {
            function a2() {
            }
            return a2.prototype.bind = function(a3, b3, c2) {
              var d = this;
              a3.call(this, b3, c2), b3.on("select", function(a4) {
                d._selectTriggered(a4);
              }), b3.on("unselect", function(a4) {
                d._selectTriggered(a4);
              });
            }, a2.prototype._selectTriggered = function(a3, b3) {
              var c2 = b3.originalEvent;
              c2 && c2.ctrlKey || this.trigger("close", { originalEvent: c2, originalSelect2Event: b3 });
            }, a2;
          }), b2.define("select2/i18n/en", [], function() {
            return { errorLoading: function() {
              return "The results could not be loaded.";
            }, inputTooLong: function(a2) {
              var b3 = a2.input.length - a2.maximum, c2 = "Please delete " + b3 + " character";
              return 1 != b3 && (c2 += "s"), c2;
            }, inputTooShort: function(a2) {
              return "Please enter " + (a2.minimum - a2.input.length) + " or more characters";
            }, loadingMore: function() {
              return "Loading more results\u2026";
            }, maximumSelected: function(a2) {
              var b3 = "You can only select " + a2.maximum + " item";
              return 1 != a2.maximum && (b3 += "s"), b3;
            }, noResults: function() {
              return "No results found";
            }, searching: function() {
              return "Searching\u2026";
            } };
          }), b2.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a2, b3, c2, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t2, u, v, w, x, y, z, A, B, C) {
            function D() {
              this.reset();
            }
            return D.prototype.apply = function(l2) {
              if (l2 = a2.extend(true, {}, this.defaults, l2), null == l2.dataAdapter) {
                if (null != l2.ajax ? l2.dataAdapter = o : null != l2.data ? l2.dataAdapter = n : l2.dataAdapter = m, l2.minimumInputLength > 0 && (l2.dataAdapter = j.Decorate(l2.dataAdapter, r)), l2.maximumInputLength > 0 && (l2.dataAdapter = j.Decorate(l2.dataAdapter, s)), l2.maximumSelectionLength > 0 && (l2.dataAdapter = j.Decorate(l2.dataAdapter, t2)), l2.tags && (l2.dataAdapter = j.Decorate(l2.dataAdapter, p)), null == l2.tokenSeparators && null == l2.tokenizer || (l2.dataAdapter = j.Decorate(l2.dataAdapter, q)), null != l2.query) {
                  var C2 = b3(l2.amdBase + "compat/query");
                  l2.dataAdapter = j.Decorate(l2.dataAdapter, C2);
                }
                if (null != l2.initSelection) {
                  var D2 = b3(l2.amdBase + "compat/initSelection");
                  l2.dataAdapter = j.Decorate(l2.dataAdapter, D2);
                }
              }
              if (null == l2.resultsAdapter && (l2.resultsAdapter = c2, null != l2.ajax && (l2.resultsAdapter = j.Decorate(l2.resultsAdapter, x)), null != l2.placeholder && (l2.resultsAdapter = j.Decorate(l2.resultsAdapter, w)), l2.selectOnClose && (l2.resultsAdapter = j.Decorate(l2.resultsAdapter, A))), null == l2.dropdownAdapter) {
                if (l2.multiple)
                  l2.dropdownAdapter = u;
                else {
                  var E = j.Decorate(u, v);
                  l2.dropdownAdapter = E;
                }
                if (0 !== l2.minimumResultsForSearch && (l2.dropdownAdapter = j.Decorate(l2.dropdownAdapter, z)), l2.closeOnSelect && (l2.dropdownAdapter = j.Decorate(l2.dropdownAdapter, B)), null != l2.dropdownCssClass || null != l2.dropdownCss || null != l2.adaptDropdownCssClass) {
                  var F = b3(l2.amdBase + "compat/dropdownCss");
                  l2.dropdownAdapter = j.Decorate(l2.dropdownAdapter, F);
                }
                l2.dropdownAdapter = j.Decorate(l2.dropdownAdapter, y);
              }
              if (null == l2.selectionAdapter) {
                if (l2.multiple ? l2.selectionAdapter = e : l2.selectionAdapter = d, null != l2.placeholder && (l2.selectionAdapter = j.Decorate(l2.selectionAdapter, f)), l2.allowClear && (l2.selectionAdapter = j.Decorate(l2.selectionAdapter, g)), l2.multiple && (l2.selectionAdapter = j.Decorate(l2.selectionAdapter, h)), null != l2.containerCssClass || null != l2.containerCss || null != l2.adaptContainerCssClass) {
                  var G = b3(l2.amdBase + "compat/containerCss");
                  l2.selectionAdapter = j.Decorate(l2.selectionAdapter, G);
                }
                l2.selectionAdapter = j.Decorate(l2.selectionAdapter, i);
              }
              if ("string" == typeof l2.language)
                if (l2.language.indexOf("-") > 0) {
                  var H = l2.language.split("-"), I = H[0];
                  l2.language = [l2.language, I];
                } else
                  l2.language = [l2.language];
              if (a2.isArray(l2.language)) {
                var J = new k();
                l2.language.push("en");
                for (var K = l2.language, L = 0; L < K.length; L++) {
                  var M = K[L], N = {};
                  try {
                    N = k.loadPath(M);
                  } catch (a3) {
                    try {
                      M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
                    } catch (a4) {
                      l2.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                      continue;
                    }
                  }
                  J.extend(N);
                }
                l2.translations = J;
              } else {
                var O = k.loadPath(this.defaults.amdLanguageBase + "en"), P = new k(l2.language);
                P.extend(O), l2.translations = P;
              }
              return l2;
            }, D.prototype.reset = function() {
              function b4(a3) {
                function b5(a4) {
                  return l[a4] || a4;
                }
                return a3.replace(/[^\u0000-\u007E]/g, b5);
              }
              function c3(d2, e2) {
                if ("" === a2.trim(d2.term))
                  return e2;
                if (e2.children && e2.children.length > 0) {
                  for (var f2 = a2.extend(true, {}, e2), g2 = e2.children.length - 1; g2 >= 0; g2--) {
                    null == c3(d2, e2.children[g2]) && f2.children.splice(g2, 1);
                  }
                  return f2.children.length > 0 ? f2 : c3(d2, f2);
                }
                var h2 = b4(e2.text).toUpperCase(), i2 = b4(d2.term).toUpperCase();
                return h2.indexOf(i2) > -1 ? e2 : null;
              }
              this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: true, debug: false, dropdownAutoWidth: false, escapeMarkup: j.escapeMarkup, language: C, matcher: c3, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: false, sorter: function(a3) {
                return a3;
              }, templateResult: function(a3) {
                return a3.text;
              }, templateSelection: function(a3) {
                return a3.text;
              }, theme: "default", width: "resolve" };
            }, D.prototype.set = function(b4, c3) {
              var d2 = a2.camelCase(b4), e2 = {};
              e2[d2] = c3;
              var f2 = j._convertData(e2);
              a2.extend(true, this.defaults, f2);
            }, new D();
          }), b2.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a2, b3, c2, d) {
            function e(b4, e2) {
              if (this.options = b4, null != e2 && this.fromElement(e2), this.options = c2.apply(this.options), e2 && e2.is("input")) {
                var f = a2(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
              }
            }
            return e.prototype.fromElement = function(a3) {
              var c3 = ["select2"];
              null == this.options.multiple && (this.options.multiple = a3.prop("multiple")), null == this.options.disabled && (this.options.disabled = a3.prop("disabled")), null == this.options.language && (a3.prop("lang") ? this.options.language = a3.prop("lang").toLowerCase() : a3.closest("[lang]").prop("lang") && (this.options.language = a3.closest("[lang]").prop("lang"))), null == this.options.dir && (a3.prop("dir") ? this.options.dir = a3.prop("dir") : a3.closest("[dir]").prop("dir") ? this.options.dir = a3.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a3.prop("disabled", this.options.disabled), a3.prop("multiple", this.options.multiple), d.GetData(a3[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), d.StoreData(a3[0], "data", d.GetData(a3[0], "select2Tags")), d.StoreData(a3[0], "tags", true)), d.GetData(a3[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a3.attr("ajax--url", d.GetData(a3[0], "ajaxUrl")), d.StoreData(a3[0], "ajax-Url", d.GetData(a3[0], "ajaxUrl")));
              var e2 = {};
              e2 = b3.fn.jquery && "1." == b3.fn.jquery.substr(0, 2) && a3[0].dataset ? b3.extend(true, {}, a3[0].dataset, d.GetData(a3[0])) : d.GetData(a3[0]);
              var f = b3.extend(true, {}, e2);
              f = d._convertData(f);
              for (var g in f)
                b3.inArray(g, c3) > -1 || (b3.isPlainObject(this.options[g]) ? b3.extend(this.options[g], f[g]) : this.options[g] = f[g]);
              return this;
            }, e.prototype.get = function(a3) {
              return this.options[a3];
            }, e.prototype.set = function(a3, b4) {
              this.options[a3] = b4;
            }, e;
          }), b2.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a2, b3, c2, d) {
            var e = function(a3, d2) {
              null != c2.GetData(a3[0], "select2") && c2.GetData(a3[0], "select2").destroy(), this.$element = a3, this.id = this._generateId(a3), d2 = d2 || {}, this.options = new b3(d2, a3), e.__super__.constructor.call(this);
              var f = a3.attr("tabindex") || 0;
              c2.StoreData(a3[0], "old-tabindex", f), a3.attr("tabindex", "-1");
              var g = this.options.get("dataAdapter");
              this.dataAdapter = new g(a3, this.options);
              var h = this.render();
              this._placeContainer(h);
              var i = this.options.get("selectionAdapter");
              this.selection = new i(a3, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, h);
              var j = this.options.get("dropdownAdapter");
              this.dropdown = new j(a3, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, h);
              var k = this.options.get("resultsAdapter");
              this.results = new k(a3, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
              var l = this;
              this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a4) {
                l.trigger("selection:update", { data: a4 });
              }), a3.addClass("select2-hidden-accessible"), a3.attr("aria-hidden", "true"), this._syncAttributes(), c2.StoreData(a3[0], "select2", this), a3.data("select2", this);
            };
            return c2.Extend(e, c2.Observable), e.prototype._generateId = function(a3) {
              var b4 = "";
              return b4 = null != a3.attr("id") ? a3.attr("id") : null != a3.attr("name") ? a3.attr("name") + "-" + c2.generateChars(2) : c2.generateChars(4), b4 = b4.replace(/(:|\.|\[|\]|,)/g, ""), b4 = "select2-" + b4;
            }, e.prototype._placeContainer = function(a3) {
              a3.insertAfter(this.$element);
              var b4 = this._resolveWidth(this.$element, this.options.get("width"));
              null != b4 && a3.css("width", b4);
            }, e.prototype._resolveWidth = function(a3, b4) {
              var c3 = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == b4) {
                var d2 = this._resolveWidth(a3, "style");
                return null != d2 ? d2 : this._resolveWidth(a3, "element");
              }
              if ("element" == b4) {
                var e2 = a3.outerWidth(false);
                return e2 <= 0 ? "auto" : e2 + "px";
              }
              if ("style" == b4) {
                var f = a3.attr("style");
                if ("string" != typeof f)
                  return null;
                for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
                  var j = g[h].replace(/\s/g, ""), k = j.match(c3);
                  if (null !== k && k.length >= 1)
                    return k[1];
                }
                return null;
              }
              return b4;
            }, e.prototype._bindAdapters = function() {
              this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, e.prototype._registerDomEvents = function() {
              var b4 = this;
              this.$element.on("change.select2", function() {
                b4.dataAdapter.current(function(a3) {
                  b4.trigger("selection:update", { data: a3 });
                });
              }), this.$element.on("focus.select2", function(a3) {
                b4.trigger("focus", a3);
              }), this._syncA = c2.bind(this._syncAttributes, this), this._syncS = c2.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
              var d2 = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
              null != d2 ? (this._observer = new d2(function(c3) {
                a2.each(c3, b4._syncA), a2.each(c3, b4._syncS);
              }), this._observer.observe(this.$element[0], { attributes: true, childList: true, subtree: false })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b4._syncA, false), this.$element[0].addEventListener("DOMNodeInserted", b4._syncS, false), this.$element[0].addEventListener("DOMNodeRemoved", b4._syncS, false));
            }, e.prototype._registerDataEvents = function() {
              var a3 = this;
              this.dataAdapter.on("*", function(b4, c3) {
                a3.trigger(b4, c3);
              });
            }, e.prototype._registerSelectionEvents = function() {
              var b4 = this, c3 = ["toggle", "focus"];
              this.selection.on("toggle", function() {
                b4.toggleDropdown();
              }), this.selection.on("focus", function(a3) {
                b4.focus(a3);
              }), this.selection.on("*", function(d2, e2) {
                -1 === a2.inArray(d2, c3) && b4.trigger(d2, e2);
              });
            }, e.prototype._registerDropdownEvents = function() {
              var a3 = this;
              this.dropdown.on("*", function(b4, c3) {
                a3.trigger(b4, c3);
              });
            }, e.prototype._registerResultsEvents = function() {
              var a3 = this;
              this.results.on("*", function(b4, c3) {
                a3.trigger(b4, c3);
              });
            }, e.prototype._registerEvents = function() {
              var a3 = this;
              this.on("open", function() {
                a3.$container.addClass("select2-container--open");
              }), this.on("close", function() {
                a3.$container.removeClass("select2-container--open");
              }), this.on("enable", function() {
                a3.$container.removeClass("select2-container--disabled");
              }), this.on("disable", function() {
                a3.$container.addClass("select2-container--disabled");
              }), this.on("blur", function() {
                a3.$container.removeClass("select2-container--focus");
              }), this.on("query", function(b4) {
                a3.isOpen() || a3.trigger("open", {}), this.dataAdapter.query(b4, function(c3) {
                  a3.trigger("results:all", { data: c3, query: b4 });
                });
              }), this.on("query:append", function(b4) {
                this.dataAdapter.query(b4, function(c3) {
                  a3.trigger("results:append", { data: c3, query: b4 });
                });
              }), this.on("keypress", function(b4) {
                var c3 = b4.which;
                a3.isOpen() ? c3 === d.ESC || c3 === d.TAB || c3 === d.UP && b4.altKey ? (a3.close(), b4.preventDefault()) : c3 === d.ENTER ? (a3.trigger("results:select", {}), b4.preventDefault()) : c3 === d.SPACE && b4.ctrlKey ? (a3.trigger("results:toggle", {}), b4.preventDefault()) : c3 === d.UP ? (a3.trigger("results:previous", {}), b4.preventDefault()) : c3 === d.DOWN && (a3.trigger("results:next", {}), b4.preventDefault()) : (c3 === d.ENTER || c3 === d.SPACE || c3 === d.DOWN && b4.altKey) && (a3.open(), b4.preventDefault());
              });
            }, e.prototype._syncAttributes = function() {
              this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
            }, e.prototype._syncSubtree = function(a3, b4) {
              var c3 = false, d2 = this;
              if (!a3 || !a3.target || "OPTION" === a3.target.nodeName || "OPTGROUP" === a3.target.nodeName) {
                if (b4)
                  if (b4.addedNodes && b4.addedNodes.length > 0)
                    for (var e2 = 0; e2 < b4.addedNodes.length; e2++) {
                      var f = b4.addedNodes[e2];
                      f.selected && (c3 = true);
                    }
                  else
                    b4.removedNodes && b4.removedNodes.length > 0 && (c3 = true);
                else
                  c3 = true;
                c3 && this.dataAdapter.current(function(a4) {
                  d2.trigger("selection:update", { data: a4 });
                });
              }
            }, e.prototype.trigger = function(a3, b4) {
              var c3 = e.__super__.trigger, d2 = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" };
              if (void 0 === b4 && (b4 = {}), a3 in d2) {
                var f = d2[a3], g = { prevented: false, name: a3, args: b4 };
                if (c3.call(this, f, g), g.prevented)
                  return void (b4.prevented = true);
              }
              c3.call(this, a3, b4);
            }, e.prototype.toggleDropdown = function() {
              this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, e.prototype.open = function() {
              this.isOpen() || this.trigger("query", {});
            }, e.prototype.close = function() {
              this.isOpen() && this.trigger("close", {});
            }, e.prototype.isOpen = function() {
              return this.$container.hasClass("select2-container--open");
            }, e.prototype.hasFocus = function() {
              return this.$container.hasClass("select2-container--focus");
            }, e.prototype.focus = function(a3) {
              this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, e.prototype.enable = function(a3) {
              this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a3 && 0 !== a3.length || (a3 = [true]);
              var b4 = !a3[0];
              this.$element.prop("disabled", b4);
            }, e.prototype.data = function() {
              this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
              var a3 = [];
              return this.dataAdapter.current(function(b4) {
                a3 = b4;
              }), a3;
            }, e.prototype.val = function(b4) {
              if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b4 || 0 === b4.length)
                return this.$element.val();
              var c3 = b4[0];
              a2.isArray(c3) && (c3 = a2.map(c3, function(a3) {
                return a3.toString();
              })), this.$element.val(c3).trigger("change");
            }, e.prototype.destroy = function() {
              this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, false), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, false), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, false)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", c2.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), c2.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
            }, e.prototype.render = function() {
              var b4 = a2('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
              return b4.attr("dir", this.options.get("dir")), this.$container = b4, this.$container.addClass("select2-container--" + this.options.get("theme")), c2.StoreData(b4[0], "element", this.$element), b4;
            }, e;
          }), b2.define("select2/compat/utils", ["jquery"], function(a2) {
            function b3(b4, c2, d) {
              var e, f, g = [];
              e = a2.trim(b4.attr("class")), e && (e = "" + e, a2(e.split(/\s+/)).each(function() {
                0 === this.indexOf("select2-") && g.push(this);
              })), e = a2.trim(c2.attr("class")), e && (e = "" + e, a2(e.split(/\s+/)).each(function() {
                0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f);
              })), b4.attr("class", g.join(" "));
            }
            return { syncCssClasses: b3 };
          }), b2.define("select2/compat/containerCss", ["jquery", "./utils"], function(a2, b3) {
            function c2(a3) {
              return null;
            }
            function d() {
            }
            return d.prototype.render = function(d2) {
              var e = d2.call(this), f = this.options.get("containerCssClass") || "";
              a2.isFunction(f) && (f = f(this.$element));
              var g = this.options.get("adaptContainerCssClass");
              if (g = g || c2, -1 !== f.indexOf(":all:")) {
                f = f.replace(":all:", "");
                var h = g;
                g = function(a3) {
                  var b4 = h(a3);
                  return null != b4 ? b4 + " " + a3 : a3;
                };
              }
              var i = this.options.get("containerCss") || {};
              return a2.isFunction(i) && (i = i(this.$element)), b3.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
            }, d;
          }), b2.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a2, b3) {
            function c2(a3) {
              return null;
            }
            function d() {
            }
            return d.prototype.render = function(d2) {
              var e = d2.call(this), f = this.options.get("dropdownCssClass") || "";
              a2.isFunction(f) && (f = f(this.$element));
              var g = this.options.get("adaptDropdownCssClass");
              if (g = g || c2, -1 !== f.indexOf(":all:")) {
                f = f.replace(":all:", "");
                var h = g;
                g = function(a3) {
                  var b4 = h(a3);
                  return null != b4 ? b4 + " " + a3 : a3;
                };
              }
              var i = this.options.get("dropdownCss") || {};
              return a2.isFunction(i) && (i = i(this.$element)), b3.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
            }, d;
          }), b2.define("select2/compat/initSelection", ["jquery"], function(a2) {
            function b3(a3, b4, c2) {
              c2.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c2.get("initSelection"), this._isInitialized = false, a3.call(this, b4, c2);
            }
            return b3.prototype.current = function(b4, c2) {
              var d = this;
              if (this._isInitialized)
                return void b4.call(this, c2);
              this.initSelection.call(null, this.$element, function(b5) {
                d._isInitialized = true, a2.isArray(b5) || (b5 = [b5]), c2(b5);
              });
            }, b3;
          }), b2.define("select2/compat/inputData", ["jquery", "../utils"], function(a2, b3) {
            function c2(a3, b4, c3) {
              this._currentData = [], this._valueSeparator = c3.get("valueSeparator") || ",", "hidden" === b4.prop("type") && c3.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a3.call(this, b4, c3);
            }
            return c2.prototype.current = function(b4, c3) {
              function d(b5, c4) {
                var e2 = [];
                return b5.selected || -1 !== a2.inArray(b5.id, c4) ? (b5.selected = true, e2.push(b5)) : b5.selected = false, b5.children && e2.push.apply(e2, d(b5.children, c4)), e2;
              }
              for (var e = [], f = 0; f < this._currentData.length; f++) {
                var g = this._currentData[f];
                e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
              }
              c3(e);
            }, c2.prototype.select = function(b4, c3) {
              if (this.options.get("multiple")) {
                var d = this.$element.val();
                d += this._valueSeparator + c3.id, this.$element.val(d), this.$element.trigger("change");
              } else
                this.current(function(b5) {
                  a2.map(b5, function(a3) {
                    a3.selected = false;
                  });
                }), this.$element.val(c3.id), this.$element.trigger("change");
            }, c2.prototype.unselect = function(a3, b4) {
              var c3 = this;
              b4.selected = false, this.current(function(a4) {
                for (var d = [], e = 0; e < a4.length; e++) {
                  var f = a4[e];
                  b4.id != f.id && d.push(f.id);
                }
                c3.$element.val(d.join(c3._valueSeparator)), c3.$element.trigger("change");
              });
            }, c2.prototype.query = function(a3, b4, c3) {
              for (var d = [], e = 0; e < this._currentData.length; e++) {
                var f = this._currentData[e], g = this.matches(b4, f);
                null !== g && d.push(g);
              }
              c3({ results: d });
            }, c2.prototype.addOptions = function(c3, d) {
              var e = a2.map(d, function(a3) {
                return b3.GetData(a3[0], "data");
              });
              this._currentData.push.apply(this._currentData, e);
            }, c2;
          }), b2.define("select2/compat/matcher", ["jquery"], function(a2) {
            function b3(b4) {
              function c2(c3, d) {
                var e = a2.extend(true, {}, d);
                if (null == c3.term || "" === a2.trim(c3.term))
                  return e;
                if (d.children) {
                  for (var f = d.children.length - 1; f >= 0; f--) {
                    var g = d.children[f];
                    b4(c3.term, g.text, g) || e.children.splice(f, 1);
                  }
                  if (e.children.length > 0)
                    return e;
                }
                return b4(c3.term, d.text, d) ? e : null;
              }
              return c2;
            }
            return b3;
          }), b2.define("select2/compat/query", [], function() {
            function a2(a3, b3, c2) {
              c2.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a3.call(this, b3, c2);
            }
            return a2.prototype.query = function(a3, b3, c2) {
              b3.callback = c2, this.options.get("query").call(null, b3);
            }, a2;
          }), b2.define("select2/dropdown/attachContainer", [], function() {
            function a2(a3, b3, c2) {
              a3.call(this, b3, c2);
            }
            return a2.prototype.position = function(a3, b3, c2) {
              c2.find(".dropdown-wrapper").append(b3), b3.addClass("select2-dropdown--below"), c2.addClass("select2-container--below");
            }, a2;
          }), b2.define("select2/dropdown/stopPropagation", [], function() {
            function a2() {
            }
            return a2.prototype.bind = function(a3, b3, c2) {
              a3.call(this, b3, c2);
              var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
              this.$dropdown.on(d.join(" "), function(a4) {
                a4.stopPropagation();
              });
            }, a2;
          }), b2.define("select2/selection/stopPropagation", [], function() {
            function a2() {
            }
            return a2.prototype.bind = function(a3, b3, c2) {
              a3.call(this, b3, c2);
              var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
              this.$selection.on(d.join(" "), function(a4) {
                a4.stopPropagation();
              });
            }, a2;
          }), function(c2) {
            "function" == typeof b2.define && b2.define.amd ? b2.define("jquery-mousewheel", ["jquery"], c2) : "object" == typeof exports ? module.exports = c2 : c2(a);
          }(function(a2) {
            function b3(b4) {
              var g2 = b4 || window.event, h2 = i.call(arguments, 1), j2 = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
              if (b4 = a2.event.fix(g2), b4.type = "mousewheel", "detail" in g2 && (m = -1 * g2.detail), "wheelDelta" in g2 && (m = g2.wheelDelta), "wheelDeltaY" in g2 && (m = g2.wheelDeltaY), "wheelDeltaX" in g2 && (l = -1 * g2.wheelDeltaX), "axis" in g2 && g2.axis === g2.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j2 = 0 === m ? l : m, "deltaY" in g2 && (m = -1 * g2.deltaY, j2 = m), "deltaX" in g2 && (l = g2.deltaX, 0 === m && (j2 = -1 * l)), 0 !== m || 0 !== l) {
                if (1 === g2.deltaMode) {
                  var q = a2.data(this, "mousewheel-line-height");
                  j2 *= q, m *= q, l *= q;
                } else if (2 === g2.deltaMode) {
                  var r = a2.data(this, "mousewheel-page-height");
                  j2 *= r, m *= r, l *= r;
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g2, n) && (f /= 40)), d(g2, n) && (j2 /= 40, l /= 40, m /= 40), j2 = Math[j2 >= 1 ? "floor" : "ceil"](j2 / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                  var s = this.getBoundingClientRect();
                  o = b4.clientX - s.left, p = b4.clientY - s.top;
                }
                return b4.deltaX = l, b4.deltaY = m, b4.deltaFactor = f, b4.offsetX = o, b4.offsetY = p, b4.deltaMode = 0, h2.unshift(b4, j2, l, m), e && clearTimeout(e), e = setTimeout(c2, 200), (a2.event.dispatch || a2.event.handle).apply(this, h2);
              }
            }
            function c2() {
              f = null;
            }
            function d(a3, b4) {
              return k.settings.adjustOldDeltas && "mousewheel" === a3.type && b4 % 120 == 0;
            }
            var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
            if (a2.event.fixHooks)
              for (var j = g.length; j; )
                a2.event.fixHooks[g[--j]] = a2.event.mouseHooks;
            var k = a2.event.special.mousewheel = { version: "3.1.12", setup: function() {
              if (this.addEventListener)
                for (var c3 = h.length; c3; )
                  this.addEventListener(h[--c3], b3, false);
              else
                this.onmousewheel = b3;
              a2.data(this, "mousewheel-line-height", k.getLineHeight(this)), a2.data(this, "mousewheel-page-height", k.getPageHeight(this));
            }, teardown: function() {
              if (this.removeEventListener)
                for (var c3 = h.length; c3; )
                  this.removeEventListener(h[--c3], b3, false);
              else
                this.onmousewheel = null;
              a2.removeData(this, "mousewheel-line-height"), a2.removeData(this, "mousewheel-page-height");
            }, getLineHeight: function(b4) {
              var c3 = a2(b4), d2 = c3["offsetParent" in a2.fn ? "offsetParent" : "parent"]();
              return d2.length || (d2 = a2("body")), parseInt(d2.css("fontSize"), 10) || parseInt(c3.css("fontSize"), 10) || 16;
            }, getPageHeight: function(b4) {
              return a2(b4).height();
            }, settings: { adjustOldDeltas: true, normalizeOffset: true } };
            a2.fn.extend({ mousewheel: function(a3) {
              return a3 ? this.bind("mousewheel", a3) : this.trigger("mousewheel");
            }, unmousewheel: function(a3) {
              return this.unbind("mousewheel", a3);
            } });
          }), b2.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(a2, b3, c2, d, e) {
            if (null == a2.fn.select2) {
              var f = ["open", "close", "destroy"];
              a2.fn.select2 = function(b4) {
                if ("object" == typeof (b4 = b4 || {}))
                  return this.each(function() {
                    var d3 = a2.extend(true, {}, b4);
                    new c2(a2(this), d3);
                  }), this;
                if ("string" == typeof b4) {
                  var d2, g = Array.prototype.slice.call(arguments, 1);
                  return this.each(function() {
                    var a3 = e.GetData(this, "select2");
                    null == a3 && window.console && console.error && console.error("The select2('" + b4 + "') method was called on an element that is not using Select2."), d2 = a3[b4].apply(a3, g);
                  }), a2.inArray(b4, f) > -1 ? this : d2;
                }
                throw new Error("Invalid arguments for Select2: " + b4);
              };
            }
            return null == a2.fn.select2.defaults && (a2.fn.select2.defaults = d), c2;
          }), { define: b2.define, require: b2.require };
        }(), c = b.require("jquery.select2");
        return a.fn.select2.amd = b, c;
      });
    }
  });

  // javascript/jquery/index.js
  var import_jquery = __toESM(require_jquery());
  window.jQuery = import_jquery.default;
  window.$ = import_jquery.default;

  // javascript/application.js
  var import_popper_min = __toESM(require_popper_min());

  // plugins/owl-carousel/owl.carousel.min.js
  !function(a, b, c, d) {
    function e(b2, c2) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c2), this.$element = a(b2), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a2, b3) {
        this._plugins[a2[0].toLowerCase() + a2.slice(1)] = new b3(this);
      }, this)), a.each(e.Pipe, a.proxy(function(b3, c3) {
        this._pipe.push({ filter: c3.filter, run: a.proxy(c3.run, this) });
      }, this)), this.setup(), this.initialize();
    }
    function f(a2) {
      if (a2.touches !== d)
        return { x: a2.touches[0].pageX, y: a2.touches[0].pageY };
      if (a2.touches === d) {
        if (a2.pageX !== d)
          return { x: a2.pageX, y: a2.pageY };
        if (a2.pageX === d)
          return { x: a2.clientX, y: a2.clientY };
      }
    }
    function g(a2) {
      var b2, d2, e2 = c.createElement("div"), f2 = a2;
      for (b2 in f2)
        if (d2 = f2[b2], "undefined" != typeof e2.style[d2])
          return e2 = null, [d2, b2];
      return [false];
    }
    function h() {
      return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
    }
    function i() {
      return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
    }
    function j() {
      return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0];
    }
    function k() {
      return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
    }
    function l() {
      return b.navigator.msPointerEnabled;
    }
    var m, n, o;
    m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: false, isScrolling: false, isSwiping: false, direction: false, inMotion: false }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: false, center: false, mouseDrag: true, touchDrag: true, pullDrag: true, freeDrag: false, margin: 0, stagePadding: 0, merge: false, mergeFit: true, autoWidth: false, startPosition: 0, rtl: false, smartSpeed: 250, fluidSpeed: false, dragEndSpeed: false, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: false, fallbackEasing: "swing", info: false, nestedItemSelector: false, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function(a2) {
      a2.current = this._items && this._items[this.relative(this._current)];
    } }, { filter: ["items", "settings"], run: function() {
      var a2 = this._clones, b2 = this.$stage.children(".cloned");
      (b2.length !== a2.length || !this.settings.loop && a2.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []);
    } }, { filter: ["items", "settings"], run: function() {
      var a2, b2, c2 = this._clones, d2 = this._items, e2 = this.settings.loop ? c2.length - Math.max(2 * this.settings.items, 4) : 0;
      for (a2 = 0, b2 = Math.abs(e2 / 2); b2 > a2; a2++)
        e2 > 0 ? (this.$stage.children().eq(d2.length + c2.length - 1).remove(), c2.pop(), this.$stage.children().eq(0).remove(), c2.pop()) : (c2.push(c2.length / 2), this.$stage.append(d2[c2[c2.length - 1]].clone().addClass("cloned")), c2.push(d2.length - 1 - (c2.length - 1) / 2), this.$stage.prepend(d2[c2[c2.length - 1]].clone().addClass("cloned")));
    } }, { filter: ["width", "items", "settings"], run: function() {
      var a2, b2, c2, d2 = this.settings.rtl ? 1 : -1, e2 = (this.width() / this.settings.items).toFixed(3), f2 = 0;
      for (this._coordinates = [], b2 = 0, c2 = this._clones.length + this._items.length; c2 > b2; b2++)
        a2 = this._mergers[this.relative(b2)], a2 = this.settings.mergeFit && Math.min(a2, this.settings.items) || a2, f2 += (this.settings.autoWidth ? this._items[this.relative(b2)].width() + this.settings.margin : e2 * a2) * d2, this._coordinates.push(f2);
    } }, { filter: ["width", "items", "settings"], run: function() {
      var b2, c2, d2 = (this.width() / this.settings.items).toFixed(3), e2 = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
      if (this.$stage.css(e2), e2 = { width: this.settings.autoWidth ? "auto" : d2 - this.settings.margin }, e2[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a2) {
        return a2 > 1;
      }).length > 0)
        for (b2 = 0, c2 = this._coordinates.length; c2 > b2; b2++)
          e2.width = Math.abs(this._coordinates[b2]) - Math.abs(this._coordinates[b2 - 1] || 0) - this.settings.margin, this.$stage.children().eq(b2).css(e2);
      else
        this.$stage.children().css(e2);
    } }, { filter: ["width", "items", "settings"], run: function(a2) {
      a2.current && this.reset(this.$stage.children().index(a2.current));
    } }, { filter: ["position"], run: function() {
      this.animate(this.coordinates(this._current));
    } }, { filter: ["width", "position", "items", "settings"], run: function() {
      var a2, b2, c2, d2, e2 = this.settings.rtl ? 1 : -1, f2 = 2 * this.settings.stagePadding, g2 = this.coordinates(this.current()) + f2, h2 = g2 + this.width() * e2, i2 = [];
      for (c2 = 0, d2 = this._coordinates.length; d2 > c2; c2++)
        a2 = this._coordinates[c2 - 1] || 0, b2 = Math.abs(this._coordinates[c2]) + f2 * e2, (this.op(a2, "<=", g2) && this.op(a2, ">", h2) || this.op(b2, "<", g2) && this.op(b2, ">", h2)) && i2.push(c2);
      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i2.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass));
    } }], e.prototype.initialize = function() {
      if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== true) {
        var b2, c2, e2;
        if (b2 = this.$element.find("img"), c2 = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e2 = this.$element.children(c2).width(), b2.length && 0 >= e2)
          return this.preloadAutoWidthImages(b2), false;
      }
      this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized");
    }, e.prototype.setup = function() {
      var b2 = this.viewport(), c2 = this.options.responsive, d2 = -1, e2 = null;
      c2 ? (a.each(c2, function(a2) {
        b2 >= a2 && a2 > d2 && (d2 = Number(a2));
      }), e2 = a.extend({}, this.options, c2[d2]), delete e2.responsive, e2.responsiveClass && this.$element.attr("class", function(a2, b3) {
        return b3.replace(/\b owl-responsive-\S+/g, "");
      }).addClass("owl-responsive-" + d2)) : e2 = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d2) && (this.trigger("change", { property: { name: "settings", value: e2 } }), this._breakpoint = d2, this.settings = e2, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }));
    }, e.prototype.optionsLogic = function() {
      this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = false), this.settings.autoWidth && (this.settings.stagePadding = false, this.settings.merge = false);
    }, e.prototype.prepare = function(b2) {
      var c2 = this.trigger("prepare", { content: b2 });
      return c2.data || (c2.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b2)), this.trigger("prepared", { content: c2.data }), c2.data;
    }, e.prototype.update = function() {
      for (var b2 = 0, c2 = this._pipe.length, d2 = a.proxy(function(a2) {
        return this[a2];
      }, this._invalidated), e2 = {}; c2 > b2; )
        (this._invalidated.all || a.grep(this._pipe[b2].filter, d2).length > 0) && this._pipe[b2].run(e2), b2++;
      this._invalidated = {};
    }, e.prototype.width = function(a2) {
      switch (a2 = a2 || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin;
      }
    }, e.prototype.refresh = function() {
      if (0 === this._items.length)
        return false;
      new Date().getTime();
      this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed");
    }, e.prototype.eventsCall = function() {
      this.e._onDragStart = a.proxy(function(a2) {
        this.onDragStart(a2);
      }, this), this.e._onDragMove = a.proxy(function(a2) {
        this.onDragMove(a2);
      }, this), this.e._onDragEnd = a.proxy(function(a2) {
        this.onDragEnd(a2);
      }, this), this.e._onResize = a.proxy(function(a2) {
        this.onResize(a2);
      }, this), this.e._transitionEnd = a.proxy(function(a2) {
        this.transitionEnd(a2);
      }, this), this.e._preventClick = a.proxy(function(a2) {
        this.preventClick(a2);
      }, this);
    }, e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function() {
      return this._items.length ? this._width === this.$element.width() ? false : this.trigger("resize").isDefaultPrevented() ? false : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : false;
    }, e.prototype.eventsRouter = function(a2) {
      var b2 = a2.type;
      "mousedown" === b2 || "touchstart" === b2 ? this.onDragStart(a2) : "mousemove" === b2 || "touchmove" === b2 ? this.onDragMove(a2) : "mouseup" === b2 || "touchend" === b2 ? this.onDragEnd(a2) : "touchcancel" === b2 && this.onDragEnd(a2);
    }, e.prototype.internalEvents = function() {
      var c2 = (k(), l());
      this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a2) {
        this.eventsRouter(a2);
      }, this)), this.$stage.on("dragstart", function() {
        return false;
      }), this.$stage.get(0).onselectstart = function() {
        return false;
      }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c2 && this.$stage.on("touchstart touchcancel", a.proxy(function(a2) {
        this.eventsRouter(a2);
      }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false), this.settings.responsive !== false && this.on(b, "resize", a.proxy(this.onThrottledResize, this));
    }, e.prototype.onDragStart = function(d2) {
      var e2, g2, h2, i2;
      if (e2 = d2.originalEvent || d2 || b.event, 3 === e2.which || this.state.isTouch)
        return false;
      if ("mousedown" === e2.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = new Date().getTime(), this.speed(0), this.state.isTouch = true, this.state.isScrolling = false, this.state.isSwiping = false, this.drag.distance = 0, g2 = f(e2).x, h2 = f(e2).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)
        i2 = this.getTransformProperty(), this.drag.offsetX = i2, this.animate(i2), this.state.inMotion = true;
      else if (this.state.inMotion && !this.support3d)
        return this.state.inMotion = false, false;
      this.drag.startX = g2 - this.drag.offsetX, this.drag.startY = h2 - this.drag.offsetY, this.drag.start = g2 - this.drag.startX, this.drag.targetEl = e2.target || e2.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = false), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a2) {
        this.eventsRouter(a2);
      }, this));
    }, e.prototype.onDragMove = function(a2) {
      var c2, e2, g2, h2, i2, j2;
      this.state.isTouch && (this.state.isScrolling || (c2 = a2.originalEvent || a2 || b.event, e2 = f(c2).x, g2 = f(c2).y, this.drag.currentX = e2 - this.drag.startX, this.drag.currentY = g2 - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h2 = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i2 = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j2 = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h2 + j2), i2 + j2)), (this.drag.distance > 8 || this.drag.distance < -8) && (c2.preventDefault !== d ? c2.preventDefault() : c2.returnValue = false, this.state.isSwiping = true), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false && (this.state.isScrolling = true, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)));
    }, e.prototype.onDragEnd = function(b2) {
      var d2, e2, f2;
      if (this.state.isTouch) {
        if ("mouseup" === b2.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = false, this.state.isScrolling = false, this.state.isSwiping = false, 0 === this.drag.distance && this.state.inMotion !== true)
          return this.state.inMotion = false, false;
        this.drag.endTime = new Date().getTime(), d2 = this.drag.endTime - this.drag.startTime, e2 = Math.abs(this.drag.distance), (e2 > 3 || d2 > 300) && this.removeClick(this.drag.targetEl), f2 = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f2), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f2) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents");
      }
    }, e.prototype.removeClick = function(c2) {
      this.drag.targetEl = c2, a(c2).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
        a(c2).off("click.preventClick");
      }, 300);
    }, e.prototype.preventClick = function(b2) {
      b2.preventDefault ? b2.preventDefault() : b2.returnValue = false, b2.stopPropagation && b2.stopPropagation(), a(b2.target).off("click.preventClick");
    }, e.prototype.getTransformProperty = function() {
      var a2, c2;
      return a2 = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a2 = a2.replace(/matrix(3d)?\(|\)/g, "").split(","), c2 = 16 === a2.length, c2 !== true ? a2[4] : a2[12];
    }, e.prototype.closest = function(b2) {
      var c2 = -1, d2 = 30, e2 = this.width(), f2 = this.coordinates();
      return this.settings.freeDrag || a.each(f2, a.proxy(function(a2, g2) {
        return b2 > g2 - d2 && g2 + d2 > b2 ? c2 = a2 : this.op(b2, "<", g2) && this.op(b2, ">", f2[a2 + 1] || g2 - e2) && (c2 = "left" === this.state.direction ? a2 + 1 : a2), -1 === c2;
      }, this)), this.settings.loop || (this.op(b2, ">", f2[this.minimum()]) ? c2 = b2 = this.minimum() : this.op(b2, "<", f2[this.maximum()]) && (c2 = b2 = this.maximum())), c2;
    }, e.prototype.animate = function(b2) {
      this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b2 + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b2 + "px" }) : this.$stage.animate({ left: b2 }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
        this.state.inMotion && this.transitionEnd();
      }, this));
    }, e.prototype.current = function(a2) {
      if (a2 === d)
        return this._current;
      if (0 === this._items.length)
        return d;
      if (a2 = this.normalize(a2), this._current !== a2) {
        var b2 = this.trigger("change", { property: { name: "position", value: a2 } });
        b2.data !== d && (a2 = this.normalize(b2.data)), this._current = a2, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
      }
      return this._current;
    }, e.prototype.invalidate = function(a2) {
      this._invalidated[a2] = true;
    }, e.prototype.reset = function(a2) {
      a2 = this.normalize(a2), a2 !== d && (this._speed = 0, this._current = a2, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a2)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function(b2, c2) {
      var e2 = c2 ? this._items.length : this._items.length + this._clones.length;
      return !a.isNumeric(b2) || 1 > e2 ? d : b2 = this._clones.length ? (b2 % e2 + e2) % e2 : Math.max(this.minimum(c2), Math.min(this.maximum(c2), b2));
    }, e.prototype.relative = function(a2) {
      return a2 = this.normalize(a2), a2 -= this._clones.length / 2, this.normalize(a2, true);
    }, e.prototype.maximum = function(a2) {
      var b2, c2, d2, e2 = 0, f2 = this.settings;
      if (a2)
        return this._items.length - 1;
      if (!f2.loop && f2.center)
        b2 = this._items.length - 1;
      else if (f2.loop || f2.center)
        if (f2.loop || f2.center)
          b2 = this._items.length + f2.items;
        else {
          if (!f2.autoWidth && !f2.merge)
            throw "Can not detect maximum absolute position.";
          for (revert = f2.rtl ? 1 : -1, c2 = this.$stage.width() - this.$element.width(); (d2 = this.coordinates(e2)) && !(d2 * revert >= c2); )
            b2 = ++e2;
        }
      else
        b2 = this._items.length - f2.items;
      return b2;
    }, e.prototype.minimum = function(a2) {
      return a2 ? 0 : this._clones.length / 2;
    }, e.prototype.items = function(a2) {
      return a2 === d ? this._items.slice() : (a2 = this.normalize(a2, true), this._items[a2]);
    }, e.prototype.mergers = function(a2) {
      return a2 === d ? this._mergers.slice() : (a2 = this.normalize(a2, true), this._mergers[a2]);
    }, e.prototype.clones = function(b2) {
      var c2 = this._clones.length / 2, e2 = c2 + this._items.length, f2 = function(a2) {
        return a2 % 2 === 0 ? e2 + a2 / 2 : c2 - (a2 + 1) / 2;
      };
      return b2 === d ? a.map(this._clones, function(a2, b3) {
        return f2(b3);
      }) : a.map(this._clones, function(a2, c3) {
        return a2 === b2 ? f2(c3) : null;
      });
    }, e.prototype.speed = function(a2) {
      return a2 !== d && (this._speed = a2), this._speed;
    }, e.prototype.coordinates = function(b2) {
      var c2 = null;
      return b2 === d ? a.map(this._coordinates, a.proxy(function(a2, b3) {
        return this.coordinates(b3);
      }, this)) : (this.settings.center ? (c2 = this._coordinates[b2], c2 += (this.width() - c2 + (this._coordinates[b2 - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c2 = this._coordinates[b2 - 1] || 0, c2);
    }, e.prototype.duration = function(a2, b2, c2) {
      return Math.min(Math.max(Math.abs(b2 - a2), 1), 6) * Math.abs(c2 || this.settings.smartSpeed);
    }, e.prototype.to = function(c2, d2) {
      if (this.settings.loop) {
        var e2 = c2 - this.relative(this.current()), f2 = this.current(), g2 = this.current(), h2 = this.current() + e2, i2 = 0 > g2 - h2 ? true : false, j2 = this._clones.length + this._items.length;
        h2 < this.settings.items && i2 === false ? (f2 = g2 + this._items.length, this.reset(f2)) : h2 >= j2 - this.settings.items && i2 === true && (f2 = g2 - this._items.length, this.reset(f2)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
          this.speed(this.duration(this.current(), f2 + e2, d2)), this.current(f2 + e2), this.update();
        }, this), 30);
      } else
        this.speed(this.duration(this.current(), c2, d2)), this.current(c2), this.update();
    }, e.prototype.next = function(a2) {
      a2 = a2 || false, this.to(this.relative(this.current()) + 1, a2);
    }, e.prototype.prev = function(a2) {
      a2 = a2 || false, this.to(this.relative(this.current()) - 1, a2);
    }, e.prototype.transitionEnd = function(a2) {
      return a2 !== d && (a2.stopPropagation(), (a2.target || a2.srcElement || a2.originalTarget) !== this.$stage.get(0)) ? false : (this.state.inMotion = false, void this.trigger("translated"));
    }, e.prototype.viewport = function() {
      var d2;
      if (this.options.responsiveBaseElement !== b)
        d2 = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth)
        d2 = b.innerWidth;
      else {
        if (!c.documentElement || !c.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        d2 = c.documentElement.clientWidth;
      }
      return d2;
    }, e.prototype.replace = function(b2) {
      this.$stage.empty(), this._items = [], b2 && (b2 = b2 instanceof jQuery ? b2 : a(b2)), this.settings.nestedItemSelector && (b2 = b2.find("." + this.settings.nestedItemSelector)), b2.filter(function() {
        return 1 === this.nodeType;
      }).each(a.proxy(function(a2, b3) {
        b3 = this.prepare(b3), this.$stage.append(b3), this._items.push(b3), this._mergers.push(1 * b3.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
      }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function(a2, b2) {
      b2 = b2 === d ? this._items.length : this.normalize(b2, true), this.trigger("add", { content: a2, position: b2 }), 0 === this._items.length || b2 === this._items.length ? (this.$stage.append(a2), this._items.push(a2), this._mergers.push(1 * a2.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b2].before(a2), this._items.splice(b2, 0, a2), this._mergers.splice(b2, 0, 1 * a2.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a2, position: b2 });
    }, e.prototype.remove = function(a2) {
      a2 = this.normalize(a2, true), a2 !== d && (this.trigger("remove", { content: this._items[a2], position: a2 }), this._items[a2].remove(), this._items.splice(a2, 1), this._mergers.splice(a2, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a2 }));
    }, e.prototype.addTriggerableEvents = function() {
      var b2 = a.proxy(function(b3, c2) {
        return a.proxy(function(a2) {
          a2.relatedTarget !== this && (this.suppress([c2]), b3.apply(this, [].slice.call(arguments, 1)), this.release([c2]));
        }, this);
      }, this);
      a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function(a2, c2) {
        this.$element.on(a2 + ".owl.carousel", b2(c2, a2 + ".owl.carousel"));
      }, this));
    }, e.prototype.watchVisibility = function() {
      function c2(a2) {
        return a2.offsetWidth > 0 && a2.offsetHeight > 0;
      }
      function d2() {
        c2(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile));
      }
      c2(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d2, this), 500));
    }, e.prototype.preloadAutoWidthImages = function(b2) {
      var c2, d2, e2, f2;
      c2 = 0, d2 = this, b2.each(function(g2, h2) {
        e2 = a(h2), f2 = new Image(), f2.onload = function() {
          c2++, e2.attr("src", f2.src), e2.css("opacity", 1), c2 >= b2.length && (d2.state.imagesLoaded = true, d2.initialize());
        }, f2.src = e2.attr("src") || e2.attr("data-src") || e2.attr("data-src-retina");
      });
    }, e.prototype.destroy = function() {
      this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== false && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
      for (var d2 in this._plugins)
        this._plugins[d2].destroy();
      (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {
      }, this.$stage.off("dragstart", function() {
        return false;
      })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap();
    }, e.prototype.op = function(a2, b2, c2) {
      var d2 = this.settings.rtl;
      switch (b2) {
        case "<":
          return d2 ? a2 > c2 : c2 > a2;
        case ">":
          return d2 ? c2 > a2 : a2 > c2;
        case ">=":
          return d2 ? c2 >= a2 : a2 >= c2;
        case "<=":
          return d2 ? a2 >= c2 : c2 >= a2;
      }
    }, e.prototype.on = function(a2, b2, c2, d2) {
      a2.addEventListener ? a2.addEventListener(b2, c2, d2) : a2.attachEvent && a2.attachEvent("on" + b2, c2);
    }, e.prototype.off = function(a2, b2, c2, d2) {
      a2.removeEventListener ? a2.removeEventListener(b2, c2, d2) : a2.detachEvent && a2.detachEvent("on" + b2, c2);
    }, e.prototype.trigger = function(b2, c2, d2) {
      var e2 = { item: { count: this._items.length, index: this.current() } }, f2 = a.camelCase(a.grep(["on", b2, d2], function(a2) {
        return a2;
      }).join("-").toLowerCase()), g2 = a.Event([b2, "owl", d2 || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e2, c2));
      return this._supress[b2] || (a.each(this._plugins, function(a2, b3) {
        b3.onTrigger && b3.onTrigger(g2);
      }), this.$element.trigger(g2), this.settings && "function" == typeof this.settings[f2] && this.settings[f2].apply(this, g2)), g2;
    }, e.prototype.suppress = function(b2) {
      a.each(b2, a.proxy(function(a2, b3) {
        this._supress[b3] = true;
      }, this));
    }, e.prototype.release = function(b2) {
      a.each(b2, a.proxy(function(a2, b3) {
        delete this._supress[b3];
      }, this));
    }, e.prototype.browserSupport = function() {
      if (this.support3d = j(), this.support3d) {
        this.transformVendor = i();
        var a2 = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
        this.transitionEndVendor = a2[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
      }
      this.state.orientation = b.orientation;
    }, a.fn.owlCarousel = function(b2) {
      return this.each(function() {
        a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b2));
      });
    }, a.fn.owlCarousel.Constructor = e;
  }(window.Zepto || window.jQuery, window, document), function(a, b) {
    var c = function(b2) {
      this._core = b2, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": a.proxy(function(b3) {
        if (b3.namespace && this._core.settings && this._core.settings.lazyLoad && (b3.property && "position" == b3.property.name || "initialized" == b3.type))
          for (var c2 = this._core.settings, d = c2.center && Math.ceil(c2.items / 2) || c2.items, e = c2.center && -1 * d || 0, f = (b3.property && b3.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a2, b4) {
            this.load(b4);
          }, this); e++ < d; )
            this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h);
      }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    c.Defaults = { lazyLoad: false }, c.prototype.load = function(c2) {
      var d = this._core.$stage.children().eq(c2), e = d && d.find(".owl-lazy");
      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c3, d2) {
        var e2, f = a(d2), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
        this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
          f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
        }, this)).attr("src", g) : (e2 = new Image(), e2.onload = a.proxy(function() {
          f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
        }, this), e2.src = g);
      }, this)), this._loaded.push(d.get(0)));
    }, c.prototype.destroy = function() {
      var a2, b2;
      for (a2 in this.handlers)
        this._core.$element.off(a2, this.handlers[a2]);
      for (b2 in Object.getOwnPropertyNames(this))
        "function" != typeof this[b2] && (this[b2] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c;
  }(window.Zepto || window.jQuery, window, document), function(a) {
    var b = function(c) {
      this._core = c, this._handlers = { "initialized.owl.carousel": a.proxy(function() {
        this._core.settings.autoHeight && this.update();
      }, this), "changed.owl.carousel": a.proxy(function(a2) {
        this._core.settings.autoHeight && "position" == a2.property.name && this.update();
      }, this), "loaded.owl.lazy": a.proxy(function(a2) {
        this._core.settings.autoHeight && a2.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update();
      }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    b.Defaults = { autoHeight: false, autoHeightClass: "owl-height" }, b.prototype.update = function() {
      this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
    }, b.prototype.destroy = function() {
      var a2, b2;
      for (a2 in this._handlers)
        this._core.$element.off(a2, this._handlers[a2]);
      for (b2 in Object.getOwnPropertyNames(this))
        "function" != typeof this[b2] && (this[b2] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b;
  }(window.Zepto || window.jQuery, window, document), function(a, b, c) {
    var d = function(b2) {
      this._core = b2, this._videos = {}, this._playing = null, this._fullscreen = false, this._handlers = { "resize.owl.carousel": a.proxy(function(a2) {
        this._core.settings.video && !this.isInFullScreen() && a2.preventDefault();
      }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
        this._playing && this.stop();
      }, this), "prepared.owl.carousel": a.proxy(function(b3) {
        var c2 = a(b3.content).find(".owl-video");
        c2.length && (c2.css("display", "none"), this.fetch(c2, a(b3.content)));
      }, this) }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a2) {
        this.play(a2);
      }, this));
    };
    d.Defaults = { video: false, videoHeight: false, videoWidth: false }, d.prototype.fetch = function(a2, b2) {
      var c2 = a2.attr("data-vimeo-id") ? "vimeo" : "youtube", d2 = a2.attr("data-vimeo-id") || a2.attr("data-youtube-id"), e = a2.attr("data-width") || this._core.settings.videoWidth, f = a2.attr("data-height") || this._core.settings.videoHeight, g = a2.attr("href");
      if (!g)
        throw new Error("Missing video URL.");
      if (d2 = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d2[3].indexOf("youtu") > -1)
        c2 = "youtube";
      else {
        if (!(d2[3].indexOf("vimeo") > -1))
          throw new Error("Video URL not supported.");
        c2 = "vimeo";
      }
      d2 = d2[6], this._videos[g] = { type: c2, id: d2, width: e, height: f }, b2.attr("data-video", g), this.thumbnail(a2, this._videos[g]);
    }, d.prototype.thumbnail = function(b2, c2) {
      var d2, e, f, g = c2.width && c2.height ? 'style="width:' + c2.width + "px;height:" + c2.height + 'px;"' : "", h = b2.find("img"), i = "src", j = "", k = this._core.settings, l = function(a2) {
        e = '<div class="owl-video-play-icon"></div>', d2 = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a2 + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a2 + ')"></div>', b2.after(d2), b2.after(e);
      };
      return b2.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), false) : void ("youtube" === c2.type ? (f = "http://img.youtube.com/vi/" + c2.id + "/hqdefault.jpg", l(f)) : "vimeo" === c2.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c2.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a2) {
        f = a2[0].thumbnail_large, l(f);
      } }));
    }, d.prototype.stop = function() {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null;
    }, d.prototype.play = function(b2) {
      this._core.trigger("play", null, "video"), this._playing && this.stop();
      var c2, d2, e = a(b2.target || b2.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
      "youtube" === g.type ? c2 = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c2 = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d2 = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c2 + "</div>"), e.after(d2);
    }, d.prototype.isInFullScreen = function() {
      var d2 = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return d2 && a(d2).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = true), d2 && this._fullscreen && this._playing ? false : this._fullscreen ? (this._fullscreen = false, false) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, false) : true;
    }, d.prototype.destroy = function() {
      var a2, b2;
      this._core.$element.off("click.owl.video");
      for (a2 in this._handlers)
        this._core.$element.off(a2, this._handlers[a2]);
      for (b2 in Object.getOwnPropertyNames(this))
        "function" != typeof this[b2] && (this[b2] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d;
  }(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b2) {
      this.core = b2, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = true, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a2) {
        "position" == a2.property.name && (this.previous = this.core.current(), this.next = a2.property.value);
      }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a2) {
        this.swapping = "translated" == a2.type;
      }, this), "translate.owl.carousel": a.proxy(function() {
        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this) }, this.core.$element.on(this.handlers);
    };
    e.Defaults = { animateOut: false, animateIn: false }, e.prototype.swap = function() {
      if (1 === this.core.settings.items && this.core.support3d) {
        this.core.speed(0);
        var b2, c2 = a.proxy(this.clear, this), d2 = this.core.$stage.children().eq(this.previous), e2 = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
        this.core.current() !== this.previous && (g && (b2 = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d2.css({ left: b2 + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c2)), f && e2.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c2));
      }
    }, e.prototype.clear = function(b2) {
      a(b2.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd();
    }, e.prototype.destroy = function() {
      var a2, b2;
      for (a2 in this.handlers)
        this.core.$element.off(a2, this.handlers[a2]);
      for (b2 in Object.getOwnPropertyNames(this))
        "function" != typeof this[b2] && (this[b2] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
  }(window.Zepto || window.jQuery, window, document), function(a, b, c) {
    var d = function(b2) {
      this.core = b2, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
        this.autoplay();
      }, this), "play.owl.autoplay": a.proxy(function(a2, b3, c2) {
        this.play(b3, c2);
      }, this), "stop.owl.autoplay": a.proxy(function() {
        this.stop();
      }, this), "mouseover.owl.autoplay": a.proxy(function() {
        this.core.settings.autoplayHoverPause && this.pause();
      }, this), "mouseleave.owl.autoplay": a.proxy(function() {
        this.core.settings.autoplayHoverPause && this.autoplay();
      }, this) }, this.core.$element.on(this.handlers);
    };
    d.Defaults = { autoplay: false, autoplayTimeout: 5e3, autoplayHoverPause: false, autoplaySpeed: false }, d.prototype.autoplay = function() {
      this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
        this.play();
      }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval);
    }, d.prototype.play = function() {
      return c.hidden === true || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === false ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
    }, d.prototype.stop = function() {
      b.clearInterval(this.interval);
    }, d.prototype.pause = function() {
      b.clearInterval(this.interval);
    }, d.prototype.destroy = function() {
      var a2, c2;
      b.clearInterval(this.interval);
      for (a2 in this.handlers)
        this.core.$element.off(a2, this.handlers[a2]);
      for (c2 in Object.getOwnPropertyNames(this))
        "function" != typeof this[c2] && (this[c2] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d;
  }(window.Zepto || window.jQuery, window, document), function(a) {
    "use strict";
    var b = function(c) {
      this._core = c, this._initialized = false, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b2) {
        this._core.settings.dotsData && this._templates.push(a(b2.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
      }, this), "add.owl.carousel": a.proxy(function(b2) {
        this._core.settings.dotsData && this._templates.splice(b2.position, 0, a(b2.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
      }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a2) {
        this._core.settings.dotsData && this._templates.splice(a2.position, 1);
      }, this), "change.owl.carousel": a.proxy(function(a2) {
        if ("position" == a2.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var b2 = this._core.current(), c2 = this._core.maximum(), d = this._core.minimum();
          a2.data = a2.property.value > c2 ? b2 >= c2 ? d : c2 : a2.property.value < d ? c2 : a2.property.value;
        }
      }, this), "changed.owl.carousel": a.proxy(function(a2) {
        "position" == a2.property.name && this.draw();
      }, this), "refreshed.owl.carousel": a.proxy(function() {
        this._initialized || (this.initialize(), this._initialized = true), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation");
      }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers);
    };
    b.Defaults = { nav: false, navRewind: true, navText: ["prev", "next"], navSpeed: false, navElement: "div", navContainer: false, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: true, dotsEach: false, dotData: false, dotsSpeed: false, dotsContainer: false, controlsClass: "owl-controls" }, b.prototype.initialize = function() {
      var b2, c, d = this._core.settings;
      d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b3) {
        var c2 = a(b3.target).parent().is(this._controls.$indicators) ? a(b3.target).index() : a(b3.target).parent().index();
        b3.preventDefault(), this.to(c2, d.dotsSpeed);
      }, this)), b2 = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b2).on("click", a.proxy(function() {
        this.prev(d.navSpeed);
      }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b2).on("click", a.proxy(function() {
        this.next(d.navSpeed);
      }, this));
      for (c in this._overrides)
        this._core[c] = a.proxy(this[c], this);
    }, b.prototype.destroy = function() {
      var a2, b2, c, d;
      for (a2 in this._handlers)
        this.$element.off(a2, this._handlers[a2]);
      for (b2 in this._controls)
        this._controls[b2].remove();
      for (d in this.overides)
        this._core[d] = this._overrides[d];
      for (c in Object.getOwnPropertyNames(this))
        "function" != typeof this[c] && (this[c] = null);
    }, b.prototype.update = function() {
      var a2, b2, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
      if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
        for (this._pages = [], a2 = e, b2 = 0, c = 0; f > a2; a2++)
          (b2 >= g || 0 === b2) && (this._pages.push({ start: a2 - e, end: a2 - e + g - 1 }), b2 = 0, ++c), b2 += this._core.mergers(this._core.relative(a2));
    }, b.prototype.draw = function() {
      var b2, c, d = "", e = this._core.settings, f = (this._core.$stage.children(), this._core.relative(this._core.current()));
      if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
        if (b2 = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b2) {
          for (c = 0; c < this._controls.$indicators.children().length; c++)
            d += this._templates[this._core.relative(c)];
          this._controls.$indicators.html(d);
        } else
          b2 > 0 ? (d = new Array(b2 + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b2 && this._controls.$indicators.children().slice(b2).remove();
        this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active");
      }
      this._controls.$indicators.toggle(e.dots);
    }, b.prototype.onTrigger = function(b2) {
      var c = this._core.settings;
      b2.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) };
    }, b.prototype.current = function() {
      var b2 = this._core.relative(this._core.current());
      return a.grep(this._pages, function(a2) {
        return a2.start <= b2 && a2.end >= b2;
      }).pop();
    }, b.prototype.getPosition = function(b2) {
      var c, d, e = this._core.settings;
      return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b2 ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b2 ? c += e.slideBy : c -= e.slideBy), c;
    }, b.prototype.next = function(b2) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(true), b2);
    }, b.prototype.prev = function(b2) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(false), b2);
    }, b.prototype.to = function(b2, c, d) {
      var e;
      d ? a.proxy(this._overrides.to, this._core)(b2, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b2 % e + e) % e].start, c));
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b;
  }(window.Zepto || window.jQuery, window, document), function(a, b) {
    "use strict";
    var c = function(d) {
      this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function() {
        "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this), "prepared.owl.carousel": a.proxy(function(b2) {
        var c2 = a(b2.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[c2] = b2.content;
      }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
        var a2 = b.location.hash.substring(1), c2 = this._core.$stage.children(), d2 = this._hashes[a2] && c2.index(this._hashes[a2]) || 0;
        return a2 ? void this._core.to(d2, false, true) : false;
      }, this));
    };
    c.Defaults = { URLhashListener: false }, c.prototype.destroy = function() {
      var c2, d;
      a(b).off("hashchange.owl.navigation");
      for (c2 in this._handlers)
        this._core.$element.off(c2, this._handlers[c2]);
      for (d in Object.getOwnPropertyNames(this))
        "function" != typeof this[d] && (this[d] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c;
  }(window.Zepto || window.jQuery, window, document);

  // javascript/application.js
  var import_bootstrap_min = __toESM(require_bootstrap_min());
  var import_imagesloaded_pkgd_min = __toESM(require_imagesloaded_pkgd_min());
  var import_masonry_pkgd_min = __toESM(require_masonry_pkgd_min());
  var import_jquery_matchHeight_min = __toESM(require_jquery_matchHeight_min());
  var import_slick_min = __toESM(require_slick_min());
  var import_jquery_barrating_min = __toESM(require_jquery_barrating_min());

  // plugins/slick-animation.min.js
  !function(a) {
    a.fn.slickAnimation = function() {
      function n(a2, n2, t3, i2, o2) {
        o2 = "undefined" != typeof o2 ? o2 : false, 1 == n2.opacity ? (a2.addClass(t3), a2.addClass(i2)) : (a2.removeClass(t3), a2.removeClass(i2)), o2 && a2.css(n2);
      }
      function t2(a2, n2) {
        return a2 ? 1e3 * a2 + 1e3 : n2 ? 1e3 * n2 : a2 || n2 ? 1e3 * a2 + 1e3 * n2 : 1e3;
      }
      function i(a2, n2, t3) {
        var i2 = ["animation-" + n2, "-webkit-animation-" + n2, "-moz-animation-" + n2, "-o-animation-" + n2, "-ms-animation-" + n2], o2 = {};
        i2.forEach(function(a3) {
          o2[a3] = t3 + "s";
        }), a2.css(o2);
      }
      var o = a(this), e = o.find(".slick-list .slick-track > div"), s = o.find('[data-slick-index="0"]'), r = "animated", c = { opacity: "1" }, d = { opacity: "0" };
      return e.each(function() {
        var e2 = a(this);
        e2.find("[data-animation-in]").each(function() {
          var u = a(this);
          u.css(d);
          var l = u.attr("data-animation-in"), f = u.attr("data-animation-out"), h = u.attr("data-delay-in"), m = u.attr("data-duration-in"), y = u.attr("data-delay-out"), C = u.attr("data-duration-out");
          f ? (s.length > 0 && e2.hasClass("slick-current") && (n(u, c, l, r, true), h && i(u, "delay", h), m && i(u, "duration", m), setTimeout(function() {
            n(u, d, l, r), n(u, c, f, r), y && i(u, "delay", y), C && i(u, "duration", C);
          }, t2(h, m))), o.on("afterChange", function(a2, o2, s2) {
            e2.hasClass("slick-current") && (n(u, c, l, r, true), h && i(u, "delay", h), m && i(u, "duration", m), setTimeout(function() {
              n(u, d, l, r), n(u, c, f, r), y && i(u, "delay", y), C && i(u, "duration", C);
            }, t2(h, m)));
          }), o.on("beforeChange", function(a2, t3, i2) {
            n(u, d, f, r, true);
          })) : (s.length > 0 && e2.hasClass("slick-current") && (n(u, c, l, r, true), h && i(u, "delay", h), m && i(u, "duration", m)), o.on("afterChange", function(a2, t3, o2) {
            e2.hasClass("slick-current") && (n(u, c, l, r, true), h && i(u, "delay", h), m && i(u, "duration", m));
          }), o.on("beforeChange", function(a2, t3, i2) {
            n(u, d, l, r, true);
          }));
        });
      }), this;
    };
  }(jQuery);

  // javascript/application.js
  var import_lightgallery_all_min = __toESM(require_lightgallery_all_min());

  // plugins/jquery-ui/jquery-ui.min.js
  (function(t2) {
    "function" == typeof define && define.amd ? define(["jquery"], t2) : t2(jQuery);
  })(function(t2) {
    function e(t3) {
      for (var e2 = t3.css("visibility"); "inherit" === e2; )
        t3 = t3.parent(), e2 = t3.css("visibility");
      return "hidden" !== e2;
    }
    function i(t3) {
      for (var e2, i2; t3.length && t3[0] !== document; ) {
        if (e2 = t3.css("position"), ("absolute" === e2 || "relative" === e2 || "fixed" === e2) && (i2 = parseInt(t3.css("zIndex"), 10), !isNaN(i2) && 0 !== i2))
          return i2;
        t3 = t3.parent();
      }
      return 0;
    }
    function s() {
      this._curInst = null, this._keyEvent = false, this._disabledInputs = [], this._datepickerShowing = false, this._inDialog = false, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false }, t2.extend(this._defaults, this.regional[""]), this.regional.en = t2.extend(true, {}, this.regional[""]), this.regional["en-US"] = t2.extend(true, {}, this.regional.en), this.dpDiv = n(t2("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function n(e2) {
      var i2 = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e2.on("mouseout", i2, function() {
        t2(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t2(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t2(this).removeClass("ui-datepicker-next-hover");
      }).on("mouseover", i2, o);
    }
    function o() {
      t2.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (t2(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t2(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t2(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t2(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e2, i2) {
      t2.extend(e2, i2);
      for (var s2 in i2)
        null == i2[s2] && (e2[s2] = i2[s2]);
      return e2;
    }
    t2.ui = t2.ui || {}, t2.ui.version = "1.12.1";
    var r = 0, h = Array.prototype.slice;
    t2.cleanData = function(e2) {
      return function(i2) {
        var s2, n2, o2;
        for (o2 = 0; null != (n2 = i2[o2]); o2++)
          try {
            s2 = t2._data(n2, "events"), s2 && s2.remove && t2(n2).triggerHandler("remove");
          } catch (a2) {
          }
        e2(i2);
      };
    }(t2.cleanData), t2.widget = function(e2, i2, s2) {
      var n2, o2, a2, r2 = {}, h2 = e2.split(".")[0];
      e2 = e2.split(".")[1];
      var l2 = h2 + "-" + e2;
      return s2 || (s2 = i2, i2 = t2.Widget), t2.isArray(s2) && (s2 = t2.extend.apply(null, [{}].concat(s2))), t2.expr[":"][l2.toLowerCase()] = function(e3) {
        return !!t2.data(e3, l2);
      }, t2[h2] = t2[h2] || {}, n2 = t2[h2][e2], o2 = t2[h2][e2] = function(t3, e3) {
        return this._createWidget ? (arguments.length && this._createWidget(t3, e3), void 0) : new o2(t3, e3);
      }, t2.extend(o2, n2, { version: s2.version, _proto: t2.extend({}, s2), _childConstructors: [] }), a2 = new i2(), a2.options = t2.widget.extend({}, a2.options), t2.each(s2, function(e3, s3) {
        return t2.isFunction(s3) ? (r2[e3] = function() {
          function t3() {
            return i2.prototype[e3].apply(this, arguments);
          }
          function n3(t4) {
            return i2.prototype[e3].apply(this, t4);
          }
          return function() {
            var e4, i3 = this._super, o3 = this._superApply;
            return this._super = t3, this._superApply = n3, e4 = s3.apply(this, arguments), this._super = i3, this._superApply = o3, e4;
          };
        }(), void 0) : (r2[e3] = s3, void 0);
      }), o2.prototype = t2.widget.extend(a2, { widgetEventPrefix: n2 ? a2.widgetEventPrefix || e2 : e2 }, r2, { constructor: o2, namespace: h2, widgetName: e2, widgetFullName: l2 }), n2 ? (t2.each(n2._childConstructors, function(e3, i3) {
        var s3 = i3.prototype;
        t2.widget(s3.namespace + "." + s3.widgetName, o2, i3._proto);
      }), delete n2._childConstructors) : i2._childConstructors.push(o2), t2.widget.bridge(e2, o2), o2;
    }, t2.widget.extend = function(e2) {
      for (var i2, s2, n2 = h.call(arguments, 1), o2 = 0, a2 = n2.length; a2 > o2; o2++)
        for (i2 in n2[o2])
          s2 = n2[o2][i2], n2[o2].hasOwnProperty(i2) && void 0 !== s2 && (e2[i2] = t2.isPlainObject(s2) ? t2.isPlainObject(e2[i2]) ? t2.widget.extend({}, e2[i2], s2) : t2.widget.extend({}, s2) : s2);
      return e2;
    }, t2.widget.bridge = function(e2, i2) {
      var s2 = i2.prototype.widgetFullName || e2;
      t2.fn[e2] = function(n2) {
        var o2 = "string" == typeof n2, a2 = h.call(arguments, 1), r2 = this;
        return o2 ? this.length || "instance" !== n2 ? this.each(function() {
          var i3, o3 = t2.data(this, s2);
          return "instance" === n2 ? (r2 = o3, false) : o3 ? t2.isFunction(o3[n2]) && "_" !== n2.charAt(0) ? (i3 = o3[n2].apply(o3, a2), i3 !== o3 && void 0 !== i3 ? (r2 = i3 && i3.jquery ? r2.pushStack(i3.get()) : i3, false) : void 0) : t2.error("no such method '" + n2 + "' for " + e2 + " widget instance") : t2.error("cannot call methods on " + e2 + " prior to initialization; attempted to call method '" + n2 + "'");
        }) : r2 = void 0 : (a2.length && (n2 = t2.widget.extend.apply(null, [n2].concat(a2))), this.each(function() {
          var e3 = t2.data(this, s2);
          e3 ? (e3.option(n2 || {}), e3._init && e3._init()) : t2.data(this, s2, new i2(n2, this));
        })), r2;
      };
    }, t2.Widget = function() {
    }, t2.Widget._childConstructors = [], t2.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: false, create: null }, _createWidget: function(e2, i2) {
      i2 = t2(i2 || this.defaultElement || this)[0], this.element = t2(i2), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t2(), this.hoverable = t2(), this.focusable = t2(), this.classesElementLookup = {}, i2 !== this && (t2.data(i2, this.widgetFullName, this), this._on(true, this.element, { remove: function(t3) {
        t3.target === i2 && this.destroy();
      } }), this.document = t2(i2.style ? i2.ownerDocument : i2.document || i2), this.window = t2(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t2.widget.extend({}, this.options, this._getCreateOptions(), e2), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: function() {
      return {};
    }, _getCreateEventData: t2.noop, _create: t2.noop, _init: t2.noop, destroy: function() {
      var e2 = this;
      this._destroy(), t2.each(this.classesElementLookup, function(t3, i2) {
        e2._removeClass(i2, t3);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    }, _destroy: t2.noop, widget: function() {
      return this.element;
    }, option: function(e2, i2) {
      var s2, n2, o2, a2 = e2;
      if (0 === arguments.length)
        return t2.widget.extend({}, this.options);
      if ("string" == typeof e2)
        if (a2 = {}, s2 = e2.split("."), e2 = s2.shift(), s2.length) {
          for (n2 = a2[e2] = t2.widget.extend({}, this.options[e2]), o2 = 0; s2.length - 1 > o2; o2++)
            n2[s2[o2]] = n2[s2[o2]] || {}, n2 = n2[s2[o2]];
          if (e2 = s2.pop(), 1 === arguments.length)
            return void 0 === n2[e2] ? null : n2[e2];
          n2[e2] = i2;
        } else {
          if (1 === arguments.length)
            return void 0 === this.options[e2] ? null : this.options[e2];
          a2[e2] = i2;
        }
      return this._setOptions(a2), this;
    }, _setOptions: function(t3) {
      var e2;
      for (e2 in t3)
        this._setOption(e2, t3[e2]);
      return this;
    }, _setOption: function(t3, e2) {
      return "classes" === t3 && this._setOptionClasses(e2), this.options[t3] = e2, "disabled" === t3 && this._setOptionDisabled(e2), this;
    }, _setOptionClasses: function(e2) {
      var i2, s2, n2;
      for (i2 in e2)
        n2 = this.classesElementLookup[i2], e2[i2] !== this.options.classes[i2] && n2 && n2.length && (s2 = t2(n2.get()), this._removeClass(n2, i2), s2.addClass(this._classes({ element: s2, keys: i2, classes: e2, add: true })));
    }, _setOptionDisabled: function(t3) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t3), t3 && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    }, enable: function() {
      return this._setOptions({ disabled: false });
    }, disable: function() {
      return this._setOptions({ disabled: true });
    }, _classes: function(e2) {
      function i2(i3, o2) {
        var a2, r2;
        for (r2 = 0; i3.length > r2; r2++)
          a2 = n2.classesElementLookup[i3[r2]] || t2(), a2 = e2.add ? t2(t2.unique(a2.get().concat(e2.element.get()))) : t2(a2.not(e2.element).get()), n2.classesElementLookup[i3[r2]] = a2, s2.push(i3[r2]), o2 && e2.classes[i3[r2]] && s2.push(e2.classes[i3[r2]]);
      }
      var s2 = [], n2 = this;
      return e2 = t2.extend({ element: this.element, classes: this.options.classes || {} }, e2), this._on(e2.element, { remove: "_untrackClassesElement" }), e2.keys && i2(e2.keys.match(/\S+/g) || [], true), e2.extra && i2(e2.extra.match(/\S+/g) || []), s2.join(" ");
    }, _untrackClassesElement: function(e2) {
      var i2 = this;
      t2.each(i2.classesElementLookup, function(s2, n2) {
        -1 !== t2.inArray(e2.target, n2) && (i2.classesElementLookup[s2] = t2(n2.not(e2.target).get()));
      });
    }, _removeClass: function(t3, e2, i2) {
      return this._toggleClass(t3, e2, i2, false);
    }, _addClass: function(t3, e2, i2) {
      return this._toggleClass(t3, e2, i2, true);
    }, _toggleClass: function(t3, e2, i2, s2) {
      s2 = "boolean" == typeof s2 ? s2 : i2;
      var n2 = "string" == typeof t3 || null === t3, o2 = { extra: n2 ? e2 : i2, keys: n2 ? t3 : e2, element: n2 ? this.element : t3, add: s2 };
      return o2.element.toggleClass(this._classes(o2), s2), this;
    }, _on: function(e2, i2, s2) {
      var n2, o2 = this;
      "boolean" != typeof e2 && (s2 = i2, i2 = e2, e2 = false), s2 ? (i2 = n2 = t2(i2), this.bindings = this.bindings.add(i2)) : (s2 = i2, i2 = this.element, n2 = this.widget()), t2.each(s2, function(s3, a2) {
        function r2() {
          return e2 || o2.options.disabled !== true && !t2(this).hasClass("ui-state-disabled") ? ("string" == typeof a2 ? o2[a2] : a2).apply(o2, arguments) : void 0;
        }
        "string" != typeof a2 && (r2.guid = a2.guid = a2.guid || r2.guid || t2.guid++);
        var h2 = s3.match(/^([\w:-]*)\s*(.*)$/), l2 = h2[1] + o2.eventNamespace, c2 = h2[2];
        c2 ? n2.on(l2, c2, r2) : i2.on(l2, r2);
      });
    }, _off: function(e2, i2) {
      i2 = (i2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e2.off(i2).off(i2), this.bindings = t2(this.bindings.not(e2).get()), this.focusable = t2(this.focusable.not(e2).get()), this.hoverable = t2(this.hoverable.not(e2).get());
    }, _delay: function(t3, e2) {
      function i2() {
        return ("string" == typeof t3 ? s2[t3] : t3).apply(s2, arguments);
      }
      var s2 = this;
      return setTimeout(i2, e2 || 0);
    }, _hoverable: function(e2) {
      this.hoverable = this.hoverable.add(e2), this._on(e2, { mouseenter: function(e3) {
        this._addClass(t2(e3.currentTarget), null, "ui-state-hover");
      }, mouseleave: function(e3) {
        this._removeClass(t2(e3.currentTarget), null, "ui-state-hover");
      } });
    }, _focusable: function(e2) {
      this.focusable = this.focusable.add(e2), this._on(e2, { focusin: function(e3) {
        this._addClass(t2(e3.currentTarget), null, "ui-state-focus");
      }, focusout: function(e3) {
        this._removeClass(t2(e3.currentTarget), null, "ui-state-focus");
      } });
    }, _trigger: function(e2, i2, s2) {
      var n2, o2, a2 = this.options[e2];
      if (s2 = s2 || {}, i2 = t2.Event(i2), i2.type = (e2 === this.widgetEventPrefix ? e2 : this.widgetEventPrefix + e2).toLowerCase(), i2.target = this.element[0], o2 = i2.originalEvent)
        for (n2 in o2)
          n2 in i2 || (i2[n2] = o2[n2]);
      return this.element.trigger(i2, s2), !(t2.isFunction(a2) && a2.apply(this.element[0], [i2].concat(s2)) === false || i2.isDefaultPrevented());
    } }, t2.each({ show: "fadeIn", hide: "fadeOut" }, function(e2, i2) {
      t2.Widget.prototype["_" + e2] = function(s2, n2, o2) {
        "string" == typeof n2 && (n2 = { effect: n2 });
        var a2, r2 = n2 ? n2 === true || "number" == typeof n2 ? i2 : n2.effect || i2 : e2;
        n2 = n2 || {}, "number" == typeof n2 && (n2 = { duration: n2 }), a2 = !t2.isEmptyObject(n2), n2.complete = o2, n2.delay && s2.delay(n2.delay), a2 && t2.effects && t2.effects.effect[r2] ? s2[e2](n2) : r2 !== e2 && s2[r2] ? s2[r2](n2.duration, n2.easing, o2) : s2.queue(function(i3) {
          t2(this)[e2](), o2 && o2.call(s2[0]), i3();
        });
      };
    }), t2.widget, function() {
      function e2(t3, e3, i3) {
        return [parseFloat(t3[0]) * (u.test(t3[0]) ? e3 / 100 : 1), parseFloat(t3[1]) * (u.test(t3[1]) ? i3 / 100 : 1)];
      }
      function i2(e3, i3) {
        return parseInt(t2.css(e3, i3), 10) || 0;
      }
      function s2(e3) {
        var i3 = e3[0];
        return 9 === i3.nodeType ? { width: e3.width(), height: e3.height(), offset: { top: 0, left: 0 } } : t2.isWindow(i3) ? { width: e3.width(), height: e3.height(), offset: { top: e3.scrollTop(), left: e3.scrollLeft() } } : i3.preventDefault ? { width: 0, height: 0, offset: { top: i3.pageY, left: i3.pageX } } : { width: e3.outerWidth(), height: e3.outerHeight(), offset: e3.offset() };
      }
      var n2, o2 = Math.max, a2 = Math.abs, r2 = /left|center|right/, h2 = /top|center|bottom/, l2 = /[\+\-]\d+(\.[\d]+)?%?/, c2 = /^\w+/, u = /%$/, d = t2.fn.position;
      t2.position = { scrollbarWidth: function() {
        if (void 0 !== n2)
          return n2;
        var e3, i3, s3 = t2("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o3 = s3.children()[0];
        return t2("body").append(s3), e3 = o3.offsetWidth, s3.css("overflow", "scroll"), i3 = o3.offsetWidth, e3 === i3 && (i3 = s3[0].clientWidth), s3.remove(), n2 = e3 - i3;
      }, getScrollInfo: function(e3) {
        var i3 = e3.isWindow || e3.isDocument ? "" : e3.element.css("overflow-x"), s3 = e3.isWindow || e3.isDocument ? "" : e3.element.css("overflow-y"), n3 = "scroll" === i3 || "auto" === i3 && e3.width < e3.element[0].scrollWidth, o3 = "scroll" === s3 || "auto" === s3 && e3.height < e3.element[0].scrollHeight;
        return { width: o3 ? t2.position.scrollbarWidth() : 0, height: n3 ? t2.position.scrollbarWidth() : 0 };
      }, getWithinInfo: function(e3) {
        var i3 = t2(e3 || window), s3 = t2.isWindow(i3[0]), n3 = !!i3[0] && 9 === i3[0].nodeType, o3 = !s3 && !n3;
        return { element: i3, isWindow: s3, isDocument: n3, offset: o3 ? t2(e3).offset() : { left: 0, top: 0 }, scrollLeft: i3.scrollLeft(), scrollTop: i3.scrollTop(), width: i3.outerWidth(), height: i3.outerHeight() };
      } }, t2.fn.position = function(n3) {
        if (!n3 || !n3.of)
          return d.apply(this, arguments);
        n3 = t2.extend({}, n3);
        var u2, p, f, m, g, _, v = t2(n3.of), b = t2.position.getWithinInfo(n3.within), y = t2.position.getScrollInfo(b), w = (n3.collision || "flip").split(" "), x = {};
        return _ = s2(v), v[0].preventDefault && (n3.at = "left top"), p = _.width, f = _.height, m = _.offset, g = t2.extend({}, m), t2.each(["my", "at"], function() {
          var t3, e3, i3 = (n3[this] || "").split(" ");
          1 === i3.length && (i3 = r2.test(i3[0]) ? i3.concat(["center"]) : h2.test(i3[0]) ? ["center"].concat(i3) : ["center", "center"]), i3[0] = r2.test(i3[0]) ? i3[0] : "center", i3[1] = h2.test(i3[1]) ? i3[1] : "center", t3 = l2.exec(i3[0]), e3 = l2.exec(i3[1]), x[this] = [t3 ? t3[0] : 0, e3 ? e3[0] : 0], n3[this] = [c2.exec(i3[0])[0], c2.exec(i3[1])[0]];
        }), 1 === w.length && (w[1] = w[0]), "right" === n3.at[0] ? g.left += p : "center" === n3.at[0] && (g.left += p / 2), "bottom" === n3.at[1] ? g.top += f : "center" === n3.at[1] && (g.top += f / 2), u2 = e2(x.at, p, f), g.left += u2[0], g.top += u2[1], this.each(function() {
          var s3, r3, h3 = t2(this), l3 = h3.outerWidth(), c3 = h3.outerHeight(), d2 = i2(this, "marginLeft"), _2 = i2(this, "marginTop"), k = l3 + d2 + i2(this, "marginRight") + y.width, C = c3 + _2 + i2(this, "marginBottom") + y.height, D = t2.extend({}, g), T = e2(x.my, h3.outerWidth(), h3.outerHeight());
          "right" === n3.my[0] ? D.left -= l3 : "center" === n3.my[0] && (D.left -= l3 / 2), "bottom" === n3.my[1] ? D.top -= c3 : "center" === n3.my[1] && (D.top -= c3 / 2), D.left += T[0], D.top += T[1], s3 = { marginLeft: d2, marginTop: _2 }, t2.each(["left", "top"], function(e3, i3) {
            t2.ui.position[w[e3]] && t2.ui.position[w[e3]][i3](D, { targetWidth: p, targetHeight: f, elemWidth: l3, elemHeight: c3, collisionPosition: s3, collisionWidth: k, collisionHeight: C, offset: [u2[0] + T[0], u2[1] + T[1]], my: n3.my, at: n3.at, within: b, elem: h3 });
          }), n3.using && (r3 = function(t3) {
            var e3 = m.left - D.left, i3 = e3 + p - l3, s4 = m.top - D.top, r4 = s4 + f - c3, u3 = { target: { element: v, left: m.left, top: m.top, width: p, height: f }, element: { element: h3, left: D.left, top: D.top, width: l3, height: c3 }, horizontal: 0 > i3 ? "left" : e3 > 0 ? "right" : "center", vertical: 0 > r4 ? "top" : s4 > 0 ? "bottom" : "middle" };
            l3 > p && p > a2(e3 + i3) && (u3.horizontal = "center"), c3 > f && f > a2(s4 + r4) && (u3.vertical = "middle"), u3.important = o2(a2(e3), a2(i3)) > o2(a2(s4), a2(r4)) ? "horizontal" : "vertical", n3.using.call(this, t3, u3);
          }), h3.offset(t2.extend(D, { using: r3 }));
        });
      }, t2.ui.position = { fit: { left: function(t3, e3) {
        var i3, s3 = e3.within, n3 = s3.isWindow ? s3.scrollLeft : s3.offset.left, a3 = s3.width, r3 = t3.left - e3.collisionPosition.marginLeft, h3 = n3 - r3, l3 = r3 + e3.collisionWidth - a3 - n3;
        e3.collisionWidth > a3 ? h3 > 0 && 0 >= l3 ? (i3 = t3.left + h3 + e3.collisionWidth - a3 - n3, t3.left += h3 - i3) : t3.left = l3 > 0 && 0 >= h3 ? n3 : h3 > l3 ? n3 + a3 - e3.collisionWidth : n3 : h3 > 0 ? t3.left += h3 : l3 > 0 ? t3.left -= l3 : t3.left = o2(t3.left - r3, t3.left);
      }, top: function(t3, e3) {
        var i3, s3 = e3.within, n3 = s3.isWindow ? s3.scrollTop : s3.offset.top, a3 = e3.within.height, r3 = t3.top - e3.collisionPosition.marginTop, h3 = n3 - r3, l3 = r3 + e3.collisionHeight - a3 - n3;
        e3.collisionHeight > a3 ? h3 > 0 && 0 >= l3 ? (i3 = t3.top + h3 + e3.collisionHeight - a3 - n3, t3.top += h3 - i3) : t3.top = l3 > 0 && 0 >= h3 ? n3 : h3 > l3 ? n3 + a3 - e3.collisionHeight : n3 : h3 > 0 ? t3.top += h3 : l3 > 0 ? t3.top -= l3 : t3.top = o2(t3.top - r3, t3.top);
      } }, flip: { left: function(t3, e3) {
        var i3, s3, n3 = e3.within, o3 = n3.offset.left + n3.scrollLeft, r3 = n3.width, h3 = n3.isWindow ? n3.scrollLeft : n3.offset.left, l3 = t3.left - e3.collisionPosition.marginLeft, c3 = l3 - h3, u2 = l3 + e3.collisionWidth - r3 - h3, d2 = "left" === e3.my[0] ? -e3.elemWidth : "right" === e3.my[0] ? e3.elemWidth : 0, p = "left" === e3.at[0] ? e3.targetWidth : "right" === e3.at[0] ? -e3.targetWidth : 0, f = -2 * e3.offset[0];
        0 > c3 ? (i3 = t3.left + d2 + p + f + e3.collisionWidth - r3 - o3, (0 > i3 || a2(c3) > i3) && (t3.left += d2 + p + f)) : u2 > 0 && (s3 = t3.left - e3.collisionPosition.marginLeft + d2 + p + f - h3, (s3 > 0 || u2 > a2(s3)) && (t3.left += d2 + p + f));
      }, top: function(t3, e3) {
        var i3, s3, n3 = e3.within, o3 = n3.offset.top + n3.scrollTop, r3 = n3.height, h3 = n3.isWindow ? n3.scrollTop : n3.offset.top, l3 = t3.top - e3.collisionPosition.marginTop, c3 = l3 - h3, u2 = l3 + e3.collisionHeight - r3 - h3, d2 = "top" === e3.my[1], p = d2 ? -e3.elemHeight : "bottom" === e3.my[1] ? e3.elemHeight : 0, f = "top" === e3.at[1] ? e3.targetHeight : "bottom" === e3.at[1] ? -e3.targetHeight : 0, m = -2 * e3.offset[1];
        0 > c3 ? (s3 = t3.top + p + f + m + e3.collisionHeight - r3 - o3, (0 > s3 || a2(c3) > s3) && (t3.top += p + f + m)) : u2 > 0 && (i3 = t3.top - e3.collisionPosition.marginTop + p + f + m - h3, (i3 > 0 || u2 > a2(i3)) && (t3.top += p + f + m));
      } }, flipfit: { left: function() {
        t2.ui.position.flip.left.apply(this, arguments), t2.ui.position.fit.left.apply(this, arguments);
      }, top: function() {
        t2.ui.position.flip.top.apply(this, arguments), t2.ui.position.fit.top.apply(this, arguments);
      } } };
    }(), t2.ui.position, t2.extend(t2.expr[":"], { data: t2.expr.createPseudo ? t2.expr.createPseudo(function(e2) {
      return function(i2) {
        return !!t2.data(i2, e2);
      };
    }) : function(e2, i2, s2) {
      return !!t2.data(e2, s2[3]);
    } }), t2.fn.extend({ disableSelection: function() {
      var t3 = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function() {
        return this.on(t3 + ".ui-disableSelection", function(t4) {
          t4.preventDefault();
        });
      };
    }(), enableSelection: function() {
      return this.off(".ui-disableSelection");
    } }), t2.ui.focusable = function(i2, s2) {
      var n2, o2, a2, r2, h2, l2 = i2.nodeName.toLowerCase();
      return "area" === l2 ? (n2 = i2.parentNode, o2 = n2.name, i2.href && o2 && "map" === n2.nodeName.toLowerCase() ? (a2 = t2("img[usemap='#" + o2 + "']"), a2.length > 0 && a2.is(":visible")) : false) : (/^(input|select|textarea|button|object)$/.test(l2) ? (r2 = !i2.disabled, r2 && (h2 = t2(i2).closest("fieldset")[0], h2 && (r2 = !h2.disabled))) : r2 = "a" === l2 ? i2.href || s2 : s2, r2 && t2(i2).is(":visible") && e(t2(i2)));
    }, t2.extend(t2.expr[":"], { focusable: function(e2) {
      return t2.ui.focusable(e2, null != t2.attr(e2, "tabindex"));
    } }), t2.ui.focusable, t2.fn.form = function() {
      return "string" == typeof this[0].form ? this.closest("form") : t2(this[0].form);
    }, t2.ui.formResetMixin = { _formResetHandler: function() {
      var e2 = t2(this);
      setTimeout(function() {
        var i2 = e2.data("ui-form-reset-instances");
        t2.each(i2, function() {
          this.refresh();
        });
      });
    }, _bindFormResetHandler: function() {
      if (this.form = this.element.form(), this.form.length) {
        var t3 = this.form.data("ui-form-reset-instances") || [];
        t3.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t3.push(this), this.form.data("ui-form-reset-instances", t3);
      }
    }, _unbindFormResetHandler: function() {
      if (this.form.length) {
        var e2 = this.form.data("ui-form-reset-instances");
        e2.splice(t2.inArray(this, e2), 1), e2.length ? this.form.data("ui-form-reset-instances", e2) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    } }, "1.7" === t2.fn.jquery.substring(0, 3) && (t2.each(["Width", "Height"], function(e2, i2) {
      function s2(e3, i3, s3, o3) {
        return t2.each(n2, function() {
          i3 -= parseFloat(t2.css(e3, "padding" + this)) || 0, s3 && (i3 -= parseFloat(t2.css(e3, "border" + this + "Width")) || 0), o3 && (i3 -= parseFloat(t2.css(e3, "margin" + this)) || 0);
        }), i3;
      }
      var n2 = "Width" === i2 ? ["Left", "Right"] : ["Top", "Bottom"], o2 = i2.toLowerCase(), a2 = { innerWidth: t2.fn.innerWidth, innerHeight: t2.fn.innerHeight, outerWidth: t2.fn.outerWidth, outerHeight: t2.fn.outerHeight };
      t2.fn["inner" + i2] = function(e3) {
        return void 0 === e3 ? a2["inner" + i2].call(this) : this.each(function() {
          t2(this).css(o2, s2(this, e3) + "px");
        });
      }, t2.fn["outer" + i2] = function(e3, n3) {
        return "number" != typeof e3 ? a2["outer" + i2].call(this, e3) : this.each(function() {
          t2(this).css(o2, s2(this, e3, true, n3) + "px");
        });
      };
    }), t2.fn.addBack = function(t3) {
      return this.add(null == t3 ? this.prevObject : this.prevObject.filter(t3));
    }), t2.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t2.ui.escapeSelector = function() {
      var t3 = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
      return function(e2) {
        return e2.replace(t3, "\\$1");
      };
    }(), t2.fn.labels = function() {
      var e2, i2, s2, n2, o2;
      return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n2 = this.eq(0).parents("label"), s2 = this.attr("id"), s2 && (e2 = this.eq(0).parents().last(), o2 = e2.add(e2.length ? e2.siblings() : this.siblings()), i2 = "label[for='" + t2.ui.escapeSelector(s2) + "']", n2 = n2.add(o2.find(i2).addBack(i2))), this.pushStack(n2));
    }, t2.fn.scrollParent = function(e2) {
      var i2 = this.css("position"), s2 = "absolute" === i2, n2 = e2 ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o2 = this.parents().filter(function() {
        var e3 = t2(this);
        return s2 && "static" === e3.css("position") ? false : n2.test(e3.css("overflow") + e3.css("overflow-y") + e3.css("overflow-x"));
      }).eq(0);
      return "fixed" !== i2 && o2.length ? o2 : t2(this[0].ownerDocument || document);
    }, t2.extend(t2.expr[":"], { tabbable: function(e2) {
      var i2 = t2.attr(e2, "tabindex"), s2 = null != i2;
      return (!s2 || i2 >= 0) && t2.ui.focusable(e2, s2);
    } }), t2.fn.extend({ uniqueId: function() {
      var t3 = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++t3);
        });
      };
    }(), removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && t2(this).removeAttr("id");
      });
    } }), t2.extend(t2.ui, { datepicker: { version: "1.12.1" } });
    var l;
    t2.extend(s.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() {
      return this.dpDiv;
    }, setDefaults: function(t3) {
      return a(this._defaults, t3 || {}), this;
    }, _attachDatepicker: function(e2, i2) {
      var s2, n2, o2;
      s2 = e2.nodeName.toLowerCase(), n2 = "div" === s2 || "span" === s2, e2.id || (this.uuid += 1, e2.id = "dp" + this.uuid), o2 = this._newInst(t2(e2), n2), o2.settings = t2.extend({}, i2 || {}), "input" === s2 ? this._connectDatepicker(e2, o2) : n2 && this._inlineDatepicker(e2, o2);
    }, _newInst: function(e2, i2) {
      var s2 = e2[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return { id: s2, input: e2, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i2, dpDiv: i2 ? n(t2("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
    }, _connectDatepicker: function(e2, i2) {
      var s2 = t2(e2);
      i2.append = t2([]), i2.trigger = t2([]), s2.hasClass(this.markerClassName) || (this._attachments(s2, i2), s2.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i2), t2.data(e2, "datepicker", i2), i2.settings.disabled && this._disableDatepicker(e2));
    }, _attachments: function(e2, i2) {
      var s2, n2, o2, a2 = this._get(i2, "appendText"), r2 = this._get(i2, "isRTL");
      i2.append && i2.append.remove(), a2 && (i2.append = t2("<span class='" + this._appendClass + "'>" + a2 + "</span>"), e2[r2 ? "before" : "after"](i2.append)), e2.off("focus", this._showDatepicker), i2.trigger && i2.trigger.remove(), s2 = this._get(i2, "showOn"), ("focus" === s2 || "both" === s2) && e2.on("focus", this._showDatepicker), ("button" === s2 || "both" === s2) && (n2 = this._get(i2, "buttonText"), o2 = this._get(i2, "buttonImage"), i2.trigger = t2(this._get(i2, "buttonImageOnly") ? t2("<img/>").addClass(this._triggerClass).attr({ src: o2, alt: n2, title: n2 }) : t2("<button type='button'></button>").addClass(this._triggerClass).html(o2 ? t2("<img/>").attr({ src: o2, alt: n2, title: n2 }) : n2)), e2[r2 ? "before" : "after"](i2.trigger), i2.trigger.on("click", function() {
        return t2.datepicker._datepickerShowing && t2.datepicker._lastInput === e2[0] ? t2.datepicker._hideDatepicker() : t2.datepicker._datepickerShowing && t2.datepicker._lastInput !== e2[0] ? (t2.datepicker._hideDatepicker(), t2.datepicker._showDatepicker(e2[0])) : t2.datepicker._showDatepicker(e2[0]), false;
      }));
    }, _autoSize: function(t3) {
      if (this._get(t3, "autoSize") && !t3.inline) {
        var e2, i2, s2, n2, o2 = new Date(2009, 11, 20), a2 = this._get(t3, "dateFormat");
        a2.match(/[DM]/) && (e2 = function(t4) {
          for (i2 = 0, s2 = 0, n2 = 0; t4.length > n2; n2++)
            t4[n2].length > i2 && (i2 = t4[n2].length, s2 = n2);
          return s2;
        }, o2.setMonth(e2(this._get(t3, a2.match(/MM/) ? "monthNames" : "monthNamesShort"))), o2.setDate(e2(this._get(t3, a2.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o2.getDay())), t3.input.attr("size", this._formatDate(t3, o2).length);
      }
    }, _inlineDatepicker: function(e2, i2) {
      var s2 = t2(e2);
      s2.hasClass(this.markerClassName) || (s2.addClass(this.markerClassName).append(i2.dpDiv), t2.data(e2, "datepicker", i2), this._setDate(i2, this._getDefaultDate(i2), true), this._updateDatepicker(i2), this._updateAlternate(i2), i2.settings.disabled && this._disableDatepicker(e2), i2.dpDiv.css("display", "block"));
    }, _dialogDatepicker: function(e2, i2, s2, n2, o2) {
      var r2, h2, l2, c2, u, d = this._dialogInst;
      return d || (this.uuid += 1, r2 = "dp" + this.uuid, this._dialogInput = t2("<input type='text' id='" + r2 + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t2("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, false), d.settings = {}, t2.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n2 || {}), i2 = i2 && i2.constructor === Date ? this._formatDate(d, i2) : i2, this._dialogInput.val(i2), this._pos = o2 ? o2.length ? o2 : [o2.pageX, o2.pageY] : null, this._pos || (h2 = document.documentElement.clientWidth, l2 = document.documentElement.clientHeight, c2 = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h2 / 2 - 100 + c2, l2 / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s2, this._inDialog = true, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t2.blockUI && t2.blockUI(this.dpDiv), t2.data(this._dialogInput[0], "datepicker", d), this;
    }, _destroyDatepicker: function(e2) {
      var i2, s2 = t2(e2), n2 = t2.data(e2, "datepicker");
      s2.hasClass(this.markerClassName) && (i2 = e2.nodeName.toLowerCase(), t2.removeData(e2, "datepicker"), "input" === i2 ? (n2.append.remove(), n2.trigger.remove(), s2.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i2 || "span" === i2) && s2.removeClass(this.markerClassName).empty(), l === n2 && (l = null));
    }, _enableDatepicker: function(e2) {
      var i2, s2, n2 = t2(e2), o2 = t2.data(e2, "datepicker");
      n2.hasClass(this.markerClassName) && (i2 = e2.nodeName.toLowerCase(), "input" === i2 ? (e2.disabled = false, o2.trigger.filter("button").each(function() {
        this.disabled = false;
      }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i2 || "span" === i2) && (s2 = n2.children("." + this._inlineClass), s2.children().removeClass("ui-state-disabled"), s2.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)), this._disabledInputs = t2.map(this._disabledInputs, function(t3) {
        return t3 === e2 ? null : t3;
      }));
    }, _disableDatepicker: function(e2) {
      var i2, s2, n2 = t2(e2), o2 = t2.data(e2, "datepicker");
      n2.hasClass(this.markerClassName) && (i2 = e2.nodeName.toLowerCase(), "input" === i2 ? (e2.disabled = true, o2.trigger.filter("button").each(function() {
        this.disabled = true;
      }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i2 || "span" === i2) && (s2 = n2.children("." + this._inlineClass), s2.children().addClass("ui-state-disabled"), s2.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)), this._disabledInputs = t2.map(this._disabledInputs, function(t3) {
        return t3 === e2 ? null : t3;
      }), this._disabledInputs[this._disabledInputs.length] = e2);
    }, _isDisabledDatepicker: function(t3) {
      if (!t3)
        return false;
      for (var e2 = 0; this._disabledInputs.length > e2; e2++)
        if (this._disabledInputs[e2] === t3)
          return true;
      return false;
    }, _getInst: function(e2) {
      try {
        return t2.data(e2, "datepicker");
      } catch (i2) {
        throw "Missing instance data for this datepicker";
      }
    }, _optionDatepicker: function(e2, i2, s2) {
      var n2, o2, r2, h2, l2 = this._getInst(e2);
      return 2 === arguments.length && "string" == typeof i2 ? "defaults" === i2 ? t2.extend({}, t2.datepicker._defaults) : l2 ? "all" === i2 ? t2.extend({}, l2.settings) : this._get(l2, i2) : null : (n2 = i2 || {}, "string" == typeof i2 && (n2 = {}, n2[i2] = s2), l2 && (this._curInst === l2 && this._hideDatepicker(), o2 = this._getDateDatepicker(e2, true), r2 = this._getMinMaxDate(l2, "min"), h2 = this._getMinMaxDate(l2, "max"), a(l2.settings, n2), null !== r2 && void 0 !== n2.dateFormat && void 0 === n2.minDate && (l2.settings.minDate = this._formatDate(l2, r2)), null !== h2 && void 0 !== n2.dateFormat && void 0 === n2.maxDate && (l2.settings.maxDate = this._formatDate(l2, h2)), "disabled" in n2 && (n2.disabled ? this._disableDatepicker(e2) : this._enableDatepicker(e2)), this._attachments(t2(e2), l2), this._autoSize(l2), this._setDate(l2, o2), this._updateAlternate(l2), this._updateDatepicker(l2)), void 0);
    }, _changeDatepicker: function(t3, e2, i2) {
      this._optionDatepicker(t3, e2, i2);
    }, _refreshDatepicker: function(t3) {
      var e2 = this._getInst(t3);
      e2 && this._updateDatepicker(e2);
    }, _setDateDatepicker: function(t3, e2) {
      var i2 = this._getInst(t3);
      i2 && (this._setDate(i2, e2), this._updateDatepicker(i2), this._updateAlternate(i2));
    }, _getDateDatepicker: function(t3, e2) {
      var i2 = this._getInst(t3);
      return i2 && !i2.inline && this._setDateFromField(i2, e2), i2 ? this._getDate(i2) : null;
    }, _doKeyDown: function(e2) {
      var i2, s2, n2, o2 = t2.datepicker._getInst(e2.target), a2 = true, r2 = o2.dpDiv.is(".ui-datepicker-rtl");
      if (o2._keyEvent = true, t2.datepicker._datepickerShowing)
        switch (e2.keyCode) {
          case 9:
            t2.datepicker._hideDatepicker(), a2 = false;
            break;
          case 13:
            return n2 = t2("td." + t2.datepicker._dayOverClass + ":not(." + t2.datepicker._currentClass + ")", o2.dpDiv), n2[0] && t2.datepicker._selectDay(e2.target, o2.selectedMonth, o2.selectedYear, n2[0]), i2 = t2.datepicker._get(o2, "onSelect"), i2 ? (s2 = t2.datepicker._formatDate(o2), i2.apply(o2.input ? o2.input[0] : null, [s2, o2])) : t2.datepicker._hideDatepicker(), false;
          case 27:
            t2.datepicker._hideDatepicker();
            break;
          case 33:
            t2.datepicker._adjustDate(e2.target, e2.ctrlKey ? -t2.datepicker._get(o2, "stepBigMonths") : -t2.datepicker._get(o2, "stepMonths"), "M");
            break;
          case 34:
            t2.datepicker._adjustDate(e2.target, e2.ctrlKey ? +t2.datepicker._get(o2, "stepBigMonths") : +t2.datepicker._get(o2, "stepMonths"), "M");
            break;
          case 35:
            (e2.ctrlKey || e2.metaKey) && t2.datepicker._clearDate(e2.target), a2 = e2.ctrlKey || e2.metaKey;
            break;
          case 36:
            (e2.ctrlKey || e2.metaKey) && t2.datepicker._gotoToday(e2.target), a2 = e2.ctrlKey || e2.metaKey;
            break;
          case 37:
            (e2.ctrlKey || e2.metaKey) && t2.datepicker._adjustDate(e2.target, r2 ? 1 : -1, "D"), a2 = e2.ctrlKey || e2.metaKey, e2.originalEvent.altKey && t2.datepicker._adjustDate(e2.target, e2.ctrlKey ? -t2.datepicker._get(o2, "stepBigMonths") : -t2.datepicker._get(o2, "stepMonths"), "M");
            break;
          case 38:
            (e2.ctrlKey || e2.metaKey) && t2.datepicker._adjustDate(e2.target, -7, "D"), a2 = e2.ctrlKey || e2.metaKey;
            break;
          case 39:
            (e2.ctrlKey || e2.metaKey) && t2.datepicker._adjustDate(e2.target, r2 ? -1 : 1, "D"), a2 = e2.ctrlKey || e2.metaKey, e2.originalEvent.altKey && t2.datepicker._adjustDate(e2.target, e2.ctrlKey ? +t2.datepicker._get(o2, "stepBigMonths") : +t2.datepicker._get(o2, "stepMonths"), "M");
            break;
          case 40:
            (e2.ctrlKey || e2.metaKey) && t2.datepicker._adjustDate(e2.target, 7, "D"), a2 = e2.ctrlKey || e2.metaKey;
            break;
          default:
            a2 = false;
        }
      else
        36 === e2.keyCode && e2.ctrlKey ? t2.datepicker._showDatepicker(this) : a2 = false;
      a2 && (e2.preventDefault(), e2.stopPropagation());
    }, _doKeyPress: function(e2) {
      var i2, s2, n2 = t2.datepicker._getInst(e2.target);
      return t2.datepicker._get(n2, "constrainInput") ? (i2 = t2.datepicker._possibleChars(t2.datepicker._get(n2, "dateFormat")), s2 = String.fromCharCode(null == e2.charCode ? e2.keyCode : e2.charCode), e2.ctrlKey || e2.metaKey || " " > s2 || !i2 || i2.indexOf(s2) > -1) : void 0;
    }, _doKeyUp: function(e2) {
      var i2, s2 = t2.datepicker._getInst(e2.target);
      if (s2.input.val() !== s2.lastVal)
        try {
          i2 = t2.datepicker.parseDate(t2.datepicker._get(s2, "dateFormat"), s2.input ? s2.input.val() : null, t2.datepicker._getFormatConfig(s2)), i2 && (t2.datepicker._setDateFromField(s2), t2.datepicker._updateAlternate(s2), t2.datepicker._updateDatepicker(s2));
        } catch (n2) {
        }
      return true;
    }, _showDatepicker: function(e2) {
      if (e2 = e2.target || e2, "input" !== e2.nodeName.toLowerCase() && (e2 = t2("input", e2.parentNode)[0]), !t2.datepicker._isDisabledDatepicker(e2) && t2.datepicker._lastInput !== e2) {
        var s2, n2, o2, r2, h2, l2, c2;
        s2 = t2.datepicker._getInst(e2), t2.datepicker._curInst && t2.datepicker._curInst !== s2 && (t2.datepicker._curInst.dpDiv.stop(true, true), s2 && t2.datepicker._datepickerShowing && t2.datepicker._hideDatepicker(t2.datepicker._curInst.input[0])), n2 = t2.datepicker._get(s2, "beforeShow"), o2 = n2 ? n2.apply(e2, [e2, s2]) : {}, o2 !== false && (a(s2.settings, o2), s2.lastVal = null, t2.datepicker._lastInput = e2, t2.datepicker._setDateFromField(s2), t2.datepicker._inDialog && (e2.value = ""), t2.datepicker._pos || (t2.datepicker._pos = t2.datepicker._findPos(e2), t2.datepicker._pos[1] += e2.offsetHeight), r2 = false, t2(e2).parents().each(function() {
          return r2 |= "fixed" === t2(this).css("position"), !r2;
        }), h2 = { left: t2.datepicker._pos[0], top: t2.datepicker._pos[1] }, t2.datepicker._pos = null, s2.dpDiv.empty(), s2.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t2.datepicker._updateDatepicker(s2), h2 = t2.datepicker._checkOffset(s2, h2, r2), s2.dpDiv.css({ position: t2.datepicker._inDialog && t2.blockUI ? "static" : r2 ? "fixed" : "absolute", display: "none", left: h2.left + "px", top: h2.top + "px" }), s2.inline || (l2 = t2.datepicker._get(s2, "showAnim"), c2 = t2.datepicker._get(s2, "duration"), s2.dpDiv.css("z-index", i(t2(e2)) + 1), t2.datepicker._datepickerShowing = true, t2.effects && t2.effects.effect[l2] ? s2.dpDiv.show(l2, t2.datepicker._get(s2, "showOptions"), c2) : s2.dpDiv[l2 || "show"](l2 ? c2 : null), t2.datepicker._shouldFocusInput(s2) && s2.input.trigger("focus"), t2.datepicker._curInst = s2));
      }
    }, _updateDatepicker: function(e2) {
      this.maxRows = 4, l = e2, e2.dpDiv.empty().append(this._generateHTML(e2)), this._attachHandlers(e2);
      var i2, s2 = this._getNumberOfMonths(e2), n2 = s2[1], a2 = 17, r2 = e2.dpDiv.find("." + this._dayOverClass + " a");
      r2.length > 0 && o.apply(r2.get(0)), e2.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n2 > 1 && e2.dpDiv.addClass("ui-datepicker-multi-" + n2).css("width", a2 * n2 + "em"), e2.dpDiv[(1 !== s2[0] || 1 !== s2[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e2.dpDiv[(this._get(e2, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e2 === t2.datepicker._curInst && t2.datepicker._datepickerShowing && t2.datepicker._shouldFocusInput(e2) && e2.input.trigger("focus"), e2.yearshtml && (i2 = e2.yearshtml, setTimeout(function() {
        i2 === e2.yearshtml && e2.yearshtml && e2.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e2.yearshtml), i2 = e2.yearshtml = null;
      }, 0));
    }, _shouldFocusInput: function(t3) {
      return t3.input && t3.input.is(":visible") && !t3.input.is(":disabled") && !t3.input.is(":focus");
    }, _checkOffset: function(e2, i2, s2) {
      var n2 = e2.dpDiv.outerWidth(), o2 = e2.dpDiv.outerHeight(), a2 = e2.input ? e2.input.outerWidth() : 0, r2 = e2.input ? e2.input.outerHeight() : 0, h2 = document.documentElement.clientWidth + (s2 ? 0 : t2(document).scrollLeft()), l2 = document.documentElement.clientHeight + (s2 ? 0 : t2(document).scrollTop());
      return i2.left -= this._get(e2, "isRTL") ? n2 - a2 : 0, i2.left -= s2 && i2.left === e2.input.offset().left ? t2(document).scrollLeft() : 0, i2.top -= s2 && i2.top === e2.input.offset().top + r2 ? t2(document).scrollTop() : 0, i2.left -= Math.min(i2.left, i2.left + n2 > h2 && h2 > n2 ? Math.abs(i2.left + n2 - h2) : 0), i2.top -= Math.min(i2.top, i2.top + o2 > l2 && l2 > o2 ? Math.abs(o2 + r2) : 0), i2;
    }, _findPos: function(e2) {
      for (var i2, s2 = this._getInst(e2), n2 = this._get(s2, "isRTL"); e2 && ("hidden" === e2.type || 1 !== e2.nodeType || t2.expr.filters.hidden(e2)); )
        e2 = e2[n2 ? "previousSibling" : "nextSibling"];
      return i2 = t2(e2).offset(), [i2.left, i2.top];
    }, _hideDatepicker: function(e2) {
      var i2, s2, n2, o2, a2 = this._curInst;
      !a2 || e2 && a2 !== t2.data(e2, "datepicker") || this._datepickerShowing && (i2 = this._get(a2, "showAnim"), s2 = this._get(a2, "duration"), n2 = function() {
        t2.datepicker._tidyDialog(a2);
      }, t2.effects && (t2.effects.effect[i2] || t2.effects[i2]) ? a2.dpDiv.hide(i2, t2.datepicker._get(a2, "showOptions"), s2, n2) : a2.dpDiv["slideDown" === i2 ? "slideUp" : "fadeIn" === i2 ? "fadeOut" : "hide"](i2 ? s2 : null, n2), i2 || n2(), this._datepickerShowing = false, o2 = this._get(a2, "onClose"), o2 && o2.apply(a2.input ? a2.input[0] : null, [a2.input ? a2.input.val() : "", a2]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t2.blockUI && (t2.unblockUI(), t2("body").append(this.dpDiv))), this._inDialog = false);
    }, _tidyDialog: function(t3) {
      t3.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    }, _checkExternalClick: function(e2) {
      if (t2.datepicker._curInst) {
        var i2 = t2(e2.target), s2 = t2.datepicker._getInst(i2[0]);
        (i2[0].id !== t2.datepicker._mainDivId && 0 === i2.parents("#" + t2.datepicker._mainDivId).length && !i2.hasClass(t2.datepicker.markerClassName) && !i2.closest("." + t2.datepicker._triggerClass).length && t2.datepicker._datepickerShowing && (!t2.datepicker._inDialog || !t2.blockUI) || i2.hasClass(t2.datepicker.markerClassName) && t2.datepicker._curInst !== s2) && t2.datepicker._hideDatepicker();
      }
    }, _adjustDate: function(e2, i2, s2) {
      var n2 = t2(e2), o2 = this._getInst(n2[0]);
      this._isDisabledDatepicker(n2[0]) || (this._adjustInstDate(o2, i2 + ("M" === s2 ? this._get(o2, "showCurrentAtPos") : 0), s2), this._updateDatepicker(o2));
    }, _gotoToday: function(e2) {
      var i2, s2 = t2(e2), n2 = this._getInst(s2[0]);
      this._get(n2, "gotoCurrent") && n2.currentDay ? (n2.selectedDay = n2.currentDay, n2.drawMonth = n2.selectedMonth = n2.currentMonth, n2.drawYear = n2.selectedYear = n2.currentYear) : (i2 = new Date(), n2.selectedDay = i2.getDate(), n2.drawMonth = n2.selectedMonth = i2.getMonth(), n2.drawYear = n2.selectedYear = i2.getFullYear()), this._notifyChange(n2), this._adjustDate(s2);
    }, _selectMonthYear: function(e2, i2, s2) {
      var n2 = t2(e2), o2 = this._getInst(n2[0]);
      o2["selected" + ("M" === s2 ? "Month" : "Year")] = o2["draw" + ("M" === s2 ? "Month" : "Year")] = parseInt(i2.options[i2.selectedIndex].value, 10), this._notifyChange(o2), this._adjustDate(n2);
    }, _selectDay: function(e2, i2, s2, n2) {
      var o2, a2 = t2(e2);
      t2(n2).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a2[0]) || (o2 = this._getInst(a2[0]), o2.selectedDay = o2.currentDay = t2("a", n2).html(), o2.selectedMonth = o2.currentMonth = i2, o2.selectedYear = o2.currentYear = s2, this._selectDate(e2, this._formatDate(o2, o2.currentDay, o2.currentMonth, o2.currentYear)));
    }, _clearDate: function(e2) {
      var i2 = t2(e2);
      this._selectDate(i2, "");
    }, _selectDate: function(e2, i2) {
      var s2, n2 = t2(e2), o2 = this._getInst(n2[0]);
      i2 = null != i2 ? i2 : this._formatDate(o2), o2.input && o2.input.val(i2), this._updateAlternate(o2), s2 = this._get(o2, "onSelect"), s2 ? s2.apply(o2.input ? o2.input[0] : null, [i2, o2]) : o2.input && o2.input.trigger("change"), o2.inline ? this._updateDatepicker(o2) : (this._hideDatepicker(), this._lastInput = o2.input[0], "object" != typeof o2.input[0] && o2.input.trigger("focus"), this._lastInput = null);
    }, _updateAlternate: function(e2) {
      var i2, s2, n2, o2 = this._get(e2, "altField");
      o2 && (i2 = this._get(e2, "altFormat") || this._get(e2, "dateFormat"), s2 = this._getDate(e2), n2 = this.formatDate(i2, s2, this._getFormatConfig(e2)), t2(o2).val(n2));
    }, noWeekends: function(t3) {
      var e2 = t3.getDay();
      return [e2 > 0 && 6 > e2, ""];
    }, iso8601Week: function(t3) {
      var e2, i2 = new Date(t3.getTime());
      return i2.setDate(i2.getDate() + 4 - (i2.getDay() || 7)), e2 = i2.getTime(), i2.setMonth(0), i2.setDate(1), Math.floor(Math.round((e2 - i2) / 864e5) / 7) + 1;
    }, parseDate: function(e2, i2, s2) {
      if (null == e2 || null == i2)
        throw "Invalid arguments";
      if (i2 = "object" == typeof i2 ? "" + i2 : i2 + "", "" === i2)
        return null;
      var n2, o2, a2, r2, h2 = 0, l2 = (s2 ? s2.shortYearCutoff : null) || this._defaults.shortYearCutoff, c2 = "string" != typeof l2 ? l2 : new Date().getFullYear() % 100 + parseInt(l2, 10), u = (s2 ? s2.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s2 ? s2.dayNames : null) || this._defaults.dayNames, p = (s2 ? s2.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s2 ? s2.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, _ = -1, v = -1, b = false, y = function(t3) {
        var i3 = e2.length > n2 + 1 && e2.charAt(n2 + 1) === t3;
        return i3 && n2++, i3;
      }, w = function(t3) {
        var e3 = y(t3), s3 = "@" === t3 ? 14 : "!" === t3 ? 20 : "y" === t3 && e3 ? 4 : "o" === t3 ? 3 : 2, n3 = "y" === t3 ? s3 : 1, o3 = RegExp("^\\d{" + n3 + "," + s3 + "}"), a3 = i2.substring(h2).match(o3);
        if (!a3)
          throw "Missing number at position " + h2;
        return h2 += a3[0].length, parseInt(a3[0], 10);
      }, x = function(e3, s3, n3) {
        var o3 = -1, a3 = t2.map(y(e3) ? n3 : s3, function(t3, e4) {
          return [[e4, t3]];
        }).sort(function(t3, e4) {
          return -(t3[1].length - e4[1].length);
        });
        if (t2.each(a3, function(t3, e4) {
          var s4 = e4[1];
          return i2.substr(h2, s4.length).toLowerCase() === s4.toLowerCase() ? (o3 = e4[0], h2 += s4.length, false) : void 0;
        }), -1 !== o3)
          return o3 + 1;
        throw "Unknown name at position " + h2;
      }, k = function() {
        if (i2.charAt(h2) !== e2.charAt(n2))
          throw "Unexpected literal at position " + h2;
        h2++;
      };
      for (n2 = 0; e2.length > n2; n2++)
        if (b)
          "'" !== e2.charAt(n2) || y("'") ? k() : b = false;
        else
          switch (e2.charAt(n2)) {
            case "d":
              _ = w("d");
              break;
            case "D":
              x("D", u, d);
              break;
            case "o":
              v = w("o");
              break;
            case "m":
              g = w("m");
              break;
            case "M":
              g = x("M", p, f);
              break;
            case "y":
              m = w("y");
              break;
            case "@":
              r2 = new Date(w("@")), m = r2.getFullYear(), g = r2.getMonth() + 1, _ = r2.getDate();
              break;
            case "!":
              r2 = new Date((w("!") - this._ticksTo1970) / 1e4), m = r2.getFullYear(), g = r2.getMonth() + 1, _ = r2.getDate();
              break;
            case "'":
              y("'") ? k() : b = true;
              break;
            default:
              k();
          }
      if (i2.length > h2 && (a2 = i2.substr(h2), !/^\s+/.test(a2)))
        throw "Extra/unparsed characters found in date: " + a2;
      if (-1 === m ? m = new Date().getFullYear() : 100 > m && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (c2 >= m ? 0 : -100)), v > -1)
        for (g = 1, _ = v; ; ) {
          if (o2 = this._getDaysInMonth(m, g - 1), o2 >= _)
            break;
          g++, _ -= o2;
        }
      if (r2 = this._daylightSavingAdjust(new Date(m, g - 1, _)), r2.getFullYear() !== m || r2.getMonth() + 1 !== g || r2.getDate() !== _)
        throw "Invalid date";
      return r2;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function(t3, e2, i2) {
      if (!e2)
        return "";
      var s2, n2 = (i2 ? i2.dayNamesShort : null) || this._defaults.dayNamesShort, o2 = (i2 ? i2.dayNames : null) || this._defaults.dayNames, a2 = (i2 ? i2.monthNamesShort : null) || this._defaults.monthNamesShort, r2 = (i2 ? i2.monthNames : null) || this._defaults.monthNames, h2 = function(e3) {
        var i3 = t3.length > s2 + 1 && t3.charAt(s2 + 1) === e3;
        return i3 && s2++, i3;
      }, l2 = function(t4, e3, i3) {
        var s3 = "" + e3;
        if (h2(t4))
          for (; i3 > s3.length; )
            s3 = "0" + s3;
        return s3;
      }, c2 = function(t4, e3, i3, s3) {
        return h2(t4) ? s3[e3] : i3[e3];
      }, u = "", d = false;
      if (e2)
        for (s2 = 0; t3.length > s2; s2++)
          if (d)
            "'" !== t3.charAt(s2) || h2("'") ? u += t3.charAt(s2) : d = false;
          else
            switch (t3.charAt(s2)) {
              case "d":
                u += l2("d", e2.getDate(), 2);
                break;
              case "D":
                u += c2("D", e2.getDay(), n2, o2);
                break;
              case "o":
                u += l2("o", Math.round((new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()).getTime() - new Date(e2.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
              case "m":
                u += l2("m", e2.getMonth() + 1, 2);
                break;
              case "M":
                u += c2("M", e2.getMonth(), a2, r2);
                break;
              case "y":
                u += h2("y") ? e2.getFullYear() : (10 > e2.getFullYear() % 100 ? "0" : "") + e2.getFullYear() % 100;
                break;
              case "@":
                u += e2.getTime();
                break;
              case "!":
                u += 1e4 * e2.getTime() + this._ticksTo1970;
                break;
              case "'":
                h2("'") ? u += "'" : d = true;
                break;
              default:
                u += t3.charAt(s2);
            }
      return u;
    }, _possibleChars: function(t3) {
      var e2, i2 = "", s2 = false, n2 = function(i3) {
        var s3 = t3.length > e2 + 1 && t3.charAt(e2 + 1) === i3;
        return s3 && e2++, s3;
      };
      for (e2 = 0; t3.length > e2; e2++)
        if (s2)
          "'" !== t3.charAt(e2) || n2("'") ? i2 += t3.charAt(e2) : s2 = false;
        else
          switch (t3.charAt(e2)) {
            case "d":
            case "m":
            case "y":
            case "@":
              i2 += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              n2("'") ? i2 += "'" : s2 = true;
              break;
            default:
              i2 += t3.charAt(e2);
          }
      return i2;
    }, _get: function(t3, e2) {
      return void 0 !== t3.settings[e2] ? t3.settings[e2] : this._defaults[e2];
    }, _setDateFromField: function(t3, e2) {
      if (t3.input.val() !== t3.lastVal) {
        var i2 = this._get(t3, "dateFormat"), s2 = t3.lastVal = t3.input ? t3.input.val() : null, n2 = this._getDefaultDate(t3), o2 = n2, a2 = this._getFormatConfig(t3);
        try {
          o2 = this.parseDate(i2, s2, a2) || n2;
        } catch (r2) {
          s2 = e2 ? "" : s2;
        }
        t3.selectedDay = o2.getDate(), t3.drawMonth = t3.selectedMonth = o2.getMonth(), t3.drawYear = t3.selectedYear = o2.getFullYear(), t3.currentDay = s2 ? o2.getDate() : 0, t3.currentMonth = s2 ? o2.getMonth() : 0, t3.currentYear = s2 ? o2.getFullYear() : 0, this._adjustInstDate(t3);
      }
    }, _getDefaultDate: function(t3) {
      return this._restrictMinMax(t3, this._determineDate(t3, this._get(t3, "defaultDate"), new Date()));
    }, _determineDate: function(e2, i2, s2) {
      var n2 = function(t3) {
        var e3 = new Date();
        return e3.setDate(e3.getDate() + t3), e3;
      }, o2 = function(i3) {
        try {
          return t2.datepicker.parseDate(t2.datepicker._get(e2, "dateFormat"), i3, t2.datepicker._getFormatConfig(e2));
        } catch (s3) {
        }
        for (var n3 = (i3.toLowerCase().match(/^c/) ? t2.datepicker._getDate(e2) : null) || new Date(), o3 = n3.getFullYear(), a3 = n3.getMonth(), r2 = n3.getDate(), h2 = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l2 = h2.exec(i3); l2; ) {
          switch (l2[2] || "d") {
            case "d":
            case "D":
              r2 += parseInt(l2[1], 10);
              break;
            case "w":
            case "W":
              r2 += 7 * parseInt(l2[1], 10);
              break;
            case "m":
            case "M":
              a3 += parseInt(l2[1], 10), r2 = Math.min(r2, t2.datepicker._getDaysInMonth(o3, a3));
              break;
            case "y":
            case "Y":
              o3 += parseInt(l2[1], 10), r2 = Math.min(r2, t2.datepicker._getDaysInMonth(o3, a3));
          }
          l2 = h2.exec(i3);
        }
        return new Date(o3, a3, r2);
      }, a2 = null == i2 || "" === i2 ? s2 : "string" == typeof i2 ? o2(i2) : "number" == typeof i2 ? isNaN(i2) ? s2 : n2(i2) : new Date(i2.getTime());
      return a2 = a2 && "Invalid Date" == "" + a2 ? s2 : a2, a2 && (a2.setHours(0), a2.setMinutes(0), a2.setSeconds(0), a2.setMilliseconds(0)), this._daylightSavingAdjust(a2);
    }, _daylightSavingAdjust: function(t3) {
      return t3 ? (t3.setHours(t3.getHours() > 12 ? t3.getHours() + 2 : 0), t3) : null;
    }, _setDate: function(t3, e2, i2) {
      var s2 = !e2, n2 = t3.selectedMonth, o2 = t3.selectedYear, a2 = this._restrictMinMax(t3, this._determineDate(t3, e2, new Date()));
      t3.selectedDay = t3.currentDay = a2.getDate(), t3.drawMonth = t3.selectedMonth = t3.currentMonth = a2.getMonth(), t3.drawYear = t3.selectedYear = t3.currentYear = a2.getFullYear(), n2 === t3.selectedMonth && o2 === t3.selectedYear || i2 || this._notifyChange(t3), this._adjustInstDate(t3), t3.input && t3.input.val(s2 ? "" : this._formatDate(t3));
    }, _getDate: function(t3) {
      var e2 = !t3.currentYear || t3.input && "" === t3.input.val() ? null : this._daylightSavingAdjust(new Date(t3.currentYear, t3.currentMonth, t3.currentDay));
      return e2;
    }, _attachHandlers: function(e2) {
      var i2 = this._get(e2, "stepMonths"), s2 = "#" + e2.id.replace(/\\\\/g, "\\");
      e2.dpDiv.find("[data-handler]").map(function() {
        var e3 = { prev: function() {
          t2.datepicker._adjustDate(s2, -i2, "M");
        }, next: function() {
          t2.datepicker._adjustDate(s2, +i2, "M");
        }, hide: function() {
          t2.datepicker._hideDatepicker();
        }, today: function() {
          t2.datepicker._gotoToday(s2);
        }, selectDay: function() {
          return t2.datepicker._selectDay(s2, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), false;
        }, selectMonth: function() {
          return t2.datepicker._selectMonthYear(s2, this, "M"), false;
        }, selectYear: function() {
          return t2.datepicker._selectMonthYear(s2, this, "Y"), false;
        } };
        t2(this).on(this.getAttribute("data-event"), e3[this.getAttribute("data-handler")]);
      });
    }, _generateHTML: function(t3) {
      var e2, i2, s2, n2, o2, a2, r2, h2, l2, c2, u, d, p, f, m, g, _, v, b, y, w, x, k, C, D, T, I, M, P, S, N, H, A, z, O, E, W, F, L, R = new Date(), Y = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), B = this._get(t3, "isRTL"), j = this._get(t3, "showButtonPanel"), q = this._get(t3, "hideIfNoPrevNext"), K = this._get(t3, "navigationAsDateFormat"), U = this._getNumberOfMonths(t3), V = this._get(t3, "showCurrentAtPos"), $2 = this._get(t3, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], G = this._daylightSavingAdjust(t3.currentDay ? new Date(t3.currentYear, t3.currentMonth, t3.currentDay) : new Date(9999, 9, 9)), J = this._getMinMaxDate(t3, "min"), Q = this._getMinMaxDate(t3, "max"), Z = t3.drawMonth - V, te = t3.drawYear;
      if (0 > Z && (Z += 12, te--), Q)
        for (e2 = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e2 = J && J > e2 ? J : e2; this._daylightSavingAdjust(new Date(te, Z, 1)) > e2; )
          Z--, 0 > Z && (Z = 11, te--);
      for (t3.drawMonth = Z, t3.drawYear = te, i2 = this._get(t3, "prevText"), i2 = K ? this.formatDate(i2, this._daylightSavingAdjust(new Date(te, Z - $2, 1)), this._getFormatConfig(t3)) : i2, s2 = this._canAdjustMonth(t3, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i2 + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i2 + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i2 + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i2 + "</span></a>", n2 = this._get(t3, "nextText"), n2 = K ? this.formatDate(n2, this._daylightSavingAdjust(new Date(te, Z + $2, 1)), this._getFormatConfig(t3)) : n2, o2 = this._canAdjustMonth(t3, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n2 + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n2 + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n2 + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n2 + "</span></a>", a2 = this._get(t3, "currentText"), r2 = this._get(t3, "gotoCurrent") && t3.currentDay ? G : Y, a2 = K ? this.formatDate(a2, r2, this._getFormatConfig(t3)) : a2, h2 = t3.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t3, "closeText") + "</button>", l2 = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? h2 : "") + (this._isInRange(t3, r2) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a2 + "</button>" : "") + (B ? "" : h2) + "</div>" : "", c2 = parseInt(this._get(t3, "firstDay"), 10), c2 = isNaN(c2) ? 0 : c2, u = this._get(t3, "showWeek"), d = this._get(t3, "dayNames"), p = this._get(t3, "dayNamesMin"), f = this._get(t3, "monthNames"), m = this._get(t3, "monthNamesShort"), g = this._get(t3, "beforeShowDay"), _ = this._get(t3, "showOtherMonths"), v = this._get(t3, "selectOtherMonths"), b = this._getDefaultDate(t3), y = "", x = 0; U[0] > x; x++) {
        for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t3.selectedDay)), T = " ui-corner-all", I = "", X) {
            if (I += "<div class='ui-datepicker-group", U[1] > 1)
              switch (C) {
                case 0:
                  I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                  break;
                case U[1] - 1:
                  I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                  break;
                default:
                  I += " ui-datepicker-group-middle", T = "";
              }
            I += "'>";
          }
          for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? B ? o2 : s2 : "") + (/all|right/.test(T) && 0 === x ? B ? s2 : o2 : "") + this._generateMonthYearHeader(t3, Z, te, J, Q, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t3, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)
            P = (w + c2) % 7, M += "<th scope='col'" + ((w + c2 + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
          for (I += M + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t3.selectedYear && Z === t3.selectedMonth && (t3.selectedDay = Math.min(t3.selectedDay, S)), N = (this._getFirstDayOfMonth(te, Z) - c2 + 7) % 7, H = Math.ceil((N + S) / 7), A = X ? this.maxRows > H ? this.maxRows : H : H, this.maxRows = A, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; A > O; O++) {
            for (I += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t3, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++)
              W = g ? g.apply(t3.input ? t3.input[0] : null, [z]) : [true, ""], F = z.getMonth() !== Z, L = F && !v || !W[0] || J && J > z || Q && z > Q, E += "<td class='" + ((w + c2 + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t3.selectedMonth && t3._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + W[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
            I += E + "</tr>";
          }
          Z++, Z > 11 && (Z = 0, te++), I += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += I;
        }
        y += k;
      }
      return y += l2, t3._keyEvent = false, y;
    }, _generateMonthYearHeader: function(t3, e2, i2, s2, n2, o2, a2, r2) {
      var h2, l2, c2, u, d, p, f, m, g = this._get(t3, "changeMonth"), _ = this._get(t3, "changeYear"), v = this._get(t3, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
      if (o2 || !g)
        y += "<span class='ui-datepicker-month'>" + a2[e2] + "</span>";
      else {
        for (h2 = s2 && s2.getFullYear() === i2, l2 = n2 && n2.getFullYear() === i2, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c2 = 0; 12 > c2; c2++)
          (!h2 || c2 >= s2.getMonth()) && (!l2 || n2.getMonth() >= c2) && (y += "<option value='" + c2 + "'" + (c2 === e2 ? " selected='selected'" : "") + ">" + r2[c2] + "</option>");
        y += "</select>";
      }
      if (v || (b += y + (!o2 && g && _ ? "" : "&#xa0;")), !t3.yearshtml)
        if (t3.yearshtml = "", o2 || !_)
          b += "<span class='ui-datepicker-year'>" + i2 + "</span>";
        else {
          for (u = this._get(t3, "yearRange").split(":"), d = new Date().getFullYear(), p = function(t4) {
            var e3 = t4.match(/c[+\-].*/) ? i2 + parseInt(t4.substring(1), 10) : t4.match(/[+\-].*/) ? d + parseInt(t4, 10) : parseInt(t4, 10);
            return isNaN(e3) ? d : e3;
          }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s2 ? Math.max(f, s2.getFullYear()) : f, m = n2 ? Math.min(m, n2.getFullYear()) : m, t3.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)
            t3.yearshtml += "<option value='" + f + "'" + (f === i2 ? " selected='selected'" : "") + ">" + f + "</option>";
          t3.yearshtml += "</select>", b += t3.yearshtml, t3.yearshtml = null;
        }
      return b += this._get(t3, "yearSuffix"), v && (b += (!o2 && g && _ ? "" : "&#xa0;") + y), b += "</div>";
    }, _adjustInstDate: function(t3, e2, i2) {
      var s2 = t3.selectedYear + ("Y" === i2 ? e2 : 0), n2 = t3.selectedMonth + ("M" === i2 ? e2 : 0), o2 = Math.min(t3.selectedDay, this._getDaysInMonth(s2, n2)) + ("D" === i2 ? e2 : 0), a2 = this._restrictMinMax(t3, this._daylightSavingAdjust(new Date(s2, n2, o2)));
      t3.selectedDay = a2.getDate(), t3.drawMonth = t3.selectedMonth = a2.getMonth(), t3.drawYear = t3.selectedYear = a2.getFullYear(), ("M" === i2 || "Y" === i2) && this._notifyChange(t3);
    }, _restrictMinMax: function(t3, e2) {
      var i2 = this._getMinMaxDate(t3, "min"), s2 = this._getMinMaxDate(t3, "max"), n2 = i2 && i2 > e2 ? i2 : e2;
      return s2 && n2 > s2 ? s2 : n2;
    }, _notifyChange: function(t3) {
      var e2 = this._get(t3, "onChangeMonthYear");
      e2 && e2.apply(t3.input ? t3.input[0] : null, [t3.selectedYear, t3.selectedMonth + 1, t3]);
    }, _getNumberOfMonths: function(t3) {
      var e2 = this._get(t3, "numberOfMonths");
      return null == e2 ? [1, 1] : "number" == typeof e2 ? [1, e2] : e2;
    }, _getMinMaxDate: function(t3, e2) {
      return this._determineDate(t3, this._get(t3, e2 + "Date"), null);
    }, _getDaysInMonth: function(t3, e2) {
      return 32 - this._daylightSavingAdjust(new Date(t3, e2, 32)).getDate();
    }, _getFirstDayOfMonth: function(t3, e2) {
      return new Date(t3, e2, 1).getDay();
    }, _canAdjustMonth: function(t3, e2, i2, s2) {
      var n2 = this._getNumberOfMonths(t3), o2 = this._daylightSavingAdjust(new Date(i2, s2 + (0 > e2 ? e2 : n2[0] * n2[1]), 1));
      return 0 > e2 && o2.setDate(this._getDaysInMonth(o2.getFullYear(), o2.getMonth())), this._isInRange(t3, o2);
    }, _isInRange: function(t3, e2) {
      var i2, s2, n2 = this._getMinMaxDate(t3, "min"), o2 = this._getMinMaxDate(t3, "max"), a2 = null, r2 = null, h2 = this._get(t3, "yearRange");
      return h2 && (i2 = h2.split(":"), s2 = new Date().getFullYear(), a2 = parseInt(i2[0], 10), r2 = parseInt(i2[1], 10), i2[0].match(/[+\-].*/) && (a2 += s2), i2[1].match(/[+\-].*/) && (r2 += s2)), (!n2 || e2.getTime() >= n2.getTime()) && (!o2 || e2.getTime() <= o2.getTime()) && (!a2 || e2.getFullYear() >= a2) && (!r2 || r2 >= e2.getFullYear());
    }, _getFormatConfig: function(t3) {
      var e2 = this._get(t3, "shortYearCutoff");
      return e2 = "string" != typeof e2 ? e2 : new Date().getFullYear() % 100 + parseInt(e2, 10), { shortYearCutoff: e2, dayNamesShort: this._get(t3, "dayNamesShort"), dayNames: this._get(t3, "dayNames"), monthNamesShort: this._get(t3, "monthNamesShort"), monthNames: this._get(t3, "monthNames") };
    }, _formatDate: function(t3, e2, i2, s2) {
      e2 || (t3.currentDay = t3.selectedDay, t3.currentMonth = t3.selectedMonth, t3.currentYear = t3.selectedYear);
      var n2 = e2 ? "object" == typeof e2 ? e2 : this._daylightSavingAdjust(new Date(s2, i2, e2)) : this._daylightSavingAdjust(new Date(t3.currentYear, t3.currentMonth, t3.currentDay));
      return this.formatDate(this._get(t3, "dateFormat"), n2, this._getFormatConfig(t3));
    } }), t2.fn.datepicker = function(e2) {
      if (!this.length)
        return this;
      t2.datepicker.initialized || (t2(document).on("mousedown", t2.datepicker._checkExternalClick), t2.datepicker.initialized = true), 0 === t2("#" + t2.datepicker._mainDivId).length && t2("body").append(t2.datepicker.dpDiv);
      var i2 = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof e2 || "isDisabled" !== e2 && "getDate" !== e2 && "widget" !== e2 ? "option" === e2 && 2 === arguments.length && "string" == typeof arguments[1] ? t2.datepicker["_" + e2 + "Datepicker"].apply(t2.datepicker, [this[0]].concat(i2)) : this.each(function() {
        "string" == typeof e2 ? t2.datepicker["_" + e2 + "Datepicker"].apply(t2.datepicker, [this].concat(i2)) : t2.datepicker._attachDatepicker(this, e2);
      }) : t2.datepicker["_" + e2 + "Datepicker"].apply(t2.datepicker, [this[0]].concat(i2));
    }, t2.datepicker = new s(), t2.datepicker.initialized = false, t2.datepicker.uuid = new Date().getTime(), t2.datepicker.version = "1.12.1", t2.datepicker, t2.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = false;
    t2(document).on("mouseup", function() {
      c = false;
    }), t2.widget("ui.mouse", { version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() {
      var e2 = this;
      this.element.on("mousedown." + this.widgetName, function(t3) {
        return e2._mouseDown(t3);
      }).on("click." + this.widgetName, function(i2) {
        return true === t2.data(i2.target, e2.widgetName + ".preventClickEvent") ? (t2.removeData(i2.target, e2.widgetName + ".preventClickEvent"), i2.stopImmediatePropagation(), false) : void 0;
      }), this.started = false;
    }, _mouseDestroy: function() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function(e2) {
      if (!c) {
        this._mouseMoved = false, this._mouseStarted && this._mouseUp(e2), this._mouseDownEvent = e2;
        var i2 = this, s2 = 1 === e2.which, n2 = "string" == typeof this.options.cancel && e2.target.nodeName ? t2(e2.target).closest(this.options.cancel).length : false;
        return s2 && !n2 && this._mouseCapture(e2) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          i2.mouseDelayMet = true;
        }, this.options.delay)), this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(e2) !== false, !this._mouseStarted) ? (e2.preventDefault(), true) : (true === t2.data(e2.target, this.widgetName + ".preventClickEvent") && t2.removeData(e2.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t3) {
          return i2._mouseMove(t3);
        }, this._mouseUpDelegate = function(t3) {
          return i2._mouseUp(t3);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e2.preventDefault(), c = true, true)) : true;
      }
    }, _mouseMove: function(e2) {
      if (this._mouseMoved) {
        if (t2.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e2.button)
          return this._mouseUp(e2);
        if (!e2.which) {
          if (e2.originalEvent.altKey || e2.originalEvent.ctrlKey || e2.originalEvent.metaKey || e2.originalEvent.shiftKey)
            this.ignoreMissingWhich = true;
          else if (!this.ignoreMissingWhich)
            return this._mouseUp(e2);
        }
      }
      return (e2.which || e2.button) && (this._mouseMoved = true), this._mouseStarted ? (this._mouseDrag(e2), e2.preventDefault()) : (this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e2) !== false, this._mouseStarted ? this._mouseDrag(e2) : this._mouseUp(e2)), !this._mouseStarted);
    }, _mouseUp: function(e2) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, e2.target === this._mouseDownEvent.target && t2.data(e2.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(e2)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = false, c = false, e2.preventDefault();
    }, _mouseDistanceMet: function(t3) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t3.pageX), Math.abs(this._mouseDownEvent.pageY - t3.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function() {
      return this.mouseDelayMet;
    }, _mouseStart: function() {
    }, _mouseDrag: function() {
    }, _mouseStop: function() {
    }, _mouseCapture: function() {
      return true;
    } }), t2.widget("ui.slider", t2.ui.mouse, { version: "1.12.1", widgetEventPrefix: "slide", options: { animate: false, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() {
      this._keySliding = false, this._mouseSliding = false, this._animateOff = true, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = false;
    }, _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    }, _createHandles: function() {
      var e2, i2, s2 = this.options, n2 = this.element.find(".ui-slider-handle"), o2 = "<span tabindex='0'></span>", a2 = [];
      for (i2 = s2.values && s2.values.length || 1, n2.length > i2 && (n2.slice(i2).remove(), n2 = n2.slice(0, i2)), e2 = n2.length; i2 > e2; e2++)
        a2.push(o2);
      this.handles = n2.add(t2(a2.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e3) {
        t2(this).data("ui-slider-handle-index", e3).attr("tabIndex", 0);
      });
    }, _createRange: function() {
      var e2 = this.options;
      e2.range ? (e2.range === true && (e2.values ? e2.values.length && 2 !== e2.values.length ? e2.values = [e2.values[0], e2.values[0]] : t2.isArray(e2.values) && (e2.values = e2.values.slice(0)) : e2.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t2("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e2.range || "max" === e2.range) && this._addClass(this.range, "ui-slider-range-" + e2.range)) : (this.range && this.range.remove(), this.range = null);
    }, _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    }, _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    }, _mouseCapture: function(e2) {
      var i2, s2, n2, o2, a2, r2, h2, l2, c2 = this, u = this.options;
      return u.disabled ? false : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i2 = { x: e2.pageX, y: e2.pageY }, s2 = this._normValueFromMouse(i2), n2 = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e3) {
        var i3 = Math.abs(s2 - c2.values(e3));
        (n2 > i3 || n2 === i3 && (e3 === c2._lastChangedValue || c2.values(e3) === u.min)) && (n2 = i3, o2 = t2(this), a2 = e3);
      }), r2 = this._start(e2, a2), r2 === false ? false : (this._mouseSliding = true, this._handleIndex = a2, this._addClass(o2, null, "ui-state-active"), o2.trigger("focus"), h2 = o2.offset(), l2 = !t2(e2.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l2 ? { left: 0, top: 0 } : { left: e2.pageX - h2.left - o2.width() / 2, top: e2.pageY - h2.top - o2.height() / 2 - (parseInt(o2.css("borderTopWidth"), 10) || 0) - (parseInt(o2.css("borderBottomWidth"), 10) || 0) + (parseInt(o2.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e2, a2, s2), this._animateOff = true, true));
    }, _mouseStart: function() {
      return true;
    }, _mouseDrag: function(t3) {
      var e2 = { x: t3.pageX, y: t3.pageY }, i2 = this._normValueFromMouse(e2);
      return this._slide(t3, this._handleIndex, i2), false;
    }, _mouseStop: function(t3) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = false, this._stop(t3, this._handleIndex), this._change(t3, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false, false;
    }, _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    }, _normValueFromMouse: function(t3) {
      var e2, i2, s2, n2, o2;
      return "horizontal" === this.orientation ? (e2 = this.elementSize.width, i2 = t3.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e2 = this.elementSize.height, i2 = t3.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s2 = i2 / e2, s2 > 1 && (s2 = 1), 0 > s2 && (s2 = 0), "vertical" === this.orientation && (s2 = 1 - s2), n2 = this._valueMax() - this._valueMin(), o2 = this._valueMin() + s2 * n2, this._trimAlignValue(o2);
    }, _uiHash: function(t3, e2, i2) {
      var s2 = { handle: this.handles[t3], handleIndex: t3, value: void 0 !== e2 ? e2 : this.value() };
      return this._hasMultipleValues() && (s2.value = void 0 !== e2 ? e2 : this.values(t3), s2.values = i2 || this.values()), s2;
    }, _hasMultipleValues: function() {
      return this.options.values && this.options.values.length;
    }, _start: function(t3, e2) {
      return this._trigger("start", t3, this._uiHash(e2));
    }, _slide: function(t3, e2, i2) {
      var s2, n2, o2 = this.value(), a2 = this.values();
      this._hasMultipleValues() && (n2 = this.values(e2 ? 0 : 1), o2 = this.values(e2), 2 === this.options.values.length && this.options.range === true && (i2 = 0 === e2 ? Math.min(n2, i2) : Math.max(n2, i2)), a2[e2] = i2), i2 !== o2 && (s2 = this._trigger("slide", t3, this._uiHash(e2, i2, a2)), s2 !== false && (this._hasMultipleValues() ? this.values(e2, i2) : this.value(i2)));
    }, _stop: function(t3, e2) {
      this._trigger("stop", t3, this._uiHash(e2));
    }, _change: function(t3, e2) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e2, this._trigger("change", t3, this._uiHash(e2)));
    }, value: function(t3) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t3), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    }, values: function(e2, i2) {
      var s2, n2, o2;
      if (arguments.length > 1)
        return this.options.values[e2] = this._trimAlignValue(i2), this._refreshValue(), this._change(null, e2), void 0;
      if (!arguments.length)
        return this._values();
      if (!t2.isArray(arguments[0]))
        return this._hasMultipleValues() ? this._values(e2) : this.value();
      for (s2 = this.options.values, n2 = arguments[0], o2 = 0; s2.length > o2; o2 += 1)
        s2[o2] = this._trimAlignValue(n2[o2]), this._change(null, o2);
      this._refreshValue();
    }, _setOption: function(e2, i2) {
      var s2, n2 = 0;
      switch ("range" === e2 && this.options.range === true && ("min" === i2 ? (this.options.value = this._values(0), this.options.values = null) : "max" === i2 && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t2.isArray(this.options.values) && (n2 = this.options.values.length), this._super(e2, i2), e2) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i2), this.handles.css("horizontal" === i2 ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = true, this._refreshValue(), this._change(null, 0), this._animateOff = false;
          break;
        case "values":
          for (this._animateOff = true, this._refreshValue(), s2 = n2 - 1; s2 >= 0; s2--)
            this._change(null, s2);
          this._animateOff = false;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = true, this._calculateNewMax(), this._refreshValue(), this._animateOff = false;
          break;
        case "range":
          this._animateOff = true, this._refresh(), this._animateOff = false;
      }
    }, _setOptionDisabled: function(t3) {
      this._super(t3), this._toggleClass(null, "ui-state-disabled", !!t3);
    }, _value: function() {
      var t3 = this.options.value;
      return t3 = this._trimAlignValue(t3);
    }, _values: function(t3) {
      var e2, i2, s2;
      if (arguments.length)
        return e2 = this.options.values[t3], e2 = this._trimAlignValue(e2);
      if (this._hasMultipleValues()) {
        for (i2 = this.options.values.slice(), s2 = 0; i2.length > s2; s2 += 1)
          i2[s2] = this._trimAlignValue(i2[s2]);
        return i2;
      }
      return [];
    }, _trimAlignValue: function(t3) {
      if (this._valueMin() >= t3)
        return this._valueMin();
      if (t3 >= this._valueMax())
        return this._valueMax();
      var e2 = this.options.step > 0 ? this.options.step : 1, i2 = (t3 - this._valueMin()) % e2, s2 = t3 - i2;
      return 2 * Math.abs(i2) >= e2 && (s2 += i2 > 0 ? e2 : -e2), parseFloat(s2.toFixed(5));
    }, _calculateNewMax: function() {
      var t3 = this.options.max, e2 = this._valueMin(), i2 = this.options.step, s2 = Math.round((t3 - e2) / i2) * i2;
      t3 = s2 + e2, t3 > this.options.max && (t3 -= i2), this.max = parseFloat(t3.toFixed(this._precision()));
    }, _precision: function() {
      var t3 = this._precisionOf(this.options.step);
      return null !== this.options.min && (t3 = Math.max(t3, this._precisionOf(this.options.min))), t3;
    }, _precisionOf: function(t3) {
      var e2 = "" + t3, i2 = e2.indexOf(".");
      return -1 === i2 ? 0 : e2.length - i2 - 1;
    }, _valueMin: function() {
      return this.options.min;
    }, _valueMax: function() {
      return this.max;
    }, _refreshRange: function(t3) {
      "vertical" === t3 && this.range.css({ width: "", left: "" }), "horizontal" === t3 && this.range.css({ height: "", bottom: "" });
    }, _refreshValue: function() {
      var e2, i2, s2, n2, o2, a2 = this.options.range, r2 = this.options, h2 = this, l2 = this._animateOff ? false : r2.animate, c2 = {};
      this._hasMultipleValues() ? this.handles.each(function(s3) {
        i2 = 100 * ((h2.values(s3) - h2._valueMin()) / (h2._valueMax() - h2._valueMin())), c2["horizontal" === h2.orientation ? "left" : "bottom"] = i2 + "%", t2(this).stop(1, 1)[l2 ? "animate" : "css"](c2, r2.animate), h2.options.range === true && ("horizontal" === h2.orientation ? (0 === s3 && h2.range.stop(1, 1)[l2 ? "animate" : "css"]({ left: i2 + "%" }, r2.animate), 1 === s3 && h2.range[l2 ? "animate" : "css"]({ width: i2 - e2 + "%" }, { queue: false, duration: r2.animate })) : (0 === s3 && h2.range.stop(1, 1)[l2 ? "animate" : "css"]({ bottom: i2 + "%" }, r2.animate), 1 === s3 && h2.range[l2 ? "animate" : "css"]({ height: i2 - e2 + "%" }, { queue: false, duration: r2.animate }))), e2 = i2;
      }) : (s2 = this.value(), n2 = this._valueMin(), o2 = this._valueMax(), i2 = o2 !== n2 ? 100 * ((s2 - n2) / (o2 - n2)) : 0, c2["horizontal" === this.orientation ? "left" : "bottom"] = i2 + "%", this.handle.stop(1, 1)[l2 ? "animate" : "css"](c2, r2.animate), "min" === a2 && "horizontal" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ width: i2 + "%" }, r2.animate), "max" === a2 && "horizontal" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ width: 100 - i2 + "%" }, r2.animate), "min" === a2 && "vertical" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ height: i2 + "%" }, r2.animate), "max" === a2 && "vertical" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ height: 100 - i2 + "%" }, r2.animate));
    }, _handleEvents: { keydown: function(e2) {
      var i2, s2, n2, o2, a2 = t2(e2.target).data("ui-slider-handle-index");
      switch (e2.keyCode) {
        case t2.ui.keyCode.HOME:
        case t2.ui.keyCode.END:
        case t2.ui.keyCode.PAGE_UP:
        case t2.ui.keyCode.PAGE_DOWN:
        case t2.ui.keyCode.UP:
        case t2.ui.keyCode.RIGHT:
        case t2.ui.keyCode.DOWN:
        case t2.ui.keyCode.LEFT:
          if (e2.preventDefault(), !this._keySliding && (this._keySliding = true, this._addClass(t2(e2.target), null, "ui-state-active"), i2 = this._start(e2, a2), i2 === false))
            return;
      }
      switch (o2 = this.options.step, s2 = n2 = this._hasMultipleValues() ? this.values(a2) : this.value(), e2.keyCode) {
        case t2.ui.keyCode.HOME:
          n2 = this._valueMin();
          break;
        case t2.ui.keyCode.END:
          n2 = this._valueMax();
          break;
        case t2.ui.keyCode.PAGE_UP:
          n2 = this._trimAlignValue(s2 + (this._valueMax() - this._valueMin()) / this.numPages);
          break;
        case t2.ui.keyCode.PAGE_DOWN:
          n2 = this._trimAlignValue(s2 - (this._valueMax() - this._valueMin()) / this.numPages);
          break;
        case t2.ui.keyCode.UP:
        case t2.ui.keyCode.RIGHT:
          if (s2 === this._valueMax())
            return;
          n2 = this._trimAlignValue(s2 + o2);
          break;
        case t2.ui.keyCode.DOWN:
        case t2.ui.keyCode.LEFT:
          if (s2 === this._valueMin())
            return;
          n2 = this._trimAlignValue(s2 - o2);
      }
      this._slide(e2, a2, n2);
    }, keyup: function(e2) {
      var i2 = t2(e2.target).data("ui-slider-handle-index");
      this._keySliding && (this._keySliding = false, this._stop(e2, i2), this._change(e2, i2), this._removeClass(t2(e2.target), null, "ui-state-active"));
    } } });
  });

  // javascript/application.js
  var import_sticky_sidebar_min = __toESM(require_sticky_sidebar_min());

  // plugins/jquery.slimscroll.min.js
  (function(e) {
    e.fn.extend({ slimScroll: function(f) {
      var a = e.extend({ width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: 0.4, alwaysVisible: false, disableFadeOut: false, railVisible: false, railColor: "#333", railOpacity: 0.2, railDraggable: true, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: false, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" }, f);
      this.each(function() {
        function v(d) {
          if (r) {
            d = d || window.event;
            var c2 = 0;
            d.wheelDelta && (c2 = -d.wheelDelta / 120);
            d.detail && (c2 = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c2, true);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = false);
          }
        }
        function n(d, g, e2) {
          k = false;
          var f2 = b.outerHeight() - c.outerHeight();
          g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f2), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({ top: g + "px" }));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          g = l * (b[0].scrollHeight - b.outerHeight());
          e2 && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f2), c.css({ top: d + "px" }));
          b.scrollTop(g);
          b.trigger("slimscrolling", ~~g);
          w();
          p();
        }
        function x() {
          u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
          c.css({ height: u + "px" });
          var a2 = u == b.outerHeight() ? "none" : "block";
          c.css({ display: a2 });
        }
        function w() {
          x();
          clearTimeout(B);
          l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = false;
          C = l;
          u >= b.outerHeight() ? k = true : (c.stop(
            true,
            true
          ).fadeIn("fast"), a.railVisible && m.stop(true, true).fadeIn("fast"));
        }
        function p() {
          a.alwaysVisible || (B = setTimeout(function() {
            a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
          }, 1e3));
        }
        var r, y, z, B, A, u, l, C, k = false, b = e(this);
        if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(), c = b.siblings("." + a.barClass), m = b.siblings("." + a.railClass);
          x();
          if (e.isPlainObject(f)) {
            if ("height" in f && "auto" == f.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var h = b.parent().parent().height();
              b.parent().css(
                "height",
                h
              );
              b.css("height", h);
            } else
              "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));
            if ("scrollTo" in f)
              q = parseInt(a.scrollTo);
            else if ("scrollBy" in f)
              q += parseInt(a.scrollBy);
            else if ("destroy" in f) {
              c.remove();
              m.remove();
              b.unwrap();
              return;
            }
            n(q, false, true);
          }
        } else if (!(e.isPlainObject(f) && "destroy" in f)) {
          a.height = "auto" == a.height ? b.parent().height() : a.height;
          q = e("<div></div>").addClass(a.wrapperClass).css({ position: "relative", overflow: "hidden", width: a.width, height: a.height });
          b.css({
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          var m = e("<div></div>").addClass(a.railClass).css({ width: a.size, height: "100%", position: "absolute", top: 0, display: a.alwaysVisible && a.railVisible ? "block" : "none", "border-radius": a.railBorderRadius, background: a.railColor, opacity: a.railOpacity, zIndex: 90 }), c = e("<div></div>").addClass(a.barClass).css({
            background: a.color,
            width: a.size,
            position: "absolute",
            top: 0,
            opacity: a.opacity,
            display: a.alwaysVisible ? "block" : "none",
            "border-radius": a.borderRadius,
            BorderRadius: a.borderRadius,
            MozBorderRadius: a.borderRadius,
            WebkitBorderRadius: a.borderRadius,
            zIndex: 99
          }), h = "right" == a.position ? { right: a.distance } : { left: a.distance };
          m.css(h);
          c.css(h);
          b.wrap(q);
          b.parent().append(c);
          b.parent().append(m);
          a.railDraggable && c.bind("mousedown", function(a2) {
            var b2 = e(document);
            z = true;
            t = parseFloat(c.css("top"));
            pageY = a2.pageY;
            b2.bind("mousemove.slimscroll", function(a3) {
              currTop = t + a3.pageY - pageY;
              c.css("top", currTop);
              n(0, c.position().top, false);
            });
            b2.bind("mouseup.slimscroll", function(a3) {
              z = false;
              p();
              b2.unbind(".slimscroll");
            });
            return false;
          }).bind(
            "selectstart.slimscroll",
            function(a2) {
              a2.stopPropagation();
              a2.preventDefault();
              return false;
            }
          );
          m.hover(function() {
            w();
          }, function() {
            p();
          });
          c.hover(function() {
            y = true;
          }, function() {
            y = false;
          });
          b.hover(function() {
            r = true;
            w();
            p();
          }, function() {
            r = false;
            p();
          });
          b.bind("touchstart", function(a2, b2) {
            a2.originalEvent.touches.length && (A = a2.originalEvent.touches[0].pageY);
          });
          b.bind("touchmove", function(b2) {
            k || b2.originalEvent.preventDefault();
            b2.originalEvent.touches.length && (n((A - b2.originalEvent.touches[0].pageY) / a.touchScrollStep, true), A = b2.originalEvent.touches[0].pageY);
          });
          x();
          "bottom" === a.start ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, true)) : "top" !== a.start && (n(e(a.start).position().top, null, true), a.alwaysVisible || c.hide());
          window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, false), this.addEventListener("mousewheel", v, false)) : document.attachEvent("onmousewheel", v);
        }
      });
      return this;
    } });
    e.fn.extend({ slimscroll: e.fn.slimScroll });
  })(jQuery);

  // javascript/application.js
  var import_select2_full_min = __toESM(require_select2_full_min());

  // plugins/gmap3.min.js
  !function(n, t2, e) {
    "use strict";
    function o(n2) {
      return S(true, {}, n2 || {});
    }
    function r() {
      var n2 = Array.prototype.slice, t3 = n2.call(arguments, 1);
      return n2.apply(arguments[0], t3);
    }
    function i(n2) {
      return "undefined" == typeof n2;
    }
    function u(t3) {
      return O.apply(n, t3);
    }
    function a(n2) {
      return O().then(function() {
        return n2;
      });
    }
    function c(n2, t3) {
      var e2 = Math, o2 = e2.PI, r2 = o2 * n2.lat() / 180, i2 = o2 * n2.lng() / 180, u2 = o2 * t3.lat() / 180, a2 = o2 * t3.lng() / 180, c2 = e2.cos, s2 = e2.sin;
      return 6371e3 * e2.acos(e2.min(c2(r2) * c2(u2) * c2(i2) * c2(a2) + c2(r2) * s2(i2) * c2(u2) * s2(a2) + s2(r2) * s2(u2), 1));
    }
    function s(n2) {
      "loading" != e.readyState ? n2() : e.addEventListener("DOMContentLoaded", n2);
    }
    function f(n2) {
      return v(n2).map(function(t3) {
        return encodeURIComponent(t3) + "=" + encodeURIComponent(n2[t3]);
      }).join("&");
    }
    function p(n2) {
      return D[n2] || (D[n2] = l(n2)), D[n2];
    }
    function l(n2) {
      function t3(n3) {
        return e2.apply(this, n3);
      }
      var e2 = E[n2];
      return t3.prototype = e2.prototype, new t3(r(arguments, 1));
    }
    function g(n2) {
      var t3 = $2();
      return "string" == typeof n2 && (n2 = { address: n2 }), p("Geocoder").geocode(n2, function(n3, e2) {
        e2 === E.GeocoderStatus.OK ? t3.resolve(n3[0].geometry.location) : t3.reject(e2);
      }), t3;
    }
    function d(n2, t3) {
      h(n2.split(" "), t3);
    }
    function h(n2, t3) {
      (R(n2) ? n2 : [n2]).forEach(t3);
    }
    function v(n2) {
      return Object.keys(n2);
    }
    function y(n2) {
      return v(n2).map(function(t3) {
        return n2[t3];
      });
    }
    function m(n2, t3) {
      return n2 = o(n2), n2.bounds && (n2.bounds = P(n2.bounds)), a(t3(n2));
    }
    function L(n2, t3, e2) {
      var r2 = $2();
      return n2 = o(n2), O().then(function() {
        var e3 = n2.address;
        return e3 ? (delete n2.address, g(e3).then(function(e4) {
          n2[t3] = e4;
        })) : void (n2[t3] = x(n2[t3]));
      }).then(function() {
        r2.resolve(e2(n2));
      }).fail(function(n3) {
        r2.reject(n3);
      }), r2;
    }
    function w(n2, t3, e2) {
      return n2 = o(n2), n2[t3] = (n2[t3] || []).map(x), a(e2(n2));
    }
    function x(n2, t3) {
      return R(n2) ? new E.LatLng(n2[0], n2[1]) : !t3 || !n2 || n2 instanceof E.LatLng ? n2 : new E.LatLng(n2.lat, n2.lng);
    }
    function P(n2, t3) {
      return R(n2) ? new E.LatLngBounds({ lat: n2[2], lng: n2[3] }, { lat: n2[0], lng: n2[1] }) : t3 && !n2.getCenter ? new E.LatLngBounds({ lat: n2.south, lng: n2.west }, { lat: n2.north, lng: n2.east }) : n2;
    }
    function b(t3, o2) {
      function r2() {
        function n2(n3) {
          return e2.getProjection().fromLatLngToDivPixel(n3);
        }
        var e2 = this, r3 = [];
        i2.call(e2), e2.setMap(t3), e2.onAdd = function() {
          var n3 = e2.getPanes();
          n3.overlayMouseTarget.appendChild(u2[0]);
        }, o2.position ? (e2.getPosition = function() {
          return o2.position;
        }, e2.setPosition = function(n3) {
          o2.position = n3, e2.draw();
        }, e2.draw = function() {
          var t4 = n2(o2.position);
          u2.css({ left: t4.x + o2.x + "px", top: t4.y + o2.y + "px" });
        }) : (e2.getBounds = function() {
          return o2.bounds;
        }, e2.setBounds = function(n3) {
          o2.bounds = n3, e2.draw();
        }, e2.draw = function() {
          var t4 = n2(o2.bounds.getSouthWest()), e3 = n2(o2.bounds.getNorthEast());
          u2.css({ left: t4.x + o2.x + "px", top: e3.y + o2.y + "px", width: e3.x - t4.x + o2.x + "px", height: t4.y - e3.y + o2.y + "px" });
        }), e2.onRemove = function() {
          r3.map(function(n3) {
            E.event.removeListener(n3);
          }), u2.remove(), e2.$ = u2 = null;
        }, e2.$ = u2;
      }
      var i2 = E.OverlayView, u2 = n(e.createElement("div")).css({ border: "none", borderWidth: 0, position: "absolute" }).append(o2.content);
      return o2 = S({ x: 0, y: 0 }, o2), o2.position ? o2.position = x(o2.position, true) : o2.bounds && (o2.bounds = P(o2.bounds, true)), r2.prototype = new i2(), new r2();
    }
    function M(n2) {
      function t3() {
        var n3 = this;
        return n3.onAdd = n3.onRemove = n3.draw = function() {
        }, E.OverlayView.call(n3);
      }
      t3.prototype = new E.OverlayView();
      var e2 = new t3();
      return e2.setMap(n2), e2.getProjection();
    }
    function B(n2, t3, e2, o2) {
      var r2 = this;
      r2.cluster = n2, r2.markers = t3, r2.$ = e2.$, r2.overlay = e2, e2.getBounds = function() {
        return l("LatLngBounds", o2.getSouthWest(), o2.getNorthEast());
      };
    }
    function C(n2, t3) {
      function e2() {
        var t4 = l("Circle", { center: n2.getCenter(), radius: 1.15 * c(n2.getCenter(), n2.getBounds().getNorthEast()) });
        return t4.getBounds();
      }
      function i2(n3) {
        var t4 = d2.fromLatLngToDivPixel(n3);
        return l("LatLngBounds", d2.fromDivPixelToLatLng(l("Point", t4.x - P2, t4.y + P2)), d2.fromDivPixelToLatLng(l("Point", t4.x + P2, t4.y - P2)));
      }
      function u2() {
        var u3, a3, c2, s3, f3, p3, d3 = n2.getZoom(), y2 = {}, x2 = [], P3 = {};
        p3 = "" + d3, d3 > 3 && (a3 = e2(), h(w2, function(n3, t4) {
          a3.contains(n3.getPosition()) || (p3 += "-" + t4, P3[t4] = true, n3.getMap() && n3.setMap(null));
        })), m2 && h(w2, function(n3, t4) {
          P3[t4] || m2(n3) || (p3 += "-" + t4, P3[t4] = true, n3.getMap() && n3.setMap(null));
        }), p3 !== g2 && (g2 = p3, h(w2, function(e3, p4) {
          P3[p4] || (u3 = [p4], a3 = i2(e3.getPosition()), C2 && h(r(w2, p4 + 1), function(n3, t4) {
            t4 += p4 + 1, !P3[t4] && a3.contains(n3.getPosition()) && (u3.push(t4), P3[t4] = true);
          }), s3 = u3.join("-"), y2[s3] = true, T2[s3] || (f3 = u3.map(function(n3) {
            return w2[n3];
          }), c2 = t3.cb(r(f3)), c2 ? (a3 = l("LatLngBounds"), h(f3, function(n3) {
            a3.extend(n3.getPosition()), n3.getMap() && n3.setMap(null);
          }), c2 = o(c2), c2.position = a3.getCenter(), T2[s3] = new B(L2, r(f3), b(n2, c2), a3), x2.push(T2[s3])) : h(f3, function(t4) {
            t4.getMap() || t4.setMap(n2);
          })));
        }), h(v(T2), function(n3) {
          y2[n3] || (T2[n3].overlay.setMap(null), delete T2[n3]);
        }), x2.length && h(k2, function(n3) {
          n3(x2);
        }));
      }
      function a2() {
        clearTimeout(f2), f2 = setTimeout(u2, 100);
      }
      function s2() {
        E.event.addListener(n2, "zoom_changed", a2), E.event.addListener(n2, "bounds_changed", a2), u2();
      }
      var f2, p2, g2, d2, m2, L2 = this, w2 = [], P2 = (t3.size || 200) >> 1, C2 = true, T2 = {}, k2 = [];
      t3 = t3 || {}, t3.markers = t3.markers || [], L2._b = function(n3) {
        n3(y(T2)), k2.push(n3);
      }, L2.markers = function() {
        return r(w2);
      }, L2.groups = function() {
        return y(T2);
      }, L2.enable = function() {
        C2 || (C2 = true, g2 = "", a2());
      }, L2.disable = function() {
        C2 && (C2 = false, g2 = "", a2());
      }, L2.add = function(n3) {
        w2.push(n3), g2 = "", a2();
      }, L2.remove = function(n3) {
        w2 = w2.filter(function(t4) {
          return t4 !== n3;
        }), g2 = "", a2();
      }, L2.filter = function(n3) {
        m2 !== n3 && (m2 = n3, g2 = "", a2());
      }, t3.markers.map(function(n3) {
        n3.position = x(n3.position), w2.push(l("Marker", n3));
      }), p2 = setInterval(function() {
        d2 = M(n2), d2 && (clearInterval(p2), s2());
      }, 10);
    }
    function T(n2, t3) {
      var e2 = this;
      v(t3[0]).forEach(function(n3) {
        e2[n3] = function() {
          var o2 = [], i2 = r(arguments);
          return t3.forEach(function(t4) {
            o2.push(t4[n3].apply(t4, i2));
          }), "get" === n3 ? o2.length > 1 ? o2 : o2[0] : e2;
        };
      }), e2.$ = n2;
    }
    function k(t3, e2) {
      function c2() {
        return { $: t3, get: M2.get };
      }
      function s2(t4, e3, o2, i2) {
        var u2 = arguments.length > 3;
        u2 || (i2 = o2), n.each(t4, function(n2, t5) {
          h(e3, function(e4) {
            var a2 = e4 instanceof B, s3 = a2 || e4 instanceof E.OverlayView, f3 = s3 ? e4.$.get(0) : e4;
            E.event["add" + (s3 ? "Dom" : "") + "Listener" + (i2 ? "Once" : "")](f3, n2, function(n3) {
              h(t5, function(t6) {
                if (A(t6))
                  if (a2)
                    t6.call(c2(), void 0, e4, e4.cluster, n3);
                  else if (u2) {
                    var i3 = r(o2);
                    i3.unshift(e4), i3.push(n3), t6.apply(c2(), i3);
                  } else
                    t6.call(c2(), e4, n3);
              });
            });
          });
        });
      }
      function f2(n2) {
        return function(t4) {
          if (R(t4)) {
            var e3 = [], o2 = t4.map(function(t5) {
              return n2.call(M2, t5).then(function(n3) {
                e3.push(n3);
              });
            });
            return u(o2).then(function() {
              return y2.push(e3), e3;
            });
          }
          return n2.apply(M2, arguments).then(function(n3) {
            return y2.push(n3), n3;
          });
        };
      }
      function g2(n2) {
        return function() {
          var t4 = r(arguments);
          return P2 = P2.then(function(e3) {
            return A(t4[0]) ? O(t4[0].call(c2(), e3)).then(function(e4) {
              return t4[0] = e4, n2.apply(M2, t4);
            }) : O(n2.apply(M2, t4));
          });
        };
      }
      var v2, y2 = [], P2 = O(), M2 = this;
      M2.map = g2(function(n2) {
        return v2 || L(n2, "center", function(n3) {
          return v2 = l("Map", t3.get(0), n3), y2.push(v2), v2;
        });
      }), d("Marker:position Circle:center InfoWindow:position:0 Polyline:path Polygon:paths", function(n2) {
        n2 = n2.split(":");
        var t4 = n2[1] || "";
        M2[n2[0].toLowerCase()] = g2(f2(function(e3) {
          return (t4.match(/^path/) ? w : L)(e3, t4, function(t5) {
            return "0" !== n2[2] && (t5.map = v2), l(n2[0], t5);
          });
        }));
      }), d("TrafficLayer TransitLayer BicyclingLayer", function(n2) {
        M2[n2.toLowerCase()] = g2(function() {
          var t4 = l(n2);
          return y2.push(t4), t4.setMap(v2), t4;
        });
      }), M2.kmllayer = g2(f2(function(n2) {
        return n2 = o(n2), n2.map = v2, O(l("KmlLayer", n2));
      })), M2.rectangle = g2(f2(function(n2) {
        return m(n2, function(n3) {
          return n3.map = v2, l("Rectangle", n3);
        });
      })), M2.overlay = g2(f2(function(n2) {
        function t4(n3) {
          return b(v2, n3);
        }
        return n2 = o(n2), n2.bounds ? m(n2, t4) : L(n2, "position", t4);
      })), M2.groundoverlay = g2(function(n2, t4, e3) {
        return m({ bounds: t4 }, function(t5) {
          e3 = o(e3), e3.map = v2;
          var r2 = l("GroundOverlay", n2, t5.bounds, e3);
          return y2.push(r2), r2;
        });
      }), M2.styledmaptype = g2(function(n2, t4, e3) {
        var o2 = l("StyledMapType", t4, e3);
        return y2.push(o2), v2.mapTypes.set(n2, o2), o2;
      }), M2.streetviewpanorama = g2(function(t4, e3) {
        return L(e3, "position", function(e4) {
          var o2 = l("StreetViewPanorama", n(t4).get(0), e4);
          return v2.setStreetView(o2), y2.push(o2), o2;
        });
      }), M2.route = g2(function(n2) {
        var t4 = $2();
        return n2 = o(n2), n2.origin = x(n2.origin), n2.destination = x(n2.destination), p("DirectionsService").route(n2, function(n3, e3) {
          y2.push(n3), t4.resolve(e3 === E.DirectionsStatus.OK ? n3 : false);
        }), t4;
      }), M2.cluster = g2(function(n2) {
        var t4 = new C(v2, o(n2));
        return y2.push(t4), a(t4);
      }), M2.directionsrenderer = g2(function(t4) {
        var e3;
        return t4 && (t4 = o(t4), t4.map = v2, t4.panel && (t4.panel = n(t4.panel).get(0)), e3 = l("DirectionsRenderer", t4)), y2.push(e3), e3;
      }), M2.latlng = g2(f2(function(n2) {
        return L(n2, "latlng", function(n3) {
          return y2.push(n3.latlng), n3.latlng;
        });
      })), M2.fit = g2(function() {
        var n2 = l("LatLngBounds");
        return h(y2, function(t4) {
          t4 !== v2 && h(t4, function(t5) {
            t5 && (t5.getPosition && t5.getPosition() ? n2.extend(t5.getPosition()) : t5.getBounds && t5.getBounds() ? (n2.extend(t5.getBounds().getNorthEast()), n2.extend(t5.getBounds().getSouthWest())) : t5.getPaths && t5.getPaths() ? h(t5.getPaths().getArray(), function(t6) {
              h(t6.getArray(), function(t7) {
                n2.extend(t7);
              });
            }) : t5.getPath && t5.getPath() ? h(t5.getPath().getArray(), function(t6) {
              n2.extend(t6);
            }) : t5.getCenter && t5.getCenter() && n2.extend(t5.getCenter()));
          });
        }), n2.isEmpty() || v2.fitBounds(n2), true;
      }), M2.wait = function(n2) {
        P2 = P2.then(function(t4) {
          var e3 = $2();
          return setTimeout(function() {
            e3.resolve(t4);
          }, n2), e3;
        });
      }, M2.then = function(n2) {
        A(n2) && (P2 = P2.then(function(t4) {
          return O(n2.call(c2(), t4)).then(function(n3) {
            return i(n3) ? t4 : n3;
          });
        }));
      }, M2["catch"] = function(n2) {
        A(n2) && (P2 = P2.then(null, function(t4) {
          return O(n2.call(c2(), t4));
        }));
      }, d("on once", function(n2, t4) {
        M2[n2] = function() {
          var n3 = arguments[0];
          n3 && ("string" == typeof n3 && (n3 = {}, n3[arguments[0]] = r(arguments, 1)), P2.then(function(e3) {
            if (e3) {
              if (e3 instanceof C)
                return e3._b(function(e4) {
                  e4 && e4.length && s2(n3, e4, t4);
                }), s2(n3, e3.markers(), [void 0, e3], t4);
              s2(n3, e3, t4);
            }
          }));
        };
      }), M2.get = function(n2) {
        return i(n2) ? y2.map(function(n3) {
          return R(n3) ? n3.slice() : n3;
        }) : (0 > n2 && (n2 = y2.length + n2), R(y2[n2]) ? y2[n2].slice() : y2[n2]);
      }, e2 && M2.map(e2);
    }
    var E, j, D = {}, O = n.when, S = n.extend, R = n.isArray, A = n.isFunction, $2 = n.Deferred;
    O(function() {
      var o2, r2 = $2(), i2 = "__gmap3";
      return n.holdReady(true), s(function() {
        t2.google && t2.google.maps || j === false ? r2.resolve() : (t2[i2] = function() {
          delete t2[i2], r2.resolve();
        }, o2 = e.createElement("script"), o2.type = "text/javascript", o2.src = "https://maps.googleapis.com/maps/api/js?callback=" + i2 + (j ? "&" + ("string" == typeof j ? j : f(j)) : ""), n("head").append(o2));
      }), r2;
    }()).then(function() {
      n.holdReady(false);
    }), n.gmap3 = function(n2) {
      j = n2;
    }, n.fn.gmap3 = function(e2) {
      var o2 = [];
      return E = t2.google.maps, this.each(function() {
        var t3 = n(this), r2 = t3.data("gmap3");
        r2 || (r2 = new k(t3, e2), t3.data("gmap3", r2)), o2.push(r2);
      }), new T(this, o2);
    };
  }(jQuery, window, document);

  // javascript/js/main.js
  (function($2) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
    };
    function parallax() {
      $2(".bg--parallax").each(function() {
        var el = $2(this), xpos = "50%", windowHeight = $2(window).height();
        if (isMobile.any()) {
          $2(this).css("background-attachment", "scroll");
        } else {
          $2(window).scroll(function() {
            var current = $2(window).scrollTop(), top = el.offset().top, height = el.outerHeight();
            if (top + height < current || top > current + windowHeight) {
              return;
            }
            el.css("backgroundPosition", xpos + " " + Math.round((top - current) * 0.2) + "px");
          });
        }
      });
    }
    function backgroundImage() {
      var databackground = $2("[data-background]");
      databackground.each(function() {
        if ($2(this).attr("data-background")) {
          var image_path = $2(this).attr("data-background");
          $2(this).css({
            "background": "url(" + image_path + ")"
          });
        }
      });
    }
    function siteToggleAction() {
      var navSidebar = $2(".navigation--sidebar"), filterSidebar = $2(".ps-filter--sidebar");
      $2(".menu-toggle-open").on("click", function(e) {
        e.preventDefault();
        $2(this).toggleClass("active");
        navSidebar.toggleClass("active");
        $2(".ps-site-overlay").toggleClass("active");
      });
      $2(".ps-toggle--sidebar").on("click", function(e) {
        e.preventDefault();
        var url = $2(this).attr("href");
        $2(this).toggleClass("active");
        $2(this).siblings("a").removeClass("active");
        $2(url).toggleClass("active");
        $2(url).siblings(".ps-panel--sidebar").removeClass("active");
        $2(".ps-site-overlay").toggleClass("active");
      });
      $2("#filter-sidebar").on("click", function(e) {
        e.preventDefault();
        filterSidebar.addClass("active");
        $2(".ps-site-overlay").addClass("active");
      });
      $2(".ps-filter--sidebar .ps-filter__header .ps-btn--close").on("click", function(e) {
        e.preventDefault();
        filterSidebar.removeClass("active");
        $2(".ps-site-overlay").removeClass("active");
      });
      $2("body").on("click", function(e) {
        if ($2(e.target).siblings(".ps-panel--sidebar").hasClass("active")) {
          $2(".ps-panel--sidebar").removeClass("active");
          $2(".ps-site-overlay").removeClass("active");
        }
      });
    }
    function subMenuToggle() {
      $2(".menu--mobile .menu-item-has-children > .sub-toggle").on("click", function(e) {
        e.preventDefault();
        var current = $2(this).parent(".menu-item-has-children");
        $2(this).toggleClass("active");
        current.siblings().find(".sub-toggle").removeClass("active");
        current.children(".sub-menu").slideToggle(350);
        current.siblings().find(".sub-menu").slideUp(350);
        if (current.hasClass("has-mega-menu")) {
          current.children(".mega-menu").slideToggle(350);
          current.siblings(".has-mega-menu").find(".mega-menu").slideUp(350);
        }
      });
      $2(".menu--mobile .has-mega-menu .mega-menu__column .sub-toggle").on("click", function(e) {
        e.preventDefault();
        var current = $2(this).closest(".mega-menu__column");
        $2(this).toggleClass("active");
        current.siblings().find(".sub-toggle").removeClass("active");
        current.children(".mega-menu__list").slideToggle(350);
        current.siblings().find(".mega-menu__list").slideUp(350);
      });
      var listCategories = $2(".ps-list--categories");
      if (listCategories.length > 0) {
        $2(".ps-list--categories .menu-item-has-children > .sub-toggle").on("click", function(e) {
          e.preventDefault();
          var current = $2(this).parent(".menu-item-has-children");
          $2(this).toggleClass("active");
          current.siblings().find(".sub-toggle").removeClass("active");
          current.children(".sub-menu").slideToggle(350);
          current.siblings().find(".sub-menu").slideUp(350);
          if (current.hasClass("has-mega-menu")) {
            current.children(".mega-menu").slideToggle(350);
            current.siblings(".has-mega-menu").find(".mega-menu").slideUp(350);
          }
        });
      }
    }
    function stickyHeader() {
      var header = $2(".header"), scrollPosition = 0, checkpoint = 50;
      header.each(function() {
        if ($2(this).data("sticky") === true) {
          var el = $2(this);
          $2(window).scroll(function() {
            var currentPosition = $2(this).scrollTop();
            if (currentPosition > checkpoint) {
              el.addClass("header--sticky");
            } else {
              el.removeClass("header--sticky");
            }
          });
        }
      });
      var stickyCart = $2("#cart-sticky");
      if (stickyCart.length > 0) {
        $2(window).scroll(function() {
          var currentPosition = $2(this).scrollTop();
          if (currentPosition > checkpoint) {
            stickyCart.addClass("active");
          } else {
            stickyCart.removeClass("active");
          }
        });
      }
    }
    function owlCarouselConfig() {
      var target = $2(".owl-slider");
      if (target.length > 0) {
        target.each(function() {
          var el = $2(this), dataAuto = el.data("owl-auto"), dataLoop = el.data("owl-loop"), dataSpeed = el.data("owl-speed"), dataGap = el.data("owl-gap"), dataNav = el.data("owl-nav"), dataDots = el.data("owl-dots"), dataAnimateIn = el.data("owl-animate-in") ? el.data("owl-animate-in") : "", dataAnimateOut = el.data("owl-animate-out") ? el.data("owl-animate-out") : "", dataDefaultItem = el.data("owl-item"), dataItemXS = el.data("owl-item-xs"), dataItemSM = el.data("owl-item-sm"), dataItemMD = el.data("owl-item-md"), dataItemLG = el.data("owl-item-lg"), dataItemXL = el.data("owl-item-xl"), dataNavLeft = el.data("owl-nav-left") ? el.data("owl-nav-left") : "<i class='icon-chevron-left'></i>", dataNavRight = el.data("owl-nav-right") ? el.data("owl-nav-right") : "<i class='icon-chevron-right'></i>", duration = el.data("owl-duration"), datamouseDrag = el.data("owl-mousedrag") == "on" ? true : false;
          if (target.children("div, span, a, img, h1, h2, h3, h4, h5, h5").length >= 2) {
            el.owlCarousel({
              animateIn: dataAnimateIn,
              animateOut: dataAnimateOut,
              margin: dataGap,
              autoplay: dataAuto,
              autoplayTimeout: dataSpeed,
              autoplayHoverPause: true,
              loop: dataLoop,
              nav: dataNav,
              mouseDrag: datamouseDrag,
              touchDrag: true,
              autoplaySpeed: duration,
              navSpeed: duration,
              dotsSpeed: duration,
              dragEndSpeed: duration,
              navText: [dataNavLeft, dataNavRight],
              dots: dataDots,
              items: dataDefaultItem,
              responsive: {
                0: {
                  items: dataItemXS
                },
                480: {
                  items: dataItemSM
                },
                768: {
                  items: dataItemMD
                },
                992: {
                  items: dataItemLG
                },
                1200: {
                  items: dataItemXL
                },
                1680: {
                  items: dataDefaultItem
                }
              }
            });
          }
        });
      }
    }
    function masonry($selector) {
      var masonry2 = $2($selector);
      if (masonry2.length > 0) {
        if (masonry2.hasClass("filter")) {
          masonry2.imagesLoaded(function() {
            masonry2.isotope({
              columnWidth: ".grid-sizer",
              itemSelector: ".grid-item",
              isotope: {
                columnWidth: ".grid-sizer"
              },
              filter: "*"
            });
          });
          var filters = masonry2.closest(".masonry-root").find(".ps-masonry-filter > li > a");
          filters.on("click", function(e) {
            e.preventDefault();
            var selector = $2(this).attr("href");
            filters.find("a").removeClass("current");
            $2(this).parent("li").addClass("current");
            $2(this).parent("li").siblings("li").removeClass("current");
            $2(this).closest(".masonry-root").find(".ps-masonry").isotope({
              itemSelector: ".grid-item",
              isotope: {
                columnWidth: ".grid-sizer"
              },
              filter: selector
            });
            return false;
          });
        } else {
          masonry2.imagesLoaded(function() {
            masonry2.masonry({
              columnWidth: ".grid-sizer",
              itemSelector: ".grid-item"
            });
          });
        }
      }
    }
    function mapConfig() {
      var map = $2("#contact-map");
      if (map.length > 0) {
        map.gmap3({
          address: map.data("address"),
          zoom: map.data("zoom"),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false
        }).marker(function(map2) {
          return {
            position: map2.getCenter(),
            icon: "img/marker.png"
          };
        }).infowindow({
          content: map.data("address")
        }).then(function(infowindow) {
          var map2 = this.get(0);
          var marker = this.get(1);
          marker.addListener("click", function() {
            infowindow.open(map2, marker);
          });
        });
      } else {
        return false;
      }
    }
    function slickConfig() {
      var product = $2(".ps-product--detail");
      if (product.length > 0) {
        var primary = product.find(".ps-product__gallery"), second = product.find(".ps-product__variants"), vertical = product.find(".ps-product__thumbnail").data("vertical");
        primary.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: ".ps-product__variants",
          fade: true,
          dots: false,
          infinite: false,
          arrows: primary.data("arrow"),
          prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
          nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
        });
        second.slick({
          slidesToShow: second.data("item"),
          slidesToScroll: 1,
          infinite: false,
          arrows: second.data("arrow"),
          focusOnSelect: true,
          prevArrow: "<a href='#'><i class='fa fa-angle-up'></i></a>",
          nextArrow: "<a href='#'><i class='fa fa-angle-down'></i></a>",
          asNavFor: ".ps-product__gallery",
          vertical,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: second.data("arrow"),
                slidesToShow: 4,
                vertical: false,
                prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
              }
            },
            {
              breakpoint: 992,
              settings: {
                arrows: second.data("arrow"),
                slidesToShow: 4,
                vertical: false,
                prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                vertical: false,
                prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
              }
            }
          ]
        });
      }
    }
    function tabs() {
      $2(".ps-tab-list  li > a ").on("click", function(e) {
        e.preventDefault();
        var target = $2(this).attr("href");
        $2(this).closest("li").siblings("li").removeClass("active");
        $2(this).closest("li").addClass("active");
        $2(target).addClass("active");
        $2(target).siblings(".ps-tab").removeClass("active");
      });
      $2(".ps-tab-list.owl-slider .owl-item a").on("click", function(e) {
        e.preventDefault();
        var target = $2(this).attr("href");
        $2(this).closest(".owl-item").siblings(".owl-item").removeClass("active");
        $2(this).closest(".owl-item").addClass("active");
        $2(target).addClass("active");
        $2(target).siblings(".ps-tab").removeClass("active");
      });
    }
    function rating() {
      $2("select.ps-rating").each(function() {
        var readOnly;
        if ($2(this).attr("data-read-only") == "true") {
          readOnly = true;
        } else {
          readOnly = false;
        }
        $2(this).barrating({
          theme: "fontawesome-stars",
          readonly: readOnly,
          emptyValue: "0"
        });
      });
    }
    function productLightbox() {
      var product = $2(".ps-product--detail");
      if (product.length > 0) {
        $2(".ps-product__gallery").lightGallery({
          selector: ".item a",
          thumbnail: true,
          share: false,
          fullScreen: false,
          autoplay: false,
          autoplayControls: false,
          actualSize: false
        });
        if (product.hasClass("ps-product--sticky")) {
          $2(".ps-product__thumbnail").lightGallery({
            selector: ".item a",
            thumbnail: true,
            share: false,
            fullScreen: false,
            autoplay: false,
            autoplayControls: false,
            actualSize: false
          });
        }
      }
      $2(".ps-gallery--image").lightGallery({
        selector: ".ps-gallery__item",
        thumbnail: true,
        share: false,
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
        actualSize: false
      });
      $2(".ps-video").lightGallery({
        thumbnail: false,
        share: false,
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
        actualSize: false
      });
    }
    function backToTop() {
      var scrollPos = 0;
      var element = $2("#back2top");
      $2(window).scroll(function() {
        var scrollCur = $2(window).scrollTop();
        if (scrollCur > scrollPos) {
          if (scrollCur > 500) {
            element.addClass("active");
          } else {
            element.removeClass("active");
          }
        } else {
          element.removeClass("active");
        }
        scrollPos = scrollCur;
      });
      element.on("click", function() {
        $2("html, body").animate({
          scrollTop: "0px"
        }, 800);
      });
    }
    function filterSlider() {
      var el = $2(".ps-slider");
      var min = el.siblings().find(".ps-slider__min");
      var max = el.siblings().find(".ps-slider__max");
      var defaultMinValue = el.data("default-min");
      var defaultMaxValue = el.data("default-max");
      var maxValue = el.data("max");
      var step = el.data("step");
      if (el.length > 0) {
        el.slider({
          min: 0,
          max: maxValue,
          step,
          range: true,
          values: [defaultMinValue, defaultMaxValue],
          slide: function(event, ui) {
            var values2 = ui.values;
            min.text("$" + values2[0]);
            max.text("$" + values2[1]);
          }
        });
        var values = el.slider("option", "values");
        min.text("$" + values[0]);
        max.text("$" + values[1]);
      } else {
      }
    }
    function modalInit() {
      var modal = $2(".ps-modal");
      if (modal.length) {
        if (modal.hasClass("active")) {
          $2("body").css("overflow-y", "hidden");
        }
      }
      modal.find(".ps-modal__close, .ps-btn--close").on("click", function(e) {
        e.preventDefault();
        $2(this).closest(".ps-modal").removeClass("active");
      });
      $2(".ps-modal-link").on("click", function(e) {
        e.preventDefault();
        var target = $2(this).attr("href");
        $2(target).addClass("active");
        $2("body").css("overflow-y", "hidden");
      });
      $2(".ps-modal").on("click", function(event) {
        if (!$2(event.target).closest(".ps-modal__container").length) {
          modal.removeClass("active");
          $2("body").css("overflow-y", "auto");
        }
      });
    }
    function searchInit() {
      var searchbox = $2(".ps-search");
      $2(".ps-search-btn").on("click", function(e) {
        e.preventDefault();
        searchbox.addClass("active");
      });
      searchbox.find(".ps-btn--close").on("click", function(e) {
        e.preventDefault();
        searchbox.removeClass("active");
      });
    }
    function countDown() {
      var time = $2(".ps-countdown");
      time.each(function() {
        var el = $2(this), value = $2(this).data("time");
        var countDownDate = new Date(value).getTime();
        var timeout = setInterval(function() {
          var now = new Date().getTime(), distance = countDownDate - now;
          var days = Math.floor(distance / (1e3 * 60 * 60 * 24)), hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)), seconds = Math.floor(distance % (1e3 * 60) / 1e3);
          el.find(".days").html(days);
          el.find(".hours").html(hours);
          el.find(".minutes").html(minutes);
          el.find(".seconds").html(seconds);
          if (distance < 0) {
            clearInterval(timeout);
            el.closest(".ps-section").hide();
          }
        }, 1e3);
      });
    }
    function productFilterToggle() {
      $2(".ps-filter__trigger").on("click", function(e) {
        e.preventDefault();
        var el = $2(this);
        el.find(".ps-filter__icon").toggleClass("active");
        el.closest(".ps-filter").find(".ps-filter__content").slideToggle();
      });
      if ($2(".ps-sidebar--home").length > 0) {
        $2(".ps-sidebar--home > .ps-sidebar__header > a").on("click", function(e) {
          e.preventDefault();
          $2(this).closest(".ps-sidebar--home").children(".ps-sidebar__content").slideToggle();
        });
      }
    }
    function mainSlider() {
      var homeBanner = $2(".ps-carousel--animate");
      homeBanner.slick({
        autoplay: true,
        speed: 1e3,
        lazyLoad: "progressive",
        arrows: false,
        fade: true,
        dots: true,
        prevArrow: "<i class='slider-prev ba-back'></i>",
        nextArrow: "<i class='slider-next ba-next'></i>"
      });
    }
    function subscribePopup() {
      var subscribe = $2("#subscribe"), time = subscribe.data("time");
      setTimeout(function() {
        if (subscribe.length > 0) {
          subscribe.addClass("active");
          $2("body").css("overflow", "hidden");
        }
      }, time);
      $2(".ps-popup__close").on("click", function(e) {
        e.preventDefault();
        $2(this).closest(".ps-popup").removeClass("active");
        $2("body").css("overflow", "auto");
      });
      $2("#subscribe").on("click", function(event) {
        if (!$2(event.target).closest(".ps-popup__content").length) {
          subscribe.removeClass("active");
          $2("body").css("overflow-y", "auto");
        }
      });
    }
    function stickySidebar() {
      var sticky = $2(".ps-product--sticky"), stickySidebar2, checkPoint = 992, windowWidth = $2(window).innerWidth();
      if (sticky.length > 0) {
        stickySidebar2 = new StickySidebar(".ps-product__sticky .ps-product__info", {
          topSpacing: 20,
          bottomSpacing: 20,
          containerSelector: ".ps-product__sticky"
        });
        if ($2(".sticky-2").length > 0) {
          var stickySidebar22 = new StickySidebar(".ps-product__sticky .sticky-2", {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: ".ps-product__sticky"
          });
        }
        if (checkPoint > windowWidth) {
          stickySidebar2.destroy();
          stickySidebar22.destroy();
        }
      } else {
        return false;
      }
    }
    function accordion() {
      var accordion2 = $2(".ps-accordion");
      accordion2.find(".ps-accordion__content").hide();
      $2(".ps-accordion.active").find(".ps-accordion__content").show();
      accordion2.find(".ps-accordion__header").on("click", function(e) {
        e.preventDefault();
        if ($2(this).closest(".ps-accordion").hasClass("active")) {
          $2(this).closest(".ps-accordion").removeClass("active");
          $2(this).closest(".ps-accordion").find(".ps-accordion__content").slideUp(350);
        } else {
          $2(this).closest(".ps-accordion").addClass("active");
          $2(this).closest(".ps-accordion").find(".ps-accordion__content").slideDown(350);
          $2(this).closest(".ps-accordion").siblings(".ps-accordion").find(".ps-accordion__content").slideUp();
        }
        $2(this).closest(".ps-accordion").siblings(".ps-accordion").removeClass("active");
        $2(this).closest(".ps-accordion").siblings(".ps-accordion").find(".ps-accordion__content").slideUp();
      });
    }
    function progressBar() {
      var progress = $2(".ps-progress");
      progress.each(function(e) {
        var value = $2(this).data("value");
        $2(this).find("span").css({
          width: value + "%"
        });
      });
    }
    function customScrollbar() {
      $2(".ps-custom-scrollbar").each(function() {
        var height = $2(this).data("height");
        $2(this).slimScroll({
          height: height + "px",
          alwaysVisible: true,
          color: "#000000",
          size: "6px",
          railVisible: true
        });
      });
    }
    function select2Cofig() {
      $2("select.ps-select").select2({
        placeholder: $2(this).data("placeholder"),
        minimumResultsForSearch: -1
      });
    }
    function carouselNavigation() {
      var prevBtn = $2(".ps-carousel__prev"), nextBtn = $2(".ps-carousel__next");
      prevBtn.on("click", function(e) {
        e.preventDefault();
        var target = $2(this).attr("href");
        $2(target).trigger("prev.owl.carousel", [1e3]);
      });
      nextBtn.on("click", function(e) {
        e.preventDefault();
        var target = $2(this).attr("href");
        $2(target).trigger("next.owl.carousel", [1e3]);
      });
    }
    function dateTimePicker() {
      $2(".ps-datepicker").datepicker();
    }
    $2(function() {
      backgroundImage();
      owlCarouselConfig();
      siteToggleAction();
      subMenuToggle();
      masonry(".ps-masonry");
      productFilterToggle();
      tabs();
      slickConfig();
      productLightbox();
      rating();
      backToTop();
      stickyHeader();
      filterSlider();
      mapConfig();
      modalInit();
      searchInit();
      countDown();
      mainSlider();
      parallax();
      stickySidebar();
      accordion();
      progressBar();
      customScrollbar();
      select2Cofig();
      carouselNavigation();
      dateTimePicker();
      $2('[data-toggle="tooltip"]').tooltip();
      $2(".ps-product--quickview .ps-product__images").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        infinite: false,
        prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
        nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
      });
    });
    $2("#product-quickview").on("shown.bs.modal", function(e) {
      $2(".ps-product--quickview .ps-product__images").slick("setPosition");
    });
    $2(window).on("load", function() {
      $2("body").addClass("loaded");
      subscribePopup();
    });
  })(jQuery);
})();
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
 *  GMAP3 Plugin for jQuery
 *  Version  : 7.2
 *  Date     : 2016/12/03
 *  Author   : DEMONTE Jean-Baptiste
 *  Contact  : jbdemonte@gmail.com
 *  Web site : http://gmap3.net
 *  Licence  : GPL-3.0+
 */
/*!
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
/*! jQuery UI - v1.12.1 - 2017-12-21
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/datepicker.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
/*! lightgallery - v1.6.9 - 2018-04-03
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
