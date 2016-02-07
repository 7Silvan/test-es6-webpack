/**
 *  Entrance of common service
 *
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';
import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
