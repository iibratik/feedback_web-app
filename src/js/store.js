import { createStore } from 'framework7/lite'

// create store
const store = createStore({
  state: {
    applications: [
      {
        id: 0,
        priority: 'middle',
        occupant: 'Улугбек',
        createdAt: '12/04/2021',
        work: 'Починить кран',
        applicationStatus: 'done',
        status: 'В ожидании',
        comment:'Some comment',

        deadLine: '21/04/2021',
      },
      {
        id: 1,
        priority: 'middle',
        occupant: 'Улугбек',
        createdAt: '12/04/2021',
        work: 'Починить кран',
        applicationStatus: 'done',
        status: 'В ожидании',
        comment:'Some comment',

        deadLine: '21/04/2021',
      },
      {
        id: 3,
        priority: 'middle',
        occupant: 'Улугбек',
        createdAt: '12/04/2021',
        work: 'Починить кран',
        applicationStatus: 'done',
        status: 'В ожидании',
        deadLine: '21/04/2021',
        comment:'Some comment',

      },
      {
        id: 4,
        priority: 'high',
        occupant: 'Улугбек',
        createdAt: '12/04/2021',
        work: 'Починить кран',
        applicationStatus: 'done',
        status: 'В ожидании',
        deadLine: '21/04/2021',
        comment:'Some comment',

      },
      {
        id: 5,
        priority: 'low',
        occupant: 'Artur',
        createdAt: '12/04/2021',
        work: 'Исправить пол',
        applicationStatus: 'reject',
        status: 'В ожидании',
        deadLine: '21/04/2021',
        comment:'Some comment',
      },
      {
        id: 6,
        priority: 'high',
        occupant: 'Adyl, Azhar, Arthur',
        createdAt: '12/04/2021',
        work: 'Проверить отопление',
        applicationStatus: 'done',
        status: 'В ожидании',
        deadLine: '21/04/2021',
        comment:'Some comment',
      },
      {
        id: 6,
        priority: 'high',
        occupant: 'Adyl, Azhar, Arthur',
        createdAt: '12/04/2021',
        work: 'Проверить отопление',
        applicationStatus: 'done',
        status: 'В ожидании',
        deadLine: '21/04/2021',
        comment:'Some comment',
      },
    ],
    user: {
      img: '../../../assets/images/Worker_logo.svg',
      name: 'Rakhmet',
      job: 'Работник',
    },

  },
  getters: {
    getApplications({ state }) {
      return state.applications
    },
    getUser({ state }) {
      return state.user
    },
    getRejectedApplic({ state }) {
      return state.applications.filter(
        (application) => application.applicationStatus === 'reject'
      ).length
    },
    getDoneApplic({ state }) {
      return state.applications.filter(
        (application) => application.applicationStatus === 'done'
      ).length
    },
  },
  actions: {
    getApplicById({ state }, id) {
      return state.applications.find((applic) => applic.id == Number(id))
    },
  },
})
export default store
