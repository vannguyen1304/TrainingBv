import styled, { css } from "styled-components";

export const InputBase = styled.div`
  border-radius: 8px;
  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}

  .ant-input-affix-wrapper {
    ${({ $height }) =>
      $height &&
      css`
        height: ${$height};
      `}
    border: 1px solid rgba(0, 0, 0, 0.85);
    .ant-input-prefix {
      position: relative;
      margin-right: 10px;
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        right: -10px;
        border-left-style: solid;
        border-left-width: 1px;
      }
      .anticon svg {
        border-style: solid;
        border-width: 1px;
        border-radius: 100px;
      }
    }

    .ant-input {
      padding-left: 10px;
    }
  }
`;

export const InputDefaultSize = styled(InputBase)`
  .ant-input-affix-wrapper {
    .ant-input-prefix {
      margin-right: 11px;
      &::after {
        transform: translateY(-4px);
        height: calc(100% + 8px);
      }
    }
  }
`;

export const InputLargeSize = styled(InputBase)`
  .ant-input-affix-wrapper {
    .ant-input-prefix {
      margin-right: 11px;
      &::after {
        transform: translateY(-6.5px);
        height: calc(100% + 6.5 * 2px);
      }
    }
  }
`;

export const InputSmallSize = styled(InputBase)``;
