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
                                            'data-bs-target="#controllers-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' :
                                            'id="xs-controllers-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' :
                                        'id="xs-injectables-links-module-AppModule-5247b9012919a9d7f7b5e28572308019286beeb24d359d31cf13a30a1a287758c4d461ee0da69ae33975925f713ce0e59a568a811667e3bb6b5c38474fc22013"' }>
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
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-c8635854cc9c26a1451f421d4d1562a6914e541655943e0cbfdd482a2d8b34283afe525fe9aed47795d32573aabbc04467a01f8dabd1c1df776c34ea71ada567"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
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
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-7b1d41ef66dd38ea914513dca9e423409bb9bebaac315030ab70198b699e6e6f565c4fe9a39852b8d4062b295511bc38a2824b389dd86dee2d84f63071579820"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-7b1d41ef66dd38ea914513dca9e423409bb9bebaac315030ab70198b699e6e6f565c4fe9a39852b8d4062b295511bc38a2824b389dd86dee2d84f63071579820"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-7b1d41ef66dd38ea914513dca9e423409bb9bebaac315030ab70198b699e6e6f565c4fe9a39852b8d4062b295511bc38a2824b389dd86dee2d84f63071579820"' :
                                            'id="xs-controllers-links-module-TagsModule-7b1d41ef66dd38ea914513dca9e423409bb9bebaac315030ab70198b699e6e6f565c4fe9a39852b8d4062b295511bc38a2824b389dd86dee2d84f63071579820"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
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
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
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
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
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