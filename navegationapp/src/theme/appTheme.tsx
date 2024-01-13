import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
  },

  btnBig: {
    width: 100,
    height: 100,
    backgroundColor: '#ff9427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  btnText: {
    color: 'white',
    fontSize: 20,
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },

  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },

  menuBtn: {
    marginVertical: 10,
  },

  menuText: {
    fontSize: 20,
  },
});
