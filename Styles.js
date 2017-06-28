import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin:20
  },
  sectionHeader: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  buttonBar: {
    flexDirection:'row'
  },
  button: {
    padding: 5,
    margin: 5,
    fontSize:16,
    fontWeight: 'bold',
    backgroundColor: 'darkgray'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentItem: {
    fontSize: 17,
    padding: 5,
    margin: 5,
    backgroundColor: 'khaki'
  },
  section: {
    backgroundColor: 'darkseagreen',
    padding:10,
    margin:10
  },
  outerFrame: {
    margin: 20
  },
  fieldInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  },
  picklistOuter: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //paddingTop: 50
  },
  picklistMask: {
    //height: 40,
    //overflow: 'hidden',
    //justifyContent: 'space-around'
  },
  picklist: {
    padding: 0,
    margin: 0,
    //height: 75,
    borderWidth: 1,
    //borderColor: 'red'
  },
  picklistItem: {
    flex: 1,
    height: 30
  }
})

export default Styles
