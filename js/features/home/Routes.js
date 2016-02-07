/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';

import tpl from './partials/home.html';

export default [
    {
        id: 'home',
        isDefault: true,
        when: '/home',
        controller: 'HomeController',
        controllerAs: 'home',
        template: tpl
    }
];
