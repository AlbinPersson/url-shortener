import _ from "lodash";
import styled from "styled-components";
import { Column, Url } from "types";

interface Props {
  data: Url[];
  columns: Column[];
}

function TableBody({ data, columns }: Props) {
  const createKey = (item: Url, column: Column) => {
    return item._id + column.name;
  };
  return (
    <Container>
      {data.map((item) => (
        <Row key={item._id}>
          {columns.map((column) => (
            <Content key={createKey(item, column)}>
              {column.content(item)}
            </Content>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default TableBody;

const Container = styled.div`
  height: 90vh;
`;

const Row = styled.div`
  height: 10vh;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  column-gap: 3vw;
  align-content: center;
  border-bottom: solid 1px #7c9082;
  padding-left: 10vw;
  padding-right: 10vw;
`;

const Content = styled.span`
  display: flex;
  align-items: center;
`;
