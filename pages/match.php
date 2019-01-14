<?php

require_once '../classes/Database.php';
require_once '../classes/Player.php';
require_once '../classes/Match.php';
require_once '../classes/Helper.php';

$match = new Match();
$player = new Player();

$matchId = $_GET['id'];
$requestedMatch = $match->getMatch($matchId); 
$playerNames = explode(" ", $requestedMatch['title']);
array_splice($playerNames, 1, 1);
$moves = $match->getMoves($matchId);
$otherMatches = $match->getOtherMatches($playerNames, $matchId);
$players = $player->getPlayers($playerNames);

$params = [
	'match' => $requestedMatch,
	'moves' => $moves,
	'otherMatches' => $otherMatches,
	'players' => $players
];
Helper::loadView('../templates/match.tpl', $params);

?>

