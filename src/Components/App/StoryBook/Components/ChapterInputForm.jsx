import { Text, Textarea, Box } from '@chakra-ui/react';

const ChapterInputForm = ({ value, onChange }) => {
  return (
    <Box>
      <Text className="service-simpleDes">
        동화책의 주제나 메시지를 입력해주세요.
      </Text>
      <Textarea resize="none" onChange={onChange} value={value} minH="300px" />
      <Text textAlign="right" mt="10px" fontSize={'sm'}>
        {value.length} / 3000
      </Text>
    </Box>
  );
};

export default ChapterInputForm;
