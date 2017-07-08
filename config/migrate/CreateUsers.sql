-- +------------+-------------+------+-----+-------------------+-----------------------------+
-- | Field      | Type        | Null | Key | Default           | Extra                       |
-- +------------+-------------+------+-----+-------------------+-----------------------------+
-- | id         | int(11)     | NO   | PRI | NULL              | auto_increment              |
-- | name       | varchar(50) | NO   |     | NULL              |                             |
-- | mail       | varchar(50) | YES  |     | NULL              |                             |
-- | password   | varchar(20) | YES  |     | NULL              |                             |
-- | token      | varchar(50) | YES  |     | NULL              |                             |
-- | device     | varchar(20) | YES  |     | NULL              |                             |
-- | created_at | datetime    | NO   |     | CURRENT_TIMESTAMP |                             |
-- | updated_at | datetime    | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
-- | deleted_at | datetime    | YES  |     | NULL              |                             |
-- +------------+-------------+------+-----+-------------------+-----------------------------+

INSERT INTO users (name, mail, password, token, device) VALUES('鈴木太郎', 'hoge@a-tm.jp', '4939291', '9mfas08i34kfd9fs', null);
INSERT INTO users (name, mail, password, token, device) VALUES('佐藤健太郎', 'sato@yahoo.jp', '412341', 'msd783ffsaerwqrw', null);
INSERT INTO users (name, mail, password, token, device) VALUES('横山秀太', 'rewer1@gmail.jp', '094127', '8572234523jkdf44', null);
INSERT INTO users (name, mail, password, token, device) VALUES('鳥海英夫', 'torikai@hoge.jp', 'p12314k', 'vnsdm432fiouwev', null);
INSERT INTO users (name, mail, password, token, device) VALUES('田村あや', 'howtoelixir@h.jp', 'rwelrm', 'mvfdastew321312', null);
INSERT INTO users (name, mail, password, token, device) VALUES('中村祐也', 'yuya@email.jp', '4233242', 'jeroiuewioterwti', null);
INSERT INTO users (name, mail, password, token, device) VALUES('近藤遥', 'haruka.k-121@ex.net', 'jkh3454', 'qrwkqwerhjqw', null);