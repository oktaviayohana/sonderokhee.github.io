-- users
CREATE TABLE `scribblenotes`.`Users` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userID`)