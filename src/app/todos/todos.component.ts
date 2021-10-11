import {Component,OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public searchString = '';
  public loading: boolean = true;

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(()=> {
      this.loading = false;
    })
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }
  onDelete(id: number) {
    this.todosService.onDeleteService(id)
  }
}
