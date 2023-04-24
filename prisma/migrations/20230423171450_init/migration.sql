-- AlterTable
ALTER TABLE `Category` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Manufacturer` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false;
