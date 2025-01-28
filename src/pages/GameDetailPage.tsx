import { useParams } from "react-router-dom"

function GameDetailPage() {
  const { id } = useParams();
  return (
    <p>game id {id}</p>
  )
}

export default GameDetailPage;
