import {
  View,
  Text,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import {  searchCars } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import CarCard from "../../components/CarCard";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: cars, refetch } = useAppwrite(()=>searchCars(query));

  useEffect(() => {
    refetch();
  }, [query]);

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
          <View className="my-6 px-4">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Results
            </Text>
            <Text className="text-2xl font-psemibold text-white">{query}</Text>
            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query} />
            </View>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Cars
              </Text>
              {/* <Latest data={latestCars ?? []} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No cars found" subtitle="No cars found for the requested search" />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
