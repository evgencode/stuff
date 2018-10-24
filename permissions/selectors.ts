import * as R from 'ramda';
import { createSelector } from 'reselect';

const userPermissions = () => R.prop('userPermissions');

export const hasPermissions = (checkedPermissions: string[] = []) => createSelector(
  userPermissions(),
  (permissions: string[] = []) =>
  checkedPermissions.reduce((prev: boolean, next: string) => {
    return prev && permissions.includes(next);
  }, !!checkedPermissions.length),
);
