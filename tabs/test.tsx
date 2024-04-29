import { useEffect, useState } from "react";

 async function DeltaFlyerPage() {
    const [ingameItems, setIngameItems] = useState({
        items: []});
    useEffect(() => {
        fetchData().then((data) => {
            setIngameItems(data);
        })
    })
    console.log(await fetchData());
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16
        }}>
        <h2>Delta Flyer Tab</h2>
   
        <p>This tab is only available on the Delta Flyer page.</p>
        <p>{JSON.stringify(ingameItems)}</p>
        <p>{ingameItems && ingameItems.items.map((item, i) => <p key ={i}>item.metadata.name</p>)}</p>
      </div>
    )
  }
   
  async function fetchData() {
    try {
      const response = await fetch('https://api.openloot.com/v2/market/items/in-game?page=1&pageSize=50&sort=name%3Aasc');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  export default DeltaFlyerPage