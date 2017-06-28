import React, { PropTypes } from 'react';

// Component that kicks off an asynchronous
// fetch for recent items.
class RecentItemListUpdater extends React.Component {
  componentDidMount() {
    this.props.onFetchRecentItems(this.props.creds)
  }

  render() {
    return null
  }
}

RecentItemListUpdater.propTypes = {
  creds: React.PropTypes.object.isRequired,
  onFetchRecentItems: React.PropTypes.func.isRequired
}

export default RecentItemListUpdater
