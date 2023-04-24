-- AlterTable
ALTER TABLE `Category` ADD COLUMN `featured` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Manufacturer` ADD COLUMN `featured` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `featured` BOOLEAN NOT NULL DEFAULT false;
