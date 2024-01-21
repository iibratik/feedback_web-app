<template>
  <f7-app theme="ios" v-bind="f7params">
    <f7-view></f7-view>
  </f7-app>
</template>
<script type="module">
import routes from '../js/routes'
import store from '../js/store'

export default {
  setup() {
    const f7params = {
      store: store,
    }
    return {
      f7params,
    }
  },
  data() {
    return {
      // app params
      f7params: {
        name: 'Feedback',
        // specify routes for app
        routes: routes,
        store: store,
        // ...
      },
    }
  },
}
</script>
