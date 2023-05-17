/*
  Warnings:

  - Added the required column `image` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_IngredientToItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToItem_AB_unique" ON "_IngredientToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToItem_B_index" ON "_IngredientToItem"("B");

-- AddForeignKey
ALTER TABLE "_IngredientToItem" ADD CONSTRAINT "_IngredientToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToItem" ADD CONSTRAINT "_IngredientToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
