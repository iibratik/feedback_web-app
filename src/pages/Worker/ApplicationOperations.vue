<template>
  <f7-page name="orderOperations">
    <div class="order-page">
      <WorkerCard :worker="user" />
      <ApplicCardBig :application="currentApplic" />
      <div class="order-btns">
        <showeMore popupTitle="Коментарий">
          <template v-slot:btnBody>
            <div class="showup-btn-body">
              <span>Подробности</span>
              <f7-icon material="expand_more"></f7-icon>
            </div>
          </template>
          <template v-slot:popupBody>
            <p>Тут Коментарий к заявке</p>
          </template>
        </showeMore>
        <div class="waiting-btns" v-if="currentApplic.status == 'В ожидании'">
          <GreenBtn
            @click="currentApplic.status = 'Взят в работу'"
            class="order-green-btn"
          >
            <template v-slot:body>
              <img src="../../assets/images/user-check.svg" alt="User check" />
              <span>Принять заказ</span>
            </template>
          </GreenBtn>
          <RedBtn @click="f7router.back()" class="order-green-btn">
            <template v-slot:body>
              <f7-icon material="done" color="white"></f7-icon>
              <span>Закрыть заявку</span>
            </template>
          </RedBtn>
        </div>
        <div v-if="currentApplic.status == 'Взят в работу'" class="finish-btns">
          <GreenBtn
            @click="currentApplic.status = 'В ожидании'"
            class="order-green-btn"
          >
            <template v-slot:body>
              <img src="../../assets/images/user-check.svg" alt="User check" />
              <span>Завершить заказ</span>
            </template>
          </GreenBtn>
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
import WorkerCard from '../../components/Worker/WorkerCard.vue'
import ApplicCardBig from '../../components/Application/ApplicCardBig.vue'
import showeMore from '../../components/Btns/showeMore.vue'
import GreenBtn from '../../components/Btns/greenBtn.vue'
import RedBtn from '../../components/Btns/redBtn.vue'
import store from '../../js/store'

export default {
  components: { WorkerCard, ApplicCardBig, showeMore, GreenBtn, RedBtn },
  props: {
    applicationId: Number,
    f7router: Object,
  },
  setup() {
    const user = store.getters.getUser.value
    return { user }
  },
  data() {
    return {
      currentApplic: {},
    }
  },

  methods: {
    async getCurrentApplic() {
      this.currentApplic = await store.dispatch(
        'getApplicById',
        this.applicationId
      )
    },
  },
  mounted() {
    this.getCurrentApplic()
  },
}
</script>
