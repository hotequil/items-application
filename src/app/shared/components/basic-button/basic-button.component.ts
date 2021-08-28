import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { ButtonType } from '../../types/button-type';

@Component({
    selector: 'app-basic-button',
    templateUrl: './basic-button.component.html',
    styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent {
    @Output() clickIn = new EventEmitter();
    @Input() text = '';
    @Input() type: ButtonType = 'button';
    @Input() color!: ThemePalette;
    @Input() disabled = false;
}
