CREATE TABLE repo (
  `id` INT NOT NULL AUTO_INCREMENT,
  `repoName` VARCHAR(45) NOT NULL,
  `color` VARCHAR(10) NOT NULL,
  `accountID` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `f_repo_account_id_idx` (`accountID` ASC) VISIBLE,
  CONSTRAINT `f_repo_account_id`
    FOREIGN KEY (`accountID`)
    REFERENCES `OIDE`.`account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
