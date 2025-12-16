import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface IStepper {
  active: number;
}

const StepperComponent = ({ active = 3 }: IStepper) => {

  return (
    <View className='gap-2 justify-center'>
      <View className='flex-row items-center pr-6 ' style={{width:"90%"}}>
        <View className='bg-black rounded-full justify-center items-center' style={{ height: 20, width: 20 }}>
          {active > 1 && (
            <MaterialCommunityIcons name="check" color={"white"} size={16} />)}
          {active === 1 && <View style={{ height: 10, width: 10 }} className='rounded-full bg-background' />}
        </View>
        <View className='bg-black flex-1' style={{ height: 2 }}></View>
        <View className='bg-black rounded-full justify-center items-center' style={{ height: 20, width: 20 }}>
          {active > 2 && (<MaterialCommunityIcons name="check" color={"white"} size={16} />)}
          {active === 2 && <View style={{ height: 10, width: 10 }} className='rounded-full bg-background' />}
        </View>
        <View className='bg-black flex-1' style={{ height: 2 }}></View>
        <View className='bg-black rounded-full justify-center items-center' style={{ height: 20, width: 20 }}>
          {active > 3 && (<MaterialCommunityIcons name="check" color={"white"} size={16} />)}
          {active === 3 && <View style={{ height: 10, width: 10 }} className='rounded-full bg-background' />}
        </View>
      </View>
      <View className='flex-row gap-6 flex-1 h-6'>
        <Text className={`font-semibold text-[14px] ${active !== 1 && "text-[#7F7F7F]"}`} >
          Booking details
        </Text>
        <Text className={`font-semibold text-[14px] ${active !== 2 && "text-[#7F7F7F]"}`}>
          Payment methods
        </Text>
        <Text className={`font-semibold text-[14px] ${active !== 3 && "text-[#7F7F7F]"}`}>
          confirmation
        </Text>
      </View>
    </View>)




};

export default StepperComponent;
