parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".header__btn"),t=document.querySelector(".main"),n=document.querySelector(".table"),a=document.createElement("button"),c=document.createElement("button"),o=document.createElement("input"),r=document.createElement("input"),l=document.createElement("input"),i=document.createElement("form"),u=[{initial:"EUR",target:"USD",course:.88},{initial:"RUR",target:"USD",course:71.69},{initial:"RUR",target:"UAH",course:2.62},{initial:"RUR",target:"ZHV",course:2.62}],s=function(){var e=document.createElement("div");a.className="main__btn",e.className="main__block",a.textContent="Добавить",e.append(a),t.append(e)},m=function(){var n=document.createElement("form"),a=document.createElement("h2"),c=document.createElement("input"),o=document.createElement("input"),r=document.createElement("button");n.className="main__registration registration",a.className="registration__title",c.className="registration__login",o.className="registration__parol",r.className="registration__btn",a.textContent="Вход",c.placeholder="Логин",o.placeholder="Пароль",o.type="password",r.textContent="Ok",n.append(a),n.append(c),n.append(o),n.append(r),t.append(n),r.addEventListener("click",function(t){t.preventDefault(),"ok"===c.value&&"ok"===o.value?(s(),e.textContent="Выйти"):"ok"!==c.value&&"ok"===o.value?window.alert("Incorrect login"):"ok"===c.value&&"ok"!==o.value?window.alert("Incorrect parol"):window.alert("Incorrect data"),n.style.display="none"})},d=function(){var e=document.createElement("h2");i.className="main__course course",e.className="course__title",o.className="course__initial",r.className="course__target",l.className="course__new",c.className="course__btn",e.textContent="Новый курс",o.placeholder="Исходная валюта",r.placeholder="Целевая валюта",l.placeholder="Курс",l.type="number",c.textContent="Ok",i.append(e),i.append(o),i.append(r),i.append(l),i.append(c),t.append(i)},p=function(e,t,a){var c=document.createElement("tr"),o=document.createElement("td"),r=document.createElement("td"),l=document.createElement("td");c.className="table__row",o.className="table__item",r.className="table__item",l.className="table__item",o.textContent=e,r.textContent=t,l.textContent=a,c.append(o),c.append(r),c.append(l),n.append(c)},_=function(){var e={};e.initial=o.value,e.target=r.value,e.course=l.value,u.push(e);for(var t=0;t<u.length;t++)"undefined"!=typeof Storage&&window.localStorage.setItem("row ".concat(t+1),JSON.stringify(u[t]));p(o.value,r.value,l.value),i.style.display="none"};e.addEventListener("click",function(e){e.preventDefault(),m()}),a.addEventListener("click",function(e){e.preventDefault(),d()}),c.addEventListener("click",function(e){e.preventDefault(),_()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8d6a6b14.js.map