webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".noti {\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg {\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cofluencer | the collaborative influence';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar__ = __webpack_require__("./node_modules/ng2-password-strength-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_scroll_event__ = __webpack_require__("./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_scroll_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_scroll_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_require_anon_guard_service__ = __webpack_require__("./src/app/guards/require-anon-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__ = __webpack_require__("./src/app/guards/require-user-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_init_auth_guard_service__ = __webpack_require__("./src/app/guards/init-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_page_home_page_component__ = __webpack_require__("./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_modal_modal_component__ = __webpack_require__("./src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_mobile_menu_mobile_menu_component__ = __webpack_require__("./src/app/components/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_company_profile_company_profile_component__ = __webpack_require__("./src/app/pages/company-profile/company-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_company_public_company_public_component__ = __webpack_require__("./src/app/components/company-public/company-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_company_private_company_private_component__ = __webpack_require__("./src/app/components/company-private/company-private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_ig_datauser_service__ = __webpack_require__("./src/app/services/ig-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_twt_datauser_service__ = __webpack_require__("./src/app/services/twt-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_app_page_app_page_component__ = __webpack_require__("./src/app/pages/app-page/app-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_instagram_info_instagram_info_component__ = __webpack_require__("./src/app/components/instagram-info/instagram-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_create_campaign_create_campaign_component__ = __webpack_require__("./src/app/components/create-campaign/create-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_company_edit_company_component__ = __webpack_require__("./src/app/components/edit-company/edit-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_campaign_detail_campaign_detail_component__ = __webpack_require__("./src/app/components/campaign-detail/campaign-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_edit_campaign_edit_campaign_component__ = __webpack_require__("./src/app/components/edit-campaign/edit-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_twitter_info_twitter_info_component__ = __webpack_require__("./src/app/components/twitter-info/twitter-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_youtube_info_youtube_info_component__ = __webpack_require__("./src/app/components/youtube-info/youtube-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_youtube_datauser_service__ = __webpack_require__("./src/app/services/youtube-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_edit_influencer_edit_influencer_component__ = __webpack_require__("./src/app/components/edit-influencer/edit-influencer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_campaigns_campaigns_component__ = __webpack_require__("./src/app/pages/campaigns/campaigns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_campaign_card_campaign_card_component__ = __webpack_require__("./src/app/components/campaign-card/campaign-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_edit_image_cover_edit_image_cover_component__ = __webpack_require__("./src/app/components/edit-image-cover/edit-image-cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_tags_tags_component__ = __webpack_require__("./src/app/components/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_filter_tags_pipe__ = __webpack_require__("./src/app/pipes/filter-tags.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_msg_send_msg_send_component__ = __webpack_require__("./src/app/components/msg-send/msg-send.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_messages_messages_component__ = __webpack_require__("./src/app/pages/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_msg_card_msg_card_component__ = __webpack_require__("./src/app/components/msg-card/msg-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_influencer_profile_influencer_profile_component__ = __webpack_require__("./src/app/pages/influencer-profile/influencer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_influencer_public_influencer_public_component__ = __webpack_require__("./src/app/components/influencer-public/influencer-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_influencer_private_influencer_private_component__ = __webpack_require__("./src/app/components/influencer-private/influencer-private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_msg_alert_delete_msg_alert_delete_component__ = __webpack_require__("./src/app/components/msg-alert-delete/msg-alert-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_campaign_alert_delete_campaign_alert_delete_component__ = __webpack_require__("./src/app/components/campaign-alert-delete/campaign-alert-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_categories_tags_categories_tags_component__ = __webpack_require__("./src/app/components/categories-tags/categories-tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_edit_image_campaign_edit_image_campaign_component__ = __webpack_require__("./src/app/components/edit-image-campaign/edit-image-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_list_influencers_list_influencers_component__ = __webpack_require__("./src/app/components/list-influencers/list-influencers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_select_cofluencer_select_cofluencer_component__ = __webpack_require__("./src/app/components/select-cofluencer/select-cofluencer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_home_page_home_page_component__["a" /* HomePageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_init_auth_guard_service__["a" /* InitAuthGuardService */]],
        children: [
            {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__["a" /* SignupComponent */],
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_10__guards_require_anon_guard_service__["a" /* RequireAnonGuardService */]]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_10__guards_require_anon_guard_service__["a" /* RequireAnonGuardService */]]
            },
        ]
    },
    {
        path: 'influencer/:id',
        component: __WEBPACK_IMPORTED_MODULE_48__pages_influencer_profile_influencer_profile_component__["a" /* InfluencerProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]]
    },
    {
        path: 'influencer/:id/edit-profile',
        component: __WEBPACK_IMPORTED_MODULE_34__components_edit_influencer_edit_influencer_component__["a" /* EditInfluencerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: 'company/:id',
        component: __WEBPACK_IMPORTED_MODULE_19__pages_company_profile_company_profile_component__["a" /* CompanyProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: 'company/:id/edit-profile',
        component: __WEBPACK_IMPORTED_MODULE_28__components_edit_company_edit_company_component__["a" /* EditCompanyComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: 'company/:id/new-campaign',
        component: __WEBPACK_IMPORTED_MODULE_26__components_create_campaign_create_campaign_component__["a" /* CreateCampaignComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    // {
    //   path: 'company/:id/:campaignid',
    //   component: CampaignDetailComponent,
    //   canActivate: [RequireUserGuardService],
    // },
    {
        path: 'company/:id/:campaignid/edit',
        component: __WEBPACK_IMPORTED_MODULE_30__components_edit_campaign_edit_campaign_component__["a" /* EditCampaignComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: 'campaigns',
        component: __WEBPACK_IMPORTED_MODULE_37__pages_campaigns_campaigns_component__["a" /* CampaignsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: 'campaigns/me',
        component: __WEBPACK_IMPORTED_MODULE_37__pages_campaigns_campaigns_component__["a" /* CampaignsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_46__pages_messages_messages_component__["a" /* MessagesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */]],
    },
    {
        path: '**', redirectTo: '',
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_mobile_menu_mobile_menu_component__["a" /* MobileMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_app_page_app_page_component__["a" /* AppPageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_instagram_info_instagram_info_component__["a" /* InstagramInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_company_profile_company_profile_component__["a" /* CompanyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_create_campaign_create_campaign_component__["a" /* CreateCampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_edit_company_edit_company_component__["a" /* EditCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_campaign_detail_campaign_detail_component__["a" /* CampaignDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_edit_campaign_edit_campaign_component__["a" /* EditCampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_twitter_info_twitter_info_component__["a" /* TwitterInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_youtube_info_youtube_info_component__["a" /* YoutubeInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_edit_influencer_edit_influencer_component__["a" /* EditInfluencerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_company_public_company_public_component__["a" /* CompanyPublicComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_company_private_company_private_component__["a" /* CompanyPrivateComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_campaigns_campaigns_component__["a" /* CampaignsComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_40__components_campaign_card_campaign_card_component__["a" /* CampaignCardComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_edit_image_cover_edit_image_cover_component__["a" /* EditImageCoverComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pipes_filter_tags_pipe__["a" /* FilterTagsPipe */],
                __WEBPACK_IMPORTED_MODULE_44__components_msg_send_msg_send_component__["a" /* MsgSendComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_msg_card_msg_card_component__["a" /* MsgCardComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_influencer_profile_influencer_profile_component__["a" /* InfluencerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_influencer_public_influencer_public_component__["a" /* InfluencerPublicComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_influencer_private_influencer_private_component__["a" /* InfluencerPrivateComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_msg_alert_delete_msg_alert_delete_component__["a" /* MsgAlertDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_campaign_alert_delete_campaign_alert_delete_component__["a" /* CampaignAlertDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_categories_tags_categories_tags_component__["a" /* CategoriesTagsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_edit_image_campaign_edit_image_campaign_component__["a" /* EditImageCampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_list_influencers_list_influencers_component__["a" /* ListInfluencersComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_select_cofluencer_select_cofluencer_component__["a" /* SelectCofluencerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar__["PasswordStrengthBarModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_38_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_scroll_event__["ScrollEventModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__services_ig_datauser_service__["a" /* IgDatauserService */],
                __WEBPACK_IMPORTED_MODULE_23__services_twt_datauser_service__["a" /* TwtDatauserService */],
                __WEBPACK_IMPORTED_MODULE_33__services_youtube_datauser_service__["a" /* YoutubeDatauserService */],
                __WEBPACK_IMPORTED_MODULE_27__services_company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_35__services_influencer_service__["a" /* InfluencerService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_require_user_guard_service__["a" /* RequireUserGuardService */],
                __WEBPACK_IMPORTED_MODULE_10__guards_require_anon_guard_service__["a" /* RequireAnonGuardService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_init_auth_guard_service__["a" /* InitAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_36__services_toaster_service__["a" /* ToasterService */],
                __WEBPACK_IMPORTED_MODULE_45__services_msg_service__["a" /* MsgService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/campaign-alert-delete/campaign-alert-delete.component.css":
/***/ (function(module, exports) {

module.exports = ".campaignBox {\n  color: grey;\n  background-color: white;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/campaign-alert-delete/campaign-alert-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Delete Campaign</h4>\n      <div class=\"iconMenu\" data-dismiss=\"modal\" aria-hidden=\"true\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n\n    <div class=\"modal-body\">\n      <div class=\"col-12\">\n        Are you sure that you want to delete this campaign?\n      </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-lg btn-primary btn-round\" data-dismiss=\"modal\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-lg btn-primary btn-round\" data-dismiss=\"modal\" (click)='companyService.deleteCampaign()'>Deleteeeee</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/campaign-alert-delete/campaign-alert-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignAlertDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CampaignAlertDeleteComponent = /** @class */ (function () {
    function CampaignAlertDeleteComponent(companyService) {
        this.companyService = companyService;
    }
    CampaignAlertDeleteComponent.prototype.ngOnInit = function () {
    };
    CampaignAlertDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-campaign-alert-delete',
            template: __webpack_require__("./src/app/components/campaign-alert-delete/campaign-alert-delete.component.html"),
            styles: [__webpack_require__("./src/app/components/campaign-alert-delete/campaign-alert-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]])
    ], CampaignAlertDeleteComponent);
    return CampaignAlertDeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/campaign-card/campaign-card.component.css":
/***/ (function(module, exports) {

module.exports = ".campaignBox {\n  color: grey;\n  background-color: white;\n  padding: 5px 20px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.card-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.card-container {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n}\n\n.brandImage {\n  position: absolute;\n  top: 8px;\n  left: 0px;\n}\n\n.campaignImage {\n  position: relative;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.campaignTitle {\n  line-height: 1;\n}\n\n.date {\n  font-size: 12px;\n}\n\n.cofluencersLink {\n  position: relative;\n  cursor: pointer;\n}\n\n.cofluencersLink::after {\n  content: '';\n  width: 50%;\n  height: 2px;\n  border-radius: 2px;\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .8), rgba(68, 53, 91, .8));\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n\n.cofluencersLink:hover::after {\n  width: 100%;\n}\n\n.cofluencersPg {\n  cursor: pointer;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nfooter {\n  margin-top: 50px;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.bodyTextBold {\n  width: 100% !important;\n}\n\n.editButton {\n  width: 120px;\n  display: inline-block;\n  margin-right: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-radius: 30px;\n  padding: .5rem .75rem;\n  font-size: 1.6rem;\n}\n\n#deleteButton {\n  position: relative;\n  cursor: pointer;\n  margin-top: 0;\n  font-size: 1.3rem;\n  color: #EE5622;\n  opacity: 0.6;\n}\n\n#deleteButton:hover {\n  opacity: 1;;\n}\n\n.containerButton {\n  display: inline-block;\n}\n\n.gradientButton {\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n  border-radius: 30px;\n  color: tomato;\n  display: inline-block;\n  padding: 1px;\n}\n\n.gradientButton span {\n  background-color: #fff;\n  display: block;\n  border-radius: 30px;\n}\n\n.gradientButton span:hover {\n  background-image: linear-gradient(137deg, #44355b, #28afb0);\n  color: #fff;\n}\n\n.moreInfo {\n  vertical-align: text-bottom;\n  margin-top: 20px;\n  position: absolute;\n  right: 20px;\n}\n\n.buttons {\n  position: relative;\n}\n\n.description {\n  font-size: 1.2rem;\n  line-height: 1;\n}\n\n.modal-fade {\n  /* position: fixed;\n  top: 80px; */\n}\n"

/***/ }),

/***/ "./src/app/components/campaign-card/campaign-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"campaignBox shadow\">\n  <div class=\"row\">\n    <div class=\"col-6 col-md-4 p-0 br-5 campaingImage\" [ngStyle]=\"{'background-image': 'url(' + campaign.campaignImage + ')'}\" style=\"background-position: center; background-size: cover;\">\n      <a [routerLink]=\"['/company', campaign.company_id.username]\" class=\"card-container ml-10 brandImage shadow\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + campaign.company_id.profileImage + ')'}\">\n      </a>\n    </div>\n    <div class=\"col-6 col-md-8\">\n      <div class=\"row mt-10\">\n        <div class=\"col-12\">\n          <h3 class=\"h4 capitalize p-0 m-0 campaignTitle\">{{ campaign.title }}</h3>\n        </div>\n        <div class=\"col-12\">\n          <p>\n            <span class=\"date\">{{ campaign.startDate | date: 'dd/MM/yyyy' }}\n                | {{ campaign.startDate | date: 'dd/MM/yyyy' }}\n            </span>\n          </p>\n        </div>\n        <div class=\"col-12\">\n          <app-categories-tags [tags]='campaign.tags' [state]=\"'read'\"></app-categories-tags>\n        </div>\n        <div *ngIf=\"rolControl\" class=\"col-12 mt-10\">\n          <p (click)=\"companyService.selectInfluencers(campaign.influencer_id); companyService.selectCampaign(campaign._id, campaign.title)\" class=\"cofluencersPg\">\n            <a id=\"listButton\" data-toggle=\"modal\" data-target=\"#cofluencersList\">\n              <span class=\"quoteText\">{{ campaign.influencer_id.length }}</span>\n              <span class=\"cofluencersLink\">Cofluencers</span>\n            </a>\n          </p>\n        </div>\n        <div *ngIf=\"!rolControl\" class=\"col-12 mt-10\">\n          <p class=\"cofluencersPg\">\n            <a id=\"listButton\" data-toggle=\"modal\" data-target=\"#cofluencersList\">\n              <span class=\"quoteText\">{{ campaign.influencer_id.length }}</span>\n              <span class=\"cofluencersLink\">Cofluencers</span>\n            </a>\n          </p>\n        </div>\n        <div class=\"col-12 mt-10\">\n          <p class=\"description\">{{ campaign.description }}</p>\n        </div>\n        <div class=\"col-12 mt-10\">\n          <div *ngIf='!rolControl' class='buttons flex flex-middle wrap'>\n            <button *ngIf=\"checkJoinCampaign(campaign.influencer_id)\" (click)='influencer.joinCampaign(campaign._id)' class=\"btn btn-author editButton h4\">Join in</button>\n            <button *ngIf=\"!checkJoinCampaign(campaign.influencer_id)\" (click)='influencer.outCampaign(campaign._id)' class=\"btn btn-author editButton h4\">Remove me</button>\n          </div>\n          <div *ngIf='rolControl' class='buttons flex flex-middle wrap'>\n            <button class=\"btn btn-author editButton h4\" id=\"editButton\" (click)=\"editCampaign(campaign._id)\">Edit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/campaign-card/campaign-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampaignCardComponent = /** @class */ (function () {
    function CampaignCardComponent(session, influencer, companyService, router) {
        this.session = session;
        this.influencer = influencer;
        this.companyService = companyService;
        this.router = router;
        this.dropdownControl = false;
    }
    CampaignCardComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.user.role === 'company' ? this.rolControl = true : this.rolControl = false;
    };
    CampaignCardComponent.prototype.checkJoinCampaign = function (influencers) {
        var _this = this;
        if (influencers.filter(function (x) { return x._id === _this.user._id; }).length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CampaignCardComponent.prototype.ddControl = function () {
        this.dropdownControl = !this.dropdownControl;
    };
    CampaignCardComponent.prototype.editCampaign = function (campaignId) {
        this.router.navigate(['company', this.user.username, campaignId, 'edit']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CampaignCardComponent.prototype, "campaign", void 0);
    CampaignCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-campaign-card',
            template: __webpack_require__("./src/app/components/campaign-card/campaign-card.component.html"),
            styles: [__webpack_require__("./src/app/components/campaign-card/campaign-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CampaignCardComponent);
    return CampaignCardComponent;
}());



/***/ }),

/***/ "./src/app/components/campaign-detail/campaign-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/campaign-detail/campaign-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"400\">\n    <div class=\"container\">\n      <div class=\"navbar-translate\" id=\"navLogo\">\n        <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n          <img src=\"../../../assets/img/brand/logo-dark.png\" alt=\"logo-cofluencer\">\n        </a>\n        <div class=\"iconMenu\" (click)=\"menuControl()\">\n          <span class=\"bar1\"></span>\n          <span class=\"bar2\"></span>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n        <ul class=\"navbar-nav flex flex-middle\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" onclick=\"scrollToDownload()\">\n              <p class=\"bodyTextBold capitalize colorGrey\">My campaigns</p>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\">\n              <p class=\"bodyTextBold capitalize colorGrey\">My stats</p>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\">\n              <p class=\"bodyTextBold capitalize colorGrey\">Create Campaign</p>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"menuControl()\" href=\"#mycampaigns\" class=\"bodyTextBold capitalize colorGrey\">My campaigns</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"menuControl()\" href=\"#mystats\" class=\"bodyTextBold capitalize colorGrey\">My stats</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"newCampaign()\" class=\"bodyTextBold capitalize colorGrey\">Create campaign</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"editProfile()\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n\n  <main>\n    <div class=\"container mt-100\">\n      <h2 class=\"h2\">{{ companyService.campaignDetail.title }}</h2>\n      <p class=\"\">{{ companyService.campaignDetail.description }}</p>\n      <button (click)=\"editCampaign()\">Edit campaign</button>\n      <button (click)=\"deleteCampaign()\">Delete campaign</button>\n    </div>\n  </main>"

/***/ }),

/***/ "./src/app/components/campaign-detail/campaign-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampaignDetailComponent = /** @class */ (function () {
    function CampaignDetailComponent(session, router, companyService, route, toaster) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.route = route;
        this.toaster = toaster;
    }
    CampaignDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.session.getUser();
        this.sub = this.route.params.subscribe(function (params) {
            _this.campaignId = params['campaignid'];
        });
        this.companyService.campaign(this.campaignId);
    };
    CampaignDetailComponent.prototype.editCampaign = function () {
        this.router.navigate(['company', this.user.username, this.campaignId, 'edit']);
    };
    CampaignDetailComponent.prototype.deleteCampaign = function () {
        // this.companyService.deleteCampaign(this.campaignId);
        this.router.navigate(['company', this.user.username]);
        this.toaster.success("Your campaign " + this.companyService.campaignDetail.title + " has been removed correctly.");
    };
    CampaignDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-campaign-detail',
            template: __webpack_require__("./src/app/components/campaign-detail/campaign-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/campaign-detail/campaign-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], CampaignDetailComponent);
    return CampaignDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/categories-tags/categories-tags.component.css":
/***/ (function(module, exports) {

module.exports = ".container-tags {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.tag {\n  font-size: 11px;\n  padding: 2px 10px;\n  cursor: pointer;\n}\n\n.tag-no-select {\n  border: 1px solid #44355b;\n  border-radius: 15px;\n  color: #44355b;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n\n.tag-select {\n  border: none;\n  border-radius: 15px;\n  background-image: linear-gradient(45deg, rgba(68, 53, 91, .8), rgba(31, 39, 27, .8));\n  color: white;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/components/categories-tags/categories-tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"state === 'read'\"  class=\"container-tags\">\n  <div *ngFor='let tag of tags' class=\"tag tag-select\">\n    {{ tag }}\n  </div>\n</div>\n\n<div *ngIf=\"state === 'edit'\" class=\"container-tags\">\n  <div *ngFor='let tag of categories' class=\"tag\" [ngClass]=\"checkHaveTag(tag)?'tag-select':'tag-no-select'\" (click)='toggleTags(tag)'>\n    {{ tag }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/categories-tags/categories-tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesTagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesTagsComponent = /** @class */ (function () {
    function CategoriesTagsComponent() {
        this.categories = ['fashion', 'food', 'sport', 'brand', 'business', 'lifestyle', 'blog', 'art', 'technology', 'music', 'video', 'others'];
        this.colors = ['red', 'tomato', 'yellow', 'orange', 'blue', 'grey', 'gold', 'black', 'white', 'purple', 'green', 'lightsalmon'];
    }
    CategoriesTagsComponent.prototype.ngOnInit = function () {
    };
    CategoriesTagsComponent.prototype.checkHaveTag = function (tag) {
        if (this.tags.indexOf(tag) !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    CategoriesTagsComponent.prototype.toggleTags = function (tag) {
        if (this.tags.indexOf(tag) !== -1) {
            this.tags.splice(this.tags.indexOf(tag), 1);
        }
        else {
            this.tags.push(tag);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CategoriesTagsComponent.prototype, "tags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CategoriesTagsComponent.prototype, "state", void 0);
    CategoriesTagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories-tags',
            template: __webpack_require__("./src/app/components/categories-tags/categories-tags.component.html"),
            styles: [__webpack_require__("./src/app/components/categories-tags/categories-tags.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesTagsComponent);
    return CategoriesTagsComponent;
}());



/***/ }),

/***/ "./src/app/components/company-private/company-private.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-color: rgba(255, 255, 255, .7);\n  color: #1f271b;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-color: rgba(255, 255, 255, 1);\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 0;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.campaignBox {\n  color: #fff;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\n/* Users */\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\nfooter {\n  margin-top: 50px;\n}\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  margin-right: 20px;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.noti{\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg{\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}"

/***/ }),

/***/ "./src/app/components/company-private/company-private.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top navbar-transparent bigNav dinamicBg\" id=\"nav\">\n    <div class=\"container-fluid fixed-top h-50 smooth\" id=\"gradient\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"noti\" [routerLink]=\"['/messages']\" [ngClass]=\"msg.msgNoRead !== 0 ?'new-msg':''\">\n            <span *ngIf='msg.msgNoRead !== 0'>{{ msg.msgNoRead }}</span>\n            <i *ngIf='msg.msgNoRead === 0' class=\"icon-paper-plane\"></i>\n          </div>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"editProfile()\">\n                <p class=\"bodyTextBold capitalize colorGrey menuLink\">Edit profile</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"newCampaign()\">\n                <p class=\"bodyTextBold capitalize colorGrey menuLink\">Create Campaign</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" (click)=\"logout()\">\n                <p class=\"bodyTextBold capitalize colorGrey menuLink\">Logout</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n    </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"newCampaign()\" class=\"bodyTextBold capitalize colorGrey\">Create campaign</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"editProfile()\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n  \n  <div class=\"wrapper\">\n    <div class=\"page-header gradient\">\n      <div class=\"page-header-image\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + session.user.coverImage + ')'}\" id=\"bgWrapper\">\n      </div>\n    </div>\n    <div class=\"container flex sp-between\" id=\"buttons\">\n      <button (click)=\"newCampaign()\" class=\"btn btn-lg btn-primary btn-round h4\" id=\"searchButton\">CREATE CAMPAIGN</button>\n      <button class=\"h4 flex sp-between w-100\" id=\"moreButton\" (click)=\"moreButtonControl()\">\n        <i [hidden]=\"toggleMoreButton\" class=\"icon-arrow-up\"></i>\n        <i [hidden]=!toggleMoreButton class=\"icon-arrow-down\"></i>\n      </button>\n    </div>\n    <div [hidden]=\"!toggleMoreButton\" id=\"insideMoreButton\" class=\"flex flex-column\">\n      <button class=\"btn btn-primary btn-round btn-login\" (click)=\"editProfile()\">edit profile</button>\n      <button (click)=\"logout()\" class=\"btn btn-primary btn-round btn-author\">logout</button>\n    </div>\n  </div>\n\n</header>\n\n<main>\n<app-list-influencers class=\"modal fade\" id=\"cofluencersList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"></app-list-influencers>\n  <section class=\"container flex sp-between\" id=\"stats\">\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Campaigns</h2>\n      <p class=\"quoteText textCenter\">{{ companyService.campaigns.length }}</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofluencity</h2>\n      <p class=\"quoteText textCenter\">90%</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofollowers</h2>\n      <p class=\"quoteText textCenter\">{{ companyService.user.followers.length }}</p>\n    </div>\n  </section>\n  <section id=\"info\">\n    <div class=\"container\">\n      <div class=\"user\">\n        <div class=\"card-box\">\n          <a class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + user.profileImage + ')'}\">\n          </a>\n        </div>\n        <div>\n          <h3>{{ session.user.brandName }}</h3>\n          <h3 class=\"bodyText\">{{ user.email }} | @{{ user.username }}</h3>\n        </div>\n      </div>\n      <p>\n        <app-categories-tags [tags]='user.tags' [state]=\"'read'\"></app-categories-tags>\n      </p>\n      <p class=\"bodyText\">{{ user.bio }}</p>\n    </div>\n  </section>\n\n  <section id=\"campaigns\">\n    <div class=\"\">\n      <h2 class=\"h3 container\">Campaigns</h2>\n      <div *ngFor=\"let campaign of companyService.campaigns\">\n        <app-campaign-card [campaign]='campaign'></app-campaign-card>\n      </div>\n    </div>\n  </section>\n</main>\n\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/company-private/company-private.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyPrivateComponent = /** @class */ (function () {
    function CompanyPrivateComponent(session, router, companyService, toaster, msg) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.toaster = toaster;
        this.msg = msg;
    }
    CompanyPrivateComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.getCampaigns();
        this.companyService.checkFollowButton();
        this.msg.checkNotifications();
    };
    CompanyPrivateComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.info("See you soon " + this.user.username);
    };
    CompanyPrivateComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    CompanyPrivateComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    CompanyPrivateComponent.prototype.getCampaigns = function () {
        this.companyService.campaignsList();
    };
    CompanyPrivateComponent.prototype.newCampaign = function () {
        this.router.navigate(['company', this.user.username, 'new-campaign']);
    };
    CompanyPrivateComponent.prototype.editProfile = function () {
        this.router.navigate(['company', this.user.username, 'edit-profile']);
    };
    CompanyPrivateComponent.prototype.campaignDetail = function (campaignId) {
        this.router.navigate(['company', this.user.username, campaignId]);
    };
    CompanyPrivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-private',
            template: __webpack_require__("./src/app/components/company-private/company-private.component.html"),
            styles: [__webpack_require__("./src/app/components/company-private/company-private.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_5__services_msg_service__["a" /* MsgService */]])
    ], CompanyPrivateComponent);
    return CompanyPrivateComponent;
}());



/***/ }),

/***/ "./src/app/components/company-public/company-public.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .8), rgba(68, 53, 91, .8));\n  color: #fafafa;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, 1), rgba(68, 53, 91, 1));\n}\n\n#followButton {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(68, 53, 91, .8)), to(rgba(40, 175, 176, .8)));\n  background-image: linear-gradient(90deg, rgba(68, 53, 91, .8), rgba(40, 175, 176, .8));\n}\n\n#followButton:hover {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(68, 53, 91, 1)), to(rgba(40, 175, 176, 1)));\n  background-image: linear-gradient(90deg, rgba(68, 53, 91, 1), rgba(40, 175, 176, 1));\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 0;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.campaignBox {\n  color: #fff;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\n/* Users */\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\n.noti {\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg {\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/company-public/company-public.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top navbar-transparent bigNav dinamicBg\" id=\"nav\" color-on-scroll=\"400\">\n    <div class=\"container-fluid fixed-top h-50 smooth\" id=\"gradient\">\n      <div class=\"container flex\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/influencer', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"noti\" [routerLink]=\"['/messages']\" [ngClass]=\"msg.msgNoRead !== 0 ?'new-msg':''\">\n            <span *ngIf='msg.msgNoRead !== 0'>{{ msg.msgNoRead }}</span>\n            <i *ngIf='msg.msgNoRead === 0' class=\"icon-paper-plane\"></i>\n          </div>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" onclick=\"scrollToDownload()\">\n                <p class=\"bodyTextBold capitalize colorGrey menuLink\">My campaigns</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\">\n                <p class=\"bodyTextBold capitalize colorGrey menuLink\">My stats</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\">\n                <p class=\"bodyTextBold capitalize colorGrey menuLink\">Create Campaign</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/campaigns/me']\" class=\"bodyTextBold capitalize colorGrey\">My campaigns</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/campaigns']\" class=\"bodyTextBold capitalize colorGrey\">Search campaings</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/app', user.username]\" class=\"bodyTextBold capitalize colorGrey\">My profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/app', user.username, 'edit-profile']\" class=\"bodyTextBold capitalize colorGrey\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n\n  <div class=\"wrapper\">\n    <div class=\"page-header gradient\">\n      <div class=\"page-header-image\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + influencer.companyDetail.coverImage + ')'}\" id=\"bgWrapper\">\n      </div>\n    </div>\n    <div class=\"container flex sp-between\" id=\"buttons\">\n      <button class=\"btn btn-lg btn-primary btn-round btn-cofluencer h4\" id=\"searchButton\" data-toggle=\"modal\" data-target=\"#sendMsg\">CONTACT</button>\n      <button *ngIf='!influencer.followButtonState' class=\"btn btn-lg btn-primary btn-round btn-cofluencer h4\" (click)='influencer.followCompany(influencer.companyDetail._id)' id=\"followButton\">FOLLOW</button>\n      <button *ngIf='influencer.followButtonState' class=\"btn btn-lg btn-info btn-round btn-cofluencer h4\" (click)='influencer.unfollowCompany(influencer.companyDetail._id)' id=\"followButton\">UNFOLLOW</button>\n    </div>\n  </div>\n  <app-msg-send class=\"modal fade\" id=\"sendMsg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [to]='influencer.companyDetail'></app-msg-send>\n\n</header>\n\n<main>\n  <section class=\"container flex sp-between\" id=\"stats\">\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Campaigns</h2>\n      <p class=\"quoteText textCenter\">{{ companyService.campaigns.length }}</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofluencity</h2>\n      <p class=\"quoteText textCenter\">90%</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofollowers</h2>\n      <p class=\"quoteText textCenter\">{{ influencer.companyDetail.followers.length }}</p>\n    </div>\n  </section>\n  <section id=\"info\">\n    <div class=\"container\">\n      <div class=\"user\">\n        <div class=\"card-box\">\n          <a class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + influencer.companyDetail.profileImage + ')'}\">\n          </a>\n        </div>\n        <div class=\"ml-10\">\n          <h3>{{ influencer.companyDetail.brandName }}</h3>\n          <h3 class=\"bodyText\">{{ influencer.companyDetail.email }} | @{{ influencer.companyDetail.username }}</h3>\n        </div>\n      </div>\n      <p>\n        <app-categories-tags [tags]='influencer.companyDetail.tags' [state]=\"'read'\"></app-categories-tags>\n      </p>\n      <p class=\"bodyText\">{{ influencer.companyDetail.bio }}</p>\n    </div>\n  </section>\n\n  <section id=\"campaigns\">\n    <div class=\"\">\n      <h2 class=\"h3 container\">Campaigns</h2>\n      <div *ngFor=\"let campaign of influencer.companyCampaigns\">\n        <app-campaign-card [campaign]='campaign'></app-campaign-card>\n      </div>\n    </div>\n  </section>\n</main>\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/company-public/company-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyPublicComponent = /** @class */ (function () {
    function CompanyPublicComponent(session, router, companyService, route, toaster, influencer, msg) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.route = route;
        this.toaster = toaster;
        this.influencer = influencer;
        this.msg = msg;
    }
    CompanyPublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.session.getUser();
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyParams = params['id'];
        });
        this.influencer.getCompany(this.companyParams);
        this.companyService.campaignByCompany(this.companyParams);
        this.msg.checkNotifications();
        this.influencer.checkFollowButton();
    };
    CompanyPublicComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.info("See you soon " + this.user.username);
    };
    CompanyPublicComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    CompanyPublicComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    CompanyPublicComponent.prototype.getCampaigns = function () {
        this.companyService.campaignsList();
    };
    CompanyPublicComponent.prototype.newCampaign = function () {
        this.router.navigate(['company', this.user.username, 'new-campaign']);
    };
    CompanyPublicComponent.prototype.editProfile = function () {
        this.router.navigate(['company', this.user.username, 'edit-profile']);
    };
    CompanyPublicComponent.prototype.campaignDetail = function () {
        this.router.navigate(['company', this.influencer.companyDetail.username, this.influencer.companyDetail._id]);
    };
    CompanyPublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-public',
            template: __webpack_require__("./src/app/components/company-public/company-public.component.html"),
            styles: [__webpack_require__("./src/app/components/company-public/company-public.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_6__services_msg_service__["a" /* MsgService */]])
    ], CompanyPublicComponent);
    return CompanyPublicComponent;
}());



/***/ }),

/***/ "./src/app/components/create-campaign/create-campaign.component.css":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-color: rgba(248, 250, 253, .95);\n}\n\nnav {\n  background-color: rgba(248, 250, 253, .95);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #1f271b;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.createButton {\n  width: 100%;\n}\n\n.formCampaign {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/create-campaign/create-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n      <a class=\"navbar-brand w-115\" href=\"/\" rel=\"tooltip\" data-placement=\"bottom\">\n        <img src=\"../../../assets/img/brand/logo-dark.png\" alt=\"logo-cofluencer\">\n      </a>\n      <div class=\"iconMenu\" (click)=\"close()\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"flex flex-center bg\">\n  <div class=\"formCampaign flex flex-center flex-middle flexModal modalBg\">\n    <div class=\"loginForm mb-100\">\n      <div class=\"container p-50\">\n        <p class=\"h1\">New Campaign</p>\n        \n        <form class=\"row mt-40\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <label for=\"title\">Campaign title</label>\n              <input [(ngModel)]=\"formCampaign.title\" name=\"title\" type=\"text\" value=\"\" placeholder=\"A title for the campaign\" class=\"form-control\" id=\"title\">\n            </div>\n          </div>\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <div class=\"campaignImage\" [ngStyle]=\"{'background-image': 'url(' + formCampaign.campaignImage + ')'}\" style=\"background-position: center; background-size: cover;\">\n                <label for=\"campaign-image\">Upload an image for your campaign</label>\n                <input class=\"uploadInput\" type=\"file\" name=\"file\" id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12\">\n            <app-categories-tags [(tags)]='formCampaign.tags' [state]=\"'edit'\"></app-categories-tags>\n          </div>\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <textarea [(ngModel)]=\"formCampaign.description\" name=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"A few lines about the event and info for the influencers\"></textarea>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"startDate\">Start date</label>\n              <input [(ngModel)]=\"formCampaign.startDate\" name=\"startDate\" type=\"date\" class=\"form-control date-picker\" data-datapicker-color=\"primary\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"endDate\">End date</label>\n              <input [(ngModel)]=\"formCampaign.endDate\" id=\"endDate\" name=\"endDate\" type=\"date\" class=\"form-control date-picker\" data-datapicker-color=\"primary\">\n            </div>\n          </div>\n          \n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <button (click)=\"createCampaign()\" class=\"btn btn-round btn-primary createButton h4 gradient-opacity\">Create Campaign</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/create-campaign/create-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCampaignComponent = /** @class */ (function () {
    function CreateCampaignComponent(router, companyService, session, toaster) {
        this.router = router;
        this.companyService = companyService;
        this.session = session;
        this.toaster = toaster;
        this.API_URL = 'http://localhost:3000/api';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: this.API_URL + "/newCampaign",
        });
        this.formCampaign = {
            title: '',
            description: '',
            tags: [],
            startDate: Date,
            endDate: Date,
            campaignImage: '',
        };
        this.options = {
            withCredentials: true,
        };
    }
    CreateCampaignComponent.prototype.ngOnInit = function () {
        this.username = this.session.getUser().username;
    };
    CreateCampaignComponent.prototype.close = function () {
        this.router.navigate(['company', this.username]);
    };
    // createCampaign() {
    //   this.companyService.createCampaign(this.formCampaign)
    //     .then(newCampaign => {
    //       this.newCampaign = newCampaign;
    //       this.router.navigate(['company', this.username]);
    //       this.toaster.success(`Campaign added`, `${newCampaign.title} is public now`);
    //       console.log(this.newCampaign);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // uploadImage(item, options) {
    //   this.uploader.uploadAll();
    //   this.uploader.onCompleteItem = (iten: any, response: any, status: any, headers: any) => {
    //     this.formCampaign.campaignImage = JSON.parse(response).campaignImage;
    //   };
    // }
    CreateCampaignComponent.prototype.createCampaign = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            console.log(_this.formCampaign.startDate);
            form.append('title', _this.formCampaign.title);
            form.append('description', _this.formCampaign.description);
            form.append('tags', JSON.stringify(_this.formCampaign.tags));
            form.append('startDate', _this.formCampaign.startDate);
            form.append('endDate', _this.formCampaign.endDate);
        };
        this.uploader.uploadAll();
        this.router.navigate(['company', this.username]);
        this.toaster.success("Campaign added", this.formCampaign.title + " is public now");
    };
    CreateCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-campaign',
            template: __webpack_require__("./src/app/components/create-campaign/create-campaign.component.html"),
            styles: [__webpack_require__("./src/app/components/create-campaign/create-campaign.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], CreateCampaignComponent);
    return CreateCampaignComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-campaign/edit-campaign.component.css":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-color: rgba(248, 250, 253, .95);\n}\n\nnav {\n  background-color: rgba(248, 250, 253, .95);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #1f271b;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.updateButton {\n  width: 100%;\n}\n\n.formProfile {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n#deleteButton {\n  position: relative;\n  cursor: pointer;\n  margin-top: 0;\n  font-size: 1.3rem;\n  color: #EE5622;\n  opacity: 0.6;\n}\n\n#deleteButton:hover {\n  opacity: 1;\n  ;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/components/edit-campaign/edit-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n      <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', company]\" rel=\"tooltip\" data-placement=\"bottom\">\n        <img src=\"../../../assets/img/brand/logo-dark.png\" alt=\"logo-cofluencer\">\n      </a>\n      <div class=\"iconMenu\" (click)=\"close()\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"flex flex-center bg\">\n  <div class=\"formProfile flex flex-center flex-middle flexModal modalBg\">\n    <div class=\"loginForm mb-100\">\n      <app-edit-image-campaign></app-edit-image-campaign>\n      <div class=\"container p-20 box-form\">\n        <form class=\"row mt-40\">\n          <div class=\"col-12\">\n\n            <div class=\"row form-group mt-20\">\n              <div class=\"col-3\">\n                <label for=\"title\">Campaign title</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"formCampaign.title\" name=\"title\" type=\"text\" class=\"form-control\" id=\"title\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"tags\">Tags</label>\n              </div>\n              <div class=\"col-9\">\n                <app-categories-tags [(tags)]='formCampaign.tags' [state]=\"'edit'\"></app-categories-tags>\n              </div>\n            </div>\n            \n            <div class=\"row form-group\">\n              <div class=\"col-12\">\n                <textarea [(ngModel)]=\"formCampaign.description\" name=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"A few lines about the event and info for the influencers\"></textarea>\n              </div>\n            </div>\n\n          </div>\n          \n          <div class=\"col-12\">\n            <div class=\"form-group textCenter\">\n              <button (click)=\"updateCampaign()\" class=\"btn btn-round btn-primary updateButton h4\">Update Campaign</button>\n              <a class=\"\" id=\"deleteButton\" data-toggle=\"modal\" data-target=\"#alertDeleteCampaign\" (click)='companyService.selectCampaign(campaignId)'>\n                <i class=\"icon icon-trash\"></i>\n                Delete\n              </a>\n              <app-campaign-alert-delete class=\"modal fade\" id=\"alertDeleteCampaign\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" ></app-campaign-alert-delete>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-campaign/edit-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCampaignComponent = /** @class */ (function () {
    function EditCampaignComponent(session, router, companyService, route) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.route = route;
        this.formCampaign = {
            title: '',
            tags: [],
            description: '',
        };
    }
    EditCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.session.getUser();
        this.sub = this.route.params.subscribe(function (params) {
            _this.campaignId = params.campaignid;
            _this.company = params.id;
            _this.companyService.campaign(_this.campaignId)
                .then(function (campaign) {
                _this.formCampaign = campaign;
            })
                .catch(function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    };
    EditCampaignComponent.prototype.close = function () {
        this.router.navigate(['company', this.user.username]);
    };
    EditCampaignComponent.prototype.updateCampaign = function () {
        this.companyService.updateCampaign(this.formCampaign, this.campaignId);
        this.router.navigate(['company', this.user.username]);
    };
    EditCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-campaign',
            template: __webpack_require__("./src/app/components/edit-campaign/edit-campaign.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-campaign/edit-campaign.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EditCampaignComponent);
    return EditCampaignComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-company/edit-company.component.css":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-color: rgba(248, 250, 253, .95);\n}\n\nnav {\n  background-color: rgba(248, 250, 253, .95);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #1f271b;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.updateButton {\n  width: 100%;\n}\n\n.formProfile {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.profileImage {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  -webkit-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.6);\n          box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.6);\n}\n\n.profileImage label {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%; \n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  cursor: pointer;\n}\n\n.profileImage .uploadInput {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: none;\n}\n\n.box-form {\n  position: relative;\n  top: -115px;\n}\n"

/***/ }),

/***/ "./src/app/components/edit-company/edit-company.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n      <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', editingUser.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n        <img src=\"../../../assets/img/brand/logo-dark.png\" alt=\"logo-cofluencer\">\n      </a>\n      <div class=\"iconMenu\" (click)=\"close()\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"flex flex-center bg\">\n  <div class=\"formProfile flex flex-center flex-middle flexModal modalBg\">\n    <div class=\"loginForm mb-100\">\n      <app-edit-image-cover></app-edit-image-cover>\n      <div class=\"container p-20 box-form\">\n        <form class=\"row mt-40\">\n          <div class=\"col-12\">\n            <div class=\"profileImage flex flex-center flex-middle\" [ngStyle]=\"{'background-image': 'url(' + editingUser.profileImage + ')'}\" style=\"background-position: center; background-size: cover;\">\n              <label for=\"file\" class=\"flex flex-center flex-middle\">edit avatar</label>\n              <input class=\"uploadInput\" type=\"file\" name=\"file\" id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n            </div>\n          </div>\n\n          <div class=\"col-12\">\n            <div class=\"row form-group mt-20\">\n              <div class=\"col-3\">\n                <label for=\"username\">Username</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.username\" name=\"username\" type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"brandName\">Brand Name</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.brandName\" name=\"brandName\" type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"city\">City</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.city\" name=\"city\" type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n  \n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"email\">Email</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.email\" name=\"email\" type=\"email\" class=\"form-control\">\n              </div>\n            </div>\n            \n            <div class=\"col-12\">\n              <app-categories-tags [(tags)]='editingUser.tags' [state]=\"'edit'\"></app-categories-tags>\n            </div>\n  \n            <div class=\"row form-group\">\n              <div class=\"col-12\">\n                <textarea [(ngModel)]=\"editingUser.bio\" name=\"bio\" rows=\"5\" class=\"form-control\" placeholder=\"A few lines about the event and info for the influencers\"></textarea>\n              </div>  \n            </div>\n\n          </div>\n          \n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <button (click)=\"updateUser()\" class=\"btn btn-round btn-primary updateButton h4\">Update Profile</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-company/edit-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditCompanyComponent = /** @class */ (function () {
    function EditCompanyComponent(session, router, companyService, toaster) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.toaster = toaster;
        this.API_URL = 'http://localhost:3000/api';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
            url: this.API_URL + "/upload-image/profileImage/edit",
        });
        // user: any;
        this.editingUser = {
            username: '',
            brandName: '',
            email: '',
            bio: '',
            city: '',
            profileImage: '',
            avatar: '',
            tags: [],
        };
        this.options = {
            withCredentials: true,
        };
    }
    EditCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editingUser = this.session.getUser();
        this.uploader.onAfterAddingFile = (function (item) {
            _this.uploadImage(item, _this.options);
            _this.editingUser = _this.session.getUser();
        });
    };
    EditCompanyComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.editingUser);
        this.companyService.updateUser(this.editingUser)
            .then(function (updatedUser) {
            _this.session.setUser(updatedUser);
            _this.router.navigate(['company', updatedUser.username]);
            _this.toaster.success('your profile is updated! 👍');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditCompanyComponent.prototype.uploadImage = function (item, options) {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.editingUser = JSON.parse(response);
            _this.toaster.success('Image updated! 📸 ');
        };
    };
    EditCompanyComponent.prototype.close = function () {
        this.router.navigate(['company', this.editingUser.username]);
    };
    EditCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-company',
            template: __webpack_require__("./src/app/components/edit-company/edit-company.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-company/edit-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service__["a" /* ToasterService */]])
    ], EditCompanyComponent);
    return EditCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-image-campaign/edit-image-campaign.component.css":
