const recentItems = (state = {recentItems: [], lastUpdate: undefined, isFetching:false}, action) => {
  switch (action.type) {
    case 'RECEIVE_RECENT_ITEMS':
      return {
        isFetching: false,
        lastUpdate: Date.now(),
        recentItems: action.recentItems
      }
    case 'FINISHED_RECORD_DELETE':
      return {
        recentItems: [],
        lastUpdate: undefined,
        isFetching: false
      }
    default:
      return state
  }
}

export default recentItems
