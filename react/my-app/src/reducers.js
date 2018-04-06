import actions from './actions'

const reducers = (state = {count: 0}, action) => {
    switch (action.type) {
        case actions.DECREASE:
            return {
                ...state,
                count: state.count - 1
            }
        case actions.INCREASE:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
};

export default reducers;