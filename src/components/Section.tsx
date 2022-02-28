import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Phase, Step } from '../constants';
import styles from '../styles';

const Section: React.FC<
  Phase & { toggleCheck: (value: object) => void }
> = phase => {
  const { title, id: parentId, toggleCheck, steps } = phase;
  return (
    <View style={styles.sectionContainer}>
      <View style={style.titleContainer}>
        <View style={style.indexContainer}>
          <Text style={style.index}>{parentId}</Text>
        </View>
        <Text style={[styles.sectionTitle]}>{title}</Text>
        {/* <Icon name="upcircleo" /> */}
      </View>
      {steps.map((step: Step, idx: number) => (
        <View style={style.checkBoxContainer} key={idx}>
          <CheckBox
            value={step.completed}
            onValueChange={status => toggleCheck({ status, step, parentId })}
            style={style.checkBox}
          />
          <Text style={[styles.sectionDescription]}>{step.name}</Text>
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  indexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 10,
  },
  index: { color: 'white', fontWeight: 'bold' },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkBox: { marginRight: 8 },
});
export default Section;
