import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  CameraIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const Updates = () => {
  return (
    <ScrollView className="bg-[#0c131b] pt-6 px-3 gap-1">
        {/* header */}
      <View className="flex flex-row items-center justify-between gap-2">
        <Text className="text-white text-xl font-semibold flex-1">Updates</Text>
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

      {/* user status */}
      <View>
        <Text>Status</Text>
        <View>
            <View className="w-14 h-14 rounded-full bg-[#7e8689]"></View>
            <View>
                <Text>My status</Text>
                <Text>Tap to add status update</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Updates;
