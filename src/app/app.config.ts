export class Configure {

  static $inject = [ '$sceDelegateProvider', '$mdIconProvider', '$mdThemingProvider' ];

  constructor(
    $sceDelegateProvider: ng.ISCEDelegateProvider,
    $mdIconProvider: ng.material.IIconProvider,
    $mdThemingProvider: ng.material.IThemingProvider
  ) {

    $sceDelegateProvider.resourceUrlWhitelist( [
      'self',
      'https://www.google.com/maps/**'
    ] );

    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet( "./assets/svg/avatars.svg", 128 )
      .icon( "menu", "/assets/svg/menu.svg", 24 )
      .icon( "share", "./assets/svg/share.svg", 24 )
      .icon( "google_plus", "./assets/svg/google_plus.svg", 512 )
      .icon( "hangouts", "./assets/svg/hangouts.svg", 512 )
      .icon( "twitter", "./assets/svg/twitter.svg", 512 )
      .icon( "phone", "./assets/svg/phone.svg", 512 )
      .icon( "facebook", "img/icons/facebook.svg", 512 )
    ;


    $mdThemingProvider.theme( 'default' )
      .primaryPalette( 'pink' )
      .accentPalette( 'indigo' )
    ;

  }
}