/***/ (function(module, exports) {

module.exports = ".bigImage-bg {\n  background-size: cover;\n  background-position: center;\n}\n\n.bigImage>.uploadInput {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.bigImage>label {\n  width: 100%;\n  height: 190px;\n  color: #ffffff;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.fa {\n  padding: 0 0 2px 5px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/edit-image-campaign/edit-image-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-200 overflowH p-0 bigImage-bg\" [ngStyle]=\"{'background-image': 'url(' + formCampaign.campaignImage + ')'}\">\n  <div class=\"container-fluid h-100 gradient-opacity bigImage\">\n    <label for=\"coverImage\" class=\"flex flex-start align-end\">edit campaignImage\n      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n    </label>\n    <input class=\"uploadInput\" type=\"file\" name=\"file\" id=\"coverImage\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/edit-image-campaign/edit-image-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditImageCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditImageCampaignComponent = /** @class */ (function () {
    function EditImageCampaignComponent(session, router, route, companyService, influencerService, toaster) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.companyService = companyService;
        this.influencerService = influencerService;
        this.toaster = toaster;
        this.API_URL = 'http://localhost:3000/api';
        this.formCampaign = {
            campaignImage: '',
        };
        this.options = {
            withCredentials: true,
        };
    }
    EditImageCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyId = params.id;
            _this.campaignId = params.campaignid;
            _this.companyService.campaign(_this.campaignId)
                .then(function (campaign) {
                _this.formCampaign = campaign;
            })
                .catch(function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
            url: this.API_URL + "/upload-image/campaignImage/" + this.campaignId,
        });
        this.uploader.onAfterAddingFile = (function (item) {
            _this.uploadImage(item, _this.options);
            _this.companyService.campaign(_this.campaignId)
                .then(function (campaign) {
                _this.formCampaign = campaign;
            })
                .catch(function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    };
    EditImageCampaignComponent.prototype.uploadImage = function (item, options) {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.formCampaign = JSON.parse(response);
            _this.toaster.success('Campaign Image updated! 📸 ');
        };
    };
    EditImageCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-image-campaign',
            template: __webpack_require__("./src/app/components/edit-image-campaign/edit-image-campaign.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-image-campaign/edit-image-campaign.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_6__services_toaster_service__["a" /* ToasterService */]])
    ], EditImageCampaignComponent);
    return EditImageCampaignComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-image-cover/edit-image-cover.component.css":
