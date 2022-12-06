import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks() {
    return TASKS
  }

}