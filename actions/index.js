export const finishLogin = (accessToken, instanceUrl) => {
  return {
    type: 'FINISH_LOGIN',
    accessToken,
    instanceUrl
  }
}

export const fetchRecentItems = (creds) => {
  return {
    type: 'FETCH_RECENT_ITEMS',
    creds
  }
}

export const receiveRecentItems = (recentItems) => {
  return {
    type: 'RECEIVE_RECENT_ITEMS',
    recentItems,
    receivedAt: Date.now()
  }
}

export const fetchRecord = (creds, recordId) => {
  return {
    type: 'FETCH_RECORD',
    creds,
    recordId
  }
}

export const receiveRecord = (recordId, record) => {
  return {
    type: 'RECEIVE_RECORD',
    recordId,
    record,
    receivedAt: Date.now()
  }
}

export const clearRecord = () => {
  return {
    type: 'CLEAR_RECORD'
  }
}

export const deleteRecord = (creds, recordId) => {
  return {
    type: 'DELETE_RECORD',
    creds,
    recordId
  }
}

export const saveRecord = (creds, recordId, editValues) => {
  return {
    type: 'SAVE_RECORD',
    creds,
    recordId,
    editValues
  }
}

export const finishedRecordDelete = () => {
  return {
    type: 'FINISHED_RECORD_DELETE'
  }
}

export const editRecord = () => {
  return {
    type: 'EDIT_RECORD'
  }
}

export const updateFieldValue = (field, value) => {
  return {
    type: 'UPDATE_FIELD_VALUE',
    field,
    value
  }
}

export const recordUpdateSuccess = (recordData) => {
  return {
    type: 'RECORD_UPDATE_SUCCESS',
    recordData
  }
}

export const fetchPicklist = (creds, url) => {
  return {
    type: 'FETCH_PICKLIST',
    creds,
    url
  }
}

export const receivePicklist = (url, result) => {
  return {
    type: 'RECEIVE_PICKLIST',
    url,
    result
  }
}
