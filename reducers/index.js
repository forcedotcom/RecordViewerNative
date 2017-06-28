import { combineReducers } from 'redux'

import login from './login'
import recentitems from './recentitems'
import record from './record'
import picklists from './picklists'

export default combineReducers( {
  login,
  recentitems,
  record,
  picklists
})