/***/ (function(module, exports) {

module.exports = ".bigImage-bg {\n  background-size: cover;\n  background-position: center;\n}\n\n.bigImage>.uploadInput {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.bigImage>label {\n  width: 100%;\n  height: 190px;\n  color: #ffffff;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.fa {\n  padding: 0 0 2px 5px;\n}\n"

/***/ }),

/***/ "./src/app/components/edit-image-cover/edit-image-cover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-200 overflowH p-0 bigImage-bg\" [ngStyle]=\"{'background-image': 'url(' + editingUser.coverImage + ')'}\">\n  <div class=\"container-fluid h-100 gradient-opacity bigImage\">\n    <label for=\"coverImage\" class=\"flex flex-start align-end\">edit coverImage <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></label>\n    <input class=\"uploadInput\" type=\"file\" name=\"file\" id=\"coverImage\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-image-cover/edit-image-cover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditImageCoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditImageCoverComponent = /** @class */ (function () {
    function EditImageCoverComponent(session, router, companyService, influencerService, toaster) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.influencerService = influencerService;
        this.toaster = toaster;
        this.API_URL = 'http://localhost:3000/api';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
            url: this.API_URL + "/upload-image/coverImage/image",
        });
        // user: any;
        this.editingUser = {
            profileImage: '',
            coverImage: '',
        };
        this.options = {
            withCredentials: true,
        };
    }
    EditImageCoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editingUser = this.session.getUser();
        this.uploader.onAfterAddingFile = (function (item) {
            _this.uploadImage(item, _this.options);
            _this.editingUser = _this.session.getUser();
        });
    };
    EditImageCoverComponent.prototype.uploadImage = function (item, options) {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.editingUser = JSON.parse(response);
            _this.toaster.success('Cover Image updated! 📸 ');
        };
    };
    EditImageCoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-image-cover',
            template: __webpack_require__("./src/app/components/edit-image-cover/edit-image-cover.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-image-cover/edit-image-cover.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_6__services_toaster_service__["a" /* ToasterService */]])
    ], EditImageCoverComponent);
    return EditImageCoverComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-influencer/edit-influencer.component.css":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-color: rgba(248, 250, 253, .95);\n}\n\nnav {\n  background-color: rgba(248, 250, 253, .95);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #1f271b;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.updateButton {\n  width: 100%;\n}\n\n.formProfile {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.profileImage {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  -webkit-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.6);\n          box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.6);\n}\n\n.profileImage label {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n}\n\n.profileImage .uploadInput {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: none;\n}\n\n.bigImage-bg {\n  background-size: cover;\n  background-position: center;\n}\n\n.bigImage>.uploadInput {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.bigImage>label {\n  width: 100%;\n  height: 190px;\n  color: #ffffff;\n  position: relative;\n  z-index: 1;\n}\n\n.box-form {\n  position: relative;\n  top: -115px;\n}\n"

/***/ }),

/***/ "./src/app/components/edit-influencer/edit-influencer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n      <a class=\"navbar-brand w-115\" [routerLink]=\"['/influencer', editingUser.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n        <img src=\"../../../assets/img/brand/logo-dark.png\" alt=\"logo-cofluencer\">\n      </a>\n      <div class=\"iconMenu\" (click)=\"close()\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"flex flex-center bg\">\n  <div class=\"formProfile flex flex-center flex-middle flexModal modalBg\">\n    <div class=\"loginForm mb-100\">\n      <app-edit-image-cover></app-edit-image-cover>\n      <div class=\"container p-20 box-form\">\n        <form class=\"row mt-40\">\n          <div class=\"col-12\">\n            <div class=\"profileImage flex flex-center flex-middle\" [ngStyle]=\"{'background-image': 'url(' + editingUser.profileImage + ')'}\"\n              style=\"background-position: center; background-size: cover;\">\n              <label for=\"file\" class=\"flex flex-center flex-middle\">edit avatar</label>\n              <input class=\"uploadInput\" type=\"file\" name=\"file\" id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n            </div>\n          </div>\n\n          <div class=\"col-12\">\n            <div class=\"row form-group mt-20\">\n              <div class=\"col-3\">\n                <label for=\"username\">Username</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.username\" name=\"username\" type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"name\">Real Name</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.name\" name=\"name\" type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"email\">Email</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.email\" name=\"email\" type=\"email\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-12\">\n              <app-categories-tags [(tags)]='editingUser.tags' [state]=\"'edit'\"></app-categories-tags>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-12\">\n                <textarea [(ngModel)]=\"editingUser.bio\" name=\"bio\" rows=\"5\" class=\"form-control\" placeholder=\"A few lines about the event and info for the influencers\"></textarea>\n              </div>\n            </div>\n            </div>\n\n\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"instagram\">Instagram</label>\n              </div>\n              <div class=\"col-9\">\n                <input disabled name=\"instagram\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"youtube\">YouYube</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.socialLinks.youtube\" name=\"youtube\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-3\">\n                <label for=\"twitter\">Twitter</label>\n              </div>\n              <div class=\"col-9\">\n                <input [(ngModel)]=\"editingUser.socialLinks.twitter\" name=\"twitter\" class=\"form-control\">\n              </div>\n            </div>\n            </div>\n          </div>\n\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <button (click)=\"updateUser()\" class=\"btn btn-round btn-primary updateButton h4\">Update Profile</button>\n            </div>\n          </div>\n          <!-- <tag-input [ngModel]=\"editingUser.tags\" [ngModelOptions]=\"{standalone: true}\" theme='minimal' [removable]='false' [disable]='true' placeholder='' secondaryPlaceholder='No tags added'></tag-input> -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-influencer/edit-influencer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInfluencerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditInfluencerComponent = /** @class */ (function () {
    function EditInfluencerComponent(session, router, influencerService, toaster) {
        this.session = session;
        this.router = router;
        this.influencerService = influencerService;
        this.toaster = toaster;
        this.API_URL = 'http://localhost:3000/api';
        this.editingUser = {
            username: '',
            email: '',
            name: '',
            bio: '',
            socialLinks: {
                youtube: '',
                twitter: '',
            },
            profileImage: '',
            coverImage: '',
            tags: [],
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: this.API_URL + "/upload-image/profileImage/edit",
        });
        this.options = {
            withCredentials: true,
        };
    }
    EditInfluencerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editingUser = this.session.getUser();
        this.uploader.onAfterAddingFile = function (item) {
            _this.uploadImage(item, _this.options);
            _this.editingUser = _this.session.getUser();
        };
    };
    EditInfluencerComponent.prototype.updateUser = function () {
        var _this = this;
        this.influencerService.updateUser(this.editingUser)
            .then(function (updatedUser) {
            _this.session.setUser(updatedUser);
            _this.router.navigate(['influencer', updatedUser.username]);
            _this.toaster.success('your profile is updated! 👍');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditInfluencerComponent.prototype.uploadImage = function (item, options) {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.editingUser = JSON.parse(response);
            _this.toaster.success('Image updated! 📸 ');
        };
    };
    EditInfluencerComponent.prototype.close = function () {
        this.router.navigate(['influencer', this.editingUser.username]);
    };
    EditInfluencerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-influencer',
            template: __webpack_require__("./src/app/components/edit-influencer/edit-influencer.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-influencer/edit-influencer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], EditInfluencerComponent);
    return EditInfluencerComponent;
}());



/***/ }),

/***/ "./src/app/components/influencer-private/influencer-private.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-color: rgba(255, 255, 255, .7);\n  color: #1f271b;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-color: rgba(255, 255, 255, 1);\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 5px !important;\n}\n\n#stats {\n  margin-bottom: 5px !important;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\nfooter {\n  margin-top: 50px;\n}\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  margin-right: 20px;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.noti {\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg {\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/influencer-private/influencer-private.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top navbar-transparent bigNav dinamicBg\" id=\"nav\">\n    <div class=\"container-fluid fixed-top h-50 smooth\" id=\"gradient\">\n      <div class=\"container flex\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/influencer', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"noti\" [routerLink]=\"['/messages']\" [ngClass]=\"msg.msgNoRead !== 0 ?'new-msg':''\">\n            <span *ngIf='msg.msgNoRead !== 0'>{{ msg.msgNoRead }}</span>\n            <i *ngIf='msg.msgNoRead === 0' class=\"icon-paper-plane\"></i>\n          </div>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/campaigns/me']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My campaigns</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/campaigns']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Search campaign</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/influencer', user.username, 'edit-profile']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My profile</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Logout</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-info fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/campaigns/me']\" class=\"bodyTextBold capitalize colorGrey\">My campaigns</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/campaigns']\" class=\"bodyTextBold capitalize colorGrey\">Search campaings</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/influencer', user.username, 'edit-profile']\" class=\"bodyTextBold capitalize colorGrey\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n\n  <div class=\"wrapper\">\n    <div class=\"page-header gradient\">\n      <div class=\"page-header-image\" id=\"bgWrapper\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + user.coverImage + ')'}\">\n      </div>\n    </div>\n    <div class=\"container flex sp-between\" id=\"buttons\">\n      <button [routerLink]=\"['/campaigns']\" class=\"btn btn-lg btn-primary btn-round h4\" id=\"searchButton\">SEARCH CAMPAIGNS</button>\n      <button class=\"h4 flex sp-between w-100\" id=\"moreButton\" (click)=\"moreButtonControl()\">\n        <i [hidden]=\"toggleMoreButton\" class=\"icon-arrow-up\"></i>\n        <i [hidden]=!toggleMoreButton class=\"icon-arrow-down\"></i>\n      </button>\n    </div>\n    <div [hidden]=\"!toggleMoreButton\" id=\"insideMoreButton\" class=\"flex flex-column\">\n      <button class=\"btn btn-primary btn-round btn-login\" (click)=\"editProfile()\">edit profile</button>\n      <button (click)=\"logout()\" class=\"btn btn-primary btn-round btn-author\">logout</button>\n    </div>\n  </div>\n\n</header>\n\n<main>\n  <section class=\"container flex sp-between\" id=\"stats\">\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Campaigns</h2>\n      <p class=\"quoteText textCenter\">{{ influencer.stats.registeredCampaigns }}</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofluencity</h2>\n      <p class=\"quoteText textCenter\">90%</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofollowers</h2>\n      <p class=\"quoteText textCenter\">{{ influencer.user.followers.length}}</p>\n    </div>\n  </section>\n  <section id=\"info\">\n    <div class=\"container\">\n      <div class=\"user\">\n        <div class=\"card-box\">\n          <a class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + user.profileImage + ')'}\">\n          </a>\n        </div>\n        <div>\n          <h3>{{ session.user.name }}</h3>\n          <h3 class=\"bodyText\">{{ user.email }} | @{{ user.username }}</h3>\n        </div>\n      </div>\n      <p>\n        <app-categories-tags [tags]='influencer.user.tags' [state]=\"'read'\"></app-categories-tags>\n      </p>\n      <p class=\"bodyText\">{{ user.bio }}</p>\n    </div>\n  </section>\n</main>\n\n<app-instagram-info></app-instagram-info>\n<app-youtube-info></app-youtube-info>\n<app-twitter-info></app-twitter-info>\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/influencer-private/influencer-private.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerPrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InfluencerPrivateComponent = /** @class */ (function () {
    function InfluencerPrivateComponent(session, router, companyService, influencer, toaster, msg) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.influencer = influencer;
        this.toaster = toaster;
        this.msg = msg;
    }
    InfluencerPrivateComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.checkYoutube();
        this.checkTwitter();
        this.influencer.listMyCampaigns();
        this.influencer.checkFollowButton();
        this.msg.checkNotifications();
    };
    InfluencerPrivateComponent.prototype.ngOnChanges = function (changes) {
        console.log('cambios: ', this.session.getUser());
    };
    InfluencerPrivateComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.success("" + this.user.username, "See you! \uD83D\uDC4B\uD83C\uDFFB");
    };
    InfluencerPrivateComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    InfluencerPrivateComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    InfluencerPrivateComponent.prototype.editProfile = function () {
        this.router.navigate(['influencer', this.user.username, 'edit-profile']);
    };
    InfluencerPrivateComponent.prototype.checkYoutube = function () {
        if (this.user.socialLinks.youtube == null || this.user.socialLinks.youtube === '') {
            this.youtubeProfile = false;
        }
        else {
            this.youtubeProfile = true;
        }
    };
    InfluencerPrivateComponent.prototype.checkTwitter = function () {
        if (this.user.socialLinks.twitter == null || this.user.socialLinks.twitter === '') {
            this.twitterProfile = false;
        }
        else {
            this.twitterProfile = true;
        }
    };
    InfluencerPrivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-influencer-private',
            template: __webpack_require__("./src/app/components/influencer-private/influencer-private.component.html"),
            styles: [__webpack_require__("./src/app/components/influencer-private/influencer-private.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_msg_service__["a" /* MsgService */]])
    ], InfluencerPrivateComponent);
    return InfluencerPrivateComponent;
}());



