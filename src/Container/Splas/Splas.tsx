import { View, Text } from 'react-native'
import React ,{useEffect} from 'react'
import LogoName from '../../assets/imge/Splas-imge/cuxie.svg'
import Imegecenter from '../../assets/imge/Splas-imge/Mail sent-bro 1.svg'
const Splas = ({navigation}:any) => {
  useEffect(() => {
   setTimeout(()=>{
    navigation.navigate('OnboardingScreen')
   }, 2000)
  }, [])
  
  return (
    <View style={{ flex: 1, backgroundColor: '#00509B', }}>
      <View style={{ alignSelf: 'center', flex:1}}>
        <View style={{alignSelf:'center'}}>
          <LogoName height={300} width={300}/>
        </View>
        <View style={{alignSelf:'center'}}>
          <Imegecenter width={500} height={400}/>
        </View>
      </View>
    </View>
  )
}

export default Splas