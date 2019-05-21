// W
const {
  W
} = window

const handleNormalMode = (start, vue) => {
  start()
  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [{
      user: {
        name
      },
      creator,
      customize: {
        title
      },
    }, ] = data

    vue.$store.commit('changeWebliteRelatedData', {
      username: name,
      title,
      isAdmin: creator,
    })

    vue.$store.commit('changeIsDataFetched', true)
  })
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