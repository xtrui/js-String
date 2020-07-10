

CREATE TABLE `score` (
  `id` int(11) NOT NULL ,
  `student_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `socre` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `subject_id` (`subject_id`),
  CONSTRAINT `score_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, 
  CONSTRAINT `score_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ;




LOCK TABLES `score` WRITE;
INSERT INTO `score` VALUES (1,1,1001,80),(2,2,1002,60),(3,1,1001,70),(4,2,1002,60.5);
UNLOCK TABLES;

CREATE TABLE `student` (
  `id` int(11) NOT NULL ,
  `name` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(6) NOT NULL,
  PRIMARY KEY (`id`)
)  ;



LOCK TABLES `student` WRITE;
INSERT INTO `student` VALUES (1,'zhangsan',18,'male'),(2,'lisi',20,'female');
UNLOCK TABLES;



DROP TABLE IF EXISTS `subject`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `subject` (
  `id` int(11) NOT NULL ,
  `subject` varchar(30) NOT NULL,
  `teacher` varchar(20) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;




LOCK TABLES `subject` WRITE;
INSERT INTO `subject` VALUES (1001,'Chinese','Mr.Wang','the exam is easy'),(1002,'math','Miss Liu','the exam is difficult');
UNLOCK TABLES;

