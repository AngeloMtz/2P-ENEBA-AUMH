import React from "react";
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de instalar @expo/vector-icons

export default function EnebaClone() {
    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.searchBar} placeholder="Buscar..." placeholderTextColor="#ddd" />
            
            <Text style={styles.sectionTitle}>Empezar a navegar</Text>
            <View style={styles.categoriesContainer}>
                <TouchableOpacity style={styles.categoryCard}>
                    <Image source={{ uri: "https://static.wikia.nocookie.net/geometry-dash/images/0/01/Reference.png/revision/latest/scale-to-width-down/512?cb=20150326041406&path-prefix=es" }} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Juegos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <Image source={{ uri: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png" }} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Juegos Tarjetas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <Image source={{ uri: "https://static.wikia.nocookie.net/inmortalkombat/images/e/ea/Mk_cover.png/revision/latest?cb=20190110192227&path-prefix=es" }} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Tienda</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.largeImagesContainer}>
                <Image source={{ uri: "https://cdn.cdkeys.com/700x700/media/catalog/product/k/i/kingdom_come_deliverance_ii_gold_edition_1.png" }} style={styles.largeImage} />
                <Image source={{ uri: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg" }} style={styles.largeImage} />
                <Image source={{ uri: "https://cdn.cdkeys.com/700x700/media/catalog/product/1/0/100_rbx.jpg" }} style={styles.largeImage} />
                <Image source={{ uri: "https://cdn.clarosports.com/clarosports/2023/09/sin-titulo-2023-09-21t105146.602-105037-1024x576.jpg" }} style={styles.largeImage} />
            </View>
            
            <Text style={styles.sectionTitle}>Tarjetas de regalo populares</Text>
            <View style={styles.giftCardsContainer}>
                <Image source={{ uri: "https://i0.wp.com/oasisnerd.com/wp-content/uploads/2025/01/Playstation-CES-2025.png?fit=1500%2C1000&ssl=1" }} style={styles.giftCardIcon} />
                <Image source={{ uri: "https://www.somosxbox.com/wp-content/uploads/2025/02/SteamLogo.jpg" }} style={styles.giftCardIcon} />
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/600px-Nintendo_switch_logo.png" }} style={styles.giftCardIcon} />
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9ZKbMPfvMLHJfJ1_wdTwfx0RvcN5pVZFSg&s" }} style={styles.giftCardIcon} />
            </View>
            
            <Text style={styles.sectionTitle}>Juegos populares</Text>
            <View style={styles.gameCard}>
                <Image source={{ uri: "https://products.eneba.games/resized-products/Aba6HX3uARHzrbsfpxUjERBCvho0E1A_GrOQ-obqkZo_350x200_1x-0.jpeg" }} style={styles.gameImage} />
                <View>
                    <TouchableOpacity style={styles.likeButton}>
                        <Ionicons name="heart" size={32} color="#FF0000" />
                    </TouchableOpacity>
                    <Text style={styles.gameTitle}>Xbox Game Pass Ultimate</Text>
                    <Text style={styles.gamePrice}>$160.29</Text>
                    <TouchableOpacity style={styles.cartButton}>
                        <Ionicons name="cart" size={32} color="#FFD700" />
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.gameCard}>
                <Image source={{ uri: "https://products.eneba.games/resized-products/Aba6HX3uARHzrbsfpxUjERBCvho0E1A_GrOQ-obqkZo_350x200_1x-0.jpeg" }} style={styles.gameImage} />
                <View>
                    <TouchableOpacity style={styles.likeButton}>
                        <Ionicons name="heart" size={32} color="#FF0000" />
                    </TouchableOpacity>
                    <Text style={styles.gameTitle}>Xbox Game Pass Ultimate</Text>
                    <Text style={styles.gamePrice}>$161.96</Text>
                    <TouchableOpacity style={styles.cartButton}>
                        <Ionicons name="cart" size={32} color="#FFD700" />
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.gameCard}>
                <Image source={{ uri: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Minecraft_Java_%26_Bedrock_Edition_for_PC_square_key_art.jpg/revision/latest?cb=20220610115912" }} style={styles.gameImage} />
                <View>
                    <TouchableOpacity style={styles.likeButton}>
                        <Ionicons name="heart" size={32} color="#FF0000" />
                    </TouchableOpacity>
                    <Text style={styles.gameTitle}>Minecraft: Java & Bedrock</Text>
                    <Text style={styles.gamePrice}>$311.97</Text>
                    <TouchableOpacity style={styles.cartButton}>
                        <Ionicons name="cart" size={32} color="#FFD700" />
                    </TouchableOpacity>
                </View> 
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4A1E86",
        flex: 1,
        padding: 10,
        marginTop: 35
    },
    searchBar: {
        backgroundColor: "#5B2DA0",
        color: "white",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        height: 60,
        fontSize: 20
    },
    sectionTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    categoriesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    categoryCard: {
        backgroundColor: "#6A2CD8",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    categoryImage: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
    categoryText: {
        fontSize:10,
        color: "white",
        fontWeight: "bold",
    },
    largeImagesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    largeImage: {
        width: 93,
        height: 180,
    },
    giftCardsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
        
    },
    giftCardIcon: {
        width: 90,
        height: 70,
    },
    gameCard: {
        flexDirection: "row",
        backgroundColor: "#5B2DA0",
        alignItems: "center",
        marginBottom: 10,
        height: 200
    },
    gameImage: {
        width: 100,
        height: 200
    },
    gameTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 20
    },
    gamePrice: {
        color: "#FFD700",
        fontSize: 16,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: "bold"
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    likeButton: {
        marginLeft: 220,
        marginBottom: 20
    },
    cartButton: {
        marginLeft: 220,
        marginTop:20
    },
});