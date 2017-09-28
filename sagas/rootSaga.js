import { takeEvery } from 'redux-saga'

import recentItemsFetcher from './recentItemsFetcher'
import recordFetcher from './recordFetcher'
import recordDeleter from './recordDeleter'
import recordUpdater from './recordUpdater'
import picklistFetcher from './picklistFetcher'

export default function* rootSaga() {
  yield takeEvery('FETCH_RECORD', recordFetcher)
  yield takeEvery('FETCH_RECENT_ITEMS', recentItemsFetcher)
  yield takeEvery('DELETE_RECORD', recordDeleter)
  yield takeEvery('SAVE_RECORD', recordUpdater)
  yield takeEvery('FETCH_PICKLIST', picklistFetcher)
}
