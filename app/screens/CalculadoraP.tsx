import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import Header from '../../Components/Header'
import Foother from '../../Components/Foother'

const TipCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState('');
  const [history, setHistory] = useState<{ 
    id: string; 
    amount: string; 
    tipPercent: string; 
    tipAmount: string; 
    totalAmount: string; 
  }[]>([]);

  const calculateTip = () => {
    const billAmount = parseFloat(amount);
    let tipPercent = tipPercentage !== null ? tipPercentage : parseFloat(customTip);
    
    if (isNaN(billAmount) || isNaN(tipPercent)) return;
    
    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;
    
    const newEntry = {
      id: Date.now().toString(),
      amount: billAmount.toFixed(2),
      tipPercent: tipPercent.toFixed(2),
      tipAmount: tipAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
    
    setHistory([newEntry, ...history]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Monto de consumo"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      
      <Text style={styles.label}>Selecciona un porcentaje de propina:</Text>
      <View style={styles.buttonRow}>
        {[10, 15, 20].map((percent) => (
          <TouchableOpacity 
            key={percent} 
            style={[
              styles.button, 
              tipPercentage === percent && styles.buttonSelected
            ]} 
            onPress={() => setTipPercentage(percent)}
          >
            <Text style={styles.buttonText}>{percent}%</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Agregue un Porcentaje"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={customTip}
        onChangeText={(text) => {
          setTipPercentage(null);
          setCustomTip(text);
        }}
      />
      
      <TouchableOpacity style={styles.calculateButton} onPress={calculateTip}>
        <Text style={styles.calculateButtonText}>Calcular</Text>
      </TouchableOpacity>
      
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>Consumo: ${item.amount}</Text>
            <Text style={styles.historyText}>Propina ({item.tipPercent}%): ${item.tipAmount}</Text>
            <Text style={styles.historyText}>Total a Pagar: ${item.totalAmount}</Text>
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#ffffff' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#ff6f00' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 15, 
    marginBottom: 15, 
    borderRadius: 10, 
    backgroundColor: '#f5f5f5', 
    fontSize: 16, 
    color: '#333' 
  },
  label: { 
    fontSize: 16, 
    marginBottom: 10, 
    color: '#333' 
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 15 
  },
  button: { 
    backgroundColor: '#ff6f00', 
    padding: 15, 
    borderRadius: 10, 
    width: '30%', 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    elevation: 3 
  },
  buttonSelected: { 
    backgroundColor: '#e65100' 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  calculateButton: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    elevation: 3 
  },
  calculateButtonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
  historyItem: { 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
    backgroundColor: '#f5f5f5', 
    borderRadius: 10, 
    marginBottom: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 2 
  },
  historyText: { 
    fontSize: 16, 
    color: '#333' 
  },
});

export default TipCalculator;