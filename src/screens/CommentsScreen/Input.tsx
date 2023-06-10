import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useState} from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Posting the comment: ', newComment);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image source={{uri: 'https://picsum.photos/200'}} style={styles.image} />
      <TextInput
        placeholder="Write your comment..."
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    flex: 1,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});

export default Input;
