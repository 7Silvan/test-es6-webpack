/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    httpConfig($httpProvider) {
        'ngInject';

        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        $httpProvider.defaults.withCredentials = true;
    }

    execute() {
        this.config(this.httpConfig);
    }
}

export default Configurator;
