import React from "react";
import type { PlasmoContentScript } from "plasmo";

import type { ItemLocalStorage } from "./interfaces/purchase"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { Box, Stack, Button, Typography } from '@mui/material';

import { PieChart } from 'react-minimal-pie-chart';


// Configure on which page this component will be mounted
export const config: PlasmoContentScript = {
  matches: ["https://openloot.com/dashboard"],
}


export const getRootContainer = () => {
  return document.querySelector("main .chakra-container")
}

const styleElement = document.createElement("style")

const styleCache = createCache({
  key: "plasmo-mui-cache",
  insertionPoint : document.querySelector('head'),
  container: styleElement, 
})

export const getStyle = () => styleElement


function Dashboard() {



  let nftData: ItemLocalStorage[] = JSON.parse(localStorage['nft'])


  document.querySelector("main .chakra-container div").innerHTML = "";

  const owned = getOwned(nftData)

  const loot = getLoot(nftData)
  const spent = getSpent(nftData)
  const sold = getSale(nftData)
  // const invested = purchased.value - sold.value

  // const profitValue = ownedValue - realSpentValue;

  return (

      <Box>


        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderRadius: '0.75rem' }}>
          <Stack minWidth={240} bgcolor={"#2d375c"} padding={2} margin={5}>
            <Typography variant="h4">
              NFTs in your collection
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Box bgcolor={"black"} padding={2} margin={2}>
                <Typography variant="h6" >Number</Typography>
                <Typography variant="h5">{owned.nft}</Typography>
                <Box>
                  <PieChart
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={(index) => ({ fontSize: '6px' })}
                    data={[
                      { title: 'uncommon', value: owned.uncommon.nft, color: '#1cbf6a' },
                      { title: 'rare', value: owned.rare.nft, color: '#159cfd' },
                      { title: 'epic', value: owned.epic.nft, color: '#a369ff' },
                      { title: 'legendary', value: owned.legendary.nft, color: '#e67e22' },
                      { title: 'mythic', value: owned.mythic.nft, color: '#ffd32a' },
                      { title: 'exalted', value: owned.exalted.nft, color: '#ef5777' },
                    ]}
                  />
                </Box>
              </Box>

              <Box bgcolor={"black"} padding={2} margin={2}>
                <Typography variant="h6" >Value</Typography>
                <Typography variant="h5">{owned.value} $</Typography>
                <Box>
                  <PieChart
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={(index) => ({ fontSize: '6px' })}
                    data={[
                      { title: 'uncommon', value: owned.uncommon.value, color: '#1cbf6a' },
                      { title: 'rare', value: owned.rare.value, color: '#159cfd' },
                      { title: 'epic', value: owned.epic.value, color: '#a369ff' },
                      { title: 'legendary', value: owned.legendary.value, color: '#e67e22' },
                      { title: 'mythic', value: owned.mythic.value, color: '#ffd32a' },
                      { title: 'exalted', value: owned.exalted.value, color: '#ef5777' },
                    ]}
                  />
                </Box>
              </Box>
            </Box>

            <Button href="https://openloot.com/my-stats" target="_blank">
              View details in data table
            </Button>
          </Stack>


          <Stack minWidth={240} bgcolor={"#2d375c"} padding={2} margin={5}>
            <Typography variant="h4">
              NFTs Looted
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Box bgcolor={"black"} padding={2} margin={2}>
                <Typography variant="h6" >Number</Typography>
                <Typography variant="h5">{loot.nft}</Typography>
                <Box>
                  <PieChart
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={(index) => ({ fontSize: '6px' })}
                    data={[
                      { title: 'uncommon', value: loot.uncommon.nft, color: '#1cbf6a' },
                      { title: 'rare', value: loot.rare.nft, color: '#159cfd' },
                      { title: 'epic', value: loot.epic.nft, color: '#a369ff' },
                      { title: 'legendary', value: loot.legendary.nft, color: '#e67e22' },
                      { title: 'mythic', value: loot.mythic.nft, color: '#ffd32a' },
                      { title: 'exalted', value: loot.exalted.nft, color: '#ef5777' },
                    ]}
                  />
                </Box>
              </Box>
              <Box bgcolor={"black"} padding={2} margin={2}>
                <Typography variant="h6" >Value</Typography>
                <Typography variant="h5">{loot.value} $</Typography>
                <Box>
                  <PieChart
                    label={({ dataEntry }) => dataEntry.value + " $"}
                    labelStyle={(index) => ({ fontSize: '6px' })}
                    data={[
                      { title: 'uncommon', value: loot.uncommon.value, color: '#1cbf6a' },
                      { title: 'rare', value: loot.rare.value, color: '#159cfd' },
                      { title: 'epic', value: loot.epic.value, color: '#a369ff' },
                      { title: 'legendary', value: loot.legendary.value, color: '#e67e22' },
                      { title: 'mythic', value: loot.mythic.value, color: '#ffd32a' },
                      { title: 'exalted', value: loot.exalted.value, color: '#ef5777' },
                    ]}
                  />
                </Box>
              </Box>
              <Button href="https://twitter.com/compose/tweet" target="_blank">
                Share on twitter
              </Button>

            </Box>
          </Stack>

        </Box>


          <Stack minWidth={240} bgcolor={"#2d375c"} padding={2} margin={5}>
            <Typography variant="h4">
              Trade history
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Stack minWidth={240} bgcolor={"#1a2040"} padding={2} margin={5}>
                <Typography variant="h4">
                  NFTs you bought
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <Box bgcolor={"black"} padding={2} margin={2}>
                    <Typography variant="h6" >Number</Typography>
                    <Typography variant="h5">{spent.nft}</Typography>
                    <Box>
                      <PieChart
                        label={({ dataEntry }) => dataEntry.value}
                        labelStyle={(index) => ({ fontSize: '6px' })}
                        data={[
                          { title: 'uncommon', value: spent.uncommon.nft, color: '#1cbf6a' },
                          { title: 'rare', value: spent.rare.nft, color: '#159cfd' },
                          { title: 'epic', value: spent.epic.nft, color: '#a369ff' },
                          { title: 'legendary', value: spent.legendary.nft, color: '#e67e22' },
                          { title: 'mythic', value: spent.mythic.nft, color: '#ffd32a' },
                          { title: 'exalted', value: spent.exalted.nft, color: '#ef5777' },
                        ]}
                      />
                    </Box>
                  </Box>
                  <Box bgcolor={"black"} padding={2} margin={2}>
                    <Typography variant="h6" >Value</Typography>
                    <Typography variant="h5">{spent.value}</Typography>
                    <Box>
                      <PieChart
                        label={({ dataEntry }) => dataEntry.value + " $"}
                        labelStyle={(index) => ({ fontSize: '6px' })}
                        data={[
                          { title: 'uncommon', value: spent.uncommon.value, color: '#1cbf6a' },
                          { title: 'rare', value: spent.rare.value, color: '#159cfd' },
                          { title: 'epic', value: spent.epic.value, color: '#a369ff' },
                          { title: 'legendary', value: spent.legendary.value, color: '#e67e22' },
                          { title: 'mythic', value: spent.mythic.value, color: '#ffd32a' },
                          { title: 'exalted', value: spent.exalted.value, color: '#ef5777' },
                        ]}
                      />
                    </Box>
                  </Box>
                </Box>

                <Button href="https://openloot.com/my-stats" target="_blank">
                  View details in data table
                </Button>
              </Stack>


              <Stack minWidth={240} bgcolor={"#1a2040"} padding={2} margin={5}>
                <Typography variant="h4">
                  NFTs you sold
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <Box bgcolor={"black"} padding={2} margin={2}>
                    <Typography variant="h6" >Number</Typography>
                    <Typography variant="h5">{sold.nft}</Typography>
                    <Box>
                      <PieChart
                        label={({ dataEntry }) => dataEntry.value}
                        labelStyle={(index) => ({ fontSize: '6px' })}
                        data={[
                          { title: 'uncommon', value: sold.uncommon.nft, color: '#1cbf6a' },
                          { title: 'rare', value: sold.rare.nft, color: '#159cfd' },
                          { title: 'epic', value: sold.epic.nft, color: '#a369ff' },
                          { title: 'legendary', value: sold.legendary.nft, color: '#e67e22' },
                          { title: 'mythic', value: sold.mythic.nft, color: '#ffd32a' },
                          { title: 'exalted', value: sold.exalted.nft, color: '#ef5777' },
                        ]}
                      />
                    </Box>
                  </Box>
                  <Box bgcolor={"black"} padding={2} margin={2}>
                    <Typography variant="h6" >Value</Typography>
                    <Typography variant="h5">{sold.value} $</Typography>
                    <Box>
                      <PieChart
                        label={({ dataEntry }) => dataEntry.value + " $"}
                        labelStyle={(index) => ({ fontSize: '6px' })}
                        data={[
                          { title: 'uncommon', value: sold.uncommon.value, color: '#1cbf6a' },
                          { title: 'rare', value: sold.rare.value, color: '#159cfd' },
                          { title: 'epic', value: sold.epic.value, color: '#a369ff' },
                          { title: 'legendary', value: sold.legendary.value, color: '#e67e22' },
                          { title: 'mythic', value: sold.mythic.value, color: '#ffd32a' },
                          { title: 'exalted', value: sold.exalted.value, color: '#ef5777' },
                        ]}
                      />
                    </Box>
                  </Box>
                </Box>

                <Button href="https://openloot.com/my-stats" target="_blank">
                  View details in data table
                </Button>
              </Stack>




            </Box>

          </Stack>

          {/* <Stack minWidth={240} bgcolor={"#2d375c"} padding={2} margin={5}>
            <Typography variant="h4">
              Flipping opportunities ( NOT IMPLEMENTED YET, JUST AN IDEA)
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                  <Box bgcolor={"green"} padding={2} margin={2}>
                    <p>Profit / loss :</p>
                    <p>+556$</p>
                    <p>+35%</p>
                  </Box>
                  <Box bgcolor={"green"} padding={2} margin={2}>
                    <p>Flipped NFT</p>
                    <p>50</p>
                  </Box>
                  <Box bgcolor={"black"} padding={2} margin={2}>
                    <p>Value invested</p>
                    <p>2000$</p>
                  </Box>
                  <Box bgcolor={"black"} padding={2} margin={2}>
                    <p>50 NFT ready to flip ( in profit ) </p>
                    <p>( with 5% margin for taxes</p>
                  </Box>
                </Box>

          </Stack> */}

      </Box>









  );
}

