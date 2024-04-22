import { View, Text, TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react'
import Imges from '../../../assets/imge/Other_edit_Page-imge/Contact us-amico 1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Clipboard from '@react-native-clipboard/clipboard';
import Invite_Friend_Modal from '../../../Modal/Invite_Friend_Modal/Invite_Friend_Modal';

const Body = ({ navigation }: any) => {
    const handlePress = async () => {
        const textToCopy = 'AJKATSA743';
        await Clipboard.setString(textToCopy);
        // kopyalayır , Sadəcə ekrana vermək lazımdı istənilsə
    };
    const [modali, setmodali] = useState(false)
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', flex: 1, justifyContent: 'space-around' }}>
            <View>
                <View style={{ alignSelf: 'center' }}>
                    <Imges width={300} height={300} />
                </View>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign: 'center', fontSize: 17, marginTop: '5%' }}>Hələ Cuxie kuryeri olmayan dostlarınızı şəxsi referal kodunuzla qoşulmağa və pul qazanmağa dəvət edin!</Text>
            </View>
            <TouchableOpacity style={{ borderStyle: 'dashed', borderColor: 'rgba(171, 171, 175, 1)', borderWidth: 1, borderRadius: 15, padding: '3%', backgroundColor: 'rgba(227, 226, 230, 1)' }} onPress={() => handlePress()}>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign: 'center' }}>Kodu kopyalamaq üçün toxunun</Text>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign: 'center', marginTop: '3%' }}>AJKATSA743</Text>
            </TouchableOpacity>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0, 80, 155, 1)', borderRadius: 15 }} onPress={() => setmodali(true)}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize: 17, padding: '3%' }}>Paylaş</Text>
                </TouchableOpacity>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modali}
                    onRequestClose={() => {
                        setmodali(false);
                    }}
                >
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => setmodali(false)}
                    >
                        <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)', zIndex: 2 }} />
                    </TouchableOpacity>
                    <Invite_Friend_Modal />
                </Modal>
            </View>
        </View>
    )
}

export default Body