import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [AuthModule, UsersModule, ItemsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
