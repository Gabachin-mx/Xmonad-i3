"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[385],{94232:function(t,e,i){i.d(e,{Z:function(){return r}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex items-center justify-center relative"},[i("input",{staticClass:"absolute appearance-none bg-white block border-4 h-6 rounded-full toggle-checkbox w-6",class:t.disabled?"cursor-not-allowed":"cursor-pointer",attrs:{name:"toggle",type:"checkbox"},domProps:{checked:t.checked}}),i("label",{staticClass:"flex h-6 relative select-none w-12",class:t.disabled?"cursor-not-allowed":"cursor-pointer",attrs:{for:"toggle"}},[i("span",{staticClass:"absolute h-full left-0 rounded-full top-0 w-full",class:{"bg-accent":t.checked,"bg-dark-N20":!t.checked}}),i("span",{staticClass:"absolute bg-white border-2 duration-300 ease-in-out flex h-6 items-center justify-center rounded-full transition-transform w-6",class:{"right-0":t.checked,"border-accent":t.checked,"border-dark-N20":!t.checked}})])])},o=[],n={name:"OperaToggle",props:{checked:{default:!1,type:Boolean},disabled:{default:!1,type:Boolean}}},l=n,a=i(1001),c=(0,a.Z)(l,s,o,!1,null,null,null),r=c.exports},385:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col leading-relaxed tracking-wide"},[i("top-bar",{attrs:{"test-parent-name":"settings_notifications_view",title:t.$t("general.notificationSettings")}}),i("div",{staticClass:"mt-5"},t._l(t.options,(function(e){return i("li",{key:e.key,staticClass:"cursor-pointer list-none px-14 py-5",class:e.addClass},[i("div",{staticClass:"border-b border-dark-N20 flex flex-row pb-4"},[i("div",{staticClass:"flex flex-col"},[i("div",{staticClass:"font-semibold"},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"text-dark-N77 text-sm"},[t._v(" "+t._s(e.description)+" ")])]),i("div",{staticClass:"flex-grow"}),"toggle"===e.type?i("div",{staticClass:"mt-2 text-dark-N77"},[i("opera-toggle",{class:"t-settings_notifications_view-"+e.key,attrs:{checked:e.checked}})],1):t._e()])])})),0)],1)},o=[],n=i(94232),l=i(75619),a={name:"SettingsNotificationsView",components:{OperaToggle:n.Z,TopBar:l.Z},data(){return{options:[{checked:!0,description:this.$t("views.settingsNotificationsView.option1.description"),key:"transactions",title:this.$t("views.settingsNotificationsView.option1.title"),type:"toggle"},{checked:!0,description:this.$t("views.settingsNotificationsView.option2.description"),key:"prices",title:this.$t("views.settingsNotificationsView.option2.title"),type:"toggle"},{checked:!0,description:this.$t("views.settingsNotificationsView.option3.description"),key:"gas",title:this.$t("views.settingsNotificationsView.option3.title"),type:"toggle"},{checked:!1,description:this.$t("views.settingsNotificationsView.option4.description"),key:"product_updates",title:this.$t("views.settingsNotificationsView.option4.title"),type:"toggle"}]}}},c=a,r=i(1001),d=(0,r.Z)(c,s,o,!1,null,null,null),p=d.exports}}]);