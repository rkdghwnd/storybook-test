// TopicMessageInput.js
import { Textarea, Text } from '@chakra-ui/react';

const TopicMessageInput = ({ topicMessage, handleCategoryChange }) => {
  return (
    <>
      <Textarea
        resize="none"
        minH="190px"
        name="topicMessage"
        value={topicMessage}
        maxLength="500"
        placeholder="주제별로 교훈/메시지 예시입니다. 아래 내용을 참고하여 작성해주세요."
        onChange={handleCategoryChange}
      />
      <Text textAlign="right" fontSize="sm">
        {topicMessage.length}/500
      </Text>
    </>
  );
};

export default TopicMessageInput;
