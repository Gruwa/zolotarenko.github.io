import {Car} from '../car.model';

export interface AppState { // общий интерфейс стейта
  carPage: { // сейчас в стейте только один объект с даннымипоодной области(например это может страница лоузи лоудинга или адна активити)
    cars: Car[]
  };
}
