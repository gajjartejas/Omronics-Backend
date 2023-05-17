-- AlterTable
ALTER TABLE `Category` MODIFY `name` VARCHAR(200) NOT NULL,
    MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `ContactData` MODIFY `name` VARCHAR(200) NOT NULL,
    MODIFY `requirements` VARCHAR(5000) NOT NULL;

-- AlterTable
ALTER TABLE `CoverImage` MODIFY `title` VARCHAR(200) NOT NULL,
    MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `Manufacturer` MODIFY `name` VARCHAR(200) NOT NULL,
    MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `name` VARCHAR(200) NOT NULL,
    MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `ProductResource` MODIFY `title` VARCHAR(200) NULL,
    MODIFY `link` VARCHAR(200) NULL,
    MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `StaticPageData` MODIFY `data` VARCHAR(5000) NOT NULL;
