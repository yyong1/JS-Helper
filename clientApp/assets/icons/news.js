/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image, View } from 'react-native';

function NewsIcon({ focused, size }) {
  console.log(size);
  return (
  // <View style={{flex:1}}>
    <Image source={require('./book.png')} resizeMode="contain" style={{ width: 50, height: 50, tintColor: focused ? '#e32f45' : '#748c94' }} />
  // </View>
  );
}

export default NewsIcon;
