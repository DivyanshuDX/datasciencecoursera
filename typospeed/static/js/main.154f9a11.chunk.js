(this.webpackJsonptypospeed=this.webpackJsonptypospeed||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/icon.ae42a6ce.png"},function(t,e,n){t.exports=n(22)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),s=n(3),u=n(4),o=n(7),l=n(6),h=n(10),p=n.n(h),m=n(2),v=n.n(m),f=n(5),d=n(1);n(17),n(18);var g=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{rows:"9",cols:"40",onChange:t.onInputchange,value:t.value,placeholder:"Start typing by pressing Start button"}))};n(19);var b=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"start",type:"button",onClick:t.onClick,value:"Start"}))};n(20);var E=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"reset",type:"button",onClick:t.onClick,value:"Reset"}))};function k(){return(k=Object(f.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.quotable.io/random",t.next=3,fetch("https://api.quotable.io/random");case 3:return n=t.sent,t.next=6,n.json();case 6:return n=t.sent,t.abrupt("return",n.content);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t){return k.apply(this,arguments)};var j=function(t){var e=("0"+t.min).slice(-2),n=("0"+t.sec).slice(-2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e,":",n))},C=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={quote:"Fetching....",character:"Fetching....",value:"",sec:0,min:0},a.clearinterval="",a.wordpermin=0,a.isfirst=!0,a.onInputchange=a.onInputchange.bind(Object(d.a)(a)),a.onClick=a.onClick.bind(Object(d.a)(a)),a.time=a.time.bind(Object(d.a)(a)),a.getQuote=a.getQuote.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var t=Object(f.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,this.setState({quote:e,character:e,value:""});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onInputchange",value:function(t){for(var e,n=t.target.value,a=n.length,i=this.state.quote.length,c=[],s=!0,u=0;u<i;u<u++)n[u]===this.state.quote[u]?e="goodentry":n[u]!==this.state.quote[u]&&a>u?(e="badentry",s=!1):(e="",s=!1),c.push(r.a.createElement("span",{key:u.toString(),className:e},this.state.quote[u]));if(s&&(this.state.min||this.state.sec)){if(clearInterval(this.clearinterval),this.state.min)var o=(60*this.state.min+this.state.sec)/60;else o=this.state.sec/60;var l=this.state.quote.split(" ").length;this.wordpermin=Math.floor(l/o)}this.setState({character:c,value:n})}},{key:"onClick",value:function(t){!this.state.sec&&"Start"===t.target.value&&this.isfirst?(this.clearinterval=setInterval(this.time,1e3),this.isfirst=!1):(this.isfirst=!0,this.getQuote(),clearInterval(this.clearinterval),this.setState({min:0,sec:0,quote:"Fetching....",character:"Fetching...."}),this.wordpermin=0)}},{key:"time",value:function(){60===this.state.sec?this.setState((function(t){return{sec:0,min:t.min+1}})):this.setState((function(t){return{sec:t.sec+1}}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement("p",{id:"quote"},this.state.character),r.a.createElement("div",{id:"mini-container"},r.a.createElement(j,{min:this.state.min,sec:this.state.sec}),r.a.createElement(b,{onClick:this.onClick}),r.a.createElement("p",null,this.wordpermin,"WPM")),r.a.createElement(g,{onInputchange:this.onInputchange,value:this.state.value}),r.a.createElement(E,{onClick:this.onClick}))}}]),n}(r.a.Component);n(21);var O=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"title"},r.a.createElement("span",null,"TypoSpeed"),r.a.createElement("img",{src:p.a,height:"50px",alt:"icon"})),r.a.createElement(C,null))}}]),n}(r.a.Component);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.154f9a11.chunk.js.map