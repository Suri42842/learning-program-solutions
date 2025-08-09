const EvenPlayers = (team) => {
  return (
    <ul>
      {team.filter((_, index) => index % 2 === 0).map((player, idx) => (
        <li key={idx}>{player}</li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
