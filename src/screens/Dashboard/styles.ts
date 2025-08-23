import { StyleSheet } from "react-native";

import { Colors } from "@utils";

export const styles = StyleSheet.create({
    list: {
        padding: 12,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    card: {
        width: '48%',
        borderRadius: 8,
        padding: 8,
        backgroundColor: Colors.white[100],
        justifyContent: "space-evenly"
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 6,
    },
    title: { fontWeight: '600' },
    desc: { color: Colors.gray[500] },
    price: { fontWeight: '700' },
    loadingArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
