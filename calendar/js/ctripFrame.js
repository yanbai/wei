 //adFrame-1.0_address-1.0_allyes-1.0_calendar-3.0_dropBox-1.0_notice-1.0_tab-1.2_toggle-1.0_validate-1.1.js
cQuery.run(function() {
    // adFrame-1.0.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(d) {
        function a(c, a) {
            this._init(c, a)
        }
        var e = {name: "adFrame",version: "1.0",init: function() {
            },uninit: function() {
            },module: a};
        d.extend(a.prototype, {_init: function(c, f) {
                function g() {
                    var a = b.list.shift(), c = a.getAttribute("mod_adFrame_src"), d = a.getAttribute("mod_adFrame_style");
                    a.innerHTML = '<iframe marginheight="0" marginwidth="0" frameborder="0" scrolling="no" style="' + d + '" src="' + c + '"></iframe>';
                    (b.list.length ? setTimeout(arguments.callee, b.interval) : b.clock = null)
                }
                this._obj = c;
                this._opt = f;
                this._opts = 
                d.extend(a.defaults.setings, f || {});
                var b = a.defaults.$ref, e = this._opts.mod_adframe_style;
                c.setAttribute("mod_adFrame_src", this._opts.mod_adframe_src);
                c.setAttribute("mod_adFrame_style", e);
                b.list.push(c);
                b.clock || (b.count ? g() : b.clock = setTimeout(g, b.timeout));
                b.count++
            }});
        a.defaults = {setings: {mod_adFrame_src: "about:blank",mod_adFrame_style: ""},$ref: {clock: null,list: [],interval: 800,timeout: 1500,count: 0}};
        d.mod.reg(e)
    })(cQuery);
    // address-1.0.js:
    ;
    window.replace = function() {
        return ''
    };
    window.replace = function() {
        return ""
    };
    (function(d) {
        function r(a, b) {
            this._init(a, b)
        }
        var h = {name: "address",version: "1.0",init: function() {
            },uninit: function() {
            },module: r}, s = {change: 1,userinput: 1,enter: 1}, t = "_" + h.name + "_" + h.version;
        d.extend(r.prototype, {target: null,target_get: function() {
                return this.target
            },name: null,name_get: function() {
                return this.name
            },name_set: function(a) {
                this.name = a;
                this._checkEnable()
            },delay: 0,source: null,source_get: function(a) {
                if (a) {
                    if (a in this.source)
                        return d.copy(this.source[a]);
                    d.error("mod (" + h.name + "," + h.version + 
                    ") source_get", "invalid key " + a);
                    return null
                }
                return d.copy(this.source)
            },source_set: function(a) {
                this.source = (a ? d.extend(this.source || {}, a) : null);
                this._refresh()
            },jsonpSource: null,jsonpSource_get: function() {
                return this.jsonpSource
            },jsonpSource_set: function(a) {
                ((this.jsonpSource = a) ? (this.source = null, this.jsonpSource = a, d.loader.jsonp(this.jsonpSource, {charset: this.charset,onload: function(a) {
                        this.source_set(a)
                    }.bind(this)})) : (this.source ? this.jsonpSource = null : d.error("mod (" + h.name + "," + h.version + ") jsonpSource_set", 
                "invalid source " + a)))
            },jsonpFilter: null,jsonpFilter_get: function() {
                return this.jsonpFilter
            },jsonpFilter_set: function(a) {
                this.jsonpFilter = a
            },sort: "^0$ ^1$ ^3+$ ^0 ^1 ^3+ 0 1 3+".split(" "),sort_get: function() {
                return d.copy(this.sort)
            },sort_set: function(a) {
                this.sort = d.copy(a);
                this._sortReString = null;
                this._refresh()
            },display: {left: 0,right: 1,suggestion: 1,value: 1},display_get: function(a) {
                if (a) {
                    if (a in this.display)
                        return d.copy(this.display[a]);
                    d.error("mod (" + h.name + "," + h.version + ") display_get", "invalid key " + 
                    a);
                    return null
                }
                return d.copy(this.display)
            },display_set: function(a) {
                (a ? d.extend(this.display, a) : this.display = {});
                this._refresh()
            },relate: {},relate_get: function(a) {
                if (a) {
                    if (a in this.relate)
                        return d.copy(this.relate[a]);
                    d.error("mod (" + h.name + "," + h.version + ") relate_get", "invalid key " + a);
                    return null
                }
                return d.copy(this.relate)
            },relate_set: function(a) {
                this.relate = (a ? d.copy(a) : {});
                this._refresh()
            },message: {suggestion: "\u4ece\u4e0b\u5217\u57ce\u5e02\u9009\u62e9",filterResult: "${val}\uff0c\u6309\u62fc\u97f3\u6392\u5e8f",
                noFilterResult: "\u5bf9\u4e0d\u8d77\uff0c\u627e\u4e0d\u5230\uff1a${val}",sort: []},message_set: function(a) {
                (a ? d.extend(this.message, a) : this.message = {});
                this._refresh()
            },message_get: function(a) {
                if (a) {
                    if (a in this.message)
                        return d.copy(this.message[a]);
                    d.error("mod (" + h.name + "," + h.version + ") message_get", "invalid key " + a);
                    return null
                }
                return d.copy(this.message)
            },offset: null,offset_set: function(a) {
                this.offset = (a ? d.copy(a) : null);
                this._refresh()
            },offset_get: function(a) {
                return d.copy(this.offset)
            },minLength: 1,
            isAutoCorrect: !1,isFocusNext: !1,isFilterSelect: !0,template: {suggestion: '\t\t\t\t<div class="c_address_box">\t\t\t\t\t<div class="c_address_hd">${message.suggestion}</div>\t\t\t\t\t<div class="c_address_bd">\t\t\t\t\t\t<ol class="c_address_ol">\t\t\t\t\t\t\t{{enum(key) data}}\t\t\t\t\t\t\t\t<li><span>${key}</span></li>\t\t\t\t\t\t\t{{/enum}}\t\t\t\t\t\t</ol>\t\t\t\t\t\t{{enum(key,arr) data}}\t\t\t\t\t\t\t<ul class="c_address_ul layoutfix">\t\t\t\t\t\t\t\t{{each arr}}\t\t\t\t\t\t\t\t\t<li><a data="${data}" href="javascript:void(0);">${display}</a></li>\t\t\t\t\t\t\t\t{{/each}}\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t{{/enum}}\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t',
                suggestionStyle: "\t\t\t\t.c_address_box { background-color: #fff; font-size: 12px; width: 290px; }\t\t\t\t.c_address_box a { text-decoration: none; }\t\t\t\t.c_address_hd { height: 24px; border-color: #2C7ECF; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color:#CEE3FC; line-height: 24px; padding-left: 10px; }\t\t\t\t.c_address_hd strong{color:#fff;}\t\t\t\t.c_address_bd { border-color: #999999; border-style: solid; border-width: 0 1px 1px; overflow: hidden; padding:10px; }\t\t\t\t.c_address_ol { margin:0; padding:0 0 20px; border-bottom: 1px solid #5DA9E2; }\t\t\t\t.c_address_ol li { color: #005DAA; cursor: pointer; float: left; height: 20px; line-height: 20px; list-style-type: none; text-align: center; }\t\t\t\t.c_address_ol li span { padding:0 8px; white-space:nowrap; display:block; }\t\t\t\t.c_address_ol li .hot_selected { display:block; padding:0 7px; background-color: #FFFFFF; border-color: #5DA9E2; border-style: solid; border-width: 1px 1px 0; color: #000000; font-weight: bold; }\t\t\t\t.c_address_ul { width: 100%; margin:0; padding: 4px 0 0; }\t\t\t\t.c_address_ul li { float: left; height: 24px; overflow: hidden; width: 67px; }\t\t\t\t.c_address_ul li a { display: block; height: 22px;  border: 1px solid #FFFFFF; color: #1148A8; line-height: 22px; padding-left: 5px; }\t\t\t\t.c_address_ul li a:hover { background-color: #E8F4FF; border: 1px solid #ACCCEF; text-decoration: none; }\t\t\t",
                suggestionInit: function(a) {
                    function b() {
                        var a = this;
                        c.each(function(b, c) {
                            (b[0] == a ? (b.addClass("hot_selected"), d[c].style.display = "") : (b.removeClass("hot_selected"), d[c].style.display = "none"))
                        })
                    }
                    var c = a.find("span"), d = a.find("ul");
                    if (c.length) {
                        for (var g = 30, f = 0, m = c.length; f < m; f++)
                            g += c[f].offsetWidth;
                        a = a.find("div").first();
                        a[0] && 278 < g && a.css("width", g + "px");
                        c.bind("mousedown", b);
                        b.apply(c[0])
                    }
                },filter: '\t\t\t\t{{if list}}\t\t\t\t\t<div class="c_address_select">\t\t\t\t\t\t<div class="c_address_wrap">\t\t\t\t\t\t\t<div class="c_address_hd">{{if hasResult}}{{tmpl message.filterResult}}{{else}}{{tmpl message.noFilterResult}}{{/if}}</div>\t\t\t\t\t\t\t<div class="c_address_list" style="">\t\t\t\t\t\t\t\t{{each (i,item) list}}\t\t\t\t\t\t\t\t\t{{if cQuery.type(item)=="string"}}\t\t\t\t\t\t\t\t\t\t<label>${item}</label>\t\t\t\t\t\t\t\t\t{{else}}\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" data="${data}" style="display: block;"><span>${left}</span>${right}</a>\t\t\t\t\t\t\t\t\t{{/if}}\t\t\t\t\t\t\t\t{{/each}}\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t{{if page.max>-1}}\t\t\t\t\t\t\t\t<div class="c_address_pagebreak" style="display: block;">\t\t\t\t\t\t\t\t\t{{if page.current>0}}\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" page="${page.current-1}">&lt;-</a>\t\t\t\t\t\t\t\t\t{{/if}}\t\t\t\t\t\t\t\t\t{{if page.current<2}}\t\t\t\t\t\t\t\t\t\t{{loop(index) Math.min(5,page.max+1)}}\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\t\t\t\t\t\t\t\t\t\t{{/loop}}\t\t\t\t\t\t\t\t\t{{else page.current>page.max-2}}\t\t\t\t\t\t\t\t\t\t{{loop(index) Math.max(0,page.max-4),page.max+1}}\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\t\t\t\t\t\t\t\t\t\t{{/loop}}\t\t\t\t\t\t\t\t\t{{else}}\t\t\t\t\t\t\t\t\t\t{{loop(index) Math.max(0,page.current-2),Math.min(page.current+3,page.max+1)}}\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\t\t\t\t\t\t\t\t\t\t{{/loop}}\t\t\t\t\t\t\t\t\t{{/if}}\t\t\t\t\t\t\t\t\t{{if page.current<page.max}}\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" page="${page.current+1}">-&gt;</a>\t\t\t\t\t\t\t\t\t{{/if}}\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t{{/if}}\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t{{/if}}\t\t\t',
                filterStyle: "\t\t\t\t.c_address_hd { height: 24px; border-color: #2C7ECF; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color: #fff; line-height: 24px; padding-left: 10px; word-break: break-all; }\t\t\t\t.c_address_bd { border-color: #999999; border-style: solid; border-width: 0 1px 1px; overflow: hidden; padding:10px; }\t\t\t\t.c_address_select { width:222px; height:355px; font-family: Arial, Simsun; font-size: 12px; }\t\t\t\t.c_address_wrap { width: 220px; height:349px; min-height: 305px; margin: 0; padding: 0 0 4px; border: 1px solid #969696; background:#fff; text-align: left; }\t\t\t\t.c_address_hd { margin:-1px; }\t\t\t\t.c_address_list { margin: 0; padding: 0; height:300px; }\t\t\t\t.c_address_list label { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: center; }\t\t\t\t.c_address_list span { float: right; font: 10px/22px verdana; margin: 0; overflow: hidden; padding: 0; text-align: right; white-space: nowrap; width: 110px; }\t\t\t\t.c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: left; text-decoration: none; }\t\t\t\t.c_address_list a.hover { background: none repeat scroll 0 0 #E8F4FF; border-bottom: 1px solid #7F9DB9; border-top: 1px solid #7F9DB9; }\t\t\t\t.address_selected { background: none repeat scroll 0 0 #FFE6A6; color: #FFFFFF; height: 22px; }\t\t\t\t.c_address_pagebreak { line-height: 25px; margin: 0; padding: 0; text-align: center; }\t\t\t\t.c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }\t\t\t\ta.address_current { color: #000; text-decoration: none; }\t\t\t",
                filterInit: function(a) {
                },filterPageSize: 12},sortFunction: function(a, b) {
                return (a.left > b.left ? 1 : (a.left == b.left ? 0 : -1))
            },validate: function(a, b) {
                var c = this, d = this.target.value().trim().replace((/[\|@]/g), "");
                if (!d)
                    return this._unselect(!0, !0), !1;
                if (this.jsonpFilter)
                    return this._filterDataByJsonp(this.jsonpFilter, d, a, !0, function(a) {
                        (a ? (c._select(a, !0), b && b(!0)) : (c._unselect(!1, !0), b && b(!1)))
                    }), !1;
                if (d = this._filterData(this.source.data, d, a, !0))
                    return this._select(d, !0), b && b(!0), !0;
                this._unselect(!1, !0);
                b && b(!1);
                return !1
            },bind: function(a, b, c) {
                this._event("bind", a, b, c);
                return this
            },unbind: function(a, b) {
                this._event("unbind", a, b);
                return this
            },trigger: function(a, b) {
                this._event("trigger", a, b);
                return this
            },_enable: !1,_parentDocument: null,_parentWindow: null,_iframeDocument: null,_iframeWindow: null,_iframeObject: null,_iframeContainter: null,_lastIframeSize: null,_iframeClock: null,_iframeStyle: "width:0;height:0;position:absolute;top:-100000px;left:-100000px;z-index:200;",_placeHolder: (d.browser.isIE ? '<pre style="display:none;">placeholder</pre>' : 
            ""),_isFocus: !1,_focusClock: null,_checkClock: null,_tmpValue: null,_lastValue: null,_isCharIn: !1,_suggestionContainer: null,_suggestionStyle: "position:absolute;top:-100000px;left:-100000px;z-index:200;",_isSuggestionRender: !1,_filterContainer: null,_filterStyle: "position:absolute;top:-100000px;left:-100000px;z-index:200;",_sortReString: null,_displayRegExp: null,_displayHash: null,_colsHash: null,_lastFilterData: null,_lastFilterRendarData: null,_lastSelect: null,_suggestionEnable: !1,_filterEnable: !1,_filterCount: 0,
            _selectFlag: !1,_getLengthRe: (/[^\x00-\xFF]/g),_init: function(a, b) {
                if (!b.name || "string" != d.type(name))
                    d.error("mod (" + h.name + "," + h.version + ") init", "invalid name " + name);
                else {
                    var c = this;
                    this.target = d(a);
                    this.name = b.name;
                    b.delay && "number" == d.type(b.delay) && 0 < b.delay && (this.delay = b.delay);
                    this.source = b.source || this.source;
                    this.jsonpSource = b.jsonpSource || this.jsonpSource;
                    this.charset = b.charset || cQuery.config("charset");
                    this.source || this.jsonpSource && d.loader.jsonp(this.jsonpSource, {charset: this.charset,
                        onload: function(a) {
                            this.source_set(a)
                        }.bind(this)});
                    this.jsonpFilter = b.jsonpFilter || this.jsonpFilter;
                    var e = d.type(b.sort);
                    if (b.sort && "array" == e || "function" == e)
                        this.sort = b.sort, this._sortReString = null;
                    this.sortFunction = b.sortFunction || this.sortFunction;
                    b.display && (this.display = d.extend(!0, {}, this.display, b.display));
                    this.relate = b.relate || this.relate;
                    b.message && (this.message = d.extend(!0, {}, this.message, b.message));
                    this.offset = ("offset" in b ? b.offset : this.offset);
                    this.minLength = ("minLength" in b ? b.minLength : 
                    this.minLength);
                    this.priority = ("priority" in b ? b.priority : this.priority);
                    this.isAutoCorrect = ("isAutoCorrect" in b ? b.isAutoCorrect : this.isAutoCorrect);
                    this.isFocusNext = ("isFocusNext" in b ? b.isFocusNext : this.isFocusNext);
                    this.isFilterSelect = ("isFilterSelect" in b ? b.isFilterSelect : this.isFilterSelect);
                    b.template && (this.template = d.extend(!0, {}, this.template, b.template));
                    this.isIframe = function() {
                        if (b.hasOwnProperty("isIframe") && !b.isIframe)
                            return !1;
                        var a = c.target[0].ownerDocument, a = a.defaultView || a.parentWindow;
                        try {
                            var e = 
                            a.frameElement || !!b.isIframe && c.target[0];
                            e && (c._parentDocument = e.ownerDocument, c._parentWindow = c._parentDocument.defaultView || c._parentDocument.parentWindow, c._iframeObject = d(c._parentDocument.createElement("iframe")), c._iframeObject.css(c._iframeStyle), c._iframeObject[0].frameBorder = 0, c._iframeObject.prependTo(c._parentDocument.body), c._iframeObject.html('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>address</title><style>html,body{padding:0;margin:0;overflow:hidden;}</style></head><body></div></body></html>', 
                            function() {
                                c._iframeWindow = c._iframeObject[0].contentWindow || c._iframeObject[0].window;
                                c._iframeDocument = c._iframeWindow.document;
                                c._iframeContainer = d(c._iframeDocument.createElement("container"));
                                c._iframeContainer.css("position", "absolute");
                                c._iframeContainer.appendTo(c._iframeDocument.body)
                            }));
                            return !!e
                        } catch (m) {
                            return !1
                        }
                    }();
                    d.bindMethod(this);
                    this.target.attr("autoComplete", "on");
                    this._initTmpl();
                    this._initEvent();
                    this.uninit = this._uninit()
                }
            },_initTmpl: function() {
            },_initEvent: function() {
                this.target.bind("focus", 
                this._focus);
                this.target.bind("blur", this._blur);
                this.target.bind("keydown", this._keydown);
                this.target.bind("keypress", this._keypress);
                this.target.bind("mouseup", this._mouseup);
                this.target.bind("mousedown", this._focus);
                this.target.bind("keydown", this._focus)
            },_initCols: function() {
                if (!this._colsHash && (this._colsHash = {}, this.source.alias))
                    for (var a = 0, b = this.source.alias.length; a < b; a++)
                        this._colsHash[this.source.alias[a]] = a
            },_initSort: function() {
                this._initCols();
                if (!this._sortReString) {
                    var a = this._sortReString = 
                    {accurate: [],vague: []}, b = 0, c = 0;
                    switch (d.type(this.sort)) {
                        case "array":
                            for (var e = 0, g = this.sort.length; e < g; e++) {
                                var f = this.sort[e].match((/^(\^?)([^\^\$\|@\r\n\+]+)(\+?)(\$?)$/));
                                if (f) {
                                    if ((/^\d$/).test(f[2]))
                                        f[2] = parseInt(f[2], 10);
                                    else if (f[2] in this._colsHash)
                                        f[2] = this._colsHash[f[2]];
                                    else {
                                        d.error("address._initSort", "invalid sort column " + f[2]);
                                        continue
                                    }
                                    var m = (+f[2] || f[3] ? "([^\\|@]*\\|){" + f[2] + (f[3] ? "," : "") + "}" : "");
                                    a.accurate[b++] = ["@(" + m, "", "(\\|[^@]*)?)(?=@)"];
                                    a.vague[c++] = ["@(" + m + (f[1] ? "" : "[^\\|@]*"), 
                                        "", (f[4] ? "(\\|[^@]*)?" : "[^@]*") + ")(?=@)"]
                                } else
                                    d.error("address._initSort", "invalid sort rule " + this.sort[e])
                            }
                            break;
                        case "function":
                            break;
                        default:
                            d.error("address._initSort", "invalid sort type " + this.sort)
                    }
                }
            },_initDisplay: function() {
                this._initCols();
                if (!this._displayHash) {
                    var a = this._displayHash = {}, b, c;
                    for (b in this.display)
                        c = this.display[b], ((/^\d$/).test(c) ? a[b] = parseInt(c, 10) : (c in this._colsHash ? a[b] = this._colsHash[c] : (a[b] = null, d.error("address._initDisplay", "invalid display column " + arr[1]))))
                }
            },
            _refresh: function() {
                this._tmpValue = this._lastValue = this._sortReString = this._colsHash = null;
                this._isSuggestionRender = !1;
                this._isFocus && this._inputCheck()
            },_checkEnable: function() {
            },_focus: function(a) {
                if (this._isFocus)
                    this.source && !this._suggestionEnable && !this._filterEnable && this._showSuggestion();
                else {
                    this._isFocus = !0;
                    this.target.attr("autoComplete", "off");
                    this._isCharIn = !1;
                    this._tmpValue = this._lastValue = null;
                    this._clearFilter();
                    this._inputCheck();
                    clearTimeout(this._checkClock);
                    clearInterval(this._focusClock);
                    this._focusClock = setInterval(this._focusInterval, 100);
                    this.isIframe && (clearInterval(this._iframeClock), this._iframeClock = setInterval(this._fixIframeSize, 100));
                    var b = this.target[0];
                    switch (a.type) {
                        case "mousedown":
                            setTimeout(function() {
                                b.select()
                            });
                            break;
                        case "focus":
                            b.select()
                    }
                }
            },_blur: function() {
                if (this._isFocus) {
                    this._isFocus = !1;
                    this.target.attr("autoComplete", "on");
                    var a = this;
                    this._hiddenSuggestion();
                    this._hiddenFilter();
                    clearTimeout(this._checkClock);
                    clearInterval(this._focusClock);
                    this.isIframe && 
                    clearInterval(this._iframeClock);
                    if (!this._selectFlag) {
                        var b = this.target.value();
                        if (this.isAutoCorrect)
                            if (this.source)
                                this._unselect(!1, !0), this.validate(!this.isAutoCorrect, function(b) {
                                    b || a._unselect(!0, !1)
                                });
                            else {
                                this._unselect(!0, !0);
                                return
                            }
                        var c = this.target.value();
                        this.trigger("userinput", {arguments: {eventType: "blur",value: b,autoCorrectValue: c,data: null}})
                    }
                }
            },_keypress: function() {
                this._isCharIn = !0
            },_keydown: function(a) {
                switch (a.keyCode) {
                    case 13:
                        if (this._filterEnable && this._lastSelect) {
                            var b = 
                            this.target.value(), c = this._lastSelect.attr("data");
                            this._select(c);
                            var e = this.target.value();
                            this.trigger("userinput", {arguments: {eventType: "keydown",value: b,autoCorrectValue: e,data: c}});
                            break
                        }
                        this.trigger("enter", {arguments: this.target.value()});
                        break;
                    case 37:
                    case 39:
                        if (0 > this.template.filterPageSize)
                            return !0;
                        if (this._filterEnable && (c = this._lastFilterRendarData) && 0 <= c.page.max)
                            switch (a.keyCode) {
                                case 37:
                                    0 < c.page.current && this._updateFilter(null, null, c.page.current - 1);
                                    break;
                                case 39:
                                    c.page.current < 
                                    c.page.max && this._updateFilter(null, null, c.page.current + 1)
                            }
                        break;
                    case 38:
                    case 40:
                        if (this._filterEnable && (e = this._lastSelect, c = this._lastFilterRendarData))
                            b = this._filterContainer.find("*[data]"), (null === e ? c.list.length && !this.isFilterSelect && (e = (38 == a.keyCode ? c.list.length - 1 : 0), this._showHover(b[e])) : (e = b.indexOf(this._lastSelect), -1 != e && (c = c.list.length, e = (e + c + a.keyCode - 39) % c, this._showHover(b[e]))));
                        break;
                    default:
                        return d.browser.isIPadUCWeb && (this._isCharIn = !0), !0
                }
                a.stop();
                return !1
            },_mouseup: function() {
                var a = 
                this.target[0];
                a.releaseCapture && a.releaseCapture()
            },_getLength: function(a) {
                return a.replace(this._getLengthRe, "  ").length
            },_focusInterval: function() {
                var a = this.target.value().trim().replace((/[\|@]/g), "");
                this.source && this._tmpValue !== a && (this._tmpValue = a, (this.delay ? (clearTimeout(this._checkClock), this._checkClock = setTimeout(this._inputCheck, this.delay)) : this._inputCheck()))
            },_inputCheck: function() {
                var a = this.target.value().trim().replace((/[\|@]/g), "");
                this.source && this._lastValue !== a && (null !== this._lastValue && 
                (this._isCharIn = !0), this._lastValue = a, (this._getLength(a) >= this.minLength && this._isCharIn ? this._showFilter(a) : this._showSuggestion()))
            },_showSuggestion: function() {
                this._suggestionEnable = !0;
                this._hiddenFilter();
                this._clearFilter();
                if (!this._suggestionContainer) {
                    if (this.isIframe) {
                        var a = this._iframeDocument.createElement("div");
                        a.id = "address_suggestionContainer_" + this.target.uid()
                    } else
                        a = document.createElement("div"), a.id = "address_suggestionContainer_" + this.target.uid(), a.style.cssText = this._suggestionStyle;
                    this._suggestionContainer = d(a);
                    this._suggestionContainer.bind("mousedown", this._filterMousedown)
                }
                this._suggestionContainer.appendTo(this.isIframe ? this._iframeContainer : d.container);
                if (!this._isSuggestionRender) {
                    this._isSuggestionRender = !0;
                    var a = [], b = 0, c = this._suggestionContainer[0].id;
                    "string" == d.type(this.template.suggestionStyle) && (a[b++] = this._placeHolder + "<style>" + this.template.suggestionStyle.replace((/(\s*)([^\{\}]+)\{/g), function(a, b, d) {
                        return b + d.replace((/([^,]+)/g), "#" + c + " $1") + "{"
                    }) + "</style>");
                    var e = {data: this.source.suggestion,message: this.message};
                    a[b++] = d.tmpl.render(this.template.suggestion, e);
                    this._suggestionContainer.html(a.join(""));
                    "function" == d.type(this.template.suggestionInit) && this.template.suggestionInit(this._suggestionContainer)
                }
                (this.isIframe ? (this._fixIframeSize(), this._iframeObject.offsetA(this.target, this.offset)) : (this._suggestionContainer.offset(this.target, this.offset), this._suggestionContainer.cover()))
            },_fixIframeSize: function() {
                if (this.isIframe) {
                    var a = this._iframeContainer[0], 
                    b = a.offsetWidth + "px", a = a.offsetHeight + "px";
                    if (!this._lastIframeSize || !(b == this._lastIframeSize.width && a == this._lastIframeSize.height))
                        this._lastIframeSize = {width: b,height: a}, this._iframeObject.css(this._lastIframeSize)
                }
            },_hiddenSuggestion: function() {
                this._suggestionEnable = !1;
                if (this._suggestionContainer) {
                    try {
                        this._suggestionContainer.remove()
                    } catch (a) {
                    }
                    (this.isIframe ? (this._iframeObject.css(this._iframeStyle), this._lastIframeSize = null) : (this._suggestionContainer.css(this._suggestionStyle), this._suggestionContainer.uncover()))
                }
            },
            _showFilter: function(a) {
                this._filterEnable = !0;
                this._filterCount++;
                this._hiddenSuggestion();
                if (!this._filterContainer) {
                    if (this.isIframe) {
                        var b = this._iframeDocument.createElement("div");
                        b.id = "address_filterContainer_" + this.target.uid()
                    } else
                        b = document.createElement("div"), b.id = "address_filterContainer_" + this.target.uid(), b.style.cssText = this._filterStyle;
                    this._filterContainer = d(b);
                    this._filterContainer.bind("mouseover", this._filterMouseover);
                    this._filterContainer.bind("mousedown", this._filterMousedown)
                }
                a = 
                a.replace((/[\|@]/g), "");
                (this.jsonpFilter ? this._filterDataByJsonp(this.jsonpFilter, a, !1, !1) : this._filterData(this.source.data, a, !1, !1))
            },_clearFilter: function() {
                this._lastSelect = this._lastFilterRendarData = this._lastFilterData = null
            },_filterMouseover: function(a) {
                for (a = a.target; a && "A" != a.tagName; )
                    a = a.parentNode;
                a && a.getAttribute("data") && this._showHover(a)
            },_filterMousedown: function(a) {
                for (var b = a.target; b && "A" != b.tagName; )
                    b = b.parentNode;
                if (b) {
                    var c = b.getAttribute("data");
                    if (c) {
                        var e = "mousedown";
                        this._suggestionEnable && 
                        (e = "suggestionMousedown");
                        this._filterEnable && (e = "filterMousedown");
                        if (d.browser.isIE) {
                            var g = this;
                            b.onclick = function() {
                                g._select(c)
                            };
                            this._isSuggestionRender = !1
                        } else
                            this._select(c);
                        var f = this.target.value();
                        this.trigger("userinput", {arguments: {eventType: e,value: f,autoCorrectValue: f,data: c}})
                    }
                    (b = b.getAttribute("page")) && this._updateFilter("", "", +b)
                }
                a.stop();
                b = this.target[0];
                b.setCapture && b.setCapture();
                return !1
            },_hiddenFilter: function() {
                this._filterEnable = !1;
                if (this._filterContainer) {
                    try {
                        this._filterContainer.remove()
                    } catch (a) {
                    }
                    (this.isIframe ? 
                    (this._iframeObject.css(this._iframeStyle), this._lastIframeSize = null) : (this._filterContainer.css(this._filterStyle), this._filterContainer.uncover()))
                }
            },_filterData: function(a, b, c, e) {
                this._initSort();
                this._initDisplay();
                var g = this, f = [], m = 0, h = a;
                switch (d.type(this.sort)) {
                    case "array":
                        a = this._sortReString[(c ? "accurate" : "vague")];
                        c = b.toReString();
                        for (var l = ("array" == d.type(this.message.sort) ? this.message.sort : []), n = 0, p = a.length; n < p; n++) {
                            a[n][1] = c;
                            var u = RegExp(a[n].join(""), "gi"), k = [], r = 0, h = h.replace(u, function(a, 
                            b) {
                                var c = b.split("|"), c = {left: c[g._displayHash.left] || "",right: c[g._displayHash.right] || "",data: b};
                                k[r++] = c;
                                return ""
                            });
                            if (r) {
                                k.sort(this.sortFunction);
                                if (e)
                                    return k[0].data;
                                l[n] && k.unshift(d.tmpl.render(l[n], {val: b,items: k}));
                                f[m++] = k
                            }
                        }
                        if (e)
                            return !1;
                        break;
                    case "function":
                        k = this.sort(a, b, c, e);
                        if (e)
                            return (k.length ? k[0].data : !1);
                        f[m++] = k;
                        break;
                    default:
                        return d.error("address._filterData", "invalid sort type"), !1
                }
                f = Array.prototype.concat.apply([], f);
                this._updateFilter(f, b)
            },_filterDataByJsonp: function(a, 
            b, c, e, g) {
                this._initSort();
                this._initDisplay();
                var f = [], m = 0, h = this._filterCount;
                a = d.tmpl.render(a, {key: encodeURIComponent(escape(b)),accurate: (c ? 1 : 0)});
                d.loader.jsonp(a, {charset: this.charset,onload: function(a) {
                        if ((this._filterEnable || e) && h == this._filterCount) {
                            for (var c = a.data.split("@"), p = 0, r = c.length; p < r; p++)
                                if (c[p]) {
                                    if (e) {
                                        "function" == d.type(g) && g(c[p]);
                                        return
                                    }
                                    if ("$=" == c[p].slice(0, 2))
                                        var k = d.tmpl.render(c[p].slice(2), {val: b});
                                    else
                                        k = c[p].split("|"), k = {left: k[this._displayHash.left] || "",right: k[this._displayHash.right] || 
                                            "",data: c[p]};
                                    f[m++] = k
                                }
                            (e && !m ? "function" == d.type(g) && g(null) : this._updateFilter(f, a.key))
                        }
                    }.bind(this)});
                if (e)
                    return !1
            },_updateFilter: function(a, b, c) {
                var e, g, f = [], h = 0, q = this._filterContainer[0].id;
                "string" == d.type(this.template.filterStyle) && (f[h++] = this._placeHolder + "<style>" + this.template.filterStyle.replace((/(\s*)([^\{\}]+)\{/g), function(a, b, c) {
                    return b + c.replace((/([^,]+)/g), "#" + q + " $1") + "{"
                }) + "</style>");
                ("array" == d.type(a) ? (a.length ? (e = this._lastFilterData = a || [], g = !0) : (e = this._lastFilterData || [], g = 
                !1)) : (e = this._lastFilterData || [], g = (this._lastFilterRendarData ? this._lastFilterRendarData.hasResult : !1)));
                a = (this._lastSelect ? this._filterContainer.find("*[data],label").indexOf(this._lastSelect) : -1);
                c = c || 0;
                var l = this.template.filterPageSize;
                0 > l && (l = e.length);
                var n = Math.ceil(e.length / l) - 1;
                c = Math.min(Math.max(0, c), n);
                e = (n + 1 ? e.slice(c * l, Math.min((c + 1) * l, e.length)) : null);
                this._lastFilterRendarData = b = {val: b || this._lastValue,hasResult: g,list: e,page: {max: n,pageSize: l,current: c},message: this.message};
                f[h++] = d.tmpl.render(this.template.filter, 
                b);
                this._filterContainer.html(f.join(""));
                "function" == d.type(this.template.filterInit) && this.template.filterInit(this._filterContainer);
                f = this._filterContainer.find("*[data],label");
                a = (b.list && b.list.length ? Math.max((this.isFilterSelect ? 0 : -1), Math.min(a, b.list.length - 1, f.length - 1)) : -1);
                (f[0] ? (-1 != a && "LABEL" == f[a].tagName && (a = (a == f.length - 1 ? a - 1 : a + 1)), (this.isFilterSelect ? this._showHover(f[a]) : this._showHover())) : this._showHover());
                (this.isIframe ? (this._filterContainer.appendTo(this._iframeContainer), this._fixIframeSize(), 
                this._iframeObject.offsetA(this.target, this.offset)) : (this._filterContainer.appendTo(d.container), this._filterContainer.offset(this.target, this.offset), this._filterContainer.cover()))
            },_showHover: function(a) {
                (a ? a = d(a) : this.isFilterSelect && (a = this._filterContainer.find("*[data]:first")));
                if (this._lastSelect) {
                    if (a && a[0] && this._lastSelect[0] == a[0])
                        return;
                    this._lastSelect.removeClass("hover")
                }
                (a && a[0] ? (a.addClass("hover"), this._lastSelect = a) : this._lastSelect = null)
            },_getItems: function(a) {
                this._initCols();
                a = 
                a.split("|");
                for (var b = {length: a.length}, c = 0, d = a.length; c < d; c++)
                    b[c] = a[c];
                var g = this.source.alias;
                if (g) {
                    c = 0;
                    for (d = g.length; c < d; c++)
                        b[g[c]] = a[c]
                }
                return b
            },_select: function(a, b) {
                var c = this;
                this._selectFlag = !0;
                setTimeout(function() {
                    c._selectFlag = !1
                });
                this._initDisplay();
                var e = a.split("|"), g = e[this._displayHash.value] || "";
                this._tmpValue = this._lastValue = g.trim();
                this.target.value(g);
                this._clearFilter();
                this._hiddenSuggestion();
                this._hiddenFilter();
                if (this.relate)
                    for (var f in this.relate)
                        if (this.relate.hasOwnProperty(f)) {
                            var h = 
                            d(this.relate[f]);
                            if (h[0]) {
                                if ((/^\d$/).test(f))
                                    f = parseInt(f, 10);
                                else if (f in this._colsHash)
                                    f = this._colsHash[f];
                                else {
                                    d.error("address._select", "invalid relate column " + f);
                                    continue
                                }
                                h.value(e[f] || "")
                            } else
                                d.error("address._select", "invalid relate element")
                        }
                this.trigger("change", {arguments: {value: g,data: a,items: this._getItems(a)}});
                if (!b && this.isFocusNext) {
                    var q = null;
                    if (d.isCDom(this.isFocusNext))
                        q = this.isFocusNext[0];
                    else
                        switch (d.type(this.isFocusNext)) {
                            case "string":
                                q = d(this.isFocusNext)[0];
                                break;
                            case "object":
                                "focus" in 
                                this.isFocusNext && (q = this.isFocusNext);
                                break;
                            case "boolean":
                                if (e = this.target[0].form) {
                                    e = e.elements;
                                    f = g = 0;
                                    for (h = e.length - 1; f < h; f++) {
                                        if (g) {
                                            var l = d(e[f]);
                                            if ((e[f].offsetWidth || e[f].offsetHeight) && "none" !== l.css("display") && "hidden" !== l.css("visibility")) {
                                                q = e[f];
                                                break
                                            }
                                        }
                                        e[f] == this.target[0] && (g = 1)
                                    }
                                }
                        }
                    q && setTimeout(function() {
                        try {
                            q.focus()
                        } catch (a) {
                        }
                    })
                }
            },_unselect: function(a, b) {
                a && (this._tmpValue = this._lastValue = null, this.target.value(""), this._clearFilter(), this._hiddenSuggestion(), this._hiddenFilter(), 
                this.trigger("change", {arguments: {value: "",data: "",items: null}}));
                if (b && this.relate)
                    for (var c in this.relate)
                        if (this.relate.hasOwnProperty(c)) {
                            var e = d(this.relate[c]);
                            (e[0] ? e.value("") : d.error("address._select", "invalid relate element"))
                        }
            },_event: function(a, b) {
                switch (d.type(b)) {
                    case "string":
                        b = [b];
                        break;
                    case "array":
                        break;
                    default:
                        d.error("address." + a, "Invalid types " + b);
                        return
                }
                for (var c, e = 0, g = b.length; e < g; e++)
                    c = b[e].trim(), (!c || "string" != d.type(c) ? d.error("address." + a, "Invalid type " + c) : (c in s ? this.target[a].apply(this.target, 
                    [c + t].concat(Array.prototype.slice.call(arguments, 2))) : d.error("address." + a, "Unsupport type " + c)))
            },_uninit: function() {
            }});
        d.mod.reg(h)
    })(cQuery);
    // allyes-1.0.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(e) {
        function a(a, d) {
            this._init(a, d)
        }
        var f = {name: "allyes",version: "1.0",init: function() {
            },uninit: function() {
            },module: a}, p = {};
        e.extend(a.prototype, {_init: function(c, d) {
                function k(a, l) {
                    var b = c.getAttribute(a);
                    return (!b ? null : (l ? l[b] || null : b))
                }
                function f(a) {
                    var b = location.pathname, b = b.slice(b.lastIndexOf("/") + 1);
                    return ((/^(SearchFlights\.aspx|SearchHotels\.aspx|query\.asp)$/i).test(b) ? a[0] : a[1])
                }
                this._obj = c;
                this._opt = d;
                this._opts = e.extend(!0, a.defaults.setings, d || {});
                var m = a.defaults.attrs, q = a.defaults.tmpls.c_div_template, 
                r = a.defaults.tmpls.c_txt_template, n = a.defaults.tmpls.c_frm_template, b = this._opts.user, s = this._opts.mod_allyes_user, b = b || s;
                if (!b) {
                    var g = k(m[0], window), h = k(m[1], p);
                    if (!g && !h)
                        return
                }
                setTimeout(function() {
                    if (b)
                        -1 < b.indexOf("@") && (b = f(b.split("@"))), c.innerHTML = n.replace("{$user}", b);
                    else {
                        var a = [];
                        g && (a = g.map(function(a) {
                            a.button = a.button || ";";
                            return q.replace("{$height}", a.height).replace("{$iframe}", n.replace("{$user}", a.user))
                        }));
                        h && a.push(r.replace("{$text}", _.$s2t(h)));
                        c.innerHTML = a.join("")
                    }
                }, 1E3)
            },
            _uninit: function() {
            }});
        a.defaults = {setings: {user: null,mod_allyes_user: null},attrs: ["mod_allyes_buttons", "mod_allyes_text"],tmpls: {c_div_template: '<div class="base_ad140x60" style="height:{$height}px">{$iframe}</div>',c_txt_template: '<div class="base_adtxt140">{$text}</div>',c_frm_template: '<iframe marginheight="0" width="100%" height="100%" marginwidth="0" frameborder="0" scrolling="no" src="http://allyes.ctrip.com/main/adfshow?user={$user}&db=ctrip&border=0&local=yes"></iframe>'}};
        e.mod.reg(f)
    })(cQuery);
    // calendar-3.0.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(f) {
        var x = (document.compareDocumentPosition ? function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        });
        Array.prototype.unique = function() {
            this.sort();
            for (var a = [this[0]], b = 1; b < this.length; b++)
                this[b] !== a[a.length - 1] && a.push(this[b]);
            return a
        };
        var s = function() {
            var a = (/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g), b = (/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g), 
            c = (/[^-+\dA-Z]/g), d = function(a, b) {
                a = String(a);
                for (b = b || 2; a.length < b; )
                    a = "0" + a;
                return a
            };
            return function(e, f, m) {
                var n = s;
                1 == arguments.length && ("[object String]" == Object.prototype.toString.call(e) && !(/\d/).test(e)) && (f = e, e = void 0);
                e = (e ? new Date(e) : new Date);
                if (isNaN(e))
                    throw SyntaxError("invalid date");
                f = String(n.masks[f] || f || n.masks["default"]);
                "UTC:" == f.slice(0, 4) && (f = f.slice(4), m = !0);
                var k = (m ? "getUTC" : "get"), l = e[k + "Date"](), h = e[k + "Day"](), p = e[k + "Month"](), r = e[k + "FullYear"](), q = e[k + "Hours"](), t = e[k + "Minutes"](), 
                v = e[k + "Seconds"](), k = e[k + "Milliseconds"](), u = (m ? 0 : e.getTimezoneOffset()), w = {d: l,dd: d(l),ddd: n.i18n.dayNames[h],dddd: n.i18n.dayNames[h + 7],m: p + 1,mm: d(p + 1),mmm: n.i18n.monthNames[p],mmmm: n.i18n.monthNames[p + 12],yy: String(r).slice(2),yyyy: r,h: q % 12 || 12,hh: d(q % 12 || 12),H: q,HH: d(q),M: t,MM: d(t),s: v,ss: d(v),l: d(k, 3),L: d(99 < k ? Math.round(k / 10) : k),t: (12 > q ? "a" : "p"),tt: (12 > q ? "am" : "pm"),T: (12 > q ? "A" : "P"),TT: (12 > q ? "AM" : "PM"),Z: (m ? "UTC" : (String(e).match(b) || [""]).pop().replace(c, "")),o: (0 < u ? "-" : "+") + d(100 * Math.floor(Math.abs(u) / 
                    60) + Math.abs(u) % 60, 4),S: ["th", "st", "nd", "rd"][(3 < l % 10 ? 0 : (10 != l % 100 - l % 10) * l % 10)]};
                return f.replace(a, function(a) {
                    return (a in w ? w[a] : a.slice(1, a.length - 1))
                })
            }
        }();
        s.masks = {"default": "ddd mmm dd yyyy HH:MM:ss",shortDate: "m/d/yy",mediumDate: "mmm d, yyyy",longDate: "mmmm d, yyyy",fullDate: "dddd, mmmm d, yyyy",shortTime: "h:MM TT",mediumTime: "h:MM:ss TT",longTime: "h:MM:ss TT Z",isoDate: "yyyy-mm-dd",isoTime: "HH:MM:ss",isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};
        s.i18n = {dayNames: "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            monthNames: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};
        Date.prototype.format = function(a, b) {
            return s(this, a, b)
        };
        String.prototype.pad = function() {
            var a = "", b = this.split("-"), a = parseInt(b[0], 10), c = parseInt(b[1], 10), b = parseInt(b[2], 10);
            10 <= c || (c = "0" + c);
            10 <= b || (b = "0" + b);
            return a = (200 < a ? a : 1900 + a) + "-" + c + "-" + b
        };
        cQuery.extend(f.fn, {hide: function() {
                for (var a = 0; a < this.length; a++)
                    this[a].style.display = "none"
            },
            show: function() {
                for (var a = 0; a < this.length; a++)
                    this[a].style.display = ""
            },append: function(a) {
                this.each(function(b, c) {
                    b[0].appendChild(a)
                })
            },outerHeight: function() {
                return this[0].offsetHeight
            },prev: function() {
                for (var a = this[0].previousSibling; 1 != a.nodeType; )
                    a = a.previousSibling;
                return a
            },next: function() {
                for (var a = this[0].nextSibling; a && 1 != a.nodeType; )
                    a = a.nextSibling;
                return a
            },parents: function(a) {
                try {
                    for (var b = this[0].parentNode; b && b.tagName != a.toUpperCase(); )
                        b = b.parentNode;
                    return [b]
                } catch (c) {
                    return []
                }
            },
            triggerEvent: function(a) {
                if (document.createEvent) {
                    var b = document.createEvent("MouseEvents");
                    b.initEvent(a, !0, !0);
                    this[0].dispatchEvent(b)
                } else
                    this[0].fireEvent("on" + a)
            }});
        var t = function(a) {
            var b = new Date, c = f.config("charset"), d = {"2011-02-02": ["c_chuxi", "\u9664\u5915"],"2012-01-22": ["c_chuxi", "\u9664\u5915"],"2013-02-09": ["c_chuxi", "\u9664\u5915"],"2011-02-03": ["c_chunjie", "\u6625\u8282"],"2012-01-23": ["c_chunjie", "\u6625\u8282"],"2013-02-10": ["c_chunjie", "\u6625\u8282"],"2011-02-04": ["c_chuer", "\u521d\u4e8c"],
                "2012-01-24": ["c_chuer", "\u521d\u4e8c"],"2013-02-11": ["c_chuer", "\u521d\u4e8c"],"2011-02-05": ["c_chusan", "\u521d\u4e09"],"2012-01-25": ["c_chusan", "\u521d\u4e09"],"2013-02-12": ["c_chusan", "\u521d\u4e09"],"2011-02-06": ["c_chusi", "\u521d\u56db"],"2012-01-26": ["c_chusi", "\u521d\u56db"],"2013-02-13": ["c_chusi", "\u521d\u56db"],"2011-02-07": ["c_chuwu", "\u521d\u4e94"],"2012-01-27": ["c_chuwu", "\u521d\u4e94"],"2013-02-14": ["c_chuwu", "\u521d\u4e94"],"2011-02-08": ["c_chuliu", "\u521d\u516d"],"2012-01-28": ["c_chuliu", 
                    "\u521d\u516d"],"2013-02-15": ["c_chuliu", "\u521d\u516d"],"2011-02-09": ["c_chuqi", "\u521d\u4e03"],"2012-01-29": ["c_chuqi", "\u521d\u4e03"],"2013-02-16": ["c_chuqi", "\u521d\u4e03"],"2011-02-10": ["c_chuba", "\u521d\u516b"],"2012-01-30": ["c_chuba", "\u521d\u516b"],"2013-02-17": ["c_chuba", "\u521d\u516b"],"2011-01-01": ["c_yuandan", "\u5143\u65e6"],"2012-01-01": ["c_yuandan", "\u5143\u65e6"],"2013-01-01": ["c_yuandan", "\u5143\u65e6"],"2011-04-05": ["c_qingming", "\u6e05\u660e\u8282"],"2012-04-04": ["c_qingming", "\u6e05\u660e\u8282"],
                "2013-04-04": ["c_qingming", "\u6e05\u660e\u8282"],"2011-06-06": ["c_duanwu", "\u7aef\u5348\u8282"],"2012-06-23": ["c_duanwu", "\u7aef\u5348\u8282"],"2013-06-12": ["c_duanwu", "\u7aef\u5348\u8282"],"2011-05-01": ["c_wuyi", "\u52b3\u52a8\u8282"],"2012-05-01": ["c_wuyi", "\u52b3\u52a8\u8282"],"2013-05-01": ["c_wuyi", "\u52b3\u52a8\u8282"],"2011-10-01": ["c_guoqing", "\u56fd\u5e86\u8282"],"2012-10-01": ["c_guoqing", "\u56fd\u5e86\u8282"],"2013-10-01": ["c_guoqing", "\u56fd\u5e86\u8282"],"2011-09-12": ["c_zhongqiu", "\u4e2d\u79cb\u8282"],
                "2012-09-30": ["c_zhongqiu", "\u4e2d\u79cb\u8282"],"2013-09-19": ["c_zhongqiu", "\u4e2d\u79cb\u8282"],"2011-02-17": ["c_yuanxiao", "\u5143\u5bb5\u8282"],"2012-02-06": ["c_yuanxiao", "\u5143\u5bb5\u8282"],"2013-02-24": ["c_yuanxiao", "\u5143\u5bb5\u8282"]}, b = {date: b,dayTagName: "a",monthTagName: "a",defaultClass: "calendar",tipText: "yyyy-mm-dd",classNames: {select: "select",nothismonth: "day_over",blankdate: "day_no",today: "today",tomorrow: "",aftertomorrow: "",none: "none",type: "left"},typeList: {month_prev: "-1",month_next: "+1"},
                template: {head: '<div class="calendar_title"><a class="{$type}"></a>{$data}</div>',shead: '<div class="calendar_title"><a class="{$typel}"></a>{$data}<a class="{$typer}"></a></div>',body: '<dl class="calendar_day"><dt class="weekend">\u65e5</dt><dt>\u4e00</dt><dt>\u4e8c</dt><dt>\u4e09</dt><dt>\u56db</dt><dt>\u4e94</dt><dt class="weekend">\u516d</dt><dd>{$dates}</dd></dl>',foot: "",day: '<a href="javascript:void(0);" {$id} {$Class} {$Style}>{$day}</a>',festival: '<span class="c_day_festival">{$day}</span>'},
                showPrev: !0,showNext: !1,todayInfos: ["", "", ""],weekText: "pic_sun pic_mon pic_tue pic_wed pic_thu pic_fir pic_sat".split(" "),todayText: ["pic_today", "pic_tomorrow", "pic_aftertomorrow"],type: "",rangeColor: "#F0F5FB",hoverColor: "#d9e5f4",festival: ("gb2312" == c ? d : ("utf-8" == c ? {} : d))};
            f.extend(!0, b, a);
            this.initialize(b)
        };
        t.prototype = {initialize: function(a) {
                this.setOptions(a);
                this.bindEvent();
                this.autoRender && this.render(this.date)
            },setOptions: function(a) {
                f.extend(!0, this, a);
                this.target = f(this.calendarWin.document.getElementById(a.target))
            },
            bindEvent: function() {
                this.bindAddNumEvent();
                this.bindMoveEvent();
                this.setToday()
            },hide: function() {
                this.target.css("display", "none")
            },show: function(a) {
                this.target.css("display", "")
            },setToday: function() {
                this.target.bind("selectstart", function() {
                    return !1
                })
            },getOptByType: function(a) {
                return this.typeList[a]
            },bindAddNumEvent: function() {
                f(this.target).bind("mousedown", function(a) {
                    a = a.target;
                    var b = !1, c;
                    for (c in this.typeList)
                        if (f(a).hasClass(c)) {
                            b = !0;
                            break
                        }
                    if (a.tagName == this.monthTagName.toUpperCase() && b)
                        return this.changeMonth(this, 
                        this.getOptByType(a.className)), !1;
                    (a = (a.tagName == this.dayTagName.toUpperCase() ? a : f(a).parents(this.dayTagName)[0])) && a.tagName == this.dayTagName.toUpperCase() && this.clickEvent(this, a);
                    return !1
                }.bind(this))
            },clickEvent: function(a, b) {
            },strToDate: function(a) {
                if (a)
                    return a.toDate()
            },chkHoverColor: function(a, b, c) {
                var d = null, e = null;
                if (a && ("A" == c.tagName || "A" == c.parentNode.tagName) && !f(c).hasClass("day_over") && !f(c).hasClass("day_no"))
                    d = this.strToDate(a), e = this.strToDate(b), this.setHoverColor(d, e, c)
            },setHoverColor: function(a, 
            b, c) {
                c = ("A" == c.tagName ? c : c.parentNode);
                var d = this.getDateById(c.id);
                b = (b ? b : d);
                c = this.target[0].parentNode.getElementsByTagName(c.tagName);
                for (var e = 0; e < c.length; e++) {
                    var g = !f(c[e]).hasClass("day_over") && !f(c[e]).hasClass("day_no");
                    c[e].id && g && (g = this.getDateById(c[e].id), c[e].style.backgroundColor = (g < d && g > a ? this.hoverColor : (g < a || g > b ? "" : this.rangeColor)))
                }
            },clearHoverColor: function(a, b) {
                for (var c = this.target[0].parentNode.getElementsByTagName("a"), d = 0; d < c.length; d++)
                    if (!f(c[d]).hasClass("day_over") && f(c[d]).hasClass("day_no"), 
                    c[d].id) {
                        var e = this.getDateById(c[d].id);
                        if (e < a || e > b)
                            c[d].style.backgroundColor = ""
                    }
            },bindMoveEvent: function() {
                var a = null, b = null, c = null, d = null, e = this;
                this.target.bind("mouseover", function(c) {
                    e.input && (a = f(e.input).data("startDate") || e.startDate, b = f(e.input).data("endDate") || e.endDate);
                    e.chkHoverColor(a, b, c.target)
                }.bind(this));
                this.target.bind("mouseout", function(f) {
                    if ((f = f.relatedTarget || f.toElement) && e.input && !x(e.target[0].parentNode, f) && a && b)
                        c = this.strToDate(a), d = this.strToDate(b), e.clearHoverColor(c, 
                        d)
                }.bind(this))
            },getDateString: function(a) {
                return a.format("yyyy-mm-dd")
            },getDateById: function(a) {
                a = a.replace((/_.*/), "").split("-");
                return new Date(a[0], a[1] - 1, 1 * a[2])
            },renderSelect: function(a, b) {
                this.render(this.date)
            },createHead: function(a) {
                var b = "";
                a = new Date(a);
                b = a.getFullYear();
                a = a.getMonth() + 1;
                var c = "", c = (this.template.formatHead ? this.template.formatHead(b, a) : b + "\u5e74" + a + "\u6708");
                return b = (this.type ? this.template.head.replaceWith({type: ("left" == this.type ? "month_prev" : "month_next"),data: c}) : this.template.shead.replaceWith({typel: "month_prev",
                    typer: "month_next",data: c}))
            },getClass: function(a, b, c) {
                var d = [this.classNames.today, this.classNames.tomorrow, this.classNames.aftertomorrow], e = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate()), e = (a - e) / 864E5, d = d[e] || "";
                0 === (a - this.beginDate) / 864E5 && (d += " " + this.classNames.select);
                this.beginDate && this.endDate && a > this.beginDate && a <= this.endDate && (d += " " + this.classNames.select);
                if (0 > e || this.closeDate[b])
                    d += " " + this.classNames.nothismonth;
                a = (this.input ? (c.data("startDate") ? c.data("startDate") : 
                this.input.value) : this.startDate);
                var g = (this.input ? (c.data("endDate") ? c.data("endDate") : "") : this.endDate), e = (this.input ? (c.data("minDate") ? c.data("minDate") : "") : this.minDate), m = (this.input ? (c.data("maxDate") ? c.data("maxDate") : "") : this.maxDate);
                a && (a = a.pad());
                g && (g = g.pad());
                e && (e = e.pad());
                m && (m = m.pad());
                (a = (a == b ? 1 : 0)) && (d += " day_selected");
                (g = (g == b ? 1 : 0)) && (d += " day_selected");
                e && this.strToDate(b) < this.strToDate(e) && (d = this.classNames.nothismonth);
                m && this.strToDate(b) > this.strToDate(m) && (d = this.classNames.nothismonth);
                c.data("prohibit") && -1 !== (c.data("prohibit").join("|") + "|").indexOf(b + "|") && (d = this.classNames.nothismonth);
                d = d.trim().split(" ").unique().join(" ");
                c = ((c = this.festival[b] || "") ? c[0] : "");
                e = f(this.input).data("today");
                if (c || b == e)
                    d = d.replace("day_selected", "c_festival_select");
                return {"class": d,start: a,end: g}
            },getAddValue: function(a) {
                if (this.beginDate) {
                    var b = new Date(this.beginDate.getFullYear(), this.beginDate.getMonth(), this.beginDate.getDate()), b = (a - b) / 864E5;
                    return (0 < b ? (this.endDate && a <= this.endDate ? "+" + 
                    b : (this.endDate ? "" : "+" + b)) : "")
                }
                return ""
            },chkRange: function(a, b, c, d) {
                return (a && (b && c && d) && (a = a.toDate(), b = b.toDate(), c > a && c < b) ? "style='background-color: " + f(this.input).data("rangeColor") + ";'" : "")
            },getDates: function(a) {
                var b = [];
                a.getDate();
                var c = (new Date(a.getFullYear(), a.getMonth(), 1)).getDay(), d = (new Date(a.getFullYear(), a.getMonth() + 1, 0)).getDate(), e = null, g = null, m = null;
                this.input && (m = f(this.input), e = m.data("startDate"), g = m.data("endDate"), m.data("minDate"), m.data("maxDate"));
                for (var n = 1; 43 > n; n++) {
                    var k = 
                    new Date(a.getFullYear(), a.getMonth(), n - c), l = this.getDateString(k), h = l + "_" + this.target[0].id, p = this.getClass(k, l, m), l = ((l = (k <= new Date ? "" : this.festival[l] || "")) ? l[0] : ""), r = this.setToday(k);
                    (n > c && n <= d + c ? (p = ([p["class"], l].join(" ").trim() ? "class='" + [p["class"], l].join(" ").trim() + "'" : ""), b.push(this.template.day.replaceWith({id: "id=" + h,day: (l ? this.template.festival.replaceWith({day: r + (n - c),festival: l}) : r + (n - c)),Style: this.chkRange(e, g, k, h),Class: p}))) : (n > d ? b.push(this.template.day.replaceWith({id: (this.showNext ? 
                        "id=" + h : ""),day: (this.showNext ? r + k.getDate() : ""),festival: (this.showNext ? l : ""),Style: this.chkRange(e, g, k, ""),Class: (this.showNext ? "class=" + [p["class"] || this.classNames.nothismonth, l].join(" ") : "class=" + [this.classNames.blankdate, l].join(" "))})) : b.push(this.template.day.replaceWith({id: (this.showPrev ? "id=" + h : ""),day: (this.showPrev ? r + k.getDate() : ""),festival: (this.showPrev ? l : ""),Style: this.chkRange(e, g, k, ""),Class: (this.showPrev ? "class=" + [p["class"] || this.classNames.nothismonth, l].join(" ") : "class=" + [this.classNames.blankdate, 
                            l].join(" "))}))))
                }
                return b.join("")
            },createBody: function(a) {
                a = new Date(a);
                return this.template.body.replaceWith({months: a.getMonth() + 1,dates: this.getDates(a)})
            },setToday: function(a) {
                var b = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate());
                return this.todayInfos[(a - b) / 864E5] || ""
            },createFoot: function() {
                return this.template.foot
            },createTempEl: function(a) {
                var b = this.calendarWin.document.createElement("div");
                b.innerHTML = a;
                return b.firstChild
            },render: function(a) {
                this.target.html("");
                this.target.append(this.createTempEl(this.createHead(a)));
                this.target.append(this.createTempEl(this.createBody(a)));
                this.target.show()
            },changeMonth: function(a, b) {
                a.date = new Date(a.date.getFullYear(), a.date.getMonth() + eval("(" + b + ")"), 1);
                this.render(this.date)
            }};
        var h = function(a) {
            var b = {options: {items: [],container: null,step: 2,date: new Date,startDate: null,endDate: null,showWeek: !1,reference: null,nextEl: null,today: null,todayClass: "",prevEl: null,rangeColor: "#F0F5FB",hoverColor: "#d9e5f4",classNames: {select: "select",
                        nothismonth: "day_over",blankdate: "day_no",today: "today",tomorrow: "",aftertomorrow: "",none: "none",type: "left"},template: {wrap: '<div class="calendar_wrap" id="calendars" style="position:absolute;display:none;" >{$calendars}</div>',calendar: '<div id="{$calendarid}" hidefocus="true" class="calendar_month"></div>'},styles: ".calendar_wrap{width:363px;background: #fff; padding: 5px 5px 0;border: solid 1px #999;overflow: hidden;font-size:12px;font-family:tahoma,Arial,Helvetica,simsun,sans-serif;-moz-box-shadow:0 3px 5px #ccc;-webkit-box-shadow:0 3px 5px #ccc;box-shadow:0 3px 5px #ccc;}.calendar_wrap a{ color: #0053aa; text-decoration: none !important; }.calendar_wrap a:hover{text-decoration: underline;}#calendar0{width: 180px;}#calendar1{width: 182px;}.calendar_month{float: left;padding-bottom:5px;text-align: center;}.calendar_title{ height: 23px; line-height: 23px; font-weight: bold; color: #fff; background-color: #004fb8; text-align: center; }.month_prev,.month_next{ width: 23px; height: 23px; color: #fff; background: #2d7ce7 url(http://pic.c-ctrip.com/cquery/un_calender_index.png) no-repeat; cursor: pointer; }.month_prev{float: left;background-position: 0 0;}.month_next{float: right;background-position: 100% 0;}.month_prev:hover{background-color: #62adf1; background-position: 0 -26px;}.month_next:hover{background-color: #62adf1; background-position: 100% -26px;}.calendar_day{ overflow:hidden; margin: 0; padding-top:5px; }.calendar_day dd { margin: 0; padding: 0; }#calendar1 dl{border-left: 2px solid #aaa;padding-left: 5px;padding-bottom:30px;margin-bottom: -30px;}.calendar_month dt{ float: left; width: 25px; height: 22px; line-height: 20px; color: #666; background-color: #ececec; margin-bottom: 2px; }.calendar_month .weekend{font-weight: bold;color: #f90;}.calendar_day a{ float: left; width: 24px; height: 24px; line-height: 24px; margin-bottom: 1px; padding-right: 1px; font-size: 11px; font-weight: bold; color: #005ead; background-color: #fff; cursor: pointer; }.calendar_day a:hover,.calendar_day .today,.calendar_day .day_selected,.calendar_day .c_festival_select,.calendar_day .c_festival_select:hover{background: #e6f4ff url(http://pic.c-ctrip.com/cquery/un_calender_index.png) no-repeat;}.calendar_day a:hover{background-color: #e6f4ff;background-position: -26px -53px;text-decoration: none;}.calendar_day .today{background-color: #fff5d1;background-position: 0 -82px;}.calendar_day .day_over,.calendar_day .day_no{font-weight: normal;color: #dbdbdb;outline: none;cursor: default;}.calendar_day .day_over:hover,.calendar_day .day_no:hover{background: #fff;}.calendar_day .day_selected,.calendar_day .day_selected:hover{background-color: #629be0;background-position: 0 -53px;color: #fff;}.calendar_day .c_festival_select,.calendar_day .c_festival_select:hover{ background-color: #ffe6a6; background-image: url(http://pic.c-ctrip.com/cquery/un_calender_index.png); background-position: 0 -111px; }.c_yuandan span,.c_chuxi span,.c_chunjie span,.c_yuanxiao span,.c_qingming span,.c_wuyi span,.c_duanwu span,.c_zhongqiu span,.c_guoqing span,.c_jintian span{ width: 24px; height: 24px; background-image: url(http://pic.c-ctrip.com/cquery/un_festivals.png); background-repeat: no-repeat; text-indent: -9999em; overflow: hidden; display: block; }.c_yuandan span{background-position: 0 0;}.c_chuxi span{background-position: 0 -32px;}.c_chunjie span{background-position: 0 -64px;}.c_yuanxiao span{background-position: 0 -96px;}.c_qingming span{background-position: 0 -128px;}.c_wuyi span{background-position: 0 -160px;}.c_duanwu span{background-position: 0 -192px;}.c_zhongqiu span{background-position: 0 -224px;}.c_guoqing span{background-position: 0 -256px;}.c_jintian span{ background-position: 0 -288px;}.c_calender_date{ display: inline-block; color: #666; text-align: right; position: absolute; z-index: 1; }",
                    weekText: "pic_sun pic_mon pic_tue pic_wed pic_thu pic_fir pic_sat".split(" "),todayText: ["pic_today", "pic_tomorrow", "pic_aftertomorrow"],closeDate: {},festival: {"2011-02-02": ["c_chuxi", "\u9664\u5915"],"2012-01-22": ["c_chuxi", "\u9664\u5915"],"2013-02-09": ["c_chuxi", "\u9664\u5915"],"2011-02-03": ["c_chunjie", "\u6625\u8282"],"2012-01-23": ["c_chunjie", "\u6625\u8282"],"2013-02-10": ["c_chunjie", "\u6625\u8282"],"2011-02-04": ["c_chuer", "\u521d\u4e8c"],"2012-01-24": ["c_chuer", "\u521d\u4e8c"],"2013-02-11": ["c_chuer", 
                            "\u521d\u4e8c"],"2011-02-05": ["c_chusan", "\u521d\u4e09"],"2012-01-25": ["c_chusan", "\u521d\u4e09"],"2013-02-12": ["c_chusan", "\u521d\u4e09"],"2011-02-06": ["c_chusi", "\u521d\u56db"],"2012-01-26": ["c_chusi", "\u521d\u56db"],"2013-02-13": ["c_chusi", "\u521d\u56db"],"2011-02-07": ["c_chuwu", "\u521d\u4e94"],"2012-01-27": ["c_chuwu", "\u521d\u4e94"],"2013-02-14": ["c_chuwu", "\u521d\u4e94"],"2011-02-08": ["c_chuliu", "\u521d\u516d"],"2012-01-28": ["c_chuliu", "\u521d\u516d"],"2013-02-15": ["c_chuliu", "\u521d\u516d"],
                        "2011-02-09": ["c_chuqi", "\u521d\u4e03"],"2012-01-29": ["c_chuqi", "\u521d\u4e03"],"2013-02-16": ["c_chuqi", "\u521d\u4e03"],"2011-02-10": ["c_chuba", "\u521d\u516b"],"2012-01-30": ["c_chuba", "\u521d\u516b"],"2013-02-17": ["c_chuba", "\u521d\u516b"],"2011-01-01": ["c_yuandan", "\u5143\u65e6"],"2012-01-01": ["c_yuandan", "\u5143\u65e6"],"2013-01-01": ["c_yuandan", "\u5143\u65e6"],"2011-04-05": ["c_qingming", "\u6e05\u660e\u8282"],"2012-04-04": ["c_qingming", "\u6e05\u660e\u8282"],"2013-04-04": ["c_qingming", "\u6e05\u660e\u8282"],
                        "2011-06-06": ["c_duanwu", "\u7aef\u5348\u8282"],"2012-06-23": ["c_duanwu", "\u7aef\u5348\u8282"],"2013-06-12": ["c_duanwu", "\u7aef\u5348\u8282"],"2011-05-01": ["c_wuyi", "\u52b3\u52a8\u8282"],"2012-05-01": ["c_wuyi", "\u52b3\u52a8\u8282"],"2013-05-01": ["c_wuyi", "\u52b3\u52a8\u8282"],"2011-10-01": ["c_guoqing", "\u56fd\u5e86\u8282"],"2012-10-01": ["c_guoqing", "\u56fd\u5e86\u8282"],"2013-10-01": ["c_guoqing", "\u56fd\u5e86\u8282"],"2011-09-12": ["c_zhongqiu", "\u4e2d\u79cb\u8282"],"2012-09-30": ["c_zhongqiu", "\u4e2d\u79cb\u8282"],
                        "2013-09-19": ["c_zhongqiu", "\u4e2d\u79cb\u8282"],"2011-02-17": ["c_yuanxiao", "\u5143\u5bb5\u8282"],"2012-02-06": ["c_yuanxiao", "\u5143\u5bb5\u8282"],"2013-02-24": ["c_yuanxiao", "\u5143\u5bb5\u8282"]}}}, b = f.extend(!0, b.options, a);
            this.initialize(b);
            return this
        };
        h.prototype = {initialize: function(a) {
                this.setOptions(a);
                this.createStyle()
            },setOptions: function(a) {
                f.extend(!0, this, a)
            },clearWeek: function(a) {
                a && f(a).css({"background-image": ""})
            },setWeek: function(a) {
                var b = f(a);
                if (b && b.value().isDate()) {
                    var c = this.getDay(this.getDateById(b.value(), 
                    "-"), null), d = f.config("charset"), e = function() {
                        f(a).css({"background-image": "url(http://pic.c-ctrip.com/cquery/" + c + ".png)","background-position": "right center","background-repeat": "no-repeat"})
                    };
                    c && 105 <= b.offset().width && ("gb2312" == d ? e() : "utf-8" != d && e())
                }
            },createEl: function(a) {
                var b = this.calendarWin.document.getElementById("calendars");
                if (b)
                    return f(b);
                if (a && f(a).length)
                    return f(a);
                a = this.calendarWin.document.createElement("div");
                a.innerHTML = this.template.wrap.replaceWith({calendars: this.createCalendar()});
                return f(a.firstChild).appendTo(this.container || this.calendarWin.document.body)
            },createCalendar: function() {
                var a = this, b = [];
                this.items.each(function(c, d) {
                    b.push(a.template.calendar.replaceWith({calendarid: "calendar" + d}))
                });
                return b.join("")
            },createStyle: function() {
                (f.browser.isIE ? (sty = this.calendarWin.document.createStyleSheet(), sty.cssText = this.styles) : (sty = this.calendarWin.document.createElement("style"), sty.type = "text/css", sty.textContent = this.styles, this.calendarWin.document.getElementsByTagName("head")[0].appendChild(sty)))
            },
            change: function(a) {
                $input = f(this.input);
                $input.data("startDate") && $input.data("endDate", this.input.value);
                var b = f($input.data("nextEl"));
                b.length && (b.data("startDate", this.input.value), b[0].focus());
                "undefined" != typeof this.input.onChange && this.input.onChange.call(this, a, a.value, !1);
                f(this.input).data("showWeek") && this.setWeek(a)
            },hide: function() {
                for (var a = 0; a < this.items.length; a++)
                    this.items[a].input && !this.items[a].input.value.isDate() && this.clearWeek(this.items[a].input), this.items[a].hide();
                this.el.hide();
                this.el.uncover();
                this.calendarIframe && (this.calendarIframe.style.display = "none")
            },show: function(a) {
                this.el || (this.el = this.createEl(this.el), this.el[0].style.zIndex = this.zIndex, this.override());
                this.calendarIframe && (this.calendarIframe.style.display = "", this.calendarIframe.style.zIndex = this.zIndex);
                var b = new Date;
                (a.value.isDate() ? b = a.value : (b = new Date, f(a).data("endDate", ""), this.enddate = ""));
                this.input = a;
                this.input.onBeforeShow.call(this);
                for (var c = 0; c < this.items.length; c++) {
                    var d = new Date;
                    if (b.length) {
                        var d = 
                        b.toDate(), e = d.getFullYear(), d = d.getMonth() + c;
                        ddate = new Date(e, d, 1)
                    } else
                        ddate = new Date(d.getFullYear(), d.getMonth() + c, 1);
                    this.items[c].input = this.input;
                    e = f(this.input);
                    if (!a.value.isDate() && e.data("reference")) {
                        var g = f(e.data("reference")).value();
                        g.isDate() && (d = g.toDate(), e.data("startDate", g), e.data("minDate", g), e = d.getFullYear(), d = d.getMonth() + c, ddate = new Date(e, d, 1))
                    }
                    this.items[c].date = ddate;
                    this.items[c].render(this.items[c].date)
                }
                this.el.show();
                this.setPosition(this.input, this.el)
            },setPosition: function(a, 
            b) {
                (this.calendarIframe ? f(this.calendarIframe).offsetA(a) : (f(b).offsetA(a), f(b).cover()));
                this.input.onShow.call(this);
                this.setToday()
            },setToday: function() {
                var a = (this.input ? f(this.input).data("todayClass") : "");
                if (a) {
                    f(this.el).find("." + this.classNames.today).removeClass(this.classNames.today);
                    for (var b = 0; b < this.items.length; b++) {
                        var c = this.items[b].target.find("#" + this.today.pad(2) + "_" + this.items[b].target[0].id);
                        if (c.length) {
                            f(c).addClass(a).html('<span class="c_day_festival">' + c.text() + "</span>");
                            break
                        }
                    }
                }
            },render: function() {
                for (var a = 0; a < this.items.length; a++)
                    this.items[a].render(this.items[a].date)
            },override: function() {
                for (var a = this.calendarWin, b = this.inputWin, c = 0; c < this.items.length; c++) {
                    var d = this.items[c];
                    d.calendarWin = a;
                    d.inputWin = b;
                    d.template = this.template;
                    this.items[c] = new t(d);
                    this.items[c].changeMonth = this.changeMonth.bind(this);
                    this.items[c].clickEvent = this.clickEvent.bind(this);
                    this.items[c].classNames = this.classNames;
                    this.items[c].closeDate = this.closeDate
                }
            },changeMonth: function(a) {
                var b = 
                {left: "-" + this.step,right: "+" + this.step};
                this.items.each(function(c, d) {
                    this.items[d].date = new Date(this.items[d].date.getFullYear(), this.items[d].date.getMonth() + eval("(" + b[a.type] + ")"), 1);
                    this.items[d].render(this.items[d].date)
                }.bind(this));
                this.input.onShow.call(this);
                this.setToday()
            },setValue: function(a) {
                f(this.input).data("startDate") && f(this.input).data("endDate", a)
            },getDay: function(a, b) {
                b = b || this;
                var c = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate()), d = b.festival[a.format("yyyy-mm-dd")] || 
                "";
                if (d)
                    return d[0].replace("c_", "pic_");
                d = Math.abs(parseInt((new Date(a) - c) / 864E5));
                return (0 > parseInt(new Date(a) - c) || 2 < d ? b.weekText[(new Date(a)).getDay()] : b.todayText[d])
            },clickEvent: function(a, b) {
                var c = this;
                if (this.input && !f(b).hasClass(a.classNames.nothismonth) && b.id) {
                    var d = s(a.getDateById(b.id), "yyyy-mm-dd");
                    this.input.value = d;
                    if (1 * f(this.input).data("showWeek")) {
                        var e = f(this.input);
                        if (e && this.input.value.isDate()) {
                            var g = this.getDay(a.getDateById(b.id), a);
                            if (g && 105 <= this.input.clientWidth) {
                                var h = 
                                f.config("charset"), n = function() {
                                    f(e).css({"background-image": "url(http://pic.c-ctrip.com/cquery/" + g + ".png)","background-position": "right center","background-repeat": "no-repeat"})
                                };
                                ("gb2312" == h ? n() : "utf-8" != h && n())
                            }
                        }
                    }
                    this.setValue(d);
                    this.items.each(function(a, b) {
                        this.items[b].startDate = c.input.startDate;
                        this.items[b].endDate = c.input.endDate
                    }.bind(this));
                    this.hide();
                    this.input.blur();
                    $input = f(this.input);
                    $input.data("startDate") && $input.data("endDate", this.input.value);
                    d = f($input.data("nextEl"));
                    d.length && 
                    (d.data("startDate", this.input.value), d[0].focus());
                    $input.triggerEvent("change");
                    "undefined" != typeof this.input.onChange && this.input.onChange.call(this, this.input, this.input.value, !0)
                }
            },getDateById: function(a, b) {
                var c = a.split(b || "_");
                return new Date(c[0], c[1] - 1, 1 * c[2])
            },_callbalck: function() {
                this.callbalck && this.callbalck.call(this, this.beginDate, this.endDate, (this.endDate - this.beginDate) / 864E5)
            },setBegin: function(a) {
                this.beginDate = a;
                this.renderSelect(this.beginDate, this.endDate)
            },setEnd: function(a) {
                this.endDate = 
                a;
                this.renderSelect(this.beginDate, this.endDate)
            },setTotalDay: function(a) {
                this.endDate = new Date(this.beginDate.getFullYear(), this.beginDate.getMonth(), 1 * this.beginDate.getDate() + 1 * a);
                this.renderSelect(this.beginDate, this.endDate)
            }};
        String.prototype.trim = function() {
            return this.replace((/(^\s*)|(\s*$)/g), "")
        };
        String.prototype.replaceWith = function(a) {
            return this.replace((/\{\$(\w+)\}/g), function(b, c) {
                return (c in a ? a[c] : b)
            })
        };
        f.mod.reg({name: "calendar",version: "3.0",init: function() {
            },uninit: function() {
            },module: function(a, 
            b) {
                function c() {
                    h.instance.ctObj && h.instance.ctObj.releaseCapture && (h.instance.ctObj.releaseCapture(), h.instance.ctObj = null)
                }
                var d = {zIndex: 999,calendarWin: window,date: "",container: null,target: a,rangeColor: "#F0F5FB",hoverColor: "#d9e5f4",inputs: this,showWeek: !0,nextEl: null,today: (new Date).toStdDateString(),prevEl: null,todayClass: "",minDate: null,reference: null,maxDate: null,startDate: null,endDate: null,items: [{target: "calendar0",type: "left",autoRender: !1,showPrev: !1,showNext: !1}, {target: "calendar1",type: "right",
                            autoRender: !1,showPrev: !1}],listeners: {onBeforeShow: function() {
                        },onShow: function() {
                        },onChange: function() {
                        }}};
                f.extend(!0, d.listeners, b.listeners);
                f.extend(!0, d, b.options);
                var e = f(a), g;
                for (g in d)
                    "listeners" != g && e.data(g, d[g]);
                for (g in d.listeners)
                    a[g] = d.listeners[g];
                var m = d.calendarWin;
                h.instance || (h.instance = new h(d));
                d.showWeek && h.instance.setWeek(a);
                f(a).bind("focus", function() {
                    h.instance.show(this);
                    m.document.getElementById("calendars").onmousedown = function(b) {
                        a.setCapture && (c(), a.setCapture(), 
                        h.instance.ctObj = a);
                        return !1
                    }
                });
                f(a).bind("mouseup", function() {
                    c()
                });
                f(a).bind("change", function(a) {
                    h.instance.change(this)
                });
                f(a).bind("blur", function(a) {
                    c();
                    h.instance.hide()
                });
                return h.instance
            }})
    })(cQuery);
    // dropBox-1.0.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(c) {
        function h(a, b) {
            this._opt = {options: {type: "auto",dropDom: null,data: [],trigger: ["mousedown"],ajax: ["dropAjax.php"]},classNames: {box: "dropBox_box",list: "dropBox_list",hover: "dropBox_hover",checked: ""},template: {showBox: '<ul ${classname} style="display:none;">${inner}</ul>',showInner: "<li ${flag}>${txt}</li>"},methods: {},listeners: {returnVal: function(a, b) {
                        return a
                    }}};
            this.init(a, b)
        }
        var k = {name: "dropBox",version: "1.0",init: function() {
                var a = document.createElement("div");
                a.id = "_dropBoxTemp_";
                a.style.display = "none";
                cQuery.container.append(a)
            },uninit: function() {
            },module: h};
        c.extend(h.prototype, {init: function(a, b) {
                c.extend(!0, this._opt, b);
                this.element = c(a);
                this.tempBox = c("#_dropBoxTemp_");
                this.sId = null;
                this.saveData = {};
                this._xy = this._privateNowHover = null;
                ("drop" == this._opt.options.type ? this.sId = this._opt.options.dropDom : this.creatHtml(this._opt.options.data));
                "select" == this._opt.options.type && this.element[0].setAttribute("readOnly", "readonly");
                "drop" != this._opt.options.type && this.resizeXy();
                this.addEvent()
            },creatHtml: function(a) {
                a = c.tmpl.render(this._opt.template.showBox, {classname: "class = " + this._opt.classNames.box,inner: ("auto" == this._opt.options.type ? "" : this.creatList(a))});
                this.tempBox.html(a);
                a = this.tempBox.firstChild()[0];
                a.id = this.element[0].id + "_s";
                a.style.position = "absolute";
                this.sId = c("#" + a.id);
                cQuery.container.append(a)
            },creatList: function(a) {
                for (var b = "", f = 0, e = a.length; f < e; f++)
                    var d = a[f].split("|"), b = b + c.tmpl.render(this._opt.template.showInner, {flag: "data-tag=" + d[0],txt: d[1]});
                return b
            },replaceHtml: function(a) {
                var b = a.length;
                (1 > b || 1 == b && !a[0] ? this.sId.css("display", "none") : (b = this.sId, b.html(""), b.html(this.creatList(a)), this.sId.css("display", "")))
            },resizeXy: function() {
                this._xy = this.element.offset();
                this.sId.css("left", parseInt(this._xy.left) + "px");
                this.sId.css("top", parseInt(this._xy.top + this._xy.height) + "px")
            },addEvent: function() {
                var a = this, b, f, e = !1, d = this.sId, g = !1, h = null;
                this.element.bind(this._opt.options.trigger[0], function(b) {
                    var c;
                    "auto" == a._opt.options.type && (c = 
                    a.element[0].value.replace((/\s*/g), ""));
                    "drop" != a._opt.options.type && a.resizeXy();
                    "auto" != a._opt.options.type && (d.css("display", ""), e = !0);
                    a.element.addClass(a._opt.classNames.checked);
                    (a.sId.html() ? f == c && c && d.css("display", "") : d.css("display", "none"))
                });
                this.element.bind("blur", function() {
                    clearTimeout(b);
                    a._privateNowHover && a._privateNowHover.removeClass(a._opt.classNames.hover);
                    d.css("display", "none");
                    a.element.removeClass(a._opt.classNames.checked)
                });
                "drop" == a._opt.options.type && c(document).bind("click", 
                function(a) {
                    !1 == e && d.css("display", "none");
                    e = !1
                });
                d.bind("mousedown", function(b) {
                    b = b || window.event;
                    var d = b.target || b.srcElement;
                    g = !0;
                    setTimeout(function() {
                        g = !1
                    }, 1);
                    (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                    if (d.getAttribute("data-tag") || d.tagName == a._opt.options.stag.toLocaleUpperCase())
                        a.element.value(d.innerHTML), h = d.innerHTML, a._opt.listeners.returnVal(d.innerHTML, d), c.event.trigger(a.element, "blur")
                });
                c.browser.isIE && (this.element[0].onbeforedeactivate = function() {
                    return (g ? g = !1 : !0)
                });
                "drop" != a._opt.options.type && this.element.bind("keyup", function(e) {
                    e = e || window.event;
                    e = e.keyCode;
                    var g = a.element[0].value.replace((/\s*/g), "");
                    if (h == g || !g)
                        d.css("display", "none");
                    else
                        switch (e) {
                            case c.KEY_DOWN:
                                a.hoverList(1);
                                break;
                            case c.KEY_UP:
                                a.hoverList(0);
                                break;
                            case c.KEY_ENTER:
                                clearTimeout(b);
                                a.fillInput();
                                f = a.element[0].value.replace((/\s*/g), "");
                                break;
                            default:
                                "select" != a._opt.options.type && "drop" != a._opt.options.type && (b = setTimeout(function() {
                                    a.sendAjax(g, a._opt.options.ajax[0])
                                }, 100))
                        }
                })
            },fillInput: function() {
                null != 
                this._privateNowHover && ((this._privateNowHover[0].getAttribute("data-tag") ? (this.element.value(this._privateNowHover[0].innerHTML)) : (this.element.value(this._privateNowHover.find(this._opt.options.stag)[0].innerHTML))), this._privateNowHover.removeClass(this._opt.classNames.hover));
                this.sId.css("display", "none")
            },hoverList: function(a) {
                var b = null;
                (0 == a ? (null == this._privateNowHover ? b = this.sId.find("li").filter(":last") : (a = this._privateNowHover.previousSibling(), b = (0 < a.length ? a : this.sId.find("li").filter(":last")), 
                this._privateNowHover.removeClass(this._opt.classNames.hover))) : 1 == a && (null == this._privateNowHover ? b = this.sId.find("li").filter(":first") : (a = this._privateNowHover.nextSibling(), b = (0 < a.length ? a : this.sId.find("li").filter(":first")), this._privateNowHover.removeClass(this._opt.classNames.hover))));
                b.addClass(this._opt.classNames.hover);
                this._privateNowHover = b
            },sendAjax: function(a, b) {
                var f = this;
                a && c.ajax(b, {method: cQuery.AJAX_METHOD_POST,context: {key: a},cache: !0,onsuccess: function(a, b) {
                        var c = b.split("@");
                        f.replaceHtml(c)
                    }})
            },updateOpt: function(a) {
                c.extend(!0, this._opt, a)
            }});
        c.mod.reg(k)
    })(cQuery);
    // notice-1.0.js:
    ;
    window.replace = function() {
        return ''
    };
    window.replace = function() {
        return ""
    };
    (function(c) {
        function e(a, b) {
            this._init(a, b)
        }
        var d = {name: "notice",version: "1.0",init: function() {
            },uninit: function() {
            },module: e};
        (function() {
            var a = cQuery.fn.value;
            cQuery.fn.value = function(b) {
                if (b == cQuery.undefined) {
                    var c = this[0];
                    if (!c)
                        return "";
                    if (c.getAttribute("_cqnotice") === cQuery.undefined)
                        return a.call(this, b);
                    b = c.value;
                    return (b == c.getAttribute("_cqnotice") || "" == b ? "" : b)
                }
                return a.call(this, b)
            }
        })();
        c.extend(e.prototype, {target: null,target_get: function() {
                return this.target
            },name: null,name_get: function() {
                return this.name
            },
            name_set: function(a) {
                this.name = a;
                this._checkEnable()
            },tips: null,tips_get: function() {
                return this.tips
            },tips_set: function(a) {
                this.tips = a
            },defaultClass: null,defaultClass_get: function() {
                return this.defaultClass
            },defaultClass_set: function(a) {
                this.defaultClass = a
            },selClass: null,selClass_get: function() {
                return this.selClass
            },selClass_set: function(a) {
                this.selClass = a
            },_init: function(a, b) {
                (!b.name || "string" != c.type(name) ? cQuery.error("mod (" + d.name + "," + d.version + ") init", "invalid name " + name) : (this.target = c(a), 
                this.name = b.name, this.selClassText = b.selClassText || " ", this.selClass = b.selClass || " ", this.tips = b.tips, this.target[0].setAttribute("_cqnotice", b.tips), c.bindMethod(this), this._showTips(), this.bindEvent()))
            },_checkValue: function() {
                return "" == this.target.value().trim() || this.target.value() == this.tips
            },_showTips: function() {
                if (this._checkValue()) {
                    var a = this.tips;
                    this.target.addClass(this.selClass);
                    this.target[0].style.cssText += this.selClassText;
                    this.target.value(a)
                }

            },_hideTips: function() {
                if (this._checkValue()) {
                    var a = 
                    this.selClassText;
                    this.target.removeClass(this.selClass);
                    this.target[0].style.cssText = this.target[0].style.cssText.replace(a, "", "g");
                    this.target[0].value = ""
                }
            },isEmpty: function() {
                return this._checkValue()
            },resetValue: function() {
                this.target.value("");
                this._showTips()
            },checkValue: function() {
                var a = this.selClass;
                (this.isEmpty() ? (this.target.value(this.tips), this.target.addClass(a)) : this.target.removeClass(a))
            },setRealValue: function() {
                this.isEmpty() && this.target.value("")
            },bindEvent: function() {
                this.target.bind("focus", 
                this._hideTips, {priority: 10});
                this.target.bind("blur", this._showTips, {priority: 100})
            }});
        c.mod.reg(d)
    })(cQuery);
    // tab-1.2.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(a) {
        function g(a, d) {
            this._opt = {options: {index: 0,tab: "li",panel: !1,trigger: "click",second: 3,ajax: !1,save: !0},style: {tab: "",panel: ""},listeners: {returnTab: function() {
                    },initEventCallback: function() {
                    }}};
            this.init(a, d)
        }
        var h = {name: "tab",version: "1.2",init: function() {
            },uninit: function() {
            },module: g};
        a.extend(g.prototype, {init: function(c, d) {
                a.extend(!0, this._opt, d);
                this.index = this._opt.options.index || 0;
                this._tab = a(c).find(this._opt.options.tab);
                this._panel = a(this._opt.options.panel);
                this._tabStyle = 
                this._opt.style.tab;
                this._panelStyle = this._opt.style.panel;
                this._oldTag = this.index;
                this.second = this._opt.options.second;
                this._fn = this._opt.listeners.returnTab;
                this._save = this._opt.options.save;
                this._timer;
                this._ajax = this._opt.options.ajax;
                this._objTag = "_" + c.id;
                ("auto" != this._opt.options.trigger ? this.addEvent(this._opt.options.trigger) : (this.autoHover(), this.autoFn(this.second)));
                if (this._save && a.isBack) {
                    var b = a.pageStorage.get(this._objTag) || 0;
                    this.index_set(b)
                } else
                    this.flag = this.index, ("array" == a.type(this._tabStyle) ? 
                    (b = a(this._tab[this.index])[0].className, a(this._tab[this.index])[0].className = this.currentCls(b, !0)) : a(this._tab[this.index]).addClass(this._tabStyle)), 0 != this._panel.length && ("object" == a.type(this._panelStyle) ? this.currentStyle(a(this._panel[this.index]), this._panelStyle, 0) : a(this._panel[this.index]).addClass(this._panelStyle));
                this._opt.listeners.initEventCallback && this._opt.listeners.initEventCallback()
            },currentStyle: function(a, d, b) {
                for (var e in d)
                    a.css(e, d[e][b])
            },currentCls: function(a, d) {
                return (d ? 
                a.replace(this._tabStyle[1], this._tabStyle[0]) : a.replace(this._tabStyle[0], this._tabStyle[1]))
            },index_get: function() {
                return this._oldTag
            },index_set: function(c) {
                this.flag = this.index = parseInt(c);
                ("array" == a.type(this._tabStyle) ? (c = a(this._tab[this.index])[0].className, a(this._tab[this.index])[0].className = this.currentCls(c, !0)) : a(this._tab[this.index]).addClass(this._tabStyle));
                0 != this._panel.length && ("object" == a.type(this._panelStyle) ? this.currentStyle(a(this._panel[this.index]), this._panelStyle, 0) : a(this._panel[this.index]).addClass(this._panelStyle));
                ("auto" != this._opt.options.trigger ? this.select(this.index) : this.select(this.index, !0))
            },second_set: function(a) {
                this.second = parseInt(a);
                this.autoFn(this.second)
            },addEvent: function(c, d, b) {
                for (var e = this, f = 0, k = this._tab.length; f < k; f++)
                    this._tab[f].i = f, a(this._tab[f]).bind(c, function() {
                        b && (b(), e.flag = this.i + 1);
                        e.select(this.i, d);
                        e._save && a.pageStorage.set(e._objTag, e.index_get())
                    })
            },select: function(c, d) {
                var b = this;
                if ("array" == a.type(this._tabStyle)) {
                    var e = a(b._tab[b._oldTag])[0].className;
                    a(b._tab[b._oldTag])[0].className = 
                    b.currentCls(e, !1);
                    e = a(b._tab[c])[0].className;
                    a(b._tab[c])[0].className = b.currentCls(e, !0)
                } else
                    a(b._tab[b._oldTag]).removeClass(b._tabStyle), a(b._tab[c]).addClass(b._tabStyle);
                0 != b._panel.length && ("object" == a.type(this._panelStyle) ? (b.currentStyle(a(b._panel[b._oldTag]), b._panelStyle, 1), b.currentStyle(a(b._panel[c]), b._panelStyle, 0)) : (a(b._panel[b._oldTag]).removeClass(b._panelStyle), a(b._panel[c]).addClass(b._panelStyle)));
                b._fn(c, b._tab[c]);
                b._oldTag = c;
                d && b.autoFn(b.second);
                this._ajax && b._tab[c].getAttribute("data-ajaxUrl") && 
                (e = b._tab[c].getAttribute("data-ajaxUrl"), "true" != e && a.ajax(e, {method: cQuery.AJAX_METHOD_POST,cache: !0,onsuccess: function(d, e) {
                        0 != b._panel.length && a(b._panel[c]).html(e);
                        b._tab[c].setAttribute("data-ajaxUrl", "true")
                    },onerror: b.errorAjax}))
            },autoFn: function(a) {
                var d = this;
                clearTimeout(this._timer);
                this._timer = setTimeout(function() {
                    d.flag >= d._tab.length && (d.flag = 0);
                    d.select(d.flag, !0);
                    d.flag++
                }, 1E3 * a)
            },autoHover: function() {
                var a = this;
                this.addEvent("mouseover", !1, function() {
                    clearTimeout(a._timer)
                });
                this.addEvent("mouseout", 
                !0)
            },errorAjax: function() {
            }});
        a.mod.reg(h)
    })(cQuery);
    // toggle-1.0.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(c) {
        function e(a, b) {
            this._init(a, b)
        }
        var d = {name: "toggle",version: "1.0",init: function() {
            },uninit: function() {
            },module: e};
        c.extend(e.prototype, {target: null,target_get: function() {
                return this.target
            },name: null,name_get: function() {
                return this.name
            },name_set: function(a) {
                this.name = a;
                this._checkEnable()
            },_init: function(a, b) {
                (!b.name || "string" != c.type(name) ? cQuery.error("mod (" + d.name + "," + d.version + ") init", "invalid name " + name) : (this.target = c(a), this.switchClass = b.switchClass, this.switchClassMod = b.switchClassMod, 
                this.switchEl = b.switchEl, this.action = b.action, this.tagname = b.tagname, this.callback = b.callback, c.bindMethod(this), this._initToggleConfig(), this.bindEvent()))
            },_initToggleConfig: function() {
                this.subtarget = this.target[0].getElementsByTagName(this.tagname);
                if (this.subtarget.length != this.switchEl.length)
                    return !1
            },_switchTab: function(a) {
                for (a = a.target; a.tagName != this.tagname; )
                    if (a = a.parentNode, null == a)
                        return !1;
                var b = a.getAttribute("data-index");
                this._setTab(b, a)
            },_setTab: function(a, b) {
                var d = this.switchEl[a], 
                e = this.switchEl[Math.abs(a % 2 - 1)];
                null != d && c(d).css("display", "");
                null != e && c(e).css("display", "none");
                c(b).addClass(this.switchClass);
                c(this.subtarget[Math.abs(a % 2 - 1)]).removeClass(this.switchClass);
                this.callback && this.callback.call(window, a)
            },bindEvent: function() {
                this.target.bind(this.action, this._switchTab)
            },resetTab: function(a) {
                this._setTab(a, this.subtarget[a])
            }});
        c.mod.reg(d)
    })(cQuery);
    // validate-1.1.js:
    ;
    window.replace = function() {
        return ''
    };
    (function(g) {
        function t(g, u) {
            this.init(g, u)
        }
        var v = {name: "validate",version: "1.1",init: function() {
            },uninit: function() {
            },module: t};
        g.extend(t.prototype, {init: function() {
                function m(a) {
                    (new Date).getTime()
                }
                function u(a) {
                    m();
                    if (!a)
                        throw new "\u4f20\u5165\u7684\u503c\u4e0d\u80fd\u4e3a\u7a7a\uff01";
                    if (!a.$obj)
                        throw new "\u4f20\u5165\u7684\u503c\u4e2d\u4e0d\u5b58$obj\u5c5e\u6027\uff01";
                    if (!g.isCDom(a.$obj))
                        throw new "\u4f20\u5165\u7684\u503c\u4e2d\uff1a$obj\u5c5e\u6027\u4e0d\u662fcDom\u5bf9\u8c61\uff01";
                    var b = g.copy(z);
                    return a = g.extend(b, a)
                }
                function t(a, b) {
                    m();
                    var c = b || function() {
                    }, d;
                    if (d = n[a]) {
                        var f = d.iframe, k = d.fun;
                        -1 == k.indexOf(c) && k.push(c);
                        if (d.loaded) {
                            d = 0;
                            for (var h = k.length; d < h; d++)
                                c = k[d], c(f);
                            k.length = 0
                        } else
                            setTimeout(arguments.callee, 200)
                    } else {
                        var e = document.createElement("iframe");
                        e.src = "about:blank";
                        e.id = "ifr_" + a;
                        e.frameBorder = "no";
                        e.border = "0";
                        e.marginWidth = "0";
                        e.marginHeight = "0";
                        e.backgroundColor = "transparent";
                        e.scrolling = "no";
                        e.setAttribute("group", a);
                        e.style.cssText = "position:absolute;allowTransparency='true';left:-9999px;top: -9999px;background-color:transparent;";
                        n[a] = {iframe: e,loaded: !1,elems: {},fun: []};
                        (e.attachEvent ? e.attachEvent("onload", function() {
                            n[a].loaded = !0;
                            c(e)
                        }) : e.onload = function() {
                            n[a].loaded = !0;
                            c(e)
                        });
                        document.body.appendChild(e)
                    }
                }
                function p() {
                    var a = n[r.group].elems[r.uid];
                    return a[a.length - 1]
                }
                function v() {
                    function a(a) {

                        var c = {leftTop: 5,rightTop: 5,rightBottom: 5,leftBottom: 5,x: 3,y: 3};
                        a = g.extend({}, c, a || {});
                        var e = a.leftTop + "px " + a.rightTop + "px " + a.rightBottom + "px " + a.leftBottom + "px", e = (b.opt.showArrow ? a.leftTop + "px " + a.rightTop + "px " + a.rightBottom + 
                        "px " + a.leftBottom + "px" : c.leftTop + "px " + c.rightTop + "px " + c.rightBottom + "px " + c.leftBottom + "px");
                        b.$box.css({MozBorderRadius: e,borderRadius: "" + e});
                        b.$tip.css({MozBorderRadius: e,borderRadius: "" + e})
                    }
                    m();
                    var b = p(), c = b.dot.arrow;
                    b.$box.css({MozBorderRadius: "0",borderRadius: "0"});
                    b.$tip.css({webkitBoxShadow: "0",MozBoxShadow: "0",boxShadow: "0"});
                    b.$arrow.css({left: "",right: "",bottom: "",top: "",marginTop: ""});
                    var d = b.dot.width, f = b.dot.height;
                    ("t" == c[0] ? (b.$arrow[0].style.marginTop = "-7px", ("l" == c[1] ? (b.$arrow[0].style.left = 
                    "0", a({leftTop: 0})) : ("m" == c[1] ? (b.$arrow[0].style.left = d / 2 - 8 + "px", a()) : "r" == c[1] && (b.$arrow[0].style.left = d - 16 + "px", a({rightTop: 0,x: -10}))))) : ("r" == c[0] ? (b.$arrow[0].style.right = "-7px", ("t" == c[1] ? (b.$arrow[0].style.marginTop = "0px", a({rightTop: 0,x: -10})) : ("m" == c[1] ? (b.$arrow[0].style.marginTop = f / 2 - 8 + "px", a({x: -10})) : "b" == c[1] && (b.$arrow[0].style.marginTop = f - 16 + "px", a({rightBottom: 0,x: -10,y: -10}))))) : ("b" == c[0] ? ("l" == c[1] ? (b.$arrow[0].style.right = d - 16 + "px", a({leftBottom: 0,y: -10})) : ("m" == c[1] ? (b.$arrow[0].style.right = 
                    d / 2 - 8 + "px", a({y: -10})) : "r" == c[1] && (b.$arrow[0].style.right = "0px", a({rightBottom: 0,x: -10,y: -10})))) : "l" == c[0] && (b.$arrow[0].style.left = "2px", ("t" == c[1] ? (b.$arrow[0].style.marginTop = "0px", a({leftTop: 0})) : ("m" == c[1] ? (b.$arrow[0].style.marginTop = f / 2 - 8 + "px", a()) : "b" == c[1] && (b.$arrow[0].style.marginTop = f - 16 + "px", a({leftBottom: 0,y: -10}))))))))
                }
                function w(a) {
                    "-9999px" != a.$tip[0].style.left && (a.$tip.css({left: "-9999px",top: "-9999px"}), a.show = !1, a.opt.hide(a.elem), a.opt.errorClass && a.opt.removeErrorClass && g(a.elem).removeClass(a.opt.errorClass));
                    a.iframe != a.doc && (a = a.iframe, "-9999px" != a.style.left && g(a).css({left: "-9999px",top: "-9999px",width: "auto",height: "auto"}))
                }
                function x(a) {
                    var b = 0;
                    if (a)
                        if ("string" == typeof a)
                            b = 2;
                        else if (g.isCDom(a))
                            b = 3;
                        else
                            throw new "hide::\u6ca1\u6709\u627e\u5230\u5408\u9002\u7684\u7c7b\u578b";
                    else
                        b = 1;
                    for (var c in n) {
                        var d = n[c].elems, f = !1;
                        if (3 == b)
                            if (d[a.uid()])
                                d = {temp: d[a.uid()]};
                            else
                                continue;
                        for (var k in d) {
                            for (var h = d[k], e = 0, l = h.length; e < l; e++)
                                if (1 == b || 3 == b)
                                    h[e].show && w(h[e]);
                                else if (2 == b && h[e].hideID == a && h[e].show) {
                                    w(h[e]);
                                    f = !0;
                                    break
                                }
                            if (f)
                                break
                        }
                    }
                }
                function A(a, b, c, d) {
                    function f(c) {
                        for (var d, e, f, g, m = 0, n = b.length; m < n; m++) {
                            d = b[m];
                            from = d[0];
                            f = d[1];
                            g = d[2];
                            d = d[3];
                            e = from;
                            f -= from;
                            var p, q = c;
                            p = (1 > (q /= 0.5) ? 0.5 * Math.pow(q, 2) : -0.5 * ((q -= 2) * q - 2));
                            e += f * p;
                            ("opacity" == g ? (a.style[g] = e, a.style.filter = "alpha(opacity=" + 100 * e + ")") : a.style[g] = e + d)
                        }
                    }
                    clearInterval(a._timer);
                    (function(b, c, d) {
                        var f, g, m = +new Date;
                        a._timer = setInterval(function() {
                            g = +new Date - m;
                            f = g / d;
                            (1 <= f ? (clearInterval(a._timer), c(f)) : b(f))
                        }, 13)
                    })(f, function(b) {
                        f(b);
                        d.call(a)
                    }, c)
                }
                function B(a, 
                b) {
                    a.style.opacity = b;
                    a.style.filter = "alpha(opacity=" + 100 * b + ")"
                }
                function C() {
                    m();
                    var a = p(), b = a.dot, c = b.width, d = b.height;
                    if (a.opt.showArrow)
                        var f = b.top + b.offsetY, b = b.left + b.offsetX;
                    else
                        f = b.top, b = b.left;
                    c = Math.floor(c);
                    d = Math.floor(d);
                    a.opt.errorClass && g(a.elem).addClass(a.opt.errorClass);
                    a.opt.animate && (B(a.$tip[0], 0), A(a.$tip[0], [[0, 1, "opacity", ""]], 680, function() {
                    }));
                    (a.iframe == a.doc ? a.$tip.css({top: f + "px",left: b + "px"}) : (a.$tip.css({left: "0px",top: "0px"}), g(a.iframe).css({top: f + "px",left: b + "px",width: c + 
                        "px",height: d + "px"})));
                    a.show = !0;
                    a.opt.show(a);
                    a.opt.isFocus && g(a.elem)[0].focus();
                    (a.opt.hideEvent ? (g(a.elem).unbind(a.opt.hideEvent, s), g(a.elem).bind(a.opt.hideEvent, s)) : (g(a.elem.ownerDocument).unbind("mousedown", s), g(a.elem.ownerDocument).bind("mousedown", s)));
                    a.opt.endshow(a)
                }
                function s() {
                    x();
                    g(this).unbind("mousedown", s)
                }
                function D(a) {
                    var b = "no";
                    (a ? b = "outer" : g.browser.isIE6 && (b = "inner"));
                    return b
                }
                function y(a) {
                    var b, c, d = a.iframe || document;
                    b = window;
                    c = document;
                    var f = a.opt, k = f.styles;
                    a.iframe && (b = a.iframe.contentWindow || 
                    a.iframe.window, c = b.document, a.iframe.style.zIndex = f.zIndex);
                    var h = c;
                    m();
                    if (!d.styles) {
                        if (g.browser.isIE)
                            h.createStyleSheet().cssText = k;
                        else {
                            var e = h.createElement("style");
                            e.type = "text/css";
                            e.textContent = k;
                            h.getElementsByTagName("head")[0].appendChild(e)
                        }
                        d.styles = !0
                    }
                    k = f.$obj[0];
                    h = g.uid(k);
                    r.uid = h;
                    e = r.group;
                    !a.iframe && !n[e] && (n[e] = {iframe: d,loaded: !0,elems: {},fun: []});
                    a = n[e].elems;
                    a[h] || (a[h] = []);
                    a[h].push({iframe: d,win: b,doc: c,opt: f,group: e,uid: h,hideID: f.hideID,elem: k,show: !1,dot: {left: null,top: null,
                            arrow: null,width: null,height: null,offsetX: null,offsetY: null},$tip: null,$box: null,$arrow: null,$loading: null,$content: null});
                    m();
                    m();
                    d = p();
                    b = d.opt;
                    c = b.classNames;
                    f = b.ids;
                    a = b.css;
                    k = d.group;
                    h = d.uid;
                    0 == g("#" + h, d.doc).length && (e = d.doc.createElement("div"), e.innerHTML = g.tmpl.render(b.templs.tipTempl, {tipId: h,boxId: f.boxId,arrowId: f.arrowId,loadingId: f.loadingId,contentId: f.contentId,group: k,tip: c.tip,box: c.box,boxType: c.boxType,boxArrow: c.boxArrow,arrow: c.arrow,maxWidth: a.maxWidth,minWidth: a.minWidth,minHeight: a.minHeight,
                        content: c.tipContent}), d.doc.body.appendChild(e.firstChild));
                    d.$tip = g("#" + h, d.doc);
                    d.$box = g("#" + f.boxId, d.$tip[0]);
                    d.$arrow = g("#" + f.arrowId, d.$tip[0]);
                    d.$loading = g("#" + f.loadingId, d.$tip[0]);
                    d.$content = g("#" + f.contentId, d.$tip[0]);
                    d.$tip[0].style.zIndex = b.zIndex;
                    m();
                    d = p().group;
                    if (d = n[d]) {
                        var d = d.elems, l;
                        for (l in d) {
                            b = d[l];
                            c = 0;
                            for (f = b.length; c < f; c++)
                                b[c].show && w(b[c])
                        }
                    }
                    m();
                    l = p();
                    d = g.tmpl.render(l.opt.temp, {txt: l.opt.data});
                    l.$content.html(d);
                    m();
                    l = p();
                    f = l.opt.position.split("_");
                    f[0].substring(0, 
                    1);
                    f[0].substring(1, 2);
                    d = [f[1].substring(0, 1), f[1].substring(1, 2)];
                    b = d[0];
                    l.$box[0].className = l.$box[0].className.replace((/[trblc]$/), b);
                    (l.opt.showArrow ? ("c" == b ? l.$arrow[0].style.display = "none" : (l.$arrow[0].style.display = "block", l.$arrow[0].className = l.$arrow[0].className.replace((/[trblc]$/), b))) : l.$arrow[0].style.display = "none");
                    b = parseInt(l.$tip[0].offsetWidth, 10);
                    c = parseInt(l.$tip[0].offsetHeight, 10);
                    e = l.opt.$obj.offsetA();
                    k = e.left;
                    h = e.top;
                    a = e.width;
                    e = e.height;
                    k = {tl: {left: k,top: h,offsetX: -8,offsetY: 0},
                        tm: {left: k - b / 2,top: h,offsetX: 0,offsetY: 0},tr: {left: k - b,top: h,offsetX: 8,offsetY: 0},bl: {left: k,top: h - c,offsetX: -5,offsetY: 0},bm: {left: k - b / 2,top: h - c,offsetX: 0,offsetY: 0},br: {left: k - b,top: h - c,offsetX: 4,offsetY: 0},lt: {left: k,top: h,offsetX: 0,offsetY: -8},lm: {left: k,top: h - c / 2,offsetX: 0,offsetY: 0},lb: {left: k,top: h - c,offsetX: 0,offsetY: 4},rt: {left: k - b,top: h,offsetX: 0,offsetY: -8},rm: {left: k - b,top: h - c / 2,offsetX: 0,offsetY: 0},rb: {left: k - b,top: h - c,offsetX: 0,offsetY: 4},center: {left: k - b / 2,top: h - c / 2,offsetX: -4,offsetY: 0}}[f[1]];
                    f = {bl: [0, e, "bottom", "Left"],bm: [a / 2, e, "bottom", "Middle"],br: [a, e, "bottom", "Right"],tl: [0, 0, "top", "Left"],tm: [a / 2, 0, "top", "Middle"],tr: [a, 0, "top", "Right"],lt: [0, 0, "left", "Top"],lm: [0, e / 2, "left", "Middle"],lb: [0, e, "left", "Bottom"],rt: [a, 0, "right", "Top"],rm: [a, e / 2, "right", "Middle"],rb: [a, e, "right", "Bottom"],center: [a / 2, e / 2, "center", "center"]}[f[0]];
                    l.dot = {left: k.left + f[0],top: k.top + f[1],arrow: d,width: b,height: c,offsetX: k.offsetX,offsetY: k.offsetY};
                    v();
                    C()
                }
                var r = {uid: 0,group: ""}, n = {}, z = {isScroll: !0,zIndex: 999,
                    animate: !1,errorClass: "f_error",removeErrorClass: !1,hideEvent: null,isFocus: !1,iframe: !1,srollHeight: 0,srollWidth: 0,show: function() {
                    },endshow: function(a) {
                        var b = a.elem;
                        a = a.opt;
                        var c = g(b).offsetA(), d = a.srollWidth || g(b)[0].offsetWidth, b = a.srollHeight || g(b)[0].offsetHeight;
                        a.isScroll && window.scrollTo(c.left - d - 5, c.top - b - 5)
                    },hide: function() {
                    },position: "rm_lm",templs: {tipTempl: '<div id=${tipId} class="${tip}"  group=${group} style="min-width:${minWidth}px; width:${maxWidth}px;_width:${minWidth}px; width:auto !important;max-width:${maxWidth}px;overflow:hidden;display:block;z-index:99;margin:0;padding:0;left:0px;top:0px;overflow:hidden;position:absolute;"><div class="${box} ${boxType} ${boxArrow}" id=${boxId}><b class="${arrow}" id=${arrowId}></b><div class="${loading}" id=${loadingId}>${loadingImg}</div><div class=${content} id=${contentId}></div></div>'},
                    css: {maxWidth: "260",minWidth: "50"},group: "group",classNames: {tip: "tuna_jmpinfo",box: "base_jmp",boxType: "jmp_alert",boxArrow: "base_jmp_t",arrow: "tri_t",loading: "jmp_loading",tipContent: "jmp_content"},ids: {boxId: "boxId",arrowId: "arrowId",loadingId: "loadingId",contentId: "contentId"},temp: '<div class="jmp_bd">${txt}</div>',data: "\u63d0\u793a\u4fe1\u606f!",showArrow: !0,styles: ".tuna_jmpinfo {margin: 20px;color: #333;font: 12px/2 Arial,Tahoma,simsun;-webkit-text-size-adjust: none;}.tuna_jmpinfo ul,li{list-style: none;}.tuna_jmpinfo a{color: #00c;cursor: pointer;text-decoration: none;}.tuna_jmpinfo a: hover{color: #f00;text-decoration: underline;}.tuna_jmpinfo .font16{font-size: 16px;}.tuna_jmpinfo .jmp_hd{height:30px; padding-left:10px; background:url(http://pic.ctrip.com/common/un_base_btn.png) repeat-x 0 -390px; font-size:12px; line-height:30px; color:#333;} .tuna_jmpinfo .jmp_hd h3{font-size: 12px;} .tuna_jmpinfo .jmp_bd{padding: 2px 3px;}  .tuna_jmpinfo .jmp_alert{border: 1px solid #ffb533; background: #fff5d1;} .tuna_jmpinfo .base_jmp b{position: absolute; width: 16px; height: 16px; background-image: url(http://pic.ctrip.com/common/un_jmp_tri.png); background-repeat: no-repeat; overflow: hidden;} .tuna_jmpinfo .base_jmp_t{margin-top: 8px;} .tuna_jmpinfo .base_jmp_r{margin-right: 8px;} .tuna_jmpinfo .base_jmp_b{margin-bottom: 7px;} .tuna_jmpinfo .base_jmp_l{margin-left: 8px;} .tuna_jmpinfo .base_jmp_t b{margin-top: -7px;} .tuna_jmpinfo .base_jmp_r b{margin-top: 10px; right: 0;} .tuna_jmpinfo .base_jmp_b b{bottom: -8px;} .tuna_jmpinfo .base_jmp_l b{margin-top: 10px; left: 9px;}  .tuna_jmpinfo .jmp_title .tri_b{background-position: -32px -32px;} .tuna_jmpinfo .jmp_alert .tri_t{background-position: -16px 0;} .tuna_jmpinfo .jmp_alert .tri_r{background-position: -16px -16px;} .tuna_jmpinfo .jmp_alert .tri_b{background-position: -16px -32px;} .tuna_jmpinfo .jmp_alert .tri_l{background-position: -16px -48px;} .tuna_jmpinfo .jmp_table .tri_t{background-position: -32px 0;}.f_error {background-color: #FFF7D9 !important; border-color: #D80000 #E50000 #E50000 #D80000 !important; border-style: solid; border-width: 1px;}"};
                this.show = function(a) {
                    m();
                    if (a = u(a)) {
                        var b = D(a.iframe), c = b + "_" + a.group;
                        r.group = c;
                        ("no" != b ? t(c, function(b) {
                            y({iframe: b,opt: a})
                        }) : y({iframe: null,opt: a}))
                    }
                    return this
                };
                this.hide = function(a) {
                    m();
                    x(a)
                }
            }});
        g.mod.reg(v)
    })(cQuery);
});
