webpackJsonp([27],{1257:function(n,l,e){"use strict";function t(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,11,"div",[["class","grid-center"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n      "])),(n()(),r["ɵeld"](0,null,null,1,"ion-icon",[["class","large-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](147456,null,0,w.a,[I.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(n()(),r["ɵted"](null,["\n      "])),(n()(),r["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r["ɵted"](null,["Please check your internet connection."])),(n()(),r["ɵted"](null,["\n      "])),(n()(),r["ɵeld"](0,null,null,2,"button",[["class","half-width center mtop-5"],["ion-button",""]],null,[[null,"click"]],function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=!1!==u.retry()&&t),t},R.b,R.a)),r["ɵdid"](1097728,null,0,C.a,[[8,""],I.a,r.ElementRef,r.Renderer],null,null),(n()(),r["ɵted"](0,["Retry"])),(n()(),r["ɵted"](null,["\n    "]))],function(n,l){n(l,3,0,"close")},function(n,l){n(l,2,0,r["ɵnov"](l,3)._hidden)})}function u(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,3,"div",[["class","grid-center"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n      "])),(n()(),r["ɵeld"](0,null,null,0,"div",[["class","loader"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "]))],null,null)}function i(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,7,"div",[["class","full-height flex-hv"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵand"](16777216,null,null,1,null,t)),r["ɵdid"](16384,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵand"](16777216,null,null,1,null,u)),r["ɵdid"](16384,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](null,["\n  "]))],function(n,l){var e=l.component;n(l,3,0,e.connectionError),n(l,6,0,!e.connectionError)},null)}function o(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,10,"div",[["class","full-height flex-hv"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,7,"div",[["class","grid-center"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n      "])),(n()(),r["ɵeld"](0,null,null,1,"ion-icon",[["class","large-icon"],["name","md-sad"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](147456,null,0,w.a,[I.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(n()(),r["ɵted"](null,["\n      "])),(n()(),r["ɵeld"](0,null,null,1,"span",[["class","bold size-20"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["System is in maintance mode."])),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵted"](null,["\n  "]))],function(n,l){n(l,5,0,"md-sad")},function(n,l){n(l,4,0,r["ɵnov"](l,5)._hidden)})}function a(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,8,"ion-content",[["class","bg"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,L.b,L.a)),r["ɵdid"](4374528,null,0,N.a,[I.a,P.a,F.a,r.ElementRef,r.Renderer,E.a,O.a,r.NgZone,[2,B.a],[2,z.a]],null,null),(n()(),r["ɵted"](1,["\n  "])),(n()(),r["ɵand"](16777216,null,1,1,null,i)),r["ɵdid"](16384,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](1,["\n\n  "])),(n()(),r["ɵand"](16777216,null,1,1,null,o)),r["ɵdid"](16384,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](1,["\n"]))],function(n,l){var e=l.component;n(l,4,0,!e.isMaintenance),n(l,7,0,e.isMaintenance)},function(n,l){n(l,0,0,r["ɵnov"](l,1).statusbarPadding,r["ɵnov"](l,1)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var r=e(1),c=(e(20),e(54),this&&this.__decorate,this&&this.__metadata,function(){function n(n,l,e,t){var u=this;if(this.navCtrl=n,this.navParams=l,this.cacheService=e,this.menuCtrl=t,this.timeoutCounter=0,this.connectionError=!1,this.isMaintenance=!1,this.isMaintenance=this.navParams.get("maintenance"),this.isMaintenance)t.enable(!1);else{t.enable(!1);var i=this.getParameterByName("req",window.location.href);setTimeout(function(){i&&(i=i.replace(/^http\:\/\//,"").replace(/\/+/g,"/").replace(/\/+$/,"")),i&&null!=i&&"undefined"!=i&&"startup"!=i||(i="home"),u.menuCtrl.enable(!0),window.location.href="#"+i},1e3)}}return n.prototype.retry=function(){this.navCtrl.setRoot("HomePage")},n.prototype.getParameterByName=function(n,l){l||(l=window.location.href),n=n.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)").exec(l);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null},n.prototype.ionViewDidLoad=function(){this.listenConnection()},n.prototype.listenConnection=function(){var n=this,l=setInterval(function(){60==n.timeoutCounter&&(n.connectionError=!0,clearInterval(l)),n.cacheService.isConnected&&n.cacheService.isDoneCheckingUserData&&clearInterval(l),n.timeoutCounter++},500)},n}()),d=(this&&this.__decorate,function(){return function(){}}()),s=e(30),_=e(53),f=e(302),h=e(638),m=e(639),g=e(640),p=e(641),v=e(642),y=e(643),b=e(644),M=e(645),w=e(83),I=e(4),R=e(98),C=e(48),L=e(646),N=e(81),P=e(13),F=e(22),E=e(16),O=e(72),B=e(8),z=e(58),D=e(28),S=e(219),j=e(59),T=[],A=r["ɵcrt"]({encapsulation:2,styles:T,data:{}}),k=r["ɵccf"]("page-startup-loading",c,function(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"page-startup-loading",[],null,null,null,a,A)),r["ɵdid"](49152,null,0,c,[z.a,D.a,S.a,j.a],null,null)],null,null)},{},{},[]),x=e(99);e.d(l,"StartupLoadingPageModuleNgFactory",function(){return $});var V=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])};return function(l,e){function t(){this.constructor=l}n(l,e),l.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}(),Z=function(n){function l(l){return n.call(this,l,[h.a,m.a,g.a,p.a,v.a,y.a,b.a,M.a,k],[])||this}return V(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new s.NgLocaleLocalization(this.parent.get(r.LOCALE_ID))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new _["ɵi"]),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new _.FormBuilder),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new s.CommonModule,this._ɵba_1=new _["ɵba"],this._FormsModule_2=new _.FormsModule,this._ReactiveFormsModule_3=new _.ReactiveFormsModule,this._IonicModule_4=new f.a,this._IonicPageModule_5=new f.b,this._StartupLoadingPageModule_6=new d,this._LAZY_LOADED_TOKEN_10=c,this._StartupLoadingPageModule_6},l.prototype.getInternal=function(n,l){return n===s.CommonModule?this._CommonModule_0:n===_["ɵba"]?this._ɵba_1:n===_.FormsModule?this._FormsModule_2:n===_.ReactiveFormsModule?this._ReactiveFormsModule_3:n===f.a?this._IonicModule_4:n===f.b?this._IonicPageModule_5:n===d?this._StartupLoadingPageModule_6:n===s.NgLocalization?this._NgLocalization_7:n===_["ɵi"]?this._ɵi_8:n===_.FormBuilder?this._FormBuilder_9:n===x.a?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(r["ɵNgModuleInjector"]),$=new r.NgModuleFactory(Z,d)}});