import { billApi } from '@/api'

export default {
  actions: {
    async fetchCurrency() {
      return await billApi.fetchData()
    }
  }
}
