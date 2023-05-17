-- CreateTable
CREATE TABLE `ManufacturerImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `ManufacturerImage_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ManufacturerToManufacturerImage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ManufacturerToManufacturerImage_AB_unique`(`A`, `B`),
    INDEX `_ManufacturerToManufacturerImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ManufacturerToManufacturerImage` ADD CONSTRAINT `_ManufacturerToManufacturerImage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Manufacturer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ManufacturerToManufacturerImage` ADD CONSTRAINT `_ManufacturerToManufacturerImage_B_fkey` FOREIGN KEY (`B`) REFERENCES `ManufacturerImage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
