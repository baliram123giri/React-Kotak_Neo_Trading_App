import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { HP, WP } from "@/utils/helpers";
import ViewLayout from "@/components/ViewLayout";
import { darkBlue, darkGreen, gray, lighGray } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import MarketIndices from "@/components/MarketIndices";
import OptionChainBox from "@/components/OptionChainBox";
import MyImage from "@/components/MyImg/MyImage";
import InvesmentProducts from "@/components/InvesmentProducts";
import { data, invesmetProductsData, optionData, researchData } from "@/utils/data";
import ResearchBox from "@/components/ResearchBox";
import TabViewExample from "@/components/TabViewExample";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: HP(3) }} contentContainerStyle={{ paddingBottom: HP(3) }}>
            <ViewLayout>
                <Text style={{ fontSize: HP(2.3), color: gray }}>
                    Investment Summary
                </Text>
                <View
                    style={{ marginTop: HP(2), gap: WP(3), height: HP(11) }}
                    className="bg-white rounded-xl p-3 shadow-md  shadow-blue-500 flex-row items-center"
                >
                    <TouchableOpacity
                        className="rounded-md  justify-center items-center"
                        style={{ height: HP(5), width: HP(5), backgroundColor: lighGray }}
                    >
                        <AntDesign name="up" size={HP(2)} color={darkBlue} />
                        <AntDesign name="down" size={HP(2)} color={darkBlue} />
                    </TouchableOpacity>
                    <View>
                        <View style={{ gap: WP(2) }} className="flex-row items-center">
                            <Text style={{ fontSize: HP(1.8) }}>Equity</Text>
                            <Text style={{ fontSize: HP(2.1), fontWeight: 600 }}>
                                1.60 lakhs
                            </Text>
                        </View>
                        <View style={{ gap: WP(2) }} className="flex-row items-center">
                            <Text style={{ fontSize: HP(1.8) }}>Today's P/L</Text>
                            <Text
                                style={{ fontSize: HP(2.1), fontWeight: 600, color: darkGreen }}
                            >
                                +4,619 (+2.9%)
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity className="rounded-md  justify-center items-center ml-auto">
                        <AntDesign name="right" size={HP(2.5)} color={darkBlue} />
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: HP(2.3), color: gray, marginTop: HP(3) }}>
                    Market Indices
                </Text>
            </ViewLayout>
            <ScrollView
                contentContainerStyle={{ paddingRight: HP(3.5), paddingLeft: HP(1) }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: HP(1), height: HP(15.5) }}
            >
                {data.map((items, index) => {
                    return <MarketIndices {...items} key={index} />;
                })}
            </ScrollView>
            {/* //Market Indices */}
            <Text style={{ fontSize: HP(2.3), color: gray, marginLeft: WP(3.5) }}>
                Option chain
            </Text>
            <ScrollView
                contentContainerStyle={{
                    paddingLeft: HP(1),
                    paddingBottom: HP(1.2),
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View className="flex-row flex-wrap" style={{ width: 600 }}>
                    {optionData.map((items, index) => {
                        return <OptionChainBox {...items} key={index} />;
                    })}
                </View>
            </ScrollView>
            <ViewLayout>
                <View>
                    <Image source={require("@/assets/images/banner.png")} style={{ marginTop: HP(3), objectFit: "cover", width: WP(93.5), margin: "auto" }} />
                    {/* //products  */}
                    <Text style={{ fontSize: HP(2.3), color: gray }}>
                        Invesment products
                    </Text>
                    <View className="flex-row w-full flex-wrap" style={{ justifyContent: "space-between" }}>
                        {invesmetProductsData.map((items, index) => {
                            return <View key={index} style={{ width: "48%" }}><InvesmentProducts {...items} /></View>
                        })}
                    </View>
                </View>
                {/* //research  */}
                <View className="mt-2">
                    <Text style={{ fontSize: HP(2.3), color: gray }}>
                        Research
                    </Text>
                    <View className="flex-row w-full flex-wrap" style={{ justifyContent: "space-between" }}>
                        {researchData.map((items, index) => {
                            return <View key={index} style={{ width: "48%" }}><ResearchBox {...items} /></View>
                        })}
                    </View>
                </View>
                <View style={styles.market} className="bg-white rounded-xl shadow-custom  mb-4 mt-5">
                    <View className="p-2 px-4">
                        <Text style={{ fontSize: HP(3) }} className='text-blue-900 font-semibold'>Market movers</Text>
                        <Text style={{ fontSize: HP(1.8) }} className='text-neutral-500 font-medium'>
                            Shares which have gained
                        </Text>
                        <Text style={{ fontSize: HP(1.8) }} className='text-neutral-500 font-medium'>
                            and lost the most
                        </Text>
                    </View>
                    <TabViewExample />
                </View>
            </ViewLayout>

        </ScrollView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    market: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#3ABEF9',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // for Android shadow
    },
});
