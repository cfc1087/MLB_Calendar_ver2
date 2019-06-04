import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//primeng components
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DatePipe } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                DialogComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FullCalendarModule,
                MatDialogModule,
                MatButtonModule,
                BrowserAnimationsModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
                MatCardModule,
                MatSelectModule,
                FormsModule
            ],
            exports: [
                MatDialogModule,
                MatButtonModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
                MatCardModule,
                MatSelectModule
            ],
            entryComponents: [
                DialogComponent,
            ],
            providers: [
                DatePipe,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map