export default Dashboard;


function getOwned(nftData: ItemLocalStorage[]) {
  let owned = {
    value: 0,
    nft: 0,
    uncommon: {
      value: 0,
      nft: 0,
    },
    rare: {
      value: 0,
      nft: 0,
    },
    epic: {
      value: 0,
      nft: 0,
    },
    legendary: {
      value: 0,
      nft: 0,
    },
    mythic: {
      value: 0,
      nft: 0,
    },
    exalted: {
      value: 0,
      nft: 0,
    },
  }

  nftData.map(nft => {
    if (nft.ownershipStatus == "Owned") {
      owned.value = owned.value + nft.marketFloorPrice

      owned.nft = owned.nft + 1
      switch (nft.rarity) {
        case 'uncommon':
          owned.uncommon.value = owned.uncommon.value + nft.marketFloorPrice

          owned.uncommon.nft = owned.uncommon.nft + 1
          break;
        case 'rare':
          owned.rare.value = owned.rare.value + nft.marketFloorPrice
          owned.rare.nft = owned.rare.nft + 1
          break;
        case 'epic':
          owned.epic.value = owned.epic.value + nft.marketFloorPrice
          owned.epic.nft = owned.epic.nft + 1
          break;
        case 'legendary':
          owned.legendary.value = owned.legendary.value + nft.marketFloorPrice
          owned.legendary.nft = owned.legendary.nft + 1
          break;
        case 'exalted':
          owned.exalted.value = owned.exalted.value + nft.marketFloorPrice
          owned.exalted.nft = owned.exalted.nft + 1
          break;

        default:
          break;
      }
    }
  })

  owned.value = Math.round((owned.value + Number.EPSILON) * 100) / 100
  owned.uncommon.value = Math.round((owned.uncommon.value + Number.EPSILON) * 100) / 100
  owned.rare.value = Math.round((owned.rare.value + Number.EPSILON) * 100) / 100
  owned.epic.value = Math.round((owned.epic.value + Number.EPSILON) * 100) / 100
  owned.legendary.value = Math.round((owned.legendary.value + Number.EPSILON) * 100) / 100
  owned.exalted.value = Math.round((owned.exalted.value + Number.EPSILON) * 100) / 100


  return owned
}

