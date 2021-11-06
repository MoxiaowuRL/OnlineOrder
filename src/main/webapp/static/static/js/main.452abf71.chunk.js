(this.webpackJsonponlineorder=this.webpackJsonponlineorder||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(23),r=n.n(i),s=(n(152),n(33)),l=n(239),o=n(236),j=(n(153),n(76)),u=n(143),d=n(71),b=n(58),h=n(234),O=n(233),m=n(39),f=n(146),p=n(7),x=j.a.Option,g=function(e){var t=e.ItemId,n=Object(c.useState)(!1),a=Object(s.a)(n,2),i=a[0],r=a[1];return Object(p.jsx)(d.a,{title:"Add to Shopping Cart",children:Object(p.jsx)(b.a,{loading:i,type:"primary",icon:Object(p.jsx)(f.a,{}),onClick:function(){r(!0),Object(m.addItemToCart)(t).then((function(){return u.b.success("Successfully add item")})).catch((function(e){return u.b.error(e.message)})).finally((function(){r(!1)}))}})})},y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),r=Object(s.a)(i,2),l=r[0],o=r[1],d=Object(c.useState)([]),b=Object(s.a)(d,2),f=b[0],y=b[1],v=Object(c.useState)(!1),S=Object(s.a)(v,2),C=S[0],I=S[1],w=Object(c.useState)(!1),P=Object(s.a)(w,2),F=P[0],k=P[1];return Object(c.useEffect)((function(){k(!0),Object(m.getRestaurants)().then((function(e){y(e)})).catch((function(e){u.b.error(e.message)})).finally((function(){k(!1)}))}),[]),Object(c.useEffect)((function(){l&&(I(!0),Object(m.getMenus)(l).then((function(e){a(e)})).catch((function(e){u.b.error(e.message)})).finally((function(){I(!1)})))}),[l]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{value:l,onSelect:function(e){return o(e)},placeholder:"Select a restaurant",loading:F,style:{width:300},onChange:function(){},children:f.map((function(e){return Object(p.jsx)(x,{value:e.id,children:e.name})}))}),l&&Object(p.jsx)(h.b,{Style:{marginTop:20},loading:C,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3},dataSource:n,renderItem:function(e){return Object(p.jsx)(h.b.Item,{children:Object(p.jsxs)(O.a,{title:e.name,extra:Object(p.jsx)(g,{itemId:e.id}),children:[Object(p.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:340,width:"100%",display:"block"}}),"Price: ".concat(e.price)]})})}})]})},v=n(102),S=n(107),C=n(105),I=n(235),w=n(238),P=n(241),F=n(242),k=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(v.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loading:!1},e.onFinish=function(t){e.setState({loading:!0}),Object(m.login)(t).then((function(){u.b.success("Login Successful"),e.props.onSuccess()})).catch((function(e){u.b.error(e.message)})).finally((function(){e.setState({loading:!1})}))},e.render=function(){return Object(p.jsxs)(I.a,{name:"normal_login",onFinish:e.onFinish,style:{width:300,margin:"auto"},children:[Object(p.jsx)(I.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(p.jsx)(w.a,{prefix:Object(p.jsx)(P.a,{}),placeholder:"Username"})}),Object(p.jsx)(I.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(p.jsx)(w.a.Password,{prefix:Object(p.jsx)(F.a,{}),placeholder:"Password"})}),Object(p.jsx)(I.a.Item,{children:Object(p.jsx)(b.a,{type:"primary",htmlType:"sumbit",loading:e.state.loading,children:"Login"})})]})},e}return n}(a.a.Component),M=k,T=n(240),L=o.a.Text,q=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),r=Object(s.a)(i,2),l=r[0],o=r[1],j=Object(c.useState)(!1),d=Object(s.a)(j,2),O=d[0],f=d[1],x=Object(c.useState)(!1),g=Object(s.a)(x,2),y=g[0],v=g[1];Object(c.useEffect)((function(){n&&(f(!0),Object(m.getCart)().then((function(e){o(e)})).catch((function(e){u.b.error(e.message)})).finally((function(){f(!1)})))}),[n]);var S=function(){a(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{type:"primary",shape:"round",onClick:function(){a(!0)},children:"Cart"}),Object(p.jsx)(T.a,{title:"My Shopping cart",onClose:S,visible:n,width:520,footer:Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)(L,{strong:!0,children:"Total Price: $".concat(null===l||void 0===l?void 0:l.totalPrice)}),Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:S,style:{marginRight:8},children:"Cancel"}),Object(p.jsx)(b.a,{onClick:function(){v(!0),Object(m.checkout)().then((function(){u.b.success("Successfully checkout"),a(!1)})).catch((function(e){u.b.error(e.message)})).finally((function(){v(!1)}))},type:"primary",loading:y,disabled:O||0===(null===l||void 0===l?void 0:l.orderItemList.length),children:"Checkout"})]})]}),children:Object(p.jsx)(h.b,{loading:O,itemLayout:"horizontal",dataSource:null===l||void 0===l?void 0:l.orderItemList,renderItem:function(e){return Object(p.jsx)(h.b.Item,{children:Object(p.jsx)(h.b.Item.Meta,{title:e.menuItem.name,description:"$".concat(e.price)})})}})})]})},E=n(237),R=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(v.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){Object(m.signup)(t).then((function(){e.setState({displayModal:!1}),u.b.success("Successfully signed up")})).catch((function(e){u.b.error(e.message)}))},e.render=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(p.jsx)(E.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(p.jsxs)(I.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(p.jsx)(I.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(p.jsx)(w.a,{prefix:Object(p.jsx)(P.a,{}),placeholder:"Email"})}),Object(p.jsx)(I.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(p.jsx)(w.a,{prefix:Object(p.jsx)(F.a,{}),placeholder:"Password"})}),Object(p.jsx)(I.a.Item,{name:"firstName",rules:[{required:!0,message:"Please input your first name!"}],children:Object(p.jsx)(w.a,{placeholder:"firstname"})}),Object(p.jsx)(I.a.Item,{name:"lastName",rules:[{required:!0,message:"Please input your last name!"}],children:Object(p.jsx)(w.a,{placeholder:"lastname"})}),Object(p.jsx)(I.a.Item,{children:Object(p.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(a.a.Component),A=R,B=l.a.Header,H=l.a.Content,N=o.a.Title;var U=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)(l.a,{style:{height:"100vh"},children:[Object(p.jsx)(B,{children:Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(N,{level:2,style:{color:"white",lineHeight:"inherit",marginBottom:0},children:"Lai Food"}),Object(p.jsx)("div",{children:n?Object(p.jsx)(q,{}):Object(p.jsx)(A,{})})]})}),Object(p.jsx)(H,{style:{padding:"50px",maxHeight:"calc(100% - 64px)",overflowY:"auto"},children:n?Object(p.jsx)(y,{}):Object(p.jsx)(M,{onSuccess:function(){return a(!0)}})})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),J()},39:function(e,t){}},[[231,1,2]]]);
//# sourceMappingURL=main.452abf71.chunk.js.map