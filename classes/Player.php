<?php

require_once 'Application.php';

class Player extends Application
{
	public function getAllPlayers()
	{
		$queryString = "MATCH (p:Player)" .
        		"RETURN p";
		$result = $this->db->query($queryString);
		$players = array();
		foreach($result as $row) {
			$players[] = [
				"id" => $row["p"]->getProperty("id"),
				"name" => $row["p"]->getProperty("name"),
				"img" => $row["p"]->getProperty("img")
			];
		}

		return $players;
	}

	public function getPlayers($playerNames)
	{
		$player1 = $this->getPlayer($playerNames[0], null);
		$player2 = $this->getPlayer($playerNames[1], null);

		return [$player1, $player2];
	}

	public function getPlayer($playerName = null, $playerId = null)
	{
		if($playerName != null && $playerId == null) {
			$queryString = "MATCH (p:Player) " .
       				"WHERE p.name =~'.*" . $playerName . ".*' " .
       				"RETURN p";
		} elseif($playerName == null && $playerId != null) {
			$queryString = "MATCH (p:Player { id: " . $playerId . " })" .
        			"RETURN p";
		}

       	$result = $this->db->query($queryString);
       	$player = [];
       	foreach($result as $row) {
       		$player = [
       			"id" => $row["p"]->getProperty("id"),
       			"name" => $row["p"]->getProperty("name"),
       			"img" => $row["p"]->getProperty("img"),
       			"country" => $row["p"]->getProperty("country"),
       			"birthyear" => $row["p"]->getProperty("birthyear"),
       			"title" => $row["p"]->getProperty("title"),
       			"bio" => $row["p"]->getProperty("bio")
       		];
 		}

 		return $player; 
	}

	public function getPlayersFromSameCountry($country)
	{
		$queryString = "MATCH (p:Player { country: '$country' }) " .
        		"RETURN p";
		$result = $this->db->query($queryString);
		$players = [];
		foreach($result as $row) {
			$players[] = [
				"id" => $row["p"]->getProperty("id"),
				"name" => $row["p"]->getProperty("name"),
				"img" => $row["p"]->getProperty("img")
			];
		}

		return $players;
	}
}

?>