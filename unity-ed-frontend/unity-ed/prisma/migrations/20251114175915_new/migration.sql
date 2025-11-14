-- CreateTable
CREATE TABLE `playerprofile` (
    `player_id` CHAR(36) NOT NULL,
    `alias` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playerprogress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` CHAR(36) NULL,
    `act_no` INTEGER NULL,
    `scene_code` VARCHAR(50) NULL,
    `checkpoint` VARCHAR(100) NULL,

    INDEX `player_id`(`player_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playerscorespanel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` CHAR(36) NULL,
    `trait` ENUM('Rapport', 'Reputation', 'Stress') NULL,
    `score` INTEGER NULL,
    `last_updated` DATETIME(0) NULL,

    INDEX `player_id`(`player_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `runeventslocal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `run_id` CHAR(36) NULL,
    `seq` INTEGER NULL,
    `scene_code` VARCHAR(50) NULL,
    `node_id` INTEGER NULL,
    `option_id` INTEGER NULL,
    `decided_at` DATETIME(0) NULL,
    `latency_ms` INTEGER NULL,

    INDEX `run_id`(`run_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `runlocal` (
    `run_id` CHAR(36) NOT NULL,
    `player_id` CHAR(36) NULL,
    `level_or_act` INTEGER NULL,
    `ended_at` DATETIME(0) NULL,
    `total_score` INTEGER NULL,
    `upload_status` ENUM('pending', 'uploaded') NOT NULL DEFAULT 'pending',
    `last_error` VARCHAR(200) NULL,
    `idempotency_key` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `player_id`(`player_id`),
    PRIMARY KEY (`run_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `runtraitscoreslocal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `run_id` CHAR(36) NULL,
    `trait` ENUM('Rapport', 'Reputation', 'Stress') NULL,
    `score` INTEGER NULL,

    INDEX `run_id`(`run_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uploadqueue` (
    `queue_id` INTEGER NOT NULL AUTO_INCREMENT,
    `run_id` CHAR(36) NULL,
    `payload_json` JSON NULL,
    `status` ENUM('queued', 'uploaded', 'failed') NULL DEFAULT 'queued',
    `retry_count` INTEGER NULL DEFAULT 0,
    `last_error` VARCHAR(200) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `run_id`(`run_id`),
    PRIMARY KEY (`queue_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('ADMIN', 'TEACHER') NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `type` VARCHAR(255) NULL,
    `provider` VARCHAR(255) NULL,
    `providerAccountId` VARCHAR(255) NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(255) NULL,
    `scope` VARCHAR(255) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(255) NULL,

    INDEX `userId`(`userId`),
    UNIQUE INDEX `unique_provider`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sessionToken` VARCHAR(255) NULL,
    `userId` INTEGER NULL,
    `expires` DATETIME(0) NULL,

    UNIQUE INDEX `sessionToken`(`sessionToken`),
    INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NULL,
    `contact_number` VARCHAR(20) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `school_id` INTEGER NOT NULL,
    `class_name` VARCHAR(50) NOT NULL,
    `teacher_name` VARCHAR(100) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `school_id`(`school_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alias` VARCHAR(100) NOT NULL,
    `player_id` CHAR(36) NULL,
    `class_id` INTEGER NULL,
    `school_id` INTEGER NULL,
    `teacher_id` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `classId`(`class_id`),
    INDEX `player_id`(`player_id`),
    INDEX `schoolId`(`school_id`),
    INDEX `teacherId`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `playerprogress` ADD CONSTRAINT `playerprogress_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `playerprofile`(`player_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playerscorespanel` ADD CONSTRAINT `playerscorespanel_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `playerprofile`(`player_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `runeventslocal` ADD CONSTRAINT `runeventslocal_ibfk_1` FOREIGN KEY (`run_id`) REFERENCES `runlocal`(`run_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `runlocal` ADD CONSTRAINT `runlocal_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `playerprofile`(`player_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `runtraitscoreslocal` ADD CONSTRAINT `runtraitscoreslocal_ibfk_1` FOREIGN KEY (`run_id`) REFERENCES `runlocal`(`run_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploadqueue` ADD CONSTRAINT `uploadqueue_ibfk_1` FOREIGN KEY (`run_id`) REFERENCES `runlocal`(`run_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes` ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`school_id`) REFERENCES `schools`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `playerprofile`(`player_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_3` FOREIGN KEY (`school_id`) REFERENCES `schools`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_4` FOREIGN KEY (`teacher_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
