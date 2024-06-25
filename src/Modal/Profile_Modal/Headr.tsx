// import { View, Image, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { SCREEN_WIDTH } from '../../Utils/common'
// import Icon1 from '../../assets/imge/Profile-imge/Frame (3).svg'

// const Headr = ({navigation}:any) => {
//     // Bütün datalar dinamik olaraq gələcək , Əldə hazır back olmsadığından statik datalar ilə yazılıb!
//     return (
//         <View>
//             <View style={{ backgroundColor: '#ECF1FF', alignSelf: 'center', display: 'flex', flexDirection: 'row', padding: '5%', width: '90%', marginTop: '8%', borderRadius: 10 }}>
//                 <View style={{ position: 'relative' }}>
//                     <Image
//                         source={require('../../assets/imge/Home-imge/imge.jpg')}
//                         style={{ width: 60, height: 60, borderRadius: 50 }}
//                     />
//                     <View style={{
//                         width: 16,
//                         height: 16,
//                         backgroundColor: '#FFFFFF',
//                         position: 'absolute',
//                         bottom: 0,
//                         right: 0,
//                         borderRadius: 200
//                     }}>
//                         <View
//                             style={{
//                                 width: 15,
//                                 height: 15,
//                                 backgroundColor: 'green',
//                                 position: 'absolute',
//                                 bottom: 0,
//                                 right: 0,
//                                 borderRadius: 10
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ marginHorizontal: '7%', alignSelf: 'center' }}>
//                     <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '700', textAlign: 'center', fontSize: 18 }}>Ad Soyad</Text>
//                     <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 11 }}>+994515255555</Text>
//                 </View>
//                 <View>
//                     <TouchableOpacity onPress={()=>navigation.navigate('EditProfleScreen')}>
//                         <Icon1 width={25} height={25} />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* Xallar dinamik gələcək */}
//             <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent:'space-between' }}>
//                 <TouchableOpacity style={{ backgroundColor: '#ECF1FF', borderRadius: 10, width: '47%', marginTop: '5%', paddingLeft:'5%',paddingVertical:'3%' }}>
//                     <Text style={{ color: 'rgba(118, 119, 122, 1)', fontSize: 13, }}>Sürücü xalı</Text>
//                     <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '600', }}>100%</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ backgroundColor: '#ECF1FF', borderRadius: 10, width: '47%', marginTop: '5%', paddingLeft:'5%',paddingVertical:'3%' }}>
//                     <Text style={{ color: 'rgba(118, 119, 122, 1)', fontSize: 13, }}>Sürücü xalı</Text>
//                     <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '600', }}>100%</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default Headr