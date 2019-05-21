// W
const {
  W
} = window

const handleNormalMode = (start, vue) => {
  start()
  W.loadData().then(({
    user: {
      name
    },
    creator,
    customize: {
      title
    }
  }) => {
    vue.$store.commit('changeWebliteRelatedData', {
      username: name,
      title,
      isAdmin: creator,
    })
  })
  W.share.getFromServer([])
  vue.$store.commit('changeIsLoading', false)
}

export default vue => {
  W.setHooks({
    wappWillStart(start, error, {
      mode
    }) {
      mode === 'customize' ? start() : handleNormalMode(start, vue)
    },

    wappDidStart({
      mode
    }) {
      if (mode !== 'customize')
        W.deleteAllNotifications()
    },

    onCustomizeValueChange({
      key,
      value
    }) {
      if (key === 'title') vue.$store.commit('changeTitle', value)
    },
  })
}