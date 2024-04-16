import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Kamera from '../../../assets/imge/Chat-imge/Icon set.svg'
import Sendicon from '../../../assets/imge/Chat-imge/Send Solid.svg'
const Message = ({ navigation }: any) => {
  const [messages, setMessages] = useState<any>([]);
  const [isTyping, setIsTyping] = useState<any>(false);
  const [isOnline, setIsOnline] = useState<any>(true);
  useEffect(() => {
    const receivedMessage = {
      _id: Math.random(),
      text: '',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Nizam Ramazanzadə',
        avatar: 'https://placeimg.com/50/50/people',
      },
    };
    const typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 2000);

    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, [receivedMessage])
    );

    return () => clearTimeout(typingTimeout);
  }, []);

  const onSend: any = (newMessages = []) => {
    setMessages((previousMessages: any) => GiftedChat.append(previousMessages, newMessages));
    setIsTyping(false);
  };
  const handleSendPress = () => {
  const newMessage = {
    _id: Math.random(),
    text: 'Your message text here',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Your Name',
      avatar: 'https://placeimg.com/50/50/people',
    },
  };
  onSend([newMessage]);
};
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages: any) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        onInputTextChanged={(text) => {
          setIsTyping(text.length > 0);
        }}
        placeholder={isTyping ? 'Typing...' : isOnline ? 'Online' : 'Offline'}
        renderSend={(props) =>
          <TouchableOpacity onPress={()=>handleSendPress()}>
            <Sendicon   {...props} />
          </TouchableOpacity>
        }
        renderAvatar={null}
        renderUsernameOnMessage={true}
        textInputProps={{
          style: { color: 'black' }
        }}
      />
    </View>
  );
};


export default Message




















