import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        navigate('/');
        setSearchText(ref.current.value);
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} variant="filled" placeholder="Search games..." />
      </InputGroup>
    </form>

  )
}

export default SearchInput;
