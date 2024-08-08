import { Link, router } from "expo-router";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowLeftIcon,
  CameraIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  PaperClipIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "react-native-heroicons/outline";
import { MicrophoneIcon } from "react-native-heroicons/solid";

const background = require("../../assets/img/background.png")
const avatar = require('../../assets/img/avatar.png')

const ChatScreen = () => {
  return (
    <View className="flex-1 bg-[#0c131b] pt-6 gap-1">
      {/* header */}
      <View className="flex-row items-center px-1 gap-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center gap-1"
        >
          <ArrowLeftIcon color={"#fff"} size={18} />
          <View className="h-10 w-10 bg-[#21c063] rounded-full">
            <Image source={avatar} resizeMode="cover" className="h-full w-full rounded-full" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/profile")}
          className="flex-1 justify-center gap-1"
        >
          <Text className="text-white text-lg">John Doe</Text>
        </TouchableOpacity>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => {}}>
            <VideoCameraIcon color={"#fff"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <PhoneIcon color={"#fff"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <EllipsisVerticalIcon color={"#fff"} size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1">
        <ImageBackground
          source={background}
          resizeMode="cover"
          className="flex-1 justify-center"
        >
        {/* chats */}
        <ScrollView bounces></ScrollView>
        {/* input */}
        <View className="flex-row px-1 pb-1 gap-1 items-center">
          <View className="bg-[#1f2c34] flex-1 rounded-full flex-row items-center gap-1 p-2">
            <TouchableOpacity onPress={() => {}}>
              <FaceSmileIcon color={"#7e8689"} />
            </TouchableOpacity>
            <TextInput
              placeholder="Message"
              placeholderTextColor={"#7e8689"}
              multiline
              className="flex-1 text-white"
            />
            <TouchableOpacity onPress={() => {}}>
              <PaperClipIcon color={"#7e8689"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <CameraIcon color={"#7e8689"} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            className="bg-[#21c162] rounded-full h-11 w-11 items-center justify-center"
          >
            <MicrophoneIcon color={"#000"} />
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ChatScreen;
