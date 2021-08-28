import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'lista',
        loadChildren: () => import('./modules/list/list.module').then(module => module.ListModule),
        data: {
            toolbar: "Listagem"
        }
    },
    {
        path: 'criacao',
        loadChildren: () => import('./modules/save/save.module').then(module => module.SaveModule),
        data: {
            toolbar: "Criação"
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'lista'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
