<template>
  <f7-card class="worker-card" >
    <f7-card-content class="worker-card__body">
      <div class="card-body">
        <img class="worker-photo" :src="worker.img" alt="" />
        <span class="worker-name">{{ worker.name }}</span>
        <span class="worker-status">{{ worker.job }}</span>
      </div>
    </f7-card-content>
  </f7-card>
</template>

<script>
export default {
  props: {
    worker: {
      typeof: Object,
    },
  },
  methods: {
  }
}
</script>
