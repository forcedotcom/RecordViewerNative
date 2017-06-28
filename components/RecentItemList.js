import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'

import RecentItem from './RecentItem'
import Styles from '../Styles'

// Component that displays a list of recent items and supports a hook for handling a click
// on one of them.
const RecentItemList = ({creds, onClick, recentItems}) => {

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Recent Items</Text>
      {recentItems.recentItems.map((recentItem, index) =>
        <RecentItem
          creds={creds}
          index={index}
          key={'RecentItem' + recentItem.Id}
          onClick={() => onClick(creds, recentItem.Id)}
          item={recentItem} />
      )}
    </View>
  )
}

RecentItemList.propTypes = {
  creds: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  recentItems: PropTypes.object.isRequired
}

export default RecentItemList
