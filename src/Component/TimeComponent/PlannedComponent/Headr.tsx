import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Status from '../../../assets/imge/Time-imge/_Avatar online indicator.svg'
import { StatusContext } from '../../../Context/StatusContext/StatusContext';
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();
const currentDay = currentDate.getDay();
const calculateDates = () => {
    const dates = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + (i - currentDay));
        dates.push(date.getDate());
    }
    return dates;
};

const datesOfTheWeek = calculateDates();
const Header = () => {
    const [select, setselect] = useState(null)
    const [status , setstatus]= useContext(StatusContext)
    const Handle = (dayIndex: any) => {
        setselect(dayIndex)
        setstatus(!status)
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
            {daysOfWeek.map((day, index) => (

                <TouchableOpacity key={day} style={{ display: 'flex', flexDirection: 'column', margin: '0.5%', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10,  backgroundColor: select === index ? 'rgba(0, 80, 155, 1)' : 'transparent '}} onPress={() => Handle(index)}>
                    {[4].includes(index) && <View style={{justifyContent:'flex-end', alignSelf:'flex-end', position:'absolute', marginTop:'15%'}}><Status width={15}  height={15}/></View>}
                    <Text style={{ color: select === index ? '#FFFFFF' : 'rgba(70, 71, 74, 1)', textAlign: 'center', fontSize: 11 }}>{day}</Text>
                    <Text style={{ color: select === index ? '#FFFFFF' : 'rgba(70, 71, 74, 1)', textAlign: 'center', marginTop: '8%', fontSize: 11 }}>{datesOfTheWeek[index]}</Text>
                </TouchableOpacity>


            ))}
        </View>
    );
};

export default Header;
