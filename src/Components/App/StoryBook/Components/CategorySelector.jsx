// CategorySelector.js
import { Select } from '@chakra-ui/react';
import { t } from 'i18next';
import { MdArrowDropDown } from 'react-icons/md';
import CommonInputs from '../../../Common/CommonInputs';

const CategorySelector = ({
  selectOption,
  handleCategoryChange,
  customInput,
}) => {
  return (
    <>
      <Select
        name="selectOption"
        onChange={handleCategoryChange}
        w={'250px'}
        icon={<MdArrowDropDown />}
        placeholder={t('service.storybook_topic_category_placeholder')}
        value={selectOption}
      >
        <option value="우정">
          {t('service.storybook_topic_category_courage')}
        </option>
        <option value="모험">
          {t('service.storybook_topic_category_adventure')}
        </option>
        <option value="자연">
          {t('service.storybook_topic_category_nature')}
        </option>
        <option value="판타지">
          {t('service.storybook_topic_category_fantasy')}
        </option>
        <option value="추리">
          {t('service.storybook_topic_category_mystery')}
        </option>
        <option value="기타">
          {t('service.storybook_topic_category_etc')}
        </option>
      </Select>
      {selectOption === '기타' && (
        <CommonInputs
          maxLength="30"
          placeholder={t(
            'service.storybook_topic_category_etc_input_placeholder',
          )}
          onChange={handleCategoryChange}
          text={customInput}
          name="customInput"
        />
      )}
    </>
  );
};

export default CategorySelector;
