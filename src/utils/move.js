import invariant from 'invariant';
import { navigate } from './constants';
import VIEWS from '../Views';

export default function moveDate(action, date, View, today) {
  View = typeof View === 'string' ? VIEWS[View] : View;

  switch (action) {
    case navigate.TODAY:
      date = today || new Date()
      break;
    case navigate.DATE:
      break;
    default:
      invariant(View && typeof View.navigate === 'function',
        'Calendar View components must implement a static `.navigate(date, action)` method.s')
      date = View.navigate(date, action)
  }
  return date
}
