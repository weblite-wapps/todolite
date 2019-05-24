import dayjs from 'dayjs'

const {
  R
} = window

export const now = () => dayjs().format('D MMMM | HH:mm A')

export const calculateHeight = (difference) => {
  const differenceInNumber = Number(R.takeWhile(x => x !== 'p', difference))
  return `calc(100% - ${105 + differenceInNumber}px)`
}

export function debounce(fn, delay) {
  var timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

export const oneLineText = text => {
  const textFirstPart = R.head(R.split('\n', text))

  if (textFirstPart !== text) {
    return R.length(textFirstPart) > 39 ?
      R.slice(0, 36, textFirstPart) + '...' : textFirstPart + '...'
  }
  return R.length(text) > 39 ? R.slice(0, 36, text) + '...' : text
}