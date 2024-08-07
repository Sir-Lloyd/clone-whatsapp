import { Text, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { MegaphoneIcon } from "react-native-heroicons/solid";

const CommunnityTile = () => {
  return (
    <View className="border-b-4 border-[#000] my-2 gap-2 py-2">
      <View className="items-center gap-2 flex-row border-b border-b-[#7e8689] pb-3">
        <View className="w-12 h-12 rounded-lg bg-[#7e8689]"></View>
        <Text className="text-white">Nerdvanna</Text>
      </View>

      <View className="flex-row items-center gap-2">
        <View className="bg-[#103629] rounded-lg p-2">
          <MegaphoneIcon color={"#21c063"} />
        </View>
        <View className="flex-1 justify-center gap-1">
          <Text className="text-white">Announcements</Text>
          <Text className="text-[#7e8689]">Admin: New Con in the works</Text>
        </View>
        <Text className="text-[#7e8689] text-xs">04/08/2024</Text>
      </View>

      <View className="flex-row items-center gap-2">
        <View className="bg-[#d1c4fc] w-11 h-11 rounded-full p-2"></View>
        <View className="flex-1 justify-center gap-1">
          <Text className="text-white">Inner Circle</Text>
          <Text className="text-[#7e8689]">Gojo: I call for a meeting</Text>
        </View>
        <Text className="text-[#7e8689] text-xs">04/08/2024</Text>
      </View>

      <View className="flex-row items-center gap-2">
        <View className="w-11 h-11 rounded-full justify-center items-center">
            <ChevronRightIcon color={'#7e8689'} size={19} />
        </View>
        <Text className="text-[#7e8689]">View all</Text>
      </View>
    </View>
  );
};

export default CommunnityTile;
