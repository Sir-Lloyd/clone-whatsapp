import UpdateTile from "@/components/UpdateTile";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  CameraIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const updates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Updates = () => {
  return (
    <View className="flex-1 bg-[#0c131b] pt-6 px-3 gap-1">
      {/* header */}
      <View className="flex flex-row items-center justify-between gap-2">
        <Text className="text-white text-xl font-semibold flex-1">Updates</Text>
        <View className="flex-row items-center justify-center gap-4">
          <TouchableOpacity onPress={() => {}}>
            <CameraIcon color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MagnifyingGlassIcon color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <EllipsisVerticalIcon color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* user status */}
      <ScrollView>
        <View>
          <Text>Status</Text>
          <View className="flex-row items-center gap-2 mb-1">
            <View className="w-14 h-14 rounded-full bg-[#7e8689]"></View>
            <View className="justify-center gap-1">
              <Text className="text-white">My status</Text>
              <Text className="text-sm text-[#7e8689]">
                Tap to add status update
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-sm text-[#7e8689] my-1">Recent updates</Text>
        {updates.map((_: number, index: number) => (
          <UpdateTile key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Updates;
