import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Info from '../../../assets/imge/Time-imge/info.svg'
import Arrwov from '../../../assets/imge/Time-imge/Arrow.svg'
import To from '../../../assets/imge/Time-imge/to.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Scheduled_data_Modal from '../../../Modal/Time_Modal/Scheduled_data_Modal/Scheduled_data_Modal'
const data = [
  { id: 1, pay: '$10.00 ', ssh: ' #sslk5', date: '16:20 - 18:20', adress1: '72-74 Oxford St.', adress2: '20 Grosvenor Sq.' },
  { id: 2, pay: '$10.00 ', ssh: ' #sslk5', date: '16:20 - 18:20', adress1: '72-74 Oxford St.', adress2: '20 Grosvenor Sq.' },
  { id: 3, pay: '$10.00 ', ssh: ' #sslk5', date: '16:20 - 18:20', adress1: '72-74 Oxford St.', adress2: '20 Grosvenor Sq.' },

]
const Scheduled_data = () => {
  const [modal, setmodal] = useState(false)
  const handletouc = () => {
    setmodal(true)
    console.log('status', modal);

  }
  const close =()=>{
    setmodal(false)
  }
  const renderitem = (item: any) => {
    return (
      <View style={{ borderWidth: 0.5, borderColor: '#C7C6CA', borderRadius: 10, width: SCREEN_WIDTH - 20, alignSelf: 'center', marginVertical: '3%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: 'rgba(0, 80, 155, 1)', fontSize: 15, fontWeight: '600' }}>{item.pay}</Text>
            <Text style={{ color: 'rgba(82, 82, 86, 1)', fontSize: 12, fontWeight: '600', textAlign: 'center', alignSelf: 'center' }}>{item.ssh}</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: 'rgba(199, 198, 202, 1)', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end' }} onPress={handletouc}>
            <Info width={30} height={30} />
          </TouchableOpacity>
          <Modal
            animationType='fade'
            transparent={true}
            visible={modal}
          >
            <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'center' }} >

              <Scheduled_data_Modal close={close} />
            </View>
          </Modal>
        </View>
        <View >
          <Text style={{ color: 'rgba(118, 119, 122, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '1%' }}>{item.date}</Text>
        </View>
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: '5%' }}>
          <View style={{}}>
            <View style={{ display: 'flex', flexDirection: 'row', }}>
              <View style={{ alignSelf: 'center' }}>
                <Arrwov width={25} height={25} />
              </View>
              <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '600', fontSize: 14 }}>From :</Text>
            </View>
            <View style={{ marginLeft: '15%' }}>
              <Text style={{ color: 'rgba(37, 38, 41, 1)', fontSize: 12, }}>{item.adress1}</Text>
            </View>
          </View>
          <View style={{}}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '-20%' }}>
              <View style={{ alignSelf: 'center' }}>
                <To width={25} height={25} />
              </View>
              <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '600', fontSize: 14 }}>To :</Text>
            </View>
            <View style={{ marginLeft: '1%' }}>
              <Text style={{ color: 'rgba(37, 38, 41, 1)', fontSize: 12 }}>{item.adress2}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => renderitem(item)}
      />
    </View>
  )
}

export default Scheduled_data