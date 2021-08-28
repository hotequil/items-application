import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent{
    @Input() message = 'Sem resultados encontrados';
    @Input() icon = 'list';
    @Input() description = 'Cadastre um registro e ele aparecerá aqui';
}
