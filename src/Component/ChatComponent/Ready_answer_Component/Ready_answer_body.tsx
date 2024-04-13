import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Ready_answer_body = () => {
    const route = useRoute<any>();
    const {data} = route.params;
    return (
    <View>
      <Text style={{color:'red'}}>{data.detail}</Text>
    </View>
  )
}

export default Ready_answer_body