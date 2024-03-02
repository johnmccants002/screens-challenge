import React from "react";
import { View } from "react-native";
import Dropdown from "react-native-paper-dropdown";
import { List } from "react-native-paper";

interface DropdownMenuProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  list: Array<{ label: string; value: string }>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  value,
  setValue,
  list,
}) => {
  const [showDropDown, setShowDropDown] = React.useState(false);

  return (
    <Dropdown
      label={label}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={value}
      setValue={setValue}
      list={list}
    />
  );
};

export default DropdownMenu;
