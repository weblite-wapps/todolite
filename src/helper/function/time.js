import dayjs from 'dayjs'

const { R } = window

export const now = () => dayjs().format('D MMMM | H:mm A')

export const calculateHeight = (difference) => {
    const differenceInNumber = Number(R.takeWhile(x => x !== 'p' , difference))
    return `calc(100% - ${105 + differenceInNumber}px)`
}