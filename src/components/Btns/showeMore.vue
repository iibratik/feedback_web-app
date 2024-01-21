<template>
  <div>
    <f7-button class="btn-showUp-body" large popup-open=".popup-show">
      <slot name="btnBody"></slot>
    </f7-button>

    <f7-popup class="popup-show" :title="popupTitle" swipe-to-close>
      <f7-page>
        <f7-navbar>
          <f7-nav-right>
            <f7-link popup-close>Закрыть</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div
          class="display-flex justify-content-center align-items-center"
          style="height: 100%"
        >
          <slot name="popupBody"></slot>
        </div>
      </f7-page>
    </f7-popup>
  </div>
</template>

<script>
export default {
  props: {
    popupTitle: String,
  },
}
</script>
