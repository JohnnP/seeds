import {div, button, span} from '@cycle/dom'
import xs from 'xstream'

const DECREASE = "Decrease"
const INCREASE = "Increase"

const intent = ({DOM}) => {
  const decrease$ = DOM.select('.decrease').events('click')
  const increase$ = DOM.select('.increase').events('click')

  return {
    decrease$,
    increase$
  }
}

const model = actions => {
  const count$ = xs.merge(actions.decrease$.mapTo(-1), actions.increase$.mapTo(1))
    .fold((acc, cur) => acc + cur, 0)

  return {
    count$
  }
}

const view = state => {
  const decreaseView$ = xs.of(button('.decrease', DECREASE))
  const countView$ = state.count$
    .map(count => xs.of(span('.count', count)))
    .flatten()
  const increaseView$ = xs.of(button('.increase', INCREASE))

  return xs.combine(decreaseView$, countView$, increaseView$)
    .map(([decreaseView, countView, increaseView]) => div('.app', [decreaseView, countView, increaseView]))
}  

export function App (sources) {
  const actions = intent(sources)
  const state = model(actions)
  const view$ = view(state)

  return {
    DOM: view$
  }
}
