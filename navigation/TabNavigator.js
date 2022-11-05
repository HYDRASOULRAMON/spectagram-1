import React from "react";
import {CreateBottomNavigator} from "@react-navigation/bottom-tabs"
import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab= createBottomTabNavigator()
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
            screenOptions={({route})  => ({
             tabBarIcon:({focused,color,size})=>{
                let iconName;
                if (route.name ==='Feed'){
                    iconName=focused
                    ? "book"
                    : "book-outline";

                }
                else if(route.name==="CreatePost"){
                    iconName=focused
                    ? "create"
                    : "create-outline";
                }
                
                return <Ionicons name={iconName} size={size} color={color} />
                
             },
            })}
             tabBarOptions={{
                activeTintColor:"tomato",
                inActiveTintColor:"grey"
             }} 
         >
            <Tab.screen name="Feed" component={Feed}/>
            <Tab.screen name="CreatePost" component={CreatePost}/>
        
        
        </Tab.Navigator>
    )
}
export default BottomTabNavigator