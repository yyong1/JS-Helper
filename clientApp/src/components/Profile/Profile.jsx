import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
// import SideMenu from '../SideMenu/SideMenu';
import ProgressScore from './ProgressScore';

function Profile() {
  const navigation = useNavigation();
  const { auth } = useSelector((s) => s);
  const dispatch = useDispatch();
  console.log(auth);
  const logoutHandler = () => {
    dispatch(LOGOUT_SESSION_THUNK());
    navigation.navigate('Home');
  };
  return (
    <>
      <View
        style={styles.lk}
      >
        <ProgressScore auth={auth} />
        <Text>{auth?.name}</Text>
        <TouchableOpacity
          style={styles.cardButton}
          title="Logout"
          onPress={logoutHandler}
        >
          <Text style={styles.buttonText}>Выход</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardButton}
          title="Logout"
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>О проекте</Text>
        </TouchableOpacity>
      </View>
      {/* <SideMenu navigation={navigation} /> */}
    </>
  );
}

export default Profile;
