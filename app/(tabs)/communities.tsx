import CommunnityTile from "@/components/CommunityTile";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  CameraIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";

const communities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Communities = () => {
  return (
    <View className="flex-1 bg-[#0c131b] pt-6 px-3 gap-1">
      {/* header */}
      <View className="flex flex-row items-center justify-between gap-2">
        <Text className="text-white text-xl font-semibold flex-1">
          Communities
        </Text>
        <View className="flex-row items-center justify-center gap-4">
          <TouchableOpacity onPress={() => {}}>
            <CameraIcon color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <EllipsisVerticalIcon color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View className="flex-row items-center gap-2 mb-1 border-b-[#000] border-b-4 pb-4">
          <View className="w-14 h-14 rounded-lg bg-[#7e8689]"></View>
          <View className="justify-center gap-1">
            <Text className="text-white">New community</Text>
          </View>
        </View>

        {communities.map((_: number, index: number) => (
          <CommunnityTile key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Communities;
