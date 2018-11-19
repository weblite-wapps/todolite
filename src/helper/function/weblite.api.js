// W && R
const { W } = window

export default vueRoot => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name } }) => {
    vueRoot.name = name
  })

  /* ShareDB */
  // get votes from shareDB Server
  W.share.getFromServer([]).then(() => W.start())
  // shareDB sunbscription
  W.share.subscribe(todos => {
    vueRoot.todos = todos || []
  })
}
