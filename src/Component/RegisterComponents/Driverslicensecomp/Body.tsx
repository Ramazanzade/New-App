import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Upload from '../../../assets/imge/Register-imge/document-upload.svg'
const Body = () => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <View style={{ marginTop: '10%' }}>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400' }}>Şəxsiyyət vəsiqəsi</Text>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: "rgba(199, 198, 202, 1)" , borderRadius:10, marginTop:'5%', borderStyle:"dashed"}}>
                    <View style={{ alignSelf: 'center', backgroundColor: 'rgba(250, 249, 253, 1)', width: 70, height: 70, borderRadius: 50, alignItems: 'center', marginVertical:'8%' }}>
                        <View style={{marginTop:'15%'}}>
                            <Upload width={50} height={50} />
                        </View>
                    </View>
                    <Text style={{ color: 'rgba(64, 120, 197, 1)', fontSize: 13, textAlign: 'center' }}>
                        Yükləmək üçün klikləyin
                    </Text>
                    <Text style={{ color: 'rgba(47, 48, 51, 1)', fontSize: 13, textAlign: 'center', marginTop: '3%', marginBottom:'7%' }}>
                        (Maksimum fayl ölçüsü: 25 MB)
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Body