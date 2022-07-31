(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{35:function(t,e,n){"use strict";var r=n(39),s=n(37),a=n(40),c=n(38),o=n.n(c),u=n(0);function i(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:e?"pending":null,data:null,error:null}),c=Object(a.a)(n,2),p=c[0],d=c[1],f=Object(u.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:"SEND"}),e.prev=1,e.next=4,t(n);case 4:r=e.sent,d({type:"SUCCESS",responseData:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.a)({sendRequest:f},p)}},36:function(t,e,n){"use strict";n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return b}));var r=n(39),s=n(37),a=n(38),c=n.n(a),o="https://react-movies-2fa11-default-rtdb.asia-southeast1.firebasedatabase.app";function u(){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(c.a.mark((function t(){var e,n,s,a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in s=[],n)u=Object(r.a)({id:a},n[a]),s.push(u);return t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(c.a.mark((function t(e){var n,s,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/quotes/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(s=t.sent,n.ok){t.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return a=Object(r.a)({id:e},s),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:r.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(c.a.mark((function t(e){var n,s,a,u,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/comments/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(s=t.sent,n.ok){t.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(u in a=[],s)i=Object(r.a)({id:u},s[u]),a.push(i);return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},47:function(t,e,n){t.exports={noquotes:"NoQuotesFound_noquotes___50aF"}},48:function(t,e,n){t.exports={item:"QuoteItem_item__34Ju_"}},49:function(t,e,n){t.exports={list:"QuoteList_list__3rqzM",sorting:"QuoteList_sorting__131mM"}},56:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(8),a=n(47),c=n.n(a),o=n(1),u=function(){return Object(o.jsxs)("div",{className:c.a.noquotes,children:[Object(o.jsx)("p",{children:"No quotes found!"}),Object(o.jsx)(s.b,{className:"btn",to:"/new-quote",children:"Add A Quote maybe .. ??"})]})},i=n(2),p=n(41),d=n(48),f=n.n(d),l=function(t){return Object(o.jsxs)("li",{className:f.a.item,children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("blockquote",{children:Object(o.jsx)("p",{children:t.text})}),Object(o.jsx)("figcaption",{children:t.author})]}),Object(o.jsx)(s.b,{className:"btn",to:"/quotes/".concat(t.id),children:"View Fullscreen"})]})},h=n(49),j=n.n(h),b=function(t){var e,n,s=Object(i.useHistory)(),a=Object(p.useLocation)(),c="asc"===new URLSearchParams(a.search).get("sort"),u=(e=t.quotes,n=c,e.sort((function(t,e){return n?t.id>e.id?1:-1:t.id<e.id?1:-1})));return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)("div",{className:j.a.sorting,children:Object(o.jsx)("button",{onClick:function(){s.push({pathname:a.pathname,search:"?sort=".concat(c?"dsc":"asc")})},children:"Sort"})}),Object(o.jsx)("ul",{className:j.a.list,children:u.map((function(t){return Object(o.jsx)(l,{id:t.id,author:t.author,text:t.text},t.id)}))})]})},m=n(15),x=n(35),O=n(36);e.default=function(){var t=Object(x.a)(O.d,!0),e=t.sendRequest,n=t.status,s=t.data,a=t.error;return Object(r.useEffect)((function(){e()}),[e]),"pending"===n?Object(o.jsx)(m.a,{}):a?Object(o.jsx)("p",{className:"centered",children:a}):s&&0!==s.length?Object(o.jsx)(b,{quotes:s}):Object(o.jsx)(u,{})}}}]);
//# sourceMappingURL=5.b2b8beae.chunk.js.map