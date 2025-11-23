/*
  Warnings:

  - You are about to alter the column `price` on the `Services` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Services" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
