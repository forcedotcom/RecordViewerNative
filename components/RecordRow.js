import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

import RecordItem from './RecordItem';

// Component that displays a Record row.
const RecordRow = ({row, mode, editValues, picklists, onFetchPicklist, onFieldValueUpdate, sectionIndex, rowIndex}) => {

  let rowLabel = sectionIndex + ',' + rowIndex;

  return (
    <View key={'row' + rowLabel}>
      {row.items.map((item, i) =>
        <RecordItem
            key={'RowItem' + rowLabel + ',' + i}
            mode={mode}
            editValues={editValues}
            picklists={picklists}
            onFetchPicklist={onFetchPicklist}
            onFieldValueUpdate={onFieldValueUpdate}
            item={item}
            rowLabel={rowLabel}
            itemIndex={i} />
      )}
    </View>
  )
}

RecordRow.propTypes = {
  row: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  editValues: PropTypes.object.isRequired,
  picklists: PropTypes.object.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  onFieldValueUpdate: PropTypes.func.isRequired,
  onFetchPicklist: PropTypes.func.isRequired
}

export default RecordRow
