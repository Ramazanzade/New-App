import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import One from '../../assets/imge/Profile-imge/Frame (1).svg'
import Tow from '../../assets/imge/Profile-imge/Frame (2).svg'
import Three from '../../assets/imge/Profile-imge/Frame.svg'
import Four from '../../assets/imge/Profile-imge/Icon set.svg'
import Five from '../../assets/imge/Profile-imge/1.svg'

const Body = ({navigation}:any) => {
    return (
        <View style={{width:'90%', alignSelf:'center', marginTop:'10%'}}>
            <TouchableOpacity style={{display:'flex', flexDirection:'row', }} onPress={()=>navigation.navigate('Other_edit_Screen',{screen:'Delivery_Home'})}>
                <Three width={25} height={25} />
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15, marginLeft:'4%', textAlign:'center'}}>Çatdırılma məlumatları</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display:'flex', flexDirection:'row', marginVertical:'8%'}} onPress={()=>navigation.navigate('Other_edit_Screen',{screen:'Parameters'})}>
                <One width={25} height={25} />
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15, marginLeft:'4%', textAlign:'center'}}>Parametrlər</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display:'flex', flexDirection:'row',  }} onPress={()=>navigation.navigate('Other_edit_Screen',{screen:'Invite_Friend'})}>
                <Four width={25} height={25} />
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15, marginLeft:'4%', textAlign:'center'}}>Dostu dəvət et</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display:'flex', flexDirection:'row', marginVertical:'8%'}}  onPress={()=>navigation.navigate('Other_edit_Screen',{screen:'F_A_Q'})}>
                <Tow width={25} height={25} />
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15, marginLeft:'4%', textAlign:'center'}}>F.A.Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display:'flex', flexDirection:'row', }} onPress={()=>navigation.navigate('EditProfleScreen')}>
                <Five width={25} height={25} />
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15, marginLeft:'4%', textAlign:'center'}}>Haqqında</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Body