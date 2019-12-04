import { NgModule } from '@angular/core';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
        LoginContainerComponent,
        LoginComponent
    ],
    providers: []
})
export class AuthModule {}
