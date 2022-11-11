import styled from 'styled-components'

export const ActionBarWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  .input {
    flex: 4;
  }
  .button {
    flex: 1;
  }
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  .item {
  }
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  margin-top: 100px;
  .btn-logout {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .heading {
    margin-bottom: 20px;
  }
  .card {
    max-width: 500px;
  }
`