import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";

const CarCard = ({
  car: {
    price,
    make,
    condition,
    transmision,
    driveType,
    description,
    users:{avatar},
    image
  },
}) => {
  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
            <Image source={{uri:avatar}} className='w-full h-full rounded-lg' resizeMode="cover" />
          </View>
          <View className='justify-center ml-3 flex-1 gap-y-1'>
            <Text className='text-white font-psemibold'>
              {make}
            </Text>
            <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>
              {owner}
            </Text>
          </View>
        </View>
        <View className='pt-2'>
          <Image source={icons.menu} className='w-5 h-5' resizeMode="contain" />
        </View>
      </View>
      <TouchableOpacity>
        <Image source={{uri:image}} />
      </TouchableOpacity>
    </View>
  );
};

export default CarCard;
