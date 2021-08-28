import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    constructor(private snackBar: MatSnackBar){}

    open(message: string): void{
        const reference = this.snackBar.open(
            message,
            'Fechar',
            {
                direction: 'ltr',
                duration: 4000,
                verticalPosition: "bottom"
            }
        );

        reference.onAction()
                 .pipe(take(1))
                 .subscribe(() => reference.dismiss());
    }
}
