/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import styled from '@emotion/styled';

export const Card = styled.div<{
  code?: string;
  selected?: boolean;
  disabled?: boolean;
}>`
  background: white;
  height: 48px;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  font-size: ${({ theme }) => theme.ketcher.font.size.small};
  color: ${({ theme }) => theme.ketcher.color.text.primary};
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  margin: 0;
  user-select: none;
  border-color: ${({ theme }) => theme.ketcher.color.button.primary.active};
  border-width: ${({ selected }) => (selected ? '0px 2px 2px' : '0px')};
  border-style: solid;
  box-sizing: border-box;
  z-index: ${({ selected }) => (selected ? 2 : undefined)};

  .hidden & .star {
    visibility: hidden !important;
  }

  &:hover {
    outline: 1px solid #b4b9d6;
    &::after {
      content: '';
      background: ${({ code, theme, selected }) =>
        selected
          ? theme.ketcher.color.button.primary.active
          : theme.ketcher.monomer.color[code as string]?.hover};
    }
    > .star {
      visibility: visible;
      opacity: 1;
    }
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: ${({ code, theme, selected }) =>
      selected
        ? theme.ketcher.color.button.primary.active
        : theme.ketcher.monomer.color[code as string]?.regular};
  }
  > span {
    position: absolute;
    bottom: ${({ selected }) => (selected ? '4px' : '6px')};
    left: ${({ selected }) => (selected ? '4px' : '6px')};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 85%;
  }
  > .star {
    color: #e1e5ea;
    position: absolute;
    top: 12px;
    right: 3px;
    font-size: 15px;
    opacity: 0;
    transition: 0.2s ease;
    flex-shrink: 0;
    &.visible {
      visibility: visible;
      opacity: 1;
    }
    &:active {
      transform: scale(1.4);
    }
    &:hover,
    &.visible {
      color: #faa500;
    }
  }
`;
