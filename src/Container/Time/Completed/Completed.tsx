import { View, Text } from 'react-native'
import React from 'react'
import Body_Null from '../../../Component/TimeComponent/CompletedComponent/Body_Null'
import Detail_index from '../../../Component/TimeComponent/CompletedComponent/Detail/Detail_index'

const Completed = ({navigation}:any) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Body_Null navigation={navigation}/>
      <Detail_index/>
    </View>
  )
}

export default Completed