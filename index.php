<?php

define('BASE', dirname(__FILE__) . '/');

global $nocache;
$nocache = false;

function partial($file, $data = array()) {
    require BASE . '/views/partials/' . $file . '.html';
}

/**
 *
 * UTILS
 *
 *
 */
function strToDashed($string) {
	return strtolower(preg_replace(array('/([A-Z]+)([A-Z][a-z])/', '/([a-z\d])([A-Z])/'), array('\\1-\\2', '\\1-\\2'), $string));
}
function getSkinClasses($skin, $dashed) {
	return ($skin == null ? '' : ' skin-' . $dashed . '-' . $skin);
}

/**
 *
 *
 * Output module markup.
 *
 *
 */
function module($name, $template = null, $skin = null, $attr = array()) {
    $flat = strtolower($name);
    $dashed = strToDashed($name);
    $template = $template == null ? '' : '-' . strtolower($template);
    $skin = getSkinClasses($skin, $dashed);
    $attributes = ' ';
    $additionalClasses = '';
    foreach ($attr as $key => $value) {
        if ($key === 'class' && $value !== '') {
            $additionalClasses .= ' ' . $value;
        }
        else {
            $attributes .= $key . '="' . $value . '" ';
        }
    }
    echo "<div class=\"mod mod-" . $dashed . $skin . $additionalClasses . "\"" . chop($attributes) . ">" . "\n";
    require dirname(__FILE__) . '/modules/' . $name . '/' . $flat . $template . '.html';
    echo "\n</div>";
}

/**
 *
 *
 * output module raw markup.
 *
 */
function moduleRaw($name, $template = null, $attr = array()) {
	$flat = strtolower($name);
	$template = $template == null ? '' : '-' . strtolower($template);
	$attributes = ' ';
	$additionalClasses = '';
	foreach ($attr as $key => $value) {
		if ($key === 'class' && $value !== '') {
			$additionalClasses .= ' ' . $value;
		}
		else {
			$attributes .= $key . '="' . $value . '" ';
		}
	}
	require dirname(__FILE__) . '/modules/' . $name . '/' . $flat . $template . '.html';
	echo "\n";
}

$url = str_replace('?' . $_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']);
$url = preg_replace('/\.[^.\s]{2,4}$/', '', $url);	// remove file extension
$route = explode('/', $url);
$action = end($route);
if ($action == "") { $action = 'index'; }
$view = dirname(__FILE__) . '/views/' . $action . '.html';

if (is_file($view)) {
    require $view;
} else {
    header('HTTP/1.0 404 Not Found');
    exit();
}