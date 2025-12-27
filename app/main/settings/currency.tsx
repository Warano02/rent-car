import Header from '@/components/Header'
import { useCurrency } from '@/lib/hooks/useCurrency'
import { currencies } from '@/lib/utils/currency'
import { useRouter } from 'expo-router'
import React, { useMemo } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'

const Currency = () => {
  const { currency, setCurrencyByName } = useCurrency()

  const sortedCurrencies = useMemo(() => {
    return [currency, ...currencies.filter(c => c.name !== currency.name).sort((a, b) => a.name.localeCompare(b.name)),]
  }, [currency])
  const router = useRouter()
  return (
    <View className="flex-1 py-4 ">
      <Header title="Currency" />

      <View className="flex-1 px-5">
        <Text className="text-xl text-center my-4 text-gray-500 leading-5 mb-6 ">
          Prices will be displayed in your selected currency.
        </Text>

        <FlatList
          data={sortedCurrencies}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={{ gap: 14 }}
          contentContainerStyle={{ gap: 14 }}
          renderItem={({ item }) => {
            const isActive = item.name === currency.name
            return (
              <Pressable onPress={() => setCurrencyByName(item.name)} className={`flex-1 rounded-2xl p-5 items-center justify-center ${isActive ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                <Text className={`text-xl font-semibold tracking-wide ${isActive ? 'text-[#21292B]' : 'text-gray-700'}`}>
                  {item.name}
                </Text>

                <Text className="text-xs text-gray-400 mt-1">
                  {item.symbol}
                </Text>

                {isActive && (
                  <View className="mt-3 px-3 py-0.5 rounded-full bg-[#21292B]/90">
                    <Text className="text-[10px] font-medium text-white">
                      Active
                    </Text>
                  </View>
                )}
              </Pressable>
            )
          }}
        />

        <Pressable onPress={() => router.replace("/(tabs)/profile")} className={`rounded-full items-center flex-row justify-center p-4 bg-button`} >
          <Text className="text-white font-semibold text-xl">
            Save Change
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Currency
