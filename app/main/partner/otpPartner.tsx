import Header from '@/components/Header'
import { useRouter } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Pressable, Text, TextInput, Vibration, View } from 'react-native'

const OtpPartner = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""])
  const inputs = useRef<TextInput[]>([])
  const [timeLeft, setTimeLeft] = useState(60 * 5)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0)

  const router = useRouter()

  const resetTimer = () => {
    setTimeLeft(300)
    setOtp(["", "", "", ""])
    inputs.current[0]?.focus()
  }

  const vibrateError = () => Vibration.vibrate(200)


  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < otp.length - 1) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleVerification = () => {
    const code = otp.join("")

    if (code.length !== otp.length) {
      vibrateError()
      alert("Please enter the complete OTP")
      return
    }

    console.log("OTP verified:", code)

    router.replace("/main/partner/verifySuccess")
  }

  const m = Math.floor(timeLeft / 60)
  const s = timeLeft % 60


  useEffect(() => {
    if (timeLeft <= 0) return

    const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000)

    return () => clearInterval(interval)
  }, [timeLeft])
  return (
    <View className='my-4 flex-1 gap-4'>
      <Header title='OTP Verification' />

      <View className='gap-4 mt-6 px-4'>
        <Text className='text-center text-xl font-bold my-2'>
          Enter your Verification Code
        </Text>

        <Text className='text-placeholder text-[15px] text-center leading-6'>
          Please enter the OTP (One-Time Password) sent to your registered Email Address
        </Text>

        <View className='flex-row gap-3 justify-center mt-4'>
          {otp.map((value, index) => {
            const isFocused = focusedIndex === index

            return (
              <View
                key={index}
                className={`items-center justify-center rounded-xl border ${isFocused ? "border-button bg-btnBorder" : "border-border bg-background"} `} style={{ height: 63, width: 67 }}>
                <TextInput
                  ref={(ref) => {
                    if (ref) inputs.current[index] = ref
                  }}
                  value={value}
                  onChangeText={(v) => handleChange(v, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  keyboardType='number-pad'
                  maxLength={1}
                  textAlign='center'
                  className='font-semibold text-black text-xl flex-1'
                />
              </View>
            )
          })}
        </View>

        <Text className='text-placeholder my-4 text-center'>
          Remaining Time : {m.toString().padStart(2, "0")}:
          {s.toString().padStart(2, "0")}
        </Text>

        <Pressable onPress={handleVerification} className='rounded-full items-center justify-center p-4 bg-button'>
          <Text className="text-white font-semibold text-xl">
            Verify Now
          </Text>
        </Pressable>

        <View className='justify-center items-center gap-2 mt-4'>
          <Text className='text-placeholder'>Didn't receive the OTP?</Text>
          <Pressable onPress={resetTimer} disabled={timeLeft > 0}>
            <Text className={`font-bold underline ${timeLeft > 0 ? "text-placeholder" : "text-black"}`} >
              Resend
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default OtpPartner
