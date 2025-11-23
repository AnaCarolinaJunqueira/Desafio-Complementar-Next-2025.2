/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Services` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Services_title_key" ON "Services"("title");
