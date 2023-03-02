import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingController } from "./booking.controller";
import { BookingService } from "./booking.service";
import { BookingEntity } from "./models/booking.entity";

@Module({
    imports: [TypeOrmModule.forFeature([BookingEntity])],
    providers: [BookingService],
    controllers: [BookingController],
})
export class BookingModule {}