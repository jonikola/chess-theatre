<?php
$path = $_SERVER["DOCUMENT_ROOT"] . "/chess-theatre/";
require($path . "vendor/autoload.php");

class Database
{
	private $_host = "";
	private $_port = 24789;
	private $_username = "";
	private $_password = "";
	public $_client;

	public function __construct()
	{
		$this->_client = $this->connect();
	}

	private function connect()
	{
		$cl = new Everyman\Neo4j\Client($this->_host, $this->_port);
		$cl->getTransport()->setAuth($this->_username, $this->_password);
		return $cl;
	}

	public function query($queryString)
	{
		$query = new Everyman\Neo4j\Cypher\Query($this->_client, $queryString);
		$result = $query->getResultSet();
		return $result;
	}
}

?>