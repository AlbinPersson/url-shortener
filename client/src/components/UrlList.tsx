import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteUrl, getUrls } from "services/urlService";
import { Column, Url } from "types";
import TableBody from "components/common/Table";
import RenewForm from "components/RenewForm";
import TableHeader from "components/common/TableHeader";

function UrlList() {
  const [urls, setUrls] = useState<Url[]>([]);

  async function fetchUrls() {
    const { data: urls } = await getUrls();
    setUrls(urls);
  }

  const handleDelete = async (id: string) => {
    const filterdUrls = urls?.filter((url) => url._id !== id);
    setUrls(filterdUrls);
    await deleteUrl(id);
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const columns: Column[] = [
    {
      name: "originalUrl",
      content: (url: Url) => {
        return (
          <Urls>
            <span> {url.originalUrl.slice(0, 60)}...</span>
            <span> {`http://localhost:3000/${url.shortUrl}`}</span>
          </Urls>
        );
      },
    },
    {
      name: "validTime",
      content: (url: Url) => {
        return url.validTime ? (
          <ValidTime>
            <span>{new Date(url.validTime).toLocaleDateString("sv-SV")}</span>
            <span>{new Date(url.validTime).toLocaleTimeString("sv-SV")}</span>
          </ValidTime>
        ) : (
          <span>Unset</span>
        );
      },
    },
    {
      name: "updateValidTime",
      content: (url: Url) => {
        return <RenewForm url={url} handleUpdate={fetchUrls} />;
      },
    },
    {
      name: "deleteUrl",
      content: (url: Url) => {
        return <Delete onClick={() => handleDelete(url._id)}>Delete</Delete>;
      },
    },
  ];

  return (
    <>
      <TableHeader />
      <TableBody data={urls} columns={columns} />;
    </>
  );
}

export default UrlList;

const ValidTime = styled.span`
  display: grid;
`;
const Urls = styled.span`
  display: grid;
`;

const Delete = styled.button`
  height: 5vh;
  width: 5vw;
  background-color: transparent;
  border: solid 1px #edeec0;
  border-radius: 1vh;
  transition: all 0.1s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
