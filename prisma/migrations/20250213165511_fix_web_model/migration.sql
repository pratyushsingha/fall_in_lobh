/*
  Warnings:

  - You are about to drop the column `gif_url` on the `website` table. All the data in the column will be lost.
  - You are about to drop the column `noBtnPhrases` on the `website` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `website` table. All the data in the column will be lost.
  - You are about to drop the column `yesBtnClickTxt` on the `website` table. All the data in the column will be lost.
  - You are about to drop the column `yesBtnTxt` on the `website` table. All the data in the column will be lost.
  - Added the required column `celebrationMediaUrl` to the `website` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celebrationMessage` to the `website` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "website" DROP COLUMN "gif_url",
DROP COLUMN "noBtnPhrases",
DROP COLUMN "subtitle",
DROP COLUMN "yesBtnClickTxt",
DROP COLUMN "yesBtnTxt",
ADD COLUMN     "celebrationMediaUrl" TEXT NOT NULL,
ADD COLUMN     "celebrationMessage" TEXT NOT NULL,
ADD COLUMN     "messages" TEXT[],
ADD COLUMN     "moods" TEXT[],
ADD COLUMN     "noButtonMessages" TEXT[];
