!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),n=null;e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled"),n=setInterval((function(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),r.addEventListener("click",(function(){r.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.37f3ac45.js.map
