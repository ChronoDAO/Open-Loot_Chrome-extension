import React, { useEffect, useState } from "react";

function DeltaFlyerPage() {
  const [ingameItems, setIngameItems] = useState({ items: [] });
  const [inmarketplaceItems, setInmarketplaceItems] = useState({ items: [] });

  useEffect(() => {
    fetchIngameItems();
    fetchInmarketplaceItems();
  }, []);

  const fetchIngameItems = async () => {
    try {
      const response = await fetch(
        "https://api.openloot.com/v2/market/items/in-game?page=1&pageSize=50&sort=name%3Aasc"
      );
      const data = await response.json();
      setIngameItems(data);
    } catch (error) {
      console.error("Error fetching ingame items:", error);
    }
  };

  const fetchInmarketplaceItems = async () => {
    try {
      const response = await fetch(
        "https://api.openloot.com/v2/market/items?page=1&pageSize=50&sort=name%3Aasc&status=unlocked"
      );
      const data = await response.json();
      setInmarketplaceItems(data);
    } catch (error) {
      console.error("Error fetching marketplace items:", error);
    }
  };

  console.log(ingameItems);
  console.log(inmarketplaceItems);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}
    >
      <h2>Delta Flyer Tab</h2>
      <p>This tab is only available on the Delta Flyer page.</p>

      {/* Render ingame items */}
      <h3>Ingame Items</h3>
      {ingameItems &&
        ingameItems.items.map((item, i) => (
          <p key={i}>{item.metadata.name}</p>
        ))}

      {/* Render marketplace items */}
      <h3>Marketplace Items</h3>
      {inmarketplaceItems &&
        inmarketplaceItems.items.map((item, i) => (
          <p key={i}>{item.metadata.name}</p>
        ))}
    </div>
  );
}

export default DeltaFlyerPage;
