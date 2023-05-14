import React, {JSX, useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

// Third Party
import {useNavigation} from '@react-navigation/native';

// Local Imports
import {color, dimension, fonts} from '@styles';
import {getCategoryList} from '@services/products';

function Category(): JSX.Element {
  const navigation = useNavigation();

  // State
  const [categories, setCategories] = useState<string[]>([]);

  // Function
  const init = async () => {
    try {
      const response = await getCategoryList();
      console.log('response getCategoryList', response?.data);
      setCategories(response?.data);
    } catch (error) {
      console.log('errow while init', error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Category</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailCategory', {category: item})
            }
            style={[
              styles.category,
              {
                flexDirection: 'column',
                justifyContent: index % 2 == 0 ? 'flex-start' : 'flex-end',
              },
            ]}
            key={index}>
            <Text style={styles.text}>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    height: 80,
    // width: 80,
    borderTopLeftRadius: dimension.s,
    borderBottomRightRadius: dimension.s,
    padding: dimension.lg,
    marginLeft: dimension.md,
    borderWidth: 1,
    borderColor: color.primary,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: dimension.md,
    color: color.primary,
  },
  title: {
    fontFamily: fonts.bold,
    color: 'black',
    padding: dimension.lg,
  },
});

export default Category;
