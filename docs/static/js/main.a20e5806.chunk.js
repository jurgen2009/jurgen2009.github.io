(this["webpackJsonptest-graphql-react-master"]=this["webpackJsonptest-graphql-react-master"]||[]).push([[0],{167:function(t,e,a){},168:function(t,e,a){},191:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(0),s=a.n(r),i=a(40),c=a.n(i),o=a(128),l=a.n(o),d=a(142),u=a(14),m=a(21),h=a(9),p=a(10),j=a(23),b=a(13),g=a(12),C=(a(167),a(168),a(91)),I=a.n(C),O=a.p+"static/media/Cart.1efb4f6c.svg",y=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).quantityCounter=function(){var t;return n.props.itemsInCart.map((function(e){return t+=e.quantity}),t=0).reverse()[0]},n.showOverlay=n.showOverlay.bind(Object(j.a)(n)),n.state={data:null,loading:!0,productID:null,quantityInCart:1,itemsInCart:[]},n}return Object(p.a)(a,[{key:"showOverlay",value:function(){!1===this.props.showLabels&&("overlayClosed"===this.props.overlay?(this.props.homeContainerChange("homeContainerOpened"),this.props.overlayChange("overlayOpened"),this.props.contentChange("contentFixed")):(this.props.homeContainerChange("homeContainerClosed"),this.props.overlayChange("overlayClosed"),this.props.contentChange("content")))}},{key:"render",value:function(){var t=this;return 0===this.props.itemsInCart.length?Object(n.jsx)("div",{id:"cart",children:Object(n.jsx)("div",{onClick:function(){t.showOverlay()},children:Object(n.jsx)("img",{src:O,alt:"logo"})})}):Object(n.jsx)("div",{id:"cart",children:Object(n.jsx)("div",{onClick:function(){t.showOverlay()},children:Object(n.jsxs)("svg",{width:"31",height:"29",xmlns:"http://www.w3.org/2000/svg",fill:"none",children:[Object(n.jsx)("rect",{id:"svg_1",fill:"black",y:"0",x:"11",rx:"10",height:"20",width:"20"}),Object(n.jsx)("text",{x:"21",y:"10",textAnchor:"middle",fill:"white",fontSize:"10px",fontFamily:"Arial",dy:".3em",children:this.quantityCounter()}),Object(n.jsx)("path",{id:"svg_2",fill:"#43464E",d:"m19.561,14.8736c-0.379,-0.4633 -0.969,-0.7449 -1.579,-0.7449l-12.823,0l-0.4,-1.4897c-0.232,-0.866 -1.031,-1.4701 -1.958,-1.4701l-2.148,0c-0.358,0 -0.653,0.2816 -0.653,0.6246c0,0.3421 0.294,0.6245 0.653,0.6245l2.148,0c0.316,0 0.589,0.2014 0.673,0.5034l2.569,9.7863c0.232,0.866 1.032,1.4701 1.959,1.4701l8.401,0c0.926,0 1.748,-0.6041 1.958,-1.4701l1.579,-6.202c0.148,-0.5647 0.022,-1.1688 -0.379,-1.6321l0,0zm-0.904,1.3489l-1.58,6.202c-0.084,0.302 -0.358,0.5034 -0.673,0.5034l-8.402,0c-0.316,0 -0.59,-0.2014 -0.674,-0.5034l-1.832,-7.0269l12.487,0c0.211,0 0.421,0.1006 0.548,0.2619c0.126,0.1604 0.188,0.3618 0.126,0.5632l0,-0.0002z"}),Object(n.jsx)("path",{id:"svg_3",fill:"#43464E",d:"m8.444,24.9816c-1.2,0 -2.189,0.9463 -2.189,2.0938c0,1.1474 0.989,2.0937 2.189,2.0937c1.2,0.0007 2.19,-0.9455 2.19,-2.0931c0,-1.1477 -0.99,-2.0946 -2.19,-2.0946l0,0.0002zm0,2.9197c-0.484,0 -0.863,-0.3626 -0.863,-0.8259c0,-0.4632 0.379,-0.8259 0.863,-0.8259c0.485,0 0.864,0.3627 0.864,0.8259c-0.001,0.4436 -0.401,0.8259 -0.864,0.8259z"}),Object(n.jsx)("path",{id:"svg_4",fill:"#43464E",d:"m15.688,24.9814c-1.201,0 -2.19,0.9463 -2.19,2.0938c0,1.1474 0.99,2.0937 2.19,2.0937c1.2,0 2.189,-0.9463 2.189,-2.0937c-0.021,-1.1468 -0.989,-2.0938 -2.189,-2.0938zm0,2.9197c-0.485,0 -0.864,-0.3626 -0.864,-0.8259c0,-0.4632 0.379,-0.8259 0.864,-0.8259c0.484,0 0.863,0.3627 0.863,0.8259c0,0.4436 -0.4,0.8259 -0.863,0.8259z"})]})})})}}]),a}(s.a.Component),v=a.p+"static/media/Backout.a06b8798.svg",x=a(53),f=a.n(x),S=a.p+"static/media/ArrowUp.22c7531e.svg",N=a.p+"static/media/ArrowDown.85a78ce5.svg",w=a.p+"static/media/Dollar.60a0215d.svg",A=a.p+"static/media/Cart2.5d9329b9.svg",k=a(90),T=a(209),L=a(210),D=a(208),P=a(87),F=a(207),B=a(195),q=function(t){var e=t.onChange,a=t.formValues,r=t.handleSubmit,s=t.validateError,i=void 0!==s&&s;return Object(n.jsx)("div",{children:Object(n.jsxs)(D.a,{action:"#",onSubmit:function(t){return r(t,"login")},children:[i&&Object(n.jsx)(P.a,{basic:!0,color:"red",pointing:"below",children:i}),Object(n.jsxs)(D.a.Field,{children:[Object(n.jsx)("label",{htmlFor:"loginPhone",children:"Login"}),Object(n.jsx)(F.a,{name:"loginPhone",value:a.loginPhone||"",onChange:e,label:{content:"+442"},labelPosition:"left",placeholder:"291234567"})]}),Object(n.jsxs)(D.a.Field,{children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(F.a,{name:"password",type:"password",onChange:e,placeholder:"enter password"})]}),Object(n.jsx)(B.a,{type:"submit",className:"signUpButton",positive:!0,icon:"send",labelPosition:"left",content:"Submit"})]})})},E=function(t){var e=t.onChange,a=t.formValues,r=t.handleSubmit,s=t.validateError,i=void 0!==s&&s;return Object(n.jsxs)(D.a,{action:"#",onSubmit:function(t){return r(t,"reg")},children:[Object(n.jsxs)(D.a.Group,{widths:"equal",children:[Object(n.jsxs)(D.a.Field,{children:[Object(n.jsx)("label",{htmlFor:"loginPhone",children:"Login"}),Object(n.jsx)(F.a,{name:"loginPhone",value:a.loginPhone||"",onChange:e,label:{content:"+442"},labelPosition:"left",placeholder:"072862288"})]}),Object(n.jsx)(D.a.Field,{control:F.a,value:a.companyName||"",onChange:e,name:"address",label:"address",placeholder:"London, 18 Abbey Rd"})]}),Object(n.jsx)(D.a.Group,{widths:"equal",children:Object(n.jsx)(D.a.Field,{control:F.a,value:a.directorName||"",onChange:e,name:"Name",label:"Name",placeholder:"John Doe"})}),Object(n.jsx)(D.a.Field,{type:"password",onChange:e,name:"password",control:F.a,label:"password",placeholder:"enter password"}),Object(n.jsx)(D.a.Field,{type:"password",onChange:e,name:"secondPassword",control:F.a,label:"password check",placeholder:"repeat password"}),i&&Object(n.jsx)(P.a,{basic:!0,color:"red",pointing:!0,children:i.map((function(t,e){return Object(n.jsx)("div",{children:t},e)}))}),Object(n.jsx)(B.a,{type:"submit",className:"signUpButton",positive:!0,icon:"signup",labelPosition:"right",content:"Registration",style:{display:"block"}})]})},U=a(212),Q=a(63),R=function(t){var e=t.text;return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{as:"h2",icon:!0,textAlign:"center",children:[Object(n.jsx)(Q.a,{name:"checkmark",circular:!0}),Object(n.jsx)(U.a.Content,{children:e})]})})};function G(t){var e={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("/api/register",e)}var J=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={open:!1,dimmer:"blurring",isSignUpForm:!1,isSuccessForm:!1,formValues:{},validateError:!1},t.toggleForm=function(){return t.setState({isSignUpForm:!0,validateError:!1})},t.show=function(){return t.setState({open:!0})},t.close=function(){return t.setState({open:!1,isSignUpForm:!1,validateError:!1,isSuccessForm:!1})},t.onChange=function(e){t.setState({formValues:Object.assign(t.state.formValues,Object(k.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e,a){if(e.preventDefault(),"reg"===a)return G(t.state.formValues).then((function(e){return e.json().then((function(a){return a.error?t.setState({validateError:a.value}):200!==e.status?t.setState({validateError:[a]}):(t.props.signInObserver(!0,a),t.setState({isSuccessForm:"Registration successful!"}))}))}));"login"===a&&(t.setState({validateError:!1}),console.log(t.state.formValues),null!==t.state.formValues&&(t.props.signInObserver1(!0,t.state.formValues.loginPhone),t.setState({isSuccessForm:"Authentication successful!"})),t.setState({validateError:t.state.formValues.loginPhone}))},t}return Object(p.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.open,r=e.dimmer,s=e.isSignUpForm,i=e.isSuccessForm,c=e.formValues,o=e.validateError;return Object(n.jsxs)("div",{children:[t.props.user?void 0:Object(n.jsx)(T.a.Item,{name:"login",onClick:t.show,children:"Login"}),Object(n.jsxs)(L.a,{size:s?"tiny":"mini",dimmer:r,open:a,onClose:this.close,closeIcon:!0,children:[Object(n.jsx)(L.a.Header,{className:"text-center",children:s?"Registration (disabled)":"Authentication (database is disabled, you can type any values to login)"}),Object(n.jsx)(L.a.Content,{children:Object(n.jsx)(L.a.Description,{children:i?Object(n.jsx)(R,{text:t.state.isSuccessForm}):s?Object(n.jsx)(E,{onChange:t.onChange,handleSubmit:t.handleSubmit,formValues:c,validateError:o}):Object(n.jsx)(q,{onChange:t.onChange,handleSubmit:t.handleSubmit,formValues:c,validateError:o})})}),Object(n.jsx)(L.a.Actions,{children:!s&&!i&&Object(n.jsxs)("div",{className:"text-center form-switcher",children:[Object(n.jsx)("div",{className:"modalTextUI",children:Object(n.jsx)("h4",{children:"No account?"})}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"modalButtonUI",children:[" ",Object(n.jsx)("button",{className:"ui inverted green button",onClick:this.toggleForm,children:" Registration "})," "]})]})})]})]})}}]),a}(r.Component),V=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).dropDown=function(){"overlayOpened"!==n.props.overlay&&n.setState((function(t){return{showLabels:!t.showLabels}}))},n.selectItem=function(t,e){n.setState({selectedLabels:t.symbol,showLabels:!1,currentCurrency:e}),localStorage.setItem("currentCurrency",e),localStorage.setItem("selectedCurrency",t.symbol)},n.handlerCategoryName=function(t){n.props.updateDataName(t)},n.signInObserver1=function(t,e){console.log(e),n.props.signInObserver(t,e)},n.changeCurrency=function(t){n.props.updateUpCurrency(t)},n.handlerCategoryName=n.handlerCategoryName.bind(Object(j.a)(n)),n.changeCurrency=n.changeCurrency.bind(Object(j.a)(n)),n.homeContainerChange=n.homeContainerChange.bind(Object(j.a)(n)),n.overlayChange=n.overlayChange.bind(Object(j.a)(n)),n.contentChange=n.contentChange.bind(Object(j.a)(n)),n.state={categories:[],dataC:[],loading:!0,category:null,total:0,itemsInCart:n.props.itemsInCart,currentCurrency:null===localStorage.getItem("currentCurrency")?0:localStorage.getItem("currentCurrency"),labels:[],showLabels:!1,selectedLabels:null===localStorage.getItem("selectedCurrency")?"$":localStorage.getItem("selectedCurrency"),overlay:"overlayClosed",homeContainerChange:"homeContainerClosed",contentChange:"content",currencies:[{id:0,label:"USD",symbol:"$"},{id:1,label:"GBP",symbol:"\xa3"},{id:2,label:"AUD",symbol:"A$"},{id:3,label:"JPY",symbol:"\xa5"},{id:4,label:"RUB",symbol:"\u20bd"}]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://dummyjson.com/products").then((function(t){return t.json()})).then((function(e){var a=e.products.map((function(t){return t.category})),n=Object(m.a)(new Set(a));console.log(n),t.setState({categories:n,loading:!1})}))}},{key:"homeContainerChange",value:function(){"overlayOpened"===this.props.overlay?this.props.homeContainerChange("homeContainerClosed"):this.props.homeContainerChange("homeContainerOpened")}},{key:"overlayChange",value:function(){"overlayOpened"===this.props.overlay?this.props.overlayChange("overlayClosed"):this.props.overlayChange("overlayOpened")}},{key:"contentChange",value:function(){"contentFixed"===this.props.contentState?this.props.contentChange("content"):this.props.contentChange("contentFixed")}},{key:"render",value:function(){var t=this,e=(Object.keys(this.state.dataC).map((function(e){return[Number(e),t.state.dataC[e]]})),this.state),a=e.loading,r=e.currencies;return console.log(r),a?"Loading...":Object(n.jsxs)("header",{children:[Object(n.jsxs)("ul",{id:"nav",children:[this.state.categories.map((function(e,a){return Object(n.jsx)("li",{children:Object(n.jsx)(f.a,{to:"/".concat(e),className:"label",onClick:function(){t.handlerCategoryName(e)},children:e},a)},e)})),Object(n.jsx)("button",{className:"buttonSelectBox",children:Object(n.jsx)("div",{className:"select-box--box",children:Object(n.jsxs)("div",{className:"select-box--container",children:[Object(n.jsx)("div",{className:"select-box--selected-item",children:this.state.selectedLabels}),Object(n.jsx)("div",{className:"select-box--arrow",onClick:this.dropDown,children:Object(n.jsx)("img",{src:"".concat(this.state.showLabels?S:N),alt:""})}),Object(n.jsx)("div",{style:{display:this.state.showLabels?"block":"none"},className:"select-box--items",children:r.map((function(e,a){return Object(n.jsxs)("div",{onClick:function(){t.selectItem(e,a),t.changeCurrency(a)},className:t.state.selectedLabels===e?"selected":"",children:[e.symbol," ",e.label]},e.id)}))})]})})}),Object(n.jsx)("div",{className:"backOutButton",children:Object(n.jsx)(f.a,{to:"/",id:"backout-button",children:Object(n.jsx)("img",{src:v,alt:"logo"})})}),Object(n.jsx)("div",{className:"checkOut",children:null===this.props.user?Object(n.jsx)("button",{className:"ui inverted green button",children:Object(n.jsx)(J,{user:this.props.user,signInObserver1:this.signInObserver1})}):Object(n.jsx)("div",{className:"checkOutTotal",children:Object(n.jsx)(y,{itemsInCart:this.props.itemsInCart,showLabels:this.state.showLabels,homeContainerChange:this.homeContainerChange,overlayChange:this.overlayChange,contentChange:this.contentChange,overlay:this.props.overlay})})})]}),Object(n.jsxs)("div",{className:"progressBar",children:[Object(n.jsx)("div",{className:"progressBar1",style:{backgroundColor:this.props.itemsInCart.length>0?"#5ECE7B":"white"},children:Object(n.jsx)("img",{src:"".concat(this.props.itemsInCart.length>0?A:"none"),alt:""})}),Object(n.jsx)("div",{className:"progressBar2",style:{backgroundColor:this.props.itemsInOrder.length>0?"#5ECE7B":"white"},children:Object(n.jsx)("img",{src:"".concat(this.props.itemsInOrder.length>0?w:"none"),alt:""})}),Object(n.jsx)("div",{className:"progressBar3"}),Object(n.jsx)("div",{className:"progressBar4"})]})]})}}]),a}(s.a.Component),M=a.p+"static/media/CardHover.fed9eb10.svg",_=a.p+"static/media/OutOfStock.8fd89e8e.svg",z=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).showProductItem=function(t){console.log(t),n.props.showProduct(t)},n.addProductArr=function(){console.log(n.state.data.products[0]),console.log(n.props.productID),n.props.addToCart(n.props.productID?{indexId:n.props.itemsInCart.length,data:n.state.data.products[n.props.productID-1],quantity:1,imageIndex:0,itemCurrency:n.props.currencies[n.props.currentCurrency].symbol,priceForAll:n.state.data.products[n.props.productID-1].price}:null)},n.state={data:null,loading:!0,productID:"0",category:null,galleryIndex:0,itemsInCart:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://dummyjson.com/products").then((function(t){return t.json()})).then((function(e){t.setState({data:e,loading:!1})}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.loading,r=e.data;if(a)return"Loading...";var s=this.props.currencies[this.props.currentCurrency];return Object(n.jsxs)("div",{className:this.props.contentState,children:[Object(n.jsx)("div",{className:"contentCategoryName",children:this.props.categoryName}),Object(n.jsx)("ul",{className:"contentUnorderedCards",children:r.products.map((function(e,a){return e.category.includes(t.props.categoryName)?Object(n.jsx)("li",{className:"contentListCards",children:Object(n.jsxs)("div",{className:"contentCard",children:[Object(n.jsx)(f.a,{to:"/product/".concat(e.id),children:Object(n.jsx)("img",{className:"contentImg",onMouseOver:function(){t.showProductItem(e.id)},src:e.images[0],alt:"logo"},e.id)}),console.log(t.props.isAuthenticated),console.log(!1!==t.props.isAuthenticated),!1!==t.props.isAuthenticated?r.products.map((function(a){return a.id===t.props.productID?a.stock>30?Object(n.jsx)("img",{className:"cardHoverSvg",src:M,alt:"logo",onClick:function(){t.addProductArr()}}):Object(n.jsx)(f.a,{className:"OutOfStock",to:"/product/".concat(e.id),children:Object(n.jsx)("img",{src:_,alt:"logo"})}):null})):null,Object(n.jsx)("div",{className:"contentTextName",onMouseOver:function(){t.showProductItem(e.id)},children:e.brand}),Object(n.jsx)("div",{className:"contentTextName",onMouseOver:function(){t.showProductItem(e.id)},children:e.title}),Object(n.jsxs)("div",{className:"contentTextPrice",onMouseOver:function(){t.showProductItem(e.id)},children:[e.price," ",s.symbol]})]})},a):null}))})]})}}]),a}(s.a.Component),H=a(145),$=function(t,e){return I.a[t]("<span>".concat(e,"</span>"),{position:"top-right",effect:"bouncyflip",onShow:function(){},html:!0,beep:!1,timeout:3e3})},Y=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).handlerGallery=function(t){n.setState({galleryIndex:t}),n.props.updateGallery(t)},n.addProductArr=function(){n.props.addToCart(n.props.productID?{indexId:n.props.itemsInCart.length,data:n.state.data,quantity:1,imageIndex:0,itemCurrency:n.props.currencies[n.props.currentCurrency].symbol,priceForAll:n.state.data.price}:null)},n.handlerGallery=n.handlerGallery.bind(Object(j.a)(n)),n.state={data:[],loading:!0,category:null,galleryIndex:0,itemsInCart:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://dummyjson.com/products").then((function(t){return t.json()})).then((function(e){t.setState({data:e.products[t.props.productID-1],loading:!1})})),window.scrollTo(0,0)}},{key:"render",value:function(){var t=this,e=this.state,a=e.loading,r=e.data;if(console.log(r),a)return"Loading...";console.log(r.images);var s=this.props.currencies[this.props.currentCurrency];return null!==this.props.productID?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"product",children:[Object(n.jsx)("ul",{id:"galleryList",className:"galleryList",children:r.images.map((function(e,a){return Object(n.jsx)("li",{onClick:function(){t.handlerGallery(a)},children:Object(n.jsx)("img",{className:"galleryListImg",src:e,alt:"logo",style:0===a?{display:"none"}:{}},a)},a)}))}),Object(n.jsxs)("div",{className:"galleryItem",children:[Object(n.jsx)("div",{className:"galleryItemImg",children:Object(n.jsx)("img",{src:r.images[this.props.galleryIndex],alt:"logo"})}),Object(n.jsxs)("div",{className:"galleryAddInfo",children:[Object(n.jsx)("span",{className:"attributesItemName",children:r.title}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"galleryAddInfoPrice",children:["PRICE: ",r.price," ",s.symbol," "]}),Object(n.jsx)("div",{className:"galleryAddInfoPriceNumbers"}),Object(n.jsxs)("div",{className:"galleryRight",children:[Object(n.jsx)("button",{id:"galleryAddInfoButton",onClick:function(){if(!1!==t.props.isAuthenticated){if(r.stock>30)return t.addProductArr();$("success","product out of stock!")}else $("success","You need to login to access!")},children:"ADD TO CART"}),Object(n.jsx)("div",{className:"galleryAddInfoDescription",children:Object(H.a)(r.description)})]})]})]})]})}):"Loading..."}}]),a}(s.a.Component),W=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).closeOverlay=function(){n.props.homeContainerChange("homeContainerClosed"),n.props.overlayChange("overlayClosed"),n.props.contentChange("content")},n.handlerIncreaseQuantity=function(t){n.props.increaseQuantity(t)},n.handlerDecreaseQuantity=function(t){n.props.decreaseQuantity(t)},n.handlerCheckout=function(){localStorage.removeItem("itemsInCart")},n.quantityCounter=function(){var t;return n.props.itemsInCart.map((function(e){return t+=e.quantity}),t=0).reverse()[0]},n.closeOverlay=n.closeOverlay.bind(Object(j.a)(n)),n.state={productID:null,data:[],loading:!0,category:null,galleryIndex:1,itemsInCart:[],attributesFull:[],amountToPay:0},n}return Object(p.a)(a,[{key:"render",value:function(){var t,e=this,a=0;return a=void 0!==this.props.itemsInCart.map((function(e){return t+=e.data.price*e.quantity}),t=0).reverse()[0]?this.props.itemsInCart.map((function(e){return t+=e.data.price*e.quantity}),t=0).reverse()[0]:0,Object(n.jsx)("div",{className:this.props.overlay,onClick:this.closeOverlay,children:Object(n.jsxs)("div",{id:"shopping-cart",onClick:function(t){return t.stopPropagation()},children:[Object(n.jsxs)("div",{id:"cart-header",children:["My Bag, ",this.quantityCounter()," items"]}),Object(n.jsx)("ul",{children:this.props.itemsInCart.map((function(t,a){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"groupContent",children:[Object(n.jsx)("div",{className:"groupContentImgSC1",children:Object(n.jsxs)("div",{className:"shoppingCartItemList",children:[Object(n.jsx)("div",{className:"shoppingCartItemListTextName",children:t.data.brand}),Object(n.jsx)("div",{className:"shoppingCartItemListTextName",children:t.data.title}),Object(n.jsxs)("div",{className:"shoppingCartItemListTextPrice",children:[t.data.price*t.quantity," ",t.itemCurrency]})," "]})}),Object(n.jsxs)("div",{className:"groupContentImgSC2",children:[Object(n.jsxs)("div",{className:"plus_minusContentImgSC",children:[Object(n.jsx)("div",{className:"plusContentImgSC",onClick:function(){e.handlerIncreaseQuantity({indexId:e.props.itemsInCart.length,data:t.data,quantity:1,imageIndex:0,itemCurrency:e.props.currentCurrency,priceForAll:t.data.price})},children:"+"}),Object(n.jsx)("div",{className:"countContentImgSC",children:Object(n.jsx)("span",{className:"countContentImgSCNumber",children:e.props.itemsInCart[a].quantity})}),Object(n.jsx)("div",{className:"minusContentImgSC",onClick:function(){e.handlerDecreaseQuantity({indexId:e.props.itemsInCart.length,data:t.data,quantity:1,imageIndex:0,itemCurrency:e.props.currentCurrency,priceForAll:t.data.price})},children:"-"})]}),Object(n.jsx)("img",{className:"contentImgSC",src:t.data.thumbnail,alt:"logo"},t.id)]})]})},a)}))}),Object(n.jsx)("div",{id:"empty-cart",children:0===this.props.itemsInCart.length?"Shopping cart is empty":""}),Object(n.jsxs)("div",{id:"totals",children:[Object(n.jsxs)("div",{className:"totals1",children:[Object(n.jsx)("div",{className:"totalsText",children:"Total: "}),Object(n.jsxs)("div",{children:[this.props.itemsInCart.map((function(t,e){return 0===e?t.currency:null})),a.toFixed(2)," ",this.props.itemsInCart[0]?this.props.itemsInCart[0].itemCurrency:""]})]}),Object(n.jsxs)("div",{className:"totals2",children:[Object(n.jsx)(f.a,{to:"/bag",className:"viewLink",children:Object(n.jsx)("button",{id:"viewBag",children:Object(n.jsx)("span",{className:"viewBagText",children:"VIEW BAG"})})}),Object(n.jsx)("button",{id:"checkout",className:"viewLink",onClick:function(){localStorage.removeItem("itemsInCart")},disabled:0===this.props.itemsInCart.length,children:Object(n.jsx)("span",{className:"checkOutText",children:"CHECK OUT"})})]})]})]})})}}]),a}(s.a.Component),K=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).amountToPay=function(){var t;return n.props.itemsInCart.map((function(e){return t+=e.price}),t=0).reverse()[0]},n.addCartToOrder=function(){var t=JSON.parse(localStorage.getItem("itemsInOrder")||"[]"),e=Object(m.a)(n.props.itemsInCart);t.push(e),n.props.sendToOrder(t)},n.arrowRight=function(t){n.props.bagArrowRight(t)},n.arrowLeft=function(t){n.props.bagArrowLeft(t)},n.handlerIncreaseQuantity=function(t){n.props.increaseQuantity(t)},n.handlerDecreaseQuantity=function(t){n.props.decreaseQuantity(t)},n.quantityCounter=function(){var t;return n.props.itemsInCart.map((function(e){return t+=e.quantity}),t=0).reverse()[0]},n.state={productID:null,data:[],loading:!0,category:null,itemsInCart:[],amountToPay:0,imageIndex:0},n}return Object(p.a)(a,[{key:"render",value:function(){var t,e=this,a=0;return a=void 0!==this.props.itemsInCart.map((function(e){return t+=e.data.price*e.quantity}),t=0).reverse()[0]?this.props.itemsInCart.map((function(e){return t+=e.data.price*e.quantity}),t=0).reverse()[0]:0,0===this.props.itemsInCart.length?Object(n.jsx)("div",{id:"empty",children:"SHOPPING CART IS EMPTY!"}):Object(n.jsxs)("div",{id:"cart-bag",children:[Object(n.jsxs)("div",{id:"cartBag-header",children:[Object(n.jsx)("span",{id:"cartBag-title",children:"CART"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"bagUnderline"})]}),Object(n.jsx)("ul",{children:this.props.itemsInCart.map((function(t,a){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{className:"groupContentBag",children:[Object(n.jsx)("div",{className:"groupContentImgBag1",children:Object(n.jsxs)("div",{className:"shoppingCartItemList",children:[Object(n.jsx)("div",{className:"shoppingCartItemListNameBagText",children:t.data.brand}),Object(n.jsx)("div",{className:"shoppingCartItemListNameBagText",children:t.data.title}),Object(n.jsxs)("span",{className:"shoppingCartItemListPriceBagText",children:[e.props.itemsInCart[0]?e.props.itemsInCart[0].itemCurrency:"",t.data.price]})]})}),Object(n.jsxs)("div",{className:"groupContentImgBag2",children:[Object(n.jsxs)("div",{className:"plus_minusContentImgBag",children:[Object(n.jsx)("div",{className:"plusContentImgBag",onClick:function(){e.handlerIncreaseQuantity({indexId:e.props.itemsInCart.length,data:t.data,quantity:1,imageIndex:0,itemCurrency:e.props.currentCurrency,priceForAll:t.data.price})},children:Object(n.jsx)("span",{className:"plusSvg",children:Object(n.jsxs)("svg",{width:"25",height:"25",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("rect",{fill:"white",height:"22",id:"svg_1",width:"20",x:"3",y:"2"}),Object(n.jsx)("path",{d:"m13.5,5l0,15",id:"svg_2",stroke:"#1D1F22",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"m6,12.5l15,0",id:"svg_3",stroke:"#1D1F22",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),Object(n.jsx)("div",{className:"countContentImgBag",children:e.props.itemsInCart[a].quantity}),Object(n.jsx)("div",{className:"minusContentImgBag",onClick:function(){e.handlerDecreaseQuantity({indexId:e.props.itemsInCart.length,data:t.data,quantity:1,imageIndex:0,itemCurrency:e.props.currentCurrency,priceForAll:t.data.price})},children:Object(n.jsx)("span",{className:"minusSvg",children:Object(n.jsx)("svg",{width:"17",height:"1",viewBox:"0 0 17 1",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M1 0.5H16",stroke:"#1D1F22",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),Object(n.jsx)("img",{className:"contentImgBag",src:t.data.images[t.imageIndex],alt:"logo"},t.id),Object(n.jsx)("div",{onClick:function(){e.arrowLeft({indexId:e.props.itemsInCart[a].indexId,id:e.props.itemsInCart[a].id,name:e.props.itemsInCart[a].name,brand:e.props.itemsInCart[a].brand,gallery:e.props.itemsInCart[a].gallery,prices:e.props.itemsInCart[a].prices,attributesFull:e.props.itemsInCart[a].attributesFull,currency:e.props.itemsInCart[a].currency,price:e.props.itemsInCart[a].price*e.props.itemsInCart[a].quantity,image:e.props.itemsInCart[a].image,priceForOne:e.props.itemsInCart[a].price})},className:t.data.images.length>1?"bagArrowLeftImage":"bagArrowImageNone",children:Object(n.jsx)("svg",{className:"bagArrow",width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M7.25 1.06857L1.625 6.6876L7.25 12.3066",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(n.jsx)("div",{onClick:function(){e.arrowRight({indexId:e.props.itemsInCart[a].indexId,id:e.props.itemsInCart[a].id,name:e.props.itemsInCart[a].name,brand:e.props.itemsInCart[a].brand,gallery:e.props.itemsInCart[a].gallery,prices:e.props.itemsInCart[a].prices,attributesFull:e.props.itemsInCart[a].attributesFull,currency:e.props.itemsInCart[a].currency,price:e.props.itemsInCart[a].price*e.props.itemsInCart[a].quantity,image:e.props.itemsInCart[a].image,priceForOne:e.props.itemsInCart[a].price})},className:t.data.images.length>1?"bagArrowRightImage":"bagArrowRightImageNone",children:Object(n.jsx)("svg",{className:"bagArrow",width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M0.75 1.06808L6.375 6.68711L0.75 12.3062",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),Object(n.jsx)("div",{className:"bagUnderline"})]},a)}))}),Object(n.jsx)("div",{id:"empty-cart",children:0===this.props.itemsInCart.length?"Shopping cart is empty":""}),Object(n.jsxs)("div",{id:"bagTotals",children:[Object(n.jsxs)("div",{id:"bagTax",children:["Tax 21%: ",Object(n.jsxs)("div",{className:"totalsBagFont",children:[this.props.itemsInCart[0]?this.props.itemsInCart[0].itemCurrency:"",(21*a/100).toFixed(2)]})]}),Object(n.jsxs)("div",{id:"bagQuantity",children:["Quantity: ",Object(n.jsx)("div",{className:"totalsBagFont",children:this.quantityCounter()})]}),Object(n.jsxs)("div",{id:"bagTotalSum",children:[Object(n.jsx)("span",{id:"bagTotalName",children:"Total: "}),Object(n.jsxs)("span",{className:"totalsBagFont",children:[this.props.itemsInCart[0]?this.props.itemsInCart[0].itemCurrency:"",a.toFixed(2)]})]}),Object(n.jsx)("button",{id:"bagOrderButton",onClick:function(){e.addCartToOrder(),localStorage.removeItem("itemsInCart"),$("success","your order put in process!")},children:"ORDER"})]})]})}}]),a}(s.a.Component),X=a(213),Z=a(214),tt=function(t){Object(b.a)(a,t);var e=Object(g.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).signInObserver=function(t,e){t?(console.log(e),n.setState({isAuthenticated:!0,user:e}),localStorage.setItem("user",e),localStorage.setItem("isAuthenticated",t)):n.setState({isAuthenticated:!1})},n.addToCart=function(t){console.log(t);var e=Object(m.a)(n.state.itemsInCart),a=e.findIndex((function(e){return e.data.title===t.data.title}));if(console.log(e),console.log(a),-1===a)n.setState({itemsInCart:[].concat(Object(m.a)(n.state.itemsInCart),[t])}),localStorage.setItem("itemsInCart",JSON.stringify([].concat(Object(m.a)(n.state.itemsInCart),[t])));else{var r=Object(u.a)({},e[a]);r.quantity++,e[a]=r,n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{itemsInCart:e})})),localStorage.setItem("itemsInCart",JSON.stringify(Object(m.a)(n.state.itemsInCart)))}},n.bagArrowRight=function(t){var e=Object(m.a)(n.state.itemsInCart),a=e.findIndex((function(e){return e.indexId===t.indexId}));if(a<0)e.push(Object(u.a)(Object(u.a)({},t),{},{imageIndex:0}));else{var r=Object(u.a)({},e[a]),s=r.data.images.length;r.imageIndex<s-1?r.imageIndex++:r.imageIndex=0,e[a]=r}setTimeout((function(){n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{itemsInCart:e})}))}),300)},n.bagArrowLeft=function(t){var e=Object(m.a)(n.state.itemsInCart),a=e.findIndex((function(e){return e.indexId===t.indexId}));if(a<0)e.push(Object(u.a)(Object(u.a)({},t),{},{imageIndex:0}));else{var r=Object(u.a)({},e[a]);r.imageIndex<1?r.imageIndex=0:r.imageIndex--,e[a]=r}setTimeout((function(){n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{itemsInCart:e})}))}),300)},n.sendToOrder=function(t){n.setState({itemsInOrder:[].concat(Object(m.a)(n.state.itemsInOrder),[t])})},n.increaseQuantity=function(t){console.log(t);var e=Object(m.a)(n.state.itemsInCart),a=e.findIndex((function(e){return e.data.title===t.data.title}));if(console.log(e),console.log(a),-1===a)n.setState({itemsInCart:[].concat(Object(m.a)(n.state.itemsInCart),[t])}),localStorage.setItem("itemsInCart",JSON.stringify([].concat(Object(m.a)(n.state.itemsInCart),[t])));else{var r=Object(u.a)({},e[a]);r.quantity++,e[a]=r,n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{itemsInCart:e})})),localStorage.setItem("itemsInCart",JSON.stringify(Object(m.a)(n.state.itemsInCart)))}},n.decreaseQuantity=function(t){var e=Object(m.a)(n.state.itemsInCart);console.log(e),e.findIndex((function(t){return console.log(t.data.id)}));var a=e.findIndex((function(e){return e.data.id===t.data.id})),r=Object(u.a)({},e[a]);console.log(a),console.log(r),r.quantity--,r.quantity<=0?e.splice(a,1):(e[a]=r,r.priceForAll=r.priceForAll-r.data.price),setTimeout((function(){n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{itemsInCart:e})}))}),300),setTimeout((function(){localStorage.setItem("itemsInCart",JSON.stringify(Object(m.a)(n.state.itemsInCart)))}),300)},n.showProduct=function(t){console.log(t),n.setState({productID:t}),localStorage.setItem("productID",t)},n.updateUpCurrency=function(){var t=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({currentCurrency:e}),localStorage.setItem("currentCurrency",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.updateDataName=function(t){n.setState({categoryName:t}),localStorage.setItem("categoryName",t)},n.updateGallery=function(t){n.setState({galleryIndex:t})},n.homeContainerChange=function(t){n.setState({homeContainerState:t})},n.overlayChange=function(t){n.setState({overlay:t})},n.contentChange=function(t){n.setState({contentState:t})},n.addToCart=n.addToCart.bind(Object(j.a)(n)),n.updateUpCurrency=n.updateUpCurrency.bind(Object(j.a)(n)),n.state={isAuthenticated:null!==localStorage.getItem("isAuthenticated")&&localStorage.getItem("isAuthenticated"),user:null===localStorage.getItem("user")?null:localStorage.getItem("user"),data:null,loading:!0,categoryName:null===localStorage.getItem("categoryName")?"":localStorage.getItem("categoryName"),productID:null===localStorage.getItem("productID")?0:localStorage.getItem("productID"),galleryIndex:1,currentCurrency:null===localStorage.getItem("currentCurrency")?0:localStorage.getItem("currentCurrency"),items:[],amountToPay:null,itemsInCart:null===JSON.parse(localStorage.getItem("itemsInCart"))?[]:JSON.parse(localStorage.getItem("itemsInCart")),itemsInOrder:[],homeContainerState:"homeContainerClosed",overlay:"overlayClosed",contentState:"content",currencies:[{id:0,label:"USD",symbol:"$"},{id:1,label:"GBP",symbol:"\xa3"},{id:2,label:"AUD",symbol:"A$"},{id:3,label:"JPY",symbol:"\xa5"},{id:4,label:"RUB",symbol:"\u20bd"}]},n}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:this.state.homeContainerState,children:[Object(n.jsx)(V,{updateDataName:this.updateDataName,isAuthenticated:this.state.isAuthenticated,data1:this.state,updateUpCurrency:this.updateUpCurrency,quantity:this.state.quantity,amountToPay:this.state.amountToPay,itemsInCart:this.state.itemsInCart,currentCurrency:this.state.currentCurrency,homeContainerChange:this.homeContainerChange,overlayChange:this.overlayChange,contentChange:this.contentChange,overlay:this.state.overlay,contentState:this.state.contentState,currencies:this.state.currencies,itemsInOrder:this.state.itemsInOrder,signInObserver:this.signInObserver,user:this.state.user}),Object(n.jsxs)(X.a,{children:[Object(n.jsx)(Z.a,{exact:!0,path:["/".concat(null===localStorage.getItem("categoryName")?this.state.categoryName:localStorage.getItem("categoryName")),""],render:function(){return Object(n.jsx)(z,{categoryName:t.state.categoryName,isAuthenticated:t.state.isAuthenticated,showProduct:t.showProduct,currentCurrency:t.state.currentCurrency,addToCart:t.addToCart,productID:t.state.productID,itemsInCart:t.state.itemsInCart,contentState:t.state.contentState,currencies:t.state.currencies})}}),Object(n.jsx)(Z.a,{path:"/product/".concat(localStorage.getItem("productID")),render:function(){return Object(n.jsx)(Y,{updateGallery:t.updateGallery,productID:t.state.productID,currentCurrency:t.state.currentCurrency,updateAttributesItemId:t.updateAttributesItemId,updateAttributesItemIdSwatch:t.updateAttributesItemIdSwatch,addToCart:t.addToCart,updateAttributesItemIdAdd1:t.updateAttributesItemIdAdd1,updateAttributesItemIdAdd2:t.updateAttributesItemIdAdd2,itemsInCart:t.state.itemsInCart,showProduct:t.showProduct,galleryIndex:t.state.galleryIndex,currencies:t.state.currencies,user:t.state.user,isAuthenticated:t.state.isAuthenticated})}}),Object(n.jsx)(Z.a,{path:"/bag",render:function(){return Object(n.jsx)(K,{data:t.state,itemsInCart:t.state.itemsInCart,itemsInOrder:t.state.itemsInOrder,sendToOrder:t.sendToOrder,updateGallery:t.updateGallery,productID:t.state.productID,currentCurrency:t.state.currentCurrency,updateAttributesItemId:t.updateAttributesItemId,updateAttributesItemIdSwatch:t.updateAttributesItemIdSwatch,addToCart:t.addToCart,items:t.state.items,increaseQuantity:t.increaseQuantity,decreaseQuantity:t.decreaseQuantity,updateAttributesItemIdAdd1:t.updateAttributesItemIdAdd1,updateAttributesItemIdAdd2:t.updateAttributesItemIdAdd2,attributesItemIdAdd1:t.state.attributesItemIdAdd1,attributesItemIdAdd2:t.state.attributesItemIdAdd2,amountToPay:t.state.amountToPay,bagArrowRight:t.bagArrowRight,bagArrowLeft:t.bagArrowLeft,currencies:t.state.currencies})}})]}),Object(n.jsx)(W,{data:this.state,itemsInCart:this.state.itemsInCart,updateGallery:this.updateGallery,productID:this.state.productID,currentCurrency:this.state.currentCurrency,updateAttributesItemId:this.updateAttributesItemId,updateAttributesItemIdSwatch:this.updateAttributesItemIdSwatch,addToCart:this.addToCart,items:this.state.items,increaseQuantity:this.increaseQuantity,decreaseQuantity:this.decreaseQuantity,updateAttributesItemIdAdd1:this.updateAttributesItemIdAdd1,updateAttributesItemIdAdd2:this.updateAttributesItemIdAdd2,attributesItemIdAdd1:this.state.attributesItemIdAdd1,attributesItemIdAdd2:this.state.attributesItemIdAdd2,amountToPay:this.state.amountToPay,homeContainerChange:this.homeContainerChange,overlay:this.state.overlay,overlayChange:this.overlayChange,contentChange:this.contentChange,contentState:this.state.contentState,currencies:this.state.currencies,user:this.state.user,isAuthenticated:this.state.isAuthenticated}),Object(n.jsx)(I.a,{stack:{limit:5,spacing:10},offset:40})]})}}]),a}(s.a.Component),et=a(215),at=a(148),nt=(a(190),Object(at.a)());c.a.render(Object(n.jsx)(et.a,{history:nt,children:Object(n.jsx)(tt,{})}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.a20e5806.chunk.js.map