/***/ }),

/***/ "./src/app/components/influencer-public/influencer-public.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .8), rgba(68, 53, 91, .8));\n  color: #fafafa;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, 1), rgba(68, 53, 91, 1));\n}\n\n#followButton {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(68, 53, 91, .8)), to(rgba(40, 175, 176, .8)));\n  background-image: linear-gradient(90deg, rgba(68, 53, 91, .8), rgba(40, 175, 176, .8));\n}\n\n#followButton:hover {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(68, 53, 91, 1)), to(rgba(40, 175, 176, 1)));\n  background-image: linear-gradient(90deg, rgba(68, 53, 91, 1), rgba(40, 175, 176, 1));\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 5px !important;\n}\n\n#stats {\n  margin-bottom: 5px !important;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\nfooter {\n  margin-top: 50px;\n}\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  margin-right: 20px;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.noti {\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg {\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/influencer-public/influencer-public.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top navbar-transparent bigNav dinamicBg\" id=\"nav\">\n    <div class=\"container-fluid fixed-top h-50 smooth\" id=\"gradient\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/company', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"noti\" [routerLink]=\"['/messages']\" [ngClass]=\"msg.msgNoRead !== 0 ?'new-msg':''\">\n            <span *ngIf='msg.msgNoRead !== 0'>{{ msg.msgNoRead }}</span>\n            <i *ngIf='msg.msgNoRead === 0' class=\"icon-paper-plane\"></i>\n          </div>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/campaigns/me']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My campaigns</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/campaigns']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Search campaign</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/company', user.username, 'edit-profile']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My profile</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Logout</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-info fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"newCampaign()\" class=\"bodyTextBold capitalize colorGrey\">Create campaign</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"editProfile()\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n\n  <div class=\"wrapper\">\n    <div class=\"page-header gradient\">\n      <div class=\"page-header-image\" id=\"bgWrapper\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + companyService.influencer.coverImage + ')'}\">\n      </div>\n    </div>\n    <div class=\"container flex sp-between\" id=\"buttons\">\n      <button class=\"btn btn-lg btn-primary btn-round btn-cofluencer h4\" id=\"searchButton\" data-toggle=\"modal\" data-target=\"#sendMsg\">CONTACT</button>\n      <button *ngIf='!companyService.followButtonState' class=\"btn btn-lg btn-primary btn-round btn-cofluencer h4\" (click)='companyService.followInfluencer(companyService.influencer._id)' id=\"followButton\">FOLLOW</button>\n      <button *ngIf='companyService.followButtonState' class=\"btn btn-lg btn-info btn-round btn-cofluencer h4\" id=\"followButton\" (click)='companyService.unfollowInfluencer(companyService.influencer._id)'>UNFOLLOW</button>\n    </div>\n  </div>\n  <app-msg-send class=\"modal fade\" id=\"sendMsg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n    [to]='companyService.influencer'></app-msg-send>\n\n</header>\n\n<main>\n  <section class=\"container flex sp-between\" id=\"stats\">\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Campaigns</h2>\n      <p class=\"quoteText textCenter\">0</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofluencity</h2>\n      <p class=\"quoteText textCenter\">90%</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofollowers</h2>\n      <p class=\"quoteText textCenter\">{{ companyService.influencer.followers.length }}</p>\n    </div>\n  </section>\n  <section id=\"info\">\n    <div class=\"container\">\n      <div class=\"user\">\n        <div class=\"card-box\">\n          <a class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + companyService.influencer.profileImage + ')'}\">\n          </a>\n        </div>\n        <div>\n          <h3>{{ companyService.influencer.name }}</h3>\n          <h3 class=\"bodyText\">{{ companyService.influencer.email }} | @{{ companyService.influencer.username }}</h3>\n        </div>\n      </div>\n      <p>\n        <app-categories-tags [tags]=\"companyService.influencer.tags\" [state]=\"'read'\"></app-categories-tags>\n      </p>\n      <p class=\"bodyText\">{{ companyService.influencer.bio }}</p>\n    </div>\n  </section>\n</main>\n\n<app-instagram-info></app-instagram-info>\n<app-youtube-info></app-youtube-info>\n<app-twitter-info></app-twitter-info>\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/influencer-public/influencer-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerPublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_youtube_datauser_service__ = __webpack_require__("./src/app/services/youtube-datauser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfluencerPublicComponent = /** @class */ (function () {
    function InfluencerPublicComponent(session, router, route, companyService, influencer, toaster, msg, youtubeInfo) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.companyService = companyService;
        this.influencer = influencer;
        this.toaster = toaster;
        this.msg = msg;
        this.youtubeInfo = youtubeInfo;
    }
    InfluencerPublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.session.getUser();
        this.sub = this.route.params.subscribe(function (params) {
            _this.influencerParams = params['id'];
        });
        this.companyService.getInfluencer(this.influencerParams);
        this.companyService.checkFollowButton();
        this.checkYoutube();
        this.checkTwitter();
        this.influencer.listMyCampaigns();
        this.msg.checkNotifications();
        // console.log(this.companyService.influencer.socialLinks.youtube)
        // this.youtubeInfo.getInfoYoutubeUser(this.companyService.influencer.socialLinks.youtube);
    };
    InfluencerPublicComponent.prototype.ngOnChanges = function (changes) {
        console.log('cambios: ', this.session.getUser());
    };
    InfluencerPublicComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.success("" + this.user.username, "See you! \uD83D\uDC4B\uD83C\uDFFB");
    };
    InfluencerPublicComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    InfluencerPublicComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    InfluencerPublicComponent.prototype.editProfile = function () {
        this.router.navigate(['company', this.user.username, 'edit-profile']);
    };
    InfluencerPublicComponent.prototype.checkYoutube = function () {
        if (this.user.socialLinks.youtube == null || this.user.socialLinks.youtube === '') {
            this.youtubeProfile = false;
        }
        else {
            this.youtubeProfile = true;
        }
    };
    InfluencerPublicComponent.prototype.checkTwitter = function () {
        if (this.user.socialLinks.twitter == null || this.user.socialLinks.twitter === '') {
            this.twitterProfile = false;
        }
        else {
            this.twitterProfile = true;
        }
    };
    InfluencerPublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-influencer-public',
            template: __webpack_require__("./src/app/components/influencer-public/influencer-public.component.html"),
            styles: [__webpack_require__("./src/app/components/influencer-public/influencer-public.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_msg_service__["a" /* MsgService */],
            __WEBPACK_IMPORTED_MODULE_7__services_youtube_datauser_service__["a" /* YoutubeDatauserService */]])
    ], InfluencerPublicComponent);
    return InfluencerPublicComponent;
}());



/***/ }),

/***/ "./src/app/components/instagram-info/instagram-info.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nimg {\n  width: 180px;\n}\n\n.no-account {\n  margin: 2vh auto;\n  border: 1px solid #eee;\n  padding: 25px 30px;\n  border-radius: 10px;\n  max-width: 500px;\n  background: rgb(255, 255, 255);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n}\n\n.no-account div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.no-account p {\n  color: gray;\n  text-align: center;\n}\n\ninput {\n  background-color: white;\n  text-align: center;\n}\n\n.input:focus {\n  border: 1px solid red !important;\n}\n\n.btn {\n  border-radius: 10px;\n  font-weight: 900;\n}\n"

/***/ }),

/***/ "./src/app/components/instagram-info/instagram-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"../../../assets/img/instagram.png\" alt=\"logo-instagram\">\n    <div *ngIf=\"rolControl\" class='no-account'>\n      <div>\n        <p>waiting for Mark Zuckerberg to access... 😪</p>\n        <button class=\"btn btn-primary\" disabled>Add Instagram Account!</button>\n      </div>\n    </div>\n        <div *ngIf=\"!rolControl\" class='no-account'>\n      <div>\n        <p>waiting for Mark Zuckerberg to access... 😪</p>\n      </div>\n    </div>\n  <br>\n  <hr>\n</div>"

/***/ }),

/***/ "./src/app/components/instagram-info/instagram-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ig_datauser_service__ = __webpack_require__("./src/app/services/ig-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstagramInfoComponent = /** @class */ (function () {
    function InstagramInfoComponent(userInstaInfo, session) {
        this.userInstaInfo = userInstaInfo;
        this.session = session;
        this.rolControl = false;
    }
    InstagramInfoComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.user.role === 'influencer' ? this.rolControl = true : this.rolControl = false;
    };
    InstagramInfoComponent.prototype.getInstaInfo = function () {
        var _this = this;
        this.userInstaInfo.getInfoInstaUser()
            .subscribe(function (instaInfo) { return _this.instaInfo = instaInfo; });
    };
    InstagramInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-instagram-info',
            template: __webpack_require__("./src/app/components/instagram-info/instagram-info.component.html"),
            styles: [__webpack_require__("./src/app/components/instagram-info/instagram-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ig_datauser_service__["a" /* IgDatauserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], InstagramInfoComponent);
    return InstagramInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/list-influencers/list-influencers.component.css":
/***/ (function(module, exports) {

module.exports = ".campaignBox {\n  color: grey;\n  background-color: white;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.modal-dialog {\n  width: 100%;\n}\n\n#cofluencer {\n  padding-bottom: 15px;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n#cofluencer::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #000;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n"

/***/ }),

/***/ "./src/app/components/list-influencers/list-influencers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title h4\" id=\"myModalLabel\">Cofluencers list</h4>\n      <div class=\"iconMenu\" data-dismiss=\"modal\" aria-hidden=\"true\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n\n    <div class=\"modal-body\">\n      <div class=\"row container\">\n        <ul class=\"w-100\">\n          <li *ngFor=\"let influencer of companyService.confluencersList\" class=\"flex flex-middle sp-between\">\n            <app-select-cofluencer [influencer]=\"influencer\" class=\"flex flex-middle sp-around w-100\" id=\"cofluencer\"></app-select-cofluencer>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-author coButton\" data-dismiss=\"modal\" (click)='companyService.saveCofluencers()'>Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/list-influencers/list-influencers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListInfluencersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListInfluencersComponent = /** @class */ (function () {
    function ListInfluencersComponent(session, influencer, companyService, router) {
        this.session = session;
        this.influencer = influencer;
        this.companyService = companyService;
        this.router = router;
    }
    ListInfluencersComponent.prototype.ngOnInit = function () {
    };
    ListInfluencersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-influencers',
            template: __webpack_require__("./src/app/components/list-influencers/list-influencers.component.html"),
            styles: [__webpack_require__("./src/app/components/list-influencers/list-influencers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ListInfluencersComponent);
    return ListInfluencersComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".loginModal {\n  width: 100%;\n  z-index: 9999;\n}\n\n.loginForm {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.loginButton {\n  width: 100%;\n}\n\n.socialIconsLogin {\n  width: 45%;\n}\n\n.icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  color: #ffffff;\n}\n\n.facebook {\n  background-color: #3e5b98;\n}\n\n.youtube {\n  background-color: #e02a20;\n}\n\n.twitter {\n  background-color: #4da7de;\n}\n\n.separatorLine {\n  position: relative;\n}\n\n.separatorLine::after,\n.separatorLine::before {\n  content: \"\";\n  width: 42%;\n  height: 1px;\n  background-color: #a6a4a8;\n  position: absolute;\n  top: 40%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.separatorLine::after {\n  left: 10px;\n}\n\n.separatorLine::before {\n  right: 10px;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item:last-child p {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n  color: transparent;\n}\n\n.navbar-nav .nav-item:not(:last-child) .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: transparent;\n}\n\n#signupButton {\n  border-color: transparent;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#navigation {\n  z-index: -10;\n}\n\n.selectLogin span {\n  cursor: pointer;\n}\n\n.selected {\n  color: #28afb0;\n  font-weight: 700;\n  position: relative;\n}\n\n.selected:after {\n  content: '';\n  width: 50%;\n  height: 2px;\n  border-radius: 2px;\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 450px) {\n  .title {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .socialLogin {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .socialIconsLogin {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginModal h-92vh\">\n\n  <div class=\"flex flex-center flex-middle flexModal modalBg h-100x centerVertical\">\n    <div class=\"loginForm\">\n      <div class=\"container p-50\">\n        <div class=\"title flex sp-between flex-baseline flex-column\">\n          <p class=\"h1 w-100 textCenter\">Log in</p>\n          <div class=\"flex sp-around w-100 selectLogin\">\n            <span (click)=\"controlUser()\" class=\"bodyText\" [ngClass]=\"{'selected': toggleLogin}\">Brand</span>\n            <span (click)=\"controlUser()\" class=\"bodyText\" [ngClass]=\"{'selected': !toggleLogin}\">Influencer</span>\n          </div>\n        </div>\n        <div class=\"row mt-40\">\n          <div class=\"col-12 flex flex-middle sp-between socialLogin\">\n            <p class=\"bodyText colorGrey\">Use your social account:</p>\n            <div class=\"flex socialIconsLogin sp-between\">\n              <div class=\"icon facebook flex flex-middle flex-center\">\n                <span class=\"socicon-facebook\"></span>\n              </div>\n              <div class=\"icon youtube flex flex-middle flex-center\">\n                <span class=\"socicon-youtube\"></span>\n              </div>\n              <div class=\"icon twitter flex flex-middle flex-center\">\n                <span class=\"socicon-twitter\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 separatorLine mt-20\">\n            <p class=\"textCenter or bodyText colorGrey\">or</p>\n          </div>\n        </div>\n        <form class=\"row mt-40\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"formInfo.email\" name=\"email\" type=\"email\" value=\"\" placeholder=\"Your email\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"formInfo.password\" name=\"password\" type=\"password\" value=\"\" placeholder=\"Your password\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-12\">\n            <div *ngIf=\"toggleLogin\" class=\"form-group\">\n              <button (click)=\"loginBrand()\" class=\"btn btn-round btn-author loginButton h4\">Log in like brand</button>\n            </div>\n            <div *ngIf=\"!toggleLogin\" class=\"form-group\">\n              <button (click)=\"loginInfluencer()\" class=\"btn btn-round btn-author-reverse loginButton h4\">Log in like influencer</button>\n            </div>\n            <p class=\"bodyText\">No account?\n              <a (click)=\"changeModal('signup')\">Sign up</a>\n            </p>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(session, router, toaster) {
        this.session = session;
        this.router = router;
        this.toaster = toaster;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formInfo = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginBrand = function () {
        var _this = this;
        this.session
            .loginCompany(this.formInfo)
            .then(function (user) {
            _this.user = user;
            _this.router.navigate(['company', _this.user.username]);
            _this.toaster.success("" + _this.user.username, "Welcome back! \uD83C\uDF89");
        })
            .catch(function (error) {
            _this.error = error;
            if (_this.formInfo.email === '' || _this.formInfo.password === '') {
                _this.toaster.error('Please, fill all the fields to login', 'Empty fields');
            }
            else {
                // tslint:disable-next-line:max-line-length
                _this.toaster.error('Make sure you are registered and login in your role and check if the email and password are correct', 'User not found');
            }
        });
    };
    LoginComponent.prototype.loginInfluencer = function () {
        var _this = this;
        this.session
            .loginInfluencer(this.formInfo)
            .then(function (user) {
            _this.user = user;
            _this.router.navigate(['influencer', _this.user.username]);
            _this.toaster.success("" + _this.user.username, "Welcome back! \uD83C\uDF89");
        })
            .catch(function (error) {
            _this.error = error;
            if (_this.formInfo.email === '' || _this.formInfo.password === '') {
                _this.toaster.error('Please, fill all the fields to login', 'Empty fields');
            }
            else {
                // tslint:disable-next-line:max-line-length
                _this.toaster.error('Make sure you are registered and login in your role and check if the email and password are correct', 'User not found');
            }
        });
    };
    LoginComponent.prototype.closeLogin = function () {
        this.close.emit();
    };
    LoginComponent.prototype.changeModal = function (event) {
        this.change.emit(event);
    };
    LoginComponent.prototype.controlUser = function () {
        this.toggleLogin = !this.toggleLogin;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "change", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_toaster_service__["a" /* ToasterService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mobile-menu/mobile-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n"

/***/ }),

/***/ "./src/app/components/mobile-menu/mobile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mobileMenu\">\n  <nav [hidden]=\"toggleNav\" class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n        <a class=\"navbar-brand w-115\" href=\"/\" rel=\"tooltip\" data-placement=\"bottom\">\n          <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n        </a>\n        <div class=\"iconMenu\" (click)=\"closeMenu()\">\n          <span class=\"bar1\"></span>\n          <span class=\"bar2\"></span>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <ul class=\"menu container flex flex-column flex-middle mt-100\">\n    <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n      <a href=\"#influencers\" class=\"bodyTextBold capitalize colorGrey\">Influencers</a>\n    </li>\n    <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n    <a href=\"#brands\" class=\"bodyTextBold capitalize colorGrey\">Brands</a>\n    </li>\n    <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n      <a href=\"#aboutus\" class=\"bodyTextBold capitalize colorGrey\">About us</a>\n    </li>\n    <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n      <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"modalControl('login')\">Login</a>\n    </li>\n    <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n      <a class=\"bodyTextBold capitalize colorGrey\">Sign up</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mobile-menu/mobile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
    };
    MobileMenuComponent.prototype.closeMenu = function () {
        this.close.emit();
    };
    MobileMenuComponent.prototype.modalControl = function (option) {
        this.toggleNav = !this.toggleNav;
        this.modal.emit(option);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MobileMenuComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MobileMenuComponent.prototype, "modal", void 0);
    MobileMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mobile-menu',
            template: __webpack_require__("./src/app/components/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__("./src/app/components/mobile-menu/mobile-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-bg {\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n  height: 100vh;\n}\n\n.navbar {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 20px 0;\n  margin-bottom: 0;\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-bg\" [ngStyle]=\"{'background-image': 'url(../../../assets/img/home/login-brand-bg.jpg)'}\">\n  <div class=\"gradient\">\n    <nav class=\"navbar navbar-expand-lg mb-30\" color-on-scroll=\"400\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" href=\"/\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"onCloseModal()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n    \n    <app-signup *ngIf=\"optionLoginSignup === 'signup'\" (change)=\"changeModal($event)\" ></app-signup>\n    <app-login *ngIf=\"optionLoginSignup === 'login'\" (change)=\"changeModal($event)\"></app-login>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(router) {
        this.router = router;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onCloseModal = function () {
        this.closeModal.emit();
    };
    ModalComponent.prototype.changeModal = function (option) {
        if (option === 'login') {
            this.optionLoginSignup = 'login';
            this.router.navigate(['login']);
        }
        else if (option === 'signup') {
            this.optionLoginSignup = 'signup';
            this.router.navigate(['signup']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "optionLoginSignup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closeModal", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/msg-alert-delete/msg-alert-delete.component.css":
/***/ (function(module, exports) {

module.exports = ".campaignBox {\n  color: grey;\n  background-color: white;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n#cancelButton {\n  background-image: linear-gradient(137deg, rgba(68, 53, 91, .8), rgba(40, 175, 176, .8));\n}\n\n#cancelButton:hover {\n  background-image: linear-gradient(137deg, rgba(68, 53, 91, 1), rgba(40, 175, 176, 1));\n}\n\n#deleteButton {\n  color: #EE5622;\n  cursor: pointer;\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #000;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n"

/***/ }),

/***/ "./src/app/components/msg-alert-delete/msg-alert-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title h4\" id=\"myModalLabel\">Delete Message</h4>\n      <div class=\"iconMenu\" data-dismiss=\"modal\" aria-hidden=\"true\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"col-12 bodyText\">\n          Are you sure that you want to delete this message?\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary btn-round h6\" data-dismiss=\"modal\" id=\"cancelButton\">Cancel</button>\n      <button type=\"button\" class=\"h6\" data-dismiss=\"modal\" (click)='msg.deleteMessage()' id=\"deleteButton\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/msg-alert-delete/msg-alert-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgAlertDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgAlertDeleteComponent = /** @class */ (function () {
    function MsgAlertDeleteComponent(msg) {
        this.msg = msg;
    }
    MsgAlertDeleteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MsgAlertDeleteComponent.prototype, "idMessage", void 0);
    MsgAlertDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-msg-alert-delete',
            template: __webpack_require__("./src/app/components/msg-alert-delete/msg-alert-delete.component.html"),
            styles: [__webpack_require__("./src/app/components/msg-alert-delete/msg-alert-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msg_service__["a" /* MsgService */]])
    ], MsgAlertDeleteComponent);
    return MsgAlertDeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/msg-card/msg-card.component.css":
/***/ (function(module, exports) {

module.exports = ".msg-box-noread {\n  color: grey;\n  background-color: white;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.msg-box-read {\n  color: rgb(107, 107, 107);\n  background-color: rgb(235, 235, 235);\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.card-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  margin-right: 20px;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nfooter {\n  margin-top: 50px;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.bodyTextBold {\n  width: 100% !important;\n}\n\n.info-user{\n  margin-top: -15px;\n  width: 100%;\n}\n\n.icons{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.icons-noti {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin-top: -25px;\n}\n\n.icon {\n  font-size: 20px;\n  margin-left: 15px;\n}\n\n.pic-noti{\n height: 60px !important;\n margin-right: 10px;\n}\n\n.body-noti{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.icon-trash {\n  color: #EE5622;\n  cursor: pointer;\n}\n\n.icon-envelope {\n  color: #44355b;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/msg-card/msg-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.type === 'msg'\" class=\"shadow\" [ngClass]=\"!message.read?'msg-box-noread':'msg-box-read'\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"user\">\n        <div class=\"card-box\">\n        <a *ngIf=\"user.role === 'influencer'\" class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + message.from.profileImage + ')'}\" [routerLink]=\"['/company', message.from.username]\"></a>\n        <a *ngIf=\"user.role === 'company'\" class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + message.from.profileImage + ')'}\" [routerLink]=\"['/influencer', message.from.username]\"></a>\n        </div>\n        <div class=\"info-user\">\n          <div class=\"icons\">\n            <i class='icon'[ngClass]=\"message.read?'icon-envelope-open':'icon-envelope'\" (click)='msg.toggleReadMessage(message._id, message.read)'></i>\n            <i class=\"icon icon-trash\" data-toggle=\"modal\" data-target=\"#alertDeleteMsg\" (click)='msg.selectMessage(message._id)'></i>\n            <app-msg-alert-delete class=\"modal fade\" id=\"alertDeleteMsg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [idMessage]='message._id'></app-msg-alert-delete>\n          </div>\n          <h3 class=\"capitalize\">{{ message.from.name }}</h3>\n          <p>\n            <span class=\"bodyTextBold\">{{ message.created_at | date: 'dd/MM/yyyy - hh:mm' }}</span>\n          </p>\n        </div>\n      </div>\n        <p class=\"bodyTextBold w-50\">{{ message.msg }}</p>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"message.type === 'noti'\" class=\"shadow\" [ngClass]=\"!message.read?'msg-box-noread':'msg-box-read'\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"user\">\n        <div class=\"info-user\">\n          <span class=\"bodyTextBold\">{{ message.created_at | date: 'dd/MM/yyyy - hh:mm' }}</span>\n          <div class=\"icons-noti\">\n            <i class='icon' [ngClass]=\"message.read?'icon-envelope-open':'icon-envelope'\" (click)='msg.toggleReadMessage(message._id, message.read)'></i>\n            <i class=\"icon icon-trash\" data-toggle=\"modal\" data-target=\"#alertDeleteMsg\" (click)='msg.selectMessage(message._id)'></i>\n            <app-msg-alert-delete class=\"modal fade\" id=\"alertDeleteMsg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n              [idMessage]='message._id'></app-msg-alert-delete>\n          </div>\n        </div>\n      </div>\n      <div class='body-noti'>\n        <span class=\"bodyTextBold w-50 msg-noti\">{{ message.msg }}</span>\n        <a *ngIf=\"user.role === 'influencer'\" class=\"card-container d-block pic-noti\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + message.from.profileImage + ')'}\" [routerLink]=\"['/company', message.from.username]\"></a>\n        <a *ngIf=\"user.role === 'company'\" class=\"card-container d-block pic-noti\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + message.from.profileImage + ')'}\" [routerLink]=\"['/influencer', message.from.username]\"></a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/msg-card/msg-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MsgCardComponent = /** @class */ (function () {
    function MsgCardComponent(session, msg) {
        this.session = session;
        this.msg = msg;
    }
    MsgCardComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MsgCardComponent.prototype, "message", void 0);
    MsgCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-msg-card',
            template: __webpack_require__("./src/app/components/msg-card/msg-card.component.html"),
            styles: [__webpack_require__("./src/app/components/msg-card/msg-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_msg_service__["a" /* MsgService */]])
    ], MsgCardComponent);
    return MsgCardComponent;
}());



/***/ }),

/***/ "./src/app/components/msg-send/msg-send.component.css":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-color: rgba(248, 250, 253, .95);\n}\n\nnav {\n  background-color: rgba(248, 250, 253, .95);\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #1f271b;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n.iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n.createButton {\n  width: 100%;\n}\n\n.formMsg {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n"

/***/ }),

/***/ "./src/app/components/msg-send/msg-send.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Send message to {{ to.brandName || to.name}}</h4>\n      <div class=\"iconMenu\" data-dismiss=\"modal\" aria-hidden=\"true\">\n        <span class=\"bar1\"></span>\n        <span class=\"bar2\"></span>\n      </div>\n    </div>\n\n    <div class=\"modal-body\">\n      <form class=\"row mt-40\">\n        <div class=\"col-12\">\n          <div class=\"form-group\">\n            <textarea [(ngModel)]=\"message\" name=\"message\" rows=\"5\" class=\"form-control\" placeholder='Write your message here'></textarea>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"modal-footer\">\n      <!-- <button type=\"button\" class=\"btn btn-lg btn-primary btn-round\" data-dismiss=\"modal\">Cancel</button> -->\n      <button type=\"button\" class=\"btn btn-author coButton\" data-dismiss=\"modal\" (click)='sendMsg()'>Send</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/msg-send/msg-send.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgSendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgSendComponent = /** @class */ (function () {
    function MsgSendComponent(msg) {
        this.msg = msg;
    }
    MsgSendComponent.prototype.ngOnInit = function () {
    };
    MsgSendComponent.prototype.sendMsg = function () {
        this.msg.sendMsg(this.to, this.message);
        this.message = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MsgSendComponent.prototype, "to", void 0);
    MsgSendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-msg-send',
            template: __webpack_require__("./src/app/components/msg-send/msg-send.component.html"),
            styles: [__webpack_require__("./src/app/components/msg-send/msg-send.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msg_service__["a" /* MsgService */]])
    ], MsgSendComponent);
    return MsgSendComponent;
}());



/***/ }),

