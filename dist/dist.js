(()=>{"use strict";var e={677:(e,t,s)=>{let n,i,o;var a;!function(e){e.SetSize="set-size",e.StreamItems="stream-items",e.StreamContextItem="stream-context-item",e.SaveItems="save-items",e.SelectItem="select-item",e.AssociateItem="associate-item",e.DeassociateItem="deassociate-item",e.ClearSelection="clear-selection",e.CreateItem="create-item",e.CreateItems="create-items",e.DeleteItems="delete-items",e.SetComponentData="set-component-data",e.InstallLocalComponent="install-local-component",e.ToggleActivateComponent="toggle-activate-component",e.RequestPermissions="request-permissions",e.PresentConflictResolution="present-conflict-resolution",e.DuplicateItem="duplicate-item",e.ComponentRegistered="component-registered",e.ActivateThemes="themes",e.Reply="reply",e.SaveSuccess="save-success",e.SaveError="save-error"}(n||(n={})),function(e){e[e.Web=1]="Web",e[e.Desktop=2]="Desktop",e[e.Mobile=3]="Mobile"}(i||(i={})),function(e){e.Any="*",e.Item="SF|Item",e.RootKey="SN|RootKey|NoSync",e.ItemsKey="SN|ItemsKey",e.EncryptedStorage="SN|EncryptedStorage",e.Note="Note",e.Tag="Tag",e.SmartTag="SN|SmartTag",e.Component="SN|Component",e.Editor="SN|Editor",e.ActionsExtension="Extension",e.UserPrefs="SN|UserPreferences",e.Privileges="SN|Privileges",e.HistorySession="SN|HistorySession",e.Theme="SN|Theme",e.Mfa="SF|MFA",e.ServerExtension="SF|Extension",e.FilesafeCredentials="SN|FileSafe|Credentials",e.FilesafeFileMetadata="SN|FileSafe|FileMetadata",e.FilesafeIntegration="SN|FileSafe|Integration",e.ExtensionRepo="SN|ExtensionRepo"}(o||(o={}));var r=new Uint8Array(16);function m(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l=function(e){return"string"==typeof e&&c.test(e)};for(var d=[],p=0;p<256;++p)d.push((p+256).toString(16).substr(1));const h=function(e,t,s){var n=(e=e||{}).random||(e.rng||m)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){s=s||0;for(var i=0;i<16;++i)t[s+i]=n[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!l(s))throw TypeError("Stringified UUID is invalid");return s}(n)},g=e=>{var t;const s={[i.Web]:"web",[i.Desktop]:"desktop",[i.Mobile]:"mobile"};return null!==(t=s[e])&&void 0!==t?t:s[i.Web]},u=()=>{};class v{static get isSupported(){return!(!window.console&&!console)}static get info(){return v.isSupported&&this.enabled?console.log.bind(console):u}static get error(){return console.error.bind(console)}}var f,S,b;function I(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?I(Object(s),!0).forEach((function(t){w(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function w(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}(S="enabled")in(f=v)?Object.defineProperty(f,S,{value:false,enumerable:!0,configurable:!0,writable:!0}):f[S]=false,function(e){e.Component="component"}(b||(b={}));class C{constructor(e){if(w(this,"contentWindow",void 0),w(this,"initialPermissions",void 0),w(this,"onReadyCallback",void 0),w(this,"component",{activeThemes:[],acceptsThemes:!0}),w(this,"sentMessages",[]),w(this,"messageQueue",[]),w(this,"lastStreamedItem",void 0),w(this,"pendingSaveItems",void 0),w(this,"pendingSaveTimeout",void 0),w(this,"pendingSaveParams",void 0),w(this,"coallesedSaving",!1),w(this,"coallesedSavingDelay",250),w(this,"messageHandler",void 0),!e||!e.targetWindow)throw new Error("contentWindow must be a valid Window object.");this.contentWindow=e.targetWindow,this.processParameters(e),this.registerMessageHandler()}processParameters(e){var t;const{initialPermissions:s,options:n,onReady:i}=e;var o;s&&s.length>0&&(this.initialPermissions=s),(null==n?void 0:n.coallesedSaving)&&(this.coallesedSaving=n.coallesedSaving),(null==n?void 0:n.coallesedSavingDelay)&&(this.coallesedSavingDelay=n.coallesedSavingDelay),(null==n?void 0:n.acceptsThemes)&&(this.component.acceptsThemes=null===(o=null==n?void 0:n.acceptsThemes)||void 0===o||o),i&&(this.onReadyCallback=i),v.enabled=null!==(t=null==n?void 0:n.debug)&&void 0!==t&&t}deinit(){this.onReadyCallback=void 0,this.component={acceptsThemes:!0,activeThemes:[]},this.messageQueue=[],this.sentMessages=[],this.lastStreamedItem=void 0,this.pendingSaveItems=void 0,this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0,this.messageHandler&&(this.contentWindow.document.removeEventListener("message",this.messageHandler),this.contentWindow.removeEventListener("message",this.messageHandler))}registerMessageHandler(){this.messageHandler=e=>{if(v.info("Components API Message received:",e.data),document.referrer&&new URL(document.referrer).origin!==new URL(e.origin).origin)return;if(this.component.origin){if(e.origin!==this.component.origin)return}else this.component.origin=e.origin;const{data:t}=e,s=(e=>{if("string"!=typeof e)return!1;try{const t=JSON.parse(e),s=Object.prototype.toString.call(t);return"[object Object]"===s||"[object Array]"===s}catch(e){return!1}})(t)?JSON.parse(t):t;s?this.handleMessage(s):v.error("Invalid data received. Skipping...")},this.contentWindow.document.addEventListener("message",this.messageHandler,!1),this.contentWindow.addEventListener("message",this.messageHandler,!1),v.info("Waiting for messages...")}handleMessage(e){switch(e.action){case n.ComponentRegistered:this.component.sessionKey=e.sessionKey,e.componentData&&(this.component.data=e.componentData),this.onReady(e.data),v.info("Component successfully registered with payload:",e);break;case n.ActivateThemes:this.activateThemes(e.data.themes);break;default:{var t;if(!e.original)return;const s=null===(t=this.sentMessages)||void 0===t?void 0:t.filter((t=>{var s;return t.messageId===(null===(s=e.original)||void 0===s?void 0:s.messageId)}))[0];if(!s)return void v.error("This extension is attempting to communicate with Standard Notes, but an error is preventing it from doing so. Please restart this extension and try again.");s.callback&&s.callback(e.data);break}}}onReady(e){this.component.environment=e.environment,this.component.platform=e.platform,this.component.uuid=e.uuid,this.initialPermissions&&this.initialPermissions.length>0&&this.requestPermissions(this.initialPermissions);for(const e of this.messageQueue)this.postMessage(e.action,e.data,e.callback);this.messageQueue=[],v.info("Data passed to onReady:",e),this.activateThemes(e.activeThemeUrls||[]),this.onReadyCallback&&this.onReadyCallback()}getSelfComponentUUID(){return this.component.uuid}isRunningInDesktopApplication(){return this.component.environment===g(i.Desktop)}isRunningInMobileApplication(){return this.component.environment===g(i.Mobile)}getComponentDataValueForKey(e){if(this.component.data)return this.component.data[e]}setComponentDataValueForKey(e,t){if(!this.component.data)throw new Error("The component has not been initialized.");if(!e||e&&0===e.length)throw new Error("The key for the data value should be a valid string.");this.component.data=y(y({},this.component.data),{},{[e]:t}),this.postMessage(n.SetComponentData,{componentData:this.component.data})}clearComponentData(){this.component.data={},this.postMessage(n.SetComponentData,{componentData:this.component.data})}postMessage(e,t,s){if(!this.component.sessionKey||!this.component.origin)return void this.messageQueue.push({action:e,data:t,api:b.Component,callback:s});const n={action:e,data:t,messageId:this.generateUUID(),sessionKey:this.component.sessionKey,api:b.Component},i=JSON.parse(JSON.stringify(n));let o;i.callback=s,this.sentMessages.push(i),o=this.isRunningInMobileApplication()?JSON.stringify(n):n,v.info("Posting message:",o),this.contentWindow.parent.postMessage(o,this.component.origin)}requestPermissions(e,t){this.postMessage(n.RequestPermissions,{permissions:e},(()=>{t&&t()}))}activateThemes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.component.acceptsThemes)return;v.info("Incoming themes:",e);const{activeThemes:t}=this.component;if(t&&t.sort().toString()==e.sort().toString())return;let s=e;const n=[];for(const i of t)e.includes(i)?s=s.filter((e=>e!==i)):n.push(i);v.info("Deactivating themes:",n),v.info("Activating themes:",s);for(const e of n)this.deactivateTheme(e);this.component.activeThemes=e;for(const e of s){if(!e)continue;const t=this.contentWindow.document.createElement("link");t.id=btoa(e),t.href=e,t.type="text/css",t.rel="stylesheet",t.media="screen,print",t.className="custom-theme",this.contentWindow.document.getElementsByTagName("head")[0].appendChild(t)}}themeElementForUrl(e){return Array.from(this.contentWindow.document.getElementsByClassName("custom-theme")).slice().find((t=>t.id==btoa(e)))}deactivateTheme(e){const t=this.themeElementForUrl(e);t&&t.parentNode&&(t.setAttribute("disabled","true"),t.parentNode.removeChild(t))}generateUUID(){return h()}get platform(){return this.component.platform}get environment(){return this.component.environment}streamItems(e,t){this.postMessage(n.StreamItems,{content_types:e},(e=>{t(e.items)}))}streamContextItem(e){this.postMessage(n.StreamContextItem,{},(t=>{const{item:s}=t;(!this.lastStreamedItem||this.lastStreamedItem.uuid!==s.uuid)&&this.pendingSaveTimeout&&(clearTimeout(this.pendingSaveTimeout),this._performSavingOfItems(this.pendingSaveParams),this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0),this.lastStreamedItem=s,e(this.lastStreamedItem)}))}selectItem(e){this.postMessage(n.SelectItem,{item:this.jsonObjectForItem(e)})}clearSelection(){this.postMessage(n.ClearSelection,{content_type:o.Tag})}createItem(e,t){this.postMessage(n.CreateItem,{item:this.jsonObjectForItem(e)},(e=>{let{item:s}=e;!s&&e.items&&e.items.length>0&&(s=e.items[0]),this.associateItem(s),t&&t(s)}))}createItems(e,t){const s=e.map((e=>this.jsonObjectForItem(e)));this.postMessage(n.CreateItems,{items:s},(e=>{t&&t(e.items)}))}associateItem(e){this.postMessage(n.AssociateItem,{item:this.jsonObjectForItem(e)})}deassociateItem(e){this.postMessage(n.DeassociateItem,{item:this.jsonObjectForItem(e)})}deleteItem(e,t){this.deleteItems([e],t)}deleteItems(e,t){const s={items:e.map((e=>this.jsonObjectForItem(e)))};this.postMessage(n.DeleteItems,s,(e=>{t&&t(e)}))}sendCustomEvent(e,t,s){this.postMessage(e,t,(e=>{s&&s(e)}))}saveItem(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.saveItems([e],t,s)}saveItemWithPresave(e,t,s){this.saveItemsWithPresave([e],t,s)}saveItemsWithPresave(e,t,s){this.saveItems(e,s,!1,t)}_performSavingOfItems(e){let{items:t,presave:s,callback:i}=e;s&&s();const o=[];for(const e of t)o.push(this.jsonObjectForItem(e));this.postMessage(n.SaveItems,{items:o},(()=>{i&&i()}))}saveItems(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;if(this.pendingSaveItems||(this.pendingSaveItems=[]),this.coallesedSaving&&!s){this.pendingSaveTimeout&&clearTimeout(this.pendingSaveTimeout);const s=e.map((e=>e.uuid)),i=this.pendingSaveItems.filter((e=>!s.includes(e.uuid)));this.pendingSaveItems=i.concat(e),this.pendingSaveParams={items:this.pendingSaveItems,presave:n,callback:t},this.pendingSaveTimeout=setTimeout((()=>{this._performSavingOfItems(this.pendingSaveParams),this.pendingSaveItems=[],this.pendingSaveTimeout=void 0,this.pendingSaveParams=null}),this.coallesedSavingDelay)}else this._performSavingOfItems({items:e,presave:n,callback:t})}setSize(e,t,s){this.postMessage(n.SetSize,{type:e,width:t,height:s})}jsonObjectForItem(e){const t=Object.assign({},e);return t.children=null,t.parent=null,t}getItemAppDataValue(e,t){return e.getAppDomainValue(t)}}void 0!==(e=s.hmd(e)).exports&&(e.exports=C),window&&(window.ComponentRelay=C)}},t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,s),i.loaded=!0,i.exports}s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s(677)})();
//# sourceMappingURL=dist.js.map