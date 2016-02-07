/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';
import HomeService from './service/HomeService';

class Feature extends FeatureBase {

    constructor() {
        super('home');
        this.routes = Routes;
    }

    execute() {
        this.controller('HomeController', HomeController);
        this.service('HomeService', HomeService);
    }
}

export default Feature;
