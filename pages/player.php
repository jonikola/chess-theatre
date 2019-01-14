<?php

require_once '../classes/Database.php';
require_once '../classes/Player.php';
require_once '../classes/Match.php';
require_once '../classes/Helper.php';

$pl = new Player();
$match = new Match();

$playerId = $_GET['id'];
$player = $pl->getPlayer(null, $playerId);
$matches = $match->getPlayersMatches($playerId);
$playersFromSameCountry = $pl->getPlayersFromSameCountry($player['country']);

$params = ['player' => $player, 'matches' => $matches, 'playersFromSameCountry' => $playersFromSameCountry];
Helper::loadView('../templates/player.tpl', $params);

?>

