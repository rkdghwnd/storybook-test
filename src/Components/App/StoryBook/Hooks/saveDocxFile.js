import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  SectionType,
  AlignmentType,
} from 'docx';
import { saveAs } from 'file-saver';

const createParagraph = (
  text,
  bold = false,
  size = 32,
  align = AlignmentType.LEFT,
) => {
  const lines = text.split('\n');
  const textRuns = lines.map((line, index) => {
    return new TextRun({
      text: line,
      bold: bold,
      size: size,
      font: 'Tahoma',
      break: index < lines.length - 1 ? 1 : 0, // 마지막 줄은 줄바꿈을 하지 않음
    });
  });

  return new Paragraph({
    children: textRuns,
    alignment: align,
  });
};

export const saveDocxFile = (chapterResults, chapterDetails) => {
  const firstPageBoldText = `
\n\n
🌱 라이팅젤 동화책 출간하기
`;

  const firstPageText = `
\n\n\n
도서명 : [동화책의 제목을 입력해주세요.]
저자명 : [대표저자 이름을 입력해주세요.]
출판예정일 : [7일 후로 입력해주세요.]
판매가 : [원 단위로 숫자만 입력해주세요.]
저자소개 : [작가님을 소개해주세요.]
책 소개 : [작가님이 책을 소개해주세요.]
`;

  const firstPageBoldParagraphs = firstPageBoldText
    .split('\n')
    .map((line) => createParagraph(line, true, 38, AlignmentType.CENTER));

  const firstPageParagraphs = firstPageText
    .split('\n')
    .map((line) => createParagraph(line, false));

  const firstPageRestText = `
모든 컨텐츠 저작권은 (주)라이팅젤, (주)작가와에 있습니다.
* 저작권법에 의해 보호 받는 저작물이므로 무단전개와 복제를 금합니다.
`;
  // 챕터 결과들의 Paragraph 생성
  const storyParagraphs = Object.entries(chapterResults).map(
    ([index, result]) =>
      createParagraph(
        `${chapterDetails[index].chapterNumber} ${chapterDetails[index].title} \n\n\n\n ${result}`,
        false,
        28,
      ),
  );

  // 첫 페이지의 나머지 텍스트 Paragraph 생성
  const firstPageRestParagraphs = firstPageRestText
    .split('\n')
    .map((line) => createParagraph(line, false, 28));

  // 문서 생성
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          ...firstPageBoldParagraphs,
          ...firstPageParagraphs,
          ...firstPageRestParagraphs,
        ],
      },
      {
        properties: {
          type: SectionType.NEXT_PAGE,
        },
        children: storyParagraphs,
      },
    ],
  });

  // 문서 다운로드
  Packer.toBlob(doc)
    .then((blob) => {
      saveAs(blob, 'storybook.docx');
    })
    .catch((error) => {
      console.error('문서 생성 중 에러가 발생했습니다:', error);
    });
};
