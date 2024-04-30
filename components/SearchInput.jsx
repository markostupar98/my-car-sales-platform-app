import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";

const SearchInput = ({initialQuery}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary space-x-4 flex flex-row items-center">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search Cars ..."
        placeholderTextColor="#CDCDE0"
        onChangeText={(e)=>{setQuery(e)}}
        // {...props}
      />
      <TouchableOpacity onPress={()=>{
        if(!query) {
          return Alert.alert('Missing query','Please input something to search for results')
        }
        if(pathname.startsWith('/search')) router.setParams({query})
        else router.push(`/search/${query}`)
      }} >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
