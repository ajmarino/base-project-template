<?php 

namespace App\Http;

/**
 * Using the SweetAlert js library, this overrides the default alert() with a nicer version
 *
 * @link http://t4t5.github.io/sweetalert/ SweetAlert Library
 *
 * @example
 * 	 flash('title', 'message') - same as flash()->info()
 * 	 flash()->info('title', 'message')
 * 	 flash()->success('title', 'message')
 * 	 flash()->error('title', 'message')
 * 	 flash()->overlay('title', 'message', [info !default, success, error])
 *
 * 
 */
class Flash
{
	
	/**
	 * Stores flash settings to sessions
	 * @param  {string} $title               - title of overlay
	 * @param  {string} $message             - message to display
	 * @param  {string} $level               - type of message (success, error, overlay, aside)
	 * @param  {string} $key [flash_message] - default autocloses, `flash_notice_overlay` has a button that dismisses
	 */
	public function create($title, $message, $level, $key = 'flash_message')
	{
		session()->flash($key, [
			'title'   => $title,
			'message' => $message,
			'level'   => $level,
		]);
	}



	/**
	 * Creates an info flash notice
	 * @param  {string} $title   - title for overlay
	 * @param  {string} $message - message
	 */
	public function info($title, $message)
	{
		return $this->create($title, $message, 'info');
	}



	/**
	 * Creates a success flash notice
	 * @param  {string} $title   - title for overlay
	 * @param  {string} $message - message
	 */
	public function success($title, $message)
	{
		return $this->create($title, $message, 'success');
	}



	/**
	 * Creates an error flash notice
	 * @param  {string} $title   - title for overlay
	 * @param  {string} $message - message
	 */
	public function error($title, $message)
	{
		return $this->create($title, $message, 'error');
	}



	/**
	 * Creates a flash notice that needs to be dismissed via a button
	 * @param  {string} $title        - title for overlay
	 * @param  {string} $message      - message
	 * @param  {string} $level [info] - type of overlay
	 */
	public function overlay($title, $message, $level = 'info')
	{
		return $this->create($title, $message, $level, 'flash_message_overlay');
	}
}