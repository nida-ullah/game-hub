import { HStack, Image, space } from "@chakra-ui/react";
import logo from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SeacrchInput from "./SeacrchInput";

interface Props {
  onSeacrch: (searchText: string) => void;
}

const NavBar = ({ onSeacrch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SeacrchInput onSeacrch={onSeacrch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
