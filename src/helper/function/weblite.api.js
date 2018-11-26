// W && R
const { W, R } = window

export default vue => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name }, creator, customize: { title } }) => {
    vue.$store.commit('changeWebliteRelatedData', {
      username: name,
      title,
      isAdmin: creator,
    })
  })

  /* Customization */
  W.onChangeValue(({ key, value }) => {
    if (key === 'title') vue.$store.commit('changeTitle', value)
  })
  W.changeCustomize(R.identity)

  /* ShareDB */
  W.mode === 'customize'
    ? W.start()
    : W.share.getFromServer([]).then(() => W.start())
}
