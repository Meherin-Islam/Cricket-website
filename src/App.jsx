import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]); 
  const [coinCount, setCoinCount] = useState(0);
  const maxPlayers = 6;

  const handleToggle = (view) => {
    setIsSelected(view === 'selected');
  };

  const handleAddCoins = () => {
    setCoinCount((prevCount) => prevCount + 200000);
  };

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.length >= maxPlayers) {
      toast.error("You can only select up to 6 players!", { position: "top-center", autoClose: 3000 });
    } else if (coinCount < player.price) {
      toast.error("Not enough coins to add this player!", { position: "top-center", autoClose: 3000 });
    } else if (!selectedPlayers.find(p => p.player_id === player.player_id)) {
      setSelectedPlayers((prev) => [...prev, player]);
      setCoinCount((prevCount) => prevCount - player.price);
    } else {
      toast.info("Player is already selected!", { position: "top-center", autoClose: 2000 });
    }
  };

  const handleRemovePlayer = (playerId) => {
    const player = selectedPlayers.find(p => p.player_id === playerId);
    if (player) {
      setSelectedPlayers((prev) => prev.filter(p => p.player_id !== playerId));
      setCoinCount((prevCount) => prevCount + player.price);
    }
  };

  return (
    <>
      <ToastContainer />
      <Header coinCount={coinCount} handleAddCoins={handleAddCoins} />
      <div>
        <div className="flex justify-end mt-5 mb-4">
          <div className="flex gap-4 mr-3 border rounded-lg">
            <button className="font-bold" onClick={() => handleToggle('available')}>
              Available
            </button>
            <button className="font-bold" onClick={() => handleToggle('selected')}>
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {isSelected 
          ? <Selected players={selectedPlayers} onRemovePlayer={handleRemovePlayer} handleBack={() => handleToggle('available')} /> 
          : <Players onPlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
