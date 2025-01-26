import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const { data } = usePlatforms();

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platform?.name || 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector;
