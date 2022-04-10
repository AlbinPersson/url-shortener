import { useForm } from "react-hook-form";
import { addUrl } from "services/urlService";
import styled from "styled-components";

interface FormData {
  originalUrl: string;
}

function UrlForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    await addUrl(data);
    setValue("originalUrl", "");
    alert("submited");
  });

  return (
    <Container>
      <FormBox onSubmit={onSubmit}>
        <Input
          {...register("originalUrl", { required: true })}
          id="originalUrl"
          placeholder="Enter your Url"
        />
        <Submit type="submit" />
      </FormBox>
    </Container>
  );
}
export default UrlForm;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 90vh;
  width: 100vw;
`;

const FormBox = styled.form`
  display: grid;
  justify-items: center;
  background-color: #a7a284;
  height: 60vh;
  width: 60vw;
  border-radius: 10vh;
  box-shadow: 0px 0px 50px 18px #a7a28423;
`;

const Input = styled.input`
  height: 7vh;
  width: 50vw;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 20vh;
  font-size: 35px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #141414;
  text-align: center;
  ::placeholder {
    color: #141414;
  }
  :hover {
    cursor: text;
  }
`;

const Submit = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #141414;
  font-size: 35px;
  font-weight: 900;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
