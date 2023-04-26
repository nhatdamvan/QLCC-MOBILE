import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from 'styles/styleGlobal';

const HeaderHome = (props) => {
  const {selectedCategory, setSelectedCategory} = props;
  const categories = [
    'Chung',
    'Lịch sử tương tác',
    'Lịch sử cập nhật',
    'Hợp đồng',
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((e, i) => (
        <View key={i}>
          <TabComponent
            categories={categories}
            index={i}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const TabComponent = (props) => {
  const {categories, selectedCategory, setSelectedCategory, index} = props;
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={1}
      onPress={() => setSelectedCategory(index)}>
      <Text
        style={[
          styles.textLabel,
          {color: index === selectedCategory ? COLORS.primary : COLORS.black},
        ]}>
        {categories[index]}
      </Text>
      <View
        style={[
          styles.seperator,
          {
            backgroundColor:
              index == selectedCategory ? COLORS.primary : 'transparent',
          },
        ]}
      />
    </TouchableOpacity>
  );
};
export default React.memo(HeaderHome);

const styles = StyleSheet.create({
  seperator: {
    width: '80%',
    height: 2,
    marginVertical: 4,
  },
  textLabel: {
    fontSize: 14,
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});
