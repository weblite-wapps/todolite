// R, W
const {
  R,
  W
} = window

export default (type, {
  id,
  text: newText
}, {
  todos,
  username
}) => {
  const text = type === 'add' ? newText : R.find(R.propEq('id', id), todos).text

  const content =
    type === 'add' ?
    [`Added by ${username}`, text] :
    type === 'done' ?
    [`Done by ${username}`, text] :
    undefined

  if (content) W.sendNotificationToAll(...content)
}