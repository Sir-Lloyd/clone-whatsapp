import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  BellAlertIcon,
  CameraIcon,
  ChatBubbleBottomCenterIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  HandThumbDownIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  NoSymbolIcon,
  PaperClipIcon,
  PhoneIcon,
  PhotoIcon,
  TrashIcon,
  UsersIcon,
  VideoCameraIcon,
} from "react-native-heroicons/outline";

const media: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-[#0c131b] pt-6 gap-1">
      {/* header */}
      <View className="px-2 flex-row justify-between items-center h-12">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeftIcon color={"#fff"} size={18} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()}>
          <EllipsisVerticalIcon color={"#fff"} size={18} />
        </TouchableOpacity>
      </View>
      <ScrollView bounces>
        {/* banner */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
          <View className="items-center gap-1">
            <View className="h-32 w-32 bg-[#21c162] rounded-full"></View>
            <Text className="text-white text-lg">John Doe</Text>
            <Text className="text-[#7e8689]">+263 77 789 4566</Text>
          </View>

          <View className="flex-row gap-2">
            <View className="border border-[#7e8689] flex-1 rounded-xl justify-center items-center py-2">
              <PhoneIcon color={"#21c162"} />
              <Text className="text-white text-sm">Audio</Text>
            </View>

            <View className="border border-[#7e8689] flex-1 rounded-xl justify-center items-center py-2">
              <VideoCameraIcon color={"#21c162"} />
              <Text className="text-white text-sm">Video</Text>
            </View>

            <View className="border border-[#7e8689] flex-1 rounded-xl justify-center items-center py-2">
              <MagnifyingGlassIcon color={"#21c162"} />
              <Text className="text-white text-sm">Search</Text>
            </View>
          </View>
        </View>
        {/* about */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
          <Text className="text-white">typing...</Text>
          <Text className="text-[#7e8689] text-sm">June 7</Text>
        </View>

        {/* media */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
          <View className="flex-row py-2 items-center gap-x-2">
            <Text className="text-[#7e8689] text-sm flex-1">
              Media, links, and docs
            </Text>
            <Text className="text-[#7e8689] text-sm">12</Text>
            <ChevronRightIcon color={"#7e8689"} size={18} />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="gap-x-1"
          >
            {media.map((_: number, index: number) => (
              <View
                key={index}
                className="h-28 w-28 bg-[#fff] rounded-lg"
              ></View>
            ))}
          </ScrollView>
        </View>

        {/* nots */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
          <TouchableOpacity
            onPress={() => {}}
            className="flex-row items-center gap-x-2 py-1"
          >
            <View className="h-8 w-8 items-center justify-center">
              <BellAlertIcon color={"#7e8689"} />
            </View>
            <Text className="flex-1 text-white">Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="flex-row items-center gap-x-2 py-1"
          >
            <View className="h-8 w-8 items-center justify-center">
              <PhotoIcon color={"#7e8689"} />
            </View>
            <Text className="flex-1 text-white">Media visibility</Text>
          </TouchableOpacity>
        </View>

        {/* settings */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
            <TouchableOpacity onPress={() => {}} className="flex-row items-center gap-x-2 py-1">
            <View className="h-8 w-8 items-center justify-center">
              <LockClosedIcon color={"#7e8689"} />
            </View>
            <View>
                <Text className="text-white">Encryption</Text>
                <Text className="text-[#7e8689] text-sm flex-wrap">Messages and calls are end-to-end encrypted. Tap to verify</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} className="flex-row items-center gap-x-2 py-1">
            <View className="h-8 w-8 items-center justify-center">
              <ClockIcon color={"#7e8689"} />
            </View>
            <View>
                <Text className="text-white">Disappearing messages</Text>
                <Text className="text-[#7e8689] text-sm flex-wrap">Off</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}} className="flex-row items-center gap-x-2 py-1">
            <View className="h-8 w-8 items-center justify-center">
              <ChatBubbleBottomCenterIcon color={"#7e8689"} />
            </View>
            <View>
                <Text className="text-white">Chat lock</Text>
                <Text className="text-[#7e8689] text-sm flex-wrap">Lock and hide this chat of this device</Text>
            </View>
            </TouchableOpacity>
        </View>

        {/* groups */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
            <Text className="text-[#7e8689] text-xs">No groups in common</Text>
            <View className="flex-row items-center gap-x-2">
                <View className="bg-[#21c162] items-center justify-center rounded-full h-9 w-9">
                    <UsersIcon color={'#000'} />
                </View>
                <Text className="text-white">Create group with John</Text>
            </View>
        </View>

        {/* options */}
        <View className="p-2 gap-y-2 border-b-8 border-b-[#000]">
        <TouchableOpacity
            onPress={() => {}}
            className="flex-row items-center gap-x-2 py-1"
          >
            <View className="h-8 w-8 items-center justify-center">
              <TrashIcon color={"#7e8689"} />
            </View>
            <Text className="flex-1 text-white">Remove from favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="flex-row items-center gap-x-2 py-1"
          >
            <View className="h-8 w-8 items-center justify-center">
              <NoSymbolIcon color={"#f00"} />
            </View>
            <Text className="flex-1 text-red-500">Block John</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="flex-row items-center gap-x-2 py-1"
          >
            <View className="h-8 w-8 items-center justify-center">
              <HandThumbDownIcon color={"#f00"} />
            </View>
            <Text className="flex-1 text-red-500">Report John</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
