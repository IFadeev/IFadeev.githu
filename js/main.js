'use strict';
// Init all plugin when document is ready 
$(document).on('ready', function () {
  // 0. Init console to avoid error
  var method;
  var noop = function () { };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  var contextWindow = $(window);
  var $root = $('html, body');
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }

  // 1. Background image as data attribut 
  var list = $('.bg-img');
  for (var i = 0; i < list.length; i++) {
    var src = list[i].getAttribute('data-image-src');
    list[i].style.backgroundImage = "url('" + src + "')";
    list[i].style.backgroundRepeat = "no-repeat";
    list[i].style.backgroundPosition = "center";
    list[i].style.backgroundSize = "cover";
  }
  // Background color as data attribut
  var list = $('.bg-color');
  for (var i = 0; i < list.length; i++) {
    var src = list[i].getAttribute('data-bgcolor');
    list[i].style.backgroundColor = src;
  }

  // 2. Init Coutdown clock
  try {
    // check if clock is initialised
    $('.clock-countdown').downCount({
      date: $('.site-config').attr('data-date'),
      offset: +10
    });
  }
  catch (error) {
    // Clock error : clock is unavailable
    console.log("clock disabled/unavailable");
  }

  // 3. Navigation menu
  // 3.1 Show/hide menu when icon is clicked
  var menuItems = $('.all-menu-wrapper .nav-link');
  var menuIcon = $('.menu-icon, #navMenuIcon');
  var menuBlock = $('.all-menu-wrapper');
  var menuLinks = $(".top-menu-links a, .main-menu a, .all-menu-wrapper a");
  // Menu icon clicked
  menuIcon.on('click', function () {
    console.log('menu clicked')
    menuIcon.toggleClass('menu-visible')
    menuBlock.toggleClass('menu-visible')
    menuItems.toggleClass('menu-visible');
    return false;
  });

  // Hide menu after a menu item clicked
  menuLinks.on('click', function () {
    if (menuItems.hasClass('menu-visible')) {
      menuIcon.removeClass('menu-visible');
      menuBlock.removeClass('menu-visible');
      menuItems.removeClass('menu-visible');
    }
    return true;
  });
  // 3.2 Page navigation
  $('#topBarMenu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {
      //I get fired when the animation is starting
    },
    end: function () {
      //I get fired when the animation is ending
    },
    scrollChange: function ($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });

  // 4 Carousel Slider

  // 4.c carousel-swiper-hash demo
  new Swiper('.carousel-swiper-hash-demo .swiper-container', {
    pagination: '.carousel-swiper-hash-demo .items-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
      var text = swiper.slides[index + 1].getAttribute('data-hash');
      return '<span class="' + className + ' ">' + text + '</span>';
    },
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    spaceBetween: 0,
  });

  // 4.c carousel-swiper-review demo
  new Swiper('.carousel-swiper-review-demo .swiper-container', {
    pagination: '.carousel-swiper-review-demo .items-pagination',
    paginationClickable: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    spaceBetween: 0,
  });

  // 4.d carousel-beta demo
  new Swiper('.carousel-swiper-beta-demo .swiper-container', {
    pagination: '.carousel-swiper-beta-demo .items-pagination',
    paginationClickable: '.carousel-beta-alpha-demo .items-pagination',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    spaceBetween: 0,
  });

  // contact form
  var sendEmailForm = $('.send_email_form');
  var sendMessageForm = $('.send_message_form');
  // Default server url
  var newsletterServerUrl = './ajaxserver/serverfile.php';
  var messageServerUrl = './ajaxserver/serverfile.php';

  // Use form define action attribute
  if (sendEmailForm.attr('action') && (sendEmailForm.attr('action')) != '') {
    newsletterServerUrl = sendEmailForm.attr('action');
  }
  if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
    messageServerUrl = sendMessageForm.attr('action');
  }

  sendEmailForm.initForm({
    serverUrl: newsletterServerUrl,
  });
  sendMessageForm.initForm({
    serverUrl: messageServerUrl,
  });

  // 8. Hide some ui on scroll
  var scrollHeight = $(document).height() - contextWindow.height();
  contextWindow.on('scroll', function () {
    var scrollpos = $(this).scrollTop();
    var siteHeaderFooter = $('.page-footer, .page-header');

    // if (scrollpos > 10 && scrollpos < scrollHeight - 100) {
    if (scrollpos > 50) {
      siteHeaderFooter.addClass("scrolled");
    }
    else {
      siteHeaderFooter.removeClass("scrolled");
    }
  });

  // 9. Page Loader : hide loader when all are loaded
  contextWindow.on('load', function () {
    $('#page-loader').addClass('p-hidden');
    $('.section').addClass('anim');
  });

});

