import { time } from "console";
import type { Key } from "react";

export interface Orders {
    items: Order[];
    pageSize: number;
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

 export interface Order {
    id: Key;
    price: number;
    item : Item;
    status: string;
    createdBy: string;
    createdAt: string;
    completedBy: string;
    category:string;
    type:string;
} 

export interface Market {
    lowestPrice: number;
    itemMetadata : Item;
    openOrdersCount: number;
}

 export interface Item {
    id: Key;
    userId: string;
    status: string;
    collection: string;
    optionName: string;
    archetypeId: string;
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
    rarity: string;
    issuedId: number;
    maxIssuance: number;
    game : {}
    sellableAt : number;
} 

export interface ItemLocalStorage {
    id: Key;
    userId: string;
    status: string;
    collection: string;
    optionName: string;
    archetypeId: string;
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
    rarity: string;
    issuedId: number;
    maxIssuance: number;
    category?: "Utility" | "Cosmetic";
    type?: "Weapons" |"Armor" |"Title" |"Space" |"Mystery box";
    obtentionMethod? : "Looted" | "Bought" | "Unknown";
    ownershipStatus? : "Owned" | "Sold"
    purchasedPrice?: number;
    purchasedFrom? : string;
    purchasedDate? : string;
    soldPrice?: number;
    soldTo? : string;
    soldDate? : string;
    marketFloorPrice? : number;
    marketOpenOrdersCount? : number;
    floorProfitLoss? : number;
    floorProfitLossPercent? : number;
    soldProfitLoss? : number;
    soldProfitLossPercent? : number;
}