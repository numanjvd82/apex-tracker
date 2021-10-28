import { SiOrigin } from 'react-icons/si';
import Icon from '../Icon';
import './StatsCard.css';

const StatsCard = () => {
  return (
    <>
      <div className="results">
        <div className="results-card">
          <div className="basic-stats">
            <img
              src="https://secure.download.dm.origin.com/production/avatar/prod/userAvatar/28323888/416x416.JPEG"
              alt=""
              className="avatar-img"
            />
            <h1>SlayerN5</h1>
            <span className="current current-lvl">LVL: 932</span>
            <div className="ban-detail">
              <span className="current current-ban">No Bans Right Now</span>
              <span className="current last-ban">
                Last Ban: Competitive Dodge Cooldown
              </span>
            </div>
            <div className="platform-icon">
              <Icon icon={<SiOrigin size={25} />} />
            </div>
          </div>

          <div className="col-right">
            <div className="img">
              <img
                src="https://api.mozambiquehe.re/assets/icons/lifeline.png"
                alt=""
              />
            </div>
            <div className="rank-card">
              <div className="rank-img">
                <img
                  src="https://api.mozambiquehe.re/assets/ranks/platinum3.png"
                  alt=""
                />
              </div>
              <div className="rank-name">
                <h3>
                  Platinum <span className="rank-number">3</span>
                </h3>
                <span>Season 10 Split II</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
