import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-release', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
]

function SortSelector() {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const activeSortOrder = sortOrders.find(item => item.value === sortOrder);

  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {activeSortOrder?.label || 'Relevance'} </MenuButton>
      <MenuList>
        {sortOrders.map(sortOrder =>
          <MenuItem key={sortOrder.value} onClick={() => setSortOrder(sortOrder.value)}>{sortOrder.label}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default SortSelector;
