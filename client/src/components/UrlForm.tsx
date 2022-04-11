import { useForm } from "react-hook-form";
import { addUrl } from "services/urlService";
import styled from "styled-components";

interface FormData {
  originalUrl: string;
  validTime?: number;
}

function UrlForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    if (!data.validTime) delete data.validTime;
    await addUrl(data);
    setValue("originalUrl", "");
    alert("submited");
  });

  return (
    <Container>
      <FormBox onSubmit={onSubmit}>
        <Input
          {...register("originalUrl", { required: true, max: 1000 })}
          placeholder="Enter your Url"
          type="url"
        />
        {errors.originalUrl && <h3>Url is required (max 1000 characters) </h3>}

        <Label htmlFor="validTime">Valid time in minutes (optional)</Label>
        <InputNumber
          {...register("validTime", { min: 1, max: 1000 })}
          id="validTime"
          type="number"
        />
        {errors.validTime && <h3>min: 1 max: 1000</h3>}

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
const Label = styled.label`
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #141414;
  :hover {
    cursor: pointer;
  }
`;

const FormBox = styled.form`
  display: grid;
  justify-items: center;
  background-color: #a7a284;
  height: 60vh;
  width: 60vw;
  border-radius: 10vh;
  box-shadow: 0px 0px 50px 18px #a7a28423;
  & h3 {
    color: #ff0000;
  }
`;

const Input = styled.input`
  height: 10vh;
  width: 50vw;
  background-color: transparent;
  outline: none;
  margin-top: 10vh;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #141414;
  text-align: center;
  border: solid 3px #141414;
  border-radius: 10vh;
  ::placeholder {
    color: #141414;
  }
  :hover {
    cursor: text;
  }
`;

const InputNumber = styled.input`
  font-size: 35px;
  font-weight: 800;
  color: #141414;
  text-align: center;
  width: 13vw;
  outline: none;
  margin-bottom: 1vh;
  background-color: transparent;
  border: solid 3px #141414;
  border-radius: 10vh;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Submit = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #141414;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
