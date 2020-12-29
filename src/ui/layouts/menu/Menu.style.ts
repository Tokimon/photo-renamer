import { css } from '~/ui/utils/css';


import { menuItem } from '~/ui/components/menu-item/MenuItem.style';


export const menu = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${'.' + menuItem} {
    margin: 5px;
  }
`;
