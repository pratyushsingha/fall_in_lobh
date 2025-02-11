/*
  Warnings:

  - A unique constraint covering the columns `[webUrl]` on the table `website` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "website_webUrl_key" ON "website"("webUrl");
