import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllCars } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import CarCard from "../../components/CarCard";

const Home = () => {
const {data:cars, refetch } = useAppwrite(getAllCars)

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch()
    // refetching cars if any new is posted
    setRefreshing(false);
  };

  // console.log(data)

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={cars}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <CarCard car={item} />
          // <Text className="text-3xl text-white">{item.make}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back!
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  markostupar98
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Cars
              </Text>
              {/* <Trending data= /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No cars found" subtitle="No cars posted yet" />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
