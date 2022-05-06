"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[7738],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<c;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(7462),o=n(3366),c=(n(7294),n(3905)),r=["components"],i={sidebar_position:2},s="Execute your first transaction on Starcoin",u={unversionedId:"getting-started/accounts/first-transaction",id:"getting-started/accounts/first-transaction",title:"Execute your first transaction on Starcoin",description:"This article guides you on how to execute your first transaction on the starcoin blockchain.",source:"@site/docs/02-getting-started/03-accounts/2.first-transaction.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/first-transaction",permalink:"/starcoin-cookbook/docs/getting-started/accounts/first-transaction",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/03-accounts/2.first-transaction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage accounts by CLI",permalink:"/starcoin-cookbook/docs/getting-started/accounts/account-manage"},next:{title:"Creating and using multisign account",permalink:"/starcoin-cookbook/docs/getting-started/accounts/multisig-account"}},l={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"A few steps to submit a transaction",id:"a-few-steps-to-submit-a-transaction",level:2},{value:"Create an account",id:"create-an-account",level:3},{value:"Use Faucet to top up your account",id:"use-faucet-to-top-up-your-account",level:3},{value:"Submit Transaction",id:"submit-transaction",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,r);return(0,c.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"execute-your-first-transaction-on-starcoin"},"Execute your first transaction on Starcoin"),(0,c.kt)("p",null,"This article guides you on how to execute your first transaction on the starcoin blockchain.\nBefore that, I recommend you read tech-related articles to get some idea of the basic concepts of starcoin."),(0,c.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,c.kt)("p",null,"Let's say you've run up a starcoin dev node locally."),(0,c.kt)("h2",{id:"a-few-steps-to-submit-a-transaction"},"A few steps to submit a transaction"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Start the CLI console and connect to the starcoin node\uff0cdetail document at ",(0,c.kt)("a",{parentName:"li",href:"../setup/starcoin-usage"},"Use starcoin console"),"."),(0,c.kt)("li",{parentName:"ul"},"Create two accounts: Alice,Bob\uff0cdetail step see ",(0,c.kt)("a",{parentName:"li",href:"../accounts/account-manage"},"Account manager"),"."),(0,c.kt)("li",{parentName:"ul"},"Mint money into Alice's account."),(0,c.kt)("li",{parentName:"ul"},"Submit transfer transaction: Alice send money to Bob.")),(0,c.kt)("h3",{id:"create-an-account"},"Create an account"),(0,c.kt)("p",null,"After connecting to the node, let's first create two accounts. Here we assume that both accounts have been created successfully,\nAlice is the default account with the address 0xf096a2a61d3042774187a462a5394537 and Bob's address is 0xbabb67fa74c24466c500e642c79437de ."),(0,c.kt)("h3",{id:"use-faucet-to-top-up-your-account"},"Use Faucet to top up your account"),(0,c.kt)("p",null," In dev environment, faucet can be used to mint accounts. faucet only exists in dev and test net to make it easier for developers developing and testing dapps."),(0,c.kt)("p",null," Let's do it!."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% dev get-coin -v 100STC\n")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"dev get-coin")," will mint some coins the default account, and if the account does not exist on the chain, it will creates the account first and then transfers a specified (with ",(0,c.kt)("inlineCode",{parentName:"p"},"-v"),") number of coins to the account.\nThe output of the command is the transaction data  issued by the FAUCET account (address ",(0,c.kt)("inlineCode",{parentName:"p"},"0000000000000000000000000A550C18"),")."),(0,c.kt)("p",null,"Wait a few seconds and then check your account information again."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xf096a2a61d3042774187a462a5394537\n{\n  "ok": {\n    "account": {\n      "address": "0xf096a2a61d3042774187a462a5394537",\n      "is_default": true,\n      "is_readonly": false,\n      "public_key": "0x96734ea5015c3e1901b1af3e9c16f42df074c92749988d0563be3f5df65c2da6",\n      "receipt_identifier": "stc1p7zt29fsaxpp8wsv853322w29xu02slxc"\n    },\n    "auth_key": "0x4c9c5a86f958a1a02286e46807df916ff096a2a61d3042774187a462a5394537",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100000000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"Now, ",(0,c.kt)("inlineCode",{parentName:"p"},"balances")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"sequence_number")," is filled."),(0,c.kt)("h3",{id:"submit-transaction"},"Submit Transaction"),(0,c.kt)("p",null,"First you need to unlock Alice's account and authorize node to sign the transaction using Alice's private key."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"account unlock -p my-pass 0xf096a2a61d3042774187a462a5394537\n")),(0,c.kt)("p",null,"where ",(0,c.kt)("inlineCode",{parentName:"p"},"-p my-pass")," is the password that was needed when creating the account, if the default account's init password is empty."),(0,c.kt)("p",null,"Once the account is unlocked, execute the following command."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account transfer -s 0xf096a2a61d3042774187a462a5394537 -r 0xbabb67fa74c24466c500e642c79437de -v 10000 -b\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"-s 0xf096a2a61d3042774187a462a5394537"),": is Alice's account address."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"-r 0xbabb67fa74c24466c500e642c79437de"),": is Bob's account address.")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"If, Bob's account does not yet exist on the chain, the transfer transaction will automatically create Bob's account on the chain.")),(0,c.kt)("p",null,"At this point, the transaction has been submitted to the chain.\nYou still need to wait a few seconds (in the dev environment, maybe longer in test env) to let the transaction included the chain.\nThen check Bob's account information again:."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xbabb67fa74c24466c500e642c79437de\n{\n  "ok": {\n    "account": {\n      "address": "0xbabb67fa74c24466c500e642c79437de",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x6b1adad8156edba7d24efa5bb216e8e8f927a3866c875e95a636e6399ae4ed46",\n      "receipt_identifier": "stc1ph2ak07n5cfzxd3gquepv09phmc0crcec"\n    },\n    "auth_key": "0x282d7d31aa5c7daac4fab02c084f896dbabb67fa74c24466c500e642c79437de",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 10000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"Bob has the money now!"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"This document needs to be improved."),(0,c.kt)("ul",{parentName:"div"},(0,c.kt)("li",{parentName:"ul"},"Translate from Chinese document")))))}f.isMDXComponent=!0}}]);