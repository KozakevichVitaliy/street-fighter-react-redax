(this["webpackJsonpstreet-fighter-react-redax"]=this["webpackJsonpstreet-fighter-react-redax"]||[]).push([[0],{159:function(e,t,a){e.exports=a(375)},164:function(e,t,a){},165:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(56),c=a.n(o),i=(a(164),a(165),a(23)),l=a(146),s=a(147),u=a(30),d=a(59),m=a(61),h=a(18),p=a.n(h),f={},v={ids:[]},g=Object(i.combineReducers)({routing:d.routerReducer,fighters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_FIGHTERS_SUCCESS":var r=p.a.indexBy(p.a.prop("_id"),n);return p.a.merge(e,r);default:return e}},fightersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_FIGHTERS_SUCCESS":return p.a.merge(e,{ids:p.a.pluck("_id",n)});default:return e}}}),E=function(e){var t=e.children;return r.a.createElement("div",null,t)},b=a(153),y=a(154),w=a(157),S=a(155),j=a(158),F=a(29),k=a.n(F),C=a(60),O=function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"5d9309a730000067001b719b",e.next=4,fetch("http://www.mocky.io/v2/"+"5d9309a730000067001b719b",{method:"GET"}).then((function(e){return e.ok?e.json():Promise.reject(Error("Failed to load"))})).catch((function(e){throw e}));case 4:return t=e.sent,console.log(t),e.abrupt("return",t.content);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){return p.a.map((function(t){return function(e,t){return p.a.prop(t,e.fighters)}(e,t)}),e.fightersPage.ids)},H=function(e){var t=e.isShowing,a=e.hide;return t?c.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-overlay"}),r.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("p",null,"Hello, I'm a modal.")))),document.body):null},_=a(156),N=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1];return{isShowing:a,toggle:function(){r(!a)}}},x=function(){var e=N(),t=e.isShowing,a=e.toggle;return r.a.createElement("div",{className:"App"},r.a.createElement("button",{className:"button-default",onClick:a},"Show Modal"),r.a.createElement(H,{isShowing:t,hide:a}))},I=function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchFighters()}},{key:"renderFighter",value:function(e,t){return r.a.createElement("div",{className:"fighter",key:t},r.a.createElement("img",{className:"fighter-image",src:e.source,alt:e.source}),r.a.createElement("span",{className:"name"},e.name),r.a.createElement(x,null))}},{key:"render",value:function(){var e=this.props.fighters;return r.a.createElement("div",{className:"fighters"},e.map(this.renderFighter))}}]),t}(n.Component),R={fetchFighters:function(){return function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_FIGHTERS_START"}),e.prev=1,e.next=4,O();case 4:a=e.sent,t({type:"FETCH_FIGHTERS_SUCCESS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_FIGHTERS_FAILURE",payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},G=Object(m.b)((function(e){return{fighters:T(e)}}),R)(I),P=Object(i.createStore)(g,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),U=Object(d.syncHistoryWithStore)(u.c,P);var W=function(){return r.a.createElement(m.a,{store:P},r.a.createElement(u.b,{history:U},r.a.createElement(u.a,{component:E},r.a.createElement(u.a,{path:"/",component:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[159,1,2]]]);
//# sourceMappingURL=main.23928d6a.chunk.js.map