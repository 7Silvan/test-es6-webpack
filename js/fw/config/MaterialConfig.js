/**
 *
 *  MaterialConfig set angular-material needed configurations
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

    execute() {
        this.config(function($mdThemingProvider) {
            'ngInject';

            $mdThemingProvider
                .theme('default')
                .primaryPalette('indigo')
                .accentPalette('green')
                .warnPalette('red');
        });
    }
}

export default Configurator;
