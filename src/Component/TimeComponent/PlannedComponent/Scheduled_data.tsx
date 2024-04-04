import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Info from '../../../assets/imge/Time-imge/info.svg'
import Arrwov from '../../../assets/imge/Time-imge/Arrow.svg'
import To from '../../../assets/imge/Time-imge/to.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const data = [
  { id: 1, pay: '$10.00 ', ssh: ' #sslk5', date: '16:20 - 18:20', adress1: '72-74 Oxford St.', adress2: '20 Grosvenor Sq.' },
  { id: 2, pay: '$10.00 ', ssh: ' #sslk5', date: '16:20 - 18:20', adress1: '72-74 Oxford St.', adress2: '20 Grosvenor Sq.' },
  { id: 3, pay: '$10.00 ', ssh: ' #sslk5', date: '16:20 - 18:20', adress1: '72-74 Oxford St.', adress2: '20 Grosvenor Sq.' },

]
const Scheduled_data = () => {
  const renderitem = (item: any) => {
    return (
      <View style={{ borderWidth: 0.5, borderColor: '#C7C6CA', borderRadius: 10, width: SCREEN_WIDTH - 20, alignSelf: 'center' }}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',  width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop:'3%'}}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: 'rgba(0, 80, 155, 1)', fontSize: 15, fontWeight: '600' }}>{item.pay}</Text>
            <Text style={{ color: 'rgba(82, 82, 86, 1)', fontSize: 12, fontWeight: '600', textAlign: 'center', alignSelf: 'center' }}>{item.ssh}</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'rgba(199, 198, 202, 1)', width:30,height:30, borderRadius:50, alignSelf:'flex-end'}}>
            <Info width={30} height={30} />
          </TouchableOpacity>
        </View>
        <View >
          <Text style={{color:'rgba(118, 119, 122, 1)',  width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop:'1%'}}>{item.date}</Text>
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