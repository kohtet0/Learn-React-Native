import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const json = await res.json();
      setPostList(json);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setError("Failed to fetch post!");
    }
  };

  const handleAdd = async () => {
    try {
      setPosting(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
        }),
      });
      const newPost = await res.json();
      setPostList((pre) => [newPost, ...pre]);
      setPosting(false);
      setTitle("");
      setBody("");
    } catch (error) {
      setPosting(false);
      setTitle("");
      setBody("");
      setError("Failed to add post!");
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"red"} />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter title"
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              placeholder="Enter body"
              style={styles.input}
              value={body}
              onChangeText={setBody}
            />
            <Button
              title={posting ? "Adding..." : "Add post"}
              onPress={handleAdd}
            />
          </View>
          <FlatList
            data={postList}
            renderItem={({ item }) => {
              return (
                <View style={styles.cardContainer}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={<View style={{ height: 20 }} />}
            ListEmptyComponent={
              <Text style={styles.emptyText}>There is no post</Text>
            }
            ListHeaderComponent={<Text style={styles.headerText}>Posts</Text>}
            ListFooterComponent={
              <Text style={styles.footerText}>End of post</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
  },
  cardContainer: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "500",
  },
  emptyText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  errorContainer: {
    backgroundColor: "tomato",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 20,
    color: "yellow",
    textAlign: "center",
  },
});
