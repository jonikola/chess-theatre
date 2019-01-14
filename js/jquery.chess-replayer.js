/*
 Chess Replayer 1.2.0
 Copyright (c) 2012 Andrew Hoy
 http://github.com/andrewphoy/chess-replayer
 MIT License
*/
(function () {
    var h = !0,
        i = null,
        j = !1,
        l = jQuery,
        q = window,
        s = document;

    function t(a, b, c, d, e, f, g) {
        this.G = a;
        this.ab = b;
        this.move = c;
        this.o = d;
        this.Fa = e;
        this.pa = f;
        this.Z = g;
        this.j = [];
        this.children = [];
        this.qa = function (a) {
            "$" == a.charAt(0) && (a = a.substring(1));
            switch (parseInt(a, 10)) {
            case 1:
                return "!";
            case 2:
                return "?";
            case 3:
                return "!!";
            case 4:
                return "??";
            case 5:
                return "!?";
            case 6:
                return "?!";
            case 7:
            case 8:
                return "&#x25a1;";
            case 10:
                return "=";
            case 13:
                return "&infin;";
            case 14:
                return "&#x2a72;";
            case 15:
                return "&#x2a71;";
            case 16:
                return "&plusmn;";
            case 17:
                return "&#8723;";
            case 18:
                return "&#43;&minus;";
            case 19:
                return "&minus;&#43;";
            case 22:
            case 23:
                return "&#x2a00;";
            case 32:
            case 33:
                return "&#x27F3;";
            case 36:
            case 37:
                return "&#x2192;";
            case 40:
            case 41:
                return "&#x2191;";
            case 132:
            case 133:
                return "&#x21c6;";
            case 140:
                return "&#x2206;";
            case 142:
                return "&#x2313;";
            case 145:
                return "RR";
            case 146:
                return "N";
            case 239:
                return "&#x21d4;";
            case 240:
                return "&#x21d7;";
            case 242:
                return "&#x27eb;";
            case 243:
                return "&#x27ea;";
            case 244:
                return "&#x2715;";
            case 245:
                return "&#x22a5;";
            default:
                return ""
            }
        };
        this.q = function (a) {
            var b = "";
            a && (b += this.ab +
                " ");
            b += this.move;
            if (this.pa)
                for (var a = this.pa.split(" "), b = b + this.qa(a[0]), c = 1; c < a.length; c++) b += " " + this.qa(a[c]);
            return b
        };
        this.toString = function () {
            return this.q(j)
        };
        this.ia = function (a, b, c) {
            c = c || 1 == this.Z % 2 || 0 == this.o;
            a = a = "<span id='" + a + "move" + this.G + "' class='move move" + b + "'>";
            return a += this.q(c) + "</span>"
        }
    }

    function u(a, b) {
        this.c = a;
        this.c.id || (this.c.id = "cr" + Math.random().toString(36).substring(5));
        this.h = l(a);
        this.options = b;
        this.ja = this.h.data("replayer-options");
        this.a = {
            headers: [],
            result: "",
            e: 0,
            i: 1,
            D: "",
            J: 0,
            ob: 0,
            position: [],
            da: -1,
            R: -1,
            pb: "KQ",
            nb: "kq",
            X: j,
            M: j,
            g: []
        };
        this.d = {
            B: j,
            p: j,
            C: j,
            ka: 0,
            m: 0,
            direction: -1
        }
    }
    u.prototype = {
        K: {
            fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            fenOnly: j,
            size: "small",
            lightColor: "#CCCCCC",
            darkColor: "#999999",
            startPly: j,
            boardOnly: j,
            hideTitle: j,
            hideControls: j,
            hideAnnotations: j,
            showAnnotations: j,
            scrollOnEnd: j,
            startFlipped: j
        },
        size: {
            z: 45,
            w: 60,
            v: 80
        },
        shift: {
            left: {
                z: 3,
                w: 10,
                v: 20
            },
            top: {
                z: 2,
                w: 8,
                v: 20
            }
        },
        f: {
            ya: "((?:\\s*\\$\\d+)*)(\\s*\\{[^\\}]*\\})*",
            Ka: /(0-1|1-0|1\/2-1\/2|\*)\s*$/,
            N: /\[%draw\s+(.*?)\]/g,
            Xa: /\[%draw\s+(.*?)\]/,
            Ga: /\{([^}]*?)(\()(.*?)\}/g,
            Ha: /\{([^}]*?)(\))(.*?)\}/g,
            Ca: /^O-O/,
            Da: /^O-O-O/,
            ua: /^([KQBNR])/,
            fb: /(.*)([a-h])([1-8])/,
            gb: /^[KQBNR]([a-h])?([1-8])?x?[a-h][1-8]/,
            sa: /^([a-h])([1-8])/,
            ra: /^([a-h])x([a-h])([1-8])/,
            ta: /=([QBNR])/
        },
        A: {
            kb: [-16, -1, 1, 16],
            Va: [-33, -31, -18, -14, 14, 18, 31, 33],
            Ba: [-17, -15, 15, 17],
            jb: [-17, -15, 15, 17, -16, -1, 1, 16],
            Ua: [-17, -16, -15, -1, 1, 15, 16, 17]
        },
        Ra: function () {
            this.ba = l.extend({}, this.options, this.ja);
            this.b = l.extend({}, this.K, this.options, this.ja);
            this.Ea();
            this.cb();
            this.hb();
            this.ib();
            this.Aa();
            this.$a();
            this.za()
        },
        za: function () {
            var a = this;
            this.h.keydown(function (b) {
                return 39 == b.which ? (a.P(j), j) : 37 == b.which ? (a.F(j), j) : 40 == b.which && a.d.p ? (b.preventDefault(), a.Ya(), j) : 38 == b.which && a.d.p ? (b.preventDefault(), a.Za(), j) : 70 == b.which ? (a.U(), j) : 83 == b.which || 36 == b.which || 72 == b.which ? (a.na(), j) : 69 == b.which || 35 == b.which ? (b.ctrlKey ? a.O() : a.la(), j) : 27 == b.which ? (a.t(), a.u(), a.S(), j) : h
            });
            l(".board,.moves", this.c).bind("mousewheel DOMMouseScroll", function (b) {
                var c = j;
                (c = 0 < (-b.originalEvent.detail || b.wheelDelta || b.originalEvent.wheelDelta) ? a.F(j) : a.P(j)) &&
                    b.preventDefault();
                return !c && a.b.scrollOnEnd
            });
            l(".next", this.c).click(function () {
                a.P(j);
                return j
            });
            l(".back", this.c).click(function () {
                a.F(j);
                return j
            });
            l(".start", this.c).click(function () {
                a.na();
                return j
            });
            l(".flip", this.c).click(function () {
                a.U();
                return j
            });
            l(".end", this.c).click(function () {
                a.O();
                return j
            });
            l(".move", this.c).click(function () {
                var b = this.id.substring(a.c.id.length + 4);
                "-end" == b ? a.O() : a.oa(b);
                return j
            });
            l(".arrow", this.c).click(function () {
                a.mb();
                return j
            })
        },
        Ea: function () {
            this.b.size =
                this.b.size.toLowerCase();
            "small" != this.b.size && "large" != this.b.size && (this.b.size = "medium")
        },
        V: function () {
            return "small" == this.b.size ? this.shift.left.z : "large" == this.b.size ? this.shift.left.v : this.shift.left.w
        },
        W: function () {
            return "small" == this.b.size ? this.shift.top.z : "large" == this.b.size ? this.shift.top.v : this.shift.top.w
        },
        l: function () {
            return this.h.find(".board")
        },
        aa: function () {
            return this.h.find(".title")
        },
        fa: function () {
            return this.h.find(".controls")
        },
        n: function () {
            return this.h.find(".moves")
        },
        H: function () {
            return this.h.find(".notes")
        },
        lb: function (a, b, c) {
            if (!this.b.boardOnly && !this.b.hideAnnotations) {
                if (this.a.M) {
                    l(".media-annotation", this.h).remove();
                    var d = this.ea();
                    if (d !== i) {
                        var e = 8 * this.k();
                        d.clearRect(0, 0, e, e)
                    }
                }
                if (0 == a.length) this.H().html("");
                else if (this.a.M)
                    if (b) a = this.ga(a), this.H().html(a);
                    else var f = this,
                g = setInterval(function () {
                    l(".chess-piece", f.l()).is(":animated") || (clearInterval(g), c == f.a.e && (a = f.ga(a), f.H().html(a)))
                }, 100);
                else this.H().html(a)
            }
        },
        ga: function (a) {
            for (var b;
                (b = this.f.N.exec(a)) !== i;) {
                b = b[1].split(",");
                if (2 > b.length) break;
                switch (b[0]) {
                case "full":
                case "square":
                    if (2 <= b.length) {
                        var c = this.k(),
                            d = b[1];
                        if (2 == d.length) {
                            var e = (d.toLowerCase().charCodeAt(0) - 97) * c,
                                d = (8 - parseInt(d.charAt(1), 10)) * c,
                                f = "red";
                            2 < b.length && (f = b[2]);
                            l('<div class="media-annotation" />').appendTo(this.l()).css({
                                "background-color": f,
                                width: c,
                                height: c,
                                "min-width": c,
                                "min-height": c,
                                top: d + "px",
                                left: e + "px"
                            })
                        }
                    }
                    break;
                case "arrow":
                case "line":
                    if (3 <= b.length && (e = this.ea(), e !== i)) {
                        c = this.k();
                        e.lineWidth = c / 8;
                        var g = b[1],
                            f = b[2];
                        if (2 !== g.length ||
                            2 !== f.length) break;
                        var d = (g.toLowerCase().charCodeAt(0) - 97) * c + c / 2,
                            m = (8 - parseInt(g.charAt(1), 10)) * c + c / 2,
                            g = (f.toLowerCase().charCodeAt(0) - 97) * c + c / 2,
                            k = (8 - parseInt(f.charAt(1), 10)) * c + c / 2,
                            f = c / 4,
                            n = g - d,
                            r = k - m,
                            p = Math.sqrt(n * n + r * r),
                            c = f * n / p,
                            p = f * r / p,
                            f = "red";
                        3 < b.length && (f = b[3]);
                        e.strokeStyle = f;
                        e.beginPath();
                        e.moveTo(d + c, m + p);
                        e.lineTo(g - 2 * c, k - 2 * p);
                        e.stroke();
                        b = Math.atan2(r, n);
                        e.beginPath();
                        e.moveTo(g - c, k - p);
                        e.lineTo(g - c - 25 * Math.cos(b - Math.PI / 10.5), k - p - 25 * Math.sin(b - Math.PI / 10.5));
                        e.lineTo(g - c - 25 * Math.cos(b + Math.PI /
                            10.5), k - p - 25 * Math.sin(b + Math.PI / 10.5));
                        e.fillStyle = f;
                        e.fill()
                    }
                }
            }
            return a = a.replace(this.f.N, "")
        },
        ea: function () {
            var a = s.getElementById(this.c.id + "canv");
            return a !== i && a.getContext && a.getContext("2d") ? a.getContext("2d") : i
        },
        k: function () {
            return "small" == this.b.size ? this.size.z : "large" == this.b.size ? this.size.v : this.size.w
        },
        t: function () {
            l(s).unbind("click.replayer");
            l(".context-menu", this.c).unbind("click");
            l(".context-menu", this.c).remove();
            this.d.B = j
        },
        mb: function () {
            if (this.d.B) this.t();
            else {
                this.d.C &&
                    this.u();
                l(".arrow", this.c).append('<div class="modal context-menu"><ul><li class="game">Copy Game</li><li class="pos">Copy Position</li><li class="startpos">Copy Start Position</li></ul>');
                this.d.B = h;
                l(".context-menu", this.c).css({
                    top: 10,
                    left: 25,
                    "font-size": "small"
                });
                s.getSelection().removeAllRanges();
                var a = this;
                l(".context-menu ul li", this.c).click(function (b) {
                    var c = l(this).attr("class");
                    b.stopPropagation();
                    a.t();
                    switch (c) {
                    case "game":
                        a.$("Copy this pgn to your computer", a.Qa());
                        break;
                    case "pos":
                        a.$("Copy this FEN to your computer",
                            a.Ma());
                        break;
                    case "startpos":
                        a.$("Copy this FEN to your computer", a.b.fen)
                    }
                });
                l(".context-menu", this.c).click(function () {
                    return j
                });
                l(s).bind("click.replayer", function (b) {
                    a.t();
                    l(this).unbind(b)
                })
            }
        },
        u: function () {
            l(s).unbind("click.replayer");
            l(".copy-paste", this.c).remove();
            this.d.C = j
        },
        $: function (a, b) {
            this.d.C && this.u();
            this.l().append('<div class="modal copy-paste"><p>' + a + "</p><textarea>" + b + "</textarea><button>Done</button></div>");
            this.d.C = h;
            l(".copy-paste", this.c).css({
                position: "fixed",
                left: q.screen.width /
                    2 - 215,
                top: q.screen.height / 2 - 150,
                width: 430,
                height: 300
            });
            l(".copy-paste textarea", this.c).select();
            var c = this;
            l(".copy-paste", this.c).click(function () {
                return j
            });
            l(".copy-paste button", this.c).click(function () {
                c.u()
            });
            l(s).bind("click.replayer", function (a) {
                c.u();
                l(this).unbind(a)
            })
        },
        ib: function () {
            if (!this.b.boardOnly) {
                var a = this.h.width(),
                    b = 8 * this.k();
                l(".moves", this.c).width(a - b - 10);
                l(".moves", this.c).height(b);
                a = {
                    r: []
                };
                this.q(0, a, 0, h, h);
                this.n().html(a.r.join(" "))
            }
        },
        q: function (a, b, c, d, e) {
            a = this.a.g[a];
            d || b.r.push(a.ia(this.c.id, c, e));
            d = a.children.length;
            if (1 == d) this.q(a.children[0], b, c, j, j);
            else if (0 == d) 0 < c ? (b.r.push(")"), 1 == c && b.r.push("<br />")) : b.r.push("<span id='" + this.c.id + "move-end' class='move move0'>" + this.a.result + "</span>");
            else {
                d = a.children[a.children.length - 1];
                b.r.push(this.a.g[d].ia(this.c.id, c, j));
                0 == c && b.r.push("<br />");
                for (e = 0; e < a.children.length - 1; e++) b.r.push("("), this.q(a.children[e], b, c + 1, j, h);
                this.q(d, b, c, h, j)
            }
        },
        getHeader: function (a) {
            if (this.b.headers == i) return i;
            a = a.toLowerCase();
            return this.b.headers.hasOwnProperty(a) ? this.b.headers[a] : i
        },
        Pa: function (a) {
            var b = this.getHeader("Title");
            if (b != i) return b;
            if (this.b.fenOnly) return i;
            var a = a == h ? "<br />" : ", ",
                c = this.getHeader("White") || "NN",
                d = this.getHeader("Black") || "NN",
                b = this.getHeader("Event"),
                e = this.getHeader("Date") || this.getHeader("EventDate") || this.getHeader("UTCDate"),
                c = c + " - " + d;
            b != i && "?" !== b && (c += a + b);
            e != i && 0 < e.length && (e.match(/^[-?\.]*$/) || (c += a + e.replace(/\./g, "-")));
            this.a.result != i && 0 < this.a.result.length && "*" !== this.a.result &&
                (c += a + this.a.result);
            return c
        },
        cb: function () {
            var a = l.trim(this.h.html());
            this.ca(a) ? (this.b.fen = a, this.b.boardOnly = h, this.b.hideControls = h, this.b.hideAnnotations = h, this.b.fenOnly = h, this.a.g = this.va().s) : (this.b.pgn = a, this.b.pgn && (this.eb(), this.f.Xa.test(a) && (this.a.M = h)));
            this.bb()
        },
        ca: function (a) {
            return /^\s*([rnbqkpRNBQKP1-8]+\/){7}([rnbqkpRNBQKP1-8]+)\s[bw-]\s(([a-hkqA-HKQ]{1,4})|(-))\s(([a-h][36])|(-))\s\d+\s\d+\s*$/.test(a)
        },
        eb: function () {
            var a = this.b.pgn;
            if ("[" == a.charAt(0)) {
                var b = a.split("\n\n");
                if (!(2 > b.length)) {
                    for (var a = /\[([\w\d]+)\s+"(.*?)"/g, c, d = {}, e = {}; c = a.exec(b[0]);) e[c[1]] = c[2], d[c[1].toLowerCase()] = c[2];
                    this.b.rawHeaders = e;
                    this.b.headers = d;
                    2 < b.length ? (b.splice(0, 1), a = b.join(" ")) : a = b[1];
                    b = this.getHeader("fen");
                    b != i && this.ca(b) && (this.b.fen = b)
                }
            }
            b = a;
            this.b.pgnBody = b;
            a = this.va();
            b = b.replace(/(\r\n|\n|\r)/gm, " ");
            b = b.replace(this.f.Ga, "{$1&lpar;$3}");
            b = b.replace(this.f.Ha, "{$1&rpar;$3}");
            b = this.Wa(b);
            b = b.replace("&lpar;", "(");
            b = b.replace("&rpar;", ")");
            c = this.f.Ka.exec(b);
            c != i && 2 <=
                c.length && (this.a.result = c[1]);
            d = -1;
            c = /(\d+)(\.+)/.exec(b);
            c != i && (d = 2 * c[1], "." == c[2] && (d -= 1));
            0 < d && this.T(a, 0, d, b);
            this.a.g = a.s
        },
        va: function () {
            var a = {
                s: [],
                e: 0
            };
            a.s[0] = new t(0, i, i, -1, "", i, i);
            return a
        },
        Wa: function (a) {
            for (var b = 0, c = h, d = /\(([^(]*?)\)/g; c;) a.match(d) && (a = a.replace(d, "%%" + b + "% $1 %" + b + "%%")), c = j, a.match(d) && (c = h, b += 1);
            return a
        },
        T: function (a, b, c, d) {
            for (var e = this.Y(c), f = RegExp("%%(\\d+)%\\s*" + e + "\\s*(\\w\\S+)" + this.f.ya + "(?:\\s+(.*?))?%\\1%%", "g"), g, m;
                (g = f.exec(d)) !== i;) {
                m = l.trim(g[2]);
                var k = "",
                    n = "";
                g[3] && (n = l.trim(g[3]));
                if (g[4]) {
                    for (k = l.trim(g[4]);
                        "{" === k.charAt(0);) k = k.substr(1);
                    for (;
                        "}" === k.charAt(k.length - 1);) k = k.slice(0, -1);
                    0 < k.length && 0 < k.replace(this.f.N, "").length && (this.a.X = h)
                }
                a.e++;
                a.s[a.e] = new t(a.e, e.replace(/\\/g, ""), m, b, k, n, c);
                a.s[b].children.push(a.e);
                g = g[5];
                g != i && (g = l.trim(g), 0 < g.length && isNaN(g.charAt(0)) && (g = this.Y(c + 1).replace(/\\/g, "") + " " + g), this.T(a, a.e, c + 1, g))
            }
            d = d.replace(f, "");
            g = RegExp("(?:^|\\s+)" + e + "\\s*(\\w\\S+)" + this.f.ya + "(?:\\s+(.*)|($))", "m").exec(d);
            if (g != i) {
                m = l.trim(g[1]);
                n = k = "";
                g[2] && (n = l.trim(g[2]));
                if (g[3]) {
                    for (k = l.trim(g[3]);
                        "{" === k.charAt(0);) k = k.substr(1);
                    for (;
                        "}" === k.charAt(k.length - 1);) k = k.slice(0, -1);
                    0 < k.length && 0 < k.replace(this.f.N, "").length && (this.a.X = h)
                }
                a.e++;
                a.s[a.e] = new t(a.e, e.replace(/\\/g, ""), m, b, k, n, c);
                a.s[b].children.push(a.e);
                g = g[4];
                g != i && (g = l.trim(g), 0 < g.length && isNaN(g.charAt(0)) && (g = this.Y(c + 1).replace(/\\/g, "") + " " + g), this.T(a, a.e, c + 1, g))
            }
        },
        Y: function (a) {
            var b = Math.ceil(a / 2).toString(),
                c = "\\.";
            0 == a % 2 && (c = "\\.\\.\\.");
            return b + c
        },
        bb: function () {
            if (this.ca(this.b.fen)) {
                for (var a = this.b.fen.split(" "), b = a[0].split("/"), c = 112, d = 0, e = 0; 8 > e; e++) {
                    for (var f = d = 0; 8 > f; f++) {
                        var g = b[e].charAt(d);
                        if (g != i && isNaN(g)) {
                            var m = g.toLowerCase() == g ? "b" : "w";
                            this.a.position[c + f] = m + g.toLowerCase();
                            "k" == g.toLowerCase() && ("w" == m ? this.a.da = c + f : this.a.R = c + f)
                        } else f += Math.max(+g - 1, 0);
                        d++
                    }
                    c -= 16
                }
                "b" == a[1] && (this.a.i = -1)
            }
        },
        Qa: function () {
            if (this.b.fenOnly) return "";
            for (var a = "", b = "Event Site Date Round White Black Result".split(" "), c = 0; 7 > c; c++) {
                var d =
                    this.getHeader(b[c]);
                if (d == i || 0 == d.length) d = "?";
                a += "[" + b[c] + ' "' + d + '"]\n'
            }
            var c = this.b.rawHeaders,
                e;
            for (e in c) 0 > l.inArray(e, b) && c.hasOwnProperty(e) && (a += "[" + e + ' "' + c[e] + '"]\n');
            return a + "\n" + this.b.pgnBody
        },
        Ma: function () {
            return this.Na()
        },
        Na: function () {
            for (var a = "", b = 112, c = 0; 0 <= b;)
                if (0 < (b & 136)) 0 < c && (a += c.toString(10), c = 0), b -= 24, 0 <= b && (a += "/");
                else {
                    if (this.a.position[b] != i && 0 < this.a.position[b].length) {
                        0 < c && (a += c.toString(), c = 0);
                        var d = this.a.position[b],
                            a = a + ("w" == d.charAt(0) ? d.charAt(1).toUpperCase() :
                                d.charAt(1).toLowerCase())
                    } else c++;
                    b++
                }
            return a
        },
        hb: function () {
            this.h.empty();
            this.h.attr("tabindex", -1);
            if (!this.b.hideTitle && 0 == this.aa().size()) {
                var a = this.Pa(j);
                a != i && 0 < a.length && (this.h.append('<div class="title"></div>'), this.aa().html(a), this.aa().append('<div class="arrow" />'))
            }
            0 == this.l().size() && (this.h.append('<div class="board"></div>'), (this.b.boardOnly || this.b.hideAnnotations) && this.h.width(8 * this.k()));
            this.b.boardOnly || 0 == this.n().size() && this.h.append('<div class="moves"></div>');
            this.b.hideControls || 0 == this.fa().size() && this.h.append('<div class="controls"></div>');
            !this.b.boardOnly && !this.b.hideAnnotations && 0 == this.H().size() && (this.a.X || this.b.showAnnotations) && this.h.append('<div class="notes"></div>');
            var a = this.l(),
                b = this.k(),
                c = this.b.lightColor,
                d = this.b.darkColor,
                e, f;
            f = "<table class='chess-replayer-board'>";
            for (var g = 7; 0 <= g; g--) {
                f += "<tr>";
                for (var m = 0; 7 >= m; m++) e = 0 == (m + g) % 2 ? d : c, f += "<td class='transparent' style='min-width: " + b + "px; width: " + b + "px; min-height: " + b + "px; height: " + b + "px; background-color: " +
                    e + ";'></td>";
                f += "</tr>"
            }
            f += "</table>";
            this.h.addClass("chess-replayer");
            a.html(f);
            !this.b.boardOnly && !this.b.hideAnnotations && this.a.M && (a = 8 * b, l('<canvas id="' + (this.c.id + "canv") + '" height="' + a + '" width = "' + a + '"></canvas>').appendTo(this.l()).css({
                width: a,
                height: a
            }));
            this.fa().html('<a class="btn btn-default start" href="#"><span class="glyphicon glyphicon-step-backward"></span> </a><a class="btn btn-default back" href="#"><span class="glyphicon glyphicon-backward"></span> </a><a class="btn btn-default flip" href="#"><span class="glyphicon glyphicon-retweet"></span> </a><a class="btn btn-default next" href="#"><span class="glyphicon glyphicon-forward"></span> </a><a class=" btn btn-default end" href="#"><span class="glyphicon glyphicon-step-forward"></span> </a>')
        },
        Aa: function () {
            for (var a = this.k(), b = this.l(), c = this.V(), d = this.W(), e = 7; 0 <= e; e--)
                for (var f = 0; 7 >= f; f++) {
                    var g = 16 * e + f,
                        m = this.a.position[g];
                    if (m != i) {
                        g = this.c.id + g;
                        b.append("<div id='" + g + "' class='" + m + "-" + this.b.size + " chess-piece'></div>");
                        var m = a * (7 - e) + d,
                            k = a * f + c;
                        l("#" + g).css({
                            position: "absolute",
                            top: m,
                            left: k,
                            height: a + "px",
                            width: a + "px"
                        })
                    }
                }
        },
        U: function () {
            var a = this.k(),
                b = this.l(),
                c = 7 * a,
                d = this.V(),
                e = this.W(),
                f, g, m, k, n = this,
                r = setInterval(function () {
                    l(".chess-piece", b).is(":animated") || (clearInterval(r), b.children(".chess-piece").each(function () {
                        f =
                            parseInt(l(this).css("top"), 10) - e;
                        g = parseInt(l(this).css("left"), 10) - d;
                        k = c - g + d;
                        m = c - f + e;
                        l(this).css({
                            position: "absolute",
                            top: m,
                            left: k
                        })
                    }), n.d.direction *= -1)
                }, 100)
        },
        $a: function () {
            var a = j;
            this.b.startFlipped && (a = h);
            if (!("startFlipped" in this.ba)) {
                -1 == this.a.i && (a = h);
                var b = this.getHeader("StartFlipped");
                b != i && (a = "true" == b.toLowerCase() || "1" == b ? h : j)
            }
            var b = 0,
                c = "startPly" in this.ba ? parseInt(this.ba.startPly, 10) : parseInt(this.getHeader("StartPly"), 10);
            c != i && 0 < c && (b = c);
            a && this.U();
            if (0 < b && (c = this.a.g[0], this.a.g[c.children[c.children.length -
                1]].Z < b))
                for (a = 0; c != i && 0 < c.children.length && a < b;) a = c.children[c.children.length - 1], this.L(a, h), c = this.a.g[a], a = c.Z
        },
        na: function () {
            for (; 0 < this.a.J;) this.F(h)
        },
        oa: function (a) {
            a = parseInt(a, 10);
            if (a != i && a != this.a.e) {
                for (var b = [this.a.e], c = this.a.g[this.a.e]; 0 <= c.o;) b.unshift(c.o), c = this.a.g[c.o];
                for (var d = [a], c = this.a.g[a]; 0 <= c.o;) d.unshift(c.o), c = this.a.g[c.o];
                for (var c = 0, e = Math.min(b.length, d.length), f = 0; f < e && b[f] == d[f]; f++) c = b[f];
                for (; this.a.e > c;) this.F(h);
                if (this.a.e != a)
                    for (; this.a.e < a;) this.L(d[f],
                        h), f++
            }
        },
        O: function () {
            this.oa(this.a.g.length - 1)
        },
        la: function () {
            for (var a = this.a.g[this.a.e]; a != i && 0 < a.children.length;) a = a.children[a.children.length - 1], this.L(a, h), a = this.a.g[a]
        },
        P: function (a) {
            this.d.B && this.t();
            this.d.C && this.u();
            var b = this.a.g[this.a.e];
            if (0 == b.children.length) return j;
            if (1 == b.children.length || this.d.p) {
                var c = b.children[b.children.length - 1];
                this.d.p && (c = b.children[this.d.m], this.S());
                this.L(c, a)
            } else this.Ia(b);
            return h
        },
        S: function () {
            this.d.p && (this.d.p = j, l(".modal li", this.c).unbind("click"),
                l(".modal", this.c).remove(), this.h.focus())
        },
        Ia: function (a) {
            this.d.B && this.t();
            for (var b = a.children.length, c = "", c = '<div class="modal"><ul>', d = b - 1; 0 <= d; d--) c += '<li class="' + d + '">' + this.a.g[a.children[d]].q(h) + "</li>";
            this.l().append(c + "</ul></div>");
            a = 8 * this.k();
            l(".modal", this.c).css({
                top: 10,
                left: a + 20
            });
            var e = this;
            l(".modal li", this.c).click(function (a) {
                a = parseInt(l(a.target).attr("class"), 10);
                e.d.m = a;
                e.P(j)
            });
            this.d.p = h;
            this.d.m = b - 1;
            this.d.ka = b;
            l(".modal ." + this.d.m, this.c).toggleClass("selected")
        },
        Za: function () {
            this.d.m + 1 >= this.d.ka || (this.d.m++, l(".modal .selected", this.c).toggleClass("selected"), l("." + this.d.m, ".modal").toggleClass("selected"))
        },
        Ya: function () {
            0 >= this.d.m || (this.d.m--, l(".modal .selected", this.c).toggleClass("selected"), l("." + this.d.m, ".modal").toggleClass("selected"))
        },
        L: function (a, b) {
            if (a != i) {
                var c = this.a.g[a];
                this.xa(c, b);
                this.ha(c, 1, b);
                this.a.J++;
                this.a.e = a;
                this.a.i *= -1
            }
        },
        F: function (a) {
            if (this.d.p) return this.S(), h;
            if (0 < this.a.J) {
                var b = this.a.g[this.a.e],
                    c = b.o;
                this.xa(this.a.g[c],
                    a);
                this.ha(b, -1, a);
                this.a.J--;
                this.a.e = c;
                this.a.i *= -1;
                return h
            }
            return j
        },
        xa: function (a, b) {
            this.lb(a.Fa, b, a.G);
            l(".active", this.c).toggleClass("active");
            var c = l("#" + this.c.id + "move" + a.G.toString());
            c.toggleClass("active");
            if (0 < a.G && !this.b.boardOnly) {
                var d = c.position().top,
                    c = c.height();
                if (d < c) {
                    var e = c - d,
                        f = this.n().scrollTop();
                    f > e ? this.n().scrollTop(f - e) : 0 < f && this.n().scrollTop(0)
                }
                d + c > this.n().height() && (d = d + c - this.n().height(), this.n().scrollTop(this.n().scrollTop() + d))
            }
        },
        Ta: function (a) {
            return "Q" ==
                a || "R" == a || "B" == a
        },
        Oa: function (a) {
            switch (a) {
            case "Q":
                return this.A.jb;
            case "R":
                return this.A.kb;
            case "B":
                return this.A.Ba;
            case "N":
                return this.A.Va;
            case "K":
                return this.A.Ua
            }
        },
        Ja: function (a, b) {
            for (var c = this.Ta(a), d = this.Oa(a), e = (1 == this.a.i ? "w" : "b") + a.toLowerCase(), f = [], g, m, k = 0; k < d.length; k++) {
                m = d[k];
                for (g = b + m; !(g & 136);) {
                    if (this.a.position[g] != i) {
                        this.a.position[g] == e && f.push(g);
                        break
                    }
                    g += m;
                    if (!c) break
                }
            }
            return f
        },
        La: function (a) {
            if (this.f.Da.test(a.move)) {
                var a = 1 == this.a.i ? 0 : 7,
                    b = 16 * a + 4,
                    a = 16 * a;
                return ["m:" +
                    b.toString() + ":" + (b - 2).toString(), "m:" + a.toString() + ":" + (a + 3).toString()]
            }
            if (this.f.Ca.test(a.move)) return a = 1 == this.a.i ? 0 : 7, b = 16 * a + 4, a = 16 * a + 7, ["m:" + b.toString() + ":" + (b + 2).toString(), "m:" + a.toString() + ":" + (a - 2).toString()];
            if (this.f.ua.test(a.move)) {
                var b = this.f.ua.exec(a.move)[0],
                    c = this.f.fb.exec(a.move),
                    d = c[3] - 1,
                    c = c[2].toLowerCase().charCodeAt(0) - 97,
                    d = 16 * d + c,
                    c = this.Ja(b, d),
                    b = [];
                if (1 == c.length) b = ["m:" + c[0] + ":" + d];
                else {
                    var e = this.f.gb.exec(a.move);
                    if (e[1] != i && "" != e[1]) {
                        for (var f = [], g = e[1].toLowerCase().charCodeAt(0) -
                                97, a = 0; a < c.length; a++) c[a] % 16 == g && f.push(c[a]);
                        c = f
                    }
                    if (e[2] != i && "" != e[2]) {
                        f = [];
                        e = e[2] - 1;
                        for (a = 0; a < c.length; a++) Math.floor(c[a] / 16) == e && f.push(c[a]);
                        c = f
                    }
                    if (1 == c.length) b = ["m:" + c[0] + ":" + d];
                    else {
                        e = [];
                        f = 1 == this.a.i ? this.a.da : this.a.R;
                        for (a = 0; a < c.length; a++) this.Sa(c[a], f) || e.push(c[a]);
                        1 == e.length && (b = ["m:" + e[0] + ":" + d])
                    }
                }
                this.a.position[d] != i && b.splice(0, 0, "r:" + d + ":" + this.a.position[d].toString())
            } else {
                e = c = d = i;
                b = [];
                f = 1 == this.a.i ? "w" : "b";
                if (this.f.sa.test(a.move))
                    if (b = this.f.sa.exec(a.move), c = b[1].toLowerCase().charCodeAt(0) -
                        97, d = b[2] - 1, b = d - 1 * this.a.i, b = 16 * b + c, this.a.position[b] == f + "p") e = b, b = ["m:" + b + ":" + (16 * d + c).toString()];
                    else {
                        if (1 == this.a.i) {
                            if (3 == d && "wp" == this.a.position[16 + c] && this.a.position[32 + c] == i) return b = ["m:" + (16 + c).toString() + ":" + (48 + c).toString(), "e:" + c.toString()]
                        } else if (4 == d && "bp" == this.a.position[96 + c] && this.a.position[80 + c] == i) return b = ["m:" + (96 + c).toString() + ":" + (64 + c).toString(), "e:" + c.toString()];
                        return []
                    } else if (this.f.ra.test(a.move)) {
                    b = this.f.ra.exec(a.move);
                    c = b[2].toLowerCase().charCodeAt(0) -
                        97;
                    d = b[3] - 1;
                    f = b[1].toLowerCase().charCodeAt(0) - 97;
                    b = d - 1 * this.a.i;
                    if (this.a.D === c.toString(10) && (e = i, 1 == this.a.i && 5 == d && (e = 64 + c), -1 == this.a.i && 2 == d && (e = 48 + c), e != i)) return ["r:" + e.toString() + ":" + this.a.position[e], "m:" + (16 * b + f).toString() + ":" + (16 * d + c).toString()];
                    e = 16 * b + f;
                    b = ["r:" + (16 * d + c).toString() + ":" + this.a.position[16 * d + c], "m:" + (16 * b + f).toString() + ":" + (16 * d + c).toString()]
                }
                if (this.f.ta.test(a.move)) {
                    f = this.f.ta.exec(a.move)[1];
                    g = 1 == this.a.i ? "w" : "b";
                    d = (16 * d + c).toString();
                    c = [];
                    for (a = 0; a < b.length; a++) "m" !=
                        b[a].split(":")[0] && c.push(b[a]);
                    c.push("p:" + d + ":" + e.toString() + ":" + g + ":" + f.toLowerCase());
                    b = c
                }
            }
            return b
        },
        Sa: function (a, b) {
            var c = a - b,
                d = Math.abs(c),
                e = i;
            0 < d && 7 > d ? e = 1 : 0 == d % 15 ? e = 15 : 0 == d % 16 ? e = 16 : 0 == d % 17 && (e = 17);
            if (e !== i) {
                d = e;
                0 > c && (e *= -1);
                for (var c = b + e, f = j; !(c & 136);) {
                    if (this.a.position[c] != i)
                        if (c == a) f = h;
                        else {
                            if (f) {
                                e = this.a.position[c];
                                c = e.charAt(1);
                                if (e.charAt(0) != (1 == this.a.i ? "b" : "w")) break;
                                return 15 == d || 17 == d ? "q" == c || "b" == c : "r" == c || "q" == c
                            }
                            break
                        }
                    c += e
                }
            }
            return j
        },
        ha: function (a, b, c) {
            "undefined" === typeof c &&
                (c = j);
            if (0 < b) {
                if (a.j == i || 0 == a.j.length) b = this.La(a), this.a.g[a.G].j = b, a.j = b;
                this.a.D = "";
                for (b = 0; b < a.j.length; b++) {
                    var d = a.j[b],
                        d = d.split(":");
                    switch (d[0]) {
                    case "m":
                        this.ma(d[1], d[2], c);
                        break;
                    case "a":
                        this.I(d[1], d[2]);
                        break;
                    case "r":
                        this.Q(d[1]);
                        break;
                    case "e":
                        this.a.D = d[1];
                        break;
                    case "p":
                        this.Q(d[2]), this.I(d[1], d[3] + d[4])
                    }
                }
            } else if (0 > b) {
                if (a.j == i) return j;
                d = this.a.g[a.o];
                if (d != i && d.j != i) {
                    for (var e = j, b = 0; b < d.j.length; b++) "e" == d.j[b].charAt(0) && (e = h, this.a.D = parseInt(d.j[b].charAt(2), 8));
                    e || (this.a.D =
                        "")
                }
                for (b = a.j.length - 1; 0 <= b; b--) switch (d = a.j[b], d = d.split(":"), d[0]) {
                case "m":
                    this.ma(d[2], d[1], c);
                    break;
                case "a":
                    this.Q(d[1]);
                    break;
                case "r":
                    this.I(d[1], d[2]);
                    break;
                case "p":
                    this.Q(d[1]), this.I(d[2], d[3] + "p")
                }
            }
        },
        I: function (a, b) {
            var c = this.c.id + a;
            this.l().append("<div id='" + c + "' class='" + b + "-" + this.b.size + " chess-piece'></div>");
            var d = this.k(),
                e = Math.floor(a / 16),
                f = a % 16; - 1 == this.d.direction ? e = 7 - e : f = 7 - f;
            e = d * e + this.W();
            f = d * f + this.V();
            l("#" + c).css({
                position: "absolute",
                top: e,
                left: f,
                height: d + "px",
                width: d +
                    "px"
            });
            this.a.position[a] = b
        },
        Q: function (a) {
            l("#" + (this.c.id + a)).remove();
            this.a.position[a] = i
        },
        ma: function (a, b, c) {
            var d = this.c.id + a,
                e = this.c.id + b,
                f = this.k(),
                g = (Math.floor(b / 16) - Math.floor(a / 16)) * f * this.d.direction,
                f = (a % 16 - b % 16) * f * this.d.direction;
            c ? l("#" + d).css({
                top: "+=" + g + "px",
                left: "+=" + f + "px"
            }) : l("#" + d).animate({
                top: "+=" + g + "px",
                left: "+=" + f + "px"
            }, "fast");
            l("#" + d).attr("id", e);
            c = this.a.position[a];
            this.a.position[b] = c;
            this.a.position[a] = i;
            "wk" === c && (this.a.da = b);
            "bk" === c && (this.a.R = b)
        }
    };
    u.K = u.prototype.K;
    l.fn.wa = function (a) {
        return this.each(function () {
            (new u(this, a)).Ra()
        })
    };
    jQuery.prototype.replayer = l.fn.wa;
    l.fn.wa.defaults = u.K;
})()