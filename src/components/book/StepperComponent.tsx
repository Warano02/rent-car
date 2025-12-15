import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface IStepper {
  active: number;
}

const StepperComponent = ({active = 1}: IStepper) => {
  return (
    <View className='flex-row items-center justify-between gap-6 py-6'>
      <View className='bg-black absolute' style={{height:2,width:"80%",left:"10%"}} />
      <View className='items-center justify-center ' style={{height:50}} >
        <View className='rounded-full bg-black items-center justify-center' style={{height:20,width:20}} >
          {active > 1 && (
            <MaterialCommunityIcons
              name="check"
              color={"white"}
              size={16}
            />
          )}
          {active === 1 && <View style={{height:10,width:10}} className='rounded-full bg-background' />}
        </View>
        <Text
        className='font-semibold text-[14px]'
          style={[{marginTop:6}, active !== 1 && {color:"#7F7F7F"}]}>
          Booking details
        </Text>
      </View>
      <View className='items-center justify-center' style={{height:50}} >
        <View style={{height:20,width:20}} className='bg-black rounded-full items-center justify-center'>
          {active > 2 && (
            <MaterialCommunityIcons
              name="check"
              color={"white"}
              size={16}
            />
          )}
          {active === 2 && <View style={{height:10,width:10}} className='bg-background rounded-full' />}
        </View>
        <Text
         className='mt-6 text-[14px] font-semibold'
         style={[ active !== 2 && {color:"#7F7F7F"}]}>
          Payment methods
        </Text>
      </View>
      <View className='items-center justify-center' style={{height:50}} >
        <View style={{height:20,width:20}} className='bg-black rounded-full items-center justify-center'>
          {active > 3 && (
            <MaterialCommunityIcons
              name="check"
              color={"white"}
              size={16}
            />
          )}
          {active === 3 && <View style={{height:10,width:10}} className='bg-background rounded-full' />}
        </View>
        <Text
         className='mt-6 text-[14px] font-semibold'
         style={[ active !== 3 && {color:"#7F7F7F"}]}>
          confirmation
        </Text>
      </View>
    </View>
  );
};

export default StepperComponent;
