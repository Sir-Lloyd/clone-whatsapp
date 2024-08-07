import { Image, Text, TouchableOpacity, View } from "react-native";

const ChatTile = () => {
    return (
        <View className="flex-row gap-2 items-center my-1">
            <TouchableOpacity onPress={() => {}} className="items-center justify-center w-14 h-14 rounded-full bg-[#7e8689]">
                <Text>PB</Text>
            </TouchableOpacity>
            <View className="flex-1 justify-center gap-1">
                <Text className="text-white text-base font-semibold">Pookie Bear</Text>
                <Text className="text-[#7e8689]">Baby Shark du du du!</Text>
            </View>
            <View className="justify-center items-center gap-1">
                <Text className="text-[#21c063]">19:45</Text>
                <Text className="bg-[#21c063] px-2 py-1 rounded-full">3</Text>
            </View>
        </View>
    )
}

export default ChatTile;