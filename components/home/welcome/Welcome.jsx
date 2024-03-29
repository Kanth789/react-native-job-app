import React, { useCallback } from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {  useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";
import { useFonts } from "expo-font";

const jobsTypes = ["Full-time", "Part-time", "Contract"];

const Welcome = ({search,setSearch,handleClick}) => {
  const router = useRouter()
  const[activeJobType,setActiveJobType] = useState('Full-time')
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello,Kiran</Text>
        <Text style={styles.welcomeMessage}>Find Your Prefect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text)=>setSearch(text)}
            placeholder="What are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
