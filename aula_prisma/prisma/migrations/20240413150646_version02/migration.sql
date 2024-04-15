/*
  Warnings:

  - Added the required column `postCategoryId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `postCategoryId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_postCategoryId_fkey` FOREIGN KEY (`postCategoryId`) REFERENCES `Category`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
