import recordLayout from './recordLayout'

const record = (state = {record: undefined, mode: 'View'}, action) => {
  switch (action.type) {
    case 'RECEIVE_RECORD':
      return {
        record: recordLayout.getLayoutModel(action.recordId, action.record),
        mode: 'View'
      }
    case 'EDIT_RECORD':
      return {
        ...state,
        mode: 'Edit'
      }
    case 'CLEAR_RECORD':
      return {
        record: undefined
      }
    case 'FINISHED_RECORD_DELETE':
      return {
        record: undefined
      }
    case 'UPDATE_FIELD_VALUE': {
      let oldEditValue = state.record.editValues[action.field];
      let newEditValue = {
        ...oldEditValue,
        current: action.value
      };

      console.log('NEW EDIT VALUE: ' + JSON.stringify(newEditValue));
      console.log('ACTION FIELD: ' + action.field);

      var updateMap = {};
      updateMap[action.field] = newEditValue;
      console.log('UPDATE: ' + JSON.stringify(updateMap));

      let newEditValues = Object.assign({}, state.record.editValues, updateMap);

      return {
        ...state,
        record: {
          ...state.record,
          editValues: newEditValues}
      }
    }
    case 'RECORD_UPDATE_SUCCESS': {
      // TODO: Re-retrieve record instead of dropping it.
      return {
        record: undefined
      }
    }
    default:
      return state
  }
}

export default record
