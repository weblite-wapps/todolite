const { W, R } = window

const generateId = () => Math.floor(Math.random() * 1e15)
const dispatch = qlite => W.share.dispatch([], qlite, [])

// export const add = (text, name) =>
//   dispatch([
//     '__append',
//     [{ id: generateId(), text, functor: '', vit: false, creator: name }],
//   ])





export const add = (text, name, index = 0, vit = false) => {
  const id = generateId()
  dispatch([
    '__insert',
    [index, { id, text, functor: '', vit, creator: name }],
  ])
  return id
}




export const changeText = (id, text) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['text', text]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const changeFunctor = (id, name) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__mergeDeepLeft', [{ functor: name, vit: false }]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const changeVit = (id, vit) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['vit', vit]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const remove = id => dispatch(['__reject', [['__propEq', ['id', id]]]])




export const dragTodo = (text, name, id, newIndex, vit) => {
  // console.log("text ", text)
  // console.log("name ", name)
  // console.log("newIndex ", newIndex)
  // console.log("id ", id)
  // console.log("vit ", vit)
  remove(id)
  const newId = add(text, name, newIndex, vit)
  console.log("newId", newId)
  // changeVit(newId, vit)
} 
