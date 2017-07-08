-- +------------+----------+------+-----+-------------------+-----------------------------+
-- | Field      | Type     | Null | Key | Default           | Extra                       |
-- +------------+----------+------+-----+-------------------+-----------------------------+
-- | id         | int(11)  | NO   | PRI | NULL              | auto_increment              |
-- | user_id    | int(11)  | NO   |     | NULL              |                             |
-- | company_id | int(11)  | NO   |     | NULL              |                             |
-- | point      | int(11)  | NO   |     | NULL              |                             |
-- | created_at | datetime | NO   |     | CURRENT_TIMESTAMP |                             |
-- | updated_at | datetime | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
-- | deleted_at | datetime | YES  |     | NULL              |                             |
-- +------------+----------+------+-----+-------------------+-----------------------------+

INSERT INTO user_point (user_id, company_id, point) VALUES(1, 1, 2);
INSERT INTO user_point (user_id, company_id, point) VALUES(1, 1, 3);
INSERT INTO user_point (user_id, company_id, point) VALUES(2, 1, 1);
INSERT INTO user_point (user_id, company_id, point) VALUES(2, 3, 5);
INSERT INTO user_point (user_id, company_id, point) VALUES(3, 2, 3);
INSERT INTO user_point (user_id, company_id, point) VALUES(3, 1, 1);
INSERT INTO user_point (user_id, company_id, point) VALUES(3, 1, 1);
INSERT INTO user_point (user_id, company_id, point) VALUES(4, 2, 2);
INSERT INTO user_point (user_id, company_id, point) VALUES(4, 1, 5);
INSERT INTO user_point (user_id, company_id, point) VALUES(4, 1, 2);
INSERT INTO user_point (user_id, company_id, point) VALUES(5, 1, 5);
INSERT INTO user_point (user_id, company_id, point) VALUES(5, 2, 6);
INSERT INTO user_point (user_id, company_id, point) VALUES(5, 3, 2);
INSERT INTO user_point (user_id, company_id, point) VALUES(6, 1, 4);
INSERT INTO user_point (user_id, company_id, point) VALUES(6, 1, 6);
INSERT INTO user_point (user_id, company_id, point) VALUES(7, 1, 4);
INSERT INTO user_point (user_id, company_id, point) VALUES(7, 1, 7);
INSERT INTO user_point (user_id, company_id, point) VALUES(7, 3, 4);
INSERT INTO user_point (user_id, company_id, point) VALUES(7, 4, 6);


SELECT user_point.user_id, users.name, sum(user_point.point) as point FROM user_point WHERE user_point.company_id=1 GROUP BY user_point.user_id INNER JOIN users ON user_point.user_id = users.id;


