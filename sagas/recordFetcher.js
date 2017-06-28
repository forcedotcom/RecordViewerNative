import { call, put } from 'redux-saga/effects'

import { receiveRecord } from '../actions'

export default function* recordFetcher (action) {

  let recordViewUrl = action.creds.instanceUrl + '/services/data/v40.0/ui-api/record-ui/' + action.recordId + '?formFactor=Small&modes=View,Edit';
  let req = {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + action.creds.accessToken,
      'X-Chatter-Entity-Encoding': false}
  };

  try {
    const response = yield call(fetch, recordViewUrl, req)
    const responseJson = yield response.json()
    yield put(receiveRecord(responseJson))
  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err))
  }
}
