const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
};

export default ListofIndianPlayers;
