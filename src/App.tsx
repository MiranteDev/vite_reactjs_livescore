import { useEffect, useState } from 'react';
import { LiveGame } from './components/LiveGame';
import { LiveGameObj } from './types/LiveGameObj';
import { Team } from './types/Team';

import axios from 'axios';
import { GameCard } from './components/GameCard';
import { MainLayout } from './components/Layout';

function App() {
  const [liveGames, setLiveGames] = useState<LiveGameObj[]>([
    { homeTeam: { name: 'Benfica' }, awayTeam: { name: 'Boavista' } },
    { homeTeam: { name: 'Braga' }, awayTeam: { name: 'Estoril' } },
    { homeTeam: { name: 'Sporting' }, awayTeam: { name: 'Maritimo' } },
  ]);

  useEffect(() => {
    axios
      .get(`https://62f4496eac59075124bbce72.mockapi.io/api/v2/games`)
      .then((res) => {
        const data = res.data;
        const listGames: LiveGameObj[] = [];

        const d = data;
        d.forEach((i: any) => {
          listGames.push({
            homeTeam: {
              name: i.home_team_name,
              goals: i.home_team_goals,
              imageUrl: i.home_team_imageUrl,
            },
            awayTeam: {
              name: i.away_team_name,
              goals: i.away_team_goals,
              imageUrl: i.away_team_imageUrl,
            },
          });
        });
        setLiveGames(listGames);
        console.log(data);
      });
  }, []);


  return (<MainLayout></MainLayout>);
  /*return (
    <div style={{ margin: '50px', width: '93%' }}>
      <span>
        <span style={{ fontSize: '42px', fontWeight: '700', color: 'black' }}>
          Live
        </span>
        {'  '}
        <span style={{ color: 'red', fontWeight: '500', fontSize: '24px' }}>
          {liveGames.length}
        </span>
      </span>

      <div
        
      >
        {liveGames.map((game) => {
          return <GameCard />;
        })}
      </div>
    </div>
  );*/
}

export default App;
