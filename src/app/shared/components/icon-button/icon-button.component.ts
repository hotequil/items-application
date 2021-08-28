import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { ButtonType } from '../../types/button-type';

@Component({
    selector: 'app-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
    @Output() clickIn = new EventEmitter();
    @Input() text = '';
    @Input() icon = '';
    @Input() color!: ThemePalette;
    @Input() type: ButtonType = 'button';
    @Input() disabled = false;
}
