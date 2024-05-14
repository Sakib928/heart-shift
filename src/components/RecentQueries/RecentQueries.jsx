import RecentQuery from "./RecentQuery";

const RecentQueries = ({ loadedCards }) => {
  const showCards = loadedCards.slice(0, 6);
  console.log(showCards);
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold mt-8">Recent Queries</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {showCards.map((card) => {
          return <RecentQuery key={card._id} card={card}></RecentQuery>;
        })}
      </div>
    </div>
  );
};

export default RecentQueries;
