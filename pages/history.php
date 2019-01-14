<?php

require_once '../classes/Database.php';
require_once '../classes/Match.php';
require_once '../classes/Helper.php';

$match = new Match();
$allMatches = $match->getAllMatches();

$params = ['matches' => $allMatches];
Helper::loadView('../templates/history.tpl', $params);

?>