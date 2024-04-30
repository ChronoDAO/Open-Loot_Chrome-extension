import React, { useEffect, useState } from "react";

function DeltaFlyerPage() {
  const [ingameItems, setIngameItems] = useState({ items: [] });
  const [inmarketplaceItems, setInmarketplaceItems] = useState({ items: [] });
  const [inrentalItems, setInrentalItems] = useState({ items: [] });

  useEffect(() => {
    fetchIngameItems();
    fetchInmarketplaceItems();
    fetchInrentalItems();
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

  const fetchInrentalItems = async () => {
    try {
      const response = await fetch(
        "https://api.openloot.com/v2/market/me/rentals?page=1&pageSize=10&sort=name%3Aasc&status=listed"
      );
      const data = await response.json();
      setInrentalItems(data);
    } catch (error) {
      console.error("Error fetching rental items:", error);
    }
  };

  console.log(ingameItems);
  console.log(inmarketplaceItems);
  console.log(inrentalItems);

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
        ingameItems.items &&
        ingameItems.items.map((item, i) => (
          <p key={i}>{item.metadata && item.metadata.name}</p>
        ))}

      {/* Render marketplace items */}
      <h3>Marketplace Items</h3>
      {inmarketplaceItems &&
        inmarketplaceItems.items &&
        inmarketplaceItems.items.map((item, i) => (
          <p key={i}>{item.metadata && item.metadata.name}</p>
        ))}

      {/* Render rental items */}
      <h3>Rental Items</h3>
      {inrentalItems &&
        inrentalItems.items &&
        inrentalItems.items.map((rentalPack, i) => (
          rentalPack.content.map((item, i) => (
          <p key={i}>{item.metadata && item.metadata.name}</p>
        ))
        ))}
    </div>
  );
}

export default DeltaFlyerPage;
