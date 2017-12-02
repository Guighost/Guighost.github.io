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
//goog.require('lime.parser.JSON');
//goog.require('lime.ASSETS.blacksmith.json');

//var ss = new lime.SpriteSheet('images/', lime.ASSETS.blacksmith.json, lime.parse)
var farming = {
    EMPTY: 0, PLOWED: 1, GROWING: 2, READY: 3,
    Land: function (a, b, posX, posY) {
        lime.Sprite.call(this);
        this.setAnchorPoint(0, 0);
        this.setSize(a.tile_size, a.tile_size);
        this.setFill("images/bare_land.png");
        this.state = farming.EMPTY;
        var c = this;
        var picked = this.crop;
        //console.log(this);
        var where2 = goog.math.Coordinate(this);
        //var where2 = this.screenToLocal(where);
        //var locationPicked = this.getPosition;
        //console.log(where2);
        goog.events.listen(this, ["mousedown", "touchstart"], function (d) {
            var toPlant = a.crops[b.currentCrop].grow1;
            d.event.stopPropagation();
            c.state == farming.EMPTY && player.money >= a.costPlowing ?
                (c.setFill("images/plowed.png"),
                    c.state = farming.PLOWED,
                    player.money -= a.costPlowing,
                    a.updateMoney()
                )
                : c.state == farming.PLOWED && player.money >= a.crops[b.currentCrop].cost ?
                    
                    (  
                        
                        c.setFill("images/" + toPlant),
                        c.state = farming.GROWING,
                        c.crop = b.currentCrop,
                        c.ripeTime = 1E3 * a.crops[b.currentCrop].time_to_ripe,
                        c.deathTime = 1E3 * a.crops[b.currentCrop].time_to_death,
                        player.money -= a.crops[b.currentCrop].cost,
                        a.updateMoney()
                    )
                    : c.state == farming.READY && (c.setFill("images/bare_land.png"),
                        c.state = farming.EMPTY,
                        player.money += a.crops[c.crop].revenue,
                        //a.crops[c.crop].stored += 1,
                        player.cropsStored[c.crop].stored += 1,

                        console.log("location Picked " + posX + " " + posY),
                        a.updateMoney(),
                      
                        a.updateHarvest(posX, posY, c.crop),
                        a.updateStored()
                    )
        });
        dt = 1E3;
        lime.scheduleManager.scheduleWithDelay(function () {
           
           

            this.state == farming.GROWING ?
                0 >= this.ripeTime ?
                    (
                        this.state = farming.READY, this.setFill("images/" + a.crops[this.crop].image)
                    ) :
                    this.ripeTime -= dt :
                this.state == farming.READY &&
                (
                    0 >= this.deathTime ?
                        (this.state = farming.EMPTY, this.setFill("images/bare_land.png")
                        )
                        : this.deathTime -= dt
                )
            this.state == farming.GROWING &&
                (
                4000 >= this.ripeTime ?
                    (this.setFill("images/" + a.crops[this.crop].grow2)
                        )
                        : this.deathTime -= dt
                )
       
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
",target-densityDpi=device-dpi");d.content=e;document.getElementsByTagName("head").item(0).appendChild(d);if(goog.userAgent.MOBILE&&!goog.global.navigator.standalone){var f=this;setTimeout(function(){window.scrollTo(0,0);f.invalidateSize_()},100)}}var g,a=goog.style.getSize(a);this.setSize(new goog.math.Size(g=b||a.width||lime.Director.DEFAULT_WIDTH,c||a.height*g/a.width||lime.Director.DEFAULT_HEIGHT));this.setDisplayFPS(goog.DEBUG);this.setPaused(!1);b=new goog.dom.ViewportSizeMonitor;goog.events.listen(b,
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
document.body&&(this.overflowStyle_&&goog.style.uninstallStyles(this.overflowStyle_),this.overflowStyle_=goog.style.installStyles("html{height:"+(a.height+120)+"px;overflow:hidden;}"))};
lime.Director.prototype.makeMobileWebAppCapable=function(){var a=document.createElement("meta");a.name="apple-mobile-web-app-capable";a.content="yes";document.getElementsByTagName("head").item(0).appendChild(a);a=document.createElement("meta");a.name="apple-mobile-web-app-status-bar-style";a.content="black";document.getElementsByTagName("head").item(0).appendChild(a);a=!1;goog.isDef(localStorage)&&(a=localStorage.getItem("_lime_visited"));/(ipod|iphone|ipad)/i.test(navigator.userAgent)&&(!window.navigator.standalone&&
COMPILED&&!a&&this.domElement.parentNode==document.body)&&(alert("Please install this page as a web app by clicking Share + Add to home screen."),goog.isDef(localStorage)&&localStorage.setItem("_lime_visited",!0))};lime.Director.prototype.updateDomOffset_=function(){this.domOffset=goog.style.getPageOffset(this.domElement.parentNode)};
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

var player = {
    playerLevel: 1,
    barnLevel: 1,
    pastureLevel: 1,
    fields: 2,
    farms: 1,
    tools: 150,
    money: 300,
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
        { name: "Pear", stored: 0 }
    ]
};
console.log(player.cropsStored);
console.log(player.cropsStored[0]);

if (typeof localStorage["farm_Player"] === "undefined") { localStorage.setItem('farm_Player', JSON.stringify(player));};
player = JSON.parse(localStorage.getItem('farm_Player'));
console.log(player);

var starCash = 0;
if (typeof localStorage["starCash"] === "undefined") { localStorage["starCash"] = 0; starCash = 0; };
starCash = parseInt(localStorage["starCash"]);

farming.start = function () {
    var a = { width: 310, height: 540, tile_size: 30, num_tiles_x: 4, num_tiles_y: 4, landLayer_w: 320, landLayer_h: 388, controlsLayer_w: 320, controlsLayer_h: 75, costPlowing: 0, shop_margin_x: 50, shop_margin_y: 35 },
        b = { money: 300, currentCrop: 0 };
    
    a.crops = [
        { name: "Tomatoes  ", cost: 5, revenue: 20, time_to_ripe: 15, time_to_death: 60, image: "tomato.png", harvest: "tomato2.png", grow1: "tomatoGrow1.png", grow2: "tomatoGrow2.png", stored: 0},
        { name: "Carrots    ", cost: 7, revenue: 30, time_to_ripe: 30, time_to_death: 60, image: "carrots.png", harvest: "carrots2.png", grow1: "carrotGrow1.png", grow2: "carrotGrow2.png", stored: 0 },
        { name: "Artichoke  ", cost: 10, revenue: 40, time_to_ripe: 60, time_to_death: 120, image: "artichoke.png", harvest: "artichoke2.png", grow1: "artiGrow1.png", grow2: "artiGrow2.png", stored: 0 },
        { name: "Eggplant ", cost: 15, revenue: 60, time_to_ripe: 90, time_to_death: 180, image: "eggplant.png", harvest: "eggplant2.png", grow1: "eggplantGrow1.png", grow2: "eggplantGrow2.png", stored: 0 },
        { name: "Peppers  ", cost: 20, revenue: 80, time_to_ripe: 120, time_to_death: 240, image: "peppers.png", harvest: "peppers2.png", grow1: "pepperGrow1.png", grow2: "pepperGrow2.png", stored: 0 },
        { name: "Corn  ", cost: 25, revenue: 100, time_to_ripe: 140, time_to_death: 280, image: "corn.png", harvest: "corn2.png", grow1: "cornGrow1.png", grow2: "cornGrow2.png", stored: 0},
        { name: "Hay  ", cost: 10, revenue: 50, time_to_ripe: 60, time_to_death: 280, image: "hay.png", harvest: "hayCartFull.png", grow1: "hayGrow1.png", grow2: "hayGrow2.png", stored: 0 },
        { name: "Milk  ", cost: 30, revenue: 100, time_to_ripe: 60, time_to_death: 22280, image: "milk.png", harvest: "milk.png", grow1: "milk.png", grow2: "milk.png", stored: 0},
        { name: "Apple  ", cost: 30, revenue: 100, time_to_ripe: 60, time_to_death: 22280, image: "apple.png", harvest: "apple.png", grow1: "apple.png", grow2: "apple.png", stored: 0 },
        { name: "Pear  ", cost: 30, revenue: 100, time_to_ripe: 60, time_to_death: 22280, image: "pear.png", harvest: "pear.png", grow1: "pear.png", grow2: "pear.png", stored: 0 },
    ];
    
    a.barnyard = [
        { name: "yard", image: "grass.png" },
        { name: "road", image: "vertRoad.png" },
        { name: "sacks", image: "sacks.png" },
        { name: "market", image: "market2.png" },
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
        { name: "forge", image: "forge1.png" },
        { name: "gateFence", image: "gateFence.png" }
        
    ];
    a.barnlevel = [
        { name: "Basic Shed", image: "barn1.png" },
        { name: "Small Barn", image: "barn2.png" },
        { name: "Large Barn", image: "barn3.png" },
        { name: "XLarge Barn", image: "barn4.png" },
        { name: "Double Silo Barn", image: "barn5.png" },
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
        { name: "cowEatR", image: "cow_eatR4.png" },
        { name: "cowForward1", image: "cow_walkF1.png" },
        { name: "rocks1", image: "rocks.png" },
        { name: "treeBlockP", image: "treeBlockP.png" }
    ];
    a.orchard = [
        { name: "waterfallMtn", image: "Orchard/OrchardBack2.png" },
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
    //////////----------------tooltimer---------------------//////
    dt = 10000;
    lime.scheduleManager.scheduleWithDelay(function () {
        player.tools = player.tools + (5);
        a.updateTools();


    }, this, dt)


    var horizRoad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(320, 25).setFill("images/" + a.barnyard[15].image); 

    var c = new lime.Director(document.body, a.width, a.height); c.makeMobileWebAppCapable(); c.setDisplayFPS(!1);
        var d = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
            e = (new lime.Layer).setAnchorPoint(0, 50),
            f = (new lime.Layer).setAnchorPoint(0, 50);
        d.appendChild(e);
        d.appendChild(f);

    //top bar
        var gg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 29).setFill("#8b008b");
        f.appendChild(gg);
        var topLogo = (new lime.Sprite).setPosition(155, 11).setSize(150, 22).setFill("images/UI/topMenuPlain.png");
        f.appendChild(topLogo);
        var h = (new lime.Label).setText("$ " + player.money).setFontColor("#E8FC08").setPosition(a.controlsLayer_w - 45, 10);
        f.appendChild(h);
        //inventory Icons
        for (x = 0; x < (a.crops.length); x++) storedIcon = (new lime.Sprite).setAnchorPoint(0, 0).setPosition((10 + (x * 30)), 20).setFill("images/" + a.crops[x].harvest).setSize(20, 20), f.appendChild(storedIcon);

        var gLabel0 = (new lime.Label).setPosition((20), 39).setSize(20, 16).setText(player.cropsStored[0].stored).setFontColor("#E8FC08"); f.appendChild(gLabel0);
        var gLabel1 = (new lime.Label).setPosition((50), 39).setSize(20, 16).setText(player.cropsStored[1].stored).setFontColor("#E8FC08"); f.appendChild(gLabel1);
        var gLabel2 = (new lime.Label).setPosition((80), 39).setSize(20, 16).setText(player.cropsStored[2].stored).setFontColor("#E8FC08"); f.appendChild(gLabel2);
        var gLabel3 = (new lime.Label).setPosition((110), 39).setSize(20, 16).setText(player.cropsStored[3].stored).setFontColor("#E8FC08"); f.appendChild(gLabel3);
        var gLabel4 = (new lime.Label).setPosition((140), 39).setSize(20, 16).setText(player.cropsStored[4].stored).setFontColor("#E8FC08"); f.appendChild(gLabel4);
        var gLabel5 = (new lime.Label).setPosition((170), 39).setSize(20, 16).setText(player.cropsStored[5].stored).setFontColor("#E8FC08"); f.appendChild(gLabel5);
        var gLabel6 = (new lime.Label).setPosition((200), 39).setSize(20, 16).setText(player.cropsStored[6].stored).setFontColor("#E8FC08"); f.appendChild(gLabel6);
        var gLabel7 = (new lime.Label).setPosition((230), 39).setSize(20, 16).setText(player.cropsStored[7].stored).setFontColor("#E8FC08"); f.appendChild(gLabel7);
        var gLabel8 = (new lime.Label).setPosition((260), 39).setSize(20, 16).setText(player.cropsStored[8].stored).setFontColor("#E8FC08"); f.appendChild(gLabel8);
        var gLabel9 = (new lime.Label).setPosition((290), 39).setSize(20, 16).setText(player.cropsStored[9].stored).setFontColor("#E8FC08"); f.appendChild(gLabel9);

        a.updateStored = function () {

            gLabel0.setText(player.cropsStored[0].stored); 
            gLabel1.setText(player.cropsStored[1].stored);
            gLabel2.setText(player.cropsStored[2].stored); 
            gLabel3.setText(player.cropsStored[3].stored); 
            gLabel4.setText(player.cropsStored[4].stored); 
            gLabel5.setText(player.cropsStored[5].stored); 
            gLabel6.setText(player.cropsStored[6].stored); 
            gLabel7.setText(player.cropsStored[7].stored); 
            gLabel8.setText(player.cropsStored[8].stored); 
            gLabel9.setText(player.cropsStored[9].stored); 
        };

    //lower menu
        var g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, a.height - a.controlsLayer_h -5).setSize(a.controlsLayer_w, a.controlsLayer_h).setFill("#0D0D0D");
        f.appendChild(g);
        g = (new lime.GlossyButton).setColor("#663300").setText("Seeds").setPosition(35, a.height - a.controlsLayer_h / 2 - 20).setSize(70, 25);
        f.appendChild(g);
   
     
    //update money
        a.updateMoney = function () {
            
            //b.money = player.money ;
            h.setText("$ " + player.money); pastureCash.setText("$ " + player.money);
            localStorage.setItem('farm_Player', JSON.stringify(player));
        };

        var toolCountImg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(20,20).setFill("images/toolsIcon.png");
        var toolCount = (new lime.Label).setText(player.tools).setFontColor("#E8FC08").setPosition(32, 10);
        f.appendChild(toolCountImg);
        f.appendChild(toolCount);
        a.updateTools = function () {
            toolCount.setText(player.tools); toolCount.setFontColor("#4dff4d"); toolCountImg.setSize(25, 25);
            toolCountP.setText(player.tools); toolCountP.setFontColor("#4dff4d");
            toolUpCount.setHidden(false);
                   
            setTimeout(function () { toolUpCount.setPosition(55, 105); toolUpCount.setOpacity(.6); toolCountImg.setSize(20, 20);  }, 250);
            setTimeout(function () { toolUpCount.setPosition(55, 100); toolUpCount.setOpacity(.8); toolCountImg.setSize(25, 25); }, 500);
            setTimeout(function () { toolCount.setFontColor("#E8FC08"); toolCountP.setFontColor("#E8FC08"); toolUpCount.setFontColor("#E8FC08"); toolUpCount.setPosition(55, 95); toolUpCount.setOpacity(.9); toolCountImg.setSize(20, 20);  }, 750); 
            setTimeout(function () { toolUpCount.setPosition(55, 90); toolUpCount.setOpacity(.8);   }, 1000);
            setTimeout(function () { toolUpCount.setPosition(55, 85); toolUpCount.setOpacity(.6);   }, 1250);
            setTimeout(function () { toolUpCount.setHidden(true); toolUpCount.setPosition(55, 110); toolUpCount.setOpacity(.2);   }, 1500);
        };

        var toolUpCount = (new lime.Label).setText("+ 5 Tools").setFontWeight(600).setFontColor("#E8FC08").setPosition(55, 110).setOpacity(.4);
        f.appendChild(toolUpCount);
        toolUpCount.setHidden(true);
        var menu = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, a.height - 25).setSize(70, 25).setFill("#0D0D0D");
        f.appendChild(menu);
        menu = (new lime.GlossyButton).setColor("#663300").setText("Menu").setPosition(35, a.height - 25).setSize(70, 25);
        f.appendChild(menu);



    ////----------------------------------harvest anim-------------------------------------------------------------------------/////
        var harvest1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (15), a.height / 2).setFill("images/" + a.crops[0].harvest).setSize(26, 21);
        f.appendChild(harvest1); harvest1.setHidden(true);
        a.updateHarvest = function (x, y, picked) {
            harvest1.setPosition(x, y),  harvest1.setFill("images/" + a.crops[picked].harvest),  harvest1.setHidden(false);
            var diffX = (x - 130) /7;            var diffY = (y - 80) / 7;
            var diffX2 = x - diffX;            var diffY2 = y - diffY;
            
            for (f = 0; f < 7; f++){
                fadeAdj = "." + ( 7 - f);
                setTimeout(function () { harvest1.setPosition(diffX2, diffY2);  diffX2 = (diffX2 - diffX); diffY2 = (diffY2 - diffY); }, ((f * 70) +1));
                setTimeout(function () { harvest1.setOpacity(1.0); harvest1.setHidden(true); }, 800);
                }
        };


        var hh = b.currentCrop;
        var w = (new lime.Label).setText("Planting " + a.crops[0].name ).setFontColor("#E8FC08").setFontSize(12).setPosition(155 , a.height - a.controlsLayer_h / 2 - 26);
        f.appendChild(w);
        var z = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(135, a.height - a.controlsLayer_h / 2 - 12).setFill("images/" + a.crops[hh].image).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
        f.appendChild(z);
    ///market control
        var market = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(214, a.height - a.controlsLayer_h + 1).setSize(90, 65).setFill("images/" + a.barnyard[3].image); f.appendChild(market)
        goog.events.listen(market, ["mousedown", "touchstart"], function () { c.replaceScene(marketScene, lime.transitions.SlideInDown) });
        //var eggplantCrate = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(283, 78).setSize(20, 27).setFill("images/" + a.barnyard[8].image); e.appendChild(eggplantCrate)
        //var cornCrate = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(283, 95).setSize(20, 27).setFill("images/" + a.barnyard[9].image); e.appendChild(cornCrate)

    ////game scene graphics

        var midback = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 45).setSize(a.controlsLayer_w, a.landLayer_h +35).setFill("images/" + a.barnyard[0].image); e.appendChild(midback)
        var vertroad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(144, 60).setSize(21, 440).setFill("images/" + a.barnyard[1].image); e.appendChild(vertroad)
        var well = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(3, 93).setSize(300, 79).setFill("images/" + a.barnyard[10].image); e.appendChild(well)
        var sacks = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(75,65).setSize(40, 22).setFill("images/" + a.barnyard[2].image); e.appendChild(sacks)
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
        roadLeft = (new lime.GlossyButton).setColor("#8b008b").setText("< Pasture").setPosition(42, 12).setSize(80, 15)
        horizRoad.appendChild(roadLeft)

        var roadRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(285, 10).setSize(15, 15)
        horizRoad.appendChild(roadRight)
        roadRight = (new lime.GlossyButton).setColor("#8b008b").setText("Orchard >").setPosition(265, 12).setSize(80, 15)
        horizRoad.appendChild(roadRight)

        

        e.appendChild(horizRoad)

        
        //var shelter = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 48).setSize(18, 65).setFill("images/" + a.barnyard[6].image); e.appendChild(shelter)
        //var shelter3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(4, 48).setSize(18, 65).setFill("images/" + a.barnyard[6].image); e.appendChild(shelter3)
        //var shelter2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(22, 48).setSize(37, 72).setFill("images/" + a.barnyard[7].image); e.appendChild(shelter2)
                
        var forge = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(4, 52).setSize(84, 99).setFill("images/" + a.barnyard[17].image); e.appendChild(forge)
        var anvil1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(69, 80).setSize(22, 22).setFill("images/" + a.barnyard[12].image); e.appendChild(anvil1)
        var toolTable = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 111).setSize(19, 22).setFill("images/" + a.barnyard[16].image); e.appendChild(toolTable)
        var barn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(88.5, 4).setSize(132, 155).setFill("images/" + a.barnlevel[(player.barnLevel - 1)].image); e.appendChild(barn)


        for (f = 0; f < a.num_tiles_x; f++)
            for (var i = 0; i < a.num_tiles_y; i++){
                var posX = f * a.tile_size + 19;
                var posY = i * a.tile_size + 166;
                var j = (new farming.Land(a, b, posX, posY)).setPosition(f * a.tile_size + 19, i * a.tile_size + 166); e.appendChild(j)

                posX = f * a.tile_size + 171;                              
                var v = (new farming.Land(a, b, posX, posY)).setPosition(f * a.tile_size + 171, i * a.tile_size + 166); e.appendChild(v)

                posX = f * a.tile_size + 19;
                posY = i * a.tile_size + 296;
                var u = (new farming.Land(a, b, posX, posY)).setPosition(f * a.tile_size + 19, i * a.tile_size + 296); e.appendChild(u)

               posX = f * a.tile_size + 171;                
                var t = (new farming.Land(a, b, posX, posY)).setPosition(f * a.tile_size + 171, i * a.tile_size + 296); e.appendChild(t)
                //t.setHidden(true);
                if (player.fields < 2) {
                    u.setHidden(false);
                    if (player.fields < 3) {
                        t.setHidden(false);    
                    }                    
                }               
            }
        var treeUnlockBtn = (new lime.GlossyButton).setColor("#663300").setText("Unlock").setPosition(79, 351).setSize(130, 130).setOpacity(.8);
        var treeUnlockBtn2 = (new lime.GlossyButton).setColor("#663300").setText("Unlock").setPosition(229, 351).setSize(130, 130).setOpacity(.8);

        var barnUnlock = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(115, 50).setSize(80, 140).setFontWeight(600).setText("Lvl " + player.barnLevel + "/5");
        //var barnUnlock2 = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(65, 105).setSize(180, 80).setFontWeight(600).setText(" 100 ");
        var barnUnlock3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(137, 66).setSize(36, 42).setFill("images/toolUp1.png");
        lime.scheduleManager.scheduleWithDelay(function () {
            //add upgrade anim
            var currentPos = barnUnlock3.getPosition();
            currentPos.y -= 5;
            //console.log(currentPos)/*;*/
            if (currentPos.y < 59) { currentPos.y = 66 };
            barnUnlock3.setPosition(currentPos);
        }, this, 500)
        if (parseInt(player.barnLevel) >= 4) { barnUnlock.setHidden(true);  barnUnlock3.setHidden(true);}; 
       
        e.appendChild(barnUnlock)
        e.appendChild(barnUnlock3)
       
        if (player.fields < 3) {
            e.appendChild(treeUnlockBtn);
            var trees1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(18, 295).setSize(120, 120).setFill("images/" + a.barnyard[13].image); e.appendChild(trees1)
            var treeUnlock1 = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(16, 335).setSize(120, 120).setText("Clear the Forest"); e.appendChild(treeUnlock1)
            var trees1Img = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(60, 355).setSize(35, 35).setFill("images/tools50.png"); e.appendChild(trees1Img)
        }
        if (player.fields < 4) {
            e.appendChild(treeUnlockBtn2);
            var trees2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(172, 295).setSize(120, 120).setFill("images/" + a.barnyard[14].image); e.appendChild(trees2)
            var treeUnlock2 = (new lime.Label).setAnchorPoint(0, 0).setFontColor("#E8FC08").setPosition(172, 335).setSize(120, 120).setText("Clear the Forest"); e.appendChild(treeUnlock2)
            var trees2Img = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(215, 355).setSize(35, 35).setFill("images/tools50.png"); e.appendChild(trees2Img)
        }

   

    //replace the scene
        c.replaceScene(d);


        //var roadLeft = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(320, 25).setFill("images/" + a.barnyard[15].image); e.appendChild(roadLeft)
    //event handlers
        goog.events.listen(treeUnlockBtn, ["mousedown", "touchstart"], function () {            //left field
            if (player.tools >= 50) {
               player.fields = player.fields + 1;
                player.tools = player.tools - 50;
                console.log("cleared field 3 ");
                a.updateTools();
                trees1.setHidden(true); treeUnlock1.setHidden(true); treeUnlockBtn.setHidden(true); trees1Img.setHidden(true);      
                localStorage.setItem('farm_Player', JSON.stringify(player));
              }            
        }, { passive: false });

        goog.events.listen(treeUnlockBtn2, ["mousedown", "touchstart"], function () {         //right field
            if (player.tools >= 50) {
                player.fields = player.fields + 1;
                player.tools = player.tools - 50;
                console.log("Cleared field 4 " );
                a.updateTools();
                trees2.setHidden(true); treeUnlock2.setHidden(true); treeUnlockBtn2.setHidden(true); trees2Img.setHidden(true); 
                localStorage.setItem('farm_Player', JSON.stringify(player));
            }
        }, { passive: false });


        goog.events.listen(barn, ["mousedown", "touchstart"], function () {                 //barnUpgrades
            console.log("hit it");
            if (player.tools >= 100 && player.barnLevel < 6) {
                barnUnlock.setHidden(true); barnUnlock3.setHidden(true);
                //barnUnlockBtn.setHidden(true);
                player.barnLevel = player.barnLevel + 1;
                console.log("barn level is " + player.barnLevel);
                player.tools = player.tools - 100;
                localStorage.setItem('farm_Player', JSON.stringify(player));
                //player.barnLevel = 2;
                if (player.barnLevel > 5) { player.barnLevel = 5; };
               
                localStorage.setItem('farm_Player', JSON.stringify(player));
                if (player.barnLevel == 2) { barn.setFill('images/barn2.png'); };
                if (player.barnLevel == 3) { barn.setFill('images/barn3.png'); };
                if (player.barnLevel == 4) { barn.setFill('images/barn4.png'); };
                if (player.barnLevel == 5) { barn.setFill('images/barn5.png'); };
                a.updateTools();

            }

        }, { passive: false });
        //c.replaceScene(d);
        u.setHidden(false);
      

        var l = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
            e = (new lime.Layer).setAnchorPoint(0, 0),
            f = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
            e.appendChild(f);
            l.appendChild(e);
            f = (new lime.GlossyButton).setColor("#133242").setText("Back").setPosition(a.width / 2, a.height - 25).setSize(80, 40);
            e.appendChild(f);
            goog.events.listen(g, ["mousedown", "touchstart"], function () {
                c.replaceScene(l,lime.transitions.SlideInDown)
                for (f = 0; f < (player.barnLevel + 1); f++)
                    g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.shop_margin_x - 35, (a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + (f * 9) - (f * 1)).setFill("images/" + a.crops[f].image).setSize(a.tile_size * 1.3, a.tile_size * 1.3),
                        e.appendChild(g),
                        i = (new lime.Label).setText(a.crops[f].name + " (" + a.crops[f].time_to_ripe + " days) ").setFontColor("#E8FC08").setFontSize(22).setPosition(a.shop_margin_x + 130, (1.4 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + (f * 7) - (f * 1)),
                        e.appendChild(i),
                        i = (new lime.Label).setText("Seeds: $" + a.crops[f].cost + " ").setFontColor("#133242").setFill("#C14825").setFontSize(16).setPosition(a.shop_margin_x + 80, (2.1 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + ((f * 9) - f)),
                        e.appendChild(i),
                        i = (new lime.Label).setText("Crops: $" + a.crops[f].revenue + " ").setFontColor("#133242").setFill("#25C12A").setFontSize(16).setPosition(a.shop_margin_x + 190, (2.1 * a.shop_margin_y + (a.shop_margin_y + a.tile_size) * f) + ((f * 9) - f)),
                        e.appendChild(i),
                        function (y, e) {
                            goog.events.listen(y, ["mousedown", "touchstart"],
                                function () {
                                    b.currentCrop = e; c.replaceScene(d, lime.transitions.SlideInUp);
                                    var z = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(135, a.height - a.controlsLayer_h / 2 - 12).setFill("images/" + a.crops[e].image).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
                                    w.setText("Planting " + a.crops[e].name);
                                    d.appendChild(z);

                                })
                        }(g, f)




            });
            goog.events.listen(f, ["mousedown", "touchstart"], function () { c.replaceScene(d, lime.transitions.SlideInUp) });

    //pasture scene
            var pastureScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
                pastureLayer = (new lime.Layer).setAnchorPoint(0, 0),
                pastureFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height -100 ).setFill("#0D0D0D");
            pastureScene.appendChild(pastureFill1);
            pastureScene.appendChild(pastureLayer);
            //backBtn1 = (new lime.GlossyButton).setColor("#133242").setText("Back").setPosition(a.width / 2, a.height - 25).setSize(80, 40);
            //pastureLayer.appendChild(backBtn1);
            var horizRoad2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 435).setSize(320, 25).setFill("images/" + a.barnyard[15].image); 
            pastureLayer.appendChild(horizRoad2);
            var roadLeft2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 10).setSize(15, 15)
            horizRoad2.appendChild(roadLeft2)
            roadLeft2 = (new lime.GlossyButton).setColor("#8b008b").setText("< Locked").setPosition(42, 12).setSize(80, 15)
            horizRoad2.appendChild(roadLeft2)



            var roadRight2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(285, 10).setSize(15, 15)
            horizRoad2.appendChild(roadRight2)
            roadRight2 = (new lime.GlossyButton).setColor("#8b008b").setText("Base >").setPosition(265, 12).setSize(80, 15)
            horizRoad2.appendChild(roadRight2)


            var midbackP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 40).setSize(a.controlsLayer_w, a.landLayer_h + 12).setFill("images/" + a.barnyard[0].image);
            pastureLayer.appendChild(midbackP)

            var gg = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 31).setFill("#8b008b");
            pastureLayer.appendChild(gg);
            gg = (new lime.GlossyButton).setColor("#663300").setText("Home").setPosition(35, 20).setSize(50, 30);
            pastureLayer.appendChild(gg);
            var ggg = (new lime.Label).setText("GuiGhost Farms").setFontColor("#E8FC08").setPosition(a.controlsLayer_w - 155, 20).setFontSize(20);
            pastureLayer.appendChild(ggg);
            var g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, a.height - a.controlsLayer_h - 5).setSize(a.controlsLayer_w, a.controlsLayer_h).setFill("#0D0D0D");
            pastureLayer.appendChild(g);
            pastureSeeds = (new lime.GlossyButton).setColor("#663300").setText("Actions").setPosition(65, a.height - a.controlsLayer_h / 2 + 5).setSize(105, 40);
            pastureLayer.appendChild(pastureSeeds);
            var pastureCash = (new lime.Label).setText("$ " + player.money).setFontColor("#E8FC08").setPosition(a.controlsLayer_w - 50, a.height - a.controlsLayer_h / 2 - 26);
            pastureLayer.appendChild(pastureCash);
           
            var toolCountImgP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w - 55, a.height - a.controlsLayer_h / 2 - 10).setSize(40, 40).setFill("images/toolsIcon.png");
            var toolCountP = (new lime.Label).setText(player.tools).setFontColor("#E8FC08").setPosition(a.controlsLayer_w - 35, a.height - a.controlsLayer_h / 2 + 25);
            pastureLayer.appendChild(toolCountImgP);
            pastureLayer.appendChild(toolCountP);

            var hhP = b.currentCrop;
            var wP = (new lime.Label).setText("Planting " + a.crops[6].name).setFontColor("#E8FC08").setFontSize(12).setPosition(a.controlsLayer_w / 2 + 5, a.height - a.controlsLayer_h / 2 - 26);
            pastureLayer.appendChild(wP);
            var zP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.controlsLayer_w / 2 - (15), a.height - a.controlsLayer_h / 2 - 12).setFill("images/" + a.crops[6].image).setSize(a.tile_size * 1.2, a.tile_size * 1.2);
            pastureLayer.appendChild(zP);
         



            var vertFence9 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 38).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence9)
            var vertFence10 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 38).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence10)
            var vertFence1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 203).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence1)
            var vertFence2 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 203).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence2)
            var vertFence3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 123).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence3)
            var vertFence4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 123).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence4)
            var vertFence5 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 293).setSize(8, 55).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence5)
            var vertFence6 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 293).setSize(8, 55).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence6)
            //var vertFence7 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-3, 383).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence7)
            //var vertFence8 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(302, 383).setSize(8, 90).setFill("images/" + a.barnyard[4].image); pastureLayer.appendChild(vertFence8)

            var horizFence1P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-4, 30).setSize(315, 29).setFill("images/" + a.barnyard[5].image); pastureLayer.appendChild(horizFence1P)
            //var horizRoad = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 436).setSize(320, 25).setFill("images/" + a.barnyard[15].image); 
            var horizFence2P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(-4, 315).setSize(315, 29).setFill("images/" + a.barnyard[5].image); pastureLayer.appendChild(horizFence2P)

            var pond1P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(90, 215).setSize(130, 80).setFill("images/Pasture/" + a.pasture[0].image); pastureLayer.appendChild(pond1P)
            var dairyBarnP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(54, 36).setSize(200, 137).setFill("images/Pasture/" + a.pasture[1].image); pastureLayer.appendChild(dairyBarnP)
            
            var pasUpLabel2 = (new lime.Label).setText("Lvl " + player.pastureLevel + "/3 ").setFontColor("#E8FC08").setFontWeight(600).setPosition(155, 62).setSize(100, 50); 
            var barnUnlock3P = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(135, 66).setSize(36, 42).setFill("images/toolUp2.png");
            lime.scheduleManager.scheduleWithDelay(function () {
                //add upgrade anim
                var currentPos = barnUnlock3P.getPosition();
                currentPos.y -= 5;
                //console.log(currentPos)/*;*/
                if (currentPos.y < 59) { currentPos.y = 66 };
                barnUnlock3P.setPosition(currentPos);
            }, this, 500)
            pastureLayer.appendChild(barnUnlock3P)
            pastureLayer.appendChild(pasUpLabel2)
         
            if (player.pastureLevel >= 3) { barnUnlock3P.setHidden(true); pasUpLabel2.setHidden(true); }
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

            ///pasture Left Tree Block
           
            var treeBlockP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(175, 120).setSize(140, 200).setFill("images/Pasture/" + a.pasture[9].image); pastureLayer.appendChild(treeBlockP)
            var treeUnlockBtnP = (new lime.Label).setText("Clear Forest").setFontColor("#E8FC08").setFontWeight(600).setPosition(250, 285).setSize(90, 130); pastureLayer.appendChild(treeUnlockBtnP)
            var treesImgP = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(235, 240).setSize(35, 35).setFill("images/tools500.png"); pastureLayer.appendChild(treesImgP)

            if (player.treesP > 0) { treeBlockP.setHidden(true); treeUnlockBtnP.setHidden(true); treesImgP.setHidden(true); }
            
            ///pasture animals
            var cowEatR = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(68, 224).setSize(48, 24).setFill("images/Pasture/" + a.pasture[6].image); pastureLayer.appendChild(cowEatR)
            var cowForward1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, 253).setSize(16, 28).setFill("images/Pasture/" + a.pasture[7].image); pastureLayer.appendChild(cowForward1)

            //pasture Upgrades
            var stallLeft = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 45).setSize(54, 83).setFill("images/Pasture/" + a.PastureUpgrades[0].image); pastureLayer.appendChild(stallLeft)
            var stallRight = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(248, 45).setSize(54, 83).setFill("images/Pasture/" + a.PastureUpgrades[1].image); pastureLayer.appendChild(stallRight)
            stallLeft.setHidden(true); stallRight.setHidden(true);
            if (player.pastureLevel > 1) {
                stallLeft.setHidden(false);
                if (player.pastureLevel > 2) {
                    stallRight.setHidden(false);
                }
            }


            //pasture - hayfields
            for (f = 0; f < a.num_tiles_x; f++)
                for (var i = 0; i < 3; i++) {
                    var posX = f * a.tile_size + 15;
                    var posY = i * a.tile_size + 348;
                    var hay1 = (new farming.Land(a, b, posX, posY)).setPosition(f * a.tile_size + 15, i * a.tile_size + 348); pastureLayer.appendChild(hay1)

                    posX = f * a.tile_size + 172;
                    var hay2 = (new farming.Land(a, b, posX, posY)).setPosition(f * a.tile_size + 172, i * a.tile_size + 348); pastureLayer.appendChild(hay2)
                }
            var dirtRoad3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(143, 345).setSize(21, 92).setFill("images/Pasture/" + a.pasture[5].image); pastureLayer.appendChild(dirtRoad3)
            var oldCrop = b.currentCrop;
            //b.currentCrop = 6;




        //event handling
            
            goog.events.listen(roadLeft, ["mousedown", "touchstart"], function () { c.replaceScene(pastureScene, lime.transitions.SlideInLeft); oldCrop = b.currentCrop; b.currentCrop = 6;});              ///from home to pasture
            goog.events.listen(roadRight2, ["mousedown", "touchstart"], function () { c.replaceScene(d, lime.transitions.SlideInRight); b.currentCrop = oldCrop; });   ////from pasture to home
        // pasture Tree Block
            goog.events.listen(treeUnlockBtnP, ["mousedown", "touchstart"], function () {            
                if (player.tools >= 500) {
                    
                    player.tools = player.tools - 500;
                    player.treesP = 1;
                    console.log("cleared trees on right Pasture ");
                    a.updateTools();
                    treeUnlockBtnP.setHidden(true); treeBlockP.setHidden(true); treesImgP.setHidden(true);
                    localStorage.setItem('farm_Player', JSON.stringify(player));
                }
            }, { passive: false });
        // pasture BarnUpgrades
            goog.events.listen(barnUnlock3P, ["mousedown", "touchstart"], function () {                 //barnUpgrades
                console.log("u hit it")
                if (player.tools >= 250 && parseInt(player.pastureLevel) <= 3 ) {
                   console.log("inside If")
                   player.pastureLevel = parseInt(player.pastureLevel) + 1;
                   console.log("pasture level is " + parseInt(player.pastureLevel));
                    player.tools = player.tools - 250;
                    localStorage.setItem('farm_Player', JSON.stringify(player));
                    
                    if (player.pastureLevel > 3) { player.pastureLevel = 3 };

                    localStorage.setItem('farm_Player', JSON.stringify(player));

                    if (player.pastureLevel >= 2) { stallLeft.setHidden(false);  };
                    if (player.pastureLevel >= 3) { stallRight.setHidden(false); pasUpLabel2.setHidden(true); barnUnlock3P.setHidden(true);};
                   
                    a.updateTools();

                }

            }, { passive: false });
    //orchard scene
            var orchardScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
                orchardLayer = (new lime.Layer).setAnchorPoint(0, 0),
                orchardFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
            orchardScene.appendChild(orchardFill1);
            orchardScene.appendChild(orchardLayer);
            
            //var horizRoad3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 435).setSize(300, 25).setFill("images/" + a.barnyard[15].image);
            //orchardLayer.appendChild(horizRoad3);
            var midbackO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 45).setSize(a.controlsLayer_w, a.landLayer_h + 29).setFill("images/" + a.barnyard[0].image);
            orchardLayer.appendChild(midbackO)
            var waterfallMtn = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 44).setSize(310, 420).setFill("images/" + a.orchard[0].image);
            orchardLayer.appendChild(waterfallMtn)
            var horizRoad3 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 435).setSize(109, 25).setFill("images/" + a.barnyard[15].image);
            orchardLayer.appendChild(horizRoad3);
            var horizRoad4 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(152, 435).setSize(170, 25).setFill("images/" + a.barnyard[15].image);
            orchardLayer.appendChild(horizRoad4);
            //var vertroadO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 200).setSize(25, 240).setFill("images/" + a.barnyard[1].image); orchardLayer.appendChild(vertroadO)

    ///orchard farming land
            var posXO =  a.tile_size + 5;
            var posYO = a.tile_size + 180;
            var tree1 = (new farming.Land(a, b, posXO, posYO)).setPosition(5, 180); tree1.setSize(40, 50); tree1.setFill("images/Orchard/bare_trees.png");orchardLayer.appendChild(tree1)
            var tree2 = (new farming.Land(a, b, posXO, posYO)).setPosition(65, 180); tree2.setSize(40, 50); tree2.setFill("images/Orchard/growing_trees.png"); orchardLayer.appendChild(tree2)
            var tree3 = (new farming.Land(a, b, posXO, posYO)).setPosition(5, 245); tree3.setSize(40, 50); tree3.setFill("images/Orchard/growing2_trees.png"); orchardLayer.appendChild(tree3)
            var tree4 = (new farming.Land(a, b, posXO, posYO)).setPosition(65, 245); tree4.setSize(40, 50); tree4.setFill("images/Orchard/ready_trees.png"); orchardLayer.appendChild(tree4)
            var tree5 = (new farming.Land(a, b, posXO, posYO)).setPosition(5, 310); tree5.setSize(40, 50); tree5.setFill("images/Orchard/bare_trees.png"); orchardLayer.appendChild(tree5)
            var tree6 = (new farming.Land(a, b, posXO, posYO)).setPosition(65, 310); tree6.setSize(40, 50); tree6.setFill("images/Orchard/growing_trees.png"); orchardLayer.appendChild(tree6)
            var tree7 = (new farming.Land(a, b, posXO, posYO)).setPosition(5, 375); tree7.setSize(40, 50); tree7.setFill("images/Orchard/growing2_trees.png"); orchardLayer.appendChild(tree7)
            var tree8 = (new farming.Land(a, b, posXO, posYO)).setPosition(65, 375); tree8.setSize(40, 50); tree8.setFill("images/Orchard/ready_trees.png"); orchardLayer.appendChild(tree8)
    //right trees
            var tree9 = (new farming.Land(a, b, posXO, posYO)).setPosition(215, 245); tree9.setSize(40, 50); tree9.setFill("images/Orchard/growing2_trees.png"); orchardLayer.appendChild(tree9)
            var tree10 = (new farming.Land(a, b, posXO, posYO)).setPosition(250, 180); tree10.setSize(40, 50); tree10.setFill("images/Orchard/ready_trees.png"); orchardLayer.appendChild(tree10)
            var tree11 = (new farming.Land(a, b, posXO, posYO)).setPosition(160, 245); tree11.setSize(40, 50); tree11.setFill("images/Orchard/bare_trees.png"); orchardLayer.appendChild(tree11)
            var tree12 = (new farming.Land(a, b, posXO, posYO)).setPosition(160, 310); tree12.setSize(40, 50); tree12.setFill("images/Orchard/growing_trees.png"); orchardLayer.appendChild(tree12)
            var tree13 = (new farming.Land(a, b, posXO, posYO)).setPosition(160, 375); tree13.setSize(40, 50); tree13.setFill("images/Orchard/growing2_trees.png"); orchardLayer.appendChild(tree13)
            var tree14 = (new farming.Land(a, b, posXO, posYO)).setPosition(215, 375); tree14.setSize(40, 50); tree14.setFill("images/Orchard/ready_trees.png"); orchardLayer.appendChild(tree14)
            var tree15 = (new farming.Land(a, b, posXO, posYO)).setPosition(270, 375); tree15.setSize(40, 50); tree15.setFill("images/Orchard/growing2_trees.png"); orchardLayer.appendChild(tree15)
            var tree16 = (new farming.Land(a, b, posXO, posYO)).setPosition(215, 310); tree16.setSize(40, 50); tree16.setFill("images/Orchard/growing2_trees.png"); orchardLayer.appendChild(tree16)
            var tree17 = (new farming.Land(a, b, posXO, posYO)).setPosition(270, 310); tree17.setSize(40, 50); tree17.setFill("images/Orchard/bare_trees.png"); orchardLayer.appendChild(tree17)
            var tree18 = (new farming.Land(a, b, posXO, posYO)).setPosition(270, 245); tree18.setSize(40, 50); tree18.setFill("images/Orchard/ready_trees.png"); orchardLayer.appendChild(tree18)

            //var tree5 = (new farming.Land(a, b, posXO, posYO)).setPosition(2, 290); orchardLayer.appendChild(tree5)
            //var tree6 = (new farming.Land(a, b, posXO, posYO)).setPosition(70, 290); orchardLayer.appendChild(tree6)
            //var tree7 = (new farming.Land(a, b, posXO, posYO)).setPosition(2, 340); orchardLayer.appendChild(tree7)
            //var tree8 = (new farming.Land(a, b, posXO, posYO)).setPosition(70, 340); orchardLayer.appendChild(tree8)


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
                    
                
                   
                
                    
                    //console.log("running imgW =" + imgW);
                }, 400);
            }
            a.waterAnim();

    ///orchard controls
            var ggO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.controlsLayer_w, a.controlsLayer_h - 31).setFill("#8b008b");
            orchardLayer.appendChild(ggO);
            ggO = (new lime.GlossyButton).setColor("#663300").setText("Home").setPosition(35, 20).setSize(50, 30);
            orchardLayer.appendChild(ggO);
            var gggO = (new lime.Label).setText("GuiGhost Farms").setFontColor("#E8FC08").setPosition(a.controlsLayer_w - 175, 20).setFontSize(20);
            orchardLayer.appendChild(gggO);
            var roadLeftO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 448).setSize(15, 15)
            orchardLayer.appendChild(roadLeftO)
    //orchard btns
            roadLeftO = (new lime.GlossyButton).setColor("#8b008b").setText("< Base").setPosition(42, 448).setSize(80, 15)
            orchardLayer.appendChild(roadLeftO)
            var menuO = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(35, a.height - 25).setSize(70, 25).setFill("#0D0D0D");
            orchardLayer.appendChild(menuO);
            menuO = (new lime.GlossyButton).setColor("#663300").setText("Menu").setPosition(35, a.height - 25).setSize(70, 25);
            orchardLayer.appendChild(menuO);
            var actionsO = (new lime.GlossyButton).setColor("#663300").setText("Actions").setPosition(35, a.height - a.height -50 ).setSize(70, 25);
            orchardLayer.appendChild(actionsO);

    ///Menu button layer
            var menuScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
                menuLayer = (new lime.Layer).setAnchorPoint(0, 0),
                menuFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
            menuScene.appendChild(menuFill1);
            menuScene.appendChild(menuLayer);
            var menuBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 10).setSize(300, 520).setFill("images/CoverImg.png");
            menuLayer.appendChild(menuBack);
            var saveQuit = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(150, 175).setSize(a.width / 2 + 40, 50).setFill("#663300");
            saveQuit = (new lime.GlossyButton).setColor("#4dff4d").setText("Save & Quit").setPosition(150 , 175).setSize(a.width / 2 + 40, 50);
            menuLayer.appendChild(saveQuit);
            
            var convertStarCash = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 325).setSize(a.width / 2 + 40, 50).setFill("#663300");
            convertStarCash = (new lime.GlossyButton).setColor("#6600ff").setText("$500 for 5 StarCash").setPosition(150, 325).setSize(a.width / 2 + 50, 50);
            menuLayer.appendChild(convertStarCash);

            var clearData = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 250).setSize(a.width / 2 + 40, 50).setFill("#663300");
            clearData = (new lime.GlossyButton).setColor("#ff0000").setText("Clear Data (start over)").setPosition(150, 250).setSize(a.width / 2 + 40, 50);
            menuLayer.appendChild(clearData);

            var backBtnMenu = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 400).setSize(a.width / 2 + 40, 50).setFill("#663300");
            backBtnMenu = (new lime.GlossyButton).setColor("#663300").setText("Back to Game").setPosition(150, 400).setSize(a.width / 2 + 40, 50);
            menuLayer.appendChild(backBtnMenu);
            var successDiv = (new lime.Label).setText("+500 = $" + player.money).setFontColor("#E8FC08").setPosition(150, 125).setFontSize(30);
            menuLayer.appendChild(successDiv);
            successDiv.setHidden(true);

    //event handling
            goog.events.listen(menu, ["mousedown", "touchstart"], function () { c.replaceScene(menuScene, lime.transitions.SlideInUp); });  ////menu btn
           
            goog.events.listen(roadRight, ["mousedown", "touchstart"], function () { c.replaceScene(orchardScene, lime.transitions.SlideInRight) });
            goog.events.listen(roadLeftO, ["mousedown", "touchstart"], function () { c.replaceScene(d, lime.transitions.SlideInLeft) });

        //save & Quit
            goog.events.listen(saveQuit, ["mousedown", "touchstart"], function () { localStorage.setItem('farm_Player', JSON.stringify(player)); window.open("../", "_self") });
        //clear data
            goog.events.listen(clearData, ["mousedown", "touchstart"], function () { localStorage.removeItem('farm_Player'); window.open("../", "_self") });
        //star cash convert
            goog.events.listen(convertStarCash, ["mousedown", "touchstart"], function () {
                if (starCash > 5) {
                player.money += 500; a.updateMoney(); localStorage.setItem('farm_Player', JSON.stringify(player));
                successDiv.setHidden(false);
                successDiv.setText("+500 = $" + player.money);
                }
            }); 
        //menu Back Btn
            goog.events.listen(backBtnMenu, ["mousedown", "touchstart"], function () { c.replaceScene(d, lime.transitions.SlideInDown) });


    ///Market Scene
           
            var marketScene = (new lime.Scene).setRenderer(lime.Renderer.CANVAS),
                marketLayer = (new lime.Layer).setAnchorPoint(0, 0),
                marketFill1 = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(0, 0).setSize(a.width, a.height).setFill("#0D0D0D");
            marketScene.appendChild(marketFill1);
            marketScene.appendChild(marketLayer);
            var menuBackMarket = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(5, 6).setSize(300, a.height- 50).setFill("images/UI/farmersMarket.png");
            marketLayer.appendChild(menuBackMarket);
            var backBtnMsrket = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(a.width / 4 - 20, 510).setSize(a.width / 2 + 40, 50).setFill("#663300");
            backBtnMarket = (new lime.GlossyButton).setColor("#663300").setText("Back to Game").setPosition(150, 510).setSize(a.width / 2 , 50);
            marketLayer.appendChild(backBtnMarket);
            goog.events.listen(market, ["mousedown", "touchstart"], function () {
                for (f = 0; f < (a.crops.length); f++)
                    rowBack = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(78, (1.1 * a.shop_margin_y + (a.shop_margin_y - 10) * f) + ((f * 9) - f) - 10 + 85).setSize(150, 25).setFill("#663300"),
                        marketLayer.appendChild(rowBack),
                        rowBack = (new lime.Label).setText(player.cropsStored[f].stored).setFontSize(14).setFontColor("#1aff1a").setFontSize(14).setPosition(97, (1.1 * a.shop_margin_y + (a.shop_margin_y - 10) * f) + ((f * 9) - f) + 87),
                        marketLayer.appendChild(rowBack),
                        g = (new lime.Sprite).setAnchorPoint(0, 0).setPosition(115, (1.1 * a.shop_margin_y + (a.shop_margin_y - 10) * f) + ((f * 9) - f) - 10 + 83).setFill("images/" + a.crops[f].harvest).setSize(30, 30),
                        marketLayer.appendChild(g),
                        i = (new lime.Label).setText("Sell $" + a.crops[f].revenue + " ").setFontColor("#E8FC08").setFontSize(14).setPosition(187, (1.1 * a.shop_margin_y + (a.shop_margin_y - 10) * f) + ((f * 9) - f) + 87),
                        marketLayer.appendChild(i),
                        function (y, e) {
                            goog.events.listen(y, ["mousedown", "touchstart"],
                                function () {
                                    b.currentCrop = e;
                                    console.log("clicked " + e);


                                })
                        }(i, f);




            });



        //Market event listeners
            goog.events.listen(backBtnMarket, ["mousedown", "touchstart"], function () { c.replaceScene(d, lime.transitions.SlideInUp) });



};
