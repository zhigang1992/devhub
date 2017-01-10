// @flow

import React from 'react';
import { List } from 'immutable';

import Columns from './_Columns';
import NotificationColumnContainer from '../../containers/NotificationColumnContainer';
import type { ActionCreators, Column as ColumnType } from '../../utils/types';

export default class extends React.PureComponent {
  props: {
    actions: ActionCreators,
    columns: Array<ColumnType>,
  };

  renderRow = (column) => {
    if (!column) return null;
    
    const columnId = column.get('id');
    if (!columnId) return null;

    const { actions, errors } = this.props;

    return (
      <NotificationColumnContainer
        key={`notification-column-container-${columnId}`}
        actions={actions}
        column={column}
        icon={column.get('icon')}
        title={column.get('title')}
        {...(column.get('column') || {})}
      />
    );
  };

  render() {
    const { actions, columns = List(), ...props } = this.props;

    return (
      <Columns
        key="notification-columns"
        actions={actions}
        columns={columns}
        renderRow={this.renderRow}
        {...props}
      />
    );
  }
}