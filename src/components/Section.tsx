import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../styles';

type stepType = {
  name: string;
  completed: boolean;
};

const Section: React.FC<{
  title: string;
  completed: boolean;
  step: stepType;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          { color: isDarkMode ? Colors.light : Colors.dark },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;
