import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import { Button, Spacer } from "@components";
import { Colors } from "@utils";

import { useDashboard } from "./hooks";
import { styles } from "./styles";

export function Dashboard() {
    const { data, isFetching } = useDashboard();

    if (isFetching) {
        <View style={styles.loadingArea}>
            <ActivityIndicator size="large" color={Colors.white[100]} />
        </View>;
    }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(it) => String(it.id)}
                numColumns={2}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.images[0] }} style={styles.image} />
                        <Spacer size={8} />
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Spacer size={4} />
                        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
                        <Spacer size={6} />
                        <Text style={styles.price}>
                            {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </Text>
                        <Spacer size={8} />
                        <Button text="Adicionar" />
                    </View>
                )}
            />
        </View>
    );
}

