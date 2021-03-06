/*!
 * bespoke-theme-cloudscreener v1.0.0
 *
 * Copyright 2016, cloudscreener
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.cloudscreener=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{box-sizing:border-box;margin:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;transition:background .6s ease;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cloudscreener-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-theme-cloudscreener-slide-parent .bespoke-active,.bespoke-slide{pointer-events:auto}.bespoke-slide{transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;-o-border-radius:3%;border-radius:3%}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;transition:none}}.bespoke-before{-webkit-transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px);transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px);transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-slide:not(.nologo):not(.emphatic-text):not(.star-wars)::before{font-size:12pt;content:\"\";position:absolute;bottom:20px;left:25px;background:url(\"../images/cloudscreener_logo_CMJN_fonce_cloud_only.png\") no-repeat 0 50%;background-size:52px 33px;padding-left:52px;height:33px;line-height:1.9}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{transition:width .6s ease;position:absolute;height:100%;background:#a52a2a;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;z-index:-1;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0) scale(1.3);transform:translateZ(0) scale(1.3);transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0);transform:translateZ(0)}.bespoke-backdrop-before{transition-delay:.2s}.bespoke-backdrop-active{opacity:1}.bespoke-backdrop.black{background:#000}.bespoke-backdrop.black.bespoke-backdrop-before{transition-delay:2s}.bespoke-backdrop.office-visuel-press{background-image:url(\"../images/office-visuel-press.png\");background-position:0 0}.bespoke-backdrop.office-visuel-press.bespoke-backdrop-active{opacity:.8}.bespoke-backdrop.office-visuel-press.bespoke-backdrop-before{transition-delay:2s}.transparent-slide{background:0 0}.background-gif{display:inline-block;background:rgba(10,10,10,.4);padding:20px 30px}.shadow-text{text-shadow:0 2px 0 rgba(0,0,0,.5)}pre{padding:26px!important;border-radius:8px;background:DimGray;color:AntiqueWhite}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040;background:#1d3036}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px}h3 :not(.star-wars){color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}iframe{width:110%;height:110%;border:1px solid #e6e6e6;box-sizing:border-box}.avatar{-webkit-filter:grayscale(30%);filter:grayscale(30%);width:120px;height:120px;border-radius:100%;margin:.5em 0;background-size:cover;background-position:50% 50%;border:2px solid #fff}.cascade>*{transition:all .8s ease;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.bespoke-active .cascade>*,.bespoke-active.cascade>*{transition-delay:.5s}.bespoke-active .cascade>*:nth-child(2),.bespoke-active.cascade>*:nth-child(2){transition-delay:.8s}.bespoke-active .cascade>*:nth-child(3),.bespoke-active.cascade>*:nth-child(3){transition-delay:1.1s}.bespoke-active .cascade>*:nth-child(4),.bespoke-active.cascade>*:nth-child(4){transition-delay:1.4s}.bespoke-active .cascade>*:nth-child(5),.bespoke-active.cascade>*:nth-child(5){transition-delay:1.7s}.bespoke-active .cascade>*:nth-child(6),.bespoke-active.cascade>*:nth-child(6){transition-delay:2s}.bespoke-active .cascade>*:nth-child(7),.bespoke-active.cascade>*:nth-child(7){transition-delay:2.3s}.bespoke-after .cascade>*,.bespoke-after.cascade>*{-webkit-transform:translateZ(0) translateY(15px);transform:translateZ(0) translateY(15px);opacity:0}.bespoke-after .cascade>*.avatar,.bespoke-after.cascade>*.avatar{-webkit-transform:translateZ(0) translateY(15px) scale(1.2) rotateX(30deg);transform:translateZ(0) translateY(15px) scale(1.2) rotateX(30deg)}.star-wars{background:0 0;color:#ff0}.star-wars.bespoke-slide{-webkit-transform:rotateX(20deg) translateY(0);transform:rotateX(20deg) translateY(0)}.star-wars.bespoke-slide.bespoke-after{-webkit-transform:rotateX(20deg) translateY(250px);transform:rotateX(20deg) translateY(250px)}.star-wars.bespoke-slide.bespoke-before{-webkit-transform:rotateX(20deg) translateY(-250px);transform:rotateX(20deg) translateY(-250px)}.star-wars.bespoke-slide .bespoke-bullet{transition:all .6s ease}.star-wars.bespoke-slide .bespoke-bullet-inactive{-webkit-transform:translateY(20px);transform:translateY(20px)}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);

    var wrap = function(element) {
      var wrapper = document.createElement('div');
      wrapper.className = 'bespoke-theme-cloudscreener-slide-parent';
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
    };

    deck.slides.forEach(wrap);
  };
};

(function enableFrames() {
  var frames = document.querySelectorAll('iframe');
  for (var i = 0, frame; frame = frames[i]; i++) {
    var src = frame.dataset.src;
    if (src && frame.src != src) {
      console.log('iframe enabled:', src);
      frame.src = src;
    }
  }
}());

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});