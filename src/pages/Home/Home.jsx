import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <>
      <h1 className="brand-heading">
        Tracker <span className="brand-outstand">Mania</span>
      </h1>
      <p className="description-text">
        Track your stats and see how you rank against other players!
      </p>
      {/* Card Container */}
      <div className="cards-container">
        {/* card */}
        <div className="card">
          <h3>Apex Legends</h3>
          <div>
            <Link to="/stats/:apex">
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
