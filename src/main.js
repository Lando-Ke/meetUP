import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDap5MRorfwI5qv9sNyT94mWzsUJ4KFehs',
      authDomain: 'meetup-802cf.firebaseapp.com',
      databaseURL: 'https://meetup-802cf.firebaseio.com',
      projectId: 'meetup-802cf',
      storageBucket: 'meetup-802cf.appspot.com'
    })
    this.$store.dispatch('loadMeetups')
  }
})
