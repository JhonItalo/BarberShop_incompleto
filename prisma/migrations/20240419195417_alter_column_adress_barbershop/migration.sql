/*
  Warnings:

  - You are about to drop the column `adresss` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `adress` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "adresss",
ADD COLUMN     "adress" TEXT NOT NULL;
