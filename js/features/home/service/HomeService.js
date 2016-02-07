/**
 *  Defines the HomeService
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';

class HomeService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getStates() {
        return this.$http.get(this.utils.getApi('/states'));
    }

}

export default HomeService;
