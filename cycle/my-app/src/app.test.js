import assert from 'assert'
import {App} from './app'
import {mockTimeSource} from '@cycle/time'
import {mockDOMSource, div, button, span} from '@cycle/dom'
import chai from 'chai'
const expect = chai.expect
chai.use(require('chai-snabbdom'))

describe('App', function () {
    it('Should update count according to user actions', function (done) {
        const Time = mockTimeSource()

        const expectedValues = {
            a: div('.app', [button('.decrease'), span('.count', 0), button('.increase')]),
            b: div('.app', [button('.decrease'), span('.count', -1), button('.increase')]),
            c: div('.app', [button('.decrease'), span('.count', -2), button('.increase')]),
            d: div('.app', [button('.decrease'), span('.count', -3), button('.increase')])
        }
        const decrease$ = Time.diagram("--x-x-x------")
        const increase$ = Time.diagram("--------x-x-x")
        const expected$ = Time.diagram("a-b-c-d-c-b-a", expectedValues)
        
        const DOM = mockDOMSource({
            '.decrease': {
                'click': decrease$
            },
            '.increase': {
                'click': increase$
            }
        })

        const app = App({DOM})

        Time.assertEqual(
            app.DOM,
            expected$,
            (actual, expected) => expect(actual).to.look.like(expected)
        )

        Time.run(done)
    })
})
