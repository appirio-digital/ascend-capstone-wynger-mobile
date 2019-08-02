import React from 'react';
import { View, Text } from 'react-native';

function RecordField(props) {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.label}</Text>
      <Text style={{ fontSize: 16 }}>{props.value}</Text>
    </View>
  )
}

export default RecordField;