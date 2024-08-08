import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowUpRightIcon, PhoneIcon } from "react-native-heroicons/outline";

const avatar = require('../assets/img/avatar.png')

const CallLogTile = () => {
  return (
    <View className="flex-row items-center gap-2 my-1">
      <View className="bg-[#d1c4fc] w-12 h-12 rounded-full">
      <Image source={avatar} resizeMode="cover" className="h-full w-full rounded-full" />
      </View>
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
