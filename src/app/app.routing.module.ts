import { ArrayToRequestsComponent } from './components/array-to-requests/array-to-requests.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/parallel-tasks/tasks-list/tasks-list.component';

const routes: Route[] = [
    {
        path: 'todos',
        component: TodosListComponent
    },
    {
        path: 'tasks',
        component: TaskListComponent
    },
    {
        path: 'multiple-obs',
        component: ArrayToRequestsComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}