! function() {

    function e(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.6", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = { elements: {}, containers: [] }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O) }

    function t(e) { if (e && e.container) { if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container); if (O.tools.isNode(e.container)) return e.container } return O.defaults.container }

    function n(e, t) { return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : [] }

    function i() { return ++O.uid }

    function o(e, t, n) { t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X" }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " }

    function a(e) {
        var t, n = e.config,
            i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = { target: e, config: t, interval: n };
        O.history.push(i)
    }

    function f() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
            O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0)
        }
        return O
    }

    function d() { T(y) }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function(o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function(n) { t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1) })
    }

    function m(e, t) {
        var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = { started: new Date }, e.sequence.timer.clock = window.setTimeout(function() { o.blocked = !1, e.sequence.timer = null, d() }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0,
            o = 0,
            r = "after";
        switch (e) {
            case "reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case "reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function() { t.config[r](t.domEl), t.timer = null }, o - i)
    }

    function g(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return t.active && !t.blocked && !e.revealing && !e.disabled } return q(e) && !e.revealing && !e.disabled }

    function w(e) { var t = e.config.useDelay; return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen }

    function v(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return !t.active && e.config.reset && e.revealing && !e.disabled } return !q(e) && e.config.reset && e.revealing && !e.disabled }

    function b(e) { return { width: e.clientWidth, height: e.clientHeight } }

    function h(e) { if (e && e !== window.document.documentElement) { var t = x(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } }

    function x(e) {
        var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return { top: t, left: n, height: i, width: o }
    }

    function q(e) {
        function t() {
            var t = c + a * s,
                n = f + l * s,
                i = d - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n < w && y > p
        }

        function n() { return "fixed" === window.getComputedStyle(e.domEl).position }
        var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            f = i.left,
            d = c + a,
            u = f + l;
        return t() || n()
    }

    function E() {}
    var O, T;
    e.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: window.document.documentElement, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, beforeReveal: function(e) {}, beforeReset: function(e) {}, afterReveal: function(e) {}, afterReset: function(e) {} }, e.prototype.isSupported = function() { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, e.prototype.reveal = function(e, s, a, d) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 });
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O
    }, e.prototype.sync = function() {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            f()
        }
        return O
    }, E.prototype.isObject = function(e) { return null !== e && "object" == typeof e && e.constructor === Object }, E.prototype.isNode = function(e) { return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, E.prototype.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function(e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, E.prototype.extend = function(e, t) { return this.forOwn(t, function(n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, E.prototype.extendClone = function(e, t) { return this.extend(this.extend({}, e), t) }, E.prototype.isMobile = function() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return e }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();

// Scroll reveal
window.sr = ScrollReveal();

for (var index = 1; index < 11; index++) {
    // fade in up
    sr.reveal('.sr-up-td' + index, {
        delay: 100 * index,
        scale: 1,
        distance: '40px',
    });
    // fade in down
    sr.reveal('.sr-down-td' + index, {
        delay: 100 * index,
        scale: 1,
        distance: '-40px',
    });
    // zoom in
    sr.reveal('.sr-zoomin-td' + index, {
        delay: 100 * index,
        scale: 0.8,
        distance: '0',
    });
    // zoom out
    sr.reveal('.sr-zoomout-td' + index, {
        delay: 100 * index,
        scale: 1.2,
        distance: '0',
    });

}
        //if jquery validator plugin is enable, use it  
        if (jQuery.validator) {
            jQuery.validator.setDefaults({
                success: "valid"
            });
            this.validate({
                rules: {
                    field: {
                        required: true,
                        email: true
                    }
                }
            });
        }

        this.submit(function(event) {
            // prevent default submit
            console.log('Send request');
            event.preventDefault();
            // use jquery validator plugin if it is enabled
            if (jQuery.validator) {
                if ($(this).valid()) {
                    $ajax.sendRequest(this);
                }
            } else {
                $ajax.sendRequest(this);
            }
        });

    };

}(jQuery));

/* End of ajax */

(function($, window, document, undefined){
  
    // our plugin constructor
    var OnePageNav = function(elem, options){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;
      this.metadata = this.$elem.data('plugin-options');
      this.$win = $(window);
      this.sections = {};
      this.didScroll = false;
      this.$doc = $(document);
      this.docHeight = this.$doc.height();
    };
  
    // the plugin prototype
    OnePageNav.prototype = {
      defaults: {
        navItems: 'a',
        currentClass: 'current',
        changeHash: false,
        easing: 'swing',
        filter: '',
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        begin: false,
        end: false,
        scrollChange: false
      },
  
      init: function() {
        // Introduce defaults that can be extended either
        // globally or using an object literal.
        this.config = $.extend({}, this.defaults, this.options, this.metadata);
  
        this.$nav = this.$elem.find(this.config.navItems);
  
        //Filter any links out of the nav
        if(this.config.filter !== '') {
          this.$nav = this.$nav.filter(this.config.filter);
        }
  
        //Handle clicks on the nav
        this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));
  
        //Get the section positions
        this.getPositions();
  
        //Handle scroll changes
        this.bindInterval();
  
        //Update the positions on resize too
        this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
  
        return this;
      },
  
      adjustNav: function(self, $parent) {
        self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
        $parent.addClass(self.config.currentClass);
      },
  
      bindInterval: function() {
        var self = this;
        var docHeight;
  
        self.$win.on('scroll.onePageNav', function() {
          self.didScroll = true;
        });
  
        self.t = setInterval(function() {
          docHeight = self.$doc.height();
  
          //If it was scrolled
          if(self.didScroll) {
            self.didScroll = false;
            self.scrollChange();
          }
  
          //If the document height changes
          if(docHeight !== self.docHeight) {
            self.docHeight = docHeight;
            self.getPositions();
          }
        }, 250);
      },
  
      getHash: function($link) {
        return $link.attr('href').split('#')[1];
      },
  
      getPositions: function() {
        var self = this;
        var linkHref;
        var topPos;
        var $target;
  
        self.$nav.each(function() {
          linkHref = self.getHash($(this));
          $target = $('#' + linkHref);
  
          if($target.length) {
            topPos = $target.offset().top;
            self.sections[linkHref] = Math.round(topPos);
          }
        });
      },
  
      getSection: function(windowPos) {
        var returnValue = null;
        var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
  
        for(var section in this.sections) {
          if((this.sections[section] - windowHeight) < windowPos) {
            returnValue = section;
          }
        }
  
        return returnValue;
      },
  
      handleClick: function(e) {
        var self = this;
        var $link = $(e.currentTarget);
        var $parent = $link.parent();
        var newLoc = '#' + self.getHash($link);
  
        if(!$parent.hasClass(self.config.currentClass)) {
          //Start callback
          if(self.config.begin) {
            self.config.begin();
          }
  
          //Change the highlighted nav item
          self.adjustNav(self, $parent);
  
          //Removing the auto-adjust on scroll
          self.unbindInterval();
  
          //Scroll to the correct position
          self.scrollTo(newLoc, function() {
            //Do we need to change the hash?
            if(self.config.changeHash) {
              window.location.hash = newLoc;
            }
  
            //Add the auto-adjust on scroll back in
            self.bindInterval();
  
            //End callback
            if(self.config.end) {
              self.config.end();
            }
          });
        }
  
        e.preventDefault();
      },
  
      scrollChange: function() {
        var windowTop = this.$win.scrollTop();
        var position = this.getSection(windowTop);
        var $parent;
  
        //If the position is set
        if(position !== null) {
          $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
  
          //If it's not already the current section
          if(!$parent.hasClass(this.config.currentClass)) {
            //Change the highlighted nav item
            this.adjustNav(this, $parent);
  
            //If there is a scrollChange callback
            if(this.config.scrollChange) {
              this.config.scrollChange($parent);
            }
          }
        }
      },
  
      scrollTo: function(target, callback) {
        var offset = $(target).offset().top;
  
        $('html, body').animate({
          scrollTop: offset
        }, this.config.scrollSpeed, this.config.easing, callback);
      },
  
      unbindInterval: function() {
        clearInterval(this.t);
        this.$win.unbind('scroll.onePageNav');
      }
    };
  
    OnePageNav.defaults = OnePageNav.prototype.defaults;
  
    $.fn.onePageNav = function(options) {
      return this.each(function() {
        new OnePageNav(this, options).init();
      });
    };
  
  })( jQuery, window , document );




