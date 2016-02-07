/**
 *  ServiceBase class
 *
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';
class ServiceBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.factory = app.factory;
        this.service = app.service;
    }

    execute() {
    }
}

export default ServiceBase;
