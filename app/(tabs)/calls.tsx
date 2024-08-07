import CallLogTile from "@/components/CallLogTile";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  CameraIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const calls:number[] = [1,2,3,4,5,6,7,8,9,10]

const Calls = () => {
  return (
    <View className="flex-1 bg-[#0c131b] pt-6 px-3 gap-1">
      {/* header */}
      <View className="flex flex-row items-center justify-between gap-2">
        <Text className="text-white text-xl font-semibold flex-1">Calls</Text>
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

      {/* call log */}
      <ScrollView>
        {calls.map((_:number, index:number) => (
            <CallLogTile key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Calls;
