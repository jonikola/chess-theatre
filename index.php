<?php
require_once 'classes/Database.php';
require_once 'classes/Player.php';
require_once 'classes/Match.php';
require_once 'classes/Helper.php';

$match = new Match();
$player = new Player();

$randomMatch = $match->randomMatch();
$players = $player->getAllPlayers();

$params = ["match" => $randomMatch, "players" => $players];
Helper::loadView('index.tpl', $params);

?>
