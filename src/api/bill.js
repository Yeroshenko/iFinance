export const billApi = {
  async fetchData() {
    const key = process.env.VUE_APP_FIXER
    const res = await fetch(
      `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,UAH,EUR,RUB`
    )
    return await res.json()
  }
}
