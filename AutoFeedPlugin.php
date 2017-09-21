<?php
if (!defined('GNUSOCIAL'))
{
  exit(1);
}
class AutoFeedPlugin extends Plugin
{
  function onQvitterEndShowScripts(Action $action)
    {
      $action->script(Plugin::staticPath('AutoFeed', '').'js/autoLoad.js');
    }
  function onPluginVersion(array &$versions)
    {
      $versions[] = array('name' => 'AutoFeed',
                          'author' => 'HeathCliff',
                          'rawdescription' => _m('A plugin to automatically load new notices on the timeline.'));
      return true;
    }
}
