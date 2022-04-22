import { combineReducers } from 'redux';

// do not edit
import posts from './posts';
import auth from './auth';
import common from "./common";

import accounts from "./accounts";


export const reducers = combineReducers({ common, posts, auth, accounts });
