// import { View, Text, FlatList } from 'react-native'
// import React, { useState } from 'react'
// import { SCREEN_WIDTH } from '../../Utils/common'
// import { RadioButton } from 'react-native-paper';
// import Imge from '../../assets/imge/Other_edit_Page-imge/Icon set (2).svg'
// import Imge2 from '../../assets/imge/Other_edit_Page-imge/Icon set (3).svg'
// import Imge3 from '../../assets/imge/Other_edit_Page-imge/Icon set (4).svg'
// import Imge4 from '../../assets/imge/Other_edit_Page-imge/RU.svg'

// const data = [
//     { id: 1, text: 'Azərbaycan dili', imge: 'imge1' },
//     { id: 2, text: 'İngilis dili', imge: 'imge2' },
//     { id: 3, text: 'Türk dili', imge: 'imge3' },
//     { id: 4, text: 'Rus dili', imge: 'imge4' },
// ]
// const Language_Modal = () => {
//     const icons = {
//         imge1: Imge,
//         imge2: Imge2,
//         imge3: Imge3,
//         imge4: Imge4,
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
//             <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'5%' }}>
//                 <View style={{ display: 'flex', flexDirection: 'row' }}>
//                     <Imgeicon />
//                     <Text style={{ color: '#101114', fontSize: 15,marginLeft:'7%'}}>{item.text}</Text>
//                 </View>
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
//         <View style={{ backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'flex-end' }}>
//             <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
//                 <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
//                 <View>
//                     <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Dil</Text>
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


// export default Language_Modal