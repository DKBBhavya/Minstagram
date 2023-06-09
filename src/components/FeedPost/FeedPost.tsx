import {View, Image, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';

import styles from './styles';

const FeedPost = () => {
  const isLiked = true;
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Cat</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.image}
      />

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.bookmark}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>dkbbhavya</Text> and{' '}
          <Text style={styles.bold}>16 others</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>dkbbhavya</Text> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi tempore totam iure fuga commodi
          impedit quasi reprehenderit atque suscipit aperiam, delectus
          blanditiis assumenda perferendis. Corporis magni est vero hic qui.
        </Text>

        <Text>View all 10 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>dkbbhavya</Text> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sequi tempore totam iure fuga
          </Text>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        <Text>12 June, 2023</Text>
      </View>
    </View>
  );
};

export default FeedPost;
