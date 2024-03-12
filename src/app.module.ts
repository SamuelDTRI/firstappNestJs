import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';


@Module({            //decorador/convertir una clase, ewste va a agragr cierta funcionalidades
  imports: [TasksModule],       //funcionalidad extra base de datos etc 
  controllers: [], //aparte tener todas las rutas GET/POST ETC
  providers: [],  //Funciones con base de datos por ejemplo que use luego 
})
export class AppModule {}
