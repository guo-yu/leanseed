'use strict';

// Global dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Local dependencies
import routes from './routes'

// App Styles
import '../css/app.css'

// Init Vue app
Vue.use(VueRouter)

const router = new VueRouter()

router.map(routes)
router.beforeEach(() => window.scrollTo(0, 0))
router.start(Vue.extend({}), '#app')
