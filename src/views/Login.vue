<template>
  <div class="login-page">
    <ShadowBlock>
      <h1 class="auth-page__title">iFinance</h1>
      <form class="auth-form" @submit.prevent="handleSubmit">
        <vs-input
          v-model="email"
          primary
          name="email"
          class="auth-form__input"
          placeholder="E-mail"
        >
          <template #icon>
            <AtIcon class="svg-icon" />
          </template>
          <!-- validation messages -->
          <template v-if="$v.email.$dirty && $v.email.$error" #message-danger>
            <span v-if="!$v.email.email"> Email не коректный </span>
            <span v-else-if="!$v.email.required"> Введите email </span>
          </template>
        </vs-input>
        <vs-input
          v-model="password"
          primary
          name="password"
          class="auth-form__input"
          placeholder="Пароль"
          type="password"
        >
          <template #icon>
            <LockIcon class="svg-icon" />
          </template>
          <!-- validation messages -->
          <template v-if="$v.password.$dirty && $v.password.$error" #message-danger>
            <span v-if="!$v.password.minLength">
              Минимальная длина {{ $v.password.$params.minLength.min }} символов
            </span>
            <span v-else-if="!$v.email.required"> Введите пароль </span>
          </template>
        </vs-input>
        <vs-button size="large">Войти</vs-button>

        <div class="auth-form__dialog">
          Нет аккаунта
          <router-link to="/register" class="auth-form__link">
            Зарегестрироавться
          </router-link>
        </div>
      </form>
    </ShadowBlock>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

import ShadowBlock from '@/components/ShadowBlock'
import LockIcon from '@/assets/icons/lock.svg'
import AtIcon from '@/assets/icons/at.svg'

export default {
  data: () => ({
    email: '',
    password: '',
    remember: true
  }),

  components: { ShadowBlock, LockIcon, AtIcon },

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },

  methods: {
    handleSubmit() {
      console.log(this.$v)
      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      alert('OK')
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
  min-width: 400px
  display: flex
  flex-direction: column

.auth-form__input
  margin: 12px 0
  width: 100%
  font-size: 16px

.auth-form__input input
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
