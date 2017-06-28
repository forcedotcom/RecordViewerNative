import React, { PropTypes } from 'react'
import { Text, View, ScrollView } from 'react-native';

import Login from './Login'
import RecentItemListUpdater from '../containers/RecentItemListUpdater'
import RecentItemList from './RecentItemList'
import Record from './Record'

// Component that displays login / recent items / record screens.
const RecordViewer = ({screen, updateItems, creds, record, mode, picklists, recentItems, onLoginSuccess, onRecordClick, onBackClick, onDeleteClick, onEditClick, onSaveClick, onFieldValueUpdate, onFetchPicklist, onFetchRecentItems}) => {
  if (screen == 'LOGIN') {
    return (
      <Login onSuccess={onLoginSuccess} />
    )
  } else if (screen == 'RECORD') {
    return (
      <Record recordView={record}
              mode={mode}
              creds={creds}
              picklists={picklists}
              onBackClick={onBackClick}
              onDeleteClick={onDeleteClick}
              onEditClick={onEditClick}
              onSaveClick={onSaveClick}
              onFieldValueUpdate={onFieldValueUpdate}
              onFetchPicklist={onFetchPicklist}/>
    )
  } else if (screen == 'RECENT') {
    console.log('SHOW RECENT')
    return (
      <View key='RecentItemsScreen'>
        {updateItems &&
          <RecentItemListUpdater
            creds={creds}
            onFetchRecentItems={onFetchRecentItems} />
        }
        <RecentItemList
           creds={creds}
           recentItems={recentItems}
           onClick={onRecordClick} />
      </View>
    )
  }
}

RecordViewer.propTypes = {
  screen: PropTypes.string.isRequired,
  updateItems: PropTypes.bool,
  creds: PropTypes.object,
  record: PropTypes.object,
  mode: PropTypes.string,
  recentItems: PropTypes.object,
  picklists: PropTypes.object,
  onLoginSuccess: PropTypes.func.isRequired,
  onRecordClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onFetchRecentItems: PropTypes.func.isRequired,
  onFieldValueUpdate: PropTypes.func.isRequired,
  onFetchPicklist: PropTypes.func.isRequired
}

export default RecordViewer
