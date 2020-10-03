<template>
  <div class="login-page">
    <ShadowBlock>
      <h1 class="auth-page__title">iFinance</h1>
      <LoginForm v-if="this.$route.fullPath === '/login'" @login="loginHandler" />
      <RegisterForm v-else-if="this.$route.fullPath === '/register'" @register="registerHandler" />
    </ShadowBlock>
  </div>
</template>

<script>
import messages from '@/utils/messages'

import ShadowBlock from '@/components/ShadowBlock'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
  components: { ShadowBlock, LoginForm, RegisterForm },

  methods: {
    redirectToHome() {
      if (!this.$store.getters.authError) {
        this.$router.push('/')
      }
    },
    async loginHandler(data) {
      await this.$store.dispatch('login', data)
      this.redirectToHome()
    },
    async registerHandler(data) {
      this.$store.dispatch('register', data)
      this.redirectToHome()
    }
  },

  computed: {
    error() {
      return this.$store.getters.authError
    }
  },

  watch: {
    error(errorMessage) {
      this.$vs.notification({
        duration: 'none',
        position: 'top-right',
        flat: true,
        border: 'danger',
        color: 'danger',
        title: 'Ошыбка авторизации',
        text: messages[errorMessage] || 'Что-то пошло не по плану'
      })
    }
  }
}
</script>

<style lang="sass">
.login-page
  flex: 1 1
  display: flex
  align-items: center
  justify-content: center
  height: 100vh

.auth-page__title
  text-align: center

.auth-form__dialog
  margin: 16px auto 0
  font-size: 14px
.auth-form
  min-width: 350px
  display: flex
  flex-direction: column

.auth-form__input
  margin: 12px 0
  width: 100%
  font-size: 16px

  .vs-input__label
    font-size: 14px

  .vs-input
    width: 100%

.auth-form__checkbox
  margin: 4px 0

.auth-form__link
  font-weight: 500
  margin-left: 8px
  color: rgba(var(--vs-primary), 1)
  text-decoration: none
  &:hover
    text-decoration: underline
</style>
