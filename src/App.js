import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import data from "./data";
import './styles.scss';
function App() {

  const cards = data.map(item =>{
    return(
      <Card 
      key={item.id}
      {...item}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewcount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
     <div className="card-list" >
     {cards}
     </div>
    </div>
  );
}

export default App;
