import CommonInputs from 'Components/Common/CommonInputs';
import React from 'react';
import styled from 'styled-components';
import { Text } from '@chakra-ui/react';
import { t } from 'i18next';

const InputForms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TitleInputList = ({
  inputValues,
  HandleChange,
  counter,
  placeholder,
  maxLength,
  title,
  setTitle,
}) => {
  return (
    <InputForms>
      <CommonInputs
        text={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={t('common.title_input_placeholder')}
      />
      {counter &&
        counter.map((item) => (
          <div key={`box_${item}`}>
            <CommonInputs
              onChange={HandleChange}
              name={`value${item}`}
              key={item}
              placeholder={placeholder}
              text={inputValues[`value${item}`]}
              maxLength={maxLength}
              required
            />
            <Text
              key={`maxLength${item}`}
              textAlign="right"
              mt="10px"
              fontSize={'sm'}
            >
              {inputValues[`value${item}`].length}/{maxLength}
            </Text>
          </div>
        ))}
    </InputForms>
  );
};

export default TitleInputList;
