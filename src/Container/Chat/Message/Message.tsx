import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import Sendicon from '../../../assets/imge/Chat-imge/Send Solid.svg'
import Camra from '../../../assets/imge/Chat-imge/Icon set.svg'
import Messagecomponent from './Messagecomponent';
const Message = ({navigation}:any) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Nizam Ramazanzadə',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend: any = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props: any) => {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', marginHorizontal: '5%', marginVertical: '2%' }}>
        <Send {...props}>
          <Sendicon width={30} height={30} />
        </Send>
      </View>
    );
  };
  const renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
        }}
        renderActions={() => (
          <TouchableOpacity style={{ marginHorizontal: '5%', marginVertical: '2%' }}>
            <Camra width={35} height={35} />
          </TouchableOpacity>
        )}
      />
    );
  };

  const renderBubble = (props: any) => {
    return (
      <View style={{}}>
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#2e64e5',
            },
          }}
          textStyle={{
            right: {
              color: '#fff',
            },
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1,backgroundColor: '#FFFFFF',}}>
      <View >
        <Messagecomponent navigation={navigation}/>
      </View>
      <View style={{ flex: 1, padding: '2%', backgroundColor: '#FFFFFF', }}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          textInputProps={{
            style: { color: 'black', width: '68%' },
            placeholder: 'Mesaj',
          }}

          renderInputToolbar={renderInputToolbar}
      
        />
      </View>
    </View>

  );
};

export default Message;
