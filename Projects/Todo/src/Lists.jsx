import { View, FlatList, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import List from "./List";

export default function Lists({ lists, setLists }) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setLists((pre) => [...pre]);
    setRefreshing(false);
  };

  return (
    <FlatList
      data={lists}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ index, item }) => {
        return <List lists={lists} setLists={setLists} item={item} />;
      }}
    />
  );
}
