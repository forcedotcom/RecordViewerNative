import React, { PropTypes } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Styles from '../Styles'

// Component that displays a recent item and supports a hook for handling a click.
const RecentItem = ({onClick, item, index}) => {

  return (
    <TouchableHighlight key={'recentItemHighlight' + index} onPress={onClick}>
      <View>
      {item.Name &&
        <Text key={'recentItemName' + index} style={Styles.recentItem}>{item.Name}</Text>}
      {item.CaseNumber &&
        <Text key={'recentItemCaseNumber' + index} style={Styles.recentItem}>Case {item.CaseNumber}</Text>}
      </View>
    </TouchableHighlight>
  )
}

RecentItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default RecentItem
