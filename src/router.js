import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'

import { store } from '@/store'

const EventCreate = () => import('@/views/EventCreate.vue')
const EventList = () => import('@/views/EventList.vue')
const EventDetails = () => import('@/views/EventDetails.vue')
const NotFound = () => import('@/views/NotFound.vue')
const NetworkIssue = () => import('@/views/NetworkIssue.vue')

export const routerHistory = createWebHistory()

export const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: true,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('event/fetchEvent', routeTo.params.id)
        .then((event) => {
          routeTo.params.event = event
          next()
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: '404', params: { resource: 'event' } })
          } else {
            next({ name: 'network-issue' })
          }
        })
    },
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: '404', params: { resource: 'page' } },
  },
]

const router = createRouter({
  history: routerHistory,
  routes,
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
