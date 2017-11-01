import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { PlatformUtil,DialogUtil,HelperUtil } from "../utils";
// Services
import { CacheService,UserService } from './';
import * as request from 'request';
import * as algoliasearch from 'algoliasearch';

@Injectable()
export class SearchService {
    // d83f7f08f6ba149758736942be5d063d
    algolia = algoliasearch("XGEVJWSCYP", "013e7ff8361fd5806238412d8c1f2bb8", {protocol: 'https:'});

    constructor(
        public afDB: AngularFireDatabase,
        public dialogUtil: DialogUtil,
        public platformUtil: PlatformUtil,
        public userService: UserService,
        public helperUtil: HelperUtil,
        public cacheService: CacheService,
    ){

    }

    doSearchQuery(query){
        let uid = this.cacheService.user_uid ? this.cacheService.user_uid : this.cacheService.device_uuid;
        return this.afDB.list(`_search/queries/${uid}`).push({query:query});
    }

    getSearchResults(queryUID){
        let uid = this.cacheService.user_uid ? this.cacheService.user_uid : this.cacheService.device_uuid;
        return this.afDB.object(`_search/results/${uid}/${queryUID}`);
    }

    searchQuery(query){
        return new Observable(observer=>{
            let appIndex = this.algolia.initIndex('applications');
            let userIndex = this.algolia.initIndex('users');
            appIndex.setSettings({
                attributesToIndex: ['title','short_description']
            });
            userIndex.setSettings({
                attributesToIndex: ['name']
            });
            appIndex.search(query).then(res=>{
                console.log('Apps');
                console.log(res);
                observer.next({id: 'apps', data: res});
            });
            userIndex.search(query).then(res=>{
                console.log('Users');
                console.log(res);
                observer.next({id: 'users', data: res});
            });
        });

    }

}