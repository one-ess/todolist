!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},606:function(t,e,o){t.exports=o.p+"7c4c133c1b6b4a028ea2.ico"}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,o),c.exports}o.m=t,o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),o.b=document.baseURI||self.location.href,function(){var t=o(91),e=o.n(t),n=new URL(o(606),o.b);e()(n);const a=document.querySelector(".todo__add-button"),c=document.querySelector(".todo__input"),r=document.querySelector(".todo__list"),s=document.querySelector(".todo__select");localStorage.getItem("tasks")&&(r.innerHTML=localStorage.getItem("tasks")),s.addEventListener("change",(t=>{const e=t.target.value;r.dataset.listState=e,"active"!==e?(c.disabled=!0,a.disabled=!0):(c.disabled=!1,a.disabled=!1)})),a.addEventListener("click",(()=>{if(""!==c.value){const t=(new Date).toLocaleString().slice(0,-3),e=document.createElement("li");e.classList.add("todo__item"),e.dataset.todoState="active",e.innerHTML=`\n        <p class="todo__task">${c.value}</p>\n        <div class="todo__date">\n            <span>добавлено: ${t}</span>\n        </div>\n        <button class="todo__action todo__action_restore" data-todo-action="active"></button>\n        <button class="todo__action todo__action_complete" data-todo-action="completed"></button>\n        <button class="todo__action todo__action_delete" data-todo-action="deleted"></button>         \n    `,r.insertAdjacentElement("beforeend",e),c.value="",localStorage.setItem("tasks",r.innerHTML)}}));const d=(t,e)=>{const o=(new Date).toLocaleString().slice(0,-3),n=document.createElement("span");n.innerHTML=`${e}: ${o}`,t.querySelector(".todo__date").insertAdjacentElement("beforeend",n)};r.addEventListener("click",(t=>{const e=t.target.closest(".todo__item"),o=t.target.closest(".todo__item").dataset.todoState;t.target.closest(".todo__action_complete")&&(d(e,"завершено"),e.dataset.todoState="completed"),t.target.closest(".todo__action_restore")&&(d(e,"восстановлено"),e.dataset.todoState="active"),t.target.closest(".todo__action_delete")&&("deleted"!==o?(d(e,"удалено"),e.dataset.todoState="deleted"):e.remove()),localStorage.setItem("tasks",r.innerHTML)}))}()}();