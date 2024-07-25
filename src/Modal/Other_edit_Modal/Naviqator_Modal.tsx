// import { View, Text, FlatList, Switch } from 'react-native'
// import React, { useState } from 'react'
// import { SCREEN_WIDTH } from '../../Utils/common'
// import { RadioButton } from 'react-native-paper';
// import Imge from '../../assets/imge/Other_edit_Page-imge/Icon set (5).svg'
// const data = [
//     { id: 1, text: 'Waze', imge: 'imge1' },
// ]
// const Naviqator_Modal = () => {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//     const icons = {
//         imge1: Imge,
//     };

//     type Item = {
//         imge: string;
//         text: string
//         id: any
//     };
//     const [checked, setChecked] = useState<any>(false);
//     const handlePress = (id: number) => {
//         setChecked(id);
//     };
//     const renderItem = ({ item }: { item: Item }) => {
//         const Imgeicon = icons[item.imge as keyof typeof icons];
//         return (
//             <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
//                 <View style={{ display: 'flex', flexDirection: 'row' }}>
//                     <Imgeicon width={40} height={40} />
//                     <Text style={{ color: '#101114', fontSize: 17, marginLeft: '10%', textAlign:'center' }}>{item.text}</Text>
//                 </View>
//                 <Switch
//                     trackColor={{ false: 'rgba(17, 17, 19, 0.2)', true: '#ECF1FF' }}
//                     thumbColor={isEnabled ? 'rgba(64, 120, 197, 1)' : '#f4f3f4'}
//                     ios_backgroundColor="rgba(17, 17, 19, 0.2)"
//                     onValueChange={toggleSwitch}
//                     value={isEnabled}
//                     style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }] }}
//                 />
//             </View>
//         )
//     }
//     return (
//         <View style={{ backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'flex-end' }}>
//             <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
//                 <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
//                 <View>
//                     <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Naviqator</Text>
//                     <View style={{ backgroundColor: '#76777A', width: SCREEN_WIDTH, height: 1 }}></View>
//                 </View>
//                 <View style={{ marginTop: '6%', marginBottom: '10%' }}>
//                     <FlatList
//                         data={data}
//                         renderItem={(item: any) => renderItem(item)}
//                         keyExtractor={(item) => item.id.toString()}

//                     />
//                 </View>
//             </View>
//         </View>
//     )
// }


// export default Naviqator_Modal