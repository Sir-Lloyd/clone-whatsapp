import { Text, View } from "react-native";

const UpdateTile = () => {
  return (
    <View className="flex-row items-center gap-2 my-1">
      <View className="w-14 h-14 rounded-full bg-[#7e8689]"></View>
      <View className="justify-center gap-1">
        <Text className="text-white">Pookie Bear</Text>
        <Text className="text-sm text-[#7e8689]">3 minutes ago</Text>
      </View>
    </View>
  );
};

export default UpdateTile;
