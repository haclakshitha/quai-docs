"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[9555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={title:"Languages",description:"Smart contract development languages supported on Quai Network.",slug:"/languages",sidebar_position:2},o="Languages",l={unversionedId:"develop/smart-contracts/languages",id:"develop/smart-contracts/languages",title:"Languages",description:"Smart contract development languages supported on Quai Network.",source:"@site/docs/develop/smart-contracts/languages.md",sourceDirName:"develop/smart-contracts",slug:"/languages",permalink:"/quai-docs/languages",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/develop/smart-contracts/languages.md",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1691613047,formattedLastUpdatedAt:"Aug 9, 2023",sidebarPosition:2,frontMatter:{title:"Languages",description:"Smart contract development languages supported on Quai Network.",slug:"/languages",sidebar_position:2},sidebar:"developSidebar",previous:{title:"Opcode Additions",permalink:"/quai-docs/opcode-additions"},next:{title:"Deploy",permalink:"/quai-docs/deploy"}},s={},u=[{value:"Solidity",id:"solidity",level:2},{value:"Example Smart Contract",id:"example-smart-contract",level:3},{value:"Resources",id:"resources",level:3},{value:"Alternative Languages",id:"alternative-languages",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"languages"},"Languages"),(0,n.kt)("h2",{id:"solidity"},"Solidity"),(0,n.kt)("p",null,"Solidity is a contract-oriented, high-level programming language for creating smart contracts. It was influenced by C++, Python, and JavaScript and is designed to target the Ethereum Virtual Machine (EVM) environments. Solidity is statically typed, supports inheritance, and libraries. It allows developers to create smart contracts for a wide range of use cases and applications. Key features of Solidity include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complex user-defined types"),(0,n.kt)("li",{parentName:"ul"},"Inheritance and complex user-defined contracts"),(0,n.kt)("li",{parentName:"ul"},"Error checking, including requirements and assertions"),(0,n.kt)("li",{parentName:"ul"},"Support for libraries and user-defined functions"),(0,n.kt)("li",{parentName:"ul"},"Strong security features that ensure contract integrity.")),(0,n.kt)("h3",{id:"example-smart-contract"},"Example Smart Contract"),(0,n.kt)("p",null,"The Greeter contract shown below is written with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.0/"},"Solidity v0.8.0"),". Greeter serves two functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Store a greeting on-chain."),(0,n.kt)("li",{parentName:"ul"},"Return the greeting when the contract function is called.")),(0,n.kt)("p",null,"It also contains a function for users to set a new greeting of their choice. While the Greeter contract may be simple, it showcases some of the unique functionality that smart contracts offer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Greeter.sol"',title:'"Greeter.sol"'},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Greeter {\n    string private greeting;\n\n    function greet() public view returns (string memory) {\n        return greeting;\n    }\n\n    function setGreeting(string memory _greeting) public {\n        console.log(\"Changing greeting from '%s' to '%s'\", greeting, _greeting);\n        greeting = _greeting;\n    }\n}\n")),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://soliditylang.org/"},"Solidity Homepage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/latest/"},"Solidity Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ethereum/solidity"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/latest/solidity-by-example.html"},"Examples"))),(0,n.kt)("h2",{id:"alternative-languages"},"Alternative Languages"),(0,n.kt)("p",null,"The EVM supports a wide variety of other languages such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/latest/yul.html"},"Yul")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FuelLabs/yulp"},"Yul+"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.huff.sh/tutorial/overview/"},"Huff")," through the use of compilers/transpilers. Yul and Huff are lower level languages that offer developers the ability to write assembly-like syntax or direct bytecode."),(0,n.kt)("p",null,"For any of the above languages to be used on Quai Network, support for Quai's additional EVM opcodes ",(0,n.kt)("a",{parentName:"p",href:"/quai-docs/opcode-additions#isaddrinternal"},(0,n.kt)("inlineCode",{parentName:"a"},"isaddrInternal"))," and ",(0,n.kt)("a",{parentName:"p",href:"/quai-docs/opcode-additions#etx"},(0,n.kt)("inlineCode",{parentName:"a"},"etx"))," must be added to their respective compilers. More details on using the Quai specific opcodes can be found on the ",(0,n.kt)("a",{parentName:"p",href:"/quai-docs/opcode-additions"},"Opcode Additions page"),". Quai Network is exploring full opcode support for these alternative languages in the future."))}d.isMDXComponent=!0}}]);