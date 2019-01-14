<?php

class Helper
{
	private static $initialized = false;
	private static $smarty;

	private static function initialize()
	{
		if(self::$initialized) 
			return;

		self::$smarty = new Smarty();
	}

	public static function loadView($view, $params = [])
	{
		self::initialize();

		if (!empty($params)) {
			foreach($params as $key => $value) {
				self::$smarty->assign($key, $value);
			}
		}
		self::$smarty->display($view);
	}
}

?>