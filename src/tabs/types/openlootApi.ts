import { Interface } from "readline";

export type OpenLootNft = {
    metadata: OpenLootNftMetadata;
    name: string;
    archetypeId: string;
    collection: string;
    description: string;
}

type OpenLootNftMetadata = {
    archetypeId: string;
    collection: string;
    description: string;
    imageUrl: string;
    name: string;
    optionNames: string[];
    rarity: string;
    nftTags: string[];
    tags: string[];
    maxIssuance: number;
}

type OpenLootNftIngame = {
    isOwner: boolean;
    isRenter: boolean;
    issueId: number;
    metadata: OpenLootNftMetadata;
}



type OpenLootRentals = {
    content: OpenLootNft[]
    discount: number
    game: OpenLootGame
    headlineItem: {
        name: string
        metadata: OpenLootNftMetadata
        issueId: number
    }
    id: number
    pricesConfig: OpenlootPriceConfig[]
}

type OpenLootGame = {
    name: string
    description: string
}

type OpenlootPriceConfig = {
    durationInSeconds: number
    price: number
}
type OpenLootApiResponse = {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}
export interface OpenLootRentalResponse extends OpenLootApiResponse {
    items: OpenLootRentals[]
}

export interface OpenLootIngameResponse extends OpenLootApiResponse {
    items: OpenLootNft[]
}

export interface OpenLootMarketplaceResponse {
    items: OpenLootNft[]
}