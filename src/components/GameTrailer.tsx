import useTailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

function GameTraier({ gameId }: Props) {
  const { data, isLoading, error } = useTailers(gameId)

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? <video width="1280" src={first.data[480]} poster={first.preview} controls /> : null;

}

export default GameTraier;
