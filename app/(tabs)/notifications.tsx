import { icons } from '@/assets'
import { BottomSheet } from '@/components/BottomSheet'
import Header from '@/components/Header'
import { useApp } from '@/lib/hooks/useApp'
import { Feather, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Notifications = () => {
  const insets = useSafeAreaInsets()
  const { notifications } = useApp()
  const [selectedId, setSelectedId] = useState<string[]>([])


  const [openDelete, setOpenDelete] = useState(false)

  const SelectAll = () => selectedId.length == notifications.length ? setSelectedId([]) : setSelectedId(notifications.map(el => el.id))



  const toggleSelect = (id: string) => {
    setSelectedId(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    )
  }

  const Click = (id: string) => {
    if (selectedId.length) return toggleSelect(id)
    //mark as read a implementé
  }

  return (
    <View className="flex-1 my-6 " style={{ paddingBottom: insets.bottom + 26 }}>
      <Header title='Notification' />
      {!notifications.length && <NoNotification />}

      {selectedId.length && (<View className='flex-row justify-between px-6'>
        <View className='flex-row gap-2 items-center'>
          <Pressable onPress={SelectAll} className={`rounded-full border border-border ${selectedId.length == notifications.length}`} style={{ height: 24, width: 24 }} >
            {selectedId.length == notifications.length && <MaterialIcons name="check-circle" size={24} color="black" />}

          </Pressable>

          <Text className='text-bgTab font-semibold'>All</Text>
          <Text className='text-bgTab font-semibold'>{selectedId.length} </Text>
          <Text className='text-bgTab font-semibold'>Notifications</Text>
        </View>

        <Pressable onPress={() => setOpenDelete(true)} className='rounded-full border border-border justify-center items-center' style={{ height: 40, width: 40 }}>
          <MaterialCommunityIcons name="trash-can-outline" size={24} color="#7F7F7F" />
        </Pressable>
      </View>)
      }

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: insets.bottom + 20,
        }}
        renderItem={({ item }) => (
          <SingleNotification
            onLongPress={() => toggleSelect(item.id)}
            onPress={() => Click(item.id)}
            title={item.title}
            contain={item.containt}
            isSelected={selectedId.includes(item.id)}
            isRead={item.isRead}
            icon={item?.icon}
          />
        )}
      />


      <DeleteNotifications isVisible={openDelete} setIsVisible={setOpenDelete} />
    </View>
  )
}


interface INotif {
  title: string
  isRead: boolean,
  isSelected: boolean,
  contain: string,
  icon?: string,
  onLongPress: () => void,
  onPress: () => void
}

const SingleNotification = ({ icon, onPress, onLongPress, isRead, title, isSelected, contain }: INotif) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} delayLongPress={300} className={`flex-row gap-2 my-2 py-2 rounded-lg ${isSelected ? "bg-outlineButtonBg" : isRead ? "bg-outlineButtonBg" : "bg-white px-2"}`} style={{ height: 80 }}>
      <View className='flex-row gap-1 items-center justify-center' style={{ width: 90 }}>
        {isSelected && <MaterialIcons name="check-circle" size={24} color="black" />}
        <View className='justify-center items-center rounded-full border border-border' style={{ height: 44, width: 44 }}>
          <FontAwesome6 name={icon || "circle-check"} size={24} color="#7F7F7F" />
        </View>

      </View>

      <View className='flex-1 gap-2'>
        <View className='flex-row justify-between items-center'>
          <Text className=' font-bold'>{title} </Text>

          <View className='flex-row justify-center items-center gap-2 '>
            <Text className='text-xs text-placeholder'>10:00 am</Text>
            {!isRead && <View className='rounded-full bg-blue relative' style={{ height: 10, width: 10 }}></View>}
          </View>

        </View>

        <Text className='text-xs text-placeholder'>
          {contain.length < 86 ? contain : contain.slice(0, 83).concat("...")}
        </Text>
      </View>

    </Pressable>
  )
}


interface IDeleteNotifs {
  isVisible: boolean,
  setIsVisible: (e: any) => void
}

const DeleteNotifications = ({ isVisible, setIsVisible }: IDeleteNotifs) => {
  return (
    <BottomSheet visible={isVisible} setVisible={setIsVisible}>
      <View className='flex-1 justify-center items-center'>
        <View className='bg-white rounded-lg p-4 ' style={{ width: 340, height: 320 }}>
          <Pressable onPress={() => setIsVisible(false)} className=' mb-2'>
            <Feather name="x" size={24} color="black" />
          </Pressable>

          <View className='flex-1 items-center justify-center'>
            <View className='rounded-full bg-[#CD1B1B] justify-center items-center' style={{ height: 55, width: 55 }}>
              <Feather name="alert-triangle" size={30} color="white" />
            </View>
          </View>

          <View className='gap-2'>
            <Text className='text-xl font-bold'>Are you sure you want to delete your notifications permanently?</Text>
            <Text className='text-[15px] text-placeholder'>By doing this, your notifications will be deleted permanently and you will not be able to recover your notifications anymore.</Text>
          </View>

          <View className='flex-row gap-2 my-4'>
            <Pressable className='rounded-lg justify-center items-center border border-border bg-outlineButtonBg' style={{ width: 150, height: 45 }}>
              <Text className='font-bold'>Delete</Text>
            </Pressable>
            <Pressable onPress={() => setIsVisible(false)} className='rounded-lg justify-center items-center border border-border bg-bgTab' style={{ width: 150, height: 45 }}>
              <Text className='font-bold text-white'>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BottomSheet>
  )
}



const NoNotification = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='gap-6 items-center' style={{ width: 290, height: 270 }}>
        <View className='bg-btnBorder rounded-full justify-center items-center relative border-border' style={{ width: 170, height: 170 }}>
          <View className="bg-white border border-btnBorder items-center justify-center rounded-full absolute -top-1 right-2" style={{ height: 42, width: 42 }}>
            <Text className='font-bold'>0</Text>
          </View>
          <Image source={icons.notif} style={{ width: 80, height: 82 }} />
        </View>

        <View className='gap-2 justify-center items-center'>
          <Text className='font-bold text-xl'>No NOTIFICATION</Text>
          <Text className='text-placeholder text-center text-[14px] font-semibold'>Clutter Cleared Well Notify You When There Is Something New.</Text>
        </View>
      </View>
    </View>
  )
}

export default Notifications