/***/ "./src/app/components/select-cofluencer/select-cofluencer.component.css":
/***/ (function(module, exports) {

module.exports = ".card-container {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.cofluencerName {\n  padding-left: 15px;\n  padding-top: 8px;\n}\n\n.cofluencity {\n  padding-left: 15px;\n}\n\n.icon-plus {\n  font-size: 20px;\n  padding-bottom: 6px;\n  cursor: pointer;\n  color: #28afb0\n}\n\n.icon-minus {\n  font-size: 20px;\n  padding-bottom: 6px;\n  cursor: pointer;\n  color: #44355b;\n}"

/***/ }),

/***/ "./src/app/components/select-cofluencer/select-cofluencer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n<a [routerLink]=\"['/influencer', influencer.username]\" class=\"card-container d-block shadow\" data-dismiss=\"modal\" [ngStyle]=\"{'background-image': 'url(' + influencer.profileImage + ')'}\"></a>\n\n</div>\n<p class=\"bodyTextBold cofluencerName\">{{ influencer.username }}</p>\n<p class=\"quoteText cofluencity\">90%</p>\n<i *ngIf=\"clicked\" class=\"icon-plus\" (click)=\"addCofluencer(influencer._id)\"></i>\n<i *ngIf=\"!clicked\" class=\"icon-minus\" (click)=\"removeCofluencer(influencer.id)\"></i>\n"

/***/ }),

/***/ "./src/app/components/select-cofluencer/select-cofluencer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCofluencerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectCofluencerComponent = /** @class */ (function () {
    function SelectCofluencerComponent(companyService, toaster) {
        this.companyService = companyService;
        this.toaster = toaster;
        this.clicked = true;
    }
    SelectCofluencerComponent.prototype.ngOnInit = function () {
    };
    SelectCofluencerComponent.prototype.addCofluencer = function (cofluencer) {
        this.clicked = !this.clicked;
        this.companyService.addCofluencer(cofluencer);
    };
    SelectCofluencerComponent.prototype.removeCofluencer = function (cofluencer) {
        this.clicked = !this.clicked;
        this.companyService.removeCofluencer(cofluencer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectCofluencerComponent.prototype, "influencer", void 0);
    SelectCofluencerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-cofluencer',
            template: __webpack_require__("./src/app/components/select-cofluencer/select-cofluencer.component.html"),
            styles: [__webpack_require__("./src/app/components/select-cofluencer/select-cofluencer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toaster_service__["a" /* ToasterService */]])
    ], SelectCofluencerComponent);
    return SelectCofluencerComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signupModal {\n  width: 100%;\n  z-index: 9999;\n}\n\n.signUpForm {\n  width: 500px;\n  min-height: 650px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.loginButton {\n  width: 100%;\n}\n\n.socialIconsLogin {\n  width: 45%;\n}\n\n.icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  color: #ffffff;\n}\n\n.facebook {\n  background-color: #3e5b98;\n}\n\n.youtube {\n  background-color: #e02a20;\n}\n\n.twitter {\n  background-color: #4da7de;\n}\n\n.separatorLine {\n  position: relative;\n}\n\n.separatorLine::after,\n.separatorLine::before {\n  content: \"\";\n  width: 42%;\n  height: 1px;\n  background-color: #a6a4a8;\n  position: absolute;\n  top: 40%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.separatorLine::after {\n  left: 10px;\n}\n\n.separatorLine::before {\n  right: 10px;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item:last-child p {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n  color: transparent;\n}\n\n.navbar-nav .nav-item:not(:last-child) .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: transparent;\n}\n\n#signupButton {\n  border-color: transparent;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#navigation {\n  z-index: -10;\n}\n\n.selectLogin span {\n  cursor: pointer;\n}\n\n.selected {\n  color: #28afb0;\n  font-weight: 700;\n  position: relative;\n}\n\n.selected:after {\n  content: '';\n  width: 50%;\n  height: 2px;\n  border-radius: 2px;\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n\n}\n\n@media (max-width: 450px) {\n  .title {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n\n  .socialLogin {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n\n  .socialIconsLogin {\n    width: 100%;\n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signupModal h-92vh\">\n  \n  <div class=\"flex flex-center flex-middle flexModal modalBg h-100x centerVertical mt-60\">\n    <div class=\"signUpForm\">\n      <div class=\"container p-50\">\n        <div class=\"title flex sp-between flex-baseline\">\n          <p class=\"h1\">Sign up</p>\n          <div class=\"flex sp-around w-100 selectLogin\">\n            <span (click)=\"controlUser()\" class=\"bodyText\" [ngClass]=\"{'selected': toggleSignup}\">Brand</span>\n            <span (click)=\"controlUser()\" class=\"bodyText\" [ngClass]=\"{'selected': !toggleSignup}\">Influencer</span>\n          </div>\n        </div>\n        <div class=\"row mt-40\">\n          <div class=\"col-12 flex flex-middle sp-between socialLogin\">\n            <p class=\"bodyText colorGrey\">Use your social account:</p>\n            <div class=\"flex socialIconsLogin sp-between\">\n              <div class=\"icon facebook flex flex-middle flex-center\">\n                <span class=\"socicon-facebook\"></span>\n              </div>\n              <div class=\"icon youtube flex flex-middle flex-center\">\n                <span class=\"socicon-youtube\"></span>\n              </div>\n              <div class=\"icon twitter flex flex-middle flex-center\">\n                <span class=\"socicon-twitter\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 separatorLine mt-20\">\n            <p class=\"textCenter or bodyText colorGrey\">or</p>\n          </div>\n        </div>\n        <form class=\"row mt-40\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <input type=\"text\" [(ngModel)]=\"formInfo.username\" #username=\"ngModel\" name=\"username\" value=\"\" placeholder=\"Your name\" class=\"form-control\" required minlength=\"6\">\n            </div>\n          </div>\n\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <input type=\"email\" [(ngModel)]=\"formInfo.email\" #email=\"ngModel\" name=\"email\" value=\"\" placeholder=\"Your email\" class=\"form-control\" required>\n            </div>\n          </div>\n          \n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"formInfo.password\" name=\"password\" type=\"password\" value=\"\" placeholder=\"Your password\" class=\"form-control\" required minlength=\"5\" maxlength=\"50\">\n            </div>\n            <ng2-password-strength-bar class=\"textCenter m-0\" [passwordToCheck]=\"formInfo.password\" [barLabel]=\"barLabel\" [barColors]=\"myColors\">\n            </ng2-password-strength-bar>\n          </div>\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <button [hidden]=\"!toggleSignup\" (click)=\"signupBrand()\" class=\"btn btn-round btn-author loginButton h4\">Sign up like brand</button>\n              <button [hidden]=\"toggleSignup\" (click)=\"signupInfluencer()\" class=\"btn btn-round btn-author-reverse loginButton h4\">Sign up like influencer</button>\n            </div>\n            <p class=\"bodyText\">Already have an account?\n              <a (click)=\"changeModal('login')\">Log in</a>\n            </p>\n          </div>\n          <div class=\"col-12\">\n            <p class=\"alert alert-danger\" role=\"alert\" *ngIf=\"username.errors && (username.dirty || username.touched)\" [hidden]=\"!username.errors.minlength\">\n              The username must be at least 6 characters long.\n            </p>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(session, router, toaster) {
        this.session = session;
        this.router = router;
        this.toaster = toaster;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formInfo = {
            username: '',
            email: '',
            password: ''
        };
        this.myColors = ['#EE5622', '#ECA72C', '#44355B', '#28AFB0', '#28AFB0'];
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signupBrand = function () {
        var _this = this;
        this.session
            .signupBrand(this.formInfo)
            .then(function (user) {
            _this.user = user;
            _this.router.navigate(['company', _this.user.username]);
            // tslint:disable-next-line:max-line-length
            _this.toaster.success('Please, complete your profile to take advantage of the full potential of cofluencer', "Welcome " + _this.user.username);
        })
            .catch(function (err) {
            _this.error = err;
            if (err) {
                _this.toaster.error('Change your signup info to create a new account', 'Username or email already exists');
            }
        });
    };
    SignupComponent.prototype.signupInfluencer = function () {
        var _this = this;
        this.session.signupInfluencer(this.formInfo)
            .then(function (user) {
            _this.user = user;
            _this.router.navigate(['influencer', _this.user.username]);
            // tslint:disable-next-line:max-line-length
            _this.toaster.success('Please, complete your profile to take advantage of the full potential of cofluencer', "Welcome " + _this.user.username);
        })
            .catch(function (err) {
            _this.error = err;
            if (err) {
                _this.toaster.error('Change your signup info to create a new account', 'Username or email already exists');
            }
        });
    };
    SignupComponent.prototype.closeSignup = function (event) {
        this.close.emit();
    };
    SignupComponent.prototype.changeModal = function (event) {
        this.change.emit(event);
    };
    SignupComponent.prototype.controlUser = function () {
        this.toggleSignup = !this.toggleSignup;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "change", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_toaster_service__["a" /* ToasterService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/tags/tags.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!disable'>\n  <div *ngFor='let tag of data'>\n    <span>{{ tag.value }}</span>\n  </div>\n</div>\n\n<div *ngIf='disable'>\n  <div *ngIf='data.length === 0'>\n    No tags added\n  </div>\n  <div *ngFor='let tag of data' class='container-tags'>\n    <div class='tag'>{{ tag.value }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
        this.disable = false;
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TagsComponent.prototype, "disable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TagsComponent.prototype, "data", void 0);
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__("./src/app/components/tags/tags.component.html"),
            styles: [__webpack_require__("./src/app/components/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/components/twitter-info/twitter-info.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n  width: 40px;\n  height: 40px;\n}\n\n.logo {\n  width: 190px;\n}\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nbody{\n  font-family: Sans-Serif;\n  background: #F5F8FA;\n}\n\nbody {\n  font-family: Sans-Serif;\n  background: #F5F8FA;\n}\n\n.tweet {\n  margin: 2vh auto;\n  border: 1px solid #eee;\n  padding: 25px 30px;\n  border-radius: 10px;\n  max-width: 500px;\n  background: white;\n}\n\n.tweet .follow {\n  display: block;\n  background-color: #f5f8fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f8fa));\n  background-image: linear-gradient(#fff, #f5f8fa);\n  border: 1px #e1e8ed solid;\n  border-radius: 5px;\n  color: black;\n  padding: 5px;\n  margin-top: 9px;\n  float: right;\n  text-align: center;\n  text-decoration: none;\n}\n\n.tweet .follow:hover {\n  background-color: #e1e8ed;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#e1e8ed));\n  background-image: linear-gradient(#fff, #e1e8ed);\n}\n\n.tweet .follow:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.tweet .follow i {\n  color: #55acee;\n  padding-right: 5px;\n}\n\n.tweet--user:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.tweet--user-avatar {\n  border-radius: 5px;\n  float: left;\n  margin-right: 10px;\n}\n\n.tweet--user-name {\n  font-weight: bold;\n  padding-top: 9px;\n}\n\n.tweet--user-name span {\n  font-weight: normal;\n  color: #999;\n  font-size: 0.8em;\n  display: block;\n}\n\n.tweet--body {\n  margin: 20px 0 5px;\n  font-size: 1.5em;\n}\n\n.tweet--time {\n  font-weight: normal;\n  color: #999;\n  font-size: 0.8em;\n}\n\n.tweet--actions {\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n  padding-top: 10px;\n}\n\n.tweet--actions [class*=\"fa-\"] {\n  float: right;\n  margin-left: 20px;\n  color: #999;\n}\n\n.tweet--actions [class*=\"fa-\"].fa-heart:hover {\n  color: #DD2E44;\n}\n\n.tweet--actions [class*=\"fa-\"]:hover {\n  color: #4A913C;\n  cursor: pointer;\n}\n\n.tweet--actions [class*=\"fa-\"]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.tweet--actions span {\n  color: #999;\n  font-size: 0.8em;\n  text-transform: uppercase;\n}\n\n.no-account {\n  margin: 2vh auto;\n  border: 1px solid #eee;\n  padding: 25px 30px;\n  border-radius: 10px;\n  max-width: 500px;\n  background: rgb(255, 255, 255);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n}\n\n.no-account div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.no-account p {\n  color: gray;\n}\n\ninput {\n  background-color: white;\n  text-align: center;\n}\n\n.input:focus {\n  border: 1px solid red !important;\n}\n\n.btn {\n  border-radius: 10px;\n  font-weight: 900;\n}\n\n"

/***/ }),

/***/ "./src/app/components/twitter-info/twitter-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class='logo' src=\"../../../assets/img/twitter.png\" alt=\"logo-twitter\">\n  <div *ngIf='!twitterInfo'>\n    <div *ngIf=\"rolControl\" class='no-account'>\n      <div *ngIf='!accountInput'>\n        <p>nothing to read here.. ☹️</p>\n        <button class=\"btn btn-info\" (click)=\"toggleAccount()\">Add Twitter Account!</button>\n      </div>\n      <div *ngIf='accountInput'>\n        <p> great! we need your username 🤩</p>\n        <input [(ngModel)]='accountAddUsername' name='accountAddUsername' type=\"text\" class=\"form-control ng-untouched ng-pristine ng-valid\">\n        <br>\n        <button class=\"btn btn-info\" (click)=\"saveAccount()\">Save Twitter Account!</button>\n        <p>Or\n          <span (click)=\"toggleAccount()\">\n            <b>cancel</b>\n          </span>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf='twitterInfo'>\n    <div>\n      <br>\n      <p>@{{ this.userTwitterInfo.twitterUser?.screen_name }}\n        <b>{{ this.userTwitterInfo.twitterUser?.followers_count }}</b> followers</p>\n    </div>\n    <div class=\"twitter-timeline\">\n      <div *ngFor='let tweet of this.userTwitterInfo.userTweets'>\n        <div class=\"tweet\">\n\n          <div class=\"tweet--user\">\n            <img class=\"tweet--user-avatar\" src=\"{{ tweet.user.profile_image_url }}\" alt=\"\" />\n            <div class=\"tweet--user-name\">{{ tweet.user.name }}\n              <span>@{{ this.userTwitterInfo.twitterUser.screen_name }}</span>\n            </div>\n          </div>\n\n          <p class=\"tweet--body\">{{ tweet.text }}</p>\n\n          <div class=\"tweet--time\">{{ tweet.created_at }}</div>\n\n          <div class=\"tweet--actions\">\n            <i class=\"fa fa-ellipsis-h\"></i>\n            <i class=\"fa fa-heart\"></i>\n            <i class=\"fa fa-retweet\"></i>\n            <i class=\"fa fa-reply\"></i>\n            <span>51 retweets</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/twitter-info/twitter-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_twt_datauser_service__ = __webpack_require__("./src/app/services/twt-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwitterInfoComponent = /** @class */ (function () {
    function TwitterInfoComponent(userTwitterInfo, session, companyService) {
        this.userTwitterInfo = userTwitterInfo;
        this.session = session;
        this.companyService = companyService;
        this.rolControl = false;
        this.accountInput = false;
        this.accountAddUsername = '';
    }
    TwitterInfoComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.user.role === 'influencer' ? this.rolControl = true : this.rolControl = false;
        if (this.rolControl) {
            this.twitterInfo = this.session.getUser().socialLinks.twitter;
        }
        else if (!this.rolControl) {
            this.twitterInfo = this.companyService.influencer.socialLinks.twitter;
        }
        if (this.twitterInfo) {
            this.userTwitterInfo.getInfoTwitterUser(this.twitterInfo);
        }
    };
    TwitterInfoComponent.prototype.toggleAccount = function () {
        this.accountInput = !this.accountInput;
    };
    TwitterInfoComponent.prototype.saveAccount = function () {
        var _this = this;
        this.userTwitterInfo.getInfoTwitterUser(this.accountAddUsername)
            .then(function (res) {
            if (res !== 'err') {
                _this.userTwitterInfo.addAccount(_this.accountAddUsername);
                _this.twitterInfo = _this.accountAddUsername;
            }
            else {
                _this.toggleAccount();
            }
        });
    };
    TwitterInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-twitter-info',
            template: __webpack_require__("./src/app/components/twitter-info/twitter-info.component.html"),
            styles: [__webpack_require__("./src/app/components/twitter-info/twitter-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_twt_datauser_service__["a" /* TwtDatauserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */]])
    ], TwitterInfoComponent);
    return TwitterInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/youtube-info/youtube-info.component.css":
/***/ (function(module, exports) {

module.exports = ".youtube-videos{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  border-bottom: 1px solid #eee;\n}\n\n.container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nimg{\n  width: 160px;\n}\n\niframe{\n  margin: 2vh auto;\n  -webkit-box-shadow: 12px 14px 34px -17px rgba(0, 0, 0, 1);\n          box-shadow: 12px 14px 34px -17px rgba(0, 0, 0, 1);\n}\n\n.no-account {\n  margin: 2vh auto;\n  border: 1px solid #eee;\n  padding: 25px 30px;\n  border-radius: 10px;\n  max-width: 500px;\n  background: rgb(255, 255, 255);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n}\n\n.no-account div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.no-account p {\n  color: gray;\n}\n\ninput {\n  background-color: white;\n  text-align: center;\n}\n\n.input:focus {\n  border: 1px solid red !important;\n}\n\n.btn {\n  border-radius: 10px;\n  font-weight: 900;\n}\n"

/***/ }),

/***/ "./src/app/components/youtube-info/youtube-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"../../../assets/img/youtube.png\" alt=\"logo-youtube\">\n  <div *ngIf='!youtubeInfo'>\n    <div *ngIf=\"rolControl\" class='no-account'>\n      <div *ngIf='!accountInput'>\n        <p>nothing to see here.. ☹️</p>\n        <button class=\"btn btn-danger\" (click)=\"toggleAccount()\">Add YouTube Account!</button>\n      </div>\n      <div *ngIf='accountInput'>\n        <p> great! we need your channel id 🤩</p>\n        <input [(ngModel)]='accountAddId' name='accountAddId' type=\"text\" class=\"form-control ng-untouched ng-pristine ng-valid\"><br>\n        <button class=\"btn btn-danger\" (click)=\"saveAccount()\">Save YouTube Account!</button>\n        <p>Or <span (click)=\"toggleAccount()\"><b>cancel</b></span></p>\n      </div>\n    </div>\n    <div *ngIf='!rolControl'>\n      <p>nothing to see here.. ☹️</p>\n    </div>\n  </div>\n  <div *ngIf='youtubeInfo'>\n    <div>\n      <br>\n        <p>@{{ this.userYoutubeInfo.channelInfo.snippet.channelTitle }}</p>\n        <!-- <p>{{ this.userYoutubeInfo.channelInfo.snippet.description }}</p> -->\n    </div>\n    <div class='youtube-videos'>\n      <div *ngFor='let video of this.userYoutubeInfo.videoUser'>\n        <iframe width=\"345\" height=\"200\" [src]=\"cleanURL(video)\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        <br>\n      </div>\n    </div>\n  </div>\n  <br>\n  <hr>\n</div>"

/***/ }),

/***/ "./src/app/components/youtube-info/youtube-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_youtube_datauser_service__ = __webpack_require__("./src/app/services/youtube-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeInfoComponent = /** @class */ (function () {
    function YoutubeInfoComponent(userYoutubeInfo, sanitizer, session, companyService) {
        this.userYoutubeInfo = userYoutubeInfo;
        this.sanitizer = sanitizer;
        this.session = session;
        this.companyService = companyService;
        this.rolControl = false;
        this.accountInput = false;
        this.accountAddId = '';
    }
    YoutubeInfoComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.user.role === 'influencer' ? this.rolControl = true : this.rolControl = false;
        if (this.rolControl) {
            this.youtubeInfo = this.session.getUser().socialLinks.youtube;
        }
        else if (!this.rolControl) {
            if (this.companyService.influencer.socialLinks.youtube !== '') {
                this.youtubeInfo = this.companyService.influencer.socialLinks.youtube;
            }
        }
        if (this.youtubeInfo) {
            this.userYoutubeInfo.getInfoYoutubeUser(this.youtubeInfo);
        }
    };
    YoutubeInfoComponent.prototype.cleanURL = function (oldURL) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    };
    YoutubeInfoComponent.prototype.toggleAccount = function () {
        this.accountInput = !this.accountInput;
    };
    YoutubeInfoComponent.prototype.saveAccount = function () {
        var _this = this;
        this.userYoutubeInfo.getInfoYoutubeUser(this.accountAddId)
            .then(function (res) {
            if (res !== 'err') {
                _this.userYoutubeInfo.addChannelId(_this.accountAddId);
                _this.youtubeInfo = _this.accountAddId;
            }
            else {
                _this.toggleAccount();
            }
        });
    };
    YoutubeInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-youtube-info',
            template: __webpack_require__("./src/app/components/youtube-info/youtube-info.component.html"),
            styles: [__webpack_require__("./src/app/components/youtube-info/youtube-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_youtube_datauser_service__["a" /* YoutubeDatauserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]])
    ], YoutubeInfoComponent);
    return YoutubeInfoComponent;
}());



