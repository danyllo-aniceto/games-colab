import { useNavigate } from "react-router-dom";
import { Slide, Slider, SliderProps } from "../../../../components/Slider";
import { IGameDTO } from "../../../../dtos/IGameDTO";

import { Info, Item, LogoPlatforms } from "./styles";

interface ShowDesktopScreenGameProps {
  allGamesState: IGameDTO[];
}

export function ShowDesktopScreenGame({
  allGamesState,
}: ShowDesktopScreenGameProps) {
  const navigate = useNavigate();

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    loop: false,
    navigation: true,
    draggable: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <Slider settings={settings}>
      {allGamesState.map((game) => (
        <Slide
          onClick={() => navigate(`/gameDisplay/${game.id}`)}
          key={game.id}
        >
          <Item key={game.id}>
            <div className="image">
              <img src={game.image} alt={game.name} />
            </div>
            <Info>
              <span className="name-game">{game.name}</span>
              <span className="developer-game">{game.developer}</span>
              <LogoPlatforms>
                {game.PlatformGame.map((item) => (
                  <img
                    key={item.Platform.id}
                    src={item.Platform.image}
                    alt={item.Platform.name}
                  />
                ))}
              </LogoPlatforms>
            </Info>
          </Item>
        </Slide>
      ))}
    </Slider>
  );
}
