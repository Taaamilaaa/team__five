parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oWOA":[function(require,module,exports) {
var e=document.querySelector(".btnRight"),t=document.querySelector(".btnLeft"),c=document.querySelectorAll(".reviews-item"),l=1;e.addEventListener("click",function(){++l>=c.length?(c[l-1].classList.remove("block"),c[l=0].classList.add("block")):(c[l-1].classList.remove("block"),c[l].classList.add("block")),document.getElementById("mytext").value=l+1}),t.addEventListener("click",function(){l<3&&l>0?(c[l].classList.remove("block"),c[l-1].classList.add("block")):(c[(l=2)-2].classList.remove("block"),c[l].classList.add("block"),++l),--l,document.getElementById("mytext").value=l+1});
},{}]},{},["oWOA"], null)
//# sourceMappingURL=/team__five/slider.ed341691.js.map