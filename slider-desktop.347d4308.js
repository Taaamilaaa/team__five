parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AJVV":[function(require,module,exports) {
var s=document.querySelector(".reviews__btn--prev-desktop"),e=document.querySelector(".reviews__btn--next-desktop"),a=document.querySelectorAll(".reviews__item"),t=1;window.onload=function(){t=1,document.getElementById("all-number-mobile").value=a.length,document.getElementById("all-number-desktop").value=a.length},e.addEventListener("click",function(){switch(t){case 3:a[t].classList.remove("center"),a[t].classList.add("left"),a[t].classList.add("around"),a[t+1].classList.remove("right"),a[t+1].classList.remove("around"),a[t+1].classList.add("center"),a[t-1].classList.remove("left"),a[t-1].classList.remove("around"),a[t-1].classList.add("display-none"),a[t-3].classList.remove("display-none"),a[t-3].classList.add("around"),a[t-3].classList.add("right");break;case 4:a[t].classList.remove("center"),a[t].classList.add("left"),a[t].classList.add("around"),a[t-4].classList.remove("right"),a[t-4].classList.remove("around"),a[t-4].classList.add("center"),a[t-3].classList.remove("display-none"),a[t-3].classList.add("around"),a[t-3].classList.add("right"),a[t-1].classList.add("display-none"),a[t-1].classList.remove("around"),a[t-1].classList.remove("left"),t=-1;break;case 0:a[t].classList.remove("center"),a[t].classList.add("left"),a[t].classList.add("around"),a[t+1].classList.remove("right"),a[t+1].classList.remove("around"),a[t+1].classList.add("center"),a[t+2].classList.remove("display-none"),a[t+2].classList.add("around"),a[t+2].classList.add("right"),a[t+4].classList.add("display-none"),a[t+4].classList.remove("around"),a[t+4].classList.remove("left");break;default:a[t].classList.remove("center"),a[t].classList.add("left"),a[t].classList.add("around"),a[t+1].classList.remove("right"),a[t+1].classList.remove("around"),a[t+1].classList.add("center"),a[t-1].classList.remove("left"),a[t-1].classList.remove("around"),a[t-1].classList.add("display-none"),a[t+2].classList.remove("display-none"),a[t+2].classList.add("around"),a[t+2].classList.add("right")}++t,document.getElementById("current-number-desktop").value=t+1}),s.addEventListener("click",function(){switch(t){case a.length-1:a[t-2].classList.remove("display-none"),a[t-2].classList.add("around"),a[t-2].classList.add("left"),a[t-4].classList.remove("around"),a[t-4].classList.remove("right"),a[t-4].classList.add("display-none"),a[t-1].classList.remove("left"),a[t-1].classList.remove("around"),a[t-1].classList.add("center"),a[a.length-1].classList.remove("center"),a[a.length-1].classList.add("around"),a[a.length-1].classList.add("right");break;case 1:a[t-1].classList.remove("left"),a[t-1].classList.remove("around"),a[t-1].classList.add("center"),a[t].classList.remove("center"),a[t].classList.add("right"),a[t].classList.add("around"),a[t+1].classList.remove("right"),a[t+1].classList.remove("around"),a[t+1].classList.add("display-none"),a[a.length-1].classList.remove("display-none"),a[a.length-1].classList.add("left"),a[a.length-1].classList.add("around");break;case 0:a[a.length-2].classList.remove("display-none"),a[a.length-2].classList.add("around"),a[a.length-2].classList.add("left"),a[t].classList.remove("center"),a[t].classList.add("right"),a[t].classList.add("around"),a[t+1].classList.remove("right"),a[t+1].classList.remove("around"),a[t+1].classList.add("display-none"),a[a.length-1].classList.remove("left"),a[a.length-1].classList.remove("around"),a[a.length-1].classList.add("center");break;default:a[t].classList.remove("center"),a[t].classList.add("around"),a[t].classList.add("right"),a[t+1].classList.remove("around"),a[t+1].classList.remove("right"),a[t+1].classList.add("display-none"),a[t-1].classList.remove("left"),a[t-1].classList.remove("around"),a[t-1].classList.add("center"),a[t-2].classList.remove("display-none"),a[t-2].classList.add("around"),a[t-2].classList.add("left")}t<=0&&(t=5),document.getElementById("current-number-desktop").value=t,--t});
},{}]},{},["AJVV"], null)
//# sourceMappingURL=/team__five/slider-desktop.347d4308.js.map