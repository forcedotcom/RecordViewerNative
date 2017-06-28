import React from 'react'
import { connect } from 'react-redux'

import { finishLogin, clearRecord, deleteRecord, editRecord, fetchRecord, fetchRecentItems, updateFieldValue, saveRecord, fetchPicklist } from '../actions'
import RecordViewer from '../components/RecordViewer'

// Presentational Component that uses state to decide how to
// construct the RecordViewer.
const mapStateToProps = (state) => {
  if (!state.login.loggedIn) {
    return {
      screen: 'LOGIN'
    }
  } else if (state.record.record) {
    return {
      screen: 'RECORD',
      record: state.record.record,
      mode: state.record.mode,
      creds: state.login,
      picklists: state.picklists
    }
  } else {
    // TODO: Do this based on last fetch time instead.
    let updateItems = ('recentItems' in state.recentitems) ? state.recentitems.recentItems.length == 0 : false

    return {
      screen: 'RECENT',
      updateItems: updateItems,
      recentItems: state.recentitems,
      creds: state.login
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: (accessToken, instanceUrl) => {
      dispatch(finishLogin(accessToken, instanceUrl))
    },
    onRecordClick: (creds, id) => {
      dispatch(fetchRecord(creds, id))
    },
    onDeleteClick: (creds, id) => {
      dispatch(deleteRecord(creds, id))
    },
    onEditClick: () => {
      dispatch(editRecord())
    },
    onSaveClick: (creds, id, editValues) => {
      console.log('DISPATCHING SAVE RECORD MESSAGE');
      dispatch(saveRecord(creds, id, editValues))
    },
    onFetchRecentItems: (creds) => {
      dispatch(fetchRecentItems(creds))
    },
    onBackClick: () => {
      dispatch(clearRecord())
    },
    onFieldValueUpdate: (field, value) => {
      dispatch(updateFieldValue(field, value))
    },
    onFetchPicklist: (creds, url) => {
      dispatch(fetchPicklist(creds, url));
    }
  }
}

const RecordViewerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
) (RecordViewer)

export default RecordViewerWrapper
