// R, W
const { R, W } = window

export default (type, { id, text: newText }, { todos, username }) => {
  const text = type === 'add' ? newText : R.find(R.propEq('id', id), todos).text

  const content =
    type === 'add'
      ? [`Todo was added by ${username}`, text]
      : type === 'done'
      ? [`Todo was marked as done by ${username}`, text]
      : undefined

  if (content) W.sendNotificationToAll(...content)
}
