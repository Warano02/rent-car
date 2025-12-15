import { useBooking } from "@/lib/hooks/useCarBooking";
import { IDatePicker } from "@/types";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { BottomSheet } from "../BottomSheet";

interface IDP {
    attr: IDatePicker;
    setAttr: (v: IDatePicker | null) => void;
}

/**
 * Build marked dates for a date range
 */
const getMarkedDates = (startDate?: string, endDate?: string) => {
    if (!startDate) return {};

    const marked: any = {
        [startDate]: {
            startingDay: true,
            color: "#000",
            textColor: "#fff",
        },
    };

    if (!endDate) return marked;

    let current = new Date(startDate);
    const end = new Date(endDate);

    current.setDate(current.getDate() + 1);

    while (current < end) {
        const dateString = current.toISOString().split("T")[0];
        marked[dateString] = {
            color: "rgb(156,156,156)",
            textColor: "#7F7F7F",
        };
        current.setDate(current.getDate() + 1);
    }

    marked[endDate] = {
        endingDay: true,
        color: "#000",
        textColor: "#fff",
    };

    return marked;
};

const DatePicker = ({ attr, setAttr }: IDP) => {
    const { date, setDate } = useBooking();

    const handleSelectDate = (day: any) => {
        const selected = day.dateString;

        if (attr === "pickup") {
            if (date.endDate && selected > date.endDate) {
                setDate({
                    ...date,
                    startDate: selected,
                    endDate: "",
                });
            } else {
                setDate({
                    ...date,
                    startDate: selected,
                });
            }

            setAttr("return");
            return;
        }

        if (attr === "return") {
            if (!date.startDate || selected < date.startDate) return;

            setDate({
                ...date,
                endDate: selected,
            });

            setAttr(null);
        }
    };

    const markedDates = getMarkedDates(
        date.startDate,
        date.endDate
    );

    return (
        <BottomSheet visible={attr !== null} setVisible={() => setAttr(null)}>
            <View className="flex-1 justify-center items-center px-4">
                <View className="bg-white rounded-xl px-4 py-4 w-full">

                    {/* Header */}
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-xl font-bold">
                            {attr === "pickup" ? "Pick-up Date" : "Return Date"}
                        </Text>

                        <Pressable
                            onPress={() => setAttr(null)}
                            className="rounded-full border border-border items-center justify-center"
                            style={{ height: 30, width: 30 }}
                        >
                            <MaterialIcons name="close" size={20} color="#7F7F7F" />
                        </Pressable>
                    </View>

                    {/* Subtitle */}
                    <Text className="text-center text-[16px] text-placeholder mb-4">
                        {attr === "pickup"
                            ? "Choose the date you want to pick up the car."
                            : "Choose the date you will return the car."}
                    </Text>

                    {/* Calendar */}
                    <Calendar
                        markingType="period"
                        onDayPress={handleSelectDate}
                        minDate={attr === "return" ? date.startDate ?? undefined : undefined}
                        markedDates={markedDates}
                        theme={{
                            todayTextColor: "#000",
                            arrowColor: "#000",
                            textDayFontWeight: "500",
                            textMonthFontWeight: "700",
                            textDayHeaderFontWeight: "500",
                        }}
                    />

                    {/* Actions */}
                    <View className="flex-row justify-between mt-6">
                        <Pressable
                            onPress={() => setAttr(null)}
                            className="rounded-xl border border-border items-center justify-center"
                            style={{ width: 120, height: 45 }}
                        >
                            <Text className="text-black font-semibold text-base">
                                Cancel
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setAttr(null)}
                            className="rounded-xl bg-black items-center justify-center"
                            style={{ width: 120, height: 45 }}
                        >
                            <Text className="text-white font-semibold text-base">
                                Done
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </BottomSheet>
    );
};

export default DatePicker;
