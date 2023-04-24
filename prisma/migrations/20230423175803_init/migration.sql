-- AlterTable
ALTER TABLE `Category` MODIFY `active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Manufacturer` MODIFY `active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Product` MODIFY `active` BOOLEAN NOT NULL DEFAULT true;
