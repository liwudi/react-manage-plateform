/**
 * Created by mapbar_front on 2019-03-23.
 */
import { ADD, DEL, ADDLIST } from '../actions';
let initState = {
    number: 0,
    list: []
};
function reducers(state = initState, action) {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {number: state.number + action.number});
        case DEL:
            return Object.assign({}, state, {number: state.number - action.number});
        case ADDLIST:
            return Object.assign({}, state, {list: action.list});
        default:
            return state
    }
}
export default reducers
