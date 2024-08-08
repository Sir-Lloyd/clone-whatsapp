import { Tabs } from "expo-router"

const TabLayout = () => {
    return (
        <Tabs initialRouteName="index" screenOptions={{headerShown:false}}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="updates" />
            <Tabs.Screen name="communities" />
            <Tabs.Screen name="calls" />
        </Tabs>
    )
}

export default TabLayout;