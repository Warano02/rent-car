import { Link, RelativePathString } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const TitleSection = ({ title, link }: { title: string, link: RelativePathString | string }) => {
  return (
    <View className='my-6 px-6 flex-row justify-between items-center '>
      <Text className='text-xl font-bold'>{title} </Text>
      {/**@ts-ignore */}
      <Link href={link} className='text-[13px] text-search'>
        <Text>View All</Text>
      </Link>
    </View>
  )
}

export default TitleSection