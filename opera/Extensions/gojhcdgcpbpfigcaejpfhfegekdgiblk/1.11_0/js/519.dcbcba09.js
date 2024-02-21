"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[519],{12393:function(e,t,s){s.d(t,{Z:function(){return h}});var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"backdrop-blur-2xl bg-dark-N16 cursor-pointer fixed h-14 right-6 rounded-full transition-opacity w-14",style:{opacity:e.showBackToTopOpacity,bottom:e.showBackToTopBottom+"px"},on:{click:function(t){return t.stopPropagation(),e.scrollToTop.apply(null,arguments)}}},[i("img",{staticClass:"mx-auto",style:{marginTop:"23px"},attrs:{src:s(80779)}})])},r=[];const a=22,n=56,o=window.innerHeight;var l={name:"BackToTop",data(){return{showBackToTopBottom:-n,showBackToTopOpacity:0}},computed:{scrollableEl(){return this.$el.parentElement}},beforeUnmount(){this.scrollableEl.removeEventListener("scroll",this.onScroll)},mounted(){this.scrollableEl.addEventListener("scroll",this.onScroll)},methods:{onScroll(e){const t=o,{scrollTop:s}=e.target,i=s-t;if(i>0){this.showBackToTopOpacity=1;let e=-n+i;e>a&&(e=a),this.showBackToTopBottom=e}else this.showBackToTopOpacity=0},scrollToTop(){this.scrollableEl.scrollTo(0,0)}}},p=l,c=s(1001),u=(0,c.Z)(p,i,r,!1,null,null,null),h=u.exports},48796:function(e,t,s){s.d(t,{Z:function(){return p}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"wrapper"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.updateInput}}),s("span",{staticClass:"checkmark"})])},r=[],a=(s(57658),{name:"OperaCheckbox",model:{event:"change",prop:"modelValue"},props:{modelValue:{default:!1,type:[Array,Boolean]},value:{default:void 0,type:[Object,String]}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.value}},methods:{updateInput(e){const t=e.target.checked;if(this.modelValue instanceof Array){const e=[...this.modelValue];t?e.push(this.value):e.splice(e.indexOf(this.value),1),this.$emit("change",e)}else this.$emit("change",t)}}}),n=a,o=s(1001),l=(0,o.Z)(n,i,r,!1,null,"8d8c1508",null),p=l.exports},44497:function(e,t,s){s.d(t,{Z:function(){return g}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.disabled?e._e():s("div",{staticClass:"bg-dark-N16 border border-black border-opacity-10 cursor-pointer flex items-center justify-between mb-2 px-6 py-3 rounded-lg t-token_item-click",on:{click:e.click}},[s("token-icon",{staticClass:"h-9 w-9",attrs:{address:e.address,chain:e.chain,"icon-uri":e.value.logoURI},on:{hideUnverifiedTokenPopover:e.hideUnverifiedTokenPopover,showUnverifiedTokenPopover:e.showUnverifiedTokenPopover}}),s("div",{staticClass:"flex-1 mx-4"},[s("div",{staticClass:"font-bold tracking-wider"},[e._v(e._s(e.name))]),s("div",{staticClass:"flex items-center text-dark-N77 text-xs"},[s("span",{staticClass:"mr-2"},[e._v(e._s(e.symbol))]),s("chain-badge",{attrs:{"background-color":"bg-input-bg",chain:e.chain}}),e.type&&e.type!==e.symbol?s("div",{staticClass:"bg-input-bg inline-block ml-1 px-2 py-0 rounded-full"},[e._v(" "+e._s(e.type)+" ")]):e._e()],1)]),e.selectable?s("opera-checkbox",{ref:"checkbox",staticClass:"pointer-events-none",attrs:{"model-value":e.modelValue,value:e.value},on:{change:e.onChange}}):e._e()],1),s("unverified-token-popover",{ref:"unverifiedTokenPopover",attrs:{"caret-horizontal-position":"left-[11px]","popover-position":"left-2","shorter-text":""}})],1)},r=[],a=s(83437),n=s(48796),o=s(56258),l=s(75236),p=s(56142),c=s(20144),u=c.Z.extend({name:"TokenItem",components:{ChainBadge:a.Z,OperaCheckbox:n.Z,TokenIcon:l.Z,UnverifiedTokenPopover:p.Z},model:{event:"change",prop:"modelValue"},props:{address:{default:"",type:String},chain:{default:void 0,type:Object},disabled:{default:!1,type:Boolean},modelValue:{default:void 0,type:[String,Object,Array]},name:{default:"",type:String},selectable:{default:!0,type:Boolean},symbol:{default:"",type:String},value:{default:void 0,type:[String,Object,Array]}},computed:{type(){const e=this.value.type??this.value.contract?.type;return e?"".toUpperCase():""},unverifiedTokenPopover(){return this.$refs.unverifiedTokenPopover}},methods:{click(){this.selectable?this.$refs.checkbox.$el.click():this.$emit("change",this.value)},getStatsEventName(){if("WatchListSelect"===this.$route.name){const e=this.$refs.checkbox.isChecked?"selected":"unselected";return`wt_watch_coin_${e}`}return"ReceiveToken"===this.$route.name?"wt_receive_select":"wt_coin_selected"},hideUnverifiedTokenPopover(e){this.unverifiedTokenPopover.hide(e)},onChange(e){const[t,s]=[this.$store.getters.getNetworkName(this.chain),this.symbol],i=this.getStatsEventName();o.Z.sendStatsEvent(o.Z.types.CLICK,i,{network:t,symbol:s}),this.$emit("change",e)},showUnverifiedTokenPopover(e){this.unverifiedTokenPopover.show(e)}}}),h=u,d=s(1001),m=(0,d.Z)(h,i,r,!1,null,null,null),g=m.exports},79340:function(e,t,s){s.d(t,{Z:function(){return h}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-row overflow-x-auto rtl-space-x-reverse space-x-4"},e._l(e.percentageValues,(function(t){var i=t.label,r=t.divisor;return s("button",{key:i,staticClass:"border font-bold px-2 py-1 rounded-md text-brand-primary text-sm w-14",class:[{"border-brand-primary bg-brand-primary bg-opacity-5":i===e.selected,"border-black border-opacity-20 bg-gray":i!==e.selected},"t-perc-btn t-perc-btn-"+i],on:{click:function(t){return e.select({label:i,divisor:r})}}},[s("span",1===r?[e._v(e._s(e.$t("general.max")))]:[e._v(e._s(e.localizePercentage(i)))])])})),0)},r=[],a=s(70794),n=s(4634),o=s(98180),l={name:"PercentageButtons",props:{token:{default:void 0,type:Object},value:{default:void 0,type:[a.Z,Number,String]}},data(){return{calculatedAmount:null,percentageValues:[{divisor:4,label:"25"},{divisor:2,label:"50"},{divisor:1,label:"100"}],selected:null}},watch:{value(){this.value!==this.calculatedAmount&&(this.selected=null)}},methods:{calculateAmount(e){const t=Object.assign({},this.token,{balance:new a.Z(this.token.balance).dividedBy(e)});this.calculatedAmount=o.Z.tokenDecimal(t)||(0,a.Z)(0),this.$emit("change",this.calculatedAmount)},localizePercentage:n.Z.localizePercentage,select({label:e,divisor:t}){this.selected=e,this.calculateAmount(t)}}},p=l,c=s(1001),u=(0,c.Z)(p,i,r,!1,null,null,null),h=u.exports},56142:function(e,t,s){s.d(t,{Z:function(){return u}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("simple-popover",{ref:"popover",staticClass:"fixed font-medium h-min t-unverified_token_popover text-sm w-72 z-10",class:[e.popoverPosition],attrs:{"background-class":"bg-dark-N04","caret-horizontal-position":e.caretHorizontalPosition,"caret-vertical-inset":"bottom"}},[e.shorterText?s("p",[e._v(e._s(e.$t("components.popovers.unverifiedTokenShorter")))]):s("i18n",{staticClass:"whitespace-pre-line",attrs:{path:"components.popovers.unverifiedToken",tag:"p"},scopedSlots:e._u([{key:"settingsPage",fn:function(){return[s("span",{staticClass:"cursor-pointer text-brand-primary",on:{click:function(t){return e.$emit("showAssetSettingsDialog")}}},[e._v(e._s(e.$t("components.popovers.unverifiedTokenSettingsPage")))])]},proxy:!0}])})],1)},r=[],a=s(21157),n=s(20144),o=n.Z.extend({name:"UnverifiedTokenPopover",components:{SimplePopover:a.Z},props:{caretHorizontalPosition:{default:"left-7",type:String},popoverPosition:{default:"left-6",type:String},shorterText:{default:!1,type:Boolean}},computed:{popover(){return this.$refs.popover}},methods:{hide(e){this.popover.hide(e)},show(e){this.popover.show(),this.$nextTick((()=>{const t=this.popover.$el,s=11,i=t.offsetHeight+e.offsetY+s;t.style.top=e.pageY-i+"px"}))}}}),l=o,p=s(1001),c=(0,p.Z)(l,i,r,!1,null,"47f33c28",null),u=c.exports},20519:function(e,t,s){s.r(t),s.d(t,{default:function(){return re}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pb-8"},[s("div",{staticClass:"flex flex-col flex-grow h-full"},[s("top-bar",{attrs:{"test-parent-name":"swap_view",title:e.$t("general.swap")}}),s("div",{key:e.timesSwappableTokensUpdated,staticClass:"flex flex-col flex-grow justify-start mt-4 mx-4"},[s("swap-input",{staticClass:"mb-4 t-swap-from_balance",class:[{"pointer-events-none":e.isLoading||!!e.currentPendingApprovalHash}],attrs:{balance:e.fromBalance,type:"from"},model:{value:e.from,callback:function(t){e.from=t},expression:"from"}}),s("div",{staticClass:"flex flex-col items-center"},[s("horizontal-divider",{staticClass:"my-3"},[s("button",{staticClass:"bg-brand-primary bg-opacity-10 flex-shrink-0 h-10 rounded-full t-swap-switch w-10",class:{"cursor-not-allowed":e.disableTokenSwitch||!!e.currentPendingApprovalHash},attrs:{disabled:e.disableTokenSwitch,title:e.disableTokenSwitch?e.$t("general.youDontOwnAny",{asset:e.toSymbol}):""},on:{click:e.switchTokens,mouseleave:function(t){e.exchangeHover=!1},mouseover:function(t){e.exchangeHover=!0}}},[s("i",{staticClass:"align-bottom icon text-brand-primary",class:{"icon-exchange":e.exchangeHover,"icon-swap_arrow":!e.exchangeHover}})])])],1),s("swap-input",{staticClass:"t-swap-to_balance",class:[{"pointer-events-none":e.isLoading||!!e.currentPendingApprovalHash}],attrs:{balance:e.toBalance,"read-only":"",type:"to"},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}}),s("swap-info",{class:[{"pointer-events-none":e.isLoading}],attrs:{conversion:e.conversion,error:e.generalTxError,price:e.price,"show-info":!(!e.from.value||!e.to.value),"to-token-amount":e.toTokenAmount},on:{changeSlippage:e.changeSlippage,refreshTx:e.refreshTx}})],1),e.currentPendingApprovalHash?s("div",[s("div",[s("div",{staticClass:"bg-dark-N16-op50 m-4 mb-4 px-6 py-4 rounded-lg text-dark-N77 text-sm"},[s("i18n",{attrs:{path:"views.swapView.pendingApproval"},scopedSlots:e._u([{key:"pendingApprovalLink",fn:function(){return[s("a",{staticClass:"cursor-pointer text-brand-primary",on:{click:function(t){return e.openApprovalDetails()}}},[e._v(" "+e._s(e.$t("views.swapView.pendingApprovalLinkTitle"))+" ")])]},proxy:!0}],null,!1,2148050931)})],1)])]):e._e(),s("p",{staticClass:"text-2xs text-center text-dark-N77"},[e._v(" "+e._s(e.$t("views.swapView.providedByOpera"))+" ")]),s("primary-button",{staticClass:"mt-4 mx-4 relative t-swap-swap",attrs:{disabled:e.invalidStateOrPendingApproval,loading:e.isLoading||!!e.currentPendingApprovalHash,title:e.primaryButtonText},on:{click:function(t){e.isApproveRequired?e.getApprove():e.getSwap()}}},[s("lottie-component",{staticClass:"absolute",attrs:{src:"loader_button.json"}})],1)],1)])},r=[],a=(s(57658),s(39765));const n=(e,t)=>{let s;return function(...i){return void 0!==s&&t||e.apply(this,i),clearTimeout(s),s=setTimeout((()=>e.apply(this,i)),t),s}};var o,l=s(35210),p=s(70794),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"border-opacity-10 line-divider w-full"},[e._t("default")],2)},u=[],h={name:"HorizontalDivider"},d=h,m=s(1001),g=(0,m.Z)(d,c,u,!1,null,"0c0ab06d",null),f=g.exports,v=s(39944),k=s(68461),w=s(56258),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-8 w-full"},[e.showInfo||e.error?e.error&&!e.insufficientFunds?i("div",{staticClass:"bg-dark-N16 flex flex-col font-semibold gap-3.5 h-60 items-center justify-center rounded-3xl text-center text-spectrum-red text-xs"},[i("img",{staticClass:"h-14 mb-0.5 w-14",attrs:{src:s(571)}}),i("div",[e._v(" "+e._s(e.$t("errors.generic.somethingWentWrongShort"))+" ")]),i("div",{staticClass:"cursor-pointer text-accent underline",on:{click:function(t){return e.$emit("refreshTx")}}},[e._v(" "+e._s(e.$t("general.refresh"))+" ")])]):i("div",[i("div",{staticClass:"bg-dark-N16-op50 flex items-center justify-center px-6 py-4 rounded-4xl"},[i("div",{staticClass:"max-w-full text-sm"},[i("p",{staticClass:"max-w-fit truncate"},[i("span",[e._v(e._s(e.conversion)+" ")]),i("span",{staticClass:"text-dark-N77"},[e._v(e._s(e.price))])])])]),i("div",{staticClass:"bg-dark-N16-op50 mb-3 mt-6 px-6 py-4 rounded-xl"},[i("div",{staticClass:"flex items-center justify-between"},[i("div",[i("div",{staticClass:"text-[13px] text-dark-N77"},[e._v(" "+e._s(e.$t("components.swapInfo.slippageTolerance"))+" ")]),e.showSlippageSettings?i("p",{staticClass:"text-dark-N77-op50 text-xs"},[e._v(" "+e._s(e.$t("components.swapInfo.selectSuggested"))+" ")]):i("div",{staticClass:"mt-1"},[e._v(" "+e._s(e.localizePercentage(e.slippage.toString()))+" ")])]),i("div",{staticClass:"flex items-center"},[i("i",{staticClass:"cursor-pointer icon-trans",class:[{"text-dark-N77":!e.showSlippageSettings,"text-accent":e.showSlippageSettings}],on:{click:function(t){e.showSlippageSettings=!e.showSlippageSettings}}})])]),e.showSlippageSettings?i("div",[i("slippage-buttons",{staticClass:"mt-5"}),e.errorStage&&!e.isSafeSlippage?i("div",{staticClass:"mt-5 pb-5 pt-4 px-6 rounded-lg",class:[{"text-red bg-red-10":[e.SlippageErrorStages.Insufficient,e.SlippageErrorStages.Excessive].includes(e.errorStage),"text-orange bg-orange-10":[e.SlippageErrorStages.TxMayFail,e.SlippageErrorStages.BadRate].includes(e.errorStage),"text-yellow bg-yellow-10":[e.SlippageErrorStages.ModerateRate].includes(e.errorStage)}]},[e._v(" "+e._s(e.errorList.get(e.errorStage))+" ")]):e._e()],1):e._e()]),e.isValidSlippage?i("div",{staticClass:"bg-dark-N16-op50 flex items-center justify-between mb-3 mt-1 px-6 py-4 rounded-xl"},[i("div",[i("div",{staticClass:"text-dark-N77 text-xs"},[e._v(" "+e._s(e.$t("components.swapInfo.minimumReceive",{slippage:e.localizePercentage(e.slippage.toString())}))+" ")]),i("div",{staticClass:"mt-1"},[e._v(" "+e._s(e.formatNumber(e.minAmountReceived))+" "+e._s(e.currentSwap.toToken.symbol)+" ")])])]):e._e()]):i("div",{staticClass:"border-2 border-dark-N16 flex h-56 items-center justify-center rounded-3xl"},[i("span",{staticClass:"opacity-50 text-base text-dark-N77"},[e._v(e._s(e.$t("components.swapInfo.enterSwapAmount")))])])])},x=[];(function(e){e[e["Insufficient"]=1]="Insufficient",e[e["TxMayFail"]=2]="TxMayFail",e[e["ModerateRate"]=3]="ModerateRate",e[e["BadRate"]=4]="BadRate",e[e["Excessive"]=5]="Excessive"})(o||(o={}));var y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-row justify-between overflow-x-auto rtl-space-x-reverse space-x-2 t-slippage_buttons"},[e._l(e.slippageOptions,(function(t){return s("button",{key:t,staticClass:"border flex-1 font-bold leading-6 mb-1 py-1 rounded-md text-brand-primary text-sm w-11",class:[{"border-brand-primary bg-brand-primary bg-opacity-5":t===e.slippage&&!e.showInput,"border-black border-opacity-20 bg-gray":t!==e.slippage||e.showInput}],on:{click:function(s){return e.select(t)}}},[s("span",[e._v(e._s(e.localizePercentage(t.toString())))])])})),s("div",{staticClass:"flex-1 h-8.5 w-28"},[e.showInput?s("div",{staticClass:"border flex font-bold h-8.5 items-center justify-between mb-1 px-2 py-1 rounded-md text-brand-primary text-sm w-28"},[s("input",{ref:"customSlippageInput",staticClass:"bg-transparent flex-1 t-slippage_buttons-custom_slippage_input text-right w-12",attrs:{type:"string"},domProps:{value:e.slippage},on:{input:e.changeSlippage}}),s("span",{staticClass:"opacity-50 text-dark-N77"},[e._v("%")]),s("div",{staticClass:"flex-1"})]):s("button",{staticClass:"bg-gray border border-black border-opacity-20 font-bold leading-6 mb-1 px-2 py-1 rounded-md text-brand-primary text-sm w-fit",on:{click:e.handleShowInput}},[e._v(" "+e._s(e.$t("general.custom"))+" ")])])],2)},T=[],S=s(20144),$=s(4634),_=S.Z.extend({name:"SlippageButtons",data(){return{showInput:!1,slippageOptions:this.$store.state.swap.slippageOptions,slippageUpdateTimer:null}},computed:{isValidSlippage(){return this.getIsValidSlippage(this.slippage)},slippage(){return this.$store.getters.slippage},slippageDecimal(){return this.$store.getters.slippageData.slippageDecimal}},methods:{changeSlippage(e){clearTimeout(this.slippageUpdateTimer);const t=this.sanitizeValue(e);t!==this.slippage&&(this.slippageUpdateTimer=window.setTimeout((()=>{this.$store.dispatch("setSlippage",t)}),this.getIsValidSlippage(t)?1e3:0))},getIsValidSlippage(e){return this.$store.getters.isValidSlippage(e)},handleShowInput(){this.showInput=!0,this.$nextTick((()=>{this.$refs.customSlippageInput?.focus()}))},isValidSlippagePattern(e){const t=new RegExp(`^(0|[1-9]\\d{0,1})([\\.\\,]\\d{1,${this.slippageDecimal}})?$`),s=[".",","].some((t=>e.endsWith(t)));return t.test((s?+e:e).toString())},localizePercentage:$.Z.localizePercentage,sanitizeValue({target:e}){let{value:t}=e;t=t?.replace(",",".");const s=new Map([["isTruthy",!!t&&!isNaN(+t)],["isValidSlippage",this.isValidSlippagePattern(t)],["isValidSlippagePercentage",+t>=0||+t<100]]);return[...s.values()].some((e=>!e))&&(t="0",e.value=null),+t},select(e){this.showInput=!1,this.$store.dispatch("setSlippage",e)}}}),C=_,A=(0,m.Z)(C,y,T,!1,null,"f0130492",null),Z=A.exports,P=S.Z.extend({name:"SwapInfo",components:{SlippageButtons:Z},props:{conversion:{default:"",type:String},error:{default:!1,type:Boolean},price:{default:"",type:String},showInfo:{default:!1,type:Boolean},toTokenAmount:{default:new p.Z(0),type:p.Z}},data(){return{SlippageErrorStages:o,errorStage:void 0,showSlippageSettings:!1,slippageOptions:this.$store.state.swap.slippageOptions}},computed:{currentSwap(){return this.$store.getters.currentSwap},errorIndex(){const{max:e,min:t,slippageOptions:s}=this,{Insufficient:i,TxMayFail:r,ModerateRate:a,BadRate:n,Excessive:l}=o;return new Map([[t,i],[s.at(0),r],[s.at(-1),a],[e+t,n],[100,l]])},errorList(){const{max:e,min:t,slippage:s}=this,{Insufficient:i,TxMayFail:r,ModerateRate:a,BadRate:n,Excessive:l}=o;return new Map([[i,this.$i18n.t("components.swapInfo.minimumSlippageRate",{slippage:this.localizePercentage(t.toString())})],[r,this.$i18n.t("components.swapInfo.yourTransactionMayFail")],[a,this.$i18n.t("components.swapInfo.youMayReceive",{slippage:this.localizePercentage(s.toString())})],[n,this.$i18n.t("components.swapInfo.youMayReceiveAnd",{slippage:this.localizePercentage(s.toString())})],[l,this.$i18n.t("components.swapInfo.maximumSlippageRate",{slippage:this.localizePercentage(e.toString())})]])},insufficientFunds(){return this.$store.getters.txError.insufficientFunds},isSafeSlippage(){return this.slippage>=this.slippageOptions.at(0)&&this.slippage<=1},isValidSlippage(){return this.$store.getters.isValidSlippage()},max(){return this.slippageData.slippageMax},min(){return this.slippageData.slippageMin},minAmountReceived(){return this.toTokenAmount.times(1-this.slippage/100)},slippage(){return this.$store.getters.slippage},slippageData(){return this.$store.getters.slippageData}},watch:{slippage(e){this.errorStage=[...this.errorIndex.entries()].find((([t])=>e<t))?.at(1)}},methods:{formatNumber:$.Z.formatNumber,localizePercentage:$.Z.localizePercentage}}),E=P,I=(0,m.Z)(E,b,x,!1,null,"0b5a8f07",null),N=I.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w-full"},[s("div",{staticClass:"flex flex-col items-center"},[s("div",{staticClass:"flex items-end justify-between mb-3 w-full"},[s("div",{staticClass:"bg-dark-N16 cursor-pointer flex items-center justify-center pl-3 pr-4 py-1 rounded-full t-swap_input-show_dialog",on:{click:e.showDialog}},[s("token-icon",{staticClass:"h-7 mr-2 w-7",attrs:{address:e.address,chain:e.chain}}),s("div",{staticClass:"mr-4"},[s("div",{staticClass:"font-bold text-base"},[e._v(e._s(e.name))]),s("div",{staticClass:"font-semibold opacity-50 text-dark-N77 text-sm"},[e._v(" "+e._s(e.chainNameFriendly)+" ")])]),s("i",{staticClass:"icon-chevron_down"})],1),s("div",{staticClass:"grow mb-1 ml-2 mr-5 text-right text-sm"},[s("span",{staticClass:"text-dark-N77-op50"},[e._v(e._s(e.$t("general.balance"))+": ")]),s("span",{staticClass:"text-dark-N77 whitespace-pre-wrap",class:[{"text-accent":!e.readOnly}]},[e._v(e._s(e.fullBalance))])])]),s("div",{staticClass:"flex flex-col justify-center text-center w-full"},[s("input",{staticClass:"bg-neutral-01 focus:text-brand-primary input placeholder:text-white px-5 py-3.5 text-right w-full",class:[{"input-error pr-10":e.error,"cursor-not-allowed placeholder:text-neutral-06":e.readOnly}],attrs:{disabled:e.readOnly,placeholder:e.inputPlaceholder,title:""},domProps:{value:e.value.value},on:{input:function(t){return e.handleValueInput(t)},paste:function(t){return e.handleValueChanged(t)}}})]),e.error?s("div",{staticClass:"mt-2 text-center text-sm text-spectrum-red"},[e._v(" "+e._s(e.error)+" ")]):e._e(),e.readOnly?e._e():s("percentage-buttons",{staticClass:"mt-5",attrs:{token:Object.assign({},e.token,{balance:e.balanceWithoutDecimals}),value:e.value.value},on:{change:e.assignNewAmount}})],1),s("swap-token-dialog",{ref:"dialog",attrs:{type:e.type}})],1)},O=[],V=s(79340),D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"showing"}],staticClass:"bg-background bottom-0 fixed left-0 right-0 top-0 z-30"},[s("div",{staticClass:"flex flex-col h-full"},[s("top-bar",{attrs:{"emit-back":"","test-parent-name":"swap_token_dialog",title:e.$t("general.selectAssets")},on:{back:e.close}}),s("div",{staticClass:"px-4"},[s("opera-input",{staticClass:"t-swap_token_dialog-query",attrs:{placeholder:e.$t("general.search"),"prepend-icon":"icon-search text-brand-primary text-opacity-40",round:"",type:"search"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),s("div",{staticClass:"h-full overflow-y-scroll pb-4 px-4",on:{scroll:e.onScroll}},[e.loading&&e.query?s("div",{staticClass:"flex flex-1 items-center justify-center w-full"},[s("i",{staticClass:"animate-spin icon-spinner text-xl"})]):e._l(e.filteredTokens,(function(t,i){return s("token-item",{key:i,attrs:{address:t.address,chain:t.chain,disabled:e.isTokenDisabled(t),name:t.name,selectable:!1,symbol:t.symbol,value:t},on:{change:e.itemClicked}})})),s("back-to-top")],2)],1)])},q=[],R=s(12393),z=s(17482),L=s(44497),U=s(75619),j=s(98180);const H=20;var Q={name:"SwapTokenDialog",components:{BackToTop:R.Z,OperaInput:z.Z,TokenItem:L.Z,TopBar:U.Z},props:{type:{default:"",type:String}},data(){return{callback:null,filteredAssets:[],loading:!1,n:H,query:"",showing:!1}},computed:{currentSwap(){return this.$store.getters.currentSwap},filteredTokens(){return this.query?this.filteredAssets.slice(0,this.n):this.tokens.slice(0,this.n)},ownedTokens(){return this.$store.getters.ownedTokens},tokens(){const{swappableTokens:e,swappableTokensFlat:t}=this.$store.getters;if("to"===this.type){const t=this.currentSwap.fromToken?.chain;return t?e[(0,l.fh)(t)]??[]:[]}return t.filter((e=>!!e.balance))}},watch:{query:{handler(e){this.loading=!0,this.filteredAssets=[],e?this.$nextTick((()=>{this.throttle(this.filterList,1e3)(),this.n=H})):this.$nextTick((()=>{this.n=H}))},immediate:!0}},methods:{close(){this.showing=!1},filterList(){const e=this.query.toLowerCase();this.filteredAssets=this.tokens.filter((t=>t.name.toLowerCase().includes(e)||t.symbol.toLowerCase().includes(e)||this.$store.getters.chainNameFriendly(t.chain).toLowerCase().includes(e))),this.loading=!1},isTokenDisabled(e){if(!Object.keys(this.currentSwap).length)return;const t="from"===this.type?"to":"from",s=j.Z.isSameToken(this.currentSwap[`${t}Token`],e);return s||"from"===this.type&&!e.balance},async itemClicked(e){this.loading=!0,this.callback(e),this.showing=!1,this.loading=!1},onScroll(e){const{target:t}=e,s=t.scrollTop+t.clientHeight>=t.scrollHeight-t.clientHeight;s&&(this.n+H<this.tokens.length?this.n+=H:this.n=this.tokens.length-1)},show(e){this.callback=e,this.showing=!0},throttle(e,t){let s,i;return function(...r){const a=Date.now(),n=this;if(i||(i=a),clearTimeout(s),a-i>t)return i=a,e.apply(n,r),void clearTimeout(s);s=setTimeout((()=>{i=Date.now(),s=null,e.apply(n,r)}),t)}}}},F=Q,M=(0,m.Z)(F,D,q,!1,null,null,null),W=M.exports,K=s(75236),G={name:"SwapInput",components:{PercentageButtons:V.Z,SwapTokenDialog:W,TokenIcon:K.Z},props:{balance:{default:"",type:p.Z},readOnly:{type:Boolean},type:{default:"",type:String},value:{default:void 0,type:Object}},data(){return{focused:!1,inputPlaceholder:"0.0",token:{}}},computed:{address(){return this.token.address},balanceWithoutDecimals(){const e=this.balance??0;return j.Z.withoutDecimals(e,this.token.decimals)},chain(){return this.token.chain},chainNameFriendly(){if(this.chain)return this.$store.getters.chainNameFriendly(this.chain)},error(){const e="from"===this.type&&this.$store.getters.txError.insufficientFunds;return e&&this.$t("errors.generic.insufficientFunds")},fullBalance(){return this.$store.getters.getFullTokenBalance(this.address,this.token,this.chain)},maxValue(){return this.readOnly?Number.MAX_SAFE_INTEGER:this.balance},name(){return this.token.name},symbol(){return this.token.symbol}},watch:{value(e){this.token=e.token}},created(){this.token=this.value.token},methods:{assignNewAmount(e){this.$emit("input",{token:this.token,value:e})},formatNumber:$.Z.formatNumber,handleValueChanged(e){const t=this.sanitizeValue(e);this.$emit("input",{token:this.token,value:t})},handleValueInput(e){this.$nextTick((()=>{this.handleValueChanged(e)}))},sanitizeValue(e){let{value:t}=e.target;return e.target.value=j.Z.sanitizeTokenAmountInput(t),t=j.Z.sanitizeTokenAmountInput(t),t},showDialog(){this.$refs.dialog.show((e=>{this.token=e,this.$emit("input",{token:this.token,value:null})}))}}},J=G,Y=(0,m.Z)(J,B,O,!1,null,"439b3fd0",null),X=Y.exports,ee=s(25108),te={name:"SwapView",components:{HorizontalDivider:f,LottieComponent:v.Z,PrimaryButton:k.Z,SwapInfo:N,SwapInput:X,TopBar:U.Z},data(){return{approve:null,chain:null,error:null,exchangeHover:!1,from:{token:null,value:null},interval:null,isApprovalsPending:!1,loading:{approve:!1,quote:!1,swap:!1},quote:null,timesSwappableTokensUpdated:0,to:{token:null,value:null}}},computed:{accountAddress(){return this.$store.getters.ethereumAddress},amountWithoutDecimals(){if(!this.from.token||!this.from.value)return null;const e=$.Z.removeExponential(j.Z.withoutDecimals(this.from.value,this.from.token.decimals));return e},canUpdateQuote(){return new p.Z(this.from.value??0).gt(0)&&!this.generalTxError&&this.isValidSlippage},conversion(){const e=this.quote;if(!e)return null;const t=j.Z.withDecimals(e.fromTokenAmount,e.fromToken.decimals),s=e.fromToken.symbol,i=j.Z.withDecimals(e.toTokenAmount,e.toToken.decimals).dividedBy(t),r=e.toToken.symbol;return`1 ${s} ≈ ${$.Z.formatNumber(i)} ${r}`},currentPendingApprovalHash(){return this.$store.getters.currentPendingApprovalHash},currentSwap(){return this.$store.getters.currentSwap},disableTokenSwitch(){if(this.isLoading)return!0;const e=!!this.ownedTokens.find((e=>{let t=e.contract.contract;return t===a.L1&&(t=a.NA),t===this.to.token?.address}));return!e&&(!e||!this.from.value)},fromBalance(){return this.tokenBeingSwapped?j.Z.tokenDecimal(this.tokenBeingSwapped):null},fromSymbol(){return this.from&&this.from.token?this.from.token.symbol:""},generalTxError(){return!!this.error||Object.values(this.$store.getters.txError).some((e=>e))},hasQuoteBasis(){const e=this.to.token?.address??null,t=this.from.token?.address??null,s=this.amountWithoutDecimals;return!!(e&&t&&s)},invalidBalance(){return!this.from.token||(new p.Z(this.fromBalance).isLessThan(new p.Z(this.from.value))||new p.Z(this.fromBalance).isLessThanOrEqualTo(new p.Z(0))||new p.Z(this.from.value).isLessThanOrEqualTo(new p.Z(0)))},invalidStateOrPendingApproval(){return this.isInInvalidState||!!this.currentPendingApprovalHash},isApproveRequired(){return!!this.approve},isInInvalidState(){return this.generalTxError||this.isLoading||this.invalidBalance||!this.quote||!this.$store.getters.isOnMainnet||!this.isValidSlippage},isLoading(){return Object.values(this.loading).some((e=>e))},isSwapUnavailable(){return this.isInInvalidState||this.isApprovalsPending||this.isApproveRequired},isValidSlippage(){return this.$store.getters.isValidSlippage()},ownedTokens(){return this.$store.getters.ownedTokens},pendingApprovals(){return this.$store.getters.pendingApprovals},price(){const e=this.quote;if(!e)return null;const{getPriceForToken:t}=this.$store.getters,s=$.Z.formatNumber(t(e.fromToken)),i=$.Z.formatNumber(t(e.toToken)),r=[s,i].find((e=>e.gt(0)))??new p.Z(0),a=r.gt(0)?`(${this.localizeCurrency(r)})`:"";return a},primaryButtonText(){return this.currentPendingApprovalHash?this.$t("views.swapView.processingApproval"):this.isLoading?this.$t("views.swapView.fetchingQuotes"):this.$t("general.next")},slippage(){return this.$store.getters.slippage},swappableTokens(){return this.$store.getters.swappableTokens},swapper(){return this.$store.getters.swapper},toBalance(){const e=this.determineTokenAddress(this.to.token),{chain:t}=this.to.token,s=this.$store.getters.getToken(e,t);return s?j.Z.tokenDecimal(s):null},toSymbol(){return this.to&&this.to.token?this.to.token.symbol:""},toTokenAmount(){const e=this.quote;return e?j.Z.withDecimals(this.quote.toTokenAmount,this.quote.toToken.decimals):null},tokenBeingSwapped(){if(!this.from.token)return null;const e=this.determineTokenAddress(this.from.token),{chain:t}=this.from.token;return this.$store.getters.getToken(e,t)}},watch:{chain:{deep:!0,handler(){this.$store.dispatch("setSlippageData",this.chain)}},from:{deep:!0,handler(){this.to.token&&(this.chain=this.from.token.chain,this.$store.dispatch("clearTxError"),this.$store.dispatch("createSwapper",this.chain),new p.Z(this.from.value).isGreaterThan(this.fromBalance)&&this.$store.dispatch("setTxError","insufficientFunds"),this.error=null,this.approve=null,this.updateQuote(),this.updateQueryParams(),(0,l.F2)(this.to.token?.chain,this.chain)||this.setInitialToken("to"),this.$store.commit("SET_CURRENT_SWAP",{fromToken:this.from.token,toToken:this.to.token}))}},pendingApprovals:{deep:!0,handler(e){const t=Object.keys(e).length>0;this.isApprovalsPending=t}},quote(e){this.$set(this.to,"value",e?j.Z.withDecimals(e.toTokenAmount,e.toToken.decimals):null)},slippage:{handler(){this.error=null,this.updateQuote(),this.updateQueryParams(),this.$store.commit("SET_CURRENT_SWAP",{fromToken:this.from.token,toToken:this.to.token})}},swappableTokens:{deep:!0,handler(){this.timesSwappableTokensUpdated+=1}},"to.token":{deep:!0,handler(){this.error=null,this.updateQuote(),this.updateQueryParams(),this.$store.commit("SET_CURRENT_SWAP",{fromToken:this.from.token,toToken:this.to.token})}}},beforeDestroy(){this.$store.dispatch("clearTxError"),clearInterval(this.interval)},created(){w.Z.sendStatsEvent(w.Z.types.IMPRESSION,"wt_swap_entered"),this.chain=JSON.parse(this.$route.query.chain);const e=this.$route.query.from,t=this.$route.query.to,s=this.$route.query.value||null;this.setInitialToken("from",e,s),this.setInitialToken("to",t),this.currentPendingApprovalHash&&this.updateQuote()},mounted(){this.$store.getters.getTimesLoaded("swappableTokens")||this.$store.dispatch("getSwappableTokens")},methods:{changeSlippage(e){this.slippage=e},async checkApprove(e){if(this.quote&&!this.error){this.loading.approve=!0;try{e?this.swapper.checkApprove({from:this.from,to:this.to},e).then((e=>{this.approve=e})):await this.swapper.swap({from:this.from,slippage:this.slippage,to:this.to}).then((()=>{setTimeout((()=>{Object.keys(this.pendingApprovals).length&&this.$store.dispatch("clearPendingApproval",{chain:this.chain,symbol:this.from.token.symbol})}),5e3),clearInterval(this.interval),this.approve=null})).catch((async e=>(this.$errorReporter.reportError(e),await this.swapper.checkApprove({from:this.from,to:this.to},e).then((e=>{this.approve=e})))))}catch(t){ee.error(t),this.$errorReporter.reportError(t),this.error=this.generateSwapErrorText(t),clearInterval(this.interval)}finally{this.loading.approve=!1}}},commenceQuoteUpdate(){if(this.loading.quote)this.pendingApprovals.length&&this.pendingApprovals.find((e=>e.token.address!==this.from.token?.address))&&(clearInterval(this.interval),this.getQuote());else if(clearInterval(this.interval),this.currentPendingApprovalHash){const e=5e3;this.interval=setInterval((()=>{this.getQuote()}),e)}else this.getQuote()},determineTokenAddress(e){if(e)return e.address===a.NA?a.L1:e.address},generateSwapErrorText(e){const t=(e.response?.data?.description??"").toLowerCase();return this.fromSymbol===this.toSymbol?this.$t("errors.swappingTheSameToken"):t.includes("insufficient funds")||t.includes("not enough")?this.$t("errors.generic.insufficientFunds"):t.includes("insufficient liquidity")?this.$t("errors.insufficientLiquidity"):t.includes("cannot estimate")?this.$t("errors.insufficientFunds"):this.$t("errors.generic.unknownError")},getApprove(){this.currentPendingApprovalHash?this.openApprovalDetails():this.isInInvalidState||this.$router.push({name:"ApproveConfirm",params:{approve:this.approve,contract:this.swapper.contract,token:this.from}})},async getQuote(){this.loading.quote=!0;try{const e=await this.swapper.getQuote({from:this.from,to:this.to});this.quote=this.repopulateQuote(e),this.$store.commit("SET_CURRENT_SWAP",this.quote),this.error=null,await this.checkApprove()}catch(e){ee.error(e),this.$errorReporter.reportError(e),this.quote=null,this.error=this.generateSwapErrorText(e)}this.loading.quote=!1},async getSwap(){if(!this.isSwapUnavailable){this.loading.swap=!0;try{const e=await this.swapper.swap({from:this.from,slippage:this.slippage,to:this.to});this.next(this.repopulateQuote(e))}catch(e){ee.error(e),this.$errorReporter.reportError(e),this.checkApprove(e),this.error=this.generateSwapErrorText(e)}finally{this.loading.swap=!1}}},localizeCurrency:$.Z.localizeCurrency,async next(e){w.Z.sendStatsEvent(w.Z.types.CLICK,"wt_swap_next_suc",{network:this.$store.getters.getNetworkName(this.chain)}),this.$store.commit("SET_CURRENT_SWAP",e);const{chain:t}=this,s=this.slippage;e.tx.chain=t,this.$router.push({name:"SwapConfirm",params:{chain:t,slippageMax:s,swap:e}})},openApprovalDetails(){const e=this.$store.getters.transactionDetailsUrl(this.currentPendingApprovalHash,this.chain);this.$platform.openNewTab(e)},refreshTx(){this.error=null,this.updateQuote()},repopulateQuote(e){return Object.assign({},e,{fromToken:this.from.token,toToken:this.to.token})},setInitialToken(e,t="",s=null){let i=this.$store.getters.getTokenViaSerializedKey(t,this.chain,!0);if(t&&i)this[e]={token:i,value:s};else{const t="from"===e?"to":"from";i=this.swappableTokens[(0,l.fh)(this.chain)].find((e=>!j.Z.isSameToken(e,this[t].token))),this[e]={token:i,value:s}}},switchTokens(){if(this.isLoading)return;const{from:e,to:t}=this;new p.Z(t.value).gt(j.Z.tokenDecimal(t.token))&&(t.value=new p.Z(j.Z.tokenDecimal(t.token))),this.from=t,this.to=e},updateQueryParams(){const e={};this.from.token&&(this.chain=this.from.token.chain,e.from=this.from.token.address,e.chain=JSON.stringify(this.from.token.chain)),this.from.value&&(e.value=this.from.value),this.to.token&&(e.to=this.to.token.address),this.$router.replace({path:this.$route.path,query:e}).catch((t=>{this.$errorReporter.reportError(t,{extraData:{path:this.$route.path,query:e}})}))},updateQuote:n((function(){if(this.canUpdateQuote)return this.hasQuoteBasis?void this.commenceQuoteUpdate():(this.quote=null,this.loading.quote=!1,void(this.error=null))}),1e3)}},se=te,ie=(0,m.Z)(se,i,r,!1,null,null,null),re=ie.exports},571:function(e,t,s){e.exports=s.p+"img/empty_error.761f6ded.svg"},80779:function(e,t,s){e.exports=s.p+"img/chevron_up.dbe760c6.svg"}}]);