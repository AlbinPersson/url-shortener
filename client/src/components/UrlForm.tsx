import { useForm } from "react-hook-form";
import { addUrl } from "services/urlService";

interface FormData {
  originalUrl: string;
}

function UrlForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    await addUrl(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="originalUrl">Enter your Url</label>
        <input
          {...register("originalUrl", { required: true })}
          id="originalUrl"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default UrlForm;
