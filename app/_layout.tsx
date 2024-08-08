import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
    initialRouteName="(tabs)"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#0c131b",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(chats)" />
    </Stack>
  );
};

export default HomeLayout;
