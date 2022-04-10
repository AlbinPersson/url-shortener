import { useEffect } from "react";
import { useParams } from "react-router";
import { getUrl } from "services/urlService";

function Redirect() {
  const { id } = useParams<{ id: string }>();

  async function redirectToUrl() {
    const { data } = await getUrl(id);
    window.location.href = data.originalUrl;
  }

  useEffect(() => {
    redirectToUrl();
  }, []);

  return null;
}

export default Redirect;
