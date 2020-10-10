-- NO 4A Select Query & Insert Query
-- Keva

-- Select Query

-- tampilkan semua course

SELECT * FROM course

-- tampilkan course beserta penulis lengkap dengan content nya, field ditampilkan name course, durasi course, name author, description course, thumbnail course

SELECT
 course.name AS name_course,
 duration AS durasi_course,
 author.name AS name_author,
 description AS description_course,
 thumbnail AS thumbnail_course,
 content.name AS name_content
FROM 
 author INNER JOIN course ON course.id_author = author.id
 INNER JOIN content ON content.id_course = course.id
 
-- tampilan detail content berdasarkan id content

SELECT
 course.name AS name_course,
 duration AS durasi_course,
 author.name AS name_author,
 description AS description_course,
 thumbnail AS thumbnail_course,
 content.name AS name_content
FROM 
 author INNER JOIN course ON course.id_author = author.id
 INNER JOIN content ON content.id_course = course.id
WHERE content.id = 1




-- Insert Query

-- query post tambah author 

INSERT INTO author (`name`) VALUES ('Keva');

-- query post tambah course

INSERT INTO course (`name`,`thumbnail`,`id_author`,`duration`,`description`) VALUES ('PHP Dasar', LOAD_FILE('C:/Users/Keva Damar Galih/Desktop/history.png'), 1, '02:00:00', 'Membahas dasar-dasar pemrograman PHP')
  
-- query post tambah content
  
INSERT INTO content (`name`,`video_link`,`type`,`id_course`) VALUES ('PHP','/public/programming/video.mp4','PROGRAMMING',1) 
  
  
  
