import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import LoginHeader from "@/components/Headers/LoginHeader";
import MyImage from "@/components/MyImg/MyImage";
import { HP, WP } from "@/utils/helpers";
import { LinearGradient } from "expo-linear-gradient";
import Goback from "@/components/Goback";
import LoginComp from "@/components/AddAcount/LoginComp";
import LoginPan from "@/components/AddAcount/LoginPanCom";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { darkBlue } from "@/constants/Colors";
import Modal from "react-native-modal";
import BottomSheet from "@/components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserSetup from "@/components/AddAcount/UserSetup";
type Props = {};
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const AddAccount = (props: Props) => {
    const [loginType, setLoginType] = useState<string>("mobile");
    const { navigate } = useRouter();

    const ActivebtnClss =
        "bg-white h-full rounded-xl w-1/2 flex-row justify-center items-center shadow-lg border border-neutral-300";
    const deActiveBtnClss =
        "h-full rounded-xl w-1/2 flex-row justify-center items-center";

    function forgetRedirect() {
        navigate("/forget-pin");
    }
    const [initialHeight, setInitialHeight] = useState<number>(50);

    const toggleModal = () => {
        setInitialHeight(-SCREEN_HEIGHT / 3);
    };
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <LinearGradient
                // Background Linear Gradient
                colors={["#E3FEF7", "transparent"]}
                style={{ width: WP(100), height: HP(100) }}
                className="flex-1"
            >
                <View style={{ marginTop: HP(8), marginLeft: WP(3) }}>
                    <Goback />
                </View>
                <View
                    style={{ paddingHorizontal: WP(7.5), paddingVertical: HP(3.5) }}
                    className="flex-1 justify-between"
                >
                    <View>
                        <MyImage sourse={require("@/assets/images/icon.png")} aspects={8} />
                        <Text
                            style={{ fontSize: HP(3), marginTop: HP(1) }}
                            className="text-blue-900 font-semibold"
                        >
                            Welcome to the new age of investing
                        </Text>
                        {/* //Toglle  */}
                        <View
                            className="bg-neutral-200/70 rounded-xl flex-row"
                            style={{ height: HP(5), marginTop: HP(2) }}
                        >
                            <TouchableOpacity
                                onPress={() => setLoginType("mobile")}
                                className={
                                    loginType === "mobile" ? ActivebtnClss : deActiveBtnClss
                                }
                            >
                                <Text
                                    style={{ fontSize: HP(1.8) }}
                                    className="font-semibold text-neutral-700"
                                >
                                    Login with mobile
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setLoginType("Pan")}
                                className={
                                    loginType !== "mobile" ? ActivebtnClss : deActiveBtnClss
                                }
                            >
                                <Text
                                    style={{ fontSize: HP(1.8) }}
                                    className="font-semibold text-neutral-600"
                                >
                                    Login with PAN
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* //types  */}
                        {loginType === "mobile" ? <LoginComp /> : <LoginPan />}

                        <View
                            style={{ marginTop: HP(1.8), paddingHorizontal: WP(1) }}
                            className="flex-row justify-between items-center"
                        >
                            <TouchableOpacity onPress={forgetRedirect}>
                                <Text
                                    style={{ fontSize: HP(1.8) }}
                                    className="text-blue-900 font-medium"
                                >
                                    Forget Password?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal}>
                                <View
                                    className="flex-row justify-center rounded-md items-center gap-1 bg-white"
                                    style={{ height: HP(4.5), paddingHorizontal: WP(3) }}
                                >
                                    <FontAwesome5
                                        name="user-plus"
                                        size={HP(1.8)}
                                        color={darkBlue}
                                    />
                                    <Text
                                        style={{ fontSize: HP(1.8) }}
                                        className="text-blue-900  font-medium"
                                    >
                                        Add Account
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{ height: HP(7) }}
                        className="flex-row items-center justify-center rounded-xl bg-slate-200"
                    >
                        <Text
                            style={{ fontSize: HP(2.5) }}
                            className="font-medium text-neutral-600"
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>

                <BottomSheet
                    setInitialHeight={setInitialHeight}
                    initialHeight={initialHeight}
                >
                    <UserSetup />
                </BottomSheet>
            </LinearGradient>
        </GestureHandlerRootView>
    );
};

export default AddAccount;

const styles = StyleSheet.create({
    backdrop: {},
});
