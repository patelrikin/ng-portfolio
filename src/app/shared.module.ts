import { NgModule, ModuleWithProviders } from '@angular/core';
import { DataService } from './data.service';

@NgModule({})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ DataService ]
        };
    }
}
