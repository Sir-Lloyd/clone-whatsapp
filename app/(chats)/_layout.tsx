import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack initialRouteName="chat" screenOptions={{headerShown:false}}>
      <Stack.Screen name="chat" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default ChatLayout;
