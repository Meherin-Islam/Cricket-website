import { MdDelete } from "react-icons/md";

const Selected = ({ players, onRemovePlayer, handleBack }) => {
  return (
    <div className="m-4">
      <h3 className='font-bold text-2xl mb-4'>Selected Players</h3>
      {players.length === 0 ? (
        <p>No players selected yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 m-4">
          {players.map(player => (
            <div key={player.player_id} className="border border-gray-300 rounded-xl p-4 flex items-center gap-4">
              <img className="w-16 h-16 rounded-lg" src={player.image} alt={`${player.name}'s image`} />
              <div className="flex-1">
                <h4 className="font-bold">{player.name}</h4>
                <p>{player.role}</p>
                <p>{player.price}</p>
              </div>
              <button 
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
                onClick={() => onRemovePlayer(player.player_id)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      )}
      
      <button 
        className="mt-4 bg-[#E7FE29] text-black px-4 py-2 rounded-lg font-bold"
        onClick={handleBack}
      >
        Add More Players
      </button>
    </div>
  );
};

export default Selected;