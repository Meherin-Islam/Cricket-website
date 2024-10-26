import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ onPlayerSelect, selectedPlayers }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div>
            <h3 className="font-bold text-3xl mb-3">Available Players</h3>
            <div className="grid grid-cols-3 gap-6">
                {
                    players.map(player => (
                        <Player 
                            key={player.player_id} 
                            player={player} 
                            onPlayerSelect={onPlayerSelect} 
                            selectedPlayers={selectedPlayers} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Players;

