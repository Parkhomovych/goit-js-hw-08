var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form");var n={},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(w,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function w(){var e=v();if(h(e))return E(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function E(e){return u=void 0,g&&i?y(e):(i=r=void 0,a)}function O(){var e=v(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:E(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}let y,j;n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})},t.addEventListener("input",n((function(e){"email"===e.target.name&&(y=e.target.value);"message"===e.target.name&&(j=e.target.value);const t={userEmail:y,userMessag:j};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500,{leading:!0,trailing:!0}));const h=localStorage.getItem("feedback-form-state");h&&function(e){const{email:n,message:i}=t.elements;n.value=e.userEmail,i.value=e.userMessag}(JSON.parse(h)),t.addEventListener("submit",(function(e){e.preventDefault();const{email:n,message:i}=t.elements,r={userEmail:n.value,userMessage:i.value};console.log(r),localStorage.removeItem("feedback-form-state"),n.value="",i.value=""}));
//# sourceMappingURL=03-feedback.1ee8eac8.js.map
