import { useForm } from "react-hook-form";
import styled from "styled-components";
import { updateUrl } from "services/urlService";
import { Url } from "types";

interface FormData {
  validTime: number;
}
interface Props {
  url: Url;
  handleUpdate: () => void;
}

function RenewForm({ url, handleUpdate }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    await updateUrl(data, url._id);
    handleUpdate();
  });

  return (
    <form onSubmit={onSubmit}>
      <Box>
        <Input
          {...register("validTime", { min: 1, max: 1000, required: true })}
          id="validTime"
          type="number"
        />

        <Submit type="submit" value="Add" />
        {errors.validTime && <h1>min: 1 max: 1000</h1>}
      </Box>
    </form>
  );
}
export default RenewForm;

const Box = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  & h1 {
    font-size: 10px;
    position: absolute;
    margin-top: 42px;
  }
`;

const Submit = styled.input`
  height: 4vh;
  width: 4vw;
  grid-column: 2;
  margin: 4px;
  background-color: transparent;
  outline: none;
  border: none;
  color: #edeec0;
  transition: all 0.1s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Input = styled.input`
  height: 4vh;
  width: 4vw;
  grid-column: 1;
  background-color: transparent;
  outline: none;
  text-align: center;
  border: solid 1px #edeec0;
  border-radius: 10%;
  margin: 4px;
  :hover {
    cursor: text;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
