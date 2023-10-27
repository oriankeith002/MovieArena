/*
  Warnings:

  - You are about to alter the column `uploadedAt` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Comment` ADD COLUMN `commentedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Movie` MODIFY `uploadedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
