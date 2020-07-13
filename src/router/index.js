import Vue from 'vue'
import VueRouter from 'vue-router'
import testPage from "@/views/testPage";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'testPage',
		component: testPage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
