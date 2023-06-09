import { css } from '@emotion/react';
export const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 5px 0;
      font-size: 0.8em;
    }
  }
`;
