import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NewBookingDTO } from './models/new-booking.dto';
import { UpdateBookingDTO } from './models/update-booking.dto';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  create(@Body() newBookingDTO: NewBookingDTO) {
    return this.bookingService.createBooking(newBookingDTO);
  }

  @Get()
  findAll() {
    return this.bookingService.findAllBookings();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBookingDTO: UpdateBookingDTO) {
    return this.bookingService.updateBooking(id, updateBookingDTO);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number){
    return this.bookingService.deleteBooking(id);
  }
}
