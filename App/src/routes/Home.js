import React from "react";
import axios from "axios";
import './Home.css';
import Game from "../components/Game";

class Home extends React.Component {
  state ={
    isLoading: true,
    games: [],
  };

  getGameInfos = () => {
    this.games = [
      {
        "id": 1,
        "star": 5,
        "title": "클래시 로얄",
        "summary": "《클래시 로얄》은 핀란드의 비디오 게임 제작사 슈퍼셀이 제작 및 배포하는 타워 디펜스 비디오 게임이다. 또한 클래시 로얄은 2018 아시안게임의 시범 종목으로 채택되기도 했다. 한국의 유튜브 라이브로도 글로벌 대회도 열었다. 한때 e스포츠 종목에 오르기도 했으나 현재는 폐지되었다",
        "image": "https://yt3.ggpht.com/ytc/AMLnZu-kZab4xMUsj5LNRMeHrtZC39P9Amx1GkEbbmJ0Tg=s900-c-k-c0x00ffffff-no-rj",
        "genres": [
          "battle",
          "card"
        ],
      },
      {
        "id": 2,
        "star": 4,
        "title": "마구마구",
        "summary": "마구마구는 애니파크에서 제작하여 2006년 3월 9일 넷마블에서 서비스를 시작한 대한민국의 온라인 야구 게임으로, 현재 한게임에서도 서비스를 제공하고 있다. 트레이딩 카드 시스템을 활용한 치밀한 심리전과 깔끔한 캐릭터성이 특징이다.",
        "image": "https://play-lh.googleusercontent.com/hukZRe8RO3YzGLNy9VkRJh9UbBY7xF554O5OOwhmjHKP6eFJPi0ZBFsJkv7hS04kkcwd",
        "genres": [
          "sports",
          "card"
        ],
      },
    ];
    this.setState({games: this.games, isLoading: false});
  };
  
  componentDidMount() {
    this.getGameInfos();
  }   
  render() {
    const {isLoading, games} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loder">
            <span className="loder__text">Loading...</span>
          </div>
        ) : (
          <div className="games"> 
            {games.map((game) => {
              return <Game
                 key={game.id}
                id={game.id}
                title={game.title}
                star={game.star}
                summary={game.summary}
                image={game.image}
                genres={game.genres}
                />
            })}
          </div>
        )}
       </section>
    );  
  }  
}
export default Home;
