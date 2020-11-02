(this.webpackJsonpmatrixcalc=this.webpackJsonpmatrixcalc||[]).push([[0],{33:function(n,t,r){"use strict";r.r(t);var e=r(0),c=r(1),a=r(14),i=r.n(a),o=r(3),u=r(4);function s(){var n=Object(o.a)(["\n\ttext-align: center;\n\tfont-family: 'Courier New';\n    color: #1d3557;\n\tfont-size: 2em;\n\tmargin: 1em 1.5em 0em 1.5em;\n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n\tpadding: 1em;\n    display: flex;\n\talign-items: center;\n\tjustify-content: center;\n    background: #f1faee;\n    border-bottom: 1px solid #1d3557;\n    \n"]);return l=function(){return n},n}var f=u.a.div(l()),d=u.a.div(s()),b=function(){return Object(e.jsx)(f,{children:Object(e.jsx)(d,{children:"Matrix Library"})})},j=Object(c.createContext)(),m=window.localStorage,O={mats:null===m.getItem("mats")?{A:[[0,0],[0,0]],B:[[0,0],[0,0]]}:JSON.parse(m.getItem("mats")),display:[]},h=function(n){var t=n.children;return Object(e.jsx)(j.Provider,{value:Object(c.useState)(O),children:t})},v=function(){return Object(c.useContext)(j)},g=r(6),p=r(2),x=r(5);function y(){var n=Object(o.a)(["\n    font-family: 'Courier New';\n    \n"]);return y=function(){return n},n}function w(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    grid-column: 1;\n    grid-row: 3;  \n    margin-bottom: 1em;\n"]);return w=function(){return n},n}function k(){var n=Object(o.a)(["\n    margin: 0.1em;\n    border: none;\n    font-size: 1em;\n    width: 2em;\n    border-radius: 3em;\n    text-align: center;\n    color: #1d3557;\n    background-color: #f1faee;\n    font-family: 'Courier New';\n    &:hover {\n        background-color: #457b9d;\n        color: #a8dadc;\n    }\n    &:active {\n        background-color: #a8dadc;\n        color: #457b9d;\n    }\n"]);return k=function(){return n},n}var C=u.a.button(k()),A=u.a.div(w()),$=u.a.div(y()),N=function(n){var t=n.id,r=v(),c=Object(x.a)(r,2),a=c[0],i=c[1];return Object(e.jsxs)(A,{children:[Object(e.jsx)($,{children:"Rows: "}),Object(e.jsx)(C,{onClick:function(){return function(){if(a.mats[t].length>1){var n=a.mats[t].map((function(n){return n.slice()}));n.pop(),i(Object(p.a)(Object(p.a)({},a),{},{mats:Object(p.a)(Object(p.a)({},a.mats),{},Object(g.a)({},t,n))}))}}()},children:"-"}),Object(e.jsx)($,{children:"/"}),Object(e.jsx)(C,{onClick:function(){return function(){var n,r=[];for(n=0;n<a.mats[t][0].length;n++)r.push(0);var e=a.mats[t].map((function(n){return n.slice()}));e.push(r),i(Object(p.a)(Object(p.a)({},a),{},{mats:Object(p.a)(Object(p.a)({},a.mats),{},Object(g.a)({},t,e))}))}()},children:"+"})]})};function B(){var n=Object(o.a)(["\n    font-family: 'Courier New';\n"]);return B=function(){return n},n}function S(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    grid-column: 2;\n    grid-row: 3;  \n    margin-bottom: 1em;\n"]);return S=function(){return n},n}function E(){var n=Object(o.a)(["\nmargin: 0.1em;\nborder: none;\nfont-size: 1em;\nwidth: 2em;\nborder-radius: 3em;\ntext-align: center;\ncolor: #1d3557;\nbackground-color: #f1faee;\nfont-family: 'Courier New';\n&:hover {\n    background-color: #457b9d;\n    color: #a8dadc;\n}\n&:active {\n    background-color: #a8dadc;\n    color: #457b9d;\n}\n"]);return E=function(){return n},n}var z=u.a.button(E()),I=u.a.div(S()),M=u.a.div(B()),J=function(n){var t=n.id,r=v(),c=Object(x.a)(r,2),a=c[0],i=c[1];return Object(e.jsxs)(I,{children:[Object(e.jsx)(M,{children:"Columns:"}),Object(e.jsx)(z,{onClick:function(){return function(){if(a.mats[t][0].length>1){var n=a.mats[t].map((function(n){return n.slice()}));n.forEach((function(n){return n.pop()})),i(Object(p.a)(Object(p.a)({},a),{},{mats:Object(p.a)(Object(p.a)({},a.mats),{},Object(g.a)({},t,n))}))}}()},children:"-"}),Object(e.jsx)(M,{children:"/"}),Object(e.jsx)(z,{onClick:function(){return function(){var n=a.mats[t].map((function(n){return n.slice()}));n.forEach((function(n){return n.push(0)})),i(Object(p.a)(Object(p.a)({},a),{},{mats:Object(p.a)(Object(p.a)({},a.mats),{},Object(g.a)({},t,n))}))}()},children:"+"})]})};function L(){var n=Object(o.a)(["\noverflow: scroll;\n    grid-column: 1 / 3;\n    grid-row: 2;   \n    margin-bottom: 1em;\n    width: 20em;\n    height: 15em;\n\n\n"]);return L=function(){return n},n}function P(){var n=Object(o.a)(["\n"]);return P=function(){return n},n}function R(){var n=Object(o.a)(["\n    font-family: 'Courier New';\n    color: #1d3557;\n    font-size: 1.5em;\n    margin: 0.5em;\n    grid-column: 1 / 3;\n    grid-row: 1;\n"]);return R=function(){return n},n}function q(){var n=Object(o.a)(["\n    \n    margin: 0em 5em 0em 5em;\n    display: grid;\n    grid-column: ",";\n    text-align: center;\n    justify-content: center;\n"]);return q=function(){return n},n}function D(){var n=Object(o.a)(["\n    display: flex;\n    border: none;\n    width: 2em;\n    border: 1px solid #1d3557;\n    font-size: 1.5em;\n    font-family: 'Courier New';\n    border-radius: .3em;\n    text-align: center;\n    background-color: #f1faee;\n    color: #1d3557;\n    &:hover {\n        background-color: #a8dadc;\n    }\n"]);return D=function(){return n},n}var F=u.a.input(D()),G=u.a.table(q(),(function(n){return"A"===n.id?1:3})),H=u.a.caption(R()),K=u.a.tr(P()),Q=u.a.tbody(L()),T=function(n){var t=n.id,r=v(),a=Object(x.a)(r,2),i=a[0],o=a[1],u=window.localStorage;Object(c.useEffect)((function(){return u.setItem("mats",JSON.stringify(i.mats))}));var s=i.mats[t].map((function(n,r){return Object(e.jsxs)(K,{children:[" ",n.map((function(n,c){return Object(e.jsxs)("th",{children:[" ",Object(e.jsx)(F,{type:"text",value:Number.isNaN(n)?"":n,onChange:function(n){return function(n,r,e){""!=e&&"-"!=e&&isNaN(e)&&alert("Please input real numbers only"),"-"===!e&&(e=parseInt(e));var c=i.mats[t].map((function(n){return n.slice()}));c[n][r]=e,o(Object(p.a)(Object(p.a)({},i),{},{mats:Object(p.a)(Object(p.a)({},i.mats),{},Object(g.a)({},t,c))}))}(r,c,n.target.value)}})," "]})}))," "]})}));return Object(e.jsxs)(G,{id:t,children:[Object(e.jsx)(H,{children:t}),Object(e.jsxs)(Q,{children:[s," "]}),Object(e.jsx)(N,{id:t}),Object(e.jsx)(J,{id:t})]})},U=r(7);function V(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 20em;\n    flex-basis: 0;\n    flex: 1 1 0px;\n    align-self: center;\n    grid-column: 2;\n"]);return V=function(){return n},n}function W(){var n=Object(o.a)(["\n    margin: 0.3m;\n    padding: 0.3em;\n    width: 6em;\n    border: none;\n    font-size: 1em;\n    border-radius: 3em;\n    text-align: center;\n    color: #a8dadc;\n    background-color: #1d3557;\n    font-family: 'Courier New';\n    &:hover {\n        background-color: #457b9d;\n        color: #a8dadc;\n    }\n    &:active {\n        background-color: #a8dadc;\n        color: #457b9d;\n    }\n"]);return W=function(){return n},n}var X=u.a.button(W()),Y=u.a.div(V());function Z(){var n=Object(o.a)(["mathrm{rank}"],["\\mathrm{rank}"]);return Z=function(){return n},n}function _(){var n=Object(o.a)(["mathrm{inverse}"],["\\mathrm{inverse}"]);return _=function(){return n},n}function nn(){var n=Object(o.a)(["mathrm{rref}"],["\\mathrm{rref}"]);return nn=function(){return n},n}function tn(){var n=Object(o.a)(["+"]);return tn=function(){return n},n}function rn(){var n=Object(o.a)(["-"]);return rn=function(){return n},n}function en(){var n=Object(o.a)(["cdot"],["\\cdot"]);return en=function(){return n},n}function cn(){var n=Object(o.a)(["end{array} \right)"],["\\end{array} \\right)"]);return cn=function(){return n},n}function an(){var n=Object(o.a)(["left( \begin{array}{ccc}"],["\\left( \\begin{array}{ccc}"]);return an=function(){return n},n}function on(){var n=Object(o.a)(["\\"],["\\\\"]);return on=function(){return n},n}var un=function(){var n=v(),t=Object(x.a)(n,2),r=t[0],c=t[1],a=function(n){var t="";return n.forEach((function(n){n.forEach((function(n){return t+=n+"&"})),t=t.slice(0,-1),t+=String.raw(on())})),t=t.slice(0,-2),String.raw(an())+t+String.raw(cn())},i=function(n){var t,r=n[0].length,e=n.length,c=function(n,t,r){var e=n[t];n[t]=n[r],n[r]=e},a=0;n:for(t=0;t<e&&!(r<=a);++t){for(var i=t;0===n[i][a];)if(e==++i&&(i=t,r=++a))break n;for(c(n,i,t),0!=n[t][a]&&n[t].forEach((function(r,e){return n[t][e]=r/n[t][a]})),i=0;i<e;++i)i!=t&&n[i].forEach((function(r,e){return n[i][e]=r-n[i][a]*n[t][e]}));++a}},o=function(){var n=r.mats.A.map((function(n){return n.slice()}));i(n);var t,e=n.length,o=0;for(t=0;t<e;++t)n[t].reduce((function(n,t){return n||t}))&&++o;var u="$$"+String.raw(Z())+a(r.mats.A)+"="+o+"$$";c(Object(p.a)(Object(p.a)({},r),{},{display:[u].concat(Object(U.a)(r.display))}))};return Object(e.jsxs)(Y,{children:[Object(e.jsx)(X,{onClick:function(){return function(){var n=r.mats.A.map((function(n){return n.slice()})),t=r.mats.B.map((function(n){return n.slice()}));c(Object(p.a)(Object(p.a)({},r),{},{mats:{B:n,A:t}}))}()},children:"switch"}),Object(e.jsx)(X,{onClick:function(){return function(){var n=r.mats.A.map((function(n){return n.slice()}));i(n);var t="$$"+String.raw(nn())+a(r.mats.A)+"="+a(n)+"$$";c(Object(p.a)(Object(p.a)({},r),{},{display:[t].concat(Object(U.a)(r.display))}))}()},children:"rref"}),Object(e.jsx)(X,{onClick:function(){return o()},children:"rank"}),Object(e.jsx)(X,{onClick:function(){return function(){var n=r.mats.A.map((function(n){return n.slice()})),t=(n.length,n.length);n.forEach((function(r,e){var c=new Array(t).fill(0);c[e]=1,n[e]=n[e].concat(c)})),i(n);var e="$$"+String.raw(_())+a(r.mats.A)+"="+a(n)+"$$";c(Object(p.a)(Object(p.a)({},r),{},{display:[e].concat(Object(U.a)(r.display))}))}()},children:"inv"}),Object(e.jsx)(X,{onClick:function(){return o()},children:"det"}),Object(e.jsx)(X,{onClick:function(){return o()},children:"eig"}),Object(e.jsx)(X,{onClick:function(){return o()},children:"diag"}),Object(e.jsx)(X,{onClick:function(){return function(){var n=[],t=r.mats.A[0].length,e=r.mats.A.length,i=r.mats.B[0].length;if(t===r.mats.B.length){var o;for(o=0;o<e;o++){var u,s=[];for(u=0;u<i;u++){var l,f=0;for(l=0;l<t;l++)f+=r.mats.A[o][l]*r.mats.B[l][u];s.push(f)}n.push(s)}var d="$$"+a(r.mats.A)+String.raw(en())+a(r.mats.B)+"="+a(n)+"$$";c(Object(p.a)(Object(p.a)({},r),{},{display:[d].concat(Object(U.a)(r.display))}))}else alert("Not compatible for multiplication")}()},children:"x"}),Object(e.jsx)(X,{onClick:function(){return function(){var n=[],t=r.mats.A[0].length,e=r.mats.A.length,i=r.mats.B[0].length,o=r.mats.B.length;if(t===i&&e===o){var u;for(u=0;u<e;u++){var s,l=[];for(s=0;s<t;s++)l.push(r.mats.A[u][s]+r.mats.B[u][s]);n.push(l)}var f="$$"+a(r.mats.A)+String.raw(tn())+a(r.mats.B)+"="+a(n)+"$$";c(Object(p.a)(Object(p.a)({},r),{},{display:[f].concat(Object(U.a)(r.display))}))}else alert("Not compatible for addition")}()},children:"+"}),Object(e.jsx)(X,{onClick:function(){return function(){var n=[],t=r.mats.A[0].length,e=r.mats.A.length,i=r.mats.B[0].length,o=r.mats.B.length;if(t===i&&e===o){var u;for(u=0;u<e;u++){var s,l=[];for(s=0;s<t;s++)l.push(r.mats.A[u][s]-r.mats.B[u][s]);n.push(l)}var f="$$"+a(r.mats.A)+String.raw(rn())+a(r.mats.B)+"="+a(n)+"$$";c(Object(p.a)(Object(p.a)({},r),{},{display:[f].concat(Object(U.a)(r.display))}))}else alert("Not compatible for subtraction")}()},children:"-"}),Object(e.jsx)(X,{onClick:function(){return c(Object(p.a)(Object(p.a)({},r),{},{display:[]}))},children:"clear"})]})};function sn(){var n=Object(o.a)(["\n\tpadding: 1em;\n    display: grid;\n\talign-items: top;\n\tjustify-content: space-evenly;\n"]);return sn=function(){return n},n}var ln=u.a.div(sn()),fn=function(){return Object(e.jsxs)(ln,{children:[Object(e.jsx)(T,{id:"A"}),Object(e.jsx)(un,{children:" "}),Object(e.jsx)(T,{id:"B"})]})};function dn(){var n=Object(o.a)(["\n    box-sizing: border-box;\n    border-bottom: 1px solid #1d3557;\n    margin-top: -1px;\n"]);return dn=function(){return n},n}function bn(){var n=Object(o.a)(["\n    font-size: 1em;\n    color: #1d3557;\n    border-top: 1px solid #1d3557;\n    justify-self: center;\n"]);return bn=function(){return n},n}var jn=u.a.div(bn()),mn=u.a.div(dn()),On=function(){var n=v(),t=Object(x.a)(n,2),c=t[0],a=(t[1],r(27)),i=c.display.map((function(n){return Object(e.jsx)(mn,{children:Object(e.jsx)(a,{displayMode:!0,children:n})})}));return Object(e.jsx)(jn,{children:i})};function hn(){var n=Object(o.a)(["\n    font-family: 'Courier New';\n    color: #1d3557;\n    margin-top: 1em;\n    padding-bottom: 4em;\n"]);return hn=function(){return n},n}function vn(){var n=Object(o.a)(["\n    margin: auto;\n    width: 60em;\n    height: 40em;\n"]);return vn=function(){return n},n}var gn=u.a.div(vn()),pn=u.a.div(hn()),xn=function(){return Object(e.jsx)(h,{children:Object(e.jsxs)(gn,{children:[Object(e.jsx)(b,{}),Object(e.jsx)(fn,{}),Object(e.jsx)(On,{}),Object(e.jsx)(pn,{children:"Made by Rodney Lafuente Mercado for Math 121"})]})})};i.a.render(Object(e.jsx)(xn,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.69066c1f.chunk.js.map