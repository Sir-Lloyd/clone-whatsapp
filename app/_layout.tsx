import { Stack } from "expo-router"

const HomeLayout = () => {
    return (
        <Stack screenOptions={{contentStyle: {
            backgroundColor: '#0c131b'
        }}}>
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
    )
}

export default HomeLayout;