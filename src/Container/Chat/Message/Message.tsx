import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import Sendicon from '../../../assets/imge/Chat-imge/Send Solid.svg'
import Camra from '../../../assets/imge/Chat-imge/Icon set.svg'
const Message = () => {
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
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
        <Send {...props}>
          <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Sendicon />
          </View>
        </Send>
      </View>
    );
  };
  const renderInputToolbar = (props:any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        renderActions={() => (
          <View style={{ marginRight: 10 }}>
            <Camra />
          </View>
        )}
      />
    );
  };

  const renderBubble = (props: any) => {
    return (
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
    );
  };

  return (
    <View style={{ flex: 1, borderWidth: 5, borderColor: 'black', padding: 10 }}>
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
          style: { color: 'black' },
          placeholder: 'Mesaj',
        }}
        renderInputToolbar={renderInputToolbar}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Message;
