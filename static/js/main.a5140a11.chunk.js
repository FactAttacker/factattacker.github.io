(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=n(5),s=n(6),i=n(8),u=n(7),m=n(9),d=n(19),h=n.n(d),g=n(11),p=n.n(g),b=p.a.bind(h.a),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={folder:[{name:"github",index:0,text:"Github",imgUrl:"./image/github.png"},{name:"user-home",index:1,text:"About Me",imgUrl:"./image/user-home.png"},{name:"works",index:2,text:"Works",imgUrl:"./image/computer.png"},{name:"tistory",index:3,text:"Tistory",imgUrl:"./image/logomark.svg"},{name:"user-trash",index:4,text:"\ud734\uc9c0\ud1b5",imgUrl:"./image/user-trash.png"}]},n.handleClickEvt=function(e){switch(console.log(e),e){case"tistory":return console.log(e),window.open("http://backback.tistory.com/");case"github":return window.open("https://github.com/FactAttacker?tab=repositories/")}},n.handleShowFolder=function(){for(var e=n.state.folder,t=function(e,t){return r.a.createElement("li",{key:"folder-list-"+t},r.a.createElement("div",{className:b("folder"),onClick:function(){n.handleClickEvt(e.name)}},r.a.createElement("img",{src:e.imgUrl,alt:e.text}),r.a.createElement("div",{className:b("text")},r.a.createElement("span",null,e.text))))},a=function(e,t){return r.a.createElement("ul",{className:"folder_row",key:"folder-group-"+t}," ",e," ")},c=[],o=[],l=e.length,s=0;l>s;s++)0!==s&&s%3===0&&(console.log(" folder :"+e[s].name),c.push(a(o,s)),o=[]),o.push(t(e[s],s)),l===s+1&&c.push(a(o,s+1));return c},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"content"},r.a.createElement("div",{className:"desktop_bg fade"}),r.a.createElement("div",{className:"desktop"},this.handleShowFolder()))}}]),t}(a.PureComponent);console.log("index.js");var E,v=f,k=n(20),j=n.n(k),O=p.a.bind(j.a),y="FIRST",N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={amPm:null,currentHours:null,currentMinute:null,calendar:null,clockSec:null},n.addZeros=function(e,t){var n="";if((e=e.toString()).length<t)for(var a=0;a<t-e.length;a++)n+="0";return n+e},n.handleChangeTime=function(){var e=0,t=new Date,a=t.getFullYear()+"-"+n.addZeros(t.getMonth()+1,2)+"-"+n.addZeros(t.getDate(),2),r=n.addZeros(t.getHours(),2),c=n.addZeros(t.getMinutes(),2),o=n.addZeros(t.getSeconds(),2),l="\uc624\uc804";r>=12&&(l="\uc624\ud6c4",r=n.addZeros(r-12,2)),"\uc624\uc804"===l&&0===r&&(r=12),null!=y?(e=6e4-1e3*o,y=null):e=6e4,console.log("\ud604\uc7ac \uc2dc\uac04 : "+r+" : "+c),n.setState({amPm:l,currentHours:r,currentMinute:c,calendar:a,clockSec:parseInt(e)})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.handleChangeTime()}},{key:"componentDidMount",value:function(){setTimeout(this.handleChangeTime,this.state.clockSec)}},{key:"componentDidUpdate",value:function(){setInterval(this.handleChangeTime,this.state.clockSec)}},{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"task_bar"},r.a.createElement("input",{className:O("start_bnt"),type:"button"}),r.a.createElement("input",{className:O("sound_on_btn"),type:"button",alt:"\uc0ac\uc6b4\ub4dc"}),r.a.createElement("div",{className:O("date_box")},r.a.createElement("p",{className:O("clock")},r.a.createElement("span",null,this.state.amPm+" "+Number(this.state.currentHours)+":"+this.state.currentMinute)),r.a.createElement("p",{className:O("date")},r.a.createElement("span",null,this.state.calendar)))))}}]),t}(a.PureComponent),w=(n(31),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(N,null))}}]),t}(a.Component)),x=n(23),C=n(2),M=n(22),T=n(15),S=n(42),U=n(41),Z=(Object(S.a)("INCREMENT"),Object(S.a)("DECREMENT"),Object(U.a)((E={},Object(T.a)(E,"INCREMENT",function(e,t){return e+1}),Object(T.a)(E,"DECREMENT",function(e,t){return e-1}),E),0)),_=Object(C.c)({reduxActions:Z}),A=Object(M.createLogger)(),D=Object(C.d)(_,Object(C.a)(A));n(37);o.a.render(r.a.createElement(x.a,{store:D},r.a.createElement(w,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.a5140a11.chunk.js.map