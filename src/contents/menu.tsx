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
  matches: ["https://openloot.com/*"]
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
  const [loading, setLoading] = useState(false);

  return (
    <CacheProvider value={styleCache}>
      <Stack direction="row" spacing={2}>
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          href="/load-data"
        >
          Load my data
        </LoadingButton>
        <Button variant="contained" color="warning" href="/dashboard">
          Dashboard
        </Button>
        <Button variant="contained" color="info" href="/my-stats">
          Data table
        </Button>
      </Stack>

    </CacheProvider>
  )
}

export default Menu