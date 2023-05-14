import React, {JSX, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

// Third Party
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Local Imports
import {dimension, fonts} from '@styles';
import {getProductByCategory} from '@services/products';
import {Product} from '@components';

interface Props {
  route: any;
  navigation: any;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

function DetailCategory(props: Props): JSX.Element {
  // Props
  const {navigation, route} = props;
  const {category} = route.params;

  // States
  const [products, setProducts] = useState<Product[]>([]);

  // Function
  const init = async () => {
    try {
      const response = await getProductByCategory(category);
      console.log('response getProductByCategory', response?.data);
      setProducts(response?.data);
    } catch (error) {
      console.log('error while getting products by category', error);
    }
  };

  // Effects
  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={26} />
        </TouchableOpacity>
        <Text style={styles.title}>{category?.toUpperCase()}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="filter-outline" size={26} />
        </TouchableOpacity>
      </View>
      {/* Header */}
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={({item}) => <Product {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: dimension.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadow
    elevation: 1,
    marginBottom: dimension.lg,
  },
  title: {
    fontFamily: fonts.bold,
    color: 'black',
    fontSize: dimension.lg,
    letterSpacing: 1,
  },
});

export default DetailCategory;
