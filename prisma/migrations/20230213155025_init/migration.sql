-- CreateTable
CREATE TABLE `CategoryImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `CategoryImage_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoryToCategoryImage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoryToCategoryImage_AB_unique`(`A`, `B`),
    INDEX `_CategoryToCategoryImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CategoryToCategoryImage` ADD CONSTRAINT `_CategoryToCategoryImage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToCategoryImage` ADD CONSTRAINT `_CategoryToCategoryImage_B_fkey` FOREIGN KEY (`B`) REFERENCES `CategoryImage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
