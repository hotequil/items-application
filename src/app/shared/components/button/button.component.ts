import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ButtonType } from '../../types/button-type';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
    @Output() clickIn = new EventEmitter();
    @Input() text = '';
    @Input() href = '';
    @Input() type: ButtonType = 'button';
    @Input() disabled = false;
}
