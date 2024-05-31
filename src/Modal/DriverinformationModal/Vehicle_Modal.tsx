// import { View, Text, FlatList } from 'react-native'
// import React, { useState } from 'react'
// import { SCREEN_WIDTH } from '../../Utils/common'
// import { RadioButton } from 'react-native-paper';
// const data = [
//     { id: 1, text: 'Kiçik yük maşını' },
//     { id: 2, text: 'Böyük yük maşını' },
//     { id: 3, text: 'Soyuduculu maşın' },
//     { id: 4, text: 'Tır' },
// ]
// const Vehicle_Modal = () => {
//     const [checked, setChecked] = useState(false);
//     const handlePress = (id: any) => {
//         setChecked(id);
//     };
//     const renderItem = ({ item }: any) => {

//         return (
//             <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
//                 <Text style={{ color: '#101114', fontSize: 15, paddingVertical: '3%' }}>{item.text}</Text>
//                 <RadioButton
//                     value={item.id}
//                     status={checked === item.id ? 'checked' : 'unchecked'}
//                     onPress={() => handlePress(item.id)}
//                     color='rgba(64, 120, 197, 1)'
//                 />
//             </View>
//         )
//     }
//     return (
//        <View style={{backgroundColor:'rgba(17, 17, 17, 0.3)', justifyContent:'flex-end'}}>
//          <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
//             <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%' , marginTop:'3%'}}></View>
//             <View>
//                 <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Çatdırılma vasitəsi</Text>
//                 <View style={{ backgroundColor: '#76777A', width: SCREEN_WIDTH, height: 1 }}></View>
//             </View>
//             <View style={{ marginTop: '6%' , marginBottom:'10%'}}>
//                 <FlatList
//                     data={data}
//                     renderItem={(item) => renderItem(item)}
//                     keyExtractor={(item) => item.id.toString()}

//                 />
//             </View>
//         </View>
//        </View>
//     )
// }

// export default Vehicle_Modal