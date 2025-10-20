import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersScreen from "./screens/UsersScreen";
import AlbumsScreen from "./screens/AlbumsScreen";
import PhotosScreen from "./screens/PhotosScreen";
import PhotoDetailScreen from "./screens/PhotoDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={UsersScreen} options={{ title: "Usuários" }} />
        <Stack.Screen name="Albums" component={AlbumsScreen} options={{ title: "Álbuns" }} />
        <Stack.Screen name="Photos" component={PhotosScreen} options={{ title: "Fotos" }} />
        <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} options={{ title: "Foto" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