/***/ }),

/***/ "./src/app/guards/init-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitAuthGuardService = /** @class */ (function () {
    function InitAuthGuardService(authService) {
        this.authService = authService;
    }
    InitAuthGuardService.prototype.canActivate = function () {
        return this.authService
            .me()
            .then(function (user) {
            return true;
        })
            .catch(function (error) {
            console.error(error);
            return false;
        });
    };
    InitAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], InitAuthGuardService);
    return InitAuthGuardService;
}());



/***/ }),

/***/ "./src/app/guards/require-anon-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequireAnonGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequireAnonGuardService = /** @class */ (function () {
    function RequireAnonGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RequireAnonGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.authService
            .me()
            .then(function (user) {
            if (!user) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
                return false;
            }
        })
            .catch(function (error) {
            console.error(error);
            return false;
        });
    };
    RequireAnonGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RequireAnonGuardService);
    return RequireAnonGuardService;
}());



/***/ }),

/***/ "./src/app/guards/require-user-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequireUserGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequireUserGuardService = /** @class */ (function () {
    function RequireUserGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RequireUserGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.authService
            .me()
            .then(function (user) {
            if (user) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        })
            .catch(function (error) {
            console.error(error);
            return false;
        });
    };
    RequireUserGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RequireUserGuardService);
    return RequireUserGuardService;
}());



/***/ }),

/***/ "./src/app/pages/app-page/app-page.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-color: rgba(255, 255, 255, .7);\n  color: #1f271b;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-color: rgba(255, 255, 255, 1);\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 5px !important;\n}\n\n#stats {\n  margin-bottom: 5px !important;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\nfooter {\n  margin-top: 50px;\n}\n\n.card-container {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  margin-right: 20px;\n}\n\n.card-img {\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n}\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n"

/***/ }),

/***/ "./src/app/pages/app-page/app-page.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top navbar-transparent bigNav dinamicBg\" id=\"nav\">\n    <div class=\"container-fluid fixed-top h-50 smooth\" id=\"gradient\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/app', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" onclick=\"scrollToDownload()\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My campaigns</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Search campaign</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My stats</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n    </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-info fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/campaigns/me']\" class=\"bodyTextBold capitalize colorGrey\">My campaigns</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/campaigns']\" class=\"bodyTextBold capitalize colorGrey\">Search campaings</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/app', user.username, 'edit-profile']\" class=\"bodyTextBold capitalize colorGrey\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n\n  <div class=\"wrapper\">\n    <div class=\"page-header gradient\">\n      <div class=\"page-header-image\" id=\"bgWrapper\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + user.coverImage + ')'}\">\n      </div>\n    </div>\n    <div class=\"container flex sp-between\" id=\"buttons\">\n      <button [routerLink]=\"['/campaigns']\" class=\"btn btn-lg btn-primary btn-round h4\" id=\"searchButton\">SEARCH CAMPAIGNS</button>\n      <button class=\"h4 flex sp-between w-100\" id=\"moreButton\" (click)=\"moreButtonControl()\">\n        <i [hidden]=\"toggleMoreButton\" class=\"icon-arrow-up\"></i>\n        <i [hidden]=!toggleMoreButton class=\"icon-arrow-down\"></i>\n      </button>\n    </div>\n    <div [hidden]=\"!toggleMoreButton\" id=\"insideMoreButton\" class=\"flex flex-column\">\n      <button class=\"btn btn-primary btn-round\" (click)=\"editProfile()\">edit profile</button>\n      <button (click)=\"logout()\" class=\"btn btn-primary btn-round\">logout</button>\n    </div>\n  </div>\n\n</header>\n\n<main>\n  <section class=\"container flex sp-between\" id=\"stats\">\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Campaigns</h2>\n      <p class=\"quoteText textCenter\">{{ influencer.stats.registeredCampaigns }}</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofluencity</h2>\n      <p class=\"quoteText textCenter\">90%</p>\n    </div>\n    <div class=\"flex flex-column flex-center\">\n      <h2 class=\"colorGrey introductionText textCenter\">Cofollowers</h2>\n      <p class=\"quoteText textCenter\">254</p>\n    </div>\n  </section>\n  <section id=\"info\">\n    <div class=\"container\">\n      <div class=\"user\">\n        <div class=\"card-box\">\n          <a class=\"card-container d-block\" data-parallax=\"true\" [ngStyle]=\"{'background-image': 'url(' + user.profileImage + ')'}\">\n          </a>\n        </div>\n        <div>\n          <h3>{{ session.user.name }}</h3>\n          <h3 class=\"bodyText\">{{ user.email }} | @{{ user.username }}</h3>\n        </div>\n      </div>\n      <p><tag-input class=\"tags\" [ngModel]=\"user.tags\" [ngModelOptions]=\"{standalone: true}\" theme='minimal' [removable]='false' [disable]='false' placeholder='' secondaryPlaceholder='No tags added'></tag-input></p>\n      <p class=\"bodyText\">{{ user.bio }}</p>\n    </div>\n  </section>\n</main>\n\n<app-instagram-info></app-instagram-info>\n<app-youtube-info></app-youtube-info>\n<app-twitter-info></app-twitter-info>\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/pages/app-page/app-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppPageComponent = /** @class */ (function () {
    function AppPageComponent(session, router, companyService, influencer, toaster) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.influencer = influencer;
        this.toaster = toaster;
    }
    AppPageComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.checkYoutube();
        this.checkTwitter();
        this.influencer.listMyCampaigns();
    };
    AppPageComponent.prototype.ngOnChanges = function (changes) {
        console.log('cambios: ', this.session.getUser());
    };
    AppPageComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.success("" + this.user.username, "See you! \uD83D\uDC4B\uD83C\uDFFB");
    };
    AppPageComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    AppPageComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    AppPageComponent.prototype.editProfile = function () {
        this.router.navigate(['app', this.user.username, 'edit-profile']);
    };
    AppPageComponent.prototype.checkYoutube = function () {
        if (this.user.socialLinks.youtube == null || this.user.socialLinks.youtube === '') {
            this.youtubeProfile = false;
        }
        else {
            this.youtubeProfile = true;
        }
    };
    AppPageComponent.prototype.checkTwitter = function () {
        if (this.user.socialLinks.twitter == null || this.user.socialLinks.twitter === '') {
            this.twitterProfile = false;
        }
        else {
            this.twitterProfile = true;
        }
    };
    AppPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-page',
            template: __webpack_require__("./src/app/pages/app-page/app-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/app-page/app-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], AppPageComponent);
    return AppPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/campaigns/campaigns.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.h-50 {\n  height: 53px !important;\n}\n\n.nav-short {\n  background-position: center;\n  background-size: cover;\n}\n\nbody{\n  background-color: rgba(248, 248, 248);\n  padding-top: 50px;\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header{\n    height: 10vh !important;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-color: rgba(255, 255, 255, .7);\n  color: #1f271b;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-color: rgba(255, 255, 255, 1);\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 0;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\nfooter {\n  margin-top: 50px;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.pb-5 {\n  padding-bottom: 0rem !important;\n}\n\n.noti {\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg {\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/pages/campaigns/campaigns.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top p-0 nav-short h-50\" [ngStyle]=\"{'background-image': 'url(' + user.coverImage + ')'}\">\n    <div class=\"container-fluid fixed-top gradient-opacity h-50\">\n      <div class=\"container flex\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/influencer', user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"noti\" [routerLink]=\"['/messages']\" [ngClass]=\"msg.msgNoRead !== 0 ?'new-msg':''\">\n            <span *ngIf='msg.msgNoRead !== 0'>{{ msg.msgNoRead }}</span>\n            <i *ngIf='msg.msgNoRead === 0' class=\"icon-paper-plane\"></i>\n          </div>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/campaigns/me']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My campaigns</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/campaigns']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Search campaign</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/influencer', user.username, 'edit-profile']\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My profile</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Logout</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a *ngIf='!myCampaigns' [routerLink]=\"['/campaigns/me']\" class=\"bodyTextBold capitalize colorGrey\">My campaigns</a>\n        <a *ngIf='myCampaigns' [routerLink]=\"['/campaigns']\" class=\"bodyTextBold capitalize colorGrey\">Search campaigns</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/influencer', user.username]\" class=\"bodyTextBold capitalize colorGrey\">My profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/influencer', user.username, 'edit-profile']\" class=\"bodyTextBold capitalize colorGrey\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n\n</header>\n\n<body>\n  <div class=\"container p-5\">\n    <div class=\"row pb-5\">\n      <div class=\"col-10\">\n        <!--Section heading-->\n        <h2 *ngIf='myCampaigns' class=\"font-weight-bold dark-grey-text mb-3\">Campaigns in which you have already done join.</h2>\n        <h2 *ngIf='!myCampaigns' class=\"font-weight-bold dark-grey-text mb-3\">Campaigns published by cofluencer companies.</h2>\n        <!--Section description-->\n        <p *ngIf='myCampaigns' class=\"subtitle-p grey-text\">Check the campaigns in which you are already registered and contact the company.</p>\n        <p *ngIf='!myCampaigns' class=\"subtitle-p grey-text\">Check the campaigns that match your interests and availability and contact the companies.</p>\n        <br>\n        <p>Select the categories that you find interesting!</p>\n        <app-categories-tags [(tags)]='search' [state]=\"'edit'\"></app-categories-tags>\n      </div>\n    </div>\n  </div>\n\n  <div *ngFor=\"let campaign of influencer.campaigns | filterTags:search \">\n    <app-campaign-card [campaign]='campaign'></app-campaign-card>\n  </div>\n</body>\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/pages/campaigns/campaigns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CampaignsComponent = /** @class */ (function () {
    function CampaignsComponent(influencer, session, router, companyService, toaster, msg) {
        this.influencer = influencer;
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.toaster = toaster;
        this.msg = msg;
        this.searchCat = [
            {
                value: 'tag',
                display: 'tag',
            }
        ];
        this.search = [];
    }
    CampaignsComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        if (window.location.pathname === '/campaigns') {
            this.influencer.listCampaigns();
            this.myCampaigns = false;
        }
        else if (window.location.pathname === '/campaigns/me') {
            this.influencer.listMyCampaigns();
            this.myCampaigns = true;
        }
        this.msg.checkNotifications();
    };
    CampaignsComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.success("" + this.user.username, "See you! \uD83D\uDC4B\uD83C\uDFFB");
    };
    CampaignsComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    CampaignsComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    CampaignsComponent.prototype.companyDetail = function (company) {
        this.router.navigate(['company', company]);
    };
    CampaignsComponent.prototype.campaignDetail = function (campaignId) {
        // necesito el companyName y el companyId
        this.router.navigate(['company', this.user.username, campaignId]);
    };
    CampaignsComponent.prototype.checkJoinCampaign = function (influencers) {
        var _this = this;
        if (influencers.filter(function (x) { return x._id === _this.user._id; }).length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CampaignsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-campaigns',
            template: __webpack_require__("./src/app/pages/campaigns/campaigns.component.html"),
            styles: [__webpack_require__("./src/app/pages/campaigns/campaigns.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_msg_service__["a" /* MsgService */]])
    ], CampaignsComponent);
    return CampaignsComponent;
}());



/***/ }),

/***/ "./src/app/pages/company-profile/company-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/company-profile/company-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<app-company-public *ngIf=\"user.role === 'influencer'\"></app-company-public>\n<app-company-private *ngIf=\"user.role === 'company'\"></app-company-private>\n"

/***/ }),

