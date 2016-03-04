import { Component, OnInit, Inject } from 'ng-metadata/core';

@Component( {
  selector: `app`,
  template: require(`./app.component.html`)
} )
export class AppComponent implements OnInit {

  selected = null;
  users = [];
  data: any;

  constructor(
    @Inject( '$mdSidenav' ) private $mdSidenav: ng.material.ISidenavService,
    @Inject( '$mdBottomSheet' ) private $mdBottomSheet: ng.material.IBottomSheetService,
    @Inject( '$log' ) private $log: ng.ILogService,
    @Inject( '$scope' ) private $scope: ng.IScope,
    @Inject( '$location' ) private $location: ng.ILocationService,
    @Inject( '$anchorScroll' ) private $anchorScroll: ng.IAnchorScrollService,
    @Inject( '$http' ) private $http: ng.IHttpService
  ) {}

  ngOnInit() {

    // Load all data
    this.$http.get( '/ngBigParty-II/assets/data.json' ).then( ( response )=>this.data = response.data );

  }

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleSidenav( anchor?: string ) {

    if ( angular.isString( anchor ) ) {
      this.$location.hash( anchor );
      // this.$anchorScroll(anchor);
    }
    this.$mdSidenav( 'left' ).toggle();

  }

}
