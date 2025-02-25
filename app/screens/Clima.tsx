import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, useWindowDimensions } from "react-native";

const API_KEY = "f0105f523cdfc4201c454bef8693914f";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Mexico&units=metric&appid=${API_KEY}`;

interface WeatherCardProps {
  date: string;
  day: string;
  tempMax: number;
  tempMin: number;
  rainChance: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ date, day, tempMax, tempMin, rainChance, description, icon }) => {
  const getBackgroundColor = () => {
    if (tempMax < 20) return "#87CEEB"; // Azul
    if (tempMax >= 21 && tempMax <= 30) return "#FFD700"; // Amarillo
    return "#FFA500"; // Naranja
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.date}>{date}</Text>
      <Image source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }} style={styles.icon} />
      <Text style={styles.temp}>Máx: {tempMax}°C</Text>
      <Text style={styles.temp}>Mín: {tempMin}°C</Text>
      <Text style={styles.rain}>Lluvia: {rainChance}%</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const App = () => {
  const [forecast, setForecast] = useState<WeatherCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const dailyData = data.list.filter((item: any, index: number) => index % 8 === 0).slice(0, 5);
        setForecast(
          dailyData.map((item: any) => ({
            date: new Date(item.dt * 1000).toLocaleDateString("es-MX"),
            day: new Date(item.dt * 1000).toLocaleDateString("es-MX", { weekday: "long" }),
            tempMax: item.main.temp_max,
            tempMin: item.main.temp_min,
            rainChance: item.pop * 100,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          }))
        );
      } catch (err) {
        setError("Error al cargar los datos del clima");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pronóstico del Clima</Text>
      <FlatList
        data={forecast}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <WeatherCard {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        style={{ width }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: "center",
    width: 180,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  day: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  temp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },
  rain: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#444",
    textAlign: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 18,
    color: "red",
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});

export default App;