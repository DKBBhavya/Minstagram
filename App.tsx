import FeedPost from './src/components/FeedPost/FeedPost';
import {ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

export default App;
