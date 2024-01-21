<template>
  <f7-page ptr :ptr-mousewheel="true" name="mainCard" class="container page">
    <f7-block-title class="main__title">Активные заявки:</f7-block-title>
    <div class="applic__body">
      <div class="applic-body__left">
        <ApplicCard
          v-for="item in applications"
          :key="item.id"
          :application="item"
          @click="goToApplication(item)"
        />
      </div>
      <div class="applic-body__right">
        <div class="applic-status-count">
          <div class="applic-status-count__body">
            <p class="applic-count">Заявки:</p>
            <span>{{ applications.length }}</span>
          </div>
          <div class="applic-status-count__body">
            <p class="applic-count">Выполнено:</p>
            <span>{{ doneAppliCount }}</span>
          </div>
          <div class="applic-status-count__body">
            <p class="applic-count">Отклонено:</p>
            <span>{{ rejectAppliCount }}</span>
          </div>
        </div>
        <WorkerCard :worker="worker" />
      </div>
    </div>
  </f7-page>
</template>

<script>
import ApplicCard from '../../components/Application/ApplicCard.vue'
import WorkerCard from '../../components/Worker/WorkerCard.vue'
import store from '../../js/store'

export default {
  setup() {
    const rejectAppliCount = store.getters.getRejectedApplic.value
    const doneAppliCount = store.getters.getDoneApplic.value
    const applications = store.getters.getApplications.value
    const worker = store.getters.getUser.value
    return { worker, applications, rejectAppliCount, doneAppliCount }
  },
  props: {
    f7router: Object,
  },
  methods: {
    goToApplication(applic) {
      if (applic.status == 'В ожидании') {
        this.f7router.navigate(`/admin/25/application/${applic.id}`, {
          props: {
            applicationId: applic.id,
          },
        })
      }
    },
  },
  components: {
    ApplicCard,
    WorkerCard,
  },
}
</script>
