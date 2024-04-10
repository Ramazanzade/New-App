import { View, Text, TouchableOpacity, FlatList, PanResponder, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Icon1 from '../../../assets/imge/Notification-imge/Icon set (1).svg'
import Icon2 from '../../../assets/imge/Notification-imge/Icon set.svg'
import Delet from '../../../assets/imge/Notification-imge/Frame.svg'
import Swipeable from 'react-native-gesture-handler/Swipeable';
const data = [
    { id: 1, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', icon: Icon1, status: true },
    { id: 2, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Ödəniş', des: 'Ödəniş', icon: Icon2, status: true },
    { id: 3, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', icon: Icon1, status: false },
    { id: 4, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', des: 'Xatırladıcı', icon: Icon2, status: false },
    { id: 5, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', icon: Icon1, status: false },
]
const Notification_Detail = () => {
    const RightItem = () => {
        return (
          <View >
          <Text style={{color:'red'}}>Salam</Text>
          </View>
        );
      };
    const renderItem = (item: any) => {
        const Icon = item.icon ? item.icon : null;
        return (
            <Swipeable
            renderLeftActions={(progress, dragx) => <RightItem />}
            
           >
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <View style={{ alignSelf: 'center', marginHorizontal: '2%' }}>
                    {
                        item.status === true
                            ?
                            (
                                <View style={{ width: 11, height: 11, backgroundColor: 'blue', borderRadius: 20, alignSelf: 'center' }}></View>
                            )
                            :
                            (
                                <View style={{ width: 10, height: 10, }}></View>
                            )
                    }
                </View>
                <View style={{ width: 45, height: 45, backgroundColor: 'rgba(70, 70, 70, 1)', borderRadius: 50, marginHorizontal: '1%' }}>
                    <View style={{ alignSelf: 'center', marginTop: '10%' }}>
                        {Icon && <Icon width={35} height={35} />}
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginHorizontal: '2%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        {/* <Text> Bu şəkildə yazılmalıdır</Text> */}
                        {
                            item.des
                                ?
                                (
                                    <Text style={{ color: 'rgba(48, 47, 42, 1)', fontSize: 15, fontWeight: '600' }}>{item.des}</Text>
                                )
                                :
                                (
                                    null
                                )
                        }
                        <Text style={{ color: 'rgba(109, 109, 109, 1)', fontWeight: '600', fontSize: 13 }}>{item.not}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ color: 'rgba(109, 109, 109, 1)', fontSize: 11 }}>{item.date}</Text>
                        <Text style={{ color: 'rgba(109, 109, 109, 1)', fontSize: 11 }}>{item.text}</Text>
                    </View>
                </View>
            </View>
            </Swipeable>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id.toString()}
                style={{}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'column',
      backgroundColor: '#eee',
    },
    titleWrapper: {
      alignItems: 'flex-start',
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      marginLeft: 20,
      color: 'black',
      marginVertical: 20,
    },
    leftItem: {
      flex:1,
      backgroundColor: '#76a21e',
      justifyContent: 'center',
    },
    archiveButtonStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#3e64ff',
    },
    archiveTextButtonStyle:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
    textButtonStyle: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
    deleteButtonStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#c00000',
    },
    rightItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'yellow',
    },
    leftItemText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:20,
      color: '#fff',
    },
    listItemWrapper: {
      flex: 1,
      flexDirection: 'column',
    },
  
    listItem: {
      paddingHorizontal: 10,
      justifyContent: 'center',
      borderTopWidth: 0.6,
      borderBottomWidth: 0.6,
      borderBottomColor: '#ccc',
      borderTopColor: '#ccc',
      flex: 1,
      height: 60,
      backgroundColor: '#fff',
    },
    item2: {
      flex: 4,
      justifyContent: 'center',
    },
    item: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textBtn: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    btn: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 6,
      width: '80%',
      margin: 5,
      alignSelf: 'center',
    },
    description: {
      fontSize: 16,
      color: '#000',
    },
  });

export default Notification_Detail
