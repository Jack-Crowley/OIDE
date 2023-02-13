CREATE TABLE file (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `language` VARCHAR(45) NOT NULL,
  `contents` VARCHAR(1000) NULL,
  `repoID` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `f_file_repo_id_idx` (`repoID` ASC) VISIBLE,
  CONSTRAINT `f_file_repo_id`
    FOREIGN KEY (`repoID`)
    REFERENCES `OIDE`.`repo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);