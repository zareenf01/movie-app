import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  BookmarkIcon,
  HomeIcon,
} from "react-native-heroicons/outline";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size="20" strokeWidth={2} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color, size }) => (
            <ArrowRightCircleIcon size="20" strokeWidth={2} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "bookmark",
          tabBarIcon: ({ color, size }) => (
            <BookmarkIcon size="20" strokeWidth={2} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "categories",
          tabBarIcon: ({ color, size }) => (
            <ArchiveBoxIcon size="20" strokeWidth={2} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
