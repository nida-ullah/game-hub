import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSeacrch: (searchText: string) => void;
}

const SeacrchInput = ({ onSeacrch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSeacrch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search ames..."
            variant="filled"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SeacrchInput;
