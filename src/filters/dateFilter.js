export default (value, format = 'date') => {
  let options = {}

  if (format === 'time') {
    options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
  }

  if (format === 'date') {
    options = {
      weekday: 'short',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(value)
}
