import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoMatch.css';

const NoMatch: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="404">
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">THE PAGE</div>
        <div className="_2">WAS NOT FOUND</div>
        <button
          className="px-6 py-3 rounded bg-emerald-400 text-white text-lg mt-4 hover:bg-emerald-400"
          onClick={() => navigate(-1)}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NoMatch;
