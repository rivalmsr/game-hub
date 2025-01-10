import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

function SortSelector({ sortOrder, onSelectSortOrder }: Props) {

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-release', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]


  const activeSortOrder = sortOrders.find(item => item.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {activeSortOrder?.label || 'Relevance'} </MenuButton>
      <MenuList>
        {sortOrders.map(sortOrder =>
          <MenuItem key={sortOrder.value} onClick={() => onSelectSortOrder(sortOrder.value)}>{sortOrder.label}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default SortSelector;
