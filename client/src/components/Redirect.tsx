import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getUrl } from "services/urlService";

function Redirect() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  async function redirectToUrl() {
    try {
      const { data } = await getUrl(id);
      window.location.href = data.originalUrl;
    } catch (error) {
      history.push("/urls");
      alert("The link has expired or does not exist");
    }
  }

  useEffect(() => {
    redirectToUrl();
  }, []);

  return null;
}

export default Redirect;
