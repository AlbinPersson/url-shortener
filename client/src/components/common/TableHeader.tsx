import styled from "styled-components";

function TableHeader() {
  return (
    <HeaderRow>
      <span>Urls</span>
      <span>Valid until</span>
      <span>Add valid time (minutes)</span>
    </HeaderRow>
  );
}

export default TableHeader;

const HeaderRow = styled.div`
  height: 10vh;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  column-gap: 3vw;
  padding-left: 10vw;
  padding-right: 10vw;
  border-bottom: solid 1px #7c9082;
  align-items: center;
`;
