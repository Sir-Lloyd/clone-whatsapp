import { Text, TouchableOpacity, View } from "react-native";
import { ArrowUpRightIcon, PhoneIcon } from "react-native-heroicons/outline";

const CallLogTile = () => {
  return (
    <View className="flex-row items-center gap-2 my-1">
      <View className="bg-[#d1c4fc] w-12 h-12 rounded-full p-2"></View>
      <View className="flex-1 justify-center gap-1">
        <Text className="text-white">John Doe</Text>
        <View className="flex-row items-center gap-1">
          <ArrowUpRightIcon color={'#21c063'} size={15} />
          <Text className="text-[#7e8689] text-sm">August 5, 17:26</Text>
        </View>
      </View>
      <TouchableOpacity>
        <PhoneIcon color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

export default CallLogTile;
