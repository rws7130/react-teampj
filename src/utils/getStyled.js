import { css } from 'styled-components';

/**
 * styled-components의 CSS를 생성하는 함수
 * @param {string} key - colors | fontSize 등등 메인 key
 * @param {string} subKey - 메인 key의 하위 프로퍼티 key
 * @returns css`${({ theme }) => theme[key][subKey] ?? ''}`
 *
 * @example color: ${getStyled('colors', 'blue')};
 */
const getStyled = (key, subKey) => {
  return css`
    ${({ theme }) => theme[key][subKey] ?? ''}
  `;
};

export default getStyled;
