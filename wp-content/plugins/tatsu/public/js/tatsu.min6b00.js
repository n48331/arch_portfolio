!function(t){"use strict";t(document).on("click","a.tatsu_doc_link",function(){var e=t(this).attr("href");window.open(e,"_blank")}),t.fn.tatsuResizeMedia=function(){0<this.length&&this.each(function(){var e,t,a=jQuery(this),i=a.parent(),s=i.width(),n=i.outerHeight(),r=n/s,l=a.width(),o=a.height()/l;e=o<r?(t=n)/o:(t=s*o,s),a.css({width:e,height:t,left:(s-e)/2,top:(n-t)/2,display:"block"})})}}(jQuery),function(o){"use strict";tatsuFrontendConfig.vendorScriptsUrl;var e=tatsuFrontendConfig.dependencies||{},t=tatsuFrontendConfig.mapsApiKey;if(void 0!==e)for(var a in e)e.hasOwnProperty(a)&&asyncloader.register(e[a],a);asyncloader.register("https://maps.googleapis.com/maps/api/js?key="+t,"google_maps_api"),asyncloader.register("https://player.vimeo.com/api/player.js","vimeonew");var l,i,n,u,d,c,y,f,p,m,g,s,h,b,v,w,T,k,j,C,Q,_,x,I,q,N,F,S,A,O,D,z,E,P,L,R,Y,r=(u=jQuery(window),d=jQuery("body"),jQuery("html"),tatsuFrontendConfig.pluginUrl,y=!(c={}),f=jQuery(".tatsu-animate, .be-animate"),p=jQuery(".be-skill"),m=jQuery(".tatsu-animated-heading-wrap"),g=f.length,s=0,h=jQuery(".tatsu-an"),b=f.length+h.length,v=function(){0<h.length&&asyncloader.require("countTo",function(){h.each(function(e,t){if((t=jQuery(t)).hasClass("animate")&&(t.isVisible(!0)||d.hasClass("tatsu-frame"))){t.removeClass("animate");var a=Number(t.attr("data-number"));t.countTo({from:0,to:a,speed:1500,refreshInterval:30}),b<=++s&&clearTimeout(l)}})})},w=function(e,t,a){0<g&&(null!=a?f.filter(function(){return 0<jQuery(this).closest(a).length}):f).each(function(e,t){if(!(t=jQuery(t)).hasClass("already-visible")){var a=t.attr("data-animation-delay"),i=t.attr("data-animation-duration");t.css("animation-delay",a+"ms"),t.css("animation-duration",i+"ms"),t.one("webkitAnimationStart oanimationstart msAnimationStart animationstart",function(e){t.addClass("end-animation")}),t.isVisible(!0)&&40<u.innerHeight()-t[0].getBoundingClientRect().top&&(t.addClass("already-visible"),t.addClass(t.attr("data-animation")),b<=++s&&!d.hasClass("tatsu-frame")&&clearInterval(l))}})},T=function(){0<jQuery(".mfp-image").length&&asyncloader.require("magnificpopup",function(){var e=jQuery(".mfp-image"),t=e.filter(function(){return 0==jQuery(this).closest(".tatsu-single-image").length}),a=e.not(t);0<t.length&&t.magnificPopup({mainClass:"mfp-img-mobile my-mfp-zoom-in",closeOnContentClick:!0,gallery:{enabled:!0},image:{verticalFit:!0,titleSrc:"title"},zoom:{enabled:!1,duration:300},preloader:!0,type:"inline",overflowY:"auto",removalDelay:300,callbacks:{afterClose:function(){},open:function(){jQuery("body").addClass("mfp-active-state")},close:function(){jQuery("body").removeClass("mfp-active-state")}}}),0<a.length&&a.magnificPopup({mainClass:"mfp-img-mobile my-mfp-zoom-in",closeOnContentClick:!0,gallery:{enabled:!1},image:{verticalFit:!0,titleSrc:"title"},zoom:{enabled:!1,duration:300},preloader:!0,type:"inline",overflowY:"auto",removalDelay:300,callbacks:{afterClose:function(){},open:function(){jQuery("body").addClass("mfp-active-state")},close:function(){jQuery("body").removeClass("mfp-active-state")}}})}),0<jQuery(".mfp-iframe").length&&asyncloader.require("magnificpopup",function(){jQuery(".mfp-iframe").magnificPopup({iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}}})})},k=function(){var e,l,t=o(".be-vimeo-embed"),a=o(".be-youtube-embed");l=function(e){asyncloader.require(["fitvids"],function(){null!=e&&0<e.length&&(e.closest(".be-video-embed").removeClass("be-embed-placeholder"),e.parent().fitVids(),o(document).trigger("be_video_loaded",[e]))})},e=function(){a.each(function(){var e=o(this),t=null,a=null!=e.attr("data-video-id")?e.attr("data-video-id"):null,i=null!=e.attr("data-autoplay")?parseInt(e.attr("data-autoplay")):null,s=null!=e.attr("data-loop")?parseInt(e.attr("data-loop")):null;if(null!=a){var n={autoplay:i,loop:s,rel:0};s&&(n.playlist=a);var r={videoId:a,playerVars:n,width:e.width(),height:e.width()/1.7777,events:{onReady:function(e){i&&e.target.mute()}}};0<o("rs-bgvideo").length&&(r.host="https://www.youtube-nocookie.com",r.origin=window.location.hostname),t=new YT.Player(this,r),l(o(t.getIframe()))}})},0<t.length&&asyncloader.require(["vimeonew"],function(){t.each(function(){var e=o(this),t=isNaN(Number(e.attr("data-video-id")))?null:Number(e.attr("data-video-id")),a=null!=e.attr("data-autoplay")&&parseInt(e.attr("data-autoplay")),i=null!=e.attr("data-loop")&&parseInt(e.attr("data-loop")),s=null!=e.attr("data-muted")&&parseInt(e.attr("data-muted"));null!=t&&new Vimeo.Player(this,{id:t,autoplay:!!a,loop:!!i,muted:!!s,width:e.width(),height:Math.ceil(e.width()/1.7777)}).ready().then(function(){l(e.children("iframe"))})})}),0<a.length&&("undefined"!=typeof YT&&"function"==typeof YT.Player?e():o(document).on("YTAPIReady",e))},j=function(){asyncloader.require("fitvids",function(){o("iframe").length&&o("body").fitVids()})},C=function(){0<jQuery(".tatsu-gmap").length&&asyncloader.require("google_maps_api",function(){var o={black:[{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]}],greyscale:[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],midnight:[{featureType:"water",stylers:[{color:"#021019"}]},{featureType:"landscape",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"transit",stylers:[{color:"#146474"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]}],standard:[],bluewater:[{featureType:"water",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"landscape",stylers:[{color:"#f2f2f2"}]},{featureType:"road",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]}],lightdream:[{featureType:"landscape",stylers:[{hue:"#FFBB00"},{saturation:43.400000000000006},{lightness:37.599999999999994},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FFC200"},{saturation:-61.8},{lightness:45.599999999999994},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",stylers:[{hue:"#0078FF"},{saturation:-13.200000000000003},{lightness:2.4000000000000057},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#00FF6A"},{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]}],wy:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],blueessence:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}]};jQuery(".tatsu-gmap").each(function(){var e=jQuery(this).attr("data-address"),t=Number(jQuery(this).attr("data-zoom")),a=jQuery(this).attr("data-latitude"),i=jQuery(this).attr("data-longitude"),s=jQuery(this).attr("data-marker"),n=jQuery(this).attr("data-style"),r={zoom:t,scrollwheel:!1,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,center:new google.maps.LatLng(parseFloat(a),parseFloat(i)),styles:o[n]},l=new google.maps.Map(jQuery(this)[0],r);new google.maps.Marker({position:new google.maps.LatLng(parseFloat(a),parseFloat(i)),map:l,title:e,icon:s}).setMap(l)})})},Q=function(){var e=p.closest(".skill_container");0<e.length&&e.each(function(){if(jQuery(this).hasClass("skill-vertical")){var e=100/jQuery(this).find(".skill-wrap").length+"%";jQuery(this).find(".skill-wrap").css("width",e).css("display","block")}else jQuery(this).find(".skill-wrap").css("width","100%")}),0<p.length&&p.each(function(e){var t=jQuery(this),a="width";t.isVisible(!0)&&(t.closest(".skill_container").hasClass("skill-vertical")&&(a="height"),t.css(a,t.attr("data-skill-value")))})},_=function(){q()},x=function(){var e=o(".be-slider");0<e.length&&asyncloader.require("flickity",function(){e.each(function(){var e,t,a=jQuery(this);a.hasClass("flickity-enabled")||("1"!=a.attr("data-arrows")&&"1"!=a.attr("data-dots")||((t=function(e){var t,a;if(e instanceof o&&0<e.length)return t=isNaN(Number(e.attr("data-cols")))?1:Number(e.attr("data-cols")),a=e.find(".be-slide").length,1024<u.width()?t<a:767<u.width()?2<a:1<a})(e=a)||e.addClass("be-slider-hide-nav"),u.on("debouncedresize",function(){t(e)?e.removeClass("be-slider-hide-nav"):e.addClass("be-slider-hide-nav")})),"1"==a.attr("data-arrows")&&"1"==a.attr("data-outer-arrows")&&function(e){if(e instanceof o&&0<e.length&&!e.hasClass("be-slider-with-margin")&&100<u.width()-e.outerWidth()){var t=isNaN(e.attr("data-gutter"))?0:Number(e.attr("data-gutter"))/2;e.css({padding:"0 50px",margin:"0 -"+(t+50)+"px"})}}(a),"1"==a.attr("data-equal-height")&&function(e){if(e instanceof o&&0<e.length){var t=0,a=e.find(".be-slide");a.each(function(){var e=o(this);t<e.height()&&(t=e.height())}),a.height(t),e.addClass("be-equal-height-slider")}}(a),a.flickity({cellAlign:null!=a.attr("data-cell-align")?a.attr("data-cell-align"):"left",contain:!0,lazyLoad:"1"==a.attr("data-lazy-load")&&function(e){var t=1;if(e instanceof o&&0<e.length){var a=isNaN(Number(e.attr("data-cols")))?1:Number(e.attr("data-cols"));1<a&&(t=a-1)}return t}(a),adaptiveHeight:"1"==a.attr("data-adaptive-height"),pageDots:"1"==a.attr("data-dots"),prevNextButtons:"1"==a.attr("data-arrows"),asNavFor:null!=a.attr("data-as-nav-for")&&a.attr("data-as-nav-for"),autoPlay:!isNaN(Number(a.attr("data-auto-play")))&&Number(a.attr("data-auto-play")),wrapAround:"1"==a.attr("data-infinite")}))})})},I=function(){asyncloader.require(["isotope","begrid"],function(){o('.be-grid[data-layout = "metro"], .be-grid[data-layout = "masonry"]').each(function(){new BeGrid(this)})})},q=function(){var e=jQuery(".tatsu-parallax");0<e.length&&asyncloader.require("tatsuParallax",function(){e.tatsuParallax({speed:.3})})},N=function(){A()},F=function(){var e=jQuery(".tatsu-column-parallax");0<e.length&&asyncloader.require("tatsuColumnParallax",function(){e.tatsuColumnParallax({speed:7})})},S=function(a,i){var s=jQuery(".tatsu-column-effect-tilt > div");asyncloader.require("tilt",function(){if(a){var e=jQuery(".be-pb-observer-"+i);if(e.hasClass("tatsu-column-effect-tilt"))e.children().tilt();else{var t=e.children().eq(0).tilt();t.tilt.destroy.call(t)}}else s.tilt({scale:1.1,perspective:1e3,speed:4e3,maxTilt:10})})},0<(n=jQuery(".tatsu-column-sticky")).length&&jQuery(window).on("load",function(e){asyncloader.require("stickykit",function(){jQuery("body").trigger("sticky_kit:recalc")})}),A=function(e,t){(n=jQuery(".tatsu-column-sticky")).length&&asyncloader.require("stickykit",function(){var s=0;jQuery("#wpadminbar").length&&(s=32),jQuery.each(n,function(e,t){var a=767,i=jQuery(t);i.hasClass("tatsu-column-tablet-no-sticky")&&(a=1024),jQuery(window).width()>a&&!i.closest(".tatsu-eq-cols").length?(i.stick_in_parent({parent:".tatsu-row",offset_top:s}).on("sticky_kit:stick",function(e){jQuery(e.target).css("transition","none")}),i.parent().css("position","static")):i.trigger("sticky_kit:detach")})});var a=jQuery(".be-pb-observer-"+t+" .tatsu-column-inner ");a.hasClass("tatsu-column-sticky")||a.trigger("sticky_kit:detach")},O=function(e,t){F(),A(e,t),S(e,t)},D=function(){((0<f.length||0<h.length)&&(!d.hasClass("be-sticky-sections")||window.innerWidth<=960)||d.hasClass("tatsu-frame"))&&(l=setInterval(function(){y&&(y=!1,w(),v())},100)),d.hasClass("be-sticky-sections")&&window.innerWidth<=960&&w()},z=function(e,t){var s=jQuery(".be-pb-observer-"+t+" .tatsu-tabs-inner");t||s.length||(s=jQuery(".tatsu-tabs-inner")),e?0<s.length&&s.tabs("refresh"):0<s.length&&s.tabs({fx:{opacity:"toggle",duration:200},create:function(e,t){var a=s.attr("data-active-colors");a&&t.tab.css(JSON.parse(a))},activate:function(e,t){var a=s.attr("data-active-colors"),i=s.attr("data-normal-colors");a&&t.newTab.css(JSON.parse(a)),i=i?JSON.parse(i):{},t.oldTab.css({color:i.color||"",background:i.background||""})}}).css("opacity",1);var a=s.attr("data-active-colors"),i=s.attr("data-normal-colors");i&&(i=JSON.parse(i),s.find(".ui-state-default").css({color:i.color||"",background:i.background||""})),a&&s.find(".ui-state-active").css(JSON.parse(a))},i=function(){o(".tatsu-lists-timeline").each(function(){var e,t,a,i=o(this),s=o(this).find(".tatsu-lists-timeline-element"),n=i.find(".tatsu-list-content").first().outerHeight()/2;i.hasClass("tatsu-list-vertical-align-top")?(e=i.find(".tatsu-list-content").first().offset().top+15,t=i.find(".tatsu-list-content").last().offset().top+15,n=15):i.hasClass("tatsu-list-vertical-align-center")?(n=i.find(".tatsu-list-content").first().outerHeight()/2,e=i.find(".tatsu-list-content").first().offset().top+i.find(".tatsu-list-content").first().outerHeight()/2,t=i.find(".tatsu-list-content").last().offset().top+i.find(".tatsu-list-content").last().outerHeight()/2):i.hasClass("tatsu-list-vertical-align-bottom")?(n=i.find(".tatsu-list-content").first().outerHeight()-15,e=i.find(".tatsu-list-content").first().offset().top+i.find(".tatsu-list-content").first().outerHeight()-15,t=i.find(".tatsu-list-content").last().offset().top+i.find(".tatsu-list-content").last().outerHeight()-15):(e=i.find(".tatsu-list-content").first().offset().top+15,t=i.find(".tatsu-list-content").last().offset().top+15,n=15),(a=t-e)&&s.css({height:a,top:n})})},o(window).on("resize",i),E=i,P=function(e){var t=jQuery(".tatsu-accordion-inner");e?0<t.length&&t.each(function(){var e=jQuery(this);Number(e.attr("data-collapsed"))?e.accordion("option","collapsible",!0):e.accordion("option","collapsible",!1),e.accordion("refresh")}):0<t.length&&t.each(function(){var e=jQuery(this),t=Number(e.attr("data-collapsed"));e.accordion({collapsible:t,heightStyle:"content",active:!1}).css("opacity",1)})},L=function(e){var t=jQuery(".tatsu-typed-text-wrap");0<t.length&&asyncloader.require("typed",function(){t.each(function(){var e=jQuery(this).attr("data-rotate-text").split(","),t=jQuery(this).attr("data-loop-text"),a=jQuery(this).find("span").attr("id");t="1"===t,new Typed("#"+a,{strings:e,typeSpeed:100,backSpeed:75,backDelay:500,startDelay:1e3,loop:t})})})},R=function(e,s){m.length&&asyncloader.require("anime",function(){m.each(function(){var e=o(this);if((!s||e.closest(".be-pb-observer-"+s).length)&&e.isVisible(-100)&&!e.hasClass("tatsu-anime-applied")){e.addClass("tatsu-anime-applied");var t=e.find(".tatsu-animated-heading-inner"),a=e.attr("data-anime-type"),i=e.attr("data-anime-duration");switch("string"==typeof i&&(i=parseInt(i)),a){case"anime_split_letter":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'><span>$&</span></span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter span"),translateY:["1.1em",0],easing:"easeOutExpo",duration:750,delay:function(e,t){return 4*i*(t+1)}});break;case"anime_split_word":t.html(t.text().replace(/(\w+)|\W! /g,"<span class='tatsu-animated-heading-letter'><span>$&</span></span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter span"),translateY:["1.1em",0],duration:750,easing:"easeOutExpo",delay:function(e,t){return 12*i*t}});break;case"anime_from_right":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),translateX:[40,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1200,delay:function(e,t){return 2*i*t}});break;case"anime_flip_in":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),rotateY:[-90,0],duration:1300,delay:function(e,t){return 2*i*t}});break;case"anime_top_bottom_lines":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),scale:[.3,1],opacity:[0,1],translateZ:0,easing:"easeOutExpo",duration:600,delay:function(e,t){return 3*i*(t+1)}}).add({targets:e[0].querySelectorAll(".tatsu-animated-heading-line"),scaleX:[0,1],opacity:[.5,1],easing:"easeOutExpo",duration:900,delay:function(e,t,a){return 80*(a-t)}},"-=900");break;case"anime_slide_underline":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:e[0].querySelectorAll(".tatsu-animated-heading-line"),scaleX:[0,1],opacity:[.5,1],easing:"easeInOutExpo",duration:900}).add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),opacity:[0,1],translateX:[40,0],translateZ:0,scaleX:[.3,1],easing:"easeOutExpo",duration:1e3,delay:function(e,t){return 8*i*t}},"-=600");break;case"anime_slide_cursor":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:e[0].querySelectorAll(".tatsu-animated-heading-line"),scaleY:[0,1],opacity:[.5,1],easing:"easeOutExpo",delay:400,duration:700}).add({targets:e[0].querySelectorAll(".tatsu-animated-heading-line"),translateX:[0,t.width()],easing:"easeOutExpo",duration:700,delay:100}).add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),opacity:[0,1],easing:"easeOutExpo",duration:600,delay:function(e,t){return 2*i*(t+1)}},"-=775");break;case"anime_zoom_enter":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),scale:[4,1],opacity:[0,1],translateZ:0,easing:"easeOutExpo",duration:950,delay:function(e,t){return 3*i*t}});break;case"anime_fade_in":t.html(t.text().replace(/([^*{1}! ]|\w)/g,"<span class='tatsu-animated-heading-letter'>$&</span>")),anime.timeline().add({targets:t[0].querySelectorAll(".tatsu-animated-heading-letter"),opacity:[0,1],easing:"easeInOutQuad",duration:1500,delay:function(e,t){return 6*i*(t+1)}})}}})})},Y=function(e,t,a,i,s){jQuery.ajax({type:"POST",url:tatsuFrontendConfig.ajax_url,processData:!1,contentType:!1,dataType:"json",data:e,success:function(e){i.fadeOut(),"error"===e.status?t.removeClass("tatsu-success").addClass("tatsu-error"):(t.addClass("tatsu-success").removeClass("tatsu-error"),s.trigger("reset")),t.html(e.data).slideDown(),a.prop("disabled",!1)},error:function(){a.prop("disabled",!1),t.html("Please Try Again Later").slideDown()}})},{ready:function(){var e,t,a,i,s,n,r;0<jQuery(".light_box").length&&asyncloader.require("magnificpopup",function(){jQuery(".light_box").magnificPopup({type:"image",closeBtnInside:!1,closeOnContentClick:!1,callbacks:{open:function(){var e=this;e.wrap.on("click.pinhandler","img",function(){e.wrap.toggleClass("mfp-force-scrollbars")})},beforeClose:function(){this.wrap.off("click.pinhandler"),this.wrap.removeClass("mfp-force-scrollbars")}},image:{verticalFit:!0},zoom:{enabled:!0,duration:800},gallery:{enabled:!0}})}),0<(e=o(".tatsu-bg-lazyload")).length&&e.each(function(){var e,t=o(this),a=t.attr("data-src");null!=a&&((e=o(new Image)).one("load",function(){t.addClass("tatsu-bg-lazyloaded"),setTimeout(function(){t.parent().find(".tatsu-bg-blur").remove()},1e3)}),e.attr("src",a),e[0].complete&&e.load())}),jQuery(document).on("mouseenter.tatsu mouseleave.tatsu",".be-animated-anchor",function(e){var t,a,i,s=jQuery(this);if("mouseenter"===e.type){if(t=s.attr("data-hover-color")||"",!s.hasClass("be-style1"))return void s.css("color",t);a=s.attr("data-border-color"),s.css({borderColor:"",backgroundColor:a,color:t})}else{if(i=s.attr("data-color")||"",!s.hasClass("be-style1"))return void s.css("color",i);a=s.attr("data-border-color"),s.css({borderColor:a,backgroundColor:"",color:i})}}),Q(),E(),k(),q(),F(),S(),O(),t=jQuery(".tatsu-image-lazyload img"),a=function(){var e=t.filter(function(){var e=o(this);if(!e.is(":hidden")){var t=u.scrollTop(),a=t+u.height(),i=e.offset().top;return t-400<=i+e.height()&&i<=a+400}});e.each(function(){var e=jQuery(this);e.one("load",function(){e.css("opacity","1"),e.closest(".tatsu-single-image-inner").css("background-color","")}),null!=e.attr("data-srcset")?e.attr("srcset",e.attr("data-srcset")):null!=e.attr("data-src")&&e.attr("src",e.attr("data-src")),this.complete&&e.load()}),t=t.not(e)},u.on("scroll",a),a(),I(),jQuery(document).on("click.tatsu",".tatsu-notification .close",function(e){e.preventDefault(),jQuery(this).closest(".tatsu-notification").slideUp(500)}),v(),0<(i=o(".tatsu-carousel")).length&&asyncloader.require(["flickity","tatsuCarousel"],function(){i.each(function(){new TatsuCarousel(o(this))})}),n=!1,document.body.addEventListener("touchstart",function(e){e.target.closest(".flickity-slider")?(n=!0,s={x:e.touches[0].pageX,y:e.touches[0].pageY}):n=!1}),document.body.addEventListener("touchmove",function(e){if(n&&e.cancelable){var t={x:e.touches[0].pageX-s.x,y:e.touches[0].pageY-s.y};7<Math.abs(t.x)&&e.preventDefault()}},{passive:!1}),x(),0<(r=o(".tatsu-line-animate")).length&&asyncloader.require("vivus",function(){r.each(function(){var t=o(this),e={},a=t.attr("data-line-animation-duration"),i=t.attr("data-svg-animation")||"EASE",s=t.attr("data-path-animation")||"EASE",n=t.find("svg");0<n.length&&(n=n[0],e.onReady=function(e){t.addClass("tatsu-line-animate-ready")},e.duration=Number(a)||80,null!=i&&(e.animTimingFunction=Vivus[i]),null!=s&&(e.pathTimingFunction=Vivus[s]),new Vivus(n,e,function(e){t.addClass("tatsu-line-animated")}))})}),jQuery("body").hasClass("be-sticky-sections")||w(),T(),C(),z(),L(),P(),R(),c.tatsu_video=j,c.tatsu_gmaps=C,c.tatsu_animated_numbers=v,c.tatsu_section=_,c.tatsu_column=O,c.tatsu_image=T,c.tatsu_skills=Q,c.tatsu_row=N,c.tatsu_gallery=I,c.tatsu_tabs=z,c.tatsu_accordion=P,c.tatsu_lists=E,c.tatsu_typed_text=L,c.tatsu_animated_heading=R,jQuery(document).on("submit",".tatsu-forms-save .spyro-form",function(e){e.preventDefault();var t=jQuery(this),a=t.parent(".tatsu-forms-save").attr("id"),i=t.parent(".tatsu-forms-save").find(".subscribe_status"),s=t.parent(".tatsu-forms-save").find(".exp-subscribe-loader"),n=t.find(".spyro-required-checkbox");if(n.length&&n.find('input[type="checkbox"]:checked').length<=0)return n.find(".error").text("Required field").show().fadeOut(9999),i.removeClass("tatsu-success").addClass("tatsu-error"),i.html("Required field missing"),!1;if(void 0===a||null==a||""==a)i.removeClass("tatsu-success").addClass("tatsu-error"),i.html("Invalid Form").slideDown(),console.log("Form id missing");else{var r=(a=a.split("-"))[1];if(void 0!==r&&null!=r&&""!=r){var l=t.find('input[type="submit"]'),o=t.find('input[name="is_recaptcha"]').val();l.prop("disabled",!0),s.fadeIn();var u=t.attr("data-action"),d=new FormData(jQuery(this)[0]);if(d.append("action","tatsu_forms_save"),d.append("form_id",r),d.append("action_after_submit",u),"mailchimp"==u){var c=t.find('input[data-map_field="email_address"]');c.length&&d.append("email_address",c.val());var y=t.find('input[data-map_field="FNAME"]');y.length&&d.append("fname",y.val());var f=t.find('input[data-map_field="LNAME"]');f.length&&d.append("lname",f.val());var p=t.find('input[data-map_field="PHONE"]');p.length&&d.append("phone",p.val())}return"v3"==tatsuFrontendConfig.recaptcha_type&&void 0!==o&&"1"==o?grecaptcha.ready(function(){grecaptcha.execute(tatsuFrontendConfig.recaptcha_site_key,{action:"submit"}).then(function(e){d.append("g-recaptcha-response",e),Y(d,i,l,s,t)})}):Y(d,i,l,s,t),!1}i.removeClass("tatsu-success").addClass("tatsu-error"),i.html("Invalid Form").slideDown(),console.log("Form id missing")}}),jQuery(window).on("tatsu_update.tatsu",function(e,t){var a,i,s,n,r,l;f=jQuery(".tatsu-animate, .be-animate"),p=jQuery(".be-skill"),m=jQuery(".tatsu-animated-heading-wrap"),g=f.length,h=jQuery(".tatsu-an"),b=f.length+h.length,"trigger_ready"==t.moduleName?(v(),q(),C(),k(),T(),O(),I(),F(),N(),jQuery(window).trigger("resize")):t.moduleName in c&&c[t.moduleName](t.shouldUpdate,t.moduleId),"csstrigger"===t.type&&(a=t.animationDetails,i=a.id,s=a.animation,n=a.animationDuration,r=a.animationDelay,(l=jQuery(".be-pb-observer-"+i)).length&&(l.removeClass("animated flipInX flipInY fadeIn fadeInDown fadeInLeft fadeInRight fadeInUp slideInDown slideInLeft slideInRight rollIn rollOut bounce bounceIn bounceInUp bounceInDown bounceInLeft bounceInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig flash flip lightSpeedIn pulse rotateIn rotateInUpLeft rotateInDownLeft rotateInUpRight rotateInDownRight shake swing tada wiggle wobble infiniteJump zoomIn none already-visible end-animation"),setTimeout(function(){l.css("animation-delay",r+"ms"),l.css("animation-duration",n+"ms"),l.one("webkitAnimationStart oanimationstart msAnimationStart animationstart",function(e){l.addClass("end-animation")}),l.addClass(s)},10)))}),jQuery(window).on("scroll",function(){y=!0,Q(),R()}),D(),jQuery(window).on("resize.tatsu",function(){jQuery(".tatsu-bg-video, .be-bg-video").tatsuResizeMedia(),d.hasClass("be-sticky-sections")&&(window.innerWidth<=960&&null==l?D():960<window.innerWidth&&null!=l&&clearTimeout(l)),A()})},lightbox:T,cssAnimate:w,animatedNumbers:v});window.tatsu=r,jQuery(r.ready)}(jQuery);