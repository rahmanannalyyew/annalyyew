(self.webpackChunklite=self.webpackChunklite||[]).push([[39592],{12423:(e,t,n)=>{"use strict";n.d(t,{v:()=>a});var i=n(319),o=n.n(i),r=n(77329),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"OverflowMenuButtonWithNegativeSignal_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"OverflowMenuWithNegativeSignal_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CreatorActionOverflowPopover_post"}}]}}].concat(o()([{kind:"FragmentDefinition",name:{kind:"Name",value:"OverflowMenuWithNegativeSignal_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]),o()(r.G.definitions))}},32523:(e,t,n)=>{"use strict";n.d(t,{g:()=>r});var i=n(67294),o=n(98462),r=function(e){var t=e.children,n=e.className,r=void 0===n?"":n,a=e.href,l=e.onClick;return a?i.createElement(o.P,{className:r,href:a,onClick:l},t):t}},79356:(e,t,n)=>{"use strict";n.d(t,{$:()=>f,u:()=>p});var i=n(28655),o=n.n(i),r=n(71439),a=n(67294),l=n(49549),c=n(19147),s=n(32272),m=n(32262),u=n(33914);function d(){var e=o()(["\n  fragment PostFooterSocialPopover_post on Post {\n    id\n    mediumUrl\n    title\n    ...SharePostButton_post\n  }\n  ","\n"]);return d=function(){return e},e}var f=function(e){var t=e.post,n=e.source,i=t.mediumUrl,o=t.title,r=t.id;return a.createElement(c.A,{ariaId:"postFooterSocialMenu",source:{name:n},url:i,title:o,ariaLabel:"Share Post",postId:r},(function(e){return a.createElement(a.Fragment,null,a.createElement(m.Sl,{paddingTopBottom:"8px"},a.createElement(u._,{tooltipText:"Share on Twitter",targetDistance:15},a.createElement(s.f,{socialPlatform:"TWITTER",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:t}))),a.createElement(m.Sl,{paddingTopBottom:"8px"},a.createElement(u._,{tooltipText:"Share on Facebook",targetDistance:15},a.createElement(s.f,{socialPlatform:"FACEBOOK",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:t}))),a.createElement(m.Sl,{paddingTopBottom:"8px"},a.createElement(u._,{tooltipText:"Share on LinkedIn",targetDistance:15},a.createElement(s.f,{socialPlatform:"LINKEDIN",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:t}))),i&&a.createElement(m.Sl,{paddingTopBottom:"8px"},a.createElement(u._,{tooltipText:"Copy link",targetDistance:15},a.createElement(l._,{url:i,onClick:e,reportData:{postId:t.id},source:n,copyStyle:"INLINE"}))))}))},p=(0,r.Ps)(d(),s.o)},50077:(e,t,n)=>{"use strict";n.d(t,{Q5:()=>A,u_:()=>O,yu:()=>R,Gk:()=>U});var i=n(28655),o=n.n(i),r=n(63038),a=n.n(r),l=n(71439),c=n(67294),s=n(83687),m=n(36823),u=n(10734),d=n(32523),f=n(95482),p=n(92013),E=n(31635),v=n(9292),S=n(41832),h=n(82143),_=n(52862),g=n(98024),k=n(98701),N=n(77180),I=n(6688),L=n(7650),P=n(61598);function C(){var e=o()(["\n  fragment CardByline_publisher on Publisher {\n    __typename\n    ... on User {\n      id\n      ...CardByline_user\n    }\n    ... on Collection {\n      id\n      ...CardByline_collection\n    }\n  }\n  ","\n  ","\n"]);return C=function(){return e},e}function T(){var e=o()(["\n  fragment CardByline_collection on Collection {\n    __typename\n    id\n    name\n    ...collectionUrl_collection\n  }\n  ","\n"]);return T=function(){return e},e}function D(){var e=o()(["\n  fragment CardByline_user on User {\n    __typename\n    id\n    name\n    username\n    mediumMemberAt\n    socialStats {\n      followerCount\n    }\n    ...userUrl_user\n    ...UserMentionTooltip_user\n  }\n  ","\n  ","\n"]);return D=function(){return e},e}function y(){var e=o()(["\n  fragment CardByline_post on Post {\n    ...DraftStatus_post\n  }\n  ","\n"]);return y=function(){return e},e}var x=function(e){return{fill:e.baseColor.fill.light,marginTop:"-2px",paddingLeft:"4px"}};function F(e,t){return t&&(0,k.nE)(e)?e[t]:e}var b=function(e){var t=e.author,n=e.forceSize,i=e.scale,o=void 0===i?"M":i,r=c.useState(0),l=a()(r,2),s=l[0],u=l[1],f=(0,N.F)(),p=(0,m.B)(t);if(c.useEffect((function(){s||u(window.innerWidth)}),[]),!t||!t.name)return null;var E=s<=f.breakpoints.sm,v=c.createElement(d.g,{href:p},c.createElement(g.F,{color:"ACCENT",scale:F(o,n)},t.name));return E?v:c.createElement(_.$,{placement:"right",targetDistance:15,mouseLeaveDelay:200,popoverRenderFn:function(){return c.createElement(S.K,{user:t})}},v)},B=function(e){var t=e.collection,n=e.forceSize,i=e.scale,o=void 0===i?"M":i,r=(0,s.R)(t);return c.createElement(d.g,{href:r},c.createElement(g.F,{scale:F(o,n),color:"DARKER"},"Published in ",c.createElement(u.t,{collection:t})))},w=function(e){var t=e.small,n=void 0!==t&&t,i=e.hideDot,o=void 0!==i&&i,r=(0,I.I)();return c.createElement("span",{className:r({margin:"0 ".concat(n?4:7,"px")})},o?null:"·")},A=function(e){var t=e.datePrefix,n=void 0===t?"":t,i=e.forceSize,o=e.isOneLine,r=e.withMidDot,a=void 0===r||r,l=e.href,s=e.onClick,m=e.publishedAt,u=e.scale,v=void 0===u?"M":u,S=e.showStar,h=void 0!==S&&S,_=e.showPinned,k=void 0!==_&&_,N=e.timeColor,P=void 0===N?"LIGHTER":N,C=e.timeToRead,T=e.post,D=(0,I.I)();if(!m&&!C)return null;var y=o?p.h:f.E;return c.createElement(d.g,{href:l,onClick:s},c.createElement(g.F,{color:P,scale:F(v,i)},o&&a&&c.createElement(w,{small:!0,hideDot:!!C&&!!m}),m&&!k?c.createElement(c.Fragment,null,n,c.createElement(y,{hasPrefix:!(!o||!n)||void 0,timestamp:m})):null,k?c.createElement("span",null,"Pinned"):null,m&&C?c.createElement(w,null):null,C||null,!m&&c.createElement(c.Fragment,null,c.createElement(w,{small:o}),c.createElement(g.F,{color:"DARKER",scale:F(v,i),tag:"span"},c.createElement(E.FV,{post:T}))),h&&c.createElement(L.Z,{className:D(x)})))},O=function(e){var t=e.avatar,n=void 0===t?null:t,i=e.datePrefix,o=e.forceSize,r=e.hideAuthor,a=void 0!==r&&r,l=e.href,s=e.onClick,m=e.isOneLine,u=void 0!==m&&m,d=e.publisher,f=e.publishedAt,p=e.scale,E=e.showStar,S=void 0!==E&&E,h=e.showPinned,_=void 0!==h&&h,g=e.timeColor,k=e.timeToRead,N=e.post,I="Collection"===d.__typename?c.createElement(B,{collection:d,forceSize:o,scale:p}):a?null:c.createElement(b,{author:d,forceSize:o,scale:p}),L="Collection"===d.__typename||!a;return c.createElement(v.Y,{avatar:a?null:n,isOneLine:u,title:I,description:c.createElement(A,{datePrefix:i,publishedAt:f,timeToRead:k,withMidDot:L,href:l,onClick:s,showStar:S,showPinned:_,forceSize:o,scale:p,timeColor:g,isOneLine:u,post:N})})},R=(0,l.Ps)(y(),E.tV),K=(0,l.Ps)(D(),P.$m,h.O),M=(0,l.Ps)(T(),P.nf),U=(0,l.Ps)(C(),K,M)},32272:(e,t,n)=>{"use strict";n.d(t,{f:()=>f,o:()=>p});var i=n(28655),o=n.n(i),r=n(71439),a=n(67294),l=n(24862),c=n(95760),s=n(51512),m=n(67297),u=n(27952);function d(){var e=o()(["\n  fragment SharePostButton_post on Post {\n    id\n  }\n"]);return d=function(){return e},e}var f=function(e){var t,n=e.post,i=e.socialPlatform,o=e.buttonStyle,r=(0,c.Av)(),d=(0,s.Qi)(),f=(0,m.v9)((function(e){return e.config.authDomain}));if("FACEBOOK"===i)t=(0,u.VCf)(f,n.id);else if("TWITTER"===i)t=(0,u.A2M)(f,n.id);else{if("LINKEDIN"!==i)return null;t=(0,u.mZD)(f,n.id)}return a.createElement(l.T,{baseOnClick:function(){d&&r.event("post.shareOpen",{postId:n.id,source:d,dest:i.toLowerCase(),dialogType:"native"})},href:t,socialPlatform:i,buttonStyle:o})},p=(0,r.Ps)(d())},14071:(e,t,n)=>{"use strict";n.d(t,{E:()=>f,U:()=>p});var i=n(28655),o=n.n(i),r=n(71439),a=n(67294),l=n(49549),c=n(32272),s=n(42933),m=n(33914),u=n(51512);function d(){var e=o()(["\n  fragment SharePostButtons_post on Post {\n    id\n    isLimitedState\n    visibility\n    mediumUrl\n    ...SharePostButton_post\n  }\n  ","\n"]);return d=function(){return e},e}var f=(0,r.Ps)(d(),c.o);function p(e){var t=e.post,n=e.source,i="UNLISTED"===t.visibility;return a.createElement(a.Fragment,null,a.createElement(u.cW,{source:{name:n}},a.createElement(s.x,{flexGrow:"0",paddingRight:"1px"},!i&&a.createElement(m._,{tooltipText:"Share on Twitter",targetDistance:15},a.createElement(c.f,{socialPlatform:"TWITTER",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t}))),a.createElement(s.x,{flexGrow:"0",paddingRight:"1px"},!i&&a.createElement(m._,{tooltipText:"Share on Facebook",targetDistance:15},a.createElement(c.f,{socialPlatform:"FACEBOOK",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t}))),a.createElement(s.x,{flexGrow:"0",paddingRight:"1px"},!i&&a.createElement(m._,{tooltipText:"Share on LinkedIn",targetDistance:15},a.createElement(c.f,{socialPlatform:"LINKEDIN",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})))),a.createElement(s.x,{flexGrow:"0"},!i&&t.mediumUrl&&a.createElement(m._,{tooltipText:"Copy link",targetDistance:15},a.createElement(l._,{url:t.mediumUrl,copyStyle:t.isLimitedState?"ICON_DISABLED":"ICON",source:n,reportData:{postId:t.id}}))))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/39592.714f1ecb.chunk.js.map