import{S as t,i as s,s as a,a as e,e as o,t as n,r as i,f as r,d as c,c as l,b as h,l as u,g as f,h as m,j as p,L as d,o as v}from"./client.cb3f40fb.js";function b(t){let s,a,b,g,j,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),b=o("h1"),g=n(E),j=e(),x=o("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),b=l(t,"H1",{});var s=h(b);g=u(s,E),s.forEach(r),j=c(t),x=l(t,"DIV",{class:!0}),h(x).forEach(r),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,b,s),p(b,g),m(t,j,s),m(t,x,s),x.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&d(g,E),1&a&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(b),t&&r(j),t&&r(x)}}}async function g({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,b,a,{post:0})}}export{g as preload};
