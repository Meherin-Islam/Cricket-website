import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, onPlayerSelect, selectedPlayers }) => {
    const { name, image, country, role, battingType, bowlingType, price } = player;

    const isSelected = selectedPlayers.some(selectedPlayer => selectedPlayer.player_id === player.player_id);

    const handleChoosePlayer = () => {
        onPlayerSelect(player); 
    };

    return (
        <div className="border border-gray-500 rounded-xl p-4 mb-10">
            <img className="rounded-lg h-48 w-full" src={image} alt="" />
            <div className="flex gap-4 mt-5">
                <FaUserAlt />
                <h2>{name}</h2>
            </div>
            <div className="flex gap-16 mt-5 mb-5">
                <div className="flex gap-3">
                    <FaFlag />
                    <span> {country}</span>
                </div>
                <span className="bg-gray-200 rounded-lg pr-2 pl-2">{role}</span>
            </div>
            <hr />
            <div>
                <p className="font-bold">Rating: </p>
            </div>
            <div className="flex justify-between">
                <p>{battingType}</p> 
                <p>{bowlingType}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p>Price: ${price}</p> 
                <button 
                    className={`bg-slate-400 p-2 rounded-lg ${isSelected ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    onClick={isSelected ? null : handleChoosePlayer} 
                    disabled={isSelected} 
                >
                    {isSelected ? 'Selected' : 'Choose Player'}
                </button>
            </div>
        </div>
    );
};

export default Player;
