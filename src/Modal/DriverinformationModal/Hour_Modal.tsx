import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import Oclock from '../../assets/imge/Register-imge/Icon button.svg'
const Hour_Modal = ({closeModal}:any) => {
  const [starthour, setstarthour] = useState('')
  const [startminute, setstartminute] = useState('')
  const [endhour, setendhour] = useState('')
  const [endminute, setendminute] = useState('')
  const handleHoursChange = (text:any) => {
    const value = text.replace(/\D/g, ''); 
    if (parseInt(value) > 23) {
      setstarthour('23');
    } else {
      setstarthour(value);
    }
  };
  const handleHoursChange1 = (text:any) => {
    const value = text.replace(/\D/g, ''); 
    if (parseInt(value) > 23) {
      setendhour('23');
    } else {
      setendhour(value);
    }
  };
  const handleMinutesChange = (text:any) => {
    const value = text.replace(/\D/g, ''); 
    if (parseInt(value) > 59) {
      setstartminute('59');
    } else {
      setstartminute(value);
    }
  };
  const handleMinutesChange1 = (text:any) => {
    const value = text.replace(/\D/g, ''); 
    if (parseInt(value) > 59) {
      setendminute('59');
    } else {
      setendminute(value);
    }
  };
  return (
    <View style={{ backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'flex-end' }}>
      <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
        <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
        <View>
          <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Sifariş qəbul saatları</Text>
          <View style={{ backgroundColor: '#76777A', width: SCREEN_WIDTH, height: 1 }}></View>
        </View>
        <View style={{ marginTop: '6%', marginBottom: '10%' }}>
          <View style={{ width: SCREEN_WIDTH - 20, alignSelf: 'flex-end' }}>
            <Text style={{ color: 'rgba(37, 38, 41, 1)', marginBottom: '5%' }}>Saatı daxil et</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: SCREEN_WIDTH - 50, alignSelf: 'center', marginBottom: '5%' }}>
            <View>
              <TextInput
                value={starthour}
                onChangeText={handleHoursChange}
                keyboardType="numeric"
                maxLength={2}
                style={{ backgroundColor: 'rgba(241, 240, 244, 1)', textAlign: 'center', borderRadius: 20, fontSize: 30, color: 'rgba(16, 17, 20, 1)', padding: '5%', paddingHorizontal: '17%' }}
              />
              <Text style={{ color: 'rgba(37, 38, 41, 1)', marginTop: '5%' }}>Saat</Text>
            </View>
            <View style={{ marginHorizontal: '4%', marginTop: '5%' }}><Text style={{ fontSize: 30, color: 'rgba(16, 17, 20, 1)', fontWeight: '800' }}>:</Text></View>
            <View>
              <TextInput
                value={startminute}
                onChangeText={handleMinutesChange}
                keyboardType="numeric"
                maxLength={2}
                style={{ backgroundColor: 'rgba(241, 240, 244, 1)', textAlign: 'center', borderRadius: 20, fontSize: 30, color: 'rgba(16, 17, 20, 1)', padding: '5%', paddingHorizontal: '17%' }}
              />
              <Text style={{ color: 'rgba(37, 38, 41, 1)', marginTop: '5%' }}>Dəqiqə</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: SCREEN_WIDTH - 50, alignSelf: 'center' }}>
            <View>
              <TextInput
                value={endhour}
                onChangeText={handleHoursChange1}
                keyboardType="numeric"
                maxLength={2}
                style={{ backgroundColor: 'rgba(241, 240, 244, 1)', textAlign: 'center', borderRadius: 20, fontSize: 30, color: 'rgba(16, 17, 20, 1)', padding: '5%', paddingHorizontal: '17%' }}
              />
              <Text style={{ color: 'rgba(37, 38, 41, 1)', marginTop: '5%' }}>Saat</Text>
            </View>
            <View style={{ marginHorizontal: '4%', marginTop: '5%' }}><Text style={{ fontSize: 30, color: 'rgba(16, 17, 20, 1)', fontWeight: '800' }}>:</Text></View>
            <View>
              <TextInput
                value={endminute}
                onChangeText={handleMinutesChange1}
                keyboardType="numeric"
                maxLength={2}
                style={{ backgroundColor: 'rgba(241, 240, 244, 1)', textAlign: 'center', borderRadius: 20, fontSize: 30, color: 'rgba(16, 17, 20, 1)', padding: '5%', paddingHorizontal: '17%' }}
              />
              <Text style={{ color: 'rgba(37, 38, 41, 1)', marginTop: '5%' }}>Dəqiqə</Text>
            </View>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'row', width:SCREEN_WIDTH-20, alignSelf:'center', justifyContent:'space-between', marginBottom:'5%'}}>
          <TouchableOpacity>
            <Oclock />
          </TouchableOpacity>
          <View style={{display:'flex', flexDirection:'row'}} >
              <TouchableOpacity onPress={closeModal}>
                <Text style={{color:'rgba(0, 70, 137, 1)', fontSize:15,marginRight:'5%'}}>Ləğv et</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:30}} onPress={closeModal}>
                <Text  style={{color:'rgba(0, 70, 137, 1)', fontSize:15,}}>Ok</Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  )
}

export default Hour_Modal