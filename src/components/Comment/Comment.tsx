import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  const isLiked = true;
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name={isLiked ? 'heart' : 'hearto'}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
});

export default Comment;
