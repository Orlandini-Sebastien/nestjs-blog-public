'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' :
                                            'id="xs-controllers-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' :
                                        'id="xs-injectables-links-module-AppModule-cc82659cbb26950cc6b7193874a47a8ac2f30d0e478dce4f09797821a7f3001b7d5464576a6dbf6535bdaf995aac4ee93497c8691417a227930ed2715ccb1bb0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' :
                                            'id="xs-controllers-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' :
                                        'id="xs-injectables-links-module-AuthModule-d192c84cf91d9c533e519c7db1823ece71fc8dc4bdd5110109e6d4c4fb1a8be8f2cd98210192f3a811155da60587d0ab43c9119f035a105fbed1a96f2e145719"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' :
                                            'id="xs-controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' :
                                        'id="xs-injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' :
                                            'id="xs-controllers-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' :
                                        'id="xs-injectables-links-module-UsersModule-0d17d450ffeba57f6c2fbb8d13fb845246dc996cfe2f84b058caa58ac75c6e30dc8312c2b5ca896f9fcbb22a795daf7c363cb19d31a4a16cd4e9c02331aaa86c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionSDto.html" data-type="entity-link" >CreatePostMetaOptionSDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});