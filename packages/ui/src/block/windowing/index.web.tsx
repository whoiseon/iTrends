import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { Fragment } from 'react';

import { WindowingProps } from './shared';

export function Windowing<T>(props: WindowingProps<T>) {
  const rowVirtualizer = useWindowVirtualizer({
    ...props.web,
    paddingStart: 56,
    paddingEnd: 60,
  });

  return rowVirtualizer.getVirtualItems().map((virtualRow) => {
    const isLastItem = virtualRow.index === props.web.count - 1;

    if (!props.data) {
      return null;
    }

    return (
      <Fragment key={virtualRow.index}>
        {props.web.renderItem({
          ...virtualRow,
          ...(props.data && { item: props.data[virtualRow.index] }),
          isLastItem,
        })}
        {isLastItem && (
          <div
            key={virtualRow.index + 1}
            style={{
              height: 52,
              left: 0,
              top: 0,
              position: 'absolute',
              transform: `translateY(${virtualRow.end}px)`,
              width: '100%',
            }}
          />
        )}
      </Fragment>
    );
  });
}
