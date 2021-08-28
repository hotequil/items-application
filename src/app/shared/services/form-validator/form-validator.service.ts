import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

type Error = { key: string, message: string };

@Injectable({
    providedIn: 'root'
})
export class FormValidatorService {
    private static readonly ERRORS: Error[] = [
        { key: 'required', message: 'Campo é obrigatório' },
        { key: 'maxlength', message: 'Tamanho máximo ultrapassado' },
        { key: 'shouldBeBiggerOrEqualToday', message: 'A data deve ser maior ou igual ao dia de hoje' },
        { key: 'shouldNotBeBiggerThanExpirationDate', message: 'A data deve ser menor ou igual do que a data de validade' },
    ];

    static disableButton(form: FormGroup): boolean{
        return !form || form.pristine || form.invalid;
    }

    static isFieldInvalid(field: FormControl|AbstractControl): boolean{
        return field && field.touched && field.invalid;
    }

    static setError(field: FormControl|AbstractControl): string{
        let message = '';

        FormValidatorService.ERRORS.every(error => {
            if(field?.errors?.[error.key]){
                message = error.message;

                return false;
            }

            return true;
        });

        return message;
    }

    static today(): Date{
        const date = new Date();

        date.setHours(0, 0, 0, 0);

        return date;
    }

    static resetHours(date: Date): void{
        date.setHours(0, 0, 0, 0);
    }

    static isInstanceOfDate(date: any): boolean{
        return date instanceof Date;
    }

    static filterDateBiggerOrEqualToday = (date: Date): boolean => {
        if(!FormValidatorService.isInstanceOfDate(date)){
            date = new Date(date);

            FormValidatorService.resetHours(date);
        }

        return FormValidatorService.today() <= date;
    };

    static shouldBeBiggerOrEqualToday(control: AbstractControl): ValidationErrors|null{
        if(
            control.value &&
            !FormValidatorService.filterDateBiggerOrEqualToday(control.value)
        ) return { shouldBeBiggerOrEqualToday: true };

        return null;
    }

    static shouldNotBeBiggerThanExpirationDate(expirationField: FormControl){
        return (control: AbstractControl): ValidationErrors|null => {

            if(control?.value && expirationField?.value){
                const controlDate = new Date(control.value);
                const expirationDate = new Date(expirationField.value);

                controlDate.setHours(0, 0, 0, 0);
                expirationDate.setHours(0, 0, 0, 0);

                if(expirationDate < controlDate) return { shouldNotBeBiggerThanExpirationDate: true }

                return null;
            }

            return null;
        };
    }
}
