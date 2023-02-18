import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  removeParticipant: () => void;
}

export function Participant({ name, removeParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={removeParticipant}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}
