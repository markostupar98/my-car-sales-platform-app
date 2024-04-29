import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import * as Animatible from "react-native-animatable";
import { icons } from "../constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const LatestItem = ({ activeItem, item }) => {
  return (
    <Animatible.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      <TouchableOpacity className='relative justify-center items-center' activeOpacity={0.7}>
        <ImageBackground source={{
          uri:item.image
        }} className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40' resizeMode="cover" />
      </TouchableOpacity>
    </Animatible.View>
  );
};

const viewableItemsChanged = ({viewableItems}) => {
  if(viewableItems.length > 0) {
    setActiveItem(viewableItems[0].key)
  }
}

const Latest = ({ cars }) => {
  const [activeItem, setActiveItem] = useState(cars[1]);

  return (
    <FlatList
      data={cars}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <LatestItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold:70
      }}
      contentOffset={{x:170}}
    />
  );
};

export default Latest;
