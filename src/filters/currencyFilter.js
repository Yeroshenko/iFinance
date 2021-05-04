export default (value, currency = 'UAH') => {
  // WTF????
  //I don't know why this code is not working
  // FIXME: need use Intl.NumberFormat
  // return new Intl.NumberFormat('uk_UA', { style: 'currency', currency }).format(value)
  return `${value} ${currency}`
}
