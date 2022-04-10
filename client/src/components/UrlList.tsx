import { useEffect, useState } from "react";
import { getUrls } from "services/urlService";
import { Url } from "types";

function UrlList() {
  const [urls, setUrls] = useState<Url[]>();

  async function fetchUrls() {
    const { data: urls } = await getUrls();
    setUrls(urls);
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div>
      <ul>
        {urls?.map((url) => (
          <li>
            <h2>{url.originalUrl}</h2>
            <h1>Shortlink: http://localhost:3000/{url._id}</h1>
            <h2>-------------</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;
