/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import ListController from './controller/ListController';
import ListService from './service/ListService';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    execute() {
        this.controller('ListController', ListController);
        this.service('ListService', ListService);
    }
}

export default Feature;
