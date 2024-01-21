import WorkerApplications from '../pages/Worker/Applications.vue'
import NotFoundPage from '../pages/404.vue'
import WorkerOrderOperations from '../pages/Worker/ApplicationOperations.vue'
import AdminApplications from '../pages/Admin/Applications.vue'
import AdminApplicationOperations from '../pages/Admin/ApplicationOperations.vue';


var routes = [
  {
    path: '/',
    component: NotFoundPage,
  },
  {
    path: '/admin/:adminId/applications',
    component: AdminApplications,
  },
  {
    path: '/admin/:adminId/application/:applicationId',
    component: AdminApplicationOperations,
  },
  {
    path: '/worker/:workerId/applications',
    component: WorkerApplications,
  },
  {
    path: '/worker/:workerId/application/:applicationId',
    component: WorkerOrderOperations,
  },


  {
    path: '(.*)',
    component: NotFoundPage,
  },
]

export default routes
