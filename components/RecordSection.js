import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

import Styles from '../Styles'
import RecordRow from './RecordRow';

// Component that displays a Record section.
const RecordSection = ({section, editValues, picklists, onFieldValueUpdate, onFetchPicklist, mode, index}) => {

  return (
    <View key={'sectionView' + index} style={Styles.section}>
      {section.useHeading &&
       <Text key={'sectionHeading' + index} style={Styles.sectionHeader}>
         {section.heading}
       </Text>
      }
      {section.rows.map((row, i) =>
        <RecordRow
            key={'sectionRow' + index + ',' + i}
            mode={mode}
            picklists={picklists}
            onFieldValueUpdate={onFieldValueUpdate}
            onFetchPicklist={onFetchPicklist}
            editValues={editValues}
            row={row}
            sectionIndex={index}
            rowIndex={i} />
      )}
    </View>
  )
}

RecordSection.propTypes = {
  section: PropTypes.object.isRequired,
  editValues: PropTypes.object.isRequired,
  picklists: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onFieldValueUpdate: PropTypes.func.isRequired,
  onFetchPicklist: PropTypes.func.isRequired
}

export default RecordSection
