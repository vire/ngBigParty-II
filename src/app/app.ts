import '../../node_modules/angular-material/angular-material.scss'
import './app.scss';

import * as angular from 'angular';
// import * as ngAria from 'angular-aria';
// import * as ngMessages from 'angular-messages';
import * as ngSanitize from 'angular-sanitize';
import * as ngMaterial from 'angular-material';
import '../assets/svg-assets.js';
import { provide } from 'ng-metadata/core';


import { AppComponent } from './app.component.ts';
import { Configure } from './app.config';

const ngMaterialSvg = 'material.svgAssetsCache';
export const AppModule = angular.module( 'app', [
    ngSanitize,
    // ngAria,
    ngMaterial,
    ngMaterialSvg
  ] )
  .config( Configure )
  .directive( ...provide( AppComponent ) );
