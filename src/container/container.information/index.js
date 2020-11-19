import Branch from './container.branch'
import Destination from './container.destination';

/**
 * other
 */
import ItemType from './container.other.itemtype';
import ExpressType from './container.other.expresstypes';
import Carrier from './container.other.carriers';

/**
 * Quotation
 */
import Interval from './container.interval'

export const OtherInformation = {
    ItemType: ItemType,
    ExpressType: ExpressType,
    Carrier: Carrier,
}

export const Quotation = {
    Interval: Interval
}

export {
    Branch,
    Destination
}