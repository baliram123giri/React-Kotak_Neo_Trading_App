import { gray } from '@/constants/Colors';
import { HP } from '@/utils/helpers';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';



const AnimatedText = ({ messages }: { messages: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (messages.length === 1) return
        const interval = setInterval(() => {
            Animated.timing(translateY, {
                toValue: -30, // Adjust based on the text height
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                translateY.setValue(50); // Adjust based on the text height
                setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 5000); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, [translateY]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.textContainer, { transform: [{ translateY }] }]}>
                <Text style={{...styles.text, color:gray}}>{messages[currentIndex]}</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: HP(2), // Adjust based on the text height
        overflow: 'hidden',
        marginTop: HP(0.5),
    },
    textContainer: {
        height: HP(2), // Adjust based on the text height
        justifyContent: 'center',
    },
    text: {
        fontSize: HP(1.6), // Adjust based on your design
    },
});

export default AnimatedText;
