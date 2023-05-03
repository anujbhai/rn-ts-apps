import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  SafeAreaViewStyles: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: colors.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: colors.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListItem: {
    padding: 20,
    paddingBottom: 100,
  },
  listItem: {
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  listItemTextContent: {
    flex: 1,
  },
  listItemText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.primary,
    textDecorationLine: 'none',
  },
  listItemTextCompleted: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.primary,
    textDecorationLine: 'line-through',
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
})

export default styles;