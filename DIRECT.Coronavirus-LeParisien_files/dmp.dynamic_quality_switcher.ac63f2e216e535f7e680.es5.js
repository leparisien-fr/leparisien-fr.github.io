(this.dmpJsonp=this.dmpJsonp||[]).push([["dynamic_quality_switcher"],{"6xEa":function(e,t,r){var a,n=function(){function e(e,t){if(!n[e]){n[e]={};for(var r=0;r<e.length;r++)n[e][e.charAt(r)]=r}return n[e][t]}var t=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={},i={compressToBase64:function(e){if(null==e)return"";var t=i._compress(e,6,function(e){return r.charAt(e)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,function(a){return e(r,t.charAt(a))})},compressToUTF16:function(e){return null==e?"":i._compress(e,15,function(e){return t(e+32)})+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,function(t){return e.charCodeAt(t)-32})},compressToUint8Array:function(e){for(var t=i.compress(e),r=new Uint8Array(2*t.length),a=0,n=t.length;a<n;a++){var o=t.charCodeAt(a);r[2*a]=o>>>8,r[2*a+1]=o%256}return r},decompressFromUint8Array:function(e){if(null==e)return i.decompress(e);for(var r=new Array(e.length/2),a=0,n=r.length;a<n;a++)r[a]=256*e[2*a]+e[2*a+1];var o=[];return r.forEach(function(e){o.push(t(e))}),i.decompress(o.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,function(e){return a.charAt(e)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,function(r){return e(a,t.charAt(r))}))},compress:function(e){return i._compress(e,16,function(e){return t(e)})},_compress:function(e,t,r){if(null==e)return"";var a,n,i={},o={},s="",l="",u="",h=2,c=3,d=2,f=[],v=0,g=0,p;for(p=0;p<e.length;p+=1)if(s=e.charAt(p),Object.prototype.hasOwnProperty.call(i,s)||(i[s]=c++,o[s]=!0),l=u+s,Object.prototype.hasOwnProperty.call(i,l))u=l;else{if(Object.prototype.hasOwnProperty.call(o,u)){if(u.charCodeAt(0)<256){for(a=0;a<d;a++)v<<=1,g==t-1?(g=0,f.push(r(v)),v=0):g++;for(n=u.charCodeAt(0),a=0;a<8;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1}else{for(n=1,a=0;a<d;a++)v=v<<1|n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n=0;for(n=u.charCodeAt(0),a=0;a<16;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1}h--,0==h&&(h=Math.pow(2,d),d++),delete o[u]}else for(n=i[u],a=0;a<d;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1;h--,0==h&&(h=Math.pow(2,d),d++),i[l]=c++,u=String(s)}if(""!==u){if(Object.prototype.hasOwnProperty.call(o,u)){if(u.charCodeAt(0)<256){for(a=0;a<d;a++)v<<=1,g==t-1?(g=0,f.push(r(v)),v=0):g++;for(n=u.charCodeAt(0),a=0;a<8;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1}else{for(n=1,a=0;a<d;a++)v=v<<1|n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n=0;for(n=u.charCodeAt(0),a=0;a<16;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1}h--,0==h&&(h=Math.pow(2,d),d++),delete o[u]}else for(n=i[u],a=0;a<d;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1;h--,0==h&&(h=Math.pow(2,d),d++)}for(n=2,a=0;a<d;a++)v=v<<1|1&n,g==t-1?(g=0,f.push(r(v)),v=0):g++,n>>=1;for(;;){if(v<<=1,g==t-1){f.push(r(v));break}g++}return f.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,function(t){return e.charCodeAt(t)})},_decompress:function(e,r,a){var n=[],i,o=4,s=4,l=3,u="",h=[],c,d,f,v,g,p,m,E={val:a(0),position:r,index:1};for(c=0;c<3;c+=1)n[c]=c;for(f=0,g=Math.pow(2,2),p=1;p!=g;)v=E.val&E.position,E.position>>=1,0==E.position&&(E.position=r,E.val=a(E.index++)),f|=(v>0?1:0)*p,p<<=1;switch(i=f){case 0:for(f=0,g=Math.pow(2,8),p=1;p!=g;)v=E.val&E.position,E.position>>=1,0==E.position&&(E.position=r,E.val=a(E.index++)),f|=(v>0?1:0)*p,p<<=1;m=t(f);break;case 1:for(f=0,g=Math.pow(2,16),p=1;p!=g;)v=E.val&E.position,E.position>>=1,0==E.position&&(E.position=r,E.val=a(E.index++)),f|=(v>0?1:0)*p,p<<=1;m=t(f);break;case 2:return""}for(n[3]=m,d=m,h.push(m);;){if(E.index>e)return"";for(f=0,g=Math.pow(2,l),p=1;p!=g;)v=E.val&E.position,E.position>>=1,0==E.position&&(E.position=r,E.val=a(E.index++)),f|=(v>0?1:0)*p,p<<=1;switch(m=f){case 0:for(f=0,g=Math.pow(2,8),p=1;p!=g;)v=E.val&E.position,E.position>>=1,0==E.position&&(E.position=r,E.val=a(E.index++)),f|=(v>0?1:0)*p,p<<=1;n[s++]=t(f),m=s-1,o--;break;case 1:for(f=0,g=Math.pow(2,16),p=1;p!=g;)v=E.val&E.position,E.position>>=1,0==E.position&&(E.position=r,E.val=a(E.index++)),f|=(v>0?1:0)*p,p<<=1;n[s++]=t(f),m=s-1,o--;break;case 2:return h.join("")}if(0==o&&(o=Math.pow(2,l),l++),n[m])u=n[m];else{if(m!==s)return null;u=d+d.charAt(0)}h.push(u),n[s++]=d+u.charAt(0),o--,d=u,0==o&&(o=Math.pow(2,l),l++)}}};return i}();a=function(){return n}.call(t,r,t,e),void 0===a||(e.exports=a)},DqVu:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(){this.attributes({resource:null,autoplay:!1,autoplayAllowed:!1,dependencies:null}),this.currentSource=null,this.decodeErrorCount=0,this.freezeErrorCount=0,this.decodeErrorDate=[null,null,null],this.pendingRecovery=!1,this._createHlsSource=function(e){null!==this.currentSource&&(this.currentSource.destroy(),this._unbindSourceEvents()),this.currentSource=D.createNew(this.videoTag,e,this.attr.dependencies.Hlsjs),this.currentSource.disableLevelCapping=v.a.isVR360Enabled(),this._bindSourceEvents()},this._bindSourceEvents=function(){this.currentSource.disableLevelCapping||(this.computeAutoLevelCapping=this.currentSource.computeAutoLevelCapping.bind(this.currentSource),this.on(l.a.PLAYER_SIZE_CHANGED,this.computeAutoLevelCapping),"function"==typeof window.matchMedia&&(this.mediaQuery=window.matchMedia("screen and (min-resolution: 2dppx)"),this.mediaQuery&&this.mediaQuery.addListener(this.computeAutoLevelCapping))),this.currentSource.on("level_state_change",this._onSourceLevelStateChange,this),this.currentSource.on("level_state_changed",this._onSourceLevelStateChanged,this),this.currentSource.on("fatal_error",this._onSourceFatalError,this)},this._unbindSourceEvents=function(){this.currentSource.disableLevelCapping||(this.off(l.a.PLAYER_SIZE_CHANGED,this.computeAutoLevelCapping),this.mediaQuery&&(this.mediaQuery.removeListener(this.computeAutoLevelCapping),this.mediaQuery=null),this.computeAutoLevelCapping=null),this.currentSource.off("level_state_change",this._onSourceLevelStateChange),this.currentSource.off("level_state_changed",this._onSourceLevelStateChanged),this.currentSource.off("fatal_error",this._onSourceFatalError,this)},this._onSourceLevelStateChange=function(e){var t={adaptive:e.adaptive,quality:this.qualityList.getQualityForLevel(e.levelIndex)};this.notifyQualityChangeConfirmed(t)},this._onSourceLevelStateChanged=function(e){var t=this.currentSource.getLiveEdgeDelay();t>0&&this.liveEdgeDelay!==t&&(this.liveEdgeDelay=t,this.trigger(l.a.LIVE_EDGE_DELAY_CHANGED,{delay:this.liveEdgeDelay}));var r={adaptive:e.adaptive,quality:this.qualityList.getQualityForLevel(e.levelIndex)};this.decodeErrorDate=[null,null,null],this.notifyQualityChanged(r)},this._onSourceFatalError=function(e){this.videoSlotStarted&&this._handleError(e.error)},this.waitForQualityList=function(){var e=this,t=this.attr.resource||this.attr.qualities.auto.find(function(e){var t=e.type;return t===M.a.HLS});return new Promise(function(r,a){if(null!=t)e._createHlsSource(t),e.currentSource.waitForManifest().then(function(t){var a=t.manifestData.levels,n=t.resource,i=w.a.createFromLevels(a,n);if(e.trigger(l.a.DEBUG_UPDATE_REQUESTED,{type:"stream_origin",payload:{url:n.url,cell:e.currentSource.streamCell()}}),"videogames"===v.a.metadata("channel")&&"live"===v.a.metadata("stream_type")){var o=i.getHighestQuality();null!==o&&(o.tag="Source")}r(e.setQualityList(i))}).catch(function(e){return a(e)});else{var n=new w.a;r(e.setQualityList(n))}})},this.getStats=function(e,t){if(!this.currentSource)return{};var r={decodeError:this.decodeErrorCount,freezeError:this.freezeErrorCount},a=this.currentSource.streamComment();if(a&&(r.comment=a),this.videoTag)if("function"==typeof this.videoTag.getVideoPlaybackQuality){var n=this.videoTag.getVideoPlaybackQuality();r.droppedVideoFrames=n.droppedVideoFrames,r.corruptedVideoFrames=n.corruptedVideoFrames}else{var i=this.videoTag.webkitDroppedFrameCount;i&&(r.droppedVideoFrames=i)}var o=this.currentSource.streamStats(t,this.qualityList);o&&(r.stream=o),this.trigger(l.a.QUALITY_STATS_RESPONDED,r)},this.changeQuality=function(e,t){var r=this,a=t.isStartup,n=t.isReplay,i=t.isRecovering,o=t.prefetch,s=null;s=i?"recover":n?"replay":a?"start":"current";var l=e.quality,u=this.qualityList.getLevelForQualityName(l.name),h={prefetch:o,heuristic:!1};a&&this.qualityChosenFromPlayerSize&&(h.heuristic=!0),this.pendingRecovery=i,this.currentSource.setLevel(u,e.adaptive,s,h).then(function(){a&&!o&&r.videoTag&&r.videoTag.play()})},this.handleFirstSequenceStarted=function(){this.off(l.a.SEQUENCE_STARTED,this.handleFirstSequenceStarted),this.setup()},this.handleInitialQualitySet=function(e){this.changeQuality(e,{isStartup:!0,isReplay:!1,isRecovering:!1,prefetch:!0})},this.handleLoadedmetadataEvent=function(){if(this.trigger(l.a.VIDEO_LOADED_METADATA,{videoTagSelector:this.attr.videoTagSelector}),this.pendingRecovery){this.pendingRecovery=!1;var e={adaptive:this.currentSource.hls.autoLevelEnabled,quality:this.qualityList.getQualityForLevel(this.currentSource.hls.loadLevel)};this.notifyQualityChangeConfirmed(e,!0),this.notifyQualityChanged(e)}},this.handleErrorEvent=function(e){var t=e.target.error||{},r=null;switch(t.code){case t.MEDIA_ERR_ABORTED:r=s.h;break;case t.MEDIA_ERR_NETWORK:r=s.j;break;case t.MEDIA_ERR_DECODE:r=s.i;break;case t.MEDIA_ERR_SRC_NOT_SUPPORTED:r=s.k;break;default:r=s.o}this._handleError(r)},this._handleError=function(e){if(x.warn("error received:",e),e===s.i||"mediaErrorbufferAppendError"===e){var t=Date.now(),r=(this.decodeErrorCount+2)%3,a=this.decodeErrorDate[r];if(!a||t-a>3e3)return this.decodeErrorCount%2&&this.swapAudioCodec(),this.decodeErrorCount++,this.decodeErrorDate[r]=t,this.recoverDecodingError()}if("mediaErrorbufferStalledError"===e){var n=Date.now(),i=++this.freezeErrorCount,o=this.freezeErrorDate;if(this.freezeErrorDate=n,i<3&&(!o||n-o>1e4))return this.recoverDecodingError()}this.triggerQualitySwitcherError(e)},this.recoverDecodingError=function(){x.log("try to recover video decoding error"),this.currentSource.recoverDecodingError()},this.swapAudioCodec=function(){x.log("try to swap audio codec"),this.currentSource.swapAudioCodec()},this.streamCell=function(){return this.currentSource.streamCell()},this.streamTech=function(){return"hls.js"},this.after("initialize",function(){x.log("Initialized"),this.attr.autoplay&&this.attr.autoplayAllowed?this.handleFirstSequenceStarted():this.on(l.a.SEQUENCE_STARTED,this.handleFirstSequenceStarted),this.trigger(l.a.CAN_PLAY_ONE_SOURCE,{ok:!0}),this.on(l.a.VIDEO_ENDED,function(){this.currentSource.detachVideo()}),this.on(l.a.AD_LINEAR_WILL_START,function(e,t){var r=t.position;r!==F.a.MIDROLL&&r!==F.a.LIVEADBREAK||this.currentSource.detachVideo()}),this.on(l.a.CHROMECAST_REMOTE_ENABLED,function(){this.unbindMediaEvents(),this.currentSource.detachVideo()}),this.on(l.a.CHROMECAST_SESSION_STOPPED,function(){this.resetQualityState(),this.bindMediaEvents()}),this.on(l.a.LOAD_VIDEO,function(){this.teardown()})}),this.after("teardown",function(){x.log("Torn down"),this.currentSource&&(this._unbindSourceEvents(),this.currentSource.destroy(),this.currentSource=null)})}r.r(t);var s=r("XE2b"),l=r("znKg"),u=r("LwNu"),h=r("l/t8"),c=r("0oA5"),d=r("hHG0"),f=r("Zrx9"),v=r("i/kS"),g=r("6xEa"),p=r.n(g),m=function(){function e(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o=e[Symbol.iterator](),s;!(a=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(l){n=!0,i=l}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),y=f.default.get("Hls"),L="start",b="current",S="replay",_="recover",A=null,C=function(e){function t(e,r,i){a(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return A=i,o.hlsVersion=A.version||"stable",o.videoTag=e,o.resource=r,o.boundListeners=null,o.hls=null,o.manifestData=null,o.hashParams=null,o.mseAttached=!1,o.disableLevelCapping=!1,o.startLoad=!1,o.cumDownload=0,o.cumLatency=0,o.cumMux=0,o.cumBuffer=0,o.fragNb=0,o.fragDetailsNb=0,o.logArray=[],o.logMsg=null,o.resetStats(),o.logForwarder={log:function(e){this.appendMsg("log",e)}.bind(o),warn:function(e){this.appendMsg("warn",e)}.bind(o),error:function(e){this.appendMsg("error",e)}.bind(o),debug:function e(t){y.debug(t)},info:function e(t){y.info(t)}},o.hlsConfig={abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,autoStartLoad:!1,debug:o.logForwarder,fragLoadingMaxRetry:2,fragLoadingTimeOut:2e4,highBufferWatchdogPeriod:4,levelLoadingMaxRetry:2,levelLoadingTimeOut:15e3,liveSyncDuration:24,manifestLoadingMaxRetry:2,manifestLoadingTimeOut:3e4,maxLoadingDelay:4,maxMaxBufferLength:30,maxStarvationDelay:4,maxSeekHole:4,nudgeMaxRetry:2,nudgeOffset:.3,startFragPrefetch:"recorded"===v.a.metadata("stream_type")},o}return i(t,e),E(t,null,[{key:"createNew",value:function e(r,a,n){return new t(r,a,n)}}]),E(t,[{key:"appendMsg",value:function e(t,r){if(r){if(!this.logMsg){var a=this.logArray,n=this.stats.maxLogs||100,i=performance.now(),o=this.t0=this.t0||i,s=Math.round(i-o);a.length>=n&&a.shift(),a.push(s+","+t+": "+r)}y[t](r)}}},{key:"waitForManifest",value:function e(){var t=this;return new Promise(function(e,r){if(t.hls||(y.log("create hls.js ("+t.hlsVersion+")"),t.hls=new A(t.hlsConfig),t.bindListeners()),t.manifestData)e(t);else{var a=function e(a,i){i.fatal&&(y.error("catch fatal error at startup",i),t.hls.off(A.Events.ERROR,e),t.hls.off(A.Events.MANIFEST_PARSED,n),r(i))},n=function r(n,i){d.i.saveEnd(d.f),y.log("succeed to parse manifest",i),t.hls.off(A.Events.ERROR,a),t.hls.off(A.Events.MANIFEST_PARSED,r),t.manifestData=i;var o=i.levels[i.firstLevel];t.parseHashParams(o.url[o.urlId]),e(t)};d.i.save(d.f),t.hls.on(A.Events.ERROR,a),t.hls.on(A.Events.MANIFEST_PARSED,n),t.hls.loadSource(t.resource.url)}})}},{key:"attachVideo",value:function e(){this.mseAttached||(y.log("Attach video to hls source"),this.hls.attachMedia(this.videoTag),this.mseAttached=!0,this.tvideo=performance.now())}},{key:"setLevel",value:function e(t,r,a){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.prefetch,s=void 0!==o&&o,l=i.heuristic,h=void 0!==l&&l;return s||this.attachVideo(),this.waitForManifest().then(function(){var e=n.hls,i=!s,o=!1;a===L?(r?(h&&(t=-1),y.log("set hls.startLevel="+t),e.startLevel=t,n.stats.startLevel=t):(y.log("set hls.loadLevel="+t),e.loadLevel=t),n.startLoad||(d.i.save(d.g),y.log("call hls.startLoad()"),e.startLoad(),n.computeAutoLevelCapping(),n.startLoad=!0)):a===b?r?(y.log("set hls.nextLevel=-1"),e.nextLevel=-1,o=!0):e.autoLevelEnabled&&e.currentLevel===t||u.m()?(y.log("set hls.nextLevel="+t),e.nextLevel=t,o=!0):(y.log("set hls.currentLevel="+t),e.currentLevel=t):(e.startLoad(a===S?0:-1),i=!1),i&&n.notifyLevelStateChange(n.hls.autoLevelEnabled,t),o&&n.notifyLevelStateChanged(n.hls.autoLevelEnabled,t)})}},{key:"getMaxLevelIndex",value:function e(){var t=Math.max(160,this.videoTag.clientWidth)*Math.max(120,this.videoTag.clientHeight),r=window.devicePixelRatio;null!=r&&(t*=r*r);var a=this.hls.levels||[],n=a.length;if(0===n)return-1;for(var i=0;i<n;i++){var o=a[i],s=o.width*o.height;if(s>=.85*t)break}var l=Math.min(i,n-1);return l}},{key:"notifyLevelStateChange",value:function e(t,r){this.trigger("level_state_change",{adaptive:t,levelIndex:r})}},{key:"notifyLevelStateChanged",value:function e(t,r){this.trigger("level_state_changed",{adaptive:t,levelIndex:r})}},{key:"computeAutoLevelCapping",value:function e(){if(this.hls&&this.videoTag&&!this.disableLevelCapping){var t=this.getMaxLevelIndex(),r=this.hls.autoLevelCapping;t!==r&&(y.log("new capping index:"+t),this.hls.autoLevelCapping=t,this.hls.autoLevelEnabled&&r>=0&&t>r&&(y.log("smooth switch up"),this.hls.nextLevel=-1))}}},{key:"detachVideo",value:function e(){y.log("Detach video from hls source");var t=this.hls;t&&null!==t.media&&t.detachMedia(),this.tvideo=void 0,this.mseAttached=!1}},{key:"onHlsError",value:function e(t,r){switch(r.details){case A.ErrorDetails.BUFFER_NUDGE_ON_STALL:var a=this.stats;a.nudgeNb=(a.nudgeNb||0)+1;break;case A.ErrorDetails.BUFFER_SEEK_OVER_HOLE:this.stats.maxBufferHole=this.stats.maxBufferHole>0?Math.max(this.stats.maxBufferHole,r.hole):r.hole;break;case A.ErrorDetails.INTERNAL_EXCEPTION:this.stats.exceptionNb++,this.stats.exception={event:r.event,stack:r.err.stack?JSON.stringify(r.err.stack).substr(0,1e3):r.err.message}}if(r.fatal){y.error("Received fatal HLS error:",t,r);var n=this.getHTTPStats(r);null!==n&&(this.stats.http=n),this.trigger("fatal_error",{error:r.type+r.details})}else y.warn("Received non-fatal HLS error:",t,r)}},{key:"getHTTPStats",value:function e(t){if(!t||!t.response)return null;var r={},a=t.response,n=t.frag||t.context;return a&&(r.code=parseInt(a.code||0),r.msg=(a.text||"").toLowerCase()),n&&(r.url=n.url||""),r}},{key:"onLevelLoaded",value:function e(t,r){d.i.hasSavedStart(d.g)&&d.i.saveEnd(d.g);var a=this.hls.config,n=this.hls.levels[r.level];n.details.live&&(this._liveEdgeDelay=a.liveSyncDuration>0?a.liveSyncDuration:a.liveSyncDurationCount*r.details.targetduration),n.urlId>0&&(this.stats.redundant=!0)}},{key:"onCurrentFragmentChanged",value:function e(t,r){this.notifyLevelStateChanged(this.hls.autoLevelEnabled,r.frag.level)}},{key:"onFragBuffered",value:function e(t,r){var a=this.stats,n=r.stats,i=n.tparsed,o=this.tvideo,s=o?Math.max(i,o):i,l=n.tload-n.trequest,u=n.tfirst-n.trequest,h=i-n.tload,c=n.tbuffered-s,d=l+h+c,f=a.minMs=a.minMs||{},v=a.maxMs=a.maxMs||{},g=this.cumDownload+=l,p=this.cumLatency+=u,m=this.cumMux+=h,E=this.cumBuffer+=c,y=g+m+E,L=++this.fragNb;a.HTTPDL+=n.loaded;var b=8*a.HTTPDL;this.appendFragDetails(r.frag,n),a.latency=Math.round(p/L),a.avgKbps={total:Math.round(b/y),dl:Math.round(b/g),mux:Math.round(b/m),buffer:Math.round(b/E)},a.avgMs={total:Math.round(y/L),dl:Math.round(g/L),mux:Math.round(m/L),buffer:Math.round(E/L)},d&&(f.total=Math.round(f.total?Math.min(f.total,d):d),v.total=Math.round(v.total?Math.max(v.total,d):d)),l&&(f.dl=Math.round(f.dl?Math.min(f.dl,l):l),v.dl=Math.round(v.dl?Math.max(v.dl,l):l)),h&&(f.mux=Math.round(f.mux?Math.min(f.mux,h):h),v.mux=Math.round(v.mux?Math.max(v.mux,h):h)),c&&(f.buffer=Math.round(f.buffer?Math.min(f.buffer,c):c),v.buffer=Math.round(v.buffer?Math.max(v.buffer,c):c))}},{key:"onFragLoadEmergencyAborted",value:function e(t,r){this.appendFragDetails(r.frag,r.stats),this.stats.emergencyNb++}},{key:"appendFragDetails",value:function e(t,r){if(this.fragDetailsNb<5){var a=this.videoTag,n=r.tparsed,i=this.tvideo,o=i?Math.max(n,i):n,s=r.tload-r.trequest,l=r.tfirst-r.trequest,u=r.loaded,h=n-r.tload,c=r.tbuffered-o,d=t.duration,f={start:Math.round(1e3*t.start),end:Math.round(1e3*(t.start+d)),l:t.level,pos:a?Math.round(1e3*a.currentTime):-1};l>0&&(f.lat=Math.round(l)),s>0&&(f.DLdur=Math.round(s)),u>0&&(f.len=u),u>0&&(f.kbps=Math.round(8*u/(s+h+c))),r.aborted&&(f.aborted=!0),h>0&&(f.mux=Math.round(h)),c>0&&(f.buffer=Math.round(c));var v=this.stats,g=v.frags=v.frags||{},p=g.minDuration;g.minDuration=p?Math.min(Math.round(d),p):Math.round(d),g["f"+this.fragDetailsNb]=f,this.fragDetailsNb++}}},{key:"recoverDecodingError",value:function e(){var t=this,r=!this.videoTag.paused;y.log("playing state before recovery:",r);var a=function e(){t.hls.off(A.Events.MEDIA_ATTACHED,e),t.hls.startLoad(),r&&(y.log("video was playing before recovery, relaunch playback"),t.videoTag.play())};this.hls.recoverMediaError(),this.hls.on(A.Events.MEDIA_ATTACHED,a)}},{key:"swapAudioCodec",value:function e(){this.hls.swapAudioCodec()}},{key:"bindListeners",value:function e(){null==this.boundListeners&&(this.boundListeners={onCurrentFragmentChanged:this.onCurrentFragmentChanged.bind(this),onFragBuffered:this.onFragBuffered.bind(this),onFragLoadEmergencyAborted:this.onFragLoadEmergencyAborted.bind(this),onHlsError:this.onHlsError.bind(this),onLevelLoaded:this.onLevelLoaded.bind(this)},this.hls.on(A.Events.FRAG_CHANGED,this.boundListeners.onCurrentFragmentChanged),this.hls.on(A.Events.FRAG_BUFFERED,this.boundListeners.onFragBuffered),this.hls.on(A.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.boundListeners.onFragLoadEmergencyAborted),this.hls.on(A.Events.ERROR,this.boundListeners.onHlsError),this.hls.on(A.Events.LEVEL_LOADED,this.boundListeners.onLevelLoaded))}},{key:"unbindListeners",value:function e(){null!=this.boundListeners&&(this.hls.off(A.Events.FRAG_CHANGED,this.boundListeners.onCurrentFragmentChanged),this.hls.off(A.Events.FRAG_BUFFERED,this.boundListeners.onFragBuffered),this.hls.off(A.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.boundListeners.onFragLoadEmergencyAborted),this.hls.off(A.Events.ERROR,this.boundListeners.onHlsError),this.hls.off(A.Events.LEVEL_LOADED,this.boundListeners.onLevelLoaded),this.boundListeners=null)}},{key:"streamCell",value:function e(){return this.getHashParam("cell")}},{key:"streamComment",value:function e(){return this.getHashParam("comment")}},{key:"getHashParam",value:function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.hashParams;if(a){var n=null!==r&&a[r]?a[r]:a;return n[t]?n[t]:null}return null}},{key:"parseHashParams",value:function e(t){if(!this.hashParams){var r=Object(h.d)(t),a=r.hash,n=void 0===a?null:a;if(n){var i=this.hashParams={},o=this.onHashParamParsed.bind(this),s=Object(h.c)(n,!0);for(var l in s){var u=l.split("_"),c=m(u,2),d=c[0],f=c[1],v=void 0===f?null:f;null===v?(i[l]=s[l],o(l,s[l])):(i[d]||(i[d]={}),i[d][v]=s[l],o(v,s[l],d))}y.log("Parsed hash-params:",i)}}}},{key:"onHashParamParsed",value:function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;switch(a){case"hls":this.updateHLSConfigParam(t,r,!0);break;case"ab":case"qos":this.stats[t]=r}}},{key:"updateHLSConfigParams",value:function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)for(var a in t){var n=t[a];this.updateHLSConfigParam(a,n,r)}}},{key:"updateHLSConfigParam",value:function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"==typeof r?y.log("update hlsjs config param: "+t+"=function(){}"):y.log("update hlsjs config param: "+t+"="+r);var n=this.hls?this.hls.config:this.hlsConfig;isNaN(r)||"boolean"==typeof r||(r=parseFloat(r)),n[t]=r,a&&(this.stats[t]=r)}},{key:"streamStats",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],a=t.verbose||!1;if(a&&(this.logMsg||(this.logMsg=p.a.compressToBase64(this.logArray.join("\n")),this.logArray=[]),this.stats.logs=this.logMsg),r){var n=this.hls;if(n&&n.autoLevelCapping>-1){var i=r.getQualityForLevel(n.autoLevelCapping),o=null!==i?i.height:0;o>0&&(this.stats.autoLevelCapping=o)}}return this.stats}},{key:"getLiveEdgeDelay",value:function e(){return this._liveEdgeDelay||0}},{key:"resetStats",value:function e(){this.stats={version:this.hlsVersion,HTTPDL:0,emergencyNb:0,exceptionNb:0,latency:0}}},{key:"destroy",value:function e(){y.log("Destroy hls source"),this.resetStats(),this.detachVideo(),this.unbindListeners();var t=this.hls;t&&(t.destroy(),this.hls=null),A=null,this.hlsVersion=null,this.manifestData=null,this.hashParams=null,this.hlsConfig=null,this.startLoad=!1}}]),t}(c.a),D=C,M=r("z/W+"),w=r("Bau3"),R=r("yTBV"),T=r("zC0q"),F=r("G1FZ"),x=f.default.get("DynamicQuality"),O=t.default=Object(R.component)(T.a,o)}}]);