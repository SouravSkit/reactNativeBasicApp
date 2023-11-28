import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal,TextInput,Alert } from 'react-native';
import axios from 'axios';

const Task = () => {
  const apiUrl = 'https://picsum.photos/v2/list';
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchId, setSearchId] = useState('');


  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInfoPress = (id:any) => {
    const infoUrl = `https://picsum.photos/id/${id}/info`;
    axios.get(infoUrl)
      .then(response => {
        setSelectedImage(response.data);
        console.log('response===>',JSON.stringify(response))
        setModalVisible(true);
      })
      .catch(error => {
        console.error('Error fetching image information:', error);
      });
  };

  const handleSearch = () => {
    const filteredImage = data.find(item => item.id.toString() === searchId);    
    if (filteredImage) {
      console.log('filtered image data==>', filteredImage.download_url)
      handleInfoPress(filteredImage.id);
    } else {
      Alert.alert('Image not found. Please enter a valid image ID.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.download_url }} style={styles.image} />
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => handleInfoPress(item.id)}
      >
        <Text style={styles.infoButtonText}>INFO</Text>
      </TouchableOpacity>
      <Text style={styles.author}>{item.author}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

<TextInput
        style={styles.input}
        placeholder="Enter Image ID"
        onChangeText={(text) => setSearchId(text)}
        value={searchId}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearch}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{selectedImage?.id}</Text>
          <Text style={styles.modalText}>{selectedImage?.author}</Text>
          <Text style={styles.modalText}>{selectedImage?.width} x {selectedImage?.height}</Text>
          {/* <Text style={styles.modalText}>{selectedImage?.url}</Text> */}
          {selectedImage && (
      <Image source={{ uri: selectedImage.download_url }} style={styles.image} />
    )}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
     backgroundColor:'#87CEEB'
  },
  itemContainer: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  infoButton: {
    marginTop: 25,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  infoButtonText: {
    color: 'white',
    fontSize: 16,
  },
  author: {
    marginTop: 5,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#6B72FE'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop:25,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default Task;