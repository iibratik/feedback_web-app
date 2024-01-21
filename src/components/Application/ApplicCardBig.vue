<template>
  <f7-card class="applic-options">
    <div class="applic-options__body">
      <div class="applic-options__left">
        <p class="option-label">Приоритет:</p>
        <p class="option-label">Статус:</p>
        <p class="option-label">Добавлено:</p>
        <p class="option-label">Дедлайн:</p>
        <p class="option-label">Жилец:</p>
      </div>
      <div class="applic-options__right">
        <span>
          <ApplicStatus
            class="first"
            :color="
              application.priority == 'middle'
                ? 'orange'
                : application.priority == 'high'
                ? 'red'
                : application.priority == 'low'
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
          </ApplicStatus></span
        >
        <span>{{ application.status }}</span>
        <span>{{ application.createdAt }}</span
        ><span>
          {{ application.deadLine }}
        </span>
        <span>{{ application.occupant }}</span>
      </div>
    </div>
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
    },
  },
}
</script>
