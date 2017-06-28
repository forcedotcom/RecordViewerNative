import React, { PropTypes } from 'react'
import { ScrollView, View } from 'react-native'

import Styles from '../Styles'
import RecordSection from './RecordSection'
import RecordButton from './RecordButton'

// Component that displays a Record.
const Record = ({creds, mode, recordView, picklists, onBackClick, onDeleteClick, onEditClick, onSaveClick, onFieldValueUpdate, onFetchPicklist}) => {
  return (
    <ScrollView style={Styles.outerFrame}>
      <View style={Styles.buttonBar}>
        <RecordButton label='Back' onClick={onBackClick} />
        <RecordButton label='Delete' onClick={() => onDeleteClick(creds, recordView.recordId)} />
        { mode === 'View' &&
          <RecordButton label='Edit' onClick={() => onEditClick(creds, recordView.recordId)} /> }
        { mode === 'Edit' &&
          <RecordButton label='Save' onClick={() => onSaveClick(creds, recordView.recordId, recordView.editValues)} /> }
      </View>
      {recordView.layouts.Full[mode].map((section, i) =>
        <RecordSection
            mode={mode}
            key={'section' + i}
            onFieldValueUpdate={onFieldValueUpdate}
            onFetchPicklist={(url) => onFetchPicklist(creds, url)}
            picklists={picklists}
            editValues={recordView.editValues}
            section={section}
            index={i} />
      )}
    </ScrollView>
  )
}

Record.propTypes = {
  creds: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  recordView: PropTypes.object.isRequired,
  picklists: PropTypes.object.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onFieldValueUpdate: PropTypes.func.isRequired,
  onFetchPicklist: PropTypes.func.isRequired
}

export default Record
