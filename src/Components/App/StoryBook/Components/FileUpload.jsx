import { Button, Icon, Input, Tooltip } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

export default function FileUpload({
  extension,
  inputRef,
  handleFileChange,
  placeholder,
  handleButtonClick,
  fileName,
}) {
  return (
    <>
      <Input type="file" accept={extension} ref={inputRef} onChange={handleFileChange} hidden />
      <Tooltip label={placeholder}>
        <Button leftIcon={<Icon as={FaUpload} />} onClick={() => handleButtonClick()} variant="outline">
          {fileName}
        </Button>
      </Tooltip>
    </>
  );
}
