-- ----------------------------
-- Table structure for Subjects
-- ----------------------------
DROP TABLE IF EXISTS `Subjects`;
CREATE TABLE `Subjects` (
  `subject_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL UNIQUE
);

-- ----------------------------
-- Table structure for Semesters
-- ----------------------------
DROP TABLE IF EXISTS `Semesters`;
CREATE TABLE `Semesters` (
  `semester_id` INT PRIMARY KEY AUTO_INCREMENT,
  `year` INT NOT NULL,
  `term_number` INT NOT NULL CHECK (term_number BETWEEN 1 AND 4),
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  UNIQUE (`year`, `term_number`)
);

-- ----------------------------
-- Table structure for Classes
-- ----------------------------
DROP TABLE IF EXISTS `Classes`;
CREATE TABLE `Classes` (
  `class_id` INT PRIMARY KEY AUTO_INCREMENT,
  `subject_id` INT NOT NULL,
  `semester_id` INT NOT NULL,
  `class_number` INT NOT NULL CHECK (class_number IN (1, 2)),
  `capacity` INT DEFAULT 20,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  `room_number` VARCHAR(10),
  FOREIGN KEY (`subject_id`) REFERENCES `Subjects`(`subject_id`),
  FOREIGN KEY (`semester_id`) REFERENCES `Semesters`(`semester_id`),
  UNIQUE (`subject_id`, `semester_id`, `class_number`)
);

-- ----------------------------
-- Table structure for Students
-- ----------------------------
DROP TABLE IF EXISTS `Students`;
CREATE TABLE `Students` (
  `student_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `phone` VARCHAR(15),
  `date_of_birth` DATE,
  `address` TEXT
);

-- ----------------------------
-- Table structure for Enrollments
-- ----------------------------
DROP TABLE IF EXISTS `Enrollments`;
CREATE TABLE `Enrollments` (
  `enrollment_id` INT PRIMARY KEY AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `class_id` INT NOT NULL,
  `enrollment_date` DATE DEFAULT CURRENT_DATE,
  `status` ENUM('active', 'dropped', 'completed') DEFAULT 'active',
  FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`),
  FOREIGN KEY (`class_id`) REFERENCES `Classes`(`class_id`),
  UNIQUE (`student_id`, `class_id`)
);

-- ----------------------------
-- Insert default subjects (Math, Science, English)
-- ----------------------------
INSERT INTO `Subjects` (`name`) VALUES 
('Math'),
('Science'),
('English');

-- Example: Insert a semester (2024 Term 1)
-- This is optional but demonstrates how to seed data
-- INSERT INTO `Semesters` (`year`, `term_number`, `start_date`, `end_date`) VALUES 
-- (2024, 1, '2024-01-10', '2024-03-30');