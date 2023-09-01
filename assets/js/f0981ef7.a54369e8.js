"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[5053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Hierarchical Structure",description:"The architecture of Quai Network.",slug:"/hierarchical-structure",hide_table_of_contents:!1,sidebar_position:2},o="Hierarchical Structure",s={unversionedId:"learn/advanced-introduction/hierarchical-structure/hierarchical-structure",id:"learn/advanced-introduction/hierarchical-structure/hierarchical-structure",title:"Hierarchical Structure",description:"The architecture of Quai Network.",source:"@site/docs/learn/advanced-introduction/hierarchical-structure/hierarchical-structure.md",sourceDirName:"learn/advanced-introduction/hierarchical-structure",slug:"/hierarchical-structure",permalink:"/docs/hierarchical-structure",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/learn/advanced-introduction/hierarchical-structure/hierarchical-structure.md",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1692116968,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:2,frontMatter:{title:"Hierarchical Structure",description:"The architecture of Quai Network.",slug:"/hierarchical-structure",hide_table_of_contents:!1,sidebar_position:2},sidebar:"learnSidebar",previous:{title:"Dynamic Sharding",permalink:"/docs/dynamic-sharding"},next:{title:"Sharding",permalink:"/docs/sharding"}},c={},l=[{value:"Shard State Without Sharding Security",id:"shard-state-without-sharding-security",level:2},{value:"Optimized Network Latency",id:"optimized-network-latency",level:2},{value:"Parallel Execution Threads",id:"parallel-execution-threads",level:2},{value:"Prime",id:"prime",level:3},{value:"Region",id:"region",level:3},{value:"Zone",id:"zone",level:3},{value:"Hash Linked References",id:"hash-linked-references",level:2}],h={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hierarchical-structure"},"Hierarchical Structure"),(0,r.kt)("p",null,"Quai introduces a new, hierarchical structure of organizing blockchains that scales Proof-of-Work decentralization to handle all of global commerce."),(0,r.kt)("p",null,"Quai is the first blockchain network to shard state without sharding security, allowing the creation of sub networks to scale decentralized ledger technology without degrading security. The organization of these sub networks incentivizes ",(0,r.kt)("a",{parentName:"p",href:"/docs/latency"},"optimized network latency"),", which increases network throughput. Each of Quai's sub networks functions as an independent, asynchronous parallel execution thread. These sub networks are intertwined through ",(0,r.kt)("a",{parentName:"p",href:"./merged-mining"},"merged mining"),", functioning as a multithreaded blockchain execution environment. Quai Network maintains interoperable composability across all threads via shared hash linked references between chains, which are known as ",(0,r.kt)("a",{parentName:"p",href:"./coincident-blocks"},"coincident blocks"),"."),(0,r.kt)("p",null,"Quai's merge-mined hierarchical structure is the first blockchain architecture to ensure trustless interoperability and shared full-network security across sub networks."),(0,r.kt)("h2",{id:"shard-state-without-sharding-security"},"Shard State Without Sharding Security"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./sharding"},"Sharding")," is potentially a promising method of scaling blockchains. However, traditional implementations of sharding not only split up state, but also split the network security which introduces coordination complexity, risk, and latency in cross shard state updates. Quai Network uses ",(0,r.kt)("a",{parentName:"p",href:"./merged-mining"},"merged mining"),", which solves these issues by allowing the base consensus mechanism to both secure and coordinate all shards in a way which maintains traditional hash-based security guarantees."),(0,r.kt)("h2",{id:"optimized-network-latency"},"Optimized Network Latency"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/latency"},"Network latency")," is the primary factor that limits blockchain throughput. Quai Network drastically reduces latency across the network by incentivizing miners to not only produce hash but also minimize network latency. The latency of a miner to their peers directly impacts the profits of the miner through the uncle rate, meaning miners are incentivized to mine the chain with the lowest possible latency. Since Quai miners self-select which shard to mine, miners are incentivized to self-organize into the subnet in which they are least latent, resulting in lower overall network latency and higher throughput."),(0,r.kt)("p",null,"In addition to optimizing latency, Quai network also increases network performance through the sub-division of nodes into subnets. This allows nodes to group into topological close peers, minimizing ping times while also significantly decreasing the number of hops required for data to propagate in the sub-net and thus the shard. This improvement in network performance can be represented by consideration of the propagation requirements of data in a regular n-by-n graph."),(0,r.kt)("p",null,"This relationship is described by t = p",(0,r.kt)("em",{parentName:"p"},"n"),"log_m(n) where t is time to propagation, p is the ping time, n is the number of nodes in the network, and m is the average number of connected peers. For example, when applying this formula to Bitcoin, data would require 8 hops with average measured ping latencies of 100ms. This would make the theoretical fastest propagation of data in the Bitcoin network 800ms. If the network were subdivided into 9 subnets, the number of hops would decrease to 3 while the expected ping times would drop to 10ms. Thus, in the smallest subnet, you would achieve data propagation in 30ms -- an almost 25x improvement."),(0,r.kt)("h2",{id:"parallel-execution-threads"},"Parallel Execution Threads"),(0,r.kt)("p",null,"Quai Network is a ",(0,r.kt)("a",{parentName:"p",href:"./multithreaded-execution"},"multithreaded network of blockchains"),". All Quai blockchains act as an independent thread, producing blocks asynchronously and allowing for parallel execution across the network. By using multithreaded execution, Quai is able to process upwards of 50,000 transactions per second.\nQuai's merge-mined hierarchy intertwines these many threads through ",(0,r.kt)("a",{parentName:"p",href:"./coincident-blocks"},"hash linked references"),", which ensure transactions and contract interactions can occur atomically across all Quai chains. The many chains within Quai's multithreaded environment are organized into three tiers of network hierarchy. The following table assumes an initial 13 chain (3 region 9 zone) architecture:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chain Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Level in Hierarchy"),(0,r.kt)("th",{parentName:"tr",align:null},"% of Network Hashrate"),(0,r.kt)("th",{parentName:"tr",align:null},"Block Time"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prime"),(0,r.kt)("td",{parentName:"tr",align:null},"1 (top)"),(0,r.kt)("td",{parentName:"tr",align:null},"100%"),(0,r.kt)("td",{parentName:"tr",align:null},"~1,000s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"2 (middle)"),(0,r.kt)("td",{parentName:"tr",align:null},"~33%"),(0,r.kt)("td",{parentName:"tr",align:null},"~100s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zone"),(0,r.kt)("td",{parentName:"tr",align:null},"3 (bottom)"),(0,r.kt)("td",{parentName:"tr",align:null},"~11%"),(0,r.kt)("td",{parentName:"tr",align:null},"~10s")))),(0,r.kt)("h3",{id:"prime"},"Prime"),(0,r.kt)("p",null,"The highest tier of the hierarchy is Prime. The single Prime chain is mined by all miners, and has a high difficulty in order to ensure a high security guarantee behind each block. The Prime Chain is a header chain used exclusively to coordinate sub networks, and does not maintain any state. There are no accounts or transactions on the Prime chain."),(0,r.kt)("h3",{id:"region"},"Region"),(0,r.kt)("p",null,"Quai's single Prime chain organizes many Region chains, which are the second level of the hierarchy. With N Region chains, each Region chain will contain approximately 1/Nth of the total network hashrate. Through merged mining, Region chains are periodically hash linked to the Prime chain (and thus the remainder of the network). Quai Network's initial structure consists of 3 Region chains: Cyprus, Paxos, and Hydra. Similar to the Prime chain, Region chains do not carry any state, and exist exclusively to coordinate Zone chains."),(0,r.kt)("h3",{id:"zone"},"Zone"),(0,r.kt)("p",null,"The bottom level of the hierarchy is Zone. Each of Quai's Region chains coordinate many Zone chains. Similar to Region chains, Zone chains are hash linked to dominant Prime/Region blocks through merged mining. Quai's initial structure consists of 9 Zone chains: Cyprus 1-3, Paxos 1-3, and Hydra 1-3. Zone chains are the only type of chain in Quai Network that maintain state and process transactions. Each Zone chain is a single execution thread, making all of Quai Network a ",(0,r.kt)("a",{parentName:"p",href:"./multithreaded-execution"},"composable multithreaded execution environment"),"."),(0,r.kt)("h2",{id:"hash-linked-references"},"Hash Linked References"),(0,r.kt)("p",null,"Simply by merge-mining Quai, miners create ",(0,r.kt)("a",{parentName:"p",href:"./coincident-blocks"},"hash linked references")," between chains that can be used to facilitate state transitions across chains. These hash linked references are known as coincident blocks, and occur naturally as a result of merged mining. Hash linked references between chains allow all chains within the network to reference and interact with each other as long as miners are producing blocks, acting as the first truly decentralized and trustless bridge between hash-based blockchains."))}d.isMDXComponent=!0}}]);