import { useState } from 'react';
import Input from '../../components/Input/Input';
import { getStats } from '../../redux/actions/apex';
import { SiOrigin, SiPlaystation, SiXbox } from 'react-icons/si';
import Icon from '../../components/Icon';
import './Stats.css';
import { useDispatch } from 'react-redux';
import StatsCard from '../../components/StatsCard/StatsCard';

const Stats = () => {
  const [playerName, setPlayerName] = useState('');
  const [platform, setPlatform] = useState('PC');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = playerName.trim();
    if (!name) {
      alert('Please enter a valid player name');
    } else {
      dispatch(getStats(name, platform));
      setPlayerName('');
    }
  };

  return (
    <>
      <div className="stats-container">
        <h1 className="title">Stats</h1>
        <form className="options-form">
          <Input
            placeholder="Username"
            name="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <span className="platform">{platform}</span>
          <div className="options">
            <button
              type="button"
              onClick={() => setPlatform('PC')}
              value={platform}
              className="btn btn-origin"
            >
              <Icon icon={<SiOrigin size="30" color="white" />} />
            </button>
            <button
              type="button"
              onClick={() => setPlatform('PS4')}
              value={platform}
              className="btn btn-ps"
            >
              <Icon icon={<SiPlaystation size="30" color="white" />} />
            </button>
            <button
              type="button"
              onClick={() => setPlatform('X1')}
              value={platform}
              className="btn btn-xbox"
            >
              <Icon icon={<SiXbox size="30" color="white" />} />
            </button>
          </div>
        </form>
        <button onClick={handleSubmit} className="btn btn-submit" type="submit">
          Submit
        </button>
      </div>
      <StatsCard />
    </>
  );
};

export default Stats;
