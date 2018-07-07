import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, image, thumbnail_image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={styles.headerContainerStyles}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} buttonText={('Buy ' + title)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyles: {
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
};

export default AlbumDetail;
