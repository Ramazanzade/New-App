import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      {/* Home Page Content */}
      {/* Add your home page components here */}
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        {/* Profile Screen Content */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            backgroundColor: 'red',
            zIndex: 100,
          }}
        >
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
