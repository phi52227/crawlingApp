import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {joongangIlboProps} from '../App';

const fieldList = [
  {title: '정치', section: '1'},
  {title: '경제', section: '2'},
  {title: '사회', section: '3'},
  {title: '생활/문화', section: '4'},
  {title: 'IT/과학', section: '5'},
];

const fieldBtn = (
  title: String,
  section: string,
  index: React.Key,
  navigate: Function,
) => {
  return (
    <TouchableOpacity
      style={styles.button}
      key={index}
      onPress={() => navigate('ArticleList', {section: section})}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const JoongangIlbo = ({navigation}: joongangIlboProps) => {
  return (
    <View style={styles.container}>
      {fieldList.map((element, index) =>
        fieldBtn(element.title, element.section, index, navigation.navigate),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#223652',
    paddingTop: 50,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#647187',
  },
  menuText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
});

export default JoongangIlbo;
