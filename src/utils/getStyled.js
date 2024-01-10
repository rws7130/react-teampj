import { css } from 'styled-components';
import '../styles/themeType';

/**
 * styled-components의 CSS를 생성하는 함수
 * @param {Key} key
 * @example color: ${getStyled('colors', 'blue')};
 */
const getStyled = (key) => {
  const makeStyled = (subKey) => {
    return css`
      ${({ theme }) => theme[key][subKey] ?? ''}
    `;
  };

  /**
   * @param {Colors} subKey
   */
  const Color = (subKey) => makeStyled(subKey);

  /**
   * @param {FontSize} subKey
   */
  const fontSize = (subKey) => makeStyled(subKey);
  return { Color, fontSize };
};

export default getStyled;
