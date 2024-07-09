import { Text } from '@chakra-ui/react';
import CommonInputs from 'Components/Common/CommonInputs';

export default function ChakraInput({ mainTitle, title, name, placeholder, text, onChange, maxLength }) {
  return (
    <>
      <div className="label-flex">{mainTitle}</div>
      <label className="label-flex">{title}</label>
      <CommonInputs placeholder={placeholder} name={name} text={text} onChange={onChange} maxLength={maxLength} />
      <Text textAlign="right" fontSize="sm">
        {text.length}/{maxLength}
      </Text>
    </>
  );
}
