    import { NgModule } from '@angular/core';
    import { HeaderComponent } from './header/header.component';
    import { HomeComponent } from './home/home.component';
    import { AppRoutingModule } from '../app-routing.module';
    import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { ShopingListService } from '../shopping-list/shopping-list.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptors';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

    @NgModule({
    declarations:
    [   
        HeaderComponent,
        HomeComponent,
    ],
    imports:
    [
        AppRoutingModule,
        SharedModule
    ],
    exports:
    [
        AppRoutingModule,
        HeaderComponent,
    ],
    providers:
    [
        ShopingListService, 
        AuthService,
        RecipeService,
        DataStorageService,
        AuthGuard,
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}, 
        {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}
    ]
    })
    export class CoreModule{

    }