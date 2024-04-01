import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Upload from '../../../../assets/imge/Register-imge/document-upload.svg'
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import File from '../../../../assets/imge/Register-imge/document-text.svg'
import Trash from '../../../../assets/imge/Register-imge/trash.svg'
import { SCREEN_WIDTH } from '../../../../Utils/common';
import * as Progress from 'react-native-progress';
import Tick from '../../../../assets/imge/Register-imge/tick-circle.svg'
const ID_cards = () => {
    const [fileNames, setFileNames] = useState<any>([]);
    const [size, setSize] = useState<any>([]);
    const [fileSelected, setFileSelected] = useState<boolean>(false);
    const [icon, setIcon] = useState(<Trash width={30} height={30} />);
    const [progress, setProgress] = useState(0);

    const Fileupload = async () => {
        try {
            const docs: DocumentPickerResponse[] = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
            });
            console.log(docs);

            const names = docs.map(doc => doc.name?.substring(0 , 10) + '....' );
            setFileNames(names);
            const sizes = docs.map(doc => Math.round(size/1024) +1);
            setSize(sizes);
            setFileSelected(true);

            setProgress(0);
            const intervalId = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress === 1) {
                        clearInterval(intervalId);
                        return 1;
                    }
                    return Math.min(oldProgress + 0.2, 1);
                });
            }, 1000);

        } catch (err) {
            if (DocumentPicker.isCancel(err))
                console.log("User cancelled the upload", err);
            else
                console.log(err);
        }
    }
    useEffect(() => {
        if (progress === 1) {
            setIcon(<Tick width={30} height={30} />);
            const timeoutId = setTimeout(() => {
                setIcon(<Trash width={30} height={30} />);
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [progress])
    const Delet = () => {
        setFileSelected(false)
    }
    return (
        <View style={{ marginTop: '1%' }}>
            {!fileSelected ? (
                <View style={{ marginTop: '10%' }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400' }}>Şəxsiyyət vəsiqəsi</Text>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "rgba(199, 198, 202, 1)", borderRadius: 10, marginTop: '5%', borderStyle: "dashed" }} onPress={() => Fileupload()}>
                        <View style={{ alignSelf: 'center', backgroundColor: 'rgba(250, 249, 253, 1)', width: 70, height: 70, borderRadius: 50, alignItems: 'center', marginVertical: '4%' }}>
                            <View style={{ marginTop: '15%' }}>
                                <Upload width={50} height={50} />
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
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400', marginVertical: '5%' }}>Şəxsiyyət vəsiqəsi</Text>
                    <View style={{ borderWidth: 1, borderColor: 'rgba(199, 198, 202, 1)', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: SCREEN_WIDTH - 50, padding: '4%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <File width={30} height={30} />
                            <View style={{ marginLeft: '5%', }}>
                                <Text style={{ color: 'rgba(47, 48, 51, 1)', width: '100%', }}>{fileNames.join(', ')}</Text>
                                <Text style={{ color: 'rgba(118, 119, 122, 1)' }}>{size.join(', ')} KB</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'rgba(64, 120, 197, 1)', marginTop: '5%', marginBottom: '2%' }}>Baxmaq üçün klikləyin</Text>
                                </TouchableOpacity>
                                <View >
                                    {
                                        progress === 1
                                            ?
                                            (
                                                null
                                            )
                                            :
                                            (
                                    <View style={{ width: SCREEN_WIDTH / 1.6, }}>
                                        <Text style={{ color: progress === 1 ? 'green' : 'blue', alignSelf: 'flex-end' }}>{`${Math.round(progress * 100)}%`}</Text>
                                        <View style={{ marginTop: '-4%' }}>
                                            <Progress.Bar progress={progress} width={200} color={progress === 1 ? 'green' : 'blue'} />
                                        </View>
                                    </View>
                                     )
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => Delet()}>
                                {icon}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export default ID_cards