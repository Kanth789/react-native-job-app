import {Stack} from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const Layout = ()=>{
    const [fontloadedArray] = useFonts({
        regular: require("../assets/fonts/DMSans-Regular.ttf"),
        bold: require("../assets/fonts/DMSans-Bold.ttf"),
        medium:require("../assets/fonts/DMSans-Medium.ttf")
      });
      
    
      const onLayoutRootView = useCallback(async () => {
        if (fontloadedArray) {
          await SplashScreen.hideAsync();
        }
      }, [fontloadedArray]);
    
      if (!fontloadedArray) {
        return null;
      }
    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout


