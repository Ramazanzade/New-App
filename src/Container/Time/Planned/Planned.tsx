import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import Headr from '../../../Component/TimeComponent/PlannedComponent/Headr'
import Body from '../../../Component/TimeComponent/PlannedComponent/Body'
import Scheduled_data from '../../../Component/TimeComponent/PlannedComponent/Scheduled_data'
import { StatusContext } from '../../../Context/StatusContext/StatusContext'

const Planned = () => {
    const { status } = useContext(StatusContext);

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Headr  />
            {status ?
             <Scheduled_data />
            :
            <Body />
            }
         

        </View>
    )
}

export default Planned