import ChatTile from "@/components/ChatTile";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CameraIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const filters: string[] = ["All", "Unread", "Favourites", "Groups"];

const messages: number[] = [1,2,3,4,5,6,7,8,9,10];

const Chats = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <ScrollView className="bg-[#0c131b] pt-6 px-3 gap-1" bounces>
      {/* header */}
      <View className="flex flex-row items-center justify-between gap-2 my-3">
        <Text className="text-white text-2xl font-semibold flex-1">
          WhatsApp
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <CameraIcon color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <EllipsisVerticalIcon color={"#fff"} />
        </TouchableOpacity>
      </View>
      {/* search */}
      <View className="rounded-full flex-row items-center gap-2 p-1 bg-[#242b31]">
        <MagnifyingGlassIcon color={"#fff"} />
        <TextInput
          placeholder="Ask Meta AI or Search"
          className="text-white"
          placeholderTextColor={"#7e8689"}
        />
      </View>
      {/* filters */}
      <ScrollView className="gap-2" horizontal bounces>
        {filters.map((filter: string, index: number) => (
          <TouchableOpacity
            onPress={() => {
              setActiveFilter(filter);
            }}
            key={index}
            className={`rounded-full px-3 py-1 ${
              filter === activeFilter ? "bg-[#103629]" : "bg-[#242b31]"
            }`}
          >
            <Text
              className={`${
                filter === activeFilter ? "text-[#31b66a]" : "text-[#7e8689]"
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* chats */}
      {messages.map((_:number, index:number) => (
        <ChatTile key={index} />
      ))}
    </ScrollView>
  );
};

export default Chats;
