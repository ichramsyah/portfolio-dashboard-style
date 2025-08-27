import React from 'react';

const MessageSkeleton = ({ align = 'start' }) => {
  const alignment = align === 'end' ? 'justify-end' : 'justify-start';
  const flexDirection = align === 'end' ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`flex w-full animate-pulse ${alignment}`}>
      <div className={`flex items-start gap-2 ${flexDirection}`}>
        {/* Avatar Skeleton */}
        <div className="w-10 h-10 rounded-full bg-gray-3 dark:bg-gray-7 self-start"></div>
        <div className="flex flex-col gap-2 mt-1">
          {/* Username Skeleton */}
          <div className="h-4 w-24 bg-gray-3 dark:bg-gray-7 rounded-md"></div>
          {/* Message Bubble Skeleton */}
          <div className="h-10 w-48 max-w-xs bg-gray-3 dark:bg-gray-7 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
