import { useEffect, useState } from "react";
import { getUrls } from "services/urlService";
import { Column, Url } from "types";
import TableBody from "components/common/Table";
import RenewButton from "./RenewButton";

function UrlList() {
  const [urls, setUrls] = useState<Url[]>([]);

  async function fetchUrls() {
    const { data: urls } = await getUrls();
    setUrls(urls);
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  const columns: Column[] = [
    {
      name: "originalUrl",
      content: (url: Url) => {
        return <span> {url.originalUrl}</span>;
      },
    },
    {
      name: "validTime",
      content: (url: Url) => {
        return url.validTime ? (
          <span>{new Date(url.validTime).toLocaleTimeString("sv-SV")}</span>
        ) : (
          <span>Unset</span>
        );
      },
    },
    {
      name: "validTime",
      content: (url: Url) => {
        return url.validTime ? (
          <span>{new Date(url.validTime).toLocaleTimeString("sv-SV")}</span>
        ) : (
          <span>Unset</span>
        );
      },
    },
    {
      name: "validTime",
      content: (url: Url) => {
        return <RenewButton />;
      },
    },
  ];

  return <TableBody data={urls} columns={columns} />;
}

export default UrlList;
