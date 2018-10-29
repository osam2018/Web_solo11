import Vue from 'vue'
import Router from 'vue-router'
import SidePage from './views/SidePage.vue'
import SidePage0 from './views/side-page-sub/SidePage0.vue'
import SidePage1 from './views/side-page-sub/SidePage1.vue'
import SidePage2 from './views/side-page-sub/SidePage2.vue'
import SidePage3 from './views/side-page-sub/SidePage3.vue'
import SidePage4 from './views/side-page-sub/SidePage4.vue'
import SidePage5 from './views/side-page-sub/SidePage5.vue'
import SidePage6 from './views/side-page-sub/SidePage6.vue'

Vue.use(Router)

export default new Router({
  routes: [

      {
          path: '/sidepage',
          name: 'sidePage',
          component: SidePage,
          children: [

              {
                  path: 'sidepage0',
                  component: SidePage0
              },
              {
                  path: 'sidepage1',
                  component: SidePage1
              },
              {
                  path: 'sidepage2',
                  component: SidePage2
              },
              {
                  path: 'sidepage3',
                  component: SidePage3
              },
              {
                  path: 'sidepage4',
                  component: SidePage4
              },
              {
                  path: 'sidepage5',
                  component: SidePage5
              },
              {
                  path: 'sidepage6',
                  component: SidePage6
              }
          ]
      }
  ]
})
