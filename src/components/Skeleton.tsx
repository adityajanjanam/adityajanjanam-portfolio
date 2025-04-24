import React from 'react';

interface SkeletonProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
  circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  count = 1,
  height = '1rem',
  width = '100%',
  circle = false
}) => {
  const skeletons = Array(count).fill(0);

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${className} ${
            circle ? 'rounded-full' : 'rounded'
          }`}
          style={{
            height,
            width: circle ? height : width
          }}
        />
      ))}
    </>
  );
};

export const ProjectSkeleton: React.FC = () => (
  <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <Skeleton width="2rem" height="2rem" circle />
        <div>
          <Skeleton width="8rem" height="1.5rem" className="mb-2" />
          <Skeleton width="6rem" height="1rem" />
        </div>
      </div>
      <Skeleton width="2rem" height="2rem" circle />
    </div>
    <Skeleton height="3rem" className="mb-4" />
    <div className="grid grid-cols-2 gap-2 mb-4">
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
    </div>
    <div className="flex flex-wrap gap-2">
      <Skeleton width="4rem" height="1.5rem" />
      <Skeleton width="4rem" height="1.5rem" />
      <Skeleton width="4rem" height="1.5rem" />
    </div>
  </div>
);

export const ExperienceSkeleton: React.FC = () => (
  <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
      <div>
        <Skeleton width="12rem" height="1.5rem" className="mb-2" />
        <Skeleton width="8rem" height="1rem" />
      </div>
      <Skeleton width="6rem" height="1.5rem" className="mt-2 sm:mt-0" />
    </div>
    <div className="space-y-2 mb-4">
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
    </div>
    <div className="flex flex-wrap gap-2">
      <Skeleton width="5rem" height="1.5rem" />
      <Skeleton width="5rem" height="1.5rem" />
      <Skeleton width="5rem" height="1.5rem" />
    </div>
  </div>
);

export default Skeleton; 