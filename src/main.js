import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
//We are creating new event bus here

new Vue({
  render: (h) => h(App),
}).$mount("#app");
