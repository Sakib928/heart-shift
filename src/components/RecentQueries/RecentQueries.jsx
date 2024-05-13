import RecentQuery from "./RecentQuery";

const RecentQueries = ({ loadedCards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loadedCards.map((card) => {
        return <RecentQuery key={card._id} card={card}></RecentQuery>;
      })}
    </div>
  );
};

export default RecentQueries;
