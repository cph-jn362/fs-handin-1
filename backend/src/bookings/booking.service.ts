import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './models/booking.entity';
import { NewBookingDTO } from './models/new-booking.dto';
import { UpdateBookingDTO } from './models/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity)
    private readonly bookingRepository: Repository<BookingEntity>,
  ) {}

  async createBooking(newBookingDTO: NewBookingDTO) {
    return await this.bookingRepository.save(newBookingDTO);
  }

  async findAllBookings() {
    return await this.bookingRepository.find();
  }

  async updateBooking(id: number, updateBookingDTO: UpdateBookingDTO) {
    return await this.bookingRepository.update(id, updateBookingDTO);
  }

  async deleteBooking(id: number) {
    return await this.bookingRepository.delete(id);
  }
}
