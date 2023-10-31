<?php

function vite_dev_script()
{
  if (
    !defined('VITE_ENV') ||
    !defined('VITE_DEV_SERVER') ||
    constant('VITE_ENV') !== 'development'
  ) {
    return;
  }

  $entry_file = constant('VITE_DEV_SERVER') . 'vite.entry.js';

  echo '<script type="module" src="' . esc_attr($entry_file) . '"></script>';
}

add_action('wp_head', 'vite_dev_script');
