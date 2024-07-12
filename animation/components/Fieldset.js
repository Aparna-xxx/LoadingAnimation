import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colours from '../util/Colours';

const Fieldset = ({ legend, children, style }) => {
  return (
    <View style={[styles.fieldset, style]}>
      {legend && (
        <View style={styles.legendContainer}>
          <Text style={styles.legend}>{legend}</Text>
        </View>
      )}
      <View >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldset: {
    borderWidth: 1,
    borderColor: Colours.SplashAnimation, // Set border color to white
    borderRadius: 5,
    padding: 10,
    paddingTop: 20, // Ensure padding at the top for the legend
    marginBottom: 20,
    position: 'relative', // Ensure absolute positioning of legend works correctly
  },
  legendContainer: {
    position: 'absolute',
    top: -12,
    left: 10,
    backgroundColor:"000", // Background color to cover the border and avoid overlap
    paddingHorizontal: 5,
    zIndex: 1, // Ensure it stays on top
    borderRadius:8,
    padding:1
  },
  legend: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Set legend text color to white
  },

});

export default Fieldset;
