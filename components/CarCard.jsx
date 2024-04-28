import { View, Text, Image } from "react-native";
import React from "react";

const CarCard = ({
  car: {
    price,
    make,
    condition,
    transmision,
    driveType,
    description,
    owner,
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
          </View>
        </View>
      </View>
      <Text className='text-2xl text-white'>
        {make}
      </Text>
    </View>
  );
};

export default CarCard;
