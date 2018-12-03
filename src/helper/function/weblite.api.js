// W && R
const { W, R } = window

const handleCustomize = (start, vue) => {
  W.onChangeValue(({ key, value }) => {
    if (key === 'title') vue.$store.commit('changeTitle', value)
  })

  W.changeCustomize(R.identity)

  start()
}

const handleNormal = (start, vue) => {
  W.loadData().then(({ user: { name }, creator, customize: { title } }) => {
    vue.$store.commit('changeWebliteRelatedData', {
      username: name,
      title,
      isAdmin: creator,
    })
  })

  W.share.getFromServer([]).then(start)
}

export default vue => {
  W.setHooks({
    wappWillStart(start, error, { mode }) {
      mode === 'customize'
        ? handleCustomize(start, vue)
        : handleNormal(start, vue)
    },

    onNotif() {
      W.deleteAllNotifications()
    },
  })
}
