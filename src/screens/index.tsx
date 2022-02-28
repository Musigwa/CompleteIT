import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Section from '../components/Section';
import { Phase } from '../constants';
import { useAppSelector } from '../container';
import styles from '../styles';

const Progress = () => {
  const { data } = useAppSelector(({ steps }) => steps);
  return (
    <SafeAreaView style={styles.progressContainer}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.listContainer}>
          {data.map((sect: Phase, index: number) => (
            <Section
              key={index}
              title={sect.title}
              completed={false}
              index={index + 1}
              steps={sect.steps}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Progress;
