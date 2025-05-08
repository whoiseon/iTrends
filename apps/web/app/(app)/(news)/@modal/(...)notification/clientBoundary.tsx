'use client';

import { GetApiNotificationsResult } from '@itrends/api';
import { ESTIMATED_ITEM_SIZE, FixedItem, Text, View } from '@itrends/ui';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

interface ClientBoundaryProps {
  data: GetApiNotificationsResult;
}

export default function ClientBoundary({ data }: ClientBoundaryProps) {
  const count = data.payload.length;
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count,
    estimateSize: () => ESTIMATED_ITEM_SIZE,
    getScrollElement: () => parentRef.current,
  });

  return (
    <View className="w-full h-dvh bg-black/40 backdrop-filter z-50">
      <View className="absolute bottom-0 left-0 right-0 bg-white dark: bg-stone-800">
        <Text>Notification</Text>
        <div
          ref={parentRef}
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            overflow: 'auto',
            position: 'relative',
            width: '100%',
          }}
        >
          {rowVirtualizer.getVirtualItems().map(({ size, start, index }) => (
            <FixedItem
              key={data.payload[index].title}
              item={data.payload[index]}
              isLastItem={count - 1 === index}
              isWeb={true}
              style={{
                height: size,
                position: 'absolute',
                transform: `translateY(${start}px)`,
              }}
            />
          ))}
        </div>
      </View>
    </View>
  );
}
