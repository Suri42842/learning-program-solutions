const OddPlayers = (team) => {
  const [_, ...rest] = team; // skip first index to start from 1
  return (
    <ul>
      {rest.filter((_, index) => index % 2 === 0).map((player, idx) => (
        <li key={idx}>{player}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;
