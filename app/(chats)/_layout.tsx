import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default ChatLayout;
