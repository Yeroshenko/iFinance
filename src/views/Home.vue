<template>
  <div class="home-page">
    <PageTitle>Home</PageTitle>
    <!-- TODO: ADD LOADER -->
    <div v-if="!isLoading">
      <HomeBill :rates="currency.rates" />
      <HomeCurrency />
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  data: () => ({
    isLoading: true,
    currency: null
  }),

  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.isLoading = false
  },

  components: { HomeBill, HomeCurrency, PageTitle }
}
</script>
