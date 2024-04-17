import styled from 'styled-components'

export const Wrapper = styled.div<{ speaker: 'me' | 'lume' }>`
  width: 335px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: ${({ speaker }) => (speaker === 'lume' ? 'start' : 'end')};
`
export const ChatItemBox = styled.div<{ speaker: 'me' | 'lume' }>`
  white-space: pre-wrap;
  max-width: 259px;
  padding: 12px 16px;
  border-radius: 20px;
  background-color: ${({ theme, speaker }) =>
    speaker === 'lume'
      ? `${theme.colors.primary40}`
      : `${theme.colors.primary450}`};
  color: ${({ theme, speaker }) =>
    speaker === 'lume' ? `${theme.colors.gray650}` : `${theme.colors.gray0}`};
  border-top-left-radius: ${({ speaker }) =>
    speaker === 'lume' ? 'unset' : '14px'};
  border-top-right-radius: ${({ speaker }) =>
    speaker === 'me' ? 'unset' : '14px'};
  margin-top: ${({ speaker }) => (speaker === 'lume' ? 8 : 0)}px;
  ${({ theme }) => theme.fonts.subTitle2_M};
`
export const ChatRankListBox = styled.div`
  width: 355px;
  margin-top: 8px;
  padding: 12px 16px;
  border-bottom-left-radius: 14px;
  border-top-right-radius: unset;
  border-top-left-radius: unset;
  color: ${({ theme }) => `${theme.colors.gray650}`};
  background-color: ${({ theme }) => `${theme.colors.primary40}`};
  ${({ theme }) => theme.flex.flex};
  gap: 12px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const RankItemTitle = styled.span`
  width: 137px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${({ theme }) => `${theme.colors.gray650}`};
  ${({ theme }) => theme.fonts.subTitle2_B};
`
