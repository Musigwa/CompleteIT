import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Section from '../components/Section';
import { Phase } from '../constants';
import { useAppSelector } from '../container';
import styles from '../styles';

const Progress = () => {
  const { phases } = useAppSelector(state => state);
  const checkUpdate = (value: object) => {
    console.log('The object value after checking==>', value);
  };
  return (
    <SafeAreaView style={styles.progressContainer}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.listContainer}>
          {phases.map((sect: Phase, index: number) => (
            <Section key={index} toggleCheck={checkUpdate} {...sect} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Progress;
