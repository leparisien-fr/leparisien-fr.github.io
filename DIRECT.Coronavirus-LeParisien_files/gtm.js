
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"78",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"5.4.42"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var e=[{name:\"EMAIL\",regex:\/([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9_.+-]+)\/gi}],b=a.get(\"hitPayload\").split(\"\\x26\");for(a=0;a\u003Cb.length;a++){var c=b[a].split(\"\\x3d\");try{var d=decodeURIComponent(decodeURIComponent(c[1]))}catch(f){d=decodeURIComponent(c[1])}e.forEach(function(a){d=d.replace(a.regex,\"[DELETED \"+a.name+\"]\")});c[1]=encodeURIComponent(d);b[a]=c.join(\"\\x3d\")}return b}})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function p(c){return 10\u003Ec?\"0\"+c:c}function t(c){u.lastIndex=0;return u.test(c)?'\"'+c.replace(u,function(a){var c=f[a];return\"string\"===typeof c?c:\"\\\\u\"+(\"0000\"+a.charCodeAt(0).toString(16)).slice(-4)})+'\"':'\"'+c+'\"'}function q(c,a){var l=g,d=a[c];d\u0026\u0026\"object\"===typeof d\u0026\u0026\"function\"===typeof d.toJSON\u0026\u0026(d=d.toJSON(c));\"function\"===typeof h\u0026\u0026(d=h.call(a,c,d));switch(typeof d){case \"string\":return t(d);case \"number\":return isFinite(d)?d+v:\"null\";case \"boolean\":case \"null\":return d+v;case \"object\":if(!d)return\"null\";\ng+=r;var e=[];if(\"[object Array]\"===Object.prototype.toString.apply(d)){a=d.length;for(c=0;a\u003Ec;c+=1)e[c]=q(c,d)||\"null\";var b=0===e.length?\"[]\":g?\"[\\n\"+g+e.join(\",\\n\"+g)+\"\\n\"+l+\"]\":\"[\"+e.join(\",\")+\"]\";g=l;return b}if(h\u0026\u0026\"object\"===typeof h)for(a=h.length,c=0;a\u003Ec;c+=1){if(\"string\"===typeof h[c]){var m=h[c];b=q(m,d)}b\u0026\u0026e.push(t(m)+(g?\": \":\":\")+b)}else for(m in d)Object.prototype.hasOwnProperty.call(d,m)\u0026\u0026(b=q(m,d))\u0026\u0026e.push(t(m)+(g?\": \":\":\")+b);b=0===e.length?\"{}\":g?\"{\\n\"+g+e.join(\",\\n\"+g)+\"\\n\"+l+\"}\":\n\"{\"+e.join(\",\")+\"}\";g=l;return b}}var u=\/[\\\\'\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]\/g,g,r,f={},v=String(),h,k={};f[\"\\b\"]=\"\\\\b\";f[\"   \"]=\"\\\\t\";f[\"\\n\"]=\"\\\\n\";f[\"\\f\"]=\"\\\\f\";f[\"\\r\"]=\"\\\\r\";f[\"'\"]='\\\\\"';f[\"\\\\\"]=\"\\\\\\\\\";\"function\"!==typeof Date.prototype.toJSON\u0026\u0026(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+\"-\"+p(this.getUTCMonth()+1)+\"-\"+p(this.getUTCDate())+\"T\"+p(this.getUTCHours())+\":\"+\np(this.getUTCMinutes())+\":\"+p(this.getUTCSeconds())+\"Z\":null});String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};\"function\"!==typeof k.stringify\u0026\u0026(k.stringify=function(c,a,l){r=g=\"\";if(\"number\"===typeof l)for(a=0;l\u003Ea;a+=1)r+=\" \";else if(\"string\"===typeof l\u0026\u0026(r=l),(h=a)\u0026\u0026\"function\"!==typeof a\u0026\u0026(\"object\"!==typeof a||\"number\"!==typeof a.length))throw Error(\"JSON.stringify\");return q(\"\",{\"\":c})});\"function\"!==typeof k.parse\u0026\u0026(k.parse=function(){var c,\na,g={'\"':'\"',\"\\\\\":\"\\\\\",\"\/\":\"\/\",b:\"\\b\",f:\"\\f\",n:\"\\n\",r:\"\\r\",t:\"\\t\"},d,e=function(a){throw{name:\"SyntaxError\",message:a,at:c,text:d};},b=function(b){b\u0026\u0026b!==a\u0026\u0026e(\"Expected '\"+b+\"' instead of '\"+a+\"'\");a=d.charAt(c);c+=1;return a},m=function(){var c=\"\";\"-\"===a\u0026\u0026(c=\"-\",b(\"-\"));for(;\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a;)c+=a,b();if(\".\"===a)for(c+=\".\";b()\u0026\u0026\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a;)c+=a;if(\"e\"===a||\"E\"===a){c+=a;b();if(\"-\"===a||\"+\"===a)c+=a,b();for(;\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a;)c+=a,b()}c=+c;if(isFinite(c))return c;e(\"Bad number\")},f=function(){var c,\nd=\"\",f;if('\"'===a)for(;b();){if('\"'===a)return b(),d;if(\"\\\\\"===a)if(b(),\"u\"===a){for(c=f=0;4\u003Ec;c+=1){var h=parseInt(b(),16);if(!isFinite(h))break;f=16*f+h}d+=String.fromCharCode(f)}else if(\"string\"===typeof g[a])d+=g[a];else break;else d+=a}e(\"Bad string\")},n=function(){for(;a\u0026\u0026\" \"\u003E=a;)b()},h=function(){switch(a){case \"t\":return b(\"t\"),b(\"r\"),b(\"u\"),b(\"e\"),!0;case \"f\":return b(\"f\"),b(\"a\"),b(\"l\"),b(\"s\"),b(\"e\"),!1;case \"n\":return b(\"n\"),b(\"u\"),b(\"l\"),b(\"l\"),null}e(\"Unexpected '\"+a+\"'\")};var k=function(){n();\nswitch(a){case \"{\":a:{var c={};if(\"{\"===a){b(\"{\");n();if(\"}\"===a){b(\"}\");var d=c;break a}for(;a;){d=f();n();b(\":\");Object.hasOwnProperty.call(c,d)\u0026\u0026e(\"Duplicate key '\"+d+\"'\");c[d]=k();n();if(\"}\"===a){b(\"}\");d=c;break a}b(\",\");n()}}e(\"Bad object\");d=void 0}return d;case \"[\":a:{d=[];if(\"[\"===a){b(\"[\");n();if(\"]\"===a){b(\"]\");break a}for(;a;){d.push(k());n();if(\"]\"===a){b(\"]\");break a}b(\",\");n()}}e(\"Bad array\");d=void 0}return d;case '\"':return f();case \"-\":return m();default:return\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a?m():\nh()}};return function(b,f){d=b;c=0;a=\" \";b=k();n();a\u0026\u0026e(\"Syntax error\");return\"function\"===typeof f?function w(a,c){var b,d=a[c];if(d\u0026\u0026\"object\"===typeof d)for(b in d)if(Object.prototype.hasOwnProperty.call(d,b)){var e=w(d,b);void 0!==e?d[b]=e:delete d[b]}return f.call(a,c,d)}({\"\":b},\"\"):b}}());C55.JSON=k;window.JSON||(window.JSON=k)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){C55.utils={_log:[]};C55.utils.log=function(c){try{c.date=+new Date,c.stack=c.stack.replace(\/^[^\\(]+?[\\n$]\/gm,\"\").replace(\/^\\s+at\\s+\/gm,\"\").replace(\/^Object.\u003Canonymous\u003E\\s*\\(\/gm,\"{anonymous}()@\").split(\"\\n\",-1),this._log.push(c)}catch(a){}};C55.utils.isNative=function(c){var a=\/\\s*\\[native code\\]\\s*\/i;try{return!!c.toString().match(a)}catch(b){return!1}};C55.utils.enumerate=function(c){return function(a){var b,d;if(c)try{return d=Object.keys(a)}catch(f){}d=[];a=a?a.callee?\na.slice(a):a:{};for(b in a)a.hasOwnProperty(b)\u0026\u0026d.push(b);return d}}(C55.utils.isNative(Object.keys));C55.utils.enumerateIterator=function(c){var a=[],b;for(b in c)c.hasOwnProperty(b)\u0026\u0026a.push([b,c[b]]);return a};C55.utils.serialize=function(c){var a,b=[],d=\"\\x26\",f=\"\\x3d\";var g=1\u003Carguments.length?arguments:void 0!==c?c:{};var h=this.enumerate(g);var e=h.length;for(a=0;a\u003Ce;a+=1){var k=encodeURI(h[a]);g[h[a]]\u0026\u0026(k+=f+encodeURIComponent(g[h[a]]));b.push(k)}return b.join(d).replace(\/%20\/g,\"+\")};C55.utils.objectify=\nfunction(c){var a={},b=\/\u0026amp;|\u0026\/g,d=\"\\x3d\",f;-1!==c.search(b)?b=c.split(b,-1):c.length?(b={},b[c]=c.toString()):b=\"Array\"===typeof c?[c]:[];var g=this.enumerate(b);var h=g.length;for(f=0;f\u003Ch;f+=1){var e=decodeURI(b[g[f]].replace(\/\\+\/g,\"%20\"));var k=-1!==e.indexOf(d)?e.indexOf(d):c.length;var l=e.split(d,1);e=e.slice(k+1);a[l]=e}return a};C55.utils.URLparse=function(c){var a=document.createElement(\"a\"),b={};a.href=c;b.hash=a.hash;b.params=C55.utils.objectify(a.search.slice(1));b.pathname=\"\/\"!==a.pathname[0]?\n\"\/\"+a.pathname:a.pathname;b.host=a.hostname;b.protocol=a.protocol;b.port=a.port;return b};C55.utils.DOMUtil={addEventListener:function(){return window.addEventListener?function(c,a,b,d){return c.addEventListener(a,b,!!d)}:function(c,a,b){return c.attachEvent(\"on\"+a,function(a){a=a||window.event;a.target=a.target||a.srcElement;a.relatedTarget=a.relatedTarget||a.fromElement||a.toElement;a.isImmediatePropagationStopped=a.isImmediatePropagationStopped||!1;a.preventDefault=a.preventDefault||function(){a.returnValue=\n!1};a.stopPropagation=a.stopPropagation||function(){a.cancelBubble=!0};a.stopImmediatePropagation=a.stopImmediatePropagation||function(){a.stopPropagation();a.isImmediatePropagationStopped=!0};a.isImmediatePropagationStopped||b(a)})}}(),removeEventListener:function(){return window.removeEventListener?function(c,a,b,d){return c.removeEventListener(a,b,!!d)}:function(c,a,b){c.detachEvent(\"on\"+a,b)}}(),windowHeight:function(){return window.innerHeight?window.innerHeight:document.documentElement\u0026\u0026document.documentElement.clientHeight?\ndocument.documentElement.clientHeight:document.body?document.body.clientHeight:0},windowWidth:function(){return window.innerWidth?window.innerWidth:document.documentElement\u0026\u0026document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:0}};return\"55utils\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){C55.prototype.nodeExplorer=function(a,b,c){var d;if(a\u0026\u0026void 0!==a[b]\u0026\u0026(c\u0026\u0026a[b]===c||!c))return a;if(a instanceof Array)for(d=a.length-1;0\u003C=d;--d){var e=this.nodeExplorer(a[d],b,c);if(void 0!==e)return e}else if(\"object\"===typeof a)for(d in a)if(a.hasOwnProperty(d)\u0026\u0026(e=this.nodeExplorer(a[d],b,c),void 0!==e))return e};C55.prototype.getDataLayerValue=function(a){var b=this.nodeExplorer(this.dataLayer,a);return b?b[a]:\"\"};C55.prototype.inDataLayer=function(a,b){return(a=\nthis.nodeExplorer(this.dataLayer,a,b))?!0:!1};C55.prototype.getDataLayerObject=function(a,b){return(a=this.nodeExplorer(this.dataLayer,a,b))?a:!1};C55.prototype.getDataLayerListById=function(a){var b=function(a,d,e){var c;a\u0026\u0026void 0!==a[d]\u0026\u0026a[d]\u0026\u0026e.push(a);if(a instanceof Array)for(c=a.length-1;0\u003C=c;--c)b(a[c],d,e);else if(\"object\"===typeof a)for(c in a)a.hasOwnProperty(c)\u0026\u0026b(a[c],d,e);return e};return b(this.dataLayer,a,[])};C55.prototype.getDataLayerValueForSpa=function(a){_nodeExplorer=function(a,\nb,e,f){var c;var d=f||0;if(a\u0026\u0026(void 0!==a[b]||-1!=e.indexOf(a.event)))return a;if(a instanceof Array\u0026\u00265\u003Ed)for(c=a.length-1;0\u003C=c;--c){if(d=_nodeExplorer(a[c],b,e,f+1),void 0!==d)return d}else if(\"object\"===typeof a\u0026\u00265\u003Ed)for(c in a)if(a.hasOwnProperty(c)\u0026\u0026(\"event\"==c\u0026\u0026e.indexOf(a.event),d=_nodeExplorer(a[c],b,e,f+1),void 0!==d))return d};var b=_nodeExplorer(this.dataLayer,a,config55.virtualPageValues,0);return b?b[a]:void 0};C55.prototype.pushDL=function(a,b,c,d,e,f){var g=-1;a\u0026\u0026(g=this.indexKw(this.insensitiveWords,\na.toLowerCase()));e||(e=0);f||(f=!1);-1\u003Cg\u0026\u0026(a=this.insensitiveWords[g]);switch(a){case \"trackEvent\":this.dataLayer.push({event:a,eventCategory:b,eventAction:c,eventLabel:d,eventValue:e,eventNonInteraction:f});break;case \"trackSocial\":this.dataLayer.push({event:a,socialNetwork:b,socialAction:c,socialTarget:d,page:e});break;case \"virtualPageview\":a={event:a};b\u0026\u0026(a.page=b);this.dataLayer.push(a);break;default:throw Error(\"Unknown argument to push in dataLayer array.\");}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){config55.ytPlayers={};var l=0,p,q=\/youtube(?:-nocookie)?\\.com\\\/embed\\\/([^\\?|$]*)\/,r=\/youtube(?:-nocookie)?\\.com\\\/v\\\/([^\\?|$]*)\/,u=\/youtube(?:-nocookie)?\\.com\\\/v\\\/.*playerapiid=([^\u0026|$]*)\/,n={},h=[],k=[],t=function(){var b=Array.prototype.slice;try{b.call(document.getElementsByTagName(\"body\"))}catch(a){return function(){var a,b=this.length,d=[];if(!b)return[];for(a=0;a\u003Cb;a+=1)d.push(this[a]);return d}}return b}();C55.youtube={players:{},historyStart:function(){void 0===\nconfig55.history.youtube?(config55.history.youtube={start0:+new Date},config55.history.youtube.counter=1):(config55.history.youtube[\"start\"+config55.history.youtube.counter]=+new Date,config55.history.youtube.counter+=1)},historyEnd:function(){config55.history.youtube[\"lap\"+(config55.history.youtube.counter-1)]=+new Date-config55.history.youtube[\"start\"+(config55.history.youtube.counter-1)]},pushGAEvent:function(b,a){b\u0026\u0026config55.dataLayer.push({event:\"videoEvent\",eventAction:encodeURI(b),eventLabel:encodeURI(a)})},\ntrackPercentageView:function(){var b={},a=1E3,c=function(b,d){var c=config55.youtubeStepsHierarchy,e=0,m=!1;try{e=d.getDuration()}catch(f){e=d.F.duration}var h=function(){var f=0,g=0,k;try{f=d.getCurrentTime(),g=Math.round(f\/e*100)}catch(v){f=d.F.currentTime,g=Math.round(f\/e*100)}f=0;for(k=c.length;f\u003Ck;f+=1)c[f].reached=c[f].reached||[],g\u003Ec[f].value\u0026\u0026!c[f].reached[b]\u0026\u0026(c[f].reached[b]=!0,C55.youtube.pushGAEvent(c[f].name,b));m\u0026\u0026setTimeout(h,a)};return{start:function(){m||(m=!0,h())},stop:function(){m=\n!1}}};return function(a,d){b[a]||(b[a]=c(a,d));return b[a]}}(),ytOnStateChange:function(){return function(b){var a=b._videoId;switch(b.data){case YT.PlayerState.ENDED:try{this.getPlaylist\u0026\u0026this.getPlaylist()\u0026\u0026(a=this.getPlaylist()[Math.max(this.getPlaylistIndex()-1,0)])}catch(c){this.F.playlist\u0026\u0026(a=this.F.playlist[Math.max(this.F.playlistIndex-1,0)])}C55.youtube.pushGAEvent(\"Watch to End\",a);k[a]=\"Ended\";break;case YT.PlayerState.PLAYING:C55.youtube.trackPercentageView(a,b.target).start();\"Play\"!==\nk[a]\u0026\u0026C55.youtube.pushGAEvent(\"Play\",a);k[a]=\"Play\";break;case YT.PlayerState.PAUSED:C55.youtube.trackPercentageView(a).stop()}}}(),registerPlayer:function(b,a){a=\"__ytOnStateChange_\"+a;var c=window[a]=function(a){return C55.youtube.ytOnStateChange({data:a,_videoId:c._videoid})};c._videoid=b.data.match(r)[1];b.addEventListener(\"onStateChange\",a)},parseDOMForVideos:function(){var b,a;var c=document.getElementsByTagName(\"iframe\");var e=[].concat(t.call(document.getElementsByTagName(\"object\")),t.call(document.getElementsByTagName(\"embed\")));\nvar d=0;for(b=c.length;d\u003Cb;d+=1)(a=c[d].src.match(q))\u0026\u0026-1===h.indexOf(c[d])\u0026\u0026(c[d].id||(c[d].id=\"ytvid_\"+ +new Date),a=c[d].id,C55.youtube.players[a]=new YT.Player(a));d=0;for(b=e.length;d\u003Cb;d+=1)(a=(e[d].data||e[d].src).match(r))\u0026\u0026-1===h.indexOf(e[d])\u0026\u0026(h.push(e[d]),C55.youtube.registerPlayer(e[d],a[1]));config55.youtubeParse\u0026\u0026setTimeout(C55.youtube.parseDOMForVideos,500)},iframeAPIReady:function(){var b=window.YT;b._Player=b.Player;b.Player=function(a,c){c=c||{};c.events||(c.events={});var e=this,\nd=c.events||{},g=document.getElementById(a);var l=\"function\"===typeof d.onStateChange?d.onStateChange:function(){};h.push(g);d.onStateChange=function(a){a._videoId=c.videoId||g.src.match(q)[1];if(\"videoseries\"===a._videoId||\"playlist\"===a._videoId)try{a._videoId=a.target.getVideoData().video_id}catch(w){a._videoId=a.target.F.videoData.video_id}a.lastState=k;C55.youtube.ytOnStateChange.call(e,a);l\u0026\u0026l.call(e,a)};b._Player.call(this,a,c)};b.Player.prototype=b._Player.prototype;window._onYouTubeIframeAPIReady\u0026\u0026\nwindow._onYouTubeIframeAPIReady();C55.youtube.parseDOMForVideos()},PlayerReady:function(){return function(b){var a;if(b){if(!(a=n[b]))a:{a=b;var c=document.getElementsByTagName(\"object\"),e,d;var g=0;for(e=c.length;g\u003Ce;g+=1)if((d=c[g].data.match(u))\u0026\u0026d[1]===a){n[a]=c[g];a=n[a];break a}a=null}a\u0026\u0026(h.push(a),C55.youtube.registerPlayer(a,b));window._onYouTubePlayerReady\u0026\u0026window._onYouTubePlayerReady(b)}}}(),main:function(){l||\"complete\"!==document.readyState||(l+=1,p=document.getElementsByTagName(\"head\")[0],\nwindow._onYouTubePlayerReady=window.onYouTubePlayerReady,window.onYouTubePlayerReady=C55.youtube.PlayerReady,window.YT?function a(){if(!YT.Player)return setTimeout(a,16);C55.youtube.iframeAPIReady()}():(window._onYouTubeIframeAPIReady=window.onYouTubeIframeAPIReady||null,window.onYouTubeIframeAPIReady=C55.youtube.iframeAPIReady,function(){var b=document.createElement(\"script\"),a=document.createElement(\"a\"),c=p;a.href=\"dummy.jpg\";b.async=!0;b.src=\"file:\"===a.protocol?\"http:\/\/youtube.com\/iframe_api\":\n\"\/\/youtube.com\/iframe_api\";c.appendChild(b)}()))},onreadystatechange:function(){\"complete\"!==document.readyState||l||C55.youtube.main()},init:function(){if(document.readyState){if(\"complete\"===document.readyState)return C55.youtube.main()}else setTimeout(C55.youtube.main,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",C55.youtube.main),window.addEventListener(\"load\",C55.youtube.main),document.addEventListener(\"readystatechange\",C55.youtube.onreadystatechange)):(window.attachEvent(\"onload\",\nC55.youtube.main),document.attachEvent(\"onreadystatechange\",C55.youtube.onreadystatechange))}};C55.youtube.historyStart();C55.youtube.init();C55.youtube.historyEnd();return\"55youtube\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var e=0,f=[];C55.htmlVideo={players:{},stepsByPlayer:{},historyStart:function(){void 0===config55.history.htmlVideo?(config55.history.htmlVideo={start0:+new Date},config55.history.htmlVideo.counter=1):(config55.history.htmlVideo[\"start\"+config55.history.htmlVideo.counter]=+new Date,config55.history.htmlVideo.counter+=1)},historyEnd:function(){config55.history.htmlVideo[\"lap\"+(config55.history.htmlVideo.counter-1)]=+new Date-config55.history.htmlVideo[\"start\"+(config55.history.htmlVideo.counter-\n1)]},pushGAEvent:function(a,b,d){a\u0026\u0026config55.dataLayer.push({event:\"videoEvent\",eventAction:encodeURI(a),eventLabel:encodeURI(b),eventValue:d})},trackPercentageView:function(a){var b=C55.htmlVideo.stepsByPlayer[a.id],d=a.duration,c=Math.round(a.currentTime),e;d=Math.round(c\/d*100);c=0;for(e=b.length;c\u003Ce;c+=1)d\u003Eb[c].value\u0026\u0026!b[c].reached\u0026\u0026(b[c].reached=!0,C55.htmlVideo.pushGAEvent(b[c].name,a.id))},onStateChange:function(a){switch(a.type){case \"timeupdate\":C55.htmlVideo.trackPercentageView(a.target);\nbreak;case \"play\":\"play\"!==f[a.target.id]\u0026\u0026C55.htmlVideo.pushGAEvent(\"Play\",a.target.id);f[a.target.id]=\"play\";break;case \"ended\":f[a.target.id]=\"ended\",C55.htmlVideo.pushGAEvent(\"Watch to End\",a.target.id),C55.htmlVideo.stepsByPlayer[a.target.id]=JSON.parse(JSON.stringify(config55.htmlVideoStepsHierarchy))}},registerPlayer:function(a){window.addEventListener?(a.addEventListener(\"play\",C55.htmlVideo.onStateChange,!1),a.addEventListener(\"timeupdate\",C55.htmlVideo.onStateChange,!1),a.addEventListener(\"ended\",\nC55.htmlVideo.onStateChange,!1)):(a.attachEvent(\"play\",C55.htmlVideo.onStateChange),a.attachEvent(\"timeupdate\",C55.htmlVideo.onStateChange),a.attachEvent(\"ended\",C55.htmlVideo.onStateChange))},parseDOMForVideos:function(){var a=document.getElementsByTagName(\"video\"),b,d=a.length;for(b=0;b\u003Cd;b+=1){var c=a[b].id||a[b].currentSrc.split(\"\/\",-1).slice(-1)[0].split(\".\",1);a[b].id=c;C55.htmlVideo.players[c]||(C55.htmlVideo.players[c]=a[b],C55.htmlVideo.registerPlayer(a[b]),C55.htmlVideo.stepsByPlayer[c]=\nJSON.parse(JSON.stringify(config55.htmlVideoStepsHierarchy)))}config55.htmlVideoParse\u0026\u0026setTimeout(C55.htmlVideo.parseDOMForVideos,500)},main:function(){e||\"complete\"!==document.readyState||(e+=1,C55.htmlVideo.parseDOMForVideos())},onreadystatechange:function(){\"complete\"!==document.readyState||e||C55.htmlVideo.main()},init:function(){if(document.readyState){if(\"complete\"===document.readyState)return C55.htmlVideo.main()}else setTimeout(C55.htmlVideo.main,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",\nC55.htmlVideo.main),window.addEventListener(\"load\",C55.htmlVideo.main),document.addEventListener(\"readystatechange\",C55.htmlVideo.onreadystatechange)):(window.attachEvent(\"onload\",C55.htmlVideo.main),document.attachEvent(\"onreadystatechange\",C55.htmlVideo.onreadystatechange))}};C55.htmlVideo.historyStart();C55.htmlVideo.init();C55.htmlVideo.historyEnd();return\"55htmlVideo\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){void 0===config55.history.configuration?(config55.history.configuration={start0:+new Date},config55.history.configuration.counter=1):(config55.history.configuration[\"start\"+config55.history.configuration.counter]=+new Date,config55.history.configuration.counter+=1);config55.sendEventClassic=!0;",["escape",["macro",7],8,16],"();",["escape",["macro",8],8,16],"();config55.history.configuration[\"lap\"+(config55.history.configuration.counter-1)]=+new Date-config55.history.configuration[\"start\"+\n(config55.history.configuration.counter-1)];return\"55configuration\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){if(window.config55)return\"55logic\";Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(!this)throw new TypeError('\"this\" is null or not defined');var c=this,d=c.length;b=+b||0;if(0===d)return-1;Infinity===Math.abs(b)\u0026\u0026(b=0);if(b\u003E=d)return-1;for(b=Math.max(0\u003C=b?b:d-Math.abs(b),0);b\u003Cd;){if(c.hasOwnProperty(b)\u0026\u0026c[b]===a)return b;b+=1}return-1});var a=function(){this.initDataLayer();this.insensitiveWords=[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];this.history=\n{};this.path=\"\/\";this.encodeCookie=!0;this.expires=(new Date(+new Date+15552E6)).toUTCString();this.loadCookie();this.queryParameters=[\"kw55\",\"res55\",\"cat55\"];this.hash=!0;this.excludeParams=\"email mail address lastName firstName username member[mail] senderEmail NOM PRE_NOM E_MAIL j_username j_password email_user login user_email email1 confEmail1 email2 confEmail2\".split(\" \");this.sendEventClassic=!1;this.sporadicPeriod=30;this.frequentPeriod=7;this.visitorFrequencies=[\"new\",\"sporadic\",\"occasional\",\n\"frequent\"];this.youtubeParse=!1;this.youtubeStepsHierarchy=[{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",value:98}];this.htmlVideoParse=!1;this.htmlVideoStepsHierarchy=[{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",value:98}];this.trackerName=\"t55\";this.nbPvTpl=1;this.clientId=!1;this.adblockMaxLoop=5;this.autoExcludeRefOnTransac=!0;this.customDimProduct={};this.customMetProduct={};this.version=",["escape",["macro",1],8,16],";this.virtualPageValues=\n[\"virtualPageview\"];this.customTask=[",["escape",["macro",2],8,16],"]};window.C55=a;a.prototype.initDataLayer=function(){for(var a=window.document.getElementsByTagName(\"script\"),b,c=a.length,d=0,f,g=!1,e=this||{};d\u003Cc\u0026\u0026!g;)b=a[d].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(b)\u0026\u0026b.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",3],8,16],"\u0026\u0026(f=b.split(\"\\x26l\\x3d\")[1],g=!0),d+=1;e.dataLayer=f?window[f]||[]:window.dataLayer||[];e._push=e.dataLayer.push;e.dataLayer.push=function(a){var b=(b=a?a.event:null)?\ne.indexKw(e.insensitiveWords,b.toLowerCase()):-1;-1!==b\u0026\u0026(a.event=e.insensitiveWords[b]);a.socialAction\u0026\u0026!e.engagement\u0026\u0026(e.engagement=\"ambassador\");return e._push.call(e.dataLayer,a)}};",["escape",["macro",4],8,16],";a.prototype.domain=function(){var a,b=\"stld\\x3dcookie\",c=document.location.hostname.split(\".\",-1);for(a=c.length-1;0\u003C=a;--a){var d=c.slice(a).join(\".\");document.cookie=b+\";domain\\x3d.\"+d+\";\";if(-1\u003Cdocument.cookie.indexOf(b))return document.cookie=b.split(\"\\x3d\",-1)[0]+\"\\x3d;domain\\x3d.\"+d+\";expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\",\nd}}();a.prototype.loadCookie=function(){document.cookie.match(\"__55\\x3d([^;$]*)\")?this.store=this.encodeCookie?JSON.parse(decodeURIComponent(document.cookie.match(\"__55\\x3d([^;$]*)\")[1])):JSON.parse(document.cookie.match(\"__55\\x3d([^;$]*)\")[1]):this.store={}};a.prototype.saveCookie=function(){window.document.cookie=this.encodeCookie?\"__55\\x3d\"+encodeURIComponent(JSON.stringify(this.store))+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\":\"__55\\x3d\"+JSON.stringify(this.store)+\n\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\"};a.prototype.addDays=function(a){var b=new Date,c=new Date;c.setDate(b.getDate()+a);return c.toUTCString()};a.prototype.indexKw=function(a,b,c){var d;c=c||0;for(d=a.length;c\u003Cd;c+=1)if(b\u0026\u0026a[c].toString().toLowerCase()===b.toLowerCase())return c;return-1};",["escape",["macro",5],8,16],"();a.prototype.setHierarchy=function(a,b){this[a+\"Hierarchy\"]=b};",["escape",["macro",6],8,16],"();window.config55=new a;config55.isNative=function(){a.utils.log({stack:Error().stack});\nreturn a.utils.isNative.apply(a.utils,arguments)};config55.enumerate=function(){a.utils.log({stack:Error().stack});return a.utils.enumerate.apply(a.utils,arguments)};config55.enumerateIterator=function(){a.utils.log({stack:Error().stack});return a.utils.enumerateIterator.apply(a.utils,arguments)};config55.serialize=function(){a.utils.log({stack:Error().stack});return a.utils.serialize.apply(a.utils,arguments)};config55.objectify=function(){a.utils.log({stack:Error().stack});return a.utils.objectify.apply(a.utils,\narguments)};config55.URL={parse:function(){a.utils.log({stack:Error().stack});return a.utils.URLparse.apply(a.utils,arguments)}};",["escape",["macro",9],8,16],"();return\"55logic\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a={};var b=config55.getDataLayerListById(\"event\")[0];switch(b.event){case \"eeListView\":if(b=config55.getDataLayerObject(\"event\",\"eeListView\"))for(a.ecommerce=a.ecommerce||{},a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode,a.ecommerce.impressions=a.ecommerce.impressions||b.products,j=0;j\u003Ca.ecommerce.impressions.length;j++){for(var c in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+c]=a.ecommerce.impressions[j][config55.customDimProduct[c]]||\n\"\";for(var d in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+d]=a.ecommerce.impressions[j][config55.customMetProduct[d]]||\"\"}break;case \"eeListClick\":if(b=config55.getDataLayerObject(\"event\",\"eeListClick\"))for(a.ecommerce={},a.ecommerce.click={},a.ecommerce.click.actionField={},a.ecommerce.click.actionField.list=b.list,a.ecommerce.click.products=b.products,j=0;j\u003Ca.ecommerce.click.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+c]=\na.ecommerce.click.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+d]=a.ecommerce.click.products[j][config55.customMetProduct[d]]||\"\"}break;case \"eePromoView\":if(b=config55.getDataLayerObject(\"event\",\"eePromoView\"))a.ecommerce={},a.ecommerce.promoView={},a.ecommerce.promoView.promotions=b.promotions;break;case \"eePromoClick\":if(b=config55.getDataLayerObject(\"event\",\"eePromoClick\"))a.ecommerce={},a.ecommerce.promoClick={},a.ecommerce.promoClick.promotions=\nb.promotions;break;case \"addToCart\":if(b=config55.getDataLayerObject(\"event\",\"addToCart\"))for(a.ecommerce={},a.ecommerce.currencyCode=b.currencyCode,a.ecommerce.add={},a.ecommerce.add.products=b.products,j=0;j\u003Ca.ecommerce.add.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.add.products[j][\"dimension\"+c]=a.ecommerce.add.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.add.products[j][\"metric\"+d]=a.ecommerce.add.products[j][config55.customMetProduct[d]]||\n\"\"}break;case \"removeFromCart\":if(b=config55.getDataLayerObject(\"event\",\"removeFromCart\"))for(a.ecommerce={},a.ecommerce.remove={},a.ecommerce.remove.products=b.products,j=0;j\u003Ca.ecommerce.remove.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.remove.products[j][\"dimension\"+c]=a.ecommerce.remove.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.remove.products[j][\"metric\"+d]=a.ecommerce.remove.products[j][config55.customMetProduct[d]]||\n\"\"}break;case \"eeCheckoutOption\":if(b=config55.getDataLayerObject(\"event\",\"eeCheckoutOption\"))a.ecommerce={},a.ecommerce.checkout_option={},a.ecommerce.checkout_option.actionField={},a.ecommerce.checkout_option.actionField.step=b.checkoutStep,a.ecommerce.checkout_option.actionField.option=b.checkoutOption}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nextPage"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(\"undefined\"!==typeof ",["escape",["macro",12],8,16],"\u0026\u0026\"\"!==",["escape",["macro",12],8,16],")return document.location=",["escape",["macro",12],8,16],"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"rubriquePrincipale\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"sousrubPrincipale\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"collectionName\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"pageType\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a={},e,f=config55.getDataLayerListById(\"eeAction\"),g=f.length;for(e=0;e\u003Cg;e+=1)switch(f[e].eeAction){case \"eeListView\":var b=config55.getDataLayerObject(\"eeAction\",\"eeListView\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode;a.ecommerce.impressions=a.ecommerce.impressions||b.products;for(j=0;j\u003Ca.ecommerce.impressions.length;j++){for(var c in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+\nc]=a.ecommerce.impressions[j][config55.customDimProduct[c]]||\"\";for(var d in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+d]=a.ecommerce.impressions[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeListClick\":b=config55.getDataLayerObject(\"eeAction\",\"eeListClick\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.click=a.ecommerce.click||{};a.ecommerce.click.actionField=a.ecommerce.click.actionField||{};a.ecommerce.click.actionField.list=\na.ecommerce.click.actionField.list||b.list;a.ecommerce.click.products=a.ecommerce.click.products||b.products;for(j=0;j\u003Ca.ecommerce.click.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+c]=a.ecommerce.click.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+d]=a.ecommerce.click.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeProductDetail\":b=config55.getDataLayerObject(\"eeAction\",\n\"eeProductDetail\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.detail=a.ecommerce.detail||{};a.ecommerce.detail.actionField=a.ecommerce.detail.actionField||{};a.ecommerce.detail.actionField.list=a.ecommerce.detail.actionField.list||b.list;a.ecommerce.detail.products=a.ecommerce.detail.products||b.products;for(j=0;j\u003Ca.ecommerce.detail.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.detail.products[j][\"dimension\"+c]=a.ecommerce.detail.products[j][config55.customDimProduct[c]]||\n\"\";for(d in config55.customMetProduct)a.ecommerce.detail.products[j][\"metric\"+d]=a.ecommerce.detail.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eePromoView\":b=config55.getDataLayerObject(\"eeAction\",\"eePromoView\");b.eeSend=b.eeSend||0;b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl\u0026\u0026(a.ecommerce=a.ecommerce||{},a.ecommerce.promoView=a.ecommerce.promoView||{},a.ecommerce.promoView.promotions=a.ecommerce.promoView.promotions||b.promotions,b.eeSend+=1);break;case \"eeCheckout\":b=config55.getDataLayerObject(\"eeAction\",\n\"eeCheckout\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.checkout=a.ecommerce.checkout||{};a.ecommerce.checkout.actionField=a.ecommerce.checkout.actionField||{};a.ecommerce.checkout.actionField.step=a.ecommerce.checkout.actionField.step||b.checkoutStep;a.ecommerce.checkout.actionField.option=a.ecommerce.checkout.actionField.option||b.checkoutOption;a.ecommerce.checkout.products=a.ecommerce.checkout.products||b.products;for(j=0;j\u003Ca.ecommerce.checkout.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.checkout.products[j][\"dimension\"+\nc]=a.ecommerce.checkout.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.checkout.products[j][\"metric\"+d]=a.ecommerce.checkout.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeRefund\":if(b=config55.getDataLayerObject(\"eeAction\",\"eeRefund\"),b.eeSend=b.eeSend||0,b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.refund=a.ecommerce.refund||{};a.ecommerce.refund.actionField=a.ecommerce.refund.actionField||{};a.ecommerce.refund.actionField.id=\na.ecommerce.refund.actionField.id||b.transactionId;a.ecommerce.refund.products=a.ecommerce.refund.products||b.products;for(j=0;j\u003Ca.ecommerce.refund.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.refund.products[j][\"dimension\"+c]=a.ecommerce.refund.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.refund.products[j][\"metric\"+d]=a.ecommerce.refund.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}}if(config55.getDataLayerValue(\"transactionId\")\u0026\u0026\n(config55.getDataLayerValue(\"transactionId\")!==config55.store.eeId||config55.getDataLayerValue(\"transactionId\")===config55.store.eeId\u0026\u00261\u003Cconfig55.nbPvTpl\u0026\u0026config55.nbConversion\u0026\u0026config55.nbConversion\u003Cconfig55.nbPvTpl)\u0026\u0026config55.getDataLayerValue(\"transactionTotal\")){a.ecommerce=a.ecommerce||{};a.ecommerce.purchase=a.ecommerce.purchase||{};a.ecommerce.purchase.actionField=a.ecommerce.purchase.actionField||{};a.ecommerce.purchase.actionField.id=config55.getDataLayerValue(\"transactionId\");a.ecommerce.purchase.actionField.revenue=\nconfig55.getDataLayerValue(\"transactionTotal\");a.ecommerce.purchase.actionField.affiliation=config55.getDataLayerValue(\"transactionAffiliation\");a.ecommerce.purchase.actionField.tax=config55.getDataLayerValue(\"transactionTax\");a.ecommerce.purchase.actionField.shipping=config55.getDataLayerValue(\"transactionShipping\");a.ecommerce.purchase.actionField.coupon=config55.getDataLayerValue(\"transactionCoupon\");a.ecommerce.currencyCode=config55.getDataLayerValue(\"transactionCurrency\")||config55.getDataLayerValue(\"currencyCode\");\na.ecommerce.purchase.products=config55.getDataLayerValue(\"transactionProducts\")||config55.getDataLayerValue(\"products\");for(j=0;j\u003Ca.ecommerce.purchase.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.purchase.products[j][\"dimension\"+c]=a.ecommerce.purchase.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.purchase.products[j][\"metric\"+d]=a.ecommerce.purchase.products[j][config55.customMetProduct[d]]||\"\"}config55.store.eeId=config55.getDataLayerValue(\"transactionId\");\nconfig55.saveCookie();config55.nbConversion=config55.nbConversion||0;config55.nbConversion++}return a})();"]
    },{
      "function":"__jsm",
      "convert_undefined_to":"null",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a;\"\"!=config55.getDataLayerValue(\"userId\")\u0026\u0026(a=config55.getDataLayerValue(\"userId\"));\"undefined\"==typeof a\u0026\u0026(a=config55.store.userId);\"undefined\"!=typeof a\u0026\u0026(config55.store.userId=a,config55.saveCookie());return a})();"]
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var g=window.location,e=C55.utils.URLparse(g),k=e.pathname,h=e.hash.slice(1),l=e.params,c=\"\";C55.page={historyStart:function(){void 0===config55.history.pagePath?(config55.history.pagePath={start0:+new Date},config55.history.pagePath.counter=1):(config55.history.pagePath[\"start\"+config55.history.pagePath.counter]=+new Date,config55.history.pagePath.counter+=1)},historyEnd:function(){config55.history.pagePath[\"lap\"+(config55.history.pagePath.counter-\n1)]=+new Date-config55.history.pagePath[\"start\"+(config55.history.pagePath.counter-1)]},pagePosition:function(){var a=config55.dataLayer.length;for(--a;0\u003C=a;--a)if(config55.dataLayer[a].page)return a;return-1},queryParams:function(){var a=config55.dataLayer.length,b={},d;for(--a;0\u003C=a;--a)for(d=0;d\u003Cconfig55.queryParameters.length;d+=1)config55.dataLayer[a][config55.queryParameters[d]]\u0026\u0026!b.hasOwnProperty(config55.queryParameters[d])\u0026\u0026(b[config55.queryParameters[d]]=decodeURI(config55.dataLayer[a][config55.queryParameters[d]]).replace(\/(\\s)?[-0-9a-z.+]+(@|%40)[-0-9a-z.+]+\/ig,\n\"\"));return b},getEventName:function(){return config55.dataLayer[config55.dataLayer.length-1]?config55.dataLayer[config55.dataLayer.length-1].event:\"\"},pathname:function(){return-1===C55.page.pagePosition()?k:config55.dataLayer[C55.page.pagePosition()].page},removeQueryParams:function(a){var b,d=config55.excludeParams.length,f;for(b=0;b\u003Cd;b++)a.hasOwnProperty(config55.excludeParams[b])\u0026\u0026delete a[config55.excludeParams[b]];for(f in a)\"string\"===typeof a[f]\u0026\u0026(b=a[f].match(\/@[a-zA-Z_]+?\\.\/))\u0026\u0026b.length\u0026\u0026\ndelete a[f];return a},getSearch:function(a){a=a||C55.page.pathname();var b=C55.utils.serialize(C55.page.removeQueryParams(l)),d=C55.utils.serialize(C55.page.removeQueryParams(C55.page.queryParams())),f=d.split(\"\\x26\"),c;for(c=0;c\u003Cf.length;c+=1)if(\"\"!==f[c]\u0026\u0026b.match(f[c].split(\"\\x3d\")[0])){var e=new RegExp(\"(\\\\?|\\x26|^)\"+f[c].split(\"\\x3d\")[0]+\"([^\\x26]+)(\\x26|$)\",\"gi\");b=b.replace(e,\"\")}b?(a+=\"?\"+b,d\u0026\u0026(a+=\"\\x26\"+d)):d\u0026\u0026(a+=\"?\"+d);return a},init:function(){-1==config55.virtualPageValues.indexOf(C55.page.getEventName())?\n(c=C55.page.getSearch(),config55.hash\u0026\u0026h\u0026\u0026(c=c!==C55.page.pathname()?c+(\"\\x26\"+h):c+(\"?\"+h))):(-1==C55.page.pagePosition()?(g=window.location,\"QUICK_PREVIEW\"==",["escape",["macro",20],8,16],"\u0026\u0026console.log(\"the variable page is undefined on virtualPageview\")):g=config55.dataLayer[C55.page.pagePosition()].page,e=C55.utils.URLparse(g),k=e.pathname,h=e.hash.slice(1),l=e.params,c=C55.page.getSearch(k));C55.page.historyEnd();return c=decodeURI(c).replace(\/(\\s)?[-0-9a-z.+]+(@|%40)[-0-9a-z.+]+\/ig,\"\")}};C55.page.historyStart();\nreturn C55.page.init()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var b=config55.getDataLayerValue(\"transactionId\");if(!b)try{var a=config55.getDataLayerValue(\"ecommerce\")||{};a.purchase=a.purchase||{};a.purchase.actionField=a.purchase.actionField||{};b=a.purchase.actionField.id||\"\"}catch(c){b=\"\"}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var b=config55.getDataLayerValue(\"transactionTotal\");if(!b)try{var a=config55.getDataLayerValue(\"ecommerce\")||{};a.purchase=a.purchase||{};a.purchase.actionField=a.purchase.actionField||{};b=a.purchase.actionField.revenue||\"\"}catch(c){b=\"\"}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var b=",["escape",["macro",22],8,16],",c=",["escape",["macro",23],8,16],",a=document.referrer;if(b\u0026\u0026c\u0026\u0026config55.autoExcludeRefOnTransac)try{a=void 0}catch(d){}else if(a.match(document.location.hostname))try{a=void 0}catch(d){}return a})();"]
    },{
      "function":"__c",
      "vtp_value":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){C55.uaClientID={historyStart:function(){void 0===config55.history.uaClientID?(config55.history.uaClientID={start0:+new Date},config55.history.uaClientID.counter=1):(config55.history.uaClientID[\"start\"+config55.history.uaClientID.counter]=+new Date,config55.history.uaClientID.counter+=1)},historyEnd:function(){config55.history.uaClientID[\"lap\"+(config55.history.uaClientID.counter-1)]=+new Date-config55.history.uaClientID[\"start\"+(config55.history.uaClientID.counter-1)]},init:function(){if(!config55.clientId){var c,\ne,a=document.cookie.split(\";\",-1),f=function(a){var d=1,c;if(a)for(d=0,c=a.length-1;0\u003C=c;c--){var b=a.charCodeAt(c);d=(d\u003C\u003C6\u0026268435455)+b+(b\u003C\u003C14);b=d\u0026266338304;d=0!=b?d^b\u003E\u003E21:d}return d};for(e in a)if(\"string\"===typeof a[e]){var b=a[e].replace(\" \",\"\").split(\"\\x3d\",-1);b[0]==",["escape",["macro",25],8,16],"\u0026\u0026(c=b[1].split(\".\")[2]+\".\"+b[1].split(\".\",-1)[3])}a=c||\"unknown\";if(\"unknown\"===a){a=window.navigator;a=a.appName+a.version+a.platform+a.userAgent+(document.cookie?document.cookie:\"\")+(document.referrer?document.referrer:\n\"\");b=a.length;for(c=window.history.length;0\u003Cc;)a+=c--^b++;a=[Math.round(2147483647*Math.random())^f(a)\u00262147483647,Math.round((new Date).getTime()\/1E3)].join(\".\")}window.config55.clientId=a}}};C55.uaClientID.historyStart();C55.uaClientID.init();C55.uaClientID.historyEnd();return config55.clientId})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=\"_\"+a.get(\"trackingId\")+\"_originalSendTask\",d=window[b]=window[b]||a.get(\"sendHitTask\");a.set(\"sendHitTask\",function(a){for(var c=0;c\u003Cconfig55.customTask.length;c++){var b=config55.customTask[c](a);a.set(\"hitPayload\",b.join(\"\\x26\"),!0)}d(a)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"article\"==",["escape",["macro",17],8,16],")return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"previousBlock\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"rubriqueSecondaire\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();C55.visitorFrequency={historyStart:function(){void 0===config55.history.visitorFrequency?(config55.history.visitorFrequency={start0:+new Date},config55.history.visitorFrequency.counter=1):(config55.history.visitorFrequency[\"start\"+config55.history.visitorFrequency.counter]=+new Date,config55.history.visitorFrequency.counter+=1)},historyEnd:function(){config55.history.visitorFrequency[\"lap\"+(config55.history.visitorFrequency.counter-1)]=\n+new Date-config55.history.visitorFrequency[\"start\"+(config55.history.visitorFrequency.counter-1)]},isSameDay:function(a,b){a=new Date(a);b=new Date(b);return a.toDateString()===b.toDateString()?!0:!1},daysBetween:function(a,b){var c=864E5;return Math.round(Math.abs(a-b)\/c)},setVF:function(a){config55.store.vF=config55.visitorFrequencies[a];config55.saveCookie();C55.visitorFrequency.historyEnd();return config55.store.vF},init:function(){var a=+new Date,b=+config55.store.vF0||!1,c=+config55.store.vF1||\n!1,d=+config55.store.vF2||!1;if(C55.visitorFrequency.isSameDay(a,b)||C55.visitorFrequency.isSameDay(a,c)||C55.visitorFrequency.isSameDay(a,d))return C55.visitorFrequency.historyEnd(),config55.store.vF;if(!b)return config55.store.vF0=a,C55.visitorFrequency.setVF(0);if(!c)return config55.store.vF1=a,C55.visitorFrequency.daysBetween(b,a)\u003C=config55.sporadicPeriod?C55.visitorFrequency.setVF(2):C55.visitorFrequency.setVF(1);d\u0026\u0026(config55.store.vF0=b=c,config55.store.vF1=c=d);config55.store.vF2=a;return C55.visitorFrequency.daysBetween(b,\na)\u003C=config55.frequentPeriod?C55.visitorFrequency.setVF(3):C55.visitorFrequency.daysBetween(b,a)\u003Econfig55.sporadicPeriod\u0026\u0026C55.visitorFrequency.daysBetween(c,a)\u003Econfig55.sporadicPeriod?C55.visitorFrequency.setVF(1):C55.visitorFrequency.setVF(2)}};C55.visitorFrequency.historyStart();return C55.visitorFrequency.init()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"statutConnexion\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var b,c=0,d;C55.adblock={historyStart:function(){void 0===config55.history.adblock?(config55.history.adblock={start0:+new Date},config55.history.adblock.counter=1):(config55.history.adblock[\"start\"+config55.history.adblock.counter]=+new Date,config55.history.adblock.counter+=1)},historyEnd:function(){config55.history.adblock[\"lap\"+(config55.history.adblock.counter-1)]=+new Date-config55.history.adblock[\"start\"+(config55.history.adblock.counter-\n1)]},bait:null,baitClass:\"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links\",baitStyle:\"width: 1px!important; height: 1px!important; position: absolute!important;left: -10000px!important; top: -1000px!important;\",createBait:function(){if(!C55.adblock.bait){var a=document.createElement(\"div\");a.setAttribute(\"class\",C55.adblock.baitClass);a.setAttribute(\"style\",C55.adblock.baitStyle);C55.adblock.bait=document.body.appendChild(a)}},removeBait:function(){document.body.removeChild(C55.adblock.bait);\nC55.adblock.bait=null},stopLoop:function(){b=null;c=0},checkBait:function(){var a=!1;if(!window.document.body.getAttribute(\"abp\")\u0026\u0026C55.adblock.bait.offsetParent\u0026\u0026C55.adblock.bait.offsetHeight\u0026\u0026C55.adblock.bait.offsetLeft\u0026\u0026C55.adblock.bait.offsetTop\u0026\u0026C55.adblock.bait.offsetWidth\u0026\u0026C55.adblock.bait.clientHeight\u0026\u0026C55.adblock.bait.clientWidth)if(window.getComputedStyle){var e=window.getComputedStyle(C55.adblock.bait,null);!e||\"none\"!==e.getPropertyValue(\"display\")\u0026\u0026\"hidden\"!==e.getPropertyValue(\"visibility\")||\n(a=!0)}else\"none\"==C55.adblock.bait.currentStyle.display\u0026\u0026\"hidden\"===C55.adblock.bait.currentStyle.visibility\u0026\u0026(a=!0);else a=!0;b\u0026\u0026(c++,c\u003Econfig55.adblockMaxLoop?(C55.adblock.stopLoop(),b=0):C55.adblock.stopLoop(b));a?(C55.adblock.stopLoop(),C55.adblock.removeBait(),d=\"Adblock activate\"):b||(C55.adblock.removeBait(),d=\"Adblock deactivate\")},init:function(){C55.adblock.createBait();c=0;C55.adblock.checkBait()}};C55.adblock.historyStart();C55.adblock.init();C55.adblock.historyEnd();return d})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",34],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"UA-63687219-1",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www\\.leparisien\\.fr","value","UA-63687219-1"],["map","key","abonnement\\.leparisien\\.fr","value","UA-63687219-1"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":["template","_gac_",["macro",35]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!==",["escape",["macro",36],8,16],")try{var a=",["escape",["macro",36],8,16],";a=a.split(\".\")[a.split(\".\").length-1]}catch(b){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleType\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleDatePublication\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleHeurePublication\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleSource\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleService\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleLongueur\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleEmbed\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleNom"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",45],8,16],".replace(\"#\",\"\");a=a.replace(\"%\",\"\");return a=a.replace(\"\\x26\",\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleId\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"autoPlay"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"articleEmbedType\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",14]],["map","index","2","group",["macro",15]],["map","index","3","group",["macro",16]],["map","index","4","group",["macro",17]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"*.aujourdhui.fr",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",18],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",19]],["map","fieldName","allowLinker","value","true"],["map","fieldName","page","value",["macro",21]],["map","fieldName","referrer","value",["macro",24]],["map","fieldName","clientId","value",["macro",26]],["map","fieldName","cookieName","value",["macro",25]],["map","fieldName","customTask","value",["macro",27]]],
      "vtp_trackerName":["macro",25],
      "vtp_metric":["list",["map","index","1","metric",["macro",28]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","2","dimension",["macro",30]],["map","index","3","dimension",["macro",31]],["map","index","4","dimension",["macro",32]],["map","index","5","dimension",["macro",26]],["map","index","6","dimension",["macro",33]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",37]],["map","index","9","dimension",["macro",38]],["map","index","10","dimension",["macro",39]],["map","index","11","dimension",["macro",40]],["map","index","12","dimension",["macro",41]],["map","index","13","dimension",["macro",42]],["map","index","14","dimension",["macro",43]],["map","index","15","dimension",["macro",44]],["map","index","16","dimension",["macro",46]],["map","index","17","dimension",["macro",47]],["map","index","18","dimension",["macro",48]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",50]],["map","index","21","dimension",["macro",51]],["map","index","24","dimension",["macro",52]],["map","index","25","dimension",["macro",14]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventNonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"page\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=13,c=2678400*a,d=",["escape",["macro",61],8,16],"?new Date(1E3*+",["escape",["macro",61],8,16],".split(\".\")[3]):new Date,b=d;b.setMonth(d.getMonth()+a);a=new Date;isNaN(Math.floor((b-a)\/1E3))||(c=Math.max(Math.floor((b-a)\/1E3),2));return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blocPartenaire"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"zoneCreationCompte"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"zoneAbonnementNewsletter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",66],8,16],".replace(\"\\x26\",\"\");a=a.replace(\"#\",\"\");return a=a.replace(\"%\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"networkLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"didomiVendorsConsent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.name"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-63687219-28",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"OUTBRAIN margin_top_xxl\")[0].getAttribute(\"data-widget-id\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini\/i.test(navigator.userAgent)?\"true\":\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"true\"===",["escape",["macro",77],8,16],"?\"571804\":\"40086\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"politique\"===",["escape",["macro",14],8,16],"?\"59\":\"elections\"===",["escape",["macro",14],8,16],"?\"59\":\"economie\"===",["escape",["macro",14],8,16],"?\"60\":\"societe\"===",["escape",["macro",14],8,16],"?\"61\":\"faits-divers\"===",["escape",["macro",14],8,16],"?\"62\":\"ma-ville\"===",["escape",["macro",14],8,16],"?\"6\":\"sports\"===",["escape",["macro",14],8,16],"?\"9\":\"culture-et-loisirs\"===",["escape",["macro",14],8,16],"?\"10\":\"international\"===",["escape",["macro",14],8,16],"?\"63\":\"high-tech\"===",["escape",["macro",14],8,16],"?\"64\":\"environnement\"===",["escape",["macro",14],8,16],"?\"65\":\"vivre-mieux\"===\n",["escape",["macro",14],8,16],"?\"66\":\"sciences\"===",["escape",["macro",14],8,16],"?\"67\":\"automobile\"===",["escape",["macro",14],8,16],"?\"68\":\"diaporama\"===",["escape",["macro",14],8,16],"?\"69\":\"voyage\"===",["escape",["macro",14],8,16],"?\"70\":\"le-parisien-week-end\"===",["escape",["macro",14],8,16],"?\"46\":\"la-parisienne\"===",["escape",["macro",14],8,16],"?\"44\":\"le-parisien-etudiant\"===",["escape",["macro",14],8,16],"?\"51\":\"guide-shopping\"===",["escape",["macro",14],8,16],"?\"57\":\"departements-horsidfo\"===",["escape",["macro",14],8,16],"?\"71\":\"archives\"===",["escape",["macro",14],8,16],"?\"14\":\"publicite\"===\n",["escape",["macro",14],8,16],"?\"35\":\"erreurs\"===",["escape",["macro",14],8,16],"?\"53\":\"abonnements\"===",["escape",["macro",14],8,16],"?\"72\":\"abonnement\"===",["escape",["macro",14],8,16],"?\"72\":\"Abonnement\"===",["escape",["macro",14],8,16],"?\"72\":\"videos\"===",["escape",["macro",14],8,16],"?\"31\":\"marketing\"===",["escape",["macro",14],8,16],"?\"16\":\"partenaires\"===",["escape",["macro",14],8,16],"?\"1\":\"mon-compte\"===",["escape",["macro",14],8,16],"?\"29\":\"homepage\"===",["escape",["macro",14],8,16],"?\"25\":\"podcasts\"===",["escape",["macro",14],8,16],"?\"73\":\"collections\"===",["escape",["macro",14],8,16],"?\"74\":\"bien-manger\"===\n",["escape",["macro",14],8,16],"?\"75\":\"groupe\"===",["escape",["macro",14],8,16],"?\"3\":\"services\"===",["escape",["macro",14],8,16],"?\"24\":\"meteo\"===",["escape",["macro",14],8,16],"?\"76\":\"\"})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"sousrub2Principale\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=1E3\u003Cwindow.screen.width?\"desktop\":600\u003Ewindow.screen.width?\"smartphone\":\"tablet\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"Adblock deactivate\"===",["escape",["macro",33],8,16],"?\"2\":\"1\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;\"home\"===",["escape",["macro",17],8,16],"?a=\"1\":\"article\"===",["escape",["macro",17],8,16],"?a=\"2\":\"diaporama\"===",["escape",["macro",17],8,16],"?a=\"7\":\"404\"===",["escape",["macro",17],8,16],"?a=\"15\":\"500\"===",["escape",["macro",17],8,16],"?a=\"15\":\"503\"===",["escape",["macro",17],8,16],"?a=\"15\":\"Pages Groupes\"===",["escape",["macro",17],8,16],"\u0026\u0026(a=\"9\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(document.querySelector('script[type\\x3d\"application\/ld+json\"]').innerText);return a=0===a[1].keywords.length?\"\":a[1].keywords})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"data-to-content\"===",["escape",["macro",30],8,16],"?\"1\":\"0\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"subscribed\"===",["escape",["macro",32],8,16],"?\"2\":\"logged\"===",["escape",["macro",32],8,16],"?\"1\":null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"unknown\"!=",["escape",["macro",32],8,16],"?\"yes\":\"no\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"subscribed\"===",["escape",["macro",32],8,16],"?\"yes\":\"no\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"true\"===",["escape",["macro",77],8,16],"?\"m.leparisien.fr\":\"www.leparisien.fr\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.creative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"calltoaction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chapitre2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"LinkURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=",["escape",["macro",97],8,16],".split(\"\\x26\").join(\"\/\/\")})();"]
    },{
      "function":"__c",
      "vtp_value":"LeParisien"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",10],8,16],"();var a=\"\";return config55.getDataLayerValueForSpa(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"didomiGDPRApplies"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"didomiIABConsent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.position"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"Club Le Parisien\"===",["escape",["macro",109],8,16],"?\"club-le-parisien\":\"Mes informations\"===",["escape",["macro",109],8,16],"?\"mon-compte\":\"Mes newsletters\"===",["escape",["macro",109],8,16],"?\"mes-newsletters\":\"erreur\"})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",112],7],"\",b=\/\\\/(\\d*)\\\/$\/,c=\"\";a.match(b)\u0026\u0026(c=a.match(b)[1]);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"Retrouvez l\\x26#x27;int\\u00e9gralit\\u00e9 de nos articles ",["escape",["macro",111],7]," - Page ",["escape",["macro",113],7]," - Le Parisien\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"registrationSuccess"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.price"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",13]]],
      "vtp_eventCategory":"Internal Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"Promotion Click",
      "vtp_eventLabel":["macro",54],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Internal Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"Promotion Impression",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",55],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventValue":["macro",56],
      "vtp_eventCategory":["macro",57],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":["macro",58],
      "vtp_eventLabel":["macro",59],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",18],
      "vtp_fieldsToSet":["list",["map","fieldName","nonInteraction","value","false"],["map","fieldName","page","value",["macro",60]],["map","fieldName","cookieExpires","value",["macro",62]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","1","metric",["macro",28]]],
      "vtp_gaSettings":["macro",53],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Blocs Partenaires - Clics",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":["macro",63],
      "vtp_eventLabel":["macro",17],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Créations de compte",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":["macro",64],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Guide Shopping",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"clic CTA",
      "vtp_eventLabel":["macro",60],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Abonnements à la newsletter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Menus",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"Clic burger menu",
      "vtp_eventLabel":["macro",67],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Menus",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"Clic header menu",
      "vtp_eventLabel":["macro",67],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Partages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":["macro",68],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Favoris",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"Favori article",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_eventCategory":"Commentaires",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":"Clic commentaire",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",53],
      "vtp_eventAction":["macro",58],
      "vtp_eventLabel":["macro",59],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"invmedia",
      "vtp_useImageTag":false,
      "vtp_activityTag":"lepar0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9487904",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",70],
      "vtp_url":["macro",71],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":55
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"invmedia",
      "vtp_useImageTag":false,
      "vtp_activityTag":"lepar0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9487904",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",70],
      "vtp_url":["macro",71],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":56
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"992647239",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",71],
      "vtp_enableRdpCheckbox":true,
      "tag_id":62
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"992647239",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",71],
      "vtp_enableRdpCheckbox":true,
      "tag_id":63
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",22],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"992647239",
      "vtp_conversionLabel":"8jL-CMqfr3sQx7Cq2QM",
      "vtp_url":["macro",71],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":64
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":66
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":67
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["macro",74]]],
      "vtp_revenue":["macro",23],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",22],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sales",
      "vtp_useImageTag":false,
      "vtp_activityTag":"abonn0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9487904",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",71],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":72
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":89
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Affichage-Widget",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Affichage-Bas-darticle",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"VerifTag",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":160
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"9967085_26",
      "vtp_enableTriggerStartOption":true,
      "tag_id":180
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_51_61","9967085_51_45"],
      "vtp_uniqueTriggerId":"9967085_51",
      "tag_id":181
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_51_61",
      "tag_id":182
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_51_45",
      "tag_id":184
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_52_61","9967085_52_62"],
      "vtp_uniqueTriggerId":"9967085_52",
      "tag_id":185
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_52_61",
      "tag_id":186
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_52_62",
      "tag_id":188
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_66_65","9967085_66_61"],
      "vtp_uniqueTriggerId":"9967085_66",
      "tag_id":189
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_66_65",
      "tag_id":190
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_66_61",
      "tag_id":192
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_71_67","9967085_71_25"],
      "vtp_uniqueTriggerId":"9967085_71",
      "tag_id":193
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_71_67",
      "tag_id":194
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_71_25",
      "tag_id":196
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_76_75","9967085_76_71"],
      "vtp_uniqueTriggerId":"9967085_76",
      "tag_id":197
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_76_75",
      "tag_id":198
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_76_71",
      "tag_id":200
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_88_85"],
      "vtp_uniqueTriggerId":"9967085_88",
      "tag_id":201
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_88_85",
      "tag_id":202
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_99_59","9967085_99_25"],
      "vtp_uniqueTriggerId":"9967085_99",
      "tag_id":203
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_99_59",
      "tag_id":204
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_99_25",
      "tag_id":206
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_102_25","9967085_102_101"],
      "vtp_uniqueTriggerId":"9967085_102",
      "tag_id":207
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_102_25",
      "tag_id":208
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_102_101",
      "tag_id":210
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_122_117","9967085_122_121"],
      "vtp_uniqueTriggerId":"9967085_122",
      "tag_id":211
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_122_117",
      "tag_id":212
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_122_121",
      "tag_id":214
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","9967085_149_148","9967085_149_62"],
      "vtp_uniqueTriggerId":"9967085_149",
      "tag_id":215
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_149_148",
      "tag_id":216
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"9967085_149_62",
      "tag_id":218
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.ob-widget-header",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"20",
      "vtp_uniqueTriggerId":"9967085_156",
      "tag_id":219
    },{
      "function":"__evl",
      "vtp_elementId":"0fOTR3AbQre",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"20",
      "vtp_uniqueTriggerId":"9967085_158",
      "tag_id":220
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"div.grid.section-chain",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"20",
      "vtp_uniqueTriggerId":"9967085_159",
      "tag_id":221
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/s1.lprs1.fr\/assets\/js\/lib\/squid\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.page.set({name:\"",["escape",["macro",60],7],"\",level2:\"",["escape",["macro",79],7],"\",chapter1:\"",["escape",["macro",15],7],"\",chapter2:\"",["escape",["macro",80],7],"\",customObject:{device:\"",["escape",["macro",81],7],"\"}});\ntag.customVars.set({site:{1:\"",["escape",["macro",82],7],"\",3:\"",["escape",["macro",79],7],"\",4:\"",["escape",["macro",83],7],"\",5:\"",["escape",["macro",47],7],"\",6:\"",["escape",["macro",46],7],"\",7:\"",["escape",["macro",41],7],"\",8:\"",["escape",["macro",72],7],"\",10:\"",["escape",["macro",39],7],"\",11:\"",["escape",["macro",40],7],"\",12:\"",["escape",["macro",29],7],"\",13:\"",["escape",["macro",81],7],"\",14:\"",["escape",["macro",38],7],"\",15:\"",["escape",["macro",43],7],"\",16:\"",["escape",["macro",44],7],"\",17:\"",["escape",["macro",51],7],"\",21:\"[",["escape",["macro",84],7],"]\",22:\"",["escape",["macro",85],7],"\"}});\ntag.identifiedVisitor.set({id:\"",["escape",["macro",19],7],"\",category:\"",["escape",["macro",86],7],"\"});tag.weborama.set();tag.dispatch();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1543934049212413\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1543934049212413\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"ViewContent\",{is_registered:\"",["escape",["macro",87],7],"\",is_subscriber:\"",["escape",["macro",88],7],"\",content_id:\"",["escape",["macro",47],7],"\",content_category:\"",["escape",["macro",14],7],"\",content_title:\"",["escape",["macro",46],7],"\",content_type:\"",["escape",["macro",38],7],"\",media_platform:\"website\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar wamid=\"2861\",typ=\"1\",Wvar={userid:\"",["escape",["macro",19],7],"\",userstatut:\"",["escape",["macro",32],7],"\",d:\"",["escape",["macro",89],7],"\",rub:\"",["escape",["macro",14],7],":",["escape",["macro",15],7],":",["escape",["macro",80],7],"\",xiti_pageid:\"",["escape",["macro",79],7],"\",nat:\"",["escape",["macro",17],7],"\",cat:\"",["escape",["macro",84],7],"\"};\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/cstatic.weborama.fr\/js\/wam\/customers\/wamfactory_dpm.leparisien.min.js?rnd\\x3d\"+(new Date).getTime();a.async=!0;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1543934049212413\");\nfbq(\"track\",\"ViewPaywall\",{is_registered:\"",["escape",["macro",87],7],"\",is_subscriber:\"",["escape",["macro",88],7],"\",statut:\"",["escape",["macro",90],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar callback=function(){grvt_wrapper.checkMicsAndGravityConsents(function(e){if(!0===e){console.log(\"GRAVITY\");!function(b,c,d){function e(b){var c=a[d]||{};a[d]=c;c[b]||(c[b]=function(){a._queue[d].push({method:b,args:Array.prototype.slice.apply(arguments)})})}var a=b.scimhtiraidem||{},g=\"init call config push pushDefault addProperties addProperty onFinish onStart _reset\".split(\" \");a._queue=a._queue||{};a._names=a._names||[];a._names.push(d);a._queue[d]=a._queue[d]||[];a._startTime=(new Date).getTime();\na._snippetVersion=\"2.0\";for(var f=0;f\u003Cg.length;f++)e(g[f]);b.scimhtiraidem=a;b[d]=a[d];b=c.createElement(\"script\");b.setAttribute(\"type\",\"text\/javascript\");b.setAttribute(\"src\",\"\/\/static.mediarithmics.com\/tag\/1\/tag.min.js\");b.setAttribute(\"async\",\"true\");c.getElementsByTagName(\"script\")[0].parentNode.appendChild(b)}(window,document,\"gravity\");gravity.init({mode:\"VISIT\",site_token:\"leparis17\"});var c={adblock:\"",["escape",["macro",33],7],"\",content_type:\"",["escape",["macro",17],7],"\",article_title:\"",["escape",["macro",46],7],"\",\nlevel2:\"",["escape",["macro",79],7],"\",chapter1:\"",["escape",["macro",15],7],"\",chapter2:\"",["escape",["macro",80],7],"\",user_logged:\"",["escape",["macro",87],7],"\",user_suscribed:\"",["escape",["macro",88],7],"\"};\"0\"!==",["escape",["macro",91],8,16],"\u0026\u0026null!==",["escape",["macro",91],8,16],"\u0026\u0026void 0!==",["escape",["macro",91],8,16],"\u0026\u0026(c.useridhash=\"",["escape",["macro",91],7],"\")}gravity.push(\"$page_view\",c)})},script=document.createElement(\"script\");script.src=\"https:\/\/cdn-alliancegravity.s3.amazonaws.com\/js\/tag\/tag.js\";script.onload=callback;document.head.appendChild(script);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"000fbc40878a417aa06cb0d3743053817d\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"000fbc40878a417aa06cb0d3743053817d\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etag.click.send({name:\"",["escape",["macro",67],7],"\",chapter1:\"",["escape",["macro",92],7],"\",level2:\"54\",type:\"navigation\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=17560331\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=17560337\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=1097295\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.publisher.set({impression:{campaignId:\"[",["escape",["macro",54],7],"]\",creation:\"[",["escape",["macro",93],7],"]\",variant:\"[",["escape",["macro",38],7],"]\",format:\"\",generalPlacement:\"[",["escape",["macro",14],7],"]\",detailedPlacement:\"[",["escape",["macro",47],7],"]\",advertiserId:\"[",["escape",["macro",90],7],"]\",url:\"[",["escape",["macro",72],7],"]\"}});tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tip=tip||[];tip.push(\"_setSale 7039 1346114 6663308da2d315fb7a295693964afb46 ",["escape",["macro",22],7]," ",["escape",["macro",23],7]," ",["escape",["macro",74],7],"\".split(\" \"));\n(function(a){function b(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https\":\"http\")+\":\/\/tracking.publicidees.com\/p\/tip\/\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}\"complete\"==document.readyState?b():a.addEventListener?a.addEventListener(\"load\",b,!1):a.attachEvent\u0026\u0026a.attachEvent(\"onload\",b)})(window);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etag.click.send({name:\"",["escape",["macro",47],7],"\",chapter1:\"partage_articles\",chapter2:\"",["escape",["macro",68],7],"\",level2:\"54\",type:\"navigation\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.publisher.set({click:{campaignId:\"[",["escape",["macro",54],7],"]\",creation:\"[",["escape",["macro",93],7],"]\",variant:\"[",["escape",["macro",38],7],"]\",format:\"[",["escape",["macro",94],7],"]\",generalPlacement:\"[",["escape",["macro",14],7],"]\",detailedPlacement:\"[",["escape",["macro",47],7],"]\",advertiserId:\"[",["escape",["macro",90],7],"]\",url:\"[",["escape",["macro",72],7],"]\"}});tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar __dot=[{orderAmount:\"",["escape",["macro",23],7],"\",orderID:\"",["escape",["macro",22],7],"\"}];\u003C\/script\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d,e){a=b.createElement(\"script\");var c=b.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=(\"http:\"==b.location.protocol?\"http\":\"https\")+\":\/\/u.logbor.com\/p\/?i\\x3d\"+e+\"\\x26n\\x3d\"+d;c.parentNode.insertBefore(a,c)})(window,document,\"__dot\",\"3173\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar __dot=[{orderAmount:\"",["escape",["macro",23],7],"\",orderID:\"",["escape",["macro",22],7],"\"}];\u003C\/script\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d,e){a=b.createElement(\"script\");var c=b.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=(\"http:\"==b.location.protocol?\"http\":\"https\")+\":\/\/u.logbor.com\/p\/?i\\x3d\"+e+\"\\x26n\\x3d\"+d;c.parentNode.insertBefore(a,c)})(window,document,\"__dot\",\"3173\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.page.set({name:\"",["escape",["macro",65],7],"\",level2:\"29\",chapter1:\"inscriptionNL\",customObject:{device:\"",["escape",["macro",81],7],"\"}});tag.customVars.set({site:{1:\"",["escape",["macro",82],7],"\",3:\"29\",4:\"9\",5:\"",["escape",["macro",47],7],"\",6:\"",["escape",["macro",46],7],"\",8:\"",["escape",["macro",72],7],"\",13:\"",["escape",["macro",81],7],"\"}});tag.identifiedVisitor.set({id:\"",["escape",["macro",19],7],"\",category:\"",["escape",["macro",86],7],"\"});tag.weborama.set();tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=17560331\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/tag.audience.acpm.fr\/js\/on-1.1.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b);a.addEventListener?a.addEventListener(\"load\",function(){aSloaded()},!1):a.onreadystatechange=function(){a.readyState in{complete:1,loaded:1}\u0026\u0026aSloaded()};aSloaded=function(){var a=new Acpm.Tag(252052216658);a.send()}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1543934049212413\");fbq(\"track\",\"InitiateCheckout\",{offer_code:\"",["escape",["macro",60],7],"\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1543934049212413\");fbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",23],7],"\",currency:\"",["escape",["macro",95],7],"\",subscription_type:\"",["escape",["macro",22],7],"\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar wamid=\"2861\",typ=\"1\",Wvar={userid:\"",["escape",["macro",19],7],"\",userstatut:\"",["escape",["macro",32],7],"\",d:\"",["escape",["macro",89],7],"\",rub:\"",["escape",["macro",14],7],":",["escape",["macro",15],7],":",["escape",["macro",80],7],"\",xiti_pageid:\"",["escape",["macro",79],7],"\",nat:\"",["escape",["macro",17],7],"\",cat:[\"\"]};\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/cstatic.weborama.fr\/js\/wam\/customers\/wamfactory_dpm.leparisien.min.js?rnd\\x3d\"+(new Date).getTime();a.async=!0;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3cimg src\\x3d\"https:\/\/pubads.g.doubleclick.net\/activity;xsp\\x3d4365428;qty\\x3d1;cost\\x3d[",["escape",["macro",23],7],"];ord\\x3d[",["escape",["macro",22],7],"]?\" width\\x3d1 height\\x3d1 border\\x3d0\\x3e');\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":69
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cstatic.weborama.fr\/js\/advertiserv2\/adperf_conversion.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar adperftrackobj={fullhost:\"leparisiencampagne.solution.weborama.fr\",site:2985,conversion_page:2};try{adperfTracker.track(adperftrackobj)}catch(a){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1543934049212413\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.publisher.set({click:{campaignId:\"[",["escape",["macro",54],7],"]\",creation:\"[",["escape",["macro",90],7],"]\",variant:\"[",["escape",["macro",38],7],"]\",format:\"\",generalPlacement:\"[",["escape",["macro",14],7],"]\",detailedPlacement:\"[",["escape",["macro",47],7],"]\",advertiserId:\"[abonnement]\",url:\"[",["escape",["macro",72],7],"]\"}});tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/boot.pubstack.io\/v1\/tag\/383c26df-9a42-4a67-9064-8e1b9bb788b8\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.wamf.Wvar={};window.wamf.eventSend(\"2\",\"VariablePW\",\"",["escape",["macro",93],7],"\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{value:\"inscriptionNL\",currency:\"",["escape",["macro",65],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EobApi(\"track\",\"inscriptionNL1jPC\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(b){var c=\"https:\/\/script.ownpage.fr\/v1\/\",a=document.createElement(\"script\"),d=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.defer=1;a.async=1;a.src=c+\"ownpage.js\";a.onload=b;a.readyState?a.onreadystatechange=function(){(\"loaded\"==a.readyState||\"complete\"==a.readyState)\u0026\u0026(a.onreadystatechange=null,b\u0026\u0026\"function\"==typeof b\u0026\u0026b())}:a.onload=function(){b\u0026\u0026\"function\"==typeof b\u0026\u0026b()};d.parentNode.insertBefore(a,d)}c(function(){var b=\"\";Ownpage.trackPage(\"8f1627ad24cb4fbea057710c2501a96c\",\nb)})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etag.click.send({name:\"",["escape",["macro",67],7],"\",chapter1:\"",["escape",["macro",92],7],"\",chapter2:\"",["escape",["macro",96],7],"\",level2:\"54\",type:\"navigation\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.publisher.set({click:{campaignId:\"[LiensSortants]\",detailedPlacement:\"[",["escape",["macro",47],7],"]\",advertiserId:\"[GuideShopping]\",url:\"[",["escape",["macro",98],7],"]\"}});tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EobApi(\"track\",\"ConfirmationABOhorsHS\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.selfPromotion.set({click:{campaignId:\"[bandeau-twipe]\",creation:\"[numerique]\",variant:\"[]\",format:\"[]\",generalPlacement:\"[site]\",detailedPlacement:\"[]\",advertiserId:\"[abonnement]\",url:\"[",["escape",["macro",72],7],"]\"}});tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/assets.leparisien.fr\/website\/scripts\/smarttag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=new ATInternet.Tracker.Tag({site:\"",["escape",["macro",78],7],"\"});tag.selfPromotion.set({click:{campaignId:\"[bandeau-twipe]\",creation:\"[24h]\",variant:\"[]\",format:\"[]\",generalPlacement:\"[site]\",detailedPlacement:\"[]\",advertiserId:\"[abonnement]\",url:\"[",["escape",["macro",72],7],"]\"}});tag.dispatch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eePromoClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eePromoView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtualPageview"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicBlocPartenaire"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountCreation"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicGuideShopping"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"newsletterSubscription"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicBurgerMenu"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicHeaderMenu"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicShare"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicFavorite"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicComment"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"videoEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_102($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"abonnement"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"abonnement"
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"\/confirmation\/"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"didomi:google"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"didomi-consent"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"article"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_156($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_158($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_159($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"didomi:facebook"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"paywall"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"Abonnement"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"iab:164"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_71($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"http:\\\/\\\/beta\\.leparisien\\.fr\\\/[a-z-]{1,1000}[a-z-0-9-\/]{0,1000}\\\/[0-9]{1,1000}\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"iab:284"
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"preprod-abonnement-novius"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"c:ownpage"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_51($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_52($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_99($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_66($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"iab:501"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_76($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"iab:201"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"iab:548"
    },{
      "function":"_ew",
      "arg0":["macro",72],
      "arg1":"\/one-page-checkout"
    },{
      "function":"_cn",
      "arg0":["macro",90],
      "arg1":"Bouton_Abonnez-vous"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"c:pubstack"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)9967085_149($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clicEvent"
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"INT-31-banniere_twipe-site-numerique"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"INT-31-banniere_twipe-site-24h"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1],["add",1,87]],
    [["if",2],["add",2]],
    [["if",3],["add",3,37,45,47,58,78]],
    [["if",4],["add",4]],
    [["if",5],["add",5]],
    [["if",6],["add",6,92]],
    [["if",7],["add",7,76,88,89]],
    [["if",8],["add",8,66]],
    [["if",9],["add",9,66]],
    [["if",10],["add",10,72]],
    [["if",11],["add",11]],
    [["if",12],["add",12]],
    [["if",13],["add",13]],
    [["if",14,15],["add",14,17]],
    [["if",3,16],["add",15,16,19,64,67,74,81,84]],
    [["if",3,17,18],["add",18,21,71,80,93]],
    [["if",19,20],["add",20,48]],
    [["if",3,21],["add",22,31,54]],
    [["if",22,23],["add",23]],
    [["if",22,24],["add",24]],
    [["if",22,25],["add",24]],
    [["if",26],["add",25,26,29,32,35,38,41,43,46,49,52,55,56,57]],
    [["if",20,27],["add",27,30,34]],
    [["if",3],["unless",21],["add",28]],
    [["if",1,28],["add",33,70]],
    [["if",3],["unless",29],["add",36]],
    [["if",20,30],["add",39]],
    [["if",14,31],["add",40]],
    [["if",26,32],["add",42]],
    [["if",20,33],["add",44]],
    [["if",3,16,18],["add",50,68,69,82,83]],
    [["if",3,34],["add",51]],
    [["if",20,35],["add",53]],
    [["if",14,36],["add",59]],
    [["if",14,37],["add",60]],
    [["if",14,38],["add",61]],
    [["if",14,39],["add",62]],
    [["if",20,40],["add",63]],
    [["if",14,41],["add",65]],
    [["if",0,28],["add",73]],
    [["if",20,42],["add",75]],
    [["if",20,43],["add",77]],
    [["if",3,44],["add",79]],
    [["if",0,45],["add",85]],
    [["if",20,46],["add",86]],
    [["if",14,47],["add",90]],
    [["if",48],["add",91]],
    [["if",49,50],["add",94]],
    [["if",50,51],["add",95]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={yf:!0},ia={};try{ia.__proto__=ha;fa=ia.yf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,na=null;var oa=function(){},pa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},qa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},q=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!qa(a)||
!qa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ea=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ja=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ka=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},La=function(a){var b=
[];C(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},D=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","http://www.leparisien.fr/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","http://www.leparisien.fr/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Za=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,Za)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,Za)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Pc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Xf(d,k))}catch(y){b.ye&&b.ye(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Bb(a[n],b,c);xb&&(m=m||r===xb.yb);d.push(r)}return xb&&m?xb.$f(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ra(a[1])&&"macro"===a[1][0]&&xb.zg(a))return xb.Tg(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={me:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Eb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{ud:a("convert_case_to"),vd:a("convert_false_to"),wd:a("convert_null_to"),xd:a("convert_true_to"),yd:a("convert_undefined_to"),Bh:a("debug_mode_metadata"),sa:a("function"),Xe:a("instance_name"),af:a("live_only"),cf:a("malware_disabled"),df:a("metadata"),Ch:a("original_vendor_template_id"),jf:a("once_per_event"),Hd:a("once_per_load"),Pd:a("setup_tags"),Rd:a("tag_id"),Sd:a("teardown_tags")}}();var Gb=null,Kb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Jb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var cc,dc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Lf&&(l["fix_"+m]=!0),l.ne=l.ne||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,N:p.N,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,B){var A=y||x||B||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=A;t[w]=z.textContent||z.innerText||A});return{tagName:p[1],N:t,rb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=r[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.ne&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.we=function(){return this[this.length-1]};v.Rc=function(z){var E=this.we();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.Wf=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.rb=p.test(z.tagName)||z.rb);return z},y=u,x=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.Rc("TABLE")?(k="<TBODY>"+k,A()):l.Lh&&t.test(E)&&v.Wf(E)?v.Rc(E)?x():(k="</"+z.tagName+">"+k,A()):z.rb||v.push(z)},endTag:function(z){v.we()?l.ig&&!v.Rc(z.tagName)?x():v.pop():l.ig&&(y(),A())}},A=function(){var z=k,E=w(y());k=z;if(E&&
B[E.type])B[E.type](E)};u=function(){A();return w(y())}}();return{append:function(p){k+=p},ah:u,Sh:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Th:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Xh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Wh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.O=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.N){var u=m.N[r];n+=
" "+r+'="'+(u?u.replace(/(^|[^\\])"http://www.leparisien.fr/g,'$1\\"'):"")+'"'}return n+(m.rb?"http://www.leparisien.fr/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.F=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"http://www.leparisien.fr/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;cc=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,u,p){var t,v=r&&r.length||0;for(t=0;t<v;t++)u.call(p,r[t],t)}function d(r,u,p){for(var t in r)r.hasOwnProperty(t)&&u.call(p,t,r[t])}function e(r,
u){d(u,function(p,t){r[p]=t});return r}function f(r,u){r=r||{};d(u,function(p,t){b(r[p])||(r[p]=t)});return r}function h(r){try{return m.call(r)}catch(p){var u=[];c(r,function(t){u.push(t)});return u}}var k={Cf:a,Df:a,Ef:a,Ff:a,Mf:a,Nf:function(r){return r},done:a,error:function(r){throw r;},eh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,sb:v.defaultView||v.parentWindow,Ja:v,Yb:cc("",{Lf:!0}),Dc:[p],ad:"",bd:v.createElement(p.nodeName),ob:[],za:[]});r(this.bd,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.za,arguments);for(var p;!this.Lb&&this.za.length;)p=this.za.shift(),"function"===typeof p?this.Sf(p):this.nd(p)};u.prototype.Sf=function(p){var t={type:"function",value:p.name||p.toString()};this.Xc(t);p.call(this.sb,this.Ja);this.Ce(t)};
u.prototype.nd=function(p){this.Yb.append(p);for(var t,v=[],w,y;(t=this.Yb.ah())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.wh(v);w&&this.qg(t);y&&this.rg(t)};u.prototype.wh=function(p){var t=this.Pf(p);t.ce&&(t.Nc=this.ad+t.ce,this.ad+=t.Xg,this.bd.innerHTML=t.Nc,this.th())};u.prototype.Pf=function(p){var t=this.Dc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.N){if(!/^noscript$/i.test(x.tagName)){var B=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==x.N.id&&"ps-style"!==x.N.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+B+(x.rb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Yh:p,raw:v.join(""),ce:w.join(""),Xg:y.join("")}};u.prototype.th=function(){for(var p,t=[this.bd];b(p=t.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Dc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Dc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.qg=function(p){var t=this.Yb.clear();t&&this.za.unshift(t);p.src=p.N.src||p.N.Dh;p.src&&this.ob.length?this.Lb=p:this.Xc(p);var v=this;this.vh(p,function(){v.Ce(p)})};u.prototype.rg=function(p){var t=this.Yb.clear();t&&this.za.unshift(t);p.type=p.N.type||p.N.Eh||"text/css";this.xh(p);t&&this.write()};u.prototype.xh=function(p){var t=this.Rf(p);this.wg(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Ja.createTextNode(p.content)))};u.prototype.Rf=function(p){var t=this.Ja.createElement(p.tagName);t.setAttribute("type",p.type);d(p.N,function(v,w){t.setAttribute(v,w)});return t};u.prototype.wg=function(p){this.nd('<span id="ps-style"http://www.leparisien.fr/>');var t=this.Ja.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Xc=function(p){p.Og=this.za;this.za=[];this.ob.unshift(p)};u.prototype.Ce=function(p){p!==this.ob[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.ob.shift(),this.write.apply(this,p.Og),!this.ob.length&&this.Lb&&(this.Xc(this.Lb),this.Lb=null))};u.prototype.vh=function(p,t){var v=this.Qf(p),w=this.kh(v),y=this.options.Cf;p.src&&(v.src=p.src,this.ih(v,w?y:function(){t();y()}));try{this.vg(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Qf=function(p){var t=this.Ja.createElement(p.tagName);d(p.N,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.vg=function(p){this.nd('<span id="ps-script"http://www.leparisien.fr/>');
var t=this.Ja.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.ih=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.kh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.eh&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function r(){var w=t.shift(),y;w&&(y=w[w.length-1],y.Df(),w.stream=u.apply(null,w),y.Ef())}function u(w,y,x){function B(H){H=x.Nf(H);v.write(H);x.Ff(H)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var A=w.ownerDocument,z={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return B(h(arguments).join(""))},writeln:function(){return B(h(arguments).join("")+"\n")}});var E=v.sb.onerror||a;v.sb.onerror=function(H,K,R){x.error({Ph:H+
" - "+K+":"+R});E.apply(v.sb,arguments)};v.write(y,function(){e(A,z);v.sb.onerror=E;x.done();v=null;r()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Nh?w[0]:w;var B=[w,y,x];w.Sg={cancel:function(){B.stream?B.stream.abort():B[1]=a}};x.Mf(B);t.push(B);v||r();return w.Sg},{streams:{},Rh:t,Hh:n})}();dc=l.postscribe}})();var F=window,G=document,ec=navigator,fc=G.currentScript&&G.currentScript.src,gc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},hc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ic=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hc(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},jc=function(){if(fc){var a=fc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);hc(c,b);void 0!==a&&(c.src=a);return c},lc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},oc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},sc=function(a){ec.sendBeacon&&ec.sendBeacon(a)||lc(a)},tc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?G.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(G.querySelectorAll)try{var zc=G.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==G.documentElement&&(yc=!0)}catch(a){}var vc=yc;var J={ra:"_ee",Fh:"_uci",uc:"event_callback",xb:"event_timeout",C:"gtag.config",X:"allow_ad_personalization_signals",vc:"restricted_data_processing",Sa:"allow_google_signals",Y:"cookie_expires",wb:"cookie_update",Ta:"session_duration",ca:"user_properties"};J.qe=[J.X,J.Sa,J.wb];J.te=[J.Y,J.xb,J.Ta];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ca(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("http://www.leparisien.fr/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];C(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.s="GTM-5QNLTGR";Vc.Cb="3p1";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var $c=Zc,ad=null,bd=null,cd=null,ed="http://www.leparisien.fr//www.googletagmanager.com/a?id="+Vc.s+"&cv=78",fd={},gd={},hd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var id={},jd=function(a,b){id[a]=id[a]||[];id[a][b]=!0},kd=function(a){for(var b=[],c=id[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+sb.filter(function(a){return a}).length},od=function(){md||(md=F.setTimeout(nd,500))},nd=function(){md&&(F.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.Bg()||0>=vd--?(jd("GTM",1),td[pd]=!0):(ud.bh(),lc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[ed,"&v=3&t=t",
"&pid="+wa(),"&rv="+Vc.Cb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{Bg:function(){if(c<a)return!1;Ea()-d>=b&&(c=0);return c>=a},bh:function(){Ea()-d>=b&&(c=0);c++;d=Ea()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&
!td[a]&&b){a!==pd&&(nd(),pd=a);var d,e=String(b[Fb.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=
sd?sd+"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new xa,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){D(Ka(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new xa;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&jd("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),D(Ka(a,b),Jd),Ld())},Ld=function(a){C(Kd,function(b,c){Id.set(b,c);D(Ka(b,void 0),Jd);D(Ka(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Na(d)||"object"===Na(d)?Hd[a][b]=D(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Xd()||d||"http:"!=F.location.protocol?a:b)+c},Xd=function(){var a=jc(),b;if(1===a)a:{var c=$c;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&jd("GTM",9);var c=b&&Ja(Ba(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&jd("GTM",3);
d?jd("GTM",8):d=[];pe()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=q(Ba(d),"google")&&jd("GTM",2);var e=d&&Ja(Ba(d),ne),f={};return function(h){var k=h&&h[Fb.sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=gd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>q(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>q(c,l[r])){jd("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=q(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&jd("GTM",10);u=t}}var v=!m||u;v||!(0<=q(l,"sandboxedScripts"))||c&&-1!==q(c,"sandboxedScripts")||(v=ya(e,oe));return f[k]=v}},pe=function(){return le.test(F.location&&F.location.hostname)};var re={Xf:function(a,b){b[Fb.ud]&&"string"===typeof a&&(a=1==b[Fb.ud]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.wd)&&null===a&&(a=b[Fb.wd]);b.hasOwnProperty(Fb.yd)&&void 0===a&&(a=b[Fb.yd]);b.hasOwnProperty(Fb.xd)&&!0===a&&(a=b[Fb.xd]);b.hasOwnProperty(Fb.vd)&&!1===a&&(a=b[Fb.vd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)I(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{G.documentElement.doScroll("left"),ye()}catch(a){F.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Yc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Vc.s,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};pa(b)&&Ge(a,b);c&&F.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ga(function(){return I(function(){b(Vc.s,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&Fe(a)})},Jf:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!qa(d)||0>d?0:d}if(!Wc._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=qa(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(bd-b)}}};var Ne={},Oe=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||jd("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Je();return F[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return F.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||jd("TAGGING",1);h="http://www.leparisien.fr/"==a.pathname.substr(0,1)?a.pathname:
"http://www.leparisien.fr/"+a.pathname;var m=h.split("http://www.leparisien.fr/");0<=q(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("http://www.leparisien.fr/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("http://www.leparisien.fr/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"http://www.leparisien.fr/"!==c[0]&&(a||jd("TAGGING",1),c="http://www.leparisien.fr/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=sb[a],f=gf(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Pd],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{B:f,w:1===k.me?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Fb.cf])k();else{var w=Cb(f,c,[]),y=De(c.id,String(f[Fb.sa]),Number(f[Fb.Rd]),w[Fb.df]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ea()-A;Fd(c.id,sb[a],"5");Ee(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ea()-A;Fd(c.id,sb[a],"6");Ee(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var B=function(){var z=Ea()-A;Fd(c.id,f,"7");Ee(c.id,y,"exception",z);x||(x=!0,k())};var A=Ea();try{Ab(w,c)}catch(z){B(z)}}}var f=sb[a],h=b.B,k=b.w,l=b.terminate;if(c.Pc(f))return null;var m=Bb(f[Fb.Sd],c,[]);if(m&&m.length){var n=m[0],r=ff(n.index,{B:h,w:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.me?l:r}if(f[Fb.Hd]||f[Fb.jf]){var u=f[Fb.Hd]?tb:c.lh,p=h,t=k;if(!u[a]){e=Ga(e);var v=hf(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{B:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.mb[d]){var e=sb[d];var f=b.add();try{var h=ff(d,{B:f,w:f,terminate:f},a,d);h?c.push({Le:d,Ge:Db(e),hg:h}):(mf(d,a),f())}catch(l){f()}}b.Jf();c.sort(nf);for(var k=0;k<c.length;k++)c[k].hg();return 0<c.length};function nf(a,b){var c,d=b.Ge,e=a.Ge;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Le,k=b.Le;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Pc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Pd],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Pc:qe(c),mb:[],lh:[],ye:function(){jd("GTM",6)}};h.mb=Kb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Vc.s);if(!k)return k;for(var l=0;l<h.mb.length;l++)if(h.mb[l]){var m=sb[l];if(m&&!Yc[String(m[Fb.sa])])return!0}return!1};var rf={},sf={},tf=function(a){return void 0==sf[a]?void 0:sf[a]};var uf=[];function vf(){var a=gc("google_tag_data",{}),b=void 0!=tf("ogt_cc")&&void 0!=tf("ogt_ccr");a.ics||(a.ics={entries:{},set:wf,update:xf,addListener:yf,notifyListeners:zf,active:!1,valid:b});return a.ics}function wf(a,b,c){var d=vf();d.active=!0;if(void 0!=b){var e=d.entries,f=e[a]||{},h=c&&g(c)?c.toUpperCase():void 0,k=f.region;h!==tf("ogt_ccr")&&(h===tf("ogt_cc")?k===tf("ogt_ccr"):h||k)||(e[a]={region:h,initial:"granted"===b,update:f.update})}}
function xf(a,b){var c=vf();c.active=!0;if(void 0!=b){var d=Af(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(Af(a)!==d)for(var f=0;f<uf.length;++f){var h=uf[f];ra(h.fe)&&-1!==h.fe.indexOf(a)&&(h.Fe=!0)}}}function yf(a,b){uf.push({fe:a,jg:b})}function zf(){for(var a=0;a<uf.length;++a){var b=uf[a];if(b.Fe){b.Fe=!1;try{b.jg.call()}catch(c){}}}}var Af=function(a){if(0==vf().valid)return!1;var b=vf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0};var Bf=[J.Mg,J.Rg];var Df=/^https?:\/\/www\.googletagmanager\.com/;function Ef(){var a;return a}function Gf(a,b){}
function Ff(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"http://www.leparisien.fr/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function Hf(){var a=!1;return a};var If=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},Jf=function(a){var b=new If;b.eventModel=a;return b},Kf=function(a,b){a.targetConfig=b;return a},Lf=function(a,b){a.containerConfig=b;return a},Mf=function(a,b){a.h=b;return a},Nf=function(a,b){a.globalConfig=b;return a},Of=function(a,b){a.B=b;return a},Pf=function(a,b){a.w=b;return a};
If.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Qf=function(a){function b(e){C(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];C(c,function(e){d.push(e)});return d};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Uf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Mb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.nb},c);return e[0]?e[0].id:void 0}};
function Vf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c){function d(p,t,v){if(null==v)return delete h[t],p;h[t]=v;return p+"; "+t+"="+v}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Wf(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Oh);f=d(f,"samesite",c.Uh);c.Vh&&(f=e(f,"secure"));
f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=Xf(),n=0;n<m.length;++n){var r="none"!==m[n]?m[n]:void 0,u=d(f,"domain",r);if(!Yf(r,c.path)&&Vf(u,a,b))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return Yf(l,c.path)?!1:Vf(f,a,b)},$f=function(a,b,c,d,e,f,h){var k={domain:d,path:c,expires:e,flags:h,encode:f};null==k.path&&(k.path="http://www.leparisien.fr/");k.domain||(k.domain="auto");return Zf(a,b,k)};
function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Mb:1*k[0]||1,nb:1*k[1]||1}))}}return c}
var Wf=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ag=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,bg=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return bg.test(document.location.hostname)||"http://www.leparisien.fr/"===b&&ag.test(a)},Xf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;bg.test(e)||ag.test(e)||a.push("none");
return a};function cg(){for(var a=eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var eg,gg;function hg(a){eg=eg||fg();gg=gg||cg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(eg[l],eg[m],eg[n],eg[r])}return b.join("")}
function ig(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eg=eg||fg();gg=gg||cg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;var ng=function(){var a=kg,b=lg,c=mg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){mc(G,"mousedown",d);mc(G,"keyup",d);mc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},og=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};mg().decorators.push(f)},pg=function(a,b,c){for(var d=mg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ha(e,h.callback())}}return e},mg=function(){var a=gc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qg=/(.*?)\*(.*?)\*(.*)/,rg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,sg=/^(?:www\.|m\.|amp\.)+/,tg=/([^?#]+)(\?[^#]*)?(#.*)?/;function ug(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var wg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hg(String(d))))}var e=b.join("*");return["1",vg(e),e].join("*")},vg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}jg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},yg=function(){return function(a){var b=af(F.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=xg(d)||{};var e=$e(b,"fragment").match(ug("_gl"));a.fragment=xg(e&&e[3]||"")||{}}},zg=function(){var a=yg(),b=mg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ha(c,d.query),Ha(c,d.fragment));return c},xg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=qg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===vg(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=ig(u[p+1]);return r}}}}catch(t){}};
function Ag(a,b,c,d){function e(n){var r=n,u=ug(a).exec(r),p=r;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=tg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Bg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=pg(b,1,c),e=pg(b,2,c),f=pg(b,3,c);if(Ia(d)){var h=wg(d);c?Cg("_gl",h,a):Dg("_gl",h,a,!1)}if(!c&&Ia(e)){var k=wg(e);Dg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Dg(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Cg(m,n,r);break a}}"string"==typeof r&&Ag(m,n,r,void 0)}}
function Dg(a,b,c,d){if(c.href){var e=Ag(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function Cg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Ag(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var kg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Bg(e,e.hostname)}}catch(h){}},lg=function(a){try{if(a.action){var b=$e(af(a.action),"host");Bg(a,b)}}catch(c){}},Eg=function(a,b,c,d){ng();og(a,b,"fragment"===c?2:1,!!d,!1)},Fg=function(a){ng();og(a,[F.location.hostname],3,!0,!0)},Gg=function(){var a=G.location.hostname,b=rg.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("http://www.leparisien.fr/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(sg,""),l=e.replace(sg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Hg=function(a,b){return!1===a?!1:a||b||Gg()};var Ig=/^\w+$/,Jg=/^[\w-]+$/,Kg=/^~?[\w-]+$/,Lg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Mg(a){return a&&"string"==typeof a&&a.match(Ig)?a:"_gcl"}
var Og=function(){var a=af(F.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return Ng(b,c,d)},Ng=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Jg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
rf.gtm_3pds?0:rf.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Qg=function(a){var b=Og();Pg(b,a)};
function Pg(a,b,c){function d(r,u){var p=Rg(r,e);p&&$f(p,u,h,f,l,!0)}b=b||{};var e=Mg(b.prefix),f=b.domain||"auto",h=b.path||"http://www.leparisien.fr/",k=void 0==b.Ma?7776E3:b.Ma;c=c||Ea();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(r){return["GCL",m,r].join(".")};a.aw&&(!0===b.Zh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Tg=function(a,b,c,d,e){for(var f=zg(),h=Mg(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Lg[l]){var m=Rg(l,h),n=f[m];if(n){var r=Math.min(Sg(n),Ea()),u;b:{for(var p=r,t=Rf(m,G.cookie),v=0;v<t.length;++v)if(Sg(t[v])>p){u=!0;break b}u=!1}u||$f(m,n,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Pg(Ng(f.gclid,f.gclsrc),w)},Rg=function(a,b){var c=Lg[a];if(void 0!==c)return b+c},Sg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ug(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Vg=function(a,b,c,d,e){if(ra(b)){var f=Mg(e);Eg(function(){for(var h={},k=0;k<a.length;++k){var l=Rg(a[k],f);if(l){var m=Rf(l,G.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Wg=function(a){return a.filter(function(b){return Kg.test(b)})},Xg=function(a,b){for(var c=Mg(b&&b.prefix),d={},e=0;e<a.length;e++)Lg[a[e]]&&(d[a[e]]=Lg[a[e]]);C(d,function(f,h){var k=Rf(c+h,G.cookie);if(k.length){var l=k[0],m=Sg(l),n={};n[f]=[Ug(l)];Pg(n,b,m)}})},Yg=function(){var a=["","aw.ds"],b=Og(),
c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&Fg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Zg(){var a=Og(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Wc.reported_gclid||(Wc.reported_gclid={});d=Wc.reported_gclid;if(!d[b]){d[b]=!0;var e="http://www.leparisien.fr/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));sc("https://www.google.com"+e)}}};var $g;if(3===Vc.Cb.length)$g="g";else{var ah="G";$g=ah}
var bh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:$g,OPT:"o"},ch=function(a){var b=Vc.s.split("-"),c=b[0].toUpperCase(),d=bh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.Cb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.Cb+e};var mh=function(){for(var a=ec.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ea()/1E3)].join(".")},ph=function(a,b,c,d){var e=nh(b);return Uf(a,e,oh(c),d)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"http://www.leparisien.fr/"===a)return 1;"http://www.leparisien.fr/"!==a[0]&&(a="http://www.leparisien.fr/"+a);"http://www.leparisien.fr/"!==a[a.length-1]&&(a+="http://www.leparisien.fr/");return a.split("http://www.leparisien.fr/").length-1};var rh=["1"],sh={},wh=function(a,b,c,d){var e=th(a);sh[e]||uh(e,b,c)||(vh(e,mh(),b,c,d),uh(e,b,c))};function vh(a,b,c,d,e){var f=qh(b,"1",d,c);$f(a,f,c,d,0==e?void 0:new Date(Ea()+1E3*(void 0==e?7776E3:e)))}function uh(a,b,c){var d=ph(a,b,c,rh);d&&(sh[a]=d);return d}function th(a){return(a||"_gcl")+"_au"};var xh=function(){for(var a=[],b=G.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({hd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].hd]||(f[a[h].hd]=[]),f[a[h].hd].push({timestamp:k[1],lg:k[2]}))}return f};var yh=/^\d+\.fls\.doubleclick\.net$/;function zh(a){var b=af(F.location.href),c=$e(b,"host",!1);if(c&&c.match(yh)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ah(a,b){if("aw"==a||"dc"==a){var c=zh("gcl"+a);if(c)return c.split(".")}var d=Mg(b);if("_gcl"==d){var e;e=Og()[a]||[];if(0<e.length)return e}var f=Rg(a,d),h;if(f){var k=[];if(G.cookie){var l=Rf(f,G.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ug(l[m]);n&&-1===q(k,n)&&k.push(n)}h=Wg(k)}else h=k}else h=k}else h=[];return h}
var Bh=function(){var a=zh("gac");if(a)return decodeURIComponent(a);var b=xh(),c=[];C(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].lg);f=Wg(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Ch=function(a,b,c,d,e){wh(b,c,d,e);var f=sh[th(b)],h=Og().dc||[],k=!1;if(f&&0<h.length){var l=Wc.joined_au=Wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var r="https://adservice.google.com/ddm/regclk";r=r+"?gclid="+h[n]+"&auiddc="+f;sc(r);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var u=
th(b),p=sh[u];p&&vh(u,p,c,d,e)}};
var Dh=function(a){return!(void 0===a||null===a||0===(a+"").length)},Eh=function(a,b){var c;if(2===b.W)return a("ord",wa(1E11,1E13)),!0;if(3===b.W)return a("ord","1"),a("num",wa(1E11,1E13)),!0;if(4===b.W)return Dh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.W)c="1";else if(6===b.W)c=b.cd;else return!1;Dh(c)&&a("qty",c);Dh(b.Jb)&&a("cost",b.Jb);Dh(b.transactionId)&&a("ord",b.transactionId);return!0},Fh=encodeURIComponent,Gh=function(a,b){function c(n,r,u){f.hasOwnProperty(n)||(r+="",e+=";"+n+"="+
(u?r:Fh(r)))}var d=a.Ic,e=a.protocol;e+=a.cc?"http://www.leparisien.fr//"+d+".fls.doubleclick.net/activityi":"http://www.leparisien.fr//ad.doubleclick.net/activity";e+=";src="+Fh(d)+(";type="+Fh(a.Lc))+(";cat="+Fh(a.hb));var f=a.bg||{};C(f,function(n,r){e+=";"+Fh(n)+"="+Fh(r+"")});if(Eh(c,a)){Dh(a.mc)&&c("u",a.mc);Dh(a.kc)&&c("tran",a.kc);c("gtm",ch());!1===a.Gf&&c("npa","1");if(a.Hc){var h=Ah("dc",a.Ha);h&&h.length&&c("gcldc",h.join("."));var k=Ah("aw",a.Ha);k&&k.length&&c("gclaw",k.join("."));var l=Bh();l&&c("gac",l);wh(a.Ha,void 0,a.Yf,a.Zf);
var m=sh[th(a.Ha)];m&&c("auiddc",m)}Dh(a.Zc)&&c("prd",a.Zc,!0);C(a.kd,function(n,r){c(n,r)});e+=b||"";Dh(a.Xb)&&c("~oref",a.Xb);a.cc?kc(e+"?",a.B):lc(e+"?",a.B,a.w)}else I(a.w)};var ui={},vi=["G","GP"];ui.Me="";var wi=ui.Me.split(",");function xi(){var a=Wc;return a.gcq=a.gcq||new yi}
var zi=function(a,b,c){xi().register(a,b,c)},Ai=function(a,b,c,d){xi().push("event",[b,a],c,d)},Bi=function(a,b){xi().push("config",[a],b)},Ci={},Di=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Ei=function(a,b,c,d,e){this.type=a;this.m=b;this.U=c||"";this.h=d;this.i=e},yi=function(){this.i={};this.m={};this.h=[]},Fi=function(a,b){var c=Sc(b);return a.i[c.containerId]=a.i[c.containerId]||new Di},Gi=function(a,b,c,d){if(d.U){var e=Fi(a,d.U),
f=e.m;if(f){var h=D(c),k=D(e.targetConfig[d.U]),l=D(e.containerConfig),m=D(e.i),n=D(a.m),r=Md("gtm.uniqueEventId"),u=Sc(d.U).prefix,p=Pf(Of(Nf(Mf(Lf(Kf(Jf(h),k),l),m),n),function(){Gd(r,u,"2");}),function(){Gd(r,u,"3");});try{Gd(r,u,"1");f(d.U,b,d.m,p)}catch(t){
Gd(r,u,"4");}}}};
yi.prototype.register=function(a,b,c){if(3!==Fi(this,a).status){Fi(this,a).m=b;Fi(this,a).status=3;c&&(Fi(this,a).i=c);var d=Sc(a),e=Ci[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Ea()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+n:"&cl="+n}delete Ci[d.containerId]}this.flush()}};
yi.prototype.push=function(a,b,c,d){var e=Math.floor(Ea()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===Fi(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(Fi(this,c).status=2,this.push("require",[],f.containerId),Ci[f.containerId]=Ea(),Wd()){}else{var n=encodeURIComponent(f.containerId),r=("http:"!=F.location.protocol?"https:":"http:")+"http://www.leparisien.fr//www.googletagmanager.com";
ic(r+"http://www.leparisien.fr/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new Ei(a,e,c,b,d));d||this.flush()};
yi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Fi(this,c.U).status&&!a)return;break;case "set":C(c.h[0],function(l,m){D(Ka(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[J.Ub];delete d[J.Ub];var f=Fi(this,c.U),h=Sc(c.U),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.U]={});f.h&&e||Gi(this,J.C,d,c);f.h=!0;delete d[J.ra];k?D(d,f.containerConfig):D(d,f.targetConfig[c.U]);break;
case "event":Gi(this,c.h[1],c.h[0],c)}this.h.shift()}};var Hi=["GP","G"],Ii="G".split(/,/);Ii.push("HA");var Ji=!1;Ji=!0;var Ki=null,Li={},Mi={},Ni;function Oi(a,b){var c={event:a};b&&(c.eventModel=D(b),b[J.uc]&&(c.eventCallback=b[J.uc]),b[J.xb]&&(c.eventTimeout=b[J.xb]));return c}
var Ui={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Oi(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Pa(a[1])?b=D(a[1]):3==a.length&&
g(a[1])&&(b={},Pa(a[2])||ra(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var Vi={policy:!0};var Wi=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Yi=function(a){var b=Xi(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Zi=!1,$i=[];function aj(){if(!Zi){Zi=!0;for(var a=0;a<$i.length;a++)I($i[a])}}var bj=function(a){Zi?I(a):$i.push(a)};var rj=function(a){if(qj(a))return a;this.h=a};rj.prototype.pg=function(){return this.h};var qj=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};rj.prototype.getUntrustedUpdateValue=rj.prototype.pg;var sj=[],tj=!1,uj=function(a){return F["dataLayer"].push(a)},vj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function wj(a){var b=a._clear;C(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});ad||(ad=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=hd(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));cd=c;var e=xj(a);
cd=null;switch(c){case "gtm.init":jd("GTM",19),e&&jd("GTM",20)}return e}function xj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.s,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function yj(){for(var a=!1;!tj&&0<sj.length;){tj=!0;delete Jd.eventModel;Ld();var b=sj.shift();if(null!=b){var c=qj(b);if(c){var d=b;b=qj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(ra(k)||Pa(k))k=D(k);Kd[h]=k}}try{if(pa(b))try{b.call(Nd)}catch(v){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=Md(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=Ui[b[0]];if(t&&(!c||!Vi[b[0]])){b=t(b);break a}}b=void 0}if(!b){tj=!1;continue}}a=wj(b)||a}}finally{c&&Ld(!0)}}tj=!1}
return!a}function zj(){var a=yj();try{Wi(F["dataLayer"],Vc.s)}catch(b){}return a}
var Bj=function(){var a=gc("dataLayer",[]),b=gc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});bj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new rj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);sj.push.apply(sj,d);if(300<
this.length)for(jd("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return yj()&&h};sj.push.apply(sj,a.slice(0));Aj()&&I(zj)},Aj=function(){var a=!0;return a};var Cj={};Cj.yb=new String("undefined");
var Dj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Cj.yb?b:a[d]);return c.join("")}};Dj.prototype.toString=function(){return this.h("undefined")};Dj.prototype.valueOf=Dj.prototype.toString;Cj.uf=Dj;Cj.Bc={};Cj.$f=function(a){return new Dj(a)};var Ej={};Cj.dh=function(a,b){var c=hd();Ej[c]=[a,b];return c};Cj.he=function(a){var b=a?0:1;return function(c){var d=Ej[c];if(d&&"function"===typeof d[b])d[b]();Ej[c]=void 0}};Cj.zg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Cj.Tg=function(a){if(a===Cj.yb)return a;var b=hd();Cj.Bc[b]=a;return'google_tag_manager["'+Vc.s+'"].macro('+b+")"};Cj.Jg=function(a,b,c){a instanceof Cj.uf&&(a=a.h(Cj.dh(b,c)),b=oa);return{Nc:a,B:b}};var Fj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||oc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Gj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Hj=function(a,b,c){Gj(a)[b]=c},Ij=function(a,b,c,d){var e=Gj(a),f=Fa(e,b,d);e[b]=c(f)},Jj=function(a,b,c){var d=Gj(a);return Fa(d,b,c)};var Kj=["input","select","textarea"],Lj=["button","hidden","image","reset","submit"],Mj=function(a){var b=a.tagName.toLowerCase();return!va(Kj,function(c){return c===b})||"input"===b&&va(Lj,function(c){return c===a.type.toLowerCase()})?!1:!0},Nj=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):rc(a,["form"],100)},Oj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Mj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Pj=!!F.MutationObserver,Qj=void 0,Rj=function(a){if(!Qj){var b=function(){var c=G.body;if(c)if(Pj)(new MutationObserver(function(){for(var e=0;e<Qj.length;e++)I(Qj[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Qj.length;e++)I(Qj[e])}))})}};Qj=[];G.body?b():I(b)}Qj.push(a)};
var ck=function(){var a=G.body,b=G.documentElement||a&&a.parentElement,c,d;if(G.compatMode&&"BackCompat"!==G.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};jd("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},dk=function(a){var b=ck(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},ek=function(a){if(G.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,null))}return!1};var fk=[],gk=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),hk=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<fk.length;f++)if(!fk[f])return fk[f]=d,f;return fk.push(d)-1},ik=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ea()};I(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=dk(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},jk=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(gk){var e=!1;I(function(){e||ik(a,b,c)()});return hk(function(f){e=!0;for(var h={Pa:0};h.Pa<f.length;h={Pa:h.Pa},h.Pa++)I(function(k){return function(){return a(f[k.Pa])}}(h))},b,c)}return F.setInterval(ik(a,b,c),1E3)},kk=function(a){gk?0<=a&&a<fk.length&&fk[a]&&(fk[a].disconnect(),fk[a]=void 0):F.clearInterval(a)};var mk=F.clearTimeout,nk=F.setTimeout,S=function(a,b,c){if(Wd()){b&&I(b)}else return ic(a,b,c)},ok=function(){return F.location.href},pk=function(a){return $e(af(a),"fragment")},qk=function(a){return Ze(af(a))},U=function(a,b){return Md(a,b||2)},rk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=uj(a)):d=uj(a);return d},sk=function(a,b){F[a]=b},X=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},tk=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},uk=function(a,b){if(Wd()){b&&I(b)}else kc(a,b)},vk=function(a){return!!Jj(a,"init",!1)},wk=function(a){Hj(a,"init",!0)},xk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$c;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},yk=function(a,b){var c=a[b];return c};
var zk=Cj.Jg;var Wk=new xa;function Xk(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),n=$e(k,"port"),r=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Yk(a){return Zk(a)?1:0}
function Zk(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(Yk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=q(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Wk.get(p);t||(t=new RegExp(c,u),Wk.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Xk(b,
c)}return!1};var $k=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var al={},bl=encodeURI,Y=encodeURIComponent,cl=lc;var dl=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var el=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};al.Ag=function(){var a=!1;return a};var rm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Cm=window,Dm=document,Em=function(a){var b=Cm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Cm["ga-disable-"+a])return!0;try{var c=Cm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",Dm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dm.getElementById("__gaOptOutExtension")?!0:!1};var Hm=function(a){C(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ca]||{};C(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Lm=function(a,b,c){Ai(b,c,a)},Mm=function(a,b,c){Ai(b,c,a,!0)},Om=function(a,b){};
function Nm(a,b){}var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"78"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var B=[],A=x.split(","),z=0;z<A.length;z++){var E=Number(A[z]);if(isNaN(E))return[];n.test(A[z])||B.push(E)}return B}function c(){var x=0,B=0;return function(){var A=ck(),z=A.height;x=Math.max(v.scrollLeft+A.width,x);B=Math.max(v.scrollTop+z,B);return{cg:x,dg:B}}}function d(){p=X("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,B,A,z){var E=l(B),H={},K;for(K in E){H.Aa=K;if(E.hasOwnProperty(H.Aa)){var R=Number(H.Aa);x<R||(rk({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":E[H.Aa].join(",")}),Ij("sdl",B,function(V){return function(W){delete W[V.Aa];return W}}(H),{}))}H={Aa:H.Aa}}}function f(){var x=y(),B=x.cg,A=x.dg,z=B/v.scrollWidth*100,E=A/v.scrollHeight*100;e(B,"horiz.pix",
r.Ab,u.Ad);e(z,"horiz.pct",r.zb,u.Ad);e(A,"vert.pix",r.Ab,u.Wd);e(E,"vert.pct",r.zb,u.Wd);Hj("sdl","pending",!1)}function h(){var x=250,B=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,B=!0);var A=0,z=!1,E=function(){z?A=nk(E,x):(A=0,f(),vk("sdl")&&!a()&&(nc(p,"scroll",H),nc(p,"resize",H),Hj("sdl","init",!1)));z=!1},H=function(){B&&y();A?z=!0:(A=nk(E,x),Hj("sdl","pending",!0))};return H}function k(x,B,A){if(B){var z=b(String(x));Ij("sdl",A,function(E){for(var H=0;H<z.length;H++){var K=
String(z[H]);E.hasOwnProperty(K)||(E[K]=[]);E[K].push(B)}return E},{})}}function l(x){return Jj("sdl",x,{})}function m(x){I(x.vtp_gtmOnSuccess);var B=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,K=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.Ab:k(A,B,"horiz.pix");break;case r.zb:k(z,B,"horiz.pct")}switch(E){case r.Ab:k(H,B,"vert.pix");break;case r.zb:k(K,
B,"vert.pct")}vk("sdl")?Jj("sdl","pending")||(w||(d(),w=!0),I(function(){return f()})):(d(),w=!0,v&&(wk("sdl"),Hj("sdl","pending",!0),I(function(){f();if(a()){var R=h();mc(p,"scroll",R);mc(p,"resize",R)}else Hj("sdl","init",!1)})))}var n=/^\s*$/,r={zb:"PERCENT",Ab:"PIXELS"},u={Wd:"vertical",Ad:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):bj(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Gh(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=el(b.vtp_customVariable||[],"key","value")||{},e={hb:b.vtp_activityTag,Hc:c,Ha:b.vtp_conversionCookiePrefix||void 0,Jb:void 0,W:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Ic:b.vtp_advertiserId,Lc:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,
Xb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",cd:void 0,cc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,kc:b.vtp_transactionVariable,transactionId:void 0,mc:b.vtp_userVariable,kd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){S("http://www.leparisien.fr//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([el(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"http://www.leparisien.fr//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;Je();S(b,function(){var d=X("google_trackConversion");if(pa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=el(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:ch()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);
d(h)||c()}else c()},c)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=G.getElementById(a.vtp_elementId);b&&(d?c=oc(b,d):c=pc(b));return Ca(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):qk(String(b)):String(b)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return tk(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Gh(b,c)}(function(b){Z.__fls=b;Z.__fls.b="fls";Z.__fls.g=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(r){r=r||[];for(var u=[],p=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],t=0;t<r.length;t++)for(var v=0;v<p.length;v++){var w=p[v],y=r[t][w[1]];void 0!==y&&u.push(w[0]+
(t+1)+":"+Y(y))}return u.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(U("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var h=e[f].split(":");h[1]=h[1]&&Y(h[1])||"";e[f]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=el(b.vtp_customVariable||
[],"key","value")||{},m={hb:b.vtp_activityTag,Hc:k,Ha:b.vtp_conversionCookiePrefix||void 0,Jb:b.vtp_revenue,W:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Ic:b.vtp_advertiserId,Lc:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,Xb:b.vtp_useImageTag?void 0:b.vtp_url,Zc:c,protocol:"",cd:b.vtp_quantity,cc:!b.vtp_useImageTag,kc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,mc:b.vtp_userVariable,kd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){S("http://www.leparisien.fr//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,X("google_attr").build([el(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Z.a.tg=["google"],function(){function a(k){h.push(k);1<h.length||I(function(){var l=h.join(",");h=[];rk({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){I(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var r=e[n];r?b(n,r):f.push(n)}else{d[l]=m;for(var u=0,p;p=m[u];u++)e[p]=l;for(var t=0;t<f.length;t++)b(f[t],l)}}var d={},e={},f=[],h=[];Z.__tg=c;Z.__tg.b="tg";Z.__tg.g=!0;Z.__tg.priorityOverride=0}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||ok();var d=b[a("vtp_component")];if(!d||"URL"==d)return qk(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=$e(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;D(el(n.vtp_fieldsToSet,"fieldName","value"),f);D(el(n.vtp_contentGroup,"index","group"),h);D(el(n.vtp_dimension,"index","dimension"),k);D(el(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=D(n);d=D(d,r)}D(el(d.vtp_fieldsToSet,"fieldName","value"),f);D(el(d.vtp_contentGroup,
"index","group"),h);D(el(d.vtp_dimension,"index","dimension"),k);D(el(d.vtp_metric,"index","metric"),l);var u=Qe(d.vtp_functionName);if(pa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+hd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var L=[].slice.call(arguments,0);L[0]=p+L[0];u.apply(window,L)},x=function(O,L){return void 0===L?L:O(L)},B=function(O,L){if(L)for(var ta in L)L.hasOwnProperty(ta)&&
y("set",O+ta,L[ta])},A=function(){var O=function(Sm,hj,Tm){if(!Pa(hj))return!1;for(var dd=Fa(Object(hj),Tm,[]),dg=0;dd&&dg<dd.length;dg++)y(Sm,dd[dg]);return!!dd&&0<dd.length},L;if(d.vtp_useEcommerceDataLayer){var ta=!1;ta||(L=U("ecommerce",1))}else d.vtp_ecommerceMacroData&&
(L=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(L))return;L=Object(L);var Ib=Fa(f,"currencyCode",L.currencyCode);void 0!==Ib&&y("set","&cu",Ib);O("ec:addImpression",L,"impressions");if(O("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){y("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Da="detail checkout checkout_option click add remove purchase refund".split(" "),$a="refund purchase remove checkout checkout_option add click detail".split(" "),
ab=0;ab<Da.length;ab++){var lb=L[Da[ab]];if(lb){O("ec:addProduct",lb,"products");y("ec:setAction",Da[ab],lb.actionField);if(Cd)for(var wb=0;wb<$a.length;wb++){var uc=L[$a[wb]];if(uc){uc!==lb&&jd("GTM",13);break}}break}}},z=function(O,L,ta){var Ib=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(ta&&v[Da]||!ta&&void 0===v[Da])){var $a=w[Da]?Aa(O[Da]):O[Da];"anonymizeIp"!=Da||$a||($a=void 0);L[Da]=$a;Ib++}return Ib},E={name:t};z(f,
E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",ch(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&y("set",O,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;pa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(za,d.vtp_eventValue||e.value)};z(K,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:sa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ma})}K?y("send","pageview",K):y("send","pageview");
d.vtp_autoLinkDomains&&Re(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var ua=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var bb=Q("https:","http:","http://www.leparisien.fr//www.google-analytics.com/"+ua,f&&f.forceSSL);
S(bb,function(){var O=Oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Vc.s})}();

Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Gg())){Tg(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ma:void 0};Qg(m);Xg(["aw","dc"],m);Ch(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var r=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Vg(a,r,u,p,n);}
Zg();})}();

Z.a.aev=["google"],function(){function a(p,t){var v=Ud(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var B=a(p,w);if(B&&(x=v(B),n[y]=x,r.push(y),35<r.length)){var A=r.shift();delete n[A]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(ok());ra(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!dl(p,w)}function e(p){m.test(p)||(p="http://"+p);return $e(af(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return oc(p,"value");case "button":return pc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)Mj(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&oc(w,t)||v}var m=/^https?:\/\//i,n={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,pc)||v;case "URL":var x;a:{var B=String(a(t,"elementUrl")||v||""),A=af(B),z=String(p.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,p.vtp_affiliatedDomains);break a;default:x=$e(A,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var H=p.vtp_attribute,K=a(t,"element");E=K&&oc(K,H)||v||""}return E;case "MD":var R=p.vtp_mdValue,V=b(t,"MD",Yj);return R&&V?bk(V,R)||
v:V||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=D(a),c=b;c[Fb.sa]=null;c[Fb.Xe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Je();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:ch()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var B="DATA_LAYER"==v?U(x):k[y];B&&(l[w]=B)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,B){var A="DATA_LAYER"==v?U(x):k[y];B(A)&&r(w,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"http://www.leparisien.fr//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,
S(p,f(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();





Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,hc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var b=function(d,e,f){Ae(function(){var h,k=Wc;k.postscribe||(k.postscribe=dc);h=k.postscribe;var l={done:e},m=G.createElement("div");m.style.display="none";m.style.visibility="hidden";G.body.appendChild(m);try{h(m,d,l)}catch(n){I(f)}})};var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=zk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Nc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,qc(h),k,e)()}else nk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(U("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!ek(f.target)){h.has(e.Bb)||h.set(e.Bb,""+b());h.has(e.xc)||h.set(e.xc,""+b());var r=0;h.has(e.Db)&&(r=Number(h.get(e.Db)));r+=100;h.set(e.Db,""+r);if(r>=k){var u=Fj(f.target,"gtm.elementVisibility",[h.uid]),p=dk(f.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.xc));
u["gtm.visibleLastTime"]=Number(h.get(e.Bb));rk(u);l()}}}if(!h.has(e.Xa)&&(0==k&&m(),!h.has(e.Ca))){var n=X("self").setInterval(m,100);h.set(e.Xa,n)}}function d(f){f.has(e.Xa)&&(X("self").clearInterval(Number(f.get(e.Xa))),f.h(e.Xa))}var e={Xa:"polling-id-",xc:"first-on-screen-",Bb:"recent-on-screen-",Db:"total-visible-time-",Ca:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.h=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=wc(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var B=G.getElementById(m);B&&(x=[B],y=1!=v.length||v[0]!==B)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var z=
new a(v[A],p);d(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&kk(w);0<v.length&&(w=jk(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Ca)||c(y,x,r,"ONCE"===t?function(){for(var B=0;B<v.length;B++){var A=new a(v[B],p);A.set(e.Ca,"1");d(A)}kk(w);if(n&&Qj)for(var z=0;z<Qj.length;z++)Qj[z]===h&&Qj.splice(z,1)}:function(){x.set(e.Ca,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.Ca)&&(x.h(e.Ca),x.h(e.Db)),x.h(e.Bb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;h();n&&Rj(h);I(f.vtp_gtmOnSuccess)})}();


var Pm={};Pm.macro=function(a){if(Cj.Bc.hasOwnProperty(a))return Cj.Bc[a]},Pm.onHtmlSuccess=Cj.he(!0),Pm.onHtmlFailure=Cj.he(!1);Pm.dataLayer=Nd;Pm.callback=function(a){fd.hasOwnProperty(a)&&pa(fd[a])&&fd[a]();delete fd[a]};function Qm(){Wc[Vc.s]=Pm;Ha(gd,Z.a);xb=xb||Cj;yb=re}
function Rm(){rf.gtm_3pds=!0;Wc=F.google_tag_manager=F.google_tag_manager||{};if(Wc[Vc.s]){var a=Wc.zones;a&&a.unregisterChild(Vc.s)}else{for(var b=data.resource||
{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(r)}ub=Z;vb=Yk;Qm();Bj();ve=!1;we=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ye();else{mc(G,"DOMContentLoaded",ye);mc(G,"readystatechange",ye);if(G.createEventObject&&
G.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(y){}p&&ze()}mc(F,"load",ye)}Zi=!1;"complete"===G.readyState?aj():mc(F,"load",aj);a:{if(!Cd)break a;F.setInterval(Dd,864E5);}bd=(new Date).getTime();}}Rm();

})()
