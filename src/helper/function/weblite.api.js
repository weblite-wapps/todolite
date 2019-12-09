// W
const { W } = window

const handleNormalMode = (start, vue) => {
  start()
  Promise.all([W.initializeAsync(), W.shareDB.getFromServer([])]).then(() => {
    const { title } = W.wapp.getInput()
    const [adminId] = W.wapp.getAdmins()

    const { username, id } = W.user.getInfo()

    vue.$store.commit('changeWebliteRelatedData', {
      username,
      title,
      isAdmin: adminId === id,
    })

    vue.$store.commit('changeIsDataFetched', true)
  })
}

const handleCustomizeMode = (start, vue) => {
  vue.$store.commit('changeIsDataFetched', true)
  start()
}

export default vue => {
  W.setHooks({
    wappWillStart(start, _, { mode }) {
      mode === 'customize'
        ? handleCustomizeMode(start, vue)
        : handleNormalMode(start, vue)
    },

    wappDidStart({ mode }) {
      if (mode !== 'customize') W.notifications.deleteAll()
    },

    onCustomizeValueChange({ key, value }) {
      if (key === 'title') vue.$store.commit('changeTitle', value)
    },
  })
}
