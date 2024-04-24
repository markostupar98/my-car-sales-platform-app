import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";



const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? 'font-semibold' : 'font-regular'} text-xs`} style={{color:color}} >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#5F9EA0',
      tabBarInactiveTintColor:'#CDCDE0',
      tabBarStyle:{
        backgroundColor:'#50C878',
        borderTopWidth:1,
        borderTopColor:'#232533',
        height:84
      }
    }}>
      <Tabs.Screen name="home" options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:({color, focused}) => (
          <TabIcon icon={icons.home} name='Home' color={color} focused={focused} />
        ) 
      }} />
      <Tabs.Screen name="liked" options={{
        title:'Liked',
        headerShown:false,
        tabBarIcon:({color, focused}) => (
          <TabIcon icon={icons.bookmark} name='Liked' color={color} focused={focused} />
        ) 
      }} />
      <Tabs.Screen name="post" options={{
        title:'Post',
        headerShown:false,
        tabBarIcon:({color, focused}) => (
          <TabIcon icon={icons.plus} name='Post' color={color} focused={focused} />
        ) 
      }} />
      <Tabs.Screen name="profile" options={{
        title:'Profile',
        headerShown:false,
        tabBarIcon:({color, focused}) => (
          <TabIcon icon={icons.profile} name='Profile' color={color} focused={focused} />
        ) 
      }} />
    </Tabs>
    </>
  );
};

export default TabsLayout;
