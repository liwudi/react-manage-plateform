/**
 * Created by mapbar_front on 2019-03-23.
 */

import { createStore } from 'redux';
import reducers from '../reducers';
const store = createStore(reducers);
export default store;
