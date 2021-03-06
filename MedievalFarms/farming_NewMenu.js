 var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!1;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=goog.dependencies_,f=0;d=b[f];f++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=true;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return typeof a!="undefined"&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"),
d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=true)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){goog.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in
d.visited)){d.visited[e]=true;if(e in d.requires)for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:
null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};goog.isDef=function(a){return a!==void 0};goog.isNull=function(a){return a===null};goog.isDefAndNotNull=function(a){return a!=null};goog.isArray=function(a){return goog.typeOf(a)=="array"};goog.isArrayLike=function(a){var b=goog.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};goog.isDateLike=function(a){return goog.isObject(a)&&typeof a.getFullYear=="function"};
goog.isString=function(a){return typeof a=="string"};goog.isBoolean=function(a){return typeof a=="boolean"};goog.isNumber=function(a){return typeof a=="number"};goog.isFunction=function(a){return goog.typeOf(a)=="function"};goog.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _et_ = 1;");if(typeof goog.global._et_!="undefined"){delete goog.global._et_;goog.evalWorksForGlobals_=true}else goog.evalWorksForGlobals_=false}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));
b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=false,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=true;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var lime={DirtyObject:function(){}};lime.DirtyObject.prototype.update=function(){};goog.math={};goog.math.Coordinate=function(a,b){this.x=goog.isDef(a)?a:0;this.y=goog.isDef(b)?b:0};goog.math.Coordinate.prototype.clone=function(){return new goog.math.Coordinate(this.x,this.y)};goog.DEBUG&&(goog.math.Coordinate.prototype.toString=function(){return"("+this.x+", "+this.y+")"});goog.math.Coordinate.equals=function(a,b){return a==b?true:!a||!b?false:a.x==b.x&&a.y==b.y};goog.math.Coordinate.distance=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
goog.math.Coordinate.squaredDistance=function(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d};goog.math.Coordinate.difference=function(a,b){return new goog.math.Coordinate(a.x-b.x,a.y-b.y)};goog.math.Coordinate.sum=function(a,b){return new goog.math.Coordinate(a.x+b.x,a.y+b.y)};goog.math.Box=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};goog.math.Box.boundingBox=function(a){for(var b=new goog.math.Box(arguments[0].y,arguments[0].x,arguments[0].y,arguments[0].x),c=1;c<arguments.length;c++){var d=arguments[c];b.top=Math.min(b.top,d.y);b.right=Math.max(b.right,d.x);b.bottom=Math.max(b.bottom,d.y);b.left=Math.min(b.left,d.x)}return b};goog.math.Box.prototype.clone=function(){return new goog.math.Box(this.top,this.right,this.bottom,this.left)};
goog.DEBUG&&(goog.math.Box.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"});goog.math.Box.prototype.contains=function(a){return goog.math.Box.contains(this,a)};goog.math.Box.prototype.expand=function(a,b,c,d){if(goog.isObject(a)){this.top=this.top-a.top;this.right=this.right+a.right;this.bottom=this.bottom+a.bottom;this.left=this.left-a.left}else{this.top=this.top-a;this.right=this.right+b;this.bottom=this.bottom+c;this.left=this.left-d}return this};
goog.math.Box.prototype.expandToInclude=function(a){this.left=Math.min(this.left,a.left);this.top=Math.min(this.top,a.top);this.right=Math.max(this.right,a.right);this.bottom=Math.max(this.bottom,a.bottom)};goog.math.Box.equals=function(a,b){return a==b?true:!a||!b?false:a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left};
goog.math.Box.contains=function(a,b){return!a||!b?false:b instanceof goog.math.Box?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom};goog.math.Box.relativePositionX=function(a,b){return b.x<a.left?b.x-a.left:b.x>a.right?b.x-a.right:0};goog.math.Box.relativePositionY=function(a,b){return b.y<a.top?b.y-a.top:b.y>a.bottom?b.y-a.bottom:0};
goog.math.Box.distance=function(a,b){var c=goog.math.Box.relativePositionX(a,b),d=goog.math.Box.relativePositionY(a,b);return Math.sqrt(c*c+d*d)};goog.math.Box.intersects=function(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom};goog.math.Box.intersectsWithPadding=function(a,b,c){return a.left<=b.right+c&&b.left<=a.right+c&&a.top<=b.bottom+c&&b.top<=a.bottom+c};goog.math.Size=function(a,b){this.width=a;this.height=b};goog.math.Size.equals=function(a,b){return a==b?!0:!a||!b?!1:a.width==b.width&&a.height==b.height};goog.math.Size.prototype.clone=function(){return new goog.math.Size(this.width,this.height)};goog.DEBUG&&(goog.math.Size.prototype.toString=function(){return"("+this.width+" x "+this.height+")"});goog.math.Size.prototype.getLongest=function(){return Math.max(this.width,this.height)};
goog.math.Size.prototype.getShortest=function(){return Math.min(this.width,this.height)};goog.math.Size.prototype.area=function(){return this.width*this.height};goog.math.Size.prototype.perimeter=function(){return(this.width+this.height)*2};goog.math.Size.prototype.aspectRatio=function(){return this.width/this.height};goog.math.Size.prototype.isEmpty=function(){return!this.area()};goog.math.Size.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
goog.math.Size.prototype.fitsInside=function(a){return this.width<=a.width&&this.height<=a.height};goog.math.Size.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};goog.math.Size.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};goog.math.Size.prototype.scale=function(a){this.width=this.width*a;this.height=this.height*a;return this};
goog.math.Size.prototype.scaleToFit=function(a){return this.scale(this.aspectRatio()>a.aspectRatio()?a.width/this.width:a.height/this.height)};goog.math.Box.size={};goog.math.Size.scaleVec2={};goog.math.Box.prototype.size=function(){return new goog.math.Size(this.right-this.left,this.bottom-this.top)};goog.math.Size.prototype.scaleVec2=function(a){this.width*=a.x;this.height*=a.y;return this};lime.Renderer=function(){};lime.Renderer.prototype.draw=goog.nullFunction;lime.Renderer.prototype.getType=function(){return this.base?this.base:this};lime.Renderer.prototype.makeSubRenderer=function(a){goog.object.extend(a,this);a.base=this.getType();return a};lime.Renderer.CANVAS=new lime.Renderer;lime.Renderer.CANVAS.updateLayout=function(){};
lime.Renderer.CANVAS.drawCanvas=function(){var a=this.getQuality(),b=this.measureContents(),c=this.relativeQuality_||1,d=c/a,e;if(this.domElement){this.boundsCache&&this.boundsCache.contains(b)&&(e=this.boundsCache.size().area()/b.size().area())&&1.6>e&&0.5<e?b=this.boundsCache:1!=this.staticCanvas&&0!=this.children_.length&&(this instanceof lime.Scene||b.expand(12,12,12,12));this.boundsCache=b;var f=b.size();e=f.clone().scale(c).ceil();if(this.domElement.width!=e.width||this.domElement.height!=e.height)this.domElement.width=
e.width,this.domElement.height=e.height,this.redraw_=1;var g=this.getScale().clone();this.transitionsActive_[lime.Transition.SCALE]&&(g=this.transitionsActive_[lime.Transition.SCALE]);0!=e.width?g.scale(f.width*d/e.width):g.scale(1/a);a=this.getFrame();this.ax=(a.left-b.left)*c;this.ay=(a.top-b.top)*c;b=this.getSize().clone().scaleVec2(this.getAnchorPoint()).scale(c);c=this.getPosition().clone();this.transitionsActive_[lime.Transition.POSITION]&&(c=this.transitionsActive_[lime.Transition.POSITION]);
c.x*=d;c.y*=d;c.x-=b.width+this.ax;c.y-=b.height+this.ay;lime.style.setTransformOrigin(this.domElement,100*((this.ax+b.width)/e.width),100*((this.ay+b.height)/e.height),!0);!this.transitionsActiveSet_[lime.Transition.POSITION]&&(!this.transitionsActiveSet_[lime.Transition.SCALE]&&!this.transitionsActiveSet_[lime.Transition.ROTATION])&&(d=-this.getRotation(),goog.isDef(this.transitionsActive_[lime.Transition.ROTATION])&&(d=-this.transitionsActive_[lime.Transition.ROTATION]),lime.style.setTransform(this.domElement,
(new lime.style.Transform).setPrecision(0.1).translate(c.x,c.y).scale(g.x,g.y).rotate(d)));this.redraw_&&(d=this.domElement.getContext("2d"),c=this.relativeQuality_||1,d.clearRect(0,0,e.width,e.height),d.save(),d.translate(this.ax,this.ay),d.scale(c,c),e=this.getSize(),g=this.getAnchorPoint(),d.translate(e.width*g.x,e.height*g.y),this.renderer.drawCanvasObject.call(this,d),d.restore(),this.redraw_=0)}};lime.Renderer.CANVAS.update=function(){};
lime.Renderer.CANVAS.drawCanvasObject=function(a){if(this.inTree_&&(this.mask_!=this.activeMask_&&(this.activeMask_&&lime.Renderer.DOM.removeMask.call(this),this.mask_&&lime.Renderer.DOM.addMask.call(this)),!this.maskTarget_&&!this.hidden_&&!(0==this.opacity_||1==this.isMask))){1!=this.opacity_&&(a.globalAlpha*=this.opacity_);if(this.mask_){lime.Renderer.DOM.calculateMaskPosition.call(this.mask_);var b=this.activeMask_,c=this.scale_;a.save();a.save();a.translate(b.mPos.x,b.mPos.y);a.rotate(-b.mRot);
this.needsDomElement&&a.rotate(this.getRotation()*Math.PI/180);a.beginPath();a.moveTo(0,0);a.lineTo(b.mWidth/c.x,0);a.lineTo(b.mWidth/c.x,b.mHeight/c.y);a.lineTo(0,b.mHeight/c.y);a.closePath();a.restore();a.clip()}b=new goog.math.Coordinate(0,0);this.renderer.draw.call(this,a);for(var d=0,e;e=this.children_[d];d++){var f=e.localToParent(b).clone(),g=e.getRotation(),c=e.getScale();a.save();a.translate(f.x,f.y);a.scale(c.x,c.y);0!=g&&a.rotate(-g*Math.PI/180);this.renderer.drawCanvasObject.call(e,a);
a.restore()}1!=this.opacity_&&(a.globalAlpha/=this.opacity_);this.activeMask_&&a.restore()}};goog.debug={};goog.debug.Error=function(a){Error.captureStackTrace?Error.captureStackTrace(this,goog.debug.Error):this.stack=Error().stack||"";a&&(this.message=""+a)};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.string={};goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.subs=function(a,b){for(var c=1;c<arguments.length;c++)var d=(""+arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptySafe=function(a){return goog.string.isEmpty(goog.string.makeSafe(a))};goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};
goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};
goog.string.caseInsensitiveCompare=function(a,b){var c=(""+a).toLowerCase(),d=(""+b).toLowerCase();return c<d?-1:c==d?0:1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var c=a.toLowerCase().match(goog.string.numerateCompareRegExp_),d=b.toLowerCase().match(goog.string.numerateCompareRegExp_),e=Math.min(c.length,d.length),f=0;f<e;f++){var g=c[f],h=d[f];if(g!=h)return c=parseInt(g,10),!isNaN(c)&&(d=parseInt(h,10),!isNaN(d)&&c-d)?c-d:g<h?-1:1}return c.length!=d.length?c.length-d.length:a<b?-1:1};goog.string.urlEncode=function(a){return encodeURIComponent(""+a)};
goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)return a.replace(goog.string.amperRe_,"&amp;").replace(goog.string.ltRe_,"&lt;").replace(goog.string.gtRe_,"&gt;").replace(goog.string.quotRe_,"&quot;");if(!goog.string.allRe_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.amperRe_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.ltRe_,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.gtRe_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.quotRe_,"&quot;"));return a};
goog.string.amperRe_=/&/g;goog.string.ltRe_=/</g;goog.string.gtRe_=/>/g;goog.string.quotRe_=/\"/g;goog.string.allRe_=/[&<>\"]/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesUsingDom_=function(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c=document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d,a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=""+a;if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.toMap=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=!0;return b};
goog.string.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&(b<a.length&&0<c)&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};goog.string.removeAll=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};
goog.string.regExpEscape=function(a){return(""+a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):""+a;c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":""+a};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};
goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(""+a).split("."),e=goog.string.trim(""+b).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",i=e[g]||"",j=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var k=j.exec(h)||["","",""],m=l.exec(i)||["","",""];if(0==k[0].length&&0==m[0].length)break;var c=0==k[1].length?0:parseInt(k[1],10),n=0==m[1].length?0:parseInt(m[1],10),c=goog.string.compareElements_(c,n)||goog.string.compareElements_(0==
k[2].length,0==m[2].length)||goog.string.compareElements_(k[2],m[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=goog.string.HASHCODE_MAX_;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmpty(a)?NaN:b};goog.string.toCamelCase=function(a){return(""+a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return(""+a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new goog.asserts.AssertionError(""+e,f||[]);};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.fail=function(a,b){if(goog.asserts.ENABLE_ASSERTS)throw new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};
goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){goog.asserts.ENABLE_ASSERTS&&!(a instanceof b)&&goog.asserts.doAssertFailure_("instanceof check failed.",null,c,Array.prototype.slice.call(arguments,3))};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=!0;goog.array.peek=function(a){return a[a.length-1]};goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.indexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return!goog.isString(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.lastIndexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return!goog.isString(b)||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.forEach?function(a,b,c){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.filter?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var i=g[h];b.call(c,i,h,a)&&(e[f++]=i)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.map?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};goog.array.reduce=function(a,b,c,d){if(a.reduce)return d?a.reduce(goog.bind(b,d),c):a.reduce(b,c);var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=function(a,b,c,d){if(a.reduceRight)return d?a.reduceRight(goog.bind(b,d),c):a.reduceRight(b,c);var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.some?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.every?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};
goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};
goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};
goog.array.concat=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(goog.isArray(d)||(e=goog.isArrayLike(d))&&d.hasOwnProperty("callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}};goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.splice.apply(a,goog.array.slice(arguments,1))};
goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?goog.array.ARRAY_PROTOTYPE_.slice.call(a,b):goog.array.ARRAY_PROTOTYPE_.slice.call(a,b,c)};goog.array.removeDuplicates=function(a,b){for(var c=b||a,d={},e=0,f=0;f<a.length;){var g=a[f++],h=goog.isObject(g)?"o"+goog.getUid(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=g)}c.length=e};
goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var i=f+g>>1,j;j=c?b.call(e,a[i],i,a):b(d,a[i]);0<j?f=i+1:(g=i,h=!j)}return h?f:~f};goog.array.sort=function(a,b){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.sort.call(a,b||goog.array.defaultCompare)};
goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};goog.array.sortObjectsByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(a[b],c[b])})};
goog.array.isSorted=function(a,b,c){for(var b=b||goog.array.defaultCompare,d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;for(var d=a.length,c=c||goog.array.defaultCompareEquality,e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare=function(a,b,c){return goog.array.equals(a,b,c)};
goog.array.compare3=function(a,b,c){for(var c=c||goog.array.defaultCompare,d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};
goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};goog.array.bucket=function(a,b){for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e,d,a);goog.isDef(f)&&(c[f]||(c[f]=[])).push(e)}return c};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];goog.isArray(d)?b.push.apply(b,goog.array.flatten.apply(null,d)):b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?goog.array.ARRAY_PROTOTYPE_.unshift.apply(a,a.splice(-b,b)):0>b&&goog.array.ARRAY_PROTOTYPE_.push.apply(a,a.splice(0,-b)));return a};goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};
goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.math.randomInt=function(a){return Math.floor(Math.random()*a)};goog.math.uniformRandom=function(a,b){return a+Math.random()*(b-a)};goog.math.clamp=function(a,b,c){return Math.min(Math.max(a,b),c)};goog.math.modulo=function(a,b){var c=a%b;return 0>c*b?c+b:c};goog.math.lerp=function(a,b,c){return a+c*(b-a)};goog.math.nearlyEquals=function(a,b,c){return Math.abs(a-b)<=(c||1.0E-6)};goog.math.standardAngle=function(a){return goog.math.modulo(a,360)};
goog.math.toRadians=function(a){return a*Math.PI/180};goog.math.toDegrees=function(a){return 180*a/Math.PI};goog.math.angleDx=function(a,b){return b*Math.cos(goog.math.toRadians(a))};goog.math.angleDy=function(a,b){return b*Math.sin(goog.math.toRadians(a))};goog.math.angle=function(a,b,c,d){return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(d-b,c-a)))};goog.math.angleDifference=function(a,b){var c=goog.math.standardAngle(b)-goog.math.standardAngle(a);180<c?c-=360:-180>=c&&(c=360+c);return c};
goog.math.sign=function(a){return 0==a?0:0>a?-1:1};goog.math.longestCommonSubsequence=function(a,b,c,d){for(var c=c||function(a,b){return a==b},d=d||function(b){return a[b]},e=a.length,f=b.length,g=[],h=0;h<e+1;h++)g[h]=[],g[h][0]=0;for(var i=0;i<f+1;i++)g[0][i]=0;for(h=1;h<=e;h++)for(i=1;i<=e;i++)g[h][i]=c(a[h-1],b[i-1])?g[h-1][i-1]+1:Math.max(g[h-1][i],g[h][i-1]);for(var j=[],h=e,i=f;0<h&&0<i;)c(a[h-1],b[i-1])?(j.unshift(d(h-1,i-1)),h--,i--):g[h-1][i]>g[h][i-1]?h--:i--;return j};
goog.math.sum=function(a){return goog.array.reduce(arguments,function(a,c){return a+c},0)};goog.math.average=function(a){return goog.math.sum.apply(null,arguments)/arguments.length};goog.math.standardDeviation=function(a){var b=arguments.length;if(2>b)return 0;var c=goog.math.average.apply(null,arguments),b=goog.math.sum.apply(null,goog.array.map(arguments,function(a){return Math.pow(a-c,2)}))/(b-1);return Math.sqrt(b)};goog.math.isInt=function(a){return isFinite(a)&&0==a%1};
goog.math.isFiniteNumber=function(a){return isFinite(a)&&!isNaN(a)};goog.math.Vec2=function(a,b){this.x=a;this.y=b};goog.inherits(goog.math.Vec2,goog.math.Coordinate);goog.math.Vec2.randomUnit=function(){var a=2*Math.random()*Math.PI;return new goog.math.Vec2(Math.cos(a),Math.sin(a))};goog.math.Vec2.random=function(){var a=Math.sqrt(Math.random()),b=2*Math.random()*Math.PI;return new goog.math.Vec2(Math.cos(b)*a,Math.sin(b)*a)};goog.math.Vec2.fromCoordinate=function(a){return new goog.math.Vec2(a.x,a.y)};
goog.math.Vec2.prototype.clone=function(){return new goog.math.Vec2(this.x,this.y)};goog.math.Vec2.prototype.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};goog.math.Vec2.prototype.squaredMagnitude=function(){return this.x*this.x+this.y*this.y};goog.math.Vec2.prototype.scale=function(a){this.x*=a;this.y*=a;return this};goog.math.Vec2.prototype.invert=function(){this.x=-this.x;this.y=-this.y;return this};goog.math.Vec2.prototype.normalize=function(){return this.scale(1/this.magnitude())};
goog.math.Vec2.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};goog.math.Vec2.prototype.subtract=function(a){this.x-=a.x;this.y-=a.y;return this};goog.math.Vec2.prototype.rotate=function(a){var b=Math.cos(a),a=Math.sin(a),c=this.y*b+this.x*a;this.x=this.x*b-this.y*a;this.y=c;return this};goog.math.Vec2.rotateAroundPoint=function(a,b,c){return a.clone().subtract(b).rotate(c).add(b)};goog.math.Vec2.prototype.equals=function(a){return this==a||!!a&&this.x==a.x&&this.y==a.y};
goog.math.Vec2.distance=goog.math.Coordinate.distance;goog.math.Vec2.squaredDistance=goog.math.Coordinate.squaredDistance;goog.math.Vec2.equals=goog.math.Coordinate.equals;goog.math.Vec2.sum=function(a,b){return new goog.math.Vec2(a.x+b.x,a.y+b.y)};goog.math.Vec2.difference=function(a,b){return new goog.math.Vec2(a.x-b.x,a.y-b.y)};goog.math.Vec2.dot=function(a,b){return a.x*b.x+a.y*b.y};
goog.math.Vec2.lerp=function(a,b,c){return new goog.math.Vec2(goog.math.lerp(a.x,b.x,c),goog.math.lerp(a.y,b.y,c))};goog.debug.errorHandlerWeakDep={protectEntryPoint:function(a){return a}};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString=function(){return goog.global.navigator?goog.global.navigator.userAgent:null};goog.userAgent.getNavigator=function(){return goog.global.navigator};
goog.userAgent.init_=function(){goog.userAgent.detectedOpera_=!1;goog.userAgent.detectedIe_=!1;goog.userAgent.detectedWebkit_=!1;goog.userAgent.detectedMobile_=!1;goog.userAgent.detectedGecko_=!1;var a;if(!goog.userAgent.BROWSER_KNOWN_&&(a=goog.userAgent.getUserAgentString())){var b=goog.userAgent.getNavigator();goog.userAgent.detectedOpera_=0==a.indexOf("Opera");goog.userAgent.detectedIe_=!goog.userAgent.detectedOpera_&&-1!=a.indexOf("MSIE");goog.userAgent.detectedWebkit_=!goog.userAgent.detectedOpera_&&
-1!=a.indexOf("WebKit");goog.userAgent.detectedMobile_=goog.userAgent.detectedWebkit_&&-1!=a.indexOf("Mobile");goog.userAgent.detectedGecko_=!goog.userAgent.detectedOpera_&&!goog.userAgent.detectedWebkit_&&"Gecko"==b.product}};goog.userAgent.BROWSER_KNOWN_||goog.userAgent.init_();goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.userAgent.detectedOpera_;goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.userAgent.detectedIe_;
goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.userAgent.detectedGecko_;goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.userAgent.detectedWebkit_;goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.detectedMobile_;goog.userAgent.SAFARI=goog.userAgent.WEBKIT;goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigator();return a&&a.platform||""};
goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_=function(){goog.userAgent.detectedMac_=goog.string.contains(goog.userAgent.PLATFORM,"Mac");goog.userAgent.detectedWindows_=goog.string.contains(goog.userAgent.PLATFORM,"Win");goog.userAgent.detectedLinux_=goog.string.contains(goog.userAgent.PLATFORM,"Linux");goog.userAgent.detectedX11_=!!goog.userAgent.getNavigator()&&goog.string.contains(goog.userAgent.getNavigator().appVersion||"","X11")};goog.userAgent.PLATFORM_KNOWN_||goog.userAgent.initPlatform_();
goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.userAgent.detectedMac_;goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.userAgent.detectedWindows_;goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.detectedLinux_;goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_=function(){var a="",b;goog.userAgent.OPERA&&goog.global.opera?(a=goog.global.opera.version,a="function"==typeof a?a():a):(goog.userAgent.GECKO?b=/rv\:([^\);]+)(\)|;)/:goog.userAgent.IE?b=/MSIE\s+([^\);]+)(\)|;)/:goog.userAgent.WEBKIT&&(b=/WebKit\/(\S+)/),b&&(a=(a=b.exec(goog.userAgent.getUserAgentString()))?a[1]:""));return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),b>parseFloat(a))?""+b:a};
goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionCache_={};goog.userAgent.isVersion=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.userAgent.isVersionCache_[a]||(goog.userAgent.isVersionCache_[a]=0<=goog.string.compareVersions(goog.userAgent.VERSION,a))};
goog.userAgent.isDocumentModeCache_={};goog.userAgent.isDocumentMode=function(a){return goog.userAgent.isDocumentModeCache_[a]||(goog.userAgent.isDocumentModeCache_[a]=goog.userAgent.IE&&!!document.documentMode&&document.documentMode>=a)};goog.events={};goog.events.Listener=function(){};goog.events.Listener.counter_=0;goog.events.Listener.prototype.key=0;goog.events.Listener.prototype.removed=!1;goog.events.Listener.prototype.callOnce=!1;
goog.events.Listener.prototype.init=function(a,b,c,d,e,f){if(goog.isFunction(a))this.isFunctionListener_=!0;else if(a&&a.handleEvent&&goog.isFunction(a.handleEvent))this.isFunctionListener_=!1;else throw Error("Invalid listener argument");this.listener=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!e;this.handler=f;this.callOnce=!1;this.key=++goog.events.Listener.counter_;this.removed=!1};
goog.events.Listener.prototype.handleEvent=function(a){return this.isFunctionListener_?this.listener.call(this.handler||this.src,a):this.listener.handleEvent.call(this.listener,a)};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&!(a=a[d[c]],!goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};
goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};goog.events.BrowserFeature={HAS_W3C_BUTTON:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE&&!goog.userAgent.isVersion("8"),HAS_NAVIGATOR_ONLINE_PROPERTY:!goog.userAgent.WEBKIT||goog.userAgent.isVersion("528"),HAS_HTML5_NETWORK_EVENT_SUPPORT:goog.userAgent.GECKO&&goog.userAgent.isVersion("1.9b")||goog.userAgent.IE&&goog.userAgent.isVersion("8")||goog.userAgent.OPERA&&goog.userAgent.isVersion("9.5")||
goog.userAgent.WEBKIT&&goog.userAgent.isVersion("528"),HTML5_NETWORK_EVENTS_FIRE_ON_BODY:goog.userAgent.GECKO&&!goog.userAgent.isVersion("8")||goog.userAgent.IE&&!goog.userAgent.isVersion("9")};goog.debug.entryPointRegistry={};goog.debug.EntryPointMonitor=function(){};goog.debug.entryPointRegistry.refList_=[];goog.debug.entryPointRegistry.monitors_=[];goog.debug.entryPointRegistry.monitorsMayExist_=!1;goog.debug.entryPointRegistry.register=function(a){goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length]=a;if(goog.debug.entryPointRegistry.monitorsMayExist_)for(var b=goog.debug.entryPointRegistry.monitors_,c=0;c<b.length;c++)a(goog.bind(b[c].wrap,b[c]))};
goog.debug.entryPointRegistry.monitorAll=function(a){goog.debug.entryPointRegistry.monitorsMayExist_=!0;for(var b=goog.bind(a.wrap,a),c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](b);goog.debug.entryPointRegistry.monitors_.push(a)};
goog.debug.entryPointRegistry.unmonitorAllIfPossible=function(a){var b=goog.debug.entryPointRegistry.monitors_;goog.asserts.assert(a==b[b.length-1],"Only the most recent monitor can be unwrapped.");for(var a=goog.bind(a.unwrap,a),c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](a);b.length--};goog.events.EventWrapper=function(){};goog.events.EventWrapper.prototype.listen=function(){};goog.events.EventWrapper.prototype.unlisten=function(){};goog.events.EventType={CLICK:"click",DBLCLICK:"dblclick",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",SELECTSTART:"selectstart",KEYPRESS:"keypress",KEYDOWN:"keydown",KEYUP:"keyup",BLUR:"blur",FOCUS:"focus",DEACTIVATE:"deactivate",FOCUSIN:goog.userAgent.IE?"focusin":"DOMFocusIn",FOCUSOUT:goog.userAgent.IE?"focusout":"DOMFocusOut",CHANGE:"change",SELECT:"select",SUBMIT:"submit",INPUT:"input",PROPERTYCHANGE:"propertychange",DRAGSTART:"dragstart",
DRAGENTER:"dragenter",DRAGOVER:"dragover",DRAGLEAVE:"dragleave",DROP:"drop",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",TOUCHCANCEL:"touchcancel",CONTEXTMENU:"contextmenu",ERROR:"error",HELP:"help",LOAD:"load",LOSECAPTURE:"losecapture",READYSTATECHANGE:"readystatechange",RESIZE:"resize",SCROLL:"scroll",UNLOAD:"unload",HASHCHANGE:"hashchange",PAGEHIDE:"pagehide",PAGESHOW:"pageshow",POPSTATE:"popstate",COPY:"copy",PASTE:"paste",CUT:"cut",BEFORECOPY:"beforecopy",BEFORECUT:"beforecut",
BEFOREPASTE:"beforepaste",ONLINE:"online",OFFLINE:"offline",MESSAGE:"message",CONNECT:"connect",TRANSITIONEND:goog.userAgent.WEBKIT?"webkitTransitionEnd":goog.userAgent.OPERA?"oTransitionEnd":"transitionend"};goog.disposable={};goog.disposable.IDisposable=function(){};goog.Disposable=function(){goog.Disposable.ENABLE_MONITORING&&(this.creationStack=Error().stack,goog.Disposable.instances_[goog.getUid(this)]=this)};goog.Disposable.ENABLE_MONITORING=!1;goog.Disposable.instances_={};goog.Disposable.getUndisposedObjects=function(){var a=[],b;for(b in goog.Disposable.instances_)goog.Disposable.instances_.hasOwnProperty(b)&&a.push(goog.Disposable.instances_[Number(b)]);return a};goog.Disposable.clearUndisposedObjects=function(){goog.Disposable.instances_={}};
goog.Disposable.prototype.disposed_=!1;goog.Disposable.prototype.isDisposed=function(){return this.disposed_};goog.Disposable.prototype.getDisposed=goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose=function(){if(!this.disposed_&&(this.disposed_=!0,this.disposeInternal(),goog.Disposable.ENABLE_MONITORING)){var a=goog.getUid(this);if(!goog.Disposable.instances_.hasOwnProperty(a))throw Error(this+" did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");delete goog.Disposable.instances_[a]}};goog.Disposable.prototype.registerDisposable=function(a){this.dependentDisposables_||(this.dependentDisposables_=[]);this.dependentDisposables_.push(a)};
goog.Disposable.prototype.disposeInternal=function(){this.dependentDisposables_&&goog.disposeAll.apply(null,this.dependentDisposables_)};goog.dispose=function(a){a&&"function"==typeof a.dispose&&a.dispose()};goog.disposeAll=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];goog.isArrayLike(d)?goog.disposeAll.apply(null,d):goog.dispose(d)}};goog.events.Event=function(a,b){goog.Disposable.call(this);this.type=a;this.currentTarget=this.target=b};goog.inherits(goog.events.Event,goog.Disposable);goog.events.Event.prototype.disposeInternal=function(){delete this.type;delete this.target;delete this.currentTarget};goog.events.Event.prototype.propagationStopped_=!1;goog.events.Event.prototype.defaultPrevented=!1;goog.events.Event.prototype.returnValue_=!0;goog.events.Event.prototype.stopPropagation=function(){this.propagationStopped_=!0};
goog.events.Event.prototype.preventDefault=function(){this.defaultPrevented=!0;this.returnValue_=!1};goog.events.Event.stopPropagation=function(a){a.stopPropagation()};goog.events.Event.preventDefault=function(a){a.preventDefault()};goog.reflect={};goog.reflect.object=function(a,b){return b};goog.reflect.sinkValue=function(a){goog.reflect.sinkValue[" "](a);return a};goog.reflect.sinkValue[" "]=goog.nullFunction;goog.reflect.canAccessProperty=function(a,b){try{return goog.reflect.sinkValue(a[b]),!0}catch(c){}return!1};goog.events.BrowserEvent=function(a,b){a&&this.init(a,b)};goog.inherits(goog.events.BrowserEvent,goog.events.Event);goog.events.BrowserEvent.MouseButton={LEFT:0,MIDDLE:1,RIGHT:2};goog.events.BrowserEvent.IEButtonMap=[1,4,2];goog.events.BrowserEvent.prototype.target=null;goog.events.BrowserEvent.prototype.relatedTarget=null;goog.events.BrowserEvent.prototype.offsetX=0;goog.events.BrowserEvent.prototype.offsetY=0;goog.events.BrowserEvent.prototype.clientX=0;
goog.events.BrowserEvent.prototype.clientY=0;goog.events.BrowserEvent.prototype.screenX=0;goog.events.BrowserEvent.prototype.screenY=0;goog.events.BrowserEvent.prototype.button=0;goog.events.BrowserEvent.prototype.keyCode=0;goog.events.BrowserEvent.prototype.charCode=0;goog.events.BrowserEvent.prototype.ctrlKey=!1;goog.events.BrowserEvent.prototype.altKey=!1;goog.events.BrowserEvent.prototype.shiftKey=!1;goog.events.BrowserEvent.prototype.metaKey=!1;
goog.events.BrowserEvent.prototype.platformModifierKey=!1;goog.events.BrowserEvent.prototype.event_=null;
goog.events.BrowserEvent.prototype.init=function(a,b){var c=this.type=a.type;goog.events.Event.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;d?goog.userAgent.GECKO&&(goog.reflect.canAccessProperty(d,"nodeName")||(d=null)):c==goog.events.EventType.MOUSEOVER?d=a.fromElement:c==goog.events.EventType.MOUSEOUT&&(d=a.toElement);this.relatedTarget=d;this.offsetX=goog.userAgent.WEBKIT||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=goog.userAgent.WEBKIT||void 0!==
a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.platformModifierKey=goog.userAgent.MAC?a.metaKey:a.ctrlKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault();
delete this.propagationStopped_};goog.events.BrowserEvent.prototype.isButton=function(a){return goog.events.BrowserFeature.HAS_W3C_BUTTON?this.event_.button==a:"click"==this.type?a==goog.events.BrowserEvent.MouseButton.LEFT:!!(this.event_.button&goog.events.BrowserEvent.IEButtonMap[a])};goog.events.BrowserEvent.prototype.isMouseActionButton=function(){return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT)&&!(goog.userAgent.WEBKIT&&goog.userAgent.MAC&&this.ctrlKey)};
goog.events.BrowserEvent.prototype.stopPropagation=function(){goog.events.BrowserEvent.superClass_.stopPropagation.call(this);this.event_.stopPropagation?this.event_.stopPropagation():this.event_.cancelBubble=!0};
goog.events.BrowserEvent.prototype.preventDefault=function(){goog.events.BrowserEvent.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};goog.events.BrowserEvent.prototype.getBrowserEvent=function(){return this.event_};
goog.events.BrowserEvent.prototype.disposeInternal=function(){goog.events.BrowserEvent.superClass_.disposeInternal.call(this);this.relatedTarget=this.currentTarget=this.target=this.event_=null};goog.events.listeners_={};goog.events.listenerTree_={};goog.events.sources_={};goog.events.onString_="on";goog.events.onStringMap_={};goog.events.keySeparator_="_";
goog.events.listen=function(a,b,c,d,e){if(b){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.listen(a,b[f],c,d,e);return null}var d=!!d,g=goog.events.listenerTree_;b in g||(g[b]={count_:0,remaining_:0});g=g[b];d in g||(g[d]={count_:0,remaining_:0},g.count_++);var g=g[d],h=goog.getUid(a),i;g.remaining_++;if(g[h]){i=g[h];for(f=0;f<i.length;f++)if(g=i[f],g.listener==c&&g.handler==e){if(g.removed)break;return i[f].key}}else i=g[h]=[],g.count_++;f=goog.events.getProxy();f.src=a;g=new goog.events.Listener;
g.init(c,f,a,b,d,e);c=g.key;f.key=c;i.push(g);goog.events.listeners_[c]=g;goog.events.sources_[h]||(goog.events.sources_[h]=[]);goog.events.sources_[h].push(g);a.addEventListener?(a==goog.global||!a.customEvent_)&&a.addEventListener(b,f,d):a.attachEvent(goog.events.getOnString_(b),f);return c}throw Error("Invalid event type");};
goog.events.getProxy=function(){var a=goog.events.handleBrowserEvent_,b=goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b};goog.events.listenOnce=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.listenOnce(a,b[f],c,d,e);return null}a=goog.events.listen(a,b,c,d,e);goog.events.listeners_[a].callOnce=!0;return a};
goog.events.listenWithWrapper=function(a,b,c,d,e){b.listen(a,c,d,e)};goog.events.unlisten=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.unlisten(a,b[f],c,d,e);return null}d=!!d;a=goog.events.getListeners_(a,b,d);if(!a)return!1;for(f=0;f<a.length;f++)if(a[f].listener==c&&a[f].capture==d&&a[f].handler==e)return goog.events.unlistenByKey(a[f].key);return!1};
goog.events.unlistenByKey=function(a){if(!goog.events.listeners_[a])return!1;var b=goog.events.listeners_[a];if(b.removed)return!1;var c=b.src,d=b.type,e=b.proxy,f=b.capture;c.removeEventListener?(c==goog.global||!c.customEvent_)&&c.removeEventListener(d,e,f):c.detachEvent&&c.detachEvent(goog.events.getOnString_(d),e);c=goog.getUid(c);e=goog.events.listenerTree_[d][f][c];if(goog.events.sources_[c]){var g=goog.events.sources_[c];goog.array.remove(g,b);0==g.length&&delete goog.events.sources_[c]}b.removed=
!0;e.needsCleanup_=!0;goog.events.cleanUp_(d,f,c,e);delete goog.events.listeners_[a];return!0};goog.events.unlistenWithWrapper=function(a,b,c,d,e){b.unlisten(a,c,d,e)};
goog.events.cleanUp_=function(a,b,c,d){if(!d.locked_&&d.needsCleanup_){for(var e=0,f=0;e<d.length;e++)d[e].removed?d[e].proxy.src=null:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.needsCleanup_=!1;0==f&&(delete goog.events.listenerTree_[a][b][c],goog.events.listenerTree_[a][b].count_--,0==goog.events.listenerTree_[a][b].count_&&(delete goog.events.listenerTree_[a][b],goog.events.listenerTree_[a].count_--),0==goog.events.listenerTree_[a].count_&&delete goog.events.listenerTree_[a])}};
goog.events.removeAll=function(a,b,c){var d=0,e=null==b,f=null==c,c=!!c;if(null==a)goog.object.forEach(goog.events.sources_,function(a){for(var g=a.length-1;0<=g;g--){var h=a[g];if((e||b==h.type)&&(f||c==h.capture))goog.events.unlistenByKey(h.key),d++}});else if(a=goog.getUid(a),goog.events.sources_[a])for(var a=goog.events.sources_[a],g=a.length-1;0<=g;g--){var h=a[g];if((e||b==h.type)&&(f||c==h.capture))goog.events.unlistenByKey(h.key),d++}return d};
goog.events.getListeners=function(a,b,c){return goog.events.getListeners_(a,b,c)||[]};goog.events.getListeners_=function(a,b,c){var d=goog.events.listenerTree_;return b in d&&(d=d[b],c in d&&(d=d[c],a=goog.getUid(a),d[a]))?d[a]:null};goog.events.getListener=function(a,b,c,d,e){d=!!d;if(a=goog.events.getListeners_(a,b,d))for(b=0;b<a.length;b++)if(!a[b].removed&&a[b].listener==c&&a[b].capture==d&&a[b].handler==e)return a[b];return null};
goog.events.hasListener=function(a,b,c){var a=goog.getUid(a),d=goog.events.sources_[a];if(d){var e=goog.isDef(b),f=goog.isDef(c);return e&&f?(d=goog.events.listenerTree_[b],!!d&&!!d[c]&&a in d[c]):!e&&!f?!0:goog.array.some(d,function(a){return e&&a.type==b||f&&a.capture==c})}return!1};goog.events.expose=function(a){var b=[],c;for(c in a)a[c]&&a[c].id?b.push(c+" = "+a[c]+" ("+a[c].id+")"):b.push(c+" = "+a[c]);return b.join("\n")};
goog.events.getOnString_=function(a){return a in goog.events.onStringMap_?goog.events.onStringMap_[a]:goog.events.onStringMap_[a]=goog.events.onString_+a};goog.events.fireListeners=function(a,b,c,d){var e=goog.events.listenerTree_;return b in e&&(e=e[b],c in e)?goog.events.fireListeners_(e[c],a,b,c,d):!0};
goog.events.fireListeners_=function(a,b,c,d,e){var f=1,b=goog.getUid(b);if(a[b]){a.remaining_--;a=a[b];a.locked_?a.locked_++:a.locked_=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];i&&!i.removed&&(f&=!1!==goog.events.fireListener(i,e))}}finally{a.locked_--,goog.events.cleanUp_(c,d,b,a)}}return Boolean(f)};goog.events.fireListener=function(a,b){var c=a.handleEvent(b);a.callOnce&&goog.events.unlistenByKey(a.key);return c};goog.events.getTotalListenerCount=function(){return goog.object.getCount(goog.events.listeners_)};
goog.events.dispatchEvent=function(a,b){var c=b.type||b,d=goog.events.listenerTree_;if(!(c in d))return!0;if(goog.isString(b))b=new goog.events.Event(b,a);else if(b instanceof goog.events.Event)b.target=b.target||a;else{var e=b,b=new goog.events.Event(c,a);goog.object.extend(b,e)}var e=1,f,d=d[c],c=!0 in d,g;if(c){f=[];for(g=a;g;g=g.getParentEventTarget())f.push(g);g=d[!0];g.remaining_=g.count_;for(var h=f.length-1;!b.propagationStopped_&&0<=h&&g.remaining_;h--)b.currentTarget=f[h],e&=goog.events.fireListeners_(g,
f[h],b.type,!0,b)&&!1!=b.returnValue_}if(!1 in d)if(g=d[!1],g.remaining_=g.count_,c)for(h=0;!b.propagationStopped_&&h<f.length&&g.remaining_;h++)b.currentTarget=f[h],e&=goog.events.fireListeners_(g,f[h],b.type,!1,b)&&!1!=b.returnValue_;else for(d=a;!b.propagationStopped_&&d&&g.remaining_;d=d.getParentEventTarget())b.currentTarget=d,e&=goog.events.fireListeners_(g,d,b.type,!1,b)&&!1!=b.returnValue_;return Boolean(e)};
goog.events.protectBrowserEventEntryPoint=function(a){goog.events.handleBrowserEvent_=a.protectEntryPoint(goog.events.handleBrowserEvent_)};
goog.events.handleBrowserEvent_=function(a,b){if(!goog.events.listeners_[a])return!0;var c=goog.events.listeners_[a],d=c.type,e=goog.events.listenerTree_;if(!(d in e))return!0;var e=e[d],f,g;if(!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT){f=b||goog.getObjectByName("window.event");var h=!0 in e,i=!1 in e;if(h){if(goog.events.isMarkedIeEvent_(f))return!0;goog.events.markIeEvent_(f)}var j=new goog.events.BrowserEvent;j.init(f,this);f=!0;try{if(h){for(var l=[],k=j.currentTarget;k;k=k.parentNode)l.push(k);
g=e[!0];g.remaining_=g.count_;for(var m=l.length-1;!j.propagationStopped_&&0<=m&&g.remaining_;m--)j.currentTarget=l[m],f&=goog.events.fireListeners_(g,l[m],d,!0,j);if(i){g=e[!1];g.remaining_=g.count_;for(m=0;!j.propagationStopped_&&m<l.length&&g.remaining_;m++)j.currentTarget=l[m],f&=goog.events.fireListeners_(g,l[m],d,!1,j)}}else f=goog.events.fireListener(c,j)}finally{l&&(l.length=0),j.dispose()}return f}d=new goog.events.BrowserEvent(b,this);try{f=goog.events.fireListener(c,d)}finally{d.dispose()}return f};
goog.events.markIeEvent_=function(a){var b=!1;if(0==a.keyCode)try{a.keyCode=-1;return}catch(c){b=!0}if(b||void 0==a.returnValue)a.returnValue=!0};goog.events.isMarkedIeEvent_=function(a){return 0>a.keyCode||void 0!=a.returnValue};goog.events.uniqueIdCounter_=0;goog.events.getUniqueId=function(a){return a+"_"+goog.events.uniqueIdCounter_++};goog.debug.entryPointRegistry.register(function(a){goog.events.handleBrowserEvent_=a(goog.events.handleBrowserEvent_)});goog.events.EventTarget=function(){goog.Disposable.call(this)};goog.inherits(goog.events.EventTarget,goog.Disposable);goog.events.EventTarget.prototype.customEvent_=!0;goog.events.EventTarget.prototype.parentEventTarget_=null;goog.events.EventTarget.prototype.getParentEventTarget=function(){return this.parentEventTarget_};goog.events.EventTarget.prototype.setParentEventTarget=function(a){this.parentEventTarget_=a};
goog.events.EventTarget.prototype.addEventListener=function(a,b,c,d){goog.events.listen(this,a,b,c,d)};goog.events.EventTarget.prototype.removeEventListener=function(a,b,c,d){goog.events.unlisten(this,a,b,c,d)};goog.events.EventTarget.prototype.dispatchEvent=function(a){return goog.events.dispatchEvent(this,a)};goog.events.EventTarget.prototype.disposeInternal=function(){goog.events.EventTarget.superClass_.disposeInternal.call(this);goog.events.removeAll(this);this.parentEventTarget_=null};lime.userAgent={};
(function(){var a=goog.userAgent.getUserAgentString();lime.userAgent.IOS=goog.userAgent.WEBKIT&&goog.userAgent.MOBILE&&/(ipod|iphone|ipad)/i.test(a);lime.userAgent.IOS5=lime.userAgent.IOS&&goog.isFunction(Object.freeze);lime.userAgent.ANDROID=goog.userAgent.WEBKIT&&goog.userAgent.MOBILE&&/(android)/i.test(a);lime.userAgent.IPAD=lime.userAgent.IOS&&/(ipad)/i.test(a);lime.userAgent.IPHONE4=lime.userAgent.IOS&&2<=goog.global.devicePixelRatio;lime.userAgent.PLAYBOOK=goog.userAgent.WEBKIT&&/playbook/i.test(a);
lime.userAgent.SUPPORTS_TOUCH=goog.isDef(document.ontouchmove)})();goog.math.Rect=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};goog.math.Rect.prototype.clone=function(){return new goog.math.Rect(this.left,this.top,this.width,this.height)};goog.math.Rect.prototype.toBox=function(){return new goog.math.Box(this.top,this.left+this.width,this.top+this.height,this.left)};goog.math.Rect.createFromBox=function(a){return new goog.math.Rect(a.left,a.top,a.right-a.left,a.bottom-a.top)};
goog.DEBUG&&(goog.math.Rect.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"});goog.math.Rect.equals=function(a,b){return a==b?true:!a||!b?false:a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height};
goog.math.Rect.prototype.intersection=function(a){var b=Math.max(this.left,a.left),c=Math.min(this.left+this.width,a.left+a.width);if(b<=c){var d=Math.max(this.top,a.top),a=Math.min(this.top+this.height,a.top+a.height);if(d<=a){this.left=b;this.top=d;this.width=c-b;this.height=a-d;return true}}return false};
goog.math.Rect.intersection=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return new goog.math.Rect(c,e,d-c,f-e)}return null};goog.math.Rect.intersects=function(a,b){return a.left<=b.left+b.width&&b.left<=a.left+a.width&&a.top<=b.top+b.height&&b.top<=a.top+a.height};goog.math.Rect.prototype.intersects=function(a){return goog.math.Rect.intersects(this,a)};
goog.math.Rect.difference=function(a,b){var c=goog.math.Rect.intersection(a,b);if(!c||!c.height||!c.width)return[a.clone()];var c=[],d=a.top,e=a.height,f=a.left+a.width,g=a.top+a.height,h=b.left+b.width,i=b.top+b.height;if(b.top>a.top){c.push(new goog.math.Rect(a.left,a.top,a.width,b.top-a.top));d=b.top;e=e-(b.top-a.top)}if(i<g){c.push(new goog.math.Rect(a.left,i,a.width,g-i));e=i-d}b.left>a.left&&c.push(new goog.math.Rect(a.left,d,b.left-a.left,e));h<f&&c.push(new goog.math.Rect(h,d,f-h,e));return c};
goog.math.Rect.prototype.difference=function(a){return goog.math.Rect.difference(this,a)};goog.math.Rect.prototype.boundingRect=function(a){var b=Math.max(this.left+this.width,a.left+a.width),c=Math.max(this.top+this.height,a.top+a.height);this.left=Math.min(this.left,a.left);this.top=Math.min(this.top,a.top);this.width=b-this.left;this.height=c-this.top};goog.math.Rect.boundingRect=function(a,b){if(!a||!b)return null;var c=a.clone();c.boundingRect(b);return c};
goog.math.Rect.prototype.contains=function(a){return a instanceof goog.math.Rect?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};goog.math.Rect.prototype.getSize=function(){return new goog.math.Size(this.width,this.height)};goog.dom={};goog.dom.classes={};goog.dom.classes.set=function(a,b){a.className=b};goog.dom.classes.get=function(a){a=a.className;return goog.isString(a)&&a.match(/\S+/g)||[]};goog.dom.classes.add=function(a,b){var c=goog.dom.classes.get(a),d=goog.array.slice(arguments,1),e=c.length+d.length;goog.dom.classes.add_(c,d);a.className=c.join(" ");return c.length==e};
goog.dom.classes.remove=function(a,b){var c=goog.dom.classes.get(a),d=goog.array.slice(arguments,1),e=goog.dom.classes.getDifference_(c,d);a.className=e.join(" ");return e.length==c.length-d.length};goog.dom.classes.add_=function(a,b){for(var c=0;c<b.length;c++)goog.array.contains(a,b[c])||a.push(b[c])};goog.dom.classes.getDifference_=function(a,b){return goog.array.filter(a,function(a){return!goog.array.contains(b,a)})};
goog.dom.classes.swap=function(a,b,c){for(var d=goog.dom.classes.get(a),e=!1,f=0;f<d.length;f++)d[f]==b&&(goog.array.splice(d,f--,1),e=!0);e&&(d.push(c),a.className=d.join(" "));return e};goog.dom.classes.addRemove=function(a,b,c){var d=goog.dom.classes.get(a);goog.isString(b)?goog.array.remove(d,b):goog.isArray(b)&&(d=goog.dom.classes.getDifference_(d,b));goog.isString(c)&&!goog.array.contains(d,c)?d.push(c):goog.isArray(c)&&goog.dom.classes.add_(d,c);a.className=d.join(" ")};
goog.dom.classes.has=function(a,b){return goog.array.contains(goog.dom.classes.get(a),b)};goog.dom.classes.enable=function(a,b,c){c?goog.dom.classes.add(a,b):goog.dom.classes.remove(a,b)};goog.dom.classes.toggle=function(a,b){var c=!goog.dom.classes.has(a,b);goog.dom.classes.enable(a,b,c);return c};goog.dom.TagName={A:"A",ABBR:"ABBR",ACRONYM:"ACRONYM",ADDRESS:"ADDRESS",APPLET:"APPLET",AREA:"AREA",AUDIO:"AUDIO",B:"B",BASE:"BASE",BASEFONT:"BASEFONT",BDO:"BDO",BIG:"BIG",BLOCKQUOTE:"BLOCKQUOTE",BODY:"BODY",BR:"BR",BUTTON:"BUTTON",CANVAS:"CANVAS",CAPTION:"CAPTION",CENTER:"CENTER",CITE:"CITE",CODE:"CODE",COL:"COL",COLGROUP:"COLGROUP",DD:"DD",DEL:"DEL",DFN:"DFN",DIR:"DIR",DIV:"DIV",DL:"DL",DT:"DT",EM:"EM",FIELDSET:"FIELDSET",FONT:"FONT",FORM:"FORM",FRAME:"FRAME",FRAMESET:"FRAMESET",H1:"H1",H2:"H2",
H3:"H3",H4:"H4",H5:"H5",H6:"H6",HEAD:"HEAD",HR:"HR",HTML:"HTML",I:"I",IFRAME:"IFRAME",IMG:"IMG",INPUT:"INPUT",INS:"INS",ISINDEX:"ISINDEX",KBD:"KBD",LABEL:"LABEL",LEGEND:"LEGEND",LI:"LI",LINK:"LINK",MAP:"MAP",MENU:"MENU",META:"META",NOFRAMES:"NOFRAMES",NOSCRIPT:"NOSCRIPT",OBJECT:"OBJECT",OL:"OL",OPTGROUP:"OPTGROUP",OPTION:"OPTION",P:"P",PARAM:"PARAM",PRE:"PRE",Q:"Q",S:"S",SAMP:"SAMP",SCRIPT:"SCRIPT",SELECT:"SELECT",SMALL:"SMALL",SPAN:"SPAN",STRIKE:"STRIKE",STRONG:"STRONG",STYLE:"STYLE",SUB:"SUB",SUP:"SUP",
TABLE:"TABLE",TBODY:"TBODY",TD:"TD",TEXTAREA:"TEXTAREA",TFOOT:"TFOOT",TH:"TH",THEAD:"THEAD",TITLE:"TITLE",TR:"TR",TT:"TT",U:"U",UL:"UL",VAR:"VAR",VIDEO:"VIDEO"};goog.dom.BrowserFeature={CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO&&!goog.userAgent.IE||goog.userAgent.IE&&goog.userAgent.isDocumentMode(9)||goog.userAgent.GECKO&&goog.userAgent.isVersion("1.9.1"),CAN_USE_INNER_TEXT:goog.userAgent.IE&&!goog.userAgent.isVersion("9"),CAN_USE_PARENT_ELEMENT_PROPERTY:goog.userAgent.IE||goog.userAgent.OPERA||goog.userAgent.WEBKIT,INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};goog.dom.ASSUME_QUIRKS_MODE=!1;goog.dom.ASSUME_STANDARDS_MODE=!1;goog.dom.COMPAT_MODE_KNOWN_=goog.dom.ASSUME_QUIRKS_MODE||goog.dom.ASSUME_STANDARDS_MODE;goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.dom.getDomHelper=function(a){return a?new goog.dom.DomHelper(goog.dom.getOwnerDocument(a)):goog.dom.defaultDomHelper_||(goog.dom.defaultDomHelper_=new goog.dom.DomHelper)};
goog.dom.getDocument=function(){return document};goog.dom.getElement=function(a){return goog.isString(a)?document.getElementById(a):a};goog.dom.$=goog.dom.getElement;goog.dom.getElementsByTagNameAndClass=function(a,b,c){return goog.dom.getElementsByTagNameAndClass_(document,a,b,c)};
goog.dom.getElementsByClass=function(a,b){var c=b||document;return goog.dom.canUseQuerySelector_(c)?c.querySelectorAll("."+a):c.getElementsByClassName?c.getElementsByClassName(a):goog.dom.getElementsByTagNameAndClass_(document,"*",a,b)};goog.dom.getElementByClass=function(a,b){var c=b||document,d=null;return(d=goog.dom.canUseQuerySelector_(c)?c.querySelector("."+a):goog.dom.getElementsByClass(a,b)[0])||null};goog.dom.canUseQuerySelector_=function(a){return!(!a.querySelectorAll||!a.querySelector)};
goog.dom.getElementsByTagNameAndClass_=function(a,b,c,d){a=d||a;b=b&&"*"!=b?b.toUpperCase():"";if(goog.dom.canUseQuerySelector_(a)&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){for(var d={},e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&goog.array.contains(b.split(/\s+/),c)&&(d[e++]=g);d.length=
e;return d}return a};goog.dom.$$=goog.dom.getElementsByTagNameAndClass;goog.dom.setProperties=function(a,b){goog.object.forEach(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in goog.dom.DIRECT_ATTRIBUTE_MAP_?a.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[d],b):goog.string.startsWith(d,"aria-")?a.setAttribute(d,b):a[d]=b})};
goog.dom.DIRECT_ATTRIBUTE_MAP_={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};goog.dom.getViewportSize=function(a){return goog.dom.getViewportSize_(a||window)};goog.dom.getViewportSize_=function(a){a=a.document;a=goog.dom.isCss1CompatMode_(a)?a.documentElement:a.body;return new goog.math.Size(a.clientWidth,a.clientHeight)};
goog.dom.getDocumentHeight=function(){return goog.dom.getDocumentHeight_(window)};goog.dom.getDocumentHeight_=function(a){var b=a.document,c=0;if(b){var a=goog.dom.getViewportSize_(a).height,c=b.body,d=b.documentElement;if(goog.dom.isCss1CompatMode_(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}}return c};
goog.dom.getPageScroll=function(a){return goog.dom.getDomHelper((a||goog.global||window).document).getDocumentScroll()};goog.dom.getDocumentScroll=function(){return goog.dom.getDocumentScroll_(document)};goog.dom.getDocumentScroll_=function(a){var b=goog.dom.getDocumentScrollElement_(a),a=goog.dom.getWindow_(a);return new goog.math.Coordinate(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};goog.dom.getDocumentScrollElement=function(){return goog.dom.getDocumentScrollElement_(document)};
goog.dom.getDocumentScrollElement_=function(a){return!goog.userAgent.WEBKIT&&goog.dom.isCss1CompatMode_(a)?a.documentElement:a.body};goog.dom.getWindow=function(a){return a?goog.dom.getWindow_(a):window};goog.dom.getWindow_=function(a){return a.parentWindow||a.defaultView};goog.dom.createDom=function(a,b,c){return goog.dom.createDom_(document,arguments)};
goog.dom.createDom_=function(a,b){var c=b[0],d=b[1];if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',goog.string.htmlEscape(d.name),'"');if(d.type){c.push(' type="',goog.string.htmlEscape(d.type),'"');var e={};goog.object.extend(e,d);d=e;delete d.type}c.push(">");c=c.join("")}c=a.createElement(c);d&&(goog.isString(d)?c.className=d:goog.isArray(d)?goog.dom.classes.add.apply(null,[c].concat(d)):goog.dom.setProperties(c,d));2<b.length&&
goog.dom.append_(a,c,b,2);return c};goog.dom.append_=function(a,b,c,d){function e(c){c&&b.appendChild(goog.isString(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];goog.isArrayLike(f)&&!goog.dom.isNodeLike(f)?goog.array.forEach(goog.dom.isNodeList(f)?goog.array.toArray(f):f,e):e(f)}};goog.dom.$dom=goog.dom.createDom;goog.dom.createElement=function(a){return document.createElement(a)};goog.dom.createTextNode=function(a){return document.createTextNode(a)};
goog.dom.createTable=function(a,b,c){return goog.dom.createTable_(document,a,b,!!c)};goog.dom.createTable_=function(a,b,c,d){for(var e=["<tr>"],f=0;f<c;f++)e.push(d?"<td>&nbsp;</td>":"<td></td>");e.push("</tr>");e=e.join("");c=["<table>"];for(f=0;f<b;f++)c.push(e);c.push("</table>");a=a.createElement(goog.dom.TagName.DIV);a.innerHTML=c.join("");return a.removeChild(a.firstChild)};goog.dom.htmlToDocumentFragment=function(a){return goog.dom.htmlToDocumentFragment_(document,a)};
goog.dom.htmlToDocumentFragment_=function(a,b){var c=a.createElement("div");goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT?(c.innerHTML="<br>"+b,c.removeChild(c.firstChild)):c.innerHTML=b;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(var d=a.createDocumentFragment();c.firstChild;)d.appendChild(c.firstChild);return d};goog.dom.getCompatMode=function(){return goog.dom.isCss1CompatMode()?"CSS1Compat":"BackCompat"};goog.dom.isCss1CompatMode=function(){return goog.dom.isCss1CompatMode_(document)};
goog.dom.isCss1CompatMode_=function(a){return goog.dom.COMPAT_MODE_KNOWN_?goog.dom.ASSUME_STANDARDS_MODE:"CSS1Compat"==a.compatMode};goog.dom.canHaveChildren=function(a){if(a.nodeType!=goog.dom.NodeType.ELEMENT)return!1;switch(a.tagName){case goog.dom.TagName.APPLET:case goog.dom.TagName.AREA:case goog.dom.TagName.BASE:case goog.dom.TagName.BR:case goog.dom.TagName.COL:case goog.dom.TagName.FRAME:case goog.dom.TagName.HR:case goog.dom.TagName.IMG:case goog.dom.TagName.INPUT:case goog.dom.TagName.IFRAME:case goog.dom.TagName.ISINDEX:case goog.dom.TagName.LINK:case goog.dom.TagName.NOFRAMES:case goog.dom.TagName.NOSCRIPT:case goog.dom.TagName.META:case goog.dom.TagName.OBJECT:case goog.dom.TagName.PARAM:case goog.dom.TagName.SCRIPT:case goog.dom.TagName.STYLE:return!1}return!0};
goog.dom.appendChild=function(a,b){a.appendChild(b)};goog.dom.append=function(a,b){goog.dom.append_(goog.dom.getOwnerDocument(a),a,arguments,1)};goog.dom.removeChildren=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};goog.dom.insertSiblingBefore=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};goog.dom.insertSiblingAfter=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};goog.dom.insertChildAt=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
goog.dom.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};goog.dom.replaceNode=function(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)};goog.dom.flattenElement=function(a){var b,c=a.parentNode;if(c&&c.nodeType!=goog.dom.NodeType.DOCUMENT_FRAGMENT){if(a.removeNode)return a.removeNode(!1);for(;b=a.firstChild;)c.insertBefore(b,a);return goog.dom.removeNode(a)}};
goog.dom.getChildren=function(a){return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE&&void 0!=a.children?a.children:goog.array.filter(a.childNodes,function(a){return a.nodeType==goog.dom.NodeType.ELEMENT})};goog.dom.getFirstElementChild=function(a){return void 0!=a.firstElementChild?a.firstElementChild:goog.dom.getNextElementNode_(a.firstChild,!0)};goog.dom.getLastElementChild=function(a){return void 0!=a.lastElementChild?a.lastElementChild:goog.dom.getNextElementNode_(a.lastChild,!1)};
goog.dom.getNextElementSibling=function(a){return void 0!=a.nextElementSibling?a.nextElementSibling:goog.dom.getNextElementNode_(a.nextSibling,!0)};goog.dom.getPreviousElementSibling=function(a){return void 0!=a.previousElementSibling?a.previousElementSibling:goog.dom.getNextElementNode_(a.previousSibling,!1)};goog.dom.getNextElementNode_=function(a,b){for(;a&&a.nodeType!=goog.dom.NodeType.ELEMENT;)a=b?a.nextSibling:a.previousSibling;return a};
goog.dom.getNextNode=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};goog.dom.getPreviousNode=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};goog.dom.isNodeLike=function(a){return goog.isObject(a)&&0<a.nodeType};goog.dom.isElement=function(a){return goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT};
goog.dom.isWindow=function(a){return goog.isObject(a)&&a.window==a};goog.dom.getParentElement=function(a){if(goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY)return a.parentElement;a=a.parentNode;return goog.dom.isElement(a)?a:null};goog.dom.contains=function(a,b){if(a.contains&&b.nodeType==goog.dom.NodeType.ELEMENT)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
goog.dom.compareNodeOrder=function(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=a.nodeType==goog.dom.NodeType.ELEMENT,d=b.nodeType==goog.dom.NodeType.ELEMENT;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?goog.dom.compareSiblingOrder_(a,b):!c&&goog.dom.contains(e,b)?-1*goog.dom.compareParentsDescendantNodeIe_(a,b):!d&&goog.dom.contains(f,
a)?goog.dom.compareParentsDescendantNodeIe_(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=goog.dom.getOwnerDocument(a);c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(goog.global.Range.START_TO_END,d)};goog.dom.compareParentsDescendantNodeIe_=function(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return goog.dom.compareSiblingOrder_(d,a)};
goog.dom.compareSiblingOrder_=function(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};goog.dom.findCommonAncestor=function(a){var b,c=arguments.length;if(c){if(1==c)return arguments[0]}else return null;var d=[],e=Infinity;for(b=0;b<c;b++){for(var f=[],g=arguments[b];g;)f.unshift(g),g=g.parentNode;d.push(f);e=Math.min(e,f.length)}f=null;for(b=0;b<e;b++){for(var g=d[0][b],h=1;h<c;h++)if(g!=d[h][b])return f;f=g}return f};
goog.dom.getOwnerDocument=function(a){return a.nodeType==goog.dom.NodeType.DOCUMENT?a:a.ownerDocument||a.document};goog.dom.getFrameContentDocument=function(a){return a.contentDocument||a.contentWindow.document};goog.dom.getFrameContentWindow=function(a){return a.contentWindow||goog.dom.getWindow_(goog.dom.getFrameContentDocument(a))};
goog.dom.setTextContent=function(a,b){if("textContent"in a)a.textContent=b;else if(a.firstChild&&a.firstChild.nodeType==goog.dom.NodeType.TEXT){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{goog.dom.removeChildren(a);var c=goog.dom.getOwnerDocument(a);a.appendChild(c.createTextNode(b))}};goog.dom.getOuterHtml=function(a){if("outerHTML"in a)return a.outerHTML;var b=goog.dom.getOwnerDocument(a).createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML};
goog.dom.findNode=function(a,b){var c=[];return goog.dom.findNodes_(a,b,c,!0)?c[0]:void 0};goog.dom.findNodes=function(a,b){var c=[];goog.dom.findNodes_(a,b,c,!1);return c};goog.dom.findNodes_=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||goog.dom.findNodes_(a,b,c,d))return!0;a=a.nextSibling}return!1};goog.dom.TAGS_TO_IGNORE_={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};goog.dom.PREDEFINED_TAG_VALUES_={IMG:" ",BR:"\n"};
goog.dom.isFocusableTabIndex=function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?(a=a.tabIndex,goog.isNumber(a)&&0<=a&&32768>a):!1};goog.dom.setFocusableTabIndex=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};
goog.dom.getTextContent=function(a){if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT&&"innerText"in a)a=goog.string.canonicalizeNewlines(a.innerText);else{var b=[];goog.dom.getTextContent_(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");goog.dom.BrowserFeature.CAN_USE_INNER_TEXT||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a};goog.dom.getRawTextContent=function(a){var b=[];goog.dom.getTextContent_(a,b,!1);return b.join("")};
goog.dom.getTextContent_=function(a,b,c){if(!(a.nodeName in goog.dom.TAGS_TO_IGNORE_))if(a.nodeType==goog.dom.NodeType.TEXT)c?b.push((""+a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in goog.dom.PREDEFINED_TAG_VALUES_)b.push(goog.dom.PREDEFINED_TAG_VALUES_[a.nodeName]);else for(a=a.firstChild;a;)goog.dom.getTextContent_(a,b,c),a=a.nextSibling};goog.dom.getNodeTextLength=function(a){return goog.dom.getTextContent(a).length};
goog.dom.getNodeTextOffset=function(a,b){for(var c=b||goog.dom.getOwnerDocument(a).body,d=[];a&&a!=c;){for(var e=a;e=e.previousSibling;)d.unshift(goog.dom.getTextContent(e));a=a.parentNode}return goog.string.trimLeft(d.join("")).replace(/ +/g," ").length};
goog.dom.getNodeAtOffset=function(a,b,c){for(var a=[a],d=0,e;0<a.length&&d<b;)if(e=a.pop(),!(e.nodeName in goog.dom.TAGS_TO_IGNORE_))if(e.nodeType==goog.dom.NodeType.TEXT)var f=e.nodeValue.replace(/(\r\n|\r|\n)/g,"").replace(/ +/g," "),d=d+f.length;else if(e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_)d+=goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName].length;else for(f=e.childNodes.length-1;0<=f;f--)a.push(e.childNodes[f]);goog.isObject(c)&&(c.remainder=e?e.nodeValue.length+b-d-1:0,c.node=e);return e};
goog.dom.isNodeList=function(a){if(a&&"number"==typeof a.length){if(goog.isObject(a))return"function"==typeof a.item||"string"==typeof a.item;if(goog.isFunction(a))return"function"==typeof a.item}return!1};goog.dom.getAncestorByTagNameAndClass=function(a,b,c){if(!b&&!c)return null;var d=b?b.toUpperCase():null;return goog.dom.getAncestor(a,function(a){return(!d||a.nodeName==d)&&(!c||goog.dom.classes.has(a,c))},!0)};
goog.dom.getAncestorByClass=function(a,b){return goog.dom.getAncestorByTagNameAndClass(a,null,b)};goog.dom.getAncestor=function(a,b,c,d){c||(a=a.parentNode);for(var c=null==d,e=0;a&&(c||e<=d);){if(b(a))return a;a=a.parentNode;e++}return null};goog.dom.getActiveElement=function(a){try{return a&&a.activeElement}catch(b){}return null};goog.dom.DomHelper=function(a){this.document_=a||goog.global.document||document};goog.dom.DomHelper.prototype.getDomHelper=goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument=function(a){this.document_=a};goog.dom.DomHelper.prototype.getDocument=function(){return this.document_};goog.dom.DomHelper.prototype.getElement=function(a){return goog.isString(a)?this.document_.getElementById(a):a};goog.dom.DomHelper.prototype.$=goog.dom.DomHelper.prototype.getElement;goog.dom.DomHelper.prototype.getElementsByTagNameAndClass=function(a,b,c){return goog.dom.getElementsByTagNameAndClass_(this.document_,a,b,c)};
goog.dom.DomHelper.prototype.getElementsByClass=function(a,b){return goog.dom.getElementsByClass(a,b||this.document_)};goog.dom.DomHelper.prototype.getElementByClass=function(a,b){return goog.dom.getElementByClass(a,b||this.document_)};goog.dom.DomHelper.prototype.$$=goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;goog.dom.DomHelper.prototype.setProperties=goog.dom.setProperties;goog.dom.DomHelper.prototype.getViewportSize=function(a){return goog.dom.getViewportSize(a||this.getWindow())};
goog.dom.DomHelper.prototype.getDocumentHeight=function(){return goog.dom.getDocumentHeight_(this.getWindow())};goog.dom.DomHelper.prototype.createDom=function(a,b,c){return goog.dom.createDom_(this.document_,arguments)};goog.dom.DomHelper.prototype.$dom=goog.dom.DomHelper.prototype.createDom;goog.dom.DomHelper.prototype.createElement=function(a){return this.document_.createElement(a)};goog.dom.DomHelper.prototype.createTextNode=function(a){return this.document_.createTextNode(a)};
goog.dom.DomHelper.prototype.createTable=function(a,b,c){return goog.dom.createTable_(this.document_,a,b,!!c)};goog.dom.DomHelper.prototype.htmlToDocumentFragment=function(a){return goog.dom.htmlToDocumentFragment_(this.document_,a)};goog.dom.DomHelper.prototype.getCompatMode=function(){return this.isCss1CompatMode()?"CSS1Compat":"BackCompat"};goog.dom.DomHelper.prototype.isCss1CompatMode=function(){return goog.dom.isCss1CompatMode_(this.document_)};goog.dom.DomHelper.prototype.getWindow=function(){return goog.dom.getWindow_(this.document_)};
goog.dom.DomHelper.prototype.getDocumentScrollElement=function(){return goog.dom.getDocumentScrollElement_(this.document_)};goog.dom.DomHelper.prototype.getDocumentScroll=function(){return goog.dom.getDocumentScroll_(this.document_)};goog.dom.DomHelper.prototype.appendChild=goog.dom.appendChild;goog.dom.DomHelper.prototype.append=goog.dom.append;goog.dom.DomHelper.prototype.removeChildren=goog.dom.removeChildren;goog.dom.DomHelper.prototype.insertSiblingBefore=goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter=goog.dom.insertSiblingAfter;goog.dom.DomHelper.prototype.removeNode=goog.dom.removeNode;goog.dom.DomHelper.prototype.replaceNode=goog.dom.replaceNode;goog.dom.DomHelper.prototype.flattenElement=goog.dom.flattenElement;goog.dom.DomHelper.prototype.getFirstElementChild=goog.dom.getFirstElementChild;goog.dom.DomHelper.prototype.getLastElementChild=goog.dom.getLastElementChild;goog.dom.DomHelper.prototype.getNextElementSibling=goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling=goog.dom.getPreviousElementSibling;goog.dom.DomHelper.prototype.getNextNode=goog.dom.getNextNode;goog.dom.DomHelper.prototype.getPreviousNode=goog.dom.getPreviousNode;goog.dom.DomHelper.prototype.isNodeLike=goog.dom.isNodeLike;goog.dom.DomHelper.prototype.contains=goog.dom.contains;goog.dom.DomHelper.prototype.getOwnerDocument=goog.dom.getOwnerDocument;goog.dom.DomHelper.prototype.getFrameContentDocument=goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow=goog.dom.getFrameContentWindow;goog.dom.DomHelper.prototype.setTextContent=goog.dom.setTextContent;goog.dom.DomHelper.prototype.findNode=goog.dom.findNode;goog.dom.DomHelper.prototype.findNodes=goog.dom.findNodes;goog.dom.DomHelper.prototype.getTextContent=goog.dom.getTextContent;goog.dom.DomHelper.prototype.getNodeTextLength=goog.dom.getNodeTextLength;goog.dom.DomHelper.prototype.getNodeTextOffset=goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass=goog.dom.getAncestorByTagNameAndClass;goog.dom.DomHelper.prototype.getAncestorByClass=goog.dom.getAncestorByClass;goog.dom.DomHelper.prototype.getAncestor=goog.dom.getAncestor;goog.style={};goog.style.setStyle=function(a,b,c){goog.isString(b)?goog.style.setStyle_(a,c,b):goog.object.forEach(b,goog.partial(goog.style.setStyle_,a))};goog.style.setStyle_=function(a,b,c){a.style[goog.string.toCamelCase(c)]=b};goog.style.getStyle=function(a,b){return a.style[goog.string.toCamelCase(b)]||""};
goog.style.getComputedStyle=function(a,b){var c=goog.dom.getOwnerDocument(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};goog.style.getCascadedStyle=function(a,b){return a.currentStyle?a.currentStyle[b]:null};goog.style.getStyle_=function(a,b){return goog.style.getComputedStyle(a,b)||goog.style.getCascadedStyle(a,b)||a.style&&a.style[b]};
goog.style.getComputedPosition=function(a){return goog.style.getStyle_(a,"position")};goog.style.getBackgroundColor=function(a){return goog.style.getStyle_(a,"backgroundColor")};goog.style.getComputedOverflowX=function(a){return goog.style.getStyle_(a,"overflowX")};goog.style.getComputedOverflowY=function(a){return goog.style.getStyle_(a,"overflowY")};goog.style.getComputedZIndex=function(a){return goog.style.getStyle_(a,"zIndex")};
goog.style.getComputedTextAlign=function(a){return goog.style.getStyle_(a,"textAlign")};goog.style.getComputedCursor=function(a){return goog.style.getStyle_(a,"cursor")};goog.style.setPosition=function(a,b,c){var d,e=goog.userAgent.GECKO&&(goog.userAgent.MAC||goog.userAgent.X11)&&goog.userAgent.isVersion("1.9");b instanceof goog.math.Coordinate?(d=b.x,b=b.y):(d=b,b=c);a.style.left=goog.style.getPixelStyleValue_(d,e);a.style.top=goog.style.getPixelStyleValue_(b,e)};
goog.style.getPosition=function(a){return new goog.math.Coordinate(a.offsetLeft,a.offsetTop)};goog.style.getClientViewportElement=function(a){a=a?a.nodeType==goog.dom.NodeType.DOCUMENT?a:goog.dom.getOwnerDocument(a):goog.dom.getDocument();return goog.userAgent.IE&&!goog.userAgent.isDocumentMode(9)&&!goog.dom.getDomHelper(a).isCss1CompatMode()?a.body:a.documentElement};
goog.style.getBoundingClientRect_=function(a){var b=a.getBoundingClientRect();goog.userAgent.IE&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
goog.style.getOffsetParent=function(a){if(goog.userAgent.IE&&!goog.userAgent.isDocumentMode(8))return a.offsetParent;for(var b=goog.dom.getOwnerDocument(a),c=goog.style.getStyle_(a,"position"),d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=goog.style.getStyle_(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
goog.style.getVisibleRectForElement=function(a){for(var b=new goog.math.Box(0,Infinity,Infinity,0),c=goog.dom.getDomHelper(a),d=c.getDocument().body,e=c.getDocument().documentElement,f=c.getDocumentScrollElement();a=goog.style.getOffsetParent(a);)if((!goog.userAgent.IE||0!=a.clientWidth)&&(!goog.userAgent.WEBKIT||0!=a.clientHeight||a!=d)&&a!=d&&a!=e&&"visible"!=goog.style.getStyle_(a,"overflow")){var g=goog.style.getPageOffset(a),h=goog.style.getClientLeftTop(a);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,
g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=c.getViewportSize();b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
goog.style.getContainerOffsetToScrollInto=function(a,b,c){var d=goog.style.getPageOffset(a),e=goog.style.getPageOffset(b),f=goog.style.getBorderBox(b),g=d.x-e.x-f.left,d=d.y-e.y-f.top,e=b.clientWidth-a.offsetWidth,a=b.clientHeight-a.offsetHeight,f=b.scrollLeft,b=b.scrollTop;c?(f+=g-e/2,b+=d-a/2):(f+=Math.min(g,Math.max(g-e,0)),b+=Math.min(d,Math.max(d-a,0)));return new goog.math.Coordinate(f,b)};
goog.style.scrollIntoContainerView=function(a,b,c){a=goog.style.getContainerOffsetToScrollInto(a,b,c);b.scrollLeft=a.x;b.scrollTop=a.y};
goog.style.getClientLeftTop=function(a){if(goog.userAgent.GECKO&&!goog.userAgent.isVersion("1.9")){var b=parseFloat(goog.style.getComputedStyle(a,"borderLeftWidth"));if(goog.style.isRightToLeft(a))var c=a.offsetWidth-a.clientWidth-b-parseFloat(goog.style.getComputedStyle(a,"borderRightWidth")),b=b+c;return new goog.math.Coordinate(b,parseFloat(goog.style.getComputedStyle(a,"borderTopWidth")))}return new goog.math.Coordinate(a.clientLeft,a.clientTop)};
goog.style.getPageOffset=function(a){var b,c=goog.dom.getOwnerDocument(a),d=goog.style.getStyle_(a,"position"),e=goog.userAgent.GECKO&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new goog.math.Coordinate(0,0),g=goog.style.getClientViewportElement(c);if(a==g)return f;if(a.getBoundingClientRect)b=goog.style.getBoundingClientRect_(a),a=goog.dom.getDomHelper(c).getDocumentScroll(),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&
!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{b=a;do{f.x+=b.offsetLeft;f.y+=b.offsetTop;b!=a&&(f.x+=b.clientLeft||0,f.y+=b.clientTop||0);if(goog.userAgent.WEBKIT&&"fixed"==goog.style.getComputedPosition(b)){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(goog.userAgent.OPERA||goog.userAgent.WEBKIT&&"absolute"==d)f.y-=c.body.offsetTop;for(b=a;(b=goog.style.getOffsetParent(b))&&b!=c.body&&b!=g;)if(f.x-=b.scrollLeft,
!goog.userAgent.OPERA||"TR"!=b.tagName)f.y-=b.scrollTop}return f};goog.style.getPageOffsetLeft=function(a){return goog.style.getPageOffset(a).x};goog.style.getPageOffsetTop=function(a){return goog.style.getPageOffset(a).y};goog.style.getFramedPageOffset=function(a,b){var c=new goog.math.Coordinate(0,0),d=goog.dom.getWindow(goog.dom.getOwnerDocument(a)),e=a;do{var f=d==b?goog.style.getPageOffset(e):goog.style.getClientPosition(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&(e=d.frameElement)&&(d=d.parent));return c};
goog.style.translateRectForAnotherFrame=function(a,b,c){if(b.getDocument()!=c.getDocument()){var d=b.getDocument().body,c=goog.style.getFramedPageOffset(d,c.getWindow()),c=goog.math.Coordinate.difference(c,goog.style.getPageOffset(d));goog.userAgent.IE&&!b.isCss1CompatMode()&&(c=goog.math.Coordinate.difference(c,b.getDocumentScroll()));a.left+=c.x;a.top+=c.y}};
goog.style.getRelativePosition=function(a,b){var c=goog.style.getClientPosition(a),d=goog.style.getClientPosition(b);return new goog.math.Coordinate(c.x-d.x,c.y-d.y)};
goog.style.getClientPosition=function(a){var b=new goog.math.Coordinate;if(a.nodeType==goog.dom.NodeType.ELEMENT)if(a.getBoundingClientRect)a=goog.style.getBoundingClientRect_(a),b.x=a.left,b.y=a.top;else{var c=goog.dom.getDomHelper(a).getDocumentScroll(),a=goog.style.getPageOffset(a);b.x=a.x-c.x;b.y=a.y-c.y}else{var c=goog.isFunction(a.getBrowserEvent),d=a;a.targetTouches?d=a.targetTouches[0]:c&&a.getBrowserEvent().targetTouches&&(d=a.getBrowserEvent().targetTouches[0]);b.x=d.clientX;b.y=d.clientY}return b};
goog.style.setPageOffset=function(a,b,c){var d=goog.style.getPageOffset(a);b instanceof goog.math.Coordinate&&(c=b.y,b=b.x);goog.style.setPosition(a,a.offsetLeft+(b-d.x),a.offsetTop+(c-d.y))};goog.style.setSize=function(a,b,c){if(b instanceof goog.math.Size)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");goog.style.setWidth(a,b);goog.style.setHeight(a,c)};goog.style.getPixelStyleValue_=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
goog.style.setHeight=function(a,b){a.style.height=goog.style.getPixelStyleValue_(b,!0)};goog.style.setWidth=function(a,b){a.style.width=goog.style.getPixelStyleValue_(b,!0)};goog.style.getSize=function(a){if("none"!=goog.style.getStyle_(a,"display"))return goog.style.getSizeWithDisplay_(a);var b=a.style,c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=goog.style.getSizeWithDisplay_(a);b.display=c;b.position=e;b.visibility=d;return a};
goog.style.getSizeWithDisplay_=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=goog.userAgent.WEBKIT&&!b&&!c;return(!goog.isDef(b)||d)&&a.getBoundingClientRect?(a=goog.style.getBoundingClientRect_(a),new goog.math.Size(a.right-a.left,a.bottom-a.top)):new goog.math.Size(b,c)};goog.style.getBounds=function(a){var b=goog.style.getPageOffset(a),a=goog.style.getSize(a);return new goog.math.Rect(b.x,b.y,a.width,a.height)};goog.style.toCamelCase=function(a){return goog.string.toCamelCase(""+a)};
goog.style.toSelectorCase=function(a){return goog.string.toSelectorCase(a)};goog.style.getOpacity=function(a){var b=a.style,a="";"opacity"in b?a=b.opacity:"MozOpacity"in b?a=b.MozOpacity:"filter"in b&&(b=b.filter.match(/alpha\(opacity=([\d.]+)\)/))&&(a=""+b[1]/100);return""==a?a:Number(a)};goog.style.setOpacity=function(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")};
goog.style.setTransparentBackgroundImage=function(a,b){var c=a.style;goog.userAgent.IE&&!goog.userAgent.isVersion("8")?c.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+b+'", sizingMethod="crop")':(c.backgroundImage="url("+b+")",c.backgroundPosition="top left",c.backgroundRepeat="no-repeat")};goog.style.clearTransparentBackgroundImage=function(a){a=a.style;"filter"in a?a.filter="":a.backgroundImage="none"};goog.style.showElement=function(a,b){a.style.display=b?"":"none"};
goog.style.isElementShown=function(a){return"none"!=a.style.display};goog.style.installStyles=function(a,b){var c=goog.dom.getDomHelper(b),d=null;if(goog.userAgent.IE)d=c.getDocument().createStyleSheet(),goog.style.setStyles(d,a);else{var e=c.getElementsByTagNameAndClass("head")[0];e||(d=c.getElementsByTagNameAndClass("body")[0],e=c.createDom("head"),d.parentNode.insertBefore(e,d));d=c.createDom("style");goog.style.setStyles(d,a);c.appendChild(e,d)}return d};
goog.style.uninstallStyles=function(a){goog.dom.removeNode(a.ownerNode||a.owningElement||a)};goog.style.setStyles=function(a,b){goog.userAgent.IE?a.cssText=b:a[goog.userAgent.WEBKIT?"innerText":"innerHTML"]=b};goog.style.setPreWrap=function(a){a=a.style;goog.userAgent.IE&&!goog.userAgent.isVersion("8")?(a.whiteSpace="pre",a.wordWrap="break-word"):a.whiteSpace=goog.userAgent.GECKO?"-moz-pre-wrap":"pre-wrap"};
goog.style.setInlineBlock=function(a){a=a.style;a.position="relative";goog.userAgent.IE&&!goog.userAgent.isVersion("8")?(a.zoom="1",a.display="inline"):a.display=goog.userAgent.GECKO?goog.userAgent.isVersion("1.9a")?"inline-block":"-moz-inline-box":"inline-block"};goog.style.isRightToLeft=function(a){return"rtl"==goog.style.getStyle_(a,"direction")};goog.style.unselectableStyle_=goog.userAgent.GECKO?"MozUserSelect":goog.userAgent.WEBKIT?"WebkitUserSelect":null;
goog.style.isUnselectable=function(a){return goog.style.unselectableStyle_?"none"==a.style[goog.style.unselectableStyle_].toLowerCase():goog.userAgent.IE||goog.userAgent.OPERA?"on"==a.getAttribute("unselectable"):!1};
goog.style.setUnselectable=function(a,b,c){var c=!c?a.getElementsByTagName("*"):null,d=goog.style.unselectableStyle_;if(d){if(b=b?"none":"",a.style[d]=b,c)for(var a=0,e;e=c[a];a++)e.style[d]=b}else if(goog.userAgent.IE||goog.userAgent.OPERA)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;e=c[a];a++)e.setAttribute("unselectable",b)};goog.style.getBorderBoxSize=function(a){return new goog.math.Size(a.offsetWidth,a.offsetHeight)};
goog.style.setBorderBoxSize=function(a,b){var c=goog.dom.getOwnerDocument(a),d=goog.dom.getDomHelper(c).isCss1CompatMode();if(goog.userAgent.IE&&(!d||!goog.userAgent.isVersion("8")))if(c=a.style,d){var d=goog.style.getPaddingBox(a),e=goog.style.getBorderBox(a);c.pixelWidth=b.width-e.left-d.left-d.right-e.right;c.pixelHeight=b.height-e.top-d.top-d.bottom-e.bottom}else c.pixelWidth=b.width,c.pixelHeight=b.height;else goog.style.setBoxSizingSize_(a,b,"border-box")};
goog.style.getContentBoxSize=function(a){var b=goog.dom.getOwnerDocument(a),c=goog.userAgent.IE&&a.currentStyle;if(c&&goog.dom.getDomHelper(b).isCss1CompatMode()&&"auto"!=c.width&&"auto"!=c.height&&!c.boxSizing)return b=goog.style.getIePixelValue_(a,c.width,"width","pixelWidth"),a=goog.style.getIePixelValue_(a,c.height,"height","pixelHeight"),new goog.math.Size(b,a);c=goog.style.getBorderBoxSize(a);b=goog.style.getPaddingBox(a);a=goog.style.getBorderBox(a);return new goog.math.Size(c.width-a.left-
b.left-b.right-a.right,c.height-a.top-b.top-b.bottom-a.bottom)};
goog.style.setContentBoxSize=function(a,b){var c=goog.dom.getOwnerDocument(a),d=goog.dom.getDomHelper(c).isCss1CompatMode();if(goog.userAgent.IE&&(!d||!goog.userAgent.isVersion("8")))if(c=a.style,d)c.pixelWidth=b.width,c.pixelHeight=b.height;else{var d=goog.style.getPaddingBox(a),e=goog.style.getBorderBox(a);c.pixelWidth=b.width+e.left+d.left+d.right+e.right;c.pixelHeight=b.height+e.top+d.top+d.bottom+e.bottom}else goog.style.setBoxSizingSize_(a,b,"content-box")};
goog.style.setBoxSizingSize_=function(a,b,c){a=a.style;goog.userAgent.GECKO?a.MozBoxSizing=c:goog.userAgent.WEBKIT?a.WebkitBoxSizing=c:a.boxSizing=c;a.width=Math.max(b.width,0)+"px";a.height=Math.max(b.height,0)+"px"};goog.style.getIePixelValue_=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b};
goog.style.getIePixelDistance_=function(a,b){return goog.style.getIePixelValue_(a,goog.style.getCascadedStyle(a,b),"left","pixelLeft")};
goog.style.getBox_=function(a,b){if(goog.userAgent.IE){var c=goog.style.getIePixelDistance_(a,b+"Left"),d=goog.style.getIePixelDistance_(a,b+"Right"),e=goog.style.getIePixelDistance_(a,b+"Top"),f=goog.style.getIePixelDistance_(a,b+"Bottom");return new goog.math.Box(e,d,f,c)}c=goog.style.getComputedStyle(a,b+"Left");d=goog.style.getComputedStyle(a,b+"Right");e=goog.style.getComputedStyle(a,b+"Top");f=goog.style.getComputedStyle(a,b+"Bottom");return new goog.math.Box(parseFloat(e),parseFloat(d),parseFloat(f),
parseFloat(c))};goog.style.getPaddingBox=function(a){return goog.style.getBox_(a,"padding")};goog.style.getMarginBox=function(a){return goog.style.getBox_(a,"margin")};goog.style.ieBorderWidthKeywords_={thin:2,medium:4,thick:6};
goog.style.getIePixelBorder_=function(a,b){if("none"==goog.style.getCascadedStyle(a,b+"Style"))return 0;var c=goog.style.getCascadedStyle(a,b+"Width");return c in goog.style.ieBorderWidthKeywords_?goog.style.ieBorderWidthKeywords_[c]:goog.style.getIePixelValue_(a,c,"left","pixelLeft")};
goog.style.getBorderBox=function(a){if(goog.userAgent.IE){var b=goog.style.getIePixelBorder_(a,"borderLeft"),c=goog.style.getIePixelBorder_(a,"borderRight"),d=goog.style.getIePixelBorder_(a,"borderTop"),a=goog.style.getIePixelBorder_(a,"borderBottom");return new goog.math.Box(d,c,a,b)}b=goog.style.getComputedStyle(a,"borderLeftWidth");c=goog.style.getComputedStyle(a,"borderRightWidth");d=goog.style.getComputedStyle(a,"borderTopWidth");a=goog.style.getComputedStyle(a,"borderBottomWidth");return new goog.math.Box(parseFloat(d),
parseFloat(c),parseFloat(a),parseFloat(b))};goog.style.getFontFamily=function(a){var b=goog.dom.getOwnerDocument(a),c="";if(b.body.createTextRange){b=b.body.createTextRange();b.moveToElementText(a);try{c=b.queryCommandValue("FontName")}catch(d){c=""}}c||(c=goog.style.getStyle_(a,"fontFamily"));a=c.split(",");1<a.length&&(c=a[0]);return goog.string.stripQuotes(c,"\"'")};goog.style.lengthUnitRegex_=/[^\d]+$/;
goog.style.getLengthUnits=function(a){return(a=a.match(goog.style.lengthUnitRegex_))&&a[0]||null};goog.style.ABSOLUTE_CSS_LENGTH_UNITS_={cm:1,"in":1,mm:1,pc:1,pt:1};goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_={em:1,ex:1};
goog.style.getFontSize=function(a){var b=goog.style.getStyle_(a,"fontSize"),c=goog.style.getLengthUnits(b);if(b&&"px"==c)return parseInt(b,10);if(goog.userAgent.IE){if(c in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_)return goog.style.getIePixelValue_(a,b,"left","pixelLeft");if(a.parentNode&&a.parentNode.nodeType==goog.dom.NodeType.ELEMENT&&c in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_)return a=a.parentNode,c=goog.style.getStyle_(a,"fontSize"),goog.style.getIePixelValue_(a,b==c?"1em":b,"left","pixelLeft")}c=
goog.dom.createDom("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});goog.dom.appendChild(a,c);b=c.offsetHeight;goog.dom.removeNode(c);return b};goog.style.parseStyleAttribute=function(a){var b={};goog.array.forEach(a.split(/\s*;\s*/),function(a){a=a.split(/\s*:\s*/);2==a.length&&(b[goog.string.toCamelCase(a[0].toLowerCase())]=a[1])});return b};
goog.style.toStyleAttribute=function(a){var b=[];goog.object.forEach(a,function(a,d){b.push(goog.string.toSelectorCase(d),":",a,";")});return b.join("")};goog.style.setFloat=function(a,b){a.style[goog.userAgent.IE?"styleFloat":"cssFloat"]=b};goog.style.getFloat=function(a){return a.style[goog.userAgent.IE?"styleFloat":"cssFloat"]||""};
goog.style.getScrollbarWidth=function(a){var b=goog.dom.createElement("div");a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=goog.dom.createElement("div");goog.style.setSize(a,"200px","200px");b.appendChild(a);goog.dom.appendChild(goog.dom.getDocument().body,b);a=b.offsetWidth-b.clientWidth;goog.dom.removeNode(b);return a};lime.style={};(function(){var a=goog.userAgent.WEBKIT?"Webkit":goog.userAgent.GECKO?"Moz":goog.userAgent.OPERA?"O":goog.userAgent.IE?"ms":"",b=goog.dom.createDom("div").style;lime.style.transformProperty="-"+a.toLowerCase()+"-transform";lime.style.tryProperty=function(a){return void 0!==b[a]?a:!1};lime.style.getCSSproperty=function(b){var d=b.charAt(0).toLowerCase()+b.substr(1),e=a+b;return lime.style.tryProperty(b)?b:lime.style.tryProperty(d)?d:lime.style.tryProperty(e)?e:void 0}})();
lime.style.setBorderRadius=function(){var a=lime.style.getCSSproperty("BorderRadius");return function(b,c,d,e){e=e?"%":"px";d=goog.isDef(d)?d:c;c=(goog.isArray(c)?c.join(e+" "):c)+e+"/"+((goog.isArray(d)?d.join(e+" "):d)+e);c!=b.border_radius_cache_&&(b.style[a]=b.border_radius_cache_=c)}}();lime.style.Transform=function(a){this.values=[];this.precision=1;this.enable3D_=!0;this.opt_precision&&this.setPrecision(a)};lime.style.Transform.prototype.set3DAllowed=function(a){this.enable3D_=a;return this};
lime.style.Transform.prototype.scale=function(a,b){this.values.push("scale("+a+","+b+")");return this};lime.style.Transform.prototype.rotate=function(a,b){0!=a&&this.values.push("rotate("+a+(b?b:"deg")+")");return this};
lime.style.Transform.prototype.translate=function(a,b,c){var d=1/this.precision,e="translate";if(this.enable3D_&&(lime.userAgent.IOS||lime.userAgent.PLAYBOOK))e+="3d";e+="("+a*d+"px,"+b*d+"px";if(this.enable3D_&&(lime.userAgent.IOS||lime.userAgent.PLAYBOOK))e+=","+(c?c:0)*d+"px";this.values.push(e+")");return this};lime.style.Transform.prototype.setPrecision=function(a){if(1!=this.precision){var b=1/this.precision;this.scale(b,b);this.precision=1}1!=a&&(this.scale(a,a),this.precision=a);return this};
lime.style.Transform.prototype.toString=function(){1!=this.precision&&this.setPrecision(1);return this.values.join(" ")};lime.style.setTransform=function(){var a=lime.style.getCSSproperty("Transform");return function(b,c){var d=c.toString();d!=b.transform_cache_&&(b.style[a]=b.transform_cache_=d);lime.transformSet_=1}}();
lime.style.setTransformOrigin=function(){var a=lime.style.getCSSproperty("TransformOrigin");return function(b,c,d,e){e=e?"%":"px";c=c+e+" "+d+e;c!=b.transform_origin_cache_&&(b.style[a]=b.transform_origin_cache_=c)}}();
(function(){var a=lime.style.getCSSproperty("Transition");lime.style.isTransitionsSupported=!!a&&!goog.userAgent.OPERA;var b=function(a,b){if(!a.length)return a;for(var e=a.split("),"),f=0;f<e.length-1;f++)e[f]+=")";e=goog.array.filter(e,function(a){return-1==a.indexOf(b)});return e.join(",")};lime.style.setTransition=function(c,d,e,f){if(a){var g=b(c.style[a],d);g.length&&(g+=", ");g+=d+" "+e+"s cubic-bezier("+f[1]+","+f[2]+","+f[3]+","+f[4]+")";c.style[a]=g}};lime.style.clearTransition=function(c,
d){a&&c&&(c.style[a]=b(c.style[a],d))};lime.style.setSize=function(a,b,e){if(a.width_cache_!=b||a.height_cache_!=e)return a.width_cache_=b,a.height_cache_=e,goog.style.setSize(a,b,e)}})();lime.Renderer.DOM=new lime.Renderer;lime.Renderer.DOM.updateLayout=function(){for(var a=0,b,c=0;b=this.children_[c];c++)b=b instanceof lime.Node?b.rootElement:b,b==this.domElement.childNodes[a]?a++:(goog.dom.contains(this.containerElement,b)&&goog.dom.removeNode(b),lime.Renderer.DOM.appendAt_(this.containerElement,b,a++))};
lime.Renderer.DOM.drawSizePosition=function(){var a=this.getSize(),b=this.getQuality(),c=this.getPosition(),d=this.relativeQuality_||1,e=this.getCSS3DTransformsAllowed();this.transitionsActive_[lime.Transition.POSITION]&&(c=this.transitionsActive_[lime.Transition.POSITION]);var f=Math.round(a.width*d),g=Math.round(a.height*d),h=this.getScale().clone();this.transitionsActive_[lime.Transition.SCALE]&&(h=this.transitionsActive_[lime.Transition.SCALE].clone());0!=f?h.scale(a.width/(f*b/d)):h.scale(1/
b);lime.style.setSize(this.domElement,f,g);lime.style.setTransformOrigin(this.domElement,100*this.anchorPoint_.x,100*this.anchorPoint_.y,!0);f=this.anchorPoint_.x*a.width*d;g=this.anchorPoint_.y*a.height*d;a=c.x*d/b-f;b=c.y*d/b-g;c=this.stroke_?this.stroke_.width_:0;(0!=f-c||0!=g-c)&&(this.domElement==this.containerElement&&this.children_.length)&&lime.Renderer.DOM.makeContainer.call(this);this.domElement!=this.containerElement&&!this.transitionsActiveSet_[lime.Transition.POSITION]&&(!this.transitionsActiveSet_[lime.Transition.SCALE]&&
!this.transitionsActiveSet_[lime.Transition.ROTATION])&&lime.style.setTransform(this.containerElement,(new lime.style.Transform).set3DAllowed(e).translate(f-c,g-c));this.mask_!=this.activeMask_&&(this.activeMask_&&lime.Renderer.DOM.removeMask.call(this),this.mask_&&lime.Renderer.DOM.addMask.call(this));e=(new lime.style.Transform).setPrecision(0.1).set3DAllowed(e);this.mask_&&(lime.Renderer.DOM.calculateMaskPosition.call(this.mask_),e.setPrecision(0.1).translate(-this.mask_.mX-f,-this.mask_.mY-g).rotate(this.mask_.mRot,
"rad").translate(f,g).setPrecision(1));f=-this.getRotation();goog.isDef(this.transitionsActive_[lime.Transition.ROTATION])&&(f=-this.transitionsActive_[lime.Transition.ROTATION]);e.translate(a,b).scale(h.x,h.y).rotate(f);!this.transitionsActiveSet_[lime.Transition.POSITION]&&(!this.transitionsActiveSet_[lime.Transition.SCALE]&&!this.transitionsActiveSet_[lime.Transition.ROTATION])&&lime.style.setTransform(this.domElement,e)};
lime.Renderer.DOM.update=function(){if(this.domElement){lime.Renderer.DOM.drawSizePosition.call(this);if(!this.transitionsActiveSet_[lime.Transition.OPACITY]){var a=this.opacity_;goog.isDef(this.transitionsActive_[lime.Transition.OPACITY])&&(a=this.transitionsActive_[lime.Transition.OPACITY]);this.getDirty()&lime.Dirty.ALPHA&&goog.style.setOpacity(this.domElement,a)}this.getDirty()&lime.Dirty.VISIBILITY&&(this.domElement.style.display=this.hidden_?"none":"block");this.maskTarget_||this.renderer.draw.call(this,
this.domElement)}};
lime.Renderer.DOM.calculateMaskPosition=function(){if(goog.isDef(this.targetNode)&&this.targetNode.inTree_){var a=this.targetNode,b=this.getFrame(),c=new goog.math.Coordinate(b.left,b.top),d=new goog.math.Coordinate(b.right,b.top),e=new goog.math.Coordinate(b.right,b.bottom),b=a.getParent(),c=this.localToNode(c,b),d=this.localToNode(d,b),e=this.localToNode(e,b),b=Math.atan2(c.y-d.y,d.x-c.x),f=d.x-c.x,g=c.y-d.y,h=e.x-d.x,i=e.y-d.y,d=Math.cos(b),e=Math.sin(b);this.mWidth=Math.round(Math.sqrt(f*f+g*
g));this.mHeight=Math.round(Math.sqrt(h*h+i*i));a.renderer.getType()==lime.Renderer.DOM&&(f=a.rootElement,goog.style.setSize(f,this.mWidth,this.mHeight),lime.style.setTransform(f,(new lime.style.Transform).setPrecision(0.1).set3DAllowed(this.getCSS3DTransformsAllowed()).translate(c.x,c.y).rotate(-b,"rad")));this.renderer.getType()==lime.Renderer.DOM&&(this.domElement.style.display="none");this.mPos=a.parentToLocal(c.clone());this.mSet=!0;this.mX=d*c.x-e*c.y;this.mY=d*c.y+e*c.x;this.mRot=b}};
lime.Renderer.DOM.appendAt_=function(a,b,c){void 0==c||a.childNodes.length<=c?a.appendChild(b):a.insertBefore(b,a.childNodes[c])};lime.Renderer.DOM.makeContainer=function(){this.containerElement=goog.dom.createDom("div");for(var a=document.createDocumentFragment(),b;b=this.domElement.firstChild;)this.domElement.removeChild(b),a.appendChild(b);this.containerElement.appendChild(a);this.domElement.appendChild(this.containerElement)};
lime.Renderer.DOM.removeMask=function(){this.domElement!=this.rootElement&&(this.renderer.getType()==lime.Renderer.DOM&&(goog.dom.removeNode(this.domElement),goog.dom.replaceNode(this.domElement,this.rootElement),this.rootElement=this.domElement),this.activeMask_.isMask=0,this.activeMask_=null)};
lime.Renderer.DOM.addMask=function(){this.renderer.getType()==lime.Renderer.DOM&&(this.rootElement=goog.dom.createDom("div"),this.rootElement.style.cssText="position:absolute;overflow:hidden;",lime.style.setTransformOrigin(this.rootElement,0,0),goog.dom.replaceNode(this.rootElement,this.domElement),this.rootElement.appendChild(this.domElement));this.mask_.isMask=1;this.mask_.targetNode=this;this.activeMask_=this.mask_;this.mask_.setDirty(lime.Dirty.POSITION)};goog.string.StringBuffer=function(a,b){null!=a&&this.append.apply(this,arguments)};goog.string.StringBuffer.prototype.buffer_="";goog.string.StringBuffer.prototype.set=function(a){this.buffer_=""+a};goog.string.StringBuffer.prototype.append=function(a,b,c){this.buffer_+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.buffer_+=arguments[d];return this};goog.string.StringBuffer.prototype.clear=function(){this.buffer_=""};goog.string.StringBuffer.prototype.getLength=function(){return this.buffer_.length};
goog.string.StringBuffer.prototype.toString=function(){return this.buffer_};goog.structs={};goog.structs.InversionMap=function(a,b,c){if(a.length!=b.length)return null;this.storeInversion_(a,c);this.values=b};goog.structs.InversionMap.prototype.storeInversion_=function(a,b){this.rangeArray=a;for(var c=1;c<a.length;c++)null==a[c]?a[c]=a[c-1]+1:b&&(a[c]+=a[c-1])};
goog.structs.InversionMap.prototype.spliceInversion=function(a,b,c){var a=new goog.structs.InversionMap(a,b,c),c=a.rangeArray[0],d=goog.array.peek(a.rangeArray),b=this.getLeast(c),d=this.getLeast(d);c!=this.rangeArray[b]&&b++;c=d-b+1;goog.partial(goog.array.splice,this.rangeArray,b,c).apply(null,a.rangeArray);goog.partial(goog.array.splice,this.values,b,c).apply(null,a.values)};goog.structs.InversionMap.prototype.at=function(a){a=this.getLeast(a);return 0>a?null:this.values[a]};
goog.structs.InversionMap.prototype.getLeast=function(a){for(var b=this.rangeArray,c=0,d=b.length;8<d-c;){var e=d+c>>1;b[e]<=a?c=e:d=e}for(;c<d&&!(a<b[c]);++c);return c-1};goog.i18n={};goog.i18n.GraphemeBreak={};goog.i18n.GraphemeBreak.property={ANY:0,CONTROL:1,EXTEND:2,PREPEND:3,SPACING_MARK:4,L:5,V:6,T:7,LV:8,LVT:9,CR:10,LF:11};goog.i18n.GraphemeBreak.inversions_=null;
goog.i18n.GraphemeBreak.applyLegacyBreakRules_=function(a,b){var c=goog.i18n.GraphemeBreak.property;return a==c.CR&&b==c.LF?!1:a==c.CONTROL||a==c.CR||a==c.LF||b==c.CONTROL||b==c.CR||b==c.LF?!0:a==c.L&&(b==c.L||b==c.V||b==c.LV||b==c.LVT)||(a==c.LV||a==c.V)&&(b==c.V||b==c.T)||(a==c.LVT||a==c.T)&&b==c.T||b==c.EXTEND?!1:!0};
goog.i18n.GraphemeBreak.getBreakProp_=function(a){if(44032<=a&&55203>=a){var b=goog.i18n.GraphemeBreak.property;return 16==a%28?b.LV:b.LVT}goog.i18n.GraphemeBreak.inversions_||(goog.i18n.GraphemeBreak.inversions_=new goog.structs.InversionMap([0,10,1,2,1,18,95,33,13,1,594,112,275,7,263,45,1,1,1,2,1,2,1,1,56,4,12,11,48,20,17,1,101,7,1,7,2,2,1,4,33,1,1,1,30,27,91,11,58,9,269,2,1,56,1,1,3,8,4,1,3,4,13,2,29,1,2,56,1,1,1,2,6,6,1,9,1,10,2,29,2,1,56,2,3,17,30,2,3,14,1,56,1,1,3,8,4,1,20,2,29,1,2,56,1,1,2,
1,6,6,11,10,2,30,1,59,1,1,1,12,1,9,1,41,3,58,3,5,17,11,2,30,2,56,1,1,1,1,2,1,3,1,5,11,11,2,30,2,58,1,2,5,7,11,10,2,30,2,70,6,2,6,7,19,2,60,11,5,5,1,1,8,97,13,3,5,3,6,74,2,27,1,1,1,1,1,4,2,49,14,1,5,1,2,8,45,9,1,100,2,4,1,6,1,2,2,2,23,2,2,4,3,1,3,2,7,3,4,13,1,2,2,6,1,1,1,112,96,72,82,357,1,946,3,29,3,29,2,30,2,64,2,1,7,8,1,2,11,9,1,45,3,155,1,118,3,4,2,9,1,6,3,116,17,7,2,77,2,3,228,4,1,47,1,1,5,1,1,5,1,2,38,9,12,2,1,30,1,4,2,2,1,121,8,8,2,2,392,64,523,1,2,2,24,7,49,16,96,33,3311,32,554,6,105,2,30164,
4,9,2,388,1,3,1,4,1,23,2,2,1,88,2,50,16,1,97,8,25,11,2,213,6,2,2,2,2,12,1,8,1,1,434,11172,1116,1024,6942,1,737,16,16,7,216,1,158,2,89,3,513,1,2051,15,40,8,50981,1,1,3,3,1,5,8,8,2,7,30,4,148,3,798140,255],[1,11,1,10,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0,2,1,2,0,2,0,2,0,1,0,2,0,2,0,2,0,2,0,2,4,0,2,0,4,2,4,2,0,2,0,2,0,2,4,0,2,0,2,4,2,4,2,0,2,0,2,0,2,4,0,2,4,2,0,2,0,2,4,0,2,0,4,2,4,2,0,2,0,2,4,0,2,0,2,4,2,4,2,0,2,0,2,0,2,4,2,4,2,0,2,0,4,0,2,4,2,0,2,0,4,0,2,0,4,2,4,2,4,2,4,2,0,2,0,4,
0,2,4,2,4,2,0,2,0,4,0,2,4,2,4,2,4,0,2,0,3,2,0,2,0,2,0,3,0,2,0,2,0,2,0,2,0,2,0,4,0,2,4,2,0,2,0,2,0,2,0,4,2,4,2,4,2,4,2,0,4,2,0,2,0,4,0,4,0,2,0,2,4,2,4,2,0,4,0,5,6,7,0,2,0,2,0,2,0,2,0,2,0,1,4,2,4,2,4,2,0,2,0,2,0,2,0,2,4,2,4,2,4,2,0,4,0,4,0,2,4,0,2,4,0,2,4,2,4,2,4,2,4,0,2,0,2,4,0,4,2,4,2,4,0,4,2,4,2,0,2,0,1,2,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,4,2,4,0,4,0,4,2,0,2,0,2,4,0,2,4,2,4,2,0,2,0,2,4,0,9,0,2,0,2,0,2,0,2,0,1,0,2,0,1,0,2,0,2,0,2,0,2,4,2,0,4,2,1,2,0,2,0,2,0,2,0,1,2],!0));return goog.i18n.GraphemeBreak.inversions_.at(a)};
goog.i18n.GraphemeBreak.hasGraphemeBreak=function(a,b,c){var a=goog.i18n.GraphemeBreak.getBreakProp_(a),b=goog.i18n.GraphemeBreak.getBreakProp_(b),d=goog.i18n.GraphemeBreak.property;return goog.i18n.GraphemeBreak.applyLegacyBreakRules_(a,b)&&!(c&&(a==d.PREPEND||b==d.SPACING_MARK))};goog.format={};goog.format.fileSize=function(a,b){return goog.format.numBytesToString(a,b,!1)};goog.format.isConvertableScaledNumber=function(a){return goog.format.SCALED_NUMERIC_RE_.test(a)};goog.format.stringToNumericValue=function(a){return goog.string.endsWith(a,"B")?goog.format.stringToNumericValue_(a,goog.format.NUMERIC_SCALES_BINARY_):goog.format.stringToNumericValue_(a,goog.format.NUMERIC_SCALES_SI_)};goog.format.stringToNumBytes=function(a){return goog.format.stringToNumericValue_(a,goog.format.NUMERIC_SCALES_BINARY_)};
goog.format.numericValueToString=function(a,b){return goog.format.numericValueToString_(a,goog.format.NUMERIC_SCALES_SI_,b)};goog.format.numBytesToString=function(a,b,c){var d="";if(!goog.isDef(c)||c)d="B";return goog.format.numericValueToString_(a,goog.format.NUMERIC_SCALES_BINARY_,b,d)};goog.format.stringToNumericValue_=function(a,b){var c=a.match(goog.format.SCALED_NUMERIC_RE_);return!c?NaN:c[1]*b[c[2]]};
goog.format.numericValueToString_=function(a,b,c,d){var e=goog.format.NUMERIC_SCALE_PREFIXES_,f=a,g="",h=1;0>a&&(a=-a);for(var i=0;i<e.length;i++){var j=e[i],h=b[j];if(a>=h||1>=h&&a>0.1*h){g=j;break}}g?d&&(g+=d):h=1;a=Math.pow(10,goog.isDef(c)?c:2);return Math.round(f/h*a)/a+g};goog.format.SCALED_NUMERIC_RE_=/^([-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/;goog.format.NUMERIC_SCALE_PREFIXES_="P T G M K  m u n".split(" ");
goog.format.NUMERIC_SCALES_SI_={"":1,n:1.0E-9,u:1.0E-6,m:0.001,k:1E3,K:1E3,M:1E6,G:1E9,T:1E12,P:1E15};goog.format.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)};goog.format.FIRST_GRAPHEME_EXTEND_=768;
goog.format.insertWordBreaksGeneric_=function(a,b,c){c=c||10;if(c>a.length)return a;for(var d=[],e=0,f=0,g=0,h=0,i=0;i<a.length;i++){var j=h,h=a.charCodeAt(i),j=h>=goog.format.FIRST_GRAPHEME_EXTEND_&&!b(j,h,!0);e>=c&&(h>goog.format.WbrToken_.SPACE&&!j)&&(d.push(a.substring(g,i),goog.format.WORD_BREAK_HTML),g=i,e=0);f?h==goog.format.WbrToken_.GT&&f==goog.format.WbrToken_.LT?f=0:h==goog.format.WbrToken_.SEMI_COLON&&f==goog.format.WbrToken_.AMP&&(f=0,e++):h==goog.format.WbrToken_.LT||h==goog.format.WbrToken_.AMP?
f=h:h<=goog.format.WbrToken_.SPACE?e=0:e++}d.push(a.substr(g));return d.join("")};goog.format.insertWordBreaks=function(a,b){return goog.format.insertWordBreaksGeneric_(a,goog.i18n.GraphemeBreak.hasGraphemeBreak,b)};goog.format.conservativelyHasGraphemeBreak_=function(a,b){return 1024<=b&&1315>b};goog.format.insertWordBreaksBasic=function(a,b){return goog.format.insertWordBreaksGeneric_(a,goog.format.conservativelyHasGraphemeBreak_,b)};goog.format.IS_IE8_OR_ABOVE_=goog.userAgent.IE&&goog.userAgent.isVersion(8);
goog.format.WORD_BREAK_HTML=goog.userAgent.WEBKIT?"<wbr></wbr>":goog.userAgent.OPERA?"&shy;":goog.format.IS_IE8_OR_ABOVE_?"&#8203;":"<wbr>";goog.format.WbrToken_={LT:60,GT:62,AMP:38,SEMI_COLON:59,SPACE:32};goog.i18n.bidi={};goog.i18n.bidi.FORCE_RTL=!1;goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||("ar"==goog.LOCALE.substring(0,2).toLowerCase()||"fa"==goog.LOCALE.substring(0,2).toLowerCase()||"he"==goog.LOCALE.substring(0,2).toLowerCase()||"iw"==goog.LOCALE.substring(0,2).toLowerCase()||"ur"==goog.LOCALE.substring(0,2).toLowerCase()||"yi"==goog.LOCALE.substring(0,2).toLowerCase())&&(2==goog.LOCALE.length||"-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3));
goog.i18n.bidi.Format={LRE:"\u202a",RLE:"\u202b",PDF:"\u202c",LRM:"\u200e",RLM:"\u200f"};goog.i18n.bidi.Dir={RTL:-1,UNKNOWN:0,LTR:1};goog.i18n.bidi.RIGHT="right";goog.i18n.bidi.LEFT="left";goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT;goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir=function(a){return"number"==typeof a?0<a?goog.i18n.bidi.Dir.LTR:0>a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.UNKNOWN:a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};goog.i18n.bidi.ltrChars_="A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";goog.i18n.bidi.rtlChars_="\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc";goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g;
goog.i18n.bidi.stripHtmlIfNeeded_=function(a,b){return b?a.replace(goog.i18n.bidi.htmlSkipReg_," "):a};goog.i18n.bidi.rtlCharReg_=RegExp("["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.ltrCharReg_=RegExp("["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.hasAnyRtl=function(a,b){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr=function(a,b){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.ltrRe_=RegExp("^["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlRe_=RegExp("^["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.isRtlChar=function(a){return goog.i18n.bidi.rtlRe_.test(a)};goog.i18n.bidi.isLtrChar=function(a){return goog.i18n.bidi.ltrRe_.test(a)};goog.i18n.bidi.isNeutralChar=function(a){return!goog.i18n.bidi.isLtrChar(a)&&!goog.i18n.bidi.isRtlChar(a)};
goog.i18n.bidi.ltrDirCheckRe_=RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlDirCheckRe_=RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.startsWithRtl=function(a,b){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr=function(a,b){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr;goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/;goog.i18n.bidi.isNeutralText=function(a,b){a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b);return goog.i18n.bidi.isRequiredLtrRe_.test(a)||!goog.i18n.bidi.hasAnyLtr(a)&&!goog.i18n.bidi.hasAnyRtl(a)};
goog.i18n.bidi.ltrExitDirCheckRe_=RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$");goog.i18n.bidi.rtlExitDirCheckRe_=RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$");goog.i18n.bidi.endsWithLtr=function(a,b){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl=function(a,b){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl;goog.i18n.bidi.rtlLocalesRe_=RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)","i");goog.i18n.bidi.isRtlLanguage=function(a){return goog.i18n.bidi.rtlLocalesRe_.test(a)};goog.i18n.bidi.bracketGuardHtmlRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;goog.i18n.bidi.guardBracketInHtml=function(a,b){return(void 0===b?goog.i18n.bidi.hasAnyRtl(a):b)?a.replace(goog.i18n.bidi.bracketGuardHtmlRe_,"<span dir=rtl>$&</span>"):a.replace(goog.i18n.bidi.bracketGuardHtmlRe_,"<span dir=ltr>$&</span>")};
goog.i18n.bidi.guardBracketInText=function(a,b){var c=(void 0===b?goog.i18n.bidi.hasAnyRtl(a):b)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM;return a.replace(goog.i18n.bidi.bracketGuardTextRe_,c+"$&"+c)};goog.i18n.bidi.enforceRtlInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=rtl"):"\n<span dir=rtl>"+a+"</span>"};goog.i18n.bidi.enforceRtlInText=function(a){return goog.i18n.bidi.Format.RLE+a+goog.i18n.bidi.Format.PDF};
goog.i18n.bidi.enforceLtrInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=ltr"):"\n<span dir=ltr>"+a+"</span>"};goog.i18n.bidi.enforceLtrInText=function(a){return goog.i18n.bidi.Format.LRE+a+goog.i18n.bidi.Format.PDF};goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;goog.i18n.bidi.leftRe_=/left/gi;goog.i18n.bidi.rightRe_=/right/gi;goog.i18n.bidi.tempRe_=/%%%%/g;
goog.i18n.bidi.mirrorCSS=function(a){return a.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)};goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g;goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote=function(a){return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1\u05f3")};goog.i18n.bidi.wordSeparatorRe_=/\s+/;goog.i18n.bidi.hasNumeralsRe_=/\d/;goog.i18n.bidi.rtlDetectionThreshold_=0.4;
goog.i18n.bidi.estimateDirection=function(a,b){for(var c=0,d=0,e=!1,f=goog.i18n.bidi.stripHtmlIfNeeded_(a,b).split(goog.i18n.bidi.wordSeparatorRe_),g=0;g<f.length;g++){var h=f[g];goog.i18n.bidi.startsWithRtl(h)?(c++,d++):goog.i18n.bidi.isRequiredLtrRe_.test(h)?e=!0:goog.i18n.bidi.hasAnyLtr(h)?d++:goog.i18n.bidi.hasNumeralsRe_.test(h)&&(e=!0)}return 0==d?e?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.UNKNOWN:c/d>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};
goog.i18n.bidi.detectRtlDirectionality=function(a,b){return goog.i18n.bidi.estimateDirection(a,b)==goog.i18n.bidi.Dir.RTL};goog.i18n.bidi.setElementDirAndAlign=function(a,b){if(a&&(b=goog.i18n.bidi.toDir(b))!=goog.i18n.bidi.Dir.UNKNOWN)a.style.textAlign=b==goog.i18n.bidi.Dir.RTL?"right":"left",a.dir=b==goog.i18n.bidi.Dir.RTL?"rtl":"ltr"};goog.i18n.BidiFormatter=function(a,b){this.contextDir_=goog.i18n.bidi.toDir(a);this.alwaysSpan_=!!b};goog.i18n.BidiFormatter.prototype.getContextDir=function(){return this.contextDir_};goog.i18n.BidiFormatter.prototype.getAlwaysSpan=function(){return this.alwaysSpan_};goog.i18n.BidiFormatter.prototype.setContextDir=function(a){this.contextDir_=goog.i18n.bidi.toDir(a)};goog.i18n.BidiFormatter.prototype.setAlwaysSpan=function(a){this.alwaysSpan_=a};
goog.i18n.BidiFormatter.prototype.estimateDirection=goog.i18n.bidi.estimateDirection;goog.i18n.BidiFormatter.prototype.areDirectionalitiesOpposite_=function(a,b){return 0>a*b};
goog.i18n.BidiFormatter.prototype.dirResetIfNeeded_=function(a,b,c,d){return d&&(this.areDirectionalitiesOpposite_(b,this.contextDir_)||this.contextDir_==goog.i18n.bidi.Dir.LTR&&goog.i18n.bidi.endsWithRtl(a,c)||this.contextDir_==goog.i18n.bidi.Dir.RTL&&goog.i18n.bidi.endsWithLtr(a,c))?this.contextDir_==goog.i18n.bidi.Dir.LTR?goog.i18n.bidi.Format.LRM:goog.i18n.bidi.Format.RLM:""};goog.i18n.BidiFormatter.prototype.dirAttrValue=function(a,b){return this.knownDirAttrValue(this.estimateDirection(a,b))};
goog.i18n.BidiFormatter.prototype.knownDirAttrValue=function(a){a==goog.i18n.bidi.Dir.UNKNOWN&&(a=this.contextDir_);return a==goog.i18n.bidi.Dir.RTL?"rtl":"ltr"};goog.i18n.BidiFormatter.prototype.dirAttr=function(a,b){return this.knownDirAttr(this.estimateDirection(a,b))};goog.i18n.BidiFormatter.prototype.knownDirAttr=function(a){return a!=this.contextDir_?a==goog.i18n.bidi.Dir.RTL?"dir=rtl":a==goog.i18n.bidi.Dir.LTR?"dir=ltr":"":""};
goog.i18n.BidiFormatter.prototype.spanWrap=function(a,b,c){return this.spanWrapWithKnownDir(this.estimateDirection(a,b),a,b,c)};goog.i18n.BidiFormatter.prototype.spanWrapWithKnownDir=function(a,b,c,d){var d=d||void 0==d,e=a!=goog.i18n.bidi.Dir.UNKNOWN&&a!=this.contextDir_;c||(b=goog.string.htmlEscape(b));c=[];this.alwaysSpan_||e?(c.push("<span"),e&&c.push(a==goog.i18n.bidi.Dir.RTL?" dir=rtl":" dir=ltr"),c.push(">"+b+"</span>")):c.push(b);c.push(this.dirResetIfNeeded_(b,a,!0,d));return c.join("")};
goog.i18n.BidiFormatter.prototype.unicodeWrap=function(a,b,c){return this.unicodeWrapWithKnownDir(this.estimateDirection(a,b),a,b,c)};goog.i18n.BidiFormatter.prototype.unicodeWrapWithKnownDir=function(a,b,c,d){var d=d||void 0==d,e=[];a!=goog.i18n.bidi.Dir.UNKNOWN&&a!=this.contextDir_?(e.push(a==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.Format.RLE:goog.i18n.bidi.Format.LRE),e.push(b),e.push(goog.i18n.bidi.Format.PDF)):e.push(b);e.push(this.dirResetIfNeeded_(b,a,c,d));return e.join("")};
goog.i18n.BidiFormatter.prototype.markAfter=function(a,b){return this.dirResetIfNeeded_(a,this.estimateDirection(a,b),b,!0)};goog.i18n.BidiFormatter.prototype.mark=function(){switch(this.contextDir_){case goog.i18n.bidi.Dir.LTR:return goog.i18n.bidi.Format.LRM;case goog.i18n.bidi.Dir.RTL:return goog.i18n.bidi.Format.RLM;default:return""}};goog.i18n.BidiFormatter.prototype.startEdge=function(){return this.contextDir_==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT};
goog.i18n.BidiFormatter.prototype.endEdge=function(){return this.contextDir_==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT};var soy={};soy.StringBuilder=goog.string.StringBuffer;soy.renderElement=function(a,b,c){a.innerHTML=b(c)};soy.renderAsFragment=function(a,b){return goog.dom.htmlToDocumentFragment(a(b))};soy.$$augmentData=function(a,b){function c(){}c.prototype=a;var d=new c,e;for(e in b)d[e]=b[e];return d};soy.$$escapeHtml=function(a){return goog.string.htmlEscape(""+a)};soy.$$escapeJs=function(a){for(var a=""+a,b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
soy.$$escapeUri=function(a){return goog.string.urlEncode(""+a)};soy.$$insertWordBreaks=function(a,b){return goog.format.insertWordBreaks(""+a,b)};soy.$$changeNewlineToBr=function(a){return goog.string.newLineToBr(""+a,!1)};soy.$$bidiFormatterCache_={};soy.$$bidiFormatterInstance_=function(a){return soy.$$bidiFormatterCache_[a]||(soy.$$bidiFormatterCache_[a]=new goog.i18n.BidiFormatter(a))};soy.$$bidiTextDir=function(a,b){return!a?0:goog.i18n.bidi.detectRtlDirectionality(a,b)?-1:1};
soy.$$bidiDirAttr=function(a,b,c){return soy.$$bidiFormatterInstance_(a).dirAttr(b,c)};soy.$$bidiMarkAfter=function(a,b,c){return soy.$$bidiFormatterInstance_(a).markAfter(b,c)};soy.$$bidiSpanWrap=function(a,b){return soy.$$bidiFormatterInstance_(a).spanWrap(b+"",!0)};soy.$$bidiUnicodeWrap=function(a,b){return soy.$$bidiFormatterInstance_(a).unicodeWrap(b+"",!0)};lime.css={};
lime.css.css=function(a,b){var c=b||new soy.StringBuilder;c.append(".","lime-director"," {position:absolute; -webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; image-rendering:  optimizeSpeed; overflow: hidden;}.","lime-director"," div, .","lime-director"," img, .","lime-director"," canvas {-webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; position: absolute; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -moz-user-select: none; -webkit-user-select: none; -webkit-user-drag: none;}.","lime-scene",
" {position:absolute; width:100%; height:100%; left: 0px; top: 0px; overflow: hidden; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}.","lime-fps"," {float: left; background: #333; color: #fff; position: absolute; top:0px; left: 0px; padding:2px 4px;}div.","lime-layer"," {position: absolute; left: 0px; top: 0px; width:0px; height:0px; border: none !important;}.","lime-cover"," {position: absolute; left: 0px; top: 0px;}.","lime-button"," {cursor: pointer;}");if(!b)return c.toString()};(function(){var a=[[],[]],b=[[],[]];lime.setObjectDirty=function(c,d,e){goog.array.insert((e?b:a)[d||0],c)};lime.clearObjectDirty=function(){};lime.updateDirtyObjects=function(){for(var c,d=0;2>d;d++){for(;a[d].length;)c=a[d][0],c.update(d),c.dirty_=0,c==a[d][0]&&a[d].shift();a[d]=[]}b=[[],[]]}})();lime.Dirty={POSITION:1,SCALE:2,CONTENT:4,FONT:8,ALPHA:16,VISIBILITY:32,LAYOUT:64,ROTATION:128,ALL:7};lime.AutoResize={NONE:0,LEFT:1,WIDTH:2,RIGHT:4,TOP:8,HEIGHT:16,BOTTOM:32,ALL:63};
lime.Transition={POSITION:1,SCALE:2,SIZE:3,ROTATION:4,OPACITY:5};goog.style.installStyles(lime.css.css(null,null));lime.Node=function(){goog.events.EventTarget.call(this);this.children_=[];this.parent_=null;this.transitionsAdd_={};this.transitionsActive_={};this.transitionsActiveSet_={};this.transitionsClear_={};this.allow3DCSSTransform_=!0;this.inTree_=!1;this.scene_=this.director_=null;this.eventHandlers_={};this.setScale(1);this.setPosition(0,0);this.setSize(0,0);this.quality_=1;this.setAnchorPoint(0.5,0.5);this.setRotation(0);this.setAutoResize(lime.AutoResize.NONE);this.opacity_=1;this.setMask(null);this.setRenderer(this.supportedRenderers[0].getType());
this.setDirty(lime.Dirty.LAYOUT)};goog.inherits(lime.Node,goog.events.EventTarget);lime.Node.prototype.supportedRenderers=[lime.Renderer.DOM,lime.Renderer.CANVAS];lime.Node.prototype.setRenderer=function(a){if(!this.renderer||this.renderer.getType()!=a){for(var b=-1,c=0;c<this.supportedRenderers.length;c++)if(this.supportedRenderers[c].getType()==a){b=c;break}if(-1==b)return this;this.renderer=this.supportedRenderers[c];this.setDirty(lime.Dirty.LAYOUT);for(c=0;b=this.children_[c];c++)b.setRenderer(a)}return this};
lime.Node.prototype.needsDomElement=function(){return!(this.parent_&&this.parent_.renderer.getType()==lime.Renderer.CANVAS)};lime.Node.prototype.getDeepestDomElement=function(){return this.getDeepestParentWithDom().domElement};lime.Node.prototype.getDeepestParentWithDom=function(){return this.needsDomElement()?(this.updateDomElement(),this):this.parent_?this.parent_.getDeepestParentWithDom():null};
lime.Node.prototype.getParentStack_=function(){if(!this.parent_||this instanceof lime.Scene)return[];var a=this.parent_.children_.indexOf(this),b=this.parent_.getParentStack_();b.push(a);return b};lime.Node.compareNode=function(a,b){if(a==b)return 0;for(var c=a.getParentStack_(),d=b.getParentStack_(),e=0;;){if(c.length<=e)return 1;if(d.length<=e)return-1;if(c[e]==d[e])e++;else return c[e]>d[e]?-1:1}};lime.Node.prototype.customEvent_=!1;lime.Node.prototype.getDirty=function(){return this.dirty_};
lime.Node.prototype.setDirty=function(a,b,c){a&&!this.dirty_&&lime.setObjectDirty(this,b,c);this.dirty_|=a;if(a==lime.Dirty.LAYOUT)for(var d=0,e;e=this.children_[d];d++)e instanceof lime.Node&&e.setDirty(lime.Dirty.LAYOUT);if(!goog.isDef(this.dirty_)||!a)this.dirty_=0,lime.clearObjectDirty(this,b,c);a&&this.maskTarget_&&(this.mSet=!1,this.maskTarget_.setDirty(-1));return this};lime.Node.prototype.getScale=function(){return this.scale_};
lime.Node.prototype.setScale=function(a,b){this.scale_=1==arguments.length&&goog.isNumber(a)?new goog.math.Vec2(a,a):2==arguments.length?new goog.math.Vec2(arguments[0],arguments[1]):a;return this.transitionsActive_[lime.Transition.SCALE]?this:this.setDirty(lime.Dirty.SCALE)};lime.Node.prototype.getPosition=function(){return this.position_};
lime.Node.prototype.setPosition=function(a,b){this.position_=2==arguments.length?new goog.math.Coordinate(arguments[0],arguments[1]):a;return this.transitionsActive_[lime.Transition.POSITION]?this:this.setDirty(lime.Dirty.POSITION)};lime.Node.prototype.getMask=function(){return this.mask_};
lime.Node.prototype.setMask=function(a){if(a==this.mask_)return this;this.mask_&&(this.mask_.releaseDependencies(),delete this.mask_.maskTarget_);if(this.mask_=a)this.mask_.setupDependencies(),this.mask_.maskTarget_=this;return this.setDirty(lime.Dirty.CONTENT)};lime.Node.prototype.getAnchorPoint=function(){return this.anchorPoint_};lime.Node.prototype.setAnchorPoint=function(a,b){this.anchorPoint_=2==arguments.length?new goog.math.Vec2(arguments[0],arguments[1]):a;return this.setDirty(lime.Dirty.POSITION)};
lime.Node.prototype.getRotation=function(){return this.rotation_%=360};lime.Node.prototype.setRotation=function(a){this.rotation_=a;return this.transitionsActive_[lime.Transition.ROTATION]?this:this.setDirty(lime.Dirty.POSITION)};lime.Node.prototype.getHidden=function(){return this.hidden_};lime.Node.prototype.setHidden=function(a){this.hidden_=a;this.setDirty(lime.Dirty.VISIBILITY);this.autoHide_=0;return this};lime.Node.prototype.getSize=function(){return this.size_};
lime.Node.prototype.setSize=function(a,b){var c=this.size_,d,e;d=2==arguments.length?new goog.math.Size(arguments[0],arguments[1]):a;var f=this.getAnchorPoint();if(c&&this.children_.length)for(var g=0;g<this.children_.length;g++){var h=this.children_[g];if(h.getAutoResize){var i=h.getAutoResize();if(i!=lime.AutoResize.NONE){var j=h.getBoundingBox();e=c.width;var l=j.left+f.x*c.width,k=j.right-j.left,m=e-j.right-f.x*c.width;i&lime.AutoResize.LEFT&&(e-=l);i&lime.AutoResize.WIDTH&&(e-=k);i&lime.AutoResize.RIGHT&&
(e-=m);e!=c.width&&(e=(d.width-e)/(c.width-e),i&lime.AutoResize.LEFT&&(l*=e),i&lime.AutoResize.WIDTH&&(k*=e));e=c.height;var m=j.top+f.y*c.height,n=j.bottom-j.top,j=e-j.bottom-f.y*c.height;i&lime.AutoResize.TOP&&(e-=m);i&lime.AutoResize.HEIGHT&&(e-=n);i&lime.AutoResize.BOTTOM&&(e-=j);e!=c.height&&(e=(d.height-e)/(c.height-e),i&lime.AutoResize.TOP&&(m*=e),i&lime.AutoResize.HEIGHT&&(n*=e));i=h.getAnchorPoint();h.setSize(k,n);h.setPosition(l+i.x*k-f.x*d.width,m+i.y*n-f.y*d.height)}}}this.size_=d;return this.setDirty(lime.Dirty.SCALE)};
lime.Node.prototype.getQuality=function(){return this.quality_};lime.Node.prototype.setQuality=function(a){this.quality_!=a&&(this.quality_=a,this.setDirty(lime.Dirty.SCALE),this.calcRelativeQuality());return this};lime.Node.prototype.getRelativeQuality=function(){this.relativeQuality_||this.calcRelativeQuality();return this.relativeQuality_};
lime.Node.prototype.calcRelativeQuality=function(){var a=goog.isDef(this.relativeQuality_)?this.relativeQuality_:this.quality_;this.parent_&&this.parent_.relativeQuality_&&(a=this.quality_*this.parent_.relativeQuality_);if(a!=this.relativeQuality_){this.relativeQuality_=a;for(var a=0,b;b=this.children_[a];a++)b instanceof lime.Node&&b.calcRelativeQuality();this.setDirty(lime.Dirty.SCALE)}};lime.Node.prototype.getAutoResize=function(){return this.autoResize_};
lime.Node.prototype.setAutoResize=function(a){this.autoResize_=a;return this.setDirty(lime.Dirty.ALL)};lime.Node.prototype.setAllow3DCSSTransforms=function(a){this.allow3DCSSTransform_=a;return this};lime.Node.prototype.getCSS3DTransformsAllowed=function(){return this.allow3DCSSTransform_};lime.Node.prototype.screenToLocal=function(a){return!this.inTree_?a:this.parentToLocal(this.getParent().screenToLocal(a))};
lime.Node.prototype.parentToLocal=function(a){if(!this.getParent())return null;a.x-=this.position_.x;a.y-=this.position_.y;a.x/=this.scale_.x;a.y/=this.scale_.y;if(0!=this.rotation_){var b=a.clone(),c=this.rotation_*Math.PI/180,d=Math.cos(c),c=Math.sin(c);a.x=d*b.x-c*b.y;a.y=d*b.y+c*b.x}return a};lime.Node.prototype.localToScreen=function(a){return!this.inTree_?a:this.getParent().localToScreen(this.localToParent(a))};
lime.Node.prototype.localToParent=function(a){if(!this.getParent())return a;var b=a.clone();if(0!=this.rotation_){var c=-this.rotation_*Math.PI/180,d=Math.cos(c),c=Math.sin(c);b.x=d*a.x-c*a.y;b.y=d*a.y+c*a.x}b.x*=this.scale_.x;b.y*=this.scale_.y;b.x+=this.position_.x;b.y+=this.position_.y;return b};lime.Node.prototype.localToNode=function(a,b){return!this.inTree_?a:b.screenToLocal(this.localToScreen(a))};lime.Node.prototype.getOpacity=function(){return this.opacity_};
lime.Node.prototype.setOpacity=function(a){this.opacity_=a;a=this.getHidden();0==this.opacity_&&!a?(this.setHidden(!0),this.autoHide_=1):0!=this.opacity_&&(a&&this.autoHide_)&&this.setHidden(!1);if(goog.isDef(this.transitionsActive_[lime.Transition.OPACITY]))return this;this.setDirty(lime.Dirty.ALPHA);return this};
lime.Node.prototype.createDomElement=function(){var a=this.renderer.getType()==lime.Renderer.CANVAS?"canvas":"div",b=function(){this.domElement=this.rootElement=this.containerElement=goog.dom.createDom(a);this.domClassName&&goog.dom.classes.add(this.domElement,this.domClassName);this.dirty_|=-1};if(this.domElement){if(this.domElement.tagName.toLowerCase()!=a){var c=this.rootElement;b.call(this);c.parentNode&&c.parentNode.replaceChild(this.rootElement,c)}}else b.call(this)};
lime.Node.prototype.updateDomElement=function(){this.needsDomElement()?this.createDomElement():this.removeDomElement()};lime.Node.prototype.removeDomElement=function(){this.rootElement&&(goog.dom.removeNode(this.rootElement),delete this.domElement,delete this.rootElement,delete this.containerElement)};
lime.Node.prototype.updateLayout=function(){this.dirty_&=~lime.Dirty.LAYOUT;this.updateDomElement();if(this.parent_&&this.parent_.dirty_&lime.Dirty.LAYOUT)this.parent_.updateLayout();else if(this.needsDomElement()){for(var a=0,b;b=this.children_[a];a++)b instanceof lime.Node&&b.updateLayout();this.renderer.updateLayout.call(this)}};
lime.Node.prototype.update=function(a){var b,c,a=a||0;goog.getUid(this);this.dirty_&lime.Dirty.LAYOUT&&this.updateLayout();var d=this.renderer.getType()==lime.Renderer.DOM||a;if(d){for(var e in this.transitionsClear_)delete this.transitionsActive_[e],delete this.transitionsActiveSet_[e],b=lime.Node.getPropertyForTransition(parseInt(e,10)),lime.style.clearTransition(this.domElement,b),this.domElement!=this.containerElement&&lime.style.clearTransition(this.continerElement,b);b=0;for(e in this.transitionsAdd_)if(c=
this.transitionsAdd_[e],!c[3])if(c[3]=1,e==lime.Transition.POSITION&&this.positionDrawn_!=this.position_&&(this.setDirty(lime.Dirty.POSITION,0,!0),b=1),e==lime.Transition.SCALE&&this.scaleDrawn_!=this.scale_&&(this.setDirty(lime.Dirty.SCALE,0,!0),b=1),e==lime.Transition.OPACITY&&this.opacityDrawn_!=this.opacity_&&(this.setDirty(lime.Dirty.ALPHA,0,!0),b=1),e==lime.Transition.ROTATION&&this.rotationDrawn_!=this.rotation_)this.setDirty(lime.Dirty.ROTATION,0,!0),b=1;if(!b)for(e in this.transitionsAdd_){c=
this.transitionsAdd_[e];b=lime.Node.getPropertyForTransition(parseInt(e,10));if(this.renderer.getType()==lime.Renderer.DOM||"opacity"!=b)this.transitionsActive_[e]=c[0],lime.style.setTransition(this.domElement,b,c[1],c[2]),this.domElement!=this.containerElement&&b==lime.style.transformProperty&&lime.style.setTransition(this.containerElement,b,c[1],c[2]);delete this.transitionsAdd_[e]}this.positionDrawn_=this.position_;this.scaleDrawn_=this.scale_;this.opacityDrawn_=this.opacity_;this.rotationDrawn_=
this.rotation_;this.transitionsClear_={}}a?this.renderer.drawCanvas.call(this):(this.renderer.getType()==lime.Renderer.CANVAS&&(c=this.getDeepestParentWithDom(),c.redraw_=1,c==this&&(this.dirty_==lime.Dirty.POSITION&&!this.mask_)&&(c.redraw_=0),lime.setObjectDirty(this.getDeepestParentWithDom(),1)),this.renderer.update.call(this));if(d)for(e in this.transitionsActive_)this.transitionsActive_[e]&&(this.transitionsActiveSet_[e]=!0);if(this.dependencies_)for(e=0;e<this.dependencies_.length;e++)this.dependencies_[e].setDirty(lime.Dirty.ALL);
this.setDirty(0,a)};lime.Node.getPropertyForTransition=function(a){return a==lime.Transition.OPACITY?"opacity":lime.style.transformProperty};lime.Node.prototype.getParent=function(){return this.parent_?this.parent_:null};
lime.Node.prototype.appendChild=function(a,b){a instanceof lime.Node&&a.getParent()?a.getParent().removeChild(a):a.parentNode&&goog.dom.removeNode(a);a.parent_=this;void 0==b?this.children_.push(a):goog.array.insertAt(this.children_,a,b);this.renderer.getType()!=lime.Renderer.DOM&&a.setRenderer(this.renderer.getType());a instanceof lime.Node&&(a.calcRelativeQuality(),this.inTree_&&a.wasAddedToTree());return this.setDirty(lime.Dirty.LAYOUT)};lime.Node.prototype.getNumberOfChildren=function(){return this.children_.length};
lime.Node.prototype.getChildAt=function(a){return 0<=a&&this.getNumberOfChildren()>a?this.children_[a]:null};lime.Node.prototype.getChildIndex=function(a){return this.children_.indexOf(a)};lime.Node.prototype.removeChild=function(a){return this.removeChildAt(this.getChildIndex(a))};
lime.Node.prototype.removeChildAt=function(a){if(0<=a&&this.getNumberOfChildren()>a){var b=this.getChildAt(a);b.maskTarget_&&b.maskTarget_.setMask(null);b instanceof lime.Node?(this.inTree_&&b.wasRemovedFromTree(),b.removeDomElement(),b.parent_=null):goog.dom.removeNode(b);this.children_.splice(a,1);return this.setDirty(lime.Dirty.LAYOUT)}return this};lime.Node.prototype.removeAllChildren=function(){for(;this.getNumberOfChildren();)this.removeChildAt(0);return this};
lime.Node.prototype.setChildIndex=function(a,b){var c=this.getChildIndex(a);return-1!=c&&c!=b?(this.children_.splice(c,1),goog.array.insertAt(this.children_,a,b),this.getDirector()&&this.getDirector().eventDispatcher.updateDispatchOrder(a),this.setDirty(lime.Dirty.LAYOUT)):this};
lime.Node.prototype.addEventListener=function(a){lime.userAgent.SUPPORTS_TOUCH&&"mouse"==a.substring(0,5)||(goog.isDef(this.eventHandlers_[a])||(this.eventHandlers_[a]=[0,0]),this.inTree_&&0==this.eventHandlers_[a][0]&&(this.eventHandlers_[a][0]=1,this.getDirector().eventDispatcher.register(this,a)),this.eventHandlers_[a][1]++)};
lime.Node.prototype.removeEventListener=function(a){lime.userAgent.SUPPORTS_TOUCH&&"mouse"==a.substring(0,5)||(this.inTree_&&1==this.eventHandlers_[a][1]&&(this.eventHandlers_[a][0]=0,this.getDirector().eventDispatcher.release(this,a)),this.eventHandlers_[a][1]--,this.eventHandlers_[a][1]||delete this.eventHandlers_[a])};lime.Node.prototype.getDirector=function(){return!this.inTree_?null:this.director_};lime.Node.prototype.getScene=function(){return!this.inTree_?null:this.scene_};
lime.Node.prototype.wasRemovedFromTree=function(){var a;this.dependencySet_||this.removeDependency(this.getParent());for(var b=0;a=this.children_[b];b++)a instanceof lime.Node&&a.wasRemovedFromTree();for(var c in this.eventHandlers_){this.eventHandlers_[c][0]=0;if(!this.getDirector())debugger;this.getDirector().eventDispatcher.release(this,c)}this.getDirector().eventDispatcher.updateDispatchOrder(this);this.inTree_=!1;this.scene_=this.director_=null};
lime.Node.prototype.wasAddedToTree=function(){this.inTree_=!0;this.director_=this.parent_.getDirector();this.scene_=this.parent_.getScene();for(var a=0,b;b=this.children_[a];a++)b instanceof lime.Node&&b.wasAddedToTree();for(var c in this.eventHandlers_)this.eventHandlers_[c][0]=1,this.getDirector().eventDispatcher.register(this,c);this.dependencySet_&&this.setupDependencies();this.getDirector().eventDispatcher.updateDispatchOrder(this)};
lime.Node.prototype.setupDependencies=function(){this.dependencySet_=!0;this.inTree_&&this.addDependency(this.getParent())};lime.Node.prototype.addDependency=function(a){a.dependencies_||(a.dependencies_=[]);goog.array.insert(a.dependencies_,this);!a&&!(a.getParent()instanceof lime.Scene)&&this.addDependency(a.getParent())};lime.Node.prototype.removeDependency=function(a){a&&a.dependencies_&&(goog.array.remove(a.dependencies_,this),this.removeDependency(a.getParent()))};
lime.Node.prototype.releaseDependencies=function(){delete this.dependencySet_;this.removeDependency(this.getParent())};lime.Node.prototype.getFrame=function(){var a=this.getSize(),b=this.getAnchorPoint();return new goog.math.Box(-a.height*b.y,a.width*(1-b.x),a.height*(1-b.y),-a.width*b.x)};
lime.Node.prototype.getBoundingBox=function(a){var b=a||this.getFrame(),a=new goog.math.Coordinate(b.left,b.top),c=new goog.math.Coordinate(b.right,b.top),d=new goog.math.Coordinate(b.left,b.bottom),b=new goog.math.Coordinate(b.right,b.bottom),a=this.localToParent(a),c=this.localToParent(c),d=this.localToParent(d),b=this.localToParent(b);return new goog.math.Box(Math.floor(Math.min(a.y,c.y,d.y,b.y)),Math.ceil(Math.max(a.x,c.x,d.x,b.x)),Math.ceil(Math.max(a.y,c.y,d.y,b.y)),Math.floor(Math.min(a.x,
c.x,d.x,b.x)))};lime.Node.prototype.measureContents=function(){var a=this.getFrame();a.left==a.right&&this.children_.length&&(a=this.children_[0].getBoundingBox(this.children_[0].measureContents()));for(var b=0,c;c=this.children_[b];b++)1!=c.isMask&&a.expandToInclude(c.getBoundingBox(c.measureContents()));return a};lime.Node.prototype.addTransition=function(a,b,c,d){this.transitionsAdd_[a]=[b,c,d,0]};lime.Node.prototype.clearTransition=function(a){this.transitionsClear_[a]=1};
lime.Node.prototype.hitTest=function(a){var b=this.screenToLocal(a.screenPosition);return this.getFrame().contains(b)?(a.position=b,!0):!1};lime.Node.prototype.runAction=function(a){a.addTarget(this);a.play()};lime.Layer=function(){lime.Node.call(this);this.domClassName="lime-layer"};goog.inherits(lime.Layer,lime.Node);lime.Layer.prototype.hitTest=function(a){for(var b=0,c;c=this.children_[b];b++)if(c.hitTest(a))return a.position=this.screenToLocal(a.screenPosition),!0;return!1};goog.color={};
goog.color.names={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};goog.color.parse=function(a){var b={},a=""+a,c=goog.color.prependHashIfNecessaryHelper(a);if(goog.color.isValidHexColor_(c))return b.hex=goog.color.normalizeHex(c),b.type="hex",b;c=goog.color.isValidRgbColor_(a);if(c.length)return b.hex=goog.color.rgbArrayToHex(c),b.type="rgb",b;if(goog.color.names&&(c=goog.color.names[a.toLowerCase()]))return b.hex=c,b.type="named",b;throw Error(a+" is not a valid color string");};
goog.color.isValidColor=function(a){var b=goog.color.prependHashIfNecessaryHelper(a);return!(!goog.color.isValidHexColor_(b)&&!(goog.color.isValidRgbColor_(a).length||goog.color.names&&goog.color.names[a.toLowerCase()]))};goog.color.parseRgb=function(a){var b=goog.color.isValidRgbColor_(a);if(!b.length)throw Error(a+" is not a valid RGB color");return b};goog.color.hexToRgbStyle=function(a){return goog.color.rgbStyle_(goog.color.hexToRgb(a))};goog.color.hexTripletRe_=/#(.)(.)(.)/;
goog.color.normalizeHex=function(a){if(!goog.color.isValidHexColor_(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(goog.color.hexTripletRe_,"#$1$1$2$2$3$3"));return a.toLowerCase()};goog.color.hexToRgb=function(a){var a=goog.color.normalizeHex(a),b=parseInt(a.substr(1,2),16),c=parseInt(a.substr(3,2),16),a=parseInt(a.substr(5,2),16);return[b,c,a]};
goog.color.rgbToHex=function(a,b,c){a=Number(a);b=Number(b);c=Number(c);if(isNaN(a)||0>a||255<a||isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c)throw Error('"('+a+","+b+","+c+'") is not a valid RGB color');a=goog.color.prependZeroIfNecessaryHelper(a.toString(16));b=goog.color.prependZeroIfNecessaryHelper(b.toString(16));c=goog.color.prependZeroIfNecessaryHelper(c.toString(16));return"#"+a+b+c};goog.color.rgbArrayToHex=function(a){return goog.color.rgbToHex(a[0],a[1],a[2])};
goog.color.rgbToHsl=function(a,b,c){var a=a/255,b=b/255,c=c/255,d=Math.max(a,b,c),e=Math.min(a,b,c),f=0,g=0,h=0.5*(d+e);d!=e&&(d==a?f=60*(b-c)/(d-e):d==b?f=60*(c-a)/(d-e)+120:d==c&&(f=60*(a-b)/(d-e)+240),g=0<h&&0.5>=h?(d-e)/(2*h):(d-e)/(2-2*h));return[Math.round(f+360)%360,g,h]};goog.color.rgbArrayToHsl=function(a){return goog.color.rgbToHsl(a[0],a[1],a[2])};goog.color.hueToRgb_=function(a,b,c){0>c?c+=1:1<c&&(c-=1);return 1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a};
goog.color.hslToRgb=function(a,b,c){var d=0,e=0,f=0,a=a/360;if(0==b)d=e=f=255*c;else var g=f=0,g=0.5>c?c*(1+b):c+b-b*c,f=2*c-g,d=255*goog.color.hueToRgb_(f,g,a+1/3),e=255*goog.color.hueToRgb_(f,g,a),f=255*goog.color.hueToRgb_(f,g,a-1/3);return[Math.round(d),Math.round(e),Math.round(f)]};goog.color.hslArrayToRgb=function(a){return goog.color.hslToRgb(a[0],a[1],a[2])};goog.color.validHexColorRe_=/^#(?:[0-9a-f]{3}){1,2}$/i;goog.color.isValidHexColor_=function(a){return goog.color.validHexColorRe_.test(a)};
goog.color.normalizedHexColorRe_=/^#[0-9a-f]{6}$/;goog.color.isNormalizedHexColor_=function(a){return goog.color.normalizedHexColorRe_.test(a)};goog.color.rgbColorRe_=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;goog.color.isValidRgbColor_=function(a){var b=a.match(goog.color.rgbColorRe_);if(b){var a=Number(b[1]),c=Number(b[2]),b=Number(b[3]);if(0<=a&&255>=a&&0<=c&&255>=c&&0<=b&&255>=b)return[a,c,b]}return[]};
goog.color.prependZeroIfNecessaryHelper=function(a){return 1==a.length?"0"+a:a};goog.color.prependHashIfNecessaryHelper=function(a){return"#"==a.charAt(0)?a:"#"+a};goog.color.rgbStyle_=function(a){return"rgb("+a.join(",")+")"};
goog.color.hsvToRgb=function(a,b,c){var d=0,e=0,f=0;if(0==b)f=e=d=c;else{var g=Math.floor(a/60),h=a/60-g,a=c*(1-b),i=c*(1-b*h),b=c*(1-b*(1-h));switch(g){case 1:d=i;e=c;f=a;break;case 2:d=a;e=c;f=b;break;case 3:d=a;e=i;f=c;break;case 4:d=b;e=a;f=c;break;case 5:d=c;e=a;f=i;break;case 6:case 0:d=c,e=b,f=a}}return[Math.floor(d),Math.floor(e),Math.floor(f)]};
goog.color.rgbToHsv=function(a,b,c){var d=Math.max(Math.max(a,b),c),e=Math.min(Math.min(a,b),c);if(e==d)e=a=0;else{var f=d-e,e=f/d,a=60*(a==d?(b-c)/f:b==d?2+(c-a)/f:4+(a-b)/f);0>a&&(a+=360);360<a&&(a-=360)}return[a,e,d]};goog.color.rgbArrayToHsv=function(a){return goog.color.rgbToHsv(a[0],a[1],a[2])};goog.color.hsvArrayToRgb=function(a){return goog.color.hsvToRgb(a[0],a[1],a[2])};goog.color.hexToHsl=function(a){a=goog.color.hexToRgb(a);return goog.color.rgbToHsl(a[0],a[1],a[2])};
goog.color.hslToHex=function(a,b,c){return goog.color.rgbArrayToHex(goog.color.hslToRgb(a,b,c))};goog.color.hslArrayToHex=function(a){return goog.color.rgbArrayToHex(goog.color.hslToRgb(a[0],a[1],a[2]))};goog.color.hexToHsv=function(a){return goog.color.rgbArrayToHsv(goog.color.hexToRgb(a))};goog.color.hsvToHex=function(a,b,c){return goog.color.rgbArrayToHex(goog.color.hsvToRgb(a,b,c))};goog.color.hsvArrayToHex=function(a){return goog.color.hsvToHex(a[0],a[1],a[2])};
goog.color.hslDistance=function(a,b){var c,d;c=0.5>=a[2]?a[1]*a[2]:a[1]*(1-a[2]);d=0.5>=b[2]?b[1]*b[2]:b[1]*(1-b[2]);return(a[2]-b[2])*(a[2]-b[2])+c*c+d*d-2*c*d*Math.cos(2*(a[0]/360-b[0]/360)*Math.PI)};goog.color.blend=function(a,b,c){c=goog.math.clamp(c,0,1);return[Math.round(c*a[0]+(1-c)*b[0]),Math.round(c*a[1]+(1-c)*b[1]),Math.round(c*a[2]+(1-c)*b[2])]};goog.color.darken=function(a,b){return goog.color.blend([0,0,0],a,b)};
goog.color.lighten=function(a,b){return goog.color.blend([255,255,255],a,b)};goog.color.highContrast=function(a,b){for(var c=[],d=0;d<b.length;d++)c.push({color:b[d],diff:goog.color.yiqBrightnessDiff_(b[d],a)+goog.color.colorDiff_(b[d],a)});c.sort(function(a,b){return b.diff-a.diff});return c[0].color};goog.color.yiqBrightness_=function(a){return Math.round((299*a[0]+587*a[1]+114*a[2])/1E3)};goog.color.yiqBrightnessDiff_=function(a,b){return Math.abs(goog.color.yiqBrightness_(a)-goog.color.yiqBrightness_(b))};
goog.color.colorDiff_=function(a,b){return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])+Math.abs(a[2]-b[2])};lime.fill={};lime.fill.Fill=function(){goog.events.EventTarget.call(this)};goog.inherits(lime.fill.Fill,goog.events.EventTarget);lime.fill.Fill.prototype.initForSprite=goog.nullFunction;lime.fill.parse=function(a){if(a[0]instanceof lime.fill.Fill)return a[0];goog.isArray(a)||(a=goog.array.toArray(arguments));return 2<a.length?new lime.fill.Color(a):goog.isString(a[0])&&("rgb("==a[0].substring(0,4)||"rgba("==a[0].substring(0,5)||"#"==a[0].substring(0,1))?new lime.fill.Color(a[0]):new lime.fill.Image(a[0])};
lime.fill.Fill.prototype.setDOMStyle=goog.nullFunction;lime.fill.Fill.prototype.setCanvasStyle=goog.nullFunction;goog.color.alpha={};
goog.color.alpha.parse=function(a){var b={},a=""+a,c=goog.color.prependHashIfNecessaryHelper(a);if(goog.color.alpha.isValidAlphaHexColor_(c))return b.hex=goog.color.alpha.normalizeAlphaHex_(c),b.type="hex",b;c=goog.color.alpha.isValidRgbaColor_(a);if(c.length)return b.hex=goog.color.alpha.rgbaArrayToHex(c),b.type="rgba",b;c=goog.color.alpha.isValidHslaColor_(a);if(c.length)return b.hex=goog.color.alpha.hslaArrayToHex(c),b.type="hsla",b;throw Error(a+" is not a valid color string");};
goog.color.alpha.hexToRgbaStyle=function(a){return goog.color.alpha.rgbaStyle_(goog.color.alpha.hexToRgba(a))};goog.color.alpha.extractHexColor=function(a){if(goog.color.alpha.isValidAlphaHexColor_(a))return a=goog.color.prependHashIfNecessaryHelper(a),goog.color.alpha.normalizeAlphaHex_(a).substring(0,7);throw Error(a+" is not a valid 8-hex color string");};
goog.color.alpha.extractAlpha=function(a){if(goog.color.alpha.isValidAlphaHexColor_(a))return a=goog.color.prependHashIfNecessaryHelper(a),goog.color.alpha.normalizeAlphaHex_(a).substring(7,9);throw Error(a+" is not a valid 8-hex color string");};goog.color.alpha.hexQuadrupletRe_=/#(.)(.)(.)(.)/;
goog.color.alpha.normalizeAlphaHex_=function(a){if(!goog.color.alpha.isValidAlphaHexColor_(a))throw Error("'"+a+"' is not a valid alpha hex color");5==a.length&&(a=a.replace(goog.color.alpha.hexQuadrupletRe_,"#$1$1$2$2$3$3$4$4"));return a.toLowerCase()};goog.color.alpha.hexToRgba=function(a){var a=goog.color.alpha.normalizeAlphaHex_(a),b=parseInt(a.substr(1,2),16),c=parseInt(a.substr(3,2),16),d=parseInt(a.substr(5,2),16),a=parseInt(a.substr(7,2),16);return[b,c,d,a/255]};
goog.color.alpha.rgbaToHex=function(a,b,c,d){var e=Math.floor(255*d);if(isNaN(e)||0>e||255<e)throw Error('"('+a+","+b+","+c+","+d+'") is not a valid RGBA color');d=goog.color.prependZeroIfNecessaryHelper(e.toString(16));return goog.color.rgbToHex(a,b,c)+d};
goog.color.alpha.hslaToHex=function(a,b,c,d){var e=Math.floor(255*d);if(isNaN(e)||0>e||255<e)throw Error('"('+a+","+b+","+c+","+d+'") is not a valid HSLA color');d=goog.color.prependZeroIfNecessaryHelper(e.toString(16));return goog.color.hslToHex(a,b/100,c/100)+d};goog.color.alpha.rgbaArrayToHex=function(a){return goog.color.alpha.rgbaToHex(a[0],a[1],a[2],a[3])};
goog.color.alpha.rgbaToRgbaStyle=function(a,b,c,d){if(isNaN(a)||0>a||255<a||isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(d)||0>d||1<d)throw Error('"('+a+","+b+","+c+","+d+')" is not a valid RGBA color');return goog.color.alpha.rgbaStyle_([a,b,c,d])};goog.color.alpha.rgbaArrayToRgbaStyle=function(a){return goog.color.alpha.rgbaToRgbaStyle(a[0],a[1],a[2],a[3])};goog.color.alpha.hslaArrayToHex=function(a){return goog.color.alpha.hslaToHex(a[0],a[1],a[2],a[3])};
goog.color.alpha.hslaArrayToRgbaStyle=function(a){return goog.color.alpha.hslaToRgbaStyle(a[0],a[1],a[2],a[3])};goog.color.alpha.hslaToRgbaStyle=function(a,b,c,d){return goog.color.alpha.rgbaStyle_(goog.color.alpha.hslaToRgba(a,b,c,d))};goog.color.alpha.hslaToRgba=function(a,b,c,d){return goog.color.hslToRgb(a,b/100,c/100).concat(d)};goog.color.alpha.rgbaToHsla=function(a,b,c,d){return goog.color.rgbToHsl(a,b,c).concat(d)};
goog.color.alpha.rgbaArrayToHsla=function(a){return goog.color.alpha.rgbaToHsla(a[0],a[1],a[2],a[3])};goog.color.alpha.validAlphaHexColorRe_=/^#(?:[0-9a-f]{4}){1,2}$/i;goog.color.alpha.isValidAlphaHexColor_=function(a){return goog.color.alpha.validAlphaHexColorRe_.test(a)};goog.color.alpha.normalizedAlphaHexColorRe_=/^#[0-9a-f]{8}$/;goog.color.alpha.isNormalizedAlphaHexColor_=function(a){return goog.color.alpha.normalizedAlphaHexColorRe_.test(a)};goog.color.alpha.rgbaColorRe_=/^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;
goog.color.alpha.hslaColorRe_=/^(?:hsla)\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\%,\s?(0|[1-9]\d{0,2})\%,\s?(0|1|0\.\d{0,10})\)$/i;goog.color.alpha.isValidRgbaColor_=function(a){var b=a.match(goog.color.alpha.rgbaColorRe_);if(b){var a=Number(b[1]),c=Number(b[2]),d=Number(b[3]),b=Number(b[4]);if(0<=a&&255>=a&&0<=c&&255>=c&&0<=d&&255>=d&&0<=b&&1>=b)return[a,c,d,b]}return[]};
goog.color.alpha.isValidHslaColor_=function(a){var b=a.match(goog.color.alpha.hslaColorRe_);if(b){var a=Number(b[1]),c=Number(b[2]),d=Number(b[3]),b=Number(b[4]);if(0<=a&&360>=a&&0<=c&&100>=c&&0<=d&&100>=d&&0<=b&&1>=b)return[a,c,d,b]}return[]};goog.color.alpha.rgbaStyle_=function(a){return"rgba("+a.join(",")+")"};goog.color.alpha.hsvaToHex=function(a,b,c,d){d=Math.floor(255*d);return goog.color.hsvArrayToHex([a,b,c])+goog.color.prependZeroIfNecessaryHelper(d.toString(16))};
goog.color.alpha.hsvaArrayToHex=function(a){return goog.color.alpha.hsvaToHex(a[0],a[1],a[2],a[3])};lime.fill.Color=function(a){lime.fill.Fill.call(this);this.a=1;this.setColor(a)};goog.inherits(lime.fill.Color,lime.fill.Fill);lime.fill.Color.prototype.id="color";lime.fill.Color.prototype.getRgba=function(){var a=null;if(goog.isNumber(this.r)&&goog.isNumber(this.g)&&goog.isNumber(this.b))a=[this.r,this.g,this.b,this.a];else if(goog.isString(this.str)){var b=goog.color.parse(this.str);"named"!=b.type&&(a=goog.color.hexToRgb(b.hex));a.push(1)}return a};
lime.fill.Color.prototype.addBrightness=function(a){return this.modifyColor(2,a)};lime.fill.Color.prototype.modifyColor=function(a,b){var c=b||0.1,d=this.getRgba();if(!d)return this;d.pop();d=goog.color.rgbArrayToHsl(d);d[a]+=c;1<d[a]&&(d[a]=1);d=goog.color.hslArrayToRgb(d);d.push(this.a);return this.setColor(d)};lime.fill.Color.prototype.addSaturation=function(a){return this.modifyColor(1,a)};
lime.fill.Color.prototype.setColor=function(a){var b=a;if(goog.isString(a))return this.str=a,this;2<arguments.length&&(b=arguments);3<=b.length&&(this.r=b[0],this.g=b[1],this.b=b[2]);4==b.length&&(this.a=b[3]);this.str=1==this.a?"rgb("+this.r+","+this.g+","+this.b+")":"rgba("+this.r+","+this.g+","+this.b+","+this.a+")";return this};lime.fill.Color.prototype.setDOMStyle=function(a){a.style.background=this.str};lime.fill.Color.prototype.setCanvasStyle=function(a){a.fillStyle=this.str};
lime.fill.Color.prototype.clone=function(){var a=new lime.fill.Color("");a.r=this.r;a.g=this.g;a.b=this.b;a.a=this.a;a.str=this.str;return a};lime.fill.Stroke=function(a,b){lime.fill.Fill.call(this);var c=goog.isArray(a)?a:goog.array.toArray(arguments);this.width_=c[0]||1;c.shift();this.setColor.apply(this,c)};goog.inherits(lime.fill.Stroke,lime.fill.Fill);lime.fill.Stroke.prototype.id="stroke";lime.fill.Stroke.prototype.setDOMStyle=function(a){a.style.border=this.width_+"px solid "+this.color_.str};lime.fill.Stroke.prototype.setCanvasStyle=function(a){a.strokeStyle=this.color_.str;a.lineWidth=this.width_};
lime.fill.Stroke.prototype.getWidth=function(){return this.width_};lime.fill.Stroke.prototype.setWidth=function(a){this.width_=a;return this};lime.fill.Stroke.prototype.getColor=function(){return this.color_};lime.fill.Stroke.prototype.setColor=function(a){var b=goog.array.toArray(arguments);b[0]instanceof lime.fill.Color?this.color_=b[0]:(this.color_=new lime.fill.Color("#000"),b.length&&this.color_.setColor.apply(this.color_,b));return this};
lime.fill.Stroke.prototype.clone=function(){var a=new lime.fill.Stroke;a.width_=this.width_;a.color_=this.color_;return a};lime.fill.Image=function(a){lime.fill.Fill.call(this);a&&goog.isFunction(a.data)&&(a=a.data());goog.isString(a)?(this.url_=a,50<this.url_.length&&(this.url_=this.url_.substr(-50)),lime.fill.Image.loadedImages_[this.url_])?this.image_=lime.fill.Image.loadedImages_[this.url_]:(this.image_=new Image,this.image_.src=a):(this.url_=a.src,50<this.url_.length&&(this.url_=this.url_.substr(-50)),this.image_=lime.fill.Image.loadedImages_[this.url_]?lime.fill.Image.loadedImages_[this.url_]:a);this.isLoaded()||
this.addLoadHandler_();lime.fill.Image.loadedImages_[this.url_]=this.image_};goog.inherits(lime.fill.Image,lime.fill.Fill);lime.fill.Image.loadedImages_={};lime.fill.Image.prototype.id="image";
lime.fill.Image.prototype.initForSprite=function(a){var b=a.getSize(),c=this;!b.width&&!b.height&&(this.isLoaded()?a.setSize(this.image_.width,this.image_.height):goog.events.listen(this,goog.events.EventType.LOAD,function(){var a=this.getSize();!a.width&&!a.height&&this.setSize(c.image_.width,c.image_.height)},!1,a));this.isLoaded()||goog.events.listen(this,goog.events.EventType.LOAD,function(){a.setDirty(lime.Dirty.CONTENT)},!1,this)};
lime.fill.Image.prototype.addLoadHandler_=function(){goog.events.listen(this.image_,goog.events.EventType.LOAD,this.imageLoadedHandler_,!1,this)};lime.fill.Image.prototype.imageLoadedHandler_=function(a){this.dispatchEvent(a)};lime.fill.Image.prototype.getImageElement=function(){return this.image_};lime.fill.Image.prototype.isLoaded=function(){return!(!this.image_||!this.image_.width||!this.image_.height)};
lime.fill.Image.prototype.setSize=function(a,b,c){goog.isNumber(a)&&(a=new goog.math.Size(a,b),b=c||!1);this.size_=a;this.size_perc_=b;return this};lime.fill.Image.prototype.setOffset=function(a,b,c){goog.isNumber(a)&&(a=new goog.math.Coordinate(a,b),b=c||!1);this.offset_=a;this.offset_perc_=b;return this};
lime.fill.Image.prototype.getPixelSizeAndOffset=function(a){a=a.getSize().clone();this.size_&&(this.size_perc_?(a.width*=this.size_.width,a.height*=this.size_.height):a=this.size_);var b=new goog.math.Coordinate(0,0);this.offset_&&(this.offset_perc_?(b.x=a.width*this.offset_.x,b.y=a.height*this.offset_.y):b=this.offset_);return[a,b]};
lime.fill.Image.prototype.setDOMBackgroundProp_=function(a,b){var c=this.getPixelSizeAndOffset(b),d=c[0],c=c[1],e=b.getRelativeQuality();a.style[lime.style.getCSSproperty("BackgroundSize")]=d.width*e+"px "+d.height*e+"px";d=b.stroke_?b.stroke_.width_:0;a.style.backgroundPosition=c.x*e-d+"px "+(c.y*e-d)+"px";this.qualityRenderer&&(a.style.imageRendering="optimizeQuality")};
lime.fill.Image.prototype.setDOMStyle=function(a,b){a.style.background="url("+this.image_.src+")";this.setDOMBackgroundProp_(a,b)};
lime.fill.Image.prototype.setCanvasStyle=function(a,b){var c=b.getSize(),d=b.getFrame();if(c.width&&c.height)try{var e=this.getImageElement(),f=this.getPixelSizeAndOffset(b),g=f[0],h=f[1],i=a.createPattern(e,"repeat"),j=g.width/e.width,l=g.height/e.height;a.save();a.translate(d.left+h.x,d.top+h.y);a.scale(j,l);a.fillStyle=i;a.fillRect(-h.x/j,-h.y/l,c.width/j,c.height/l);a.restore()}catch(k){}};lime.Renderer.CANVAS.SPRITE={};lime.Renderer.DOM.SPRITE={};lime.Sprite=function(){lime.Node.call(this);this.stroke_=this.fill_=null};goog.inherits(lime.Sprite,lime.Node);lime.Sprite.prototype.id="sprite";lime.Sprite.prototype.supportedRenderers=[lime.Renderer.DOM.makeSubRenderer(lime.Renderer.DOM.SPRITE),lime.Renderer.CANVAS.makeSubRenderer(lime.Renderer.CANVAS.SPRITE)];lime.Sprite.prototype.getFill=function(){return this.fill_};
lime.Sprite.prototype.setFill=function(a,b,c,d){this.fill_=lime.fill.parse(goog.array.toArray(arguments));this.fill_.initForSprite(this);this.setDirty(lime.Dirty.CONTENT);return this};lime.Sprite.prototype.getStroke=function(){return this.stroke_};lime.Sprite.prototype.setStroke=function(a){a&&!(a instanceof lime.fill.Stroke)&&(a=new lime.fill.Stroke(goog.array.toArray(arguments)));this.stroke_=a;this.setDirty(lime.Dirty.CONTENT);return this};
lime.Sprite.prototype.getCanvasContextName_=function(){var a=0;return function(){goog.isDef(this.canvasContextName_)||(this.canvasContextName_="limedc"+a++);return this.canvasContextName_}}();lime.Renderer.DOM.SPRITE.draw=function(a){goog.isNull(this.fill_)||this.fill_.setDOMStyle(a,this);goog.isNull(this.stroke_)?goog.style.setStyle(a,"border-width",0):this.stroke_.setDOMStyle(a,this)};
lime.Renderer.CANVAS.SPRITE.draw = function (a) { var b = this.getSize(), c = this.fill_, d = this.stroke_; if (c || d) { var e = this.getFrame(); c && (c.setCanvasStyle(a, this), "image" != c.id && "frame" != c.id && a.fillRect(e.left, e.top, b.width, b.height)); if (d && (d.setCanvasStyle(a, this), "sprite" == this.id || "label" == this.id)) c = d.width_ / 2, a.strokeRect(e.left + c, e.top + c, b.width - 2 * c, b.height - 2 * c) } };

lime.Node.prototype.getPosition = function () {
    return this.position_;
};

lime.Node.prototype.localToScreen = function (coord) {
    if (!this.inTree_) return coord;

    return this.getParent().localToScreen(this.localToParent(coord));
};
goog.provide('lime.audio.Audio');

goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('lime.userAgent');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
/**
 * Audio stream object
 * @constructor
 * @param {string} filePath Path to audio file.
 */
lime.audio.Audio = function (filePath) {
    goog.events.EventTarget.call(this);

    if (filePath && goog.isFunction(filePath.data)) {
        filePath = filePath.data();
    }

    /**
     * @type bBoolean}
     * @private
     */
    this.loaded_ = false;

    /**
     * @type {boolean}
     * @private
     */
    this.playing_ = false;

    //if (goog.userAgent.GECKO && (/\.mp3$/).test(filePath)) {
    //    filePath = filePath.replace(/\.mp3$/, '.ogg');
    //}

    if (lime.audio.AudioContext) {
        this.volume_ = 1;
        this.prepareContext_();
        this.loadBuffer(filePath, goog.bind(this.bufferLoadedHandler_, this));
    } else {
        /**
         * Internal audio element
         * @type {audio}
         */
        this.baseElement = document.createElement('audio');
        this.baseElement['preload'] = true;
        this.baseElement['loop'] = false;
        this.baseElement.src = filePath;
        this.baseElement.load();
        this.baseElement.addEventListener('ended', goog.bind(this.onEnded_, this));
        this.loadInterval = setInterval(goog.bind(this.loadHandler_, this), 10);

        this.loaded_ = false;
    }
};
goog.inherits(lime.audio.Audio, goog.events.EventTarget);

lime.audio.AudioContext = goog.global['AudioContext'] || goog.global['webkitAudioContext'];
lime.audio._buffers = {};

lime.audio.supportsMultiChannel = lime.audio.AudioContext || !(lime.userAgent.IOS || lime.userAgent.WINPHONE);

lime.audio.Audio.prototype.prepareContext_ = function () {
    if (lime.audio.context) return;
    var context = lime.audio.context = new lime.audio.AudioContext();
    var gain = lime.audio.masterGain = context['createGain']();
    gain['connect'](context['destination']);
};

lime.audio.Audio.prototype.loadBuffer = function (path, cb) {
    var buffers = lime.audio._buffers;
    if (buffers[path] && buffers[path].buffer) {
        cb(buffers[path].buffer, path);
    } else if (buffers[path]) {
        buffers[path].push(cb);
    } else {
        buffers[path] = [cb];
        var req = new XMLHttpRequest();
        req.open('GET', path, true);
        req.responseType = 'arraybuffer';
        req.onload = function () {
            lime.audio.context['decodeAudioData'](req.response, function (buffer) {
                if (!buffer) {
                    return console.error('Error decoding file:', path);
                }
                var cbArray = buffers[path];
                buffers[path] = {
                    buffer: buffer
                };
                for (var i = 0; i < cbArray.length; i++) {
                    cbArray[i](buffer, path);
                }
            }, function (e) {
                console.error('Error decoding file', e);
            });
        };
        req.onerror = function () {
            console.error('XHR error loading file:', path);
        };
        req.send();
    }
};

lime.audio.Audio.prototype.bufferLoadedHandler_ = function (buffer, path) {
    this.buffer = buffer;
    this.loaded_ = true;
    var ev = new goog.events.Event('loaded');
    ev.event = null;
    this.dispatchEvent(ev);
    if (this.autoplay_) {
        this.play.apply(this, this.autoplay_);
    }
};

lime.audio.Audio.prototype.onEnded_ = function (e) {
    this.playing_ = false;
    var ev = new goog.events.Event('ended');
    ev.event = e;
    this.dispatchEvent(ev);
    this.playPosition_ = 0;
    var delay = lime.audio.AudioContext ? this.playTime_ + this.buffer.duration - this.playPositionCache - 0.05 : 0;
    if (this.next_) {
        for (var i = 0; i < this.next_.length; i++) {
            this.next_[i][0].play(this.next_[i][1], delay);
        }
    } else if (ev.returnValue_ !== false && this.loop_) {
        this.play(this.loop_, delay);
    }
}

/**
 * Handle loading the audio file. Event handlers seem to fail
 * on lot of browsers.
 * @private
 */
lime.audio.Audio.prototype.loadHandler_ = function () {
    if (this.baseElement['readyState'] > 2) {
        this.bufferLoadedHandler_();
        clearTimeout(this.loadInterval);
    }
    if (this.baseElement['error']) clearTimeout(this.loadInterval);

    if (lime.userAgent.IOS && this.baseElement['readyState'] == 0) {
        //ios hack do not work any more after 4.2.1 updates
        // no good solutions that i know
        this.bufferLoadedHandler_();
        clearTimeout(this.loadInterval);
        // this means that ios audio anly works if called from user action
    }
};

/**
 * Returns true if audio file has been loaded
 * @return {boolean} Audio has been loaded.
 */
lime.audio.Audio.prototype.isLoaded = function () {
    return this.loaded_;
};

/**
 * Returns true if audio file is playing
 * @return {boolean} Audio is playing.
 */
lime.audio.Audio.prototype.isPlaying = function () {
    return this.playing_;
};

/**
 * Start playing the audio
 * @param {number=} opt_loop Loop the sound.
 */
lime.audio.Audio.prototype.play = function (opt_loop) {
    if (!this.isLoaded()) {
        this.autoplay_ = goog.array.toArray(arguments);
    }
    if (this.isLoaded() && !this.isPlaying() && !lime.audio.getMute()) {
        if (lime.audio.AudioContext) {
            if (this.source && this.source['playbackState'] == this.source['FINISHED_STATE']) {
                this.playPosition_ = 0;
            }
            this.source = lime.audio.context['createBufferSource']();
            this.source.buffer = this.buffer;
            this.gain = lime.audio.context['createGain']();
            this.gain['connect'](lime.audio.masterGain);
            //this.gain['gain']['value'] = this.volume_;
            this.source['connect'](this.gain);

            this.playTime_ = lime.audio.context['currentTime'];
            var delay = arguments[1] || 0

            if (this.playPosition_ > 0) {
                this.source['start'](delay, this.playPosition_, this.buffer.duration - this.playPosition_);
            } else {
                this.source['start'](delay);
            }
            this.playPositionCache = this.playPosition_;
            this.endTimeout_ = setTimeout(goog.bind(this.onEnded_, this), (this.buffer.duration - (this.playPosition_ || 0)) * 1000 - 150);
        } else {
            this.baseElement.play();
        }
        this.playing_ = true;
        this.loop_ = !!opt_loop;
        if (lime.audio._playQueue.indexOf(this) == -1) {
            lime.audio._playQueue.push(this);
        }
    }
};

/**
 * Stop playing the audio
 */
lime.audio.Audio.prototype.stop = function () {
    if (!this.isLoaded()) {
        this.autoplay_ = null;
    }
    if (this.isPlaying()) {
        if (lime.audio.AudioContext) {
            clearTimeout(this.endTimeout_);
            this.playPosition_ = lime.audio.context.currentTime - this.playTime_ + (this.playPosition_ || 0);
            if (this.playPosition_ > this.buffer.duration) {
                this.playPosition_ = 0;
            }
            //this.source['noteOff'](0);
            this.gain['disconnect'](lime.audio.masterGain);
            this.source = null;
        } else {
            this.baseElement.pause();
        }
        this.playing_ = false;
    }
};

lime.audio._isMute = false;
lime.audio._playQueue = [];

lime.audio.getMute = function () {
    return lime.audio._isMute;
};

lime.audio.setMute = function (bool) {
    if (bool && !lime.audio._isMute) {
        for (var i = 0; i < lime.audio._playQueue.length; i++) {
            lime.audio._playQueue[i].stop();
        }
        lime.audio._playQueue = [];
    }
    lime.audio._isMute = bool;
};

lime.audio.Audio.prototype.setVolume = function (value) {
    if (lime.audio.AudioContext) {
        this.volume_ = value;
        if (this.gain) this.gain['gain']['value'] = value;
    } else {
        this.baseElement.volume = value;
    }
};
lime.audio.Audio.prototype.getVolume = function () {
    if (lime.audio.AudioContext) {
        return this.volume_;
    } else {
        return this.baseElement.volume;
    }
};


////Image arrays//////


//goog.require('lime.parser.JSON');
//blacksmith images
var imgArray = new Array();
imgArray[0] = new Image();imgArray[0].src = 'images/blacksmith1.png';
imgArray[1] = new Image();imgArray[1].src = 'images/blacksmith2.png';
imgArray[2] = new Image();imgArray[2].src = 'images/blacksmith3.png';
imgArray[3] = new Image();imgArray[3].src = 'images/blacksmith4.png';
imgArray[4] = new Image();imgArray[4].src = 'images/blacksmith5.png';
imgArray[5] = new Image();imgArray[5].src = 'images/blacksmith6.png';
imgArray[6] = new Image();imgArray[6].src = 'images/blacksmith7.png';
imgArray[7] = new Image();imgArray[7].src = 'images/blacksmith8.png';
imgArray[8] = new Image();imgArray[8].src = 'images/blacksmith9.png';
imgArray[9] = new Image();imgArray[9].src = 'images/blacksmith10.png';
imgArray[10] = new Image();imgArray[10].src = 'images/blacksmith11.png';
imgArray[11] = new Image();imgArray[11].src = 'images/blacksmith12.png';
imgArray[12] = new Image();imgArray[12].src = 'images/blacksmith13.png';
imgArray[13] = new Image();imgArray[13].src = 'images/blacksmith14.png';
imgArray[14] = new Image();imgArray[14].src = 'images/UI/CoverImg2.png';
imgArray[15] = new Image();imgArray[15].src = 'images/UI/greySound.png';
imgArray[16] = new Image();imgArray[16].src = 'images/UI/greySoundOff.png';


//growing images
var imgArray2 = new Array();

imgArray2[0] = new Image(); imgArray2[0].src = 'images/artiGrow1.png';
imgArray2[1] = new Image(); imgArray2[1].src = 'images/artiGrow2.png';
imgArray2[2] = new Image(); imgArray2[2].src = 'images/plowed.png';
imgArray2[3] = new Image(); imgArray2[3].src = 'images/tomatoGrow1.png';
imgArray2[4] = new Image(); imgArray2[4].src = 'images/tomatoGrow2.png';
imgArray2[5] = new Image(); imgArray2[5].src = 'images/pepperGrow1.png';
imgArray2[6] = new Image(); imgArray2[6].src = 'images/pepperGrow2.png';
imgArray2[7] = new Image(); imgArray2[7].src = 'images/cornGrow1.png';
imgArray2[8] = new Image(); imgArray2[8].src = 'images/cornGrow2.png';
imgArray2[9] = new Image(); imgArray2[9].src = 'images/eggplantGrow1.png';
imgArray2[10] = new Image(); imgArray2[10].src = 'images/eggplantGrow2.png';
imgArray2[11] = new Image(); imgArray2[11].src = 'images/carrotGrow1.png';
imgArray2[12] = new Image(); imgArray2[12].src = 'images/carrotGrow2.png';
imgArray2[13] = new Image(); imgArray2[13].src = 'images/hayGrow1.png';
imgArray2[14] = new Image(); imgArray2[14].src = 'images/hayGrow2.png';


//livestock pen animation images
var imgArray3 = new Array();

imgArray3[0] = new Image(); imgArray3[0].src = 'images/livestockPens/chicken_down1.png';
imgArray3[1] = new Image(); imgArray3[1].src = 'images/livestockPens/chicken_down2.png';
imgArray3[2] = new Image(); imgArray3[2].src = 'images/livestockPens/chicken_down3.png';
imgArray3[3] = new Image(); imgArray3[3].src = 'images/livestockPens/chicken_eatLeft1.png';
imgArray3[4] = new Image(); imgArray3[4].src = 'images/livestockPens/chicken_eatLeft2.png';
imgArray3[5] = new Image(); imgArray3[5].src = 'images/livestockPens/chicken_eatLeft3.png';
imgArray3[6] = new Image(); imgArray3[6].src = 'images/livestockPens/chicken_eatLeft4.png';
imgArray3[7] = new Image(); imgArray3[7].src = 'images/livestockPens/chicken_eatRight1.png';
imgArray3[8] = new Image(); imgArray3[8].src = 'images/livestockPens/chicken_eatRight2.png';
imgArray3[9] = new Image(); imgArray3[9].src = 'images/livestockPens/chicken_up1.png';
imgArray3[10] = new Image(); imgArray3[10].src = 'images/livestockPens/chicken_up2.png';
imgArray3[11] = new Image(); imgArray3[11].src = 'images/livestockPens/chicken_up3.png';
imgArray3[12] = new Image(); imgArray3[12].src = 'images/livestockPens/chicken_walkLeft1.png';
imgArray3[13] = new Image(); imgArray3[13].src = 'images/livestockPens/chicken_walkLeft2.png';
imgArray3[14] = new Image(); imgArray3[14].src = 'images/livestockPens/chicken_walkLeft3.png';
imgArray3[15] = new Image(); imgArray3[15].src = 'images/livestockPens/chicken_walkRight1.png';
imgArray3[16] = new Image(); imgArray3[16].src = 'images/livestockPens/chicken_walkRight2.png';
imgArray3[17] = new Image(); imgArray3[17].src = 'images/livestockPens/chicken_walkRight3.png';
imgArray3[18] = new Image(); imgArray3[18].src = 'images/livestockPens/chicken_walkRight4.png';
imgArray3[19] = new Image(); imgArray3[19].src = 'images/livestockPens/eggs.png';
imgArray3[20] = new Image(); imgArray3[20].src = 'images/livestockPens/hams.png';
imgArray3[21] = new Image(); imgArray3[21].src = 'images/livestockPens/pig_Left3.png';

//orchard
var imgArray4 = new Array();

imgArray4[0] = new Image(); imgArray4[0].src = 'images/Orchard/girlF1.png'
imgArray4[1] = new Image(); imgArray4[1].src = 'images/Orchard/girlF2.png'
imgArray4[2] = new Image(); imgArray4[2].src = 'images/Orchard/girlF3.png'
imgArray4[3] = new Image(); imgArray4[3].src = 'images/Orchard/girlUp1.png'
imgArray4[4] = new Image(); imgArray4[4].src = 'images/Orchard/girlUp2.png'
imgArray4[5] = new Image(); imgArray4[5].src = 'images/Orchard/girlUp3.png'
imgArray4[6] = new Image(); imgArray4[6].src = 'images/Orchard/girlR1.png'
imgArray4[7] = new Image(); imgArray4[7].src = 'images/Orchard/girlL1.png'
imgArray4[8] = new Image(); imgArray4[8].src = 'images/Orchard/prune_trees.png'
imgArray4[9] = new Image(); imgArray4[9].src = 'images/Orchard/fertilize_trees.png'
imgArray4[10] = new Image(); imgArray4[10].src = 'images/Orchard/growing3_trees.png'
imgArray4[11] = new Image(); imgArray4[11].src = 'images/Orchard/growing4_trees.png'
imgArray4[12] = new Image(); imgArray4[12].src = 'images/Orchard/ready_Apples.png'
imgArray4[13] = new Image(); imgArray4[13].src = 'images/Orchard/ready_treesPear.png'
imgArray4[14] = new Image(); imgArray4[14].src = 'images/Orchard/treeBlockO.png'
imgArray4[15] = new Image(); imgArray4[15].src = 'images/Orchard/OrchardBack4.png'
imgArray4[16] = new Image(); imgArray4[16].src = 'images/Orchard/growing22_trees.png'

//tutorial
var imgArray5 = new Array();
imgArray5[0] = new Image(); imgArray5[0].src = 'images/UI/tut1.png'
imgArray5[1] = new Image(); imgArray5[1].src = 'images/UI/tut2-1.png'
imgArray5[2] = new Image(); imgArray5[2].src = 'images/UI/tut3.png'
imgArray5[3] = new Image(); imgArray5[3].src = 'images/UI/tut4.png'
imgArray5[4] = new Image(); imgArray5[4].src = 'images/UI/tut5.png'
imgArray5[5] = new Image(); imgArray5[5].src = 'images/UI/tut6.png'
imgArray5[6] = new Image(); imgArray5[6].src = 'images/UI/tut7.png'
imgArray5[7] = new Image(); imgArray5[7].src = 'images/UI/tut8.png'

//barn upgrades
var imgArray6 = new Array();
imgArray6[0] = new Image(); imgArray6[0].src = 'images/UI/barn1-1.png'
imgArray6[1] = new Image(); imgArray6[1].src = 'images/UI/barn2-1.png'
imgArray6[2] = new Image(); imgArray6[2].src = 'images/UI/barn3-1.png'
imgArray6[3] = new Image(); imgArray6[3].src = 'images/UI/barn4-1.png'
imgArray6[4] = new Image(); imgArray6[4].src = 'images/UI/barn5-1.png'
imgArray6[5] = new Image(); imgArray6[5].src = "images/bare_land.png"
imgArray6[6] = new Image(); imgArray6[6].src = "images/plowed.png"

//withered crops
var imgArray10 = new Array();
imgArray10[0] = new Image(); imgArray[0].src = 'images/tomatoWithered.png'

//house upgrades
var imgArray11 = new Array();
imgArray11[0] = new Image(); imgArray11[0].src = 'images/UI/coin4.png'
imgArray11[1] = new Image(); imgArray11[1].src = 'images/houseUpgrades/bedSingle.png'
imgArray11[2] = new Image(); imgArray11[2].src = 'images/houseUpgrades/chest.png'
imgArray11[3] = new Image(); imgArray11[3].src = 'images/houseUpgrades/sink.png'
imgArray11[4] = new Image(); imgArray11[4].src = 'images/houseUpgrades/woodTable.png'
imgArray11[5] = new Image(); imgArray11[5].src = 'images/houseUpgrades/woodChairSet.png'
imgArray11[6] = new Image(); imgArray11[6].src = 'images/houseUpgrades/dressingTable.png'
imgArray11[7] = new Image(); imgArray11[7].src = 'images/houseUpgrades/bedsideTableWood.png'
imgArray11[8] = new Image(); imgArray11[8].src = 'images/houseUpgrades/pottedPlantRed.png'
imgArray11[9] = new Image(); imgArray11[9].src = 'images/houseUpgrades/couchRight.png'
imgArray11[10] = new Image(); imgArray11[10].src = 'images/houseUpgrades/curtains.png'
imgArray11[11] = new Image(); imgArray11[11].src = 'images/houseUpgrades/doubleBed.png'
imgArray11[12] = new Image(); imgArray11[12].src = 'images/houseUpgrades/stool.png'
imgArray11[13] = new Image(); imgArray11[13].src = 'images/houseUpgrades/wardrobe.png'
imgArray11[14] = new Image(); imgArray11[14].src = 'images/houseUpgrades/couchAway.png'
imgArray11[15] = new Image(); imgArray11[15].src = 'images/houseUpgrades/bookcase.png'
imgArray11[16] = new Image(); imgArray11[16].src = 'images/houseUpgrades/fancyTable.png'
imgArray11[17] = new Image(); imgArray11[17].src = 'images/houseUpgrades/fancyChairSet.png'
imgArray11[18] = new Image(); imgArray11[18].src = 'images/houseUpgrades/desk.png'
imgArray11[19] = new Image(); imgArray11[19].src = 'images/houseUpgrades/widePainting.png'
imgArray11[20] = new Image(); imgArray11[20].src = 'images/houseUpgrades/dishCabinet.png'
imgArray11[21] = new Image(); imgArray11[21].src = 'images/houseUpgrades/trunk.png'
imgArray11[22] = new Image(); imgArray11[22].src = 'images/houseUpgrades/FarmHomeInteriorGreen.png'
imgArray11[23] = new Image(); imgArray11[23].src = 'images/houseUpgrades/FarmHomeInteriorBlue.png'
imgArray11[24] = new Image(); imgArray11[24].src = 'images/houseUpgrades/FarmHomeInteriorPink.png'
imgArray11[25] = new Image(); imgArray11[25].src = 'images/houseUpgrades/FarmHomeInteriorOrange.png'


//house static
var imgArray12 = new Array();
imgArray12[0] = new Image(); imgArray12[0].src = 'images/houseUpgrades/fireplace.png'
imgArray12[1] = new Image(); imgArray12[1].src = 'images/houseUpgrades/fire1.png'
imgArray12[2] = new Image(); imgArray12[2].src = 'images/houseUpgrades/fire2.png'
imgArray12[3] = new Image(); imgArray12[3].src = 'images/houseUpgrades/fire3.png'
imgArray12[4] = new Image(); imgArray12[4].src = 'images/houseUpgrades/stoveFire1.png'
imgArray12[5] = new Image(); imgArray12[5].src = 'images/houseUpgrades/stoveFire2.png'
imgArray12[6] = new Image(); imgArray12[6].src = 'images/houseUpgrades/stoveFire3.png'

var houseUpgrades = {
    upgrades: [
        { name: "expansion", cost: 0, owned: 0 },
        { name: "Single Bed", cost: 100, owned: 0},
        { name: "Chest", cost: 50, owned: 0 },
        { name: "Sink", cost: 300, owned: 0 },
        { name: "Table", cost: 150, owned: 0 },
        { name: "Wood Chairs", cost: 100, owned: 0 },
        { name: "Dressing Table", cost: 500, owned: 0 },
        { name: "Bedside Table", cost: 150, owned: 0 },
        { name: "Potted Plant", cost: 150, owned: 0 },
        { name: "Couch", cost: 350, owned: 0 },
        { name: "Curtains", cost: 75, owned: 0 },
        { name: "Double Bed", cost: 450, owned: 0 },
        { name: "Stool", cost: 100, owned: 0 },
        { name: "Wardrobe", cost: 450, owned: 0 },
        { name: "Fancy Couch", cost: 600, owned: 0 },
        { name: "Bookshelves", cost: 800, owned: 0 },
        { name: "Fancy Table", cost: 400, owned: 0 },
        { name: "Fancy Chairs", cost: 350, owned: 0 },   
        { name: "Desk", cost: 500, owned: 0 },  
        { name: "Painting", cost: 500, owned: 0 },
        { name: "Dish Cabinet", cost: 500, owned: 0 },
        { name: "Trunk", cost: 500, owned: 0 },
        { name: "Paint Walls Green", cost: 1000, owned: 0 },
        { name: "Paint Walls Blue", cost: 1000, owned: 0 },
        { name: "Paint Walls Pink", cost: 1000, owned: 0 },
        { name: "Paint Walls Tan", cost: 1000, owned: 1 },
     

    ]
  
}
if (typeof localStorage["GuiGhostFarms_houseUpgrades"] === "undefined") { localStorage.setItem('GuiGhostFarms_houseUpgrades', JSON.stringify(houseUpgrades)); };
houseUpgrades = JSON.parse(localStorage.getItem('GuiGhostFarms_houseUpgrades'));






var moneyBefore = 0;
var startedMove = 0;
var homeCrop = 0;
var orchardText = "Tending Apple Trees"
var landStateMaster = new Array();

    //{ name: "j00", props:{ state: "READY", crop: 0, deathTime: 0, ripeTime: 0 }}
   
if (typeof localStorage["landStates"] === "undefined") { localStorage.setItem('landStates', JSON.stringify(landStateMaster)); };
landStateMaster = JSON.parse(localStorage.getItem('landStates'));



//document.getElementById("buyWithStarCash").addEventListener("click", buyStarCash(), false);


//var ss = new lime.SpriteSheet('images/', lime.ASSETS.blacksmith.json, lime.parse)
var farming = {
    EMPTY: 0, PLOWED: 1, GROWING: 2, READY: 3, WITHER: 4,
    Land: function (a, b, posX, posY, scene, block, landIdent) {
        lime.Sprite.call(this);
        this.setAnchorPoint(0, 0);
        this.setSize(a.tile_size, a.tile_size);
        this.setFill(imgArray6[5]);
      
        if (block == 'tlt') { this.setFill("images/bare_land_tl.png"); }
        if (block == 'trt') { this.setFill("images/bare_land_tr.png"); }
        if (block == 'brt') { this.setFill("images/bare_land_lr.png"); }
        if (block == 'blt') { this.setFill("images/bare_land_ll.png"); }
        if (scene == 3) { this.setFill("images/Orchard/prune_trees.png"); };
        if (scene == 32) { this.setFill("images/Orchard/prune_trees.png"); };
        if (scene == 5) { this.setFill("images/vinyard/grapes_ClearBrush.png"); };
        
        function findWithAttr(array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    return i;
                }
            }
            return -1;
        }
              
        var c = this;
        var picked = this.crop;
   
        var where2 = goog.math.Coordinate(this);
  
        var firstPick = 0
    
        var firstTouch = 0;
        goog.events.listen(this, ["mousedown", "touchstart"], function (d) {
        
            if (globalModalBlock == 0 || c.state == farming.WITHER) {
                if (startedMove == 0 || c.state == farming.WITHER) {
           
                    growIt(d);
                    firstTouch = 1
                    setTimeout(function () { firstTouch = 0; }, 500)
                    startedMove = 1;
                    firstPick = 1;
                }
            }
        });
        
        goog.events.listen(this, ["touchmove"], function (d) {
 
            if (globalModalBlock == 0 || c.state == farming.WITHER) {
                if (firstTouch == 0) {
                    growIt(d);
                    firstTouch = 1
                    setTimeout(function () { firstTouch = 0; }, 500)
                }
            }
        });
        goog.events.listen(this, ["mousemove"], function (d) {
            if (globalModalBlock == 0) {
                if (firstTouch == 0 && startedMove == 1) {
                    growIt(d);
                    firstTouch = 1
                    setTimeout(function () { firstTouch = 0; firstPick = 1; }, 750)
                }
            }
        });
        goog.events.listen(this, ["mouseup"], function (d) {
            startedMove = 0     
            firstPick = 0
        });
        goog.events.listen(this, ["touchend"], function (d) {
            startedMove = 0
            firstPick = 0
        });
     
        var arrayIndex = findWithAttr(landStateMaster, 'name', landIdent);
        //var existAlready = landStateMaster[arrayIndex].name;
      
        if (arrayIndex == -1) {
            this.state = farming.EMPTY;
            var landStateThis = { name: landIdent, props: { state: this.state, deathTime: 0, ripeTime: 0, crop: b.currentCrop } }
            landStateMaster.push(landStateThis);
            localStorage.setItem("landStates", JSON.stringify(landStateMaster));
        }
        else {
            this.state = landStateMaster[arrayIndex].props.state;
            this.crop = landStateMaster[arrayIndex].props.crop;
            this.ripeTime = landStateMaster[arrayIndex].props.ripeTime;
            this.deathTime = landStateMaster[arrayIndex].props.deathTime;

            if (this.state == farming.GROWING) {

                c.setFill("images/" + a.crops[this.crop].grow1)
            }
            if (this.state == farming.GROWING && (this.ripeTime < 1000 * a.crops[this.crop].time_to_ripe)) {

                c.setFill("images/" + a.crops[this.crop].grow2)
            }
            if (this.state == farming.READY) {

                c.setFill("images/" + a.crops[this.crop].image)
            }
            if (this.state == farming.WITHER) {
                this.setFill("images/" + a.crops[this.crop].withered)
            }

        }
        function growIt(d) {
            //if (tutSeen == 0) { break; }
            if (scene == 1 && b.currentCrop > 5) { b.currentCrop = homeCrop; };
            if (scene == 32) { b.currentCrop = 9; };
            if (scene == 3) { b.currentCrop = 8; };
            var toPlant = a.crops[b.currentCrop].grow1;
            var toWithered = a.crops[b.currentCrop].withered;
            
            moneyBefore = player.money;
          
            //d.event.stopPropagation();
            c.state == farming.WITHER ?    ///crops are withered and need to be cleared

                (
             
                    scene == 3 && (c.setFill("images/Orchard/wither_treesApple.png")),
                    scene == 32 && (c.setFill("images/Orchard/wither_treesPear.png")),
                    scene == 5 && (c.setFill("images/vinyard/grapes_withered.png")),
                    c.setFill("images/bare_land.png"),
                    block == 'tlt' && (c.setFill("images/bare_land_tl.png")),
                    block == 'trt' && (c.setFill("images/bare_land_tr.png")),
                    block == 'brt' && (c.setFill("images/bare_land_lr.png")),
                    block == 'blt' && (c.setFill("images/bare_land_ll.png")),
                    scene == 3 && (c.setFill("images/Orchard/prune_trees.png")),
                    scene == 32 && (c.setFill("images/Orchard/prune_trees.png")),
                    scene == 5 && (c.setFill("images/vinyard/grapes_ClearBrush.png")),
                    c.state = farming.EMPTY
                )

            : c.state == farming.EMPTY ?
                (c.setFill("images/plowed.png"),
                    c.state = farming.PLOWED,
                    //player.money = player.money - a.costPlowing,
                    scene == 3 && (c.setFill("images/Orchard/fertilize_trees.png")),
                    scene == 32 && (c.setFill("images/Orchard/fertilize_trees.png")),
                    scene == 5 && (c.setFill("images/vinyard/grapes_Fertilize.png"))
                    //a.updateMoney()

                )

                : c.state == farming.PLOWED && player.money >= a.crops[b.currentCrop].cost ?

                    (

                        c.setFill("images/" + toPlant),
                        c.state = farming.GROWING,
                        c.crop = b.currentCrop,
                        c.ripeTime = 2000 * a.crops[b.currentCrop].time_to_ripe,
                        c.deathTime = 2000 * a.crops[b.currentCrop].time_to_death,
                        player.money = player.money - (a.crops[b.currentCrop].cost),
                        
                        
                        a.updateMoney(),
                        a.displayCost(posX, posY, a.crops[b.currentCrop].cost)
                    )
                    : c.state == farming.PLOWED && player.money < a.crops[b.currentCrop].cost ?    ///player doesnt have enough to plant that crop

                        (
                            a.displayCost(posX, posY, a.crops[b.currentCrop].cost + " Required")
                        )
                        
                        : c.state == farming.READY && (c.setFill("images/bare_land.png"),
                            block == 'tlt' && (c.setFill("images/bare_land_tl.png")),
                            block == 'trt' && (c.setFill("images/bare_land_tr.png")),
                            block == 'brt' && (c.setFill("images/bare_land_lr.png")),
                            block == 'blt' && (c.setFill("images/bare_land_ll.png")),
                            scene == 3 && (c.setFill("images/Orchard/prune_trees.png")),
                            scene == 32 && (c.setFill("images/Orchard/prune_trees.png")),
                            scene == 5 && (c.setFill("images/vinyard/grapes_ClearBrush.png")),
                            c.state = farming.EMPTY,
                            //player.money += a.crops[c.crop].revenue,
                            //a.crops[c.crop].stored += 1,
                            player.cropsStored[c.crop].stored += 1,
                            pickedEver = pickedEver + 1,

                           
                            a.updateMoney(),

                            a.updateHarvest(posX, posY, c.crop),
                            a.updateStored(),
                            a.haySize()

                        )
           
                 

           
           
        }
   
        if (scene == 3 && c.state == farming.EMPTY) { c.setFill("images/Orchard/prune_trees.png") }
        if (scene == 32 && c.state == farming.EMPTY) { c.setFill("images/Orchard/prune_trees.png") }
        if (scene == 5 && c.state == farming.EMPTY) { c.setFill("images/vinyard/grapes_ClearBrush.png") }
        dt = 2000;
        lime.scheduleManager.scheduleWithDelay(function () {
        
        
            this.state == farming.GROWING ?
                   
        
                0 >= this.ripeTime ?
                    (
                        this.state = farming.READY, this.setFill("images/" + a.crops[this.crop].image)
                    ) :
                    this.ripeTime -= 1000 :

                this.state == farming.READY &&
                (
                    0 >= this.deathTime ?
                        (
                            this.state = farming.WITHER, this.setFill("images/" + a.crops[this.crop].withered)
                           
                        )
                      
                        : this.deathTime -= 1000
                      
                )
            if (a.crops[this.crop] == 8 && this.deathTime < 0) { this.setFill("images/Orchard/prune_trees.png") }
            if (a.crops[this.crop] == 9 && this.deathTime < 0) { this.setFill("images/Orchard/prune_trees.png") }
            if (a.crops[this.crop] == 12 && this.deathTime < 0) { this.setFill("images/vinyard/grapes_ClearBrush.png") }
            var halfTimer = 1000 * a.crops[b.currentCrop].time_to_ripe;
            this.state == farming.GROWING &&
                (
                halfTimer >= this.ripeTime ?
                    (this.setFill("images/" + a.crops[this.crop].grow2)
                        )
                 : this.deathTime -= 1000
                )
            if (scene == 3 && c.state == farming.EMPTY) { c.setFill("images/Orchard/prune_trees.png") }
            if (scene == 32 && c.state == farming.EMPTY) { c.setFill("images/Orchard/prune_trees.png") }
            if (scene == 5 && c.state == farming.EMPTY) { c.setFill("images/vinyard/grapes_ClearBrush.png") }

            var currentLandState = { state: this.state, deathTime: this.deathTime, ripeTime: this.ripeTime, crop: this.crop }
           
            var arrayIndexFinal = findWithAttr(landStateMaster, 'name', landIdent)
          
            landStateMaster[arrayIndexFinal].props = currentLandState;
            localStorage.setItem("landStates", JSON.stringify(landStateMaster));

        }, this, dt)
        
    }
};
goog.inherits(farming.Land, lime.Sprite);

lime.Scene = function () { lime.Node.call(this); this.setAnchorPoint(0, 0); this.domClassName = "lime-scene"; this.createDomElement() }; goog.inherits(lime.Scene, lime.Node); lime.Scene.prototype.getScene = function () { return this }; lime.Scene.prototype.measureContents = function () { return this.getFrame() }; lime.Button = function (a, b) {
    lime.Layer.call(this); this.domClassName = "lime-button"; goog.isDef(a) && this.setUpState(a); goog.isDef(b) && this.setDownState(b); var c = this; goog.events.listen(this, ["mousedown", "touchstart", "touchmove"], function (a) {
        c.setState(lime.Button.State.DOWN); a.swallow("mousemove", function (a) { c.hitTest(a) ? c.setState(lime.Button.State.DOWN) : c.setState(lime.Button.State.UP) }); a.swallow("touchmove", function (a) { c.hitTest(a) || (c.setState(lime.Button.State.UP), a.release()) }); a.swallow(["mouseup",
"touchend"],function(a){c.hitTest(a)&&c.dispatchEvent({type:lime.Button.Event.CLICK});this.setState(lime.Button.State.UP)})})};goog.inherits(lime.Button,lime.Layer);lime.Button.State={UP:0,DOWN:1};lime.Button.Event={UP:"up",DOWN:"down",CLICK:"click"};lime.Button.prototype.setUpState=function(a){this.upstate=a;this.appendChild(this.upstate);this.state_=-1;return this.setState(lime.Button.State.UP)};lime.Button.prototype.setDownState=function(a){this.downstate=a;this.appendChild(a);this.state_=-1;return this.setState(lime.Button.State.UP)};
lime.Button.prototype.getState=function(){return this.state_};
lime.Button.prototype.setState=function(a){if(a==this.state_)return this;this.state_==lime.Button.State.UP&&a==lime.Button.State.DOWN&&this.dispatchEvent({type:lime.Button.Event.DOWN});this.state_==lime.Button.State.DOWN&&a==lime.Button.State.UP&&this.dispatchEvent({type:lime.Button.Event.UP});var b=this.upstate;goog.isDef(this.downstate)&&(lime.Button.State.DOWN==a?b=this.downstate:this.downstate.setHidden(!0));b!=this.upstate&&this.upstate.setHidden(!0);b.setHidden(!1);this.state_=a;return this};lime.Renderer.CANVAS.ROUNDEDRECT={};lime.Renderer.DOM.ROUNDEDRECT={};lime.RoundedRect=function(){lime.Sprite.call(this);this.setRadius(5)};goog.inherits(lime.RoundedRect,lime.Sprite);lime.RoundedRect.prototype.id="roundedrect";lime.RoundedRect.prototype.supportedRenderers=[lime.Renderer.DOM.SPRITE.makeSubRenderer(lime.Renderer.DOM.ROUNDEDRECT),lime.Renderer.CANVAS.SPRITE.makeSubRenderer(lime.Renderer.CANVAS.ROUNDEDRECT)];lime.RoundedRect.prototype.getRadius=function(){return this.radius_};
lime.RoundedRect.prototype.getUnitPercentage=function(){return this.unitPercentage_};lime.RoundedRect.prototype.setRadius=function(a,b){this.unitPercentage_=b||!1;this.radius_=a;return this};lime.Renderer.DOM.ROUNDEDRECT.draw=function(a){this.getSize();lime.Renderer.DOM.SPRITE.draw.call(this,a);lime.style.setBorderRadius(a,[this.radius_*this.getQuality(),this.radius_*this.getQuality()])};
lime.Renderer.CANVAS.ROUNDEDRECT.draw=function(a){this.getSize();this.getFill();var b=this.getFrame(),c=this.getRadius(),d=b.left,e=b.top,f=b.right-b.left,b=b.bottom-b.top;a.save();a.beginPath();a.moveTo(d+c,e);a.lineTo(d+f-c,e);a.quadraticCurveTo(d+f,e,d+f,e+c);a.lineTo(d+f,e+b-c);a.quadraticCurveTo(d+f,e+b,d+f-c,e+b);a.lineTo(d+c,e+b);a.quadraticCurveTo(d,e+b,d,e+b-c);a.lineTo(d,e+c);a.quadraticCurveTo(d,e,d+c,e);a.closePath();a.clip();lime.Renderer.CANVAS.SPRITE.draw.call(this,a);this.stroke_&&
(a.lineWidth*=2,a.stroke());a.restore()};lime.Renderer.CANVAS.LABEL={};lime.Renderer.DOM.LABEL={};lime.Label=function(a){lime.Sprite.call(this);this.setText(a);this.setFontFamily(lime.Label.defaultFont);this.setFontSize(14);this.setFontColor("#000");this.setAlign("center");this.setFontWeight("400");this.setPadding(0);this.setLineHeight(1.15);this.setShadow(null);this.setFill(255,255,255,0)};goog.inherits(lime.Label,lime.Sprite);lime.Label.prototype.id="label";lime.Label.defaultFont="Arial";
lime.Label.prototype.supportedRenderers=[lime.Renderer.DOM.SPRITE.makeSubRenderer(lime.Renderer.DOM.LABEL),lime.Renderer.CANVAS.SPRITE.makeSubRenderer(lime.Renderer.CANVAS.LABEL)];
(function(){var a;lime.Label.prototype.measureText=function(){goog.isDef(a)||(a=document.createElement("canvas").getContext("2d"));var b=this.getLineHeight()*this.getFontSize();a.font=this.getFontSize()+"px "+this.getFontFamily();var c=a.measureText(this.text_),c=goog.userAgent.WEBKIT?c.width:c.width+1;lime.userAgent.IOS5&&(c+=1);var d=this.stroke_?this.stroke_.width_:0;return new goog.math.Size(this.padding_[1]+this.padding_[3]+c+2*d,this.padding_[0]+this.padding_[2]+b+2*d)}})();
lime.Label.prototype.getSize=function(){var a=lime.Node.prototype.getSize.call(this);return!a||!a.width&&!a.height?this.measureText():a};lime.Label.prototype.getText=function(){return this.text_};lime.Label.prototype.setText=function(a){this.text_=a+"";this.setDirty(lime.Dirty.CONTENT);delete this.words_;return this};lime.Label.prototype.getFontFamily=function(){return this.fontFamily_};lime.Label.prototype.setFontWeight=function(a){this.fontWeight_=a;this.setDirty(lime.Dirty.FONT);return this};
lime.Label.prototype.getFontWeight=function(){return this.fontWeight_};lime.Label.prototype.setFontFamily=function(a){this.fontFamily_=a;this.setDirty(lime.Dirty.FONT);return this};lime.Label.prototype.getFontSize=function(){return this.fontSize_};lime.Label.prototype.setFontSize=function(a){this.fontSize_=a;this.setDirty(lime.Dirty.FONT);return this};lime.Label.prototype.getFontColor=function(){return this.fontColor_};
lime.Label.prototype.setFontColor=function(a){this.fontColor_=a;this.setDirty(lime.Dirty.FONT);return this};lime.Label.prototype.getPadding=function(){return this.padding_};lime.Label.prototype.setPadding=function(a,b,c,d){a=[a,a,a,a];goog.isDef(b)&&(a[1]=a[3]=b);goog.isDef(c)&&(a[2]=c);goog.isDef(d)&&(a[3]=d);this.padding_=a;this.setDirty(lime.Dirty.FONT);return this};lime.Label.prototype.setLineHeight=function(a,b){this.lineHeightAbsolute_=b||!1;this.lineHeight_=a;return this};
lime.Label.prototype.getLineHeight=function(){var a=Math.abs(this.getShadowOffset().y)+2*this.shadowBlur_;return this.lineHeightAbsolute_?(this.lineHeight_+a)/this.getFontSize():this.lineHeight_+a/this.getFontSize()};lime.Label.prototype.getAlign=function(){return this.align_};lime.Label.prototype.setAlign=function(a){this.align_=a;this.setDirty(lime.Dirty.FONT);return this};
lime.Label.prototype.setShadow=function(a,b,c,d){1==arguments.length&&goog.isNull(a)?(this.setShadowColor("#ccc"),this.setShadowBlur(0),this.setShadowOffset(0,0)):2==arguments.length?(this.setShadowColor(a),this.setShadowBlur(b),this.setShadowOffset(new goog.math.Vec2(0,0))):3==arguments.length?(this.setShadowColor(a),this.setShadowBlur(b),this.setShadowOffset(c)):(this.setShadowColor(a),this.setShadowBlur(b),this.setShadowOffset(c,d));this.setDirty(lime.Dirty.FONT);return this};
lime.Label.prototype.hasShadow_=function(){return this.shadowBlur_||this.shadowOffset_.x||this.shadowOffset_.y};lime.Label.prototype.getShadowColor=function(){return this.shadowColor_};lime.Label.prototype.getShadowOffset=function(){return this.shadowOffset_};lime.Label.prototype.setShadowColor=function(a){this.shadowColor_=a;return this};lime.Label.prototype.setShadowBlur=function(a){this.shadowBlur_=a;return this};
lime.Label.prototype.setShadowOffset=function(a,b){this.shadowOffset_=2==arguments.length?new goog.math.Vec2(arguments[0],arguments[1]):a;this.setDirty(lime.Dirty.FONT);return this};lime.Label.prototype.getShadowBlur=function(){return this.shadowBlur_};
lime.Label.prototype.calcWordsArray=function(){var a=[],b=this.text_.length,c=this.text_.match(goog.userAgent.GECKO?/[\s\.]+/g:/[\s-\.]+/g),d=0;if(c)for(var e=0;e<c.length;e++){var f=c[e],f=this.text_.indexOf(f,d)+f.length;a.push(this.text_.substring(d,f));d=f}d!=b&&a.push(this.text_.substring(d,b));return a};
lime.Label.prototype.wrapText=function(a,b){for(var c=[],d="",e=this.words_,f,g=0;g<e.length;g++)""==d?d=e[g]:(f=a.measureText(goog.string.trim(d+e[g])),f.width>b?(c.push(goog.string.trim(d)),d=e[g]):d+=e[g]);c.push(d);return c};lime.Label.prototype.update=function(){this.getDirty()&lime.Dirty.CONTENT&&delete this.lastDrawnWidth_;lime.Node.prototype.update.apply(this,arguments)};
lime.Renderer.DOM.LABEL.draw=function(a){lime.Renderer.DOM.SPRITE.draw.call(this,a);var b=a.style;this.dirty_&lime.Dirty.CONTENT&&goog.dom.setTextContent(a,this.text_);this.dirty_&lime.Dirty.FONT&&(b.lineHeight=this.getLineHeight(),b.padding=goog.array.map(this.padding_,function(a){return a*this.getRelativeQuality()},this).join("px ")+"px",b.color=this.getFontColor(),b.fontFamily=this.getFontFamily(),b.fontSize=this.getFontSize()*this.getRelativeQuality()+"px",b.fontWeight=this.getFontWeight(),b.textAlign=
this.getAlign(),b.textShadow=this.hasShadow_()?this.getShadowColor()+" "+this.getShadowOffset().x+"px "+this.getShadowOffset().y+"px "+this.getShadowBlur()+"px":"")};
lime.Renderer.CANVAS.LABEL.draw=function(a){lime.Renderer.CANVAS.SPRITE.draw.call(this,a);var b=this.getFrame(),c=-b.left-this.padding_[3]+b.right-this.padding_[1]+Math.abs(this.getShadowOffset().x)+Math.abs(2*this.getShadowBlur()),d=0;this.words_||(this.words_=this.calcWordsArray(),d=1);var e=this.stroke_?this.stroke_.width_:0;a.save();var f=this.getAlign();"left"==f?a.translate(b.left+this.padding_[3]+e,b.top+this.padding_[0]+e):"right"==f?a.translate(b.right-this.padding_[1]-e,b.top+this.padding_[0]+
e):"center"==f&&a.translate(0.5*(b.left+this.padding_[3]+b.right-this.padding_[1]),b.top+this.padding_[0]+e);b=this.getLineHeight();a.fillStyle=this.getFontColor();a.font=this.getFontWeight()+" "+this.getFontSize()+"px/"+b+" "+this.getFontFamily();a.textAlign=f;a.textBaseline="top";this.hasShadow_()&&(a.shadowColor=this.getShadowColor(),a.shadowOffsetX=this.getShadowOffset().x,a.shadowOffsetY=this.getShadowOffset().y,a.shadowBlur=this.getShadowBlur());if(d||c!=this.lastDrawnWidth_)this.lines_=this.wrapText(a,
c),this.lastDrawnWidth_=c;if(this.lines_){c=b*this.getFontSize();d=(goog.isDef(this.getShadowBlur())?Math.abs(this.getShadowBlur()):0)+(goog.isDef(this.getShadowOffset())?Math.abs(this.getShadowOffset().y)/2:0);c=goog.userAgent.WEBKIT?Math.floor(c):Math.round(c);for(f=0;f<this.lines_.length;f++)a.fillText(this.lines_[f],0,c*f+d-0.5)}a.restore()};lime.Label.installFont=function(a,b,c){goog.style.installStyles('@font-face{font-family: "'+a+'";src: url('+b+') format("'+(c||"truetype")+'");})')};lime.fill.LinearGradient=function(){lime.fill.Fill.call(this);this.colors_=[];this.setDirection(0,0,0,1)};goog.inherits(lime.fill.LinearGradient,lime.fill.Fill);lime.fill.LinearGradient.prototype.id="lineargradient";lime.fill.LinearGradient.prototype.initForSprite=function(a){(goog.userAgent.OPERA||goog.userAgent.IE)&&a.setRenderer(lime.Renderer.CANVAS)};lime.fill.LinearGradient.prototype.setDirection=function(a,b,c,d){this.points_=[a,b,c,d];return this};
lime.fill.LinearGradient.prototype.addColorStop=function(a,b){var c=goog.array.toArray(arguments);c.shift();this.colors_.push([a,lime.fill.parse(c)]);return this};lime.fill.LinearGradient.prototype.formatColorStop_=function(a){return goog.userAgent.WEBKIT?"color-stop("+a[0]+", "+a[1].str+")":a[1].str+" "+100*a[0]*this.rate+"%"};
lime.fill.LinearGradient.prototype.setDOMStyle=function(a,b){var c,d=b.getFrame();c=d.right-d.left;var e=d.bottom-d.top;if(!goog.userAgent.WEBKIT){var f=(this.points_[2]-this.points_[0])*c,g=(this.points_[1]-this.points_[3])*e,h=d.left+c*this.points_[0],i=d.top+e*this.points_[1],j=Math.atan2(g,f),l=-g/f;Infinity==l&&(l=Math.pow(10,10));d=0<j&&j<Math.PI/2?[d.right,d.top]:0<j?[d.left,d.top]:j>-Math.PI/2?[d.right,d.bottom]:[d.left,d.bottom];d=(d[1]+1/l*d[0]-i+l*h)/(l+1/l);l=l*d+i-h*l;d-=h;l-=i;this.rate=
Math.sqrt((f*f+g*g)/(d*d+l*l))}f=goog.array.map(this.colors_,this.formatColorStop_,this);c=goog.userAgent.WEBKIT?"-webkit-gradient(linear,"+100*this.points_[0]+"% "+100*this.points_[1]+"%,"+100*this.points_[2]+"% "+100*this.points_[3]+"%,"+f.join(",")+")":"linear-gradient("+100*this.points_[0]+"% "+100*this.points_[1]+"% "+Math.atan2((this.points_[1]-this.points_[3])*e,(this.points_[2]-this.points_[0])*c)+"rad,"+f.join(",")+")";goog.userAgent.GECKO&&(c="-moz-"+c);a.style.background=c};
lime.fill.LinearGradient.prototype.setCanvasStyle=function(a,b){for(var c=this.points_,d=b.getFrame(),e=d.right-d.left,f=d.bottom-d.top,c=a.createLinearGradient(d.left+e*c[0],d.top+f*c[1],d.left+e*c[2],d.top+f*c[3]),d=0;d<this.colors_.length;d++)c.addColorStop(this.colors_[d][0],this.colors_[d][1].str);a.fillStyle=c};lime.GlossyButton=function(a){lime.Button.call(this,this.makeState_(a),this.makeState_(a));this.borderWidth=2;this.setText(a);this.setColor("#62be00")};goog.inherits(lime.GlossyButton,lime.Button);lime.GlossyButton.prototype.makeState_=function(a){var b=new lime.RoundedRect;b.inner=new lime.RoundedRect;b.label=(new lime.Label(a)).setAlign("center").setFontFamily('"Trebuchet MS"').setFontColor("#010101").setFontSize(17);b.appendChild(b.inner);b.inner.appendChild(b.label);return b};
lime.GlossyButton.prototype.setColor=function(a){a=lime.fill.parse(a);goog.array.forEach([this.upstate,this.downstate],function(b){var c=b==this.downstate?a.clone().addSaturation(-0.2):a;b.setFill(c);var d=(new lime.fill.LinearGradient).setDirection(0,0,0,1);d.addColorStop(0,c.clone().addBrightness(0.13));d.addColorStop(0.5,c.clone().addBrightness(0.05));d.addColorStop(0.52,c);d.addColorStop(1,c);b.inner.setFill(d)},this);return this};
lime.GlossyButton.prototype.setText=function(a){this.upstate.label.setText(a);this.downstate.label.setText(a);return this};lime.GlossyButton.prototype.setSize=function(a,b){if(this.upstate){this.upstate.setSize.apply(this.upstate,arguments);var c=this.upstate.getSize();goog.array.forEach([this.upstate,this.downstate],function(a){a.setSize(c);var b=c.clone();b.width-=this.borderWidth;b.height-=this.borderWidth;a.inner.setSize(b)},this)}return this};lime.GlossyButton.prototype.getSize=function(){return this.upstate.getSize()};lime.CoverNode=function(){lime.Node.call(this);var a=this.baseElement;this.baseElement=document.createElement("canvas");goog.dom.replaceNode(this.baseElement,a);this.context=this.baseElement.getContext("2d");goog.dom.classes.add(this.baseElement,"lime-cover")};goog.inherits(lime.CoverNode,lime.Node);
lime.CoverNode.prototype.update=function(){if(this.director){var a=goog.style.getSize(this.director.baseElement.parentNode),b=this.baseElement.style,c=this.director.getScale(),d=this.getQuality();b.width=a.width+"px";b.height=a.height+"px";this.baseElement.width=a.width/c.x*d;this.baseElement.height=a.height/c.y*d;this.updateRect_?this.setNeedsRedrawInRect(this.updateRect_):this.setNeedsRedraw()}};
lime.CoverNode.prototype.setNeedsRedraw=function(){this.setNeedsRedrawInRect(this.director.getBounds(new goog.math.Box(0,this.baseElement.width/this.getQuality(),this.baseElement.height/this.getQuality(),0)))};lime.CoverNode.prototype.setNeedsRedrawInRect=function(a){var b=this.director,c=this.getQuality(),d=b.getScale(),b=b.getPosition();this.context.save();this.context.scale(c,c);this.context.translate(b.x/d.x,b.y/d.y);this.drawInRect(a);this.context.restore()};lime.helper={};lime.helper.PauseScene=function(){lime.Scene.call(this);this.domElement.style.cssText="background:rgba(255,255,255,.8)"};goog.inherits(lime.helper.PauseScene,lime.Scene);goog.fx={};goog.fx.easing={};goog.fx.easing.easeIn=function(a){return a*a*a};goog.fx.easing.easeOut=function(a){return 1-Math.pow(1-a,3)};goog.fx.easing.inAndOut=function(a){return 3*a*a-2*a*a*a};lime.scheduleManager=new function(){this.taskStack_=[];this.active_=!1;this.intervalID_=0;this.displayRate_=1E3/30;this.lastRunTime_=0};lime.scheduleManager.Task=function(a,b){this.delta=this.maxdelta=a;this.limit=goog.isDef(b)?b:-1;this.functionStack_=[]};
lime.scheduleManager.Task.prototype.step_=function(a){if(this.functionStack_.length)if(this.delta>a)this.delta-=a;else{var b=this.maxdelta+a-this.delta;this.delta=this.maxdelta-(a-this.delta);0>this.delta&&(this.delta=0);for(var c,a=this.functionStack_.length;0<=--a;)(c=this.functionStack_[a])&&(c[0]&&goog.isFunction(c[1]))&&c[1].call(c[2],b);-1!=this.limit&&(this.limit--,0==this.limit&&lime.scheduleManager.unschedule(c[1],c[2]))}};lime.scheduleManager.taskStack_.push(new lime.scheduleManager.Task(0));
lime.scheduleManager.USE_ANIMATION_FRAME=goog.global.mozRequestAnimationFrame||goog.global.webkitRequestAnimationFrame;lime.scheduleManager.getDisplayRate=function(){return this.displayRate_};lime.scheduleManager.setDisplayRate=function(a){this.displayRate_=a;this.active_&&(lime.scheduleManager.disable_(),lime.scheduleManager.activate_())};
lime.scheduleManager.schedule=function(a,b,c){c=goog.isDef(c)?c:this.taskStack_[0];goog.array.insert(c.functionStack_,[1,a,b]);goog.array.insert(this.taskStack_,c);this.active_||lime.scheduleManager.activate_()};
lime.scheduleManager.unschedule=function(a,b){for(var c=this.taskStack_.length;0<=--c;){for(var d=this.taskStack_[c],e=d.functionStack_,f,g=e.length;0<=--g;)f=e[g],f[1]==a&&f[2]==b&&goog.array.remove(e,f);0==e.length&&0!=c&&goog.array.remove(this.taskStack_,d)}1==this.taskStack_.length&&0==this.taskStack_[0].functionStack_.length&&lime.scheduleManager.disable_()};
lime.scheduleManager.activate_=function(){this.active_||(this.lastRunTime_=goog.now(),lime.scheduleManager.USE_ANIMATION_FRAME?goog.global.mozRequestAnimationFrame?11<=goog.userAgent.VERSION?(this.animationFrameHandlerBinded_=goog.bind(lime.scheduleManager.animationFrameHandler_,this),goog.global.mozRequestAnimationFrame(this.animationFrameHandlerBinded_)):(goog.global.mozRequestAnimationFrame(),this.beforePaintHandlerBinded_=goog.bind(lime.scheduleManager.beforePaintHandler_,this),goog.global.addEventListener("MozBeforePaint",
this.beforePaintHandlerBinded_,!1)):(this.animationFrameHandlerBinded_=goog.bind(lime.scheduleManager.animationFrameHandler_,this),goog.global.requestAnimationFrame(this.animationFrameHandlerBinded_)):this.intervalID_=setInterval(goog.bind(lime.scheduleManager.stepTimer_,this),lime.scheduleManager.getDisplayRate()),this.active_=!0)};
lime.scheduleManager.disable_=function(){this.active_&&(lime.scheduleManager.USE_ANIMATION_FRAME?goog.global.mozRequestAnimationFrame?11<=goog.userAgent.VERSION?goog.global.mozCancelRequestAnimationFrame(this.animationFrameHandlerBinded_):goog.global.removeEventListener("MozBeforePaint",this.beforePaintHandlerBinded_,!1):goog.global.webkitCancelRequestAnimationFrame(this.animationFrameHandlerBinded_):clearInterval(this.intervalID_),this.active_=!1)};
lime.scheduleManager.animationFrameHandler_=function(a){var b=goog.global.performance,c;b&&(c=b.now||b.webkitNow)?a=b.timing.navigationStart+c.call(b):a||(a=goog.now());b=a-this.lastRunTime_;0>b&&(b=1);lime.scheduleManager.dispatch_(b);this.lastRunTime_=a;goog.global.requestAnimationFrame?goog.global.requestAnimationFrame(this.animationFrameHandlerBinded_):goog.global.mozRequestAnimationFrame(this.animationFrameHandlerBinded_)};
lime.scheduleManager.beforePaintHandler_=function(a){lime.scheduleManager.dispatch_(a.timeStamp-this.lastRunTime_);this.lastRunTime_=a.timeStamp;goog.global.mozRequestAnimationFrame()};lime.scheduleManager.stepTimer_=function(){var a=goog.now(),b=a-this.lastRunTime_;0>b&&(b=1);lime.scheduleManager.dispatch_(b);this.lastRunTime_=a};
lime.scheduleManager.dispatch_=function(a){for(var b=this.taskStack_.length;0<=--b;)this.taskStack_[b].step_(a);1==lime.transformSet_&&(/Firefox\/4./.test(goog.userAgent.getUserAgentString())&&!lime.FF4_USE_HW_ACCELERATION)&&(lime.scheduleManager.odd_?(document.body.style.MozTransform="",lime.scheduleManager.odd_=0):(document.body.style.MozTransform="scale(1,1)",lime.scheduleManager.odd_=1),lime.transformSet_=0)};
lime.scheduleManager.changeDirectorActivity=function(a,b){for(var c,d,e,f,g=this.taskStack_.length;0<=--g;){c=this.taskStack_[g];for(f=c.functionStack_.length;0<=--f;)e=c.functionStack_[f],d=e[2],goog.isFunction(d.getDirector)&&(d=d.getDirector(),d==a&&(e[0]=b))}};lime.scheduleManager.callAfter=function(a,b,c){lime.scheduleManager.scheduleWithDelay(a,b,c,1)};lime.scheduleManager.scheduleWithDelay=function(a,b,c,d){c=new lime.scheduleManager.Task(c,d);lime.scheduleManager.schedule(a,b,c)};lime.animation={};lime.animation.Animation=function(){goog.events.EventTarget.call(this);this.targets=[];this.initTargets_=[];this.targetProp_={};this.isPlaying_=!1;this.duration_=1;this.ease=lime.animation.Easing.EASEINOUT;this.status_=0};goog.inherits(lime.animation.Animation,goog.events.EventTarget);lime.animation.Animation.prototype.scope="";lime.animation.Event={START:"start",STOP:"stop"};lime.animation.Animation.prototype.getDuration=function(){return this.duration_};
lime.animation.Animation.prototype.setDuration=function(a){this.duration_=a;return this};lime.animation.Animation.prototype.setEasing=function(a){this.ease=a;return this};lime.animation.Animation.prototype.getEasing=function(){return this.ease};lime.animation.Animation.prototype.addTarget=function(a){goog.array.insert(this.targets,a);return this};lime.animation.Animation.prototype.removeTarget=function(a){goog.array.remove(this.targets,a);return this};
lime.animation.Animation.prototype.play=function(){this.playTime_=0;this.firstFrame_=this.status_=1;lime.scheduleManager.schedule(this.step_,this);this.dispatchEvent({type:lime.animation.Event.START})};
lime.animation.Animation.prototype.stop=function(){if(0!=this.status_){var a=this.initTargets_;if(this.useTransitions()&&this.clearTransition)for(var b=a.length;0<=--b;)this.clearTransition(a[b]);this.initTargets_=[];this.targetProp_={};this.status_=0;lime.scheduleManager.unschedule(this.step_,this);this.dispatchEvent({type:lime.animation.Event.STOP})}};lime.animation.Animation.prototype.makeTargetProp=function(){return{}};
lime.animation.Animation.prototype.getTargetProp=function(a){var b=goog.getUid(a);goog.isDef(this.targetProp_[b])||(this.initTarget(a),this.targetProp_[b]=this.makeTargetProp(a));return this.targetProp_[b]};lime.animation.Animation.prototype.initTarget=function(a){lime.animation.actionManager.register(this,a);this.status_=1;goog.array.insert(this.initTargets_,a);this.speed_&&(!this.speedCalcDone_&&this.calcDurationFromSpeed_)&&this.calcDurationFromSpeed_()};
lime.animation.Animation.prototype.getDirector=function(){return this.targets[0]?this.targets[0].getDirector():null};lime.animation.Animation.prototype.step_=function(a){this.speed_&&(!this.speedCalcDone_&&this.calcDurationFromSpeed_)&&this.calcDurationFromSpeed_();this.firstFrame_&&(delete this.firstFrame_,a=1);this.playTime_+=a;this.dt_=a;a=this.playTime_/(1E3*this.duration_);if(isNaN(a)||1<=a)a=1;a=this.updateAll(a,this.targets);1==a&&this.stop()};
lime.animation.Animation.prototype.updateAll=function(a,b){a=this.getEasing()[0](a);isNaN(a)&&(a=1);for(var c=b.length;0<=--c;)this.update(a,b[c]);return a};lime.animation.Animation.prototype.useTransitions=function(){return 0<this.duration_&&lime.style.isTransitionsSupported&&this.optimizations_&&!lime.userAgent.ANDROID&&!goog.userAgent.GECKO};lime.animation.Animation.prototype.enableOptimizations=function(a){this.optimizations_=goog.isDef(a)?a:!0;return this};
lime.animation.Animation.prototype.cloneParam=function(a){return this.setDuration(a.getDuration()).enableOptimizations(a.optimizations_)};lime.animation.Animation.prototype.reverse=function(){throw"Reverseform not supported for this animation";};lime.animation.actionManager=new function(){this.actions={}};
lime.animation.actionManager.register=function(a,b){if(a.scope.length){var c=goog.getUid(b);goog.isDef(this.actions[c])||(this.actions[c]={});goog.isDef(this.actions[c][a.scope])&&this.actions[c][a.scope].stop();this.actions[c][a.scope]=a}};lime.animation.actionManager.stopAll=function(a){a=goog.getUid(a);if(goog.isDef(this.actions[a]))for(var b in this.actions[a])this.actions[a][b].stop(),delete this.actions[a][b]};
(function(){function a(a,e){var f,g,k,m;k=a;for(g=0;8>g;g++){m=((b*k+c)*k+d)*k-a;if((0<=m?m:0-m)<e)return k;f=(3*b*k+2*c)*k+d;if(1.0E-6>(0<=f?f:0-f))break;k-=m/f}f=0;g=1;k=a;if(k<f)return f;if(k>g)return g;for(;f<g;){m=((b*k+c)*k+d)*k;if((0<=m-a?m-a:0-(m-a))<e)break;a>m?f=k:g=k;k=0.5*(g-f)+f}return k}var b=0,c=0,d=0,e=0,f=0,g=0;lime.animation.getEasingFunction=function(h,i,j,l){return[function(k){d=3*h;c=3*(j-h)-d;b=1-d-c;g=3*i;f=3*(l-i)-g;e=1-g-f;k=a(k,5.0E-5);return((e*k+f)*k+g)*k},h,i,j,l]}})();
lime.animation.Easing={EASE:lime.animation.getEasingFunction(0.25,0.1,0.25,1),LINEAR:lime.animation.getEasingFunction(0,0,1,1),EASEIN:lime.animation.getEasingFunction(0.42,0,1,1),EASEOUT:lime.animation.getEasingFunction(0,0,0.58,1),EASEINOUT:lime.animation.getEasingFunction(0.42,0,0.58,1)};lime.animation.MoveTo=function(a,b){lime.animation.Animation.call(this);this.position_=2==arguments.length?new goog.math.Coordinate(arguments[0],arguments[1]):a};goog.inherits(lime.animation.MoveTo,lime.animation.Animation);lime.animation.MoveTo.prototype.scope="move";lime.animation.MoveTo.prototype.setSpeed=function(a){this.speed_=a;delete this.speedCalcDone_;return this};
lime.animation.MoveTo.prototype.makeTargetProp=function(a){var b=a.getPosition(),c=new goog.math.Coordinate(this.position_.x-b.x,this.position_.y-b.y);this.useTransitions()&&(a.addTransition(lime.Transition.POSITION,this.position_,this.duration_,this.getEasing()),a.setDirty(lime.Dirty.POSITION));return{startpos:b,delta:c}};
lime.animation.MoveTo.prototype.calcDurationFromSpeed_=function(){if(this.speed_&&this.targets.length){var a=this.targets[0].getPosition(),a=new goog.math.Coordinate(this.position_.x-a.x,this.position_.y-a.y);this.setDuration(this.speed_*goog.math.Coordinate.distance(a,new goog.math.Coordinate(0,0))/100);this.speedCalcDone_=1}};lime.animation.MoveTo.prototype.update=function(a,b){if(0!=this.status_){var c=this.getTargetProp(b);b.setPosition(c.startpos.x+c.delta.x*a,c.startpos.y+c.delta.y*a)}};
lime.animation.MoveTo.prototype.clearTransition=function(a){this.useTransitions()&&(a.clearTransition(lime.Transition.POSITION),a.setDirty(lime.Dirty.POSITION))};lime.events={};lime.events.Drag=function(a,b,c,d){goog.events.EventTarget.call(this);this.target=d||a.targetObject;this.dropTargets_=[];this.dropIndex_=-1;this.y=this.x=0;b||(b=this.target.localToScreen(new goog.math.Coordinate(0,0)),this.x=a.screenPosition.x-b.x,this.y=a.screenPosition.y-b.y);a.swallow(["touchmove","mousemove"],goog.bind(this.moveHandler_,this));a.swallow(["touchend","touchcancel","mouseup"],goog.bind(this.releaseHandler_,this));this.setBounds(c||null);this.dispatchEvent(new goog.events.Event(lime.events.Drag.Event.START))};
goog.inherits(lime.events.Drag,goog.events.EventTarget);lime.events.Drag.Event={START:"start",END:"end",MOVE:"move",CHANGE:"change",DROP:"drop",CANCEL:"cancel"};lime.events.Drag.prototype.disposeInternal=function(){lime.events.Drag.superClass_.disposeInternal.call(this);this.dropTargets_=this.target=this.event_=null};lime.events.Drag.prototype.getBounds=function(){return this.bounds_};lime.events.Drag.prototype.setBounds=function(a){this.bounds_=a};
lime.events.Drag.prototype.moveHandler_=function(a){a=a.screenPosition.clone();a.x-=this.x;a.y-=this.y;var a=this.target.getParent().screenToLocal(a),b=this.getBounds();goog.isDefAndNotNull(b)&&((a.x<b.left?a.x=b.left:a.x>b.right&&(a.x=b.right),a.y<b.top)?a.y=b.top:a.y>b.bottom&&(a.y=b.bottom));this.target.setPosition(a);this.dispatchEvent(new goog.events.Event(lime.events.Drag.Event.MOVE));for(var a=-1,b=goog.math.Rect.createFromBox(this.target.getFrame()),c=[],d=0;d<this.dropTargets_.length;d++){var e=
this.dropTargets_[d];if(!goog.isFunction(e.confirmTargetActive)||e.confirmTargetActive(this.target)){var f=e.getFrame(),g=e.localToNode(new goog.math.Coordinate(f.left,f.top),this.target),e=e.localToNode(new goog.math.Coordinate(f.right,f.bottom),this.target),g=goog.math.Rect.createFromBox(new goog.math.Box(Math.min(g.y,e.y),Math.max(g.x,e.x),Math.max(g.y,e.y),Math.min(e.x,g.x)));(e=goog.math.Rect.intersection(b,g))&&c.push([e.width*e.height/(g.width*g.height),d])}}c.length&&(c=c.sort(function(a,
b){return b[0]-a[0]}),a=c[0][1]);a!=this.dropIndex_&&(-1!=this.dropIndex_&&goog.isFunction(this.dropTargets_[this.dropIndex_].hideDropHighlight)&&this.dropTargets_[this.dropIndex_].hideDropHighlight(),this.dropIndex_=a,-1!=this.dropIndex_&&goog.isFunction(this.dropTargets_[this.dropIndex_].showDropHighlight)&&this.dropTargets_[this.dropIndex_].showDropHighlight(),a=new goog.events.Event(lime.events.Drag.Event.CHANGE),a.activeDropTarget=-1!=this.dropIndex_?this.dropTargets_[this.dropIndex_]:null,this.dispatchEvent(a))};
lime.events.Drag.prototype.releaseHandler_=function(){if(-1!=this.dropIndex_){var a=new goog.events.Event(lime.events.Drag.Event.DROP);a.activeDropTarget=this.dropTargets_[this.dropIndex_];goog.isFunction(a.activeDropTarget.showDropHighlight)&&a.activeDropTarget.hideDropHighlight();this.dispatchEvent(a);if(!a.propagationStopped_){var b=a.activeDropTarget.getParent().localToNode(a.activeDropTarget.getPosition(),this.target.getParent()),b=(new lime.animation.MoveTo(b)).setDuration(0.5).enableOptimizations();
this.target.runAction(b);goog.isFunction(a.moveEndedCallback)&&goog.events.listen(b,lime.animation.Event.STOP,a.moveEndedCallback,!1,this.target)}}else this.dispatchEvent(new goog.events.Event(lime.events.Drag.Event.CANCEL));this.dispatchEvent(new goog.events.Event(lime.events.Drag.Event.END));lime.scheduleManager.callAfter(this.dispose,this,100)};lime.events.Drag.prototype.addDropTarget=function(a){this.dropTargets_.push(a)};lime.events.Event=function(a){this.dispatcher_=a;this.identifier=0};lime.events.Event.prototype.swallow=function(a,b,c){for(var a=goog.isArray(a)?a:[a],d=0;d<a.length;d++)this.dispatcher_.swallow(this,a[d],b);c&&this.event.stopPropagation()};
lime.events.Event.prototype.release=function(a){var b=goog.isDef(a),c=goog.isArray(a)?a:[a];if(a=this.dispatcher_.swallows[this.identifier]){var d=this,a=goog.array.filter(a,function(a){return!goog.isDef(d.targetObject)||a[0]==d.targetObject&&(!b||goog.array.contains(c,a[1]))?(goog.events.unlisten(a[0],a[1],a[2]),!1):!0});a.length?this.dispatcher_.swallows[this.identifier]=a:delete this.dispatcher_.swallows[this.identifier]}};
lime.events.Event.prototype.startDrag=function(a,b,c){return new lime.events.Drag(this,a,b,c)};lime.events.Event.prototype.clone=function(){var a=new lime.events.Event(this.dispatcher_);goog.object.extend(a,this);return a};lime.events.EventDispatcher=function(a){this.director=a;this.handlers={};this.swallows={}};lime.events.EventDispatcher.prototype.register=function(a,b){goog.isDef(this.handlers[b])?goog.array.contains(this.handlers[b],a)||(this.handlers[b].push(a),this.handlers[b].sort(lime.Node.compareNode)):(this.handlers[b]=[a],goog.events.listen("touch"==b.substring(0,5)&&a!=this.director?document:"key"==b.substring(0,3)?window:this.director.domElement.parentNode,b,this,!1,this))};
lime.events.EventDispatcher.prototype.release=function(a,b){goog.isDef(this.handlers[b])&&(goog.array.remove(this.handlers[b],a),this.handlers[b].length||(goog.events.unlisten(this.director.domElement.parentNode,b,this,!1,this),delete this.handlers[b]))};lime.events.EventDispatcher.prototype.updateDispatchOrder=function(a){for(var b in this.handlers){var c=this.handlers[b];goog.array.contains(c,a)&&c.sort(lime.Node.compareNode)}};
lime.events.EventDispatcher.prototype.swallow=function(a,b,c){var d=a.identifier;goog.isDef(this.swallows[d])||(this.swallows[d]=[]);this.swallows[d].push([a.targetObject,b,c]);goog.events.listen(a.targetObject,b,goog.nullFunction)};
lime.events.EventDispatcher.prototype.handleEvent=function(a){if(goog.isDef(this.handlers[a.type])){for(var b=this.handlers[a.type].slice(),c=!1,d=0,e=0;!e;){var f=new lime.events.Event(this);f.type=a.type;f.event=a;if("touch"==a.type.substring(0,5)){var g=a.getBrowserEvent().changedTouches[d];f.screenPosition=new goog.math.Coordinate(g.pageX,g.pageY);f.identifier=g.identifier;d++;d>=a.getBrowserEvent().changedTouches.length&&(e=1)}else f.screenPosition=new goog.math.Coordinate(a.clientX+document.body.scrollLeft+
document.documentElement.scrollLeft,a.clientY+document.body.scrollTop+document.documentElement.scrollTop),e=1;if(goog.isDef(this.swallows[f.identifier])){for(var g=this.swallows[f.identifier],h=0;h<g.length;h++)if(g[h][1]==a.type||goog.isArray(g[h][1])&&goog.array.contains(g[h][1],a.type)){var i=g[h][0];f.targetObject=i;f.position=i.screenToLocal(f.screenPosition);g[h][2].call(i,f);c=!0}if("touchend"==a.type||"touchcancel"==a.type||"mouseup"==a.type||"keyup"==a.type)delete f.targetObject,f.release()}else for(h=
0;h<b.length;h++)if(i=b[h],!(this.director.getCurrentScene()!=i.getScene()&&i!=this.director)&&(!i.getHidden()&&i.inTree_)&&(f.targetObject=i,i.hitTest(f)||"key"==a.type.substring(0,3)))if(f.targetObject=i,i.dispatchEvent(f),c=!0,f.event.propagationStopped_)break}c&&a.preventDefault()}};goog.dom.ViewportSizeMonitor=function(a){goog.events.EventTarget.call(this);this.window_=a||window;this.listenerKey_=goog.events.listen(this.window_,goog.events.EventType.RESIZE,this.handleResize_,!1,this);this.size_=goog.dom.getViewportSize(this.window_);this.isPollingRequired_()&&(this.windowSizePollInterval_=window.setInterval(goog.bind(this.checkForSizeChange_,this),goog.dom.ViewportSizeMonitor.WINDOW_SIZE_POLL_RATE))};goog.inherits(goog.dom.ViewportSizeMonitor,goog.events.EventTarget);
goog.dom.ViewportSizeMonitor.getInstanceForWindow=function(a){var a=a||window,b=goog.getUid(a);return goog.dom.ViewportSizeMonitor.windowInstanceMap_[b]=goog.dom.ViewportSizeMonitor.windowInstanceMap_[b]||new goog.dom.ViewportSizeMonitor(a)};goog.dom.ViewportSizeMonitor.removeInstanceForWindow=function(a){a=goog.getUid(a||window);goog.dispose(goog.dom.ViewportSizeMonitor.windowInstanceMap_[a]);delete goog.dom.ViewportSizeMonitor.windowInstanceMap_[a]};
goog.dom.ViewportSizeMonitor.windowInstanceMap_={};goog.dom.ViewportSizeMonitor.WINDOW_SIZE_POLL_RATE=500;goog.dom.ViewportSizeMonitor.prototype.listenerKey_=null;goog.dom.ViewportSizeMonitor.prototype.window_=null;goog.dom.ViewportSizeMonitor.prototype.size_=null;goog.dom.ViewportSizeMonitor.prototype.windowSizePollInterval_=null;goog.dom.ViewportSizeMonitor.prototype.isPollingRequired_=function(){return goog.userAgent.WEBKIT&&goog.userAgent.WINDOWS||goog.userAgent.OPERA&&this.window_.self!=this.window_.top};
goog.dom.ViewportSizeMonitor.prototype.getSize=function(){return this.size_?this.size_.clone():null};goog.dom.ViewportSizeMonitor.prototype.disposeInternal=function(){goog.dom.ViewportSizeMonitor.superClass_.disposeInternal.call(this);this.listenerKey_&&(goog.events.unlistenByKey(this.listenerKey_),this.listenerKey_=null);this.windowSizePollInterval_&&(window.clearInterval(this.windowSizePollInterval_),this.windowSizePollInterval_=null);this.size_=this.window_=null};
goog.dom.ViewportSizeMonitor.prototype.handleResize_=function(){this.checkForSizeChange_()};goog.dom.ViewportSizeMonitor.prototype.checkForSizeChange_=function(){var a=goog.dom.getViewportSize(this.window_);goog.math.Size.equals(a,this.size_)||(this.size_=a,this.dispatchEvent(goog.events.EventType.RESIZE))};lime.transitions={};lime.transitions.Transition=function(a,b){goog.events.EventTarget.call(this);this.duration_=1;this.outgoing_=a;this.incoming_=b;this.finished_=!1};goog.inherits(lime.transitions.Transition,goog.events.EventTarget);lime.transitions.Transition.prototype.getDuration=function(){return this.duration_};lime.transitions.Transition.prototype.setDuration=function(a){this.duration_=a;return this};
lime.transitions.Transition.prototype.setFinishCallback=function(){goog.DEBUG&&(console&&console.warn)&&console.warn("Transition.prototype.setFinishCallback() is deprecated. Use event listeners.");return this};lime.transitions.Transition.prototype.start=function(){this.incoming_.setPosition(new goog.math.Coordinate(0,0));this.incoming_.setHidden(!1);this.finish()};
lime.transitions.Transition.prototype.finish=function(){this.dispatchEvent(new goog.events.Event("end"));this.finished_=!0;this.incoming_=this.outgoing_=null};lime.Director=function(a,b,c){lime.Node.call(this);this.inTree_=!0;this.setAnchorPoint(0,0);this.sceneStack_=[];this.coverStack_=[];this.domClassName="lime-director";this.createDomElement();a.appendChild(this.domElement);goog.userAgent.WEBKIT&&goog.userAgent.MOBILE&&(this.coverElementBelow=document.createElement("div"),goog.dom.classes.add(this.coverElementBelow,"lime-cover-below"),goog.dom.insertSiblingBefore(this.coverElementBelow,this.domElement),this.coverElementAbove=document.createElement("div"),
goog.dom.classes.add(this.coverElementAbove,"lime-cover-above"),goog.dom.insertSiblingAfter(this.coverElementAbove,this.domElement));"absolute"!=a.style.position&&(a.style.position="relative");a.style.overflow="hidden";if(a==document.body){goog.style.installStyles("html,body{margin:0;padding:0;height:100%;}");var d=document.createElement("meta");d.name="viewport";var e="width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1.0,user-scalable=no";/android/i.test(navigator.userAgent)&&(e+=
    ",target-densityDpi=device-dpi");
    d.content = e; document.getElementsByTagName("head").item(0).appendChild(d); if (goog.userAgent.MOBILE && !goog.global.navigator.standalone) { var f = this; setTimeout(function () { window.scrollTo(0, 0); f.invalidateSize_() }, 100) }
} var g, a = goog.style.getSize(a); this.setSize(new goog.math.Size(g = b || a.width || lime.Director.DEFAULT_WIDTH, c || a.height * g / a.width || lime.Director.DEFAULT_HEIGHT)); this.setDisplayFPS(goog.DEBUG); this.setPaused(!1); b = new goog.dom.ViewportSizeMonitor; goog.events.listen(b,
goog.events.EventType.RESIZE,this.invalidateSize_,!1,this);goog.events.listen(goog.global,"orientationchange",this.invalidateSize_,!1,this);lime.scheduleManager.schedule(this.step_,this);this.eventDispatcher=new lime.events.EventDispatcher(this);goog.events.listen(this,["touchmove","touchstart"],function(a){a.event.preventDefault()},!1,this);goog.events.listen(this,["mouseup","touchend","mouseout","touchcancel"],function(){},!1);this.invalidateSize_();goog.DEBUG&&goog.events.listen(goog.global,"keyup",
this.keyUpHandler_,!1,this)};goog.inherits(lime.Director,lime.Node);lime.Director.FPS_INTERVAL=100;lime.Director.DEFAULT_WIDTH=400;lime.Director.DEFAULT_HEIGHT=400;lime.Director.prototype.isPaused=function(){return this.isPaused_};
lime.Director.prototype.setPaused=function(a){this.isPaused_=a;lime.scheduleManager.changeDirectorActivity(this,!a);this.isPaused_?(this.pauseScene=new (this.pauseClassFactory||lime.helper.PauseScene),this.pushScene(this.pauseScene)):this.pauseScene&&(this.popScene(),delete this.pauseScene);return this};lime.Director.prototype.isDisplayFPS=function(){return this.displayFPS_};
lime.Director.prototype.setDisplayFPS=function(a){this.displayFPS_&&!a?goog.dom.removeNode(this.fpsElement_):!this.displayFPS_&&a&&(this.accumDt_=this.frames_=0,this.fpsElement_=goog.dom.createDom("div"),goog.dom.classes.add(this.fpsElement_,"lime-fps"),this.domElement.parentNode.appendChild(this.fpsElement_));this.displayFPS_=a;return this};lime.Director.prototype.getCurrentScene=function(){return this.sceneStack_.length?this.sceneStack_[this.sceneStack_.length-1]:null};
lime.Director.prototype.getDirector=function(){return this};lime.Director.prototype.getScene=function(){return null};lime.Director.prototype.step_=function(a){this.isDisplayFPS()&&(this.frames_++,this.accumDt_+=a,this.accumDt_>lime.Director.FPS_INTERVAL&&(this.fps=1E3*this.frames_/this.accumDt_,goog.dom.setTextContent(this.fpsElement_,this.fps.toFixed(2)),this.accumDt_=this.frames_=0));lime.updateDirtyObjects()};
lime.Director.prototype.replaceScene=function(a,b,c){a.setSize(this.getSize().clone());var b=b||lime.transitions.Transition,d=null;this.sceneStack_.length&&(d=this.sceneStack_[this.sceneStack_.length-1]);for(var e=[],f=this.sceneStack_.length;0<=--f;)this.sceneStack_[f].wasRemovedFromTree(),e.push(this.sceneStack_[f].domElement),this.sceneStack_[f].parent_=null;this.sceneStack_.length=0;this.sceneStack_.push(a);a.domElement.style.display="none";this.domElement.appendChild(a.domElement);a.parent_=
this;a.wasAddedToTree();a=new b(d,a);goog.events.listenOnce(a,"end",function(){for(var a=e.length;0<=--a;)goog.dom.removeNode(e[a]);e.length=0},!1,this);goog.isDef(c)&&a.setDuration(c);a.start();return a};lime.Director.prototype.updateLayout=function(){this.dirty_&=~lime.Dirty.LAYOUT};
lime.Director.prototype.pushScene=function(a,b,c){var d;a.setSize(this.getSize().clone());goog.isDef(b)&&this.sceneStack_.length&&(d=this.sceneStack_[this.sceneStack_.length-1],d=new b(d,a),goog.isDef(c)&&d.setDuration(c),a.domElement.style.display="none");this.sceneStack_.push(a);this.domElement.appendChild(a.domElement);a.parent_=this;a.wasAddedToTree();if(d)return d.start(),d};
lime.Director.prototype.popScene=function(){this.sceneStack_.length&&(this.sceneStack_[this.sceneStack_.length-1].wasRemovedFromTree(),this.sceneStack_[this.sceneStack_.length-1].parent_=null,goog.dom.removeNode(this.sceneStack_[this.sceneStack_.length-1].domElement),this.sceneStack_.pop())};
lime.Director.prototype.addCover=function(a,b){goog.userAgent.WEBKIT&&goog.userAgent.MOBILE?b?this.coverElementAbove.appendChild(a.domElement):this.coverElementBelow.appendChild(a.domElement):b?goog.dom.insertSiblingAfter(a.domElement,this.domElement):goog.dom.insertSiblingBefore(a.domElement,this.domElement);a.director=this;this.coverStack_.push(a)};lime.Director.prototype.removeCover=function(a){goog.array.remove(this.coverStack_,a);goog.dom.removeNode(a.domElement)};
lime.Director.prototype.getBounds=function(a){var b=this.getPosition(),c=this.getScale();return new goog.math.Box(a.top-b.y/c.y,a.right-b.x/c.x,a.bottom-b.y/c.y,a.left-b.x/c.x)};lime.Director.prototype.screenToLocal=function(a){a=a.clone();a.x-=this.domOffset.x+this.position_.x;a.y-=this.domOffset.y+this.position_.y;a.x/=this.scale_.x;a.y/=this.scale_.y;return a};
lime.Director.prototype.localToScreen=function(a){a=a.clone();a.x*=this.scale_.x;a.y*=this.scale_.y;a.x+=this.domOffset.x+this.position_.x;a.y+=this.domOffset.y+this.position_.y;return a};lime.Director.prototype.update=function(){lime.Node.prototype.update.call(this);for(var a=this.coverStack_.length;0<=--a;)this.coverStack_[a].update()};
lime.Director.prototype.invalidateSize_=function(){var a=goog.style.getSize(this.domElement.parentNode);this.domElement.parentNode==document.body&&(window.scrollTo(0,0),goog.isNumber(window.innerHeight)&&(a.height=window.innerHeight));var b=this.getSize().clone().scaleToFit(a);this.setScale(b.width/this.getSize().width);a.aspectRatio()<b.aspectRatio()?this.setPosition(0,(a.height-b.height)/2):this.setPosition((a.width-b.width)/2,0);this.updateDomOffset_();goog.userAgent.MOBILE&&this.domElement.parentNode==
    document.body && (this.overflowStyle_ && goog.style.uninstallStyles(this.overflowStyle_), this.overflowStyle_ = goog.style.installStyles("html{height:" + (a.height + 120) + "px;overflow:hidden;}"))
};

lime.Director.prototype.makeMobileWebAppCapable = function () {
    var a = document.createElement("meta"); a.name = "apple-mobile-web-app-capable"; a.content = "yes"; document.getElementsByTagName("head").item(0).appendChild(a); a = document.createElement("meta"); a.name = "apple-mobile-web-app-status-bar-style"; a.content = "black"; document.getElementsByTagName("head").item(0).appendChild(a); a = !1; goog.isDef(localStorage) && localStorage.setItem("_lime_visited", !0);
};
lime.Director.prototype.updateDomOffset_ = function () { this.domOffset = goog.style.getPageOffset(this.domElement.parentNode) };
lime.Director.prototype.keyUpHandler_ = function (a) { a.altKey && "d" == String.fromCharCode(a.keyCode).toLowerCase() && (this.debugModeOn_ ? (goog.style.uninstallStyles(this.debugModeOn_), this.debugModeOn_ = null) : this.debugModeOn_ = goog.style.installStyles(".lime-scene div,.lime-scene img,.lime-scene canvas{border: 1px solid #c00;}"), a.stopPropagation(), a.preventDefault()) }; lime.Director.prototype.hitTest = function (a) { a && a.screenPosition && (a.position = this.screenToLocal(a.screenPosition)); return !0 };
lime.Node.prototype.setHidden = function (value) {
    this.hidden_ = value;
    this.setDirty(lime.Dirty.VISIBILITY);
    this.autoHide_ = 0;
    return this;
};
goog.provide('lime.transitions.MoveInDown');

goog.provide('lime.transitions.MoveInLeft');
goog.provide('lime.transitions.MoveInRight');
goog.provide('lime.transitions.MoveInUp');
goog.provide('lime.transitions.SlideIn');


goog.provide('lime.transitions.SlideInDown');
goog.provide('lime.transitions.SlideInLeft');
goog.provide('lime.transitions.SlideInRight');
goog.provide('lime.transitions.SlideInUp');
goog.require('goog.math.Coordinate');
goog.require('lime.Sprite');
goog.require('lime.animation.Animation');

goog.require('lime.animation.MoveBy');


lime.animation.MoveBy = function (delta, opt_y) {
    lime.animation.Animation.call(this);

    if (arguments.length == 2) {
        this.delta_ = new goog.math.Coordinate(arguments[0], arguments[1]);
    } else {
        this.delta_ = /** @type {!goog.math.Coordinate} */ (delta);
    }


};
goog.inherits(lime.animation.MoveBy, lime.animation.Animation);


lime.animation.MoveBy.prototype.scope = 'move';


lime.animation.MoveBy.prototype.setSpeed = function (speed) {
    this.speed_ = speed;
    this.calcDurationFromSpeed_();
    return this;
};


lime.animation.MoveBy.prototype.makeTargetProp = function (target) {
    if (this.useTransitions()) {
        target.addTransition(lime.Transition.POSITION,
            goog.math.Coordinate.sum(target.getPosition(), this.delta_),
            this.duration_, this.getEasing());
        target.setDirty(lime.Dirty.POSITION);
    }
    return {
        startpos: target.getPosition()
    };
};


lime.animation.MoveBy.prototype.calcDurationFromSpeed_ = function () {
    if (!this.speed_) return;

    this.setDuration(this.speed_ * goog.math.Coordinate.distance(
        this.delta_, new goog.math.Coordinate(0, 0)) / 100);

    this.speedCalcDone_ = 1;
}


lime.animation.MoveBy.prototype.update = function (t, target) {
    if (this.status_ == 0) return;
    var prop = this.getTargetProp(target);

    target.setPosition(
        prop.startpos.x + this.delta_.x * t,
        prop.startpos.y + this.delta_.y * t);

};


lime.animation.MoveBy.prototype.clearTransition = function (target) {

    if (this.useTransitions()) {
        target.clearTransition(lime.Transition.POSITION);
        target.setDirty(lime.Dirty.POSITION);
    }


};


lime.animation.MoveBy.prototype.reverse = function () {
    var d = this.delta_.clone();
    d.x *= -1;
    d.y *= -1;

    return new lime.animation.MoveBy(d).cloneParam(this);
};





goog.require('lime.transitions.Transition');
lime.transitions.SlideIn = function (outgoing, incoming, opt_movein) {
    goog.base(this, outgoing, incoming);

    this.mode_ = lime.transitions.SlideIn.Mode.LEFT;

    this.movein_ = opt_movein || false;

};
goog.inherits(lime.transitions.SlideIn, lime.transitions.Transition);

lime.transitions.SlideIn.Mode = {
    LEFT: 0,
    UP: 1,
    RIGHT: 2,
    DOWN: 4
};

/**inheritDoc */
lime.transitions.SlideIn.prototype.start = function () {
    var size = this.incoming_.getSize();
    var delta = new goog.math.Coordinate(0, 0);

    switch (this.mode_) {
        case lime.transitions.SlideIn.Mode.LEFT:
            this.incoming_.setPosition(-size.width, 0);
            delta.x = size.width;
            break;

        case lime.transitions.SlideIn.Mode.UP:
            this.incoming_.setPosition(0, -size.height);
            delta.y = size.height;
            break;

        case lime.transitions.SlideIn.Mode.RIGHT:
            this.incoming_.setPosition(size.width, 0);
            delta.x = -size.width;
            break;

        case lime.transitions.SlideIn.Mode.DOWN:
            this.incoming_.setPosition(0, size.height);
            delta.y = -size.height;
            break;
    }
    this.incoming_.setHidden(false);

    var move = new lime.animation.MoveBy(delta).
        setDuration(this.getDuration());

    if (this.outgoing_ && !this.movein_) move.addTarget(this.outgoing_);

    move.addTarget(this.incoming_);

    goog.events.listen(move, lime.animation.Event.STOP,
        this.finish, false, this);

    move.play();
};

/**inheritDoc */
lime.transitions.SlideIn.prototype.finish = function () {
    if (this.outgoing_)
        this.outgoing_.setPosition(0, 0);

    lime.transitions.Transition.prototype.finish.call(this);
};

/**
 * Set the mode for transition. Mode defines the animation direction.
 * param {lime.transitions.SlideIn.Mode} value New mode.
 * return {lime.transitions.SlideIn} object itself.
 */
lime.transitions.SlideIn.prototype.setMode = function (value) {
    this.mode_ = value;
    return this;
};


/**
 * inheritDoc
 * extends lime.transitions.SlideIn
 */
lime.transitions.SlideInLeft = lime.transitions.SlideIn;

/**
 * inheritDoc
 * constructor
 * extends lime.transitions.SlideIn
 */
lime.transitions.SlideInUp = function (outgoing, incoming, opt_movein) {
    goog.base(this, outgoing, incoming, opt_movein);

    this.setMode(lime.transitions.SlideIn.Mode.UP);
};
goog.inherits(lime.transitions.SlideInUp, lime.transitions.SlideIn);

/**
 * inheritDoc
 * constructor
 * extends lime.transitions.SlideIn
 */
lime.transitions.SlideInRight = function (outgoing, incoming, opt_movein) {
    goog.base(this, outgoing, incoming, opt_movein);

    this.setMode(lime.transitions.SlideIn.Mode.RIGHT);
};
goog.inherits(lime.transitions.SlideInRight, lime.transitions.SlideIn);

/**
 * inheritDoc
 * constructor
 * extends lime.transitions.SlideIn
 */
lime.transitions.SlideInDown = function (outgoing, incoming, opt_movein) {
    goog.base(this, outgoing, incoming, opt_movein);

    this.setMode(lime.transitions.SlideIn.Mode.DOWN);
};
goog.inherits(lime.transitions.SlideInDown, lime.transitions.SlideIn);
lime.transitions.MoveInLeft = function (outgoing, incoming) {
    goog.base(this, outgoing, incoming, true);
};
goog.inherits(lime.transitions.MoveInLeft, lime.transitions.SlideInLeft);
lime.transitions.MoveInUp = function (outgoing, incoming) {
    goog.base(this, outgoing, incoming, true);
};
goog.inherits(lime.transitions.MoveInUp, lime.transitions.SlideInUp);
lime.transitions.MoveInRight = function (outgoing, incoming) {
    goog.base(this, outgoing, incoming, true);
};
goog.inherits(lime.transitions.MoveInRight, lime.transitions.SlideInRight);

lime.transitions.MoveInDown = function (outgoing, incoming) {
    goog.base(this, outgoing, incoming, true);
};
goog.inherits(lime.transitions.MoveInDown, lime.transitions.SlideInDown);



/////start globals
var sceneBefore = 1;
var player = {
    playerLevel: 1, 
    barnLevel: 1,
    pastureLevel: 1,
    fields: 2,
    farms: 1,
    tools: 50,
    money: 500,
    currentCrop: 0,
    treesP: 0,
   

cropsStored: [
        { name: "Tomatoes", stored: 0 },
        { name: "Carrots", stored: 0 },
        { name: "Artichoke", stored: 0 },
        { name: "Eggplant", stored: 0 },
        { name: "Peppers", stored: 0 },
        { name: "Corn", stored: 0 },
        { name: "Hay", stored: 0 },
        { name: "Milk", stored: 0 },
        { name: "Apple", stored: 0 },
        { name: "Pear", stored: 0 },
        { name: "Pork", stored: 0 },
        { name: "Eggs", stored: 0 },
        { name: "Grapes", stored: 0 },
        { name: "Jelly", stored: 0 },

    ]
   
};
var tutSeen = 0;


if (typeof localStorage["GuiGhostFarms_player"] === "undefined") { localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));};
player = JSON.parse(localStorage.getItem('GuiGhostFarms_player'));
var globalModalBlock = 0;

var starCash = 0;
if (typeof localStorage["starCash"] === "undefined") { localStorage["starCash"] = 0; starCash = 0; };
starCash = parseInt(localStorage["starCash"]);
var fsClicked = 0;
var orchardTreeBlock = 1;
var vinyardBlocks = 1;
var vinyardBlocks2 = 1;
var vinyardHouseLevel = 1;
if (typeof localStorage["GuiGhostFarms_vinyardBlocks"] === "undefined") { localStorage["GuiGhostFarms_vinyardBlocks"] = 1;  };
vinyardBlocks = localStorage.getItem["GuiGhostFarms_vinyardBlocks"];
if (typeof localStorage["GuiGhostFarms_vinyardBlocks2"] === "undefined") { localStorage["GuiGhostFarms_vinyardBlocks2"] = 1; };
vinyardBlocks2 = localStorage.getItem["GuiGhostFarms_vinyardBlocks2"];

if (typeof localStorage["GuiGhostFarms_vinyardHouseLevel"] === "undefined") { localStorage["GuiGhostFarms_vinyardHouseLevel"] = 1; };
vinyardHouseLevel = parseInt(localStorage["GuiGhostFarms_vinyardHouseLevel"]);
if (typeof localStorage["GuiGhostFarms_orchardTreeBlock"] === "undefined") { localStorage["GuiGhostFarms_orchardTreeBlock"] = 1; };
orchardTreeBlock = parseInt(localStorage["GuiGhostFarms_orchardTreeBlock"]);

var coopLevel = 1;
if (typeof localStorage["GuiGhostFarms_coopLevel"] === "undefined") { localStorage["GuiGhostFarms_coopLevel"] = 1; };
coopLevel = parseInt(localStorage["GuiGhostFarms_coopLevel"]);

var dayCount = 1;
if (typeof localStorage["GuiGhostFarms_dayCount"] === "undefined") { localStorage["GuiGhostFarms_dayCount"] = 1; };
dayCount = parseInt(localStorage["GuiGhostFarms_dayCount"]);

var yearCount = 1;
if (typeof localStorage["GuiGhostFarms_yearCount"] === "undefined") { localStorage["GuiGhostFarms_yearCount"] = 1; };
yearCount = parseInt(localStorage["GuiGhostFarms_yearCount"]);

var toolsEver = 0;
if (typeof localStorage["GuiGhostFarms_toolsEver"] === "undefined") { localStorage["GuiGhostFarms_toolsEver"] = 0; };
toolsEver = parseInt(localStorage["GuiGhostFarms_toolsEver"]);

var pickedEver = 0;
if (typeof localStorage["GuiGhostFarms_pickedEver"] === "undefined") { localStorage["GuiGhostFarms_pickedEver"] = 0; };
pickedEver = parseInt(localStorage["GuiGhostFarms_pickedEver"]);

var moneyEver = 0;
if (typeof localStorage["GuiGhostFarms_moneyEver"] === "undefined") { localStorage["GuiGhostFarms_moneyEver"] = 0; };
moneyEver = parseInt(localStorage["GuiGhostFarms_moneyEver"]);

var boughtStarCash = false;
if (typeof localStorage["GuiGhostFarms_boughtStarCash"] === "undefined") { localStorage["GuiGhostFarms_boughtStarCash"] = false; };
boughtStarCash = parseInt(localStorage["GuiGhostFarms_boughtStarCash"]);


if (typeof localStorage["GuiGhostFarms_tutSeen"] === "undefined") { localStorage.setItem('GuiGhostFarms_tutSeen', 0); };

tutSeen = parseInt(localStorage["GuiGhostFarms_tutSeen"]);


var compassVisible = false;
var playerMuted = 0;

var warningSeen = 0;

farming.start = function () {

    var a = { width: 310, height: 540, tile_size: 30, num_tiles_x: 4, num_tiles_y: 4, landLayer_w: 320, landLayer_h: 388, controlsLayer_w: 320, controlsLayer_h: 70, costPlowing: 0, shop_margin_x: 50, shop_margin_y: 35 },
        b = { money: 500, currentCrop: 0 };

    a.crops = [
        { name: "Tomatoes  ", cost: 4, revenue: 10, time_to_ripe: 20, time_to_death: 60, image: "tomato.png", harvest: "tomato2.png", grow1: "tomatoGrow1.png", grow2: "tomatoGrow2.png", stored: 0, withered: "tomatoWithered.png" },
        { name: "Carrots    ", cost: 6, revenue: 14, time_to_ripe: 25, time_to_death: 60, image: "carrots.png", harvest: "carrots2.png", grow1: "carrotGrow1.png", grow2: "carrotGrow2.png", stored: 0, withered: "carrotsWithered.png" },
        { name: "Artichoke  ", cost: 8, revenue: 18, time_to_ripe: 30, time_to_death: 70, image: "artichoke.png", harvest: "artichoke2.png", grow1: "artiGrow1.png", grow2: "artiGrow2.png", stored: 0, withered: "artichokeWithered.png" },
        { name: "Eggplant ", cost: 11, revenue: 25, time_to_ripe: 40, time_to_death: 80, image: "eggplant.png", harvest: "eggplant2.png", grow1: "eggplantGrow1.png", grow2: "eggplantGrow2.png", stored: 0, withered: "eggplantWithered.png" },
        { name: "Peppers  ", cost: 13, revenue: 32, time_to_ripe: 50, time_to_death: 90, image: "peppers.png", harvest: "peppers2.png", grow1: "pepperGrow1.png", grow2: "pepperGrow2.png", stored: 0, withered: "peppersWithered.png" },
        { name: "Corn  ", cost: 15, revenue: 35, time_to_ripe: 75, time_to_death: 100, image: "corn.png", harvest: "corn2.png", grow1: "cornGrow1.png", grow2: "cornGrow2.png", stored: 0, withered: "cornWithered.png" },
        { name: "Hay  ", cost: 5, revenue: 10, time_to_ripe: 25, time_to_death: 280, image: "hay.png", harvest: "hayCartFull.png", grow1: "hayGrow1.png", grow2: "hayGrow2.png", stored: 0, withered: "hayWithered.png" },
        { name: "Milk  ", cost: 12, revenue: 30, time_to_ripe: 60, time_to_death: 22280, image: "milk.png", harvest: "milk.png", grow1: "milk.png", grow2: "milk.png", stored: 0, withered: "tomatoWithered.png" },
        { name: "Apple", cost: 10, revenue: 25, time_to_ripe: 50, time_to_death: 140, image: "Orchard/ready_Apples.png", harvest: "apple.png", grow1: "Orchard/growing2_trees.png", grow2: "Orchard/growing3_trees.png", stored: 0, withered: "Orchard/wither_treesApple.png" },
        { name: "Pear", cost: 15, revenue: 35, time_to_ripe: 60, time_to_death: 140, image: "Orchard/ready_treesPear.png", harvest: "pear.png", grow1: "Orchard/growing22_trees.png", grow2: "Orchard/growing4_trees.png", stored: 0, withered: "Orchard/wither_treesPear.png" },
        { name: "Pork", cost: 20, revenue: 40, time_to_ripe: 60, time_to_death: 140, image: "livestockPens/hams.png", harvest: "livestockPens/hams.png", grow1: "livestockPens/hams.png", grow2: "livestockPens/hams.png", stored: 0, withered: "tomatoWithered.png" },
        { name: "Eggs", cost: 5, revenue: 10, time_to_ripe: 60, time_to_death: 140, image: "livestockPens/eggs.png", harvest: "livestockPens/eggs.png", grow1: "livestockPens/eggs.png", grow2: "livestockPens/eggs.png", stored: 0, withered: "tomatoWithered.png" },
        { name: "Grapes", cost: 10, revenue: 20, time_to_ripe: 50, time_to_death: 140, image: "vinyard/grapes_ready.png", harvest: "vinyard/grapes2.png", grow1: "vinyard/grapes_Grow1.png", grow2: "vinyard/grapes_Grow2.png", stored: 0, withered: "vinyard/grapes_withered.png" },
        { name: "Jelly", cost: 30, revenue: 40, time_to_ripe: 60, time_to_death: 140, image: "vinyard/jelly.png", harvest: "vinyard/jelly.png", grow1: "vinyard/jelly.png", grow2: "vinyard/jelly.png", stored: 0 },

    ];

    a.barnyard = [
        { name: "yard", image: "grass.png" },
        { name: "road", image: "vertRoad.png" },
        { name: "sacks", image: "sacks.png" },
        { name: "market", image: "marketCoin.png" },
        { name: "vertFence", image: "vertFence.png" },
        { name: "horizFence", image: "horizFence.png" },
        { name: "shelter1", image: "shelter1.png" },
        { name: "shelter2", image: "shelter2.png" },
        { name: "crate1", image: "eggplantCrate.png" },
        { name: "crate2", image: "cornCrate.png" },
        { name: "well", image: "well2.png" },
        { name: "anvil", image: "anvil1.png" },
        { name: "anvil2", image: "anvil2.png" },
        { name: "trees1", image: "leftTrees.png" },
        { name: "trees2", image: "rightTrees.png" },
        { name: "horizRoad", image: "horizRoad.png" },
        { name: "toolTable", image: "toolTable.png" },
        { name: "forge", image: "forge2.png" },
        { name: "gateFence", image: "gateFence.png" }

    ];
    a.barnlevelImg = [
        { name: "Basic Shed", image: "barn1-1.png" },
        { name: "Small Barn", image: "barn2-1.png" },
        { name: "Large Barn", image: "barn3-1.png" },
        { name: "XLarge Barn", image: "barn4-1.png" },
        { name: "Double Silo Barn", image: "barn5-1.png" },
        { name: "Pasture", image: "pasture.png" }
    ];
    a.PastureUpgrades = [
        { name: "Feed Stall", image: "FeedBinsLeft.png" },
        { name: "Feed Stall 2", image: "FeedBinsRight.png" }

    ];
    a.pasture = [
        { name: "pond1", image: "water.png" },
        { name: "dairyBarnP", image: "dairyBarn.png" },
        { name: "vertBridge", image: "bridgeVert.png" },
        { name: "pTree1", image: "pTree1.png" },
        { name: "pTree2", image: "pTree2.png" },
        { name: "dirtRoad", image: "dirt.png" },
        { name: "cowEatR4", image: "cow_eatR4.png" },
        { name: "cowForward1", image: "cow_eatF3.png" },
        { name: "rocks1", image: "rocks.png" },
        { name: "treeBlockP", image: "treeBlockP.png" },
        { name: "cowEatR1", image: "cow_eatR1.png" },
        { name: "cowEatR2", image: "cow_eatR2.png" },
        { name: "cowEatR4", image: "cow_eatR4.png" },
        { name: "cowWalkLeft1", image: "cowLeft1.png" },
        { name: "cowWalkLeft2", image: "cowLeft2.png" },
        { name: "cowWalkLeft3", image: "cowLeft3.png" },
        { name: "cowWalkLeft4", image: "cowLeft4.png" },
        { name: "cowRight1", image: "cowRight1.png" },
        { name: "cowRight2", image: "cowRight2.png" },
    ];
    a.orchard = [
        { name: "waterfallMtn", image: "Orchard/OrchardBack4.png" },
        { name: "shack", image: "FeedBinsRight.png" }
    ];
    a.waterfallImg = [
        { name: "waterfall1", image: "Orchard/waterfall1.png" },
        { name: "waterfall2", image: "Orchard/waterfall2.png" },
        { name: "waterfall3", image: "Orchard/waterfall3.png" },
        { name: "waterfall4", image: "Orchard/waterfall4.png" },
        { name: "movingWater1", image: "Orchard/waterMoving1.png" },
        { name: "movingWater2", image: "Orchard/waterMoving2.png" }
    ];
    a.achievements = {
        0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false,
        9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false, 16: false
    }
    if (typeof localStorage["GuiGhostFarms_achievements"] === "undefined") { localStorage.setItem('GuiGhostFarms_achievements', JSON.stringify(a.achievements)); };
    a.achievements = JSON.parse(localStorage.getItem('GuiGhostFarms_achievements'));

    a.achieveText = [
        { index: 0, title: "Harvester I", sub: "Harvested 500 crops", reward: 5 },
        { index: 1, title: "Harvester II", sub: "Harvested 5000 crops", reward: 10 },
        { index: 2, title: "Expansion", sub: "Purchased another acre", reward: 5 },
        { index: 3, title: "Carpenter", sub: "Upgraded Barn to Max", reward: 10 },

        { index: 4, title: "Blacksmith I", sub: "Made 500 Tools", reward: 5 },
        { index: 5, title: "Blacksmith II", sub: "Made 5000 Tools", reward: 10 },
        { index: 6, title: "Patience", sub: "Played for 1 farm year", reward: 5 },
        { index: 7, title: "Acreage", sub: "Own all 5 acres", reward: 10 },

        { index: 8, title: "Jelly Making", sub: "Unlock Jelly production", reward: 10 },
        { index: 9, title: "Lumberjack", sub: "Clear all Forests", reward: 10 },
        { index: 10, title: "Breakfast Time", sub: "100 Ham and 100 Eggs", reward: 5 },
        { index: 11, title: "Balanced Diet", sub: "10 of every crop", reward: 10 },

        { index: 12, title: "Milk Master", sub: "Upgrade Dairy to max", reward: 5 },
        { index: 13, title: "Merchant", sub: "Earn $5000 at Market", reward: 5 },
        { index: 14, title: "Crossover", sub: "Buy $ with StarCash", reward: 10 },
        { index: 15, title: "Back for More", sub: "Play 10 farm years", reward: 50 }
    ];
    a.sceneBefore = 1;



    var acres = [
        { name: "Home", owned: 0, cost: 0, text: "Home Sweet Home" },
        { name: "Dairy", owned: 0, cost: 2500, text: "MOOOOOO.....Got Milk?" },
        { name: "Orchard", owned: 0, cost: 5000, text: "Apples and Pears" },
        { name: "Vineyard", owned: 0, cost: 7500, text: "Grapes & Jelly - YUM!" },
        { name: "StockPens", owned: 0, cost: 10000, text: "Livestock Pens" }
    ];
    if (typeof localStorage["GuiGhostFarms_acres"] === "undefined") { localStorage.setItem('GuiGhostFarms_acres', JSON.stringify(acres)); };
    acres = JSON.parse(localStorage.getItem('GuiGhostFarms_acres'));
    a.sceneBefore = 1;


    //////////----------------tooltimer---------------------//////
    dt = 10000;
    lime.scheduleManager.scheduleWithDelay(function () {
        player.tools = player.tools + (2) + parseInt(player.barnLevel);
        toolsEver = toolsEver + (2 + parseInt(player.barnLevel));
        localStorage["GuiGhostFarms_toolsEver"] = toolsEver;
        a.updateTools();


    }, this, dt)

    //var themeSong = new lime.audio.Audio.addLoadHandler_("audio/farming.mp3");

    var themeSong = new lime.audio.Audio('audio/farming2.mp3');
    //themeSong.play(true);
    var smithSound = new lime.audio.Audio('audio/blacksmith2.mp3');
    var cowSound = new lime.audio.Audio('audio/cow1.mp3');
    var waterfallSound = new lime.audio.Audio('audio/waterfallSound.mp3');
    var purchaseSound = new lime.audio.Audio('audio/nice.mp3');
    var chickenSound = new lime.audio.Audio('audio/chickens.mp3');
    var pig1Sound = new lime.audio.Audio('audio/snort.mp3');
    var pig2Sound = new lime.audio.Audio('audio/ofarm.mp3');
    var pig3Sound = new lime.audio.Audio('audio/pig3.mp3');

    var horizRoad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(320, 25).setFill("images/" + a.barnyard[15].image);
    ////////////////////////////// 
    ////////////////////////////// 

    ////////////////////////////// ////start drawing HOME Scene


    var c = new lime.Director(document.body, a.width, a.height); c.makeMobileWebAppCapable(); c.setDisplayFPS(!1);

    var d = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        e = (new lime.Layer).setAnchorPoint(0, 0),
        f = (new lime.Layer).setAnchorPoint(0, 0);

    d.appendChild(e);
    d.appendChild(f);



    //top bar
    var gg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 22).setFill("images/UI/greenButtonLg.png");
    f.appendChild(gg);
    //var topLogo = (new lime.Sprite).setPosition(155, 11).setSize(150, 22).setFill("images/UI/topMenuPlain.png");
    //f.appendChild(topLogo);
    var h = (new lime.Label).setText(player.money).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(18).setPosition(245, 24);
    f.appendChild(h);
    var topCoin = (new lime.Sprite).setPosition(285, 20).setSize(35, 35).setFill(imgArray11[0]);
    f.appendChild(topCoin);
    //expanded top bar home
    var storageIconH = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 23).setSize(42, 42).setFill("images/UI/homeButton.png");
    f.appendChild(storageIconH);
    var storageMenuH = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 78).setSize(a.controlsLayer_w - 20, 70).setFill("images/UI/greenButtonLg.png");
    f.appendChild(storageMenuH);
    ///// day/year count Label on expanded
    var dayLabel = (new lime.Label).setFontSize(10).setPosition(95, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Day " + dayCount).setFontFamily("Comic Sans MS").setFontColor("#ffffff").setFontSize(14);
    storageMenuH.appendChild(dayLabel);
    var yearLabel = (new lime.Label).setFontSize(10).setPosition(-100, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Year " + yearCount).setFontFamily("Comic Sans MS").setFontColor("#ffffff").setFontSize(14);
    storageMenuH.appendChild(yearLabel);



    //inventory Icons
    for (x = 0; x < (6); x++) storedIcon = (new lime.Sprite).setAnchorPoint(0, 0).setPosition((-113 + (x * 40)), -24).setFill("images/" + a.crops[x].harvest).setSize(30, 30), storageMenuH.appendChild(storedIcon);

    var gLabel0 = (new lime.Label).setPosition(-98, 18).setSize(26, 20).setText(player.cropsStored[0].stored).setFontSize(18).setFontFamily("Comic Sans MS").setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel0);
    var gLabel1 = (new lime.Label).setPosition(-58, 18).setSize(26, 20).setText(player.cropsStored[1].stored).setFontSize(18).setFontFamily("Comic Sans MS").setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel1);
    var gLabel2 = (new lime.Label).setPosition(-15, 18).setSize(26, 20).setText(player.cropsStored[2].stored).setFontSize(18).setFontFamily("Comic Sans MS").setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel2);
    var gLabel3 = (new lime.Label).setPosition(20, 18).setSize(26, 20).setText(player.cropsStored[3].stored).setFontSize(18).setFontFamily("Comic Sans MS").setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel3);
    var gLabel4 = (new lime.Label).setPosition(67, 18).setSize(26, 20).setText(player.cropsStored[4].stored).setFontSize(18).setFontFamily("Comic Sans MS").setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel4);
    var gLabel5 = (new lime.Label).setPosition(102, 18).setSize(26, 20).setText(player.cropsStored[5].stored).setFontSize(18).setFontFamily("Comic Sans MS").setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel5);
    //var gLabel6 = (new lime.Label).setPosition(150, 20).setSize(20, 16).setText(player.cropsStored[6].stored).setFontSize(18).setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel6);
    //var gLabel7 = (new lime.Label).setPosition(195, 20).setSize(20, 16).setText(player.cropsStored[7].stored).setFontSize(18).setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel7);
    //var gLabel8 = (new lime.Label).setPosition(240, 20).setSize(20, 16).setText(player.cropsStored[8].stored).setFontSize(18).setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel8);
    //var gLabel9 = (new lime.Label).setPosition(285, 20).setSize(20, 16).setText(player.cropsStored[9].stored).setFontSize(18).setFontColor("#E8FC08"); storageMenuH.appendChild(gLabel9);

    storageMenuH.setHidden(true);
    var storageToggleH = 0;

    goog.events.listen(storageIconH, ["mousedown", "touchstart"], function () {
        if (storageToggleH == 0) { storageMenuH.setHidden(false); storageToggleH = 1 }
        else { storageMenuH.setHidden(true); storageToggleH = 0 }
    });


    var toolCountImg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(10, 3).setSize(35, 35).setFill("images/UI/toolsIcon2.png");
    var toolCount = (new lime.Label).setText(player.tools).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(65, 24).setFontSize(18);
    f.appendChild(toolCountImg);
    f.appendChild(toolCount);



    a.updateStored = function () {

        gLabel0.setText(player.cropsStored[0].stored);
        gLabel1.setText(player.cropsStored[1].stored);
        gLabel2.setText(player.cropsStored[2].stored);
        gLabel3.setText(player.cropsStored[3].stored);
        gLabel4.setText(player.cropsStored[4].stored);
        gLabel5.setText(player.cropsStored[5].stored); gLabel5Pork.setText(player.cropsStored[5].stored); gLabel5LS.setText(player.cropsStored[5].stored);
        gLabel6.setText(player.cropsStored[6].stored);
        gLabel7.setText(player.cropsStored[7].stored);
        gLabel8.setText(player.cropsStored[8].stored); gLabel8Pork.setText(player.cropsStored[8].stored); gLabel8LS.setText(player.cropsStored[8].stored);
        gLabel9.setText(player.cropsStored[9].stored);
        gLabel10.setText(player.cropsStored[10].stored);
        gLabel11.setText(player.cropsStored[11].stored);
        gLabel12.setText(player.cropsStored[12].stored);
        gLabel13.setText(player.cropsStored[13].stored);


    };




    //lower menu
    var g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, a.height - a.controlsLayer_h - 5).setSize(a.controlsLayer_w, a.controlsLayer_h + 5).setFill("images/UI/blackButton.png");
    f.appendChild(g);
    //g = (new lime.GlossyButton).setColor("#663300").setText("Seeds").setPosition(35, a.height - a.controlsLayer_h / 2 - 20).setSize(70, 25);
    //f.appendChild(g);
    var menu = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(14, 467).setSize(35, 33).setFill("images/UI/gearButton.png");
    f.appendChild(menu);
    //MUTE Home
    var muteBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(14, 502).setSize(35, 33).setFill(imgArray[15]); f.appendChild(muteBtn);
    var achieveBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(52, 467).setSize(35, 33).setFill("images/UI/trophyBtn.png"); f.appendChild(achieveBtn);
    var fbBtnH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(52, 502).setSize(35, 33).setFill("images/UI/starButton.png"); f.appendChild(fbBtnH)
    var compassH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(135, 449).setSize(35, 35).setFill("images/UI/compass22.png"); f.appendChild(compassH)

    /// compass nav
    var compassHBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 100).setSize(250, 250).setFill("images/UI/compass3.png"); f.appendChild(compassHBack)
    var orchardNavH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 35).setSize(50, 50).setFill("images/UI/orchardBtn.png"); compassHBack.appendChild(orchardNavH)
    var lsNavH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 170).setSize(50, 50).setFill("images/UI/lsBtn.png"); compassHBack.appendChild(lsNavH)
    var vinyardNavH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 35).setSize(50, 50).setFill("images/UI/vinyardBtn.png"); compassHBack.appendChild(vinyardNavH)
    var homeNavH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(96, 100).setSize(60, 60).setFill("images/UI/homeButton.png"); compassHBack.appendChild(homeNavH)
    var pastureNavH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 170).setSize(50, 50).setFill("images/UI/pastureBtn.png"); compassHBack.appendChild(pastureNavH)
    var closeNavH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 222).setSize(50, 50).setFill("images/UI/XButton.png"); compassHBack.appendChild(closeNavH)
    compassHBack.setHidden(true);




    goog.events.listen(compassH, ["mousedown", "touchstart"], function () { if (globalModalBlock == 0) { checkAcresNav(); homeBlock.setHidden(false); } });
    goog.events.listen(closeNavH, ["mousedown", "touchstart"], function () { closeAcresNav(); });
    goog.events.listen(homeNavH, ["mousedown", "touchstart"], function () { closeAcresNav(); });
    goog.events.listen(pastureNavH, ["mousedown", "touchstart"], function () {
        if (acres[1].owned == 1 && compassVisible) {
            a.sceneBefore = 2;
            closeAcresNav();
            homeCrop = b.currentCrop;
            cowSound.play(); checkShortage();
            oldCrop = b.currentCrop; b.currentCrop = 6;
            globalModalBlock = 0;
            homeBlock.setHidden(true);
            c.replaceScene(pastureScene, lime.transitions.SlideInLeft);
        }
    });
    goog.events.listen(orchardNavH, ["mousedown", "touchstart"], function () {
        if (acres[2].owned == 1 && compassVisible) {
            a.sceneBefore = 3;
            waterfallSound.play();
            closeAcresNav();
            homeCrop = b.currentCrop;
            oldCrop = b.currentCrop; b.currentCrop = 8;
            c.replaceScene(orchardScene, lime.transitions.SlideInRight);
            globalModalBlock = 0;
            homeBlock.setHidden(true);

        }
    });
    goog.events.listen(vinyardNavH, ["mousedown", "touchstart"], function () {
        if (acres[3].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 4;
            c.replaceScene(vinyardScene, lime.transitions.SlideInLeft);
            homeCrop = b.currentCrop;
            oldCrop = b.currentCrop; b.currentCrop = 12;
            checkShortage();
            globalModalBlock = 0;
            homeBlock.setHidden(true);
            //a.sceneBefore = 5;
        }
    });
    goog.events.listen(lsNavH, ["mousedown", "touchstart"], function () {
        if (acres[4].owned == 1 && compassVisible) {
            homeCrop = b.currentCrop;
            closeAcresNav();
            a.sceneBefore = 5;                                                                                                                              ///from pature to Market
            c.replaceScene(liveStockScene, lime.transitions.SlideInRight);
            waterfallSound.stop();
            chickenSound.play();
            pig1Sound.play();
            setTimeout(function () { pig2Sound.play(); }, 5000);
            checkShortage();
            globalModalBlock = 0;
            homeBlock.setHidden(true);
        }
    });


    ///end compass Home
    //compas  visiblility function attached to listeners
    function checkAcresNav(e) {
        if (e == 0) { compassVisible = false; }
        else { compassVisible = true; globalModalBlock = 1; homeBlock.setHidden(false); pastureBlock.setHidden(false); orchardBlock.setHidden(false); vinyardBlock.setHidden(false); }
        if (acres[1].owned == 0) { pastureNavH.setFill("images/UI/lockBtn.png"); pastureNavO.setFill("images/UI/lockBtn.png"); pastureNavP.setFill("images/UI/lockBtn.png"); pastureNavV.setFill("images/UI/lockBtn.png"); pastureNavLS.setFill("images/UI/lockBtn.png"); }
        if (acres[1].owned == 1) { pastureNavH.setFill("images/UI/pastureBtn.png"); pastureNavO.setFill("images/UI/pastureBtn.png"); pastureNavP.setFill("images/UI/pastureBtn.png"); pastureNavV.setFill("images/UI/pastureBtn.png"); pastureNavLS.setFill("images/UI/pastureBtn.png"); }

        if (acres[2].owned == 0) { orchardNavH.setFill("images/UI/lockBtn.png"); orchardNavO.setFill("images/UI/lockBtn.png"); orchardNavP.setFill("images/UI/lockBtn.png"); orchardNavV.setFill("images/UI/lockBtn.png"); orchardNavLS.setFill("images/UI/lockBtn.png"); }
        if (acres[2].owned == 1) { orchardNavH.setFill("images/UI/orchardBtn.png"); orchardNavO.setFill("images/UI/orchardBtn.png"); orchardNavP.setFill("images/UI/orchardBtn.png"); orchardNavV.setFill("images/UI/orchardBtn.png"); orchardNavLS.setFill("images/UI/orchardBtn.png"); }

        if (acres[3].owned == 0) { vinyardNavH.setFill("images/UI/lockBtn.png"); vinyardNavO.setFill("images/UI/lockBtn.png"); vinyardNavP.setFill("images/UI/lockBtn.png"); vinyardNavV.setFill("images/UI/lockBtn.png"); vinyardNavLS.setFill("images/UI/lockBtn.png"); }
        if (acres[3].owned == 1) { vinyardNavH.setFill("images/UI/vinyardBtn.png"); vinyardNavO.setFill("images/UI/vinyardBtn.png"); vinyardNavP.setFill("images/UI/vinyardBtn.png"); vinyardNavV.setFill("images/UI/vinyardBtn.png"); vinyardNavLS.setFill("images/UI/vinyardBtn.png"); }


        if (acres[4].owned == 0) { lsNavH.setFill("images/UI/lockBtn.png"); lsNavO.setFill("images/UI/lockBtn.png"); lsNavP.setFill("images/UI/lockBtn.png"); lsNavV.setFill("images/UI/lockBtn.png"); lsNavLS.setFill("images/UI/lockBtn.png"); }
        if (acres[4].owned == 1) { lsNavH.setFill("images/UI/lsBtn.png"); lsNavO.setFill("images/UI/lsBtn.png"); lsNavP.setFill("images/UI/lsBtn.png"); lsNavV.setFill("images/UI/lsBtn.png"); lsNavLS.setFill("images/UI/lsBtn.png"); }



        compassHBack.setHidden(false); compassOBack.setHidden(false); compassPBack.setHidden(false); compassVBack.setHidden(false); compassLSBack.setHidden(false);
        treesImgV.setHidden(true);
        treesImgV2.setHidden(true);
    }
    function closeAcresNav() {
        globalModalBlock = 0; homeBlock.setHidden(true); pastureBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); lsBlock.setHidden(true);
        compassOBack.setHidden(true); compassHBack.setHidden(true); compassPBack.setHidden(true); compassVBack.setHidden(true); compassLSBack.setHidden(true);
        compassVisible = false;
        if (isblocked1 <= 1) {
            vinyardTreeBlock1.setHidden(false);
            treeUnlockBtnV.setHidden(false);
            treesImgV.setHidden(false);
        }
        if (isblocked2 <= 1) {
            vinyardTreeBlock2.setHidden(false);
            treeUnlockBtnV2.setHidden(false);
            treesImgV2.setHidden(false);
        }
    }



    //mute btn listener
    goog.events.listen(muteBtn, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isMuted = lime.audio.getMute();
            if (isMuted) {
                lime.audio.setMute(false); themeSong.play(true); localStorage.setItem('GuiGhostFarms_muted', 0)
                setMute(2);
            } else { lime.audio.setMute(true); setMute(1); localStorage.setItem('GuiGhostFarms_muted', 1) }
        }
    });
    function handleVisibilityChange() {
        var isMuted2 = lime.audio.getMute();


        if (document.hidden) {
            lime.audio.setMute(true);
            localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            localStorage.setItem('GuiGhostFarms_dayCount', dayCount);
            localStorage.setItem('GuiGhostFarms_yearCount', yearCount);
            localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
            localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
            localStorage.setItem('GuiGhostFarms_moneyEver', parseInt(moneyEver));



        } else {
            if (playerMuted == 0) {
                lime.audio.setMute(false);
                themeSong.play(true);
            }

        }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    goog.events.listen(achieveBtn, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 1;
            achieve(sceneBefore);
        }
    });
    goog.events.listen(fbBtnH, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            shareFacebook();

        }
    });


    //update money
    a.updateMoney = function () {
        if (player.money < 0) (player.money = moneyBefore);
        b.money = player.money;
        h.setText(player.money); pastureCash.setText(player.money); marketCash.setText(player.money);
        liveStockCash.setText(player.money); orchardCash.setText(player.money); vinyardCash.setText(player.money);
        houseMoney.setText(player.money);
        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
        localStorage.setItem('GuiGhostFarms_dayCount', dayCount);
        localStorage.setItem('GuiGhostFarms_yearCount', yearCount);
        localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
        localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
        localStorage.setItem('GuiGhostFarms_moneyEver', parseInt(moneyEver));
        if (player.money < (a.crops[b.currentCrop].cost) && warningSeen == 0) {
            homeBlock.setHidden(false); pastureBlock.setHidden(false); orchardBlock.setHidden(false); lsBlock.setHidden(false); vinyardBlock.setHidden(false);
            outOfCash.setHidden(false); marketBtn1.setHidden(false); buyStarCash.setHidden(false);
            outOfCashO.setHidden(false); marketBtn1P.setHidden(false); buyStarCashO.setHidden(false);
            outOfCashP.setHidden(false); marketBtn1O.setHidden(false); buyStarCashP.setHidden(false);
            outOfCashV.setHidden(false); marketBtn1V.setHidden(false); buyStarCashV.setHidden(false);
            globalModalBlock = 1;
        }

    };


    setInterval(function () {
        a.updateDates();

    }, 2000);
    a.updateDates = function () {
        dayCount = dayCount + 1;

        if (dayCount > 365) {
            yearCount = yearCount + 1; dayCount = 1;
            yearLabel.setText("Year " + yearCount); yearLabelP.setText("Year " + yearCount); yearLabelO.setText("Year " + yearCount); yearLabelLS.setText("Year " + yearCount); yearLabelV.setText("Year " + yearCount);
        }

        dayLabel.setText("Day " + dayCount);
        dayLabelP.setText("Day " + dayCount);
        dayLabelO.setText("Day " + dayCount);
        dayLabelLS.setText("Day " + dayCount);
        dayLabelV.setText("Day " + dayCount);

    }


    //update tools
    a.updateTools = function () {
        toolCount.setText(player.tools); toolCount.setFontColor("#4dff4d"); toolCountImg.setSize(35, 35); toolCountImgP.setSize(35, 35); toolCountImgO.setSize(35, 35);
        toolCountP.setText(player.tools); toolCountP.setFontColor("#4dff4d");
        toolCountO.setText(player.tools); toolCountO.setFontColor("#4dff4d");
        toolCountLS.setText(player.tools); toolCountLS.setFontColor("#4dff4d");
        toolCountV.setText(player.tools); toolCountV.setFontColor("#4dff4d");
        count14.setText(player.tools);
        toolCountHouse.setText(player.tools);
        toolUpCount.setHidden(false);
        toolUpImage.setHidden(false);
        setTimeout(function () {
            toolUpCount.setPosition(35, 85); toolUpCount.setOpacity(.7);
            toolCountImg.setSize(20, 20); toolCountImgP.setSize(20, 20); toolCountImgO.setSize(20, 20); toolCountImgLS.setSize(20, 20); toolCountImgV.setSize(20, 20);
        }, 250);
        setTimeout(function () { toolUpCount.setPosition(35, 80); toolUpCount.setOpacity(.8); toolCountImg.setSize(25, 25); toolCountImgP.setSize(25, 25); toolCountImgO.setSize(25, 25); toolCountImgLS.setSize(25, 25); toolCountImgV.setSize(25, 25); }, 500);
        setTimeout(function () {
            toolCount.setFontColor("#E8FC08"); toolCountP.setFontColor("#E8FC08"); toolCountO.setFontColor("#E8FC08"); toolCountV.setFontColor("#E8FC08"); toolCountLS.setFontColor("#E8FC08");
            toolUpCount.setFontColor("#E8FC08"); toolUpCount.setPosition(35, 75); toolUpCount.setOpacity(.9); toolCountImg.setSize(35, 35); toolCountImgP.setSize(35, 35); toolCountImgO.setSize(35, 35); toolCountImgLS.setSize(35, 35); toolCountImgV.setSize(35, 35);
        }, 750);
        setTimeout(function () { toolUpCount.setPosition(35, 70); toolUpCount.setOpacity(.8); }, 1000);
        setTimeout(function () { toolUpCount.setPosition(35, 65); toolUpCount.setOpacity(.7); }, 1250);
        setTimeout(function () { toolUpCount.setHidden(true); toolUpCount.setPosition(35, 90); toolUpCount.setOpacity(.2); }, 1500);
    };

    var toolUpCount = (new lime.Label).setText("+" + (2 + player.barnLevel)).setFontWeight(600).setFontColor("#E8FC08").setPosition(35, 90).setOpacity(.6).setSize(30, 30);
    f.appendChild(toolUpCount);
    var toolUpImage = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-12, -7).setSize(30, 30).setFill("images/UI/toolsIcon2.png").setOpacity(.9);
    toolUpCount.appendChild(toolUpImage);
    toolUpCount.setHidden(true);




    ////----------------------------------harvest anim-------------------------------------------------------------------------/////
    var harvest1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (15), a.height / 2).setFill("images/" + a.crops[0].harvest).setSize(26, 21);
    f.appendChild(harvest1); harvest1.setHidden(true);
    a.updateHarvest = function (x, y, picked) {

        harvest1.setPosition(x, y), harvest1.setFill("images/" + a.crops[picked].harvest), harvest1.setHidden(false);
        harvest2.setPosition(x, y), harvest2.setHidden(false);
        harvest3.setPosition(x, y), harvest3.setFill("images/" + a.crops[picked].harvest), harvest3.setHidden(false);
        harvest4.setPosition(x, y), harvest3.setFill("images/" + a.crops[12].harvest), harvest4.setHidden(false);
        var diffX = (x - 130) / 7; var diffY = (y - 80) / 7;
        var diffX2 = x - diffX; var diffY2 = y - diffY;

        for (f = 0; f < 7; f++) {

            setTimeout(function () {
                harvest1.setPosition(diffX2, diffY2);
                harvest2.setPosition(diffX2, diffY2);
                harvest3.setPosition(diffX2, diffY2);
                harvest4.setPosition(diffX2, diffY2);
                diffX2 = (diffX2 - diffX);
                diffY2 = (diffY2 - diffY);
            }, ((f * 70) + 1));

            if (f > 4) {
                fadeAdj = "0." + (12 - f);
                harvest1.setOpacity(fadeAdj);
                harvest2.setOpacity(fadeAdj);
                harvest3.setOpacity(fadeAdj);
                harvest4.setOpacity(fadeAdj);
            }
            setTimeout(function () {
                harvest1.setOpacity(1.0); harvest1.setHidden(true);
                harvest2.setOpacity(1.0); harvest2.setHidden(true);
                harvest3.setOpacity(1.0); harvest3.setHidden(true);
                harvest4.setOpacity(1.0); harvest4.setHidden(true);
            }, 800);
        }
    };
    a.displayCost = function (x, y, costPassed) {
        costDisplay.setHidden(false), costDisplay.setPosition((x + 35), y);
        costDisplay.setText("-$" + costPassed);
        setTimeout(function () { costDisplay.setHidden(true) }, 750);

        //vinyard
        costDisplayV.setHidden(false), costDisplayV.setPosition((x + 35), y);
        costDisplayV.setText("-$" + costPassed);
        setTimeout(function () { costDisplayV.setHidden(true) }, 750);

        //pasture
        costDisplayP.setHidden(false), costDisplayP.setPosition((x + 35), y);
        costDisplayP.setText("-$" + costPassed);
        setTimeout(function () { costDisplayP.setHidden(true) }, 750);

        //orchard
        //pasture
        costDisplayO.setHidden(false), costDisplayO.setPosition((x + 35), y);
        costDisplayO.setText("-$" + costPassed);
        setTimeout(function () { costDisplayO.setHidden(true) }, 750);
    }

    var hh = b.currentCrop;
    var w = (new lime.Label).setText("Planting " + a.crops[0].name).setFontColor("#E8FC08").setFontSize(12).setFontFamily("ComicSans MS").setPosition(155, a.height - a.controlsLayer_h / 2 - 12);
    f.appendChild(w);
    var z = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(133, a.height - a.controlsLayer_h / 2 - 5).setFill("images/" + a.crops[hh].harvest).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
    f.appendChild(z);

    ///market control
    var market = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(205, a.height - a.controlsLayer_h - 4).setSize(103, 65).setFill("images/" + a.barnyard[3].image); f.appendChild(market)
    goog.events.listen(market, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 1;
            c.replaceScene(marketScene, lime.transitions.SlideInDown);
            count0.setText(player.cropsStored[0].stored);
            count1.setText(player.cropsStored[1].stored);
            count2.setText(player.cropsStored[2].stored);
            count3.setText(player.cropsStored[3].stored);
            count4.setText(player.cropsStored[4].stored);
            count5.setText(player.cropsStored[5].stored);
            count6.setText(player.cropsStored[6].stored);
            count7.setText(player.cropsStored[7].stored);
            count8.setText(player.cropsStored[8].stored);
            count9.setText(player.cropsStored[9].stored);
            count10.setText(player.cropsStored[10].stored);
            count11.setText(player.cropsStored[11].stored);
            count12.setText(player.cropsStored[12].stored);
            count13.setText(player.cropsStored[13].stored);
            count14.setText(player.tools);
        }
    });


    //var eggplantCrate = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(283, 78).setSize(20, 27).setFill("images/" + a.barnyard[8].image); e.appendChild(eggplantCrate)
    //var cornCrate = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(283, 95).setSize(20, 27).setFill("images/" + a.barnyard[9].image); e.appendChild(cornCrate)

    ////game scene graphics

    var midback = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 45).setSize(a.controlsLayer_w, a.landLayer_h + 35).setFill("images/" + a.barnyard[0].image); e.appendChild(midback)
    var vertroad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(144, 60).setSize(21, 440).setFill("images/" + a.barnyard[1].image); e.appendChild(vertroad)
    var well = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(3, 93).setSize(300, 79).setFill("images/" + a.barnyard[10].image); e.appendChild(well)
    var sacks = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(75, 65).setSize(40, 22).setFill("images/" + a.barnyard[2].image); e.appendChild(sacks)
    var sacks2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(190, 72).setSize(40, 22).setFill("images/" + a.barnyard[2].image); e.appendChild(sacks2)
    var sacks3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(197, 74).setSize(40, 22).setFill("images/" + a.barnyard[2].image); e.appendChild(sacks3)

    var vertFence9 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 33).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence9)
    var vertFence10 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 33).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence10)
    var vertFence1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 203).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence1)
    var vertFence2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 203).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence2)
    var vertFence3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 123).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence3)
    var vertFence4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 123).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence4)
    var vertFence5 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 293).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence5)
    var vertFence6 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 293).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence6)
    var vertFence7 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 383).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence7)
    var vertFence8 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 383).setSize(8, 90).setFill("images/" + a.barnyard[4].image); e.appendChild(vertFence8)

    var horizFence1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-4, 35).setSize(315, 30).setFill("images/" + a.barnyard[5].image); e.appendChild(horizFence1)
    //var horizRoad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(320, 25).setFill("images/" + a.barnyard[15].image); 
    var horizFence2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-4, 410).setSize(315, 30).setFill("images/" + a.barnyard[5].image); e.appendChild(horizFence2)
    // scene change btns
    var roadLeft = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 10).setSize(15, 15)
    horizRoad.appendChild(roadLeft)
    roadLeft =
        //(new lime.GlossyButton).setColor("#8b008b").setText("< Dairy").setPosition(42, 12).setSize(80, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, -12).setSize(42, 42).setFill("images/UI/pastureBtn.png");
    horizRoad.appendChild(roadLeft)

    var roadRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(272, -12).setSize(40, 40).setFill("images/UI/orchardBtn.png");
    horizRoad.appendChild(roadRight)

    e.appendChild(horizRoad)
    ///For sale
    var forSaleP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(3, 420).setSize(40, 40).setFill("images/UI/pastureBtn100.png")
    e.appendChild(forSaleP)
    var forSaleO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(268, 420).setSize(40, 40).setFill("images/UI/orchardBtn.png")
    e.appendChild(forSaleO)

    ///change seeds
    var changeSeeds = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(134, 272).setSize(40, 40).setFill("images/UI/changeSeeds2.png");
    e.appendChild(changeSeeds);

    //var shelter = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 48).setSize(18, 65).setFill("images/" + a.barnyard[6].image); e.appendChild(shelter)
    //var shelter3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(4, 48).setSize(18, 65).setFill("images/" + a.barnyard[6].image); e.appendChild(shelter3)
    //var shelter2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(22, 48).setSize(37, 72).setFill("images/" + a.barnyard[7].image); e.appendChild(shelter2)

    var forge = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(4, 52).setSize(84, 99).setFill("images/" + a.barnyard[17].image); e.appendChild(forge);
    var anvil1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(65, 89).setSize(22, 22).setFill("images/" + a.barnyard[12].image); e.appendChild(anvil1);
    var toolTable = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 111).setSize(19, 22).setFill("images/" + a.barnyard[16].image); e.appendChild(toolTable);
    var barn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88.5, 4).setSize(132, 155).setFill("images/" + a.barnlevelImg[(player.barnLevel - 1)].image); e.appendChild(barn);
    var houseImg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(238, 20).setSize(60, 98).setFill("images/house1.png"); e.appendChild(houseImg);
    var houseEnterBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(251, 115).setSize(30, 30).setFill("images/UI/houseButton.png"); e.appendChild(houseEnterBtn);
    var blacksmith = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 75).setSize(26, 26).setFill("images/blacksmith2.png"); e.appendChild(blacksmith);
    var blacksmithI = 0;
    if (houseUpgrades.upgrades[0].owned == 1) { houseImg.setFill("images/house2.png").setSize(75, 100).setPosition(229, 22);}

    ////blacksmith anim
    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim

        blacksmithI = blacksmithI + 1;
        if (blacksmithI >= 20) { blacksmithI = 1 };
        if (blacksmithI < 15) { blacksmith.setFill("images/blacksmith" + blacksmithI + ".png"); };

        if (blacksmithI == 4) { blacksmith.setPosition(50, 80) };
        if (blacksmithI == 5) { blacksmith.setPosition(50, 85) };
        if (blacksmithI == 6) { blacksmith.setPosition(50, 90) };
        if (blacksmithI == 7) { blacksmith.setPosition(40, 90) };
        if (blacksmithI == 8) { blacksmith.setPosition(35, 95) };
        if (blacksmithI == 9) { blacksmith.setPosition(30, 100) };
        if (blacksmithI == 10) { blacksmith.setPosition(35, 105) };
        if (blacksmithI == 11) { blacksmith.setPosition(40, 100) };
        if (blacksmithI == 12) { blacksmith.setPosition(45, 95) };
        if (blacksmithI == 13) { blacksmith.setPosition(50, 90) };
        if (blacksmithI == 14) { blacksmith.setPosition(50, 85); if (sceneBefore == 1) { smithSound.play(); } };
        if (blacksmithI == 15) { blacksmith.setPosition(50, 80); blacksmith.setFill("images/blacksmith13.png"); };
        if (blacksmithI == 16) { blacksmith.setPosition(50, 75); blacksmith.setFill("images/blacksmith1.png") };
        if (blacksmithI == 17) { blacksmith.setPosition(50, 75); blacksmith.setFill("images/blacksmith2.png") };
        if (blacksmithI == 18) { blacksmith.setPosition(50, 77); blacksmith.setFill("images/blacksmith1.png") };
        if (blacksmithI == 19) { blacksmith.setPosition(50, 77); blacksmith.setFill("images/blacksmith2.png"); checkAchieves2(); };


    }, this, 300)


    ////////Home FarmLand
    for (f = 0; f < a.num_tiles_x; f++)
        for (var i = 0; i < a.num_tiles_y; i++) {
            var posX = f * a.tile_size + 8;
            var posY = i * a.tile_size + 181;
            var identI = i;
            var identF = f;
            var identThis = "";
            var identFinal = "";
    
            ///home field 1 upper left
            identThis = "j"
            identFinal = identFinal.concat(identThis.toString(), identF.toString(), identI.toString());
            if (f == 0 && i == 0) { var j = (new farming.Land(a, b, posX, posY, 1, 'tlt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 166); e.appendChild(j) }
            else if (f == 3 && i == 0) { var j = (new farming.Land(a, b, posX, posY, 1, 'trt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 166); e.appendChild(j) }
            else if (f == 3 && i == 3) { var j = (new farming.Land(a, b, posX, posY, 1, 'brt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 166); e.appendChild(j) }
            else if (f == 0 && i == 3) { var j = (new farming.Land(a, b, posX, posY, 1, 'blt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 166); e.appendChild(j) }
            else { var j = (new farming.Land(a, b, posX, posY, 1, 'non', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 166); e.appendChild(j) }

            //home field 2 upper right
            posX = f * a.tile_size + 171;
            identThis = "v"
            identFinal = "";
            identFinal = identFinal.concat(identThis.toString(), identF.toString(), identI.toString());
            if (f == 0 && i == 0) { var v = (new farming.Land(a, b, posX, posY, 1, 'tlt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 166); e.appendChild(v) }
            else if (f == 3 && i == 0) { var v = (new farming.Land(a, b, posX, posY, 1, 'trt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 166); e.appendChild(v) }
            else if (f == 3 && i == 3) { var v = (new farming.Land(a, b, posX, posY, 1, 'brt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 166); e.appendChild(v) }
            else if (f == 0 && i == 3) { var v = (new farming.Land(a, b, posX, posY, 1, 'blt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 166); e.appendChild(v) }
            else { var v = (new farming.Land(a, b, posX, posY, 1, 'non', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 166); e.appendChild(v) }

            //home field 3 lower left
            posX = f * a.tile_size + 19;
            posY = i * a.tile_size + 296;
            identThis = "u";
            identFinal = "";
            identFinal = identFinal.concat(identThis.toString(), identF.toString(), identI.toString());
            if (f == 0 && i == 0) { var u = (new farming.Land(a, b, posX, posY, 1, 'tlt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 296); e.appendChild(u) }
            else if (f == 3 && i == 0) { var u = (new farming.Land(a, b, posX, posY, 1, 'trt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 296); e.appendChild(u) }
            else if (f == 3 && i == 3) { var u = (new farming.Land(a, b, posX, posY, 1, 'brt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 296); e.appendChild(u) }
            else if (f == 0 && i == 3) { var u = (new farming.Land(a, b, posX, posY, 1, 'blt', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 296); e.appendChild(u) }
            else { var u = (new farming.Land(a, b, posX, posY, 1,'non', identFinal)).setPosition(f * a.tile_size + 8, i * a.tile_size + 296); e.appendChild(u) }

            //home field 4 lower right
            posX = f * a.tile_size + 171;
            identThis = "t"
            identFinal = "";
            identFinal = identFinal.concat(identThis.toString(), identF.toString(), identI.toString());
            if (f == 0 && i == 0) { var t = (new farming.Land(a, b, posX, posY, 1, 'tlt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 296); e.appendChild(t) }
            else if (f == 3 && i == 0) { var t = (new farming.Land(a, b, posX, posY, 1, 'trt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 296); e.appendChild(t) }
            else if (f == 3 && i == 3) { var t = (new farming.Land(a, b, posX, posY, 1, 'brt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 296); e.appendChild(t) }
            else if (f == 0 && i == 3) { var t = (new farming.Land(a, b, posX, posY, 1, 'blt', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 296); e.appendChild(t) }
            else { var t = (new farming.Land(a, b, posX, posY, 1, 'non', identFinal)).setPosition(f * a.tile_size + 181, i * a.tile_size + 296); e.appendChild(t) }
            //t.setHidden(true);
            if (player.fields < 2) {
                u.setHidden(false);
                if (player.fields < 3) {
                    t.setHidden(false);
                }
            }
        }
    var treeUnlockBtn = (new lime.GlossyButton).setColor("#663300").setText("").setPosition(65, 353).setSize(124, 130).setOpacity(.8);
    var treeUnlockBtn2 = (new lime.GlossyButton).setColor("#663300").setText("").setPosition(244, 354).setSize(124, 130).setOpacity(.8);

    //var barnUnlock2 = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(65, 105).setSize(180, 80).setFontWeight(600).setText(" 100 ");
    var barnUnlock3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(136, 69).setSize(38, 35).setFill("images/tools100.png");
    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim
        var currentPos = barnUnlock3.getPosition();
        currentPos.x -= 2;
 
        if (currentPos.x < 134) { currentPos.x = 136 };
        barnUnlock3.setPosition(currentPos);
    }, this, 500)
    if (parseInt(player.barnLevel) >= 5) { barnUnlock3.setHidden(true); };

    if (player.barnLevel == 2 || player.barnLevel == 3) { barnUnlock3.setFill("images/tools250.png"); }
    else if (player.barnLevel == 4) { barnUnlock3.setFill("images/tools500.png"); }
    else { barnUnlock3.setFill("images/tools100.png"); };

    e.appendChild(barnUnlock3);

    ///upgrading barn animation elements
    var scaffoldH = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(105, 80).setSize(110, 80).setFill("images/scaffold.png"); e.appendChild(scaffoldH);

    var upgradeCloud = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 0).setSize(120, 200).setFill("images/clouds.png"); e.appendChild(upgradeCloud);

    var toolMoverLabel = (new lime.Label).setText("60").setPosition(155, 127).setSize(40, 25).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("ComicSans MS").setFill("images/countBack.png");
    var toolMover = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -50).setSize(50, 50).setFill("images/toolHammer.png");
    var barnUnlock = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(117, 145).setSize(70, 16).setFontSize(16).setFontWeight(600).setText("Lvl " + player.barnLevel + "/5").setFill("images/UI/greenButtonLg.png");
    e.appendChild(barnUnlock);
    e.appendChild(toolMoverLabel);
    toolMoverLabel.appendChild(toolMover);
    toolMover.setRotation(-10);
    var currentRotate = -10;
    toolMoverLabel.setHidden(true);
    scaffoldH.setHidden(true);
    upgradeCloud.setHidden(true);




    if (player.fields < 3) {
        e.appendChild(treeUnlockBtn);
        var trees1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 295).setSize(110, 120).setFill("images/" + a.barnyard[13].image); e.appendChild(trees1)
        var treeUnlock1 = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(12, 335).setSize(110, 120).setText(""); e.appendChild(treeUnlock1)

        var axeHLeft = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 20).setSize(40, 40).setFill("images/axe.png"); trees1.appendChild(axeHLeft);
        var trees1Img = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(48, 355).setSize(40, 35).setFill("images/tools50.png"); e.appendChild(trees1Img);
    }
    if (player.fields < 4) {
        e.appendChild(treeUnlockBtn2);
        var trees2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(179, 295).setSize(120, 120).setFill("images/" + a.barnyard[14].image); e.appendChild(trees2)
        var treeUnlock2 = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(182, 335).setSize(120, 120).setText(""); e.appendChild(treeUnlock2)
        var axeHRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 20).setSize(40, 40).setFill("images/axe.png"); trees2.appendChild(axeHRight);
        var trees2Img = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(220, 355).setSize(38, 35).setFill("images/tools250.png"); e.appendChild(trees2Img)
    }
    var upgradeCloudTH1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 230).setSize(130, 250).setFill("images/clouds.png"); e.appendChild(upgradeCloudTH1);
    var axeMoverLabelTH1 = (new lime.Label).setText("60").setPosition(65, 380).setSize(40, 25).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFill("images/countBack.png");
    e.appendChild(axeMoverLabelTH1);
    //var axeMoverTH1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -60).setSize(50, 50).setFill("images/axe.png");
    //axeMoverLabelTH1.appendChild(axeMoverTH1);
    var axerotateH1 = 0;
    upgradeCloudTH1.setHidden(true);
    axeMoverLabelTH1.setHidden(true);

    var upgradeCloudTH2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(165, 230).setSize(130, 250).setFill("images/clouds.png"); e.appendChild(upgradeCloudTH2);
    var axeMoverLabelTH2 = (new lime.Label).setText("60").setPosition(250, 380).setSize(40, 25).setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("ComicSans MS").setFill("images/countBack.png");
    e.appendChild(axeMoverLabelTH2);
    //var axeMoverTH2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -60).setSize(50, 50).setFill("images/axe.png");
    //axeMoverLabelTH2.appendChild(axeMoverTH2);
    var axerotateH2 = 0;
    upgradeCloudTH2.setHidden(true);
    axeMoverLabelTH2.setHidden(true);


    //Cloud Layer Home map
    var clouds = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-400, -190).setSize(a.controlsLayer_w, a.height + 250).setFill("images/clouds.png").setOpacity(0.5);
    e.appendChild(clouds);
    //cloud anim
    var cloudAnim = -400
    var cloudDarkness = 0.1;
    var cloudOpacityDirection = 0;
    var vNumber = -190;
    lime.scheduleManager.scheduleWithDelay(function () {
        cloudAnim = cloudAnim + 1.25;
        vNumber = vNumber + 0.25;
        if (cloudDarkness < 0.7 && cloudOpacityDirection == 0) { cloudDarkness = cloudDarkness + 0.01; }
        if (cloudDarkness > 0.6) { cloudDarkness = cloudDarkness - 0.1; cloudOpacityDirection = 1; }
        if (cloudDarkness < 0.1) { cloudDarkness = cloudDarkness + 0.1; cloudOpacityDirection = 0; }
        clouds.setPosition(cloudAnim, vNumber); clouds.setOpacity(cloudDarkness)
        if (cloudAnim >= 700) { cloudAnim = -300; vNumber = -190; }

    }, this, 100)


    var tutStep = 1;
    /// tutorial Modal
    var homeBlock = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#ffffff").setOpacity(0.75);
    e.appendChild(homeBlock);
    goog.events.listen(homeBlock, ["mousedown", "touchstart"], function () {
        return;
    }, true, this);
    if (tutSeen == 1) { homeBlock.setHidden(true); }

    var tutModal = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(48, 130).setSize(210, 220).setFill("images/UI/tut1.png");
    e.appendChild(tutModal);

    var nextBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 250).setSize(35, 35).setFill("images/UI/nextButton.png");
    tutModal.appendChild(nextBtn);
    var swipeRightHint2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 125).setSize(44, 44).setFill("images/UI/swipe-right.png");
    tutModal.appendChild(swipeRightHint2);
    swipeRightHint2.setHidden(true);


    goog.events.listen(houseEnterBtn, ["mousedown", "touchstart"], function () {
        c.replaceScene(houseScene, lime.transitions.SlideInUp)
        checkHouseUpgradesBought();
        sceneBefore = 1;
       
    });

    goog.events.listen(nextBtn, ["mousedown", "touchstart"], function () {
        a.tutModalBehav();
       
    });

    goog.events.listen(tutModal, ["mousedown", "touchstart"], function () {
        a.tutModalBehav();
       ;
    });

    a.tutModalBehav = function (t) {
        swipeRightHint2.setHidden(true);
        swipeRightHint.setHidden(true);

        if (tutStep <= 7) {
            tutModal.setFill(imgArray5[tutStep]);
        }

  
        if (tutStep > 7) {
            tutSeen = 1;
            tutModal.setHidden(true);
            removeAdsBack.setHidden(true);
            homeBlock.setHidden(true);
            localStorage.setItem('GuiGhostFarms_tutSeen', 1);
            swipeRightHint.setHidden(false);
            countSwipe = 1;
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                var currentPosSwipe = swipeRightHint.getPosition();
                currentPosSwipe.x += 5;
       
                if (currentPosSwipe.x > 70) { currentPosSwipe.x = 20 };
                swipeRightHint.setPosition(currentPosSwipe);
                var swipeHiddenNow = swipeRightHint.getHidden();
            
                if (!swipeHiddenNow) { countSwipe += 1; }
                if (countSwipe > 20) { swipeRightHint.setHidden(true); }
            }, this, 200,20)
        }
        tutStep = tutStep + 1;

        if (tutStep != 2) { swipeRightHint2.setHidden(true); }
        if (tutStep == 2) {

            swipeRightHint2.setHidden(false);

            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                var currentPosSwipe2 = swipeRightHint2.getPosition();
                currentPosSwipe2.x += 5;
           
                if (currentPosSwipe2.x >= 31 && currentPosSwipe2.x < 60) { swipeRightHint2.setHidden(true); };
                if (currentPosSwipe2.x >= 60 && currentPosSwipe2.x < 105 && tutStep == 2) { swipeRightHint2.setHidden(false); };
                if (currentPosSwipe2.x >= 105) { swipeRightHint2.setHidden(true); };
                if (currentPosSwipe2.x >= 125 && tutStep == 2) { swipeRightHint2.setHidden(false); currentPosSwipe2.x = 0 };
                swipeRightHint2.setPosition(currentPosSwipe2);
            }, this, 100)


        }
        else if (tutStep == 4) {

            swipeRightHint2.setHidden(false);

            swipeRightHint2.setPosition(60, 90);
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                var currentPosSwipe2 = swipeRightHint2.getPosition();
                currentPosSwipe2.x += 5;

         
                if (currentPosSwipe2.x >= 60 && currentPosSwipe2.x < 105 && tutStep == 4) { swipeRightHint2.setHidden(false); };
                if (currentPosSwipe2.x >= 105) { swipeRightHint2.setHidden(true); };
                if (currentPosSwipe2.x >= 125 && tutStep == 4) { swipeRightHint2.setHidden(false); currentPosSwipe2.x = 60 };
                swipeRightHint2.setPosition(currentPosSwipe2);
            }, this, 300)


        }
        else { swipeRightHint2.setHidden(true); }

    }

    a.checkTutSeen = function () {

        
        if (tutSeen == 1) {

            tutModal.setHidden(true);
        };
    }
    a.checkTutSeen();

    ///Out of Cash modal
    var outOfCash = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 100).setSize(210, 220).setFill("images/UI/outOfCash.png");
    e.appendChild(outOfCash);
    var buyStarCash = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(122, 212).setSize(75, 35).setFill("images/UI/buyStarCash.png");
    outOfCash.appendChild(buyStarCash);
    var marketBtn1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(15, 212).setSize(75, 35).setFill("images/UI/marketBtn.png");
    outOfCash.appendChild(marketBtn1);
    var cancelBtnCash = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(89, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    outOfCash.appendChild(cancelBtnCash);
    outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);

    goog.events.listen(buyStarCash, ["mousedown", "touchstart"], function () {            //starCash Button
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        homeBlock.setHidden(true); pastureBlock.setHidden(true); orchardBlock.setHidden(true); lsBlock.setHidden(true); vinyardBlock.setHidden(true);
        warningSeen = 1;
        document.getElementById("starCashOuterLabel").innerHTML = starCash;
        shareFacebook();

        //c.replaceScene(menuScene, lime.transitions.SlideInUp);
    });
    goog.events.listen(marketBtn1, ["mousedown", "touchstart"], function () {            //market Button
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        homeBlock.setHidden(true); pastureBlock.setHidden(true); orchardBlock.setHidden(true); lsBlock.setHidden(true); vinyardBlock.setHidden(true);
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        warningSeen = 1;
        a.updateStored();
        globalModalBlock = 0;
        c.replaceScene(marketScene, lime.transitions.SlideInDown);
        count0.setText(player.cropsStored[0].stored);
        count1.setText(player.cropsStored[1].stored);
        count2.setText(player.cropsStored[2].stored);
        count3.setText(player.cropsStored[3].stored);
        count4.setText(player.cropsStored[4].stored);
        count5.setText(player.cropsStored[5].stored);
        count6.setText(player.cropsStored[6].stored);
        count7.setText(player.cropsStored[7].stored);
        count8.setText(player.cropsStored[8].stored);
        count9.setText(player.cropsStored[9].stored);
        count10.setText(player.cropsStored[10].stored);
        count11.setText(player.cropsStored[11].stored);
        count12.setText(player.cropsStored[12].stored);
        count13.setText(player.cropsStored[13].stored);
        count14.setText(player.tools);
    });
    goog.events.listen(cancelBtnCash, ["mousedown", "touchstart"], function () {            //cancel Button
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        homeBlock.setHidden(true); pastureBlock.setHidden(true); orchardBlock.setHidden(true); lsBlock.setHidden(true); vinyardBlock.setHidden(true);
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        warningSeen = 1;
        globalModalBlock = 0;
    });

    if (player.money < (a.crops[b.currentCrop].cost) && warningSeen == 0) {
        homeBlock.setHidden(false);
        //pastureBlock.setHidden(false);
        //orchardBlock.setHidden(false);
        //lsBlock.setHidden(false);
        //vinyardBlock.setHidden(false);
        outOfCash.setHidden(false); marketBtn1.setHidden(false); buyStarCash.setHidden(false);
        //outOfCashP.setHidden(false); marketBtn1P.setHidden(false); buyStarCashP.setHidden(false);
        //outOfCashO.setHidden(false); marketBtn1O.setHidden(false); buyStarCashO.setHidden(false);
        //outOfCashV.setHidden(false); marketBtn1V.setHidden(false); buyStarCashV.setHidden(false);
        warningSeen = 1;
        globalModalBlock = 1;
    }
    ///For Sale confirm modal
    var confirmSale = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 140).setSize(210, 220).setFill("images/UI/saleBack.png");
    e.appendChild(confirmSale);
    var confirmText = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#000000").setPosition(45, 145).setSize(135, 60).setFontSize(20).setText("Dairy Farm 2500");
    confirmSale.appendChild(confirmText);
    var confirmCoin = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 160).setSize(30, 30).setFill(imgArray11[0]);
    confirmSale.appendChild(confirmCoin);
    var confirmTextSub = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#FF0000").setPosition(55, 195).setSize(110, 60).setFontSize(10).setText("Earn more $ to buy");
    confirmSale.appendChild(confirmTextSub);
    var confirmBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 212).setSize(75, 35).setFill("images/UI/greenBuy.png");
    confirmSale.appendChild(confirmBtn);
    var cancelBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    confirmSale.appendChild(cancelBtn);
    confirmSale.setHidden(true);

    ////achievement Modal
    var achieveNotif = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 130).setSize(210, 220).setFill("images/UI/achieveNotif.png");
    var achieveTextSub = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#08fcef").setPosition(30, 35).setSize(150, 60).setFontSize(12).setText("Achieve Text");
    achieveNotif.appendChild(achieveTextSub);
    var achieveText = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(13, 160).setSize(190, 60).setFontSize(16).setText("Blacksmith I");
    achieveNotif.appendChild(achieveText);
    var achieveSC = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#301934").setPosition(21, 186).setSize(190, 60).setFontSize(18).setText(" + ");
    achieveNotif.appendChild(achieveSC);
    var confirmBtnA = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 211).setSize(40, 40).setFill("images/UI/checkButton.png");
    achieveNotif.appendChild(confirmBtnA);
    e.appendChild(achieveNotif);
    achieveNotif.setHidden(true);
    var countSwipe = 1;
    ///swipe right hint
    var swipeRightHint = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(10, 180).setSize(44, 44).setFill("images/UI/swipe-right.png");
    e.appendChild(swipeRightHint);
    swipeRightHint.setHidden(false);
    if (tutSeen == 0) { swipeRightHint.setHidden(true); }
    else {
     
        lime.scheduleManager.scheduleWithDelay(function () {
            //add upgrade anim
            var currentPosSwipe = swipeRightHint.getPosition();
            currentPosSwipe.x += 5;
      
            if (currentPosSwipe.x > 70) { currentPosSwipe.x = 20 };
            swipeRightHint.setPosition(currentPosSwipe);
            var swipeHiddenNow = swipeRightHint.getHidden();
       
            if (!swipeHiddenNow) { countSwipe += 1; }
            if (countSwipe > 20) { swipeRightHint.setHidden(true); }
        }, this, 200)
    }

    ///remove ads modal
    var removeAdsBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(15, 105).setSize(275, 250).setFill("images/UI/blankBack3.png");
    e.appendChild(removeAdsBack);
    var removeAdsText = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(20, 15).setSize(230, 60).setFontSize(18).setText("Swipe in from the left opens the Game Menu");
    removeAdsBack.appendChild(removeAdsText);
    var removeAdsText2 = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(135, 95).setSize(130, 320).setFontSize(18).setText("Here you can SHARE, THEME, RATE, or even REMOVE ADS ");
    removeAdsBack.appendChild(removeAdsText2);
    var removeAdsImage = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(15, 55).setSize(120, 185).setFill("images/removeAds.png" );
    removeAdsBack.appendChild(removeAdsImage);
    removeAdsBack.setHidden(true);





    ///Crop Unlock Modal
    var unlockedCropBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 150).setSize(250, 250).setFill("images/UI/blankBack2.png");
    e.appendChild(unlockedCropBack);
    var unlockedCropText = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(10, 105).setSize(230, 60).setFontSize(18).setText("NEW SEEDS TO PLANT!");
    unlockedCropBack.appendChild(unlockedCropText);
    var unlockedCropImage = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 130).setSize(70, 70).setFill("images/" + a.crops[2].harvest);
    unlockedCropBack.appendChild(unlockedCropImage);
    var unlockedCropText2 = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(50, 210).setSize(150, 50).setFontSize(18).setText("Artichoke");
    unlockedCropBack.appendChild(unlockedCropText2);
    unlockedCropBack.setHidden(true);


    goog.events.listen(confirmBtnA, ["mousedown", "touchstart"], function () {            //for sale pasture
        achieveNotif.setHidden(true);
        achieveNotifP.setHidden(true);
        achieveNotifV.setHidden(true);
        achieveNotifO.setHidden(true);
        achieveNotifLS.setHidden(true);
        homeBlock.setHidden(true);
        pastureBlock.setHidden(true);
        vinyardBlock.setHidden(true);
        pastureBlock.setHidden(true);
        orchardBlock.setHidden(true);
        lsBlock.setHidden(true);

    });


    c.replaceScene(d);

    //for sale click  handlers
    goog.events.listen(forSaleP, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {//for sale pasture
            globalModalBlock = 1;
            fsClicked = 1;
            a.updateMoney();
            homeBlock.setHidden(false); confirmSale.setHidden(false);

            confirmText.setText("Dairy Farm 2500");
            if (parseInt(player.money) >= 2500) { confirmTextSub.setHidden(true); confirmBtn.setHidden(false); } else { confirmBtn.setHidden(true); }
        }
    });

    goog.events.listen(forSaleO, ["mousedown", "touchstart"], function () {            //for sale orchard
        if (globalModalBlock == 0) {
            fsClicked = 2;
            globalModalBlock = 1;
            a.updateMoney();
            homeBlock.setHidden(false); confirmSale.setHidden(false);
            if (parseInt(player.money) >= 2500) { confirmTextSub.setHidden(true); confirmBtn.setHidden(false); } else { confirmBtn.setHidden(true); };
            confirmText.setText("Fruit Orchard 2500");
        }
    });

    goog.events.listen(confirmBtn, ["mousedown", "touchstart"], function () {            //forsale confirm
       confirmSale.setHidden(true);
        homeBlock.setHidden(true);

        if (fsClicked == 1) {
            acres[1].owned = 1;
            player.money = player.money - 2500;
            a.updateMoney();
            roadLeft.setHidden(false); forSaleP.setHidden(true); confirmSale.setHidden(true);
            setTimeout(function () {
                globalModalBlock = 0;
            }, 500);
        }
        if (fsClicked == 2) {
            acres[2].owned = 1;
            player.money = player.money - 5000;
            a.updateMoney();
            roadRight.setHidden(false); forSaleO.setHidden(true); confirmSale.setHidden(true);
            setTimeout(function () {
                globalModalBlock = 0;
            }, 500);
        }
        localStorage.setItem('GuiGhostFarms_acres', JSON.stringify(acres));
        fsclicked = 0;
    });

    goog.events.listen(cancelBtn, ["mousedown", "touchstart"], function () {
        sceneBefore = 1; confirmSale.setHidden(true);
        homeBlock.setHidden(true);
        fsclicked = 0;
        setTimeout(function () {
            globalModalBlock = 0;
        }, 500);
    });     //forsale cancel




    ////Home tree unlocks
    goog.events.listen(treeUnlockBtn, ["mousedown", "touchstart"], function () {            //left field
        if (tutSeen == 1 && globalModalBlock == 0) {
            if (player.tools >= 50) {

                player.tools = player.tools - 50;
                a.updateTools();
                trees1Img.setHidden(true);
                upgradeCloudTH1.setHidden(false);
                axeMoverLabelTH1.setHidden(false);

                //left trees axe anim
                lime.scheduleManager.scheduleWithDelay(function () {
                    axerotateH1 = axerotateH1 + 10;
                    if (axerotateH1 > 35) { axerotateH1 = -10; };
                    axeHLeft.setRotation(axerotateH1);

                }, this, 200, 300)

                //left tress  clearing cloud anim
                var secondsToUpgradeTH1 = 60;
                var upCloudWTH1 = 100;
                var upCloudXTH1 = 0;
                var upCloudYTH1 = 230;

                lime.scheduleManager.scheduleWithDelay(function () {

                    upgradeCloudTH1.setPosition(upCloudXTH1, upCloudYTH1).setSize(upCloudWTH1, 200)
                    upCloudWTH1 = upCloudWTH1 + 10;
                    upCloudXTH1 = upCloudXTH1 - 5;
                    upCloudYTH1 = upCloudYTH1 - 5
                    if (upCloudXTH1 < -15) { upCloudXTH1 = 0; upCloudYTH1 = 230; upCloudWTH1 = 100; }


                }, this, 250, 240)

                //right trees coundown label updates
                lime.scheduleManager.scheduleWithDelay(function () {
                    //add upgrade anim
                    secondsToUpgradeTH1 = secondsToUpgradeTH1 - 1;
                    axeMoverLabelTH1.setText(secondsToUpgradeTH1);

                    if (secondsToUpgradeTH1 <= 0) {
                        axeMoverLabelTH1.setHidden(true); upgradeCloudTH1.setHidden(true); secondsToUpgradeTH1 = 60;
                        player.fields = player.fields + 1;
                        a.updateTools();
                        trees1.setHidden(true); treeUnlock1.setHidden(true); treeUnlockBtn.setHidden(true); axeHLeft.setHidden(true);
                        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
                        localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
                        localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
                        localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);


                    }

                }, this, 1000, 60)

            }
        }
    });

    goog.events.listen(treeUnlockBtn2, ["mousedown", "touchstart"], function () {         //right field

        if (tutSeen == 1 && globalModalBlock == 0) {
            if (player.tools >= 250) {

                player.tools = player.tools - 250;
                a.updateTools();
                trees2Img.setHidden(true);
                upgradeCloudTH2.setHidden(false);
                axeMoverLabelTH2.setHidden(false);
                //right trees axe anim
                lime.scheduleManager.scheduleWithDelay(function () {
                    axerotateH2 = axerotateH2 + 10;
                    if (axerotateH2 > 35) { axerotateH2 = -10; };
                    axeHRight.setRotation(axerotateH2);

                }, this, 200, 300)


                //right tress  clearing cloud anim
                var secondsToUpgradeTH2 = 60;
                var upCloudWTH2 = 100;
                var upCloudXTH2 = 165;
                var upCloudYTH2 = 250;
                var treeSizeW2 = 124;
                var treeSizeH2 = 130;

                lime.scheduleManager.scheduleWithDelay(function () {

                    upgradeCloudTH2.setPosition(upCloudXTH2, upCloudYTH2).setSize(upCloudWTH2, 200)
                    upCloudWTH2 = upCloudWTH2 + 10;
                    upCloudXTH2 = upCloudXTH2 - 5;
                    upCloudYTH2 = upCloudYTH2 - 5
                    if (upCloudXTH2 < 155) { upCloudXTH2 = 165; upCloudYTH2 = 250; upCloudWTH2 = 250; }


                }, this, 250, 240)

                //right trees coundown label updates
                lime.scheduleManager.scheduleWithDelay(function () {
                    //add upgrade anim
                    secondsToUpgradeTH2 = secondsToUpgradeTH2 - 1;
                    axeMoverLabelTH2.setText(secondsToUpgradeTH2);

                    if (secondsToUpgradeTH2 <= 0) {
                        axeMoverLabelTH2.setHidden(true); upgradeCloudTH2.setHidden(true); secondsToUpgradeTH2 = 60;
                        player.fields = player.fields + 1;
                        a.updateTools();
                        trees2.setHidden(true); treeUnlock2.setHidden(true); treeUnlockBtn2.setHidden(true); axeHRight.setHidden(true);
                        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
                        localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
                        localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
                        localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);
                    }

                }, this, 1000, 60)

            }
        }
    });



    goog.events.listen(barnUnlock3, ["mousedown", "touchstart"], function () {                 //barnUpgrades    barn Upgrades
        
        var barnUpgradeCost = 0;
        if (player.barnLevel == 2 || player.barnLevel == 3) { barnUpgradeCost = 250; }
        else if (player.barnLevel == 4) { barnUpgradeCost = 500; }
        else { barnUpgradeCost = 100; }
      
        if (player.tools >= barnUpgradeCost && parseInt(player.barnLevel) < 5 && globalModalBlock == 0) {
            barnUnlock3.setHidden(true);
           
            player.tools = player.tools - barnUpgradeCost;
            a.updateTools();
            //show upgrade anim and timer
            upgradeCloud.setHidden(false);
            scaffoldH.setHidden(false);
            toolMoverLabel.setHidden(false);
            lime.scheduleManager.scheduleWithDelay(function () {
                currentRotate = currentRotate + 10;
                if (currentRotate > 35) { currentRotate = -10; };
                toolMover.setRotation(currentRotate);
                //e.appendChild(toolMover);
            }, this, 200, 300)
            //upgrade countdown timer
            var secondsToUpgrade = 60;
            var upCloudW = 100;
            var upCloudX = 90;
            var upCloudY = 10;
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                secondsToUpgrade = secondsToUpgrade - 1;


                toolMoverLabel.setText(secondsToUpgrade);

                if (secondsToUpgrade <= 0) { toolMoverLabel.setHidden(true); scaffoldH.setHidden(true); upgradeCloud.setHidden(true); secondsToUpgrade = 60; }

            }, this, 1000, 60)
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim

                upgradeCloud.setPosition(upCloudX, upCloudY).setSize(upCloudW, 200)
                upCloudW = upCloudW + 10;
                upCloudX = upCloudX - 5;
                upCloudY = upCloudY - 5
                if (upCloudX < 80) { upCloudX = 100; upCloudY = 10; upCloudW = 100; }


            }, this, 250, 240)
            //upgrade the barn after the 60 seconds
            setTimeout(function () {
                barnUnlock3.setHidden(true);            //barnUnlockBtn.setHidden(true);
                player.barnLevel = player.barnLevel + 1;

                a.updateTools();
                if (player.barnLevel > 5) { player.barnLevel = 5; barnUnlock3.setHidden(true); };

                localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
                localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
                localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
                localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);


                if (player.barnLevel == 2) { barn.setFill(imgArray6[1]); unlockedCropBack.setHidden(false); barnUnlock3.setHidden(false); };
                if (player.barnLevel == 3) { barn.setFill(imgArray6[2]); unlockedCropBack.setHidden(false); unlockedCropText2.setText("Eggplant"); unlockedCropImage.setFill("images/" + a.crops[3].harvest); barnUnlock3.setHidden(false); };
                if (player.barnLevel == 4) { barn.setFill(imgArray6[3]); unlockedCropBack.setHidden(false); unlockedCropText2.setText("Peppers"); unlockedCropImage.setFill("images/" + a.crops[4].harvest); barnUnlock3.setHidden(false); };
                if (player.barnLevel == 5) {
                    barn.setFill(imgArray6[4]); unlockedCropBack.setHidden(false); unlockedCropText2.setText("Corn"); unlockedCropImage.setFill("images/" + a.crops[5].harvest);
                    barnUnlock3.setHidden(true);
                };
                barnUnlock.setText("Lvl " + player.barnLevel + "/5");

                if (player.barnLevel == 2 || player.barnLevel == 3) { barnUnlock3.setFill("images/tools250.png"); }
                else if (player.barnLevel == 4) { barnUnlock3.setFill("images/tools500.png"); }
                else { barnUnlock3.setFill("images/tools100.png"); };
            }, 60000);



            setTimeout(function () {
                unlockedCropBack.setHidden(true);
                checkAchieves2();
            }, 61500);



        }

    });
    //c.replaceScene(d);
    u.setHidden(false);
    var costDisplay = (new lime.Label).setPosition(156, 180).setSize(25, 25).setText("-$50").setFontSize(14).setFontFamily("Comic Sans MS").setFontColor("#e1f00e").setFontWeight(600);
    e.appendChild(costDisplay);
    var costCoin = (new lime.Sprite).setPosition(30, -8).setSize(30, 30).setFill(imgArray11[0]); costDisplay.appendChild(costCoin);
    costDisplay.setHidden(true);

    var l = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        e = (new lime.Layer).setAnchorPoint(0, 0),
        f = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
    e.appendChild(f);
    l.appendChild(e);
    f = (new lime.GlossyButton).setColor("#1ce636").setText("Back").setPosition(a.width / 2, a.height - 25).setSize(80, 40);
    e.appendChild(f);
    seedSceneBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, 40).setFill("#8b008b");
    e.appendChild(seedSceneBack);
    seedSceneLabel = (new lime.Label).setText("Change Seeds to Plant ").setFontFamily("ComicSans MS").setFontColor("#E8FC08").setFontSize(20).setPosition(155, 12);
    e.appendChild(seedSceneLabel);
    seedSceneLabel2 = (new lime.Label).setText("Select image to plant that crop ").setFontFamily("ComicSans MS").setFontColor("#FFFFFF").setFontSize(12).setPosition(155, 31);
    e.appendChild(seedSceneLabel2);
    seedSceneSeeds1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 1).setSize(40, 40).setFill("images/grain.png");
    e.appendChild(seedSceneSeeds1);
    seedSceneSeeds2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(265, 1).setSize(40, 40).setFill("images/grain.png");
    e.appendChild(seedSceneSeeds2);



    goog.events.listen(changeSeeds, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(l, lime.transitions.SlideInDown)
            for (f = 0; f < (player.barnLevel + 1); f++)
                g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.shop_margin_x - 25, (a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + (f * 9) - (f * 1) + 17).setFill("images/" + a.crops[f].harvest).setSize(35, 35),
                    e.appendChild(g),

                    i = (new lime.Label).setText(a.crops[f].name + " (" + a.crops[f].time_to_ripe + " days) ").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(22).setPosition(a.shop_margin_x + 130, (1.4 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + (f * 7) - (f * 1) + 17),
                    e.appendChild(i),
                    i2 = (new lime.Label).setText("   -" + a.crops[f].cost + " ").setFontFamily("Comic Sans MS").setFontColor("#FFFFFF").setFill("#C14825").setFontSize(18).setPosition(a.shop_margin_x + 79, (2.1 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + ((f * 9) - f) + 17),
                    e.appendChild(i2),
                    i3 = (new lime.Sprite).setSize(30, 30).setFill(imgArray11[0]).setPosition(a.shop_margin_x + 58, (2.1 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + ((f * 9) - f) + 15),
                    e.appendChild(i3),
                    i4 = (new lime.Label).setText("   +" + a.crops[f].revenue + " ").setFontFamily("Comic Sans MS").setFontColor("#FFFFFF").setFill("#25C12A").setFontSize(18).setPosition(a.shop_margin_x + 190, (2.1 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + ((f * 9) - f) + 17),
                    e.appendChild(i4),
                    i5 = (new lime.Sprite).setSize(30, 30).setFill(imgArray11[0]).setPosition(a.shop_margin_x + 170, (2.1 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + ((f * 9) - f) + 15),
                    e.appendChild(i5),

                    function (y, e) {
                        goog.events.listen(y, ["mousedown", "touchstart"],
                            function () {
                                b.currentCrop = e; c.replaceScene(d, lime.transitions.moveInRight);
                                //var z = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(130, a.height - a.controlsLayer_h / 2 - 12).setFill("images/" + a.crops[e].harvest).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
                                z.setFill("images/" + a.crops[e].harvest);
                                w.setText("Planting " + a.crops[e].name);
                                homeCrop = e;
                                d.appendChild(z);

                            })


                    }(g, f),
                    ///added by GG for handler of labels
                    function (y, e) {
                        goog.events.listen(y, ["mousedown", "touchstart"],
                            function () {
                                b.currentCrop = e; c.replaceScene(d, lime.transitions.moveInRight);
                                //var z = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(130, a.height - a.controlsLayer_h / 2 - 12).setFill("images/" + a.crops[e].harvest).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
                                z.setFill("images/" + a.crops[e].harvest);
                                w.setText("Planting " + a.crops[e].name);
                                homeCrop = e;
                                d.appendChild(z);

                            })


                    }(i, f)


        }
    });





    ////from seeds menu back to home farm
    goog.events.listen(f, ["mousedown", "touchstart"], function () { c.replaceScene(d, lime.transitions.SlideInUp) });

    ////////pasture scene ////////pasture scene////////////////////////////////////////                         ////////pasture scene ////////pasture scene////////////////////////////////////////
    ////////pasture scene ////////pasture scene////////////////////////////////////////                         ////////pasture scene ////////pasture scene////////////////////////////////////////


    var pastureScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        pastureLayer = (new lime.Layer).setAnchorPoint(0, 0),
        pastureFill1 = (new lime.Sprite).setAnchorPoint(0, 10).setPosition(0, 0).setSize(a.width, a.height - 90).setFill("#0D0D0D");
    pastureScene.appendChild(pastureFill1);
    pastureScene.appendChild(pastureLayer);







    //backBtn1 = (new lime.GlossyButton).setColor("#133242").setText("Back").setPosition(a.width / 2, a.height - 25).setSize(80, 40);
    //pastureLayer.appendChild(backBtn1);
    var midbackP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 40).setSize(a.controlsLayer_w, a.landLayer_h + 37).setFill("images/" + a.barnyard[0].image);
    pastureLayer.appendChild(midbackP)

    var horizRoad2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 435).setSize(320, 25).setFill("images/" + a.barnyard[15].image);
    pastureLayer.appendChild(horizRoad2);
    var roadLeft2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 10).setSize(15, 15)
    horizRoad2.appendChild(roadLeft2)
    roadLeft2 =
        //(new lime.GlossyButton).setColor("#8b008b").setText("< Vineyard").setPosition(42, 12).setSize(82, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, -12).setSize(43, 43).setFill("images/UI/vinyardBtn.png");
    horizRoad2.appendChild(roadLeft2)

    goog.events.listen(roadLeft2, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 4;
            c.replaceScene(vinyardScene, lime.transitions.SlideInLeft);
            b.currentCrop = 12;
            checkShortage();
            //a.sceneBefore = 5;
        }
    });




    var roadRight2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(285, 10).setSize(15, 15)
    horizRoad2.appendChild(roadRight2)
    roadRight2 =
        //(new lime.GlossyButton).setColor("#8b008b").setText("Home >").setPosition(265, 12).setSize(80, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(269, -11).setSize(42, 42).setFill("images/UI/homeButton.png");
    horizRoad2.appendChild(roadRight2)




    var gg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 22).setFill("images/UI/greenButtonLg.png");
    pastureLayer.appendChild(gg);

    //var topLogo = (new lime.Sprite).setPosition(155, 10).setSize(150, 22).setFill("images/UI/topMenuPlain.png");
    //pastureLayer.appendChild(topLogo);


    var horizFence1P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-4, 37).setSize(315, 29).setFill("images/" + a.barnyard[5].image); pastureLayer.appendChild(horizFence1P)
    var dairyBarnP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(59, 44).setSize(190, 137).setFill("images/Pasture/" + a.pasture[1].image); pastureLayer.appendChild(dairyBarnP)



    var g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, a.height - a.controlsLayer_h - 5).setSize(a.controlsLayer_w, a.controlsLayer_h + 5).setFill("images/UI/blackButton.png");
    pastureLayer.appendChild(g);

    menuP = (new lime.Sprite).setAnchorPoint(0, 0).setFill("images/UI/gearButton.png").setPosition(12, 467).setSize(35, 35);
    pastureLayer.appendChild(menuP);

    var achieveBtnP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 467).setSize(35, 35).setFill("images/UI/trophyBtn.png");
    pastureLayer.appendChild(achieveBtnP);
    var facebookP = (new lime.Sprite).setFill("images/UI/starButton.png").setAnchorPoint(0, 0).setPosition(50, 503).setSize(35, 35);
    pastureLayer.appendChild(facebookP);
    goog.events.listen(facebookP, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            shareFacebook();

        }
    });

    var compassP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(135, 449).setSize(35, 35).setFill("images/UI/compass22.png"); pastureLayer.appendChild(compassP)


    //MUTE From Pasture
    var muteBtnP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 503).setSize(35, 35).setFill(imgArray[15]);
    pastureLayer.appendChild(muteBtnP);


    goog.events.listen(menuP, ["mousedown", "touchstart"], function () {
        a.sceneBefore = 2;                                                                                                                              ///from pasture to Market
        c.replaceScene(menuScene, lime.transitions.SlideInUp);

    });

    goog.events.listen(muteBtnP, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isMuted = lime.audio.getMute();
            if (isMuted) {
                lime.audio.setMute(false); themeSong.play(true); localStorage.setItem('GuiGhostFarms_muted', 0)
                setMute(2);
            } else { lime.audio.setMute(true); setMute(1); localStorage.setItem('GuiGhostFarms_muted', 1) }
        }
    });

    goog.events.listen(achieveBtnP, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 2;
            achieve(sceneBefore);
        }
    });

    var pastureCash = (new lime.Label).setText(player.money).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(245, 24).setFontSize(18);
    pastureLayer.appendChild(pastureCash);
    var topCoinP = (new lime.Sprite).setPosition(285, 20).setSize(35, 35).setFill(imgArray11[0]);
    pastureLayer.appendChild(topCoinP);


    var toolCountImgP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(7, 5).setSize(35, 35).setFill("images/UI/toolsIcon2.png");
    var toolCountP = (new lime.Label).setText(player.tools).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(60, 24).setFontSize(18);
    pastureLayer.appendChild(toolCountImgP);
    pastureLayer.appendChild(toolCountP);

    var hhP = b.currentCrop;
    var wP = (new lime.Label).setText("Planting " + a.crops[6].name).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(12).setPosition(a.controlsLayer_w / 2 - 5, a.height - a.controlsLayer_h / 2 - 12);
    pastureLayer.appendChild(wP);
    var zP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (28), a.height - a.controlsLayer_h / 2 - 5).setFill("images/" + a.crops[6].harvest).setSize(48, 35);
    pastureLayer.appendChild(zP);




    var vertFence9 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 40).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence9)
    var vertFence10 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 40).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence10)
    var vertFence1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 203).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence1)
    var vertFence2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 203).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence2)
    var vertFence3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 123).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence3)
    var vertFence4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 123).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence4)
    var vertFence5 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 293).setSize(8, 55).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence5)
    var vertFence6 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 293).setSize(8, 55).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence6)
    //var vertFence7 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 383).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence7)
    //var vertFence8 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 383).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence8)

    //var horizRoad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(320, 25).setFill("images/" + a.barnyard[15].image); 
    var horizFence2P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-4, 315).setSize(315, 29).setFill("images/" + a.barnyard[5].image); pastureLayer.appendChild(horizFence2P)

    var pond1P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 215).setSize(130, 80).setFill("images/Pasture/" + a.pasture[0].image); pastureLayer.appendChild(pond1P)


    var pasUpLabel2 = (new lime.Label).setText("Lvl " + player.pastureLevel + "/3 ").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setPosition(155, 150).setSize(90, 15).setFontSize(16).setFill("images/UI/greenButtonLg.png");
    var barnUnlock3P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(137, 69).setSize(38, 35).setFill("images/tools250.png");
    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim
        var currentPos = barnUnlock3P.getPosition();
        currentPos.x -= 5;
     
        if (currentPos.x < 132) { currentPos.x = 137 };
        barnUnlock3P.setPosition(currentPos);
    }, this, 500)
    pastureLayer.appendChild(barnUnlock3P)
    pastureLayer.appendChild(pasUpLabel2)

    if (player.pastureLevel >= 3) { barnUnlock3P.setHidden(true); pasUpLabel2.setHidden(true); }

    ///upgrading Dairy barn animation elements
    var scaffoldP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 70).setSize(60, 45).setFill("images/scaffold.png"); pastureLayer.appendChild(scaffoldP);
    var upgradeCloudP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 10).setSize(70, 140).setFill("images/clouds.png"); pastureLayer.appendChild(upgradeCloudP);
    var toolMoverLabelP = (new lime.Label).setText("60").setPosition(35, 80).setSize(40, 25).setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("Comic Sans MS").setFill("images/countBack.png");
    var toolMoverP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -50).setSize(50, 50).setFill("images/toolHammer.png");

    pastureLayer.appendChild(toolMoverLabelP);
    toolMoverLabelP.appendChild(toolMoverP);
    toolMoverP.setRotation(-10);
    var currentRotateP = -10;
    upgradeCloudP.setHidden(true);
    scaffoldP.setHidden(true);
    toolMoverLabelP.setHidden(true);




    var vertBridge = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(135, 210).setSize(38, 85).setFill("images/Pasture/" + a.pasture[2].image); pastureLayer.appendChild(vertBridge)


    var vertFence9 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(130, 250).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence9)
    var vertFence10 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(168, 250).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence10)

    var vertFence11 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(63, 100).setSize(8, 68).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence11)
    var vertFence12 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(235, 100).setSize(8, 68).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence12)
    var horizFence3P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(68, 147).setSize(70, 25).setFill("images/" + a.barnyard[18].image); pastureLayer.appendChild(horizFence3P)
    var horizFence4P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, 147).setSize(70, 25).setFill("images/" + a.barnyard[18].image); pastureLayer.appendChild(horizFence4P)

    var vertFence13 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(168, 160).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence13)
    var vertFence14 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(130, 160).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence14)

    var pTreeLeft = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 135).setSize(43, 56).setFill("images/Pasture/" + a.pasture[3].image); pastureLayer.appendChild(pTreeLeft)
    var pTreeRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(228, 135).setSize(43, 56).setFill("images/Pasture/" + a.pasture[3].image); pastureLayer.appendChild(pTreeRight)
    var pTreeRight2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(164, 270).setSize(50, 57).setFill("images/Pasture/" + a.pasture[4].image); pastureLayer.appendChild(pTreeRight2)
    var pTreeLeft2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(95, 270).setSize(50, 57).setFill("images/Pasture/" + a.pasture[4].image); pastureLayer.appendChild(pTreeLeft2)

    var dirtRoad1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(143, 170).setSize(20, 43).setFill("images/Pasture/" + a.pasture[5].image); pastureLayer.appendChild(dirtRoad1)
    var dirtRoad2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(143, 294).setSize(20, 27).setFill("images/Pasture/" + a.pasture[5].image); pastureLayer.appendChild(dirtRoad2)
    var rocks1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(270, 270).setSize(32, 16).setFill("images/Pasture/" + a.pasture[8].image); pastureLayer.appendChild(rocks1)
    var rocks2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(44, 185).setSize(32, 16).setFill("images/Pasture/" + a.pasture[8].image); pastureLayer.appendChild(rocks2)

    var cart1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(102, 413).setFill("images/" + a.crops[6].harvest).setSize(39, 27);
    pastureLayer.appendChild(cart1);
    var rocks3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(178, 415).setSize(32, 16).setFill("images/Pasture/" + a.pasture[8].image);
    pastureLayer.appendChild(rocks3)

    ///pasture Left Tree Block

    var treeBlockP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(175, 120).setSize(140, 200).setFill("images/Pasture/" + a.pasture[9].image); pastureLayer.appendChild(treeBlockP)
    //var treeUnlockBtnP = (new lime.Label).setText("Clear Forest").setFontColor("#E8FC08").setFontWeight(600).setPosition(250, 285).setSize(90, 130); pastureLayer.appendChild(treeUnlockBtnP)
    var axePRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(60, 70).setSize(40, 40).setFill("images/axe.png"); treeBlockP.appendChild(axePRight);
    var treesImgP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(235, 240).setSize(35, 35).setFill("images/tools500.png"); pastureLayer.appendChild(treesImgP)

    var upgradeCloudTP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(175, 90).setSize(130, 285).setFill("images/clouds.png"); pastureLayer.appendChild(upgradeCloudTP);
    var axeMoverLabelTP = (new lime.Label).setText("60").setPosition(240, 255).setSize(40, 25).setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("Comic Sans MS").setFill("images/countBack.png");
    pastureLayer.appendChild(axeMoverLabelTP);

    var axerotateP = 0;
    upgradeCloudTP.setHidden(true);
    axeMoverLabelTP.setHidden(true);




    if (player.treesP > 0) {
        treeBlockP.setHidden(true);
        //treeUnlockBtnP.setHidden(true);
        treesImgP.setHidden(true);
    }

    ///pasture left field cows
    var cowEatL = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(67, 230).setSize(54, 26).setFill("images/Pasture/" + a.pasture[6].image); pastureLayer.appendChild(cowEatL)
    var cowForward1 = (new lime.Sprite).setPosition(50, 290).setSize(22, 38).setFill("images/Pasture/" + a.pasture[7].image); pastureLayer.appendChild(cowForward1)
    var cowLeft1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(28, 193).setSize(80, 30).setFill("images/Pasture/" + a.pasture[13].image); pastureLayer.appendChild(cowLeft1)
    var cowI = 0;

    //poops
    var poop1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(20, 180).setSize(10, 11).setFill("images/Pasture/poop.png"); pastureLayer.appendChild(poop1)
    var poop2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(20, 250).setSize(10, 11).setFill("images/Pasture/poop.png"); pastureLayer.appendChild(poop2)
    var poop3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(75, 290).setSize(10, 11).setFill("images/Pasture/poop.png"); pastureLayer.appendChild(poop3)
    var poop4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(200, 202).setSize(10, 11).setFill("images/Pasture/poop.png"); pastureLayer.appendChild(poop4)
    var poop5 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(276, 245).setSize(10, 11).setFill("images/Pasture/poop.png"); pastureLayer.appendChild(poop5)
    var poop6 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(210, 295).setSize(10, 11).setFill("images/Pasture/poop.png"); pastureLayer.appendChild(poop6)

    //buckets
    var bucketL = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(105, 190).setSize(20, 21).setFill("images/Pasture/bucket.png"); pastureLayer.appendChild(bucketL)

    ///pasture right field cows
    var cowEatR = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(235, 285).setSize(58, 26).setFill("images/Pasture/" + a.pasture[6].image); pastureLayer.appendChild(cowEatR)
    var cowForward1R = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(225, 235).setSize(21, 36).setFill("images/Pasture/" + a.pasture[7].image); pastureLayer.appendChild(cowForward1R)
    var cowLeft1R = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(207, 193).setSize(80, 29).setFill("images/Pasture/" + a.pasture[18].image); pastureLayer.appendChild(cowLeft1R)

    if (player.treesP == 0) {     ///only show right cows if trees are cleared
        cowEatR.setHidden(true); cowForward1R.setHidden(true); cowLeft1R.setHidden(true); poop4.setHidden(true); poop5.setHidden(true); poop6.setHidden(true);
    }
    var cowI2 = 0;
    //cow animation timers
    lime.scheduleManager.scheduleWithDelay(function () {

        cowI = cowI + 1;
        if (cowI >= 8) { cowI = 1 };
        if (player.treesP == 1) {     ///only show right cows if trees are cleared
            cowEatR.setHidden(false); cowForward1R.setHidden(false); cowLeft1R.setHidden(false);
        }
        if (cowI == 1) {
            cowEatL.setFill("images/Pasture/" + a.pasture[11].image);
            cowLeft1.setFill("images/Pasture/" + a.pasture[14].image);
            cowLeft1.setPosition(21, 193);
            cowForward1.setFill("images/Pasture/cow_eatF1.png");
            if (player.treesP == 1) {
                cowEatR.setFill("images/Pasture/" + a.pasture[10].image);
                cowLeft1R.setFill("images/Pasture/" + a.pasture[17].image);
                cowLeft1R.setPosition(214, 193);
                cowForward1R.setFill("images/Pasture/cow_eatF1.png");
                poop4.setHidden(false); poop5.setHidden(false); poop6.setHidden(false);
            }
        };
        if (cowI == 2) {
            cowEatL.setFill("images/Pasture/" + a.pasture[10].image);
            cowLeft1.setFill("images/Pasture/" + a.pasture[15].image); cowLeft1.setPosition(14, 193);
            cowForward1.setFill("images/Pasture/cow_eatF2.png"); cowForward1R.setFill("images/Pasture/cow_eatF2.png");
            if (player.treesP == 1) { cowEatR.setFill("images/Pasture/" + a.pasture[11].image); cowLeft1R.setFill("images/Pasture/" + a.pasture[18].image); cowLeft1R.setPosition(221, 193); }
        };
        if (cowI == 3) {
            cowEatL.setFill("images/Pasture/" + a.pasture[11].image); cowLeft1.setFill("images/Pasture/" + a.pasture[16].image); cowLeft1.setPosition(7, 193);
            if (player.treesP == 1) { cowEatR.setFill("images/Pasture/" + a.pasture[6].image); cowLeft1R.setFill("images/Pasture/" + a.pasture[17].image); cowLeft1R.setPosition(228, 193); }
        };
        if (cowI == 4) {
            cowEatL.setFill("images/Pasture/" + a.pasture[6].image); cowLeft1.setFill("images/Pasture/" + a.pasture[17].image); cowLeft1.setPosition(7, 193); cowForward1.setFill("images/Pasture/cow_eatF2.png"); cowForward1R.setFill("images/Pasture/cow_eatF3.png");
            if (player.treesP == 1) { cowEatR.setFill("images/Pasture/" + a.pasture[11].image); cowLeft1R.setFill("images/Pasture/" + a.pasture[16].image); cowLeft1R.setPosition(228, 193); }
        };
        if (cowI == 5) {
            cowEatL.setFill("images/Pasture/" + a.pasture[11].image); cowLeft1.setFill("images/Pasture/" + a.pasture[18].image); cowLeft1.setPosition(14, 193); cowForward1.setFill("images/Pasture/cow_eatF1.png"); cowForward1R.setFill("images/Pasture/cow_eatF1.png");
            if (player.treesP == 1) { cowEatR.setFill("images/Pasture/" + a.pasture[6].image); cowLeft1R.setFill("images/Pasture/" + a.pasture[15].image); cowLeft1R.setPosition(221, 193); }
        };
        if (cowI == 6) {
            cowEatL.setFill("images/Pasture/" + a.pasture[10].image); cowLeft1.setFill("images/Pasture/" + a.pasture[17].image); cowLeft1.setPosition(21, 193); cowForward1.setFill("images/Pasture/cow_eatF2.png"); cowForward1R.setFill("images/Pasture/cow_eatF2.png");
            if (player.treesP == 1) { cowEatR.setFill("images/Pasture/" + a.pasture[11].image); cowLeft1R.setFill("images/Pasture/" + a.pasture[16].image); cowLeft1R.setPosition(214, 193); }
        };
        if (cowI == 7) {
            cowEatL.setFill("images/Pasture/" + a.pasture[11].image); cowLeft1.setFill("images/Pasture/" + a.pasture[18].image); cowLeft1.setPosition(28, 193);
            if (player.treesP == 1) { cowEatR.setFill("images/Pasture/" + a.pasture[10].image); cowLeft1R.setFill("images/Pasture/" + a.pasture[17].image); cowLeft1R.setPosition(207, 193); cowForward1R.setFill("images/Pasture/cow_eatF1.png"); }
        };

    }, this, 750);


    ///speech bubble to collect milk
    var collectMilk = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(190, 45).setSize(50, 64).setFill("images/UI/speechBubble.png");
    pastureLayer.appendChild(collectMilk);
    var collectMilkIcon = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 2).setSize(27, 30).setFill("images/" + a.crops[7].harvest);
    collectMilk.appendChild(collectMilkIcon);
    var collectMilkLabel = (new lime.Label).setText("+ 0 ").setFontWeight(500).setFontColor("#E8FC08").setPosition(23, 42).setSize(30, 18).setFontFamily("Comic Sans MS");
    collectMilk.appendChild(collectMilkLabel);
    collectMilk.setHidden(true);
    var milkWaiting = 0;


    goog.events.listen(collectMilk, ["mousedown", "touchstart"], function () {
        collectMilk.setHidden(true);
        purchaseSound.play();
        player.cropsStored[7].stored = player.cropsStored[7].stored + milkWaiting;
        count7.setText(player.cropsStored[7].stored);
        gLabel7.setText(player.cropsStored[7].stored);
        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
        milkWaiting = 0;


    });




    //Pasture Layer clouds 

    var cloudsP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-400, -100).setSize(a.width, 750).setFill("images/clouds.png").setOpacity(0.5);
    pastureLayer.appendChild(cloudsP);
    //cloud anim
    var cloudAnimP = 0
    lime.scheduleManager.scheduleWithDelay(function () {
        cloudAnimP = cloudAnimP + 3;
        cloudsP.setPosition(cloudAnimP, -100);
        if (cloudAnimP > a.width + 200) { cloudAnimP = -300 }
    }, this, 200)
    //end clouds pasture
    //cow sound + milk + Jelly harvest timer
    lime.scheduleManager.scheduleWithDelay(function () {

        if (sceneBefore == 2) { cowSound.play(); }
        if (acres[1].owned == 1) { a.harvestMilk(); };
        if (vinyardHouseLevel > 1) { a.makeJelly(); };
    }, this, 60000)

    /// havestMilk    ////////// PASTURE BARN LEVEL + # OF PASTURES (1 OR 2) = HAY EATEN & MILK RETURNED
    a.harvestMilk = function () {
        if (player.cropsStored[6].stored >= (player.pastureLevel + player.treesP)) {
            milkWaiting = milkWaiting + (player.pastureLevel + player.treesP)
            player.cropsStored[6].stored = player.cropsStored[6].stored - (player.pastureLevel + player.treesP);
            count6.setText(player.cropsStored[6].stored);
            gLabel6.setText(player.cropsStored[6].stored);
            collectMilk.setHidden(false);
            collectMilkLabel.setText("+ " + milkWaiting);

            a.haySize();
        }
    }





    ///make Jelly
    a.makeJelly = function () {
        if (player.cropsStored[12].stored >= 2 && vinyardHouseLevel > 1) {

            collectJelly.setHidden(false);
            jellyWaiting = jellyWaiting + 1;


            player.cropsStored[12].stored = player.cropsStored[12].stored - 2;

            count12.setText(player.cropsStored[12].stored);
            gLabel12.setText(player.cropsStored[12].stored);
            collectJellyLabel.setText("+ " + jellyWaiting);
            localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
            localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
            localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);
            checkAchieves2();
            setTimeout(function () { jellyUpCount.setHidden(false); jellyUpCount.setPosition(145, 320); jellyUpCount.setOpacity(1.0); }, 500);
            setTimeout(function () { jellyUpCount.setHidden(false); jellyUpCount.setPosition(145, 310); jellyUpCount.setOpacity(.8); }, 1000);
            setTimeout(function () { jellyUpCount.setHidden(false); jellyUpCount.setPosition(145, 300); jellyUpCount.setOpacity(.6); }, 1500);
            setTimeout(function () { jellyUpCount.setHidden(false); jellyUpCount.setPosition(145, 290); jellyUpCount.setOpacity(.4); }, 2000);
            setTimeout(function () { jellyUpCount.setHidden(false); jellyUpCount.setPosition(145, 280); jellyUpCount.setOpacity(.2); }, 2500);
            setTimeout(function () { jellyUpCount.setHidden(true); }, 3000);


        }
    }

    //update haystack sizes       /////SET SIZE OF HAYSTACKS BASED ON INVENTORY
    a.haySize = function () {
        if (player.cropsStored[6].stored <= 0) { hayStack1.setHidden(true); hayStack2.setHidden(true); }
        if (player.cropsStored[6].stored >= 1) { hayStack1.setHidden(false); }
        if (player.cropsStored[6].stored >= 2) { hayStack2.setHidden(false); }
        if (player.cropsStored[6].stored >= 12) { hayStack1.setSize(30, 15); }
        if (player.cropsStored[6].stored >= 24) { hayStack2.setSize(30, 15); }
        if (player.cropsStored[6].stored >= 50) { hayStack1.setSize(40, 20); }
        if (player.cropsStored[6].stored >= 75) { hayStack1.setSize(40, 20); }
        if (player.cropsStored[6].stored >= 85) { hayStack1.setSize(50, 25); }
        if (player.cropsStored[6].stored >= 100) { hayStack1.setSize(50, 25); }
    }


    //pasture Upgrades
    var stallLeft = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 55).setSize(59, 83).setFill("images/Pasture/" + a.PastureUpgrades[0].image); pastureLayer.appendChild(stallLeft)
    var stallRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(243, 55).setSize(59, 83).setFill("images/Pasture/" + a.PastureUpgrades[1].image); pastureLayer.appendChild(stallRight)
    stallLeft.setHidden(true); stallRight.setHidden(true);
    if (player.pastureLevel > 1) {
        stallLeft.setHidden(false);
        if (player.pastureLevel > 2) {
            stallRight.setHidden(false);
        }
    }


    //pasture - hayfields
    for (f = 0; f < a.num_tiles_x; f++)
        for (var i = 0; i < 2; i++) {
            var posX = f * a.tile_size + 12;
            var posY = i * a.tile_size + 352;
            var pidentI = i;
            var pidentF = f;
            var pidentThis = "";
            var pidentFinal = "";
            pidentThis = "hay1-"
            pidentFinal = pidentFinal.concat(pidentThis.toString(), pidentF.toString(), pidentI.toString());
            //pasture left field
            if (f == 0 && i == 0) { var hay1 = (new farming.Land(a, b, posX, posY, 2, 'tlt', pidentFinal)).setPosition(f * a.tile_size + 12, i * a.tile_size + 352); pastureLayer.appendChild(hay1) }
            else if (f == 3 && i == 0) { var hay1 = (new farming.Land(a, b, posX, posY, 2, 'trt', pidentFinal)).setPosition(f * a.tile_size + 12, i * a.tile_size + 352); pastureLayer.appendChild(hay1) }
            else if (f == 3 && i == 1) { var hay1 = (new farming.Land(a, b, posX, posY, 2, 'brt', pidentFinal)).setPosition(f * a.tile_size + 12, i * a.tile_size + 352); pastureLayer.appendChild(hay1) }
            else if (f == 0 && i == 1) { var hay1 = (new farming.Land(a, b, posX, posY, 2, 'blt', pidentFinal)).setPosition(f * a.tile_size + 12, i * a.tile_size + 352); pastureLayer.appendChild(hay1) }
            else { var hay1 = (new farming.Land(a, b, posX, posY, 2, 'non' ,pidentFinal)).setPosition(f * a.tile_size + 12, i * a.tile_size + 352); pastureLayer.appendChild(hay1) }

            posX = f * a.tile_size + 175;
            var pidentFinal = "";
            pidentThis = "hay2-"
            pidentFinal = pidentFinal.concat(pidentThis.toString(), pidentF.toString(), pidentI.toString());
            //pasture right field
            if (f == 0 && i == 0) { var hay2 = (new farming.Land(a, b, posX, posY, 2, 'tlt', pidentFinal)).setPosition(f * a.tile_size + 175, i * a.tile_size + 352); pastureLayer.appendChild(hay2) }
            else if (f == 3 && i == 0) { var hay2 = (new farming.Land(a, b, posX, posY, 2, 'trt', pidentFinal)).setPosition(f * a.tile_size + 175, i * a.tile_size + 352); pastureLayer.appendChild(hay2) }
            else if (f == 3 && i == 1) { var hay2 = (new farming.Land(a, b, posX, posY, 2, 'brt', pidentFinal)).setPosition(f * a.tile_size + 175, i * a.tile_size + 352); pastureLayer.appendChild(hay2) }
            else if (f == 0 && i == 1) { var hay2 = (new farming.Land(a, b, posX, posY, 2, 'blt', pidentFinal)).setPosition(f * a.tile_size + 175, i * a.tile_size + 352); pastureLayer.appendChild(hay2) }
            else { var hay2 = (new farming.Land(a, b, posX, posY, 2, 'non', pidentFinal)).setPosition(f * a.tile_size + 175, i * a.tile_size + 352); pastureLayer.appendChild(hay2) }
        }
    var dirtRoad3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(143, 345).setSize(21, 92).setFill("images/Pasture/" + a.pasture[5].image); pastureLayer.appendChild(dirtRoad3)
    var oldCrop = b.currentCrop;

    //cost display
    var costDisplayP = (new lime.Label).setPosition(156, 180).setSize(25, 25).setText("-$50").setFontSize(14).setFontFamily("Comic Sans MS").setFontColor("#e1f00e").setFontWeight(600);
    pastureLayer.appendChild(costDisplayP);
    var costCoinP = (new lime.Sprite).setPosition(30, -8).setSize(30, 30).setFill(imgArray11[0]); costDisplayP.appendChild(costCoinP);
    costDisplayP.setHidden(true);






    //hay mechanics
    var hayStack1 = (new lime.Sprite).setPosition(98, 138).setSize(20, 10).setFill("images/Pasture/hayPile.png"); pastureLayer.appendChild(hayStack1);
    var hayStack2 = (new lime.Sprite).setPosition(211, 138).setSize(20, 10).setFill("images/Pasture/hayPile.png"); pastureLayer.appendChild(hayStack2);
    var hayStack3 = (new lime.Sprite).setPosition(285, 310).setSize(11, 6).setFill("images/Pasture/hayPile.png"); pastureLayer.appendChild(hayStack3);

    var harvest2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - 19, a.height / 2 + 100).setFill("images/" + a.crops[6].image).setSize(26, 21);
    pastureLayer.appendChild(harvest2);
    harvest2.setHidden(true);

    //pasture market entrance
    ///market control
    var marketP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(205, a.height - a.controlsLayer_h - 4).setSize(103, 65).setFill("images/" + a.barnyard[3].image);
    pastureLayer.appendChild(marketP);

    //event handling
    goog.events.listen(marketP, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 2;                                                                                                                               ///from pature to Market
            c.replaceScene(marketScene, lime.transitions.SlideInDown);

            count0.setText(player.cropsStored[0].stored);
            count1.setText(player.cropsStored[1].stored);
            count2.setText(player.cropsStored[2].stored);
            count3.setText(player.cropsStored[3].stored);
            count4.setText(player.cropsStored[4].stored);
            count5.setText(player.cropsStored[5].stored);
            count6.setText(player.cropsStored[6].stored);
            count7.setText(player.cropsStored[7].stored);
            count8.setText(player.cropsStored[8].stored);
            count9.setText(player.cropsStored[9].stored);
        }
    });

    ///For Sale sign on pasture for vinyard
    var forSaleV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(1, 424).setSize(40, 40).setFill("images/UI/vinyardBtn.png")
    pastureLayer.appendChild(forSaleV);

    //inventory and storage menu 
    var storageIconP = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 23).setSize(38, 38).setFill("images/UI/pastureBtn.png");
    pastureLayer.appendChild(storageIconP);
    var storageMenuP = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 75).setSize(100, 70).setFill("images/UI/greenButtonLg.png");
    pastureLayer.appendChild(storageMenuP);

    var hayIcon = (new lime.Sprite).setPosition(-20, -11).setFill("images/" + a.crops[6].harvest).setSize(30, 30);
    storageMenuP.appendChild(hayIcon);
    var milkIcon = (new lime.Sprite).setPosition(20, -11).setFill("images/" + a.crops[7].harvest).setSize(30, 30);
    storageMenuP.appendChild(milkIcon);

    var gLabel6 = (new lime.Label).setPosition(-20, 12).setSize(26, 12).setText(player.cropsStored[6].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(18);
    storageMenuP.appendChild(gLabel6);
    var gLabel7 = (new lime.Label).setPosition(20, 12).setSize(26, 12).setText(player.cropsStored[7].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(18);
    storageMenuP.appendChild(gLabel7);

    var dayLabelP = (new lime.Label).setFontSize(10).setPosition(-30, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Day " + dayCount).setFontFamily("Comic Sans MS").setFontColor("#ffffff").setFontSize(14);
    storageMenuP.appendChild(dayLabelP);
    var yearLabelP = (new lime.Label).setFontSize(10).setPosition(32, 35).setSize(55, 15).setFill("images/UI/purpleButtonLg.png").setText("Year " + yearCount).setFontFamily("Comic Sans MS").setFontColor("#ffffff").setFontSize(14);
    storageMenuP.appendChild(yearLabelP);

    storageMenuP.setHidden(true);
    var storageToggleP = 0;
    goog.events.listen(storageIconP, ["mousedown", "touchstart"], function () {
        if (storageToggleP == 0) { storageMenuP.setHidden(false); storageToggleP = 1; }
        else { storageMenuP.setHidden(true); storageToggleP = 0; }
    });


    ///pasture blocking modal

    var pastureBlock = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#ffffff").setOpacity(0.75);
    pastureLayer.appendChild(pastureBlock);
    //goog.events.listen(pastureBlock, ["mousedown", "touchstart"], function () {
    //    break;
    //});
    pastureBlock.setHidden(true);


    ///Out of Cash modal- pasture
    var outOfCashP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 100).setSize(210, 220).setFill("images/UI/outOfCash.png");
    pastureLayer.appendChild(outOfCashP);
    var buyStarCashP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(122, 212).setSize(75, 35).setFill("images/UI/buyStarCash.png");
    outOfCashP.appendChild(buyStarCashP);
    var marketBtn1P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(15, 212).setSize(75, 35).setFill("images/UI/marketBtn.png");
    outOfCashP.appendChild(marketBtn1P);
    var cancelBtnCashP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(89, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    outOfCashP.appendChild(cancelBtnCashP);
    outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);

    goog.events.listen(buyStarCashP, ["mousedown", "touchstart"], function () {            //starCash Button
        warningSeen = 1;
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); lsBlock.setHidden(true);
        shareFacebook();

    });
    goog.events.listen(marketBtn1P, ["mousedown", "touchstart"], function () {            //market Button
        warningSeen = 1;
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); lsBlock.setHidden(true);
        a.updateStored();
        globalModalBlock = 0;
        c.replaceScene(marketScene, lime.transitions.SlideInDown);
    });
    goog.events.listen(cancelBtnCashP, ["mousedown", "touchstart"], function () {            //cancel Button

        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); pastureBlock.setHidden(true); lsBlock.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        warningSeen = 1;
        globalModalBlock = 0;
    });

    if (player.money < (a.crops[b.currentCrop].cost) && warningSeen == 0) {
        pastureBlock.setHidden(false); homeBlock.setHidden(false); orchardBlock.setHidden(false); lsBlock.setHidden(false); vinyardBlock.setHidden(false);
        globalModalBlock = 1;
        outOfCashP.setHidden(false); marketBtn1P.setHidden(false); buyStarCashP.setHidden(false);
        outOfCashO.setHidden(false); marketBtn1O.setHidden(false); buyStarCashO.setHidden(false);
        outOfCashV.setHidden(false); marketBtn1V.setHidden(false); buyStarCashV.setHidden(false);
        outOfCash.setHidden(false); marketBtn1.setHidden(false); buyStarCash.setHidden(false);
    }



    ///For Sale confirm modal to buy vinyard
    var confirmSaleV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 100).setSize(210, 220).setFill("images/UI/saleBack.png");
    pastureLayer.appendChild(confirmSaleV);
    var confirmTextV = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#000000").setPosition(45, 145).setSize(125, 60).setFontSize(22).setText("Vineyard         7500");
    confirmSaleV.appendChild(confirmTextV);
    var confirmCoinV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(55, 165).setSize(30, 30).setFill(imgArray11[0]);
    confirmSaleV.appendChild(confirmCoinV);
    var confirmTextSubV = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#FF0000").setPosition(55, 195).setSize(110, 60).setFontSize(10).setText("Earn more $ to buy");
    confirmSaleV.appendChild(confirmTextSubV);
    var confirmBtnV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 212).setSize(75, 35).setFill("images/UI/greenBuy.png");
    confirmSaleV.appendChild(confirmBtnV);
    var cancelBtnV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    confirmSaleV.appendChild(cancelBtnV);
    confirmSaleV.setHidden(true);

    goog.events.listen(forSaleV, ["mousedown", "touchstart"], function () {            //for sale vinyard

        if (globalModalBlock == 0) {
            globalModalBlock = 1;
            fsClicked = 3;
            pastureBlock.setHidden(false); confirmSaleV.setHidden(false);
            if (player.money >= 7500) { confirmTextSubV.setHidden(true); confirmBtnV.setHidden(false); } else { confirmBtnV.setHidden(true); };
            confirmTextV.setText("Vineyard         7500");
        }

    });

    goog.events.listen(confirmBtnV, ["mousedown", "touchstart"], function () {            //forsale confirm
   
        player.money = (player.money - 7500);
        a.updateMoney();
        acres[3].owned = 1;
        localStorage.setItem('GuiGhostFarms_acres', JSON.stringify(acres));
        confirmSaleV.setHidden(true);
        roadLeft2.setHidden(false); forSaleV.setHidden(true); confirmSaleV.setHidden(true);
        pastureBlock.setHidden(true); vinyardBlock.setHidden(true);
        fsClicked = 0;
        globalModalBlock = 0;

    });
    goog.events.listen(cancelBtnV, ["mousedown", "touchstart"], function () { confirmSaleV.setHidden(true); pastureBlock.setHidden(true); globalModalBlock = 0; });     //forsale cancel







    ////achievement Modal
    var achieveNotifP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 130).setSize(210, 220).setFill("images/UI/achieveNotif.png");
    var achieveTextSubP = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#08fcef").setPosition(30, 35).setSize(150, 60).setFontSize(12).setText("Achieve Text");
    achieveNotifP.appendChild(achieveTextSubP);
    var achieveTextP = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(13, 160).setSize(190, 60).setFontSize(16).setText("Blacksmith I");
    achieveNotifP.appendChild(achieveTextP);
    var achieveSCP = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#301934").setPosition(21, 186).setSize(190, 60).setFontSize(18).setText(" + ");
    achieveNotifP.appendChild(achieveSCP);
    var confirmBtnAP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 211).setSize(40, 40).setFill("images/UI/checkButton.png");
    achieveNotifP.appendChild(confirmBtnAP);
    pastureLayer.appendChild(achieveNotifP);
    achieveNotifP.setHidden(true);

    goog.events.listen(confirmBtnAP, ["mousedown", "touchstart"], function () {   //for sale pasture
        globalModalBlock = 0;
        achieveNotif.setHidden(true);
        achieveNotifP.setHidden(true);
        achieveNotifV.setHidden(true);
        achieveNotifO.setHidden(true);
        achieveNotifLS.setHidden(true);
    });

    ////pasture SHORTAGE block modal
    var milkBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(62, 145).setSize(180, 200).setFill("images/UI/shortage.png");
    pastureLayer.appendChild(milkBlocked);
    var confirmMilkBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(70, 195).setSize(40, 40).setFill("images/UI/checkButton.png");
    milkBlocked.appendChild(confirmMilkBlocked);
    var blockedTextM = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(5, 120).setSize(170, 40).setFontSize(14).setText("Livestock Hungry!");
    milkBlocked.appendChild(blockedTextM);
    //var blockedSubM = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#FFFFFF").setPosition(2, 140).setSize(175, 40).setFontSize(12).setText("Cows eat HAY to produce MILK. Grow some in the fields below");
    //milkBlocked.appendChild(blockedSubM);



    var cowBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 140).setSize(55, 30).setFill("images/Pasture/cow_eatR1.png");
    milkBlocked.appendChild(cowBlocked);
    var blockedSubM = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#FFFFFF").setPosition(55, 145).setFontColor("#E8FC08").setSize(24, 140).setFontSize(22).setText("+");
    milkBlocked.appendChild(blockedSubM);
    var hayIconTop = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(77, 140).setFill("images/" + a.crops[6].harvest).setSize(30, 30);
    milkBlocked.appendChild(hayIconTop);
    var blockedSubM2 = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#FFFFFF").setPosition(110, 145).setSize(24, 140).setFontColor("#E8FC08").setFontSize(22).setText("=");
    milkBlocked.appendChild(blockedSubM2);
    var milkIconBlock = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(132, 140).setFill("images/" + a.crops[7].harvest).setSize(35, 35);
    milkBlocked.appendChild(milkIconBlock);
    var gLabel6Milk = (new lime.Label).setPosition(90, 186).setSize(20, 16).setText(player.cropsStored[6].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08");
    milkBlocked.appendChild(gLabel6Milk);



    milkBlocked.setHidden(true);

    goog.events.listen(confirmMilkBlocked, ["mousedown", "touchstart"], function () {
        milkBlocked.setHidden(true); pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true);
    });

    /// compass nav Pasture
    var compassPBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 100).setSize(250, 250).setFill("images/UI/compass3.png"); pastureLayer.appendChild(compassPBack)
    var orchardNavP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 35).setSize(50, 50).setFill("images/UI/orchardBtn.png"); compassPBack.appendChild(orchardNavP)
    var lsNavP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 170).setSize(50, 50).setFill("images/UI/lsBtn.png"); compassPBack.appendChild(lsNavP)
    var vinyardNavP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 35).setSize(50, 50).setFill("images/UI/vinyardBtn.png"); compassPBack.appendChild(vinyardNavP)
    var homeNavP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(96, 100).setSize(60, 60).setFill("images/UI/homeButton.png"); compassPBack.appendChild(homeNavP)
    var pastureNavP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 170).setSize(50, 50).setFill("images/UI/pastureBtn.png"); compassPBack.appendChild(pastureNavP)
    var closeNavP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 222).setSize(50, 50).setFill("images/UI/XButton.png"); compassPBack.appendChild(closeNavP)
    compassPBack.setHidden(true);


    goog.events.listen(compassP, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) { checkAcresNav(); }

    });
    goog.events.listen(closeNavP, ["mousedown", "touchstart"], function () { closeAcresNav(); globalModalBlock = 0; });
    goog.events.listen(homeNavP, ["mousedown", "touchstart"], function () {
        if (compassVisible) {
            b.currentCrop = homeCrop;
            if (b.currentCrop > 5) { b.currentCrop = 0; }
            closeAcresNav();
            a.sceneBefore = 1;

            c.replaceScene(d, lime.transitions.SlideInRight);
            globalModalBlock = 0;
        }
    });
    goog.events.listen(pastureNavP, ["mousedown", "touchstart"], function () {
        if (acres[1].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 2;
            b.currentCrop = 6;
            globalModalBlock = 0;
        }
    });
    goog.events.listen(orchardNavP, ["mousedown", "touchstart"], function () {
        if (acres[2].owned == 1 && compassVisible) {
            oldCrop = b.currentCrop; b.currentCrop = 8;
            a.sceneBefore = 3;
            waterfallSound.play();
            closeAcresNav();
            c.replaceScene(orchardScene, lime.transitions.SlideInRight);
            globalModalBlock = 0;
        }
    });
    goog.events.listen(vinyardNavP, ["mousedown", "touchstart"], function () {
        if (acres[3].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 4;
            c.replaceScene(vinyardScene, lime.transitions.SlideInLeft);
            waterfallSound.stop();
            oldCrop = b.currentCrop; b.currentCrop = 12;
            checkShortage();
            globalModalBlock = 0;
            //a.sceneBefore = 5;
        }
    });
    goog.events.listen(lsNavP, ["mousedown", "touchstart"], function () {
        if (acres[4].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 5;                                                                                                                              ///from pature to Market
            c.replaceScene(liveStockScene, lime.transitions.SlideInRight);
            waterfallSound.stop();
            chickenSound.play();
            pig1Sound.play();
            setTimeout(function () { pig2Sound.play(); }, 5000);
            checkShortage();
            globalModalBlock = 0;
        }
    });


    ///end compass Pasture



    goog.events.listen(roadLeft, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(pastureScene, lime.transitions.SlideInLeft); homeCrop = b.currentCrop; oldCrop = b.currentCrop; b.currentCrop = 6; sceneBefore = 2; cowSound.play(); checkShortage();
        }
    });                      ///from home to pasture
    goog.events.listen(roadRight2, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(d, lime.transitions.SlideInRight);
            b.currentCrop = homeCrop;
            if (b.currentCrop > 5) { b.currentCrop = 0 }
            sceneBefore = 1;
        }
    });                                                ////from pasture to home

    // pasture Tree Block
    goog.events.listen(treesImgP, ["mousedown", "touchstart"], function () {
        if (player.tools >= 500 && globalModalBlock == 0) {
            treesImgP.setHidden(true);
            player.tools = player.tools - 500;
            a.updateTools();
            upgradeCloudTP.setHidden(false);
            axeMoverLabelTP.setHidden(false);

            ///pasture axe tree clear anims
            lime.scheduleManager.scheduleWithDelay(function () {
                axerotateP = axerotateP + 10;
                if (axerotateP > 35) { axerotateP = -10; };
                axePRight.setRotation(axerotateP);

            }, this, 200, 300)
            //pasture right tress  clearing cloud anim
            var secondsToUpgradeTP = 60;
            var upCloudWTP = 100;
            var upCloudXTP = 175;
            var upCloudYTP = 90;

            lime.scheduleManager.scheduleWithDelay(function () {

                upgradeCloudTP.setPosition(upCloudXTP, upCloudYTP).setSize(upCloudWTP, 200)
                upCloudWTP = upCloudWTP + 10;
                upCloudXTP = upCloudXTP - 5;
                upCloudYTP = upCloudYTP - 5
                if (upCloudXTP < 165) { upCloudXTP = 175; upCloudYTP = 90; upCloudWTP = 285; }


            }, this, 250, 240)

            //pasture right trees coundown label updates
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                secondsToUpgradeTP = secondsToUpgradeTP - 1;
                axeMoverLabelTP.setText(secondsToUpgradeTP);

                if (secondsToUpgradeTP <= 0) {
                    axeMoverLabelTP.setHidden(true); upgradeCloudTP.setHidden(true); secondsToUpgradeTP = 60;
                    player.treesP = 1;
                    a.updateTools();
                    treeBlockP.setHidden(true);
                    axePRight.setHidden(true);
                    localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
                    localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
                    localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
                    localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);
                }

            }, this, 1000, 60)

        }
    });
    // pasture BarnUpgrades
    goog.events.listen(barnUnlock3P, ["mousedown", "touchstart"], function () {                 //barnUpgrades
       
        if (player.tools >= 250 && parseInt(player.pastureLevel) <= 3 && globalModalBlock == 0) {
         
            barnUnlock3P.setHidden(true)
            player.tools = player.tools - 250;
            upgradeCloudP.setHidden(false);
            scaffoldP.setHidden(false);
            toolMoverLabelP.setHidden(false);
            lime.scheduleManager.scheduleWithDelay(function () {
                currentRotateP = currentRotateP + 10;
                if (currentRotateP > 35) { currentRotateP = -10; };
                toolMoverP.setRotation(currentRotateP);
             
            }, this, 200, 300)
            //upgrade countdown timer
            var secondsToUpgradeP = 60;
            var upCloudWP = 70;
            var upCloudXP = 10;
            var upCloudYP = 5;
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                secondsToUpgradeP = secondsToUpgradeP - 1;

                toolMoverLabelP.setText(secondsToUpgradeP);

                if (secondsToUpgradeP <= 0) { toolMoverLabelP.setHidden(true); scaffoldP.setHidden(true); upgradeCloudP.setHidden(true); secondsToUpgradeP = 60; }

            }, this, 1000, 60)
            if (player.pastureLevel == 1) {
                lime.scheduleManager.scheduleWithDelay(function () {
                    //add upgrade anim

                    upgradeCloudP.setPosition(upCloudXP, upCloudYP).setSize(upCloudWP, 200)
                    upCloudWP = upCloudWP + 10;
                    upCloudXP = upCloudXP - 5;
                    upCloudYP = upCloudYP - 5
                    if (upCloudXP < -10) { upCloudXP = 10; upCloudYP = 5; upCloudWP = 60; }


                }, this, 250, 240)
            }
            if (player.pastureLevel == 2) {
                //move upgrade elements to right side of dairy
                scaffoldP.setPosition(240, 70);
                toolMoverLabelP.setPosition(275, 80);
                toolMoverP.setPosition(-22, -50);
                upCloudWP = 70;
                upCloudXP = 240;
                upCloudYP = 5;
                lime.scheduleManager.scheduleWithDelay(function () {
                    //add upgrade anim

                    upgradeCloudP.setPosition(upCloudXP, upCloudYP).setSize(upCloudWP, 200)
                    upCloudWP = upCloudWP + 10;
                    upCloudXP = upCloudXP - 5;
                    upCloudYP = upCloudYP - 5
                    if (upCloudXP < 220) { upCloudXP = 240; upCloudYP = 5; upCloudWP = 60; }


                }, this, 250, 240)
            }
            //upgrade the Dairy barn after the 60 seconds
            setTimeout(function () {

                player.pastureLevel = parseInt(player.pastureLevel) + 1;

                if (player.pastureLevel > 3) { player.pastureLevel = 3 };

                localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));

                if (player.pastureLevel == 2) { pasUpLabel2.setText("Lvl 2/3 "); stallLeft.setHidden(false); barnUnlock3P.setHidden(false); };
                if (player.pastureLevel >= 3) { stallLeft.setHidden(false); stallRight.setHidden(false); pasUpLabel2.setHidden(true); barnUnlock3P.setHidden(true); checkAchieves2(); pasUpLabel2.setText("Lvl 3/3 "); stallLeft.setHidden(false); };
                upgradeCloudP.setHidden(true);
                scaffoldP.setHidden(true);
                toolMoverLabelP.setHidden(true);
                a.updateTools();
            }, 60000);
        }

    });


    ///////////orchard scene///////////orchard scene///////////orchard scene///////////orchard scene///////////orchard scene///////////orchard scene///////////orchard scene///////////orchard scene///////////orchard scene

    var orchardScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        orchardLayer = (new lime.Layer).setAnchorPoint(0, 0),
        orchardFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height - 5);
    orchardScene.appendChild(orchardFill1);
    orchardScene.appendChild(orchardLayer);



    //var horizRoad3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 435).setSize(300, 25).setFill("images/" + a.barnyard[15].image);
    //orchardLayer.appendChild(horizRoad3);
    var midbackO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 40).setSize(a.controlsLayer_w, a.landLayer_h + 37).setFill("images/" + a.barnyard[0].image);
    orchardLayer.appendChild(midbackO)
    var waterfallMtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 44).setSize(310, 420).setFill("images/" + a.orchard[0].image);
    orchardLayer.appendChild(waterfallMtn)
    var horizRoad3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 435).setSize(109, 25).setFill("images/" + a.barnyard[15].image);
    orchardLayer.appendChild(horizRoad3);
    var horizRoad4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(152, 435).setSize(170, 25).setFill("images/" + a.barnyard[15].image);
    orchardLayer.appendChild(horizRoad4);
    //var vertroadO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 200).setSize(25, 240).setFill("images/" + a.barnyard[1].image); orchardLayer.appendChild(vertroadO)

    ///orchard farming land
    var posXO = a.tile_size + 5;
    var posYO = a.tile_size + 180;
    var tree1 = (new farming.Land(a, b, 5, 195, 3, 'non','tree1')).setPosition(5, 195); tree1.setSize(40, 50); orchardLayer.appendChild(tree1)
    var tree2 = (new farming.Land(a, b, 65, 195, 3, 'non', 'tree2')).setPosition(65, 195); tree2.setSize(40, 50); orchardLayer.appendChild(tree2)
    var tree3 = (new farming.Land(a, b, 5, 250, 3, 'non', 'tree3')).setPosition(5, 250); tree3.setSize(40, 50); orchardLayer.appendChild(tree3)
    var tree4 = (new farming.Land(a, b, 65, 250, 3, 'non', 'tree4')).setPosition(65, 250); tree4.setSize(40, 50); orchardLayer.appendChild(tree4)
    var tree5 = (new farming.Land(a, b, 5, 310, 3, 'non', 'tree5')).setPosition(5, 310); tree5.setSize(40, 50); orchardLayer.appendChild(tree5)
    var tree6 = (new farming.Land(a, b, 65, 310, 3, 'non', 'tree6')).setPosition(65, 310); tree6.setSize(40, 50); orchardLayer.appendChild(tree6)
    var tree7 = (new farming.Land(a, b, 5, 365, 3, 'non', 'tree7')).setPosition(5, 365); tree7.setSize(40, 50); orchardLayer.appendChild(tree7)
    var tree8 = (new farming.Land(a, b, 65, 365, 3, 'non', 'tree8')).setPosition(65, 365); tree8.setSize(40, 50); orchardLayer.appendChild(tree8)
    //right trees
    var tree9 = (new farming.Land(a, b, 215, 245, 32, 'non', 'tree9')).setPosition(215, 245); tree9.setSize(40, 50); orchardLayer.appendChild(tree9)
    var tree10 = (new farming.Land(a, b, 250, 180, 32, 'non', 'tree10')).setPosition(250, 180); tree10.setSize(40, 50); orchardLayer.appendChild(tree10)
    //var tree11 = (new farming.Land(a, b, 160, 245, 32)).setPosition(160, 245); tree11.setSize(40, 50); orchardLayer.appendChild(tree11)
    var tree12 = (new farming.Land(a, b, 160, 310, 32, 'non', 'tree12')).setPosition(160, 310); tree12.setSize(40, 50); orchardLayer.appendChild(tree12)
    var tree13 = (new farming.Land(a, b, 160, 375, 32, 'non', 'tree13')).setPosition(160, 375); tree13.setSize(40, 50); orchardLayer.appendChild(tree13)
    var tree14 = (new farming.Land(a, b, 215, 375, 32, 'non', 'tree14')).setPosition(215, 375); tree14.setSize(40, 50); orchardLayer.appendChild(tree14)
    var tree15 = (new farming.Land(a, b, 270, 375, 32, 'non', 'tree15')).setPosition(270, 375); tree15.setSize(40, 50); orchardLayer.appendChild(tree15)
    var tree16 = (new farming.Land(a, b, 215, 310, 32, 'non', 'tree16')).setPosition(215, 310); tree16.setSize(40, 50); orchardLayer.appendChild(tree16)
    var tree17 = (new farming.Land(a, b, 270, 310, 32, 'non', 'tree17')).setPosition(270, 310); tree17.setSize(40, 50); orchardLayer.appendChild(tree17)
    var tree18 = (new farming.Land(a, b, 270, 245, 32, 'non', 'tree18')).setPosition(270, 245); tree18.setSize(40, 50); orchardLayer.appendChild(tree18)

    //var tree5 = (new farming.Land(a, b, posXO, posYO)).setPosition(2, 290); orchardLayer.appendChild(tree5)
    //var tree6 = (new farming.Land(a, b, posXO, posYO)).setPosition(70, 290); orchardLayer.appendChild(tree6)
    //var tree7 = (new farming.Land(a, b, posXO, posYO)).setPosition(2, 340); orchardLayer.appendChild(tree7)
    //var tree8 = (new farming.Land(a, b, posXO, posYO)).setPosition(70, 340); orchardLayer.appendChild(tree8)

    var costDisplayO = (new lime.Label).setPosition(156, 180).setSize(25, 25).setText("-$50").setFontSize(14).setFontFamily("Comic Sans MS").setFontColor("#e1f00e").setFontWeight(600);
    orchardLayer.appendChild(costDisplayO);
    var costCoinO = (new lime.Sprite).setPosition(30, -8).setSize(30, 30).setFill(imgArray11[0]); costDisplayO.appendChild(costCoinO);
    costDisplayO.setHidden(true);


    //orchard waterfall animation
    var waterfallAnim = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(155, 88).setSize(36, 75).setFill("images/" + a.waterfallImg[0].image);
    orchardLayer.appendChild(waterfallAnim);
    var waterMoving = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, 290).setSize(22, 44).setFill("images/" + a.waterfallImg[4].image);
    orchardLayer.appendChild(waterMoving);
    var waterMoving2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, 350).setSize(22, 44).setFill("images/" + a.waterfallImg[4].image);
    orchardLayer.appendChild(waterMoving2);
    a.waterAnim = function () {
        var imgW = 0;
        var imgW2 = 0;

        setInterval(function () {
            if (imgW > 3) { imgW = 0; };
            if (imgW2 > 3) { imgW2 = 0; };
            waterfallAnim.setFill("images/" + a.waterfallImg[imgW].image);
            if (imgW2 == 0) {
                waterMoving.setFill("images/" + a.waterfallImg[5].image);
                waterMoving2.setFill("images/" + a.waterfallImg[5].image);
            }
            if (imgW2 > 1) {
                waterMoving.setFill("images/" + a.waterfallImg[4].image);
                waterMoving2.setFill("images/" + a.waterfallImg[4].image);
            }
            imgW = imgW + 1; imgW2 = imgW2 + 1;

        }, 400);
    }
    a.waterAnim();

    ///orchard Tree Block
    var orchardTreeBlockO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(158, 150).setSize(150, 290).setFill("images/Orchard/treeBlockO.png");
    orchardLayer.appendChild(orchardTreeBlockO);
    //var treeUnlockBtnO = (new lime.Label).setText("Clear Forest").setFontColor("#E8FC08").setFontWeight(600).setPosition(240, 300).setSize(90, 50);
    //orchardLayer.appendChild(treeUnlockBtnO);
    var upgradeCloudTO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 60).setSize(150, 320).setFill("images/clouds.png"); orchardTreeBlockO.appendChild(upgradeCloudTO);
    var axeORight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(70, 105).setSize(40, 40).setFill("images/axe.png"); orchardTreeBlockO.appendChild(axeORight);
    var treesImgO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(225, 290).setSize(35, 35).setFill("images/tools500.png");
    orchardLayer.appendChild(treesImgO);


    var axeMoverLabelTO = (new lime.Label).setText("60").setPosition(75, 200).setSize(40, 25).setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("Comic Sans MS").setFill("images/countBack.png");
    orchardTreeBlockO.appendChild(axeMoverLabelTO);

    var axerotateO = 0;
    upgradeCloudTO.setHidden(true);
    axeMoverLabelTO.setHidden(true);





    if (orchardTreeBlock > 1) {
        orchardTreeBlockO.setHidden(true);
        //treeUnlockBtnO.setHidden(true);
        treesImgO.setHidden(true);
    };

    goog.events.listen(treesImgO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isItBlockedO = orchardBlock.getHidden();
            if (isItBlockedO == true) {
                if (player.tools >= 500) {
                    player.tools = player.tools - 500;
                    a.updateTools();
                    treesImgO.setHidden(true);
                    upgradeCloudTO.setHidden(false);
                    axeMoverLabelTO.setHidden(false);
                    //right trees axe anim
                    lime.scheduleManager.scheduleWithDelay(function () {
                        axerotateO = axerotateO + 10;
                        if (axerotateO > 35) { axerotateO = -10; };
                        axeORight.setRotation(axerotateO);

                    }, this, 200, 300)

                    //orchard right tress  clearing cloud anim
                    var secondsToUpgradeTO = 60;
                    var upCloudWTO = 380;
                    var upCloudXTO = 0;
                    var upCloudYTO = 60;

                    lime.scheduleManager.scheduleWithDelay(function () {

                        upgradeCloudTO.setPosition(upCloudXTO, upCloudYTO).setSize(upCloudWTO, 200)
                        upCloudWTO = upCloudWTO + 10;
                        upCloudXTO = upCloudXTO - 5;
                        upCloudYTO = upCloudYTO - 5
                        if (upCloudXTO < -15) { upCloudXTO = 0; upCloudYTO = 60; upCloudWTO = 290; }


                    }, this, 250, 240)

                    //orchard right trees coundown label updates
                    lime.scheduleManager.scheduleWithDelay(function () {
                        //add upgrade anim
                        secondsToUpgradeTO = secondsToUpgradeTO - 1;
                        axeMoverLabelTO.setText(secondsToUpgradeTO);

                        if (secondsToUpgradeTO <= 0) {
                            axeMoverLabelTO.setHidden(true); upgradeCloudTO.setHidden(true); secondsToUpgradeTO = 60;
                            player.fields = player.fields + 1;
                            a.updateTools();

                            orchardTreeBlock = 2;

                            orchardTreeBlockO.setHidden(true);
                            //treeUnlockBtnO.setHidden(true);

                            unlockedCropBackO.setHidden(false);
                            setTimeout(function () { unlockedCropBackO.setHidden(true); }, 2000);
                            localStorage["GuiGhostFarms_orchardTreeBlock"] = 2;
                        }

                    }, this, 1000, 60)


                }
            }
        }
    });

    ////orchard fishing
    //        var fishingShack= (new lime.Sprite).setAnchorPoint(0, 0).setPosition(210, 105).setSize(90, 96).setFill("images/Orchard/fishShack2.png");
    //        orchardLayer.appendChild(fishingShack);


    ///orchard controls
    var ggO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, 0).setSize(a.controlsLayer_w, 46).setFill("images/UI/greenButtonLg.png");
    orchardLayer.appendChild(ggO);
    //var topLogoO = (new lime.Sprite).setPosition(155, 10).setSize(150, 22).setFill("images/UI/topMenuPlain.png");
    //orchardLayer.appendChild(topLogoO);

    var topCoinO = (new lime.Sprite).setPosition(285, 18).setSize(35, 35).setFill(imgArray11[0]);
    orchardLayer.appendChild(topCoinO);
    var orchardCash = (new lime.Label).setText(player.money).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(245, 24).setFontSize(18);
    orchardLayer.appendChild(orchardCash);
    ;
    //storage Menu Orchard
    var storageIconO = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 21).setSize(35, 35).setFill("images/UI/orchardBtn.png");
    orchardLayer.appendChild(storageIconO);
    var storageMenuO = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 78).setSize(150, 70).setFill("images/UI/greenButtonLg.png");
    orchardLayer.appendChild(storageMenuO);
    //inventory Icons
    var appleIcon = (new lime.Sprite).setPosition(-30, -11).setFill("images/" + a.crops[8].harvest).setSize(30, 30);
    storageMenuO.appendChild(appleIcon);
    var pearIcon = (new lime.Sprite).setPosition(30, -11).setFill("images/" + a.crops[9].harvest).setSize(30, 30);
    storageMenuO.appendChild(pearIcon);

    var gLabel8 = (new lime.Label).setPosition(-30, 12).setSize(26, 12).setText(player.cropsStored[8].stored).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(18);
    storageMenuO.appendChild(gLabel8);
    var gLabel9 = (new lime.Label).setPosition(30, 12).setSize(26, 12).setText(player.cropsStored[9].stored).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(18);
    storageMenuO.appendChild(gLabel9);

    var dayLabelO = (new lime.Label).setFontSize(10).setPosition(-45, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Day " + dayCount).setFontColor("#ffffff").setFontFamily("Comic Sans MS").setFontSize(14);
    storageMenuO.appendChild(dayLabelO);
    var yearLabelO = (new lime.Label).setFontSize(10).setPosition(45, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Year " + yearCount).setFontColor("#ffffff").setFontFamily("Comic Sans MS").setFontSize(14);
    storageMenuO.appendChild(yearLabelO);
    storageMenuO.setHidden(true);
    var storageToggleO = 0;

    goog.events.listen(storageIconO, ["mousedown", "touchstart"], function () {
        if (storageToggleO == 0) { storageMenuO.setHidden(false); storageToggleO = 1 }
        else { storageMenuO.setHidden(true); storageToggleO = 0 }
    });



    var roadLeftO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 448).setSize(15, 15)
    orchardLayer.appendChild(roadLeftO)
    var toolCountImgO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 7).setSize(35, 35).setFill("images/UI/toolsIcon2.png");
    var toolCountO = (new lime.Label).setText(player.tools).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(65, 24).setFontSize(18);
    orchardLayer.appendChild(toolCountImgO);
    orchardLayer.appendChild(toolCountO);
    /// orchard girl anim
    var orchardGirl = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(44, 230).setSize(25, 26).setFill("images/Orchard/girlF1.png");
    orchardLayer.appendChild(orchardGirl);
    var girlMove = 1;
    a.moveGirl = function () {
        girlMove = girlMove + 1;
        if (girlMove > 53) { girlMove = 1 };
        if (girlMove == 2) { orchardGirl.setPosition(44, 235); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 3) { orchardGirl.setPosition(44, 240); orchardGirl.setFill("images/Orchard/girlF3.png"); }
        if (girlMove == 4) { orchardGirl.setPosition(44, 245); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 5) { orchardGirl.setPosition(44, 250); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 6) { orchardGirl.setPosition(44, 255); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 7) { orchardGirl.setPosition(44, 260); orchardGirl.setFill("images/Orchard/girlF3.png"); }
        if (girlMove == 8) { orchardGirl.setPosition(44, 265); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 9) { orchardGirl.setPosition(44, 270); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 10) { orchardGirl.setPosition(44, 275); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 11) { orchardGirl.setPosition(44, 280); orchardGirl.setFill("images/Orchard/girlF3.png"); }
        if (girlMove == 12) { orchardGirl.setPosition(44, 285); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 13) { orchardGirl.setPosition(44, 290); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 14) { orchardGirl.setPosition(44, 295); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 15) { orchardGirl.setPosition(44, 300); orchardGirl.setFill("images/Orchard/girlF3.png"); }
        if (girlMove == 16) { orchardGirl.setPosition(44, 305); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 17) { orchardGirl.setPosition(44, 310); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 18) { orchardGirl.setPosition(44, 315); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 19) { orchardGirl.setPosition(44, 320); orchardGirl.setFill("images/Orchard/girlF3.png"); }
        if (girlMove == 20) { orchardGirl.setPosition(44, 325); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 21) { orchardGirl.setPosition(44, 330); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 22) { orchardGirl.setPosition(44, 335); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 23) { orchardGirl.setPosition(44, 340); orchardGirl.setFill("images/Orchard/girlF3.png"); }
        if (girlMove == 24) { orchardGirl.setPosition(44, 345); orchardGirl.setFill("images/Orchard/girlF2.png"); }
        if (girlMove == 25) { orchardGirl.setPosition(44, 350); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 26) { orchardGirl.setPosition(44, 350); orchardGirl.setFill("images/Orchard/girlL1.png"); }
        if (girlMove == 27) { orchardGirl.setPosition(44, 350); orchardGirl.setFill("images/Orchard/girlF1.png"); }
        if (girlMove == 28) { orchardGirl.setPosition(44, 350); orchardGirl.setFill("images/Orchard/girlR1.png"); }
        if (girlMove == 29) { orchardGirl.setPosition(44, 345); orchardGirl.setFill("images/Orchard/girlUp1.png"); }
        if (girlMove == 30) { orchardGirl.setPosition(44, 345); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 31) { orchardGirl.setPosition(44, 340); orchardGirl.setFill("images/Orchard/girlUp3.png"); }
        if (girlMove == 32) { orchardGirl.setPosition(44, 335); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 33) { orchardGirl.setPosition(44, 330); orchardGirl.setFill("images/Orchard/girlUp1.png"); }
        if (girlMove == 34) { orchardGirl.setPosition(44, 325); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 35) { orchardGirl.setPosition(44, 320); orchardGirl.setFill("images/Orchard/girlUp3.png"); }
        if (girlMove == 36) { orchardGirl.setPosition(44, 315); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 37) { orchardGirl.setPosition(44, 310); orchardGirl.setFill("images/Orchard/girlUp1.png"); }
        if (girlMove == 38) { orchardGirl.setPosition(44, 305); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 39) { orchardGirl.setPosition(44, 300); orchardGirl.setFill("images/Orchard/girlUp3.png"); }
        if (girlMove == 40) { orchardGirl.setPosition(44, 295); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 41) { orchardGirl.setPosition(44, 290); orchardGirl.setFill("images/Orchard/girlUp3.png"); }
        if (girlMove == 42) { orchardGirl.setPosition(44, 285); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 43) { orchardGirl.setPosition(44, 280); orchardGirl.setFill("images/Orchard/girlUp1.png"); }
        if (girlMove == 44) { orchardGirl.setPosition(44, 275); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 45) { orchardGirl.setPosition(44, 270); orchardGirl.setFill("images/Orchard/girlUp3.png"); }
        if (girlMove == 46) { orchardGirl.setPosition(44, 265); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 47) { orchardGirl.setPosition(44, 260); orchardGirl.setFill("images/Orchard/girlUp1.png"); }
        if (girlMove == 48) { orchardGirl.setPosition(44, 255); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 49) { orchardGirl.setPosition(44, 250); orchardGirl.setFill("images/Orchard/girlUp3.png"); }

        if (girlMove == 50) { orchardGirl.setPosition(44, 245); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 51) { orchardGirl.setPosition(44, 240); orchardGirl.setFill("images/Orchard/girlUp1.png"); }
        if (girlMove == 52) { orchardGirl.setPosition(44, 235); orchardGirl.setFill("images/Orchard/girlUp2.png"); }
        if (girlMove == 53) { orchardGirl.setPosition(44, 230); orchardGirl.setFill("images/Orchard/girlR1.png"); }
    };
    lime.scheduleManager.scheduleWithDelay(function () {
        a.moveGirl();
    }, this, 300)

    ///here
    //orchard btns
    roadLeftO =
        //(new lime.GlossyButton).setColor("#8b008b").setText("< Home").setPosition(42, 448).setSize(80, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 422).setSize(45, 45).setFill("images/UI/homeButton.png");
    orchardLayer.appendChild(roadLeftO)
    roadRightO =
        //(new lime.GlossyButton).setColor("#8b008b").setText("StockPens >").setPosition(255, 448).setSize(90, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(267, 422).setSize(45, 45).setFill("images/UI/lsBtn.png");
    orchardLayer.appendChild(roadRightO)

    //Orchard scene clouds 

    var cloudsO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-500, -30).setSize(a.width, 600).setFill("images/clouds.png").setOpacity(0.5);
    orchardLayer.appendChild(cloudsO);
    //cloud anim
    var cloudAnimO = 0
    lime.scheduleManager.scheduleWithDelay(function () {
        cloudAnimO = cloudAnimO + 2;
        cloudsO.setPosition(cloudAnimO, -30);
        if (cloudAnimO > a.width + 200) { cloudAnimO = -400 }
    }, this, 150)
    //end clouds orchard
    var gO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, a.height - a.controlsLayer_h - 5).setSize(a.controlsLayer_w, a.controlsLayer_h + 5).setFill("images/UI/blackButton.png");
    orchardLayer.appendChild(gO);
    var compassO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(128, 449).setSize(35, 35).setFill("images/UI/compass22.png"); orchardLayer.appendChild(compassO)

    /// compass nav Orchard
    var compassOBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 100).setSize(250, 250).setFill("images/UI/compass3.png"); orchardLayer.appendChild(compassOBack)
    var orchardNavO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 35).setSize(50, 50).setFill("images/UI/orchardBtn.png"); compassOBack.appendChild(orchardNavO)
    var lsNavO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 170).setSize(50, 50).setFill("images/UI/lsBtn.png"); compassOBack.appendChild(lsNavO)
    var vinyardNavO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 35).setSize(50, 50).setFill("images/UI/vinyardBtn.png"); compassOBack.appendChild(vinyardNavO)
    var homeNavO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(96, 100).setSize(60, 60).setFill("images/UI/homeButton.png"); compassOBack.appendChild(homeNavO)
    var pastureNavO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 170).setSize(50, 50).setFill("images/UI/pastureBtn.png"); compassOBack.appendChild(pastureNavO)
    var closeNavO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 222).setSize(50, 50).setFill("images/UI/XButton.png"); compassOBack.appendChild(closeNavO)
    compassOBack.setHidden(true);


    goog.events.listen(compassO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            checkAcresNav(); orchardBlock.setHidden(true);
            globalModalBlock = 1;
        }
    });
    goog.events.listen(closeNavO, ["mousedown", "touchstart"], function () { closeAcresNav(); });
    goog.events.listen(homeNavO, ["mousedown", "touchstart"], function () {
        if (compassVisible) {
            b.currentCrop = homeCrop;
            if (b.currentCrop > 5) { b.currentCrop = 0; }
            closeAcresNav();

            a.sceneBefore = 1;
            waterfallSound.stop();

            c.replaceScene(d, lime.transitions.SlideInLeft);
        }
    });
    goog.events.listen(pastureNavO, ["mousedown", "touchstart"], function () {
        if (acres[1].owned == 1 && compassVisible) {
            a.sceneBefore = 2;
            waterfallSound.stop();
            closeAcresNav();
            cowSound.play(); checkShortage();
            oldCrop = b.currentCrop; b.currentCrop = 6;
            c.replaceScene(pastureScene, lime.transitions.SlideInLeft);
        }
    });
    goog.events.listen(orchardNavO, ["mousedown", "touchstart"], function () {
        if (acres[2].owned == 1) {
            closeAcresNav();
        }
    });
    goog.events.listen(vinyardNavO, ["mousedown", "touchstart"], function () {
        if (acres[3].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 4;
            c.replaceScene(vinyardScene, lime.transitions.SlideInLeft);
            waterfallSound.stop();
            oldCrop = b.currentCrop; b.currentCrop = 12;
            checkShortage();
            //a.sceneBefore = 5;
        }
    });
    goog.events.listen(lsNavO, ["mousedown", "touchstart"], function () {
        if (acres[4].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 5;
            oldCrop = b.currentCrop; b.currentCrop = 12;
            c.replaceScene(liveStockScene, lime.transitions.SlideInRight);
            waterfallSound.stop();
            chickenSound.play();
            pig1Sound.play();
            setTimeout(function () { pig2Sound.play(); }, 5000);
            checkShortage();
        }
    });
    ///end compass Orchard
    //backgroud of bottom ment on orchard


    //MUTE From Orchard
    var muteBtnO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 503).setSize(35, 35).setFill(imgArray[15]); orchardLayer.appendChild(muteBtnO);
    var achieveBtnO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 467).setSize(35, 35).setFill("images/UI/trophyBtn.png"); orchardLayer.appendChild(achieveBtnO);
    goog.events.listen(muteBtnO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isMuted = lime.audio.getMute();
            if (isMuted) {
                lime.audio.setMute(false); themeSong.play(true);
                waterfallSound.play(true);
                muteBtnO.setFill(imgArray[15]);
                setMute(2);
                localStorage.setItem('GuiGhostFarms_muted', 0);
                  
                } else { lime.audio.setMute(true); setMute(1); localStorage.setItem('GuiGhostFarms_muted', 1) }
        }
    });
    goog.events.listen(achieveBtnO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 3;
            achieve(sceneBefore);
        }
    });

    var hhO = b.currentCrop;

    if (orchardTreeBlock == 2) { orchardText = "Tending Pears and Apples" };
    var wO = (new lime.Label).setText(orchardText).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(a.controlsLayer_w / 2 - 15, a.height - a.controlsLayer_h / 2 - 12);
    orchardLayer.appendChild(wO);
    var zO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (35), a.height - a.controlsLayer_h / 2 - 5).setFill("images/" + a.crops[8].harvest).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
    orchardLayer.appendChild(zO);

    var harvest3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (15), a.height / 2).setFill("images/" + a.crops[8].harvest).setSize(26, 21);
    orchardLayer.appendChild(harvest3);
    harvest3.setHidden(true);


    var menuO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 467).setSize(35, 35).setFill("images/UI/gearButton.png");
    orchardLayer.appendChild(menuO);
    var fbBtnO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 503).setSize(35, 35).setFill("images/UI/starButton.png");
    orchardLayer.appendChild(fbBtnO);

    /// Star Menu
    goog.events.listen(fbBtnO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            shareFacebook();

        }
    });


    ////Orchard market entrance
    ///market control
    var marketO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(214, a.height - a.controlsLayer_h - 4).setSize(90, 65).setFill("images/" + a.barnyard[3].image);
    orchardLayer.appendChild(marketO)

    //event handling
    goog.events.listen(menuO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 3;                                                                                                                              ///from pature to Market
            c.replaceScene(menuScene, lime.transitions.SlideInUp);
        }

    });
    var forSaleLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(268, 424).setSize(40, 40).setFill("images/UI/lsBtn.png");
    orchardLayer.appendChild(forSaleLS);
    ///orchard blocker
    var orchardBlock = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#ffffff").setOpacity(0.75);
    orchardLayer.appendChild(orchardBlock);
    //goog.events.listen(orchardBlock, ["mousedown", "touchstart"], function () {
    //    break;
    //});
    orchardBlock.setHidden(true);



    var unlockedCropBackO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 150).setSize(250, 250).setFill("images/UI/blankBack2.png");
    orchardLayer.appendChild(unlockedCropBackO);
    var unlockedCropTextO = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(10, 105).setSize(230, 60).setFontSize(18).setText("You found some Pear Trees!");
    unlockedCropBackO.appendChild(unlockedCropTextO);
    var unlockedCropImageO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 130).setSize(70, 70).setFill("images/" + a.crops[9].harvest);
    unlockedCropBackO.appendChild(unlockedCropImageO);
    var unlockedCropText2O = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(50, 210).setSize(150, 50).setFontSize(18).setText("Pears");
    unlockedCropBackO.appendChild(unlockedCropText2O);
    unlockedCropBackO.setHidden(true);





    //var actionsO = (new lime.GlossyButton).setColor("#663300").setText("Actions").setPosition(35, 485).setSize(70, 25);
    //orchardLayer.appendChild(actionsO);

    ///For Sale confirm modal

    var confirmSaleLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 150).setSize(210, 220).setFill("images/UI/saleBack.png");
    orchardLayer.appendChild(confirmSaleLS);
    var confirmTextLS = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#000000").setFontFamily("Comic Sans MS").setPosition(50, 145).setSize(115, 60).setFontSize(22).setText("StockPens  10,000");
    confirmSaleLS.appendChild(confirmTextLS);
    var confirmCoinLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(48, 165).setSize(30, 30).setFill(imgArray11[0]);
    confirmSaleLS.appendChild(confirmCoinLS);
    var confirmTextSubLS = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#FF0000").setFontFamily("Comic Sans MS").setPosition(55, 195).setSize(110, 60).setFontSize(10).setText("Earn more $ to buy");
    confirmSaleLS.appendChild(confirmTextSubLS);
    var confirmBtnLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 212).setSize(75, 35).setFill("images/UI/greenBuy.png");
    confirmSaleLS.appendChild(confirmBtnLS);
    var cancelBtnLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    confirmSaleLS.appendChild(cancelBtnLS);
    confirmSaleLS.setHidden(true);

    goog.events.listen(forSaleLS, ["mousedown", "touchstart"], function () {            //for sale vinyard
        if (globalModalBlock == 0) {
            fsClicked = 4;
            globalModalBlock = 1;
            orchardBlock.setHidden(false); confirmSaleLS.setHidden(false);
            if (player.money >= 10000) { confirmTextSubLS.setHidden(true); confirmBtnLS.setHidden(false); } else { confirmBtnLS.setHidden(true); };
            confirmTextLS.setText("StockPens  10,000");
        }
    });

    goog.events.listen(confirmBtnLS, ["mousedown", "touchstart"], function () {            //for sale confirm
        globalModalBlock = 0;

        player.money = player.money - 10000;
        a.updateMoney();
        acres[4].owned = 1;
        localStorage.setItem('GuiGhostFarms_acres', JSON.stringify(acres));
        confirmSaleLS.setHidden(true);
        roadRightO.setHidden(false); forSaleLS.setHidden(true); confirmSaleLS.setHidden(true); orchardBlock.setHidden(true);
        fsClicked = 0;
    });

    goog.events.listen(cancelBtnLS, ["mousedown", "touchstart"], function () { confirmSaleLS.setHidden(true); orchardBlock.setHidden(true); globalModalBlock = 0; });     //for sale cancel




    ////achievement Modal from Orchard
    var achieveNotifO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 130).setSize(210, 220).setFill("images/UI/achieveNotif.png");
    var achieveTextSubO = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#08fcef").setFontFamily("Comic Sans MS").setPosition(30, 35).setSize(150, 60).setFontSize(12).setText("Achieve Text");
    achieveNotifO.appendChild(achieveTextSubO);
    var achieveTextO = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(13, 160).setSize(190, 60).setFontSize(16).setText("Blacksmith I");
    achieveNotifO.appendChild(achieveTextO);
    var achieveSCO = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#301934").setFontFamily("Comic Sans MS").setPosition(21, 186).setSize(190, 60).setFontSize(18).setText(" + ");
    achieveNotifO.appendChild(achieveSCO);
    var confirmBtnAO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 211).setSize(40, 40).setFill("images/UI/checkButton.png");
    achieveNotifO.appendChild(confirmBtnAO);
    orchardLayer.appendChild(achieveNotifO);
    achieveNotifO.setHidden(true);

    goog.events.listen(confirmBtnAO, ["mousedown", "touchstart"], function () {            //for sale pasture
        achieveNotif.setHidden(true);
        achieveNotifP.setHidden(true);
        achieveNotifV.setHidden(true);
        achieveNotifO.setHidden(true);
        achieveNotifLS.setHidden(true);
        orchardBlock.setHidden(true); pastureBlock.setHidden(true);
        if (tutSeen == 1) { homeBlock.setHidden(true); lsBlock.setHidden(true); vinyardBlock.setHidden(true); }

    });



    goog.events.listen(roadRightO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 5;                                                                                                                              ///from pature to Market
            c.replaceScene(liveStockScene, lime.transitions.SlideInRight);
            waterfallSound.stop();
            chickenSound.play();
            pig1Sound.play();
            setTimeout(function () { pig2Sound.play(); }, 5000);

            checkShortage();
        }
    });


    goog.events.listen(marketO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 3;                                                                                                                                  ///from orchard to Market
            c.replaceScene(marketScene, lime.transitions.SlideInDown);
            count0.setText(player.cropsStored[0].stored);
            count1.setText(player.cropsStored[1].stored);
            count2.setText(player.cropsStored[2].stored);
            count3.setText(player.cropsStored[3].stored);
            count4.setText(player.cropsStored[4].stored);
            count5.setText(player.cropsStored[5].stored);
            count6.setText(player.cropsStored[6].stored);
            count7.setText(player.cropsStored[7].stored);
            count8.setText(player.cropsStored[8].stored);
            count9.setText(player.cropsStored[9].stored);
        }
    });


    //////Orchard Out of cash Modal
    var outOfCashO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 100).setSize(210, 220).setFill("images/UI/outOfCash.png");
    orchardLayer.appendChild(outOfCashO);
    var buyStarCashO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(122, 212).setSize(75, 35).setFill("images/UI/buyStarCash.png");
    outOfCashO.appendChild(buyStarCashO);
    var marketBtn1O = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(15, 212).setSize(75, 35).setFill("images/UI/marketBtn.png");
    outOfCashO.appendChild(marketBtn1O);
    var cancelBtnCashO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(89, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    outOfCashO.appendChild(cancelBtnCashO);
    outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
    //handle orchard out of cash clicks
    goog.events.listen(buyStarCashO, ["mousedown", "touchstart"], function () {            //starCash Button
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashP.setHidden(true); outOfCashO.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        shareFacebook();

        //c.replaceScene(menuScene, lime.transitions.SlideInUp);
        warningSeen = 1;
    });
    goog.events.listen(marketBtn1O, ["mousedown", "touchstart"], function () {            //market Button

        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        orchardBlock.setHidden(true); homeBlock.setHidden(true); vinyardBlock.setHidden(true); pastureBlock.setHidden(true); lsBlock.setHidden(true);
        c.replaceScene(marketScene, lime.transitions.SlideInDown);
        warningSeen = 1;
        globalModalBlock = 0;
    });
    goog.events.listen(cancelBtnCashO, ["mousedown", "touchstart"], function () {            //cancel Button
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        orchardBlock.setHidden(true); homeBlock.setHidden(true); vinyardBlock.setHidden(true); pastureBlock.setHidden(true); lsBlock.setHidden(true);
        warningSeen = 1;
        globalModalBlock = 0;

    });

    if (player.money < (a.crops[b.currentCrop].cost) && warningSeen == 0) {
        outOfCashV.setHidden(false); marketBtn1V.setHidden(false); buyStarCashV.setHidden(false);
        outOfCashO.setHidden(false); marketBtn1O.setHidden(false); buyStarCashO.setHidden(false);
        outOfCashP.setHidden(false); marketBtn1P.setHidden(false); buyStarCashP.setHidden(false);
        outOfCash.setHidden(false); marketBtn1.setHidden(false); buyStarCash.setHidden(false);
        orchardBlock.setHidden(false); homeBlock.setHidden(false); vinyardBlock.setHidden(false); pastureBlock.setHidden(false); lsBlock.setHidden(false);
        globalModalBlock = 1;
    }

    //////Menu Scene//////////////////////////////////////////////////////////////////////////////////////////////////Menu Scene/////////////////////////////////////////////////////////////////////
    var menuScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        menuLayer = (new lime.Layer).setAnchorPoint(0, 0),
        menuFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
    menuScene.appendChild(menuFill1);
    menuScene.appendChild(menuLayer);
    var menuBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 10).setSize(300, 520).setFill("images/UI/CoverImg2.png");
    menuLayer.appendChild(menuBack);
    var saveQuit = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(150, 175).setSize(a.width / 2 + 40, 50).setFill("#663300");
    saveQuit = (new lime.GlossyButton).setColor("#4dff4d").setText("Save & Quit").setPosition(150, 175).setSize(a.width / 2 + 40, 50);
    menuLayer.appendChild(saveQuit);

    //var convertStarCash = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 325).setSize(a.width / 2 + 40, 50).setFill("#663300");
    //convertStarCash = (new lime.GlossyButton).setColor("#6600ff").setText("$500 for 5 StarCash").setPosition(150, 325).setSize(a.width / 2 + 50, 50);
    //menuLayer.appendChild(convertStarCash);

    var clearData = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 250).setSize(a.width / 2 + 40, 50).setFill("#663300");
    clearData = (new lime.GlossyButton).setColor("#ff0000").setText("Clear Data (start over)").setPosition(150, 250).setSize(a.width / 2 + 40, 50);
    menuLayer.appendChild(clearData);

    var backBtnMenu = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 400).setSize(a.width / 2 + 40, 50).setFill("#663300");
    backBtnMenu = (new lime.GlossyButton).setColor("#1ce636").setText("Back to Game").setPosition(150, 400).setSize(a.width / 2 + 40, 50);
    menuLayer.appendChild(backBtnMenu);
    //var successDiv = (new lime.Label).setText("+500 = $" + player.money).setFontColor("#E8FC08").setPosition(150, 125).setFontSize(30);
    //menuLayer.appendChild(successDiv);
    //successDiv.setHidden(true);

    //event handling
    goog.events.listen(menu, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) { c.replaceScene(menuScene, lime.transitions.SlideInUp); a.sceneBefore = 1; }
    });  ////menu btn

    goog.events.listen(roadRight, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(orchardScene, lime.transitions.SlideInRight); sceneBefore = 3; waterfallSound.play(true); homeCrop = b.currentCrop; oldCrop = b.currentCrop; b.currentCrop = 8;
        }
    });
    goog.events.listen(roadLeftO, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(d, lime.transitions.SlideInLeft); sceneBefore = 1; waterfallSound.stop(); b.currentCrop = homeCrop;
        }
    });

    //save & Quit
    goog.events.listen(saveQuit, ["mousedown", "touchstart"], function () {

        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
        localStorage.setItem('GuiGhostFarms_dayCount', dayCount);
        localStorage.setItem('GuiGhostFarms_yearCount', yearCount);
        localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
        localStorage.setItem('GuiGhostFarms_pickedEver', pickedEver);
        localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);
        // window.open("../", "_self");
        c.replaceScene(introScene, lime.transitions.SlideInUp)
        lime.audio.setMute(true);


    });

    //clear data
    goog.events.listen(clearData, ["mousedown", "touchstart"], function () {
        player.barnLevel = 1;
        player.pastureLevel = 1;
        player.treesP = 0;
        player.tools = 50;
        player.fields = 1;
        player.money = 500;
        player.cropsStored[0].stored = 0;
        player.cropsStored[1].stored = 0;
        player.cropsStored[2].stored = 0;
        player.cropsStored[3].stored = 0;
        player.cropsStored[4].stored = 0;
        player.cropsStored[5].stored = 0;
        player.cropsStored[6].stored = 0;
        player.cropsStored[7].stored = 0;
        player.cropsStored[8].stored = 0;
        player.cropsStored[9].stored = 0;
        player.cropsStored[10].stored = 0;
        player.cropsStored[11].stored = 0;
        player.cropsStored[12].stored = 0;
        player.cropsStored[13].stored = 0;

        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
        dayCount = 1;
        yearCount = 1;
        toolsEver = 0; moneyEver = 0; pickedEver = 0;
        a.achievements[1] == false; a.achievements[2] == false; a.achievements[3] == false; a.achievements[4] == false; a.achievements[5] == false;
        a.achievements[6] == false; a.achievements[7] == false; a.achievements[8] == false; a.achievements[9] == false; a.achievements[10] == false;
        a.achievements[11] == false; a.achievements[12] == false; a.achievements[13] == false; a.achievements[14] == false; a.achievements[15] == false; a.achievements[16] == false;

        localStorage.setItem('GuiGhostFarms_achievements', JSON.stringify(a.achievements));
        localStorage.setItem('GuiGhostFarms_achievements', JSON.stringify(a.achievements));
        localStorage.setItem('GuiGhostFarms_moneyEver', 0);
        localStorage.setItem('GuiGhostFarms_pickedEver', 0);
        localStorage.setItem('GuiGhostFarms_dayCount', 0);
        localStorage.setItem('GuiGhostFarms_yearCount', 1);
        localStorage.setItem('GuiGhostFarms_toolsEver', 0);
        localStorage.setItem('GuiGhostFarms_boughtStarCash', false);
        localStorage.removeItem('GuiGhostFarms_player');
        localStorage.removeItem('GuiGhostFarms_vinyardBlocks');
        localStorage.removeItem('GuiGhostFarms_vinyardBlocks2');
        localStorage.removeItem('GuiGhostFarms_vinyardHouseLevel');
        localStorage.removeItem('GuiGhostFarms_orchardTreeBlock');
        localStorage.removeItem('GuiGhostFarms_dayCount');
        localStorage.removeItem('GuiGhostFarms_yearCount');
        localStorage.removeItem('GuiGhostFarms_toolsEver');
        localStorage.removeItem('GuiGhostFarms_pickedEver');
        localStorage.removeItem('GuiGhostFarms_moneyEver');
        localStorage.removeItem('GuiGhostFarms_achievements');
        localStorage.removeItem('GuiGhostFarms_acres');
        localStorage.removeItem('GuiGhostFarms_boughtStarCash');
        localStorage.removeItem('GuiGhostFarms_coopLevel');
        localStorage.removeItem('GuiGhostFarms_tutSeen');
        localStorage.removeItem('GuiGhostFarms_houseUpgrades');
        localStorage.removeItem('landStates');
        setTimeout(function () { location.reload(); }, 750);

    });
    //star cash convert
    //goog.events.listen(convertStarCash, ["mousedown", "touchstart"], function () {

    //    if (starCash > 5) {
    //        boughtStarCash = true;
    //        player.money += 500; a.updateMoney(); localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
    //        starCash = starCash - 5;
    //        localStorage.setItem('starCash', starCash);
    //        successDiv.setHidden(false);
    //        successDiv.setText("+500 = $" + player.money);
    //    }
    //});


    //menu Back Btn
    goog.events.listen(backBtnMenu, ["mousedown", "touchstart"], function () {
        if (parseInt(a.sceneBefore) == 1) {
            c.replaceScene(d, lime.transitions.SlideInDown);

        }
        if (a.sceneBefore == 2) {
            c.replaceScene(pastureScene, lime.transitions.SlideInDown);
        }
        if (a.sceneBefore == 3) {
            c.replaceScene(orchardScene, lime.transitions.SlideInDown);
        }
        if (a.sceneBefore == 4) {
            c.replaceScene(vinyardScene, lime.transitions.SlideInDown); checkShortage();
        }
        if (a.sceneBefore == 5) {
            c.replaceScene(liveStockScene, lime.transitions.SlideInDown); chickenSound.play();
            pig1Sound.play();
            setTimeout(function () { pig2Sound.play(); }, 1000);
            setTimeout(function () { pig3Sound.play(); }, 2000);
        }




    });

    ////// Handle the external modal for starcash clicks 
    ///// buyWithStarCash Money
    document.getElementById("buyWithStarCash").addEventListener("touchstart", function () {
        if (starCash >= 5) {
            boughtStarCash = true;
            player.money += 500; a.updateMoney(); localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            starCash = starCash - 5;
            localStorage.setItem('starCash', starCash);
            document.getElementById("starCashOuterLabel").innerHTML = starCash;
            document.getElementById("sucessbuyTxt").innerHTML = '+ 500 Coins';
            document.getElementById("sucessbuyTxt").style.display = 'block';
            setTimeout(function () { document.getElementById("sucessbuyTxt").style.display = 'none'; }, 1000);


        }
    }, false);

    document.getElementById("buyWithStarCash").addEventListener("click", function () {
        if (starCash >= 5) {
            boughtStarCash = true;
            player.money += 500; a.updateMoney(); localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            starCash = starCash - 5;
            localStorage.setItem('starCash', starCash);
            document.getElementById("starCashOuterLabel").innerHTML = starCash;
            document.getElementById("sucessbuyTxt").innerHTML = '+ 500 Coins';
            document.getElementById("sucessbuyTxt").style.display = 'block';
            setTimeout(function () { document.getElementById("sucessbuyTxt").style.display = 'none'; }, 750);
        }
    }, false);

    ///// buyWithStarCashTools
    document.getElementById("buyWithStarCashTools").addEventListener("touchstart", function () {
        if (starCash >= 10) {

            player.tools += 500; localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            starCash = starCash - 10;
            a.updateTools();
            localStorage.setItem('starCash', starCash);
            document.getElementById("starCashOuterLabel").innerHTML = starCash;
            document.getElementById("sucessbuyTxt").innerHTML = '+ 500 Tools';
            document.getElementById("sucessbuyTxt").style.display = 'block';
            setTimeout(function () { document.getElementById("sucessbuyTxt").style.display = 'none'; }, 1000);


        }
    }, false);

    document.getElementById("buyWithStarCashTools").addEventListener("click", function () {
        if (starCash >= 10) {

            player.tools += 500; localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            starCash = starCash - 10;
            a.updateTools();
            localStorage.setItem('starCash', starCash);
            document.getElementById("starCashOuterLabel").innerHTML = starCash;
            document.getElementById("sucessbuyTxt").innerHTML = '+ 500 Tools';
            document.getElementById("sucessbuyTxt").style.display = 'block';
            setTimeout(function () { document.getElementById("sucessbuyTxt").style.display = 'none'; }, 1000);


        }
    }, false);



    document.getElementById("closeFB").addEventListener("touchstart", function () {

        document.getElementById("fbshare").style.display = 'none';
        homeBlock.setHidden(true); pastureBlock.setHidden(true); orchardBlock.setHidden(true); lsBlock.setHidden(true); vinyardBlock.setHidden(true);
        globalModalBlock = 0;
    }, false);
    document.getElementById("closeFB").addEventListener("click", function () {

        document.getElementById("fbshare").style.display = 'none';
        homeBlock.setHidden(true); pastureBlock.setHidden(true); orchardBlock.setHidden(true); lsBlock.setHidden(true); vinyardBlock.setHidden(true);
        globalModalBlock = 0;
    }, false);
    ///Market Scene/////////////////////////////////////////Market Scene///Market Scene/////////////////////////////////////////Market Scene///Market Scene/////////////////////////////////////////Market Scene

    var marketScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        marketLayer = (new lime.Layer).setAnchorPoint(0, 0),
        marketFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("images/UI/greenButtonVert.png");
    marketScene.appendChild(marketFill1);
    marketScene.appendChild(marketLayer);
    var menuBackMarket = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 12).setSize(300, a.height - 48).setFill("images/UI/farmersMarket.png");
    marketLayer.appendChild(menuBackMarket);
    var backBtnMarket = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 2 - 25, 485).setSize(50, 50).setFill("images/UI/XButton.png");
    marketLayer.appendChild(backBtnMarket);

    var menuCashCoin = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w - 109, 65).setSize(25, 25).setFill(imgArray11[0]);
    marketLayer.appendChild(menuCashCoin);
    var marketCash = (new lime.Label).setText(player.money).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(a.controlsLayer_w - 62, 80).setFontSize(18);
    marketLayer.appendChild(marketCash);

    // market Tiles
    var marketX = 88, marketY = 135, colXoff = 72, rowYoff = 50, index = 0;
    //row 1
    var rowBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(marketX, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack);
    count0 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count0);
    g0 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(117, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //tomatoes
    marketLayer.appendChild(g0);
    i0 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i0);
    g0I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);     //tomatoes
    marketLayer.appendChild(g0I);

    index = 1;
    var rowBack2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack2);
    count1 = (new lime.Label).setText(player.cropsStored[1].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count1);
    g1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(192, marketY).setFill("images/" + a.crops[1].harvest).setSize(30, 30);      //carrots
    marketLayer.appendChild(g1);
    i1 = (new lime.Label).setText(" +" + a.crops[1].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(195, marketY + 36);
    marketLayer.appendChild(i1);
    i0I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i0I);

    //row2
    marketY = marketY + (rowYoff); index = 2;
    var rowBack3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack3);
    count2 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count2);
    g3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(118, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //artichokes
    marketLayer.appendChild(g3);
    i3 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i3);
    i3I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i3I);


    index = 3;
    var rowBack4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack4);
    count3 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count3);
    g4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(195, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //eggplants
    marketLayer.appendChild(g4);
    i4 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(193, marketY + 36);
    marketLayer.appendChild(i4);
    i4I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i4I);



    //row3
    marketY = marketY + (rowYoff); index = 4;
    var rowBack5 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack5);
    count4 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count4);
    g5 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(118, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //peppers
    marketLayer.appendChild(g5);
    i5 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i5);
    i5I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i5I);

    index = 5;
    var rowBack6 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack6);
    count5 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count5);
    g6 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(195, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //corn
    marketLayer.appendChild(g6);
    i6 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(195, marketY + 36);
    marketLayer.appendChild(i6);
    i6I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i6I);

    //row4
    marketY = marketY + (rowYoff); index = 6;
    var rowBack7 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack7);
    count6 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count6);
    g7 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //hay
    marketLayer.appendChild(g7);
    i7 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i7);
    i7I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);      //tomatoes
    marketLayer.appendChild(i7I);


    index = 7;
    var rowBack8 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack8);
    count7 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count7);
    g8 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(192, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //milk
    marketLayer.appendChild(g8);
    i8 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(195, marketY + 36);
    marketLayer.appendChild(i8);
    i8I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i8I);
    //row5
    marketY = marketY + (rowYoff); index = 8;
    var rowBack9 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack9);
    count8 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count8);
    g9 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //apples
    marketLayer.appendChild(g9);
    i9 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i9);
    i9I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);    //tomatoes
    marketLayer.appendChild(i9I);

    index = 9;
    var rowBack10 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack10);
    count9 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count9);
    g10 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(195, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //pears
    marketLayer.appendChild(g10);
    i10 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(195, marketY + 38);
    marketLayer.appendChild(i10);
    i10I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i10I);
    //row6-- livestock crops
    index = 10;
    marketY = marketY + (rowYoff); index = 10;
    var rowBack11 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack11);

    count10 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count10);
    g11 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //hams
    marketLayer.appendChild(g11);
    i11 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i11);
    i11I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i11I);

    index = 11;
    var rowBack12 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack12);

    count11 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count11);
    g12 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(195, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //eggs
    marketLayer.appendChild(g12);
    i12 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(195, marketY + 36);
    marketLayer.appendChild(i12);
    i12I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i12I);


    //row7-- vinyard crops
    marketY = marketY + (rowYoff); index = 12;
    var rowBack13 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack13);

    count12 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(105, marketY + 15);
    marketLayer.appendChild(count12);
    g13 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, marketY).setFill("images/" + a.crops[index].harvest).setSize(25, 30);      //grapes
    marketLayer.appendChild(g13);
    i13 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(125, marketY + 36);
    marketLayer.appendChild(i13);
    i13I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(99, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i13I);


    index = 13;
    var rowBack14 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(160, marketY).setSize(64, 44).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack14);

    count13 = (new lime.Label).setText(player.cropsStored[index].stored).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(180, marketY + 15);
    marketLayer.appendChild(count13);
    g14 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(195, marketY).setFill("images/" + a.crops[index].harvest).setSize(30, 30);      //jelly
    marketLayer.appendChild(g14);
    i14 = (new lime.Label).setText(" +" + a.crops[index].revenue).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(195, marketY + 36);
    marketLayer.appendChild(i14);
    i14I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(169, marketY + 25).setFill(imgArray11[0]).setSize(18, 18);
    marketLayer.appendChild(i14I);

    //Selling Tools tile
    var rowBack15 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(230, 240).setSize(54, 70).setFill("images/UI/woodBtn.png");
    marketLayer.appendChild(rowBack15);

    count14 = (new lime.Label).setText(player.tools).setFontSize(16).setFontColor("#1aff1a").setFontFamily("Comic Sans MS").setPosition(258, 255);
    marketLayer.appendChild(count14);
    g15 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(240, 260).setFill("images/UI/toolsIcon2.png").setSize(30, 30);      //tools
    marketLayer.appendChild(g15);
    i15 = (new lime.Label).setText("+5").setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(12).setPosition(265, 303);
    marketLayer.appendChild(i15);
    i15I = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(235, 290).setFill(imgArray11[0]).setSize(20, 20);
    marketLayer.appendChild(i15I);





    //how much to sell modal
    var cropSaleTotal = 0;
    var cropSaleCurrent = 0;
    var cropSaleCrop = 0;
    var cropSaleCurrentPrice = 0;
    var howManyBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("images/UI/blocker.png");
    marketLayer.appendChild(howManyBack);
    var howMany = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 150).setSize(250, 250).setFill("images/UI/blankBack2.png");
    howManyBack.appendChild(howMany);
    var howManyLabel1 = (new lime.Label).setText("$ Sell Crop $").setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(26).setPosition(125, 90);
    howMany.appendChild(howManyLabel1);
    var howManyLabel2 = (new lime.Label).setText(cropSaleCurrent + "/" + cropSaleTotal).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(22).setPosition(55, 170);
    howMany.appendChild(howManyLabel2);
    var howManyLabel3 = (new lime.Label).setText(" $0 ").setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(22).setPosition(190, 170);
    howMany.appendChild(howManyLabel3);
    var howManyLabel4 = (new lime.Label).setText("Sell For").setFontColor("#ffffff").setFontFamily("Comic Sans MS").setFontSize(18).setPosition(190, 140);
    howMany.appendChild(howManyLabel4);
    var howManyLabel5 = (new lime.Label).setText("Stock").setFontColor("#ffffff").setFontFamily("Comic Sans MS").setFontSize(18).setPosition(55, 140);
    howMany.appendChild(howManyLabel5);
    var howManyImg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(105, 120).setFill("images/" + a.crops[index].harvest).setSize(40, 40);      //carrots
    howMany.appendChild(howManyImg);
    var howManySellBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(65, 195).setFill("images/UI/sellBtn.png").setSize(120, 40);      //carrots
    howMany.appendChild(howManySellBtn);
    var howManyDownBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(20, 195).setFill("images/UI/downBtn.png").setSize(40, 40);      //carrots
    howMany.appendChild(howManyDownBtn);
    var howManyUpBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(188, 195).setFill("images/UI/upBtn.png").setSize(40, 40);      //carrots
    howMany.appendChild(howManyUpBtn);
    var howManyCloseBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(95, 240).setFill("images/UI/XButton.png").setSize(60, 60);      //carrots
    howMany.appendChild(howManyCloseBtn);
    howManyBack.setHidden(true);

    // goog.events.listen(howManyBack, ["mousedown", "touchstart"], function () {
    //     return;
    //});
    goog.events.listen(howManyCloseBtn, ["mousedown", "touchstart"], function () {
        howManyBack.setHidden(true);

    });
    goog.events.listen(howManyUpBtn, ["mousedown", "touchstart"], function () {

        a.cropUp(cropSaleCrop);
    });
    goog.events.listen(howManyDownBtn, ["mousedown", "touchstart"], function () {

        a.cropDown(cropSaleCrop);
    });
    //goog.events.listen(howManySellBtn, ["mousedown", "touchstart"], function () {
    //    a.finalSale(cropSaleCrop);
    //});


    //count0 = (new lime.Label).setText(player.cropsStored[0].stored).setFontSize(16).setFontColor("#1aff1a").setPosition(100, 135);
    //marketLayer.appendChild(count0);
    //g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(115, 120).setFill("images/" + a.crops[0].harvest).setSize(30, 30);
    //marketLayer.appendChild(g);
    //i = (new lime.Label).setText("Sell $" + a.crops[0].revenue + " ").setFontColor("#E8FC08").setFontSize(12).setPosition(120, 155);
    //marketLayer.appendChild(i);


    //Market event listeners
    goog.events.listen(backBtnMarket, ["mousedown", "touchstart"], function () {
        checkAchieves2();
        if (parseInt(a.sceneBefore) == 1) {
            c.replaceScene(d, lime.transitions.SlideInUp);

        }
        if (a.sceneBefore == 2) {
            c.replaceScene(pastureScene, lime.transitions.SlideInUp);
        }
        if (a.sceneBefore == 3) {
            c.replaceScene(orchardScene, lime.transitions.SlideInUp);
        }
        if (a.sceneBefore == 4) {
            c.replaceScene(vinyardScene, lime.transitions.SlideInUp);
        }
        if (a.sceneBefore == 5) {
            c.replaceScene(liveStockScene, lime.transitions.SlideInUp); chickenSound.play();
            pig1Sound.play();

        }
        if (a.sceneBefore == 7) {
            c.replaceScene(houseScene, lime.transitions.SlideInUp);
        }
    });
    var payVis = false;

    goog.events.listen(rowBack, ["mousedown", "touchstart"], function () { a.updateCropsandCash(0); });
    goog.events.listen(rowBack2, ["mousedown", "touchstart"], function () { a.updateCropsandCash(1); });
    goog.events.listen(rowBack3, ["mousedown", "touchstart"], function () { a.updateCropsandCash(2); });
    goog.events.listen(rowBack4, ["mousedown", "touchstart"], function () { a.updateCropsandCash(3); });
    goog.events.listen(rowBack5, ["mousedown", "touchstart"], function () { a.updateCropsandCash(4); });
    goog.events.listen(rowBack6, ["mousedown", "touchstart"], function () { a.updateCropsandCash(5); });
    goog.events.listen(rowBack7, ["mousedown", "touchstart"], function () { a.updateCropsandCash(6); });
    goog.events.listen(rowBack8, ["mousedown", "touchstart"], function () { a.updateCropsandCash(7); });
    goog.events.listen(rowBack9, ["mousedown", "touchstart"], function () { a.updateCropsandCash(8); });
    goog.events.listen(rowBack10, ["mousedown", "touchstart"], function () { a.updateCropsandCash(9); });
    goog.events.listen(rowBack11, ["mousedown", "touchstart"], function () { a.updateCropsandCash(10); });
    goog.events.listen(rowBack12, ["mousedown", "touchstart"], function () { a.updateCropsandCash(11); });
    goog.events.listen(rowBack13, ["mousedown", "touchstart"], function () { a.updateCropsandCash(12); });;
    goog.events.listen(rowBack14, ["mousedown", "touchstart"], function () { a.updateCropsandCash(13); });
    goog.events.listen(rowBack15, ["mousedown", "touchstart"], function () { a.updateCropsandCash(14); });

    ////market Updates
    a.updateCropsandCash = function (crop) {
        var visibleCheck = howManyBack.getHidden();
        if (crop == 14) {
            cropSaleCrop = parseInt(crop);


            cropSaleTotal = player.tools;
            cropSaleCurrent = player.tools;
            cropSaleCurrentPrice = (5 * player.tools);

            howManyLabel3.setText(cropSaleCurrentPrice);
            howManyLabel2.setText(cropSaleCurrent + "/" + cropSaleTotal);
            howManyImg.setFill("images/UI/toolsIcon2.png");
            howManyBack.setHidden(false);

            goog.events.listen(howManySellBtn, ["mousedown", "touchstart"], function () {
                var isITvisible = howManyBack.getHidden();
                //var isITvisible2 = howManyBack.SetHidden.value;


                
                if (!isITvisible) {
                
                    a.finalSale(cropSaleCrop);
                }
            });
        }
        else if (player.cropsStored[crop].stored > 0 && visibleCheck) {
            cropSaleCrop = parseInt(crop);


            cropSaleTotal = player.cropsStored[crop].stored;
            cropSaleCurrent = player.cropsStored[crop].stored;
            cropSaleCurrentPrice = (a.crops[crop].revenue * player.cropsStored[crop].stored);

            howManyLabel3.setText(cropSaleCurrentPrice);
            howManyLabel2.setText(cropSaleCurrent + "/" + cropSaleTotal);
            howManyImg.setFill("images/" + a.crops[crop].harvest);
            howManyBack.setHidden(false);

            goog.events.listen(howManySellBtn, ["mousedown", "touchstart"], function () {
                var isITvisible = howManyBack.getHidden();

                if (!isITvisible) {

                    a.finalSale(cropSaleCrop);
                }
            });

        }
    }

    a.hideRowBacks = function () {
        rowBack
    }
    a.cropDown = function (crop) {
        if (cropSaleCurrent < 100) { cropSaleCurrent = cropSaleCurrent - 1; }
        else if (cropSaleCurrent >= 100 && cropSaleCurrent <1000) { cropSaleCurrent = cropSaleCurrent - 10; }
        else if (cropSaleCurrent >= 1000) { cropSaleCurrent = cropSaleCurrent - 100; }
        if (cropSaleCurrent <= 1) { cropSaleCurrent = 1; }
        if (crop < 14) { cropSaleCurrentPrice = (a.crops[crop].revenue * cropSaleCurrent); }
        else if (crop == 14) { cropSaleCurrentPrice = (5 * cropSaleCurrent); }
        howManyLabel2.setText(cropSaleCurrent + "/" + cropSaleTotal);
        howManyLabel3.setText(cropSaleCurrentPrice);
    }
    a.cropUp = function (crop) {
        cropSaleCurrent = cropSaleCurrent + 1;
        if (crop == 14) { cropSaleCurrent = cropSaleCurrent + 9; }
        if (cropSaleCurrent >= cropSaleTotal) { cropSaleCurrent = cropSaleTotal; }
        if (crop < 14) { cropSaleCurrentPrice = (a.crops[crop].revenue * cropSaleCurrent); }
        else if (crop == 14) { cropSaleCurrentPrice = (5 * cropSaleCurrent); }
        howManyLabel2.setText(cropSaleCurrent + "/" + cropSaleTotal);
        howManyLabel3.setText(cropSaleCurrentPrice);
    }
    a.interMedSale = function (crop) {
        a.finalSale(crop);
    }
    a.finalSale = function (crop) {
        var checkIT = player.money + cropSaleCurrentPrice;

        if (!isNaN(checkIT)) { player.money = player.money + cropSaleCurrentPrice; }
    
        moneyEver = moneyEver + cropSaleCurrentPrice;
        localStorage["GuiGhostFarms_moneyEver"] = moneyEver;
        purchaseSound.play();
        howManyBack.setHidden(true);
        payVis = true;
        if (crop < 14) { player.cropsStored[crop].stored = player.cropsStored[crop].stored - cropSaleCurrent; }
        else if (crop == 14) { player.tools = player.tools - cropSaleCurrent; }

        count0.setText(player.cropsStored[0].stored);
        count1.setText(player.cropsStored[1].stored);
        count2.setText(player.cropsStored[2].stored);
        count3.setText(player.cropsStored[3].stored);
        count4.setText(player.cropsStored[4].stored);
        count5.setText(player.cropsStored[5].stored);
        count6.setText(player.cropsStored[6].stored);
        count7.setText(player.cropsStored[7].stored);
        count8.setText(player.cropsStored[8].stored);
        count9.setText(player.cropsStored[9].stored);
        count10.setText(player.cropsStored[10].stored);
        count11.setText(player.cropsStored[11].stored);
        count12.setText(player.cropsStored[12].stored);
        count13.setText(player.cropsStored[13].stored);
        count14.setText(player.tools);
        howManyBack.setHidden(true);
        a.updateMoney();
        a.updateStored();
        howManySellBtn.removeEventListener('mousedown', function () { console.log("howmanysellBtn removed listener") });
    }

    //////////////////////////////////Intro Scene///////////////////////////////////////////  //////////////////////////////////Intro Scene///////////////////////////////////////////


    var introScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        introLayer = (new lime.Layer).setAnchorPoint(0, 0)
    introFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height);
    introScene.appendChild(introLayer);
    introLayer.appendChild(introFill1);


    //var playGameBtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 2 - 50, 510).setSize(50, 50).setFill("#663300");
    playGameBtn = (new lime.GlossyButton).setColor("#663300").setText("").setPosition(150, 270).setSize(a.width / 2 + 10, 70);
    introLayer.appendChild(playGameBtn);
    var playButtonLabel = (new lime.Label).setText("PLAY").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(150, 275).setFontSize(36);
    introLayer.appendChild(playButtonLabel);
    //moreGameBtn = (new lime.GlossyButton).setColor("#663300").setText("More Games").setPosition(150, 300).setSize(a.width / 2 + 20, 50);
    //introLayer.appendChild(moreGameBtn);
    var introFill2 = (new lime.Sprite).setPosition(157, 260).setSize(300, 490).setFill("images/UI/CoverImg2.png");
    introScene.appendChild(introFill2);
    //Intro event handler
    lime.audio.setMute(true);
    goog.events.listen(playGameBtn, ["mousedown", "touchstart"], function () {
        c.replaceScene(d, lime.transitions.SlideInUp); sceneBefore = 1; lime.audio.setMute(false);
        var mutedAtStart = localStorage.getItem('GuiGhostFarms_muted')
        if (mutedAtStart == 0) { themeSong.play(true); smithSound.play(); }
        else { lime.audio.setMute(true); setMute(1) }
        a.checkTutSeen();
        

    });
    //goog.events.listen(moreGameBtn, ["mousedown", "touchstart"], function () { window.open('https://guighostgames.com', '_system'); lime.audio.setMute(true); setMute(1); });
    c.replaceScene(introScene);
    var hideloading = document.getElementById("loadingGG");
    hideloading.style.display = 'none';


    /////LiveStockPens Scene/////////////////////////////LiveStockPens///////////////////////////////////////////  //////////////////////////////////LiveStockPens Scene///////////////////////////////////////////
    var liveStockScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        liveStockLayer = (new lime.Layer).setAnchorPoint(0, 0),
        liveStockFill1 = (new lime.Sprite).setPosition(0, 0).setSize(a.width, a.height);
    liveStockScene.appendChild(liveStockLayer);
    liveStockLayer.appendChild(liveStockFill1);





    if (sceneBefore != 5) { chickenSound.stop(); pig1Sound.stop(); pig2Sound.stop(); pig3Sound.stop(); }

    //if (sceneBefore != 5) { chickenSound.play(true);}
    var ggLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 24).setFill("images/UI/greenButtonLg.png");
    liveStockLayer.appendChild(ggLS);
    //var topLogoLS = (new lime.Sprite).setPosition(155, 10).setSize(150, 22).setFill("images/UI/topMenuPlain.png");
    //liveStockLayer.appendChild(topLogoLS);
    var topCoinLS = (new lime.Sprite).setPosition(285, 20).setSize(35, 35).setFill(imgArray11[0]);
    liveStockLayer.appendChild(topCoinLS);
    var liveStockCash = (new lime.Label).setText(player.money).setFontColor("#E8FC08").setPosition(243, 24).setFontSize(18).setFontFamily("Comic Sans MS");
    liveStockLayer.appendChild(liveStockCash);









    var liveStockBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 45).setSize(a.controlsLayer_w, 420).setFill("images/livestockPens/livestockPensBack3.png");
    if (coopLevel > 1) { liveStockBack.setFill("images/livestockPens/livestockPensBackUpCoop.png") }
    liveStockLayer.appendChild(liveStockBack);

    ////livestock chicken coope upgrade 
    var chickenCoopUp = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(105, 210).setSize(39, 42).setFill("images/toolUp3.png");
    liveStockLayer.appendChild(chickenCoopUp);

    //coop upgrade anim elements
    var scaffoldLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(65, 240).setSize(110, 80).setFill("images/scaffold.png"); liveStockLayer.appendChild(scaffoldLS);
    var upgradeCloudLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(55, 185).setSize(120, 200).setFill("images/clouds.png"); liveStockLayer.appendChild(upgradeCloudLS);
    var toolMoverLabelLS = (new lime.Label).setText("60").setPosition(118, 275).setSize(40, 25).setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("Comic Sans MS").setFill("images/countBack.png");
    var toolMoverLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -50).setSize(50, 50).setFill("images/toolHammer.png");

    liveStockLayer.appendChild(toolMoverLabelLS);
    toolMoverLabelLS.appendChild(toolMoverLS);
    toolMoverLS.setRotation(-10);
    var currentRotateLS = -10;
    toolMoverLabelLS.setHidden(true);
    scaffoldLS.setHidden(true);
    upgradeCloudLS.setHidden(true);

    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim
        var currentPosV = chickenCoopUp.getPosition();
        currentPosV.y += 5;
       
        if (currentPosV.y > 215) { currentPosV.y = 210 };
        chickenCoopUp.setPosition(currentPosV);
    }, this, 500)
    goog.events.listen(chickenCoopUp, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            if (player.tools > 500) {
                player.tools = player.tools - 500;
                chickenCoopUp.setHidden(true);
                //setup upgrade 

                upgradeCloudLS.setHidden(false);
                scaffoldLS.setHidden(false);
                toolMoverLabelLS.setHidden(false);
                lime.scheduleManager.scheduleWithDelay(function () {
                    currentRotateLS = currentRotateLS + 10;
                    if (currentRotateLS > 35) { currentRotateLS = -10; };
                    toolMoverLS.setRotation(currentRotateLS);
                    //e.appendChild(toolMover);
                }, this, 200, 300)
                //upgrade countdown timer
                var secondsToUpgradeLS = 60;
                var upCloudWLS = 120;
                var upCloudXLS = 55;
                var upCloudYLS = 185;

                lime.scheduleManager.scheduleWithDelay(function () {
                    secondsToUpgradeLS = secondsToUpgradeLS - 1;
                    toolMoverLabelLS.setText(secondsToUpgradeLS);

                    if (secondsToUpgradeLS <= 0) {
                        toolMoverLabelLS.setHidden(true); scaffoldLS.setHidden(true); upgradeCloudLS.setHidden(true); secondsToUpgradeLS = 60;
                        liveStockBack.setFill("images/livestockPens/livestockPensBackUpCoop.png");
                        a.updateTools();
                        coopLevel = 2;
                        localStorage["GuiGhostFarms_coopLevel"] = 2;
                        egg2.setHidden(false);
                        a.sparkles();
                    }

                }, this, 1000, 60);
                lime.scheduleManager.scheduleWithDelay(function () {
                    upgradeCloudLS.setPosition(upCloudXLS, upCloudYLS).setSize(upCloudWLS, 200)
                    upCloudWLS = upCloudWLS + 10;
                    upCloudXLS = upCloudXLS - 5;
                    upCloudYLS = upCloudYLS - 5
                    if (upCloudXLS < 40) { upCloudXLS = 55; upCloudYLS = 185; upCloudWLS = 120; }


                }, this, 250, 240);











            }
        }
    });

    var horizRoadLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(245, 25).setFill("images/" + a.barnyard[15].image);
    liveStockLayer.appendChild(horizRoadLS);
    roadLeftLS =
        //(new lime.GlossyButton).setColor("#8b008b").setText("<Orchard").setPosition(45, 12).setSize(80, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, -12).setSize(40, 40).setFill("images/UI/orchardBtn.png");
    horizRoadLS.appendChild(roadLeftLS)







    var controlsBackLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, a.height - a.controlsLayer_h - 5).setSize(a.controlsLayer_w, a.controlsLayer_h + 5).setFill("images/UI/blackButton.png");
    liveStockLayer.appendChild(controlsBackLS);


    ///livestock eggs mechanics

    var egg1 = (new lime.Sprite).setPosition(90, 282).setFill("images/livestockPens/egg3.png").setSize(17, 13);
    liveStockLayer.appendChild(egg1);
    var egg2 = (new lime.Sprite).setPosition(123, 292).setFill("images/livestockPens/egg3.png").setSize(17, 13);
    liveStockLayer.appendChild(egg2);
    if (coopLevel < 2) { egg2.setHidden(true); };
    if (coopLevel == 2) { chickenCoopUp.setHidden(true); };
    var egg3 = (new lime.Sprite).setPosition(155, 282).setFill("images/livestockPens/egg3.png").setSize(17, 13);
    liveStockLayer.appendChild(egg3);
    var sparkle1 = (new lime.Sprite).setPosition(159, 285).setFill("images/livestockPens/stars4.png").setSize(25, 30);
    liveStockLayer.appendChild(sparkle1);
    var lsHarvest = 0;
    var eggHidden = {
        egg1: false,
        egg2: false,
        egg3: false
    };

    var eggOnce = {
        egg1: false,
        egg2: false,
        egg3: false
    };

    var eggX = 90;
    var sparkleH = 0;
    var sparkleVis = 1;
    var eggPick = 0;
    a.sparkles = function () {
        lime.scheduleManager.scheduleWithDelay(function () {
            //var eggPos = egg1.getPosition();
            //var eggPosX = eggPos.x;
            //egg1.setPostion = ((eggPosX - 1), 282);
            sparkleH = sparkleH + 1;
            sparkleVis = sparkleVis + 1;


            if (sparkleVis == 2) {
                sparkle1.setHidden(true);
                if (eggHidden[egg1] == false && eggPick == 0) { egg1.setPosition(90, 279); }
                if (eggHidden[egg2] == false && eggPick == 0) { egg2.setPosition(123, 292); }
                if (eggHidden[egg3] == false && eggPick == 0) { egg3.setPosition(159, 279); }
            } else {
                sparkle1.setHidden(false); sparkleVis = 1;
                if (eggHidden[egg1] == false && eggPick == 0) { egg1.setPosition(90, 282); }
                if (eggHidden[egg2] == false && eggPick == 0) { egg2.setPosition(123, 289); }
                if (eggHidden[egg3] == false && eggPick == 0) { egg3.setPosition(159, 282); }
            }

            sparkle1.setHidden(true);

            if (sparkleH > 3) { sparkleH = 0; };

        }, this, 500)

    };
    a.sparkles();


    a.LivestockHarvest = function () {
        lime.scheduleManager.scheduleWithDelay(function () {
            lsHarvest = lsHarvest + 1;
            if (player.cropsStored[5].stored >= 1) {

                if (lsHarvest == 2) { egg1.setHidden(false); eggHidden[egg1] = false; player.cropsStored[5].stored = player.cropsStored[5].stored - 1; }
                if (lsHarvest == 3) { egg3.setHidden(false); eggHidden[egg3] = false; player.cropsStored[5].stored = player.cropsStored[5].stored - 1; }
                if (lsHarvest == 4 && coopLevel > 1) { egg2.setHidden(false); eggHidden[egg2] = false; player.cropsStored[5].stored = player.cropsStored[5].stored - 1; }
                if (lsHarvest > 5) { lsHarvest = 0; }
                gLabel5LS.setText(player.cropsStored[5].stored);
                gLabel5Pork.setText(player.cropsStored[5].stored);
            }
        }, this, 15000)
    }
    a.LivestockHarvest();

    ///egg clicks
    goog.events.listen(egg1, ["mousedown", "touchstart", "touchmove"], function () {
        a.eggClick(1);
    });
    goog.events.listen(egg2, ["mousedown", "touchstart", "touchmove"], function () {
        a.eggClick(2);
    });
    goog.events.listen(egg3, ["mousedown", "touchstart", "touchmove"], function () {
        a.eggClick(3);
    });

    a.eggClick = function (clicked) {
        if (clicked == 1) {
            eggOnce[egg1] = true;
            player.cropsStored[11].stored = player.cropsStored[11].stored + 3;
            eggHidden[egg1] = true;
            lsHarvest = 0;
            eggPick = 1;
            count11.setText(player.cropsStored[11].stored);
            gLabel11.setText(player.cropsStored[11].stored);
            localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));

            setTimeout(function () { egg1.setPosition(90, 272); }, 100);
            setTimeout(function () { egg1.setPosition(90, 262); }, 200);
            setTimeout(function () { egg1.setPosition(90, 242); }, 300);
            setTimeout(function () { egg1.setPosition(90, 222); }, 400);
            setTimeout(function () { egg1.setPosition(90, 182); }, 500);
            setTimeout(function () { egg1.setPosition(90, 150); }, 600);
            setTimeout(function () { egg1.setPosition(90, 130); }, 700);
            setTimeout(function () { egg1.setPosition(90, 120); }, 730);
            setTimeout(function () { egg1.setPosition(90, 110); }, 760);
            setTimeout(function () { egg1.setPosition(90, 100); }, 790);
            setTimeout(function () { egg1.setPosition(90, 90); }, 820);
            setTimeout(function () { egg1.setPosition(90, 70); }, 850);
            setTimeout(function () { egg1.setPosition(90, 50); }, 875);
            setTimeout(function () { egg1.setHidden(true); eggPick = 0; eggOnce[egg1] = false; }, 900);
            setTimeout(function () { egg1.setPosition(90, 282); }, 1000);


        }
        if (clicked == 2) {

            player.cropsStored[11].stored = player.cropsStored[11].stored + 3;
            eggPick = 2;
            lsHarvest = 0;
            eggOnce[egg2] = true;
            count11.setText(player.cropsStored[11].stored);
            gLabel11.setText(player.cropsStored[11].stored);
            localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));

            setTimeout(function () { egg2.setPosition(123, 282); }, 100);
            setTimeout(function () { egg2.setPosition(123, 272); }, 150);
            setTimeout(function () { egg2.setPosition(123, 262); }, 200);
            setTimeout(function () { egg2.setPosition(123, 252); }, 100);
            setTimeout(function () { egg2.setPosition(123, 242); }, 300);
            setTimeout(function () { egg2.setPosition(123, 222); }, 400);
            setTimeout(function () { egg2.setPosition(123, 182); }, 500);
            setTimeout(function () { egg2.setPosition(123, 150); }, 600);
            setTimeout(function () { egg2.setPosition(123, 130); }, 700);
            setTimeout(function () { egg2.setPosition(123, 120); }, 730);
            setTimeout(function () { egg2.setPosition(123, 110); }, 760);
            setTimeout(function () { egg2.setPosition(123, 100); }, 790);
            setTimeout(function () { egg2.setPosition(123, 90); }, 820);
            setTimeout(function () { egg2.setPosition(123, 70); }, 850);
            setTimeout(function () { egg2.setPosition(123, 50); }, 875);
            setTimeout(function () { egg2.setHidden(true); eggPick = 0; eggOnce[egg2] = false; }, 900);
            setTimeout(function () { egg2.setPosition(123, 292); }, 1000);


        }
        if (clicked == 3) {

            player.cropsStored[11].stored = player.cropsStored[11].stored + 3;
            eggPick = 3;
            lsHarvest = 0;
            eggOnce[egg3] = true;
            count11.setText(player.cropsStored[11].stored);
            gLabel11.setText(player.cropsStored[11].stored);
            localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
            setTimeout(function () { egg3.setPosition(155, 272); }, 100);
            setTimeout(function () { egg3.setPosition(155, 262); }, 200);
            setTimeout(function () { egg3.setPosition(155, 242); }, 300);
            setTimeout(function () { egg3.setPosition(155, 222); }, 400);
            setTimeout(function () { egg3.setPosition(155, 182); }, 500);
            setTimeout(function () { egg3.setPosition(155, 150); }, 600);
            setTimeout(function () { egg3.setPosition(155, 130); }, 700);
            setTimeout(function () { egg3.setPosition(155, 120); }, 730);
            setTimeout(function () { egg3.setPosition(155, 110); }, 760);
            setTimeout(function () { egg3.setPosition(155, 100); }, 790);
            setTimeout(function () { egg3.setPosition(155, 90); }, 820);
            setTimeout(function () { egg3.setPosition(155, 70); }, 850);
            setTimeout(function () { egg3.setPosition(155, 50); }, 875);
            setTimeout(function () { egg3.setHidden(true); eggPick = 0; eggOnce[egg3] = false; }, 900);
            setTimeout(function () { egg3.setPosition(155, 282); }, 1000);

        }
    }

    //livestock animals
    var chicken1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(175, 350).setSize(23, 22).setFill("images/livestockPens/chicken_eatLeft1.png");
    liveStockLayer.appendChild(chicken1);
    var chicken2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 315).setSize(23, 22).setFill("images/livestockPens/chicken_eatLeft1.png");
    liveStockLayer.appendChild(chicken2);

    var chicken3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(156, 309).setSize(23, 22).setFill("images/livestockPens/chicken_eatLeft1.png");
    liveStockLayer.appendChild(chicken3);

    var pig1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 180).setSize(37, 25).setFill("images/livestockPens/pig_Left3.png");
    liveStockLayer.appendChild(pig1);
    var pig2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(150, 100).setSize(22, 33).setFill("images/livestockPens/pig_down1.png");
    liveStockLayer.appendChild(pig2);
    var pig3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(195, 135).setSize(21, 33).setFill("images/livestockPens/pig_down1.png");
    liveStockLayer.appendChild(pig3);

    goog.events.listen(pig1, ["mousedown", "touchstart"], function () {
        pig1Sound.play();
    });
    goog.events.listen(pig2, ["mousedown", "touchstart"], function () {
        pig2Sound.play();
    });
    goog.events.listen(pig3, ["mousedown", "touchstart"], function () {
        pig3Sound.play();
    });
    var chicken1Timer = 0
    a.movechicken = function () {
        lime.scheduleManager.scheduleWithDelay(function () {
            //add upgrade anim
            chicken1Timer++;
            if (chicken1Timer > 30) { chicken1Timer = 1; };

            if (chicken1Timer == 1) { chicken1.setFill("images/livestockPens/chicken_eatLeft1.png"); chicken2.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setPosition(100, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); pig2.setSize(20, 33); };
            if (chicken1Timer == 2) { chicken1.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setFill("images/livestockPens/chicken_eatLeft3.png"); chicken2.setPosition(100, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft3.png"); pig1.setFill("images/livestockPens/pig_right1.png"); pig2.setFill("images/livestockPens/pig_down2.png"); pig2.setPosition(160, 115); pig3.setFill("images/livestockPens/pig_down2.png") };
            if (chicken1Timer == 3) { chicken1.setFill("images/livestockPens/chicken_eatLeft3.png"); chicken2.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setPosition(100, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); };
            if (chicken1Timer == 4) { chicken1.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setPosition(100, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft3.png"); pig1.setFill("images/livestockPens/pig_right2.png"); pig1.setPosition(160, 180); pig3.setFill("images/livestockPens/pig_down3.png") };
            if (chicken1Timer == 5) { chicken1.setFill("images/livestockPens/chicken_eatLeft3.png"); chicken2.setFill("images/livestockPens/chicken_walkLeft1.png"); chicken2.setPosition(95, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); };
            if (chicken1Timer == 6) { chicken1.setFill("images/livestockPens/chicken_eatLeft4.png"); chicken2.setFill("images/livestockPens/chicken_walkLeft2.png"); chicken2.setPosition(90, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft3.png"); pig1.setFill("images/livestockPens/pig_right3.png"); pig1.setPosition(150, 180); };
            if (chicken1Timer == 7) { chicken1.setFill("images/livestockPens/chicken_eatLeft1.png"); chicken2.setFill("images/livestockPens/chicken_walkLeft3.png"); chicken2.setPosition(85, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); };
            if (chicken1Timer == 8) { chicken1.setFill("images/livestockPens/chicken_walkLeft1.png"); chicken1.setPosition(170, 350); chicken2.setFill("images/livestockPens/chicken_walkLeft2.png"); chicken2.setPosition(80, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); pig2.setFill("images/livestockPens/pig_down3.png"); pig2.setPosition(160, 120); pig3.setFill("images/livestockPens/pig_down2.png"); };
            if (chicken1Timer == 9) { chicken1.setFill("images/livestockPens/chicken_walkLeft2.png"); chicken1.setPosition(165, 350); chicken2.setFill("images/livestockPens/chicken_walkLeft1.png"); chicken2.setPosition(75, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft3.png"); pig1.setFill("images/livestockPens/pig_right2.png"); pig1.setPosition(140, 180); };
            if (chicken1Timer == 10) { chicken1.setFill("images/livestockPens/chicken_walkLeft3.png"); chicken1.setPosition(160, 350); chicken2.setFill("images/livestockPens/chicken_walkLeft2.png"); chicken2.setPosition(70, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); pig2.setPosition(160, 125); pig2.setFill("images/livestockPens/pig_down2.png"); };
            if (chicken1Timer == 11) { chicken1.setFill("images/livestockPens/chicken_walkLeft1.png"); chicken1.setPosition(155, 350); chicken2.setFill("images/livestockPens/chicken_up1.png"); chicken2.setPosition(70, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig1.setFill("images/livestockPens/pig_right3.png"); };
            if (chicken1Timer == 12) { chicken1.setFill("images/livestockPens/chicken_walkLeft2.png"); chicken1.setPosition(150, 350); chicken2.setFill("images/livestockPens/chicken_up2.png"); chicken2.setPosition(70, 310); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig2.setPosition(160, 130); pig2.setFill("images/livestockPens/pig_down1.png"); pig3.setFill("images/livestockPens/pig_down1.png") };
            if (chicken1Timer == 13) { chicken1.setFill("images/livestockPens/chicken_walkLeft3.png"); chicken1.setPosition(145, 350); chicken2.setFill("images/livestockPens/chicken_up3.png"); chicken2.setPosition(70, 305); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); };
            if (chicken1Timer == 14) { chicken1.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setFill("images/livestockPens/chicken_walkRight1.png"); chicken2.setPosition(70, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig2.setFill("images/livestockPens/pig_down2.png"); pig2.setPosition(160, 135); };
            if (chicken1Timer == 15) { chicken1.setFill("images/livestockPens/chicken_eatLeft3.png"); chicken2.setFill("images/livestockPens/chicken_walkRight2.png"); chicken2.setPosition(75, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); };
            if (chicken1Timer == 16) { chicken1.setFill("images/livestockPens/chicken_eatLeft2.png"); chicken2.setFill("images/livestockPens/chicken_walkRight3.png"); chicken2.setPosition(80, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); };
            if (chicken1Timer == 17) { chicken1.setFill("images/livestockPens/chicken_eatLeft3.png"); chicken2.setFill("images/livestockPens/chicken_walkRight3.png"); chicken2.setPosition(80, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig1.setFill("images/livestockPens/pig_right2.png"); pig2.setSize(39, 21); pig2.setPosition(150, 147); pig2.setFill("images/livestockPens/pig_right2.png"); pig3.setFill("images/livestockPens/pig_down2.png"); };
            if (chicken1Timer == 18) { chicken1.setFill("images/livestockPens/chicken_down3.png"); chicken2.setFill("images/livestockPens/chicken_walkRight1.png"); chicken2.setPosition(85, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig2.setSize(20, 33); pig2.setFill("images/livestockPens/pig_up2.png"); pig2.setPosition(150, 130); pig3.setFill("images/livestockPens/pig_down3.png"); };
            if (chicken1Timer == 19) { chicken1.setFill("images/livestockPens/chicken_walkRight1.png"); chicken1.setPosition(145, 350); chicken2.setFill("images/livestockPens/chicken_walkRight2.png"); chicken2.setPosition(90, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig3.setFill("images/livestockPens/pig_down2.png"); };
            if (chicken1Timer == 20) { chicken1.setFill("images/livestockPens/chicken_walkRight2.png"); chicken1.setPosition(150, 350); chicken2.setFill("images/livestockPens/chicken_walkRight3.png"); chicken2.setPosition(95, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig2.setSize(20, 33); pig2.setFill("images/livestockPens/pig_up1.png"); pig2.setPosition(150, 120); pig3.setFill("images/livestockPens/pig_down3.png"); };
            if (chicken1Timer == 21) { chicken1.setFill("images/livestockPens/chicken_walkRight3.png"); chicken1.setPosition(155, 350); chicken2.setFill("images/livestockPens/chicken_walkRight2.png"); chicken2.setPosition(100, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); };
            if (chicken1Timer == 22) { chicken1.setFill("images/livestockPens/chicken_walkRight1.png"); chicken1.setPosition(160, 350); chicken2.setFill("images/livestockPens/chicken_eatRight1.png"); chicken2.setPosition(100, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig1.setFill("images/livestockPens/pig_Left3.png"); pig3.setFill("images/livestockPens/pig_down2.png"); };
            if (chicken1Timer == 23) { chicken1.setFill("images/livestockPens/chicken_walkRight2.png"); chicken1.setPosition(165, 350); chicken2.setFill("images/livestockPens/chicken_eatRight2.png"); chicken2.setPosition(100, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); };
            if (chicken1Timer == 24) { chicken1.setFill("images/livestockPens/chicken_walkRight3.png"); chicken1.setPosition(170, 350); chicken2.setFill("images/livestockPens/chicken_eatRight1.png"); chicken2.setPosition(100, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); pig2.setFill("images/livestockPens/pig_up2.png"); pig2.setPosition(150, 117); pig3.setFill("images/livestockPens/pig_down3.png"); };
            if (chicken1Timer == 25) { chicken1.setFill("images/livestockPens/chicken_eatRight1.png"); chicken1.setPosition(175, 350); chicken2.setFill("images/livestockPens/chicken_down2.png"); chicken2.setPosition(100, 300); chicken3.setFill("images/livestockPens/chicken_eatLeft3.png"); };
            if (chicken1Timer == 26) { chicken1.setFill("images/livestockPens/chicken_eatRight2.png"); chicken1.setPosition(175, 350); chicken2.setFill("images/livestockPens/chicken_down1.png"); chicken2.setPosition(100, 305); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); pig2.setFill("images/livestockPens/pig_up3.png"); pig2.setPosition(150, 115); };
            if (chicken1Timer == 27) { chicken1.setFill("images/livestockPens/chicken_eatRight1.png"); chicken1.setPosition(175, 350); chicken2.setFill("images/livestockPens/chicken_down2.png"); chicken2.setPosition(100, 310); chicken3.setFill("images/livestockPens/chicken_eatLeft3.png"); pig1.setFill("images/livestockPens/pig_walkLeft1.png"); pig1.setPosition(150, 180); pig2.setFill("images/livestockPens/pig_up1.png"); pig2.setPosition(150, 110); };
            if (chicken1Timer == 28) { chicken1.setFill("images/livestockPens/chicken_eatRight2.png"); chicken1.setPosition(175, 350); chicken2.setFill("images/livestockPens/chicken_eatLeft1.png"); chicken2.setPosition(100, 315); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); };
            if (chicken1Timer == 29) { chicken1.setFill("images/livestockPens/chicken_down1.png"); chicken2.setFill("images/livestockPens/chicken_eatLeft2.png"); pig1.setFill("images/livestockPens/pig_walkLeft2.png"); chicken3.setFill("images/livestockPens/chicken_eatLeft2.png"); pig1.setPosition(160, 180); pig2.setFill("images/livestockPens/pig_up2.png"); pig2.setPosition(150, 105); };
            if (chicken1Timer == 30) { chicken1.setFill("images/livestockPens/chicken_down1.png"); chicken2.setFill("images/livestockPens/chicken_eatLeft3.png"); chicken3.setFill("images/livestockPens/chicken_eatLeft1.png"); pig2.setSize(39, 21); pig2.setPosition(150, 105); pig2.setFill("images/livestockPens/pig_Left3.png"); };


        }, this, 250)

    }
    a.movechicken();

    /// livestock pork Pork harvest mechanics

    var porkUpCount = (new lime.Label).setText("+ 2 Ham").setFontWeight(600).setFontColor("#E8FC08").setPosition(155, 110).setOpacity(.9).setSize(200, 20).setFontFamily("Comic Sans MS");
    liveStockLayer.appendChild(porkUpCount);
    var porkUpIcon = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(95, 95).setSize(35, 24).setFill("images/" + a.crops[10].harvest);
    liveStockLayer.appendChild(porkUpIcon);
    porkUpCount.setHidden(true);
    porkUpIcon.setHidden(true);

    ///pork harvest icon
    var collectPork = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(10, 60).setSize(50, 55).setFill("images/UI/speechBubble.png");
    liveStockLayer.appendChild(collectPork);
    var collectPorkIcon = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(8, 2).setSize(35, 24).setFill("images/" + a.crops[10].harvest);
    collectPork.appendChild(collectPorkIcon);
    var collectPorkLabel = (new lime.Label).setText("+ 0 ").setFontWeight(500).setFontColor("#E8FC08").setPosition(23, 37).setSize(30, 18).setFontFamily("Comic Sans MS");
    collectPork.appendChild(collectPorkLabel);
    collectPork.setHidden(true);
    var porkWaiting = 0;
    var porkTimer = 0;
    var porkOnce = 0;
    var porkWaiting = 0;
    var acresOwned2 = acres[1].owned + acres[2].owned + acres[3].owned + acres[4].owned;
    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim
        porkTimer = porkTimer + 1;
        var porkPos = porkUpCount.getPosition();
        var porkPosY = porkPos.y - 5;
        if (porkPosY < 70) { porkPosY = 110 };
        if (porkTimer > 240 && player.cropsStored[8].stored >= 1 && acres[4].owned == 1) {

            porkUpCount.setHidden(false);
            porkUpCount.setPosition(155, porkPosY);
            porkUpIcon.setHidden(false);
            porkUpIcon.setPosition(95, (porkPosY - 15));
            collectPork.setHidden(false);
            //show the speechBubble to collect pork
            if (porkOnce == 0) {
                porkOnce = 1;
                porkWaiting = porkWaiting + 2;

                collectPorkLabel.setText("+ " + porkWaiting);
                player.cropsStored[8].stored = player.cropsStored[8].stored - 1;
                count8.setText(player.cropsStored[8].stored);
                gLabel8.setText(player.cropsStored[8].stored);
                gLabel8LS.setText(player.cropsStored[8].stored);
                gLabel8Pork.setText(player.cropsStored[8].stored);
                localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));

            }

        }
        if (porkTimer > 248) { porkTimer = 0; porkUpCount.setHidden(true); porkOnce = 0; porkUpIcon.setHidden(true); }


    }, this, 250)

    goog.events.listen(collectPork, ["mousedown", "touchstart"], function () {
        player.cropsStored[10].stored = player.cropsStored[10].stored + porkWaiting;
        porkWaiting = 0;
        count10.setText(player.cropsStored[10].stored);
        gLabel10.setText(player.cropsStored[10].stored);
        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
        collectPork.setHidden(true);
        purchaseSound.play();
    });
    ///livestock layer menu


    //var actionsLS = (new lime.GlossyButton).setColor("#663300").setText("Actions").setPosition(35, 485).setSize(70, 25);
    //liveStockLayer.appendChild(actionsLS);
    var marketLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(214, a.height - a.controlsLayer_h - 4).setSize(90, 65).setFill("images/" + a.barnyard[3].image);
    liveStockLayer.appendChild(marketLS)
    goog.events.listen(marketLS, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 5;
            c.replaceScene(marketScene, lime.transitions.SlideInDown);
            count0.setText(player.cropsStored[0].stored);
            count1.setText(player.cropsStored[1].stored);
            count2.setText(player.cropsStored[2].stored);
            count3.setText(player.cropsStored[3].stored);
            count4.setText(player.cropsStored[4].stored);
            count5.setText(player.cropsStored[5].stored);
            count6.setText(player.cropsStored[6].stored);
            count7.setText(player.cropsStored[7].stored);
            count8.setText(player.cropsStored[8].stored);
            count9.setText(player.cropsStored[9].stored);
            count10.setText(player.cropsStored[10].stored);
            count11.setText(player.cropsStored[11].stored);
            count12.setText(player.cropsStored[12].stored);
            count13.setText(player.cropsStored[13].stored);
        }
    });
    var menuLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 467).setSize(35, 35).setFill("images/UI/gearButton.png");
    liveStockLayer.appendChild(menuLS);
    goog.events.listen(menuLS, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 5;
            c.replaceScene(menuScene, lime.transitions.SlideInUp);
        }
    });
    //MUTE From Livestock
    var muteBtnLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 503).setSize(35, 35).setFill(imgArray[15]); liveStockLayer.appendChild(muteBtnLS);
    var achieveBtnLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 467).setSize(35, 35).setFill("images/UI/trophyBtn.png"); liveStockLayer.appendChild(achieveBtnLS);
    var fbBtnLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 503).setSize(35, 35).setFill("images/UI/starButton.png"); liveStockLayer.appendChild(fbBtnLS);
    goog.events.listen(muteBtnLS, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isMuted = lime.audio.getMute();
            if (isMuted) {
                lime.audio.setMute(false); themeSong.play(true); localStorage.setItem('GuiGhostFarms_muted', 0)
                setMute(2);
            } else { lime.audio.setMute(true); setMute(1); localStorage.setItem('GuiGhostFarms_muted',1)}
        }
    });
    goog.events.listen(fbBtnLS, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            shareFacebook();

        }
    });
    goog.events.listen(achieveBtnLS, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 5;
            achieve(sceneBefore);
        }
    });
    var raising = (new lime.Label).setText("Raising Chickens and Pigs").setFontColor("#E8FC08").setPosition(148, 525).setSize(125, 75).setFontFamily("Comic Sans MS");
    liveStockLayer.appendChild(raising);

    ////back to Orchard from pens
    goog.events.listen(roadLeftLS, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(orchardScene, lime.transitions.SlideInLeft); sceneBefore = 3; waterfallSound.play(); chickenSound.stop(); pig1Sound.stop(); pig2Sound.stop(); pig3Sound.stop();
        }
    });

    //c.replaceScene(liveStockScene, lime.transitions.SlideInUp);



    //livestock scene clouds 

    var cloudsLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-400, -105).setSize(a.width, 650).setFill("images/clouds.png").setOpacity(0.3);
    liveStockLayer.appendChild(cloudsLS);
    //cloud anim
    var cloudAnimLS = 0
    lime.scheduleManager.scheduleWithDelay(function () {
        cloudAnimLS = cloudAnimLS + 2;
        cloudsLS.setPosition(cloudAnimLS, -105);
        if (cloudAnimLS > a.width + 200) { cloudAnimLS = -400 }
    }, this, 200)
    //end clouds livestock

    var compassLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(130, 449).setSize(35, 35).setFill("images/UI/compass22.png"); liveStockLayer.appendChild(compassLS)


    ///livestock storage menu
    var toolCountImgLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 7).setSize(35, 35).setFill("images/UI/toolsIcon2.png");
    var toolCountLS = (new lime.Label).setText(player.tools).setFontColor("#E8FC08").setPosition(65, 24).setFontSize(18).setFontFamily("Comic Sans MS");
    liveStockLayer.appendChild(toolCountImgLS);
    liveStockLayer.appendChild(toolCountLS);
    var storageIconLS = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 22).setSize(38, 38).setFill("images/UI/lsBtn.png");
    liveStockLayer.appendChild(storageIconLS);
    var storageMenuLS = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 78).setSize(220, 70).setFill("images/UI/greenButtonLg.png");
    liveStockLayer.appendChild(storageMenuLS);


    var cornIconLS = (new lime.Sprite).setPosition(-65, -15).setFill("images/" + a.crops[5].harvest).setSize(35, 30);
    storageMenuLS.appendChild(cornIconLS);
    var appleIconLS = (new lime.Sprite).setPosition(-25, -15).setFill("images/" + a.crops[8].harvest).setSize(35, 30);
    storageMenuLS.appendChild(appleIconLS);

    var porkIcon = (new lime.Sprite).setPosition(20, -15).setFill("images/" + a.crops[10].harvest).setSize(35, 30);
    storageMenuLS.appendChild(porkIcon);
    var eggsIcon = (new lime.Sprite).setPosition(65, -15).setFill("images/" + a.crops[11].harvest).setSize(35, 35);
    storageMenuLS.appendChild(eggsIcon);

    var gLabel5LS = (new lime.Label).setPosition(-65, 15).setSize(26, 12).setText(player.cropsStored[5].stored).setFontColor("#E8FC08").setFontSize(18).setFontFamily("Comic Sans MS");
    storageMenuLS.appendChild(gLabel5LS);
    var gLabel8LS = (new lime.Label).setPosition(-25, 15).setSize(26, 12).setText(player.cropsStored[8].stored).setFontColor("#E8FC08").setFontSize(18).setFontFamily("Comic Sans MS");
    storageMenuLS.appendChild(gLabel8LS);

    var gLabel10 = (new lime.Label).setPosition(20, 15).setSize(26, 12).setText(player.cropsStored[10].stored).setFontColor("#E8FC08").setFontSize(18).setFontFamily("Comic Sans MS");
    storageMenuLS.appendChild(gLabel10);
    var gLabel11 = (new lime.Label).setPosition(65, 15).setSize(26, 12).setFontSize(12).setText(player.cropsStored[11].stored).setFontColor("#E8FC08").setFontSize(18).setFontFamily("Comic Sans MS");
    storageMenuLS.appendChild(gLabel11);

    var dayLabelLS = (new lime.Label).setFontSize(10).setPosition(-45, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Day " + dayCount).setFontColor("#ffffff").setFontSize(14).setFontFamily("Comic Sans MS");
    storageMenuLS.appendChild(dayLabelLS);
    var yearLabelLS = (new lime.Label).setFontSize(10).setPosition(45, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Year " + yearCount).setFontColor("#ffffff").setFontSize(14).setFontFamily("Comic Sans MS");
    storageMenuLS.appendChild(yearLabelLS);

    var storageToggleLS = 0;
    storageMenuLS.setHidden(true);
    goog.events.listen(storageIconLS, ["mousedown", "touchstart"], function () {
        if (storageToggleLS == 0) { storageMenuLS.setHidden(false); storageToggleLS = 1 }
        else { storageMenuLS.setHidden(true); storageToggleLS = 0 }
    });




    ///livestockpens block
    var lsBlock = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#ffffff").setOpacity(0.75);
    liveStockLayer.appendChild(lsBlock);
    //goog.events.listen(lsBlock, ["mousedown", "touchstart"], function () {
    //    break;
    //});
    lsBlock.setHidden(true);



    ////achievement Modal
    var achieveNotifLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 130).setSize(210, 220).setFill("images/UI/achieveNotif.png");
    var achieveTextSubLS = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#08fcef").setPosition(30, 35).setSize(150, 60).setFontSize(12).setText("Achieve Text").setFontFamily("Comic Sans MS");
    achieveNotifLS.appendChild(achieveTextSubLS);
    var achieveTextLS = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(13, 160).setSize(190, 60).setFontSize(16).setText("Blacksmith I").setFontFamily("Comic Sans MS");
    achieveNotifLS.appendChild(achieveTextLS);
    var achieveSCLS = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#301934").setPosition(21, 186).setSize(190, 60).setFontSize(18).setText(" + ").setFontFamily("Comic Sans MS");
    achieveNotifLS.appendChild(achieveSCLS);
    var confirmBtnALS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 211).setSize(40, 40).setFill("images/UI/checkButton.png");
    achieveNotifLS.appendChild(confirmBtnALS);
    liveStockLayer.appendChild(achieveNotifLS);
    achieveNotifLS.setHidden(true);

    goog.events.listen(confirmBtnALS, ["mousedown", "touchstart"], function () {            //for sale pasture
        achieveNotif.setHidden(true);
        achieveNotifP.setHidden(true);
        achieveNotifV.setHidden(true);
        achieveNotifO.setHidden(true);
        achieveNotifLS.setHidden(true);
    });





    /// compass nav Stockpens
    var compassLSBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 100).setSize(250, 250).setFill("images/UI/compass3.png"); liveStockLayer.appendChild(compassLSBack)
    var orchardNavLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 35).setSize(50, 50).setFill("images/UI/orchardBtn.png"); compassLSBack.appendChild(orchardNavLS)
    var lsNavLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 170).setSize(50, 50).setFill("images/UI/lsBtn.png"); compassLSBack.appendChild(lsNavLS)
    var vinyardNavLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 35).setSize(50, 50).setFill("images/UI/vinyardBtn.png"); compassLSBack.appendChild(vinyardNavLS)
    var homeNavLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(96, 100).setSize(60, 60).setFill("images/UI/homeButton.png"); compassLSBack.appendChild(homeNavLS)
    var pastureNavLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 170).setSize(50, 50).setFill("images/UI/pastureBtn.png"); compassLSBack.appendChild(pastureNavLS)
    var closeNavLS = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 222).setSize(50, 50).setFill("images/UI/XButton.png"); compassLSBack.appendChild(closeNavLS)
    compassLSBack.setHidden(true);


    goog.events.listen(compassLS, ["mousedown", "touchstart"], function () { if (globalModalBlock == 0) { checkAcresNav(); } });
    goog.events.listen(closeNavLS, ["mousedown", "touchstart"], function () { closeAcresNav(); });
    goog.events.listen(homeNavLS, ["mousedown", "touchstart"], function () {
        if (compassVisible) {
            b.currentCrop = homeCrop;
            if (b.currentCrop > 5) { b.currentCrop = 0; }
            closeAcresNav();
            a.sceneBefore = 1;
            waterfallSound.stop();
            globalModalBlock = 0;
            c.replaceScene(d, lime.transitions.SlideInLeft);
            chickenSound.stop();
            pig1Sound.stop();
            pig2Sound.stop();
        }
    });
    goog.events.listen(pastureNavLS, ["mousedown", "touchstart"], function () {
        if (acres[1].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 2;
            b.currentCrop = 6;
            c.replaceScene(pastureScene, lime.transitions.SlideInLeft);
            chickenSound.stop();
            pig1Sound.stop();
            pig2Sound.stop();
            globalModalBlock = 0;
        }
    });
    goog.events.listen(orchardNavLS, ["mousedown", "touchstart"], function () {
        if (acres[2].owned == 1 && compassVisible) {
            a.sceneBefore = 3;
            closeAcresNav();
            b.currentCrop = 8;
            c.replaceScene(orchardScene, lime.transitions.SlideInLeft);
            waterfallSound.play();
            chickenSound.stop();
            pig1Sound.stop();
            pig2Sound.stop();
            globalModalBlock = 0;
        }
    });
    goog.events.listen(vinyardNavLS, ["mousedown", "touchstart"], function () {
        if (acres[3].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 4;
            c.replaceScene(vinyardScene, lime.transitions.SlideInLeft);
            waterfallSound.stop();
            oldCrop = b.currentCrop; b.currentCrop = 12;
            checkShortage();
            chickenSound.stop();
            pig1Sound.stop();
            pig2Sound.stop();
            globalModalBlock = 0;
            //a.sceneBefore = 5;
        }
    });
    goog.events.listen(lsNavLS, ["mousedown", "touchstart"], function () {
        if (acres[4].owned == 1) {
            closeAcresNav();
            globalModalBlock = 0;
        }
    });


    ///end compass stockpens




    ////livestock SHORTAGE block modal
    var porkBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(60, 145).setSize(180, 200).setFill("images/UI/shortage.png");
    liveStockLayer.appendChild(porkBlocked);
    var confirmPorkBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(70, 195).setSize(40, 40).setFill("images/UI/checkButton.png");
    porkBlocked.appendChild(confirmPorkBlocked);
    var blockedText = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(5, 120).setSize(170, 40).setFontSize(14).setFontFamily("Comic Sans MS").setText("Livestock Hungry!");
    porkBlocked.appendChild(blockedText);
    var blockedSub = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#FFFFFF").setPosition(2, 140).setSize(175, 40).setFontSize(10).setFontFamily("Comic Sans MS").setText("CHICKENS eat CORN to lay EGGS");
    porkBlocked.appendChild(blockedSub);
    var blockedSub2 = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#FFFFFF").setPosition(2, 155).setSize(175, 40).setFontSize(10).setFontFamily("Comic Sans MS").setText("PIGS eat APPLES to yield HAM");
    porkBlocked.appendChild(blockedSub2);

    var cornIcon2 = (new lime.Sprite).setPosition(50, 180).setFill("images/" + a.crops[5].harvest).setSize(25, 25);
    porkBlocked.appendChild(cornIcon2);
    var appleIcon2 = (new lime.Sprite).setPosition(120, 180).setFill("images/" + a.crops[8].harvest).setSize(25, 25);
    porkBlocked.appendChild(appleIcon2);

    var gLabel5Pork = (new lime.Label).setPosition(64, 186).setSize(20, 16).setText(player.cropsStored[5].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08");
    porkBlocked.appendChild(gLabel5Pork);
    var gLabel8Pork = (new lime.Label).setPosition(134, 186).setSize(20, 16).setText(player.cropsStored[8].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08");
    porkBlocked.appendChild(gLabel8Pork);

    porkBlocked.setHidden(true);

    goog.events.listen(confirmPorkBlocked, ["mousedown", "touchstart"], function () {
        porkBlocked.setHidden(true);
        lsBlock.setHidden(true); vinyardBlock.setHidden(true); orchardBlock.setHidden(true); pastureBlock.setHidden(true);
        if (tutSeen == 1) { homeBlock.setHidden(true); lsBlock.setHidden(true); }
    });








    //////////////////////////////////Vinyard Scene///////////////////////////////////////////  //////////////////////////////////Vinyard Scene///////////////////////////////////////////

    var vinyardScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        vinyardLayer = (new lime.Layer).setAnchorPoint(0, 0),
        vinyardFill1 = (new lime.Sprite).setPosition(0, 0).setSize(a.width, a.height);
    vinyardScene.appendChild(vinyardLayer);
    vinyardLayer.appendChild(vinyardFill1);


    var ggV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 20).setFill("images/UI/greenButtonLg.png");
    vinyardLayer.appendChild(ggV);
    //var topLogoV = (new lime.Sprite).setPosition(155, 10).setSize(150, 22).setFill("images/UI/topMenuPlain.png");
    //vinyardLayer.appendChild(topLogoV);
    var topCoinV = (new lime.Sprite).setPosition(285, 20).setSize(35, 35).setFill(imgArray11[0]);
    vinyardLayer.appendChild(topCoinV);
    var vinyardCash = (new lime.Label).setText(player.money).setFontColor("#E8FC08").setPosition(245, 24).setFontFamily("Comic Sans MS").setFontSize(18);
    vinyardLayer.appendChild(vinyardCash);

    var vinyardBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 45).setSize(a.controlsLayer_w, 423).setFill("images/vinyard/vinyardBack5.png");
    vinyardLayer.appendChild(vinyardBack);
    var horizRoadV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(225, 436).setSize(100, 25).setFill("images/" + a.barnyard[15].image);
    vinyardLayer.appendChild(horizRoadV);
    roadRightV =
        //(new lime.GlossyButton).setColor("#8b008b").setText("Dairy >").setPosition(48, 12).setSize(75, 15)
        (new lime.Sprite).setAnchorPoint(0, 0).setPosition(43, -12).setSize(42, 42).setFill("images/UI/pastureBtn.png");
    horizRoadV.appendChild(roadRightV)

    var toolCountImgV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 7).setSize(35, 35).setFill("images/UI/toolsIcon2.png");
    var toolCountV = (new lime.Label).setText(player.tools).setFontColor("#E8FC08").setPosition(65, 24).setFontFamily("Comic Sans MS").setFontSize(18);
    vinyardLayer.appendChild(toolCountImgV);
    vinyardLayer.appendChild(toolCountV);

    var isblocked1 = localStorage.getItem("GuiGhostFarms_vinyardBlocks");
    var isblocked2 = localStorage.getItem("GuiGhostFarms_vinyardBlocks2");

    var posXO = a.tile_size + 5;
    var posYO = a.tile_size + 180;
    var vine0 = (new farming.Land(a, b, 80, 110, 5, 'non', 'vine0')).setPosition(80, 110); vine0.setSize(45, 50); vinyardLayer.appendChild(vine0)
    var vine1 = (new farming.Land(a, b, 135, 100, 5, 'non', 'vine1')).setPosition(135, 100); vine1.setSize(45, 50); vinyardLayer.appendChild(vine1)
    var vine2 = (new farming.Land(a, b, 200, 95, 5, 'non', 'vine2')).setPosition(200, 95); vine2.setSize(45, 50); vinyardLayer.appendChild(vine2)
    var vine3 = (new farming.Land(a, b, 260, 105, 5, 'non', 'vine3')).setPosition(260, 105); vine3.setSize(45, 50); vinyardLayer.appendChild(vine3)
    if (isblocked2 == 1) {
        vine0.setHidden(true);
        vine1.setHidden(true);
        vine2.setHidden(true);
        vine3.setHidden(true);
    }
    if (isblocked2 == 2) {
        vine0.setHidden(false);
        vine1.setHidden(false);
        vine2.setHidden(false);
        vine3.setHidden(false);
    }

    var vine4 = (new farming.Land(a, b, 105, 200, 5, 'non', 'vine4')).setPosition(105, 200); vine4.setSize(45, 50); vinyardLayer.appendChild(vine4)
    var vine5 = (new farming.Land(a, b, 175, 215, 5, 'non', 'vine5')).setPosition(175, 215); vine5.setSize(45, 50); vinyardLayer.appendChild(vine5)
    var vine6 = (new farming.Land(a, b, 240, 228, 5, 'non', 'vine6')).setPosition(240, 228); vine6.setSize(45, 50); vinyardLayer.appendChild(vine6)
    var vine7 = (new farming.Land(a, b, 45, 210, 5, 'non', 'vine7')).setPosition(45, 210); vine7.setSize(45, 50); vinyardLayer.appendChild(vine7)
    if (isblocked1 == 1) {
        vine4.setHidden(true);
        vine5.setHidden(true);
        vine6.setHidden(true);
        vine7.setHidden(true);
    }

    var vine8 = (new farming.Land(a, b, 75, 370, 5, 'non', 'vine8')).setPosition(75, 370); vine8.setSize(45, 50); vinyardLayer.appendChild(vine8)
    var vine9 = (new farming.Land(a, b, 25, 350, 5, 'non', 'vine9')).setPosition(25, 350); vine9.setSize(45, 50); vinyardLayer.appendChild(vine9)
    var vine10 = (new farming.Land(a, b, 126, 360, 5, 'non', 'vine10')).setPosition(126, 360); vine10.setSize(45, 50); vinyardLayer.appendChild(vine10)
    var vine11 = (new farming.Land(a, b, 219, 315, 5, 'non', 'vine11')).setPosition(219, 315); vine11.setSize(45, 50); vinyardLayer.appendChild(vine11)
    var vine12 = (new farming.Land(a, b, 262, 350, 5, 'non', 'vine12')).setPosition(262, 350); vine12.setSize(45, 50); vinyardLayer.appendChild(vine12)



    //vinyard tree blocks
    var vinyardTreeBlock1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(55, 195).setSize(240, 105).setFill("images/vinyard/treeBlock1.png");
    vinyardLayer.appendChild(vinyardTreeBlock1);
    var upgradeCloudTV1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(55, -60).setSize(190, 250).setFill("images/clouds.png").setOpacity(0.3); vinyardTreeBlock1.appendChild(upgradeCloudTV1);
    var treeUnlockBtnV = (new lime.Label).setText("").setAnchorPoint(0, 0).setFontColor("#E8FC08").setFontWeight(600).setPosition(170, 280).setFontFamily("Comic Sans MS").setSize(90, 130); vinyardLayer.appendChild(treeUnlockBtnV);
    var axeVLower = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 15).setSize(40, 40).setFill("images/axe.png"); vinyardTreeBlock1.appendChild(axeVLower);
    var treesImgV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(240, 240).setSize(35, 35).setFill("images/tools500.png"); vinyardScene.appendChild(treesImgV);

    var axeMoverLabelTV1 = (new lime.Label).setText("60").setPosition(170, 70).setSize(40, 25).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("ComicSans MS").setFill("images/countBack.png");
    vinyardTreeBlock1.appendChild(axeMoverLabelTV1);

    var axerotateV1 = 0;
    upgradeCloudTV1.setHidden(true);
    axeMoverLabelTV1.setHidden(true);
    vinyardTreeBlock1.setHidden(true);
    treeUnlockBtnV.setHidden(true);
    treesImgV.setHidden(true);





    if (isblocked1 == 1) {
        vinyardTreeBlock1.setHidden(false);
        treeUnlockBtnV.setHidden(false);
        treesImgV.setHidden(false);
    }
    goog.events.listen(treesImgV, ["mousedown", "touchstart"], function () {

        if (player.tools >= 500 && globalModalBlock == 0) {
            player.tools = player.tools - 500;
            a.updateTools();
            treesImgV.setHidden(true);
            upgradeCloudTV1.setHidden(false);
            axeMoverLabelTV1.setHidden(false);
            //vinyard lower trees axe anim
            lime.scheduleManager.scheduleWithDelay(function () {
                axerotateV1 = axerotateV1 + 10;
                if (axerotateV1 > 35) { axerotateV1 = -10; };
                axeVLower.setRotation(axerotateV1);

            }, this, 200, 300)
            //right tress  clearing cloud anim
            var secondsToUpgradeTV1 = 60;
            var upCloudWTV1 = 250;
            var upCloudXTV1 = 55;
            var upCloudYTV1 = -60;

            lime.scheduleManager.scheduleWithDelay(function () {

                upgradeCloudTV1.setPosition(upCloudXTV1, upCloudYTV1).setSize(upCloudWTV1, 200)
                upCloudWTV1 = upCloudWTV1 + 10;
                upCloudXTV1 = upCloudXTV1 - 5;
                upCloudYTV1 = upCloudYTV1 - 5
                if (upCloudXTV1 < 45) { upCloudXTV1 = 55; upCloudYTV1 = -60; upCloudWTV1 = 250; }


            }, this, 250, 240)
            //right trees coundown label updates
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                secondsToUpgradeTV1 = secondsToUpgradeTV1 - 1;
                axeMoverLabelTV1.setText(secondsToUpgradeTV1);

                if (secondsToUpgradeTV1 <= 0) {
                    axeMoverLabelTV1.setHidden(true); upgradeCloudTV1.setHidden(true); secondsToUpgradeTV1 = 60;
                    axeVLower.setHidden(true);
                    a.updateTools();
                    a.vinyardBlocksControl(1);
                    vinyardBlocks = 2;
                    isblocked1 = 2;
                    localStorage["GuiGhostFarms_vinyardBlocks"] = isblocked1;
                    treesImgV.setHidden(true);
                }

            }, this, 1000, 60)


        }
    });

    var vinyardTreeBlock2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(72, 78).setSize(235, 100).setFill("images/vinyard/treeBlock2.png");
    vinyardLayer.appendChild(vinyardTreeBlock2);
    var treeUnlockBtnV2 = (new lime.Label).setText("").setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setPosition(170, 165).setSize(90, 130); vinyardLayer.appendChild(treeUnlockBtnV2);
    var upgradeCloudTV2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, -60).setSize(190, 250).setFill("images/clouds.png").setOpacity(0.3); vinyardTreeBlock2.appendChild(upgradeCloudTV2);
    var axeMoverLabelTV2 = (new lime.Label).setText("60").setPosition(150, 75).setSize(40, 25).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("ComicSans MS").setFill("images/countBack.png");
    vinyardTreeBlock2.appendChild(axeMoverLabelTV2);
    var axeVUpper = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(150, 20).setSize(40, 40).setFill("images/axe.png"); vinyardTreeBlock2.appendChild(axeVUpper);
    var treesImgV2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(230, 130).setSize(35, 35).setFill("images/tools500.png"); vinyardScene.appendChild(treesImgV2);
    var axerotateV2 = 0;
    upgradeCloudTV2.setHidden(true);
    axeMoverLabelTV2.setHidden(true);
    vinyardTreeBlock2.setHidden(true);
    treeUnlockBtnV2.setHidden(true);
    treesImgV2.setHidden(true);

    if (isblocked2 == 1) {
        vinyardTreeBlock2.setHidden(false);
        treeUnlockBtnV2.setHidden(false);
        treesImgV2.setHidden(false);
    }

    goog.events.listen(treesImgV2, ["mousedown", "touchstart"], function () {

        if (player.tools >= 500 && globalModalBlock == 0) {
            player.tools = player.tools - 500;
            a.updateTools();
            treesImgV2.setHidden(true);
            upgradeCloudTV2.setHidden(false);
            axeMoverLabelTV2.setHidden(false);
            //vinyard upper trees axe anim
            lime.scheduleManager.scheduleWithDelay(function () {
                axerotateV2 = axerotateV2 + 10;
                if (axerotateV2 > 35) { axerotateV2 = -10; };
                axeVUpper.setRotation(axerotateV2);

            }, this, 200, 300)
            //right tress  clearing cloud anim
            var secondsToUpgradeTV2 = 60;
            var upCloudWTV2 = 250;
            var upCloudXTV2 = 45;
            var upCloudYTV2 = -60;

            lime.scheduleManager.scheduleWithDelay(function () {

                upgradeCloudTV2.setPosition(upCloudXTV2, upCloudYTV2).setSize(upCloudWTV2, 200)
                upCloudWTV2 = upCloudWTV2 + 10;
                upCloudXTV2 = upCloudXTV2 - 5;
                upCloudYTV2 = upCloudYTV2 - 5
                if (upCloudXTV2 < 35) { upCloudXTV2 = 45; upCloudYTV2 = -60; upCloudWTV2 = 250; }


            }, this, 250, 240)

            //right trees coundown label updates
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                secondsToUpgradeTV2 = secondsToUpgradeTV2 - 1;
                axeMoverLabelTV2.setText(secondsToUpgradeTV2);

                if (secondsToUpgradeTV2 <= 0) {
                    axeMoverLabelTV2.setHidden(true); upgradeCloudTV2.setHidden(true); secondsToUpgradeTV2 = 60;
                    axeVUpper.setHidden(true);
                    a.updateTools();
                    a.vinyardBlocksControl(2);
                    vinyardBlocks2 = 2;
                    isblocked2 = 2;
                    localStorage["GuiGhostFarms_vinyardBlocks2"] = isblocked2;
                    treesImgV2.setHidden(true);
                }

            }, this, 1000, 60)




        }

    });


    a.vinyardBlocksControl = function (num) {
        if (num == 1) {

            vinyardTreeBlock1.setHidden(true);
            treeUnlockBtnV.setHidden(true);

            vine4.setHidden(false);
            vine5.setHidden(false);
            vine6.setHidden(false);
            vine7.setHidden(false);
        };
        if (num == 2) {


            vinyardTreeBlock2.setHidden(true);
            treeUnlockBtnV2.setHidden(true);


            vine0.setHidden(false);
            vine1.setHidden(false);
            vine2.setHidden(false);
            vine3.setHidden(false);

        };
    };

    var vinyardBarn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(62, 247).setSize(118, 115).setFill("images/vinyard/house4.png");
    vinyardLayer.appendChild(vinyardBarn);
    var HouseVUnlock3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(78, 275).setSize(39, 42).setFill("images/toolUp3.png");
    vinyardLayer.appendChild(HouseVUnlock3);


    ///vinyard house upgrades
    var scaffoldV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(55, 280).setSize(80, 70).setFill("images/scaffold.png"); vinyardLayer.appendChild(scaffoldV);
    var upgradeCloudV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 220).setSize(100, 150).setFill("images/clouds.png"); vinyardLayer.appendChild(upgradeCloudV);
    var toolMoverLabelV = (new lime.Label).setText("60").setPosition(95, 310).setSize(40, 25).setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("Comic Sans MS").setFill("images/countBack.png");
    var toolMoverV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -50).setSize(50, 50).setFill("images/toolHammer.png");
    vinyardLayer.appendChild(toolMoverLabelV);
    toolMoverLabelV.appendChild(toolMoverV);
    toolMoverV.setRotation(-10);
    var currentRotateV = -10;
    toolMoverLabelV.setHidden(true);
    scaffoldV.setHidden(true);
    upgradeCloudV.setHidden(true);



    if (vinyardHouseLevel > 1) { vinyardBarn.setFill("images/vinyard/house4Upgrade2.png") };
    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim
        var currentPosV = HouseVUnlock3.getPosition();
        currentPosV.y -= 5;

        if (currentPosV.y < 270) { currentPosV.y = 275 };
        HouseVUnlock3.setPosition(currentPosV);
    }, this, 500)
    if (vinyardHouseLevel > 1) { HouseVUnlock3.setHidden(true); }

    //vinyard house upgrade clicked
    goog.events.listen(HouseVUnlock3, ["mousedown", "touchstart"], function () {


        if (globalModalBlock == 0) {
            if (player.tools >= 500) {
                HouseVUnlock3.setHidden(true);
                player.tools = player.tools - 500;

                upgradeCloudV.setHidden(false);
                scaffoldV.setHidden(false);
                toolMoverLabelV.setHidden(false);

                //hammer move logic
                lime.scheduleManager.scheduleWithDelay(function () {
                    currentRotateV = currentRotateV + 10;
                    if (currentRotateV > 35) { currentRotateV = -10; };
                    toolMoverV.setRotation(currentRotateV);
                    //e.appendChild(toolMover);
                }, this, 200, 300)

                //upgrade countdown timer
                var secondsToUpgradeV = 60;
                var upCloudWV = 100;
                var upCloudXV = 45;
                var upCloudYV = 220;
                lime.scheduleManager.scheduleWithDelay(function () {
                    //add upgrade anim
                    secondsToUpgradeV = secondsToUpgradeV - 1;


                    toolMoverLabelV.setText(secondsToUpgradeV);

                    if (secondsToUpgradeV <= 0) { toolMoverLabelV.setHidden(true); scaffoldV.setHidden(true); upgradeCloudV.setHidden(true); secondsToUpgradeV = 60; }

                }, this, 1000, 60)

                ///upgrade cloud vinyard
                lime.scheduleManager.scheduleWithDelay(function () {
                    //add upgrade anim

                    upgradeCloudV.setPosition(upCloudXV, upCloudYV).setSize(upCloudWV, 200)
                    upCloudWV = upCloudWV + 10;
                    upCloudXV = upCloudXV - 5;
                    upCloudYV = upCloudYV - 5
                    if (upCloudXV < 30) { upCloudXV = 45; upCloudYV = 220; upCloudWV = 100; }


                }, this, 250, 240)


                //upgrade the Vinyard after the 60 seconds
                setTimeout(function () {
                    HouseVUnlock3.setHidden(true);            //barnUnlockBtn.setHidden(true);
                    vinyardBarn.setFill("images/vinyard/house4Upgrade2.png");
                    HouseVUnlock3.setHidden(true);
                    vinyardHouseLevel = 2;
                    //start making jelly
                    a.makeJelly();

                    localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player));
                    localStorage.setItem('GuiGhostFarms_toolsEver', toolsEver);
                    localStorage.setItem('GuiGhostFarms_moneyEver', moneyEver);
                    localStorage["GuiGhostFarms_vinyardHouseLevel"] = vinyardHouseLevel;
                    jellyBonus.setHidden(false);
                    setTimeout(function () { jellyBonus.setHidden(true); }, 2500);
                }, 60000);
                //    

            }
        }

    });

    var collectJelly = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(120, 260).setSize(50, 67).setFill("images/UI/speechBubble.png");
    vinyardLayer.appendChild(collectJelly);
    var collectJellyIcon = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(8, 2).setSize(30, 31).setFill("images/" + a.crops[13].harvest);
    collectJelly.appendChild(collectJellyIcon);
    var collectJellyLabel = (new lime.Label).setText("+ 0 ").setFontWeight(500).setFontColor("#E8FC08").setPosition(23, 44).setSize(30, 18).setFontFamily("Comic Sans MS");
    collectJelly.appendChild(collectJellyLabel);
    collectJelly.setHidden(true);
    var jellyWaiting = 0;
    var jellyUpCount = (new lime.Label).setText("+ 1 Jelly").setFontWeight(600).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setPosition(145, 335).setOpacity(.4);
    vinyardLayer.appendChild(jellyUpCount);
    jellyUpCount.setHidden(true);


    goog.events.listen(collectJelly, ["mousedown", "touchstart"], function () {
        collectJelly.setHidden(true);
        player.cropsStored[13].stored = player.cropsStored[13].stored + jellyWaiting;
        count13.setText(player.cropsStored[13].stored);
        gLabel13.setText(player.cropsStored[13].stored);
        jellyWaiting = 0;
        purchaseSound.play();
    });
    //cost display
    var costDisplayV = (new lime.Label).setPosition(156, 180).setSize(25, 25).setText("-$50").setFontSize(14).setFontFamily("Comic Sans MS").setFontColor("#e1f00e").setFontWeight(600);
    vinyardLayer.appendChild(costDisplayV);
    var costCoinV = (new lime.Sprite).setPosition(30, -8).setSize(30, 30).setFill(imgArray11[0]); costDisplayV.appendChild(costCoinV);
    costDisplayV.setHidden(true);


    var controlsBackVin = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, a.height - a.controlsLayer_h - 5).setSize(a.controlsLayer_w, a.controlsLayer_h + 5).setFill("images/UI/blackButton.png");
    vinyardLayer.appendChild(controlsBackVin);
    //vinyard growing set
    var hhV = b.currentCrop;
    var wV = (new lime.Label).setText("Growing " + a.crops[12].name).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(12).setPosition(a.controlsLayer_w / 2 - 20, a.height - a.controlsLayer_h / 2 - 11);
    vinyardLayer.appendChild(wV);
    var zV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - 28, a.height - a.controlsLayer_h / 2 - 10).setFill("images/" + a.crops[12].harvest).setSize(30, 38);
    vinyardLayer.appendChild(zV);




    //vinyard farmer anim
    var vinFarmer = (new lime.Sprite).setPosition(60, 350).setFill("images/vinyard/vinFarmer1.png").setSize(26, 26);
    vinyardLayer.appendChild(vinFarmer);
    var vinFarmerI = 0
    lime.scheduleManager.scheduleWithDelay(function () {
        //add upgrade anim

        vinFarmerI = vinFarmerI + 1;
        if (vinFarmerI > 58) { vinFarmerI = 1 };
        if (vinFarmerI < 11) { vinFarmer.setFill("images/vinyard/vinFarmer" + vinFarmerI + ".png"); };

        if (vinFarmerI == 2) { vinFarmer.setPosition(65, 350) };
        if (vinFarmerI == 3) { vinFarmer.setPosition(70, 350) };
        if (vinFarmerI == 4) { vinFarmer.setPosition(75, 350); vinFarmer.setFill("images/vinyard/vinFarmer4.png"); };
        if (vinFarmerI == 5) { vinFarmer.setPosition(75, 355); };
        if (vinFarmerI == 6) { vinFarmer.setPosition(75, 360); };
        if (vinFarmerI == 7) { vinFarmer.setPosition(75, 365); vinFarmer.setFill("images/vinyard/vinFarmer4.png"); };
        if (vinFarmerI == 8) { vinFarmer.setPosition(75, 360); vinFarmer.setFill("images/vinyard/vinFarmer4.png"); };
        if (vinFarmerI == 9) { vinFarmer.setPosition(75, 355); };
        if (vinFarmerI == 10) { vinFarmer.setPosition(75, 350); };
        if (vinFarmerI == 11) { vinFarmer.setPosition(80, 350); vinFarmer.setFill("images/vinyard/vinFarmer1.png"); };
        if (vinFarmerI == 12) { vinFarmer.setPosition(85, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 13) { vinFarmer.setPosition(90, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 14) { vinFarmer.setPosition(95, 350); vinFarmer.setFill("images/vinyard/vinFarmer1.png"); };
        if (vinFarmerI == 15) { vinFarmer.setPosition(100, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 16) { vinFarmer.setPosition(105, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 17) { vinFarmer.setPosition(110, 350); vinFarmer.setFill("images/vinyard/vinFarmer1.png"); };
        if (vinFarmerI == 18) { vinFarmer.setPosition(115, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 19) { vinFarmer.setPosition(120, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 20) { vinFarmer.setPosition(125, 350); vinFarmer.setFill("images/vinyard/vinFarmer1.png"); };
        if (vinFarmerI == 21) { vinFarmer.setPosition(130, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 22) { vinFarmer.setPosition(135, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 23) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 24) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer8.png"); };
        if (vinFarmerI == 25) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer8.png"); };

        if (vinFarmerI == 26) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 27) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 28) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 29) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer9.png"); };

        if (vinFarmerI == 30) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 31) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 32) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };

        if (vinFarmerI == 33) { vinFarmer.setPosition(145, 350); vinFarmer.setFill("images/vinyard/vinFarmer1.png"); };
        if (vinFarmerI == 34) { vinFarmer.setPosition(150, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 35) { vinFarmer.setPosition(155, 350); vinFarmer.setFill("images/vinyard/vinFarmer3.png"); };
        if (vinFarmerI == 36) { vinFarmer.setPosition(160, 350); vinFarmer.setFill("images/vinyard/vinFarmer1.png"); };
        if (vinFarmerI == 37) { vinFarmer.setPosition(165, 350); vinFarmer.setFill("images/vinyard/vinFarmer2.png"); };
        if (vinFarmerI == 38) { vinFarmer.setPosition(165, 350); vinFarmer.setFill("images/vinyard/vinFarmer4.png"); };

        if (vinFarmerI == 39) { vinFarmer.setPosition(160, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 40) { vinFarmer.setPosition(155, 350); vinFarmer.setFill("images/vinyard/vinFarmer17.png"); };
        if (vinFarmerI == 41) { vinFarmer.setPosition(150, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };

        if (vinFarmerI == 42) { vinFarmer.setPosition(145, 350); vinFarmer.setFill("images/vinyard/vinFarmer19.png"); };
        if (vinFarmerI == 43) { vinFarmer.setPosition(140, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };





        if (vinFarmerI == 44) { vinFarmer.setPosition(135, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 45) { vinFarmer.setPosition(130, 350); vinFarmer.setFill("images/vinyard/vinFarmer17.png"); };
        if (vinFarmerI == 46) { vinFarmer.setPosition(125, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 47) { vinFarmer.setPosition(120, 350); vinFarmer.setFill("images/vinyard/vinFarmer19.png"); };
        if (vinFarmerI == 48) { vinFarmer.setPosition(115, 350); vinFarmer.setFill("images/vinyard/vinFarmer17.png"); };
        if (vinFarmerI == 49) { vinFarmer.setPosition(110, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 50) { vinFarmer.setPosition(105, 350); vinFarmer.setFill("images/vinyard/vinFarmer19.png"); };
        if (vinFarmerI == 51) { vinFarmer.setPosition(100, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 52) { vinFarmer.setPosition(95, 350); vinFarmer.setFill("images/vinyard/vinFarmer17.png"); };
        if (vinFarmerI == 53) { vinFarmer.setPosition(90, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 54) { vinFarmer.setPosition(85, 350); vinFarmer.setFill("images/vinyard/vinFarmer19.png"); };
        if (vinFarmerI == 55) { vinFarmer.setPosition(80, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 56) { vinFarmer.setPosition(75, 350); vinFarmer.setFill("images/vinyard/vinFarmer17.png"); };
        if (vinFarmerI == 57) { vinFarmer.setPosition(70, 350); vinFarmer.setFill("images/vinyard/vinFarmer18.png"); };
        if (vinFarmerI == 58) { vinFarmer.setPosition(65, 350); vinFarmer.setFill("images/vinyard/vinFarmer4.png"); };
        //if (vinFarmerI == 15) { vinFarmer.setPosition(50, 80); vinFarmer.setFill("images/blacksmith13.png"); };
        //if (vinFarmerI == 16) { vinFarmer.setPosition(50, 75); vinFarmer.setFill("images/blacksmith1.png") };
        //if (vinFarmerI == 17) { vinFarmer.setPosition(50, 75); vinFarmer.setFill("images/blacksmith2.png") };
        //if (vinFarmerI == 18) { vinFarmer.setPosition(50, 77); vinFarmer.setFill("images/blacksmith1.png") };
        //if (vinFarmerI == 19) { vinFarmer.setPosition(50, 77); vinFarmer.setFill("images/blacksmith2.png") };


    }, this, 250)

    var harvest4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (15), a.height / 2).setFill("images/" + a.crops[12].harvest).setSize(26, 21);
    vinyardLayer.appendChild(harvest4);
    harvest4.setHidden(true);


    var menuV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 467).setSize(35, 35).setFill("images/UI/gearButton.png");
    vinyardLayer.appendChild(menuV);


    //MUTE From Vinyard
    var muteBtnV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 503).setSize(35, 35).setFill(imgArray[15]); vinyardLayer.appendChild(muteBtnV);
    var achieveBtnV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 467).setSize(35, 35).setFill("images/UI/trophyBtn.png"); vinyardLayer.appendChild(achieveBtnV);
    var fbBtnV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 503).setSize(35, 35).setFill("images/UI/starButton.png"); vinyardLayer.appendChild(fbBtnV);
    goog.events.listen(fbBtnV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            shareFacebook();

        }
    });
    goog.events.listen(muteBtnV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isMuted = lime.audio.getMute();
            if (isMuted) {
                lime.audio.setMute(false); themeSong.play(true); localStorage.setItem('GuiGhostFarms_muted', 0)
                setMute(2);
            } else { lime.audio.setMute(true); setMute(1); localStorage.setItem('GuiGhostFarms_muted', 1) }
        }
    });
    goog.events.listen(achieveBtnV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 4;
            achieve(sceneBefore);
        }
    });
    goog.events.listen(menuV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            sceneBefore = 4;
            c.replaceScene(menuScene, lime.transitions.SlideInUp);
        }
    });



    var marketV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(214, a.height - a.controlsLayer_h - 4).setSize(90, 65).setFill("images/" + a.barnyard[3].image);
    vinyardLayer.appendChild(marketV)
    goog.events.listen(marketV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 4;
            c.replaceScene(marketScene, lime.transitions.SlideInDown);
            count0.setText(player.cropsStored[0].stored);
            count1.setText(player.cropsStored[1].stored);
            count2.setText(player.cropsStored[2].stored);
            count3.setText(player.cropsStored[3].stored);
            count4.setText(player.cropsStored[4].stored);
            count5.setText(player.cropsStored[5].stored);
            count6.setText(player.cropsStored[6].stored);
            count7.setText(player.cropsStored[7].stored);
            count8.setText(player.cropsStored[8].stored);
            count9.setText(player.cropsStored[9].stored);
            count10.setText(player.cropsStored[10].stored);
            count11.setText(player.cropsStored[11].stored);
            count12.setText(player.cropsStored[12].stored);
            count13.setText(player.cropsStored[13].stored);
        }
    });

    goog.events.listen(roadRightV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            c.replaceScene(pastureScene, lime.transitions.SlideInRight); sceneBefore = 2; b.currentCrop = 6;
        }
    });


    lsBlock.setHidden(true);





    //vinyard scene clouds 

    var cloudsV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-400, -105).setSize(a.width, 700).setFill("images/clouds.png").setOpacity(0.3);
    vinyardLayer.appendChild(cloudsV);
    //cloud anim
    var cloudAnimV = 0
    lime.scheduleManager.scheduleWithDelay(function () {
        cloudAnimV = cloudAnimV + 2;
        cloudsV.setPosition(cloudAnimV, -105);
        if (cloudAnimV > a.width + 200) { cloudAnimV = -400 }
    }, this, 200)
    //end clouds vinyard


    ///storage menu vinyard
    //vinyard inventory icons
    var storageIconV = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 22).setSize(40, 40).setFill("images/UI/vinyardBtn.png");
    vinyardLayer.appendChild(storageIconV);
    var storageMenuV = (new lime.Sprite).setPosition((a.controlsLayer_w / 2) - 5, 78).setSize(200, 70).setFill("images/UI/greenButtonLg.png");
    vinyardLayer.appendChild(storageMenuV);


    var grapesIcon = (new lime.Sprite).setPosition(-35, -15).setFill("images/" + a.crops[12].harvest).setSize(26, 30);
    storageMenuV.appendChild(grapesIcon);
    var jellyIcon = (new lime.Sprite).setPosition(35, -15).setFill("images/" + a.crops[13].harvest).setSize(32, 30);
    storageMenuV.appendChild(jellyIcon);
    var gLabel12 = (new lime.Label).setPosition(-35, 15).setSize(26, 18).setText(player.cropsStored[12].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(18);
    storageMenuV.appendChild(gLabel12);
    var gLabel13 = (new lime.Label).setPosition(35, 15).setSize(26, 18).setText(player.cropsStored[13].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(18);
    storageMenuV.appendChild(gLabel13);
    var dayLabelV = (new lime.Label).setFontSize(10).setPosition(-45, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Day " + dayCount).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(14);
    storageMenuV.appendChild(dayLabelV);
    var yearLabelV = (new lime.Label).setFontSize(10).setPosition(45, 35).setSize(60, 15).setFill("images/UI/purpleButtonLg.png").setText("Year " + yearCount).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontSize(14);
    storageMenuV.appendChild(yearLabelV);
    storageMenuV.setHidden(true);
    var storageToggleV = 0;
    storageMenuV.setHidden(true);
    goog.events.listen(storageIconV, ["mousedown", "touchstart"], function () {
        if (storageToggleV == 0) { storageMenuV.setHidden(false); storageToggleV = 1 }
        else { storageMenuV.setHidden(true); storageToggleV = 0 }
    });

    var compassV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(130, 449).setSize(35, 35).setFill("images/UI/compass22.png"); vinyardLayer.appendChild(compassV);
    ///vinyard block
    var vinyardBlock = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#ffffff").setOpacity(0.75);
    vinyardLayer.appendChild(vinyardBlock);
    //goog.events.listen(vinyardBlock, ["mousedown", "touchstart"], function () {
    //    break;
    //});
    vinyardBlock.setHidden(true);

    ///Out of Cash modal- vinyard
    var outOfCashV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 100).setSize(210, 220).setFill("images/UI/outOfCash.png");
    vinyardLayer.appendChild(outOfCashV);
    var buyStarCashV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(122, 212).setSize(75, 35).setFill("images/UI/buyStarCash.png");
    outOfCashV.appendChild(buyStarCashV);
    var marketBtn1V = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(15, 212).setSize(75, 35).setFill("images/UI/marketBtn.png");
    outOfCashV.appendChild(marketBtn1V);
    var cancelBtnCashV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(89, 212).setSize(35, 35).setFill("images/UI/XButton.png");
    outOfCashV.appendChild(cancelBtnCashV);
    outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);

    goog.events.listen(buyStarCashV, ["mousedown", "touchstart"], function () {            //starCash Button
        if (globalModalBlock == 0) {
            warningSeen = 1;
            outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
            outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
            outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
            outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
            pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); lsBlock.setHidden(true);
            shareFacebook();

        }
    });
    goog.events.listen(marketBtn1V, ["mousedown", "touchstart"], function () {            //market Button

        warningSeen = 1;
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); lsBlock.setHidden(true);
        a.updateStored();
        c.replaceScene(marketScene, lime.transitions.SlideInDown);
        globalModalBlock = 0;
    });
    goog.events.listen(cancelBtnCashV, ["mousedown", "touchstart"], function () {            //cancel Button
        pastureBlock.setHidden(true);
        outOfCashP.setHidden(true); marketBtn1P.setHidden(true); buyStarCashP.setHidden(true);
        outOfCashO.setHidden(true); marketBtn1O.setHidden(true); buyStarCashO.setHidden(true);
        outOfCashV.setHidden(true); marketBtn1V.setHidden(true); buyStarCashV.setHidden(true);
        outOfCash.setHidden(true); marketBtn1.setHidden(true); buyStarCash.setHidden(true);
        pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true); lsBlock.setHidden(true);
        warningSeen = 1;
        globalModalBlock = 0;
    });

    if (player.money < (a.crops[b.currentCrop].cost) && warningSeen == 0) {
        pastureBlock.setHidden(false); homeBlock.setHidden(false); orchardBlock.setHidden(false); vinyardBlock.setHidden(false); lsBlock.setHidden(false);
        outOfCashP.setHidden(false); marketBtn1P.setHidden(false); buyStarCashP.setHidden(false);
        outOfCashO.setHidden(false); marketBtn1O.setHidden(false); buyStarCashO.setHidden(false);
        outOfCashV.setHidden(false); marketBtn1V.setHidden(false); buyStarCashV.setHidden(false);
        outOfCash.setHidden(false); marketBtn1.setHidden(false); buyStarCash.setHidden(false);
        globalModalBlock = 1;
    }

    ////achievement Modal
    var achieveNotifV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(45, 130).setSize(210, 220).setFill("images/UI/achieveNotif.png");
    var achieveTextSubV = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#08fcef").setPosition(30, 35).setSize(150, 60).setFontSize(12).setText("Achieve Text");
    achieveNotifV.appendChild(achieveTextSubV);
    var achieveTextV = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(13, 160).setSize(190, 60).setFontSize(16).setText("Blacksmith I");
    achieveNotifV.appendChild(achieveTextV);
    var achieveSCV = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#301934").setPosition(21, 186).setSize(190, 60).setFontSize(18).setText(" + ");
    achieveNotifV.appendChild(achieveSCV);
    var confirmBtnAV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 211).setSize(40, 40).setFill("images/UI/checkButton.png");
    achieveNotifV.appendChild(confirmBtnAV);
    vinyardLayer.appendChild(achieveNotifV);
    achieveNotifV.setHidden(true);

    goog.events.listen(confirmBtnAV, ["mousedown", "touchstart"], function () {            //for sale pasture
        achieveNotif.setHidden(true);
        achieveNotifP.setHidden(true);
        achieveNotifV.setHidden(true);
        achieveNotifO.setHidden(true);
        achieveNotifLS.setHidden(true);
        if (tutSeen == 1) { vinyardBlock.setHidden(true); orchardBlock.setHidden(true); pastureBlock.setHidden(true); lsBlock.setHidden(true); homeBlock.setHidden(true); }

    });



    /// compass nav Vinyard
    var compassVBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 100).setSize(250, 250).setFill("images/UI/compass3.png"); vinyardLayer.appendChild(compassVBack)
    var orchardNavV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 35).setSize(50, 50).setFill("images/UI/orchardBtn.png"); compassVBack.appendChild(orchardNavV)
    var lsNavV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(170, 170).setSize(50, 50).setFill("images/UI/lsBtn.png"); compassVBack.appendChild(lsNavV)
    var vinyardNavV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 35).setSize(50, 50).setFill("images/UI/vinyardBtn.png"); compassVBack.appendChild(vinyardNavV)
    var homeNavV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(96, 100).setSize(60, 60).setFill("images/UI/homeButton.png"); compassVBack.appendChild(homeNavV)
    var pastureNavV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 170).setSize(50, 50).setFill("images/UI/pastureBtn.png"); compassVBack.appendChild(pastureNavV)
    var closeNavV = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(100, 222).setSize(50, 50).setFill("images/UI/XButton.png"); compassVBack.appendChild(closeNavV)
    compassVBack.setHidden(true);


    goog.events.listen(compassV, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) { checkAcresNav(); vinyardBlock.setHidden(false); }
    });
    goog.events.listen(closeNavV, ["mousedown", "touchstart"], function () { closeAcresNav(); vinyardBlock.setHidden(true); globalModalBlock = 0; });
    goog.events.listen(homeNavV, ["mousedown", "touchstart"], function () {
        if (compassVisible) {
            closeAcresNav();
            a.sceneBefore = 1;
            b.currentCrop = homeCrop;
            if (b.currentCrop > 5) { b.currentCrop = 0; }
            c.replaceScene(d, lime.transitions.SlideInRight);
            vinyardBlock.setHidden(true);
            globalModalBlock = 0;
        }
    });
    goog.events.listen(pastureNavV, ["mousedown", "touchstart"], function () {
        if (acres[1].owned == 1 && compassVisible) {
            a.sceneBefore = 2;
            closeAcresNav();
            cowSound.play(); checkShortage();
            b.currentCrop = 6;
            c.replaceScene(pastureScene, lime.transitions.SlideInRight);
            vinyardBlock.setHidden(true);
            globalModalBlock = 0;
        }
    });
    goog.events.listen(orchardNavV, ["mousedown", "touchstart"], function () {
        if (acres[2].owned == 1 && compassVisible) {
            a.sceneBefore = 3;
            waterfallSound.play();
            closeAcresNav();
            oldCrop = b.currentCrop; b.currentCrop = 8;
            c.replaceScene(orchardScene, lime.transitions.SlideInRight);
            vinyardBlock.setHidden(true);
            globalModalBlock = 0;
        }
    });
    goog.events.listen(vinyardNavV, ["mousedown", "touchstart"], function () {
        if (acres[3].owned == 1 && compassVisible) {
            closeAcresNav();
            vinyardBlock.setHidden(true);
            globalModalBlock = 0;

            //a.sceneBefore = 5;
        }
    });
    goog.events.listen(lsNavV, ["mousedown", "touchstart"], function () {
        if (acres[4].owned == 1 && compassVisible) {
            closeAcresNav();
            a.sceneBefore = 5;                                                                                                                              ///from pature to Market
            c.replaceScene(liveStockScene, lime.transitions.SlideInRight);

            chickenSound.play();
            pig1Sound.play();
            setTimeout(function () { pig2Sound.play(); }, 5000);
            checkShortage();
            vinyardBlock.setHidden(true);
            globalModalBlock = 0;
        }
    });



    ////vinyard SHORTAGE block modal
    var jellyBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(60, 145).setSize(180, 200).setFill("images/UI/shortage.png");
    vinyardLayer.appendChild(jellyBlocked);
    var confirmjellyBlocked = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(70, 195).setSize(40, 40).setFill("images/UI/checkButton.png");
    jellyBlocked.appendChild(confirmjellyBlocked);
    var blockedTextJ = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(5, 120).setSize(170, 40).setFontSize(14).setText("Jelly Making Halted!");
    jellyBlocked.appendChild(blockedTextJ);
    var blockedSubJ = (new lime.Label).setAnchorPoint(0, 0).setFontFamily("Comic Sans MS").setFontColor("#FFFFFF").setPosition(2, 140).setSize(175, 40).setFontSize(10).setText("You need to grow more GRAPES to make JELLY");
    jellyBlocked.appendChild(blockedSubJ);
    var grapesIcon2 = (new lime.Sprite).setPosition(85, 180).setFill("images/" + a.crops[12].harvest).setSize(20, 25);
    jellyBlocked.appendChild(grapesIcon2);
    var gLabel5Jelly = (new lime.Label).setPosition(105, 186).setSize(20, 16).setText(player.cropsStored[12].stored).setFontFamily("Comic Sans MS").setFontColor("#E8FC08");
    jellyBlocked.appendChild(gLabel5Jelly);

    jellyBlocked.setHidden(true);

    goog.events.listen(confirmjellyBlocked, ["mousedown", "touchstart"], function () {
        jellyBlocked.setHidden(true);
        if (isblocked1 == 2) { treeUnlockBtnV2.setHidden(true); }
        vinyardBlock.setHidden(true); pastureBlock.setHidden(true); homeBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true);
    });
    var jellyBonus = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(30, 130).setSize(250, 250).setFill("images/vinyard/jellyBonus2.png");
    vinyardLayer.appendChild(jellyBonus);
    jellyBonus.setHidden(true);




    ///////////achievement scene///////////achieve scene///////////achieve scene///////////achieve scene///////////achieve scene///////////achieve scene///////////achieve scene///////////
    var achieveScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        achieveLayer = (new lime.Layer).setAnchorPoint(0, 0),
        achieveFill = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
    achieveScene.appendChild(achieveFill);
    achieveScene.appendChild(achieveLayer);
    var achieveBack = (new lime.Sprite).setAnchorPoint(0.0).setPosition(0, 0).setFill("images/UI/achieveBack.png").setSize(a.width, a.height);
    achieveLayer.appendChild(achieveBack);
    backBtnAchieve = (new lime.GlossyButton).setColor("#1ce636").setText("Back").setPosition(a.width / 2, a.height - 20).setSize(80, 40);
    achieveLayer.appendChild(backBtnAchieve);

    var achieve1 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 100).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve1);
    var achieve1Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(75, 100).setText("Harvester I").setSize(152, 40); achieveLayer.appendChild(achieve1Label);
    var achieve1Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setFontSize(11).setPosition(80, 125).setText("Harvest 500 crops").setSize(152, 40); achieveLayer.appendChild(achieve1Label2);
    var achieve1Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 100).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve1Star);
    var achieve1Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 105).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve1Check);

    var achieve2 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 145).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve2);
    var achieve2Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(75, 145).setText("Harvester II").setSize(152, 40); achieveLayer.appendChild(achieve2Label);
    var achieve2Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(80, 170).setFontSize(11).setText("Harvest 5000 crops").setSize(152, 40); achieveLayer.appendChild(achieve2Label2);
    var achieve2Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 145).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve2Star);
    var achieve2Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 150).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve2Check);

    var achieve3 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 190).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve3);
    var achieve3Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(75, 190).setText("Expansion").setSize(152, 40); achieveLayer.appendChild(achieve3Label);
    var achieve3Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(80, 215).setFontSize(11).setText("Purchase another Acre").setSize(152, 40); achieveLayer.appendChild(achieve3Label2);
    var achieve3Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 190).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve3Star);
    var achieve3Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 195).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve3Check);

    var achieve4 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 235).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve4);
    var achieve4Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(75, 235).setText("Carpenter").setSize(152, 40); achieveLayer.appendChild(achieve4Label);
    var achieve4Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(80, 260).setFontSize(11).setText("Upgrade Barn to Max").setSize(152, 40); achieveLayer.appendChild(achieve4Label2);
    var achieve4Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 235).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve4Star);
    var achieve4Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 240).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve4Check);


    var achieve5 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 100).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve5);
    var achieve5Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 100).setText("Blacksmith I").setSize(152, 40); achieveLayer.appendChild(achieve5Label);
    var achieve5Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 125).setFontSize(11).setText("Collect 500 Tools").setSize(152, 40); achieveLayer.appendChild(achieve5Label2);
    var achieve5Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 100).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve5Star);
    var achieve5Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 105).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve5Check);

    var achieve6 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 145).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve6);
    var achieve6Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 145).setText("Blacksmith II").setSize(152, 40); achieveLayer.appendChild(achieve6Label);
    var achieve6Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 170).setFontSize(11).setText("Collect 5000 Tools").setSize(152, 40); achieveLayer.appendChild(achieve6Label2);
    var achieve6Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 145).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve6Star);
    var achieve6Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 150).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve6Check);

    var achieve7 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 190).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve7);
    var achieve7Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 190).setText("Patience").setSize(152, 40); achieveLayer.appendChild(achieve7Label);
    var achieve7Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 215).setFontSize(11).setText("Play for 1 Farm Year").setSize(152, 40); achieveLayer.appendChild(achieve7Label2);
    var achieve7Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 190).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve7Star);
    var achieve7Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 195).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve7Check);

    var achieve8 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 235).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve8);
    var achieve8Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 235).setText("Acreage").setSize(152, 40); achieveLayer.appendChild(achieve8Label);
    var achieve8Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 260).setFontSize(11).setText("Own all 5 Acres").setSize(152, 40); achieveLayer.appendChild(achieve8Label2);
    var achieve8Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 235).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve8Star);
    var achieve8Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 240).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve8Check);

    var achieve9 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 280).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve9);
    var achieve9Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(75, 280).setText("Jelly Making").setSize(152, 40); achieveLayer.appendChild(achieve9Label);
    var achieve9Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(80, 305).setFontSize(11).setText("Unlock Jelly Production").setSize(152, 40); achieveLayer.appendChild(achieve9Label2);
    var achieve9Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 280).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve9Star);
    var achieve9Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 285).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve9Check);

    var achieve10 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 325).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve10);
    var achieve10Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(75, 325).setText("Lumberjack").setSize(152, 40); achieveLayer.appendChild(achieve10Label);
    var achieve10Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(75, 350).setFontSize(11).setText("Clear all Forest Blocks").setSize(152, 40); achieveLayer.appendChild(achieve10Label2);
    var achieve10Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 325).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve10Star);
    var achieve10Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 330).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve10Check);

    var achieve11 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 370).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve11);
    var achieve11Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(72, 370).setText("Breakfast Time").setSize(152, 40); achieveLayer.appendChild(achieve11Label);
    var achieve11Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(80, 395).setFontSize(11).setText("Obtain 100 Ham and Eggs").setSize(152, 40); achieveLayer.appendChild(achieve11Label2);
    var achieve11Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 370).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve11Star);
    var achieve11Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 375).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve11Check);

    var achieve12 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(9, 415).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve12);
    var achieve12Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFill("#663300").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(72, 415).setText("Balanced Diet").setSize(152, 40); achieveLayer.appendChild(achieve12Label);
    var achieve12Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(75, 440).setFontSize(11).setText("Obtain 10 of each Crop").setSize(152, 40); achieveLayer.appendChild(achieve12Label2);
    var achieve12Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(120, 415).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve12Star);
    var achieve12Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 420).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve12Check);


    var achieve13 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 280).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve13);
    var achieve13Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 280).setText("Milk Master").setSize(152, 40); achieveLayer.appendChild(achieve13Label);
    var achieve13Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 305).setFontSize(11).setText("Upgrade Dairy to Max").setSize(152, 40); achieveLayer.appendChild(achieve13Label2);
    var achieve13Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 280).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve13Star);
    var achieve13Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 285).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve13Check);

    var achieve14 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 325).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve14);
    var achieve14Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 325).setText("Merchant").setSize(152, 40); achieveLayer.appendChild(achieve14Label);
    var achieve14Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 350).setFontSize(11).setText("Earn $5000 at Market").setSize(152, 40); achieveLayer.appendChild(achieve14Label2);
    var achieve14Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 325).setFill("images/UI/plus5StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve14Star);
    var achieve14Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 330).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve14Check);

    var achieve15 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 370).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve15);
    var achieve15Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(220, 370).setText("Cross-Over").setSize(152, 40); achieveLayer.appendChild(achieve15Label);
    var achieve15Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 395).setFontSize(11).setText("Buy $ with StarCash").setSize(152, 40); achieveLayer.appendChild(achieve15Label2);
    var achieve15Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 370).setFill("images/UI/plus10StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve15Star);
    var achieve15Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 375).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve15Check);

    var achieve16 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(157, 415).setFill("images/UI/achieveTile.png").setSize(142, 40); achieveLayer.appendChild(achieve16);
    var achieve16Label = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(219, 415).setText("Back for More").setSize(152, 40); achieveLayer.appendChild(achieve16Label);
    var achieve16Label2 = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#ffffff").setPosition(226, 440).setFontSize(11).setText("Play for 10 Farm Years").setSize(152, 40); achieveLayer.appendChild(achieve16Label2);
    var achieve16Star = (new lime.Sprite).setAnchorPoint(0.0).setPosition(266, 415).setFill("images/UI/plus50StarCash.png").setSize(30, 29.5); achieveLayer.appendChild(achieve16Star);
    var achieve16Check = (new lime.Sprite).setAnchorPoint(0.0).setPosition(158, 420).setFill("images/UI/check.png").setSize(16, 16); achieveLayer.appendChild(achieve16Check);


    var starCashLabelA = (new lime.Label).setAnchorPoint(0.0).setFill("#C14825").setFontFamily("Comic Sans MS").setFontColor("#5c00e6").setFontSize(18).setPosition(160, 470).setText(starCash).setSize(152, 40); achieveLayer.appendChild(starCashLabelA);

      ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///
    ////house scene
      ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///  ///
    var houseScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
        houseLayer = (new lime.Layer).setAnchorPoint(0, 0),
        houseFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height - 90).setFill("#0D0D0D");

    houseScene.appendChild(houseFill1);
    houseScene.appendChild(houseLayer);
    var houseOptionsBack = (new lime.Sprite).setAnchorPoint(0.0).setPosition(0, 30).setFill("images/UI/brownBtn.png").setSize(a.width, 125);
    houseLayer.appendChild(houseOptionsBack);

    var houseBack = (new lime.Sprite).setAnchorPoint(0.0).setPosition(0, 115).setFill("images/houseUpgrades/FarmHomeInteriorOrange.png").setSize(a.width, a.height - 165);
    houseLayer.appendChild(houseBack);
    var fireplace = (new lime.Sprite).setAnchorPoint(0.0).setPosition(123, 30).setFill(imgArray12[0]).setSize(64, 46);
    houseBack.appendChild(fireplace);
    var firesInFireplace = (new lime.Sprite).setAnchorPoint(0.0).setPosition(20, 20).setFill(imgArray12[1]).setSize(22, 18);
    fireplace.appendChild(firesInFireplace);

    var stoveFire = (new lime.Sprite).setAnchorPoint(0.0).setPosition(160, 372).setFill(imgArray12[4]).setSize(22, 15);
    houseLayer.appendChild(stoveFire);


    fireState = 1
    lime.scheduleManager.scheduleWithDelay(function () {
    
        firesInFireplace.setFill(imgArray12[fireState]);
        stoveFire.setFill(imgArray12[(fireState + 3)])
        fireState++;
        if (fireState > 3) { fireState = 1;} 
       
    }, this, 200)


    // room 2 block
    var houseExpandCover = (new lime.GlossyButton).setColor("#B5B6B7").setAnchorPoint(0.0).setPosition(155, 220).setSize(a.width - 15, 177).setText("Build More Room").setOpacity(0.8);
    houseLayer.appendChild(houseExpandCover); 
    var expandToolsImg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-15, 10).setSize(35, 35).setFill("images/tools500.png");
    houseExpandCover.appendChild(expandToolsImg); 
    var scaffoldHo = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-125,-85).setSize(a.width - 75, 150).setFill("images/scaffold.png"); houseExpandCover.appendChild(scaffoldHo);

    var upgradeCloudHo = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-130, -100).setSize(300, 200).setFill("images/clouds.png"); houseExpandCover.appendChild(upgradeCloudHo);

    var toolMoverLabelHo = (new lime.Label).setText("90").setPosition(5, 27).setSize(40, 25).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setFontWeight(600).setFontSize(28).setFontFamily("ComicSans MS").setFill("images/countBack.png");
    var toolMoverHo = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-22, -50).setSize(50, 50).setFill("images/toolHammer.png"); houseExpandCover.appendChild(toolMoverLabelHo);
    toolMoverLabelHo.appendChild(toolMoverHo);
    toolMoverHo.setRotation(-10);
    var currentRotateHo = -10;
    var secondsToUpgradeHo = 90;
    toolMoverLabelHo.setHidden(true);
    scaffoldHo.setHidden(true);
    upgradeCloudHo.setHidden(true);
    var expandOnce = 0;
    goog.events.listen(houseExpandCover, ["mousedown", "touchstart"], function () {

        if (player.tools >= 500 && expandOnce == 0) {
            expandOnce = 1;
            player.tools -= 500;
            a.updateTools();
            toolCountHouse.setText(player.tools)
            toolMoverLabelHo.setHidden(false); scaffoldHo.setHidden(false); upgradeCloudHo.setHidden(false);
            expandToolsImg.setHidden(true);
            houseExpandCover.setText("").setOpacity(0.5);
            
            //hammer move logic
            lime.scheduleManager.scheduleWithDelay(function () {
                currentRotateHo = currentRotateHo + 10;
                if (currentRotateHo > 35) { currentRotateHo = -10; };
                toolMoverHo.setRotation(currentRotateHo);
                toolMoverLabelHo.setText(secondsToUpgradeHo);
                //e.appendChild(toolMover);
            }, this, 200, 450)

            //upgrade countdown timer
           
            var upCloudWHo = 200;
            var upCloudXHo = -130;
            var upCloudYHo = -100;
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
             secondsToUpgradeHo = secondsToUpgradeHo - 1;
               
                if (secondsToUpgradeHo <= 0) {
                    toolMoverLabelHo.setHidden(true); scaffoldHo.setHidden(true); upgradeCloudHo.setHidden(true); secondsToUpgradeHo = 90;
                    houseExpandCover.setHidden(true);
                    houseUpgrades.upgrades[0].owned = 1;
                    localStorage.setItem('GuiGhostFarms_houseUpgrades', JSON.stringify(houseUpgrades))
                    houseImg.setFill("images/house2.png").setSize(62, 100)
                }  

            }, this, 1000, 90)
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim

                upgradeCloudHo.setPosition(upCloudXHo, upCloudYHo).setSize(upCloudWHo, 200)
                upCloudWHo = upCloudWHo + 10;
                upCloudXHo = upCloudXHo - 5;
                upCloudYHo = upCloudYHo - 5
                if (upCloudXHo < -140) { upCloudXHo = -130; upCloudYHo = -100; upCloudWHo = 200; }


            }, this, 250, 360)
                               
        }
    });

  

    ////upper house menu
    var houseMenuBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, 0).setSize(a.controlsLayer_w -2, a.controlsLayer_h - 25).setFill("images/UI/greenButtonLg.png");
    houseLayer.appendChild(houseMenuBack);

    var toolCountImgHouse = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(10, 3).setSize(35, 35).setFill("images/UI/toolsIcon2.png");
    var toolCountHouse = (new lime.Label).setText(player.tools).setFontFamily("Comic Sans MS").setFontColor("#E8FC08").setPosition(69, 24).setFontSize(18);
    houseLayer.appendChild(toolCountImgHouse);
    houseLayer.appendChild(toolCountHouse);
    var houseMoney = (new lime.Label).setText(player.money).setFontColor("#E8FC08").setFontFamily("Comic Sans MS").setFontSize(18).setPosition(245, 24);
    houseLayer.appendChild(houseMoney);
    var topCoinHouse = (new lime.Sprite).setPosition(285, 20).setSize(35, 35).setFill(imgArray11[0]);
    houseLayer.appendChild(topCoinHouse);

    ////house upgrades

    var housePurchaseLabel1 = (new lime.Label).setText("Home Store").setPosition(a.width / 2, 109).setSize(250, 18).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseLayer.appendChild(housePurchaseLabel1);

    var optionsHomeContainer = (new lime.Sprite).setAnchorPoint(0.0).setPosition(0, 42).setSize(a.width, 100).setFill('#E8FC08');
    houseLayer.appendChild(optionsHomeContainer);
    var optionXPosition = 85;


    ///option 1
    var houseOptions1 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions1);
    var houseOption1Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -25).setFill(imgArray11[1]).setSize(25, 44);
    houseOptions1.appendChild(houseOption1Img);

    var houseOptions1Cost = (new lime.Label).setText(houseUpgrades.upgrades[1].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions1.appendChild(houseOptions1Cost);
    var houseOptions1Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions1.appendChild(houseOptions1Coin);


    var houseOptionReward1Base = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(250, 270).setSize(28, 63).setText("");
    var houseOptionReward1Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-14, -34).setFill(imgArray11[1]).setSize(28, 64);
    houseBack.appendChild(houseOptionReward1Base);
    houseOptionReward1Base.appendChild(houseOptionReward1Img);
    houseOptionReward1Base.setHidden(true);


    ///option 2
    optionXPosition += 70;
    var houseOptions2 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions2);
    var houseOption2Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -25).setFill(imgArray11[2]).setSize(25, 40);
    houseOptions2.appendChild(houseOption2Img)

    var houseOptions2Cost = (new lime.Label).setText(houseUpgrades.upgrades[2].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions2.appendChild(houseOptions2Cost);
    var houseOptions2Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions2.appendChild(houseOptions2Coin);

    var houseOptionReward2Base = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(210, 347).setSize(25, 44).setText("");
    var houseOptionReward2Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-12, -24).setFill(imgArray11[2]).setSize(25, 45);
    houseBack.appendChild(houseOptionReward2Base);
    houseOptionReward2Base.appendChild(houseOptionReward2Img);
    houseOptionReward2Base.setHidden(true);

    ///option 3- sink
    optionXPosition += 70;
    var houseOptions3 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions3)
    var houseBookCase = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -25).setFill(imgArray11[3]).setSize(25, 45);
    houseOptions3.appendChild(houseBookCase)
    var houseOptions3Cost = (new lime.Label).setText(houseUpgrades.upgrades[3].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions3.appendChild(houseOptions3Cost);
    var houseOptions3Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions3.appendChild(houseOptions3Coin);


    var houseOptionReward3Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(113, 241).setFill(imgArray11[3]).setSize(42, 35);
    houseBack.appendChild(houseOptionReward3Img);
    houseOptionReward3Img.setHidden(true);




    ///option 4 table
    optionXPosition += 70;
    var houseOptions4 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions4);
    var houseClock = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -25).setFill(imgArray11[4]).setSize(25, 40);
    houseOptions4.appendChild(houseClock);
    var houseOptions4Cost = (new lime.Label).setText(houseUpgrades.upgrades[4].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions4.appendChild(houseOptions4Cost);
    var houseOptions4Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions4.appendChild(houseOptions4Coin);

    var houseOptionReward4Base = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(63, 322).setSize(32, 46).setText("");
    var houseOptionReward4Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-15, -29).setFill(imgArray11[4]).setSize(32, 56)
    houseBack.appendChild(houseOptionReward4Base);
    houseOptionReward4Base.appendChild(houseOptionReward4Img);
    houseOptionReward4Base.setHidden(true);





    ///option 5 chairs
    optionXPosition += 70;
    var houseOptions5 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions5);
    var houseWardrobe = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -25).setFill(imgArray11[5]).setSize(24, 44);
    houseOptions5.appendChild(houseWardrobe);
    var houseOptions5Cost = (new lime.Label).setText(houseUpgrades.upgrades[5].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions5.appendChild(houseOptions5Cost);
    var houseOptions5Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions5.appendChild(houseOptions5Coin);
    
    var houseOptionReward5Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(25, 267).setFill("images/houseUpgrades/woodChairSet2.png").setSize(79, 99);
    houseBack.appendChild(houseOptionReward5Img);
    houseOptionReward5Img.setHidden(true);

    ///option 6- dressing table
    optionXPosition += 70;
    var houseOptions6 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions6);
    var woodChairL = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -25).setFill(imgArray11[6]).setSize(24, 44);
    houseOptions6.appendChild(woodChairL);
    var houseOptions6Cost = (new lime.Label).setText(houseUpgrades.upgrades[6].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions6.appendChild(houseOptions6Cost);
    var houseOptions6Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions6.appendChild(houseOptions6Coin);


    var houseOptionReward6Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(267, 216).setFill(imgArray11[6]).setSize(32, 56)
    houseBack.appendChild(houseOptionReward6Img);
    houseOptionReward6Img.setHidden(true);


    ///option 7 - bedside table
    optionXPosition += 70;
    var houseOptions7 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions7);
    var optionImg7 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[7]).setSize(22, 20);
    houseOptions7.appendChild(optionImg7);
    var houseOptions7Cost = (new lime.Label).setText(houseUpgrades.upgrades[7].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions7.appendChild(houseOptions7Cost);
    var houseOptions7Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions7.appendChild(houseOptions7Coin);


    var houseOptionReward7Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(212, 242).setFill(imgArray11[7]).setSize(22, 32)
    houseBack.appendChild(houseOptionReward7Img);
    houseOptionReward7Img.setHidden(true);


    ///option 8 - plant
    optionXPosition += 70;
    var houseOptions8 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions8);
    var optionImg8 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[8]).setSize(22, 34);
    houseOptions8.appendChild(optionImg8);
    var houseOptions8Cost = (new lime.Label).setText(houseUpgrades.upgrades[8].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions8.appendChild(houseOptions8Cost);
    var houseOptions8Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions8.appendChild(houseOptions8Coin);


    var houseOptionReward8Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(127, 328).setFill(imgArray11[8]).setSize(25, 40);
    houseBack.appendChild(houseOptionReward8Img);
    houseOptionReward8Img.setHidden(true);

    ///option 9 couch
    optionXPosition += 70;
    var houseOptions9 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions9);
    var optionImg9 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[9]).setSize(22, 34);
    houseOptions9.appendChild(optionImg9);
    var houseOptions9Cost = (new lime.Label).setText(houseUpgrades.upgrades[9].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions9.appendChild(houseOptions9Cost);
    var houseOptions9Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions9.appendChild(houseOptions9Coin);


    var houseOptionReward9Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(271, 318).setFill(imgArray11[9]).setSize(28, 50);
    houseBack.appendChild(houseOptionReward9Img);
    houseOptionReward9Img.setHidden(true);

    ///option 10 curtains
    optionXPosition += 70;
    var houseOptions10 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
    optionsHomeContainer.appendChild(houseOptions10);
    var optionImg10 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[10]).setSize(22, 34);
    houseOptions10.appendChild(optionImg10);
    var houseOptions10Cost = (new lime.Label).setText(houseUpgrades.upgrades[10].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    houseOptions10.appendChild(houseOptions10Cost);
    var houseOptions10Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
    houseOptions10.appendChild(houseOptions10Coin);


    var houseOptionReward10Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(59, 25).setFill(imgArray11[10]).setSize(39, 46);
    houseBack.appendChild(houseOptionReward10Img);
    var houseOptionReward10Img2 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(213, 25).setFill(imgArray11[10]).setSize(39, 46);
    houseBack.appendChild(houseOptionReward10Img2);
    houseOptionReward10Img.setHidden(true);
     houseOptionReward10Img2.setHidden(true);

    
     ///option 11 double bed
     optionXPosition += 70;
     var houseOptions11 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions11);
     var optionImg11 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[11]).setSize(22, 34);
     houseOptions11.appendChild(optionImg11);
     var houseOptions11Cost = (new lime.Label).setText(houseUpgrades.upgrades[11].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions11.appendChild(houseOptions11Cost);
     var houseOptions11Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions11.appendChild(houseOptions11Coin);

     var houseOptionReward11Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(a.controlsLayer_w -70, 48).setFill(imgArray11[11]).setSize(50, 70);
     houseBack.appendChild(houseOptionReward11Img);
     houseOptionReward11Img.setHidden(true);

     ///option 12 stool
     optionXPosition += 70;
     var houseOptions12 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions12);
     var optionImg12 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[12]).setSize(22, 34);
     houseOptions12.appendChild(optionImg12);
     var houseOptions12Cost = (new lime.Label).setText(houseUpgrades.upgrades[12].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions12.appendChild(houseOptions12Cost);
     var houseOptions12Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions12.appendChild(houseOptions12Coin);

     var houseOptionReward12Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(30, 130).setFill(imgArray11[12]).setSize(18, 24);
     houseBack.appendChild(houseOptionReward12Img);
     houseOptionReward12Img.setHidden(true);

    
     ///option 13 wardrobe
     optionXPosition += 70;
     var houseOptions13 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions13);
     var optionImg13 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -15).setFill(imgArray11[13]).setSize(22, 34);
     houseOptions13.appendChild(optionImg13);
     var houseOptions13Cost = (new lime.Label).setText(houseUpgrades.upgrades[13].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions13.appendChild(houseOptions13Cost);
     var houseOptions13Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions13.appendChild(houseOptions13Coin);

     var houseOptionReward13Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(10, 22).setFill(imgArray11[13]).setSize(30, 56)
     houseBack.appendChild(houseOptionReward13Img);
     houseOptionReward13Img.setHidden(true);



  
    ////option 14 couch away
  
     optionXPosition += 70;
     var houseOptions14 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions14);
     var optionImg14 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-24, -18).setFill(imgArray11[14]).setSize(40, 24);
     houseOptions14.appendChild(optionImg14);
     var houseOptions14Cost = (new lime.Label).setText(houseUpgrades.upgrades[14].cost).setPosition(-12, 18).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions14.appendChild(houseOptions14Cost);
     var houseOptions14Coin = (new lime.Sprite).setPosition(15, 14).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions14.appendChild(houseOptions14Coin);

     var houseOptionReward14Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(124, 110).setFill(imgArray11[14]).setSize(59, 29)
     houseBack.appendChild(houseOptionReward14Img);
     houseOptionReward14Img.setHidden(true);


    //option 15 bookcases
     optionXPosition += 70;
     var houseOptions15 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions15);
     var optionImg15 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[15]).setSize(22, 37);
     houseOptions15.appendChild(optionImg15);
     var houseOptions15Cost = (new lime.Label).setText(houseUpgrades.upgrades[15].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions15.appendChild(houseOptions15Cost);
     var houseOptions15Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions15.appendChild(houseOptions15Coin);

     var houseOptionReward15Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(98, 20).setFill(imgArray11[15]).setSize(26, 55)
     houseBack.appendChild(houseOptionReward15Img);
     var houseOptionReward15Img2 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(186, 20).setFill(imgArray11[15]).setSize(26, 55)
     houseBack.appendChild(houseOptionReward15Img2);
     houseOptionReward15Img.setHidden(true);
     houseOptionReward15Img2.setHidden(true);

    // coffee fancy table
     optionXPosition += 70;
     var houseOptions16 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions16);
     var optionImg16 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[16]).setSize(22, 37);
     houseOptions16.appendChild(optionImg16);
     var houseOptions16Cost = (new lime.Label).setText(houseUpgrades.upgrades[16].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions16.appendChild(houseOptions16Cost);
     var houseOptions16Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions16.appendChild(houseOptions16Coin);

     var houseOptionReward16Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(138, 91).setFill(imgArray11[16]).setSize(32, 18)
     houseBack.appendChild(houseOptionReward16Img);
     houseOptionReward16Img.setHidden(true);

    //fancy chairs
     optionXPosition += 70;
     var houseOptions17 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions17);
     var optionImg17 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[17]).setSize(22, 37);
     houseOptions17.appendChild(optionImg17);
     var houseOptions17Cost = (new lime.Label).setText(houseUpgrades.upgrades[17].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions17.appendChild(houseOptions17Cost);
     var houseOptions17Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions17.appendChild(houseOptions17Coin);

     var houseOptionReward17Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(111, 82).setFill("images/houseUpgrades/fancyChairSet2.png").setSize(90, 29)
     houseBack.appendChild(houseOptionReward17Img);
     houseOptionReward17Img.setHidden(true);

    //option 18 desk
     optionXPosition += 70;
     var houseOptions18 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions18);
     var optionImg18 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[18]).setSize(22, 37);
     houseOptions18.appendChild(optionImg18);
     var houseOptions18Cost = (new lime.Label).setText(houseUpgrades.upgrades[18].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions18.appendChild(houseOptions18Cost);
     var houseOptions18Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions18.appendChild(houseOptions18Coin);

     var houseOptionReward18Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(11, 102).setFill(imgArray11[18]).setSize(52, 37)
     houseBack.appendChild(houseOptionReward18Img);
     houseOptionReward18Img.setHidden(true);



     //option 19 large painting
     optionXPosition += 70;
     var houseOptions19 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions19);
     var optionImg19 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-20, -18).setFill(imgArray11[19]).setSize(36, 21);
     houseOptions19.appendChild(optionImg19);
     var houseOptions19Cost = (new lime.Label).setText(houseUpgrades.upgrades[19].cost).setPosition(-10, 17).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions19.appendChild(houseOptions19Cost);
     var houseOptions19Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions19.appendChild(houseOptions19Coin);

     var houseOptionReward19Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(128, 13).setFill(imgArray11[19]).setSize(55, 16)
     houseBack.appendChild(houseOptionReward19Img);
     houseOptionReward19Img.setHidden(true);


     //option 20  dishCabinet
     optionXPosition += 70;
     var houseOptions20 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions20);
     var optionImg20 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[20]).setSize(22, 37);
     houseOptions20.appendChild(optionImg20);
     var houseOptions20Cost = (new lime.Label).setText(houseUpgrades.upgrades[20].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions20.appendChild(houseOptions20Cost);
     var houseOptions20Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions20.appendChild(houseOptions20Coin);

     var houseOptionReward20Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(15, 215).setFill(imgArray11[20]).setSize(32, 56)
     houseBack.appendChild(houseOptionReward20Img);
     houseOptionReward20Img.setHidden(true);

     //option 21 trunk
     optionXPosition += 70;
     var houseOptions21 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions21);
     var optionImg21 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-26, 0).setFill(imgArray11[21]).setSize(26, 18);
     houseOptions21.appendChild(optionImg21);
     var houseOptions21Cost = (new lime.Label).setText(houseUpgrades.upgrades[21].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions21.appendChild(houseOptions21Cost);
     var houseOptions21Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions21.appendChild(houseOptions21Coin);

     var houseOptionReward21Img = (new lime.Sprite).setAnchorPoint(0.0).setPosition(a.controlsLayer_w - 67, 115).setFill(imgArray11[21]).setSize(44, 18)
     houseBack.appendChild(houseOptionReward21Img);
     houseOptionReward21Img.setHidden(true);


     //option 22 paint Green
     optionXPosition += 70;
     var houseOptions22 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions22);
     var optionImg22 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[22]).setSize(22, 37);
     houseOptions22.appendChild(optionImg22);
     var houseOptions22Cost = (new lime.Label).setText(houseUpgrades.upgrades[22].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions22.appendChild(houseOptions22Cost);

     var houseOptions22Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions22.appendChild(houseOptions22Coin);

    
     //option 23 paint blue
     optionXPosition += 70;
     var houseOptions23 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions23);
     var optionImg23 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[23]).setSize(22, 37);
     houseOptions23.appendChild(optionImg23);
     var houseOptions23Cost = (new lime.Label).setText(houseUpgrades.upgrades[23].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions23.appendChild(houseOptions23Cost);
     var houseOptions23Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions23.appendChild(houseOptions23Coin);

  
    
     //option 24  paint Pink
     optionXPosition += 70;
     var houseOptions24 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions24);
     var optionImg24 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[24]).setSize(22, 37);
     houseOptions24.appendChild(optionImg24);
     var houseOptions24Cost = (new lime.Label).setText(houseUpgrades.upgrades[24].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions24.appendChild(houseOptions24Cost);
     var houseOptions24Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions24.appendChild(houseOptions24Coin);

     //option 25  paint Tan
     optionXPosition += 70;
     var houseOptions25 = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(optionXPosition, 30).setSize(60, 45).setText("");
     optionsHomeContainer.appendChild(houseOptions25);
     var optionImg25 = (new lime.Sprite).setAnchorPoint(0.0).setPosition(-25, -18).setFill(imgArray11[25]).setSize(22, 37);
     houseOptions25.appendChild(optionImg25);
     var houseOptions25Cost = (new lime.Label).setText(houseUpgrades.upgrades[25].cost).setPosition(14, 0).setSize(25, 22).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
     houseOptions25.appendChild(houseOptions25Cost);
     var houseOptions25Coin = (new lime.Sprite).setPosition(15, 12).setSize(20, 20).setFill(imgArray11[0]);
     houseOptions25.appendChild(houseOptions25Coin);

     //houseOptionReward24Img.setHidden(true);






    ///check for previously bought
    var optionPosH1 = optionsHomeContainer.getPosition();
    var move = optionPosH1.x;
    var checkHouseUpgradesBought = function () {
        if (houseUpgrades.upgrades[0].owned == 1) { houseExpandCover.setHidden(true); }
        if (houseUpgrades.upgrades[1].owned == 1) { houseOptionReward1Base.setHidden(false); houseOptions1.setOpacity(0.2); }
        if (houseUpgrades.upgrades[2].owned == 1) { houseOptionReward2Base.setHidden(false); houseOptions2.setOpacity(0.2);}
        if (houseUpgrades.upgrades[3].owned == 1) { houseOptionReward3Img.setHidden(false); houseOptions3.setOpacity(0.2); }
        if (houseUpgrades.upgrades[4].owned == 1) { houseOptionReward4Base.setHidden(false); houseOptions4.setOpacity(0.2);}
        if (houseUpgrades.upgrades[5].owned == 1) { houseOptionReward5Img.setHidden(false); houseOptions5.setOpacity(0.2); }
        if (houseUpgrades.upgrades[6].owned == 1) { houseOptionReward6Img.setHidden(false); houseOptions6.setOpacity(0.2);}
        if (houseUpgrades.upgrades[7].owned == 1) { houseOptionReward7Img.setHidden(false); houseOptions7.setOpacity(0.2); }
        if (houseUpgrades.upgrades[8].owned == 1) { houseOptionReward8Img.setHidden(false); houseOptions8.setOpacity(0.2);  }
        if (houseUpgrades.upgrades[9].owned == 1) { houseOptionReward9Img.setHidden(false); houseOptions9.setOpacity(0.2); }
        if (houseUpgrades.upgrades[10].owned == 1) { houseOptionReward10Img.setHidden(false); houseOptionReward10Img2.setHidden(false); houseOptions10.setOpacity(0.2); }
        if (houseUpgrades.upgrades[11].owned == 1) { houseOptionReward11Img.setHidden(false); houseOptions11.setOpacity(0.2); }
        if (houseUpgrades.upgrades[12].owned == 1) { houseOptionReward12Img.setHidden(false); houseOptions12.setOpacity(0.2); }
        if (houseUpgrades.upgrades[13].owned == 1) { houseOptionReward13Img.setHidden(false); houseOptions13.setOpacity(0.2); }
        if (houseUpgrades.upgrades[14].owned == 1) { houseOptionReward14Img.setHidden(false); houseOptions14.setOpacity(0.2); }
        if (houseUpgrades.upgrades[15].owned == 1) { houseOptionReward15Img.setHidden(false); houseOptionReward15Img2.setHidden(false); houseOptions15.setOpacity(0.2); }
        if (houseUpgrades.upgrades[16].owned == 1) { houseOptionReward16Img.setHidden(false); houseOptions16.setOpacity(0.2); }
        if (houseUpgrades.upgrades[17].owned == 1) { houseOptionReward17Img.setHidden(false); houseOptions17.setOpacity(0.2); }
        if (houseUpgrades.upgrades[18].owned == 1) { houseOptionReward18Img.setHidden(false); houseOptions18.setOpacity(0.2); }
        if (houseUpgrades.upgrades[19].owned == 1) { houseOptionReward19Img.setHidden(false); houseOptions19.setOpacity(0.2); }
        if (houseUpgrades.upgrades[20].owned == 1) { houseOptionReward20Img.setHidden(false); houseOptions20.setOpacity(0.2); }
        if (houseUpgrades.upgrades[21].owned == 1) { houseOptionReward21Img.setHidden(false); houseOptions21.setOpacity(0.2); }
        if (houseUpgrades.upgrades[22].owned == 1) { houseBack.setFill(imgArray11[22]); houseOptions22.setOpacity(0.2); houseOptions23.setOpacity(1.0); houseOptions24.setOpacity(1.0); houseOptions25.setOpacity(1.0); }
        if (houseUpgrades.upgrades[23].owned == 1) { houseBack.setFill(imgArray11[23]); houseOptions23.setOpacity(0.2); houseOptions22.setOpacity(1.0); houseOptions24.setOpacity(1.0); houseOptions25.setOpacity(1.0);}
        if (houseUpgrades.upgrades[24].owned == 1) { houseBack.setFill(imgArray11[24]); houseOptions24.setOpacity(0.2); houseOptions22.setOpacity(1.0); houseOptions23.setOpacity(1.0); houseOptions25.setOpacity(1.0); }
        if (houseUpgrades.upgrades[25].owned == 1) { houseBack.setFill(imgArray11[25]); houseOptions25.setOpacity(0.2); houseOptions22.setOpacity(1.0); houseOptions23.setOpacity(1.0); houseOptions24.setOpacity(1.0);}
        checkPositionsHouseUpgrades();
    }

    var checkPositionsHouseUpgrades = function () {
        move = optionPosH1.x;
        if (houseUpgrades.upgrades[1].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); } else {  return;}
        if (houseUpgrades.upgrades[2].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); } else { return; }
        if (houseUpgrades.upgrades[3].owned == 1) {  move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[4].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else {  return; }
        if (houseUpgrades.upgrades[5].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else {  return; }
        if (houseUpgrades.upgrades[6].owned == 1) {  move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else {  return; }
        if (houseUpgrades.upgrades[7].owned == 1) {  move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else {  return; }
        if (houseUpgrades.upgrades[8].owned == 1) {  move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else { return; }
        if (houseUpgrades.upgrades[9].owned == 1) {  move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else { return; }
        if (houseUpgrades.upgrades[10].owned == 1) {  move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else { return; }
        if (houseUpgrades.upgrades[11].owned == 1) {move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else { return; }
        if (houseUpgrades.upgrades[12].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false);} else { return; }
        if (houseUpgrades.upgrades[13].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[14].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[15].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[16].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[17].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[18].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[19].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[20].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[21].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[22].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[23].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[24].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
        if (houseUpgrades.upgrades[25].owned == 1) { move -= 70; optionsHomeContainer.setPosition(move, optionPosH1.y); houseOptionsArrowL.setHidden(false); } else { return; }
    }

    ////house options click Handler
    var houseOptionNumber = 0;
    goog.events.listen(houseOptions1, ['mousedown', 'touchstart'], function () { houseOptionNumber = 1; applyHouseOption(1); resetConfirmImgSize(); });
    goog.events.listen(houseOptions2, ['mousedown', 'touchstart'], function () { houseOptionNumber = 2; applyHouseOption(2); resetConfirmImgSize(); });
    goog.events.listen(houseOptions3, ['mousedown', 'touchstart'], function () { houseOptionNumber = 3; applyHouseOption(3); resetConfirmImgSize(); });
    goog.events.listen(houseOptions4, ['mousedown', 'touchstart'], function () { houseOptionNumber = 4; applyHouseOption(4); resetConfirmImgSize(); });
    goog.events.listen(houseOptions5, ['mousedown', 'touchstart'], function () { houseOptionNumber = 5; applyHouseOption(5); resetConfirmImgSize(); });
    goog.events.listen(houseOptions6, ['mousedown', 'touchstart'], function () { houseOptionNumber = 6; applyHouseOption(6); resetConfirmImgSize(); });
    goog.events.listen(houseOptions7, ['mousedown', 'touchstart'], function () { houseOptionNumber = 7; applyHouseOption(7); resetConfirmImgSize(); });
    goog.events.listen(houseOptions8, ['mousedown', 'touchstart'], function () { houseOptionNumber = 8; applyHouseOption(8); resetConfirmImgSize(); });
    goog.events.listen(houseOptions9, ['mousedown', 'touchstart'], function () { houseOptionNumber = 9; applyHouseOption(9); resetConfirmImgSize(); });
    goog.events.listen(houseOptions10, ['mousedown', 'touchstart'], function () { houseOptionNumber = 10; applyHouseOption(10); resetConfirmImgSize(); });
    goog.events.listen(houseOptions11, ['mousedown', 'touchstart'], function () { houseOptionNumber = 11; applyHouseOption(11); resetConfirmImgSize(); });
    goog.events.listen(houseOptions12, ['mousedown', 'touchstart'], function () { houseOptionNumber = 12; applyHouseOption(12); resetConfirmImgSize(); });
    goog.events.listen(houseOptions13, ['mousedown', 'touchstart'], function () { houseOptionNumber = 13; applyHouseOption(13); resetConfirmImgSize(); });
    goog.events.listen(houseOptions14, ['mousedown', 'touchstart'], function () { houseOptionNumber = 14; applyHouseOption(14); confirmSaleHouseImg.setPosition(40, 55).setSize(59, 29); });
    goog.events.listen(houseOptions15, ['mousedown', 'touchstart'], function () { houseOptionNumber = 15; applyHouseOption(15); resetConfirmImgSize(); });
    goog.events.listen(houseOptions16, ['mousedown', 'touchstart'], function () { houseOptionNumber = 16; applyHouseOption(16); resetConfirmImgSize(); });
    goog.events.listen(houseOptions17, ['mousedown', 'touchstart'], function () { houseOptionNumber = 17; applyHouseOption(17); resetConfirmImgSize(); });
    goog.events.listen(houseOptions18, ['mousedown', 'touchstart'], function () { houseOptionNumber = 18; applyHouseOption(18); confirmSaleHouseImg.setPosition(40, 55).setSize(56, 38); });
    goog.events.listen(houseOptions19, ['mousedown', 'touchstart'], function () { houseOptionNumber = 19; applyHouseOption(19); confirmSaleHouseImg.setPosition(40, 55).setSize(56, 32); }); 
    goog.events.listen(houseOptions20, ['mousedown', 'touchstart'], function () { houseOptionNumber = 20; applyHouseOption(20); resetConfirmImgSize(); });
    goog.events.listen(houseOptions21, ['mousedown', 'touchstart'], function () { houseOptionNumber = 21; applyHouseOption(21); confirmSaleHouseImg.setPosition(42, 55).setSize(50, 28); });
    goog.events.listen(houseOptions22, ['mousedown', 'touchstart'], function () { houseOptionNumber = 22; applyHouseOption(22); resetConfirmImgSize(); });
    goog.events.listen(houseOptions23, ['mousedown', 'touchstart'], function () { houseOptionNumber = 23; applyHouseOption(23); resetConfirmImgSize(); });
    goog.events.listen(houseOptions24, ['mousedown', 'touchstart'], function () { houseOptionNumber = 24; applyHouseOption(24); resetConfirmImgSize(); });
    goog.events.listen(houseOptions25, ['mousedown', 'touchstart'], function () { houseOptionNumber = 25; applyHouseOption(25); resetConfirmImgSize(); });

    function resetConfirmImgSize() {
        confirmSaleHouseImg.setPosition(50, 45).setSize(34, 55);
    }
    var applyHouseOption = function (houseOptionNumber) {
        confirmSaleHouse.setHidden(false);
        confirmSaleHouseImg.setFill(imgArray11[houseOptionNumber]);
        confirmSaleHousePriceLabel.setText(" - " + houseUpgrades.upgrades[houseOptionNumber].cost);
        confirmSaleHouseNameLabel.setText(houseUpgrades.upgrades[houseOptionNumber].name);
       
    }


    //arrows
    var houseOptionsArrowR = (new lime.Sprite).setPosition(a.width - 13, 112).setSize(30, 30).setFill("images/UI/nextButton.png");
    houseLayer.appendChild(houseOptionsArrowR);
    var houseOptionsArrowL = (new lime.Sprite).setPosition(13, 112).setSize(30, 30).setFill("images/UI/nextButton.png").setRotation(180);
    houseLayer.appendChild(houseOptionsArrowL);
    houseOptionsArrowL.setHidden(true);

    goog.events.listen(houseOptionsArrowR, ["mousedown", "touchstart"], function () {
     
        var optionPos = optionsHomeContainer.getPosition();
        var onceRight = 0
        var move = optionPos.x - 70;
        houseOptionsArrowL.setHidden(false);

        lime.scheduleManager.scheduleWithDelay(function () {
            //add anim
            var optionPos = optionsHomeContainer.getPosition();
            optionPos.x -= 10;
            optionsHomeContainer.setPosition(optionPos.x, optionPos.y);
            if (optionPos.x <= move) { lime.scheduleManager.unschedule(this, houseOptionsArrowR) }
        }, this, 50, 7)

    });

    goog.events.listen(houseOptionsArrowL, ["mousedown", "touchstart"], function () {
      
        var optionPos = optionsHomeContainer.getPosition();
        var onceRight = 0
        
        var move = optionPos.x + 70;

        lime.scheduleManager.scheduleWithDelay(function () {
            //add anim
            var optionPos = optionsHomeContainer.getPosition();
            optionPos.x += 10;
            optionsHomeContainer.setPosition(optionPos.x, optionPos.y);
            optionPos = optionsHomeContainer.getPosition();
            if (optionPos.x >= 25) { houseOptionsArrowL.setHidden(true); }
        }, this, 100, 7)

    });



    //lower house menu
    var houseLowerMenu = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-5, a.height - 50).setSize(a.controlsLayer_w, 50).setFill("images/UI/blackButton.png");
    houseLayer.appendChild(houseLowerMenu);
    backBtnHouse = (new lime.GlossyButton).setColor("#1ce636").setText("Back").setPosition(a.width / 2, 25).setSize(80, 40);
    houseLowerMenu.appendChild(backBtnHouse);
    goog.events.listen(backBtnHouse, ["mousedown", "touchstart"], function () {
        
        c.replaceScene(d, lime.transitions.SlideInUp); sceneBefore = 1;


    });

    var starCashMenuHouse = (new lime.Sprite).setFill("images/UI/starButton.png").setAnchorPoint(0, 0).setPosition(50, 498).setSize(35, 35);
    houseLayer.appendChild(starCashMenuHouse);

    goog.events.listen(starCashMenuHouse, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            shareFacebook();
        }
    });


    var marketBtnHouse = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(210, a.height - a.controlsLayer_h + 20).setSize(75, 44).setFill("images/" + a.barnyard[3].image);
    houseLayer.appendChild(marketBtnHouse)
    goog.events.listen(marketBtnHouse, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            a.sceneBefore = 7;
            c.replaceScene(marketScene, lime.transitions.SlideInDown);
            count0.setText(player.cropsStored[0].stored);
            count1.setText(player.cropsStored[1].stored);
            count2.setText(player.cropsStored[2].stored);
            count3.setText(player.cropsStored[3].stored);
            count4.setText(player.cropsStored[4].stored);
            count5.setText(player.cropsStored[5].stored);
            count6.setText(player.cropsStored[6].stored);
            count7.setText(player.cropsStored[7].stored);
            count8.setText(player.cropsStored[8].stored);
            count9.setText(player.cropsStored[9].stored);
            count10.setText(player.cropsStored[10].stored);
            count11.setText(player.cropsStored[11].stored);
            count12.setText(player.cropsStored[12].stored);
            count13.setText(player.cropsStored[13].stored);
            count14.setText(player.tools);
        }
    });
    //MUTE From House
    var muteBtnHouse = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(12, 498).setSize(35, 35).setFill(imgArray[15]);
    houseLayer.appendChild(muteBtnHouse);


    goog.events.listen(muteBtnHouse, ["mousedown", "touchstart"], function () {
        if (globalModalBlock == 0) {
            var isMuted = lime.audio.getMute();
            if (isMuted) {
                lime.audio.setMute(false); themeSong.play(true); localStorage.setItem('GuiGhostFarms_muted', 0)
                setMute(2);
            } else { lime.audio.setMute(true); setMute(1); localStorage.setItem('GuiGhostFarms_muted', 1) }
        }
    });


    //house upgrade confirms//
    var confirmSaleHouse = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 2 - 67, 130).setSize(130, 130).setFill('images/UI/blankBack4.png');
    houseLayer.appendChild(confirmSaleHouse);

    confirmSaleHouse.setHidden(true);
    var confirmSaleHouseNameLabel = (new lime.Label).setText("Name of item").setPosition(70, 30).setSize(130, 50).setFontColor("#E8FC08").setFontWeight(600).setFontSize(16).setFontFamily("ComicSans MS");
    confirmSaleHouse.appendChild(confirmSaleHouseNameLabel);
    var confirmSaleHousePriceLabel = (new lime.Label).setText(" - 150").setPosition(75, 50).setSize(130, 50).setFontColor("#E8FC08").setFontWeight(600).setFontSize(18).setFontFamily("ComicSans MS");
    confirmSaleHouse.appendChild(confirmSaleHousePriceLabel);
    var confirmSaleHouseImg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(50, 45).setSize(34, 55).setFill(imgArray11[1]);
    confirmSaleHouse.appendChild(confirmSaleHouseImg);
    var confirmSaleHouseCoin = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 22).setSize(20, 20).setFill(imgArray11[0]);
    confirmSaleHouse.appendChild(confirmSaleHouseCoin);


    var cancelConfirmSaleHouseBack = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(35, 128).setSize(32, 32).setText("");
    confirmSaleHouse.appendChild(cancelConfirmSaleHouseBack);
    var cancelConfirmSaleHouse = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-16, -15).setSize(32, 32).setFill("images/UI/XButton.png");
    cancelConfirmSaleHouseBack.appendChild(cancelConfirmSaleHouse);
    var confirmConfirmSaleHouseBack = (new lime.GlossyButton).setColor("#663300").setAnchorPoint(0.0).setPosition(100, 128).setSize(32, 32).setText("");
    confirmSaleHouse.appendChild(confirmConfirmSaleHouseBack);
    var confirmConfirmSaleHouse = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-16, -15).setSize(32, 32).setFill("images/UI/checkButton.png");
    confirmConfirmSaleHouseBack.appendChild(confirmConfirmSaleHouse);
         

    goog.events.listen(cancelConfirmSaleHouseBack, ["mousedown", "touchstart"], function () {
        confirmSaleHouse.setHidden(true);
    })
    goog.events.listen(confirmConfirmSaleHouseBack, ["mousedown", "touchstart"], function () {
        //////check to see if already owned, excluding paints
        if (houseUpgrades.upgrades[houseOptionNumber].owned == 1 && (houseOptionNumber < 19 || houseOptionNumber > 21) ) { confirmSaleHouseNameLabel.setText("Already Owned"); return; }

        if (player.money >= houseUpgrades.upgrades[houseOptionNumber].cost) {
            
            if (houseOptionNumber < 10 || (houseOptionNumber >= 10 && houseUpgrades.upgrades[0].owned == 1) ) {
                player.money -= houseUpgrades.upgrades[houseOptionNumber].cost;
                houseUpgrades.upgrades[houseOptionNumber].owned = 1;
                switch (houseOptionNumber) {
                    case 1: houseOptionReward1Base.setHidden(false); houseOptionNumber = 0; houseOptions1.setOpacity(0.2); break;                               
                    case 2: houseOptionReward2Base.setHidden(false); houseOptionNumber = 0; houseOptions2.setOpacity(0.2); break;              
                    case 3: houseOptionReward3Img.setHidden(false); houseOptionNumber = 0; houseOptions3.setOpacity(0.2); break;           
                    case 4: houseOptionReward4Base.setHidden(false); houseOptionNumber = 0; houseOptions4.setOpacity(0.2); break;
                    case 5: houseOptionReward5Img.setHidden(false); houseOptionNumber = 0; houseOptions5.setOpacity(0.2); break;                
                    case 6: houseOptionReward6Img.setHidden(false); houseOptionNumber = 0; houseOptions6.setOpacity(0.2); break;
                    case 7: houseOptionReward7Img.setHidden(false); houseOptionNumber = 0; houseOptions7.setOpacity(0.2); break;
                    case 8: houseOptionReward8Img.setHidden(false); houseOptionNumber = 0; houseOptions8.setOpacity(0.2); break;
                    case 9: houseOptionReward9Img.setHidden(false); houseOptionNumber = 0; houseOptions9.setOpacity(0.2); break;
                    case 10: houseOptionReward10Img.setHidden(false); houseOptionReward10Img2.setHidden(false); houseOptionNumber = 0; houseOptions10.setOpacity(0.2); break;
                    case 11: houseOptionReward11Img.setHidden(false); houseOptionNumber = 0; houseOptions11.setOpacity(0.2); break;
                    case 12: houseOptionReward12Img.setHidden(false); houseOptionNumber = 0; houseOptions12.setOpacity(0.2); break;
                    case 13: houseOptionReward13Img.setHidden(false); houseOptionNumber = 0; houseOptions13.setOpacity(0.2); break;
                    case 14: houseOptionReward14Img.setHidden(false); houseOptionNumber = 0; houseOptions14.setOpacity(0.2); confirmSaleHouseImg.setSize(34, 55).setPosition(50, 45); break;
                    case 15: houseOptionReward15Img.setHidden(false);houseOptionReward15Img2.setHidden(false); houseOptionNumber = 0; houseOptions15.setOpacity(0.2); break;
                    case 16: houseOptionReward16Img.setHidden(false); houseOptionNumber = 0; houseOptions16.setOpacity(0.2); break;
                    case 17: houseOptionReward17Img.setHidden(false); houseOptionNumber = 0; houseOptions17.setOpacity(0.2); break;
                    case 18: houseOptionReward18Img.setHidden(false); houseOptionNumber = 0; houseOptions18.setOpacity(0.2); break;
                    case 19: houseOptionReward19Img.setHidden(false); houseOptionNumber = 0; houseOptions19.setOpacity(0.2); break;
                    case 20: houseOptionReward20Img.setHidden(false); houseOptionNumber = 0; houseOptions20.setOpacity(0.2); break;
                    case 21: houseOptionReward21Img.setHidden(false); houseOptionNumber = 0; houseOptions21.setOpacity(0.2); break;
                    case 22: houseBack.setFill(imgArray11[houseOptionNumber]); houseOptionNumber = 0; houseOptions22.setOpacity(0.2); houseOptions23.setOpacity(1.0); houseOptions24.setOpacity(1.0); houseOptions25.setOpacity(1.0); houseUpgrades.upgrades[23].owned = 0; houseUpgrades.upgrades[24].owned = 0; houseUpgrades.upgrades[25].owned = 0; break;
                    case 23: houseBack.setFill(imgArray11[houseOptionNumber]); houseOptionNumber = 0; houseOptions23.setOpacity(0.2); houseOptions22.setOpacity(1.0); houseOptions24.setOpacity(1.0); houseOptions25.setOpacity(1.0); houseUpgrades.upgrades[22].owned = 0; houseUpgrades.upgrades[24].owned = 0; houseUpgrades.upgrades[25].owned = 0; break;
                    case 24: houseBack.setFill(imgArray11[houseOptionNumber]); houseOptionNumber = 0; houseOptions24.setOpacity(0.2); houseOptions22.setOpacity(1.0); houseOptions23.setOpacity(1.0); houseOptions25.setOpacity(1.0); houseUpgrades.upgrades[22].owned = 0; houseUpgrades.upgrades[23].owned = 0; houseUpgrades.upgrades[25].owned = 0; break;
                    case 25: houseBack.setFill(imgArray11[houseOptionNumber]); houseOptionNumber = 0; houseOptions25.setOpacity(0.2); houseOptions22.setOpacity(1.0); houseOptions23.setOpacity(1.0); houseOptions24.setOpacity(1.0); houseUpgrades.upgrades[22].owned = 0; houseUpgrades.upgrades[23].owned = 0; houseUpgrades.upgrades[24].owned = 0;break;

                    default: houseOptionNumber = 0; break;
                }
                confirmSaleHouse.setHidden(true);
            }
            else {
                confirmSaleHouseNameLabel.setText("Needs Room 2");
            }
        }
        else { confirmSaleHouseNameLabel.setText("Need More Coin");  }
       
        localStorage.setItem('GuiGhostFarms_houseUpgrades', JSON.stringify(houseUpgrades))
        houseMoney.setText(player.money);
        a.updateMoney();
        localStorage.setItem('GuiGhostFarms_player', JSON.stringify(player))
       
    })







    function checkAchieves() {
        //console.table(a.achievements);
        if (a.achievements[1] == false) { achieve1Check.setHidden(true); }
        if (a.achievements[2] == false) { achieve2Check.setHidden(true); }
        if (a.achievements[3] == false) { achieve3Check.setHidden(true); }
        if (a.achievements[4] == false) { achieve4Check.setHidden(true); }
        if (a.achievements[5] == false) { achieve5Check.setHidden(true); }
        if (a.achievements[6] == false) { achieve6Check.setHidden(true); }
        if (a.achievements[7] == false) { achieve7Check.setHidden(true); }
        if (a.achievements[8] == false) { achieve8Check.setHidden(true); }
        if (a.achievements[9] == false) { achieve9Check.setHidden(true); }
        if (a.achievements[10] == false) { achieve10Check.setHidden(true); }
        if (a.achievements[11] == false) { achieve11Check.setHidden(true); }
        if (a.achievements[12] == false) { achieve12Check.setHidden(true); }
        if (a.achievements[13] == false) { achieve13Check.setHidden(true); }
        if (a.achievements[14] == false) { achieve14Check.setHidden(true); }
        if (a.achievements[15] == false) { achieve15Check.setHidden(true); }
        if (a.achievements[16] == false) { achieve16Check.setHidden(true); }
    }
    checkAchieves();
    goog.events.listen(backBtnAchieve, ["mousedown", "touchstart"], function () {
        
        if (sceneBefore == 1) { c.replaceScene(d, lime.transitions.SlideInUp); sceneBefore = 1; }
        if (sceneBefore == 2) { c.replaceScene(pastureScene, lime.transitions.SlideInUp); sceneBefore = 2; b.currentCrop = 6; }
        if (sceneBefore == 3) { c.replaceScene(orchardScene, lime.transitions.SlideInUp); sceneBefore = 3; b.currentCrop = 8; }
        if (sceneBefore == 4) { c.replaceScene(vinyardScene, lime.transitions.SlideInUp); sceneBefore = 4; }
        if (sceneBefore == 5) { c.replaceScene(liveStockScene, lime.transitions.SlideInUp); sceneBefore = 5; }

    });


    ////achievement checks
    function checkAchieves2() {
        var acresOwned = acres[1].owned + acres[2].owned + acres[3].owned + acres[4].owned;
   
        if (a.achievements[1] == false && pickedEver >= 500) { a.achievements[1] = true; achieve1Check.setHidden(false); starCash = starCash + 5; displayAchieve(1); };
        if (a.achievements[2] == false && pickedEver >= 5000) { a.achievements[2] = true; achieve2Check.setHidden(false); starCash = starCash + 10; displayAchieve(2); };
        if (a.achievements[3] == false && player.farms > 1) { a.achievements[3] = true; achieve3Check.setHidden(false); starCash = starCash + 5; displayAchieve(3); };
        if (a.achievements[4] == false && player.barnLevel >= 5) { a.achievements[4] = true; achieve4Check.setHidden(false); starCash = starCash + 5; displayAchieve(4); };
        if (a.achievements[5] == false && toolsEver >= 500) { a.achievements[5] = true; achieve5Check.setHidden(false); starCash = starCash + 5; displayAchieve(5); };
        if (a.achievements[6] == false && toolsEver >= 5000) { a.achievements[6] = true; achieve6Check.setHidden(false); starCash = starCash + 10; displayAchieve(6); };
        if (a.achievements[7] == false && yearCount >= 2) { a.achievements[7] = true; achieve7Check.setHidden(false); starCash = starCash + 5; displayAchieve(7); };
        if (a.achievements[8] == false && acresOwned >= 4) { a.achievements[8] = true; achieve8Check.setHidden(false); starCash = starCash + 10; displayAchieve(8); };
        if (a.achievements[9] == false && vinyardHouseLevel > 1) { a.achievements[9] = true; achieve9Check.setHidden(false); starCash = starCash + 10; displayAchieve(9); };
        if (a.achievements[10] == false && orchardTreeBlock > 1 && vinyardBlocks > 1 && vinyardBlocks2 > 1 && player.fields >= 3) { a.achievements[10] = true; achieve10Check.setHidden(false); starCash = starCash + 5; displayAchieve(10); };
        if (a.achievements[11] == false && player.cropsStored[10].stored >= 100 && player.cropsStored[11].stored >= 100) { a.achievements[11] = true; achieve11Check.setHidden(false); starCash = starCash + 10; displayAchieve(11); };
        if (a.achievements[12] == false && player.cropsStored[0] >= 1 && player.cropsStored[1] >= 1 && player.cropsStored[2] >= 1 && player.cropsStored[3] >= 1 && player.cropsStored[4] >= 1
            && player.cropsStored[5] >= 1 && player.cropsStored[6] >= 1 && player.cropsStored[7] >= 1 && player.cropsStored[8] >= 1 && player.cropsStored[9] >= 1 && player.cropsStored[10] >= 1
            && player.cropsStored[11] >= 1 && player.cropsStored[12] >= 1 && player.cropsStored[13] >= 1) {
            a.achievements[12] = true; achieve12Check.setHidden(false); starCash = starCash + 10; displayAchieve(12);
        };
        if (a.achievements[13] == false && player.pastureLevel >= 3) { a.achievements[13] = true; achieve13Check.setHidden(false); starCash = starCash + 5; displayAchieve(13); };
        if (a.achievements[14] == false && moneyEver >= 5000) { a.achievements[14] = true; achieve14Check.setHidden(false); starCash = starCash + 5; displayAchieve(14); };
        if (a.achievements[15] == false && boughtStarCash == true) { a.achievements[15] = true; achieve15Check.setHidden(false); starCash = starCash + 10; displayAchieve(15); };
        if (a.achievements[16] == false && yearCount >= 10) { a.achievements[16] = true; achieve16Check.setHidden(false); starCash = starCash + 50; displayAchieve(16); };
        starCashLabelA.setText(starCash);
        localStorage.setItem('starCash', starCash);
        localStorage.setItem('GuiGhostFarms_achievements', JSON.stringify(a.achievements));
    }

    function displayAchieve(aNumber) {
        homeBlock.setHidden(false); pastureBlock.setHidden(false); orchardBlock.setHidden(false); lsBlock.setHidden(false); vinyardBlock.setHidden(false);
        achieveNotif.setHidden(false); achieveNotifP.setHidden(false);
        achieveNotifO.setHidden(false); achieveNotifLS.setHidden(false); achieveNotifV.setHidden(false);
        achieveTextSub.setText(" " + a.achieveText[(aNumber - 1)].sub);
        achieveTextSubP.setText(" " + a.achieveText[(aNumber - 1)].sub);
        achieveTextSubO.setText(" " + a.achieveText[(aNumber - 1)].sub);
        achieveTextSubLS.setText(" " + a.achieveText[(aNumber - 1)].sub);
        achieveTextSubV.setText(" " + a.achieveText[(aNumber - 1)].sub);

        achieveText.setText(a.achieveText[(aNumber - 1)].title);
        achieveTextP.setText(a.achieveText[(aNumber - 1)].title);
        achieveTextO.setText(a.achieveText[(aNumber - 1)].title);
        achieveTextLS.setText(a.achieveText[(aNumber - 1)].title);
        achieveTextV.setText(a.achieveText[(aNumber - 1)].title);

        achieveSC.setText(" + " + a.achieveText[(aNumber - 1)].reward);
        achieveSCP.setText(" + " + a.achieveText[(aNumber - 1)].reward);
        achieveSCO.setText(" + " + a.achieveText[(aNumber - 1)].reward);
        achieveSCLS.setText(" + " + a.achieveText[(aNumber - 1)].reward);
        achieveSCV.setText(" + " + a.achieveText[(aNumber - 1)].reward);

    }

    function achieve(sceneBefore) {
        c.replaceScene(achieveScene, lime.transitions.SlideInDown);
    }


   

    /////functions
               
                function setMute(state) {
                    if (state == 1) {
                        muteBtnP.setFill(imgArray[16]); muteBtn.setFill(imgArray[16]); muteBtnO.setFill(imgArray[16]); muteBtnV.setFill(imgArray[16]); muteBtnLS.setFill(imgArray[16]);
                        muteBtnHouse.setFill(imgArray[16]);
                        playerMuted = 1;
                        localStorage.getItem('gui')
                    } else {
                        muteBtnP.setFill(imgArray[15]); muteBtn.setFill(imgArray[15]); muteBtnO.setFill(imgArray[15]); muteBtnV.setFill(imgArray[15]); muteBtnLS.setFill(imgArray[15]);
                        muteBtnHouse.setFill(imgArray[15]);
                        playerMuted = 0;
                    }
                }


                function checkAcres() {
                    if (acres[1].owned == 0) { forSaleP.setHidden(false); roadLeft.setHidden(true); } else { forSaleP.setHidden(true); roadLeft.setHidden(false);}
                    if (acres[2].owned == 0) { forSaleO.setHidden(false); roadRight.setHidden(true); } else { forSaleO.setHidden(true); roadRight.setHidden(false); }
                    if (acres[3].owned == 0) { forSaleV.setHidden(false); roadLeft2.setHidden(true); } else { forSaleV.setHidden(true); roadLeft2.setHidden(false); }
                    if (acres[4].owned == 0) { forSaleLS.setHidden(false); roadRightO.setHidden(true); } else { forSaleLS.setHidden(true); roadRightO.setHidden(false); }
                   
                }
                checkAcres();

                function checkShortage() {
                    if (player.cropsStored[8].stored < 2 || player.cropsStored[5].stored < 2) {
                        porkBlocked.setHidden(false);
                    lsBlock.setHidden(false); 
                    }

                    if (player.cropsStored[12].stored < 2) {
                        if (vinyardHouseLevel > 1) {
                            jellyBlocked.setHidden(false); treesImgV.setHidden(true); treesImgV2.setHidden(true);
                             vinyardBlock.setHidden(false);
                        }
                    }

                    if (player.cropsStored[6].stored < 3 ) {
                        milkBlocked.setHidden(false);
                        pastureBlock.setHidden(false);
                    }
                }
               
      

                var showingStarCash = 0; 
    /////note this is the starcash buy menu but used to be facebook modal, hence the function name
                function shareFacebook() {        
                    document.getElementById("starCashOuterLabel").innerHTML = starCash;
                    if (showingStarCash == 1) {
                        document.getElementById("fbshare").style.display = 'none';
                        showingStarCash = 0; globalModalBlock = 0;
                        homeBlock.setHidden(true); pastureBlock.setHidden(true); lsBlock.setHidden(true); orchardBlock.setHidden(true); vinyardBlock.setHidden(true);
                    }

                    else {
                        document.getElementById("fbshare").style.display = 'block';
                        showingStarCash = 1; globalModalBlock = 1;
                        homeBlock.setHidden(false); pastureBlock.setHidden(false); lsBlock.setHidden(false); orchardBlock.setHidden(false); vinyardBlock.setHidden(false);
                        achieveNotif.setHidden(true); achieveNotifLS.setHidden(true); achieveNotifV.setHidden(true); achieveNotifO.setHidden(true); achieveNotifP.setHidden(true);
                    }


                };
             
                function inviteBonus() {
                    starcash = starcash + 10;
                }
                lime.scheduleManager.scheduleWithDelay(function () {
                   
                    var starCashIsUp = document.getElementById("fbshare").style.display
                    if (starCashIsUp == 'none' && fsClicked == 0) {
                        globalModalBlock = 0;
                        homeBlock.setHidden(true); 
                    }
                    else if (starCashIsUp == 'block') { globalModalBlock = 1; }


                }, this, 500)
          
           
    
                document.getElementById("starCashOuterLabel").innerHTML = starCash;


   
               
    //////end of farming.start
};
 