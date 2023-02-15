import { useState } from "react"
import type { PlasmoContentScript, PlasmoGetInlineAnchor } from "plasmo";
import type { Item, ItemLocalStorage, Market, Order, Orders } from "./interfaces/purchase";
import { DataArray } from "@mui/icons-material";
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import SaveIcon from '@mui/icons-material/Save';


import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, Stack } from "@mui/material";


export const config: PlasmoContentScript = {
  matches: ["https://openloot.com/collection/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () => document.querySelector("header .chakra-stack nav ul")

const styleElement = document.createElement("style")


const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: styleElement
})

export const getStyle = () => styleElement

function Menu() {
  const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  const price = urlParams.get('price')
  console.log(price);
}

export default Menu