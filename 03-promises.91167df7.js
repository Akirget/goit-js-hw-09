!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("iU1Pc");var r=document.querySelector(".form");console.log(r);var i=null,a=null,l=null;function u(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault(),i=e.currentTarget.delay.value,l=e.currentTarget.amount.value,a=e.currentTarget.step.value;for(var n=1;n<=l;n+=1)u(n,i).then((function(e){var n=e.position,o=e.delay;Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),i+=a}))}();
//# sourceMappingURL=03-promises.91167df7.js.map