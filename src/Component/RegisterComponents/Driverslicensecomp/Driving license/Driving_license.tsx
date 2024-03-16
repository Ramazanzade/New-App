import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Upload1 from '../../../../assets/imge/Register-imge/document-upload.svg'
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import File1 from '../../../../assets/imge/Register-imge/document-text.svg'
import Trash1 from '../../../../assets/imge/Register-imge/trash.svg'
import { SCREEN_WIDTH } from '../../../../Utils/common';
const Driving_license = () => {
    const [fileNames, setFileNames] = useState<any>([]);
    const [size, setSize] = useState<any>([]);
    const [fileSelected, setFileSelected] = useState<boolean>(false); 

    const Fileupload = async () => {
        try {
            const docs: DocumentPickerResponse[] = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
            });
            console.log(docs);

            const names = docs.map(doc => doc.name);
            setFileNames(names);
            const sizes = docs.map(doc => doc.size);
            setSize(sizes);
            setFileSelected(true);
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                console.log("User cancelled the upload", err);
            else
                console.log(err);
        }
    }
    const Delet=()=>{
        setFileSelected(false)
    }
    return (
        <View style={{ marginTop: '1%' }}>
            {!fileSelected ? (
                <View style={{ marginTop: '10%' }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400' }}>Sürücülük vəsiqəsi</Text>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "rgba(199, 198, 202, 1)", borderRadius: 10, marginTop: '5%', borderStyle: "dashed" }} onPress={() => Fileupload()}>
                        <View style={{ alignSelf: 'center', backgroundColor: 'rgba(250, 249, 253, 1)', width: 70, height: 70, borderRadius: 50, alignItems: 'center', marginVertical: '8%' }}>
                            <View style={{ marginTop: '15%' }}>
                                <Upload1 width={50} height={50} />
                            </View>
                        </View>
                        <Text style={{ color: 'rgba(64, 120, 197, 1)', fontSize: 13, textAlign: 'center' }}>
                            Yükləmək üçün klikləyin
                        </Text>
                        <Text style={{ color: 'rgba(47, 48, 51, 1)', fontSize: 13, textAlign: 'center', marginTop: '3%', marginBottom: '7%' }}>
                            (Maksimum fayl ölçüsü: 25 MB)
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400', marginVertical:'5%' }}>Sürücülük vəsiqəsi</Text>
                    <View style={{ borderWidth: 1, borderColor: 'rgba(199, 198, 202, 1)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: SCREEN_WIDTH - 50, padding: '4%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <File1 width={30} height={30} />
                            <View style={{ marginLeft: '5%', }}>
                                <Text style={{ color: 'rgba(47, 48, 51, 1)', width: '100%', }}>{fileNames.join(', ')}</Text>
                                <Text style={{ color: 'rgba(118, 119, 122, 1)' }}>{size.join(', ')} KB</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'rgba(64, 120, 197, 1)', marginTop: '5%', marginBottom: '2%' }}>Baxmaq üçün klikləyin</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity onPress={()=>Delet()}>
                                <Trash1 width={30} height={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export default Driving_license