function getLoot(nftData: ItemLocalStorage[]) {
  let loot = {
    value: 0,
    nft: 0,
    uncommon: {
      value: 0,
      nft: 0,
    },
    rare: {
      value: 0,
      nft: 0,
    },
    epic: {
      value: 0,
      nft: 0,
    },
    legendary: {
      value: 0,
      nft: 0,
    },
    mythic: {
      value: 0,
      nft: 0,
    },
    exalted: {
      value: 0,
      nft: 0,
    },
  }

  nftData.map(nft => {
    if (nft.obtentionMethod == "Looted") {
      loot.value = loot.value + nft.marketFloorPrice

      loot.nft = loot.nft + 1
      switch (nft.rarity) {
        case 'uncommon':
          loot.uncommon.value = loot.uncommon.value + nft.marketFloorPrice

          loot.uncommon.nft = loot.uncommon.nft + 1
          break;
        case 'rare':
          loot.rare.value = loot.rare.value + nft.marketFloorPrice
          loot.rare.nft = loot.rare.nft + 1
          break;
        case 'epic':
          loot.epic.value = loot.epic.value + nft.marketFloorPrice
          loot.epic.nft = loot.epic.nft + 1
          break;
        case 'legendary':
          loot.legendary.value = loot.legendary.value + nft.marketFloorPrice
          loot.legendary.nft = loot.legendary.nft + 1
          break;
        case 'exalted':
          loot.exalted.value = loot.exalted.value + nft.marketFloorPrice
          loot.exalted.nft = loot.exalted.nft + 1
          break;

        default:
          break;
      }
    }
  })

  loot.value = Math.round((loot.value + Number.EPSILON) * 100) / 100
  loot.uncommon.value = Math.round((loot.uncommon.value + Number.EPSILON) * 100) / 100
  loot.rare.value = Math.round((loot.rare.value + Number.EPSILON) * 100) / 100
  loot.epic.value = Math.round((loot.epic.value + Number.EPSILON) * 100) / 100
  loot.legendary.value = Math.round((loot.legendary.value + Number.EPSILON) * 100) / 100
  loot.exalted.value = Math.round((loot.exalted.value + Number.EPSILON) * 100) / 100

  return loot
}

