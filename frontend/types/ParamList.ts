import { BookingEntity } from "../entities/BookingEntity";

export type ParamList = {
    List: undefined,
    Add: undefined,
    Edit: { booking: BookingEntity},
    Delete: undefined,
    Tab: undefined,
}