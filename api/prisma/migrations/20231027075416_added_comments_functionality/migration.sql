/*
  Warnings:

  - You are about to alter the column `uploadedAt` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Movie` MODIFY `uploadedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` LONGTEXT NOT NULL,
    `commentedOnMovieId` INTEGER NOT NULL,
    `commentorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_commentedOnMovieId_fkey` FOREIGN KEY (`commentedOnMovieId`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_commentorId_fkey` FOREIGN KEY (`commentorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