/* Vegas Image slideshow */
!function(t){"use strict";var s={slide:0,delay:5e3,preload:!1,preloadImage:!1,preloadVideo:!1,timer:!0,overlay:!1,autoplay:!0,shuffle:!1,cover:!0,color:null,align:"center",valign:"center",transition:"fade",transitionDuration:1e3,transitionRegister:[],animation:null,animationDuration:"auto",animationRegister:[],init:function(){},play:function(){},pause:function(){},walk:function(){},slides:[]},i={},e=function(i,e){this.elmt=i,this.settings=t.extend({},s,t.vegas.defaults,e),this.slide=this.settings.slide,this.total=this.settings.slides.length,this.noshow=this.total<2,this.paused=!this.settings.autoplay||this.noshow,this.$elmt=t(i),this.$timer=null,this.$overlay=null,this.$slide=null,this.timeout=null,this.transitions=["fade","fade2","blur","blur2","flash","flash2","negative","negative2","burn","burn2","slideLeft","slideLeft2","slideRight","slideRight2","slideUp","slideUp2","slideDown","slideDown2","zoomIn","zoomIn2","zoomOut","zoomOut2","swirlLeft","swirlLeft2","swirlRight","swirlRight2"],this.animations=["kenburns","kenburnsLeft","kenburnsRight","kenburnsUp","kenburnsUpLeft","kenburnsUpRight","kenburnsDown","kenburnsDownLeft","kenburnsDownRight"],this.settings.transitionRegister instanceof Array==!1&&(this.settings.transitionRegister=[this.settings.transitionRegister]),this.settings.animationRegister instanceof Array==!1&&(this.settings.animationRegister=[this.settings.animationRegister]),this.transitions=this.transitions.concat(this.settings.transitionRegister),this.animations=this.animations.concat(this.settings.animationRegister),this.support={objectFit:"objectFit"in document.body.style,transition:"transition"in document.body.style||"WebkitTransition"in document.body.style,video:t.vegas.isVideoCompatible()},this.settings.shuffle===!0&&this.shuffle(),this._init()};e.prototype={_init:function(){var s,i,e,n="BODY"===this.elmt.tagName,o=this.settings.timer,a=this.settings.overlay,r=this;this._preload(),n||(this.$elmt.css("height",this.$elmt.css("height")),s=t('<div class="vegas-wrapper">').css("overflow",this.$elmt.css("overflow")).css("padding",this.$elmt.css("padding")),this.$elmt.css("padding")||s.css("padding-top",this.$elmt.css("padding-top")).css("padding-bottom",this.$elmt.css("padding-bottom")).css("padding-left",this.$elmt.css("padding-left")).css("padding-right",this.$elmt.css("padding-right")),this.$elmt.clone(!0).children().appendTo(s),this.elmt.innerHTML=""),o&&this.support.transition&&(e=t('<div class="vegas-timer"><div class="vegas-timer-progress">'),this.$timer=e,this.$elmt.prepend(e)),a&&(i=t('<div class="vegas-overlay">'),"string"==typeof a&&i.css("background-image","url("+a+")"),this.$overlay=i,this.$elmt.prepend(i)),this.$elmt.addClass("vegas-container"),n||this.$elmt.append(s),setTimeout(function(){r.trigger("init"),r._goto(r.slide),r.settings.autoplay&&r.trigger("play")},1)},_preload:function(){var t,s,i;for(i=0;i<this.settings.slides.length;i++)(this.settings.preload||this.settings.preloadImages)&&this.settings.slides[i].src&&(s=new Image,s.src=this.settings.slides[i].src),(this.settings.preload||this.settings.preloadVideos)&&this.support.video&&this.settings.slides[i].video&&(t=this._video(this.settings.slides[i].video))},_random:function(t){return t[Math.floor(Math.random()*(t.length-1))]},_slideShow:function(){var t=this;this.total>1&&!this.paused&&!this.noshow&&(this.timeout=setTimeout(function(){t.next()},this._options("delay")))},_timer:function(t){var s=this;clearTimeout(this.timeout),this.$timer&&(this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration","0ms"),this.paused||this.noshow||t&&setTimeout(function(){s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration",s._options("delay")-100+"ms")},100))},_video:function(t){var s,e,n=t.toString();return i[n]?i[n]:(t instanceof Array==!1&&(t=[t]),s=document.createElement("video"),s.preload=!0,t.forEach(function(t){e=document.createElement("source"),e.src=t,s.appendChild(e)}),i[n]=s,s)},_fadeOutSound:function(t,s){var i=this,e=s/10,n=t.volume-.09;n>0?(t.volume=n,setTimeout(function(){i._fadeOutSound(t,s)},e)):t.pause()},_fadeInSound:function(t,s){var i=this,e=s/10,n=t.volume+.09;1>n&&(t.volume=n,setTimeout(function(){i._fadeInSound(t,s)},e))},_options:function(t,s){return void 0===s&&(s=this.slide),void 0!==this.settings.slides[s][t]?this.settings.slides[s][t]:this.settings[t]},_goto:function(s){function i(){f._timer(!0),setTimeout(function(){y&&(f.support.transition?(h.css("transition","all "+_+"ms").addClass("vegas-transition-"+y+"-out"),h.each(function(){var t=h.find("video").get(0);t&&(t.volume=1,f._fadeOutSound(t,_))}),e.css("transition","all "+_+"ms").addClass("vegas-transition-"+y+"-in")):e.fadeIn(_));for(var t=0;t<h.length-4;t++)h.eq(t).remove();f.trigger("walk"),f._slideShow()},100)}"undefined"==typeof this.settings.slides[s]&&(s=0),this.slide=s;var e,n,o,a,r,h=this.$elmt.children(".vegas-slide"),d=this.settings.slides[s].src,l=this.settings.slides[s].video,u=this._options("delay"),g=this._options("align"),c=this._options("valign"),p=this._options("color")||this.$elmt.css("background-color"),m=this._options("cover")?"cover":"contain",f=this,v=h.length,y=this._options("transition"),_=this._options("transitionDuration"),w=this._options("animation"),b=this._options("animationDuration");("random"===y||y instanceof Array)&&(y=this._random(y instanceof Array?y:this.transitions)),("random"===w||w instanceof Array)&&(w=this._random(w instanceof Array?w:this.animations)),("auto"===_||_>u)&&(_=u),"auto"===b&&(b=u),e=t('<div class="vegas-slide"></div>'),this.support.transition&&y&&e.addClass("vegas-transition-"+y),this.support.video&&l?(a=this._video(l instanceof Array?l:l.src),a.loop=void 0!==l.loop?l.loop:!0,a.muted=void 0!==l.mute?l.mute:!0,a.muted===!1?(a.volume=0,this._fadeInSound(a,_)):a.pause(),o=t(a).addClass("vegas-video").css("background-color",p),this.support.objectFit?o.css("object-position",g+" "+c).css("object-fit",m).css("width","100%").css("height","100%"):"contain"===m&&o.css("width","100%").css("height","100%"),e.append(o)):(r=new Image,n=t('<div class="vegas-slide-inner"></div>').css("background-image","url("+d+")").css("background-color",p).css("background-position",g+" "+c).css("background-size",m),this.support.transition&&w&&n.addClass("vegas-animation-"+w).css("animation-duration",b+"ms"),e.append(n)),this.support.transition||e.css("display","none"),v?h.eq(v-1).after(e):this.$elmt.prepend(e),f._timer(!1),a?(4===a.readyState&&(a.currentTime=0),a.play(),i()):(r.src=d,r.onload=i)},shuffle:function(){for(var t,s,i=this.total-1;i>0;i--)s=Math.floor(Math.random()*(i+1)),t=this.settings.slides[i],this.settings.slides[i]=this.settings.slides[s],this.settings.slides[s]=t},play:function(){this.paused&&(this.paused=!1,this.next(),this.trigger("play"))},pause:function(){this._timer(!1),this.paused=!0,this.trigger("pause")},toggle:function(){this.paused?this.play():this.pause()},playing:function(){return!this.paused&&!this.noshow},current:function(t){return t?{slide:this.slide,data:this.settings.slides[this.slide]}:this.slide},jump:function(t){0>t||t>this.total-1||t===this.slide||(this.slide=t,this._goto(this.slide))},next:function(){this.slide++,this.slide>=this.total&&(this.slide=0),this._goto(this.slide)},previous:function(){this.slide--,this.slide<0&&(this.slide=this.total-1),this._goto(this.slide)},trigger:function(t){var s=[];s="init"===t?[this.settings]:[this.slide,this.settings.slides[this.slide]],this.$elmt.trigger("vegas"+t,s),"function"==typeof this.settings[t]&&this.settings[t].apply(this.$elmt,s)},options:function(i,e){var n=this.settings.slides.slice();if("object"==typeof i)this.settings=t.extend({},s,t.vegas.defaults,i);else{if("string"!=typeof i)return this.settings;if(void 0===e)return this.settings[i];this.settings[i]=e}this.settings.slides!==n&&(this.total=this.settings.slides.length,this.noshow=this.total<2,this._preload())}},t.fn.vegas=function(t){var s,i=arguments,n=!1;if(void 0===t||"object"==typeof t)return this.each(function(){this._vegas||(this._vegas=new e(this,t))});if("string"==typeof t){if(this.each(function(){var e=this._vegas;if(!e)throw new Error("No Vegas applied to this element.");"function"==typeof e[t]&&"_"!==t[0]?s=e[t].apply(e,[].slice.call(i,1)):n=!0}),n)throw new Error('No method "'+t+'" in Vegas.');return void 0!==s?s:this}},t.vegas={},t.vegas.defaults=s,t.vegas.isVideoCompatible=function(){return!/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)}}(window.jQuery||window.Zepto);
//# sourceMappingURL=vegas.min.js.map

