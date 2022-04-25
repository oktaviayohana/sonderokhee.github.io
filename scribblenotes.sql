SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `scribblenotes`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  user_id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(16) NOT NULL,
  session_id VARCHAR(255),
  PRIMARY KEY (user_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS notes (
  note_id int NOT NULL AUTO_INCREMENT,
  csv_file VARCHAR(255),
  PRIMARY KEY (note_id)
)

COMMIT;
