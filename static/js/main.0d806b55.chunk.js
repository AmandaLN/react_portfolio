(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(30),s=a.n(i),r=a(8),c=a(2),u=a(14),l=a(11),o=a(12),m=a(15),d=a(13),h=a(16),b=a.n(h),j=function(){return b.a.get("https://dog.ceo/api/breeds/image/random")},p=function(e){return b.a.get("https://dog.ceo/api/breed/"+e+"/images")},v=function(){return b.a.get("https://dog.ceo/api/breeds/list")},g=(a(54),a(0));var x=function(e){return Object(g.jsx)("button",{onClick:e.onClick,className:"card-btn ".concat(e["data-value"]),"data-value":e["data-value"]})};a(56);var f=function(e){return Object(g.jsxs)("div",{className:"card",style:{backgroundImage:e.image?"url(".concat(e.image,")"):"none"},children:[!e.image&&Object(g.jsx)("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),Object(g.jsx)(x,{onClick:e.handleBtnClick,"data-value":"pass"}),Object(g.jsx)(x,{onClick:e.handleBtnClick,"data-value":"pick"})]})};var O=function(e){return Object(g.jsx)("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(u.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={image:"",match:!1,matchCount:0},e.handleBtnClick=function(t){var a=t.target.attributes.getNamedItem("data-value").value,n=Object(u.a)({},e.state);"pick"===a?(n.match=1===Math.floor(5*Math.random())+1,n.matchCount=n.match?n.matchCount+1:n.matchCount):n.match=!1,e.setState(n),e.loadNextDog()},e.loadNextDog=function(){j().then((function(t){return e.setState({image:t.data.message})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadNextDog()}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-center",children:"Make New Friends"}),Object(g.jsx)("h3",{className:"text-center",children:"Thumbs up on any pups you'd like to meet!"}),Object(g.jsx)(f,{image:this.state.image,handleBtnClick:this.handleBtnClick}),Object(g.jsxs)("h1",{className:"text-center",children:["Made friends with ",this.state.matchCount," pups so far!"]}),Object(g.jsx)(O,{style:{opacity:this.state.match?1:0},type:"success",children:"Yay! That Pup Liked You Too!!!"})]})}}]),a}(n.Component);a(57);var y=function(e){return Object(g.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var k=function(e){return Object(g.jsx)("div",{className:"container",style:e.style,children:e.children})};var C=function(e){return Object(g.jsx)("div",{className:"row",children:e.children})};var q=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(g.jsx)("div",{className:t,children:e.children})};var w=function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)(y,{backgroundImage:"https://i.imgur.com/qkdpN.jpg",children:[Object(g.jsx)("h1",{children:"Pupster"}),Object(g.jsx)("h2",{children:"They're the Good Boys and Girls"})]}),Object(g.jsxs)(k,{style:{marginTop:30},children:[Object(g.jsx)(C,{children:Object(g.jsx)(q,{size:"md-12",children:Object(g.jsx)("h1",{children:"Welcome To Pupster!"})})}),Object(g.jsx)(C,{children:Object(g.jsxs)(q,{size:"md-12",children:[Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis."}),Object(g.jsx)("p",{children:"Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh."}),Object(g.jsx)("p",{children:"Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa."})]})})]})]})};a(58);var S=function(e){return Object(g.jsx)("form",{className:"search",children:Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"breed",children:"Breed Name:"}),Object(g.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"breed",list:"breeds",type:"text",className:"form-control",placeholder:"Type in a dog breed to begin",id:"breed"}),Object(g.jsx)("datalist",{id:"breeds",children:e.breeds.map((function(e){return Object(g.jsx)("option",{value:e},e)}))}),Object(g.jsx)("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success",children:"Search"})]})})};a(59);var P=function(e){return Object(g.jsx)("ul",{className:"list-group search-results",children:e.results.map((function(e){return Object(g.jsx)("li",{className:"list-group-item",children:Object(g.jsx)("img",{alt:"Dog",src:e,className:"img-fluid"})},e)}))})},B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={search:"",breeds:[],results:[],error:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),p(e.state.search).then((function(t){if("error"===t.data.status)throw new Error(t.data.message);e.setState({results:t.data.message,error:""})})).catch((function(t){return e.setState({error:t.message})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){return e.setState({breeds:t.data.message})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(k,{style:{minHeight:"80%"},children:[Object(g.jsx)("h1",{className:"text-center",children:"Search By Breed!"}),Object(g.jsx)(O,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10},children:this.state.error}),Object(g.jsx)(S,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,breeds:this.state.breeds}),Object(g.jsx)(P,{results:this.state.results})]})})}}]),a}(n.Component);a(60);var D=function(){return Object(g.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(g.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Pupster"}),Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{className:"navbar-nav",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link",children:"About"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/discover",className:"/discover"===window.location.pathname?"nav-link active":"nav-link",children:"Discover"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})})]})})]})};a(66);var M=function(){return Object(g.jsx)("footer",{className:"footer",children:Object(g.jsx)("span",{children:"Pupster 2017"})})};a(67);var I=function(e){return Object(g.jsx)("main",{className:"wrapper",children:e.children})};var T=function(){return Object(g.jsx)(r.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(D,{}),Object(g.jsxs)(I,{children:[Object(g.jsx)(c.a,{exact:!0,path:"/",component:w}),Object(g.jsx)(c.a,{exact:!0,path:"/about",component:w}),Object(g.jsx)(c.a,{exact:!0,path:"/discover",component:N}),Object(g.jsx)(c.a,{exact:!0,path:"/search",component:B})]}),Object(g.jsx)(M,{})]})})};a(68),a(69);s.a.render(Object(g.jsx)(T,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.0d806b55.chunk.js.map