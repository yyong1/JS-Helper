/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image, View } from 'react-native';

function QuestIcon({ focused }) {
  return (
    <View>
      <Image source={require('./book.png')} resizeMode="contain" style={{ with: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94' }} />
    </View>
  );
}

export default QuestIcon;
