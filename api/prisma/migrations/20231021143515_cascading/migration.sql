/*
  Warnings:

  - You are about to alter the column `uploadedAt` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `Movie` DROP FOREIGN KEY `Movie_uploaderId_fkey`;

-- AlterTable
ALTER TABLE `Movie` MODIFY `uploadedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_uploaderId_fkey` FOREIGN KEY (`uploaderId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