(function ($) {
  "use strict";
  $.fn.maximage = function (settings, helperSettings) {

    var config;

    if (typeof settings == 'object' || settings === undefined) config = $.extend( $.fn.maximage.defaults, settings || {} );
    if (typeof settings == 'string') config = $.fn.maximage.defaults;
    
    /*jslint browser: true*/
    $.Body = $('body');
    $.Window = $(window);
    $.Scroll = $('html, body');
    $.Events = {
      RESIZE: 'resize'
    };
    
    this.each(function() {
      var $self = $(this),
        preload_count = 0,
        imageCache = [];
      
      /* --------------------- */
      
      // @Modern
      
      /* 
      MODERN BROWSER NOTES:
        Modern browsers have CSS3 background-size option so we setup the DOM to be the following structure for cycle plugin:
        div = cycle
          div = slide with background-size:cover
          div = slide with background-size:cover
          etc.
      */
      
      var Modern = {
        setup: function(){
          if($.Slides.length > 0){
            // Setup images
            for(var i in $.Slides) {
              // Set our image
              var $img = $.Slides[i];
              
              // Create a div with a background image so we can use CSS3's position cover (for modern browsers)
              $self.append('<div class="mc-image ' + $img.theclass + '" title="' + $img.alt + '" style="background-image:url(\'' + $img.url + '\');' + $img.style + '" data-href="'+ $img.datahref +'">'+ $img.content +'</div>');
            }
            
            // Begin our preload process (increments itself after load)
            Modern.preload(0);
            
            // If using Cycle, this resets the height and width of each div to always fill the window; otherwise can be done with CSS
            Modern.resize();
          }
        },
        preload: function(n){
          // Preload all of the images but never show them, just use their completion so we know that they are done
          //    and so that the browser can cache them / fade them in smoothly
          
          // Create new image object
          var $img = $('<img/>');
          $img.load(function() {
            // Once the first image has completed loading, start the slideshow, etc.
            if(preload_count==0) {
              // Only start cycle after first image has loaded
              Cycle.setup();
              
              // Run user defined onFirstImageLoaded() function
              config.onFirstImageLoaded();
            }
            
            // preload_count starts with 0, $.Slides.length starts with 1
            if(preload_count==($.Slides.length-1)) {
              // If we have just loaded the final image, run the user defined function onImagesLoaded()
              config.onImagesLoaded( $self );
            }else{ 
              // Increment the counter
              preload_count++;
              
              // Load the next image
              Modern.preload(preload_count);
            }
          });
          
          // Set the src... this triggers begin of load
          $img[0].src = $.Slides[n].url;
          
          // Push to external array to avoid cleanup by aggressive garbage collectors
          imageCache.push($img[0]);
        },
        resize: function(){
          // Cycle sets the height of each slide so when we resize our browser window this becomes a problem.
          //  - the cycle option 'slideResize' has to be set to false otherwise it will trump our resize
          $.Window
            .bind($.Events.RESIZE,
            function(){
              // Remove scrollbars so we can take propper measurements
              $.Scroll.addClass('mc-hide-scrolls');
              
              // Set vars so we don't have to constantly check it
              $.Window
                .data('h', Utils.sizes().h)
                .data('w', Utils.sizes().w);
              
              // Set container and slides height and width to match the window size
              $self
                .height($.Window.data('h')).width($.Window.data('w'))
                .children()
                .height($.Window.data('h')).width($.Window.data('w'));
              
              // This is special noise for cycle (cycle has separate height and width for each slide)
              $self.children().each(function(){
                this.cycleH = $.Window.data('h');
                this.cycleW = $.Window.data('w');
              });
              
              // Put the scrollbars back to how they were
              $($.Scroll).removeClass('mc-hide-scrolls');
            });
        }
      }
      
     
      var Old = {
        setup: function(){
          var c, t, $div;
          
          // Clear container
          if($.BrowserTests.msie && !config.overrideMSIEStop){
            // Stop IE from continually trying to preload images that we already removed
            document.execCommand("Stop", false);
          }
          $self.html('');
          
          $.Body.addClass('mc-old-browser');
          
          if($.Slides.length > 0){
            // Remove scrollbars so we can take propper measurements
            $.Scroll.addClass('mc-hide-scrolls');
            
            // Cache our new dimensions
            $.Window
              .data('h', Utils.sizes().h)
              .data('w', Utils.sizes().w);
            
            // Add our loading div to the DOM
            $('body').append($("<div></div>").attr("class", "mc-loader").css({'position':'absolute','left':'-9999px'}));
            
            //  Loop through slides
            for(var j in $.Slides) {
              // Determine content (if container or image)
              if($.Slides[j].content.length == 0){
                c = '<img src="' + $.Slides[j].url + '" />';
              }else{
                c = $.Slides[j].content;
              }
              
              // Create Div
              $div = $("<div>" + c + "</div>").attr("class", "mc-image mc-image-n" + j + " " + $.Slides[j].theclass);
              
              // Add new container div to the DOM
              $self.append( $div );
              
              // Account for slides without images
              if($('.mc-image-n' + j).children('img').length == 0){
              }else{
                // Add first image to loader to get that started
                $('div.mc-loader').append( $('.mc-image-n' + j).children('img').first().clone().addClass('not-loaded') );
              }
            }
            
            // Begin preloading
            Old.preload();
            
            // Setup the resize function to listen for window changes
            Old.windowResize();
          }
        },
        preload: function(){
          // Intervals to tell if an images have loaded
          var t = setInterval(function() {
            $('.mc-loader').children('img').each(function(i){
              // Check if image is loaded
              var $img = $(this);
              
              // Loop through not-loaded images
              if($img.hasClass('not-loaded')){
                if( $img.height() > 0 ){
                  // Remove Dom notice
                  $(this).removeClass('not-loaded');
                  
                  // Set the dimensions
                  var $img1 = $('div.mc-image-n' + i).children('img').first();
                  
                  $img1
                    .data('h', $img.height())
                    .data('w', $img.width())
                    .data('ar', ($img.width() / $img.height()));
                  
                  // Go on
                  Old.onceLoaded(i)
                }
              }
            });
          
            if( $('.not-loaded').length == 0){
              // Remove our loader element because all of our images are now loaded
              $('.mc-loader').remove();
              
              // Clear interval when all images are loaded
              clearInterval(t);
            }
          }, 1000);
        },
        onceLoaded: function(m){
          // Do maximage magic
          Old.maximage(m);
          
          // Once the first image has completed loading, start the slideshow, etc.
          if(m == 0) {
            // If we changed the visibility before, make sure it is back on
            $self.css({'visibility':'visible'});
            
            // Run user defined onFirstImageLoaded() function
            config.onFirstImageLoaded();
          
          // After everything is done loading, clean up
          }else if(m == $.Slides.length - 1){
            // Only start cycle after the first image has loaded
            Cycle.setup();
            
            // Put the scrollbars back to how they were
            $($.Scroll).removeClass('mc-hide-scrolls');
            
            // If we have just loaded the final image, run the user defined function onImagesLoaded()
            config.onImagesLoaded( $self );
            
            if(config.debug) {
              debug(' - Final Maximage - ');debug($self);
            }
          }
        },
        maximage: function(p){
          // Cycle sets the height of each slide so when we resize our browser window this becomes a problem.
          //  - the cycle option 'slideResize' has to be set to false otherwise it will trump our resize
          $('div.mc-image-n' + p)
            .height($.Window.data('h'))
            .width($.Window.data('w'))
            .children('img')
            .first()
            .each(function(){
              Adjust.maxcover($(this));
            });
        },
        windowResize: function(){
          $.Window
            .bind($.Events.RESIZE,
            function(){
              clearTimeout(this.id);
              this.id = setTimeout(Old.doneResizing, 200);
            });
        },
        doneResizing: function(){
          // The final resize (on finish)
          // Remove scrollbars so we can take propper measurements
          $($.Scroll).addClass('mc-hide-scrolls');
          
          // Cache our window's new dimensions
          $.Window
            .data('h', Utils.sizes().h)
            .data('w', Utils.sizes().w);
          
          // Set the container's height and width
          $self.height($.Window.data('h')).width($.Window.data('w'))
          
          // Set slide's height and width to match the window size
          $self.find('.mc-image').each(function(n){
            Old.maximage(n);
          });
          
          // Update cycle's ideas of what our slide's height and width should be
          var curr_opts = $self.data('cycle.opts');
          if(curr_opts != undefined){
            curr_opts.height = $.Window.data('h');
            curr_opts.width = $.Window.data('w');
            jQuery.each(curr_opts.elements, function(index, item) {
                item.cycleW = $.Window.data('w');
              item.cycleH = $.Window.data('h');
            });
          }
          
          // Put the scrollbars back to how they were
          $($.Scroll).removeClass('mc-hide-scrolls');
        }
      }
      
     
      var Cycle = {
        setup: function(){
          var h,w;
          
          $self.addClass('mc-cycle');
          
          // Container sizes (if not set)
          $.Window
            .data('h', Utils.sizes().h)
            .data('w', Utils.sizes().w);
          
          // Prefer CSS Transitions
          jQuery.easing.easeForCSSTransition = function(x, t, b, c, d, s) {
            return b+c;
          };
          
          var cycleOptions = $.extend({
            fit:1,
            containerResize:0,
            height:$.Window.data('h'),
            width:$.Window.data('w'),
            slideResize: false,
            easing: ($.BrowserTests.cssTransitions && config.cssTransitions ? 'easeForCSSTransition' : 'swing')
          }, config.cycleOptions);
          
          $self.cycle( cycleOptions );
        }
      }
      
      
      
      /* --------------------- */
      
      // @Adjust = Math to center and fill all elements
      
      var Adjust = {
        center: function($item){
          // Note: if alignment is 'left' or 'right' it can be controlled with CSS once verticalCenter 
          //  and horizontal center are set to false in the plugin options
          if(config.verticalCenter){
            $item.css({marginTop:(($item.height() - $.Window.data('h'))/2) * -1})
          }
          if(config.horizontalCenter){
            $item.css({marginLeft:(($item.width() - $.Window.data('w'))/2) * -1});
          }
        },
        fill: function($item){
          var $storageEl = $item.is('object') ? $item.parent().first() : $item;
          
          if(typeof config.backgroundSize == 'function'){
            // If someone wants to write their own fill() function, they can: example customBackgroundSize.html
            config.backgroundSize( $item );
          }else if(config.backgroundSize == 'cover'){
            if($.Window.data('w') / $.Window.data('h') < $storageEl.data('ar')){
              $item
                .height($.Window.data('h'))
                .width(($.Window.data('h') * $storageEl.data('ar')).toFixed(0));
            }else{
              $item
                .height(($.Window.data('w') / $storageEl.data('ar')).toFixed(0))
                .width($.Window.data('w'));
            }
          }else if(config.backgroundSize == 'contain'){
            if($.Window.data('w') / $.Window.data('h') < $storageEl.data('ar')){
              $item
                .height(($.Window.data('w') / $storageEl.data('ar')).toFixed(0))
                .width($.Window.data('w'));
            }else{
              $item
                .height($.Window.data('h'))
                .width(($.Window.data('h') * $storageEl.data('ar')).toFixed(0));
            }
          }else{
            debug('The backgroundSize option was not recognized for older browsers.');
          }
        },
        maxcover: function($item){
          Adjust.fill($item);
          Adjust.center($item);
        },
        maxcontain: function($item){
          Adjust.fill($item);
          Adjust.center($item);
        }
      }
      
      
      
      /* --------------------- */
      
      // @Utils = General utilities for the plugin
      
      var Utils = {
        browser_tests: function(){
          var $div = $('<div />')[0],
            vendor = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
            p = 'transition',
            obj = {
              cssTransitions: false,
              cssBackgroundSize: ( "backgroundSize" in $div.style && config.cssBackgroundSize ), // Can override cssBackgroundSize in options
              html5Video: false,
              msie: false
            };
          
          // Test for CSS Transitions
          if(config.cssTransitions){
            if(typeof $div.style[p] == 'string') { obj.cssTransitions = true }
          
            // Tests for vendor specific prop
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for(var i=0; i<vendor.length; i++) {
              if(vendor[i] + p in $div.style) { obj.cssTransitions = true; }
            }
          }
          
          // Check if we can play html5 videos
          if( !!document.createElement('video').canPlayType ) {
            obj.html5Video = true;
          }
          
          // Check for MSIE since we lost $.browser in jQuery
          obj.msie = (Utils.msie() !== undefined);
          
          
          if(config.debug) {
            debug(' - Browser Test - ');debug(obj);
          }
          
          return obj;
        },
        construct_slide_object: function(){
          var obj = new Object(),
            arr = new Array(),
            temp = '';
          
          $self.children().each(function(i){
            var $img = $(this).is('img') ? $(this).clone() : $(this).find('img').first().clone();
            
            // reset obj
            obj = {};
            
            // set attributes to obj
            obj.url = $img.attr('src');
            obj.title = $img.attr('title') != undefined ? $img.attr('title') : '';
            obj.alt = $img.attr('alt') != undefined ? $img.attr('alt') : '';
            obj.theclass = $img.attr('class') != undefined ? $img.attr('class') : '';
            obj.styles = $img.attr('style') != undefined ? $img.attr('style') : '';
            obj.orig = $img.clone();
            obj.datahref = $img.attr('data-href') != undefined ? $img.attr('data-href') : '';
            obj.content = "";
            
            // Setup content for within container
            if($(this).find('img').length > 0){
              if($.BrowserTests.cssBackgroundSize){
                $(this).find('img').first().remove();
              }
              obj.content = $(this).html();
            }
            
            // Stop loading image so we can load them sequentiallyelse{
            $img[0].src = "";
            
            // Remove original object (only on nonIE. IE hangs if you remove an image during load)
            if($.BrowserTests.cssBackgroundSize){
              $(this).remove();
            }
            
            // attach obj to arr
            arr.push(obj);
          });
          
          
          if(config.debug) {
            debug(' - Slide Object - ');debug(arr);
          }
          return arr;
        },
        msie: function(){
            var undef,
                v = 3,
                div = document.createElement('div'),
                all = div.getElementsByTagName('i');

            while (
                div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]
            );
          
            return v > 4 ? v : undef;
        },
        sizes: function(){
          var sizes = {h:0,w:0};
          
          if(config.fillElement == "window"){
            sizes.h = $.Window.height();
            sizes.w = $.Window.width();
          }else{
            var $fillElement = $self.parents(config.fillElement).first();
            
            // Height
            if($fillElement.height() == 0 || $fillElement.data('windowHeight') == true){
              $fillElement.data('windowHeight',true);
              sizes.h = $.Window.height();
            }else{
              sizes.h = $fillElement.height();
            }
          
            // Width
            if($fillElement.width() == 0 || $fillElement.data('windowWidth') == true){
              $fillElement.data('windowWidth',true);
              sizes.w = $.Window.width();
            }else{
              sizes.w = $fillElement.width();
            }
          }
          
          return sizes;
        }
      }
      
      
      
      /* --------------------- */
      
      // @Instantiation
      
      // Helper Function
      // Run tests to see what our browser can handle
      $.BrowserTests = Utils.browser_tests();
      
      if(typeof settings == 'string'){
        // TODO: Resize object fallback for old browsers,  If we are trying to size an HTML5 video and our browser doesn't support it
        if($.BrowserTests.html5Video || !$self.is('video')) {
          var to, 
            $storageEl = $self.is('object') ? $self.parent().first() : $self; // Can't assign .data() to '<object>'
          
          if( !$.Body.hasClass('mc-old-browser') )
            $.Body.addClass('mc-old-browser');
          
          // Cache our window's new dimensions
          $.Window
            .data('h', Utils.sizes().h)
            .data('w', Utils.sizes().w);
        
          // Please include height and width attributes on your html elements
          $storageEl
            .data('h', $self.height())
            .data('w', $self.width())
            .data('ar', $self.width() / $self.height());
        
          // We want to resize these elements with the window
          $.Window
            .bind($.Events.RESIZE,
            function(){
              // Cache our window's new dimensions
              $.Window
                .data('h', Utils.sizes().h)
                .data('w', Utils.sizes().w);
            
              // Limit resize runs
              to = $self.data('resizer');
              clearTimeout(to);
              to = setTimeout( Adjust[settings]($self), 200 );
              $self.data('resizer', to);
            });
        
          // Initial run
          Adjust[settings]($self);
        }
      }else{
        // Construct array of image objects for us to use
        $.Slides = Utils.construct_slide_object();
        
        // If we are allowing background-size:cover run Modern
        if($.BrowserTests.cssBackgroundSize){
          if(config.debug) debug(' - Using Modern - ');
          Modern.setup();
        }else{
          if(config.debug) debug(' - Using Old - ');
          Old.setup();
        }
      }
    });
    
    // private function for debugging
    function debug($obj) {
      if (window.console && window.console.log) {
        window.console.log($obj);
      }
    }
  }
  
  // Default options
  $.fn.maximage.defaults = {
    debug: false,
    cssBackgroundSize: true,  // Force run the functionality used for newer browsers
    cssTransitions: true,  // Force run the functionality used for old browsers
    verticalCenter: true, // Only necessary for old browsers
    horizontalCenter: true, // Only necessary for old browsers
    scaleInterval: 20, // Only necessary for old browsers
    backgroundSize: 'cover', // Only necessary for old browsers (this can be function)
    fillElement: 'window', // Either 'window' or a CSS selector for a parent element
    overrideMSIEStop: false, // This gives the option to not 'stop' load for MSIE (stops coded background images from loading so we can preload)... 
                 // If setting this option to true, please beware of IE7/8 "Stack Overflow" error but if there are more than 13 slides
                 // The description of the bug: http://blog.aaronvanderzwan.com/forums/topic/stack-overflow-in-ie-7-8/#post-33038
    onFirstImageLoaded: function(){},
    onImagesLoaded: function(){}
  }
})(jQuery);

