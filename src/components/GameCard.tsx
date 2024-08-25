import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  Hide,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      {/* <Card borderRadius={10} overflow={"hidden"}> */}
      <Card>
        {/*if we want to croped the image for smaller size*/}
        {/* <Image src={getCroppedImageUrl(game.background_image)}></Image> */}
        <Image src={game.background_image}></Image>
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
