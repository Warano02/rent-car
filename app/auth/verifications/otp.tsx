import AuthHeader from '@/components/auth/AuthHeader';
import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

const OTP_LENGTH = 4;

const ForgotPassword = () => {
 
    const router = useRouter();

    const [otp, setOtp] = useState<string[]>(
        Array(OTP_LENGTH).fill('')
    );

    const activeIndex = otp.findIndex(v => v === '');
    const isComplete = otp.every(v => v !== '');
    const otpCode = otp.join('');

    useEffect(() => {
        if (isComplete) {
            console.log('OTP:', otpCode);
        }
    }, [isComplete]);

    const handleKeyPress = (value: number | 'delete') => {
        setOtp(prev => {
            const next = [...prev];

            if (value === 'delete') {
                const lastFilled = next
                    .map((v, i) => (v ? i : -1))
                    .filter(i => i !== -1)
                    .pop();

                if (lastFilled !== undefined) {
                    next[lastFilled] = '';
                }
                return next;
            }

            const index = next.findIndex(v => v === '');
            if (index !== -1) {
                next[index] = String(value);
            }

            return next;
        });
    };

    return (
        <ScrollView className='flex-1 pt-4'>
            <AuthHeader/>

            <View className='my-4 px-6 items-center'>
                <Text className='text-black text-3xl font-semibold text-center'>
                    Enter Verification Code
                </Text>
            </View>

            <View className='mb-4 px-6'>
                <Text className='text-[16px] text-gray text-center'>
                    We have sent a code to : +237689******50
                </Text>
            </View>

            <View className='flex-row justify-center gap-3 mb-4'>
                {otp.map((digit, index) => {
                    const isActive = index === activeIndex || (isComplete && index === OTP_LENGTH - 1);
                    return (
                        <View key={index} className={`w-14 h-14 rounded items-center justify-center border ${isActive ? 'border-button' : 'border-btnBorder'} bg-white`}>
                            <Text className='text-2xl font-bold text-black'>
                                {digit}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <View className='px-6 mb-2'>
                <Button onPress={()=>router.push("/main/index")} disabled={!isComplete} className={`rounded-full p-4 ${isComplete ? 'bg-button' : 'bg-gray'}`}>
                    <Text className='text-white font-semibold text-xl'>
                        Continue
                    </Text>
                </Button>
            </View>

            <View className='mb-4 flex-row gap-2 justify-center'>
                <Text className='text-[17px] text-secondary'>
                    Didn’t receive the OTP?
                </Text>
                <Pressable>
                    <Text className='text-[17px] text-secondary font-bold'>
                        Resend
                    </Text>
                </Pressable>
            </View>

            <View className='px-6 bg-outlineButtonBg rounded-2xl p-4  flex-row flex-wrap justify-between'>
                <View className='gap-1 w-full my-2 justify-center items-center'>
                    <Text className='text-[14px] text-placeholder'>
                        Form Message
                    </Text >
                    <Text className='text-[14px] text-placeholder'>
                        6979
                    </Text>
                </View>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <Pressable
                        key={num} onPress={() => handleKeyPress(num)} className='w-[30%] h-16 mb-3 bg-white border border-btnBorder rounded-xl items-center justify-center' >
                        <Text className='text-2xl font-bold'>
                            {num}
                        </Text>
                    </Pressable>
                ))}

                <View className='w-[30%]' />

                <Pressable
                    onPress={() => handleKeyPress(0)}
                    className='w-[30%] h-16 bg-white border border-border rounded-xl items-center justify-center'
                >
                    <Text className='text-2xl font-bold'>0</Text>
                </Pressable>

                <Pressable onPress={() => handleKeyPress('delete')} className='w-[30%] h-16 bg-white border border-border rounded-xl items-center justify-center'>
                    <Text className='text-xl font-bold'>⌫</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default ForgotPassword;
