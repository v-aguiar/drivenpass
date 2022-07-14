/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SafeNotes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Sessions` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `WifiNetworks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "SafeNotes" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Sessions" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "WifiNetworks" DROP COLUMN "createdAt";
