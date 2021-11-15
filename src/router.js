import {createRouter, createWebHistory} from 'vue-router' 

import Page from "@/pages/Page.vue";
import TestTable from '@/pages/TestTable.vue';
import TestSwiper from '@/pages/TestSwiper.vue';
// import CarfastSlider from '@/pages/Carfast-slider.vue';

const routes = [
  {
    path: '',
    name: TestTable,
    component: TestTable
  },
  {
    path: '/page',
    name: Page,
    component: Page
  },
  {
    path: '/go',
    name: TestSwiper,
    component: TestSwiper
  },
]

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes 
}) 
 
export default router