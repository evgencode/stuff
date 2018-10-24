import * as React from 'react';
import { wrapDisplayName } from 'recompose';
import { PermissionsConsumer } from '@app/providers/permissions';
import { Error } from '@app/pages/Error';

const WithPermissions = (permissions: string[] = []) => {
  return (Component: React.ComponentType) => {
    Component.displayName = wrapDisplayName(Component, 'WithPermissions');
    return (props: any) => (
      <PermissionsConsumer>{
        ({ hasPermissions }) => {
          return hasPermissions(permissions) ? <Component {...props}/>  : <Error.Forbidden />;
        }}
      </PermissionsConsumer>
    );
  };
};

export default WithPermissions;
