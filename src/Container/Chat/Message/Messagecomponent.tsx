import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Back from '../../../assets/imge/Chat-imge/1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common';
import Imgepicture from '../../../assets/imge/Chat-imge/editprofile.svg'
import { useSafeArea } from 'react-native-safe-area-context';
const data =[
    {id:1, text:'Tətbiqdə nasazlıq'},
    {id:2, text:'Məhsulda problem var'},
    {id:3, text:'Sürücü problem yaradır'},
    {id:4, text:'Məkana gec gəlmək'},
    {id:5, text:'Sifarişi ləğv etmək istəyirəm'},
    {id:6, text:'Başqa sualım var'},

]
const Messagecomponent = ({ navigation }: any) => {
    const [activeId, setActiveId] = useState(null);

    const Touc =(id:any)=>{
        setActiveId(activeId === id ? null : id);

    }
    const renderitem =(item:any)=>{
        const isActive = item.id === activeId;

        return(
            <TouchableOpacity style={{backgroundColor:isActive ?  'rgba(64, 120, 197, 1)':'rgba(241, 240, 244, 1)', padding:'2%', borderRadius:15,marginRight:'2%',marginBottom:'2%', paddingHorizontal:'3%' }} onPress={()=>Touc(item.id)}>
                <Text style={{color:isActive ?  'rgba(253, 251, 255, 1)' : 'rgba(16, 17, 20, 1)', fontSize:11,}} >{item.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <View style={{ backgroundColor: 'rgba(0, 80, 155, 1)', width: SCREEN_WIDTH }}>
                <View style={{ display: 'flex', flexDirection: 'row', padding: '3%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'ChatScreen' })}>
                        <Back width={50} height={50} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 25, color: '#FFFFFF', textAlign: 'center', alignSelf: 'center', justifyContent: 'center' }}>Cuxie Dəstək</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <View style={{ justifyContent: 'center', alignSelf: 'center', marginVertical: '4%' }}><Imgepicture /></View>
                <Text style={{ color: 'rgba(47, 48, 51, 1)', fontSize: 17 }}>Cuxie Dəstəyə Xoş Gəlmisiniz</Text>
            </View>
            <View style={{width:SCREEN_WIDTH-40, alignSelf:"center", marginTop:'2%'}}>
                <Imgepicture width={50} height={50}/>
                <Text style={{ color: 'rgba(47, 48, 51, 1)', fontSize: 12, marginVertical:'2%' }}>Bu gün sizə necə kömək edə bilərəm?</Text>
                <FlatList
                        data={data}
                        renderItem={({item}) => renderitem(item)}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        key={2}
                        // style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}
                    />
            </View>
        </View>
    )
}

export default Messagecomponent