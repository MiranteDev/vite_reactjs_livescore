import { LiveGameObj } from '../types/LiveGameObj';
import { Team } from '../types/Team';

export function LiveGame(props: LiveGameObj) {
  return (
    <div>
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
          margin: '20px',
          border: '1px solid black',
          height: '200px',
        }}
      >
        <div
          style={{
            display: 'grid',
            width: '95%',
            gridTemplateColumns: '1fr 1.5fr 1fr',
            textAlign: 'center',
            alignItems: 'center',
            padding: '15px',
          }}
        >
          <img
            style={{ width: '50px', height: '50px', borderRadius: '25px' }}
            src={props.homeTeam.imageUrl}
            alt=""
          />
          {props.homeTeam.goals} v {props.awayTeam.goals}
          <img
            style={{ width: '50px', height: '50px', borderRadius: '25px' }}
            src={props.awayTeam.imageUrl}
            alt=""
          />
        </div>
        <div
          style={{
            display: 'grid',

            gridTemplateColumns: '1.5fr 0.5fr 1.5fr',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <span style={{ fontWeight: '600' }}>{props.homeTeam.name}</span>
          <span></span>
          <span style={{ fontWeight: '600' }}>{props.awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
}
