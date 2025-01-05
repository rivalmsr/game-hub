import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiHttp from "../services/api-http";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('');

  useEffect(() => {
    apiHttp.get<FetchGameResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  }, [])

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid;
