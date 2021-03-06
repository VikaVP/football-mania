!(function(e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : (e.snarkdown = n());
})(this, function() {
  function e(e) {
    return e.replace(RegExp("^" + (e.match(/^(\t| )+/) || "")[0], "gm"), "");
  }
  function n(e) {
    return e.replace(/"/g, "&quot;");
  }
  function r(o) {
    function c(e) {
      var n = e.replace(/\*/g, "_").replace(/^( {2}\n\n*|\n{2,})/g, "\n\n"),
        r = f[f.length - 1] === e,
        o = t[n];
      return o ? (o[1] ? (f[r ? "pop" : "push"](e), o[r ? 1 : 0]) : o[0]) : e;
    }
    function a() {
      for (var e = "", n = f.length; n--; ) e += c(f[n]);
      return e;
    }
    var l,
      u,
      s,
      p,
      g,
      i = /(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,
      f = [],
      d = "",
      m = 0,
      h = {};
    for (
      o = o
        .replace(/^\n+|\n+$/g, "")
        .replace(/^\[(.+?)\]:\s*(.+)$/gm, function(e, n, r) {
          return (h[n.toLowerCase()] = r), "";
        });
      (s = i.exec(o));

    )
      (u = o.substring(m, s.index)),
        (m = i.lastIndex),
        (l = s[0]),
        u.match(/[^\\](\\\\)*\\$/) ||
          (s[2] || s[3]
            ? (l =
                '<pre class="code ' +
                (s[3] ? "poetry" : s[1].toLowerCase()) +
                '">' +
                e((s[2] || s[3]).replace(/^\n+|\n+$/g, "")) +
                "</pre>")
            : s[5]
            ? ((g = s[5]),
              "." === g.charAt(g.length - 1) &&
                ((g = "."), (s[4] = s[4].replace(/^\d+/gm, ""))),
              (p = r(e(s[4].replace(/^\s*[>*+.-]/gm, "")))),
              ">" !== g &&
                ((g = "." === g ? "#" : "*"),
                (p = p.replace(/^(.*)(\n|$)/gm, "<li>$1</li>"))),
              (l = t[g][0] + p + t[g][1]))
            : s[7]
            ? (l = '<img src="' + n(s[7]) + '" alt="' + n(s[6]) + '">')
            : s[9]
            ? ((d = d.replace(
                "<a>",
                '<a href="' + n(s[10] || h[u.toLowerCase()]) + '">'
              )),
              (l = a() + "</a>"))
            : s[8]
            ? (l = "<a>")
            : s[11] || s[13]
            ? ((g = "h" + (s[13] ? s[13].length : "=" === s[12][0] ? 1 : 2)),
              (l = "<" + g + ">" + r(s[11] || s[14]) + "</" + g + ">"))
            : s[15]
            ? (l = "<code>" + s[15] + "</code>")
            : s[16] && (l = c(s[16]))),
        (d += u),
        (d += l);
    return (d + o.substring(m) + a()).trim();
  }
  var t = {
    _: ["<em>", "</em>"],
    __: ["<strong>", "</strong>"],
    "\n\n": ["<br />"],
    ">": ["<blockquote>", "</blockquote>"],
    "*": ["<ul>", "</ul>"],
    "#": ["<ol>", "</ol>"]
  };
  return r;
});
//# sourceMappingURL=snarkdown.umd.js.map
