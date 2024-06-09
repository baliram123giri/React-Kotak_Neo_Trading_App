import { darkBlue, gray } from "@/constants/Colors";
import { HP } from "@/utils/helpers";
import * as React from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ShareList from "./ShareList";
import { GainersData } from "@/utils/data";


export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "gainers", title: "Gainers", count: 22 },
        { key: "losers", title: "Losers", count: 2 },
        { key: "high_week", title: "52 weeks high", count: 2 },
        { key: "low_week", title: "52 weeks low", count: 2 },
    ]);
    const FirstRoute = () => (
        <View style={{ display: index !== 0 ? "none" : "flex" }}>
            <ShareList data={GainersData} />
        </View>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: "#fff" }} />
    );

    const renderScene = SceneMap({
        gainers: FirstRoute,
        losers: SecondRoute,
        high_week: SecondRoute,
        low_week: SecondRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            style={{ minHeight: 120 }}

            initialLayout={{ width: layout.width, height: 120 }}
            renderTabBar={(props) => (
                <TabBar
                tabStyle={{padding:0, alignContent:"flex-start"}}
                    scrollEnabled
                    activeColor={darkBlue}
                    style={{ elevation: 0, }}
                    labelStyle={{ color: gray, fontWeight: 600 }}
                    indicatorContainerStyle={{
                        backgroundColor: "white",

                    }}

                    indicatorStyle={{ borderColor: darkBlue, borderWidth: 1, backgroundColor: darkBlue, padding: 0, }}
                    {...props}
                    renderLabel={({ route: { count, title }, focused }) =>
                        <View style={{ gap: 4, padding: 0 }} className="flex-row items-center">
                            <Text style={{ fontSize: HP(1.9), color: focused ? darkBlue : gray, fontWeight: 600 }}>{title}</Text>
                            <View className="flex-row justify-center items-center px-2 py-0.5" style={{ backgroundColor: focused ? darkBlue : gray, borderRadius: 12 }}>
                                <Text className="text-white font-semibold" style={{ fontSize: HP(1.3) }}>{count}</Text>
                            </View>
                        </View>}
                />

            )}
        />
    );
}
