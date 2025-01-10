import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input borderRadius={20} variant="filled" placeholder="Search games..." />
    </InputGroup>
  )
}

export default SearchInput;
