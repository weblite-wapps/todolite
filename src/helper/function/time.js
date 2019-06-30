import moment from 'moment-timezone'

const {
  R
} = window

export const now = () => moment().tz('Asia/Tehran').format('D MMMM | HH:mm A')

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