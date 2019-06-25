create database happiness_db;		
use happiness_db;

SELECT * from `2015`;

SELECT `Country`,`Region`, `Happiness Score` FROM `2015` ;

SELECT `Region`, (AVG(`Happiness Score`)) AS 'Average Score'
FROM `2015`
GROUP BY `Region`;

SELECT `Region`, (AVG(`Happiness Score`)) AS 'Average Score'
FROM `2016`
GROUP BY `Region`;

SELECT `Region`, (AVG(`Happiness Score`)) AS 'Average Score'
FROM `2017`
GROUP BY `Region`;

SELECT `Region`, (AVG(`Happiness Score`)) AS 'Average Score'
FROM `2018`
GROUP BY `Region`;

SELECT
   `2015`.`Region`, `2015`.`Happiness Score`, `2016`.`Region`, `2016`.`Happiness Score`
FROM
   `2015`
       LEFT JOIN `2016` ON `2015`.`Region` = `2016`.`Region`;