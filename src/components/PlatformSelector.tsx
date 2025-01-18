import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
}

function PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
  const { data } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platform?.name || 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector;
