// W
const { W } = window

const handleNormalMode = (start, vue) => {
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
      mode === 'customize' ? start() : handleNormalMode(start, vue)
    },

    onCustomizeValueChange({ key, value }) {
      if (key === 'title') vue.$store.commit('changeTitle', value)
    },

    onNotif() {
      W.deleteAllNotifications()
    },
  })
}
