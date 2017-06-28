import React, { PropTypes } from 'react';
import { Picker, Text, TextInput, View } from 'react-native';

import Styles from '../Styles'

// Component that displays a Record item and its components.
const RecordItem = ({mode, editValues, picklists, onFetchPicklist, onFieldValueUpdate, item, rowLabel, itemIndex}) => {

  let itemLabel = rowLabel + ',' + itemIndex

  let nonEmptyItem = item.values.find((component) => component.displayValue && (component.displayValue.length > 0))

  return (
    <View key={'item' + itemLabel}>
      { !item.customLinkUrl &&
        <Text key={'label' + itemLabel} style={Styles.label}>{item.label}</Text>
      }
      { item.customLinkUrl &&
        <Text key={'customLink' + itemLabel}>{item.linkText + ' ' + item.customLinkUrl}</Text>
      }

      { mode === 'View' && item.linkId &&
        <Text key={'linkTo' + itemLabel}>{item.linkId}</Text>
      }
      { mode === 'View' && !item.linkId && !item.customLinkUrl && !nonEmptyItem &&
        <Text key={'componentEmpty' + itemLabel}>-</Text>
      }
      { mode === 'View' && !item.linkId && !item.customLinkUrl && nonEmptyItem &&
        <View key={'compList' + itemLabel}>
        {item.values.map((component, i) => {
           if (component.displayValue && component.displayValue.length > 0) {
             return (
               <Text key={'component' + itemLabel + ',' + i}>{component.displayValue}</Text>
             )
           } else {
             return null
           }
         }
        )}
        </View>
      }

      { mode === 'Edit' &&
        <View key={'compListEdit' + itemLabel}>
        {item.values.map((component, i) => {
          if (component.editableForUpdate) {
            if (component.picklistUrl) {
              let picklistValues = [];
              if (picklists[component.picklistUrl]) {
                picklistValues = picklists[component.picklistUrl].values;

                // TODO: check that selectedValue works properly.
                // TODO: onValueChange
                return (
                  <View style={Styles.picklistMask} key={component.picklistUrl + 'View'}>
                    <Picker
                      style={Styles.picklist}
                      key={component.picklistUrl}
                      selectedValue={editValues[component.field].current}
                      onValueChange={(newValue) => onFieldValueUpdate(component.field, newValue) } >
                      { picklistValues.map((picklistValue) => {
                          return <Picker.Item
                            style={Styles.picklistItem}
                            key={picklistValue.value}
                            value={picklistValue.value}
                            label={picklistValue.label} />
                      })}
                  </Picker>
                  </View>
                )
              } else {
                // Use basic text box for now, but send off a request to populate the picklist value cache.
                // TODO: This is broken and will cause multiple reloads, can't do a callback here! Fix as in the web app.
                onFetchPicklist(component.picklistUrl);

                return (
                  <Text key={'component' + itemLabel + ',' + i}>{component.displayValue}</Text>
                )
              }
            } else {
              let currentVal = editValues[component.field].current;
              let currentValStr = null;
              if (currentVal != null) {
                currentValStr = currentVal.toString();
              }

              return (
                <TextInput
                    style={Styles.fieldInput}
                    key={'componentInput' + itemLabel + ',' + i}
                    onChangeText={(text) => onFieldValueUpdate(component.field, text)}
                    value={currentValStr} />
              )
            }
          } else {
            return (
              <Text key={'component' + itemLabel + ',' + i}>{component.displayValue}</Text>
            )
          }
        })}
        </View>
      }
    </View>
  )
}

RecordItem.propTypes = {
  item: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  editValues: PropTypes.object.isRequired,
  picklists: PropTypes.object.isRequired,
  rowLabel: PropTypes.string.isRequired,
  itemIndex: PropTypes.number.isRequired,
  onFieldValueUpdate: PropTypes.func.isRequired,
  onFetchPicklist: PropTypes.func.isRequired
}

export default RecordItem
