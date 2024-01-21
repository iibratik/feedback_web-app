<template>
  <f7-card class="applic-card">
    <f7-card-header class="applic-card__title">
      <span class="work-type">{{ application.work }}</span>
      <ApplicStatus
        :color="
          application.priority === 'middle'
            ? 'orange'
            : application.priority === 'high'
            ? 'red'
            : application.priority === 'low'
            ? 'green'
            : 'blue'
        "
      >
        <template v-slot:body>
          {{
            application.priority === 'middle'
              ? 'сред'
              : application.priority === 'high'
              ? 'выс'
              : application.priority === 'low'
              ? 'низк'
              : 'неизвестно'
          }}</template
        >
      </ApplicStatus>
    </f7-card-header>
    <f7-card-content class="applic-card__body">
      <div class="body__left">
        <span class="occupant-name">Жилец</span>
        <span class="created-date">Создано в:</span>
      </div>
      <div class="body__right">
        <span class="occupant-name">{{ application.occupant }}</span>
        <span class="created-date">{{ application.createdAt }}</span>
      </div>
    </f7-card-content>
  </f7-card>
</template>

<script>
import ApplicStatus from './ApplicStatus.vue'
export default {
  components: {
    ApplicStatus,
  },
  props: {
    application: {
      typeof: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
