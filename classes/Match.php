<?php

require_once 'Application.php';

class Match extends Application
{
	private function getMatchesCount()
	{	$queryString = "MATCH (m:Match) " .
				"RETURN m";

		return count($this->db->query($queryString));
	}

	public function getMatch($matchId)
	{
		$queryString = "MATCH (m:Match { id: " . $matchId . " })" .
        		"RETURN m";
        $match = $this->db->query($queryString);
        foreach($match as $row) {
    		$title = $row["m"]->getProperty("title");
    		$winner = $row["m"]->getProperty("winner");
    		$year = $row["m"]->getProperty("year");
		}

		return array("title" => $title, "winner" => $winner, "year" => $year);
	}

	public function getAllMatches()
	{
		$queryString = "MATCH (m:Match) " .
        		"RETURN m " . 
        		"ORDER BY m.year";
		$result = $this->db->query($queryString);
		$matches = [];
		foreach($result as $row) {
			$matches[] = [
				"id" => $row["m"]->getProperty("id"),
				"title" => $row["m"]->getProperty("title"),
				"year" => $row["m"]->getProperty("year")
			];
		}

		return $matches;
	}

	public function randomMatch()
	{
		$matchId = rand(1, $this->getMatchesCount());
		$queryString = "MATCH (m:Match { id: " . $matchId . " })" .
        		"RETURN m";
        $match = $this->db->query($queryString);
        foreach($match as $m) {
		    $title = $m["m"]->getProperty("title");
		    $winner = $m["m"]->getProperty("winner");
		    $year = $m["m"]->getProperty("year");
		}

		return array("matchId" => $matchId, "title" => $title, "winner" => $winner, "year" => $year);
	}

	public function getMoves($matchId)
	{
		$queryString = "MATCH (m:Move { m_id: " . $matchId . " }) " .
        		"RETURN m " . 
        		"ORDER BY m.move";
        $result = $this->db->query($queryString);
        $moves = [];
        foreach($result as $row) {
        	$tmp = substr($row["m"]->getProperty("move"), 0, 1);
    		if($tmp == "0") {
        		$moves[] = substr($row["m"]->getProperty("move"), 1);
    		}
    		else {
        		$moves[] = $row["m"]->getProperty("move");
    		}
        }

        return implode(" ", $moves);
	}

	public function getOtherMatches($players, $matchId)
	{
		$queryString = "MATCH (p1:Player)-[:PLAYED]->(m:Match)<-[:PLAYED]-(p2:Player) " .
        		"WHERE p1.name =~'.*" . $players[0] . ".*' " .
         		"AND p2.name =~'.*" . $players[1] . ".*' " .
         		"RETURN m";
        $result = $this->db->query($queryString);
        $otherMatches = [];
        foreach($result as $row) {
	    	if($row["m"]->getProperty("id") != $matchId) {
	    		$otherMatches[] = [
	    			"matchId" => $row["m"]->getProperty("id"),
	    			"title" => $row["m"]->getProperty("title"),
	    			"year" => $row["m"]->getProperty("year")
	    		];
     		}
		}

		return $otherMatches;
	}

	public function getPlayersMatches($playerId)
	{
		$queryString = "MATCH (:Player { id: " . $playerId . "})-" . 
        		"[:PLAYED]->(m)" . 
        		"RETURN m";
		$result = $this->db->query($queryString);
		$matches = [];

		foreach($result as $row) {
			$matches[] = [
				"id" => $row["m"]->getProperty("id"),
				"title" => $row["m"]->getProperty("title"),
				"year" => $row["m"]->getProperty("year")
			];
		}

		return $matches;
	} 
}

?>