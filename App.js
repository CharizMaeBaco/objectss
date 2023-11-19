import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/style';

const ContentDescription = [
  {
    firstName: 'Nikka Jane',
    lastName: 'Tribunalo',
    nickname: 'Putot',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a1.jpg'), 
  },
  {
    firstName: 'Chariz',
    lastName: 'Baco',
    nickname: 'Pretty',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a2.jpg'), 
  },
  {
    firstName: 'Nilson',
    lastName: 'Rabanes',
    nickname: 'Genuis',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a3.jpg'), 
  },
  {
    firstName: 'Kim',
    lastName: 'Comeghod',
    nickname: 'Puso',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a4.jpg'), 
  },
  {
    firstName: 'Rowena',
    lastName: 'Suico',
    nickname: 'Mabait lang',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a5.jpg'), 
  },
  {
    firstName: 'Jeeve',
    lastName: 'Lunzon',
    nickname: 'Party G',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a6.jpg'), 
  },
  {
    firstName: 'Maria Therese',
    lastName: 'Jaum',
    nickname: 'Geek SMart',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a7.jpg'), 
  },
  {
    firstName: 'Rea',
    lastName: 'Galleros',
    nickname: 'Collector',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/a8.jpg'), 
  },
];

const Numberlists = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>3RD YEAR PHATOM</Text>
      <FlatList
        data={ContentDescription}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text>Nickname: {selectedUser.nickname}</Text>
              <Text>Course: {selectedUser.course}</Text>
              <Text>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Numberlists;
