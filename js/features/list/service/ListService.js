/**
 *  Defines the ListService
 *
 *  @author  gural
 *  @date    Feb 7, 2016
 *
 */
'use strict';
class ListService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getDemoList() {
        return this.$http.get(this.utils.getApi('/demolist'));
    }

}

export default ListService;
