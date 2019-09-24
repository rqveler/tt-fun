 const  players = (function(){

    const allPlayers = [];

    return {
        addPlayer: (player)=>allPlayers.push(player),
        getName: (id)=> {
            const player = allPlayers.find(p => p.id === id);
            return player ? player.fullName : undefined;
        }
    }    
})();

export default players;