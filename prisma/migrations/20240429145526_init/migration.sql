-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "spent" REAL NOT NULL DEFAULT 0,
    "sold" REAL NOT NULL DEFAULT 0,
    "balance" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "NFT" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "composedId" TEXT NOT NULL,
    "issuedId" INTEGER NOT NULL,
    "lootDate" DATETIME NOT NULL,
    "ownerName" TEXT,
    "archetypeId" TEXT,
    CONSTRAINT "NFT_ownerName_fkey" FOREIGN KEY ("ownerName") REFERENCES "Player" ("name") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "NFT_archetypeId_fkey" FOREIGN KEY ("archetypeId") REFERENCES "Item" ("archetypeId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "archetypeId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "floorPrice" REAL,
    "maxIssuance" INTEGER NOT NULL,
    "rarityName" TEXT,
    "collectionName" TEXT,
    "optionName" TEXT NOT NULL,
    CONSTRAINT "Item_rarityName_fkey" FOREIGN KEY ("rarityName") REFERENCES "Rarity" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Rarity" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transactionId" TEXT NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "date" DATETIME NOT NULL,
    "fromPlayer" TEXT NOT NULL,
    "toPlayer" TEXT NOT NULL,
    "nftId" TEXT NOT NULL,
    CONSTRAINT "Sale_fromPlayer_fkey" FOREIGN KEY ("fromPlayer") REFERENCES "Player" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_toPlayer_fkey" FOREIGN KEY ("toPlayer") REFERENCES "Player" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_nftId_fkey" FOREIGN KEY ("nftId") REFERENCES "NFT" ("composedId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Drop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "toPlayer" TEXT NOT NULL,
    "nftId" INTEGER NOT NULL,
    CONSTRAINT "Drop_toPlayer_fkey" FOREIGN KEY ("toPlayer") REFERENCES "Player" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Drop_nftId_fkey" FOREIGN KEY ("nftId") REFERENCES "NFT" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transactionId" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "startdate" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "renterName" TEXT NOT NULL,
    CONSTRAINT "Rental_ownerName_fkey" FOREIGN KEY ("ownerName") REFERENCES "Player" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rental_renterName_fkey" FOREIGN KEY ("renterName") REFERENCES "Player" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_NFTToRental" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_NFTToRental_A_fkey" FOREIGN KEY ("A") REFERENCES "NFT" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_NFTToRental_B_fkey" FOREIGN KEY ("B") REFERENCES "Rental" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ItemToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ItemToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Item" ("archetypeId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("name") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoryToItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoryToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("name") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item" ("archetypeId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NFT_composedId_key" ON "NFT"("composedId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_archetypeId_key" ON "Item"("archetypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Rarity_name_key" ON "Rarity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_transactionId_key" ON "Sale"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_transactionId_key" ON "Rental"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "_NFTToRental_AB_unique" ON "_NFTToRental"("A", "B");

-- CreateIndex
CREATE INDEX "_NFTToRental_B_index" ON "_NFTToRental"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToTag_AB_unique" ON "_ItemToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToTag_B_index" ON "_ItemToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToItem_AB_unique" ON "_CategoryToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToItem_B_index" ON "_CategoryToItem"("B");
