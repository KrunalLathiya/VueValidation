import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';

const config = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields', 
  delay: 0, 
  locale: 'en', 
  dictionary: null, 
  strict: true, 
  classes: false, 
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true,
  i18n: null,
  i18nRootKey: 'validations'
};

require('../src/assets/css/bootstrap.min.css');

Vue.use(VeeValidate, config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
