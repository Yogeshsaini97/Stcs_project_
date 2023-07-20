import App from './App.ce.vue'
import ProgressBar from './Components/Global/ProgressBar.ce.vue'
import { defineCustomElement } from './defineCustomElementWithStyles'

customElements.define(
  'stcs-project',defineCustomElement(App, {
    // plugins: [store,router] 
   } ,{ProgressBar}))
