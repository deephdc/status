function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}let d=!1;const h=new Set;function f(t,e){d&&h.delete(e),e.parentNode!==t&&t.appendChild(e)}function p(t,e,n){d&&h.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function m(t){d?h.add(t):t.parentNode&&t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function $(){return w(" ")}function y(){return w("")}function E(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function _(t){return function(e){return e.preventDefault(),t.call(this,e)}}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:S(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function A(t,e,n,s){for(;t.length>0;){const s=t.shift();if(s.nodeName===e){let t=0;const e=[];for(;t<s.attributes.length;){const r=s.attributes[t++];n[r.name]||e.push(r.name)}for(let t=0;t<e.length;t++)s.removeAttribute(e[t]);return s}m(s)}return s?v(e):b(e)}function I(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.shift()}return w(e)}function T(t){return I(t," ")}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e){t.value=null==e?"":e}let R,C;function k(){if(void 0===R){R=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){R=!0}}return R}function O(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=k();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=E(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=E(n.contentWindow,"resize",e)}),f(t,n),()=>{(s||r&&n.contentWindow)&&r(),m(n)}}function D(t,e=document.body){return Array.from(e.querySelectorAll(t))}class H{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=b(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}function M(t){C=t}function U(){if(!C)throw new Error("Function called outside component initialization");return C}function j(t){U().$$.on_mount.push(t)}function G(t){U().$$.after_update.push(t)}function q(t){U().$$.on_destroy.push(t)}const B=[],z=[],K=[],F=[],J=Promise.resolve();let V=!1;function W(t){K.push(t)}let Y=!1;const Q=new Set;function X(){if(!Y){Y=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];M(e),Z(e.$$)}for(M(null),B.length=0;z.length;)z.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];Q.has(e)||(Q.add(e),e())}K.length=0}while(B.length);for(;F.length;)F.pop()();V=!1,Y=!1,Q.clear()}}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function st(){et.r||r(et.c),et=et.p}function rt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,s){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function at(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function it(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function ut(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||W((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(W)}function dt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(B.push(t),V||(V=!0,J.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,o,a,i,c,l=[-1]){const u=C;M(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&ht(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){d=!0;const t=P(n.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();n.intro&&rt(e.$$.fragment),ut(e,n.target,n.anchor,n.customElement),function(){d=!1;for(const t of h)t.parentNode.removeChild(t);h.clear()}(),X()}M(u)}class pt{$destroy(){dt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function gt(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!mt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),mt.push(n,e)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const bt={};var vt={owner:"deephdc",repo:"status",sites:[{name:"DEEP web page",url:"https://deep-hybrid-datacloud.eu/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"DEEP Training Dashboard",url:"https://train.deep-hybrid-datacloud.eu/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"DEEPaaS",url:"https://deepaas.deep-hybrid-datacloud.eu/api/v1/web/deepaas/deep-oc/list.json",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"DEEP Marketplace",url:"https://marketplace.deep-hybrid-datacloud.eu/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"Identity and access Management (IAM)",url:"https://iam.deep-hybrid-datacloud.eu/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"NextCloud",url:"https://nc.deep-hybrid-datacloud.eu/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"PaaS dashboard",url:"https://deep-paas.cloud.ba.infn.it/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"PaaS Orchestrator",url:"https://deep-paas.cloud.ba.infn.it/orchestrator",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"Configuration Management DB (CMDB)",url:"https://deep-paas.cloud.ba.infn.it/cmdb",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"Infrastructure Manager (IM)",url:"https://deep-paas.cloud.ba.infn.it/im/version",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"SLA Manager (SLAM)",url:"https://deep-slam.cloud.ba.infn.it:8443/rest/slam",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png",expectedStatusCodes:[403]},{name:"CI/CD Infrastructure",url:"https://jenkins.indigo-datacloud.eu/",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png"},{name:"Provider IFCA-LCG2   eu.indigo-datacloud.mesos",url:"https://mesos.cloud.ifca.es/mesos",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo-ifca.png"},{name:"Provider IFCA-LCG2   eu.indigo-datacloud.marathon",url:"https://mesos.cloud.ifca.es/marathon",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo-ifca.png"},{name:"Provider IFCA-LCG2   org.openstack.nova",url:"https://api.cloud.ifca.es:5000/v3",icon:"https://raw.githubusercontent.com/deephdc/status/master/static/logo-ifca.png"},{name:"Provider IISAS-Bratislava    eu.indigo-datacloud.chronos",url:"https://mesos.ui.sav.sk/chronos",expectedStatusCodes:[401]},{name:"Provider IISAS-Bratislava    eu.indigo-datacloud.marathon",url:"https://mesos.ui.sav.sk/marathon",expectedStatusCodes:[401]},{name:"Provider QCG     eu.deep.qcg",url:"https://qcg-deep.apps.paas-dev.psnc.pl/api"},{name:"Provider RECAS-BARI  org.openstack.nova",url:"https://cloud.recas.ba.infn.it:5000/v3"}],"status-website":{cname:"status.deep-hybrid-datacloud.eu",logoUrl:"https://raw.githubusercontent.com/deephdc/status/master/static/logo.png",name:"DEEP Service status",introTitle:"DEEP platform and service status",introMessage:"This page provides a real time overview of the [DEEP-Hybrid-DataCloud](https://deep-hybrid-datacloud.eu/the-platform/) platform and service status.",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.deep-hybrid-datacloud.eu",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function wt(t,e,n){const s=t.slice();return s[1]=e[n],s}function $t(e){let n,s,r,o=vt["status-website"]&&!vt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=b("img"),this.h()},l(t){n=A(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){S(n,"alt",""),n.src!==(s=vt["status-website"].logoUrl)&&S(n,"src",s),S(n,"class","svelte-a08hsz")},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}(),a=vt["status-website"]&&!vt["status-website"].hideNavTitle&&function(e){let n,s,r=vt["status-website"].name+"";return{c(){n=b("div"),s=w(r)},l(t){n=A(t,"DIV",{});var e=P(n);s=I(e,r),e.forEach(m)},m(t,e){p(t,n,e),f(n,s)},p:t,d(t){t&&m(n)}}}();return{c(){n=b("div"),s=b("a"),o&&o.c(),r=$(),a&&a.c(),this.h()},l(t){n=A(t,"DIV",{});var e=P(n);s=A(e,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=T(i),a&&a.l(i),i.forEach(m),e.forEach(m),this.h()},h(){S(s,"href",vt["status-website"].logoHref||vt.path),S(s,"class","logo svelte-a08hsz")},m(t,e){p(t,n,e),f(n,s),o&&o.m(s,null),f(s,r),a&&a.m(s,null)},p(t,e){vt["status-website"]&&!vt["status-website"].hideNavLogo&&o.p(t,e),vt["status-website"]&&!vt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&m(n),o&&o.d(),a&&a.d()}}}function yt(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=b("li"),n=b("a"),s=w(a),o=$(),this.h()},l(t){e=A(t,"LI",{});var r=P(e);n=A(r,"A",{"aria-current":!0,href:!0,class:!0});var i=P(n);s=I(i,a),i.forEach(m),o=T(r),r.forEach(m),this.h()},h(){S(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),S(n,"href",t[1].href.replace("$OWNER",vt.owner).replace("$REPO",vt.repo)),S(n,"class","svelte-a08hsz")},m(t,r){p(t,e,r),f(e,n),f(n,s),f(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&S(n,"aria-current",r)},d(t){t&&m(e)}}}function Et(e){let n,s,r,o,a,i=vt["status-website"]&&vt["status-website"].logoUrl&&$t(),c=vt["status-website"]&&vt["status-website"].navbar&&function(t){let e,n=vt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=yt(wt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(1&r){let o;for(n=vt["status-website"].navbar,o=0;o<n.length;o+=1){const a=wt(t,n,o);s[o]?s[o].p(a,r):(s[o]=yt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),l=vt["status-website"]&&vt["status-website"].navbarGitHub&&!vt["status-website"].navbar&&function(e){let n,s,r,o=vt.i18n.navGitHub+"";return{c(){n=b("li"),s=b("a"),r=w(o),this.h()},l(t){n=A(t,"LI",{});var e=P(n);s=A(e,"A",{href:!0,class:!0});var a=P(s);r=I(a,o),a.forEach(m),e.forEach(m),this.h()},h(){S(s,"href",`https://github.com/${vt.owner}/${vt.repo}`),S(s,"class","svelte-a08hsz")},m(t,e){p(t,n,e),f(n,s),f(s,r)},p:t,d(t){t&&m(n)}}}();return{c(){n=b("nav"),s=b("div"),i&&i.c(),r=$(),o=b("ul"),c&&c.c(),a=$(),l&&l.c(),this.h()},l(t){n=A(t,"NAV",{class:!0});var e=P(n);s=A(e,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=T(u),o=A(u,"UL",{class:!0});var d=P(o);c&&c.l(d),a=T(d),l&&l.l(d),d.forEach(m),u.forEach(m),e.forEach(m),this.h()},h(){S(o,"class","svelte-a08hsz"),S(s,"class","container svelte-a08hsz"),S(n,"class","svelte-a08hsz")},m(t,e){p(t,n,e),f(n,s),i&&i.m(s,null),f(s,r),f(s,o),c&&c.m(o,null),f(o,a),l&&l.m(o,null)},p(t,[e]){vt["status-website"]&&vt["status-website"].logoUrl&&i.p(t,e),vt["status-website"]&&vt["status-website"].navbar&&c.p(t,e),vt["status-website"]&&vt["status-website"].navbarGitHub&&!vt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&m(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function _t(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class St extends pt{constructor(t){super(),ft(this,t,_t,Et,a,{segment:0})}}var xt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Pt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function At(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function It(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function h(t){var e=xt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function f(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Pt(At(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=It(Pt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+At(r[8])+'" alt="'+At(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+At(r[11]||u[s.toLowerCase()])+'">'),n=f()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+It(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+At(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+f()).replace(/^\n+|\n+$/g,"")}function Tt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Nt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Lt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Rt(e){let n;return{c(){n=b("link"),this.h()},l(t){n=A(t,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",`${vt.path}/themes/${(vt["status-website"]||{}).theme||"light"}.css`)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ct(e){let n;return{c(){n=b("link"),this.h()},l(t){n=A(t,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",(vt["status-website"]||{}).themeUrl)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function kt(e){let n,s;return{c(){n=b("script"),this.h()},l(t){n=A(t,"SCRIPT",{src:!0,async:!0,defer:!0}),P(n).forEach(m),this.h()},h(){n.src!==(s=e[8].src)&&S(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ot(e){let n;return{c(){n=b("link"),this.h()},l(t){n=A(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){S(n,"rel",e[3].rel),S(n,"href",e[3].href),S(n,"media",e[3].media)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Dt(e){let n;return{c(){n=b("meta"),this.h()},l(t){n=A(t,"META",{name:!0,content:!0}),this.h()},h(){S(n,"name",e[3].name),S(n,"content",e[3].content)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ht(e){let n,s,r,o,a,l,u,d,h,v,w,E,_,x,I,N,L,R,C=It(vt.i18n.footer.replace(/\$REPO/,`https://github.com/${vt.owner}/${vt.repo}`))+"",k=(vt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(vt["status-website"]||{}).customHeadHtml+"";return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}();let O=((vt["status-website"]||{}).themeUrl?Ct:Rt)(e),M=(vt["status-website"]||{}).scripts&&function(t){let e,n=(vt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=kt(Lt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(0&r){let o;for(n=(vt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Lt(t,n,o);s[o]?s[o].p(a,r):(s[o]=kt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),U=(vt["status-website"]||{}).links&&function(t){let e,n=(vt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ot(Nt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(0&r){let o;for(n=(vt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Nt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Ot(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),j=(vt["status-website"]||{}).metaTags&&function(t){let e,n=(vt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Dt(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(0&r){let o;for(n=(vt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Tt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Dt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),G=vt["status-website"].css&&function(e){let n,s,r=`<style>${vt["status-website"].css}</style>`;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}(),q=vt["status-website"].js&&function(e){let n,s,r=`<script>${vt["status-website"].js}<\/script>`;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}(),B=(vt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(vt["status-website"]||{}).customBodyHtml+"";return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}();E=new St({props:{segment:e[0]}});const z=e[2].default,K=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(z,e,e[1],null);return{c(){k&&k.c(),n=y(),O.c(),s=b("link"),r=b("link"),o=b("link"),M&&M.c(),a=y(),U&&U.c(),l=y(),j&&j.c(),u=y(),G&&G.c(),d=y(),q&&q.c(),h=y(),v=$(),B&&B.c(),w=$(),ct(E.$$.fragment),_=$(),x=b("main"),K&&K.c(),I=$(),N=b("footer"),L=b("p"),this.h()},l(t){const e=D('[data-svelte="svelte-ri9y7q"]',document.head);k&&k.l(e),n=y(),O.l(e),s=A(e,"LINK",{rel:!0,href:!0}),r=A(e,"LINK",{rel:!0,type:!0,href:!0}),o=A(e,"LINK",{rel:!0,type:!0,href:!0}),M&&M.l(e),a=y(),U&&U.l(e),l=y(),j&&j.l(e),u=y(),G&&G.l(e),d=y(),q&&q.l(e),h=y(),e.forEach(m),v=T(t),B&&B.l(t),w=T(t),lt(E.$$.fragment,t),_=T(t),x=A(t,"MAIN",{class:!0});var i=P(x);K&&K.l(i),i.forEach(m),I=T(t),N=A(t,"FOOTER",{class:!0});var c=P(N);L=A(c,"P",{}),P(L).forEach(m),c.forEach(m),this.h()},h(){S(s,"rel","stylesheet"),S(s,"href",`${vt.path}/global.css`),S(r,"rel","icon"),S(r,"type","image/svg"),S(r,"href",(vt["status-website"]||{}).faviconSvg||(vt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),S(o,"rel","icon"),S(o,"type","image/png"),S(o,"href",(vt["status-website"]||{}).favicon||"/logo-192.png"),S(x,"class","container"),S(N,"class","svelte-jbr799")},m(t,e){k&&k.m(document.head,null),f(document.head,n),O.m(document.head,null),f(document.head,s),f(document.head,r),f(document.head,o),M&&M.m(document.head,null),f(document.head,a),U&&U.m(document.head,null),f(document.head,l),j&&j.m(document.head,null),f(document.head,u),G&&G.m(document.head,null),f(document.head,d),q&&q.m(document.head,null),f(document.head,h),p(t,v,e),B&&B.m(t,e),p(t,w,e),ut(E,t,e),p(t,_,e),p(t,x,e),K&&K.m(x,null),p(t,I,e),p(t,N,e),f(N,L),L.innerHTML=C,R=!0},p(t,[e]){(vt["status-website"]||{}).customHeadHtml&&k.p(t,e),O.p(t,e),(vt["status-website"]||{}).scripts&&M.p(t,e),(vt["status-website"]||{}).links&&U.p(t,e),(vt["status-website"]||{}).metaTags&&j.p(t,e),vt["status-website"].css&&G.p(t,e),vt["status-website"].js&&q.p(t,e),(vt["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),E.$set(n),K&&K.p&&(!R||2&e)&&c(K,z,t,t[1],e,null,null)},i(t){R||(rt(E.$$.fragment,t),rt(K,t),R=!0)},o(t){ot(E.$$.fragment,t),ot(K,t),R=!1},d(t){k&&k.d(t),m(n),O.d(t),m(s),m(r),m(o),M&&M.d(t),m(a),U&&U.d(t),m(l),j&&j.d(t),m(u),G&&G.d(t),m(d),q&&q.d(t),m(h),t&&m(v),B&&B.d(t),t&&m(w),dt(E,t),t&&m(_),t&&m(x),K&&K.d(t),t&&m(I),t&&m(N)}}}function Mt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ut extends pt{constructor(t){super(),ft(this,t,Mt,Ht,a,{segment:0})}}function jt(t){let e,n,s=t[1].stack+"";return{c(){e=b("pre"),n=w(s)},l(t){e=A(t,"PRE",{});var r=P(e);n=I(r,s),r.forEach(m)},m(t,s){p(t,e,s),f(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&N(n,s)},d(t){t&&m(e)}}}function Gt(e){let n,s,r,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&jt(e);return{c(){s=$(),r=b("h1"),o=w(e[0]),a=$(),i=b("p"),c=w(d),l=$(),h&&h.c(),u=y(),this.h()},l(t){D('[data-svelte="svelte-1moakz"]',document.head).forEach(m),s=T(t),r=A(t,"H1",{class:!0});var n=P(r);o=I(n,e[0]),n.forEach(m),a=T(t),i=A(t,"P",{class:!0});var f=P(i);c=I(f,d),f.forEach(m),l=T(t),h&&h.l(t),u=y(),this.h()},h(){S(r,"class","svelte-17w3omn"),S(i,"class","svelte-17w3omn")},m(t,e){p(t,s,e),p(t,r,e),f(r,o),p(t,a,e),p(t,i,e),f(i,c),p(t,l,e),h&&h.m(t,e),p(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&N(o,t[0]),2&e&&d!==(d=t[1].message+"")&&N(c,d),t[2]&&t[1].stack?h?h.p(t,e):(h=jt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&m(s),t&&m(r),t&&m(a),t&&m(i),t&&m(l),h&&h.d(t),t&&m(u)}}}function qt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Bt extends pt{constructor(t){super(),ft(this,t,qt,Gt,a,{status:0,error:1})}}function zt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ct(n.$$.fragment),s=y()},l(t){n&&lt(n.$$.fragment,t),s=y()},m(t,e){n&&ut(n,t,e),p(t,s,e),r=!0},p(t,e){const r=16&e?at(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){nt();const t=n;ot(t.$$.fragment,1,0,(()=>{dt(t,1)})),st()}a?(n=new a(i()),ct(n.$$.fragment),rt(n.$$.fragment,1),ut(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&rt(n.$$.fragment,t),r=!0)},o(t){n&&ot(n.$$.fragment,t),r=!1},d(t){t&&m(s),n&&dt(n,t)}}}function Kt(t){let e,n;return e=new Bt({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){lt(e.$$.fragment,t)},m(t,s){ut(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){dt(e,t)}}}function Ft(t){let e,n,s,r;const o=[Kt,zt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=y()},l(t){n.l(t),s=y()},m(t,n){a[e].m(t,n),p(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(nt(),ot(a[c],1,1,(()=>{a[c]=null})),st(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),rt(n,1),n.m(s.parentNode,s))},i(t){r||(rt(n),r=!0)},o(t){ot(n),r=!1},d(t){a[e].d(t),t&&m(s)}}}function Jt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Ft]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Ut({props:o}),{c(){ct(n.$$.fragment)},l(t){lt(n.$$.fragment,t)},m(t,e){ut(n,t,e),s=!0},p(t,[e]){const s=12&e?at(r,[4&e&&{segment:t[2][0]},8&e&&it(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(rt(n.$$.fragment,t),s=!0)},o(t){ot(n.$$.fragment,t),s=!1},d(t){dt(n,t)}}}function Vt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return G(l),u=bt,d=s,U().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class Wt extends pt{constructor(t){super(),ft(this,t,Vt,Jt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Yt=[],Qt=[{js:()=>Promise.all([import("./index.8c6ebff1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.25fa74c9.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].e5bef1ba.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].b7bdf123.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.c5cda4d1.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Xt=(Zt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Zt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Zt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Zt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function te(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ne,se=1;const re="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},oe={};let ae,ie;function ce(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function le(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ae))return null;let e=t.pathname.slice(ae.length);if(""===e&&(e="/"),!Yt.some((t=>t.test(e))))for(let n=0;n<Xt.length;n+=1){const s=Xt[n],r=s.pattern.exec(e);if(r){const n=ce(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ue(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=le(r);if(o){fe(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),re.pushState({id:ne},"",r.href)}}function de(){return{x:pageXOffset,y:pageYOffset}}function he(t){if(oe[ne]=de(),t.state){const e=le(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else!function(t){se=t}(se+1),function(t){ne=t}(se),re.replaceState({id:ne},"",location.href)}function fe(t,e,n,s){return te(this,void 0,void 0,(function*(){const r=!!e;if(r)ne=e;else{const t=de();oe[ne]=t,ne=e=++se,oe[ne]=n?t:{x:0,y:0}}if(yield ie(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=oe[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),oe[ne]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function pe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let me,ge=null;function be(t){const e=ee(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=le(new URL(t,pe(document)));if(e)ge&&t===ge.href||(ge={href:t,promise:ke(e)}),ge.promise}(e.href)}function ve(t){clearTimeout(me),me=setTimeout((()=>{be(t)}),20)}function we(t,e={noscroll:!1,replaceState:!1}){const n=le(new URL(t,pe(document)));if(n){const s=fe(n,null,e.noscroll);return re[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),s}return location.href=t,new Promise((()=>{}))}const $e="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,Ee,_e,Se=!1,xe=[],Pe="{}";const Ae={page:function(t){const e=gt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:gt(null),session:gt($e&&$e.session)};let Ie,Te,Ne;function Le(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Re(t){return te(this,void 0,void 0,(function*(){ye&&Ae.preloading.set(!0);const e=function(t){return ge&&ge.href===t.href?ge.promise:ke(t)}(t),n=Ee={},s=yield e,{redirect:r}=s;if(n===Ee)if(r)yield we(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ce(n,e,Le(e,t.page))}}))}function Ce(t,e,n){return te(this,void 0,void 0,(function*(){Ae.page.set(n),Ae.preloading.set(!1),ye?ye.$set(e):(e.stores={page:{subscribe:Ae.page.subscribe},preloading:{subscribe:Ae.preloading.subscribe},session:Ae.session},e.level0={props:yield _e},e.notify=Ae.page.notify,ye=new Wt({target:Ne,props:e,hydrate:!0})),xe=t,Pe=JSON.stringify(n.query),Se=!0,Te=!1}))}function ke(t){return te(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!_e){const t=()=>({});_e=$e.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ie)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>te(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==Pe)return!0;const r=xe[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const h=c++;let f;if(Te||u||!xe[i]||xe[i].part!==e.i){u=!1;const{default:s,preload:r}=yield Qt[e.i].js();let o;o=Se||!$e.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ie):{}:$e.preloaded[i+1],f={component:s,props:o,segment:d,match:l,part:e.i}}else f=xe[i];return o[`level${h}`]=f})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Oe,De,He;Ae.session.subscribe((t=>te(void 0,void 0,void 0,(function*(){if(Ie=t,!Se)return;Te=!0;const e=le(new URL(location.href)),n=Ee={},{redirect:s,props:r,branch:o}=yield ke(e);n===Ee&&(s?yield we(s.location,{replaceState:!0}):yield Ce(o,r,Le(r,e.page)))})))),Oe={target:document.querySelector("#sapper")},De=Oe.target,Ne=De,He=$e.baseUrl,ae=He,ie=Re,"scrollRestoration"in re&&(re.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{re.scrollRestoration="auto"})),addEventListener("load",(()=>{re.scrollRestoration="manual"})),addEventListener("click",ue),addEventListener("popstate",he),addEventListener("touchstart",be),addEventListener("mousemove",ve),$e.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=$e;_e||(_e=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:_e},level1:{props:{status:o,error:a},component:Bt},segments:r},c=ce(n);Ce([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;re.replaceState({id:se},"",e);const n=le(new URL(location.href));if(n)return fe(n,se,!0,t)}));export{dt as A,E as B,r as C,z as D,u as E,D as F,It as G,H,v as I,we as J,L as K,_ as L,e as M,x as N,at as O,G as P,q as Q,l as R,pt as S,it as T,W as U,O as V,P as a,I as b,A as c,m as d,b as e,S as f,p as g,f as h,ft as i,$ as j,T as k,nt as l,ot as m,t as n,st as o,rt as p,j as q,vt as r,a as s,w as t,N as u,y as v,g as w,ct as x,lt as y,ut as z};

import __inject_styles from './inject_styles.5607aec6.js';