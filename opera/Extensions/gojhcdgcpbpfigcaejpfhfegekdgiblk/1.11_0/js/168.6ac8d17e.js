"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[168],{63455:function(t,e,i){i.d(e,{Z:function(){return h}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"bg-black bg-opacity-40 bottom-0 fixed flex items-center justify-center left-0 right-0 top-0 z-10"},[s("div",{staticClass:"bg-modal flex flex-col items-center max-w-screen-sm mx-10 my-10 px-10 py-7 rounded-lg w-full"},["success"===t.icon?s("img",{staticClass:"h-14 mb-6 w-14",attrs:{src:i(54398)}}):t._e(),t.title?s("div",{staticClass:"break-words font-bold max-w-xs mb-4 text-xl"},[t._v(t._s(t.title))]):t._e(),t.message?s("div",{staticClass:"break-words leading-5 max-w-xs mb-6 opacity-60 text-base text-center text-dark-message"},[t._v(" "+t._s(t.message)+" ")]):t._e(),s("primary-button",{staticClass:"mt-2",attrs:{title:t.action},on:{click:t.runActionAndClose}})],1)])])},r=[],a=i(68461),n={name:"AlertDialog",components:{PrimaryButton:a.Z},props:{icon:{default:"",type:String}},data(){return{action:"",callback:null,message:"",showing:!1,title:""}},methods:{async runActionAndClose(){this.callback&&await this.callback(),this.showing=!1},show(t,e,i,s){this.title=t,this.message=e,this.showing=!0,this.action=i||this.$t("general.dismiss"),this.callback=s}}},o=n,l=i(1001),c=(0,l.Z)(o,s,r,!1,null,"6503e9d2",null),h=c.exports},67379:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"active:brightness-75 flex flex-row h-14 items-center px-4 py-2",on:{click:function(e){t.to?t.$router.push(t.to):t.$emit("click")}}},[i("div",{staticClass:"mr-4 w-4"},[t.icon?i("img",{staticClass:"me-4 text-2xl text-primary-100",attrs:{src:t.icon}}):t._e()]),i("div",[i("div",[t._v(t._s(t.title))]),t.subtitle?i("div",{staticClass:"text-xs",class:t.subtitleClass},[t._v(t._s(t.subtitle))]):t._e()]),i("div",{attrs:{ckass:"flex-grow"}}),t.loading?i("i",{staticClass:"animate-spin icon-spinner"}):t.appendIcon?i("i",{staticClass:"se-4 text-2xl text-primary-100",class:t.appendIcon}):t._e()])},r=[],a={name:"ListItem",components:{},props:{appendIcon:{default:"",type:String},icon:{default:"",type:String},loading:{type:Boolean},subtitle:{default:"",type:String},subtitleClass:{default:"",type:String},title:{default:"",type:String},to:{default:"",type:String}}},n=a,o=i(1001),l=(0,o.Z)(n,s,r,!1,null,null,null),c=l.exports},50113:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"fade"}},[t.showing?i("div",{staticClass:"bg-black bottom-0 fade fixed left-0 opacity-60 px-4 right-0 top-0 z-50",on:{click:t.close}}):t._e()]),i("transition",{attrs:{name:"slide"}},[t.showing?i("div",{staticClass:"-translate-x-1/2 bg-modal bottom-0 fixed left-1/2 max-h-screen max-w-screen-sm overflow-y-scroll p-4 rounded-t-3xl w-screen z-50"},[t._t("default")],2):t._e()])],1)},r=[],a={name:"BottomSheet",data(){return{showing:!1}},methods:{close(){this.$emit("close"),this.showing=!1},show(){this.showing=!0}}},n=a,o=i(1001),l=(0,o.Z)(n,s,r,!1,null,"70f89c6e",null),c=l.exports},99667:function(t,e,i){i.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("bottom-sheet",{ref:"sheet"},[i("div",[t.title?i("div",{staticClass:"font-bold mb-2 text-xl"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._l(t.items,(function(e){return i("div",{key:e.key,on:{click:function(i){return t.itemClicked(e.key)}}},["listItem"===e.type?i("list-item",{staticClass:"-mx-4",attrs:{"append-icon":e.appendIcon,icon:e.icon,loading:e.loading,subtitle:e.subtitle,"subtitle-class":e.subtitleClass,title:e.title},on:{click:function(i){return t.itemClicked(e.key)}}}):t._e(),"divider"===e.type?i("div",{staticClass:"border-positive-10 border-t my-2"}):t._e()],1)}))],2)])},r=[],a=i(50113),n=i(67379),o={name:"ListSheet",components:{BottomSheet:a.Z,ListItem:n.Z},data(){return{action:null,items:null,onItemClicked:null,title:null}},methods:{itemClicked(t){this.onItemClicked&&this.onItemClicked(t),this.$refs.sheet.close()},show(t,e=[],i,s){this.title=t,this.items=e,this.onItemClicked=i,this.action=s,this.$refs.sheet.show()}}},l=o,c=i(1001),h=(0,c.Z)(l,s,r,!1,null,null,null),d=h.exports},30168:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col"},[s("top-bar",{attrs:{"back-override":t.backOverride,title:t.$t("fio.register.title")}}),s("div",{staticClass:"flex flex-col flex-grow items-center mt-6 px-4"},[s("div",{staticClass:"flex-grow"}),s("div",{staticClass:"flex flex-col items-center mx-6"},[s("img",{staticClass:"h-24 w-24",attrs:{src:i(81741)}}),s("div",{staticClass:"mt-4 text-center text-emphasis-high text-xl"},[t._v(" "+t._s(t.$t("fio.register.description"))+" ")])]),s("opera-input",{staticClass:"mt-8 w-full",class:{"opacity-0":!!t.loading.register||t.registrationDone},attrs:{append:t.useOperaDomain?"@opera":null,dir:"ltr"},model:{value:t.handle,callback:function(e){t.handle=e},expression:"handle"}}),s("div",{staticClass:"flex-grow"}),s("div",{staticClass:"flex-grow"}),t.error?s("div",{staticClass:"mb-4 text-red text-sm"},[t._v(t._s(t.error))]):t._e(),t.useOperaDomain?t._e():s("div",{staticClass:"border border-modal flex justify-between mb-4 p-4 rounded-lg text-xs w-full"},[s("div",{staticClass:"text-emphasis-medium"},[t._v(t._s(t.$t("general.transactionFee")))]),s("div",[t._v(t._s(t.txFee))])]),s("alert-dialog",{ref:"completeDialog",attrs:{icon:"success"}}),s("alert-dialog",{ref:"errorDialog"}),s("list-sheet",{ref:"domainSheet"}),s("primary-button",{staticClass:"my-4 w-full",class:{"opacity-0":!!t.loading.register||t.registrationDone},attrs:{disabled:!!t.error||!!t.isLoading||!t.isValidFioHandle,loading:t.isLoading,title:t.$t("fio.register.registerButton")},on:{click:t.register}})],1),t.loading.register?s("spinning-loader",{staticClass:"bg-background bg-opacity-80 bottom-0 fixed h-full left-0 right-0 top-0 z-20"}):t._e()],1)},r=[],a=i(72294),n=i(81732),o=i(63455),l=i(99667),c=i(17482),h=i(68461),d=i(25e3),u=i(56258),p=i(75619),m=i(17731),g=i(98180),f=i(79818),x=i(25108),w={name:"FioRegister",components:{AlertDialog:o.Z,ListSheet:l.Z,OperaInput:c.Z,PrimaryButton:h.Z,SpinningLoader:d.Z,TopBar:p.Z},data(){return{backOverride:this.$route.params?.backOverride,error:null,handle:"",loading:{preparingRegistration:!1,register:!1},preparedTx:null,registrationDone:!1,successOverride:this.$route.params?.successOverride,timers:{preparingRegistration:null},useOperaDomain:!0}},computed:{balance(){return this.$store.getters.getToken("",a.fr.FIO)?.balance},freeOperaDomainAvailable(){return"false"===this.$route.query.hasOperaDomain},handleWithDomain(){return this.useOperaDomain?`${this.handle}@opera`:this.handle},isLoading(){return Object.values(this.loading).some((t=>!!t))},isValidFioHandle(){const t=(0,n.GB)(this.handleWithDomain);return t},publicKey(){const{accountsByCoinType:t}=this.$store.getters;return t[a.Dc.FIO]},txFee(){if(!this.preparedTx)return"...";const t=g.Z.withDecimals(this.preparedTx.token.amount,this.preparedTx.token.decimals);return`${t} FIO`}},watch:{handle(){this.tryPrepareRegistration()},preparedTx(t){t.token.amount>this.balance&&(this.error=this.$t("errors.generic.insufficientFunds"))},useOperaDomain(){Object.values(this.timers).forEach((t=>clearTimeout(t))),Object.keys(this.loading).forEach((t=>this.loading[t]=!1)),this.handle=""}},mounted(){this.useOperaDomain=!0,u.Z.sendStatsEvent(u.Z.types.IMPRESSION,"wt_fio_register_entered")},methods:{async connectWithDefaults(){await this.$store.dispatch("getFioConnectableAddresses");const t=this.$store.getters.fioConnectableAddresses;if(t.length){const e=t.filter((t=>t.default));e.length&&await f.Z.fioAddAddresses(this.publicKey,this.handleWithDomain,e)}},async register(){if(this.isLoading)return;this.loading.register=!0;let t=!1;this.$authenticator.lockAuthenticatorWithPassword();try{let i;i=this.preparedTx&&!this.useOperaDomain?await f.Z.confirmTransaction(this.preparedTx.txId):await f.Z.fioRegisterOperaHandle(this.publicKey,this.handleWithDomain),i?(await this.waitForRegisterToFinish(3e4),t=!0,this.registrationDone=!0):this.showErrorDialog()}catch(e){this.$errorReporter.reportError(e),this.showErrorDialog()}finally{if(t)try{await this.connectWithDefaults()}catch(e){x.error("Error connecting new FIO address with defaults"),this.$errorReporter.reportError(e)}finally{this.loading.register=!1,u.Z.sendStatsEvent(u.Z.types.IMPRESSION,"wt_fio_register_completed",{type:this.useOperaDomain?"opera":"custom"}),this.showCompleteDialog()}}this.$authenticator.clearSecretAndUnlockAuthenticator()},showCompleteDialog(){this.$refs.completeDialog.show(this.handleWithDomain,this.$t("fio.register.successTitle"),this.$t("general.ok").toUpperCase(),(()=>{"function"===typeof this.successOverride?this.successOverride():this.$router.replace({name:"FioConnect",query:{handle:this.handleWithDomain}})}))},showDomainSheet(){if(this.isLoading)return;const t=this.useOperaDomain?"icon-checkmark":null,e=this.useOperaDomain?null:"icon-checkmark";this.$refs.domainSheet.show(this.$t("fio.chooseActiveDomain"),[{appendIcon:t,key:"opera",subtitle:this.$t("general.free"),subtitleClass:"text-green",title:"@opera",type:"listItem"},{appendIcon:e,key:"custom",title:"Custom domain",type:"listItem"}],(t=>{this.useOperaDomain="opera"===t}))},showErrorDialog(){this.$refs.errorDialog.show(this.$t("errors.generic.oops"),this.$t("errors.generic.somethingWentWrong"))},tryPrepareRegistration(){this.isValidFioHandle&&(this.loading.preparingRegistration=!0,clearTimeout(this.timers.preparingRegistration),this.timers.preparingRegistration=setTimeout((async()=>{try{this.error=null;const t=this.handleWithDomain,e=0===(await m.Z.checkAvailability(t)).is_registered;e?this.useOperaDomain||(this.preparedTx=await f.Z.fioEstimateHandleRegistration(this.publicKey,t)):this.error=this.$t("fio.errors.handleNotAvailable")}catch(t){this.$errorReporter.reportError(t)}finally{this.loading.preparingRegistration=!1}}),1e3))},async waitForRegisterToFinish(t){const e=Date.now();try{if(await this.$store.dispatch("fetchAllPublicAddressesByHandle",this.handleWithDomain),this.$store.getters.allPublicAddressesByHandle(this.handleWithDomain).length)return Promise.resolve(!0);throw new Error("No public FIO addresses")}catch(i){await new Promise((t=>setTimeout(t,5e3)));const s=Date.now()-e;s>=t?(this.$errorReporter.reportError(i),this.showErrorDialog()):await this.waitForRegisterToFinish(t-s)}}}},b=w,v=i(1001),y=(0,v.Z)(b,s,r,!1,null,null,null),k=y.exports},81741:function(t,e,i){t.exports=i.p+"img/fio.9ee8d805.svg"}}]);