/***/ "./src/app/pages/company-profile/company-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(session, router, companyService, toaster) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.toaster = toaster;
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.getCampaigns();
    };
    CompanyProfileComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.info("See you soon " + this.user.username);
    };
    CompanyProfileComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    CompanyProfileComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    CompanyProfileComponent.prototype.getCampaigns = function () {
        this.companyService.campaignsList();
    };
    CompanyProfileComponent.prototype.newCampaign = function () {
        this.router.navigate(['company', this.user.username, 'new-campaign']);
    };
    CompanyProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['company', this.user.username, 'edit-profile']);
    };
    CompanyProfileComponent.prototype.campaignDetail = function (campaignId) {
        // necesito el companyName y el companyId
        this.router.navigate(['company', this.user.username, campaignId]);
    };
    CompanyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-profile',
            template: __webpack_require__("./src/app/pages/company-profile/company-profile.component.html"),
            styles: [__webpack_require__("./src/app/pages/company-profile/company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\nwidth: 100%;\nposition: relative;\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-ms-flex-pack: justify !important;\n-webkit-box-pack: justify !important;\n        justify-content: space-between !important;\n-ms-flex-align: center;\n-webkit-box-align: center;\n        align-items: center;\n-webkit-transform: translate3d(0px, 0, 0);\ntransform: translate3d(0px, 0, 0);\n-webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\ntransition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.bgImage1 {\n  background-image: url('section1.81b7ec1e272888065e8c.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.bgImage2 {\n  background-image: url('section2.e5805663e097f9e5b86a.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  margin-bottom: 5px;\n}\n\n.navbar .nav-item {\n  cursor: pointer;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item:last-child p {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item:not(:last-child) .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n  border-color: transparent;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n#mobileMenu .menu li {\n  cursor: pointer;\n}\n\n.underline {\n  position: relative;\n}\n\n.underline:after {\n  content: '';\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n  width: 25%;\n  height: 5px;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  -webkit-animation-name: widthGrow;\n          animation-name: widthGrow;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n@-webkit-keyframes widthGrow {\n  0% {\n    width: 75%;\n  }\n  50% {\n    width: 100%;\n  }\n  100% {\n    width: 75%;\n  }\n}\n\n@keyframes widthGrow {\n  0% {\n    width: 75%;\n  }\n  50% {\n    width: 100%;\n  }\n  100% {\n    width: 75%;\n  }\n}\n\n#loginButton {\n  position: relative;\n  cursor: pointer;\n}\n\n#loginButton:after {\n  content: '';\n  width: 50%;\n  height: 2px;\n  border-radius: 2px;\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n\n#loginButton:hover {\n  color: #fafafa;\n}\n\n#loginButton:hover::after {\n  width: 100%;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n\n@media (max-width: 980px) {\n\n  #navLogo {\n    width: 100%;\n  }\n\n}"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-modal [hidden]=\"!toggleModal\" [optionLoginSignup]=\"optionLoginSignup\" (closeModal)=\"onCloseModal()\"></app-modal>\n\n<header [hidden]=\"toggleModal\">\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top navbar-transparent smooth smallNav\" id=\"home-nav\">\n    <div class=\"container\">\n      <div class=\"navbar-translate\" id=\"navLogo\">\n        <a class=\"navbar-brand w-115\" href=\"/\" rel=\"tooltip\" data-placement=\"bottom\">\n          <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n        </a>\n        <div class=\"iconMenu\" (click)=\"menuControl()\">\n          <span class=\"bar1\"></span>\n          <span class=\"bar2\"></span>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n        <ul class=\"navbar-nav flex flex-middle\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" onclick=\"scrollToDownload()\">\n              <p class=\"bodyTextBold capitalize colorGrey menuLink\">Influencers</p>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\">\n              <p class=\"bodyTextBold capitalize colorGrey menuLink\">Brands</p>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\">\n              <p class=\"bodyTextBold capitalize colorGrey menuLink\">About us</p>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <div class=\"verticalSeparator\"></div>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" rel=\"tooltip\" (click)=\"modalControl('login')\">\n              <p class=\"bodyTextBold capitalize colorGrey menuLink\">Login</p>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link btn btn-primary btn-simple btn-round\" id=\"signupButton\" rel=\"tooltip\" (click)=\"modalControl('signup')\">\n            <p class=\"bodyTextBold capitalize menuLink\">Signup</p>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" href=\"/\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"menuControl()\" href=\"#influencers\" class=\"bodyTextBold capitalize colorGrey\">Influencers</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"menuControl()\" href=\"#brands\" class=\"bodyTextBold capitalize colorGrey\">Brands</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a (click)=\"menuControl()\" href=\"#aboutus\" class=\"bodyTextBold capitalize colorGrey\">About us</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"modalControl('login')\">Login</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\">Sign up</a>\n      </li>\n    </ul>\n  </div>\n  <!-- End Mobile Menu -->\n  <div class=\"wrapper\">\n    <div class=\"page-header bg-darkJungleGreen op-8\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('./assets/img/header.png');\">\n      </div>\n      <div class=\"container\">\n        <div class=\"content-center brand\">\n          <img class=\"n-logo\" src=\"./assets/img/now-logo.png\" alt=\"\">\n          <h1 id=\"homeH1\" class=\"h1-seo huge text-left\">Let your <span class=\"underline\">influence </span><span id=\"changingWord\">work.</span></h1>\n          <h2 class=\"introductionText text-left lineHeight-15\">Connect with thousands of brands and find your perfect campaign.</h2>\n          <button class=\"btn btn-lg btn-round btn-author h4 mt-40\" (click)=\"modalControl('signup')\" id=\"signupHome\">Sign up</button>\n          <a (click)=\"modalControl('login')\" class=\"h4\" id=\"loginButton\">Login</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<main [hidden]=\"toggleModal\" class=\"\">\n  <section class=\"pt-100 pb-100\" id=\"influencers\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 pt-50 sectionText\">\n          <p class=\"bodyTextBold mayus colorGrey bold\">For influencers, no doubt.</p>\n          <h2 class=\"h2\">No limits for your influence</h2>\n          <p class=\"bodyText\">Connect with the people behind the Brands you love and pitch them the right story. Across borders, beyond standards and across\n          platforms, Cofluencer is an all-in-one backoffice shaped for Influencers.</p>\n          <p>\n            <a href=\"#\" class=\"bodyTextBold\">Join to the community</a>\n          </p>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 bgImage1 h-400 w-100 br shadow sectionImage\">\n        </div>\n      </div>\n    </div>\n  </section>\n    \n  <section class=\"pt-100 pb-100 bg-greyLight\" id=\"brands\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 pt-50 sectionText\">\n          <p class=\"bodyTextBold mayus colorGrey bold\">For brands, no doubt too.</p>\n          <h2 class=\"h2\">No limits for your reach</h2>\n          <p class=\"bodyText\">Connect with the people behind the Brands you love and pitch them the right story. Across borders, beyond standards and\n            across platforms, Cofluencer is an all-in-one backoffice shaped for Influencers.</p>\n          <p>\n            <a href=\"#\" class=\"bodyTextBold\">Find your perfect influencer</a>\n          </p>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 bgImage2 h-400 w-100 br shadow sectionImage\">\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"pt-100 pb-100\" id=\"aboutus\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 pt-50 sectionText\">\n          <p class=\"bodyTextBold mayus colorGrey bold\">How it works.</p>\n          <h2 class=\"h2\">A huge marketplace</h2>\n          <p class=\"bodyText\">If you are a brand, you can create and publish campaigns, wait until the influencers checkin into your campaign, select between the different profiles, and contact them to manage the details of the activity.</p>\n          <p>\n            <a href=\"#\" class=\"bodyTextBold\">Sign up for free</a>\n          </p>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 bgImage2 h-400 w-100 br shadow sectionImage\">\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n<footer [hidden]=\"toggleModal\" class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"content-center textCenter pt-50 pb-50\">\n        <h3 class=\"h1 colorWhite textCenter mb-0\">Your influence, your brand.</h3>\n        <h3 class=\"h1 colorStil textCenter\">cofluencer.</h3>\n        <button class=\"btn btn-lg btn-primary h4\">Sign up</button>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <ul class=\"colorWhite flex sp-between w-100 b-top pt-10 pb-10\">\n      <li>\n        <a href=\"\" class=\"colorGrey bodyTextBold hoverWhite\">Influencers</a>\n      </li>\n      <li>\n        <a href=\"\" class=\"colorGrey bodyTextBold hoverWhite\">Brands</a>\n      </li>\n      <li>\n        <a href=\"\" class=\"colorGrey bodyTextBold hoverWhite\">About us</a>\n      </li>\n      <li>\n        <a href=\"\" class=\"colorGrey bodyTextBold hoverWhite\">Sign up</a>\n      </li>\n      <li>\n        <a href=\"\" class=\"colorGrey bodyTextBold hoverWhite\">Log in</a>\n      </li>\n    </ul>\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router) {
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    HomePageComponent.prototype.modalControl = function (option) {
        this.toggleModal = !this.toggleModal;
        if (option === 'login') {
            this.optionLoginSignup = 'login';
            this.router.navigate(['login']);
        }
        else if (option === 'signup') {
            this.optionLoginSignup = 'signup';
            this.router.navigate(['signup']);
        }
    };
    HomePageComponent.prototype.onCloseModal = function () {
        this.toggleModal = !this.toggleModal;
        this.router.navigate(['/']);
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/home-page/home-page.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/influencer-profile/influencer-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/influencer-profile/influencer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<app-influencer-public *ngIf=\"user.role === 'company'\"></app-influencer-public>\n<app-influencer-private *ngIf=\"user.role === 'influencer'\"></app-influencer-private>\n"

/***/ }),

/***/ "./src/app/pages/influencer-profile/influencer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfluencerProfileComponent = /** @class */ (function () {
    function InfluencerProfileComponent(session, router, companyService, influencer, toaster) {
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.influencer = influencer;
        this.toaster = toaster;
    }
    InfluencerProfileComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.checkYoutube();
        this.checkTwitter();
        this.influencer.listMyCampaigns();
    };
    InfluencerProfileComponent.prototype.ngOnChanges = function (changes) {
        console.log('cambios: ', this.session.getUser());
    };
    InfluencerProfileComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.success("" + this.user.username, "See you! \uD83D\uDC4B\uD83C\uDFFB");
    };
    InfluencerProfileComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    InfluencerProfileComponent.prototype.moreButtonControl = function () {
        this.toggleMoreButton = !this.toggleMoreButton;
    };
    InfluencerProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['app', this.user.username, 'edit-profile']);
    };
    InfluencerProfileComponent.prototype.checkYoutube = function () {
        if (this.user.socialLinks.youtube == null || this.user.socialLinks.youtube === '') {
            this.youtubeProfile = false;
        }
        else {
            this.youtubeProfile = true;
        }
    };
    InfluencerProfileComponent.prototype.checkTwitter = function () {
        if (this.user.socialLinks.twitter == null || this.user.socialLinks.twitter === '') {
            this.twitterProfile = false;
        }
        else {
            this.twitterProfile = true;
        }
    };
    InfluencerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-influencer-profile',
            template: __webpack_require__("./src/app/pages/influencer-profile/influencer-profile.component.html"),
            styles: [__webpack_require__("./src/app/pages/influencer-profile/influencer-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], InfluencerProfileComponent);
    return InfluencerProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-translate {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.h-50 {\n  height: 53px !important;\n}\n\n.nav-short {\n  background-position: center;\n  background-size: cover;\n}\n\nbody {\n  background-color: rgba(248, 248, 248);\n  padding-top: 50px;\n}\n\n.gradient {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n\n.iconMenu {\n  width: 30px;\n  margin-top: 5px;\n}\n\n#navLogo {\n  width: 50%;\n}\n\n.iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n.iconMenu .bar1 {\n  width: 80%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  margin-bottom: 5px;\n}\n\n.iconMenu:hover .bar1 {\n  width: 100%;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\n.socialFooter span {\n  font-size: 2rem;\n}\n\n.navbar-nav .nav-item:not(:last-child) {\n  margin-right: 40px;\n}\n\n.navbar-nav .nav-item .nav-link p:hover {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link p {\n  position: relative;\n}\n\n.navbar-nav .nav-item .nav-link p:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 1.5px;\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n}\n\n.navbar .nav-item .nav-link:hover {\n  background-color: transparent;\n}\n\n.verticalSeparator {\n  display: inline-block;\n  vertical-align: sub;\n  width: 2px;\n  height: 30px;\n  opacity: .1;\n  background-color: #a6a4a8;\n}\n\n.page-header {\n  height: 10vh !important;\n}\n\n.page-header .container>.content-center {\n  background-color: rebeccapurple;\n  top: 90%;\n}\n\n#buttons {\n  position: relative;\n  bottom: 100px;\n  padding: 0;\n}\n\n#searchButton {\n  background-color: rgba(255, 255, 255, .7);\n  color: #1f271b;\n  line-height: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#searchButton:hover {\n  background-color: rgba(255, 255, 255, 1);\n}\n\n#moreButton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  font-weight: bolder;\n  font-size: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n#moreButton:hover {\n  background-color: #fff;\n  color: #1f271b;\n  cursor: pointer;\n}\n\n#moreButton:hover i[class^=icon] {\n  color: #1f271b;\n}\n\ni[class^=icon] {\n  color: #fff;\n  font-size: 2rem;\n}\n\ndiv[class^=bar] {\n  width: 60%;\n  height: 3px;\n  background-color: #fff;\n}\n\n#insideMoreButton {\n  position: absolute;\n  right: 15px;\n  bottom: 80px;\n}\n\n#stats h2 {\n  margin-bottom: 0;\n}\n\n#signupButton {\n  border-color: white;\n}\n\n#signupButton:hover {\n  background-color: #28afb0;\n  border-color: #28afb0;\n}\n\n#login {\n  cursor: pointer;\n}\n\n#navLogo {\n  cursor: pointer;\n}\n\nmain {\n  margin-top: -50px;\n}\n\nsection {\n  margin-bottom: 50px;\n}\n\n/* Mobile Menu */\n\n#mobileMenu {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  background-color: rgba(18, 22, 15, .85);\n}\n\n#mobileMenu .iconMenu {\n  width: 30px;\n  margin-top: 5px;\n  cursor: pointer;\n  display: block;\n}\n\n#mobileMenu .iconMenu [class^=bar] {\n  background-color: #fff;\n  display: block;\n  height: 3px;\n  border-radius: 2px;\n}\n\n#mobileMenu .iconMenu .bar1 {\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 45% 50%;\n          transform-origin: 45% 50%;\n}\n\n#mobileMenu .iconMenu .bar2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 40% 50%;\n          transform-origin: 40% 50%;\n}\n\n@media (max-width: 980px) {\n  #navLogo {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  #buttons {\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 400px) {\n  #searchButton {\n    font-size: 1.6rem;\n    padding: 0 30px;\n  }\n}\n\nfooter {\n  margin-top: 50px;\n}\n\nh3 {\n  margin-bottom: 5px !important;\n}\n\n.pb-5 {\n  padding-bottom: 0rem !important;\n}\n\n.noti {\n  margin-left: 140px;\n  margin-top: 4px;\n}\n\n.new-msg {\n  background-color: rgb(221, 2, 2);\n  border-radius: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.campaignBox {\n  width: 100%;\n  color: grey;\n  background-color: white;\n  padding: 20px 30px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  margin: 25px;\n}\n"

/***/ }),

/***/ "./src/app/pages/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<header>\n  <nav [hidden]=\"toggleMenu\" class=\"navbar navbar-expand-lg fixed-top p-0 nav-short h-50\" [ngStyle]=\"{'background-image': 'url(' + user.coverImage + ')'}\">\n    <div class=\"container-fluid fixed-top gradient-opacity h-50\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\" id=\"navLogo\">\n          <a class=\"navbar-brand w-115\" [routerLink]=\"['/', user.role, user.username]\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"noti\" [routerLink]=\"['/messages']\" [ngClass]=\"msg.msgNoRead !== 0 ?'new-msg':''\">\n            <span *ngIf='msg.msgNoRead !== 0'>{{ msg.msgNoRead }}</span>\n            <i *ngIf='msg.msgNoRead === 0' class=\"icon-paper-plane\"></i>\n          </div>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"./assets/img/blurred-image-1.jpg\">\n          <ul class=\"navbar-nav flex flex-middle\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" onclick=\"scrollToDownload()\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My campaigns</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\">\n                <p class=\"bodyTextBold capitalize colorGrey\">Search campaign</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\">\n                <p class=\"bodyTextBold capitalize colorGrey\">My stats</p>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Mobile Menu -->\n  <div [hidden]=\"!toggleMenu\" id=\"mobileMenu\">\n    <nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\">\n      <div class=\"container\">\n        <div class=\"navbar-translate flex sp-between w-100 flex-middle\">\n          <a class=\"navbar-brand w-115\" rel=\"tooltip\" data-placement=\"bottom\">\n            <img src=\"../../../assets/img/brand/logo-light.png\" alt=\"logo-cofluencer\">\n          </a>\n          <div class=\"iconMenu\" (click)=\"menuControl()\">\n            <span class=\"bar1\"></span>\n            <span class=\"bar2\"></span>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <ul class=\"menu container flex flex-column flex-middle mt-100\">\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/', user.role, user.username]\" class=\"bodyTextBold capitalize colorGrey\">My profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a [routerLink]=\"['/', user.role, user.username, 'edit-profile']\" class=\"bodyTextBold capitalize colorGrey\">Edit profile</a>\n      </li>\n      <li class=\"pb-20 mt-20 w-100 b-bottomThin\">\n        <a class=\"bodyTextBold capitalize colorGrey\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<body>\n  <div class=\"container p-5\">\n    <div class=\"row pb-5\">\n      <div class=\"col-10\">\n        <!--Section heading-->\n        <h2 class=\"font-weight-bold dark-grey-text mb-3\">Messages & Notifications.</h2>\n        <!--Section description-->\n        <p class=\"subtitle-p grey-text\">Check your messages and notifications, they can be important!</p>\n          <div *ngIf='msg.numMessages === 0'>\n            <br><br>\n            <div class=\"campaignBox shadow\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  At the moment you do not have messages or notifications in your mailbox!\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngFor='let message of msg.messages'>\n    <app-msg-card [message]='message'></app-msg-card>\n  </div>\n\n</body>\n\n<footer class=\"bg-darkJungleGreen\">\n  <div class=\"container\">\n    <div class=\"flex flex-center socialFooter pt-50\">\n      <span class=\"icon-social-facebook colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-twitter colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-instagram colorGrey pr-10 pl-10\"></span>\n      <span class=\"icon-social-youtube colorGrey pr-10 pl-10\"></span>\n    </div>\n  </div>\n  <div class=\"bg-darkJungleGreen pt-50 pb-10 flex flex-center flex-middle\">\n    <p class=\"bodyText colorGrey textCenter\">©2018 cofluencer</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/pages/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_influencer_service__ = __webpack_require__("./src/app/services/influencer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(influencer, session, router, companyService, toaster, msg) {
        this.influencer = influencer;
        this.session = session;
        this.router = router;
        this.companyService = companyService;
        this.toaster = toaster;
        this.msg = msg;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.user = this.session.getUser();
        this.msg.checkNotifications();
        this.msg.getMessagesUser();
    };
    MessagesComponent.prototype.logout = function () {
        this.session.logout();
        this.router.navigate(['/']);
        this.toaster.success("" + this.user.username, "See you! \uD83D\uDC4B\uD83C\uDFFB");
    };
    MessagesComponent.prototype.menuControl = function () {
        this.toggleMenu = !this.toggleMenu;
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/pages/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/pages/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_influencer_service__["a" /* InfluencerService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_msg_service__["a" /* MsgService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter-tags.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterTagsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterTagsPipe = /** @class */ (function () {
    function FilterTagsPipe() {
    }
    FilterTagsPipe.prototype.transform = function (items, value) {
        if (!items) {
            return [];
        }
        if (!value || value === 'undefined' || value.length === 0) {
            return items;
        }
        var itmesRes = [];
        items.forEach(function (item) {
            value.forEach(function (val) {
                if (item.tags.includes(val)) {
                    itmesRes.push(item);
                }
            });
        });
        return itmesRes;
    };
    FilterTagsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterTags',
            pure: false,
        })
    ], FilterTagsPipe);
    return FilterTagsPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.userChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.API_URL = 'http://localhost:3000/auth';
        this.userChange$ = this.userChange.asObservable();
    }
    AuthService.prototype.setUser = function (user) {
        this.user = user;
        this.userChange.next(user);
        return user;
    };
    AuthService.prototype.me = function () {
        var _this = this;
        var options = {
            withCredentials: true
        };
        return this.httpClient.get(this.API_URL + "/me", options)
            .toPromise()
            .then(function (user) { return _this.setUser(user); })
            .catch(function (err) {
            if (err.status === 404) {
                _this.setUser();
            }
        });
    };
    AuthService.prototype.loginCompany = function (user) {
        var _this = this;
        var options = {
            withCredentials: true
        };
        return this.httpClient.post(this.API_URL + "/login/company", user, options)
            .toPromise()
            .then(function (data) { return _this.setUser(data); });
    };
    AuthService.prototype.loginInfluencer = function (user) {
        var _this = this;
        var options = {
            withCredentials: true
        };
        return this.httpClient.post(this.API_URL + "/login/influencer", user, options)
            .toPromise()
            .then(function (data) { return _this.setUser(data); });
    };
    AuthService.prototype.signupBrand = function (user) {
        var _this = this;
        var options = {
            withCredentials: true
        };
        return this.httpClient.post(this.API_URL + "/brand/signup", user, options)
            .toPromise()
            .then(function (data) { return _this.setUser(data); });
    };
    AuthService.prototype.signupInfluencer = function (user) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.post(this.API_URL + "/influencer/signup", user, options)
            .toPromise()
            .then(function (data) { return _this.setUser(data); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var options = {
            withCredentials: true
        };
        return this.httpClient.post(this.API_URL + "/logout", {}, options)
            .toPromise()
            .then(function () { return _this.setUser(); });
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.private = function () {
        var options = {
            withCredentials: true
        };
        return this.httpClient.get(this.API_URL + "/private", options)
            .toPromise();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__youtube_datauser_service__ = __webpack_require__("./src/app/services/youtube-datauser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twt_datauser_service__ = __webpack_require__("./src/app/services/twt-datauser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompanyService = /** @class */ (function () {
    function CompanyService(httpClient, session, route, toaster, msg, router, youtubeInfo, twitterInfo) {
        this.httpClient = httpClient;
        this.session = session;
        this.route = route;
        this.toaster = toaster;
        this.msg = msg;
        this.router = router;
        this.youtubeInfo = youtubeInfo;
        this.twitterInfo = twitterInfo;
        this.campaigns = [];
        this.influencer = {
            username: String,
            coverImage: String,
            followers: Array,
            socialLinks: {
                youtube: String,
            },
        };
        this.user = {
            username: String,
            coverImage: String,
            followers: Array,
        };
        this.cofluencersSelected = [];
        this.confluencersList = [];
        this.API_URL = 'http://localhost:3000/api';
    }
    CompanyService.prototype.campaignsList = function () {
        var _this = this;
        var options = {
            withCredentials: true
        };
        return this.httpClient.get(this.API_URL + "/campaigns", options)
            .toPromise()
            .then(function (campaigns) {
            _this.campaigns = campaigns;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.campaign = function (campaignId) {
        var options = {
            withCredentials: true,
        };
        return this.httpClient.get(this.API_URL + "/campaigns/edit/" + campaignId, options)
            .toPromise()
            .then(function (campaign) {
            return campaign;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.campaignByCompany = function (companyName) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.get(this.API_URL + "/campaigns/" + companyName, options)
            .toPromise()
            .then(function (campaigns) {
            _this.campaigns = campaigns;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.createCampaign = function (formCampaign) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.post(this.API_URL + "/newcampaign", formCampaign, options)
            .toPromise()
            .then(function (newCampaign) { return _this.newCampaign = newCampaign; })
            .catch(function (err) {
            console.log(err);
        });
    };
    CompanyService.prototype.updateUser = function (userForm) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        console.log(userForm);
        return this.httpClient.put(this.API_URL + "/update-user", userForm, options)
            .toPromise()
            .then(function (updatedUser) {
            _this.user = updatedUser;
            return _this.user;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.updateCampaign = function (campaignForm, campaignId) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.put(this.API_URL + "/" + campaignId + "/update-campaign", campaignForm, options)
            .toPromise()
            .then(function (updatedCampaign) {
            _this.updatedCampaign = updatedCampaign;
            return _this.updatedCampaign;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.selectCampaign = function (campaignId, campaignTitle) {
        if (campaignTitle === undefined) {
            this.campaignSelected = campaignId;
        }
        else {
            this.campaignSelected = campaignId;
            this.campaignTitle = campaignTitle;
        }
    };
    CompanyService.prototype.selectInfluencers = function (influencers) {
        this.confluencersList = influencers;
    };
    CompanyService.prototype.deleteCampaign = function () {
        var _this = this;
        console.log('deleteeeee: ', this.campaignSelected);
        var options = {
            withCredentials: true,
        };
        return this.httpClient.delete(this.API_URL + "/" + this.campaignSelected + "/delete-campaign", options)
            .toPromise()
            .then(function (deletedCampaign) {
            _this.toaster.success('Campaign has been successfully deleted! 🤙🏻');
            _this.campaignsList();
            _this.router.navigate(['company', _this.user.username]);
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.getCompany = function (companyId) {
        var options = {
            withCredentials: true,
        };
        return this.httpClient.get(this.API_URL + "/company/" + companyId, options)
            .toPromise()
            .then(function (companyDB) {
            return companyDB;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.getInfluencer = function (influencer) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.get(this.API_URL + "/company/" + influencer, options)
            .toPromise()
            .then(function (influencerDB) {
            _this.influencer = influencerDB;
            if (influencerDB.socialLinks.youtube === null || influencerDB.socialLinks.youtube === '') {
                console.log('notiene');
            }
            else {
                _this.youtubeInfo.getInfoYoutubeUser(influencerDB.socialLinks.youtube);
            }
            _this.twitterInfo.getInfoTwitterUser(influencerDB.socialLinks.twitter);
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.followInfluencer = function (influencerId) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.put(this.API_URL + "/follow/" + influencerId, {}, options)
            .toPromise()
            .then(function () {
            _this.checkFollowButton();
            _this.getInfluencer(_this.influencer.username);
            _this.msg.sendNoti(influencerId, _this.user.brandName + " has started to follow you!");
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.unfollowInfluencer = function (influencerId) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.put(this.API_URL + "/unfollow/" + influencerId, {}, options)
            .toPromise()
            .then(function () {
            _this.getInfluencer(_this.influencer.username);
            _this.checkFollowButton();
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.checkFollowButton = function () {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.get(this.API_URL + "/user/me", options)
            .toPromise()
            .then(function (user) {
            _this.user = user;
            if (user.influencersFavs.indexOf(_this.influencer._id) === -1) {
                _this.followButtonState = false;
            }
            else {
                _this.followButtonState = true;
            }
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    CompanyService.prototype.addCofluencer = function (cofluencer) {
        this.cofluencersSelected.push(cofluencer);
    };
    CompanyService.prototype.removeCofluencer = function (cofluencer) {
        var cofluencerIndex = this.cofluencersSelected.indexOf(cofluencer);
        if (cofluencerIndex > -1) {
            this.cofluencersSelected.splice(cofluencerIndex, 1);
        }
    };
    CompanyService.prototype.saveCofluencers = function (cofluencersSelected) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        this.cofluencersSelected.forEach(function (cofluencer) {
            return _this.httpClient.put(_this.API_URL + "/campaigns/save-cofluencers", {
                cofluencerId: cofluencer,
                campaignId: _this.campaignSelected,
            }, options)
                .toPromise()
                .then(function (cofluencers) {
                _this.msg.sendNoti(cofluencer, "Congrat's, " + _this.user.username + " has selected you for the campaign " + _this.campaignTitle + " \u270C\uFE0F");
            })
                .catch(function (err) {
                if (err.status === 404) {
                    console.log(err);
                }
            });
        });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_6__msg_service__["a" /* MsgService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__youtube_datauser_service__["a" /* YoutubeDatauserService */],
            __WEBPACK_IMPORTED_MODULE_8__twt_datauser_service__["a" /* TwtDatauserService */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/services/ig-datauser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgDatauserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IgDatauserService = /** @class */ (function () {
    function IgDatauserService(http) {
        this.http = http;
    }
    IgDatauserService.prototype.getInfoInstaUser = function () {
        return this.http.get('http://localhost:3000/api/ig/emeeneu')
            .map(function (res) { return res.json(); });
    };
    IgDatauserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], IgDatauserService);
    return IgDatauserService;
}());



/***/ }),

/***/ "./src/app/services/influencer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__msg_service__ = __webpack_require__("./src/app/services/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfluencerService = /** @class */ (function () {
    function InfluencerService(httpClient, session, toaster, msg) {
        this.httpClient = httpClient;
        this.session = session;
        this.toaster = toaster;
        this.msg = msg;
        this.stats = {
            registeredCampaigns: Number,
            cofluencity: Number,
        };
        this.companyDetail = {
            username: String,
            coverImage: String,
            followers: Array,
        };
        this.companyCampaigns = '';
        this.options = {
            withCredentials: true,
        };
        this.API_URL = 'http://localhost:3000/api';
    }
    InfluencerService.prototype.updateUser = function (userForm) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.put(this.API_URL + "/update-user", userForm, options)
            .toPromise()
            .then(function (updatedUser) {
            _this.user = updatedUser;
            return _this.user;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.listCampaigns = function () {
        var _this = this;
        this.user = this.session.getUser();
        return this.httpClient.get(this.API_URL + "/list-campaigns", this.options)
            .toPromise()
            .then(function (listCampaigns) {
            _this.campaigns = listCampaigns.reverse();
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.listMyCampaigns = function () {
        var _this = this;
        this.user = this.session.getUser();
        return this.httpClient.get(this.API_URL + "/list-my-campaigns", this.options)
            .toPromise()
            .then(function (listCampaigns) {
            _this.campaigns = listCampaigns;
            _this.stats.registeredCampaigns = Object.keys(listCampaigns).length;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.getCompany = function (companyParams) {
        var _this = this;
        return this.httpClient.get(this.API_URL + "/company/" + companyParams, this.options)
            .toPromise()
            .then(function (theCompany) {
            _this.companyDetail = theCompany;
            return _this.httpClient.get(_this.API_URL + "/campaigns/" + _this.companyDetail.username, _this.options)
                .toPromise()
                .then(function (campaigns) {
                _this.companyCampaigns = campaigns;
            })
                .catch(function (err) {
                if (err.status === 404) {
                    console.log(err);
                }
            });
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.joinCampaign = function (idCampaign) {
        var _this = this;
        return this.httpClient.put(this.API_URL + "/campaigns/join/" + idCampaign, {}, this.options)
            .toPromise()
            .then(function (res) {
            if (window.location.pathname === '/campaigns') {
                _this.listCampaigns();
            }
            else if (window.location.pathname === '/campaigns/me') {
                _this.listMyCampaigns();
            }
            else if (window.location.pathname === "/company/" + _this.companyDetail.username) {
                _this.getCompany(_this.companyDetail.username);
            }
            _this.msg.sendNoti(res.company_id, "Cofluencer " + _this.user.name + " is interested in your campaign " + res.title + "!");
            _this.toaster.success("Registered correctly, good luck! \uD83E\uDD19\uD83C\uDFFB");
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.outCampaign = function (idCampaign) {
        var _this = this;
        return this.httpClient.put(this.API_URL + "/campaigns/out/" + idCampaign, {}, this.options)
            .toPromise()
            .then(function (res) {
            if (window.location.pathname === '/campaigns') {
                _this.listCampaigns();
            }
            else if (window.location.pathname === '/campaigns/me') {
                _this.listMyCampaigns();
            }
            else if (window.location.pathname === "/company/" + _this.companyDetail.username) {
                _this.getCompany(_this.companyDetail.username);
            }
            _this.toaster.success('Removed from this campaign 🤭');
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.followCompany = function (companyId) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.put(this.API_URL + "/follow/" + companyId, {}, options)
            .toPromise()
            .then(function () {
            _this.checkFollowButton();
            _this.getCompany(_this.companyDetail.username);
            _this.msg.sendNoti(companyId, _this.user.name + " has started to follow you!");
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.unfollowCompany = function (companyId) {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.put(this.API_URL + "/unfollow/" + companyId, {}, options)
            .toPromise()
            .then(function () {
            _this.getCompany(_this.companyDetail.username);
            _this.checkFollowButton();
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService.prototype.checkFollowButton = function () {
        var _this = this;
        var options = {
            withCredentials: true,
        };
        return this.httpClient.get(this.API_URL + "/user/me", options)
            .toPromise()
            .then(function (user) {
            _this.user = user;
            if (user.companiesFavs.indexOf(_this.companyDetail._id) === -1) {
                _this.followButtonState = false;
            }
            else {
                _this.followButtonState = true;
            }
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    InfluencerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_5__msg_service__["a" /* MsgService */]])
    ], InfluencerService);
    return InfluencerService;
}());



/***/ }),

/***/ "./src/app/services/msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MsgService = /** @class */ (function () {
    function MsgService(httpClient, session, toaster) {
        this.httpClient = httpClient;
        this.session = session;
        this.toaster = toaster;
        this.msgNoRead = 0;
        this.options = {
            withCredentials: true,
        };
        this.API_URL = 'http://localhost:3000/api';
    }
    MsgService.prototype.sendMsg = function (to, message) {
        var _this = this;
        console.log(to, message);
        var messageContent = {
            to: to._id,
            message: message,
            type: 'msg',
        };
        return this.httpClient.post(this.API_URL + "/send-msg", messageContent, this.options)
            .toPromise()
            .then(function (res) {
            _this.toaster.success("Your message has been sent correctly! \uD83D\uDE80");
        })
            .catch(function (err) {
            _this.toaster.error("Your message could not be sent... \uD83C\uDD98");
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    ;
    MsgService.prototype.sendNoti = function (to, message) {
        var messageContent = {
            to: to,
            message: message,
            type: 'noti',
        };
        return this.httpClient.post(this.API_URL + "/send-msg", messageContent, this.options)
            .toPromise()
            .then(function (res) {
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    ;
    MsgService.prototype.checkNotifications = function () {
        var _this = this;
        return this.httpClient.get(this.API_URL + "/user/me", this.options)
            .toPromise()
            .then(function (updatedUser) {
            _this.msgNoRead = 0;
            updatedUser.messages.forEach(function (msg) {
                if (msg.read === false) {
                    _this.msgNoRead++;
                }
            });
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    ;
    MsgService.prototype.getMessagesUser = function () {
        var _this = this;
        return this.httpClient.get(this.API_URL + "/messages/me", this.options)
            .toPromise()
            .then(function (messagesUser) {
            _this.messages = messagesUser.reverse();
            _this.numMessages = messagesUser.length;
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    MsgService.prototype.selectMessage = function (idMessage) {
        this.messageSelected = idMessage;
    };
    MsgService.prototype.deleteMessage = function () {
        var _this = this;
        return this.httpClient.put(this.API_URL + "/messages/delete/" + this.messageSelected, {}, this.options)
            .toPromise()
            .then(function (updateUser) {
            console.log(updateUser);
            _this.getMessagesUser();
            _this.checkNotifications();
            _this.toaster.success('This message has been successfully deleted! 🤙🏻');
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    MsgService.prototype.toggleReadMessage = function (idMessage, read) {
        var _this = this;
        return this.httpClient.put(this.API_URL + "/messages/read/" + idMessage, { read: read }, this.options)
            .toPromise()
            .then(function () {
            _this.getMessagesUser();
            _this.checkNotifications();
        })
            .catch(function (err) {
            if (err.status === 404) {
                console.log(err);
            }
        });
    };
    MsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], MsgService);
    return MsgService;
}());



/***/ }),

/***/ "./src/app/services/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterService = /** @class */ (function () {
    function ToasterService() {
        this.setting();
    }
    ToasterService.prototype.success = function (title, message) {
        toastr.success(title, message);
    };
    ToasterService.prototype.warning = function (title, message) {
        toastr.warning(title, message);
    };
    ToasterService.prototype.error = function (title, message) {
        toastr.error(title, message);
    };
    ToasterService.prototype.info = function (title, message) {
        toastr.info(title, message);
    };
    ToasterService.prototype.setting = function () {
        toastr.options = {
            'closeButton': false,
            'debug': false,
            'newestOnTop': true,
            'progressBar': false,
            'positionClass': 'toast-top-center',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '6000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    };
    ToasterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/services/twt-datauser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwtDatauserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwtDatauserService = /** @class */ (function () {
    function TwtDatauserService(httpClient, toaster) {
        this.httpClient = httpClient;
        this.toaster = toaster;
        this.twitterUser = {
            profile_image_url: '',
        };
        this.userTweets = [];
        this.options = {
            withCredentials: true,
        };
        this.API_URL = 'http://localhost:3000/api';
    }
    TwtDatauserService.prototype.getInfoTwitterUser = function (user) {
        var _this = this;
        this.twitterUser = {};
        this.userTweets = [];
        return this.httpClient.get(this.API_URL + "/twt/" + user)
            .toPromise()
            .then(function (data) {
            _this.twitterUser = data.user[0];
            _this.userTweets = [];
            for (var i = 0; i < 3; i++) {
                _this.userTweets.push(data.tweets[i]);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TwtDatauserService.prototype.addAccount = function (username) {
        var _this = this;
        return this.httpClient.put(this.API_URL + "/twt/add-account", { username: username }, this.options)
            .toPromise()
            .then(function (res) {
            _this.toaster.success("Your account has been added correctly! \uD83D\uDE0E");
        })
            .catch(function (error) {
            _this.toaster.error("Your account could not be updated... \uD83E\uDD28");
            console.log(error);
        });
    };
    TwtDatauserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__services_toaster_service__["a" /* ToasterService */]])
    ], TwtDatauserService);
    return TwtDatauserService;
}());



/***/ }),

/***/ "./src/app/services/youtube-datauser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeDatauserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__ = __webpack_require__("./src/app/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeDatauserService = /** @class */ (function () {
    function YoutubeDatauserService(httpClient, sanitizer, toaster) {
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.toaster = toaster;
        this.channelInfo = {
            snippet: {
                channelTitle: '',
                description: '',
            }
        };
        this.videoUser = [];
        this.options = {
            withCredentials: true,
        };
        this.API_URL = 'http://localhost:3000/api';
    }
    YoutubeDatauserService.prototype.getInfoYoutubeUser = function (yt_user) {
        var _this = this;
        return this.httpClient.get(this.API_URL + "/youtube/" + yt_user)
            .toPromise()
            .then(function (data) {
            _this.channelInfo = data.result.items[0];
            _this.youTubeUser = data.result.items.slice(1);
            _this.videoUser = [];
            _this.youTubeUser.forEach(function (video) {
                var url = 'https://www.youtube.com/embed/';
                var videoId = video.id.videoId;
                var urlDone = url + videoId;
                _this.videoUser.push(urlDone);
            });
        })
            .catch(function (err) {
            _this.toaster.error("The code added is wrong \uD83E\uDD28 Try again.");
            console.log(err);
            return 'err';
        });
    };
    ;
    YoutubeDatauserService.prototype.addChannelId = function (channelId) {
        var _this = this;
        return this.httpClient.put(this.API_URL + "/youtube/add-account", { channelId: channelId }, this.options)
            .toPromise()
            .then(function (res) {
            _this.toaster.success("Your account has been added correctly! \uD83D\uDE0E");
        })
            .catch(function (error) {
            _this.toaster.error("Your account could not be updated... \uD83E\uDD28");
            console.log(error);
        });
    };
    YoutubeDatauserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service__["a" /* ToasterService */]])
    ], YoutubeDatauserService);
    return YoutubeDatauserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map