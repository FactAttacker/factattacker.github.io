(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){e.exports=n(48)},40:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),c=n.n(r),o=n(2),s=n(3),u=n(6),i=n(4),m=n(7),d=n(5),p=n(22),b=n.n(p),f=n(13),E=n.n(f),h=n(23),S=n(1),g=n(24),v=n.n(g),O=n(25),x="FOLDER_OPEN",C="FOLDER_SELECTED",y="FOLDER_CLOSE";function j(e){return{type:C,index:e}}function k(e){return{type:y,index:e}}n(40);var M={code:"AM",name:"\uc790\uae30\uc18c\uac1c",subMenu:[{name:"\ubc15\ub3c4\ud604",birthDay:"1989.01.14",school:"\uadf9\ub3d9\ub300\ud559\uad50(4) \uc720\ube44\ucffc\ud130\uc2a4IT \ud559\uacfc",text:l.a.createElement("div",null,l.a.createElement("p",null,"\ub9cc\ub098\ubd59\uac8c \ub418\uc5b4\uc11c \ubc18\uac11\uc2b5\ub2c8\ub2e4!"),l.a.createElement("p",null,"\ud638\uae30\uc2ec\uacfc \uc5f4\uc815\uc744 \uac00\uc9c4"),l.a.createElement("p",null,"\uc990\uae30\ub294 \uc6f9 \uac1c\ubc1c\uc790\uac00 \ub418\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4"))}]},N={code:"CA",name:"\uacbd\ub825",subMenu:[{date:"2014.06~2015.07",company:"\ubb34\ud55c\ud1b5\uc2e0",part:"\uc6f9 \ud37c\ube14\ub9ac\uc154",text:"\ubaa8\ubc14\uc77c \uc720\ud1b5 \uc6f9 \ud37c\ube14\ub9ac\uc2f1",skill:"HTML5,CSS3,JQuery"},{date:"2016.08~2018.09",company:"\uc774\uc528\uc624",part:"\ubbf8\ub4e4\uc6e8\uc5b4 Backand \uac1c\ubc1c\uc790",text:"\ub3c4\uc11c\uad00 \uc790\ub8cc\uad00\ub9ac \uc2dc\uc2a4\ud15c \uac1c\ubc1c",skill:"Java,Spring,Oracle,Tibero,JSP,REST API,SVN,Mybatis,JavaScript"}]},_={code:"ST",name:"\uac15\uc758",subMenu:[{date:"2015.07~2015.11",company:"\uc2dc\uc0ac\uc9c1\uc5c5\uc804\ubb38\ud559\uad50",title:"\uc6f9 \ud37c\ube14\ub9ac\uc154 \uc804\ubb38\uac00",skill:"W3C\uc6f9\ud45c\uc900,HTML5,CSS3,JQuery,photoshop,illustrator"},{date:"2015.12~2016.06",company:"\uacbd\uc601\uae30\uc220\uac1c\ubc1c\uad50\uc721\uc13c\ud130",title:"\uc2a4\ub9c8\ud2b8\uc6f9\uc571\ucf58\ud150\uce20\uc804\ubb38\uac00",skill:"Java,Spring,Oracle,JSP,SVN,JavaScript,Hadoop"},{date:"2018.09~2018.10",company:"\uadf8\ub9b0\ucef4\ud4e8\ud130\uc544\ud2b8\ud559\uc6d0",title:"Node.js - \uc751\uc6a9 SW\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1",skill:"Node.js,express,MongoDB"},{date:"2018.09~2018.10",company:"\ud55c\uad6d\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc778\uc7ac\uac1c\ubc1c\uc6d0",title:"TypeScript & Angualr \ud5a5\uc0c1\uacfc\uc815",skill:"Angular,TypeScript,webPack,babel"},{date:"2016.06~",company:"\uc8fc\ub9d0 \uc2a4\ud130\ub514",title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc2a4\ud130\ub514",skill:"ES6,Node.js,React.js,SCSS,docker..."}]};function w(){var e=Object(h.a)(["\n        padding:0.5rem 0 0.2rem;\n        span{\n            font-weight: bold;\n        }\n    "]);return w=function(){return e},e}var z=function(e){function t(e){var n,a=this;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).onStart=function(){n.setState(Object(S.a)({},n.state,{activeDrags:1}))},n.onStop=function(){n.setState(Object(S.a)({},n.state,{activeDrags:0}))},n.selected=function(e){console.log("#@@@2"),"Y"!==n.closeYN&&n.props.folderSelected(e),n.closeYN=""},n.close=function(e){n.closeYN="Y",n.props.folderClose(e)},n.Subtitle=O.a.li(w()),n.aboutMeContentDOM={AM:l.a.createElement("ul",null,l.a.createElement(this.Subtitle,null,l.a.createElement("span",null,"\uc774\ub984 : "),M.subMenu[0].name),l.a.createElement(this.Subtitle,null,l.a.createElement("span",null,"\uc0dd\ub144\uc6d4\uc77c : "),M.subMenu[0].birthDay),l.a.createElement(this.Subtitle,null,l.a.createElement("span",null,"\ud559\ub825 : "),M.subMenu[0].birthDay),l.a.createElement(this.Subtitle,null,M.subMenu[0].text)),CA:N.subMenu.map(function(e){return l.a.createElement("ul",null,l.a.createElement(a.Subtitle,null,l.a.createElement("span",null,e.date)),l.a.createElement("li",null,l.a.createElement("span",null,"\ud68c\uc0ac : "),e.company),l.a.createElement("li",null,l.a.createElement("span",null,"\uc9c1\uc885: "),e.part),l.a.createElement("li",null,l.a.createElement("span",null,"\uc5c5\ubb34: "),e.text),l.a.createElement("li",null,l.a.createElement("span",null,"\uae30\uc220: "),e.skill))}),ST:_.subMenu.map(function(e){return l.a.createElement("ul",null,l.a.createElement(a.Subtitle,null,l.a.createElement("span",null,e.date)),l.a.createElement("li",null,l.a.createElement("span",null,"\ud68c\uc0ac : "),e.company),l.a.createElement("li",null,l.a.createElement("span",null,"\uacfc\uc815\uba85: "),e.title),l.a.createElement("li",null,l.a.createElement("span",null,"\uae30\uc220: "),e.skill))})},n.aboutMeContent=function(e){switch(e){case"AM":return n.aboutMeContentDOM.AM;case"CA":return n.aboutMeContentDOM.CA;case"ST":return n.aboutMeContentDOM.ST;default:return n.aboutMeContentDOM.AM}},n.domContent=function(e){switch(e){case"user-home":return console.log("aboutMe : ",M.subMenu),l.a.createElement("div",{className:"pop_content"},l.a.createElement("div",{className:""},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"pop_preview"},l.a.createElement("div",{className:"menu-list"},l.a.createElement("ul",null,l.a.createElement("li",{className:"user-menu-1",onClick:function(){return n.setState(Object(S.a)({},n.state,{contentCode:M.code}))}},M.name),l.a.createElement("li",{className:"user-menu-2",onClick:function(){return n.setState(Object(S.a)({},n.state,{contentCode:N.code}))}},N.name),l.a.createElement("li",{className:"user-menu-3",onClick:function(){return n.setState(Object(S.a)({},n.state,{contentCode:_.code}))}},_.name))),l.a.createElement("div",{className:"sub-content"},n.aboutMeContent(n.state.contentCode))));default:return l.a.createElement("div",{className:"pop_content"},l.a.createElement("div",{className:""},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"subready"},l.a.createElement("span",null," \ud604\uc7ac \uc900\ube44 \uc911\uc785\ub2c8\ub2e4. ")))}},n.modalSizeChange=function(){"pop_maxsize_on"===n.state.modalSizeClass?n.setState(Object(S.a)({},n.state,{modalSizeClass:"pop_maxsize"})):n.setState(Object(S.a)({},n.state,{modalSizeClass:"pop_maxsize_on"}))},n.createModal=function(){var e={onStart:n.onStart,onStop:n.onStop};return console.log("this.props.chosenFolder : ",n.props.chosenFolder),l.a.createElement(v.a,Object.assign({handle:".pop_head"},e),l.a.createElement("div",{className:"modal moving",target:"",onMouseDownCapture:function(){n.selected(n.props.chosenFolder.index)},style:{zIndex:n.props.chosenFolder.z_index}},l.a.createElement("div",{className:"pop_head"},l.a.createElement("div",{className:"pop_folder_img"},l.a.createElement("input",{type:"button",alt:""})),l.a.createElement("div",{className:"pop_title"},n.props.chosenFolder.text),l.a.createElement("div",{className:"pop_mng"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"button",className:"pop_minsize"})),l.a.createElement("li",{onClick:function(){n.modalSizeChange()}},l.a.createElement("input",{type:"button",className:n.state.modalSizeClass})),l.a.createElement("li",{onClick:function(){n.close(n.props.chosenFolder.index)}},l.a.createElement("input",{type:"button",className:"pop_close"}))))),n.domContent(n.props.chosenFolder.name)))},n.state={activeDrags:0,contentCode:"",modalSizeClass:"pop_maxsize_on"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.createModal())}}]),t}(a.PureComponent),D=Object(d.b)(null,function(e){return{folderSelected:function(t){return e(j(t))},folderClose:function(t){return e(k(t))}}})(z),T=E.a.bind(b.a),A=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleClickEvt=function(e,t){switch(e){case"tistory":return window.open("http://backback.tistory.com/");case"github":return window.open("https://github.com/FactAttacker?tab=repositories/");default:n.openModal(t)}},n.openModal=function(e){n.props.folderOpen(e,n.props.folderSelected(e))},n.handleShowFolder=function(){for(var e=n.props.redux_folder.folder,t=function(e,t){return l.a.createElement("li",{key:"folder-list-"+t},l.a.createElement("div",{className:T("folder"),onClick:function(){n.handleClickEvt(e.name,t)}},l.a.createElement("img",{src:e.imgUrl,alt:e.text}),l.a.createElement("div",{className:T("text")},l.a.createElement("span",null,e.text))))},a=function(e,t){return l.a.createElement("ul",{className:"folder_row",key:"folder-group-"+t}," ",e," ")},r=[],c=[],o=e.length,s=0;o>s;s++)0!==s&&s%3===0&&(r.push(a(c,s)),c=[]),c.push(t(e[s],s)),o===s+1&&r.push(a(c,s+1));return r},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(a.Fragment,null,l.a.createElement("div",{id:"content"},l.a.createElement("div",{className:"desktop_bg fade"}),l.a.createElement("div",{className:"desktop"},this.handleShowFolder())),l.a.createElement("div",null,this.props.redux_folder.folder.map(function(e,t){return e.open?l.a.createElement(D,{key:"window-"+t,subIndex:t,chosenFolder:e}):null})))}}]),t}(a.PureComponent);var F=Object(d.b)(function(e){return e})(A),P=n(28),J=n.n(P),I=E.a.bind(J.a),L="FIRST",H=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={amPm:null,currentHours:null,currentMinute:null,calendar:null,clockSec:null},n.addZeros=function(e,t){var n="";if((e=e.toString()).length<t)for(var a=0;a<t-e.length;a++)n+="0";return n+e},n.handleChangeTime=function(){var e=0,t=new Date,a=t.getFullYear()+"-"+n.addZeros(t.getMonth()+1,2)+"-"+n.addZeros(t.getDate(),2),l=n.addZeros(t.getHours(),2),r=n.addZeros(t.getMinutes(),2),c=n.addZeros(t.getSeconds(),2),o="\uc624\uc804";l>=12&&(o="\uc624\ud6c4",l=n.addZeros(l-12,2)),"\uc624\uc804"===o&&0===l&&(l=12),null!=L?(e=6e4-1e3*c,L=null):e=6e4,console.log("\ud604\uc7ac \uc2dc\uac04 : "+l+" : "+r),n.setState({amPm:o,currentHours:l,currentMinute:r,calendar:a,clockSec:parseInt(e)})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.handleChangeTime()}},{key:"componentDidMount",value:function(){setTimeout(this.handleChangeTime,this.state.clockSec)}},{key:"componentDidUpdate",value:function(){setInterval(this.handleChangeTime,this.state.clockSec)}},{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"task_bar"},l.a.createElement("input",{className:I("start_bnt"),type:"button"}),l.a.createElement("input",{className:I("sound_on_btn"),type:"button",alt:"\uc0ac\uc6b4\ub4dc"}),l.a.createElement("div",{className:I("date_box")},l.a.createElement("p",{className:I("clock")},l.a.createElement("span",null,this.state.amPm+" "+Number(this.state.currentHours)+":"+this.state.currentMinute)),l.a.createElement("p",{className:I("date")},l.a.createElement("span",null,this.state.calendar)))))}}]),t}(a.PureComponent),U=(n(44),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.folderOpen,n=e.folderSelected;return l.a.createElement("div",{className:"App"},l.a.createElement(F,{folderOpen:t,folderSelected:n}),l.a.createElement(H,null))}}]),t}(a.PureComponent)),Z=Object(d.b)(null,function(e){return{folderOpen:function(t){return e(function(e){return{type:x,index:e}}(t))},folderSelected:function(t){return e(j(t))},folderClose:function(t){return e(k(t))}}})(U),R=(n(46),n(9)),Y=n(29),W={folder:[{name:"github",index:0,text:"Github",imgUrl:"./image/github.png",open:!1,z_index:0,chosen:!1},{name:"user-home",index:1,text:"About Me",imgUrl:"./image/user-home.png",open:!1,z_index:0,chosen:!1},{name:"works",index:2,text:"Works",imgUrl:"./image/computer.png",open:!1,z_index:0,chosen:!1},{name:"tistory",index:3,text:"Tistory",imgUrl:"./image/logomark.svg",open:!1,z_index:0,chosen:!1},{name:"user-trash",index:4,text:"\ud734\uc9c0\ud1b5",imgUrl:"./image/user-trash.png",open:!1,z_index:0,chosen:!1}]},B=[];var Q=Object(R.c)({redux_folder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=e.folder;switch(t.type){case x:return{folder:n.map(function(e,n){return n===t.index?Object(S.a)({},e,{open:!0}):Object(S.a)({},e)})};case y:return{folder:n.map(function(e,n){return n===t.index?Object(S.a)({},e,{open:!1}):Object(S.a)({},e)})};case C:var a=B.indexOf(t.index);return a>-1&&B.splice(a,1),{folder:n.map(function(e,n){return n===t.index?(B.push(n),Object(S.a)({},e,{open:!0,z_index:B.indexOf(e.index)+1,chosen:!0})):Object(S.a)({},e,{z_index:B.indexOf(e.index)+1,chosen:!1})})};default:return e}}}),V=Object(Y.createLogger)(),G=Object(R.d)(Q,Object(R.a)(V));c.a.render(l.a.createElement(d.a,{store:G},l.a.createElement(Z,null)),document.getElementById("root"))}},[[31,2,1]]]);
//# sourceMappingURL=main.de8b768d.chunk.js.map