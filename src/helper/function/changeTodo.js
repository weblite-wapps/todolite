// helper
import { now } from './time'
// W & R
const { W, R } = window 
const generateId = () => Math.floor(Math.random() * 1e15)
const dispatch = qlite => W.share.dispatch([], qlite, [])

export const add = (text, name, index = -1, vit = false, functor = '', created_at = now() ) =>
  dispatch([
    '__insert',
    [index, { id: generateId(), text, functor, vit, creator: name, created_at }],
  ])

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

const findLoc = (id, todos) => R.findIndex(R.propEq('id', id))(todos)

export const dragTodo = (todo, allTodos, idOfDestTodo) => {
  W.analytics("DRAG_AND_DROP_TODO")
  const { id, text, functor, vit, creator } = todo
  const index = findLoc(idOfDestTodo, allTodos)
  dispatch([
    '__compose', [
      ['__insert',
        [index, { id, text, functor, vit, creator }]],
      ['__reject', [['__propEq', ['id', id]]]]
    ]
  ])
} 