function getSpent(nftData: ItemLocalStorage[]) {
  let spent = {
    value: 0,
    nft: 0,
    uncommon: {
      value: 0,
      nft: 0,
    },
    rare: {
      value: 0,
      nft: 0,
    },
    epic: {
      value: 0,
      nft: 0,
    },
    legendary: {
      value: 0,
      nft: 0,
    },
    mythic: {
      value: 0,
      nft: 0,
    },
    exalted: {
      value: 0,
      nft: 0,
    },
  }

  nftData.map(nft => {
    if (nft.obtentionMethod == "Bought") {
      spent.value = spent.value + nft.purchasedPrice

      spent.nft = spent.nft + 1
      switch (nft.rarity) {
        case 'uncommon':
          spent.uncommon.value = spent.uncommon.value + nft.purchasedPrice

          spent.uncommon.nft = spent.uncommon.nft + 1
          break;
        case 'rare':
          spent.rare.value = spent.rare.value + nft.purchasedPrice
          spent.rare.nft = spent.rare.nft + 1
          break;
        case 'epic':
          spent.epic.value = spent.epic.value + nft.purchasedPrice
          spent.epic.nft = spent.epic.nft + 1
          break;
        case 'legendary':
          spent.legendary.value = spent.legendary.value + nft.purchasedPrice
          spent.legendary.nft = spent.legendary.nft + 1
          break;
        case 'exalted':
          spent.exalted.value = spent.exalted.value + nft.purchasedPrice
          spent.exalted.nft = spent.exalted.nft + 1
          break;

        default:
          break;
      }
    }
  })

  spent.value = Math.round((spent.value + Number.EPSILON) * 100) / 100
  spent.uncommon.value = Math.round((spent.uncommon.value + Number.EPSILON) * 100) / 100
  spent.rare.value = Math.round((spent.rare.value + Number.EPSILON) * 100) / 100
  spent.epic.value = Math.round((spent.epic.value + Number.EPSILON) * 100) / 100
  spent.legendary.value = Math.round((spent.legendary.value + Number.EPSILON) * 100) / 100
  spent.exalted.value = Math.round((spent.exalted.value + Number.EPSILON) * 100) / 100


  return spent
}

function getSale(nftData: ItemLocalStorage[]) {
  let sold = {
    value: 0,
    nft: 0,
    uncommon: {
      value: 0,
      nft: 0,
    },
    rare: {
      value: 0,
      nft: 0,
    },
    epic: {
      value: 0,
      nft: 0,
    },
    legendary: {
      value: 0,
      nft: 0,
    },
    mythic: {
      value: 0,
      nft: 0,
    },
    exalted: {
      value: 0,
      nft: 0,
    },
  }

  nftData.map(nft => {
    if (nft.ownershipStatus == "Sold") {
      sold.value = Math.round( (sold.value + nft.soldPrice)*100 )/100
      console.log(sold.value);

      sold.nft = sold.nft + 1
      switch (nft.rarity) {
        case 'uncommon':
          sold.uncommon.value = Math.round( (  sold.uncommon.value + nft.soldPrice )*100 )/100
         
          sold.uncommon.nft = sold.uncommon.nft + 1
          break;
        case 'rare':
          sold.rare.value = Math.round( (  sold.rare.value + nft.soldPrice )*100 )/100
          sold.rare.nft = sold.rare.nft + 1
          break;
        case 'epic':
          sold.epic.value = Math.round( (  sold.epic.value + nft.soldPrice )*100 )/100
          sold.epic.nft = sold.epic.nft + 1
          break;
        case 'legendary':
          sold.legendary.value = Math.round( (  sold.legendary.value + nft.soldPrice )*100 )/100
          sold.legendary.nft = sold.legendary.nft + 1
          break;
        case 'exalted':
          sold.exalted.value = Math.round( (  sold.exalted.value + nft.soldPrice )*100 )/100
          sold.exalted.nft = sold.exalted.nft + 1
          break;

        default:
          break;
      }
    }
  })

  return sold
}

