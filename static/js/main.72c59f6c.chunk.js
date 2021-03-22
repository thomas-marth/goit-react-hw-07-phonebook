(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{23:function(t,e,n){t.exports={mainContainer:"Phonebook_mainContainer__kDiFt",subContainer:"Phonebook_subContainer__2Jq_T"}},33:function(t,e,n){t.exports={mainTitle:"MainTitle_mainTitle__1OSQi"}},34:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__1foNR"}},35:function(t,e,n){t.exports={contactList:"ContactList_contactList__33O63"}},36:function(t,e,n){t.exports={enter:"slide_enter__2Lu5T",enterActive:"slide_enterActive__1h8Wk",exit:"slide_exit__63aVQ",exitActive:"slide_exitActive__2gorX"}},39:function(t,e,n){t.exports={contactForm:"AddContact_contactForm__2-Sqt"}},40:function(t,e,n){t.exports={alert:"Alert_alert__2H_H0"}},41:function(t,e,n){t.exports={enter:"alert_enter__3j_0o",enterActive:"alert_enterActive__Yg5p8",exit:"alert_exit__2N1rM",exitActive:"alert_exitActive__3FQ3n"}},42:function(t,e,n){t.exports={findContact:"FindContact_findContact__1V41A"}},43:function(t,e,n){t.exports={enter:"pop_enter__1_tRx",enterActive:"pop_enterActive__3wvjl",exit:"pop_exit__3w5vA",exitActive:"pop_exitActive__3ZdPs"}},44:function(t,e,n){t.exports={enter:"slideTitle_enter__2OESc",enterActive:"slideTitle_enterActive__2me5a"}},76:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),o=n(16),s=n(17),u=n(19),b=n(18),j=n(33),l=n.n(j),m=n(1),O=function(){return Object(m.jsx)("h1",{className:l.a.mainTitle,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"})},d=n(34),f=n.n(d),p=function(t){var e=t.contact,n=t.removeItem;return Object(m.jsxs)("li",{"data-id":e.id,className:f.a.contactListItem,children:[Object(m.jsxs)("h4",{children:[Object(m.jsx)("span",{children:"\ud83d\udc65 "}),e.name]}),Object(m.jsxs)("h4",{children:[Object(m.jsx)("span",{children:"\ud83d\udcde"})," ",e.number]}),Object(m.jsx)("button",{type:"button",id:e.id,onClick:function(){return n(e.id)},children:"\u0445"})]})},_=n(78),x=n(77),h=n(35),v=n.n(h),C=n(36),g=n.n(C),A=function(t){return t.contacts.items},N=function(t){return t.contacts.filter},y=n(11),I=n(3),S=n(2),T=Object(S.b)("contacts/addRequest"),w=Object(S.b)("contacts/addSuccess"),E=Object(S.b)("contacts/addError"),L=Object(S.b)("contacts/getRequest"),k=Object(S.b)("contacts/getSuccess"),F=Object(S.b)("contacts/getError"),R=Object(S.b)("contacts/removeRequest"),V=Object(S.b)("contacts/removeSuccess"),q=Object(S.b)("contacts/removeError"),H=Object(S.b)("FILTER_ITEM",(function(t){return{payload:t.target.value}})),M=n(14),U=n.n(M);U.a.defaults.baseURL="http://localhost:2000";var D=n(9);var J,P,Q={removeItem:function(t){return function(e){e(R()),U.a.delete("/contacts/".concat(t)).then((function(){e(V(t))})).catch((function(t){return e(q(t))}))}}},G=Object(D.b)((function(t){return{items:A(t),filter:N(t)}}),Q)((function(t){var e=t.items,n=t.filter,c=void 0===n?"":n,a=t.removeItem,i=function(t,e){return 0!==e.length?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):t}(e,c);return Object(m.jsx)(_.a,{component:"ul",className:v.a.contactList,children:i.map((function(t){return Object(m.jsx)(x.a,{timeout:250,classNames:g.a,children:Object(m.jsx)(p,{removeItem:a,contact:t},e.id)},t.id)}))})})),X=n(7),B=n(39),W=n.n(B),Y=n(40),Z=n.n(Y),z=function(){return Object(m.jsx)("div",{className:Z.a.alert,children:Object(m.jsx)("p",{children:"\u26a0\ufe0f \u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"})})},K=n(41),$=n.n(K),tt=function(t){return t.status.inOn},et=function(t){return t.status.exist},nt=Object(S.b)("CHANGE_STATUS_ISON"),ct=Object(S.b)("CHANGE_STATUS_EXIST"),at=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputValue=function(e){var n=e.target.dataset.type;t.setState(Object(X.a)({},n,e.target.value))},t.handleSubmit=function(e){var n=t.props,c=n.statusExist,a=n.addNewItem;e.preventDefault();var i={name:t.state.name.replace(/\b\w/g,(function(t){return t.toUpperCase()})),number:t.state.number};if(t.props.items.find((function(t){return t.name.toLowerCase()===i.name.toLowerCase()})))return c(!0),setTimeout((function(){c(!1)}),2e3);""!==t.state.name&&""!==t.state.number&&a(i),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=this.props.exist;return Object(m.jsxs)("form",{className:W.a.contactForm,onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{htmlFor:"contactName",children:"\u0418\u043c\u044f"}),Object(m.jsx)("input",{id:"contactName",type:"text","data-type":"name",value:e,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0418\u043c\u044f",onChange:this.handleInputValue}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"contactNumber",children:"\u041d\u043e\u043c\u0435\u0440"}),Object(m.jsx)("input",{id:"contactNumber",type:"text","data-type":"number",value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440",onChange:this.handleInputValue}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{variant:"outlined",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(m.jsx)(x.a,{in:c,timeout:250,classNames:$.a,unmountOnExit:!0,children:Object(m.jsx)(z,{})})]})}}]),n}(a.a.Component),it={addNewItem:function(t){return function(e){e(T()),U.a.post("/contacts",Object(I.a)({},t)).then((function(t){var n=t.data;e(w(Object(I.a)({},n)))})).catch((function(t){return e(E(t))}))}},statusExist:ct},rt=Object(D.b)((function(t){return{items:A(t),exist:et(t)}}),it)(at),ot=n(42),st=n.n(ot),ut={getFilterValue:H},bt=Object(D.b)((function(t){return t}),ut)((function(t){var e=t.getFilterValue;return Object(m.jsxs)("div",{className:st.a.findContact,children:[Object(m.jsx)("label",{htmlFor:"findContact",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(m.jsx)("input",{id:"findContact",type:"text",onChange:e})]})})),jt=n(43),lt=n.n(jt),mt=n(44),Ot=n.n(mt),dt=n(23),ft=n.n(dt),pt=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getItem()}},{key:"render",value:function(){this.props.statusInOn(!0);var t=this.props,e=t.items,n=t.inOn;return Object(m.jsx)("div",{className:ft.a.mainContainer,children:Object(m.jsxs)("div",{className:ft.a.subContainer,children:[Object(m.jsx)(x.a,{in:n,timeout:500,classNames:Ot.a,unmountOnExit:!0,children:Object(m.jsx)(O,{})}),Object(m.jsx)(rt,{}),Object(m.jsx)(x.a,{in:e.length>1,timeout:250,classNames:lt.a,unmountOnExit:!0,children:Object(m.jsx)(bt,{})}),Object(m.jsx)(G,{})]})})}}]),n}(a.a.Component),_t={getItem:function(){return function(t){t(L()),U.a.get("/contacts").then((function(e){var n=e.data;t(k(Object(y.a)(n)))})).catch((function(e){return t(F(e))}))}},statusInOn:nt},xt=Object(D.b)((function(t){return{items:A(t),inOn:tt(t)}}),_t)(pt),ht=function(){return Object(m.jsx)(xt,{})},vt=Object(S.c)({items:[],filter:""},(J={},Object(X.a)(J,k,(function(t,e){return{items:e.payload}})),Object(X.a)(J,w,(function(t,e){return Object(I.a)(Object(I.a)({},t),{},{items:[].concat(Object(y.a)(t.items),[e.payload])})})),Object(X.a)(J,V,(function(t,e){return Object(I.a)(Object(I.a)({},t),{},{items:Object(y.a)(t.items.filter((function(t){return t.id!==e.payload})))})})),Object(X.a)(J,H,(function(t,e){return Object(I.a)(Object(I.a)({},t),{},{filter:e.payload})})),J)),Ct=Object(S.c)({inOn:!1,exist:!1},(P={},Object(X.a)(P,nt,(function(t,e){return Object(I.a)(Object(I.a)({},t),{},{inOn:e.payload})})),Object(X.a)(P,ct,(function(t,e){return Object(I.a)(Object(I.a)({},t),{},{exist:e.payload})})),P)),gt=Object(S.a)({reducer:{contacts:vt,status:Ct},middleware:Object(y.a)(Object(S.d)())});r.a.render(Object(m.jsx)(D.a,{store:gt,children:Object(m.jsx)(ht,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.72c59f6c.chunk.js.map