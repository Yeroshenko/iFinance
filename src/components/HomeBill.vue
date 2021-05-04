<template>
  <div class="home-bill">
    <ShadowBlock>
      <div class="home-bill__title">Счет в валюте</div>
      <span v-for="cur of currencies" :key="cur">
        {{ getCurrency(cur) | currency(cur) }}
      </span>
    </ShadowBlock>
  </div>
</template>

<script>
import ShadowBlock from '@/components/ShadowBlock'

export default {
  props: ['rates'],
  components: { ShadowBlock },

  data: () => ({
    currencies: ['UAH', 'RUB', 'USD', 'EUR']
  }),

  mounted() {
    console.log(this.rates)
    console.log(this.currencies)
  },

  computed: {
    base() {
      return this.$store.getters.info.bill / (this.rates['UAH'] / this.rates['EUR'])
    }
  },

  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency])
    }
  }
}
</script>
