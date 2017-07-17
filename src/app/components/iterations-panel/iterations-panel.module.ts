import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ng2-bootstrap';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {
  WidgetsModule
} from 'ngx-widgets';

import { DragulaModule } from 'ng2-dragula';
import { FabPlannerIterationModalComponent } from '../iterations-modal/iterations-modal.component';
import { MyDatePickerModule } from 'mydatepicker';
import { IterationComponent } from './iterations-panel.component';
import { IterationService } from '../../services/iteration.service';
import { ModalModule } from 'ngx-modal';
import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CollapseModule,
    CommonModule,
    DragulaModule,
    FormsModule,
    MyDatePickerModule,
    ModalModule,
    TooltipModule.forRoot(),
    TruncateModule,
    WidgetsModule,
    RouterModule
  ],
  declarations: [
    FabPlannerIterationModalComponent,
    IterationComponent
  ],
  exports: [IterationComponent],
  providers: [BsDropdownConfig, IterationService, TooltipConfig]
})
export class IterationModule { }
