import { call, put } from 'redux-saga/effects'

import { recordUpdateSuccess } from '../actions'

export default function* recordUpdater (action) {

  console.log('UPDATING RECORD!')

  let recordDataUrl = action.creds.instanceUrl + '/services/data/v41.0/ui-api/records/' + action.recordId;

  var recordInput = {};
  recordInput.fields = {};
  Object.keys(action.editValues).map((field) => {
    let editValue = action.editValues[field];

    // TODO: Handle different data types and null values properly.
    if (!(editValue.original === editValue.current)) {
      recordInput.fields[field] = editValue.current;
    }
  });

  let req = {
    method: 'PATCH',
    body: JSON.stringify(recordInput),
    headers: {
      'Authorization' : 'Bearer ' + action.creds.accessToken,
      'Content-Type': 'application/json',
      'X-Chatter-Entity-Encoding': false}
  };

  console.log('SENDING PATCH PAYLOAD: ' + req.body);

  try {
    const response = yield call(fetch, recordDataUrl, req)
    const responseJson = yield response.json()
    console.log('RESPONSE: ' + JSON.stringify(responseJson));
    yield put(recordUpdateSuccess(responseJson))
  } catch(err) {
    console.error('Record update error: ' + JSON.stringify(err))
  }
}
