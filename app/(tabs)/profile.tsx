import assets from '@/assets'
import Header from '@/components/Header'
import { useApp } from '@/lib/hooks/useApp'
import { useAuth } from '@/lib/hooks/useAuth'
import { AntDesign, EvilIcons, Feather, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Profile = () => {
  const insets = useSafeAreaInsets()
  const { AppName } = useApp()
  const { user } = useAuth()
  const router = useRouter()

  return (
    <View className="flex-1 my-6 " style={{ paddingBottom: insets.bottom + 26 }}>
      <Header title='Profile' />

      <View className='my-4 flex-row px-6 items-center'>
        <View className='flex-1 flex-row gap-2 items-center'>
          <View className='' style={{ width: 85, height: 85 }}>
            <View className='rounded-full overflow-hidden relative' style={{ height: 80, width: 80 }}>
              <Image source={user?.profil ? typeof user?.profil == "string" ? { uri: user.profil } : user?.profil : assets.person} className='rounded-full h-full w-full' resizeMode='cover' />
            </View>
            <View className='rounded-full border border-border bg-white absolute bottom-0 -right-1 justify-center items-center' style={{ width: 30, height: 30 }}>
              <Text>
                <Foundation name="camera" size={20} color="#7F7F7F" />
              </Text>
            </View>
          </View>

          <View className='gap-2'>
            <Text className='font-bold'>{user?.name} </Text>
            <Text className='text-placeholder'>{user?.email} </Text>
          </View>
        </View>
        <Pressable onPress={() => router.push("/main/settings")} className='gap-2 items-center'>
          <Text><EvilIcons name="pencil" size={34} color="#7F7F7F" /></Text>
          <Text className='text-xs text-placeholder'>Edit Profile</Text>
        </Pressable>

      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-4" contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}>
        <View className='my-2'>
          <Text className='font-bold text-xl'>General</Text>

          <Pressable onPress={() => router.push("/main/user/favoriteCars")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <Feather name="heart" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Favorite Cars</Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/main/user")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <MaterialIcons name="event-repeat" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Previous Rant</Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/(tabs)/notifications")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <Ionicons name="notifications-outline" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Notification</Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push(user?.isPartner ? "/main/partner/details" : "/main/partner")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <MaterialCommunityIcons name="connection" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>
                {user?.isPartner ? "Rent out new car" : `Connected to  ${AppName} Partnerships`}
              </Text>
            </View>

            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

        </View>

        <View className='my-2'>
          <Text className='font-bold text-xl'>Support</Text>

          <Pressable onPress={() => router.push('/main/settings/currency')} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <MaterialIcons name="currency-exchange" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Currency </Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/main/settings/language")} className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <Ionicons name="language" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Language </Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <Fontisto name="persons" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Invite Friends </Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <MaterialIcons name="privacy-tip" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Privacy policy </Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>

          <Pressable className='my-2 flex-row items-center'>
            <View className='flex-1 flex-row gap-2 items-center'>
              <View className='border border-border rounded-full justify-center items-center' style={{ height: 40, width: 40 }}>
                <Text>
                  <AntDesign name="logout" size={24} color="#7F7F7F" />
                </Text>
              </View>
              <Text className='text-xl text-placeholder'>Log Out </Text>
            </View>
            <Text>
              <AntDesign name="right" size={24} color="#7F7F7F" />
            </Text>
          </Pressable>
        </View>

      </ScrollView>

    </View>
  )
}

export default Profile