import './StatsCard.css';

const StatsCard = () => {
  return (
    <>
      <div className="results">
        <div className="results-card">
          <h1>SlayerN5</h1>
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
