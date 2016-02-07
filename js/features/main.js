/**
 *  Entrance of features
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';
import common from './common/main';
import home from './home/main';
import list from './list/main';

export default [list, ...common, home];
