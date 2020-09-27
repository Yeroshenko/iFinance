<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from '@/utils/messages'

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },

  watch: {
    error(fbError) {
      this.$vs.notification({
        position: 'top-right',
        flat: true,
        border: 'danger',
        color: 'danger',
        title: 'Ошыбка авторизации',
        text: messages[fbError.code] || 'Что-то пошло не по плану'
      })
    }
  }
}
</script>

<style lang="sass">
.empty-layout
  min-height: 100vh
  // background-color: rgba(0,0,0, 0.05)
  background-color: rgba(var(--vs-gray-1), 1)
</style>