/* okvideo by okfocus ~ v2.3.2 ~ https://github.com/okfocus/okvideo */
function vimeoPlayerReady(){options=jQuery(window).data("okoptions");var a=jQuery("#okplayer")[0];player=$f(a),window.setTimeout(function(){jQuery("#okplayer").css("visibility","visible")},2e3),player.addEvent("ready",function(){OKEvents.v.onReady(),OKEvents.utils.isMobile()?OKEvents.v.onPlay():(player.addEvent("play",OKEvents.v.onPlay),player.addEvent("pause",OKEvents.v.onPause),player.addEvent("finish",OKEvents.v.onFinish)),player.api("play")})}function onYouTubePlayerAPIReady(){options=jQuery(window).data("okoptions"),player=new YT.Player("okplayer",{videoId:options.video?options.video.id:null,playerVars:{autohide:1,autoplay:0,disablekb:options.keyControls,cc_load_policy:options.captions,controls:options.controls,enablejsapi:1,fs:0,modestbranding:1,origin:window.location.origin||window.location.protocol+"//"+window.location.hostname,iv_load_policy:options.annotations,loop:options.loop,showinfo:0,rel:0,wmode:"opaque",hd:options.hd},events:{onReady:OKEvents.yt.ready,onStateChange:OKEvents.yt.onStateChange,onError:OKEvents.yt.error}})}var player,OKEvents,options;!function(a){"use strict";var b="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D";a.okvideo=function(c){"object"!=typeof c&&(c={video:c});var d=this;d.init=function(){d.options=a.extend({},a.okvideo.options,c),null===d.options.video&&(d.options.video=d.options.source),d.setOptions();var e=d.options.target||a("body"),f=e[0]==a("body")[0]?"fixed":"absolute";e.css({position:"relative"});var g=3===d.options.controls?-999:"auto",h='<div id="okplayer-mask" style="position:'+f+';left:0;top:0;overflow:hidden;z-index:-998;height:100%;width:100%;"></div>';OKEvents.utils.isMobile()?e.append('<div id="okplayer" style="position:'+f+";left:0;top:0;overflow:hidden;z-index:"+g+';height:100%;width:100%;"></div>'):(3===d.options.controls&&e.append(h),1===d.options.adproof?e.append('<div id="okplayer" style="position:'+f+";left:-10%;top:-10%;overflow:hidden;z-index:"+g+';height:120%;width:120%;"></div>'):e.append('<div id="okplayer" style="position:'+f+";left:0;top:0;overflow:hidden;z-index:"+g+';height:100%;width:100%;"></div>')),a("#okplayer-mask").css("background-image","url("+b+")"),null===d.options.playlist.list?"youtube"===d.options.video.provider?d.loadYouTubeAPI():"vimeo"===d.options.video.provider&&(d.options.volume/=100,d.loadVimeoAPI()):d.loadYouTubeAPI()},d.setOptions=function(){for(var b in this.options)this.options[b]===!0&&(this.options[b]=1),this.options[b]===!1&&(this.options[b]=3);null===d.options.playlist.list&&(d.options.video=d.determineProvider()),a(window).data("okoptions",d.options)},d.loadYouTubeAPI=function(){d.insertJS("//www.youtube.com/player_api")},d.loadYouTubePlaylist=function(){player.loadPlaylist(d.options.playlist.list,d.options.playlist.index,d.options.playlist.startSeconds,d.options.playlist.suggestedQuality)},d.loadVimeoAPI=function(){a("#okplayer").replaceWith(function(){return'<iframe src="//player.vimeo.com/video/'+d.options.video.id+"?api=1&title=0&byline=0&portrait=0&playbar=0&loop="+d.options.loop+"&autoplay="+(1===d.options.autoplay?1:0)+'&player_id=okplayer" frameborder="0" style="'+a(this).attr("style")+'visibility:hidden;background-color:black;" id="'+a(this).attr("id")+'"></iframe>'}),d.insertJS("//origin-assets.vimeo.com/js/froogaloop2.min.js",function(){vimeoPlayerReady()})},d.insertJS=function(a,b){var c=document.createElement("script");b&&(c.readyState?c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()}),c.src=a;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)},d.determineProvider=function(){var a=document.createElement("a");if(a.href=d.options.video,/youtube.com/.test(d.options.video))return{provider:"youtube",id:a.href.slice(a.href.indexOf("v=")+2).toString()};if(/vimeo.com/.test(d.options.video))return{provider:"vimeo",id:a.href.split("/")[3].toString()};if(/[-A-Za-z0-9_]+/.test(d.options.video)){var b=new String(d.options.video.match(/[-A-Za-z0-9_]+/));if(11==b.length)return{provider:"youtube",id:b.toString()};for(var c=0;c<d.options.video.length;c++)if("number"!=typeof parseInt(d.options.video[c]))throw"not vimeo but thought it was for a sec";return{provider:"vimeo",id:d.options.video}}throw"OKVideo: Invalid video source"},d.init()},a.okvideo.options={source:null,video:null,playlist:{list:null,index:0,startSeconds:0,suggestedQuality:"default"},disableKeyControl:1,captions:0,loop:1,hd:1,volume:0,adproof:!1,unstarted:null,onFinished:null,onReady:null,onPlay:null,onPause:null,buffering:null,controls:!1,autoplay:!0,annotations:!0,cued:null},a.fn.okvideo=function(b){return b.target=this,this.each(function(){new a.okvideo(b)})}}(jQuery),OKEvents={yt:{ready:function(a){a.target.setVolume(options.volume),1===options.autoplay&&(options.playlist.list?player.loadPlaylist(options.playlist.list,options.playlist.index,options.playlist.startSeconds,options.playlist.suggestedQuality):a.target.playVideo()),OKEvents.utils.isFunction(options.onReady)&&options.onReady()},onStateChange:function(a){switch(a.data){case-1:OKEvents.utils.isFunction(options.unstarted)&&options.unstarted();break;case 0:OKEvents.utils.isFunction(options.onFinished)&&options.onFinished(),options.loop&&a.target.playVideo();break;case 1:OKEvents.utils.isFunction(options.onPlay)&&options.onPlay();break;case 2:OKEvents.utils.isFunction(options.onPause)&&options.onPause();break;case 3:OKEvents.utils.isFunction(options.buffering)&&options.buffering();break;case 5:OKEvents.utils.isFunction(options.cued)&&options.cued();break;default:throw"OKVideo: received invalid data from YT player."}},error:function(a){throw a}},v:{onReady:function(){OKEvents.utils.isFunction(options.onReady)&&options.onReady()},onPlay:function(){OKEvents.utils.isMobile()||player.api("setVolume",options.volume),OKEvents.utils.isFunction(options.onPlay)&&options.onPlay()},onPause:function(){OKEvents.utils.isFunction(options.onPause)&&options.onPause()},onFinish:function(){OKEvents.utils.isFunction(options.onFinish)&&options.onFinish()}},utils:{isFunction:function(a){return"function"==typeof a?!0:!1},isMobile:function(){return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)?!0:!1}}};

