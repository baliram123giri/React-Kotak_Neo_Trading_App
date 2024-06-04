import { DashboardSearch } from "@/components/Search/DashboardSearch";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { darkBlue, layoutBg } from "@/constants/Colors";
import { HP } from "@/utils/helpers";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: darkBlue,

                tabBarStyle: {
                    height: HP(7),
                    paddingBottom: 6,
                    paddingTop: 6,
                },
            }}
            sceneContainerStyle={{
                backgroundColor: layoutBg
            }}

        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "Home",
                    header: () => <DashboardSearch />,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="watchlist"
                options={{
                    title: "Watchlist",
                    tabBarLabelStyle: {
                        fontSize: HP(1.6),
                        fontWeight: "bold",
                    },
                    header: () => <DashboardSearch />,
                    tabBarIcon: ({ color, focused }) => (
                        <Fontisto
                            name={focused ? "bookmark-alt" : "bookmark"}
                            size={22}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    title: "Orders",
                    tabBarLabelStyle: {
                        fontSize: HP(1.6),
                        fontWeight: "bold",
                    },
                    header: () => <DashboardSearch />,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name={"assignment"} size={22} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="portfolio"
                options={{
                    title: "Portfolio",
                    tabBarLabelStyle: {
                        fontSize: HP(1.6),
                        fontWeight: "bold",
                    },
                    header: () => <DashboardSearch />,
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? "briefcase" : "briefcase-outline"}
                            size={22}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="invest"
                options={{
                    title: "Invest",
                    tabBarLabelStyle: {
                        fontSize: HP(1.6),
                        fontWeight: "bold",
                    },
                    header: () => <DashboardSearch />,
                    tabBarIcon: ({ color }) => (
                        <Entypo name={"bar-graph"} size={22} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
