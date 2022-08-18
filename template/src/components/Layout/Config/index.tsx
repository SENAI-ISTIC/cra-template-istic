import { lazy, Suspense } from 'react';
import { SuspenseLoading } from './components';
import { LayoutConfigProps } from './types';

const PrivateLayout = lazy(() => import('../Private'));
const PublicLayout = lazy(() => import('../Public'));

const LayoutConfig: React.FC<LayoutConfigProps> = ({ type }) => {
  if (type === 'private') {
    return (
      <Suspense fallback={<SuspenseLoading />}>
        <PrivateLayout />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<SuspenseLoading />}>
      <PublicLayout />
    </Suspense>
  );
};

export default LayoutConfig;
